import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vanessa Agsangre | Copywriter Portfolio</title>
        <meta
          name="description"
          content="Creative copywriting samples, brand voice, social campaigns"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Vanessa Agsangre</h1>
          <p className="italic text-lg">Crafting content that clicks, converts, and connects.</p>
        </header>

        <section className="mt-12 space-y-8">
          <h2 className="text-2xl font-semibold">Portfolio Samples</h2>

          <div>
            <h3 className="text-xl font-bold">Website Copy – FreshFuel</h3>
            <p className="mt-2">
              “Eat Clean. Live Fully.” Life is busy, but eating well doesn’t have to be hard...
              <em>Try FreshFuel for just ₱199 your first week.</em>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">Social Media Caption – LumiSkin</h3>
            <p className="mt-2">
              “You deserve skincare that keeps it real…” Crafted for skincare-savvy audiences
              with a tone that’s fun, inclusive, and rooted in authenticity.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">Email Campaign – Fashion Store</h3>
            <p className="mt-2">
              “Flash Sale: 30% Off the Looks You’ve Been Eyeing.” Urgency-driven copy
              written to tease desire and prompt fast action.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">Ad Copy – Roamly Travel App</h3>
            <p className="mt-2">
              Voiceover-ready script showcasing Roamly as the insider’s edge to travel smarter
              and experience more.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">Product Description – Morning Bloom Coffee</h3>
            <p className="mt-2">
              “Handpicked from high-altitude farms…” A sensory-rich product story that builds trust
              and evokes aroma, taste, and sourcing ethics.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Services I Offer</h2>
          <ul className="list-disc list-inside mt-4 space-y-1">
            <li>Website & landing page copy</li>
            <li>Scroll‑stopping social captions</li>
            <li>Email copy & campaigns</li>
            <li>Product descriptions that convert</li>
            <li>Brand voice development</li>
          </ul>
        </section>

        <section className="mt-12 text-center">
          <h2 className="text-2xl font-semibold">Let’s Work Together</h2>
          <p className="mt-2">
            Want copy that nails your voice and sells?{" "}
            <a href="mailto:vanessa.copywriter@email.com">
              Email me
            </a>{" "}
            or connect on{" "}
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>.
          </p>
        </section>
      </main>
    </>
  );
}
