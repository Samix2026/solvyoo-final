const menuButton = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const langButton = document.querySelector('.lang-toggle');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

const copy = {
  ar: {
    skip:'انتقل إلى المحتوى', menu:'القائمة', navChallenges:'التحديات', navMethod:'المنهجية', navOutcomes:'المخرجات', navWhy:'لماذا سولفيو', book:'احصل على تشخيص أولي', bookNav:'ابدأ التشخيص', bookFinal:'ابدأ الآن — بدون التزام', heroEyebrow:'التشخيص، ترتيب الأولويات، التحول', visualHead:'الهامش غير المرئي', challengesEyebrow:'تحديات شائعة', methodEyebrow:'منهجية سولفيو', outcomesEyebrow:'ما الذي تحصل عليه', whyEyebrow:'لماذا سولفيو', frameworkEyebrow:'منهجية سولفيو التشخيصية', finalEyebrow:'ابدأ بوضوح', copyright:'© 2026 سولفيو للاستشارات', contactLinks:'روابط التواصل', emailLabel:'البريد الإلكتروني', whatsappLabel:'واتساب', linkedinLabel:'لينكدإن', xLabel:'إكس',
    heroTitle:'في أعمالك ربحية أكثر <span>مما تراه الآن</span>', heroLead:'نساعد أصحاب الشركات على اكتشاف فرص الربحية وتحسين الكفاءة وتحديد أولويات التنفيذ، اعتمادا على قراءة دقيقة للواقع المالي والتشغيلي.', learnMethod:'تعرف على منهجيتنا', trust1:'خبرة عملية تتجاوز 25 عاما', trust2:'قرارات مبنية على البيانات', trust3:'تركيز على التنفيذ',
    visualReading:'قراءة أولية للأداء', currentState:'الوضع الحالي', visibleView:'الرؤية المتاحة', afterDiagnosis:'بعد التشخيص', convertibleOpps:'فرص قابلة للتحويل', hiddenProfit:'ربحية كامنة لم تكتشف بعد', today:'اليوم', afterPriority:'بعد ترتيب الأولويات', visualNote:'تصور توضيحي لفكرة الربحية غير المرئية، ولا يمثل نتيجة تشخيص فعلية.',
    challengesTitle:'هل تبدو هذه التحديات مألوفة؟', challengesLead:'عندما تتحرك المبيعات ولا يظهر أثرها بوضوح على الأرباح، تكون المشكلة غالبا أعمق من بند تكلفة واحد أو قرار منفرد.', c1t:'الربحية أقل من المتوقع', c1d:'الإيرادات تتحرك، والأثر النهائي على الربح لا يظهر بوضوح.', c2t:'التكاليف ترتفع دون تفسير واضح', c2d:'مصروفات كثيرة وقرارات خفض صعبة، مع خطر تقليل ما يجب الاستثمار فيه.', c3t:'الفريق يعمل بجهد والنتائج أقل من المتوقع', c3d:'انشغال يومي مرتفع واجتماعات كثيرة، مع تقدم محدود في الأولويات الفعلية.', c4t:'المبادرات كثيرة والأولوية غير واضحة', c4d:'فرص متعددة، والسؤال الحقيقي: ما الذي يستحق التنفيذ أولا؟', callout:'هذه الأعراض لا تحتاج قائمة حلول جاهزة. تحتاج أولا إلى فهم السبب الحقيقي.', startDiagnosis:'ابدأ التشخيص',
    methodTitle:'من التشخيص<br>إلى أثر يمكن قياسه', methodLead:'نفهم ما يحدث فعلاً، نحدد أين الخلل، ونضع خطوة أولى واضحة', s1t:'التشخيص', s1d:'فهم الوضع الحالي بالأرقام والحقائق، وتحديد جذور المشكلة بعيدا عن الانطباعات العامة.', s2t:'تحديد الأولويات', s2d:'اختيار المبادرات الأعلى أثرا على الربحية والكفاءة والنمو، وفق جدوى واضحة.', s3t:'خريطة التنفيذ', s3d:'تحويل التوصيات إلى خطوات عملية قابلة للقياس، مع مسؤوليات ومؤشرات متابعة.',
    sampleTitle:'هذا ما يصلك خلال 24 ساعة', sampleLead:'مذكرة تشخيص أولية مبنية على إجاباتك، لا قالب جاهز', sampleMockLabel:'معاينة لمذكرة التشخيص الأولية', mockCompany:'منشأة تجارية — قطاع التجزئة', mockProblemTitle:'المشكلة كما فهمناها', mockProblemText:'تراجع في هوامش الربح رغم استقرار المبيعات، مع ارتفاع مستمر في المصاريف التشغيلية', mockCausesTitle:'فرضيات الأسباب الجذرية', mockCause1:'غياب تتبع دقيق للمصروفات حسب البنود', mockCause2:'عدم وجود موازنة تقديرية أو سقوف إنفاق', mockCause3:'ضعف الفصل بين المصاريف الشخصية والتشغيلية', mockBadge:'النسخة الكاملة تصل بريدك', ann3:'PDF جاهز للمشاركة مع شريكك أو فريقك', sampleCta:'احصل على تشخيصك',
    outcomesTitle:'قراءة أوضح لأعمالك.<br>وأولويات قابلة للتنفيذ.', outcomesLead:'الهدف ليس تسليم تقرير طويل. الهدف أن تعرف أين توجد الفرصة، وما الذي يجب تغييره، وما الذي يبدأ أولا.', o1:'رؤية دقيقة للوضع المالي والتشغيلي الحالي', o2:'فرص الربحية الأعلى أثرا', o3:'نقاط الهدر والتعطل وأسبابها', o4:'أولويات تنفيذ مرتبة وفق الأثر والجهد', o5:'توصيات عملية قابلة للقياس والمتابعة',
    whyTitle:'استشارة عملية لا تتوقف عند التقرير', whyLead:'خبرة في بيئات الأعمال والسوق السعودي، مع منهج يربط التحليل بالقرار والتنفيذ.', w1t:'خبرة تتجاوز 25 عاما', w1d:'خبرة عملية في الاستثمار، تطوير الأعمال، تحسين الخدمات، وقراءة تحديات الشركات.', w2t:'تركيز على الأثر', w2d:'ما نقترحه قابل للتنفيذ غداً، وليس مجرد رأي استشاري', w3t:'التشخيص قبل الحل', w3d:'لا نقفز إلى الحلول قبل فهم السبب الحقيقي وترتيب الأولويات وفق البيانات.',
    frameworkTitle:'نشخص قبل أن نقترح الحل', frameworkLead:'يعتمد التشخيص على إطار داخلي لقراءة صحة العمل، وفهم جذور المشكلة، وترتيب الأولويات قبل تقديم خطة التنفيذ.', frameworkFine:'في المرحلة الأولية تحصل على قراءة واضحة للمشكلة. خطة المعالجة التفصيلية تأتي ضمن العمل الاستشاري المدفوع.', finalTitle:'قبل أن تستثمر في مبادرة جديدة', finalLead:'اعرف أولا أين توجد أكبر فرصة للتحسين، وما الذي يستحق وقتك ومواردك.', whatsapp:'واتساب', footerText:'استشارات تنفيذية تساعد الشركات على اكتشاف فرص الربحية وتحويلها إلى أولويات عملية.', privacy:'سياسة الخصوصية'
  },
  en: {
    skip:'Skip to content', menu:'Menu', navChallenges:'Challenges', navMethod:'Methodology', navOutcomes:'Outcomes', navWhy:'Why Solvyoo', book:'Get an initial diagnosis', bookNav:'Start diagnosis', bookFinal:'Start now — no commitment', heroEyebrow:'Diagnose, Prioritize, Transform', visualHead:'The Unseen Margin', challengesEyebrow:'Common Challenges', methodEyebrow:'Solvyoo Methodology', outcomesEyebrow:'What You Get', whyEyebrow:'Why Solvyoo', frameworkEyebrow:'Solvyoo Diagnostic Method', finalEyebrow:'Start With Clarity', copyright:'© 2026 Solvyoo Advisory', contactLinks:'Contact links', emailLabel:'Email', whatsappLabel:'WhatsApp', linkedinLabel:'LinkedIn', xLabel:'X',
    heroTitle:'There is more profit in your business <span>than you can see today</span>', heroLead:'We help business owners uncover profit opportunities, improve efficiency, and set execution priorities through a clear view of financial and operational performance.', learnMethod:'Explore our methodology', trust1:'25+ years of practical experience', trust2:'Data-informed decisions', trust3:'Execution focused',
    visualReading:'Initial performance view', currentState:'Current state', visibleView:'What is visible today', afterDiagnosis:'After diagnosis', convertibleOpps:'Actionable opportunities', hiddenProfit:'Untapped profit potential', today:'Today', afterPriority:'After prioritisation', visualNote:'Illustrative view of hidden profit potential. It is not an actual diagnostic result.',
    challengesTitle:'Do these challenges sound familiar?', challengesLead:'When sales move but profit does not follow clearly, the issue is usually deeper than one cost line or one isolated decision.', c1t:'Profit falls short of expectations', c1d:'Revenue moves, while the final impact on profit remains unclear.', c2t:'Costs keep rising without a clear reason', c2d:'Spending grows and cost-cutting becomes risky because the right investments may be reduced.', c3t:'The team is busy but results fall short', c3d:'High activity and frequent meetings, with limited progress on the priorities that matter.', c4t:'Too many initiatives, unclear priority', c4d:'There are many options. The real question is what deserves to be executed first.', callout:'These symptoms need a clear diagnosis before a list of ready-made solutions.', startDiagnosis:'Start the diagnosis',
    methodTitle:'From diagnosis<br>to measurable impact', methodLead:'We understand what is actually happening, identify where the gap is, and define a clear first step', s1t:'Diagnosis', s1d:'Understand the current state through data and facts, and identify root causes beyond general assumptions.', s2t:'Prioritisation', s2d:'Select the initiatives with the highest impact on profit, efficiency, and growth.', s3t:'Execution roadmap', s3d:'Turn recommendations into measurable actions with ownership and follow-up indicators.',
    sampleTitle:'This is what you receive within 24 hours', sampleLead:'An initial diagnostic memo built on your answers — not a ready-made template', sampleMockLabel:'Preview of the initial diagnostic memo', mockCompany:'Commercial business — Retail sector', mockProblemTitle:'The problem as we understood it', mockProblemText:'Declining profit margins despite stable sales, with continuously rising operating expenses', mockCausesTitle:'Root-cause hypotheses', mockCause1:'No precise expense tracking by line item', mockCause2:'No budget or spending ceilings in place', mockCause3:'Weak separation between personal and operating expenses', mockBadge:'The full version arrives in your inbox', ann3:'A PDF ready to share with your partner or team', sampleCta:'Get your diagnosis',
    outcomesTitle:'A clearer view of your business.<br>Priorities you can act on.', outcomesLead:'The goal is not a long report. It is clarity on where the opportunity sits, what needs to change, and what should start first.', o1:'A precise view of current financial and operational performance', o2:'The highest-impact profit opportunities', o3:'Sources of waste, delay, and their causes', o4:'Execution priorities ranked by impact and effort', o5:'Practical recommendations that can be measured and tracked',
    whyTitle:'Practical advice that goes beyond the report', whyLead:'Experience in business environments and the Saudi market, with a method that connects analysis to decisions and execution.', w1t:'More than 25 years of experience', w1d:'Practical experience in investment, business development, service improvement, and business challenges.', w2t:'Focused on impact', w2d:'What we recommend can be acted on tomorrow, not just an advisory opinion', w3t:'Diagnosis before solutions', w3d:'We do not jump to solutions before understanding the real cause and setting priorities from the data.',
    frameworkTitle:'Diagnose before we prescribe the solution', frameworkLead:'Our diagnosis uses an internal framework to assess business health, understand root causes, and order priorities before proposing an execution plan.', frameworkFine:'The initial stage gives you a clear reading of the issue. The detailed treatment plan is part of the paid advisory engagement.', finalTitle:'Before you invest in another initiative', finalLead:'First identify the largest opportunity for improvement and what truly deserves your time and resources.', whatsapp:'WhatsApp', footerText:'Executive advisory that helps businesses uncover profit opportunities and turn them into practical priorities.', privacy:'Privacy Policy'
  }
};

