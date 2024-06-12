import { ThemeProvider } from "@/components/theme-provider";
import { Greetings } from "@/components/greetings";
import { Portfolio } from "@/components/portfolio";

function App() {
  return (
    <ThemeProvider>
      <main className="flex flex-col gap-6 mx-auto mt-12 px-6 md:max-w-2xl">
        <Greetings />
        <Portfolio />
      </main>
    </ThemeProvider>
  );
}

export default App;
