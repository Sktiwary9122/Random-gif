
import { useState } from "react"
import Spinner from "./Spinner"
import useGif from "../hooks/useGif";
export default function Tag() {
  const[tag,setTag] = useState("car");
  const {gif,loading,fetchData} = useGif(tag);

  function changeHandler(event){
    setTag(event.target.value);
  }
  function clickHandler(){
    fetchData(tag);
  }
  return (
  <div className="w-1/2 flex flex-col items-center gap-y-5 bg-blue-500 rounded-lg border border-black">
    <h1 className="mt-[10px] text-2xl uppercase underline font-bold">RANDOM {tag} Gif</h1>
    {
      loading? (<Spinner/>) : (<img alt="hhh" src= {gif} width="450" className="p-4"/>)
    }

    <input 
    type="text"
    value={tag}
    className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
    onChange={changeHandler}

    ></input>
    <button onClick={clickHandler} className="w-10/12 bg-green-200 rounded-lg text-lg py-2 mb-6">Generate</button>
  </div>
  )
  
}
