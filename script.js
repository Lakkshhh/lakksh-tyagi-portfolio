const projects = [
  {
    type: "experience",
    tag: "Canva",
    title: "Software Engineer (AI/ML)",
    description:
      "Building agentic AI workflows, RAG systems, LLM evaluation suites, and Go microservices for a global design platform.",
    image: "./assets/experience/canva-logo.png",
    caseStudy: {
      goal:
        "Build production-ready AI systems that help large language models complete useful design workflows while keeping outputs grounded, measurable, and safe to release.",
      context:
        "At Canva, I develop agentic AI workflows with Python, LangGraph, and Model Context Protocol so LLMs can complete multi-step template search and brand kit tasks for beta users. I also work on Go microservices for storing, versioning, and sharing design assets on AWS EKS, exposing functionality through gRPC and REST APIs consumed by editor and collaboration product teams. On the AI quality side, I build RAG systems over help center content using Amazon Bedrock embeddings, pgvector, and BM25, then back releases with Python and pytest evaluation suites covering groundedness, safety, guardrails, and prompt versioning.",
      results: [
        "Developed LangGraph and MCP workflows for multi-step template search and brand kit tasks",
        "Built Go microservices on AWS EKS with gRPC and REST APIs for internal editor and collaboration teams",
        "Kept collaborator views consistent within 2 seconds through Kafka and DynamoDB Streams propagation",
        "Raised top-five hybrid search recall by 18% with a RAG layer combining Bedrock embeddings, pgvector, and BM25",
        "Built LLM evaluation suites over 500+ curated prompts so groundedness and safety regressions block merges before release",
      ],
    },
    art:
      "linear-gradient(135deg, rgba(255,255,255,.11), transparent 35%), repeating-linear-gradient(90deg, rgba(255,255,255,.10) 0 1px, transparent 1px 58px), linear-gradient(145deg, #2d2e34, #17181d)",
  },
  {
    type: "experience",
    tag: "Meesho",
    title: "Software Engineer",
    description:
      "Built Python and Java marketplace services for catalog, checkout, payouts, search, testing, and ML-assisted shipment routing.",
    image: "./assets/experience/meesho-logo.png",
    caseStudy: {
      goal: "Improve core marketplace reliability and speed across catalog listing, checkout, seller payouts, and shipment workflows.",
      context:
        "At Meesho, I worked in a marketplace squad building backend systems for first-time shoppers in tier 2 cities. I delivered catalog listing and checkout features in Python microservices using FastAPI and Django, then helped refactor seller payout reconciliation from a nightly batch job into Java Spring Boot consumers on Apache Kafka. I also improved checkout and search performance by fixing slow MySQL queries with composite indexes, Redis caching, and Elasticsearch mapping changes, while strengthening cart and payout APIs through PyTest, JUnit, and contract testing. Later, I integrated XGBoost return-to-origin risk scores into shipment routing and piloted a Python LLM catalog attribute extractor.",
      results: [
        "Cut manual seller payout reconciliation tickets by 40% with Kafka consumers, idempotent retries, and dead letter queues",
        "Improved p95 checkout and search API latency by 35% after festive-sale load testing",
        "Raised regression coverage to 80% across two team codebases with PyTest, JUnit, and contract tests",
        "Deployed Dockerized services to GKE with Helm, Jenkins CI/CD, Prometheus alerts, and Grafana dashboards",
        "Integrated XGBoost shipment-routing scores and piloted an LLM catalog attribute extractor with 85% reviewer acceptance",
      ],
    },
    art:
      "linear-gradient(180deg, rgba(255,255,255,.12), transparent 28%), repeating-linear-gradient(0deg, rgba(255,255,255,.08) 0 2px, transparent 2px 24px), linear-gradient(120deg, #33343a, #1c1d22)",
  },
  {
    type: "project",
    tag: "Lonnex",
    title: "Debt Repayment Platform",
    description:
      "Architected a 4-agent LangGraph pipeline with FastAPI and Next.js for personalized debt repayment plans. Delivered real-time amortization simulations under 200ms with 100% mathematical accuracy.",
    image: "./assets/experience/experience-05.png",
    caseStudy: {
      goal: "Help users compare loan repayment strategies and understand the financial impact of different payment plans.",
      context:
        "I designed a 4-agent LangGraph pipeline separating user interaction, repayment strategy analysis, simulation, and recommendation responsibilities. The system modeled avalanche, snowball, and standard repayment strategies through a FastAPI backend and Next.js/TypeScript frontend. Because financial calculations are high-stakes, all amortization and repayment calculations were handled by deterministic Python logic using precise decimal arithmetic; the LLM was restricted to interpreting validated results and communicating recommendations.",
      results: [
        "Modeled 3 repayment strategies with deterministic amortization and repayment logic",
        "Validated the financial engine across 7 mathematical edge-case categories",
        "Isolated LLM reasoning from financial computation to prevent model-generated arithmetic from affecting results",
        "Delivered real-time amortization simulations in under 200ms through FastAPI",
      ],
    },
    art:
      "radial-gradient(circle at 22% 26%, rgba(255,255,255,.28), transparent 18%), radial-gradient(circle at 74% 48%, rgba(255,255,255,.18), transparent 20%), linear-gradient(140deg, #393a3f, #1b1c21 70%)",
  },
  {
    type: "project",
    tag: "UF NestMate",
    title: "Housing Platform",
    description:
      "Created and deployed a full-stack housing platform with Go, React, Vercel, and Render. Served 100+ users through 20+ REST APIs with authentication, filtering, and concurrent request support.",
    image: "./assets/experience/experience-06.png",
    caseStudy: {
      goal: "Help students find relevant off-campus housing through better local search and filtering.",
      context:
        "I built and deployed a full-stack housing platform using Go, React, MongoDB, Vercel, and Render, with 20+ REST APIs supporting authentication, filtering, and concurrent requests. Early in development, I made a product mistake by building a roommate-matching feature based on an assumption rather than validated demand. After speaking with users, I found that search and filtering were the higher-priority problems, so I reprioritized development toward those workflows and improved the core housing-discovery experience.",
      results: [
        "Served 100+ users, validating the reprioritized product direction",
        "Built 20+ unit-tested REST APIs supporting authentication, filtering, and concurrent access",
        "Shifted engineering effort from an unvalidated matching feature toward user-validated search functionality",
        "Demonstrated the importance of validating product requirements before committing engineering resources",
      ],
    },
    art:
      "linear-gradient(180deg, rgba(255,255,255,.12), transparent 28%), repeating-linear-gradient(0deg, rgba(255,255,255,.08) 0 2px, transparent 2px 24px), linear-gradient(120deg, #33343a, #1c1d22)",
  },
];

