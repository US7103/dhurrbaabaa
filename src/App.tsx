import { useState } from "react";

/* ---------- CONFIG: edit these ---------- */
const BUY_URL = "https://forms.gle/your-order-link"; // the ONE clickable link
const DEVELOPER = { name: "Your Name", url: "https://your-portfolio.com" };
const YEAR = new Date().getFullYear();

/* Put your images in /public/images with these names (or change them here) */
const IMG = {
  hero: "/images/hero-woman.png",            // red + grayscale halftone portrait, full-width
  craving: "/images/craving-woman.png",      // cut-out woman eating jhalmuri (transparent PNG)
  why1: "/images/why-1.jpg", why2: "/images/why-2.jpg", why3: "/images/why-3.jpg",
  bgHealthy: "/images/bg-healthy.jpg", bgExpensive: "/images/bg-expensive.jpg", bgHassle: "/images/bg-hassle.jpg",
  know1: "/images/know-1.jpg", know2: "/images/know-2.jpg", know3: "/images/know-3.jpg",
  knowCenter: "/images/know-center.jpg", know4: "/images/know-4.jpg",
  product: "/images/product-collage.png",    // clip + woman + muri collage (transparent PNG)
  founder: "/images/founder.png",
  s1: "/images/support-1.png", s2: "/images/support-2.png", s4: "/images/support-4.png", s5: "/images/support-5.png",
  footerBg: "/images/footer-bg.jpg", footerPacks: "/images/footer-packs.png",
};

/* Image that quietly disappears (leaving its coloured frame) if the file is missing */
function Img({ src, alt = "", className }: { src: string; alt?: string; className?: string }) {
  const [ok, setOk] = useState(true);
  return ok ? <img className={className} src={src} alt={alt} loading="lazy" onError={() => setOk(false)} /> : <div className={`img-missing ${className ?? ""}`} />;
}

function BuyButton() {
  return (
    <a className="buy" href={BUY_URL} target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M7 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM1 2v2h2l3.6 7.6-1.4 2.4A2 2 0 0 0 7 17h12v-2H7.4l1.1-2h7.5a2 2 0 0 0 1.7-1l3.6-6.5A1 1 0 0 0 20.4 4H5.2l-.9-2H1Z"/></svg>
      BUY NOW
    </a>
  );
}

const columns = [
  { title: "healthy", strike: true, bg: IMG.bgHealthy, points: ["authentic street food taste", "hygienic", "no preservatives"], stat: "61% prefer indian snacks over other options" },
  { title: "expensive", strike: true, bg: IMG.bgExpensive, points: ["100% compostable packaging", "quality first approach", "concept unboxing experience"], stat: "72% are leaning toward brands that care about sustainability and ethical sourcing" },
  { title: "hassle", strike: true, bg: IMG.bgHassle, points: ["souvenier you can gift", "fun activity", "made by you"], stat: "70% of korean tourists bought local food souvenirs" },
];

const support = [
  { img: IMG.s1, text: "she has no capital left to buy the next batch of raw materials, 20 of you will contribute directly towards that" },
  { img: IMG.s2, text: "she has loads of packaging boxes in a store room and her mom wont stop taunting her unless she sells them, pleaseeee buy" },
  { heart: true, text: "if you're buying from us at this stage, you're probably a well wisher, thankyouuu" },
  { img: IMG.s4, text: "mentors have promised to help monetarily to grow the business only if we can sell 20 packs in less than 7 days, serious goal :)" },
  { img: IMG.s5, text: "a 24yr old finally decided to not work as an employee anymore, hope is the only driving factor now" },
];

