import { useState, useEffect } from 'react';
import GlobalStates from './GlobalStates';

/**
 * Componente inicializador
 */
const useInitialState = () => {
    const [ currencies, setCurrencies ] = useState(null);

    useEffect(() => {
        fetch(GlobalStates.get_selected_currencies())
        .then(response => response.json())
        .then(data => setCurrencies(data));
    }, []);

    return currencies;
}

export default useInitialState;