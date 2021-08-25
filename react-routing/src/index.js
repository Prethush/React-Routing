import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Peoples from "./components/Peoples";
import Books from "./components/Books";
import Articles from "./components/Articles";
import Slug from "./components/Slug";
import Header from "./components/Header";
import Help from "./components/Help";
import Nomatch from './components/Nomatch';

ReactDOM.render(
    < BrowserRouter>
        < Header />
        <div className="flex">
            < Sidebar />
            <Switch>
              
                < Route path="/" exact>
                    < App />
                </Route>
                
                < Route path="/articles" exact>
                    < Articles />
                </Route>
                < Route path="/books">
                    < Books />
                </Route>
                < Route path="/people">
                    < Peoples />
                </Route>
                < Route path="/articles/:slug" component={Slug}></Route>
                < Route path="/help">
                    < Help />
                </Route>
                < Route path="*" component={Nomatch}></Route>
            </Switch>
            </div>
    </BrowserRouter>
    , document.getElementById("root"));