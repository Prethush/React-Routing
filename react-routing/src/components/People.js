import "../style/style.css";

function People(props) {

    let people = props.data;
    return (
       <div className="flex-30 bg-white my-4 p-4 shadow-custom rounded-lg">
           <div className="flex items-center">
               <img src={people.image} className="w-15 h-15 rounded-full"/>
               <h2 className="text-2xl ml-4 font-bold">{people.name}</h2>
           </div>
           <p className="mt-4 text-center">{people.description}</p>
           <a className="block text-center mt-2 text-blue-700 font-bold underline" href={people.wikiLink}>Learn More</a>
       </div>
    )
}

export default People;