import React from 'react';
import Card from './Card';

const CardList = ({robots}) =>{
	// to check Error handling with ErrorBoundry
	// if(true){
	// 	throw new Error('NOOOO');
	// }
	return (
	    <div>
	    {
	    	robots.map((user,i) => { 
	    		return (
	    			<Card 
			    		key={robots[i].id} 
			    		id={robots[i].id} 
			    		name={robots[i].name} 
			    		email={robots[i].email}
		    		/>
	    		);
	    	})
	    }
	    </div>
	);
}

export default CardList; 