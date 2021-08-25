import {Link} from "react-router-dom";

function Slug(props) {

    let {slug} = props.match.params;
    return (
            <main className="flex-80 bg-blue-200 p-8">
                 <Link to="/articles">
                    <h5 className="inline-block text-blue-900 text-xl font-bold underline ml-4">Go back to articles</h5>
               </Link> 
               <h3 className="text-2xl my-6">Slug of the Article is : <span className="text-red-400 font-bold">{slug}</span></h3>
            </main>  
    )
}

export default Slug;