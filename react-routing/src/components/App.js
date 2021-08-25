import Peoples from "./Peoples"
import Books from "./Books";
import {Link} from "react-router-dom";
 
function App() {
    return (
        <main className="flex-80 bg-blue-200 p-8">
            <h1 className="text-center text-4xl font-bold">🚀 Welcome to Homepage!</h1>
            <section className="flex justify-between my-8">
                <div className="flex-30 bg-white py-8 text-center rounded-lg">
                   <Link to="/articles">
                        <h2 className="text-2xl font-bold underline uppercase">Articles page</h2>
                   </Link>
                </div>
                <div className="flex-30 bg-white py-8 text-center rounded-lg">
                   <Link to="/books">
                        <h2 className="text-2xl font-bold underline uppercase">Books page</h2>
                   </Link>
                </div>
                <div className="flex-30 bg-white py-8 text-center rounded-lg">
                   <Link to="/people">
                        <h2 className="text-2xl font-bold underline uppercase">People page</h2>
                   </Link>
                </div>
            </section>
        </main>
    )
}


export default App;