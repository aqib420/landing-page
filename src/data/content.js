export const profile = {
  name: "Aquib Ansari",
  title: "AI Engineer",
  tagline: "Production Agentic Systems, RAG & Applied ML",
  email: "aquibahmed2000@gmail.com",
  phone: "+92 316 2595214",
  github: "https://github.com/aqib420",
  linkedin: "https://linkedin.com/in/aquib-ansari-641ba1200",
  summary:
    "AI Engineer who owns production AI products end-to-end — architecture, backend, deployment, and client delivery. I ship LangGraph multi-agent systems, RAG pipelines, MCP tool integrations, and LLM security guardrails on FastAPI, used live by non-profit and business clients. Backed by applied research in low-resource NLP and computer vision, with technical reports published on Zenodo.",
};

export const education = {
  school: "Habib University",
  location: "Karachi, Pakistan",
  degree: "Bachelor of Science in Computer Science",
  years: "2020 – 2025",
  focus: "Relevant coursework: Natural Language Processing, Computer Vision.",
};

// A bullet is either a plain string or { lead, text } where `lead` is shown
// emphasised in front of the text.
export const experience = [
  {
    company: "BigGorillaApps",
    location: "London, United Kingdom (Remote)",
    role: "AI Engineer",
    period: "Feb 2026 – Present",
    summary:
      "Core engineer on a small team shipping five live AI products for non-profit and business clients.",
    groups: [
      {
        name: "Skraggle Assist",
        tagline: "AI assistant for Skraggle's non-profit fundraising and CRM platform",
        bullets: [
          "Develop the LangGraph agent (Planner → Executor → Gate → Responder, FastAPI + SSE) that generates branded landing pages, designed emails, and donor segments from plain-language requests.",
          "Built a Playwright crawler that learns each charity's brand persona from its website, with Cloudflare bypass fallbacks (Scrapling/Patchright), sitemap discovery, resumable crawls, and single-page recrawl; content feeds a Qdrant RAG layer whose answers cite source URLs.",
          "Shipped the natural-language segment builder: the LLM converts requests such as “lapsed donors in London” into the platform's segment-filter API payload, resolving IDs through lookup APIs.",
          "Architected a 12-layer guardrail system (prompt injection, jailbreak, tool authorization and argument validation, data-leakage prevention, malicious URLs, scope control), verified by 50+ automated tests.",
          "Led a 13-category production-readiness audit (tenant isolation, BYOK, cost controls, observability); uncovered a cross-tenant data-access flaw, added per-token rate limiting (20/min, 300/day), and per-call cost logging.",
        ],
      },
      {
        name: "crewGorilla",
        tagline: "multi-agent AI workspace for businesses",
        bullets: [
          "Consolidated standalone agents (Linda, Penny, Sonny, EVA) into one supervisor-agent monorepo with rule-based routing, @mention agent targeting, and a shared Supabase context store.",
          "Built 10 MCP server integrations (Gmail, Google Calendar, Drive, Outlook Mail and Calendar, OneDrive, Jira, Zoom, HubSpot, Notion) connecting agents to client tools through Nango-managed OAuth.",
          "Secured all five chat endpoints (supervisor + four agents) with Redis-backed per-user rate limiting and two-tier input guardrails (regex pre-filter + LLM classifier) that also scan uploaded documents for injected prompts.",
          "Added document-to-knowledge-base ingestion for per-user clone agents, reusing the Qdrant RAG pipeline so agents answer from uploaded PDFs and DOCX files.",
        ],
      },
      {
        name: "Agent products and analytics",
        tagline: "Sonny, Penny, Giverr, Skraggle analytics",
        bullets: [
          {
            lead: "Sonny (AI social media manager)",
            text: "LangGraph multi-agent system with Facebook publishing, Flux image generation, multi-platform OAuth via Nango, and Langfuse prompt caching that cut per-turn overhead.",
          },
          {
            lead: "Penny (AI blog writer)",
            text: "five-node LangGraph pipeline on NVIDIA NIM that runs brand onboarding, keyword and SERP research, outline, article, and SEO checks, with auto-publishing tested across 8 scenarios.",
          },
          {
            lead: "Giverr Donor Agent",
            text: "autonomous Plan-Verify-Execute-Review (PVER) workflow with real-time API integrations for decision-making on a live bidding platform; plus a draft-first, five-stage campaign creation agent.",
          },
          {
            lead: "Skraggle analytics",
            text: "turned research code into a production XGBoost + Prophet forecasting service projected to drive $650k+ in campaign revenue; built donor churn (30/60/90-day), RFM, and smart-ask scoring.",
          },
        ],
      },
    ],
  },
  {
    company: "Independent",
    location: "Remote",
    role: "Freelance NLP Developer",
    period: "Sep 2025 – Jan 2026",
    groups: [
      {
        bullets: [
          "Delivered confidential NLP solutions for legal-sector clients: fine-tuned Hugging Face text-classification pipelines and integrated the OpenAI API with spaCy preprocessing, from requirements to handoff.",
        ],
      },
    ],
  },
  {
    company: "Bewhoop",
    location: "Remote",
    role: "Machine Learning & AI Intern",
    period: "Jun 2025 – Aug 2025",
    groups: [
      {
        bullets: [
          "Engineered a real-time semantic similarity search engine (FAISS + Sentence Transformers) for production recommendations over Supabase data, optimizing the vector pipeline for lower latency.",
        ],
      },
    ],
  },
  {
    company: "Headstarter",
    location: "Remote",
    role: "Software Engineering Fellow",
    period: "Jul 2024 – Sep 2024",
    groups: [
      {
        bullets: [
          "Built and deployed 2 full-stack AI applications in an Agile/Scrum environment, focused on real-time API integration and LLM-powered features.",
        ],
      },
    ],
  },
];

