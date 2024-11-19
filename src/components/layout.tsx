import { PropsWithChildren } from "react";
import Header from "./header";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-gradient-to-br from-background to-muted  bg-red-400">
      <Header />
      <main className="container mx-auto min-h-screen px-4 py-8">
        {children}
      </main>
      {/* Footer */}
      <footer className="border-t backdrop-blur py-12 supports-[backdrop-filter]: bg-background/60">
        <div className="container text-center mx-auto px-4 text-gray-400">
          Made by Armaan
        </div>
      </footer>
    </div>
  );
};

export default Layout;
