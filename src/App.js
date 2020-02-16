import React, {useState} from 'react';
import CardContainer from './components/CardContainer';
import Card from './components/Card';

import useInitialState from './hooks/useInitialState';
import moment from 'moment';

const App = () => {

    const initialState = useInitialState();

    const [filter, setFilter] = useState("");

    const filterInputHandler = () => {
        setFilter(() => document.getElementById("inputFilter").value);
        console.log(initialState);
    }

    return(
        <div className="App">

            <div className="container mt-5">
                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Filter</span>
                </div>
                    <input id="inputFilter" onChange={filterInputHandler} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>
            </div>

            <CardContainer>
                {
                    initialState != null &&
                    Object.keys(initialState.quotes).map(key =>
                        <Card 
                            currSource={initialState.source} 
                            currDestiny={key.substr(3)} 
                            date={ moment(initialState.timestamp * 1000).format('MMMM Do YYYY, h:mm:ss a')} 
                            value={initialState.quotes[key]}
                            display={filter}/>
                    )
                }
            </CardContainer>
        </div>
    );
}

export default App;