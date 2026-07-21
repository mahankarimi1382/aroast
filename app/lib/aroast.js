// A-Roast — PRD v2 lineup. Named by brewing moment & taste; ratio is progressive disclosure.

export function faNum(n) {
  if (n === null || n === undefined) return '';
  return Number(n).toLocaleString('fa-IR');
}

export function faDigits(str) {
  const map = { '0': '۰', '1': '۱', '2': '۲', '3': '۳', '4': '۴', '5': '۵', '6': '۶', '7': '۷', '8': '۸', '9': '۹' };
  return String(str).replace(/[0-9]/g, (d) => map[d]);
}

export const PRODUCTS = [
  {
    id: 'nab', sku: 'AR · I', name: 'ناب', nameEn: 'NĀB', tasteLine: 'خلوص تک خواستگاه',
    character: 'ناب‌ترین', category: 'core', catLabel: 'امضایی',
    ratio: { arabica: 100, robusta: 0 }, roastLabel: 'مدیوم', origin: 'ترکیب چند خاستگاه عربیکا', process: 'شسته',
    roast: 3, acidity: 4, body: 3, sweetness: 4, caffeine: 2,
    notes: ['زردآلو', 'بابونه', 'عسل'],
    brews: ['دمی / V60', 'کمکس', 'ایروپرس'], grindException: false,
    tagline: '۱۰۰٪ عربیکا. رُست مدیوم، درخشان، گلی و معطر.',
    desc: 'ناب، پرچمدار عربیکای آرُست است؛ شیرین با اسیدیتهٔ زنده و عطر ملایم گل‌های کوهستان. بدون سرسختی و کاملاً متعادل. مناسب‌ترین گزینه برای کسانی که طعم‌های مرکباتی و شفاف را می‌پسندند.',
    sizes: [{ g: 50, price: 680000 }, { g: 250, price: 2460000 }, { g: 1000, price: 8400000 }], badge: '۱۰۰٪ عربیکا'
  },
  {
    id: 'najva', sku: 'AR · II', name: 'نجوا', nameEn: 'NAJVÂ', tasteLine: 'نرمی و توازن',
    character: 'ملایم‌ترین', category: 'core', catLabel: 'امضایی',
    ratio: { arabica: 80, robusta: 20 }, roastLabel: 'مدیوم', origin: 'آمریکای جنوبی / شرق آفریقا', process: 'ترکیبی',
    roast: 3, acidity: 3, body: 3, sweetness: 4, caffeine: 3,
    notes: ['شکلات شیری', 'بادام', 'پرتقال شیرین'],
    brews: ['اسپرسو', 'فرنچ‌پرس', 'موکاپات'], grindException: false,
    tagline: '۸۰/۲۰. ملایم، شکلاتی، با اسیدیتهٔ نرم.',
    desc: 'نجوا توازنی دقیق از شیرینی طبیعی عربیکا و تلخی مهارشدهٔ روبوستا است. با عطر شکلات شیری و مرکبات شیرین. گزینه‌ای مناسب برای استفاده روزمره؛ چه به‌صورت ساده و چه همراه با شیر.',
    sizes: [{ g: 50, price: 650000 }, { g: 250, price: 2360000 }, { g: 1000, price: 8100000 }], badge: 'پرطرفدار'
  },
  {
    id: 'asil', sku: 'AR · III', name: 'اصیل', nameEn: 'ASĪL', tasteLine: 'کلاسیک و بااصالت',
    character: 'متعادل‌ترین', category: 'core', catLabel: 'امضایی',
    ratio: { arabica: 70, robusta: 30 }, roastLabel: 'مدیوم-دارک', origin: 'آمریکای مرکزی / هند', process: 'ترکیبی',
    roast: 4, acidity: 2, body: 4, sweetness: 3, caffeine: 3,
    notes: ['فندق', 'کارامل', 'شکلات تلخ'],
    brews: ['دستگاه اسپرسو', 'موکاپات', 'فرنچ‌پرس'], grindException: false,
    tagline: '۷۰/۳۰. غلیظ، تلخی کنترل‌شده، طعم کلاسیک.',
    desc: 'اصیل نمادی از اسپرسوی سنتی با کرمای غلیظ فندقی است. با بدنهٔ سنگین و طعم‌یادهای فندق برشته و شکلات تلخ. گزینه‌ای مطمین برای کافه‌های خانگی و قهوه‌سازهای برقی اسپرسو.',
    sizes: [{ g: 50, price: 630000 }, { g: 250, price: 2280000 }, { g: 1000, price: 7800000 }], badge: 'کلاسیک'
  },
  {
    id: 'ojagh', sku: 'AR · IV', name: 'اجاق', nameEn: 'OJÂGH', tasteLine: 'تخصصی برای موکاپات',
    character: 'برای موکاپات', category: 'core', catLabel: 'امضایی',
    ratio: { arabica: 60, robusta: 40 }, roastLabel: 'مدیوم-دارک', origin: 'برزیل / اوگاندا', process: 'ترکیبی',
    roast: 4, acidity: 2, body: 4, sweetness: 3, caffeine: 4,
    notes: ['کاکائو', 'گردو', 'کارامل'],
    brews: ['موکاپات', 'اسپرسو', 'قهوهٔ ترک'], grindException: true,
    tagline: 'شصت چهل. رُست مدیوم-دارک، ساختهٔ اجاق و موکاپات.',
    desc: 'اجاق با رُست مدیوم-دارک برای دم‌آوری روی حرارت ساخته شده: موکاپات پررنگ، اسپرسوی غلیظ و قهوهٔ ترک کف‌دار. تلخی کنترل‌شده و کرمای پایدار. در گزینهٔ آسیاب می‌توانید «فوق‌ریز ترک» را انتخاب کنید.',
    sizes: [{ g: 50, price: 610000 }, { g: 250, price: 2220000 }, { g: 1000, price: 7600000 }], badge: null
  },
  {
    id: 'bidari', sku: 'AR · V', name: 'بیداری', nameEn: 'BIDÂRI', tasteLine: 'برای شروع روز',
    character: 'قوی و بیدارکننده', category: 'core', catLabel: 'امضایی',
    ratio: { arabica: 50, robusta: 50 }, roastLabel: 'دارک', origin: 'ویتنام / هند / برزیل', process: 'خشک / شسته',
    roast: 5, acidity: 1, body: 5, sweetness: 2, caffeine: 5,
    notes: ['کاکائوی تلخ', 'بادام‌زمینی', 'دودی'],
    brews: ['اسپرسو', 'موکاپات', 'قهوهٔ ترک'], grindException: true,
    tagline: 'پنجاه پنجاه. سنگین، تلخ و بیدارکننده.',
    desc: 'بیداری برای آن‌هایی است که قهوه را سنگین، تلخ و پرکافئین می‌خواهند. نسبت پنجاه به پنجاه، بدنهٔ فوق‌سنگین و شوک کافئینی واقعی؛ آخرین حرف صبح.',
    sizes: [{ g: 50, price: 590000 }, { g: 250, price: 2130000 }, { g: 1000, price: 7300000 }], badge: 'پرکافئین'
  },
  {
    id: 'zolal', sku: 'AR · ⊛', name: 'زلال', nameEn: 'ZOLÂL', tasteLine: 'زلالی تک‌خاستگاه',
    character: 'لات چرخشی · ویژه', category: 'rotating', catLabel: 'تک‌خاستگاه · چرخشی',
    ratio: { arabica: 100, robusta: 0 }, roastLabel: 'لایت-مدیوم', origin: 'کاستاریکا — سانتا ماریا، تارازو', process: 'هانی',
    roast: 2, acidity: 5, body: 2, sweetness: 4, caffeine: 2,
    notes: ['عسل', 'سیب سرخ', 'پرتقال خونی'],
    brews: ['دمی / V60', 'کمکس', 'ایروپرس'], grindException: false,
    tagline: 'کاستاریکا، سانتا ماریا. روشن، عسلی، مناسب برای دم.',
    desc: 'زلال، لات چرخشی تک‌خاستگاه آرُست است؛ کاستاریکا سانتا ماریا با فرآوری هانی و رُست لایت-مدیوم. اسیدیتهٔ درخشان و شیرینی عسلی، ساخته‌شده برای دم‌آوری فیلتری. هر فصل تنها چند بار رُست می‌شود.',
    sizes: [{ g: 50, price: 860000 }, { g: 250, price: 3100000 }, { g: 1000, price: 10800000 }], badge: 'محدود'
  }
];

