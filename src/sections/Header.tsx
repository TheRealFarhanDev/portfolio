import ThemeToggle from "@/components/ThemeToggle";

export const Header = () => {
  return (
    <header className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-gray-900/15 dark:border-white/15 rounded-full bg-gray-900/10 dark:bg-white/10 backdrop-blur ">
        <a href="#" className="nav-item">
          Home
        </a>
        <a href="#projects" className="nav-item">
          Projects
        </a>
        <a href="#about" className="nav-item">
          About
        </a>
        <a href="#contact" className="nav-item nav-item-contact">
          Contact
        </a>
      </nav>

      <div className="fixed bottom-6 right-6 z-50">
        <ThemeToggle />
      </div>
    </header>
  );
};
