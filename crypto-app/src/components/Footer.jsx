import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} color={"whiteAlpha.700"}
    
    // mt={"-6"}
    minH={"48"}
    px={"16"}
    py={["16","8"]}
    >
        <Stack 
        direction={["column", "row"]}
        h={"full"}
        alignItems={"center"}>


        <VStack w={"full"} alignItems={["center",'flex-start']}>
            <Text fontSize={"bold"}>About Us</Text>
            <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center","left"]}>We are the best crypto information app in India, we provide 
                 correct information without extra chareges. </Text>
        </VStack>
        <VStack>
            <Avatar src={""} boxSize={"28"} mt={["4","0"]} />
            <Text>Our Founder </Text>
        </VStack>
        </Stack>

    </Box>
  )
}

export default Footer