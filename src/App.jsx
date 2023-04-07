import Weather from "./api/weather";

function App() {
  return (
    <div className="h-screen w-full relative bg-gray-500 text-white before:content-[''] before:bg-[url('/src/assets/react.svg')] before:bg-no-repeat before:bg-cover before:bg-center before:absolute before:w-full before:h-full before:top-0 before:left-0">
      <Weather />
    </div>
  );
}

export default App;
