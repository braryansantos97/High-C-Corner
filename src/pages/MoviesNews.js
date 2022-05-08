import axios from 'axios';
import React, {useState, useEffect}  from 'react'

export default function MoviesNews() {

    const [endPoints, setEndPoints] = useState('')
    const [matchingTitles, setMatchingTitles] = useState([]);


    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'http://localhost:8000/titles',
            params: {search_field: 'name', search_value: 'Breaking Bad', types: 'tv'},
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data.title_results);
              setMatchingTitles(response.data.title_results)
    
          }).catch(function (error) {
              console.error(error);
          })
    }, [])
    
    // const onChange

    

    return (
        <div className='text-center'>
            <h1>Movies News</h1>
            <div className="input-group">
                <form className="d-flex bg-dark p-2 text-dark bg-opacity-75">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-" type="submit">Search</button>
                </form>
                <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                    <li><a className="dropdown-item" href="#">Movie</a></li>
                    <li><a className="dropdown-item" href="#">TV</a></li>
                    <li><a className="dropdown-item" href="#">Both</a></li>
                </ul>
            </div>
        </div>
    )
}