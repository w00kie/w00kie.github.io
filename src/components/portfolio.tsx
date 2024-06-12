export function Portfolio() {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-2xl font-semibold tracking-tight">
        Here are some of the things I made:
      </h2>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold tracking-tight">
            <a
              href="/jpn-inheritance-tax/"
              className="text-sky-500 hover:underline"
            >
              Japanese Inheritance Tax Calculator
            </a>
          </h3>
          <p className="text-muted-foreground">
            A simple Japanese Inheritance Tax Calculator. It is meant to cover
            the case of a foreigner in Japan receiving an inheritance from
            abroad with all other heirs outside of Japan.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold tracking-tight">
            <a
              href="https://stellarid.io"
              className="text-sky-500 hover:underline"
            >
              StellarID.io
            </a>
          </h3>
          <p className="text-muted-foreground">
            A SaaS tool which lets you quickly setup federated Stellar addresses
            for your domain name without the need to install anything.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold tracking-tight">
            <a
              href="https://sunset.io"
              className="text-sky-500 hover:underline"
            >
              Sunset.io
            </a>
          </h3>
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
