import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Footer from '../components/Footer';
import './App.css';
import { discs } from '../discs';


class App extends Component {
    constructor() {
        super()
        this.state = {
            discs: discs,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        
        // Filtering for the discs
        const { discs, searchfield } = this.state;
        const filterDiscs = discs.filter(disc =>  {

            if (disc.name.toLowerCase().includes(searchfield.toLowerCase())) {
                return disc.name;

            } else if (disc.brand.toLowerCase().includes(searchfield.toLowerCase())) {
                return disc.brand;

            } else if (disc.flight.toLowerCase().includes(searchfield.toLowerCase())) {
                return disc.flight;

            } else if (disc.disctype.toLowerCase().includes(searchfield.toLowerCase())) {
                return disc.disctype; 

            }   return '';
            
        }) 
        return (
            <div className="app tc">
            <h1 className="app">Jonni Sairio: In the bag</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <CardList discs={filterDiscs} />
            <Footer />
            </div>
        );
    }
}

export default App;