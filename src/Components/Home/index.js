import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useContext } from 'react';
import  Context  from '../../context';
import './home.css';

export default () => {

    const {characters,setCharacters} = useContext(Context)

    const handleClick = (id) => {
        const character = characters.map(val => {
        if (val.id===id){
        return{...val,favorito:true}
    }
        return val
    })
        character.favorito = true
        setCharacters(character)
        
    }

    return (
        <div className='home-class'>
            <Container>
                <Row className='align-items-center'>
                    {characters ? characters.map(character => 
                    <Col lg={4} md={12} className='my-4'>
                    <Card>
                        <Card.Img variant='top' src={character.image} />
                        <Card.Body>
                            <Card.Title><big>{character.name}</big></Card.Title> 
                            <Card.Text>
                                <p><strong>Especie: </strong> {character.species}</p>
                                <p><strong>Status: </strong>{character.status}</p>
                                <p><strong>Gender: </strong>{character.gender}</p>
                            </Card.Text>
                            <button variant='primary' onClick={() => handleClick(character.id)}>Favoritos</button>
                        </Card.Body>
                    </Card>
                </Col>
                    ) : <p>Loading...</p> }
                    
                </Row>
            </Container>
        </div>
    );
}
