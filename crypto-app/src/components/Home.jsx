import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react';
import img from "../assets/bitcoin.png"
import {motion} from "framer-motion"

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>

<motion.div 
style={{
    height:"80vh",

}} 
animate={{
    translateY: "20px",

}}

transition={{
    duration:"1.5",
    repeat:Infinity,
    repeatType: "reverse"
}}

>
<Image w={"full"} h={"full"} objectFit={"contain"} src={img}/>
</motion.div>
       
        <Text
        fontSize={"4xl"}
        textAlign={"center"}
        fontWeight={"semibold"}
        color={"whiteAlpha.900"}
        mt={"-18"}
        >
            Crypto Cave
        </Text>

    
    </Box>
  )
}

export default Home