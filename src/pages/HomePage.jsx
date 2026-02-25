import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <section className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800">
      <h1 className="text-3xl font-bold tracking-tight">Dobrodošli</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-300">Ovo je početna stranica za GitHub Pages sa više stranica u jednom projektu.</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <Link to="/docs" className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800">
          Otvori dokumentaciju
        </Link>
        <Link
          to="/docs/lepljenje-plocica"
          className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
        >
          Checklist: лепљење плочица
        </Link>
      </div>
    </section>
  );
}
