import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCDR0ieGUEwlhLtgsYk6_j5ZnEeZPz9ZiI';

//component code
const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
}

// command to put this shit in DOM
ReactDOM.render(<App />, document.querySelector('.container'));

