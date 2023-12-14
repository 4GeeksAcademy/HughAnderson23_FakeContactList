import React from "react";
import ContactList from "../component/ContactList";
import AddContactButton from "../component/AddContactButton";
import "../../styles/home.css";

const Home = () => {
	return (
	  <div>
		<h1>Home View</h1>
		<ContactList />
		<AddContactButton />
	  </div>
	);
  };
  
  export default Home;
	

