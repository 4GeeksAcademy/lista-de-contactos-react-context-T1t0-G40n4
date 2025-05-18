import { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer();

  const getAgenda = async () =>{
	const agendaResponse = await fetch(`https://playground.4geeks.com/contact/agendas/Tito`);
	const agendaContacts = await agendaResponse.json();
	dispatch({
		type:'load_contacts',
		payload: {
			contacts: agendaContacts.contacts
		}
	})
	console.log(agendaContacts.contacts)
	}
  
  
  useEffect (()=>{
	getAgenda()

  },[])

  
	return (
		
		<div className="text-center mt-5 ">

			{store.contacts && store.contacts.map(contact =>(
				
				<div key={contact.id}>
					
					<p>{contact.name}</p>
					<p>{contact.email}</p>
					<p>{contact.address}</p>
					<p>{contact.phone}</p>

					<div>
						<button > </button>
					</div>

				
				</div>
				
			))}
		</div>
	);
 }