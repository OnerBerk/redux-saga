const Yield =()=>{
    function* testing() {
        //yield permet de suspendre et reprendre une function* generatrice
        // cela permet de ne pas bloquer le iu et controler les entree sorties
        while (true) {
            yield 1
            yield 2
            yield 3
        }
    }

    const iterator = testing()
    console.log("iterator", iterator.next())//next renvoie la premeiere valeur de la fonction et suspend
    console.log("iterator", iterator.next())
    console.log("iterator", iterator.next())
    console.log("iterator", iterator.next())
    return iterator
}

export default Yield