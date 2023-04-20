import { Route, Routes } from 'react-router-dom';

import Home from '../Home';

import Favorito from '../Favorito';


export default () => {
    return (
        // Cada ruta se define con el componente < Route >, que toma una propiedad "path" que define el 
        // URL de la ruta y una propiedad "element" que define el componente que se renderiza cuando la ruta
        // coincide con el URL actual.
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contacto' element={<Favorito />} />
        </Routes>
    )
}

