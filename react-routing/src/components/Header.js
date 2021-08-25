import {Link} from "react-router-dom";

function Header(props) {
    return (
        <header className="py-6 bg-blue-900 px-12">
           <Link to="/">
                <h1 className="text-2xl font-bold text-white">React Routing</h1>
           </Link>
        </header>
    )
}

export default Header;