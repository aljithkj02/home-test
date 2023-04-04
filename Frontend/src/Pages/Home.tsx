import {
    Box, Container, FormControl, FormHelperText, FormLabel, Input,
    Select, Stack, VStack, useToast
} from '@chakra-ui/react';

import React, { useState } from 'react';

import Loader from '../Components/Loader';
import { postData } from '../api/data.API';
import { HomeData, ReturnedObj } from '../types';


const Home = () => {
    const [data, setData] = useState<HomeData>({
        name: '',
        email: '',
        place: '',
        no_of_travellers: 0,
        budget: 0
    })
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const toast = useToast()

    const handleData = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const submitData = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (data.no_of_travellers === 0) {
            toast({
                title: "Please add number of travellers!",
                status: 'warning',
                position: 'top',
                isClosable: true,
            })
            return;
        }
        if (data.budget === 0) {
            toast({
                title: "Please add budget!",
                status: 'warning',
                position: 'top',
                isClosable: true,
            })
            return;
        }
        setIsLoading(true);
        postData(data).then((res) => {
            if (res?.status) {
                toast({
                    title: res.message,
                    status: 'success',
                    position: 'top',
                    isClosable: true,
                })

                setData({
                    name: '',
                    email: '',
                    place: '',
                    no_of_travellers: 0,
                    budget: 0
                })
            } else {
                toast({
                    title: res.message,
                    status: 'error',
                    position: 'top',
                    isClosable: true,
                })
            }
            setIsLoading(false);
        })
    }
    return (
        <Container maxW="95%">
            {isLoading && <Loader />}
            <Box w="40%" margin="2rem auto" boxShadow="0 0 10px black" borderRadius="lg" p={6}>
                <form onSubmit={submitData}>
                    <VStack gap={3}>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input type='text' placeholder='Name' required={true} onChange={handleData}
                                name="name" value={data.name}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input type='email' placeholder='Email' required={true} onChange={handleData}
                                name="email" value={data.email}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Where do you want to go?</FormLabel>
                            <Stack spacing={3}>
                                <Select variant='filled' placeholder='Choose...' required={true}
                                    onChange={handleData}
                                    name="place" value={data.place}
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
                                name="no_of_travellers" value={data.no_of_travellers}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Budget per person ( $ )</FormLabel>
                            <Input type='number' placeholder='Budget per person' required={true} onChange={handleData}
                                name="budget" value={data.budget}
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
