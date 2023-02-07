
/**
 * Metodo para crear las cartas
 * @param {HTMLImagenElement} divCartas elemeto HTML para mostrar las cartas
 * @param {String} carta contiene el valor de la carta y su tipo 
 */
export const crearCarta = (divCartas, carta) => {

    if(!carta) throw new Error('La carta es un argumento obligatorio');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    divCartas.append( imgCarta );
}