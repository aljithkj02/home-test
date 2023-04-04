import { Box, Spinner } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
    return (
        <Box bgColor="rgba(0, 0, 0, 0.5)" position="fixed" top="0" left="0" w="full" h="100vh"
            display="flex" justifyContent="center" alignItems="center" zIndex={10}
        >
            <Spinner
                thickness='5px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
        </Box>
    )
}

export default Loader
