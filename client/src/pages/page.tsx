import Layout from '../layout/base'
import { Box, Text, Code, VStack } from '@chakra-ui/react'

export default function page() {


    return <>
        <Layout>
            <Box>
                <Text fontSize="lg" fontWeight="medium">Challenge 2</Text>
                <VStack marginTop="5" gap="5" alignItems='stretch'>
                    <Code >
                        Given an array a[] of size N which contains elements from 0 to N-1, you need to find all
                        the elements occurring more than once in the given array.
                        Example :
                        Input:
                        N = 5
                        a[] =  2, 3, 1, 2, 3
                        Output: 2 3
                        Explanation: 2 and 3 occur more than once in the given array.
                    </Code>

                    <Text whiteSpace="pre-wrap" padding="1rem" backgroundColor="#FFF">
                        {
                            `
function findDuplicates(arr) {
    const frequencyMap = {};
    const duplicates = [];

    for (let i = 0; i < arr.length; i++) {
        if (frequencyMap[arr[i]]) {
            frequencyMap[arr[i]] += 1;
        } else {
            frequencyMap[arr[i]] = 1;
        }
    }

    for (const key in frequencyMap) {
        if (frequencyMap[key] > 1) {
            duplicates.push(parseInt(key));
        }
    }

    return duplicates;
}

// Example usage
const a = [2, 3, 1, 2, 3];
const duplicates = findDuplicates(a);
console.log(duplicates); // Output: [2, 3]
                            
                            `
                        }
                    </Text>
                </VStack>
            </Box>
        </Layout>
    </>
}