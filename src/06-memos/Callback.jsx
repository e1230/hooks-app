import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const Callback = () => {
    const increment = useCallback(
      (value) => {
        setCounter((c => c + value));
      },
      [],
    )
    
    const [counter, setCounter] = useState(10); 
  return (
    <>
        <h1>use Callback: {counter}</h1>
        <hr />
        <ShowIncrement increment={increment}/>
    </>
  )
}
