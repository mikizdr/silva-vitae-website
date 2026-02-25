const checklistSections = [
  {
    title: "1. Припрема подлоге",
    items: [
      "Уклонити старе облоге, прашину и масноћу",
      "Проверити равност зидова/подова и по потреби изравнати",
      "Нанети хидроизолацију",
      "Сачекати да се хидроизолација осуши",
      "Нанети прајмер ради бољег пријањања лепка"
    ]
  },
  {
    title: "2. Планирање",
    items: ["Одредити почетну линију и проверити симетрију резаних плочица", "Обележити линије кредом или ласером"]
  },
  {
    title: "3. Лепљење плочица",
    items: [
      "Нанети лепак назубљеном глетерицом",
      "Поставити плочицу и лагано је померити",
      "Проверити либелом да је права",
      "Убацити дистанчере за једнаке фуге"
    ]
  },
  {
    title: "4. Резање плочица",
    items: ["Измерити тачно место реза", "Користити резач плочица или брусилицу", "Носити заштитне наочаре"]
  },
  {
    title: "5. Фугирање",
    items: ["Сачекати сушење лепка (24h)", "Нанети фуг масу гуменом шпахтлом", "Вишак уклонити влажним сунђером"]
  },
  {
    title: "6. Завршни радови",
    items: ["Очистити плочице од остатака фуг масе", "Проверити да су све плочице равне и добро залепљене", "Уклонити дистанчере"]
  }
];

const commonMistakes = [
  ["Прескакање хидроизолације", "Влага улази у зид, оштећења", "Увек нанети хидроизолацију у купатилу"],
  ["Неравна подлога", "Криве плочице, лош изглед", "Изравнати зид/под пре лепљења"],
  ["Превише лепка", "Плочице клизе, неравни редови", "Нанети танак, равномерни слој"],
  ["Недовољно дистанчера", "Неједнаке фуге", "Користити крстиће за сваки спој"],
  ["Брзо фугирање", "Лепак није очврснуо, плочице се померају", "Сачекати минимум 24h"],
  ["Лоша вентилација", "Дуго сушење, појава буђи", "Обезбедити проветравање током и после радова"]
];

function ChecklistCard({ title, items }) {
  return (
    <article className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800">
      <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">{title}</h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item}>
            <label className="group flex cursor-pointer items-start gap-3 rounded-lg p-2 hover:bg-slate-50 dark:hover:bg-slate-800">
              <input
                type="checkbox"
                className="peer mt-1 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 dark:border-slate-600 dark:bg-slate-800 dark:checked:bg-emerald-500"
              />
              <span className="text-sm text-slate-700 peer-checked:text-slate-400 peer-checked:line-through dark:text-slate-200 dark:peer-checked:text-slate-500">
                {item}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function TileChecklistPage() {
  return (
    <>
      <header className="mb-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 dark:bg-slate-900 dark:ring-slate-800">
        <p className="mb-2 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
          Водич
        </p>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-100">Checklist за лепљење плочица</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Практична контролна листа за чист, раван и трајан резултат.</p>
      </header>

      <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {checklistSections.map((section) => (
          <ChecklistCard key={section.title} title={section.title} items={section.items} />
        ))}
      </section>

      <section className="mt-8 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-6 dark:bg-slate-900 dark:ring-slate-800">
        <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">⚠️ Честе грешке и како их избегнути</h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
          <table className="min-w-full divide-y divide-slate-200 text-sm dark:divide-slate-700">
            <thead className="bg-slate-50 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Грешка</th>
                <th className="px-4 py-3 text-left font-semibold">Последица</th>
                <th className="px-4 py-3 text-left font-semibold">Како избећи</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white dark:divide-slate-800 dark:bg-slate-900">
              {commonMistakes.map(([mistake, consequence, avoid]) => (
                <tr key={mistake} className="hover:bg-slate-50 dark:hover:bg-slate-800">
                  <td className="px-4 py-3 font-medium text-slate-800 dark:text-slate-100">{mistake}</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{consequence}</td>
                  <td className="px-4 py-3 text-slate-700 dark:text-slate-200">{avoid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