export const research = [
  {
    title: "Sentiment Analysis of Roman Urdu Using LSTM, BERT, and GPT-2",
    authors: "A. Ansari",
    doi: "10.5281/zenodo.23836675",
    code: "https://github.com/aqib420/RomanUrduSentimentAnalysis",
    bullets: [
      "Built a four-class (Negative, Positive, Neutral, Abusive) classifier for code-mixed Roman Urdu by merging a sentiment corpus with the RUHSOLD hate-speech dataset, expanding the minority Abusive class 4× with synonym-replacement augmentation.",
      "Benchmarked LSTM, multilingual BERT, and GPT-2: fine-tuned GPT-2 performed best, beating mBERT despite English-only pre-training.",
    ],
    stats: [
      { value: "70.24%", label: "accuracy (GPT-2)" },
      { value: "0.65", label: "macro-F1" },
      { value: "4×", label: "Abusive-class expansion" },
    ],
  },
  {
    title: "Identification of South Asian Musical Instruments Using CNNs",
    authors: "S. Qureshi, F. Haseeb, A. Ansari",
    doi: "10.5281/zenodo.23829481",
    code: "https://github.com/aqib420/South-Asian-Identification-Tensorflow",
    bullets: [
      "Curated a new dataset of ~6,000 four-second audio clips across 15 classes covering sitar, bansuri, harmonium, tabla, and their combinations, collected from YouTube performances and segmented and mixed with Pydub.",
      "Converted clips to mel-spectrograms (Torchaudio) and trained a multi-label CNN in TensorFlow/Keras, reaching 0.94 precision, recall, and F1 against 45% accuracy for a KNN baseline.",
    ],
    stats: [
      { value: "0.94", label: "precision / recall / F1" },
      { value: "45%", label: "KNN baseline accuracy" },
      { value: "~6,000", label: "clips, 15 classes" },
    ],
  },
  {
    title: "Deep Fake Detection Using Transfer Learning with the ReActNet-MobileNet Architecture",
    authors: "A. Ansari, H. T. Ahmed, D. R. Areshia",
    doi: "10.5281/zenodo.23837621",
    code: "https://github.com/aqib420/CV-Project-me-",
    bullets: [
      "Built a leakage-free, video-level data pipeline for Celeb-DF (v2) with OpenCV frame extraction and class-balanced sampling from 106k+ frames.",
      "Fine-tuned an ImageNet-pre-trained binary neural network (ReActNet) for efficient real-vs-fake detection and analysed overfitting across training schedules.",
    ],
    stats: [
      { value: "106k+", label: "frames sampled" },
      { value: "Celeb-DF v2", label: "dataset" },
    ],
  },
];

