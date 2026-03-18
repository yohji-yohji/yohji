const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const { URL } = require("node:url");

const HOST = process.env.HOST || "0.0.0.0";
const PORT = Number.parseInt(process.env.PORT || "7878", 10);
const ROOT_DIR = __dirname;
const INDEX_FILE = path.join(ROOT_DIR, "index.html");

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
};

function sendJson(req, res, statusCode, payload) {
  const body = JSON.stringify(payload);

  res.writeHead(statusCode, {
    "Content-Length": Buffer.byteLength(body),
    "Content-Type": "application/json; charset=utf-8",
  });

  if (req.method === "HEAD") {
    res.end();
    return;
  }

  res.end(body);
}

function sendFile(req, res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || "application/octet-stream";

  fs.stat(filePath, (statErr, stats) => {
    if (statErr || !stats.isFile()) {
      sendJson(req, res, 404, { error: "Not Found" });
      return;
    }

    res.writeHead(200, {
      "Cache-Control": ext === ".html" ? "no-cache" : "public, max-age=3600",
      "Content-Length": stats.size,
      "Content-Type": contentType,
    });

    if (req.method === "HEAD") {
      res.end();
      return;
    }

    const stream = fs.createReadStream(filePath);
    stream.on("error", () => {
      if (!res.headersSent) {
        sendJson(req, res, 500, { error: "File Read Error" });
        return;
      }

      res.destroy();
    });
    stream.pipe(res);
  });
}

function resolveRequestPath(urlPathname) {
  const decodedPath = decodeURIComponent(urlPathname);
  const safePath = path.normalize(decodedPath).replace(/^(\.\.[/\\])+/, "");
  const requestedPath = path.join(ROOT_DIR, safePath);

  if (!requestedPath.startsWith(ROOT_DIR)) {
    return null;
  }

  return requestedPath;
}

const server = http.createServer((req, res) => {
  if (req.method !== "GET" && req.method !== "HEAD") {
    sendJson(req, res, 405, { error: "Method Not Allowed" });
    return;
  }

  const requestUrl = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);

  if (requestUrl.pathname === "/health") {
    sendJson(req, res, 200, {
      status: "ok",
      port: PORT,
      uptime: Math.round(process.uptime()),
    });
    return;
  }

  const resolvedPath = resolveRequestPath(requestUrl.pathname);

  if (!resolvedPath) {
    sendJson(req, res, 403, { error: "Forbidden" });
    return;
  }

  fs.stat(resolvedPath, (statErr, stats) => {
    if (!statErr && stats.isFile()) {
      sendFile(req, res, resolvedPath);
      return;
    }

    if (!statErr && stats.isDirectory()) {
      const nestedIndex = path.join(resolvedPath, "index.html");
      fs.access(nestedIndex, fs.constants.R_OK, (nestedErr) => {
        if (!nestedErr) {
          sendFile(req, res, nestedIndex);
          return;
        }

        sendFile(req, res, INDEX_FILE);
      });
      return;
    }

    sendFile(req, res, INDEX_FILE);
  });
});

server.listen(PORT, HOST, () => {
  console.log(`Yoji brand site running at http://${HOST}:${PORT}`);
});

function shutdown(signal) {
  console.log(`Received ${signal}, shutting down...`);
  server.close((err) => {
    if (err) {
      console.error("Shutdown error:", err);
      process.exit(1);
      return;
    }

    process.exit(0);
  });
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
