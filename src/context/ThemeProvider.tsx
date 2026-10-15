import { createContext,use, useContext, useEffect, useState } from "react";
type Theme = "light" | "dark"; 
interface ThemeContextType {
  theme: Theme;
  setTheme: (newTheme: Theme) => void;
}


const context = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("dark");


    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") as Theme;
        setTheme(storedTheme || "dark");
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(storedTheme || "dark");
        document.documentElement.setAttribute("data-theme", storedTheme || "dark");


    },[]);

  const updateTheme = (newTheme: Theme) => {
      localStorage.setItem("theme", newTheme); 
      document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <context.Provider value={{ theme, setTheme: updateTheme }}>
      {children}
    </context.Provider>
  );
};

const useTheme = (): ThemeContextType => {
  const contextValue = useContext(context);
    if (!contextValue) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return contextValue;
}

export { ThemeProvider, useTheme };