export const DISCOVERY = {
  id: 'discovery', name: 'پک کشف', nameEn: 'DISCOVERY BOX',
  tasteLine: 'چهار قهوه، یک سفر', pickCount: 4, gramsEach: 50, price: 2200000,
  desc: 'چهار قهوه از مجموعهٔ آرُست را خودتان انتخاب کنید؛ هرکدام در بستهٔ ۵۰ گرمی مخصوص کشف. همراه کارت نت طعمی و یک امتیازنامهٔ ساده تا فنجان محبوبتان را پیدا کنید.'
};

export const GRINDS = ['دانهٔ کامل', 'موکاپات', 'دستگاه اسپرسو', 'فرنچ‌پرس', 'دمی / V60', 'قهوهٔ ترک'];

export const BREW_GUIDES = [
  {
    id: 'mokapot', title: 'موکاپات', en: 'Moka Pot',
    dose: '۱۶ گرم', grind: 'متوسط-ریز', temp: 'آب جوش', time: '۴ دقیقه', ratio: '۱:۷',
    tip: 'آب داغ در مخزن بریزید تا قهوه نسوزد؛ روی حرارت ملایم.',
    steps: ['آب داغ را تا لبه سوپاپ در محفظه پایین بریزید.', 'بسکت را پر از آسیاب متوسط-ریز کنید — صاف نکنید.', 'روی حرارت ملایم بگذارید؛ درب را باز نگه دارید.', 'با اولین صدای جوشش از حرارت بردارید.', 'بلافاصله سرو کنید — موکاپات منتظر نمی‌ماند.'],
    highlight: 'برخلاف باور عام, موکاپات اسپرسو نیست! فشار آن ۱.۵ بار است نه ۹.',
    suitable: ['اجاق', 'اصیل', 'بیداری']
  },
  {
    id: 'french', title: 'فرنچ‌پرس', en: 'French Press',
    dose: '۳۰ گرم', grind: 'درشت', temp: '۹۳°', time: '۴ دقیقه', ratio: '۱:۱۵',
    tip: 'چهار دقیقه کامل صبر کنید و بلافاصله سرو کنید.',
    steps: ['آب را تا ۹۳ درجه گرم کنید؛ ۳۰ ثانیه صبر کنید.', 'آسیاب درشت اضافه کنید و همه آب را یکجا بریزید.', 'هم بزنید، درب را بگذارید.', 'دقیقاً ۴ دقیقه صبر کنید.', 'آرام پیستون را پایین بیاورید و فوری سرو کنید.'],
    highlight: 'غلظت قهوه در این روش بسیار بیشتر از روش‌های دمی با فیلتر کاغذی است.',
    suitable: ['نجوا', 'اصیل', 'ناب']
  },
  {
    id: 'v60', title: 'دمی · V60', en: 'Pour Over',
    dose: '۱۵ گرم', grind: 'متوسط', temp: '۹۲°', time: '۳ دقیقه', ratio: '۱:۱۵',
    tip: 'بلوم ۳۰ ثانیه‌ای؛ آب را آرام و دایره‌ای بریزید.',
    steps: ['فیلتر را خیس و گرم کنید، آب اضافه را دور بریزید.', 'قهوه اضافه کنید؛ گودی کوچکی وسط بزنید.', 'بلوم: دو برابر وزن قهوه آب بریزید — ۳۰ ثانیه صبر کنید.', 'در ۲-۳ مرحله آرام و دایره‌ای بریزید.', 'تند کشیده شد؟ ریزتر آسیاب کنید. کند بود؟ درشت‌تر.'],
    highlight: 'رنگ و شفافیت V60 از هر روشی بالاتر است — نت‌های ظریف که در فرنچ‌پرس پنهان می‌مانند اینجا می‌درخشند. راز این شفافیت، فیلتر کاغذی است که چربی‌ها را جذب می‌کند و فقط آروما و اسید را از خود عبور می‌دهد.',
    suitable: ['زلال', 'ناب', 'نجوا']
  },
  {
    id: 'espresso', title: 'اسپرسو', en: 'Espresso',
    dose: '۱۸ گرم', grind: 'ریز', temp: '۹۳°', time: '۲۸ ثانیه', ratio: '۱:۲',
    tip: 'تمپ یکنواخت؛ شات ۲۵-۳۰ ثانیه، خروجی ۳۶ گرم.',
    steps: ['۱۸ گرم آسیاب ریز در پورتافیلتر بریزید.', 'با تمپر یکنواخت و فشار ۱۵ کیلو تمپ کنید.', 'پیش-دم ۳ ثانیه؛ شات را شروع کنید.', '۲۵-۳۰ ثانیه به ۳۶ گرم خروجی برسید.', 'تلخ بود آسیاب درشت‌تر کنید. ترش بود ریزتر.'],
    highlight: 'اسپرسو تنها دم‌آوری با فشار ۹ بار است. به همین دلیل کریما (crema) تشکیل می‌شود که در هیچ روش دیگری نمی‌بینید.',
    suitable: ['اصیل', 'اجاق', 'بیداری']
  },
  {
    id: 'turk', title: 'قهوه ترک', en: 'Cezve',
    dose: '۷ گرم', grind: 'فوق-ریز', temp: 'حرارت کم', time: '۳-۴ دقیقه', ratio: '۱:۱۰',
    tip: 'روی حرارت کم تا کف بالا بیاید؛ نگذارید بجوشد!',
    steps: ['آب سرد و قهوه فوق-ریز را با هم در جذوه بریزید.', 'شکر را همین ابتدا اضافه کنید — بعد از دم قاطی نشود.', 'روی حرارت کم هم بزنید تا کف تشکیل شود.', 'کف بالا آمد؟ از حرارت بردارید — نجوشد!', 'کف را اول به فنجان منتقل کنید، سپس قهوه را آرام بریزید.'],
    highlight: 'قهوه ترک قدیمی‌ترین روش دم‌آوری دنیاست، بدون فیلتر, بدون دستگاه، فقط آتش و دانه.',
    suitable: ['اجاق', 'بیداری']
  }
];

