import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

interface CurrencyCardProps {
   ccy: string;
   base_ccy: string;
   buy: string;
   sale: string;
}

const CurrencyCard: React.FC<CurrencyCardProps> = ({ ccy, base_ccy, buy, sale }) => (
   <Card>
      <Card.Body>
         <Card.Title>{ccy} to {base_ccy}</Card.Title>
         <Card.Text>
            Buy: {buy}
            <br/>
            Sale: {sale}
         </Card.Text>
      </Card.Body>
   </Card>
);

export default CurrencyCard;