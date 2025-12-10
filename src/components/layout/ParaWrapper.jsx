export default function ParaWrapper({ parts }) {
  return (
    <p className="mb-4">
      {parts.map((part, i) =>
        part.bold ? (
          <strong key={i} className="font-semibold dark:text-slate-400">
            {part.text}
          </strong>
        ) : (
          <span key={i}>{part.text}</span> // <-- use curly braces
        )
      )}
    </p>
  );
}
