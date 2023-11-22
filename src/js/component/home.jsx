import React from "react";


//create your first component
const Home = (props) => {
	return (
		<>
		<div className="container-fluid bg-black text-white d-flex justify-content-center">
		<h3 className="bg-dark bg-gradient m-3 rounded p-2"><i className="fa-regular fa-clock"></i></h3>
		<h3 className="bg-dark bg-gradient m-3 rounded p-2">{props.seconds}</h3>
		</div>
		</>
	);
};

export default Home;
