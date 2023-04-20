import React, { useEffect, useState, useContext } from 'react'; 
import './favorito.css'; 
import Context from '../../context'; 
import { Container, Row, Col, Card, Button } from 'react-bootstrap'; 

export default () => {

    const [data, setData] = useState([]); // Definimos el estado para almacenar los personajes favoritos
    const { characters, setCharacters } = useContext(Context); // Obtenemos los personajes y la función para actualizarlos desde el contexto

    useEffect(() => {
        setData(characters.filter(val => val.favorito === true)); // Filtramos los personajes para obtener sólo los que son favoritos y los almacenamos en el estado
    }, []); // Usamos useEffect para que la función se ejecute sólo una vez al cargarse el componente

    return (
        <div className='favorito-class'> {/* Div que contiene el componente */}
            <Container> 
                <Row className='align-items-center'> {/* Fila de Bootstrap para alinear verticalmente los elementos */}
                    {data ? data.map(character => // Si hay personajes favoritos, los recorremos con map
                        <Col lg={4} md={12} className='my-4'> 
                            <Card className='card-1'>
                                <Card.Img variant='top' src={character.image} />
                                <Card.Body> 
                                    <Card.Title><big>{character.name}</big></Card.Title> 
                                    <Card.Text> 
                                        <p><strong>Especie:</strong> {character.species}</p> 
                                        <p><strong>Status:</strong> {character.status}</p> 
                                        <p><strong>Gender:</strong>  {character.gender}</p> 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ) : <p>Loading...</p>} {/* Si no hay personajes favoritos, mostramos un mensaje de carga */}
                </Row>
            </Container>
        </div> 
    );
}
