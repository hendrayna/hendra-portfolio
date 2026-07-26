import { FaMicrosoft } from "react-icons/fa6";
import { LuClapperboard } from "react-icons/lu";
import {
  SiCanva,
  SiElementor,
  SiGoogle,
  SiMeta,
  SiOpenai,
  SiWordpress,
} from "react-icons/si";

const expertise = [
  {
    number: "01",
    title: "Digital Marketing",
    text: "Social media management, content planning, copywriting, Meta Ads support, basic SEO, and campaign monitoring.",
  },
  {
    number: "02",
    title: "Content Creation",
    text: "Social content, short-form video, Instagram Reels, product photography direction, and promotional materials.",
  },
  {
    number: "03",
    title: "Website Management",
    text: "WordPress, Elementor, landing pages, website content, navigation updates, CTAs, and Google Review integration.",
  },
  {
    number: "04",
    title: "AI-Assisted Production",
    text: "Content ideation, prompt writing, image generation, video creation, output evaluation, and brand consistency.",
  },
];

const experience = [
  {
    company: "Jyooty Bali",
    role: "Digital Marketing",
    period: "May 2024 - Present",
    summary:
      "Creating integrated content and campaign materials across wellness, lifestyle products, websites, and print.",
    current: true,
  },
  {
    company: "Benoa Tirta Harum",
    role: "Freelance Social Media Manager",
    period: "Feb 2024 - Dec 2025",
    summary:
      "Managing tourism-focused content, promotional campaigns, advertising creatives, and remote content coordination.",
  },
  {
    company: "Trikamedia",
    role: "Digital Marketing Intern",
    period: "Mar 2025 - Jun 2025",
    summary:
      "Turning technical internet, Wi-Fi, and cybersecurity topics into clear educational and promotional content.",
  },
];

