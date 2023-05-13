import { AuthRequiredError } from "@/lib/exceptions"
const session = null
export default function Home() {
  if(!session) throw new AuthRequiredError()
  return (
    <>
      
        
    <div className='bg-blue text-white'>
      
      <p>
        This is an auth only page
      </p>
      </div>  
          
           
        
    </>
    
  )
}
