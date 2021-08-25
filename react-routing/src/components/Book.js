function Book(props) {

    let data = props.data;
    console.log(data.image);
    return (
       <div className="flex-18 bg-white rounded-lg p-8 my-3 mx-3 text-center shadow-custom">
           <div>
               <img src={data.image} className="object-contain w-11/12" alt={data.name}/>
           </div>
           <h2 className="my-2 font-bold text-xl">{data.title}</h2>
           <h4 className="text-center">{data.author}</h4>
           <a className="p-2 rounded-md bg-blue-500 text-white font-bold my-2 inline-block" href={data.website}>Buy Now</a>
       </div>
    )
}

export default Book;