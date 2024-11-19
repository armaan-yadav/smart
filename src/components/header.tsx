import { useTheme } from "@/context/theme-provider";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const { setTheme, theme } = useTheme();
  const isLight = theme == "light";

  return (
    <header className="sticky backdrop-blue bg-background/95 top-0 z-50 py-2 w-full px-2 supports-[backdrop-filter]:bg-background/60 ">
      <div className="flex items-center justify-between mx-auto h-16 container">
        <Link to={"/"}>
          <span className="text-2xl font-extrabold tracking-widest">
            MAUSAM DEKHO
          </span>
        </Link>

        <div
          className={`cursor-pointer flex items-center justify-center transition-transform duration-500 ${
            isLight ? "rotate-180" : "rotate-0"
          }`}
          onClick={() => {
            setTheme(isLight ? "dark" : "light");
          }}
        >
          {/* search */}
          {/* mode tooggle */}

          {isLight ? (
            <Sun className="size-6 rotate-0 transition-all" />
          ) : (
            <Moon className="size-6 rotate-0 transition-all" />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
