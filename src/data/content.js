export const profile = {
  name: "Aquib Ansari",
  title: "AI Engineer",
  location: "Karachi, Pakistan",
  email: "aquibahmed2000@gmail.com",
  phone: "+92 316 2595214",
  github: "https://github.com/aqib420",
  linkedin: "https://linkedin.com/in/aquib-ansari-641ba1200",
  summary:
    "AI Engineer with hands-on expertise in production agentic systems, LangGraph pipelines, LLM orchestration, and RAG-based semantic search. I design and ship end-to-end AI products — intelligent content automation, OAuth-integrated social agents, and hybrid ML forecasting services — deployed as high-performance FastAPI backends with real-time streaming.",
};

export const education = {
  school: "Habib University",
  location: "Karachi, Pakistan",
  degree: "Bachelor of Science in Computer Science",
  years: "2020 – 2025",
  focus:
    "Artificial Intelligence, Machine Learning (Neural Networks, Transformers, NLP), Data Science & Algorithms.",
};

export const experience = [
  {
    company: "BigGorillaApps",
    location: "Karachi, Pakistan",
    role: "AI Engineer",
    period: "Feb 2026 – Present",
    highlights: [
      {
        title: "Penny — AI Blog Content Agent",
        detail:
          "Conversational agent taking users from keyword research to a publish-ready blog post. Integrated DataForSEO and ValueSERP for live search/SERP intelligence, built a grounded content-gap analysis module, a brand-voice system, and AI-search-optimized outlines persisted to Supabase. Deterministic LangGraph multi-agent pipeline.",
      },
      {
        title: "Sonny — AI Social Media Manager Agent",
        detail:
          "Production LangGraph multi-agent system on NVIDIA Nemotron (NIM). Integrated Nango Cloud for multi-platform OAuth (Facebook, Instagram, TikTok), Supabase for state, Langfuse for observability, Pollinations AI for image generation. FastAPI + SSE streaming backend with live Facebook auto-posting.",
      },
      {
        title: "Giverr Donor Agent — PVER Agentic Workflow",
        detail:
          "Autonomous Plan-Verify-Execute-Review agentic system using LangGraph for donor-side auction participation, with custom real-time bidding and monitoring APIs.",
      },
      {
        title: "Skraggle — Donor Behavior Forecasting Service",
        detail:
          "Hybrid ML architecture (XGBoost + Prophet) to predict optimal ask-string amounts, refactored into a production FastAPI microservice — forecasted $650k+ in campaign revenue.",
      },
      {
        title: "Charity Agent — Multi-User RAG Platform",
        detail:
          "Scalable multi-user RAG system using vector embeddings and semantic search to automate partner discovery and stakeholder matching for non-profits.",
      },
    ],
  },
  {
    company: "Independent",
    location: "Remote",
    role: "Freelance NLP Developer",
    period: "Sep 2025 – Jan 2026",
    highlights: [
      {
        title: "Legal & professional services NLP",
        detail:
          "Built and fine-tuned text classification pipelines with Hugging Face Transformers for domain-specific legal terminology. Integrated OpenAI API alongside spaCy for entity recognition and preprocessing. Owned requirements through client handoff end-to-end.",
      },
    ],
  },
  {
    company: "Bewhoop",
    location: "Remote",
    role: "Machine Learning & AI Intern",
    period: "Jun 2025 – Aug 2025",
    highlights: [
      {
        title: "Semantic Similarity Search Engine",
        detail:
          "Built a high-performance recommendation engine using FAISS and Sentence Transformers over Supabase-stored event data, optimizing the vector embeddings pipeline for production inference latency.",
      },
    ],
  },
  {
    company: "Headstarter",
    location: "Remote",
    role: "Software Engineering Fellow",
    period: "Jul 2024 – Sep 2024",
    highlights: [
      {
        title: "2 full-stack AI applications",
        detail:
          "Built and deployed 2 full-stack AI applications in an Agile/Scrum environment, focused on real-time API integration, LLM-powered features, and scalable cloud communication.",
      },
    ],
  },
];

export const skills = [
  {
    category: "Agentic AI & LLMs",
    items: [
      "LangGraph (Multi-Agent Orchestration)",
      "PVER Architecture",
      "Multi-User RAG",
      "LLM Orchestration",
      "Prompt Engineering",
      "Langfuse",
      "FAISS",
      "XGBoost",
      "Prophet",
    ],
  },
  {
    category: "Models & Platforms",
    items: [
      "NVIDIA Nemotron (NIM)",
      "Pollinations AI",
      "OpenAI GPT-4",
      "Anthropic Claude",
      "Sentence Transformers",
      "BERT",
      "GPT-2",
      "LSTM",
    ],
  },
  {
    category: "APIs & Integrations",
    items: [
      "Nango Cloud (OAuth)",
      "DataForSEO",
      "ValueSERP",
      "Facebook Graph API",
      "Instagram API",
      "TikTok API",
      "WordPress REST API",
      "Supabase",
      "Neo4j (Cypher)",
    ],
  },
  {
    category: "Backend & DevOps",
    items: [
      "Python (Expert)",
      "FastAPI (SSE / Streaming)",
      "Flask",
      "SQL",
      "Docker",
      "GitHub Actions",
      "AWS",
      "VPS Deployment",
    ],
  },
  {
    category: "Data & Analytics",
    items: ["Pandas", "NumPy", "Scikit-learn", "Tableau", "MS SQL Server"],
  },
];

// Featured GitHub projects, grouped as selected. Each maps to a real repo at
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

export const keyResearchProjects = [
  {
    title: "Airbnb Graph Recommendation System",
    description:
      "Graph-based recommendation engine using Neo4j and Graph Neural Network concepts for link prediction, delivering personalized property discovery through graph embeddings and Cypher-based traversal.",
  },
  {
    title: "Deepfake Detection & Computer Vision",
    description:
      "Real-time deepfake detection system using transfer learning (ReActNet / MobileNet) trained on Celeb-DFv2, optimized for low-latency mobile inference.",
  },
];
