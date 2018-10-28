import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';
// import { robots } from './robots';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = { //things that can change or affect our app
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        // console.log("successfully mounted");
        fetch('https://jsonplaceholder.typicode.com/users') //fetch data from link given, fetch is method on window object
            .then(response => response.json()) // magical json
            .then(users => {this.setState({ robots: users })}); //this is then stored to users, I guess some kinda array, which robots is set to
        // this.setState({robots: robots});
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render() {
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase()); //if robot's name in all lowercase includes the search query, we add it
        })
        if (robots.length === 0) {return <h2>Loading...</h2>;}
        else {
            return ( // passes the onSearchChange function as a prop to SearchBar
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBar searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
        }
    }

};

export default App;