/**
 * SINGLE SOURCE OF TRUTH
 *
 * Every fact on this site comes from this file. The previous site drifted four
 * years out of date because the same facts were pasted into markup by hand;
 * keeping them here means one edit updates the hero, the experience timeline,
 * the /resume page and the JSON-LD together.
 *
 * PUBLISHING NOTE: this file is public. The internal GitLab host is
 * deliberately absent and must stay that way.
 * Platform scale figures and the Stratus programme name are cleared for
 * publication; the internal repo URL is not.
 */

export type Role = {
  title: string;
  start: string;
  end: string;
  scope?: string;
  bullets: string[];
};

export type Employer = {
  company: string;
  note?: string;
  location: string;
  start: string;
  end: string;
  roles: Role[];
};

export const profile = {
  name: 'Yash Chheda',
  firstName: 'Yash',
  lastName: 'Chheda',
  title: 'Software Engineering Manager',
  discipline: 'Cloud Native Platform Engineering',
  company: 'Appian',
  location: 'Minneapolis, MN',
  email: 'yashchheda91@gmail.com',
  // Phone is intentionally omitted. A phone number on a Google-indexed page is
  // a spam and robocall magnet; recruiters can reach out by email or LinkedIn.
  links: {
    linkedin: 'https://www.linkedin.com/in/chhedayash',
    github: 'https://github.com/yashchheda',
  },
  resumePdf: '/Yash_Chheda_Resume.pdf',
} as const;

export const headline =
  'I lead the platform engineering team behind a multi-region Kubernetes fleet — and I build the systems and the team that keep it reliable under continuous audit.';

export const summary = [
  `Engineering leader with 12+ years across cloud-native platform engineering, full-stack development, and fintech. I manage a 10-engineer Cloud Native Platform Engineering team at Appian, owning the multi-account, multi-region Kubernetes and AWS fleet that runs Appian's internal and customer workloads.`,
  `The platform operates under continuous FedRAMP, SOC 2, HIPAA, PCI DSS and DoD IL5 audit, so velocity has to be built inside those constraints rather than in spite of them. I was one of the technical leads on the multi-year Stratus migration that moved customers off legacy infrastructure onto that platform.`,
  `Promoted four times in six years, from individual contributor to manager of the team behind the platform I helped build. Still hands-on in Go, Terraform, and design review — I think that is what makes technical management credible.`,
];

/** Headline metrics. Keep this list short: four is legible, eight is noise. */
export const metrics = [
  { value: '100+', label: 'Kubernetes clusters', detail: 'internal and customer workloads' },
  { value: '25+', label: 'AWS accounts', detail: 'across 25 AWS regions' },
  { value: '~$1M', label: 'Annual cloud savings', detail: 'capacity planning vs reactive scaling' },
  { value: '~40%', label: 'MTTR reduction', detail: 'via AIOps-driven automation' },
] as const;

/**
 * Capability areas, replacing the old "Projects" section. At 12 years with
 * nothing publishable, named side projects would be weaker than an honest
 * statement of what the work actually is.
 *
 * Deliberately phrased as capability, not metrics: the numbers live in
 * `metrics` and in the experience bullets. Do not add a figure here that is not
 * also true there.
 */
