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
        "SMILE Lab: Build and rigorously evaluate computer-vision models for predicting human emotional responses from images.\n\nTEA Lab: Diagnose and improve training stability in a multimodal autonomous-driving world model.",
      context:
        "SMILE Lab: I built a PyTorch training and benchmarking workflow on UF's HiPerGator cluster to evaluate 10 CNN and Vision Transformer architectures across 118K+ images and 8 emotion categories. I compared architectures under a consistent experimental setup before fine-tuning stronger candidates, improving classification F1 from 0.72 to 0.88 while reducing GPU runtime by 30%. I then extended the work from discrete emotion classification to continuous valence and arousal prediction using a custom CLIP-ViT regression head. Finally, I built a multimodal API evaluation pipeline comparing GPT, Claude, and Gemini using zero-shot prompting against the same ground-truth emotion ratings.\n\nTEA Lab: I inherited an existing MUVO training pipeline using RGB and LiDAR data with a ResNet18 encoder and first focused on getting the system running reliably on UF's HiPerGator cluster. I configured TensorBoard monitoring through an SSH tunnel and analyzed training curves to diagnose a posterior-collapse failure around epochs 11–12, where KL divergence approached zero while reconstruction behavior deteriorated. I addressed the collapse through controlled regularization and learning-rate tuning, then experimented with self-attention at the decoder bottleneck and U-Net-style skip connections to improve spatial information flow and reconstruction fidelity.",
      results: [
        "Improved emotion-classification F1 from 0.72 to 0.88 through fine-tuning",
        "Reduced HiPerGator GPU runtime by 30% through training-workflow optimization",
        "Benchmarked GPT, Claude, and Gemini for zero-shot valence/arousal prediction, with Claude reaching 95% ground-truth alignment",
        "Redesigned evaluation methodology to improve confidence in model generalization and downstream comparisons",
        "Reduced RGB reconstruction loss by approximately 42% after decoder architecture improvements",
        "Reduced LiDAR reconstruction loss by approximately 50%",
        "Stabilized KL divergence around 0.17–0.18 across a subsequent 100-epoch run without recurrence of collapse",
        "Improved training observability and failure diagnosis through TensorBoard-based monitoring",
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
      goal: "Automate manual financial spend analysis while keeping sensitive client data and financial computation under local control.",
      context:
        "I owned the analytics pipeline end-to-end, replacing manual Excel-based analysis with an automated system operating against local SQLite financial databases. I used pandas for financial calculations and transformations, SQLAlchemy for database access, and openpyxl for Excel ingestion and reporting. An early version allowed the LLM to perform both computation and interpretation, which exposed subtle arithmetic inconsistencies. I redesigned the architecture so the deterministic Python pipeline became the sole source of truth: raw and vendor-level financial data remained local, while only pre-computed category- and cost-center-level summaries were passed to Gemini 2.5 Pro for executive interpretation. I also generated independent Matplotlib visualizations and integrated the results into a Streamlit dashboard, with explicit failure handling ensuring an LLM/API failure could never modify the underlying financial calculations.",
      results: [
        "Reduced month-end close cycle time by approximately 20% against the existing operational baseline",
        "Validated the deterministic financial engine across 7 mathematical edge-case categories",
        "Kept zero raw or vendor-level financial data outside the local processing environment",
        "Built independent financial calculations and visualizations so LLM outputs could not alter numerical results",
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
      goal: "Transform a tightly coupled e-commerce backend into a more modular, secure, and maintainable service architecture.",
      context:
        "As a backend intern, I helped restructure an e-commerce platform being developed for eventual deployment by implementing 10+ Spring Boot microservices across product, categorization, search, cart, authentication, user, inventory, email, and media workflows. I implemented JWT-based authentication across protected API endpoints and restructured the underlying database schema to reduce redundancy and improve CRUD performance. I also worked on inter-service communication, adding better error handling and timeouts to prevent failures in one service from unnecessarily propagating across the system. Core REST workflows were validated through Postman within an Agile/Scrum development process using Jira, Confluence, Miro, and code reviews.",
      results: [
        "Improved API responsiveness by approximately 20% through database restructuring and CRUD optimization",
        "Reduced unauthorized access incidents by approximately 25% after implementing JWT-based authentication",
        "Built and integrated 10+ modular Spring Boot services covering core e-commerce workflows",
        "Improved service resilience through explicit downstream error handling and timeout behavior",
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
      goal: "Automate routine HR queries while ensuring sensitive policy answers remained grounded in verified company documentation.",
      context:
        "I joined Husqvarna's AI Lab when LLMs were still emerging technology. My initial work involved researching Transformer architectures and LLM capabilities and presenting feasibility findings to AI Lab leadership and senior stakeholders. After the research phase, I helped build the proposed HR assistant using LangChain, OpenAI, and Pinecone, with retrieval grounding responses in verified internal HR documents rather than relying solely on the model's own knowledge. I deployed the retrieval pipeline through Databricks and Gradio and implemented confidence-threshold guardrails so the assistant could decline unsupported questions rather than hallucinate policy information.",
      results: [
        "Automated 15%+ of routine, document-answerable HR queries",
        "Enabled 500+ employees to self-serve routine HR policy information",
        "Implemented retrieval-confidence guardrails that restricted responses to sufficiently grounded HR documentation",
        "Demonstrated an end-to-end path from AI feasibility research through retrieval architecture, guardrails, and internal deployment",
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
