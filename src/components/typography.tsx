export function TypographyH1({
  children,
}: Readonly<React.PropsWithChildren<{}>>) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  );
}

export function TypographyH2({
  children,
}: Readonly<React.PropsWithChildren<{}>>) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
}

export function TypographyH3({
  children,
}: Readonly<React.PropsWithChildren<{}>>) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  );
}

export function TypographyH4({
  children,
}: Readonly<React.PropsWithChildren<{}>>) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  );
}

export function TypographyP({
  children,
}: Readonly<React.PropsWithChildren<{}>>) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
}

export function TypographyBlockquote({
  children,
}: Readonly<React.PropsWithChildren<{}>>) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  );
}

export function TypographyList({
  children,
}: Readonly<React.PropsWithChildren<{}>>) {
  return <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>;
}

export function TypographyInlineCode({
  children,
}: Readonly<React.PropsWithChildren<{}>>) {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {children}
    </code>
  );
}

export function TypographyLead({
  children,
}: Readonly<React.PropsWithChildren<{}>>) {
  return <p className="text-xl text-muted-foreground">{children}</p>;
}

export function TypographyLarge({
  children,
}: Readonly<React.PropsWithChildren<{}>>) {
  return <div className="text-lg font-semibold">{children}</div>;
}

export function TypographySmall({
  children,
}: Readonly<React.PropsWithChildren<{}>>) {
  return <small className="text-sm font-medium leading-none">{children}</small>;
}

export function TypographyMuted({
  children,
}: Readonly<React.PropsWithChildren<{}>>) {
  return <p className="text-sm text-muted-foreground">{children}</p>;
}
