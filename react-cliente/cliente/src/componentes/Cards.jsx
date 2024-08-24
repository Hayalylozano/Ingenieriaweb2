import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export function Cards({personajes, update}) {
    return(
        <div className='d-flex flex-wrap gap-2 min-vh-100' style={{minHeight:"250px", minWidth:"350px"}}>
        {personajes.map(personaje =>(
            <Card key={personaje.id}>
            <Card.Img variant='top' src={personaje.image}/>
            <Card.Title>{personaje.name}</Card.Title>
            <Card.Text>{personaje.status}</Card.Text>
            <Button onClick = {() => update(personaje.id)} variant="primary">Actualizar Información</Button>
            </Card>            
            ))}
        </div>
    ) 
}
