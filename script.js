const projects = [
  {
    type: "experience",
    tag: "SMILE Lab + TEA Lab",
    title: "Graduate Research Assistant",
    description:
      "Built and evaluated AI systems across image-based emotion prediction and multimodal autonomous-driving research. Improved SMILE Lab model reliability and stabilized TEA Lab world-model training after diagnosing a silent collapse in the pipeline.",
    image: "./assets/experience/experience-01.png",
    caseStudy: {
      goal:
        "SMILE Lab: Build and rigorously evaluate AI models that predict human emotional response from images.\n\nTEA Lab: Diagnose and fix a training failure silently degrading a multimodal autonomous-driving world model.",
      context:
        "SMILE Lab: I benchmarked 10 CNN and Vision Transformer architectures on a 118K-image dataset across 8 emotion categories, then discovered my initial evaluation setup wasn't reflecting real-world performance — results looked strong until tested on more diverse data. I redesigned the evaluation methodology, then extended the work into a zero-shot comparison of frontier LLMs for continuous emotion prediction.\n\nTEA Lab: I inherited an existing MUVO training pipeline (RGB + LiDAR world model, ResNet18 encoder) and, after setting up TensorBoard monitoring for the first time, identified a posterior collapse around epoch 11 — the KL divergence was dropping to zero, meaning the model had stopped meaningfully using its latent space. I resolved it through regularization and learning-rate tuning, then added a self-attention layer at the encoder-decoder bottleneck and UNet-style skip connections to further improve reconstruction fidelity.",
      results: [
        "Improved classification F1 score from 0.72 to 0.88 while cutting GPU runtime 30% through parallelized training",
        "Benchmarked GPT, Claude, and Gemini zero-shot for valence-arousal prediction — Claude led, reaching 95% alignment with human ratings",
        "The evaluation redesign was arguably the more important contribution: it made every downstream result trustworthy",
        "Reduced RGB reconstruction loss by 42%",
        "Reduced LiDAR reconstruction loss by 50%",
        "KL divergence stabilized at 0.17–0.18 and never collapsed across a full 100-epoch run — the key success marker compared to every previous attempt",
      ],
    },
    art:
      "linear-gradient(135deg, rgba(255,255,255,.11), transparent 35%), repeating-linear-gradient(90deg, rgba(255,255,255,.10) 0 1px, transparent 1px 58px), linear-gradient(145deg, #2d2e34, #17181d)",
  },
  {
    type: "experience",
    tag: "CraftySogo",
    title: "Software Engineer Intern",
    description:
      "Built an LLM-powered financial analytics bot and automated Excel data pipelines. Boosted client profit margins by 10% and improved financial decision-making speed by 20%.",
    image: "./assets/experience/experience-02.png",
    imageFit: "contain",
    imageBackground: "#ffffff",
    caseStudy: {
      goal: "Automate manual financial spend analysis for clients whose data was too sensitive for ungoverned cloud tools.",
      context:
        "I owned this pipeline solo, end-to-end. Raw financial data stayed entirely local in SQLite, processed with Pandas and SQLAlchemy — only aggregated, category-level summaries ever reached Gemini 2.5 Pro, which was used strictly for interpretation, never computation. After an early version that let the LLM handle both computation and interpretation produced subtle arithmetic inconsistencies, I redesigned the system so the deterministic pipeline was the sole source of truth.",
      results: [
        "Cut month-end close cycle time by approximately 20%",
        "Zero raw or vendor-level data ever left the local environment",
        "Built explicit failure handling so a Gemini API outage could never corrupt the underlying financial numbers",
      ],
    },
    art:
      "linear-gradient(180deg, rgba(255,255,255,.12), transparent 28%), repeating-linear-gradient(0deg, rgba(255,255,255,.08) 0 2px, transparent 2px 24px), linear-gradient(120deg, #33343a, #1c1d22)",
  },
  {
    type: "experience",
    tag: "Westernacher Consulting",
    title: "Software Engineer Intern",
    description:
      "Built Java/Spring Boot microservices for e-commerce product, cart, auth, and Cloudinary flows. Improved platform responsiveness by 20% and reduced unauthorized access by 25%.",
    image: "./assets/experience/experience-03.png",
    caseStudy: {
      goal: "Break a tightly coupled e-commerce backend into secure, maintainable services without slowing feature delivery.",
      context:
        "As a backend intern, I redesigned core platform functionality into 10+ modular REST capabilities in Java and Spring Boot — product management, cart, authentication, user profiles, and inventory — while restructuring the underlying PostgreSQL schema and implementing consistent JWT-based authentication across every protected endpoint.",
      results: [
        "20% improvement in API responsiveness after schema restructuring and CRUD optimization",
        "25% reduction in unauthorized access incidents after JWT rollout",
        "Built an atomic stock-update mechanism preventing overselling when multiple purchases hit the same item concurrently",
      ],
    },
    art:
      "radial-gradient(circle at 22% 26%, rgba(255,255,255,.24), transparent 18%), repeating-linear-gradient(90deg, rgba(255,255,255,.08) 0 1px, transparent 1px 68px), linear-gradient(140deg, #393a3f, #1b1c21 70%)",
  },
  {
    type: "experience",
    tag: "Husqvarna Group",
    title: "AI Software Engineer Intern",
    description:
      "Launched an AI-powered HR chatbot with local and production LLM integrations. Automated 80% of HR processes and cut response time by 30%.",
    image: "./assets/experience/experience-04.png",
    caseStudy: {
      goal: "Automate HR's most repetitive employee queries without sacrificing accuracy on sensitive policy questions.",
      context:
        "I joined Husqvarna's AI Lab (Sweden team) at a time when LLMs were still new technology, and my first task was researching transformer architecture and presenting feasibility findings directly to AI Lab leadership and senior company stakeholders. That presentation led to my internship being extended to build one of the proposed use cases — a retrieval-grounded HR assistant using LangChain, Pinecone, and OpenAI, with every response grounded in verified internal HR documents rather than the model's own judgment.",
      results: [
        "Automated 15%+ of routine, document-answerable HR queries",
        "Gave 500+ employees self-service access to HR policy information",
        "Confidence-threshold guardrails ensured the assistant declined to answer rather than guess when it lacked a grounded match",
      ],
    },
    art:
      "linear-gradient(135deg, rgba(255,255,255,.11), transparent 35%), repeating-linear-gradient(90deg, rgba(255,255,255,.10) 0 1px, transparent 1px 58px), linear-gradient(145deg, #2d2e34, #17181d)",
  },
  {
    type: "project",
    tag: "Lonnex",
    title: "Debt Repayment Platform",
    description:
      "Architected a 4-agent LangGraph pipeline with FastAPI and Next.js for personalized debt repayment plans. Delivered real-time amortization simulations under 200ms with 100% mathematical accuracy.",
    image: "./assets/experience/experience-05.png",
    caseStudy: {
      goal: "Help people juggling multiple loans clearly compare repayment strategies and see the real financial impact of each choice.",
      context:
        "I designed a 4-agent LangGraph pipeline modeling avalanche, snowball, and standard repayment strategies with clearly separated agent responsibilities, built on a FastAPI backend and Next.js frontend with Supabase. All financial computation lives in deterministic Python logic — the LLM is used solely to interpret results and communicate recommendations in plain language.",
      results: [
        "Modeled three distinct repayment strategies with Decimal-accurate amortization logic",
        "All financial math kept fully deterministic, with the LLM never touching a calculation",
        "Real-time amortization simulations delivered in under 200ms, powered by FastAPI's async request handling",
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
      goal: "Help students in a local off-campus housing market more easily find relevant housing and navigate their search.",
      context:
        "I built and deployed a full-stack housing platform in Go and React, hosted on Vercel and Render, with a MongoDB backend and 20+ unit-tested REST APIs supporting authentication, filtering, and concurrent requests. Early on, I made a real product mistake — I built a roommate-matching system based on my own assumption that users would want it, without validating the need first. After talking to actual users, I learned their real priority was better search and filtering, not matching. I reprioritized around that, focused engineering effort on core search functionality, and improved overall performance and usability.",
      results: [
        "Served 100+ users, validating the reprioritized core idea",
        "Built 20+ unit-tested REST APIs supporting authentication, filtering, and concurrent access",
        "The bigger lesson: validating user needs before building is as important as the engineering itself — a mistake I caught early enough to correct before it cost the whole product",
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
