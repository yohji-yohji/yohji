# Yoji Site

这是一个带 Node.js 服务端入口的静态作品集项目，默认监听 `7878`。

## 本地启动

```bash
npm start
```

访问：

```text
http://127.0.0.1:7878
```

健康检查：

```text
http://127.0.0.1:7878/health
```

## Linux 部署

1. 把项目上传到服务器，例如 `/var/www/yoji`
2. 安装 Node.js 18+
3. 进入项目目录执行：

```bash
npm start
```

如果需要长期后台运行，推荐使用 `systemd`。

## systemd 后台常驻

项目内置了服务文件模板：

`deploy/yoji.service`

在服务器上执行：

```bash
sudo cp deploy/yoji.service /etc/systemd/system/yoji.service
sudo systemctl daemon-reload
sudo systemctl enable --now yoji
sudo systemctl status yoji
```

## 常用命令

查看日志：

```bash
sudo journalctl -u yoji -f
```

重启服务：

```bash
sudo systemctl restart yoji
```
