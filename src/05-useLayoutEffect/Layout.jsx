import { useCounter, useFetch } from "../hooks";
import { LoadingQuote } from "../03-examples/LoadingQuote";
import { Quote } from "../03-examples/Quote";
export const Layout = () => {
    const {increment, counter} = useCounter(1);
    const {data, isLoading, isError} = useFetch("https://www.breakingbadapi.com/api/quotes/"+counter);
    const {author, quote} = !!data && data[0];
    

    
  return (
    <>
        <h1>Breaking bad quotes</h1>
        <hr />

        {
            isLoading ?
                <LoadingQuote />
            :
                <Quote quote={quote} author={author}/>
        }

        <button disabled={isLoading} className="btn btn-primary" onClick={()=>{increment(1)}}>
            Next quote
        </button>
        

    </>
  )
}
