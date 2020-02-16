import React from 'react';
import CardContainer from './components/CardContainer';
import Card from './components/Card';

import useInitialState from './hooks/useInitialState';
import moment from 'moment';

const App = () => {

    const initialState = useInitialState();
    

    return(
        <div className="App">
            <CardContainer>
                {
                    initialState != null &&
                    Object.keys(initialState.quotes).map(key =>
                        <Card 
                            currSource={initialState.source} 
                            currDestiny={key.substr(3)} 
                            date={ moment(initialState.timestamp*1000).format('MMMM Do YYYY, h:mm:ss a')} 
                            value={initialState.quotes[key]}
                            />
                    )
                }
            </CardContainer>
        </div>
    );
}

export default App;