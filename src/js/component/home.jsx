import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [name, setName] = useState("Jose");
	return (
		<div className="container text-center mt-5">
			<label >Nombre</label>
			<input type="text" placeholder="Ingresa tu nombre" value={name} onChange={(e)=>{
				setName(e.target.value)
			}}/>
			<button className="btn btn-success" onClick={()=>{
				setName("")
			}}>Limpiar input</button>
			<button className="btn btn-warning" onClick={()=>{
				name == "" ? alert("Ingresa tu nombre") : ""
			}}>Check input</button>
			<h3>Tu nombre es {name}</h3>
		</div>
	);
};

export default Home;
