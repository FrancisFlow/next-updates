import { FC } from "react";

interface loadingProps {
    
}
 
const loading: FC<loadingProps> = () => {
    return (
         <div  className="bg-black text-red-700 p-5
         uppercase" >
            loading
        </div>
      );
}
 
export default loading;