const stage = document.querySelector("#carouselStage");
const dots = document.querySelector("#projectDots");
const title = document.querySelector("#projectTitle");
const tag = document.querySelector("#projectTag");
const description = document.querySelector("#projectDescription");
const projectLink = document.querySelector("#projectLink");
const modal = document.querySelector("#experienceModal");
const modalPanel = modal.querySelector(".experience-modal__panel");
const modalTag = document.querySelector("#modalTag");
const modalTitle = document.querySelector("#modalTitle");
const modalList = document.querySelector("#modalList");
const railLabel = document.querySelector("#railLabel");
const navLinks = [...document.querySelectorAll(".nav-link")];
let activeProject = 0;
let modalTrigger = null;

function wrapIndex(index) {
  return (index + projects.length) % projects.length;
}

function cardClass(index) {
  if (index === activeProject) return "is-center";
  if (index === wrapIndex(activeProject - 1)) return "is-left";
  if (index === wrapIndex(activeProject + 1)) return "is-right";
  return "is-hidden";
}

function renderProjects() {
  stage.innerHTML = "";
  dots.innerHTML = "";

  projects.forEach((project, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `project-card ${cardClass(index)}`;
    card.style.setProperty("--card-art", project.art);
    card.style.setProperty("--card-image-fit", project.imageFit || "cover");
    card.style.setProperty("--card-image-bg", project.imageBackground || "transparent");
    card.setAttribute("aria-label", `Show ${project.title} experience`);
    card.innerHTML = `<img src="${project.image}" alt="" />`;
    card.addEventListener("click", () => {
      activeProject = index;
      renderProjects();
    });
    stage.appendChild(card);

    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = `dot ${index === activeProject ? "is-active" : ""}`;
    dot.setAttribute("aria-label", `Show experience ${index + 1}`);
    dot.addEventListener("click", () => {
      activeProject = index;
      renderProjects();
    });
    dots.appendChild(dot);
  });

  tag.textContent = projects[activeProject].tag;
  title.textContent = projects[activeProject].title;
  description.textContent = projects[activeProject].description;
  projectLink.textContent = projects[activeProject].type === "project" ? "View Project +" : "View Experience +";
}

