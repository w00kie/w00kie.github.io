import { ThemeProvider } from "@/components/theme-provider";
import { Greetings } from "@/components/greetings";

function App() {
  return (
    <ThemeProvider>
      <main className="mx-auto mt-12 px-6 md:max-w-2xl">
        <Greetings />
      </main>
    </ThemeProvider>
  );
}

export default App;