export const DEVICES = [
  { id: 'mokapot', label: 'موکاپات', en: 'Moka Pot' },
  { id: 'espresso', label: 'اسپرسو ساز', en: 'Espresso Machine' },
  { id: 'turk', label: 'قهوه ترک', en: 'Cezve / Ibrik' },
  { id: 'french', label: 'فرنچ‌پرس', en: 'French Press' },
  { id: 'filter', label: 'دمی / V60', en: 'Pour Over' }
];

export const FIXED_DEVICES = ['mokapot', 'turk', 'filter'];
export const FIXED_MAP = { mokapot: 'ojagh', turk: 'asil', filter: 'zolal' };

export const TASTES = [
  { id: 'classic', label: 'کلاسیک و متعادل', desc: 'طعم آشنای قهوه؛ مطمئن، بی‌دردسر و همه‌پسند.' },
  { id: 'bold', label: 'قوی و گیرا', desc: 'تلخی واضح، غلظت بالا و کاملاً بیدارکننده.' },
  { id: 'mild', label: 'ملایم و سبک', desc: 'طعم نرم و ظریف، با کمترین میزان تلخی.' },
  { id: 'adventurous', label: 'تجربه‌ای متفاوت', desc: 'طعم‌های جدید (مثل نت‌های میوه‌ای)، فراتر از تلخی سنتی قهوه.' }
];