function modalMotion(trigger, direction = "open") {
  modalPanel.getAnimations().forEach((animation) => animation.cancel());
  const duration = direction === "open" ? 920 : 760;
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
  const panelRect = modalPanel.getBoundingClientRect();
  const triggerRect = trigger.getBoundingClientRect();
  const triggerCenterX = triggerRect.left + triggerRect.width / 2;
  const triggerCenterY = triggerRect.top + triggerRect.height / 2;
  const panelCenterX = panelRect.left + panelRect.width / 2;
  const panelCenterY = panelRect.top + panelRect.height / 2;
  const originX = clamp(((triggerCenterX - panelRect.left) / panelRect.width) * 100, 8, 92);
  const originY = clamp(((triggerCenterY - panelRect.top) / panelRect.height) * 100, 8, 92);

  modalPanel.style.setProperty("--modal-origin-x", `${originX}%`);
  modalPanel.style.setProperty("--modal-origin-y", `${originY}%`);

  const collapsed = {
    opacity: 0,
    transform: `translate(${triggerCenterX - panelCenterX}px, ${triggerCenterY - panelCenterY}px) scaleX(0.12) scaleY(0.035)`,
    clipPath: "inset(48% 22% 48% 22% round 999px)",
  };
  const unfurl = {
    opacity: 0.72,
    transform: `translate(${(triggerCenterX - panelCenterX) * 0.5}px, ${(triggerCenterY - panelCenterY) * 0.42}px) scaleX(0.34) scaleY(0.92)`,
    clipPath: "inset(28% 10% 28% 10% round 28px)",
  };
  const settle = {
    opacity: 1,
    transform: `translate(${(triggerCenterX - panelCenterX) * 0.1}px, ${(triggerCenterY - panelCenterY) * 0.08}px) scaleX(0.92) scaleY(1.02)`,
    clipPath: "inset(3% 1.5% 3% 1.5% round 12px)",
  };
  const expanded = {
    opacity: 1,
    transform: "translate(0, 0) scaleX(1) scaleY(1)",
    clipPath: "inset(0 0 0 0 round 10px)",
  };

  const keyframes = direction === "open" ? [collapsed, unfurl, settle, expanded] : [expanded, settle, unfurl, collapsed];
  const animation = modalPanel.animate(keyframes, {
    duration,
    easing: direction === "open" ? "cubic-bezier(0.19, 1, 0.22, 1)" : "cubic-bezier(0.76, 0, 0.24, 1)",
    fill: "forwards",
  });

  return Promise.race([
    animation.finished.catch(() => undefined),
    new Promise((resolve) => setTimeout(resolve, duration + 80)),
  ]);
}

function renderCaseStudy(caseStudy) {
  const paragraphs = (content) => content.split("\n\n").map((item) => `<p>${item}</p>`).join("");
  const results = caseStudy.results.map((item) => `<li>${item}</li>`).join("");

  return `
    <section class="modal-case-study">
      <p class="eyebrow">Goal</p>
      ${paragraphs(caseStudy.goal)}
    </section>
    <section class="modal-case-study">
      <p class="eyebrow">Context</p>
      ${paragraphs(caseStudy.context)}
    </section>
    <section class="modal-case-study">
      <p class="eyebrow">Results</p>
      <ul class="modal-results">${results}</ul>
    </section>
  `;
}

async function openModal(trigger) {
  if (modal.classList.contains("is-open") || modal.classList.contains("is-closing")) return;

  const project = projects[activeProject];
  modalTrigger = trigger;
  modalTag.textContent = `${project.tag} / ${project.type === "project" ? "Project" : "Experience"}`;
  modalTitle.textContent = project.title;
  modalList.innerHTML = renderCaseStudy(project.caseStudy);
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  await modalMotion(trigger, "open");
}

async function closeModal() {
  if ((!modal.classList.contains("is-open") && !modal.classList.contains("is-closing")) || !modalTrigger) return;

  const trigger = modalTrigger;
  modal.classList.add("is-closing");
  modal.classList.remove("is-open");
  try {
    await modalMotion(trigger, "close");
  } finally {
    modal.classList.remove("is-closing");
    modal.setAttribute("aria-hidden", "true");
    modalPanel.getAnimations().forEach((animation) => animation.cancel());
    trigger.focus();
    modalTrigger = null;
  }
}

projectLink.addEventListener("click", () => {
  openModal(projectLink);
});

modal.addEventListener("click", (event) => {
  if (event.target.matches("[data-modal-close]")) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

document.querySelector(".arrow-prev").addEventListener("click", () => {
  activeProject = wrapIndex(activeProject - 1);
  renderProjects();
});

document.querySelector(".arrow-next").addEventListener("click", () => {
  activeProject = wrapIndex(activeProject + 1);
  renderProjects();
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.18 },
);

document.querySelectorAll(".reveal").forEach((section) => revealObserver.observe(section));

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    const id = visible.target.id;
    const label = visible.target.dataset.label || id;
    railLabel.textContent = label;
    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.dataset.section === id);
    });
  },
  {
    rootMargin: "-35% 0px -45% 0px",
    threshold: [0.05, 0.2, 0.5, 0.8],
  },
);

document.querySelectorAll("main .section").forEach((section) => sectionObserver.observe(section));

renderProjects();
