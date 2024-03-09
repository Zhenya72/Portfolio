import { Card as BootstrapCard, Button } from 'react-bootstrap';
import { ArrowUp, Github } from 'react-bootstrap-icons';
import './Card.scss'
const Card = ({ id, title, subtitle, image, onTransition, onTransitionGit }) => {

  return (
    <BootstrapCard key={id} className='card' style={{ width: '18rem' }}>
      <BootstrapCard.Img variant="top" src={image} />
      <BootstrapCard.Body>
        <BootstrapCard.Title className='card__title'>{title}</BootstrapCard.Title>
        <BootstrapCard.Subtitle className='text-center'>({subtitle})</BootstrapCard.Subtitle>
      </BootstrapCard.Body>
      <BootstrapCard.Footer className='card__button'>
        <Button onClick={() => onTransition(id)}><ArrowUp /></Button>
        <Button onClick={() => onTransitionGit(id)}><Github /></Button>
      </BootstrapCard.Footer>
    </BootstrapCard>
  );
};

export default Card;



