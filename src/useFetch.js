import {useState, useEffect} from 'react';


const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        const abortController = new AbortController();
        
        setTimeout(()=>{
        
            fetch(url,{signal: abortController.signal}) // Promise
            .then(res =>{    //Response object we need to extract data from it
                console.log(res);
                if(!res.ok){
                    throw Error(`Error 500.
                    Could not fetch data for that resource.
                    (res.ok false!)`);
                }
                return res.json(); // to get the data we call res.json() and this passes the json
                //into a javascript object for us
            })
            .then((data)=>{
                console.log(data);
                setData(data);
                setIsPending(false);
                setError(null);
            
            })
            .catch(err =>{
                if(err.name==='AbortError'){
                    console.log('fetch abort');
                }else{
                    setIsPending(false);
                    setError(err.message);
                }
            })
        },700)

        return() => abortController.abort();
    },[url]);

    return {data,isPending,error};
}
 
export default useFetch;