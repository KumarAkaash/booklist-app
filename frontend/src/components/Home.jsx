import React from 'react';
import {Link, useNavigate} from "react-router-dom";

function Home(props) {
   const navigate=useNavigate()
    return (
        <div>
           <h1>BookList</h1> 
           <Link to={"/addbooks"}>Add new book</Link>
           <div className='container'>your book will be displayed here!!!</div>
        </div>
    );
}

export default Home;
