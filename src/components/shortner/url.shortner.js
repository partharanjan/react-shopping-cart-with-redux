import { useState } from "react";

export function UrlShortner(){

    const [shortUrls, setShortUrls] = useState([]);
    const [url, setUrl] = useState('');

    function shortUrl(){
        if(url){
            // call the api
            fetch(`https://api.shrtco.de/v2/shorten?url=${url}`).then(res=>res.json()).then(res=>{
                this.setShortUrls([])
                console.log(res.result.full_short_link)
            }).catch(err=>{
                console.log(err);
            })
        }
    }

    return(
       <div>
        <input value={url} onChange={(e)=>setUrl(e.target.value)}  />
        <button onClick={shortUrl}>Short Url</button>
       </div>
    )

}