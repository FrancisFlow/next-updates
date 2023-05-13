import { FC } from "react";

interface postPageProps {
    params: {
        postId: string
    }
    
}
 
const postPage: FC<postPageProps> = ({params}) => {
    return ( 
        <>
        <div className="p-4 h-3 text-emerald-500 uppercase">
            <p>Hi, i'm the page you asked for</p>
            </div>
            <p>
                {params.postId}
                </p></>
     );
}
 
export default postPage;