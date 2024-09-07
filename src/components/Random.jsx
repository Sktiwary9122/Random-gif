
import Spinner from "./Spinner"
import useGif from "../hooks/useGif";
export default function Random() {

  const {gif,loading,fetchData} = useGif();
  function clickHandler(){
    fetchData();
  }
  return (
  <div className="w-1/2 flex flex-col items-center gap-y-5 bg-green-500 rounded-lg border border-black">
    <h1 className="mt-[10px] text-2xl uppercase underline font-bold">A Random Gif</h1>
    {
      loading? (<Spinner/>) : (<img alt="sad" src= {gif} width="450" className="p-4"/>)
    }

    <button onClick={clickHandler} className="w-10/12 bg-green-200 rounded-lg text-lg py-2 mb-6">Generate</button>
  </div>
  )
  
}
