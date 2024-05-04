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
   
   fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}

export default fetchJobList;