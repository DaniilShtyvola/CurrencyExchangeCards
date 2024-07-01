import { FC, useState, useEffect } from 'react';
import axios from 'axios';
import { CurrencyCardsWrapper, CardsContainer } from './CurrencyCards.styled';
import CurrencyCard from '../CurrencyCard/CurrencyCard'

interface ExchangeRate {
   ccy: string;
   base_ccy: string;
   buy: string;
   sale: string;
}

interface CurrencyCardsProps { }

const CurrencyCards: FC<CurrencyCardsProps> = () => {
   const [exchangeRates, setExchangeRates] = useState<ExchangeRate[]>([]);

   useEffect(() => {
      axios.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
         .then(response => {
            setExchangeRates(response.data);
         })
   }, []);

   return (
      <CurrencyCardsWrapper>
         <CardsContainer>
            {exchangeRates.map(rate => (
               <CurrencyCard
                  key={rate.ccy}
                  ccy={rate.ccy}
                  base_ccy={rate.base_ccy}
                  buy={rate.buy}
                  sale={rate.sale}
               />
            ))}
         </CardsContainer>
      </CurrencyCardsWrapper>
   );
};

export default CurrencyCards;