import { MdArrowOutward } from "react-icons/md";

export default function ContentCard({
  link,
  title,
  description = "",
  tags = [],
  children,
  overlay = true,
}) {
  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
      {overlay && (
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-purple-200/50 lg:group-hover:dark:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      )}
      {children}
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug dark:text-slate-400">
          <div>
            <a
              className={`inline-flex items-baseline font-medium leading-tight text-base ${
                link
                  ? "dark:text-slate-400 hover:text-rose-950 focus-visible:text-rose-950 hover:dark:text-teal-300 focus-visible:dark:text-teal-300 cursor-pointer"
                  : "dark:text-slate-400 cursor-not-allowed"
              }`}
              href={link}
              onClick={(e) => {
                if (!link) e.preventDefault();
              }}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Creative Technologist Co-op at MullenLowe U.S. (opens in a new tab)"
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>
                {title}
                {link && (
                  <span className="inline-block">
                    <MdArrowOutward className="h-4 w-4 translate-y-1 transition-transform group-hover:-translate-y-0.5 dark:text-slate-400 group-hover:translate-x-0.5 group-hover:text-rose-950 group-hover:dark:text-teal-300" />
                  </span>
                )}
              </span>
            </a>
          </div>
        </h3>
        <p className="mt-2 text-sm leading-normal">{description}</p>
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {tags.map((tag, idx) => (
            <li key={idx} className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-neutral-600 text-white dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-teal-300 ">
                {tag}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