export const focusAreas = [
  {
    id: 'platform',
    label: 'Kubernetes platform',
    body: `Architecture direction for a multi-account, multi-region Kubernetes fleet: cluster topology, upgrade paths, and rollout safety for a multi-tenant estate carrying both internal and customer workloads. Cluster state is reconciled declaratively through GitOps rather than changed imperatively, so the fleet's desired state is reviewable and auditable.`,
    tags: ['Kubernetes', 'AWS', 'Terraform', 'Go', 'GitOps'],
  },
  {
    id: 'aiops',
    label: 'AIOps & operational toil',
    body: `Replacing human runbook steps with automation that acts before a person has to. Cut manual operational interventions ~35% and reduced MTTR ~40%, returning engineering capacity to roadmap delivery. Progressive delivery and SLO-driven rollback keep that automation safe to run unattended.`,
    tags: ['Observability', 'OpenTelemetry', 'eBPF', 'SLOs', 'Progressive delivery'],
  },
  {
    id: 'ai-platform',
    label: 'AI/ML platform',
    body: `Running model workloads on the same fleet as everything else: GPU capacity and scheduling, inference serving, and autoscaling shaped around how model traffic actually behaves. The harder half is doing it inside an audited boundary — an approved model inventory, retention rules for prompts and responses, and egress control on model calls.`,
    tags: ['GPU scheduling', 'Inference serving', 'KServe', 'AI governance'],
  },
  {
    id: 'compliance',
    label: 'Shipping under audit',
    body: `Contributing to audit readiness across FedRAMP Moderate/High, SOC 2, HIPAA, PCI DSS and DoD IL5 through platform and OS hardening against CIS Level 1 benchmarks, FIPS 140-3 validated cryptography, and control evidence. Supply-chain provenance — SBOMs, signed images, policy-as-code admission control — is part of the same job.`,
    tags: ['FedRAMP', 'DoD IL5', 'CIS benchmarks', 'FIPS 140-3', 'Supply chain'],
  },
  {
    id: 'finops',
    label: 'Cloud cost & FinOps',
    body: `Treating cost as a platform metric rather than a quarterly surprise: commitment coverage and effective savings rate tracked as standing KPIs, spend allocated down to the workload so teams see their own consumption, and GPU and token spend brought into the same view as the rest of the bill.`,
    tags: ['FinOps', 'Unit economics', 'Commitment strategy', 'Showback', 'FOCUS'],
  },
  {
    id: 'org',
    label: 'Teams & delivery',
    body: `Hiring, performance management and career development for a 10-engineer team, alongside quarterly delivery planning with product, SRE and security. Mentored engineers into independent owners as a technical mentor and squad coach.`,
    tags: ['Engineering management', 'Mentoring', 'Agile', 'Roadmapping'],
  },
] as const;

