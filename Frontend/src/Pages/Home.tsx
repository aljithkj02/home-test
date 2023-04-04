import {
    Box, Container, FormControl, FormHelperText, FormLabel, Input,
    Select, Stack, VStack
} from '@chakra-ui/react'

import React, { useState } from 'react'

const Home = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        place: '',
        no_of_travellers: '',
        budget: 0
    })

    const handleData = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const submitData = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log(data);
    }
    return (
        <Container maxW="95%">
            <Box w="40%" margin="2rem auto" boxShadow="0 0 10px black" borderRadius="lg" p={6}>
                <form onSubmit={submitData}>
                    <VStack gap={3}>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input type='text' placeholder='Name' required={true} onChange={handleData}
                                name="name"
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input type='email' placeholder='Email' required={true} onChange={handleData}
                                name="email"
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Where do you want to go?</FormLabel>
                            <Stack spacing={3}>
                                <Select variant='filled' placeholder='Choose...' required={true}
                                    onChange={handleData}
                                    name="place"
                                >
                                    <option value="India"> India </option>
                                    <option value="Africa"> Africa </option>
                                    <option value="Europe"> Europe </option>
                                </Select>
                            </Stack>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Number of travellers?</FormLabel>
                            <Input type='number' placeholder='No of travellers' required={true} onChange={handleData}
                                name="no_of_travellers"
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Budget per person ( $ )</FormLabel>
                            <Input type='number' placeholder='Budget per person' required={true} onChange={handleData}
                                name="budget"
                            />
                        </FormControl>
                        <FormControl>
                            <Input type='submit' value="Submit" bgColor="blue" color="white"
                                borderRadius="lg"
                            />
                        </FormControl>
                    </VStack>
                </form>
            </Box>
        </Container>
    )
}

export default Home
