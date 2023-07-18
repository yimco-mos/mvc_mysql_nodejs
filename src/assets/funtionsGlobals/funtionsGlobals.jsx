export const fetchdata = async(url)=>{
    const Url= url;
try {
    
    
    const fetchdatas = await fetch(Url)
    const data = await fetchdatas.json();
    return data;

} catch (error) {
    console.log(error)
}


}