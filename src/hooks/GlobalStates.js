/**
 * Constante que contrendrá variables globales y metodos útiles
 */
const GlobalStates = {
    API_HOST: "http://api.currencylayer.com/live?",
    KEY: "access_key=d08bb4f437059b7ce819bb3019a6fbe1",
    CURRENCIES: "ARS,CLP,COP,MXN,PYG",
    get_host_url: () => GlobalStates.API_HOST + GlobalStates.KEY,
    get_selected_currencies: () => GlobalStates.get_host_url() + '&currencies=' + GlobalStates.CURRENCIES
}

export default GlobalStates;