import axios from "axios"



const wait = (ms:number) => new Promise((resolve)=> setTimeout(resolve, ms))
 
const loginPage = async () => {
    await wait(3000)
    const {data} = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
    )
   throw new Error(`Could not do it`)

    return (<div>
        {JSON.stringify(data)}
    </div>)

}
 
export default loginPage;