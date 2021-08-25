import React from "react";
import datas from "../articles";
import {Link} from "react-router-dom";

class Articles extends React.Component {
    constructor(props) {
        super();
        this.state = {
            inputText: ""
        };
    }

    handleChange = ({target}) => {
        let {value} = target;
        this.setState({inputText: value});
    }
    render() {
            let text = this.state.inputText;
            let articles = datas.filter((data) => {
                return text ? data.title.toLowerCase().includes(text.toLowerCase()) : true
            })

        return (
            <main className="flex-80 p-8 bg-blue-200">
                <div className="my-6">
                    <input type="text" placeholder="Search" className="p-2 rounded-md w-96" value={this.state.inputText} onChange={this.handleChange}/>
                </div>
                <section className="my-6">
                    {
                       articles.map((data) => {
                           return (
                               <div key={data.slug} className="my-2">
                                   <Link to={`/articles/${data.slug}`}>
                                        <h2 className="text-blue-700 text-2xl font-bold underline mb-2 inline-block">{data.title}</h2>
                                   </Link>
                                   <h4>{data.author}</h4>
                               </div>
                           )
                       })
                    }
                </section>
            </main>
        )
    }
}

export default Articles;