const projects = [
  {
    type: "experience",
    tag: "SMILE Lab",
    title: "Research Assistant",
    description:
      "Built scalable PyTorch and multimodal LLM pipelines for image-based affect prediction. Improved validation accuracy by 12%, reduced HiPerGator GPU runtime by 20%, and reached 95% alignment with ground-truth ratings.",
    image: "./assets/experience/experience-01.png",
    bullets: [
      "Built a scalable PyTorch training pipeline for 118K+ images.",
      "Benchmarked 10 CNN and CLIP-ViT architectures for image-based affect prediction.",
      "Improved validation accuracy by 12% and reduced HiPerGator GPU runtime by 20%.",
      "Created an agentic multimodal pipeline using Claude, LLM APIs, structured outputs, and tool use.",
      "Reached 95% alignment with ground-truth valence and arousal ratings through zero-shot prompting.",
    ],
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
    bullets: [
      "Built an LLM-powered financial analytics bot for spend analysis and visual reporting.",
      "Integrated Mistral 7B and the Gemini API into the analytics workflow.",
      "Automated Excel-based financial pipelines to surface spending patterns and department trends.",
      "Mentored 2 interns while building the reporting and data workflow.",
      "Helped boost client profit margins by 10% and improve decision-making speed by 20%.",
    ],
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
    bullets: [
      "Built 5+ RESTful Java/Spring Boot microservices for an e-commerce platform.",
      "Worked on product management, cart, authentication, and Cloudinary integration services.",
      "Added JWT authentication to strengthen backend access control.",
      "Optimized CRUD operations and collaborated through Agile/Scrum reviews and delivery.",
      "Improved platform responsiveness by 20% and reduced unauthorized access by 25%.",
    ],
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
    bullets: [
      "Launched an AI-powered HR chatbot for department-wide support workflows.",
      "Used GPT4ALL-Falcon locally and the OpenAI API in production.",
      "Built the chatbot workflow with LangChain and Gradio.",
      "Automated 80% of HR processes and reduced response time by 30%.",
      "Cut down manual back-and-forth across departments.",
    ],
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
    bullets: [
      "Built a full-stack debt repayment platform with Python, FastAPI, LangGraph, Next.js, TypeScript, and Supabase.",
      "Architected a 4-agent LangGraph pipeline for personalized repayment planning.",
      "Connected the agent workflow to a FastAPI backend and Next.js frontend.",
      "Separated LLM reasoning from pre-computed financial math for reliable results.",
      "Delivered real-time amortization simulations under 200ms with 100% mathematical accuracy.",
    ],
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
    bullets: [
      "Created and deployed a full-stack housing platform for UF students.",
      "Built the frontend with HTML, CSS, JavaScript, and React.",
      "Built the backend with Go and deployed the stack on Vercel and Render.",
      "Created 20+ REST APIs with authentication, filtering, and concurrent request support.",
      "Served 100+ users with a scalable MongoDB backend and unit-tested APIs.",
    ],
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

async function openModal(trigger) {
  if (modal.classList.contains("is-open") || modal.classList.contains("is-closing")) return;

  const project = projects[activeProject];
  modalTrigger = trigger;
  modalTag.textContent = `${project.tag} / ${project.type === "project" ? "Project" : "Experience"}`;
  modalTitle.textContent = project.title;
  modalList.innerHTML = project.bullets.map((item) => `<li>${item}</li>`).join("");
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
