import "./styles.css";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import * as THREE from "three";

import { getInitialLocale, siteContent } from "./content";
import { getImageAsset } from "./image-assets";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

const app = document.querySelector("#app");

const state = {
  locale: getInitialLocale(),
  introPlayed: false,
  lenis: null,
  cleanups: [],
  scene: null,
};

const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

function renderSplitLines(lines, className = "") {
  return `
    <span class="split-lines ${className}">
      ${lines
        .map(
          (line) => `
            <span class="split-line">
              <span class="split-line-inner">${line}</span>
            </span>
          `,
        )
        .join("")}
    </span>
  `;
}

function renderSplitChars(lines, className = "") {
  return `
    <span class="split-lines ${className}">
      ${lines
        .map((line) => {
          const chars = Array.from(line)
            .map((char) => {
              const content = char === " " ? "&nbsp;" : char;
              return `
                <span class="split-char">
                  <span class="split-char-inner">${content}</span>
                </span>
              `;
            })
            .join("");

          return `
            <span class="split-line">
              <span class="split-line-chars">${chars}</span>
            </span>
          `;
        })
        .join("")}
    </span>
  `;
}

function renderActions(actions) {
  return actions
    .map(
      ({ label, href, variant }) => `
        <a class="button button--${variant}" href="${href}" data-scroll>${label}</a>
      `,
    )
    .join("");
}

function renderMetrics(metrics) {
  return metrics
    .map(
      ({ value, label }) => `
        <li class="hero-metric js-fade">
          <strong>${value}</strong>
          <span>${label}</span>
        </li>
      `,
    )
    .join("");
}

function renderHeroPillars(pillars) {
  return pillars
    .map(
      ({ title, body }) => `
        <article class="pillar-row js-fade">
          <strong>${title}</strong>
          <p>${body}</p>
        </article>
      `,
    )
    .join("");
}

function renderHeroLinks(links) {
  return links
    .map(
      ({ label, value, href }) => `
        <a class="hero-link" href="${href}" target="_blank" rel="noreferrer">
          <span>${label}</span>
          <strong>${value}</strong>
        </a>
      `,
    )
    .join("");
}

function renderManifestThumbs(thumbs, cursorLabel) {
  return thumbs
    .map(
      ({ code, title, body }, index) => `
        <button
          class="thumb-card thumb-card--${index + 1} js-fade ${index === 0 ? "is-active" : ""}"
          type="button"
          data-scene-focus="${index}"
          data-cursor="${cursorLabel}"
        >
          <span class="thumb-card__code">${code}</span>
          <strong>${title}</strong>
          <span>${body}</span>
        </button>
      `,
    )
    .join("");
}

