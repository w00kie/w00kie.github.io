export function Greetings() {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col space-y-2 text-4xl font-extrabold tracking-tight lg:text-5xl">
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
      <div className="flex flex-col space-y-2 text-xl text-muted-foreground">
        <p className="">
          I'm a{" "}
          <span role="image" aria-label="French">
            🇫🇷
          </span>{" "}
          engineer living in{" "}
          <span role="image" aria-label="Tokyo, Japan">
            🗼🇯🇵
          </span>{" "}
          since 2005 and I've been building stuff on the{" "}
          <span role="image" aria-label="Web">
            🌐
          </span>{" "}
          for 20 years.
        </p>
      </div>
    </section>
  );
}
