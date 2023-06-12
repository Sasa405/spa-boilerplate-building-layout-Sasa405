import React from "react";


const data = {
	image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg/300px-Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg",
	cardTitle: "Bob Dylan",
	cardDescription: "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
	button: {
	  url: "https://en.wikipedia.org/wiki/Bob_Dylan",
	  label: "Go to wikipedia"
	}
  };



const App = () => {
	return (
	  <div className="container">
		<div className="card mx-auto mt-5" style={{ width: "18rem" }}>
		  <img className="card-img-top" src={data.image} alt="Bob Dylan" />
		  <div className="card-body">
			<h5 className="card-title">{data.cardTitle}</h5>
			<p className="card-text">{data.cardDescription}</p>
			<a href={data.button.url} className="btn btn-primary">
			  {data.button.label}
			</a>
		  </div>
		</div>
	  </div>
	);
  };
export default App;

