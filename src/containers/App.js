import React, { Component, useState } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Footer from '../components/Footer';
import './App.css';
import { discs as frisbeeDump } from '../discs';


const App = () => {
    const [filteredFrisbees, setFilteredFrisbees] = useState(frisbeeDump);
    
    const filterFrisbees = (event) => {
    event.target.value === ""
    ? setFilteredFrisbees(frisbeeDump)
    : setFilteredFrisbees(
    frisbeeDump.filter((frisbee) =>
    [
    frisbee.name.toLowerCase(),
    frisbee.brand.toLowerCase(),
    frisbee.flight.toLowerCase(),
    frisbee.disctype.toLowerCase(),
    ].some((text) => text.includes(event.target.value.toLowerCase()))
    )
    );
    };
    
    return (
    <div className="app tc">
    <h1 className="app">Jonni Sairio: In the bag</h1>
    <SearchBox searchChange={filterFrisbees} />
    <CardList discs={filteredFrisbees} />
    <Footer />
    </div>
    );
    };
    
    export default App;
    