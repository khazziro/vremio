import Weather from "./components/weather";

function App() {
  return (
    <div className="w-full h-screen relative bg-neutral-500 text-white before:content-[''] before:bg-[url('/src/assets/square_background.jpg')] before:absolute before:w-full before:h-full before:top-0 before:left-0  before:bg-no-repeat before:bg-cover before:bg-center">
      <Weather />
    </div>
  );
}

export default App;
