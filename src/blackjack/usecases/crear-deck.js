import _ from "underscore";

/**
 * Esta funcion crea un nuevo deck
 * @param {array<String>} tiposDeCartas  - ['C','D','H','S']
 * @param {array<String>} tiposEspeaciales - ['A','J','Q','K']
 * @returns {array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCartas, tiposEspeaciales) => {

    if(!tiposDeCartas || tiposDeCartas.length ===0)
        throw new Error('tiposDeCartas es obligatorio como un arreglo de string');
    
    if(!tiposEspeaciales || tiposEspeaciales.length ===0)
        throw new Error('tiposEspeaciales es obligatorio como un arreglo de string');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposEspeaciales ) {
            deck.push( esp + tipo);
        }
    }

    deck = _.shuffle( deck );
    return deck;
}

// export default crearDeck;