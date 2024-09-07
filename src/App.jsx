import Random from "./components/Random"
import Tag from "./components/Tag"

export default function App() {
  return (
    <div className="items-center w-full h-screen background flex flex-col relative overflow-x-hidden">
      <h1 className="bg-white rounded-xl  w-10/12 text-center mt-[40px] mx-auto px-10 py-2 text-4xl font-bold">RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}
