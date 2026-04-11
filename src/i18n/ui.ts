export const ui = {
  en: {
    // Nav
    'nav.product': 'Product',
    'nav.technology': 'Technology',
    'nav.useCases': 'Use Cases',
    'nav.openSource': 'Open Source',
    'nav.docs': 'Docs',
    'nav.about': 'About',
    'nav.bookDemo': 'Book Demo',
    'nav.github': 'GitHub',
    'nav.langSwitch': '中文',

    // Footer
    'footer.tagline': 'The governed runtime for embodied agents.',
    'footer.product': 'Product',
    'footer.runtimeCore': 'Runtime Core',
    'footer.ecmSystem': 'ECM System',
    'footer.governance': 'Governance',
    'footer.openSource': 'Open Source',
    'footer.documentation': 'Documentation',
    'footer.contributing': 'Contributing',
    'footer.company': 'Company',
    'footer.about': 'About',
    'footer.contact': 'Contact',
    'footer.research': 'Research',
    'footer.copyright': '\u00A9 2026 AEROS \u00B7 Apache 2.0',
    'footer.built': 'Built for embodied intelligence.',
  },
  zh: {
    // Nav
    'nav.product': '产品',
    'nav.technology': '技术架构',
    'nav.useCases': '落地场景',
    'nav.openSource': '开源生态',
    'nav.docs': '文档',
    'nav.about': '关于我们',
    'nav.bookDemo': '预约 Demo',
    'nav.github': 'GitHub',
    'nav.langSwitch': 'EN',

    // Footer
    'footer.tagline': '让具身智能体跑得稳、管得住。',
    'footer.product': '产品',
    'footer.runtimeCore': '运行时核心',
    'footer.ecmSystem': 'ECM 系统',
    'footer.governance': '治理',
    'footer.openSource': '开源生态',
    'footer.documentation': '文档',
    'footer.contributing': '参与贡献',
    'footer.company': '公司',
    'footer.about': '关于我们',
    'footer.contact': '联系我们',
    'footer.research': '研究',
    'footer.copyright': '\u00A9 2026 AEROS \u00B7 Apache 2.0',
    'footer.built': '为具身智能而造。',
  },
} as const;

export type UIKey = keyof typeof ui.en;
