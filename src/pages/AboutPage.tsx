export default function AboutPage() {
  return (
    <section className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800 flex flex-col items-center">
      <img
        src="./images/silva-vitae-logo.webp"
        alt="Silva Vitae Logo"
        className="w-32 h-32 mb-6"
        style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.15))' }}
      />
      <h1 className="text-4xl font-extrabold tracking-tight text-green-700 dark:text-green-300 mb-4">
        Silva Vitae
      </h1>
      <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-2">
        Forest of Life
      </h2>
      <p className="mt-2 text-lg text-slate-600 dark:text-slate-300 max-w-2xl text-center">
        <strong>Silva Vitae</strong> is an initiative dedicated to harnessing the power of software
        development for the benefit of nature and environmental conservation. Our mission is to
        create digital tools and solutions that empower individuals, organizations, and communities
        to protect, restore, and celebrate the natural world.
      </p>
      <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl text-center">
        Inspired by the interconnectedness of a thriving forest, Silva Vitae brings together
        technology and ecology. We believe that innovative software can help monitor ecosystems,
        promote sustainable practices, and raise awareness about the importance of biodiversity and
        environmental stewardship.
      </p>
      <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl text-center">
        Join us in our journey to build a greener, more sustainable future—where technology serves
        the forest of life.
      </p>
    </section>
  );
}
