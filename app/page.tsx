const SITE_URL = "https://jeevan-paripelli.vercel.app";
const INSTAGRAM_URL = "https://www.instagram.com/jvnn_007/";
const IMAGE_URL = `${SITE_URL}/profile.jpg`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profile`,
      url: SITE_URL,
      name: "Jeevan Paripelli | Personal Profile",
      description:
        "Personal profile page for Jeevan Paripelli and his public Instagram identity.",
      mainEntity: {
        "@id": `${SITE_URL}/#jeevan`,
      },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#jeevan`,
      name: "Jeevan Paripelli",
      alternateName: "jvnn_007",
      url: SITE_URL,
      image: IMAGE_URL,
      description:
        "Jeevan Paripelli, publicly represented online as @jvnn_007.",
      sameAs: [INSTAGRAM_URL],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Jeevan Paripelli",
      publisher: {
        "@id": `${SITE_URL}/#jeevan`,
      },
    },
  ],
};

export default function Home() {
  return (
    <main className="page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <article className="profile">
        <header className="hero">
          <img
            src="/profile.jpg"
            alt="Jeevan Paripelli"
            width={400}
            height={400}
            className="avatar"
            fetchPriority="high"
          />

          <p className="eyebrow">PERSONAL PROFILE</p>

          <h1>Jeevan Paripelli</h1>

          <p className="intro">
            Just being myself.
          </p>

          <a
            className="instagram"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Jeevan Paripelli Instagram profile @jvnn_007"
          >
            <span>Instagram</span>
            <span>@jvnn_007 ↗</span>
          </a>
        </header>

        <section aria-labelledby="about-heading">
          <p className="section-label">ABOUT</p>

          <h2 id="about-heading">
            Hello
          </h2>

          <p>
            I'm Jeevan. This is a small, quiet corner of the
            internet that belongs to me.
          </p>

          <p>
            My public online identity is connected to{" "}
            <strong>Jeevan Paripelli</strong> and{" "}
            <strong>@jvnn_007</strong>.
          </p>
        </section>

        <section
          className="context"
          aria-labelledby="context-heading"
        >
          <p className="section-label">A LITTLE CONTEXT</p>

          <h2 id="context-heading">
            Goodness matters.
          </h2>

          <p>
            Kindness and goodness, or{" "}
            <strong>manchithanam</strong> (
            <span lang="te">మంచితనం</span>
            ), are simple qualities worth carrying with you.
          </p>
        </section>

        <footer className="footer">
          <p>Jeevan Paripelli</p>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram · @jvnn_007
          </a>
        </footer>
      </article>
    </main>
  );
}
