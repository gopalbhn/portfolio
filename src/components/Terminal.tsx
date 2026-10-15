import { Minus, Square, X } from "lucide-react";
import { useEffect, useState } from "react";

interface TerminalProps {
  onclick: () => void;
}

type modeType = "mac" | "windows";
const commands = [
  { command: "help", output: "Available commands: help, ls, pwd" },
  { command: "profile", output: "Name: John Doe\nEmail: john.doe@example.com" },
  { command: "ls", output: "Documents\nDownloads\nPictures" },
  { command: "pwd", output: "/home/johndoe" },
  { command: "clear", output: "" },
];

const Terminal = ({ onclick }: TerminalProps) => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>([]);
  const [mode, setMode] = useState<"mac" | "windows">("mac");
  const [history, setHistory] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  function changeMode() {
    setMode((prevMode) => (prevMode === "mac" ? "windows" : "mac"));
  }

  function loadInitialStatement() {
    setOutput((prevOutput) => [
      ...prevOutput,
      "Welcome to the terminal! Type 'help' for a list of commands." + "\n" + "ghefad",
    ]);
  }
  useEffect(() => {
    loadInitialStatement();
  }, []);


  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      console.log("Enter key pressed");
      const command = input.trim();
      handleCommand(command);
    }
  });
 
  function handleCommand(command:string){

    if(command == 'clear' || command == "cls" ){
      setOutput([])
      return;
    }

    commands.forEach((cmd) => {
      if (cmd.command === command) {
        setOutput((prevOutput) => [...prevOutput, `> ${command}`, cmd.output]);
        setHistory((prevHistory) => [...prevHistory, command]);
        setInput("");
      }
    });
    
    if(!commands.some(cmd => cmd.command === command) ){
      setOutput(prev=> [...prev,'command not found'])
      setInput("")
    }
  }



  return (
    <div className="fixed bottom-6 w-[80%] h-[500px] left-[50%] transform translate-x-[-50%] bg-white dark:bg-black border border-black/30 dark:border-white/30 text-black/70 dark:text-white shadow-md shadow-black/20 dark:shadow-2xl dark:shadow-white/20 overflow-hidden  z-50 rounded-xl font-mono font-thin ">
      <TerminalHeader mode={mode} onChangeMode={changeMode} onclick={onclick} />

      <div className=" h-full w-full p-4 overflow-y-scroll">
    
    {output.map(outp=>(
      <>
      <span>{outp}</span> <br /> 
      </>
    ))}
        <span className="text-sm text-black/70 dark:text-white/70">
          {mode === "mac" ? "gopalbhn:~ $" : "C:\\Users\\gopalbhn>"}
        </span>
        <input
          type="text"
          value={input}
          autoFocus
          onChange={handleInputChange}
          className="bg-transparent border-none outline-none text-sm max-w-full ml-2 text-black/70 border-2 caret-white dark:border-white dark:text-white/70"
          />
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
  mode: modeType;
  onChangeMode: () => void;
  onclick: () => void;
}) => {
  return mode == "mac" ? (
    <div className="h-fit py-1.5 w-full bg-[#ECE9E5] dark:bg-black border-b border-black/30 dark:border-white/30 flex justify-between items-center px-4">
      <div className="flex items-center gap-2">
        <button
          className="flex p-px rounded-full items-center justify-center bg-red-500 text-red-500 hover:text-white"
          onClick={onclick}
        >
          <X size={8} />
        </button>
        <button className="flex p-px rounded-full items-center justify-center bg-yellow-500 text-yellow-500 hover:text-white">
          <Square size={8} />
        </button>
        <button className="flex p-px rounded-full items-center justify-center bg-green-500 text-green-500 hover:text-white">
          <Minus size={8} />
        </button>
      </div>
      <p className="text-sm ">Terminal</p>
      <button
        className="flex p-1 items-center  rounded-full gap-2 bg-gray-300 dark:hover:bg-gray-500"
        onClick={onChangeMode}
      ></button>
    </div>
  ) : (
    <div className="h-fit py-1.5 w-full bg-[#ECE9E5] dark:bg-black border-b border-black/30 dark:border-white/30 flex justify-between items-center px-4">
      <button
        className="flex p-1 items-center  rounded-full gap-2 bg-gray-300 dark:hover:bg-gray-500"
        onClick={onChangeMode}
      ></button>
      <p className="text-sm ">Terminal</p>
      <div className="flex items-center gap-2">
        <button className="flex h-6 w-6 items-center justify-center  hover:bg-gray-300 dark:hover:bg-gray-800">
          <Minus size={12} />
        </button>
        <button className="flex h-6 w-6  items-center justify-center  hover:bg-gray-300  dark:hover:bg-gray-800">
          <Square size={12} />
        </button>
        <button
          className="flex h-6 w-6   items-center justify-center hover:bg-red-500 hover:text-white"
          onClick={onclick}
        >
          <X size={12} />
        </button>
      </div>
    </div>
  );
};