function setLanguage(lang) {
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('lang-en', lang === 'en');
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (copy[lang][key]) el.textContent = copy[lang][key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (copy[lang][key]) el.innerHTML = copy[lang][key];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.dataset.i18nAria;
    if (copy[lang][key]) el.setAttribute('aria-label', copy[lang][key]);
  });
  const spans = langButton.querySelectorAll('span');
  spans[0].classList.toggle('active', lang === 'ar');
  spans[1].classList.toggle('active', lang === 'en');
  localStorage.setItem('solvyoo-language', lang);
  document.title = lang === 'ar' ? 'سولفيو للاستشارات | تشخيص وتحسين أداء الأعمال' : 'Solvyoo Advisory | Business Diagnosis and Performance Improvement';
}

langButton?.addEventListener('click', () => setLanguage(document.documentElement.lang === 'ar' ? 'en' : 'ar'));
setLanguage(localStorage.getItem('solvyoo-language') || 'ar');

// Staggered scroll reveals (skipped when the user prefers reduced motion)
if (!matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('js-reveal');
  const targets = document.querySelectorAll(
    '.section-head, .challenge-grid article, .diagnostic-callout, .steps article, .outcome-list div, .why-stat, .why-list article, .pdf-mock, .sample-side, .framework-card, .final-grid'
  );
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  targets.forEach(el => {
    const siblings = el.parentElement ? [...el.parentElement.children] : [];
    el.style.transitionDelay = Math.min(Math.max(siblings.indexOf(el), 0) * 80, 320) + 'ms';
    el.classList.add('reveal');
    io.observe(el);
  });
}
