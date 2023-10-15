import Layout from '../layout/base'
import axios from '../api/axios';
import {
    Text,
    Box,
    TableContainer,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td
} from '@chakra-ui/react'
import { useState, useEffect } from 'react';

export default function attendance() {

    const [attendance, setAttendance] = useState([])

    const getEmployeesAttendance = async () => {
        const response = await axios.get('attendance');
        setAttendance(response.data)
    }

    useEffect(() => {
        getEmployeesAttendance();
    }, [])
    return <>
        <Layout>
            <Box>
                <Text fontSize="lg" fontWeight="medium">Employee attendance</Text>

                <TableContainer backgroundColor="#FFF" marginTop="5">
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>Employee ID</Th>
                                <Th>Name</Th>
                                <Th>Check-in</Th>
                                <Th>Check-out</Th>
                                <Th isNumeric>Working hrs. total</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {attendance.map((attendance:any, index:number)=> <>
                                <Tr key={index}>
                                    <Td>{attendance.emp_id}</Td>
                                    <Td>{attendance.name}</Td>
                                    <Td>{attendance.check_in}</Td>
                                    <Td>{attendance.check_out}</Td>
                                    <Td isNumeric>{attendance.working_hour}</Td>
                                </Tr>
                            </>)}
                        </Tbody>
                        <Tfoot>
                            <Tr>
                                {attendance.length === 0 && <Th colSpan={5} textAlign="center">No record found</Th>}
                            </Tr>
                        </Tfoot>
                    </Table>
                </TableContainer>
            </Box>
        </Layout>
    </>
}