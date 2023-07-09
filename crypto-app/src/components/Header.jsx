import { Button, HStack } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';
import { Image } from '@chakra-ui/react';
import img from "../assets/bitcoin.png"

const Header = () => {
  return (
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
      
      <Link to="/"><Image w={"10vw"} h={"6.8vh"} objectFit={"contain"} src={img}/></Link>
        <Button variant={"unstyled"} color={"white"}>
            <Link to="/">Home</Link>
        </Button>
        <Button variant={"unstyled"} color={"white"}>
            <Link to="/coins">Coins</Link>
        </Button>
        <Button variant={"unstyled"} color={"white"}>
            <Link to="/exchange">Exchange</Link>
        </Button>

    </HStack>
  )
}

export default Header;