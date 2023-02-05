import Link from "next/link";
import { Button, Card } from "react-bootstrap";
import {ROUTES} from "../assets/ROUTES"
const MemeCard = ({id, name, imageUrl }: { id: string, name: string; imageUrl: string }) => (
    <Card style={{ width: "18rem" }}>
         <Card.Img variant="top" src={imageUrl} />
        <Card.Body className="text-center d-flex flex-column justify-content-end">
            <Card.Title className="text-dark"> {name}</Card.Title>
            <Link href={ROUTES.MEME + id}><Button variant="primary">Choose This Meme</Button></Link>
        </Card.Body>
    </Card>
);

export default MemeCard;
