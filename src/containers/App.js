import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundry from './ErrorBoundry'

class App extends React.Component{
	constructor(){
		super();
		this.state ={
			robots: [],
			searchfield: '' 
		}
	}

	onSearchChange = (event) => {
	   this.setState({searchfield: event.target.value})
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		    .then(response => response.json())
		    .then(users => this.setState({robots: users}));
	}

	render(){
		const { robots, searchfield} = this.state;
		const filteredRobots = robots.filter(rob => {
			return rob.name.toLowerCase().includes(searchfield.toLowerCase());
		})

		if(!robots.length)
		{
			return <h1> Loading </h1>
		} else {
			return(
				<div className='tc'>
				<h1 className='f1'> RoboFriends</h1>	
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<ErrorBoundry>
						<CardList robots={filteredRobots}/>
					</ErrorBoundry>
				</Scroll>
				</div>
			);
		}

	}
}

export default App;