export const SERVINGS = [
  { id: 'black', label: 'ساده (بدون شیر و شکر)' },
  { id: 'milk', label: 'با شیر یا شکر' }
];

const BRANCH_MAP = {
  classic:     { black: 'asil',   milk: 'asil' },
  bold:        { black: 'bidari', milk: 'bidari' },
  mild:        { black: 'nab',    milk: 'najva' },
  adventurous: { black: 'zolal',  milk: 'zolal' }
};

const REASONS = {
  ojagh:  'موکاپات و اجاق برای هم ساخته شده‌اند — رُست مدیوم-دارک اجاق, کرمای پایدار و بدنه‌ای که این روش نیاز دارد.',
  asil:   'اصیل، ترکیب کلاسیک و متعادل است — طعم آشنا، بی‌دردسر و مناسب برای دستگاه شما.',
  asil_turk: 'اصیل با آسیاب فوق-ریز ترک؛ کف پایدار و طعم متعادلی که این روش می‌طلبد.',
  zolal:  'زلال، تک‌خاستگاه روشن و عسلی است — برای دم‌آوری‌های فیلتری که نت‌های ظریف را آشکار می‌کنند.',
  bidari: 'بیداری، سنگین‌ترین و پرکافئین‌ترین قهوه آرُست است — برای کسی که قهوه را جدی می‌گیرد.',
  nab:    'ناب، تمام‌عربیکا و خالص است — روشن، شیرین و بدون تلخی گزنده.',
  najva:  'نجوا با شیر به اوجش می‌رسد — بدنه کافی برای حل شدن زیر شیر با عطر عربیکایی که باقی می‌ماند.'
};

export function recommend(device, taste, serving) {
  if (FIXED_DEVICES.indexOf(device) > -1) {
    const id = FIXED_MAP[device];
    const reasonKey = device === 'turk' ? 'asil_turk' : id;
    return { id: id, reason: REASONS[reasonKey] || '' };
  }
  const id = (BRANCH_MAP[taste] && BRANCH_MAP[taste][serving]) || 'asil';
  return { id: id, reason: REASONS[id] || '' };
}

export function roastInfo() {
  const now = new Date();
  const roasted = new Date(now.getTime() - 2 * 86400000);
  const best = new Date(roasted.getTime() + 30 * 86400000);
  const opt = { month: 'long', day: 'numeric' };
  return { roasted: roasted.toLocaleDateString('fa-IR', opt), bestBy: best.toLocaleDateString('fa-IR', opt) };
}

export const AROAST_CONFIG = {
  FREE_SHIP_WEIGHT: 500,   // grams; Tehran courier free at/above this
  TEHRAN_FEE: 200000,      // toman; below the free threshold
  MIN_ORDER_WEIGHT: 100,   // grams; cart minimum
  CUTOFF_HOUR: 16,         // before 16:00 -> same-day, else next-day
  GIFT_SKU: 'بیداری'       // default first-order gift line
};
