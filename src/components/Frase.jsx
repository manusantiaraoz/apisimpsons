import { Card } from "react-bootstrap";

const Frase = ({personaje}) => {
  return (
    <section className="my-5">
      <img className="mb-3" src={personaje.image} alt={personaje.character} />
      <Card>
        <Card.Body>
          <figure>
            <blockquote className="blockquote">
              <p>{personaje.character}</p>
            </blockquote>
            <figcaption className="blockquote-footer">
             <cite title="Source Title">{personaje.quote}</cite>
            </figcaption>
          </figure>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Frase;
