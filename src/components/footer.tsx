import { Instagram } from "lucide-react";
import PuraIcon from "@/assets/pura-icon.svg?react";
import Linkedin from "@/assets/linkedin.svg?react";
import Github from "@/assets/github.svg?react";
import Twitter from "@/assets/twitter.svg?react";

export function Footer() {
  return (
    <footer className="text-muted-foreground mb-4">
      <ul className="flex flex-row gap-2 justify-center">
        <li>
          <a href="https://w00kie.com">
            <PuraIcon
              width={24}
              height={24}
              stroke="currentColor"
              fill="currentColor"
            />
          </a>
        </li>
        <li>
          <a href="https://x.com/w00kie">
            <Twitter
              width={24}
              height={24}
              stroke="currentColor"
              fill="currentColor"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/w00kie">
            <Github
              width={24}
              height={24}
              stroke="currentColor"
              fill="currentColor"
            />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/frejete">
            <Linkedin
              width={24}
              height={24}
              stroke="currentColor"
              fill="currentColor"
            />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/w00kie">
            <Instagram />
          </a>
        </li>
      </ul>
    </footer>
  );
}
