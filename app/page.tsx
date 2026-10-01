import Image from "next/image";
import {
  SITE_URL,
  NAME,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  DESCRIPTION,
} from "./site";

// Structured data: only facts that were actually provided.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: NAME,
  givenName: "Jeevan",
  familyName: "Paripelli",
  alternateName: "jvnn_007",
  url: SITE_URL,
  image: `${SITE_URL}/profile.jpeg`,
  description: DESCRIPTION,
  sameAs: [INSTAGRAM_URL],
  mainEntityOfPage: SITE_URL,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <main className="page">
        <header className="hero">
          <figure className="portrait rise" style={{ animationDelay: "0ms" }}>
            {/* TODO: replace /public/profile.jpeg with Jeevan's real photo.
                Recommended: portrait, 4:5 ratio, at least 1200x1500px. */}
            <Image
              src="/profile.jpeg"
              alt="Portrait of Jeevan Paripelli"
              width={800}
              height={1000}
              priority
              sizes="(max-width: 640px) 80vw, 360px"
            />
          </figure>

          <h1 className="name rise" style={{ animationDelay: "120ms" }}>
            Jeevan Paripelli
          </h1>
          <p className="tagline rise" style={{ animationDelay: "220ms" }}>
            Just being myself.
          </p>

          <a
            className="pill rise"
            style={{ animationDelay: "320ms" }}
            href={INSTAGRAM_URL}
            target="_blank"
            rel="me noopener noreferrer"
            aria-label="Jeevan Paripelli on Instagram (opens in a new tab)"
          >
            {INSTAGRAM_HANDLE} <span aria-hidden="true">↗</span>
          </a>
        </header>

        <section className="about rise" style={{ animationDelay: "420ms" }} aria-labelledby="about-title">
          <h2 id="about-title" className="eyebrow">
            Hello
          </h2>
          {/* TODO: edit this copy freely. Only add facts you want public. */}
          <p className="lede">
            I&rsquo;m Jeevan &mdash; this is a small, quiet corner of the
            internet that belongs to me.
          </p>
          <p>
            Kindness and goodness &mdash; <span lang="te">మంచితనం</span>,
            manchithanam &mdash; are words I&rsquo;d be happy to be known by.
          </p>
          <p>
            If you&rsquo;d like to find me, Instagram is where I am.
          </p>
        </section>

        <section className="social rise" style={{ animationDelay: "520ms" }} aria-labelledby="social-title">
          <h2 id="social-title" className="eyebrow">
            Find me
          </h2>
          <a
            className="social-link"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="me noopener noreferrer"
          >
            <span className="social-label">Instagram</span>
            <span className="social-handle">
              {INSTAGRAM_HANDLE} <span aria-hidden="true">↗</span>
            </span>
          </a>
        </section>
      </main>

      <footer className="footer">
        <span>{NAME}</span>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="me noopener noreferrer"
          aria-label="Jeevan Paripelli on Instagram"
        >
          Instagram
        </a>
      </footer>
    </>
  );
}
