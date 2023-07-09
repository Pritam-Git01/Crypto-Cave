import React, { useEffect, useState } from 'react';
import axios from "axios";
import { server } from '../index';
import Loader from './Loader';
import { Button, Container, HStack, Radio, RadioGroup } from '@chakra-ui/react';
import ErrorComponent from './ErrorComponent';
import CoinsCard from './CoinsCard';

const Coins = () => {

    const[coins,setCoins] = useState([]);
    const[loading,setLoading] = useState(true);
    const[error,setError] = useState(false);
    const[page,setPage] = useState(1);
    const[currency,setCurrency] = useState("inr");

    const currencySymbol = (
        currency === "inr"? "₹": currency==="eur"?"€":"$"
    )


    const pageChange = (page) => {
        setPage(page)
        setLoading(true)
    }
    
    useEffect(() => {
        const fetchCoins = async  () => {
            try {

            
            const {data} = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)
           setCoins(data);
           setLoading(false)
           console.log(data)
            } catch (error) {
                setError(true)
                setLoading(false)

            }

        };

        fetchCoins();
    },[currency,page])


    const btns = new Array(132).fill(1)
    
     if(error) {

     
    return <ErrorComponent message={"Error While Fetching Data"}/> 
     }
  return (
    <Container maxW={"container.xl"}>
        {loading ? <Loader/> : (
            <>

            <RadioGroup value={currency} onChange={setCurrency}>
                <HStack m={"4"} spacing={"4"}>
                <Radio value={"inr"}>INR</Radio>
                <Radio value={'eur'}>EUR</Radio>
                <Radio value={"usd"}>USD</Radio>
                </HStack>
            </RadioGroup>


            <HStack flexWrap={"wrap"} justifyContent={"space-evenly"}>
                {
                    coins.map((i) => (

                        <CoinsCard 
                        id={i.id}
                        key={i.id}
                        name={i.name}
                        img={i.image}
                        symbol={i.symbol}
                        price={i.current_price }
                        currencySymbol={currencySymbol}

                        />

                    ))
                }
               
            </HStack>

            <HStack p={"8"} w={"full"} overflowX={"auto"}>
                {
                    btns.map((item,index) => (

                        <Button 
                        bgColor={"blackAlpha.900"}
                        color={"white"}
                        key={index} 
                        onClick={() => pageChange(index+1)}>
                            {index+1}

                        </Button>
                        
                    ))
                }
            </HStack>
            
            

            </>
        )}


        </Container>
  )
}


 





export default Coins;