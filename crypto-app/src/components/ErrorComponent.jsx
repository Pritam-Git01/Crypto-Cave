import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

function ErrorComponent({message}) {
  return (
   
        <Alert 
        position={"fixed"}
        bottom={"4"}
        left={"50%"}
        transform={"translate(-50%)"}
        w={"container.lg"}

        >
            <AlertIcon 

            />
            {message}
        </Alert>

    
  )
}

export default ErrorComponent