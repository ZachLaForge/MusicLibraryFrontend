import React, { Component } from 'react';
import "../App.css";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchTerm: ""
         }
    }


    handleChange = (event) => {
        this.props.newFilter(event.target.value)
        
    }
    

  

    render() { 
        return (
            <div className = "center">
                <br/><br/>
                <form>
                    <table>
                        <tr>
                            <td><label><b>Search</b> by Any Column Header (title, artist, album, genre, release date)</label></td>
                            <td><input title = "search" type = 'text' size="50" name = 'searchTerm' onChange= {this.handleChange} placeholder="Enter Search Criteria Here"/></td>
                        </tr>
                    </table>    
                </form>
            </div>
        );
    }
}
export default SearchBar;