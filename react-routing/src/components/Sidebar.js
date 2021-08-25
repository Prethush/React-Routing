import React from "react";
import { NavLink } from "react-router-dom";
import "../style/style.css";

class Sidebar extends React.Component {
   
    constructor(props) {
        super();
        this.state = {
            activeTag: "home"
        }
    }
    
    render() {
        let {activeTag} = this.state;
        return (
            <aside className="flex min-h-screen flex-15 px-4 py-8">
                <ul className="w-full">
                    < NavLink activeClassName="active" exact to="/">
                        <li className={activeTag === "home"? "bg-gray-200 my-2 p-2 rounded-md": "hover:bg-gray-200 my-2 p-2 rounded-md"} onClick={() => {
                            this.setState({activeTag: "home"})
                        }}>
                            <i className="fas fa-home font-bold"></i>
                            <span className="ml-3 text-xl">Home</span>
                        </li>
                    </NavLink>
                    < NavLink activeClassName="active" to="/articles">
                        <li className={activeTag === "articles"? "bg-gray-200 my-2 p-2 rounded-md": "hover:bg-gray-200 my-2 p-2 rounded-md"}  onClick={() => {
                            this.setState({activeTag: "articles"})
                        }}>
                            <i className="fas fa-newspaper"></i>
                            <span className="ml-3 text-xl">Articles</span>
                        </li>
                    </NavLink>
                    < NavLink activeClassName="active" to="/people">
                        <li className={activeTag === "people"? "bg-gray-200 my-2 p-2 rounded-md": "hover:bg-gray-200 my-2 p-2 rounded-md"}  onClick={() => {
                            this.setState({activeTag: "people"})
                        }}>
                            <i className="fas fa-user-friends"></i>
                            <span  className="ml-3 text-xl">People</span>
                        </li>
                    </NavLink>
                    < NavLink activeClassName="active" to="/books">
                        <li className={activeTag === "books"? "bg-gray-200 my-2 p-2 rounded-md": "hover:bg-gray-200 my-2 p-2 rounded-md"}  onClick={() => {
                            this.setState({activeTag: "books"})
                        }}>
                            <i className="fas fa-book-open text-xl"></i>
                            <span  className="ml-3 text-xl">Books</span>
                        </li>
                    </NavLink>
                    < NavLink activeClassName="active" to="/help">
                        <li className={activeTag === "help"? "bg-gray-200 my-2 p-2 rounded-md": "hover:bg-gray-200 my-2 p-2 rounded-md"}  onClick={() => {
                            this.setState({activeTag: "help"})
                        }}>
                            <i className="fas fa-hands-helping text-xl"></i>
                            <span className="ml-3 text-xl">Help & Support</span>
                        </li>
                    </NavLink>
                </ul>
            </aside>
        )
    }
}

export default Sidebar;