function renderCaseLinks(links) {
  if (!links.length) {
    return "";
  }

  return `
    <div class="case-card__links">
      ${links
        .map(
          ({ label, href }) => `
            <a class="case-link" href="${href}" target="_blank" rel="noreferrer">
              ${label}
            </a>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderCases(cases, cursorLabel) {
  return cases
    .map(
      ({ tone, year, client, title, description, stats, chips, links, media }, index) => {
        const initialMedia = media[0];
        const initialAsset = getImageAsset(initialMedia.imageKey, state.locale);

        return `
        <article
          class="case-card case-card--${tone} js-fade"
          data-depth-card
          data-scene-focus="${index + 1}"
          data-cursor="${cursorLabel}"
        >
          <div class="case-card__stage">
            <div class="case-card__halo"></div>
            <div class="case-preview" data-case-preview aria-hidden="true">
              <div class="case-preview__frame">
                <div class="case-preview__topline">
                  <span class="case-preview__label" data-preview-label>${initialMedia.label}</span>
                  <span class="case-preview__index">${String(index + 1).padStart(2, "0")}</span>
                </div>
                <div class="case-preview__media">
                  <img
                    class="case-preview__image"
                    data-preview-image
                    src="${initialAsset.src}"
                    alt="${initialAsset.alt || initialMedia.title}"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div class="case-preview__footer">
                  <h3 data-preview-title>${initialMedia.title}</h3>
                  <div class="case-preview__tags" data-preview-tags>
                    ${initialMedia.lines.map((line) => `<span>${line}</span>`).join("")}
                  </div>
                </div>
              </div>
            </div>
            ${media
              .map(
                ({ label, title: mediaTitle, lines, imageKey }, mediaIndex) => {
                  const asset = getImageAsset(imageKey, state.locale);

                  return `
                  <div class="case-panel-shell case-panel-shell--${mediaIndex + 1}" data-depth="${0.11 + mediaIndex * 0.06}">
                    <div
                      class="case-panel"
                      data-fan-panel
                      data-panel-index="${mediaIndex}"
                      tabindex="0"
                    >
                      <span class="case-panel__label">${label}</span>
                      <div class="case-panel__image-wrap">
                        <img
                          class="case-panel__image"
                          src="${asset.src}"
                          alt="${asset.alt || mediaTitle}"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div class="case-panel__copy">
                        <h3>${mediaTitle}</h3>
                        <div class="case-panel__tags">
                          ${lines.map((line) => `<span>${line}</span>`).join("")}
                        </div>
                      </div>
                    </div>
                  </div>
                `;
                },
              )
              .join("")}
          </div>

          <div class="case-card__content">
            <div class="case-card__meta">
              <span>${year}</span>
              <span>${client}</span>
            </div>
            <h3 class="case-card__title">${renderSplitLines(title)}</h3>
            <p>${description}</p>

            <ul class="case-card__stats">
              ${stats
                .map(
                  ({ value, label }) => `
                    <li>
                      <strong>${value}</strong>
                      <span>${label}</span>
                    </li>
                  `,
                )
                .join("")}
            </ul>

            <div class="case-card__chips">
              ${chips.map((chip) => `<span>${chip}</span>`).join("")}
            </div>

            ${renderCaseLinks(links)}
          </div>
        </article>
      `;
      },
    )
    .join("");
}

function renderExperience(items, openLabel) {
  return items
    .map(
      ({ period, company, role, summary, bullets, tags, links }, index) => `
        <article class="history-item ${index === 0 ? "is-open" : ""} js-fade" data-accordion>
          <button class="history-item__button" type="button" data-accordion-trigger data-cursor="${openLabel}">
            <span class="history-item__period">${period}</span>
            <span class="history-item__company">${company}</span>
            <span class="history-item__role">${role}</span>
            <span class="history-item__toggle"></span>
          </button>

          <div class="history-item__content" data-accordion-panel>
            <p>${summary}</p>
            <ul>
              ${bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
            </ul>
            <div class="history-item__tags">
              ${tags.map((tag) => `<span>${tag}</span>`).join("")}
            </div>
            ${
              links.length
                ? `
                  <div class="history-item__links">
                    ${links
                      .map(
                        ({ label, href }) => `
                          <a href="${href}" target="_blank" rel="noreferrer">${label}</a>
                        `,
                      )
                      .join("")}
                  </div>
                `
                : ""
            }
          </div>
        </article>
      `,
    )
    .join("");
}

function renderMilestones(items) {
  return items
    .map(
      ({ value, label, body }) => `
        <article class="milestone-card js-fade">
          <strong>${value}</strong>
          <span>${label}</span>
          <p>${body}</p>
        </article>
      `,
    )
    .join("");
}

function renderSkills(items) {
  return items
    .map(
      ({ label, value }) => `
        <div class="skill-row js-fade">
          <div class="skill-row__meta">
            <span>${label}</span>
            <span>${value}%</span>
          </div>
          <div class="skill-row__track">
            <span class="skill-row__fill" style="width:${value}%"></span>
          </div>
        </div>
      `,
    )
    .join("");
}

function renderMarquee(items) {
  const repeated = [...items, ...items];
  return repeated.map((item) => `<span>${item}</span>`).join("");
}

function renderTalkSteps(steps) {
  const optionalLabel = state.locale === "zh" ? "（选填）" : "(optional)";

  return steps
    .map((step, index) => {
      if (step.type === "options") {
        return `
          <div class="talk-step ${index === 0 ? "is-active" : ""}" data-talk-step data-step-index="${index}" data-step-key="${step.key}" data-step-type="options">
            <label>${step.prompt}</label>
            <div class="talk-step__options">
              ${step.options
                .map(
                  (option) => `
                    <button type="button" class="talk-option" data-talk-option="${option}">${option}</button>
                  `,
                )
                .join("")}
            </div>
          </div>
        `;
      }

      const fieldTag = step.type === "textarea" ? "textarea" : "input";
      const hint = step.optional ? ` <span class="talk-step__optional">${optionalLabel}</span>` : "";
      const fieldId = `talk-field-${step.key}`;
      const inputType = step.key === "email" ? "email" : "text";
      const extraAttributes =
        fieldTag === "input"
          ? `type="${inputType}" name="${step.key}" id="${fieldId}" aria-label="${step.prompt}" ${inputType === "email" ? 'inputmode="email" autocomplete="email"' : 'autocomplete="off"'}`
          : `name="${step.key}" id="${fieldId}" aria-label="${step.prompt}" rows="3"`;

      return `
        <div class="talk-step ${index === 0 ? "is-active" : ""}" data-talk-step data-step-index="${index}" data-step-key="${step.key}" data-step-type="${step.type}">
          <label for="${fieldId}">${step.prompt}${hint}</label>
          <div class="talk-step__input">
            <${fieldTag}
              class="talk-field"
              ${extraAttributes}
              placeholder="${step.placeholder}"
            ></${fieldTag}>
            <span class="talk-step__enter">ENTER</span>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderDirectLinks(items) {
  return items
    .map(
      ({ label, value, href }) => `
        <a class="direct-card" href="${href}" ${href.startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""}>
          <span>${label}</span>
          <strong>${value}</strong>
        </a>
      `,
    )
    .join("");
}

function renderFooterLinks(items) {
  return items
    .map(
      ({ label, href }) => `
        <a href="${href}" ${href.startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""}>${label}</a>
      `,
    )
    .join("");
}

function createTemplate(data) {
  return `
    <div class="site-shell">
      ${
        state.introPlayed
          ? ""
          : `
            <section class="preloader">
              <div class="preloader__inner">
                <div class="preloader__word">${renderSplitLines(data.preloader.top, "preloader__word-lines")}</div>
                <div class="preloader__grid">
                  ${data.preloader.cards
                    .map(
                      (item, index) => `
                        <div class="preloader__card preloader__card--${(index % 4) + 1}">
                          <span>${item}</span>
                        </div>
                      `,
                    )
                    .join("")}
                </div>
                <div class="preloader__word preloader__word--bottom">${renderSplitLines(data.preloader.bottom, "preloader__word-lines")}</div>
                <p class="preloader__caption">${data.preloader.caption}</p>
              </div>
            </section>
          `
      }

      <div class="cursor" aria-hidden="true">
        <div class="cursor__dot"></div>
        <div class="cursor__pill"><span>${data.ui.discover}</span></div>
      </div>

      <div class="scene-shell" data-scene-shell>
        <canvas class="scene-shell__canvas" aria-hidden="true"></canvas>
      </div>

      <header class="navbar">
        <div class="navbar__inner">
          <a class="navbar__brand" href="#top" data-scroll>
            <span class="navbar__name">${data.brand.name}</span>
            <span class="navbar__role">${data.brand.role}</span>
          </a>

          ${data.nav
            .map(
              ({ label, href }) => `
                <a class="navbar__link" href="${href}" data-scroll data-nav-link="${href}">
                  <span class="navbar__link-dot"></span>
                  <span>${label}</span>
                </a>
              `,
            )
            .join("")}

          <div class="locale-switch">
            <button class="locale-switch__button ${state.locale === "zh" ? "is-active" : ""}" type="button" data-set-locale="zh">${data.ui.localeZh}</button>
            <button class="locale-switch__button ${state.locale === "en" ? "is-active" : ""}" type="button" data-set-locale="en">${data.ui.localeEn}</button>
          </div>
        </div>
      </header>

      <main class="page-root" id="top">
        <section class="hero section theme-light" data-theme="light">
          <div class="section__inner hero__layout">
            <div class="hero__headline">
              <p class="section__eyebrow hero__eyebrow js-fade">${data.hero.eyebrow}</p>

              <div class="hero__title-wrap">
                <h1 class="hero__title" data-animate="hero-title">${renderSplitChars(data.hero.title, "hero__title-chars")}</h1>
                <div class="scene-slot scene-slot--hero" data-scene-slot="hero" data-radius="30"></div>
              </div>

              <div class="hero__stripes" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <aside class="hero__aside">
              <div class="hero-summary js-fade">
                <div class="hero-summary__topline">
                  <span>PROFILE / 2026</span>
                  <span class="status-pill">OPEN</span>
                </div>

                <div class="hero-summary__intro">
                  ${data.hero.summary.map((line) => `<p>${line}</p>`).join("")}
                </div>

                <div class="hero-summary__title">${renderSplitLines(data.hero.noteTitle)}</div>
                <p class="hero-summary__body">${data.hero.noteBody}</p>

                <div class="hero__actions js-fade">
                  ${renderActions(data.hero.actions)}
                </div>

                <div class="hero-summary__pillars">
                  ${renderHeroPillars(data.hero.pillars)}
                </div>

                <div class="hero-summary__links">
                  ${renderHeroLinks(data.hero.links)}
                </div>
              </div>
            </aside>
          </div>

          <div class="section__inner">
            <ul class="hero__metrics">
              ${renderMetrics(data.hero.metrics)}
            </ul>
          </div>
        </section>

        <section class="manifesto section theme-dark" data-theme="dark">
          <div class="manifesto__sticky">
            <div class="section__inner manifesto__layout">
              <div class="manifesto__head">
                <p class="section-pill">${data.manifesto.eyebrow}</p>
                <h2 class="manifesto__title js-split-scroll">${renderSplitLines(data.manifesto.title)}</h2>
              </div>

              <div class="manifesto__body js-fade">
                ${data.manifesto.body.map((line) => `<p>${line}</p>`).join("")}
              </div>

              <div class="manifesto__stage">
                <div class="scene-slot scene-slot--stage" data-scene-slot="stage" data-radius="36"></div>
                <div class="manifesto__thumbs">
                  ${renderManifestThumbs(data.manifesto.thumbs, data.ui.discover)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="featured section theme-dark" id="work" data-theme="dark">
          <div class="section__inner featured__intro">
            <div class="featured__label js-fade">
              <p class="section-pill">${data.work.label}</p>
            </div>

            <div class="featured__copy">
              <h2 class="section-head__title section-head__title--dark js-split-scroll">${renderSplitLines(data.work.title)}</h2>
              <p class="js-fade">${data.work.body}</p>
              <div class="scene-slot scene-slot--featured" data-scene-slot="featured" data-radius="28"></div>
            </div>
          </div>

          <div class="section__inner">
            <div class="case-list">
              ${renderCases(data.work.cases, data.ui.discover)}
            </div>
          </div>
        </section>

        <section class="resume section theme-light" id="experience" data-theme="light">
          <div class="section__inner resume__layout">
            <div class="resume__main">
              <p class="section-pill section-pill--light js-fade">${data.experience.label}</p>
              <h2 class="section-head__title js-split-scroll">${renderSplitLines(data.experience.title)}</h2>
              <p class="resume__lede js-fade">${data.experience.body}</p>

              <div class="history-list">
                ${renderExperience(data.experience.items, data.ui.open)}
              </div>
            </div>

            <aside class="resume__side" id="signals">
              <p class="section-pill section-pill--light js-fade">${data.signals.label}</p>
              <h2 class="section-head__title js-split-scroll">${renderSplitLines(data.signals.title)}</h2>
              <p class="resume__side-lede js-fade">${data.signals.body}</p>

              <div class="resume__milestones">
                ${renderMilestones(data.signals.milestones)}
              </div>

              <div class="signals__skills">
                ${renderSkills(data.signals.skills)}
              </div>

              <div class="signals__marquee">
                <div class="signals__marquee-track">${renderMarquee(data.signals.marquee)}</div>
              </div>
            </aside>
          </div>
        </section>

        <section class="talk section theme-light" id="contact" data-theme="light">
          <div class="section__inner talk__layout">
            <div class="talk__copy js-fade">
              <p class="section-pill section-pill--light">${data.talk.label}</p>
              <h2 class="talk__title" data-animate="talk-title">${renderSplitLines(data.talk.title)}</h2>
              <p>${data.talk.body}</p>
              <div class="talk__direct talk__direct--copy">
                ${renderDirectLinks(data.talk.direct)}
              </div>
            </div>

            <div class="talk__panel js-fade">
              <div class="talk__panel-topline">
                <span>${data.talk.toLabel}</span>
                <button type="button" data-copy-email="${data.brand.email}" data-cursor="${data.ui.copy}">
                  ${data.talk.mailLabel}
                </button>
              </div>

              <div class="scene-slot scene-slot--talk" data-scene-slot="talk" data-radius="24"></div>

              <div class="talk__intro">${data.talk.intro}</div>

              <div class="talk__form" data-talk-form>
                ${renderTalkSteps(data.talk.steps)}
                <button class="talk__submit" type="button" data-talk-submit>${data.talk.submit}</button>
                <div class="talk__success" data-talk-success>
                  <strong>${data.talk.successTitle}</strong>
                  <p>${data.talk.successBody}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer class="footer theme-dark" data-theme="dark">
        <div class="section__inner footer__layout">
          <div>
            <div class="footer__title">${renderSplitLines(data.footer.title)}</div>
            <p>${data.footer.line}</p>
          </div>
          <nav class="footer__links">
            ${renderFooterLinks(data.footer.links)}
          </nav>
        </div>
      </footer>
    </div>
  `;
}

function cleanup() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

  while (state.cleanups.length) {
    const dispose = state.cleanups.pop();
    dispose();
  }

  if (state.lenis) {
    state.lenis.destroy();
    state.lenis = null;
  }

  if (state.scene) {
    state.scene.destroy();
    state.scene = null;
  }
}

function setMeta(data) {
  document.documentElement.lang = state.locale === "zh" ? "zh-CN" : "en";
  document.documentElement.dataset.locale = state.locale;
  document.title = data.meta.title;

  const metaDescription = qs('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", data.meta.description);
  }
}

function initLenis() {
  const lenis = new Lenis({
    lerp: 0.065,
    smoothWheel: true,
    wheelMultiplier: 0.84,
    syncTouch: false,
  });

  const raf = (time) => {
    lenis.raf(time * 1000);
  };

  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add(raf);
  gsap.ticker.lagSmoothing(0);

  state.cleanups.push(() => {
    gsap.ticker.remove(raf);
  });

  state.lenis = lenis;
  return lenis;
}

function initCopyEmail(data) {
  qsa("[data-copy-email]").forEach((button) => {
    const handleClick = async () => {
      const value = button.dataset.copyEmail;
      try {
        await navigator.clipboard.writeText(value);
        button.dataset.copied = "true";
        const timeout = window.setTimeout(() => {
          delete button.dataset.copied;
        }, 1200);
        state.cleanups.push(() => {
          window.clearTimeout(timeout);
        });
      } catch (error) {
        window.location.href = `mailto:${value}`;
      }
    };

    button.addEventListener("click", handleClick);
    state.cleanups.push(() => {
      button.removeEventListener("click", handleClick);
    });
  });
}

function initLocaleControls() {
  qsa("[data-set-locale]").forEach((button) => {
    const handleClick = () => {
      const nextLocale = button.dataset.setLocale;
      if (nextLocale === state.locale) {
        return;
      }

      state.locale = nextLocale;
      state.introPlayed = true;
      window.localStorage.setItem("yoji-locale", nextLocale);
      window.scrollTo(0, 0);
      render();
    };

    button.addEventListener("click", handleClick);
    state.cleanups.push(() => {
      button.removeEventListener("click", handleClick);
    });
  });
}

function initSmoothLinks() {
  qsa("[data-scroll]").forEach((link) => {
    const handleClick = (event) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) {
        return;
      }

      const target = qs(href);
      if (!target) {
        return;
      }

      event.preventDefault();
      state.lenis.scrollTo(target, {
        offset: -64,
        duration: 1.25,
      });
    };

    link.addEventListener("click", handleClick);
    state.cleanups.push(() => {
      link.removeEventListener("click", handleClick);
    });
  });
}

function initCursor(data) {
  if (!window.matchMedia("(hover: hover)").matches) {
    return;
  }

  const cursor = qs(".cursor");
  const dot = qs(".cursor__dot", cursor);
  const pill = qs(".cursor__pill span", cursor);
  const moveX = gsap.quickTo(cursor, "x", { duration: 0.28, ease: "power3.out" });
  const moveY = gsap.quickTo(cursor, "y", { duration: 0.28, ease: "power3.out" });
  const dotX = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3.out" });
  const dotY = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3.out" });

  const handlePointerMove = (event) => {
    moveX(event.clientX);
    moveY(event.clientY);
    dotX((event.clientX - window.innerWidth * 0.5) * 0.025);
    dotY((event.clientY - window.innerHeight * 0.5) * 0.025);
  };

  const activate = (label) => {
    pill.textContent = label || data.ui.discover;
    cursor.classList.add("is-active");
  };

  const deactivate = () => {
    cursor.classList.remove("is-active");
  };

  document.addEventListener("pointermove", handlePointerMove);

  qsa("[data-cursor]").forEach((node) => {
    const enter = () => activate(node.dataset.cursor);
    const leave = () => deactivate();

    node.addEventListener("pointerenter", enter);
    node.addEventListener("pointerleave", leave);

    state.cleanups.push(() => {
      node.removeEventListener("pointerenter", enter);
      node.removeEventListener("pointerleave", leave);
    });
  });

  state.cleanups.push(() => {
    document.removeEventListener("pointermove", handlePointerMove);
  });
}

function initThemeObserver() {
  const sections = qsa("[data-theme]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.body.dataset.theme = entry.target.dataset.theme || "light";
        }
      });
    },
    {
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0.12,
    },
  );

  sections.forEach((section) => observer.observe(section));

  state.cleanups.push(() => {
    observer.disconnect();
  });
}

function initNavTracking() {
  const links = qsa("[data-nav-link]");
  if (!links.length) {
    return;
  }

  const items = links
    .map((link) => ({
      link,
      href: link.dataset.navLink,
      target: qs(link.dataset.navLink),
    }))
    .filter((item) => item.target);

  const updateActive = () => {
    let currentHref = items[0]?.href;
    const threshold = window.innerHeight * 0.42;

    items.forEach((item) => {
      const rect = item.target.getBoundingClientRect();
      if (rect.top <= threshold) {
        currentHref = item.href;
      }
    });

    items.forEach((item) => {
      item.link.classList.toggle("is-active", item.href === currentHref);
    });
  };

  updateActive();
  window.addEventListener("scroll", updateActive, { passive: true });
  window.addEventListener("resize", updateActive);

  state.cleanups.push(() => {
    window.removeEventListener("scroll", updateActive);
    window.removeEventListener("resize", updateActive);
  });
}

function createStripedTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 768;
  canvas.height = 768;
  const context = canvas.getContext("2d");

  context.fillStyle = "#080808";
  context.fillRect(0, 0, canvas.width, canvas.height);

  for (let x = 0; x < canvas.width; x += 8) {
    context.fillStyle = x % 24 === 0 ? "#d8d8d8" : "#1d1d1d";
    context.fillRect(x, 0, 3, canvas.height);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(12, 6);

  return texture;
}

function initThreeScene() {
  const shell = qs("[data-scene-shell]");
  const canvas = qs(".scene-shell__canvas", shell);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
  camera.position.set(0, 0, 5.6);

  const group = new THREE.Group();
  scene.add(group);

  const texture = createStripedTexture();
  const geometry = new THREE.TorusKnotGeometry(0.92, 0.22, 320, 48, 2, 5);
  const material = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color("#101010"),
    metalness: 1,
    roughness: 0.16,
    clearcoat: 1,
    clearcoatRoughness: 0.06,
    sheen: 1,
    sheenColor: new THREE.Color("#ffffff"),
    sheenRoughness: 0.42,
    bumpMap: texture,
    bumpScale: 0.05,
    roughnessMap: texture,
    metalnessMap: texture,
  });
  const mesh = new THREE.Mesh(geometry, material);
  group.add(mesh);

  const wireGeometry = new THREE.TorusKnotGeometry(0.92, 0.22, 190, 16, 2, 5);
  const wire = new THREE.LineSegments(
    new THREE.WireframeGeometry(wireGeometry),
    new THREE.LineBasicMaterial({
      color: new THREE.Color("#9d9d9d"),
      transparent: true,
      opacity: 0.12,
    }),
  );
  group.add(wire);

  const ambient = new THREE.AmbientLight(0xffffff, 0.9);
  const key = new THREE.DirectionalLight(0xffffff, 5.6);
  key.position.set(3.2, 2.8, 4.5);
  const rim = new THREE.DirectionalLight(0xffffff, 3.8);
  rim.position.set(-3.6, -2.4, 2.8);
  const low = new THREE.PointLight(0xffffff, 1.8, 14);
  low.position.set(0, -2.6, 3.4);

  scene.add(ambient, key, rim, low);

  const pointer = {
    targetX: 0,
    targetY: 0,
    x: 0,
    y: 0,
  };

  const shellState = {
    x: 0,
    y: 0,
    width: 320,
    height: 320,
    radius: 30,
    alpha: 1,
    meshScale: 1,
    meshMorph: 0,
    talkMorph: 0,
    cameraZ: 5.6,
  };

  let rafId = 0;
  let lastWidth = 0;
  let lastHeight = 0;
  let focusTarget = 0;
  let focusCurrent = 0;

  const resizeRenderer = () => {
    const width = Math.max(1, Math.round(shellState.width));
    const height = Math.max(1, Math.round(shellState.height));

    if (width === lastWidth && height === lastHeight) {
      return;
    }

    lastWidth = width;
    lastHeight = height;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };

  const applyShell = () => {
    shell.style.transform = `translate3d(${shellState.x}px, ${shellState.y}px, 0)`;
    shell.style.width = `${shellState.width}px`;
    shell.style.height = `${shellState.height}px`;
    shell.style.borderRadius = `${shellState.radius}px`;
    shell.style.opacity = `${shellState.alpha}`;
    resizeRenderer();
  };

  const renderScene = (time) => {
    pointer.x += (pointer.targetX - pointer.x) * 0.06;
    pointer.y += (pointer.targetY - pointer.y) * 0.06;
    focusCurrent += (focusTarget - focusCurrent) * 0.06;

    const loop = time * 0.00044;
    const stageMix = shellState.meshMorph;
    const talkMix = shellState.talkMorph;

    group.rotation.x = 0.72 - stageMix * 0.48 - talkMix * 0.14 + pointer.y * 0.28 + Math.sin(loop) * 0.05;
    group.rotation.y = loop * 1.12 + focusCurrent + pointer.x * 0.48 + stageMix * 0.88 + talkMix * 0.16;
    group.rotation.z = 0.22 - stageMix * 0.72 - talkMix * 0.22 + Math.cos(loop * 0.76) * 0.05;

    const scale = shellState.meshScale + Math.sin(loop * 1.4) * 0.016;
    group.scale.setScalar(scale);

    const stretchX = 1 + stageMix * 0.18 - talkMix * 0.08;
    const stretchY = 1 - stageMix * 0.14 + talkMix * 0.08;
    const stretchZ = 1 + talkMix * 0.14;
    mesh.scale.set(stretchX, stretchY, stretchZ);
    wire.scale.set(stretchX * 1.06, stretchY * 1.06, stretchZ * 1.06);

    camera.position.z += (shellState.cameraZ - camera.position.z) * 0.08;

    renderer.render(scene, camera);
    rafId = window.requestAnimationFrame(renderScene);
  };

  const handlePointerMove = (event) => {
    pointer.targetX = (event.clientX / window.innerWidth - 0.5) * 2;
    pointer.targetY = (event.clientY / window.innerHeight - 0.5) * 2;
  };

  window.addEventListener("pointermove", handlePointerMove);
  applyShell();
  renderScene(performance.now());

  return {
    setShell(values) {
      Object.assign(shellState, values);
      applyShell();
    },
    setFocus(index) {
      focusTarget = index * 0.28;
    },
    destroy() {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", handlePointerMove);
      texture.dispose();
      geometry.dispose();
      wire.geometry.dispose();
      wire.material.dispose();
      material.dispose();
      renderer.dispose();
    },
  };
}

function getSlotState(slot) {
  const rect = slot.getBoundingClientRect();
  return {
    x: rect.left,
    y: rect.top,
    width: rect.width,
    height: rect.height,
    radius: Number.parseFloat(slot.dataset.radius || "30"),
  };
}

function initSceneMorph() {
  const heroSlot = qs('[data-scene-slot="hero"]');
  const stageSlot = qs('[data-scene-slot="stage"]');
  const featuredSlot = qs('[data-scene-slot="featured"]');
  const talkSlot = qs('[data-scene-slot="talk"]');

  if (!heroSlot || !stageSlot || !featuredSlot || !talkSlot || !state.scene) {
    return;
  }

  const heroState = () => ({
    ...getSlotState(heroSlot),
    alpha: 1,
    meshScale: 1.02,
    meshMorph: 0,
    talkMorph: 0,
    cameraZ: 5.45,
  });

  const stageState = () => ({
    ...getSlotState(stageSlot),
    alpha: 1,
    meshScale: 1.08,
    meshMorph: 1,
    talkMorph: 0,
    cameraZ: 4.7,
  });

  const featuredState = () => ({
    ...getSlotState(featuredSlot),
    alpha: 1,
    meshScale: 0.76,
    meshMorph: 0.28,
    talkMorph: 0.08,
    cameraZ: 5.0,
  });

  const hiddenState = () => {
    const featured = featuredState();
    return {
      x: featured.x + featured.width * 0.08,
      y: featured.y + featured.height * 0.06,
      width: featured.width * 0.82,
      height: featured.height * 0.82,
      radius: featured.radius + 18,
      alpha: 0,
      meshScale: 0.62,
      meshMorph: 0.18,
      talkMorph: 0.16,
      cameraZ: 5.8,
    };
  };

  const talkState = () => ({
    ...getSlotState(talkSlot),
    alpha: 1,
    meshScale: 0.66,
    meshMorph: 0.12,
    talkMorph: 1,
    cameraZ: 5.0,
  });

  const shellState = heroState();
  state.scene.setShell(shellState);

  const mixState = (from, to, progress) => {
    const fromValues = from();
    const toValues = to();
    const nextState = {};

    Object.keys(fromValues).forEach((key) => {
      const start = fromValues[key];
      const end = toValues[key];
      nextState[key] = start + (end - start) * progress;
    });

    Object.assign(shellState, nextState);
    state.scene.setShell(shellState);
  };

  const createMorphTrigger = ({ trigger, start, end, from, to }) => {
    ScrollTrigger.create({
      trigger,
      start,
      end,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        mixState(from, to, self.progress);
      },
      onLeave: () => mixState(from, to, 1),
      onEnterBack: (self) => mixState(from, to, self.progress),
      onLeaveBack: () => mixState(from, to, 0),
    });
  };

  createMorphTrigger({
    trigger: qs(".manifesto"),
    start: "top bottom",
    end: "top top",
    from: heroState,
    to: stageState,
  });

  createMorphTrigger({
    trigger: qs(".featured"),
    start: "top bottom",
    end: "top 42%",
    from: stageState,
    to: featuredState,
  });

  createMorphTrigger({
    trigger: qs(".resume"),
    start: "top bottom",
    end: "top 38%",
    from: featuredState,
    to: hiddenState,
  });

  createMorphTrigger({
    trigger: qs(".talk"),
    start: "top bottom",
    end: "top 55%",
    from: hiddenState,
    to: talkState,
  });

  qsa("[data-scene-focus]").forEach((button) => {
    const index = Number.parseInt(button.dataset.sceneFocus || "0", 10);
    const handleFocus = () => {
      qsa("[data-scene-focus]").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      state.scene.setFocus(index);
    };

    button.addEventListener("mouseenter", handleFocus);
    button.addEventListener("focus", handleFocus);
    button.addEventListener("click", handleFocus);

    state.cleanups.push(() => {
      button.removeEventListener("mouseenter", handleFocus);
      button.removeEventListener("focus", handleFocus);
      button.removeEventListener("click", handleFocus);
    });
  });

  const delayedRefresh = gsap.delayedCall(0.15, () => {
    state.scene.setShell(shellState);
    ScrollTrigger.refresh();
  });
  delayedRefresh.pause();

  const handleResize = () => {
    delayedRefresh.restart(true);
  };

  window.addEventListener("resize", handleResize);
  state.cleanups.push(() => {
    window.removeEventListener("resize", handleResize);
    delayedRefresh.kill();
  });
}

function animateSplitBlock(block, options = {}) {
  const items = qsa(".split-line-inner", block);
  if (!items.length) {
    return null;
  }

  return gsap.fromTo(
    items,
    {
      yPercent: 110,
      rotateX: -84,
      opacity: 0,
      transformOrigin: "50% 50% -12px",
    },
    {
      yPercent: 0,
      rotateX: 0,
      opacity: 1,
      duration: 1.05,
      stagger: options.stagger ?? 0.08,
      ease: "power4.out",
      ...options,
    },
  );
}

function animateHeroTitle(block) {
  const chars = qsa(".split-char-inner", block);
  if (!chars.length) {
    return animateSplitBlock(block);
  }

  return gsap.fromTo(
    chars,
    {
      yPercent: 112,
      rotateX: -88,
      opacity: 0,
      transformOrigin: "50% 100% -10px",
    },
    {
      yPercent: 0,
      rotateX: 0,
      opacity: 1,
      duration: 0.92,
      stagger: 0.012,
      ease: "power4.out",
    },
  );
}

function initHeroIntro() {
  const timeline = gsap.timeline({
    defaults: {
      ease: "power4.out",
    },
  });

  timeline
    .fromTo(".navbar__inner", { y: -28, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.95 }, 0)
    .add(() => animateHeroTitle(qs('[data-animate="hero-title"]')), 0.1)
    .fromTo(".hero__eyebrow", { y: 22, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7 }, 0.18)
    .fromTo(
      ".hero-summary",
      { y: 42, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.95 },
      0.24,
    )
    .fromTo(
      ".hero__metrics .hero-metric, .hero__stripes span",
      { y: 22, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.06 },
      0.38,
    )
    .fromTo(
      ".scene-shell",
      { autoAlpha: 0, scale: 0.92 },
      { autoAlpha: 1, scale: 1, duration: 1.05 },
      0.28,
    );

  state.cleanups.push(() => {
    timeline.kill();
  });
}

function initPreloader() {
  const preloader = qs(".preloader");
  if (!preloader) {
    document.body.classList.add("is-ready");
    state.lenis.start();
    initHeroIntro();
    ScrollTrigger.refresh();
    return;
  }

  document.documentElement.classList.add("is-loading");
  state.lenis.stop();

  const timeline = gsap.timeline({
    defaults: {
      ease: "power4.out",
    },
    onComplete: () => {
      preloader.remove();
      document.documentElement.classList.remove("is-loading");
      document.body.classList.add("is-ready");
      state.introPlayed = true;
      state.lenis.start();
      initHeroIntro();
      ScrollTrigger.refresh();
    },
  });

  timeline
    .fromTo(
      ".preloader .split-line-inner",
      { yPercent: 120, rotateX: -90, opacity: 0 },
      { yPercent: 0, rotateX: 0, opacity: 1, duration: 0.8, stagger: 0.05 },
      0,
    )
    .fromTo(
      ".preloader__card",
      { y: 64, autoAlpha: 0, scale: 0.86, rotate: 3 },
      { y: 0, autoAlpha: 1, scale: 1, rotate: 0, duration: 0.7, stagger: 0.04 },
      0.12,
    )
    .fromTo(
      ".preloader__caption",
      { y: 18, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.55 },
      0.24,
    )
    .to(".preloader__card, .preloader__caption", { y: -28, autoAlpha: 0, duration: 0.45, stagger: 0.02 }, "+=0.36")
    .to(".preloader .split-line-inner", { yPercent: -120, rotateX: 90, opacity: 0, duration: 0.55, stagger: 0.03 }, "-=0.12")
    .to(
      preloader,
      {
        clipPath: "inset(0 0 100% 0 round 0px)",
        duration: 1,
        ease: "expo.inOut",
      },
      "-=0.08",
    );

  state.cleanups.push(() => {
    timeline.kill();
  });
}

function initScrollAnimations() {
  qsa(".js-split-scroll").forEach((block) => {
    const items = qsa(".split-line-inner", block);
    if (!items.length) {
      return;
    }

    gsap.fromTo(
      items,
      {
        yPercent: 110,
        rotateX: -88,
        opacity: 0,
      },
      {
        yPercent: 0,
        rotateX: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.06,
        ease: "power4.out",
        scrollTrigger: {
          trigger: block,
          start: "top 82%",
          once: true,
        },
      },
    );
  });

  qsa(".js-fade").forEach((node) => {
    gsap.fromTo(
      node,
      {
        y: 42,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: node,
          start: "top 88%",
          once: true,
        },
      },
    );
  });
}

function initWorkMotion() {
  qsa(".case-card").forEach((card) => {
    const stage = qs(".case-card__stage", card);
    const copy = qs(".case-card__content", card);
    const panels = qsa(".case-panel-shell", card);

    if (stage) {
      gsap.fromTo(
        stage,
        { y: 44 },
        {
          y: -28,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        },
      );
    }

    if (copy) {
      gsap.fromTo(
        copy,
        { y: 24 },
        {
          y: -12,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        },
      );
    }

    panels.forEach((panel, index) => {
      gsap.fromTo(
        panel,
        { y: 28 + index * 8, rotate: index % 2 === 0 ? -7 : 7 },
        {
          y: -18 - index * 4,
          rotate: index % 2 === 0 ? -4 : 4,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        },
      );
    });
  });
}

function initDepthHover() {
  if (!window.matchMedia("(hover: hover)").matches) {
    return;
  }

  qsa("[data-depth-card]").forEach((card) => {
    const stage = qs(".case-card__stage", card);
    const halo = qs(".case-card__halo", card);
    const layers = qsa("[data-depth]", card);
    if (!stage || !layers.length) {
      return;
    }

    const stageSetters = {
      rotateX: gsap.quickTo(stage, "rotateX", { duration: 0.55, ease: "power3.out" }),
      rotateY: gsap.quickTo(stage, "rotateY", { duration: 0.55, ease: "power3.out" }),
    };
    const haloSetters = halo
      ? {
          x: gsap.quickTo(halo, "x", { duration: 0.5, ease: "power3.out" }),
          y: gsap.quickTo(halo, "y", { duration: 0.5, ease: "power3.out" }),
        }
      : null;
    const quickSetters = layers.map((layer) => ({
      x: gsap.quickTo(layer, "x", { duration: 0.45, ease: "power3.out" }),
      rotateY: gsap.quickTo(layer, "rotateY", { duration: 0.45, ease: "power3.out" }),
    }));

    const handleMove = (event) => {
      const rect = card.getBoundingClientRect();
      const ratioX = (event.clientX - rect.left) / rect.width - 0.5;
      const ratioY = (event.clientY - rect.top) / rect.height - 0.5;

      stageSetters.rotateX(-ratioY * 7);
      stageSetters.rotateY(ratioX * 9);
      haloSetters?.x(ratioX * rect.width * 0.06);
      haloSetters?.y(ratioY * rect.height * 0.05);

      layers.forEach((layer, index) => {
        const depth = Number.parseFloat(layer.dataset.depth || "0.1");
        quickSetters[index].x(ratioX * rect.width * depth * 0.7);
        quickSetters[index].rotateY(ratioX * depth * 36);
      });
    };

    const handleLeave = () => {
      stageSetters.rotateX(0);
      stageSetters.rotateY(0);
      haloSetters?.x(0);
      haloSetters?.y(0);

      layers.forEach((_, index) => {
        quickSetters[index].x(0);
        quickSetters[index].rotateY(0);
      });
    };

    card.addEventListener("pointermove", handleMove);
    card.addEventListener("pointerleave", handleLeave);

    state.cleanups.push(() => {
      card.removeEventListener("pointermove", handleMove);
      card.removeEventListener("pointerleave", handleLeave);
    });
  });
}

function initCasePanelFan() {
  qsa(".case-card").forEach((card) => {
    const stage = qs(".case-card__stage", card);
    const panels = qsa("[data-fan-panel]", card);
    const preview = qs("[data-case-preview]", card);
    const previewFrame = qs(".case-preview__frame", preview);
    const previewImage = qs("[data-preview-image]", preview);
    const previewLabel = qs("[data-preview-label]", preview);
    const previewTitle = qs("[data-preview-title]", preview);
    const previewTags = qs("[data-preview-tags]", preview);
    if (!stage || !panels.length || !preview || !previewFrame || !previewImage || !previewLabel || !previewTitle || !previewTags) {
      return;
    }

    const hoverEnabled = window.matchMedia("(hover: hover)").matches;
    let isOpen = false;
    let lockedIndex = null;
    let hoverIndex = null;
    let activeIndex = 0;

    const previewMoveX = gsap.quickTo(previewFrame, "x", { duration: 0.45, ease: "power3.out" });
    const previewMoveY = gsap.quickTo(previewFrame, "y", { duration: 0.45, ease: "power3.out" });
    const panelData = panels.map((panel) => ({
      label: qs(".case-panel__label", panel)?.textContent?.trim() || "",
      title: qs(".case-panel__copy h3", panel)?.textContent?.trim() || "",
      tags: qsa(".case-panel__tags span", panel).map((tag) => tag.textContent?.trim() || "").filter(Boolean),
      src: qs(".case-panel__image", panel)?.getAttribute("src") || "",
      alt: qs(".case-panel__image", panel)?.getAttribute("alt") || "",
    }));

    const getStates = () => {
      const width = stage.clientWidth || 1;
      const height = stage.clientHeight || 1;
      const compact = window.matchMedia("(max-width: 760px)").matches;
      const spreadX = Math.min(width * (compact ? 0.11 : 0.18), compact ? 54 : 126);
      const driftY = Math.min(height * (compact ? 0.04 : 0.09), compact ? 26 : 56);
      const crownY = Math.min(height * (compact ? 0.06 : 0.1), compact ? 34 : 64);

      return [
        { x: -spreadX, y: driftY, rotate: -17, scale: 0.99, zIndex: 3 },
        { x: 0, y: -crownY, rotate: -1, scale: 1.03, zIndex: 6 },
        { x: spreadX * 0.94, y: driftY * 1.18, rotate: 16, scale: 0.995, zIndex: 4 },
      ];
    };

    const applyState = (open, immediate = false) => {
      const states = getStates();
      card.classList.toggle("is-fan-open", open);
      card.classList.toggle("is-fan-locked", lockedIndex !== null);

      panels.forEach((panel, index) => {
        const nextState = open ? states[index] ?? states[1] : { x: 0, y: 0, rotate: 0, scale: 1, zIndex: index + 1 };
        gsap.to(panel, {
          x: nextState.x,
          y: nextState.y,
          rotate: nextState.rotate,
          scale: nextState.scale,
          zIndex: nextState.zIndex,
          duration: immediate ? 0 : 0.9,
          ease: "power4.out",
          overwrite: true,
        });
      });
    };

    const setCurrentPanel = (index) => {
      panels.forEach((panel, panelIndex) => {
        panel.classList.toggle("is-current", panelIndex === index);
      });
    };

    const updatePreviewContent = (index) => {
      const data = panelData[index];
      if (!data) {
        return;
      }

      activeIndex = index;
      previewLabel.textContent = data.label;
      previewTitle.textContent = data.title;
      previewTags.innerHTML = data.tags.map((tag) => `<span>${tag}</span>`).join("");

      if (previewImage.getAttribute("src") !== data.src) {
        previewImage.setAttribute("src", data.src);
      }

      previewImage.setAttribute("alt", data.alt || data.title);
      setCurrentPanel(index);
    };

    const animatePreviewRefresh = () => {
      gsap.fromTo(
        previewImage,
        {
          autoAlpha: 0.26,
          scale: 0.985,
        },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.48,
          ease: "power3.out",
          overwrite: true,
        },
      );

      gsap.fromTo(
        [previewLabel, previewTitle, previewTags],
        {
          y: 12,
          autoAlpha: 0.36,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.46,
          stagger: 0.03,
          ease: "power3.out",
          overwrite: true,
        },
      );
    };

    const showPreview = (index, immediate = false) => {
      if (index == null) {
        return;
      }

      const changed = activeIndex !== index || preview.getAttribute("aria-hidden") === "true";
      updatePreviewContent(index);
      card.classList.add("is-preview-visible");
      preview.setAttribute("aria-hidden", "false");

      gsap.to(preview, {
        autoAlpha: 1,
        duration: immediate ? 0 : 0.42,
        ease: "power3.out",
        overwrite: true,
      });
      gsap.to(previewFrame, {
        scale: 1,
        duration: immediate ? 0 : 0.68,
        ease: "power4.out",
        overwrite: true,
      });

      if (changed && !immediate) {
        animatePreviewRefresh();
      }
    };

    const hidePreview = (immediate = false) => {
      if (lockedIndex !== null || hoverIndex !== null) {
        return;
      }

      card.classList.remove("is-preview-visible");
      preview.setAttribute("aria-hidden", "true");
      setCurrentPanel(null);
      previewMoveX(0);
      previewMoveY(0);

      gsap.to(preview, {
        autoAlpha: 0,
        duration: immediate ? 0 : 0.32,
        ease: "power3.out",
        overwrite: true,
      });
      gsap.to(previewFrame, {
        x: 0,
        y: 0,
        scale: 0.94,
        duration: immediate ? 0 : 0.42,
        ease: "power3.out",
        overwrite: true,
      });
    };

    const openFan = () => {
      if (isOpen) {
        return;
      }

      isOpen = true;
      applyState(true);
    };

    const closeFan = () => {
      if (!isOpen || lockedIndex !== null) {
        return;
      }

      isOpen = false;
      applyState(false);
    };

    const lockPanel = (index) => {
      lockedIndex = index;
      hoverIndex = index;
      isOpen = true;
      applyState(true);
      showPreview(index);
    };

    const releaseLock = () => {
      lockedIndex = null;
      card.classList.remove("is-fan-locked");

      if (hoverIndex !== null) {
        showPreview(hoverIndex, true);
        return;
      }

      const keepOpen = hoverEnabled && stage.matches(":hover");
      isOpen = keepOpen;
      applyState(keepOpen);
      hidePreview();
    };

    const handleStageEnter = () => {
      if (!hoverEnabled) {
        return;
      }

      openFan();
    };

    const handleStageMove = (event) => {
      const rect = stage.getBoundingClientRect();
      const ratioX = (event.clientX - rect.left) / rect.width - 0.5;
      const ratioY = (event.clientY - rect.top) / rect.height - 0.5;

      if (hoverEnabled && !isOpen) {
        openFan();
      }

      if (card.classList.contains("is-preview-visible")) {
        previewMoveX(ratioX * 22);
        previewMoveY(ratioY * 14);
      }
    };

    const handleStageLeave = () => {
      hoverIndex = null;
      previewMoveX(0);
      previewMoveY(0);
      closeFan();
      hidePreview();
    };

    const handleStageClick = (event) => {
      if (event.target.closest("[data-fan-panel]")) {
        return;
      }

      if (lockedIndex !== null) {
        hoverIndex = null;
        releaseLock();
      }
    };

    const handleOutsidePointerDown = (event) => {
      if (lockedIndex === null || card.contains(event.target)) {
        return;
      }

      hoverIndex = null;
      isOpen = false;
      applyState(false);
      releaseLock();
    };

    const handleKeyDown = (index, event) => {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }

      event.preventDefault();
      lockPanel(index);
    };

    stage.addEventListener("pointerenter", handleStageEnter);
    stage.addEventListener("pointermove", handleStageMove);
    stage.addEventListener("pointerleave", handleStageLeave);
    stage.addEventListener("click", handleStageClick);
    document.addEventListener("pointerdown", handleOutsidePointerDown);

    panels.forEach((panel, index) => {
      const handlePointerEnter = () => {
        if (lockedIndex !== null) {
          return;
        }

        hoverIndex = index;
        openFan();
        showPreview(index);
      };

      const handlePointerLeave = () => {
        if (lockedIndex !== null || !hoverEnabled) {
          return;
        }

        hoverIndex = null;
      };

      const handleFocus = () => {
        if (lockedIndex !== null) {
          return;
        }

        hoverIndex = index;
        openFan();
        showPreview(index);
      };

      const handleClick = (event) => {
        event.stopPropagation();
        lockPanel(index);
      };

      const handleKey = (event) => handleKeyDown(index, event);

      panel.addEventListener("pointerenter", handlePointerEnter);
      panel.addEventListener("pointerleave", handlePointerLeave);
      panel.addEventListener("focus", handleFocus);
      panel.addEventListener("click", handleClick);
      panel.addEventListener("keydown", handleKey);

      state.cleanups.push(() => {
        panel.removeEventListener("pointerenter", handlePointerEnter);
        panel.removeEventListener("pointerleave", handlePointerLeave);
        panel.removeEventListener("focus", handleFocus);
        panel.removeEventListener("click", handleClick);
        panel.removeEventListener("keydown", handleKey);
      });
    });

    const handleResize = () => {
      applyState(isOpen || lockedIndex !== null, true);
      if (lockedIndex !== null || hoverIndex !== null) {
        showPreview(lockedIndex ?? hoverIndex, true);
      }
    };

    window.addEventListener("resize", handleResize);
    gsap.set(preview, { autoAlpha: 0 });
    gsap.set(previewFrame, { scale: 0.94 });
    applyState(false, true);
    hidePreview(true);

    state.cleanups.push(() => {
      stage.removeEventListener("pointerenter", handleStageEnter);
      stage.removeEventListener("pointermove", handleStageMove);
      stage.removeEventListener("pointerleave", handleStageLeave);
      stage.removeEventListener("click", handleStageClick);
      document.removeEventListener("pointerdown", handleOutsidePointerDown);
      window.removeEventListener("resize", handleResize);
    });
  });
}

function initAccordion() {
  qsa("[data-accordion]").forEach((item, index) => {
    const trigger = qs("[data-accordion-trigger]", item);
    const panel = qs("[data-accordion-panel]", item);

    gsap.set(panel, {
      height: index === 0 ? "auto" : 0,
    });

    const handleClick = () => {
      const isOpen = item.classList.contains("is-open");

      qsa("[data-accordion]").forEach((other) => {
        const otherPanel = qs("[data-accordion-panel]", other);
        other.classList.remove("is-open");
        gsap.to(otherPanel, {
          height: 0,
          duration: 0.42,
          ease: "power3.inOut",
        });
      });

      if (isOpen) {
        return;
      }

      item.classList.add("is-open");
      gsap.to(panel, {
        height: "auto",
        duration: 0.5,
        ease: "power3.inOut",
      });
    };

    trigger.addEventListener("click", handleClick);
    state.cleanups.push(() => {
      trigger.removeEventListener("click", handleClick);
    });
  });
}

function initTalkForm(data) {
  const steps = qsa("[data-talk-step]");
  const submit = qs("[data-talk-submit]");
  const success = qs("[data-talk-success]");
  const values = {};

  const activateStep = (targetIndex) => {
    steps.forEach((step, index) => {
      step.classList.toggle("is-active", index === targetIndex);
      step.classList.toggle("is-complete", index < targetIndex);
    });

    const nextField = qs(".talk-field", steps[targetIndex]);
    if (nextField) {
      nextField.focus();
    }
  };

  const nextIndex = (current) => {
    const target = Math.min(current + 1, steps.length - 1);
    activateStep(target);
  };

  const validateField = (field, type) => {
    const value = field.value.trim();
    if (!value && field.tagName !== "TEXTAREA") {
      return false;
    }

    if (type === "input" && field.placeholder.includes("@")) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    return true;
  };

  steps.forEach((step, index) => {
    const type = step.dataset.stepType;
    const key = step.dataset.stepKey;

    if (type === "options") {
      qsa("[data-talk-option]", step).forEach((option) => {
        const handleClick = () => {
          qsa("[data-talk-option]", step).forEach((item) => item.classList.remove("is-selected"));
          option.classList.add("is-selected");
          values[key] = option.dataset.talkOption;
          nextIndex(index);
        };

        option.addEventListener("click", handleClick);
        state.cleanups.push(() => {
          option.removeEventListener("click", handleClick);
        });
      });

      return;
    }

    const field = qs(".talk-field", step);

    const handleKeyDown = (event) => {
      if (event.key !== "Enter" || type === "textarea") {
        return;
      }

      event.preventDefault();

      if (!validateField(field, type)) {
        step.classList.add("has-error");
        return;
      }

      step.classList.remove("has-error");
      values[key] = field.value.trim();
      nextIndex(index);
    };

    const handleBlur = () => {
      if (field.value.trim()) {
        values[key] = field.value.trim();
      }
    };

    field.addEventListener("keydown", handleKeyDown);
    field.addEventListener("blur", handleBlur);

    state.cleanups.push(() => {
      field.removeEventListener("keydown", handleKeyDown);
      field.removeEventListener("blur", handleBlur);
    });
  });

  activateStep(0);

  const handleSubmit = () => {
    const lastField = qs('.talk-step[data-step-key="note"] .talk-field');
    values.note = lastField ? lastField.value.trim() : "";

    const required = ["name", "email", "mode", "focus"];
    const missing = required.some((key) => !values[key]);
    if (missing) {
      return;
    }

    const subject =
      state.locale === "zh"
        ? `${values.name} / ${values.mode} / 联系 yoji`
        : `${values.name} / ${values.mode} / Contacting Yoji`;

    const lines = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Mode: ${values.mode}`,
      `Focus: ${values.focus}`,
      `Note: ${values.note || "-"}`,
    ];

    window.location.href = `mailto:${data.brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    success.classList.add("is-visible");
  };

  submit.addEventListener("click", handleSubmit);
  state.cleanups.push(() => {
    submit.removeEventListener("click", handleSubmit);
  });
}

function render() {
  cleanup();

  const data = siteContent[state.locale];
  setMeta(data);
  if (!state.introPlayed) {
    window.scrollTo(0, 0);
  }
  document.body.classList.remove("is-ready");
  document.body.dataset.theme = "light";
  app.innerHTML = createTemplate(data);

  initLenis();
  initCopyEmail(data);
  initLocaleControls();
  initSmoothLinks();
  initCursor(data);
  initThemeObserver();
  initNavTracking();
  state.scene = initThreeScene();
  initSceneMorph();
  initScrollAnimations();
  initWorkMotion();
  initDepthHover();
  initCasePanelFan();
  initAccordion();
  initTalkForm(data);
  initPreloader();

  requestAnimationFrame(() => {
    ScrollTrigger.refresh();
  });
}

render();
