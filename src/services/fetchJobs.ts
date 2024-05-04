const fetchJobList = async (limit:number,offset:number) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const body = JSON.stringify({
    "limit": limit,
    "offset": offset
   });
   
   const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body
   };
   try{
      const repsonse = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
      const result = await repsonse.json();
      return result;
   }
   catch(error){
    console.log("error:",error);
   }
}

export default fetchJobList;