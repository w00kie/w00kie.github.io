import Github from "@/assets/github.svg?react";

function ProjectLink({
  href,
  name,
  githubLink,
}: {
  href: string;
  name: string;
  githubLink?: string;
}) {
  return (
    <h3 className="inline-flex items-center text-xl font-semibold tracking-tight">
      <a
        href={href}
        className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent hover:underline"
      >
        {name}
      </a>{" "}
      {githubLink && (
        <a href={githubLink} className="inline-block">
          <Github className="mx-2 w-5 h-5 fill-current text-purple-300" />
        </a>
      )}
    </h3>
  );
}

export function Portfolio() {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-2xl font-semibold tracking-tight">
        Some of the things I made:
      </h2>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <ProjectLink href="https://epicforge.app" name="EpicForge.app" />
          <p className="text-muted-foreground">
            A SaaS tool for Jira power users to quickly clone issue based on
            their own templates. It automates repetitive tasks, simplifies
            project management, and streamlines workflows for recurring
            projects.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <ProjectLink
            href="/jpn-inheritance-tax/"
            name="Japanese Inheritance Tax Calculator"
            githubLink="https://github.com/w00kie/jpn-inheritance-tax"
          />
          <p className="text-muted-foreground">
            A simple Japanese Inheritance Tax Calculator. It is meant to cover
            the case of a foreigner in Japan receiving an inheritance from
            abroad with all other heirs outside of Japan.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <ProjectLink href="https://stellarid.io" name="StellarID.io" />
          <p className="text-muted-foreground">
            A SaaS tool which lets you quickly setup federated Stellar addresses
            for your domain name without the need to install anything.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <ProjectLink
            href="https://sunset.io"
            name="Sunset.io"
            githubLink="https://github.com/w00kie/sunsetter"
          />
          <p className="text-muted-foreground">
            A python web app running on GCP that can calculate, given a point of
            view and a point of interest (selected on a google map) on which day
            of the year the sun will rise or set in this direction.
          </p>
        </div>
      </div>
    </section>
  );
}