export const experience: Employer[] = [
  {
    company: 'Appian Corporation',
    location: 'McLean, VA · remote from Minneapolis, MN since Jan 2026',
    start: 'Oct 2019',
    end: 'Present',
    roles: [
      {
        title: 'Software Engineering Manager, Cloud Native Platform Engineering',
        start: 'Oct 2025',
        end: 'Present',
        scope:
          'Technical delivery owner for a 10-engineer platform team accountable for 100+ Kubernetes clusters across 25+ AWS accounts and 25 AWS regions, running both internal and customer workloads.',
        bullets: [
          'Drove AIOps-based automation of operational toil, cutting manual operational interventions ~35% and reducing MTTR ~40% — capacity returned directly to roadmap delivery.',
          'Lead cloud cost optimization across the fleet, delivering ~$1M in annual savings by tying capacity planning to growth forecasts rather than reactive scaling.',
          'Upgraded 100+ clusters across 25 regions through [[TBC:4]] Kubernetes minor versions in [[TBC:18]] months with zero customer-facing downtime, using staged rollout and automated pre-flight validation.',
          'Moved fleet configuration onto GitOps reconciliation, replacing imperative cluster changes with declarative desired state that is reviewed before it lands and auditable after it does.',
          'Extended the software supply chain with SBOM generation, container image signing and policy-as-code admission control, so provenance is enforced at deploy time rather than attested after the fact.',
          'Sustain audit readiness across FedRAMP Moderate/High, SOC 2, HIPAA, PCI DSS and DoD IL5 through platform and OS hardening (CIS Level 1 benchmarks), FIPS 140-3 validated cryptography, and control evidence — [[TBC:3]] assessments a year with [[TBC:zero]] platform findings.',
          'Brought AI workloads onto the platform: GPU node pool topology, scheduling and autoscaling for inference serving, lifting GPU utilization from [[TBC:~30%]] to [[TBC:~65%]] by sizing against real model traffic instead of peak provisioning.',
          'Extended the audited boundary to cover those AI workloads — approved model inventory, retention rules for prompts and responses, and egress control on model calls — so AI features ship under the same FedRAMP and IL5 controls as everything else.',
          'Matured FinOps practice from account-level reporting to workload-level unit economics, holding commitment coverage at [[TBC:~85%]] and an effective savings rate of [[TBC:~30%]], with spend shown back to owning teams.',
          'Raised platform delivery cadence from [[TBC:fortnightly]] to [[TBC:daily]] releases while holding change failure rate under [[TBC:5%]], across quarterly cycles with product, SRE and security stakeholders.',
          'Grew the team to 10 engineers with [[TBC:3]] internal promotions and [[TBC:zero]] regrettable departures, and cut new-engineer time to first production change from [[TBC:6]] to [[TBC:3]] weeks, while staying active in architecture and design review.',
        ],
      },
      {
        title: 'Technical Mentor, Software Development',
        start: 'Apr 2023',
        end: 'Oct 2025',
        scope:
          'Technical lead, Agile squad coach and mentor for the cloud platform team through the multi-year Stratus migration.',
        bullets: [
          'Served as one of the technical leads on the Stratus cloud migration, moving [[TBC:400+]] customer sites off legacy infrastructure onto Kubernetes-native infrastructure over [[TBC:~3]] years — a programme spanning multiple squads.',
          'Mentored 4 engineers through weekly 1:1s focused on professional growth, and contributed to staffing, capacity planning and onboarding across the platform organisation.',
          'Served as Agile squad coach — sprint planning, estimation, reviews and retrospectives — while remaining a hands-on contributor in Go and Terraform.',
          'Acted as escalation point for high-visibility production incidents, converting findings into automation and runbooks instead of tribal knowledge.',
          'Raised the technical bar on Go, Terraform and Kubernetes practice through design reviews, pairing and documentation that shortened new-engineer ramp time.',
        ],
      },
      {
        title: 'Senior Product Engineer, Cloud Native Infrastructure',
        start: 'Sep 2021',
        end: 'Mar 2023',
        bullets: [
          'Built the Kubernetes-native foundation for the Stratus platform, growing adoption to cover the majority of all Appian customer deployments.',
          'Developed Kubernetes operator modules in Go and provisioned AWS infrastructure as code with Terraform.',
          'Built AWS integrations to provision secure, scalable customer Kubernetes sites, and extended the cloud operations dashboard into the single entry point for every activity on a customer cloud site.',
          'Root-caused production failures where customer deployments would not start, turning each into a permanent platform fix rather than a one-off recovery.',
          'Isolated a Linux kernel defect that froze customer site volumes and drove it through AWS support to a fix shipped on the AWS side.',
          'Designed, shipped and documented Appian Web APIs, and led two engineers as secondary squad coach across sprint planning, estimation, reviews and retrospectives.',
        ],
      },
      {
        title: 'Application Engineer → Senior Application Engineer, Business Applications',
        start: 'Oct 2019',
        end: 'Sep 2021',
        bullets: [
          'Architected and delivered customer applications end to end on the Appian low-code platform in SAIL, from requirements through design, development, testing and maintenance.',
          'Cut a core business process from 28–30 minutes to 4–5 seconds by refactoring legacy logic and process models.',
          'Designed and built the mission-critical Appian Certification programme application.',
          'Replaced third-party plugins with equivalent in-product features written in Java, and developed Java-based availability checks for critical third-party integrations using RPA bots.',
          'Built nightly synchronisation between Appian and external systems including Salesforce and HRIS, and mentored new developers; received department Badge Awards for top performance and ticket resolution speed.',
        ],
      },
    ],
  },
  {
    company: 'Ethos Lending LLC',
    note: 'acquired by One American Bank',
    location: 'Irvine, CA',
    start: 'Dec 2016',
    end: 'Oct 2019',
    roles: [
      {
        title: 'Software Engineer',
        start: 'Dec 2016',
        end: 'Oct 2019',
        scope:
          "Full-stack engineer on a digital mortgage lending platform, retained through the company's acquisition by One American Bank.",
        bullets: [
          'Built the microservices architecture for a fintech lending platform: .NET Core 2.1 and C# 7 Web APIs, Vue.js and Razor front end, MS SQL Server, deployed as Azure App Service containers.',
          'Designed the Azure API Management gateway, routing external third-party traffic through an internal conversation logging proxy to backend services.',
          'Implemented OAuth 2.0 authorization via IdentityServer4, validating access tokens on every request entering the gateway, and delivered single sign-on across the application suite.',
          'Created CI/CD build and release pipelines from scratch, managed containers with Docker Compose, and migrated an in-house queue implementation to RabbitMQ.',
          'Added test coverage with Coverlet, OpenAPI documentation via Swagger UI, and exception logging through Application Insights.',
          'Built Encompass SDK plugins to update loans, delivered an in-house eSign and document merge feature, and redesigned the Broker Portal UI.',
        ],
      },
    ],
  },
];