export const skills = [
  {
    category: "Agentic AI & LLMs",
    items: [
      "LangGraph",
      "MCP",
      "RAG",
      "PVER",
      "Tool Calling",
      "Prompt Engineering",
      "Langfuse",
      "Claude",
      "GPT-4",
      "NVIDIA NIM",
    ],
  },
  {
    category: "LLM Security",
    items: [
      "Prompt-Injection/Jailbreak Guardrails",
      "Tool Authorization",
      "Tenant Isolation",
      "Rate Limiting",
      "Readiness Audits",
    ],
  },
  {
    category: "Machine Learning",
    items: [
      "PyTorch",
      "TensorFlow/Keras",
      "Hugging Face Transformers",
      "Scikit-learn",
      "BERT/GPT-2/LSTM",
      "CNNs",
      "OpenCV",
      "XGBoost",
      "Prophet",
    ],
  },
  {
    category: "Backend & Cloud",
    items: [
      "Python",
      "FastAPI (SSE)",
      "Flask",
      "REST",
      "SQL",
      "AWS",
      "Docker",
      "Redis",
      "GitHub Actions",
      "Playwright",
    ],
  },
  {
    category: "Data & Retrieval",
    items: [
      "Qdrant",
      "FAISS",
      "Supabase",
      "PostgreSQL",
      "Neo4j (Cypher)",
      "Sentence Transformers",
      "Pandas",
      "NumPy",
    ],
  },
];

// Featured GitHub projects. Each maps to a real repo at
// https://github.com/aqib420/<repo>
export const projects = [
  {
    repo: "FAISS-Recommendation",
    title: "FAISS Event Recommendation Engine",
    description:
      "Semantic similarity search over an event marketplace using FAISS and Sentence Transformers, serving real-time recommendations from Supabase-stored data.",
    tags: ["FAISS", "Sentence Transformers", "Python", "Supabase"],
    url: "https://github.com/aqib420/FAISS-Recommendation",
  },
  {
    repo: "english-to-french-transformer",
    title: "English → French Transformer",
    description:
      "Machine translation model built with a BART transformer architecture, trained for English-to-French sequence translation.",
    tags: ["Transformers", "BART", "NLP", "Jupyter"],
    url: "https://github.com/aqib420/english-to-french-transformer",
  },
  {
    repo: "RomanUrduSentimentAnalysis",
    title: "Roman Urdu Sentiment Engine",
    description:
      "Multi-class sentiment classifier for code-switched Roman Urdu using BERT, GPT-2, and LSTM architectures, with an added class for abusive content detection and data augmentation for low-resource NLP.",
    tags: ["BERT", "GPT-2", "LSTM", "NLP"],
    url: "https://github.com/aqib420/RomanUrduSentimentAnalysis",
  },
  {
    repo: "FastAPI",
    title: "FastAPI Backend Services",
    description:
      "Production-style FastAPI backend patterns — streaming responses, service structure, and API design used across agentic and ML-serving projects.",
    tags: ["FastAPI", "Python", "REST"],
    url: "https://github.com/aqib420/FastAPI",
  },
  {
    repo: "Loadbalancing-and-Containerization",
    title: "Load Balancing & Containerization",
    description:
      "Docker Compose orchestration of web, Redis, and PostgreSQL services with Nginx as a reverse proxy load balancing traffic across multiple web instances.",
    tags: ["Docker", "Nginx", "PostgreSQL", "Redis"],
    url: "https://github.com/aqib420/Loadbalancing-and-Containerization",
  },
  {
    repo: "portfolio-ci-cd-k8s",
    title: "CI/CD Pipeline on Kubernetes",
    description:
      "Automated CI/CD pipeline deploying containerized services to Kubernetes, covering build, test, and rollout stages.",
    tags: ["Kubernetes", "CI/CD", "Shell", "Docker"],
    url: "https://github.com/aqib420/portfolio-ci-cd-k8s",
  },
  {
    repo: "khidmat",
    title: "Khidmat — Nonprofit Platform",
    description:
      "Web project built for EDAP Pakistan, a nonprofit initiative, focused on accessible service delivery for the community.",
    tags: ["HTML", "CSS", "JavaScript"],
    url: "https://github.com/aqib420/khidmat",
  },
  {
    repo: "bewhoop-outreach",
    title: "Bewhoop Outreach Automation",
    description:
      "Lead generation automation tooling built to streamline outreach workflows for the Bewhoop team.",
    tags: ["Python", "Automation"],
    url: "https://github.com/aqib420/bewhoop-outreach",
  },
];