export default function App() {
  return (
    <main>
      {/* 1. HERO */}
      <section className="hero">
        <Img className="hero__img" src={IMG.hero} />
        <p className="hero__kicker">kolkata's authentic jhalmuri</p>
        <h1 className="script hero__title">dhurrbaabaa</h1>
        <a className="hero__link" href={BUY_URL} target="_blank" rel="noopener noreferrer">click here to shop the taste</a>
        <p className="hero__tag">a D.I.Y street food brand</p>
        <p className="hero__diy">DIY stands for “do-it-yourself”</p>
      </section>

      {/* 2. CRAVING */}
      <section className="craving">
        <div className="craving__text">
          <h2 className="hand">craving it again</h2>
          <BuyButton />
        </div>
        <Img className="craving__img" src={IMG.craving} />
      </section>

      {/* 3. WHY YOU'LL BUY */}
      <section className="why">
        <div className="why__grid">
          <Img className="why__a" src={IMG.why1} />
          <Img className="why__b" src={IMG.why2} />
          <Img className="why__c" src={IMG.why3} />
        </div>
        <p className="why__title"><span className="mark">why you'll buy from us</span></p>
        <small className="why__note">ai generated</small>
      </section>

      {/* 4. THREE COLUMNS (dull b/w image behind, text on top) */}
      <section className="cols">
        {columns.map((c) => (
          <article className="col" key={c.title}>
            <Img className="col__bg" src={c.bg} />
            <div className="col__body">
              <h3 className="hand mark"><s>{c.title}</s></h3>
              <ul>{c.points.map((p) => <li key={p}><span className="mark">{p}</span></li>)}</ul>
            </div>
            <p className="col__stat">{c.stat}</p>
          </article>
        ))}
      </section>

      {/* 5. DID YOU KNOW */}
      <section className="know">
        <div className="know__left">
          <Img className="know__l1" src={IMG.know1} />
          <h2 className="hand know__did">did</h2>
          <Img className="know__l2" src={IMG.know2} />
        </div>
        <figure className="know__mid">
          <Img className="know__center" src={IMG.knowCenter} />
          <figcaption>61% of students aged 14 to 21 eat street food at least once a day, vs 42% of working adults aged 25 to 45</figcaption>
        </figure>
        <figure className="know__right">
          <Img className="know__r1" src={IMG.know4} />
          <figcaption>81% has dirty nails and no gloves</figcaption>
        </figure>
        <h2 className="script know__you">you</h2>
        <h2 className="script know__know">know</h2>
      </section>

      {/* 6. PRODUCT */}
      <section className="product">
        <div className="product__art"><Img className="product__img" src={IMG.product} /></div>
        <div className="product__info">
          <BuyButton />
          <h4>made with 100% vegetarian ingredients</h4>
          <p>Light puffed rice (muri), crisp crushed papri, crunchy bhujia, chana, fine salt, rich mustard oil, 18 spices masala, coriander-mint chutney, chopped green and red chillies, and tangy lemon juice.</p>
          <p><strong>Preliminary shelf-life estimate:</strong> approximately 3 weeks, based on 17+ days of personal observation and daily taste checks under current Kolkata weather conditions.</p>
          <p><strong>R&amp;D:</strong> Evaluate processing and packaging methods for incorporating (will add only if you opt for it) fresh chopped onion, tomato, potato and coconut while maintaining microbial stability, sensory quality and target shelf life.</p>
          <BuyButton />
        </div>
      </section>

      {/* 7. READY TO MAKE */}
      <h2 className="script ready">ready to make</h2>

      {/* 8. SUPPORT */}
      <section className="support">
        <h3>this is how you are supporting dhurrbaabaa + a solo founder</h3>
        <div className="support__wrap">
          <ol>
            {support.map((s, i) => (
              <li key={i}>
                {"heart" in s ? <span className="heart" aria-hidden="true">♥</span> : <Img className="support__ico" src={s.img!} />}
                <span>{i + 1}. {s.text}</span>
              </li>
            ))}
          </ol>
          <div className="support__cta">
            <Img className="support__founder" src={IMG.founder} />
            <p className="hand">now go buyyyyy<br /><a href={BUY_URL} target="_blank" rel="noopener noreferrer">click here</a></p>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="foot">
        <Img className="foot__bg" src={IMG.footerBg} />
        <h2 className="script foot__title">dhurrbaabaa</h2>
        <p className="foot__sub">craving it again</p>
        <Img className="foot__packs" src={IMG.footerPacks} />
        <p className="foot__disc">disclaimer : the packaging, shipping timeline, ingredient quantity are in an experimental phase now, your inputs will help us strategize better</p>
        <p className="foot__disc">the company registration, gst, food license is in process</p>
        <p className="foot__credit">
          © {YEAR} dhurrbaabaa · Website designed &amp; developed by <a href={DEVELOPER.url} target="_blank" rel="noopener noreferrer">{DEVELOPER.name}</a>
        </p>
      </footer>
    </main>
  );
}
