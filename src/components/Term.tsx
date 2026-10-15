import { Minus, Square, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface TerminalProps {
  onclick: () => void;
}

type ModeType = "mac" | "windows";

const commands = [
  { command: "help", output: "Available commands:\nhelp, profile, projects" },
  {
    command: "profile",
    output: "Name: Gopal Bhandari\nEmail: gopalbhandari056@gmail.com\nRole: Developer",
  },
  {
    command:"projects",
    output:"Blog Cms \n live:https://blog-virid-ten-99.vercel.app/ \n Ecommerce \n live:https://e-commerce-nine-psi-ebmg3fhqxj.vercel.app/"
  }
];

const Terminal = ({ onclick }: TerminalProps) => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>([
    "Welcome to the terminal!",
    "Type 'help' to see available commands.",
    "",
  ]);
  const [mode, setMode] = useState<ModeType>("mac");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  function changeMode() {
    setMode((prev) => (prev === "mac" ? "windows" : "mac"));
    inputRef.current?.focus();
  }

  useEffect(() => {
    terminalRef.current?.scrollTo({
      top: terminalRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [output]);

  function handleCommand(rawCommand: string) {
    const command = rawCommand.trim();

    if (!command) return;

    const [cmd = "", ...args] = command.split(" ");
    const argument = args.join(" ");

    if (cmd !== "clear" && cmd !== "cls") {
      setOutput((prev) => [...prev, `${getPrompt()} ${command}`]);
    }

    setHistory((prev) => [...prev, command]);
    setHistoryIndex(-1);

    switch (cmd.toLowerCase()) {
      case "clear":
      case "cls":
        setOutput([]);
        break;

      case "help":
      case "profile":
      case "projects": {
        const result = commands.find(
          (item) => item.command === cmd.toLowerCase()
        );
        if (result) {
          setOutput((prev) => [...prev, result.output]);
        }
        break;
      }

      case "date":
        setOutput((prev) => [...prev, new Date().toString()]);
        break;

      case "echo":
        setOutput((prev) => [...prev, argument]);
        break;

      case "history":
        setOutput((prev) => [
          ...prev,
          ...history.map((item, index) => `${index + 1}  ${item}`),
        ]);
        break;

      default:
        setOutput((prev) => [
          ...prev,
          `Command not found: ${cmd}. Type 'help' for available commands.`,
        ]);
    }

    setInput("");
  }

  function getPrompt() {
    return mode === "mac" ? "gopalbhn:~ $" : "C:\\Users\\gopalbhn>";
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCommand(input);
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();

      if (history.length === 0) return;

      const nextIndex =
        historyIndex === -1
          ? history.length - 1
          : Math.max(0, historyIndex - 1);

      setHistoryIndex(nextIndex);
      setInput(history[nextIndex] ?? "");
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();

      if (historyIndex === -1) return;

      const nextIndex = historyIndex + 1;

      if (nextIndex >= history.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(nextIndex);
        setInput(history[nextIndex] ?? "");
      }
    }

    if (e.key === "Tab") {
      e.preventDefault();

      const matches = [
        ...commands.map((item) => item.command),
        "clear",
        "cls",
        "date",
        "echo",
        "history",
        "whoami",
      ].filter((cmd) => cmd.startsWith(input.trim()));

      if (matches.length === 1) {
        setInput(matches[0]!);
      }
    }
  }

  return (
    <div
      className="fixed bottom-6 left-1/2 z-50 flex h-[500px] w-[80%]
      -translate-x-1/2 flex-col overflow-hidden rounded-xl border
      border-black/30 bg-white font-mono font-thin text-black/70
      shadow-md shadow-black/20 dark:border-white/30 dark:bg-black
      dark:text-white dark:shadow-2xl dark:shadow-white/20"
      onClick={() => inputRef.current?.focus()}
    >
      <TerminalHeader
        mode={mode}
        onChangeMode={changeMode}
        onclick={onclick}
      />

      <div
        ref={terminalRef}
        className="min-h-0 flex-1 overflow-y-auto p-4"
      >
        {output.map((line, index) => (
          <div key={`${index}-${line}`} className="whitespace-pre-wrap text-sm">
            {line || "\u00A0"}
          </div>
        ))}

        <div className="flex items-center text-sm">
          <span className="shrink-0 text-black/70 dark:text-white/70">
            {getPrompt()}
          </span>

          <input
            ref={inputRef}
            type="text"
            value={input}
            autoFocus
            spellCheck={false}
            autoComplete="off"
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label="Terminal command"
            className="ml-2 min-w-0 flex-1 border-none bg-transparent
            text-sm text-black outline-none caret-black
            dark:text-white dark:caret-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;

const TerminalHeader = ({
  mode,
  onChangeMode,
  onclick,
}: {
  mode: ModeType;
  onChangeMode: () => void;
  onclick: () => void;
}) => {
  return (
    <div
      className="flex w-full shrink-0 items-center justify-between border-b
      border-black/30 bg-[#ECE9E5] px-4 py-1.5
      dark:border-white/30 dark:bg-black"
    >
      {mode === "mac" ? (
        <>
          <div className="flex items-center gap-2">
            <button
              aria-label="Close terminal"
              className="flex items-center justify-center rounded-full
              bg-red-500 p-px text-red-500 hover:text-white"
              onClick={onclick}
            >
              <X size={8} />
            </button>

            <button
              aria-label="Minimize terminal"
              className="flex items-center justify-center rounded-full
              bg-yellow-500 p-px text-yellow-500 hover:text-white"
            >
              <Minus size={8} />
            </button>

            <button
              aria-label="Toggle terminal mode"
              onClick={onChangeMode}
              className="flex items-center justify-center rounded-full
              bg-green-500 p-px text-green-500 hover:text-white"
            >
              <Square size={8} />
            </button>
          </div>

          <p className="text-sm">Terminal</p>

          <button
            aria-label="Switch to Windows mode"
            onClick={onChangeMode}
            className="rounded-full bg-gray-300  p-1 text-xs
            dark:hover:bg-gray-500"
          >

          </button>
        </>
      ) : (
        <>
          <button
            aria-label="Switch to macOS mode"
            onClick={onChangeMode}
            className="rounded-full bg-gray-300 p-1 text-xs
            dark:hover:bg-gray-500"
          >
            
          </button>

          <p className="text-sm">Terminal</p>

          <div className="flex items-center gap-2">
            <button
              aria-label="Minimize terminal"
              className="flex h-6 w-6 items-center justify-center
              hover:bg-gray-300 dark:hover:bg-gray-800"
            >
              <Minus size={12} />
            </button>

            <button
              aria-label="Maximize terminal"
              className="flex h-6 w-6 items-center justify-center
              hover:bg-gray-300 dark:hover:bg-gray-800"
            >
              <Square size={12} />
            </button>

            <button
              aria-label="Close terminal"
              onClick={onclick}
              className="flex h-6 w-6 items-center justify-center
              hover:bg-red-500 hover:text-white"
            >
              <X size={12} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};