import { Container, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import IndividualRow from '../Components/IndividualRow';
import { getData } from '../api/data.API';
import { HomeData } from '../types';

interface ISubmissionData extends HomeData {
    _id: string;
}

const Submissions = () => {
    const [data, setData] = useState<ISubmissionData[]>([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const result = await getData();
        if (result.status) {
            setData(result.data);
        }
    }

    return (
        <Container maxW="95%" py={5}>
            <TableContainer boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" p={5} borderRadius="lg">
                <Table variant='striped' colorScheme='teal'>
                    <TableCaption>All datas!</TableCaption>
                    <Thead>
                        <Tr>
                            <Th textAlign="center">Name</Th>
                            <Th textAlign="center">Email</Th>
                            <Th textAlign="center">Destination</Th>
                            <Th textAlign="center" isNumeric>No of Travellers</Th>
                            <Th textAlign="center" isNumeric>Budget (per person)</Th>
                            <Th textAlign="center" isNumeric>Total Budget</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data.map((item) => {
                            return <IndividualRow {...item} key={item?._id} />
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default Submissions
