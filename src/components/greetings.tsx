export function Greetings() {
  return (
    <div className="flex flex-col space-y-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      <p>Hello,</p>
      <p>
        I'm{" "}
        <span className="inline-flex flex-col text-indigo-500 h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] lg:h-[calc(theme(fontSize.5xl)*theme(lineHeight.tight))] overflow-hidden">
          <ul className="block animate-text-slide text-left leading-tight [&_li]:block">
            <li className="bg-gradient-to-r from-teal-300 to-purple-400 bg-clip-text text-transparent">
              François Rejeté
            </li>
            <li className="bg-gradient-to-r from-teal-300 to-purple-400 bg-clip-text text-transparent">
              ルッジュテ フランソワ
            </li>
            <li
              aria-hidden
              className="bg-gradient-to-r from-teal-300 to-purple-400 bg-clip-text text-transparent"
            >
              François Rejeté
            </li>
          </ul>
        </span>
      </p>
    </div>
  );
}