export const earlierExperience = [
  {
    company: 'Zagace Inc.',
    role: 'Full Stack Web Developer',
    location: 'San Jose, CA',
    period: '2016',
    detail: 'SaaS ERP product on the Yii PHP framework with PostgreSQL and an AngularJS front end.',
  },
  {
    company: 'California State University, Fullerton',
    role: 'Web Developer',
    location: 'Fullerton, CA',
    period: '2015–2016',
    detail: 'Departmental web applications in ASP.NET and C# with Better CMS.',
  },
  {
    company: 'CavIT Pvt. Ltd.',
    role: 'Software Development Coordinator',
    location: 'Mumbai, India',
    period: '2013–2014',
    detail: 'Vacation booking portal in ASP.NET and VB.NET backed by MS SQL Server.',
  },
] as const;

export const skills = [
  {
    label: 'Leadership',
    items: [
      'Team Management (10 reports)',
      'Hiring & Onboarding',
      'Mentoring & Coaching',
      'Agile / Scrum',
      'Roadmap & Release Planning',
      'Incident Command',
    ],
  },
  {
    label: 'Cloud, DevOps & SRE',
    items: [
      'AWS',
      'Kubernetes',
      'Docker',
      'Terraform',
      'Linux',
      'Azure',
      'GitOps',
      'Infrastructure as Code',
      'Progressive delivery',
      'AIOps',
      'Observability',
      'OpenTelemetry',
      'eBPF / Cilium',
      'SBOM & image signing',
      'Policy-as-code admission control',
      'GitLab CI',
      'Azure DevOps',
      'Git',
    ],
  },
  {
    label: 'AI/ML platform',
    items: [
      'GPU capacity & scheduling',
      'Inference serving',
      'KServe',
      'Model autoscaling',
      'AI governance under audit',
      'Approved model inventory',
    ],
  },
  {
    label: 'FinOps',
    items: [
      'Commitment strategy (SP / RI)',
      'Commitment coverage & effective savings rate',
      'Unit economics (cost per workload)',
      'Showback & chargeback',
      'Tag governance',
      'Anomaly detection & forecasting',
      'FOCUS',
      'GPU & token spend',
    ],
  },
  { label: 'Languages', items: ['Go', 'Java', 'C#', 'SAIL (Appian)', 'SQL', 'Shell / Bash', 'JavaScript'] },
  { label: 'Platforms', items: ['Appian', 'ASP.NET Core', 'Spring', 'REST APIs', 'Node.js', 'Vue.js', 'RabbitMQ'] },
  { label: 'Databases', items: ['PostgreSQL', 'MS SQL Server', 'MySQL', 'MongoDB', 'Redis', 'SOQL'] },
  {
    label: 'Compliance',
    items: [
      'FedRAMP Moderate & High',
      'SOC 2',
      'HIPAA',
      'PCI DSS',
      'DoD IL5',
      'DoDIN APL',
      'IRAP',
      'Cyber Essentials Plus',
      'CIS Level 1 benchmarks',
      'FIPS 140-3',
    ],
  },
] as const;

export const education = [
  {
    degree: 'M.S. Computer Science',
    school: 'California State University, Fullerton',
    period: '2016',
    location: 'Fullerton, CA',
  },
  {
    degree: 'B.E. Information Technology',
    // The old site named the college and the resume named the university.
    // Both are correct — Somaiya is affiliated to Mumbai — and the college
    // name is the more recognisable of the two, so show both.
    school: 'K.J. Somaiya College of Engineering, University of Mumbai',
    period: '2013',
    location: 'Mumbai, India',
  },
] as const;

export const certifications = [
  { name: 'Appian Certified Lead Developer', year: '2021' },
  { name: 'Appian Certified Senior Developer' },
  { name: 'C/C++ Certified Programmer' },
] as const;

/** Terminal hero content. Static by design — no fake typing, no fake shell. */
export const terminalLines = [
  { prompt: true, text: 'whoami' },
  { text: 'yash chheda — software engineering manager, cloud native platform engineering' },
  { prompt: true, text: 'kubectl get clusters --all-accounts -o wide' },
  { text: 'READY   100+ clusters   25+ AWS accounts   25 regions', status: 'ok' as const },
  { prompt: true, text: 'cat compliance/posture.txt' },
  { text: 'FedRAMP Mod/High · SOC 2 · HIPAA · PCI DSS · DoD IL5 · IRAP · CE+', status: 'ok' as const },
  { prompt: true, text: 'git log --oneline --author=yash | head -1' },
  { text: 'stratus: migrate customers off legacy infra → kubernetes-native' },
] as const;
