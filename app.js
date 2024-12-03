let url="https://catfact.ninja/fact";

async function getfact(){
    try{
        let res= await axios.get(url);
        return(res.data.fact);
    }
    catch(err)
    {
        console.log("Error-",err);
    }
}


let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
    let res= await getfact();
    let p=document.querySelector("#fact");
    p.innerText=res;
})