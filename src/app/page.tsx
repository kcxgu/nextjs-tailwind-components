import Image from "next/image";
import Link from "next/link";

const pageData = [
  {
    relativePath: "/newsletter-subscription",
    name: "Newsletter Subscription",
    description: "Newsletter subscription page with box-shadow pricing table. For simpler pricing table:",
  },
  {
    relativePath: "/faq",
    name: "FAQ",
    description: "Accordion FAQ dropdown list.",
  },
]

const componentsData = [
  {
    name: "Header and Footer",
    link: "https://github.com/kcxgu/nextjs-tailwind-components/tree/70ca5cf6d4c9c67bf15f50f536d4cc72575d8b30/src/app/components"
  },
  {
    name: "Light/Dark Toggle",
    link: "https://github.com/kcxgu/nextjs-tailwind-components/tree/e84af96d9302082981789aefe49e6dba007d7510"
  },
  {
    name: "Simplest Pricing Plan",
    link: "https://github.com/kcxgu/nextjs-tailwind-components/tree/5b54d25491f397653fd5af9c62ed0354be9fda22"
  },
  {
    name: "Accordion FAQ",
    link: "https://github.com/kcxgu/nextjs-tailwind-components/tree/dc80d0da1ae22f0e28f817770602bfbfbed65c8e"
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-6 py-24 dark:bg-slate-900 dark:text-white">
      {/* HERO */}
      <div className="max-w-8xl w-full mx-auto flex flex-col md:flex-row items-center md:justify-evenly md:gap-4 pb-24">
        <div className="lg:w-1/2 flex flex-col md:flex-col-reverse">
          <h1 className="py-10 text-4xl md:text-5xl lg:text-6xl font-semibold uppercase text-center md:text-left">Next.js + TailwindCSS Starter Components</h1>
          <div>
            <p className="w-5/6 md:w-2/3 lg:w-1/2 mx-auto md:mx-0 pt-6 text-gray-500 dark:text-gray-400 uppercase text-sm font-semibold text-center md:text-left">flexbox, grid, <span className="text-black dark:text-gray-100">typescript</span>, layout, spacing, <span className="text-black dark:text-gray-100">app router</span>, customisation, sizing, typography, <span className="text-black dark:text-gray-100">template</span>, background, border</p>
            <Link
              href={""}
              target="_blank"
              className="w-5/6 md:w-2/3 mx-auto md:mx-0 pt-6 flex flex-row items-center justify-center md:justify-start gap-2"
            >
              <Image
                className="dark:invert"
                src={"/github-icon.svg"}
                alt="GitHub icon, click to access my GitHub page"
                height={24}
                width={24}
              />
              <p>/kcxgu</p>
            </Link>
            <div className="pt-16 pb-10 flex flex-row items-center justify-center md:justify-start text-lg gap-6">
              <Link
                href={"/#pages"}
                className="py-2 px-8 bg-black dark:bg-gray-50 text-white dark:text-black rounded-full"
              >
                Pages
              </Link>
              <Link
                href={"/#components"}
                className="py-2 px-4 border border-black dark:border-gray-50 rounded-full"
              >
                Components
              </Link>
            </div>
          </div>
        </div>
        <Image
          className="md:max-w-sm rounded-xl"
          src={"/pattern-image.jpeg"}
          alt="Photo by Dids .: https://www.pexels.com/photo/pink-black-and-yellow-abstract-painting-2911521/"
          width={1728}
          height={2304}
          priority
        />
      </div>

      {/* LINK TO PAGES AND COMPONENTS */}
      <div className="max-w-7xl w-full mx-auto min-h-screen py-16 px-6 md:px-10 border-t dark:border-gray-600">
        <h2 id="pages" className="pt-24 pb-10 text-3xl font-semibold uppercase tracking-wide">Pages</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {pageData.map((data, i) =>
            <div key={i} className="max-w-md flex flex-col text-lg">
              <Link
                href={data.relativePath}
                className="pb-2 text-blue-600 font-medium underline underline-offset-2 text-xl hover:opacity-80"
              >
                {data.name}
              </Link>
              <p>{data.description} See
                <Link
                  href={componentsData[i + 2].link}
                  className="pl-1 text-orange-500 underline underline-offset-2 hover:opacity-80"
                >
                  component
                </Link>
                .</p>
            </div>
          )}
        </div>
        <h2 id="components" className="pt-24 pb-10 text-3xl font-semibold uppercase tracking-wide">Components</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {componentsData.map((data, i) =>
            <Link
              key={i}
              target="_blank"
              href={data.link}
              className="flex flex-row items-end justify-evenly bg-slate-800 text-white rounded-full pt-4 pb-6"
            >
              <p className="text-lg">{data.name}</p>
              <div className="flex flex-row items-end justify-center bg-white rounded-full p-2 text-black">
                <Image
                  src={"/github-icon.svg"}
                  alt="GitHub icon, click to access the relevant repo folders"
                  height={24}
                  width={24}
                />
                <p>↗</p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </main>
  )
}
