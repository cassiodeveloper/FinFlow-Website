(function () {
  var STRIPE_STANDARD_URL = 'https://buy.stripe.com/fZucN4duldoV65J8bnbsc0g';
  var STRIPE_PREMIUM_URL = 'https://buy.stripe.com/28EfZg75X84B79N2R3bsc0h';

  var I18N = {
    pt: {
      seo_title: 'FinFlow | Controle financeiro inteligente',
      seo_description: 'FinFlow ajuda voce a acompanhar gastos, receitas e saldo mensal com clareza e rapidez.',
      menu_features: 'Recursos',
      menu_plans: 'Planos',
      hero_badge: 'Controle financeiro pessoal',
      hero_title: 'Organize seu dinheiro em segundos, sem planilha complicada.',
      hero_subtitle: 'Registre entradas e saidas rapido, acompanhe saldo por conta e veja insights mensais em uma experiencia limpa.',
      hero_cta_primary: 'Ver planos',
      hero_cta_secondary: 'Explorar recursos',
      f1_title: 'Input rapido',
      f1_desc: 'Lance transacoes em segundos e mantenha sua rotina financeira em dia.',
      f2_title: 'Resumo claro',
      f2_desc: 'Saldo, receitas e despesas em uma visao simples e objetiva.',
      f3_title: 'Insights mensais',
      f3_desc: 'Entenda para onde seu dinheiro esta indo por categorias e tendencia.',
      preview_greeting: 'Ola, Cassio Pereira',
      preview_period: 'abril 2026 - Todas as contas',
      preview_month: 'abril 2026',
      preview_new_entry: 'NOVO LANCAMENTO',
      preview_main_account: 'Conta principal',
      preview_input_hint: '-20 almoco mercado ou +1000 salario',
      preview_recent: 'Recentes',
      preview_view_all: 'ver todos >',
      preview_balance_label: 'SALDO',
      preview_balance_value: 'R$ 1.548,46',
      preview_income_label: 'ENTROU',
      preview_income_value: 'R$ 2.070,00',
      preview_expense_label: 'SAIU',
      preview_expense_value: 'R$ 521,54',
      preview_tx_1_name: 'amigo',
      preview_tx_1_meta: 'Outros ganhos - Conta principal - 08/04',
      preview_tx_1_amount: '+R$ 50,00',
      preview_tx_2_name: 'roupa',
      preview_tx_2_meta: 'Vestuario - Conta principal - 08/04',
      preview_tx_2_amount: '-R$ 402,94',
      preview_tx_3_name: 'peca do carro',
      preview_tx_3_meta: 'Transporte - Conta principal - 08/04',
      preview_tx_3_amount: '-R$ 68,60',
      preview_tx_4_name: 'pagamento Marcos',
      preview_tx_4_meta: 'Freelance - Banco A - 07/04',
      preview_tx_4_amount: '+R$ 20,00',
      preview_insight_label: 'PARA ONDE VAI MEU DINHEIRO',
      preview_insight_text: 'Voce gasta 19,5% da renda com Vestuario (categoria que mais consome no periodo).',
      preview_insight_link: 'Ver analise completa',
      plans_title: 'Escolha o plano ideal para sua rotina',
      plans_subtitle: 'O FinFlow nao possui plano gratis. Escolha entre Standard ou Premium.',
      standard_tag: 'Standard',
      standard_title: 'FinFlow Standard',
      standard_price: 'Preco mensal',
      standard_note: 'Ideal para controle financeiro direto e objetivo.',
      standard_f1: 'Dashboard financeiro mensal',
      standard_f2: 'Lancamentos por categorias',
      standard_f3: 'Relatorios essenciais',
      standard_f4: '1 conta financeira',
      standard_cta: 'Assinar Standard',
      premium_tag: 'Premium',
      premium_badge: 'Mais escolhido',
      premium_title: 'FinFlow Premium',
      premium_price: 'Preco mensal',
      premium_note: 'Para quem quer automacao e analise financeira avancada.',
      premium_f1: 'Tudo do Standard',
      premium_f2: 'Contas financeiras ilimitadas',
      premium_f3: 'Input inteligente com IA',
      premium_f4: 'Insights e analises avancadas',
      premium_cta: 'Assinar Premium',
      final_title: 'Pronto para ter controle financeiro real?',
      final_subtitle: 'Escolha um plano e comece hoje com o FinFlow.',
      final_cta: 'Ir para planos',
      footer_copy_prefix: '(c)',
      footer_copy_suffix: 'FinFlow. Todos os direitos reservados.',
      footer_features: 'Recursos',
      footer_plans: 'Planos',
      footer_contact: 'Contato',
      theme_toggle_light: 'Light',
      theme_toggle_dark: 'Dark'
    },
    en: {
      seo_title: 'FinFlow | Smart personal finance',
      seo_description: 'FinFlow helps you track spending, income, and monthly balance with clarity and speed.',
      menu_features: 'Features',
      menu_plans: 'Plans',
      hero_badge: 'Personal finance control',
      hero_title: 'Organize your money in seconds, no complex spreadsheets.',
      hero_subtitle: 'Track income and expenses quickly, monitor account balances, and get clear monthly insights.',
      hero_cta_primary: 'View plans',
      hero_cta_secondary: 'Explore features',
      f1_title: 'Quick input',
      f1_desc: 'Add transactions in seconds and keep your finances updated.',
      f2_title: 'Clear summary',
      f2_desc: 'Balance, income, and expenses in one clean view.',
      f3_title: 'Monthly insights',
      f3_desc: 'Understand where your money goes by category and trend.',
      preview_greeting: 'Hello, Cassio Pereira',
      preview_period: 'April 2026 - All accounts',
      preview_month: 'April 2026',
      preview_new_entry: 'NEW ENTRY',
      preview_main_account: 'Main account',
      preview_input_hint: '-20 lunch grocery or +1000 salary',
      preview_recent: 'Recent',
      preview_view_all: 'view all >',
      preview_balance_label: 'BALANCE',
      preview_balance_value: '$1,548.46',
      preview_income_label: 'INCOME',
      preview_income_value: '$2,070.00',
      preview_expense_label: 'EXPENSE',
      preview_expense_value: '$521.54',
      preview_tx_1_name: 'friend',
      preview_tx_1_meta: 'Other income - Main account - 04/08',
      preview_tx_1_amount: '+$50.00',
      preview_tx_2_name: 'clothes',
      preview_tx_2_meta: 'Clothing - Main account - 04/08',
      preview_tx_2_amount: '-$402.94',
      preview_tx_3_name: 'car part',
      preview_tx_3_meta: 'Transport - Main account - 04/08',
      preview_tx_3_amount: '-$68.60',
      preview_tx_4_name: 'Marcos payment',
      preview_tx_4_meta: 'Freelance - Bank A - 04/07',
      preview_tx_4_amount: '+$20.00',
      preview_insight_label: 'WHERE MY MONEY GOES',
      preview_insight_text: 'You spend 19.5% of your income on Clothing (highest spending category in this period).',
      preview_insight_link: 'View full analysis',
      plans_title: 'Pick the plan that fits your routine',
      plans_subtitle: 'FinFlow has no free plan. Choose between Standard or Premium.',
      standard_tag: 'Standard',
      standard_title: 'FinFlow Standard',
      standard_price: 'Monthly price',
      standard_note: 'Ideal for direct and straightforward financial control.',
      standard_f1: 'Monthly financial dashboard',
      standard_f2: 'Category-based transactions',
      standard_f3: 'Essential reports',
      standard_f4: '1 financial account',
      standard_cta: 'Subscribe Standard',
      premium_tag: 'Premium',
      premium_badge: 'Most popular',
      premium_title: 'FinFlow Premium',
      premium_price: 'Monthly price',
      premium_note: 'For users who want automation and advanced financial analysis.',
      premium_f1: 'Everything in Standard',
      premium_f2: 'Unlimited financial accounts',
      premium_f3: 'AI-powered smart input',
      premium_f4: 'Advanced insights and analytics',
      premium_cta: 'Subscribe Premium',
      final_title: 'Ready to get real control over your finances?',
      final_subtitle: 'Choose your plan and start with FinFlow today.',
      final_cta: 'Go to plans',
      footer_copy_prefix: '(c)',
      footer_copy_suffix: 'FinFlow. All rights reserved.',
      footer_features: 'Features',
      footer_plans: 'Plans',
      footer_contact: 'Contact',
      theme_toggle_light: 'Light',
      theme_toggle_dark: 'Dark'
    }
  };

  var langToggle = document.getElementById('lang-toggle');
  var themeToggle = document.getElementById('theme-toggle');

  var storedLang = localStorage.getItem('finflow_lang');
  var currentLang = storedLang === 'en' || storedLang === 'pt' ? storedLang : 'pt';

  var storedTheme = localStorage.getItem('finflow_theme');
  var currentTheme = storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : 'light';

  function setStripeLinks() {
    var standard = document.getElementById('standard-stripe');
    var premium = document.getElementById('premium-stripe');
    if (standard) standard.href = STRIPE_STANDARD_URL;
    if (premium) premium.href = STRIPE_PREMIUM_URL;
  }

  function applyI18n(lang) {
    var dict = I18N[lang] || I18N.pt;
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });

    langToggle.textContent = lang === 'pt' ? 'EN' : 'PT';
    applySeo(dict);
    updateThemeButtonLabel();
  }

  function applySeo(dict) {
    if (dict.seo_title) document.title = dict.seo_title;
    if (dict.seo_description) {
      setMetaContent('seo-description', dict.seo_description);
      setMetaContent('og-description', dict.seo_description);
      setMetaContent('twitter-description', dict.seo_description);
    }
    if (dict.seo_title) {
      setMetaContent('og-title', dict.seo_title);
      setMetaContent('twitter-title', dict.seo_title);
    }
  }

  function setMetaContent(id, value) {
    var el = document.getElementById(id);
    if (el) el.setAttribute('content', value);
  }

  function applyTheme(theme) {
    currentTheme = theme === 'dark' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', currentTheme);
    localStorage.setItem('finflow_theme', currentTheme);
    document.cookie = 'finflow_theme=' + currentTheme + '; path=/; max-age=31536000; SameSite=Lax';
    updateThemeButtonLabel();
  }

  function updateThemeButtonLabel() {
    var dict = I18N[currentLang] || I18N.pt;
    themeToggle.textContent = currentTheme === 'light' ? dict.theme_toggle_dark : dict.theme_toggle_light;
  }

  langToggle.addEventListener('click', function () {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    localStorage.setItem('finflow_lang', currentLang);
    applyI18n(currentLang);
  });

  themeToggle.addEventListener('click', function () {
    applyTheme(currentTheme === 'light' ? 'dark' : 'light');
  });

  setStripeLinks();
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
  applyI18n(currentLang);
  applyTheme(currentTheme);

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.card, .plan-card').forEach(function (el, i) {
      el.animate(
        [
          { opacity: 0, transform: 'translateY(8px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ],
        { duration: 340, delay: i * 70, fill: 'both', easing: 'ease-out' }
      );
    });
  }
})();