const tools = [
  { name: "Canva", icon: SiCanva, color: "#7d2ae8" },
  { name: "CapCut", icon: LuClapperboard, color: "#111111" },
  { name: "WordPress", icon: SiWordpress, color: "#21759b" },
  { name: "Elementor", icon: SiElementor, color: "#92003b" },
  { name: "Meta Business Suite", icon: SiMeta, color: "#0866ff" },
  { name: "Microsoft Office", icon: FaMicrosoft, color: "#f25022" },
  { name: "ChatGPT", icon: SiOpenai, color: "#10a37f" },
  { name: "Google Gemini", icon: SiGoogle, color: "#4e74f8" },
  { name: "Google Flow", icon: SiGoogle, color: "#4285f4" },
  { name: "Canva AI", icon: SiCanva, color: "#00a6a6", badge: "AI" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="nav-shell">
          <a className="brand-mark" href="#home" aria-label="Back to top">
            <span>KH</span>
            <small>Portfolio</small>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#expertise">Expertise</a>
            <a href="#experience">Experience</a>
            <a href="#work">Selected Work</a>
          </nav>

          <a className="nav-cta" href="#contact">
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>

          <details className="mobile-nav">
            <summary aria-label="Open navigation">
              <span />
              <span />
            </summary>
            <nav aria-label="Mobile navigation">
              <a href="#about">About</a>
              <a href="#expertise">Expertise</a>
              <a href="#experience">Experience</a>
              <a href="#work">Selected Work</a>
              <a href="#contact">Let&apos;s talk</a>
            </nav>
          </details>
        </div>
      </header>

      <section className="hero section-shell" id="home">
        <div className="hero-copy">
          <div className="availability">
            <span className="availability-dot" />
            Open to digital marketing opportunities
          </div>
          <p className="eyebrow">I Kadek Hendrayana · Gianyar, Bali</p>
          <h1>
            I create digital work that helps{" "}
            <em>brands communicate.</em>
          </h1>
          <p className="hero-intro">
            Digital Marketing professional combining content strategy, visual
            design, social media, and website management to build meaningful
            digital experiences.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              View selected work <span aria-hidden="true">↓</span>
            </a>
            <a
              className="button button-secondary"
              href="/i-kadek-hendrayana-cv.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download CV <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="hero-proof" aria-label="Professional highlights">
            <div>
              <strong>2+</strong>
              <span>Years of experience</span>
            </div>
            <div>
              <strong>3</strong>
              <span>Industries explored</span>
            </div>
            <div>
              <strong>4</strong>
              <span>Creative disciplines</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Portrait of I Kadek Hendrayana">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="hero-sun" />
          <div className="portrait-stage">
            <div className="portrait-grid" />
            {/* The portrait is already optimized as a small transparent WebP. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="portrait"
              src="/hendra-portrait.webp"
              alt="I Kadek Hendrayana wearing a black suit"
              width={900}
              height={1125}
            />
          </div>
          <div className="role-card">
            <span>Currently focused on</span>
            <strong>Digital Marketing + Creative Content</strong>
          </div>
          <div className="hero-star" aria-hidden="true">
            ✦
          </div>
        </div>
      </section>

      <section className="marquee" aria-label="Areas of focus">
        <div>
          <span>Social Media</span>
          <b>✦</b>
          <span>Content Creation</span>
          <b>✦</b>
          <span>Visual Design</span>
          <b>✦</b>
          <span>Website Management</span>
          <b>✦</b>
          <span>Digital Marketing</span>
        </div>
      </section>

      <section className="work-section section-shell" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>Work across content, campaigns, and digital experiences.</h2>
          </div>
          <p>
            A selection of real campaign, content, catalogue, and website work.
            Full case studies will be added in the next phase.
          </p>
        </div>

        <div className="project-grid">
          <article className="project-card project-featured project-jyooty-showcase">
            <div className="project-topline">
              <span>01 · Wellness & Lifestyle</span>
              <span>2024 - Present</span>
            </div>
            <div className="jyooty-project-head">
              <div>
                <p className="jyooty-kicker">
                  Digital Marketing & Creative Content
                </p>
                <h3>Jyooty Bali</h3>
                <p className="jyooty-summary">
                  Selected work spanning paid campaigns, social content,
                  product catalogues, and website management for a Balinese
                  wellness and lifestyle brand.
                </p>
              </div>
              <div className="jyooty-tags" aria-label="Jyooty Bali project areas">
                <span>Meta Ads</span>
                <span>Content</span>
                <span>Catalogue</span>
                <span>Website</span>
              </div>
            </div>

            <div className="jyooty-work-layout">
              <section className="jyooty-creative-panel">
                <div className="jyooty-panel-heading">
                  <div>
                    <span>Creative production</span>
                    <h4>Selected visual work</h4>
                  </div>
                  <p>
                    Catalogue and advertising materials created for Jyooty&apos;s
                    lifestyle and wellness offers.
                  </p>
                </div>

                <div className="jyooty-creative-grid">
                  <figure className="jyooty-creative-item">
                    <div className="jyooty-creative-media">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/jyooty-bag-catalog.webp"
                        alt="Full product catalogue design for the Jyooty Pure Nature Balinese luxury bag collection"
                        width={1273}
                        height={1800}
                      />
                    </div>
                    <figcaption>
                      <span>01</span>
                      <strong>Product catalogue</strong>
                    </figcaption>
                  </figure>

                  <figure className="jyooty-creative-item">
                    <div className="jyooty-creative-media jyooty-flyer-media">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/jyooty-singing-bowl-flyer.webp"
                        alt="Full Instagram advertisement for the Jyooty Svaha Singing Bowl Workshop"
                        width={926}
                        height={1600}
                      />
                    </div>
                    <figcaption>
                      <span>02</span>
                      <strong>Meta ad flyer</strong>
                    </figcaption>
                  </figure>
                </div>
              </section>

              <div className="jyooty-work-side">
                <a
                  className="jyooty-website-link"
                  href="https://jyootybali.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>03 · Live website</span>
                  <strong>jyootybali.com</strong>
                  <p>
                    Website content, landing pages, navigation, and ongoing
                    WordPress management.
                  </p>
                  <b>
                    Visit live website <span aria-hidden="true">↗</span>
                  </b>
                </a>

                <section className="jyooty-campaign-card">
                  <div className="jyooty-campaign-heading">
                    <span>04 · Campaign monitoring</span>
                    <strong>Meta Ads performance</strong>
                  </div>

                  <div className="jyooty-campaign-stats">
                    <div>
                      <strong>49</strong>
                      <span>Message conversations</span>
                    </div>
                    <div>
                      <strong>Rp16.876</strong>
                      <span>Cost per result</span>
                    </div>
                  </div>

                  <div className="jyooty-dashboard-preview">
                    <div className="jyooty-dashboard-bar" aria-hidden="true">
                      <i />
                      <i />
                      <i />
                      <span>Campaign overview</span>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/jyooty-campaign-results.webp"
                      alt="Meta Ads Manager campaign performance overview for Jyooty Bali"
                      width={929}
                      height={399}
                    />
                  </div>

                  <p className="jyooty-campaign-note">
                    Selected result from a message-focused Sound Healing
                    campaign.
                  </p>
                </section>
              </div>
            </div>

            <div className="jyooty-project-footer">
              <div className="jyooty-video-copy">
                <span>One selected Reel</span>
                <p>One example from my short-form video work for Jyooty Bali.</p>
              </div>
              <div className="jyooty-reel-links">
                <a
                  href="https://www.instagram.com/reel/DSemjBwETb7/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View one Jyooty Reel <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </article>

          <article className="project-card project-tourism">
            <div className="project-topline">
              <span>02 · Tourism</span>
              <span>2024 - 2025</span>
            </div>
            <div className="project-art benoa-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/benoa-instagram.webp"
                alt="Instagram profile and social media content for Benoa Tirta Harum Dive and Watersport"
                width={1600}
                height={807}
              />
              <span className="media-label">Social media management</span>
            </div>
            <div className="project-copy">
              <p>Freelance Social Media Management</p>
              <h3>Benoa Tirta Harum</h3>
              <span className="project-status">Case study coming next</span>
            </div>
          </article>

          <article className="project-card project-isp">
            <div className="project-topline">
              <span>03 · Internet Service</span>
              <span>2025</span>
            </div>
            <div className="project-art trikamedia-showcase">
              <figure className="trikamedia-feed">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/trikamedia-instagram.webp"
                  alt="Trika Connection Instagram feed featuring educational internet content"
                  width={720}
                  height={1600}
                />
                <figcaption>Educational social content</figcaption>
              </figure>
              <figure className="trikamedia-banner">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/trikamedia-banner.webp"
                  alt="Trikamedia promotional banner for Warung Lawar Plek Junx Yok"
                  width={1224}
                  height={414}
                />
                <figcaption>Offline promotional banner</figcaption>
              </figure>
              <figure className="trikamedia-flyer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/trikamedia-internet-flyer.webp"
                  alt="Trikamedia Internet Cepat social media flyer"
                  width={459}
                  height={579}
                />
                <figcaption>Internet package campaign</figcaption>
              </figure>
            </div>
            <div className="project-copy">
              <p>Social Content &amp; Promotional Design</p>
              <h3>Trikamedia</h3>
              <span className="project-status">Case study coming next</span>
            </div>
          </article>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="section-shell about-grid">
          <div className="about-title">
            <p className="eyebrow light">About me</p>
            <h2>
              Strategy-minded.
              <br />
              <em>Creative by nature.</em>
            </h2>
          </div>
          <div className="about-copy">
            <p className="about-lead">
              I work where marketing, design, content, and technology meet.
            </p>
            <p>
              With a Bachelor of Information Systems and more than two years of
              practical experience, I have produced digital and printed
              communication for wellness, tourism, lifestyle products, and
              internet services.
            </p>
            <p>
              I enjoy turning complex ideas into clear visuals, useful content,
              and digital experiences that feel consistent with the brand
              behind them.
            </p>
            <a href="#contact" className="text-link">
              Start a conversation <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="expertise-section section-shell" id="expertise">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">Core expertise</p>
            <h2>A practical mix of creative and digital skills.</h2>
          </div>
          <p>
            Built through hands-on work across social media, visual production,
            websites, and campaign support.
          </p>
        </div>
        <div className="expertise-grid">
          {expertise.map((item) => (
            <article className="expertise-card" key={item.number}>
              <span className="expertise-number">{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <span className="expertise-arrow" aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-shell experience-grid">
          <div className="experience-intro">
            <p className="eyebrow">Experience</p>
            <h2>Learning by building real work.</h2>
            <p>
              My experience combines ongoing brand work, freelance tourism
              marketing, and an internship in the internet service industry.
            </p>
            <div className="education-chip">
              <span>Education</span>
              <strong>Bachelor of Information Systems</strong>
              <small>ITB STIKOM Bali · GPA 3.91 / 4.00</small>
            </div>
          </div>
          <div className="timeline">
            {experience.map((item, index) => (
              <article className="timeline-item" key={item.company}>
                <div className="timeline-marker">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="timeline-content">
                  <div className="timeline-meta">
                    <span>{item.period}</span>
                    {item.current && <b>Current</b>}
                  </div>
                  <h3>{item.company}</h3>
                  <p className="timeline-role">{item.role}</p>
                  <p>{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tools-section section-shell">
        <div className="tools-copy">
          <p className="eyebrow">Tools & workflow</p>
          <h2>Comfortable across creative, marketing, and web tools.</h2>
        </div>
        <div className="tool-grid" aria-label="Tools">
          {tools.map((tool) => {
            const Icon = tool.icon;

            return (
              <div className="tool-card" key={tool.name}>
                <div className="tool-icon" style={{ color: tool.color }}>
                  <Icon aria-hidden="true" />
                  {tool.badge && <span>{tool.badge}</span>}
                </div>
                <strong>{tool.name}</strong>
              </div>
            );
          })}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-orbit contact-orbit-one" />
        <div className="contact-orbit contact-orbit-two" />
        <div className="section-shell contact-inner">
          <p className="eyebrow light">Available for opportunities</p>
          <h2>
            Let&apos;s create meaningful
            <br />
            <em>digital experiences.</em>
          </h2>
          <p>
            Have a role, project, or collaboration in mind? I&apos;d be happy to
            hear about it.
          </p>
          <div className="contact-actions">
            <a
              className="button button-gold"
              href="mailto:hendrayna171@gmail.com"
            >
              Send an email <span aria-hidden="true">↗</span>
            </a>
            <a
              className="button button-dark-outline"
              href="https://wa.me/6283115869378"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="contact-details">
            <a
              href="https://www.linkedin.com/in/i-kadek-hendrayana"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="mailto:hendrayna171@gmail.com">
              hendrayna171@gmail.com
            </a>
            <span>Gianyar, Bali, Indonesia</span>
          </div>
        </div>
      </section>

      <footer>
        <div className="section-shell footer-inner">
          <div className="brand-mark footer-brand">
            <span>KH</span>
            <small>Portfolio</small>
          </div>
          <p>Digital Marketing · Content Creation · Website Management</p>
          <a href="#home">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </footer>
    </main>
  );
}
