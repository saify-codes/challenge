import { Text, Box, VStack, Input, FormControl, FormHelperText, FormErrorMessage, Button } from '@chakra-ui/react'
import Layout from '../layout/base'
import { FormEvent, useRef } from 'react'
import axios from '../api/axios';

export default function home() {

  const file = useRef<HTMLInputElement>(null);

  const uploadExcelFile = async (event: FormEvent) => {
    event.preventDefault()
    const files = file.current?.files;
    const headers = { headers: { 'Content-Type': 'multipart/form-data', } }
    if (files) {
      try {
        const response = await axios.post('upload', { spreadsheet: files[0] }, headers)
        alert(response.data.msg)
      } catch (error: any) {
        alert(error.response.statusText);
      }

    } else {
      alert("No file selected.")
    }
  }

  return <>
    <Layout>
      <Box>
        <Text fontSize="lg" fontWeight="medium">Upload excel file</Text>
        <Box marginTop="5">
          <form onSubmit={uploadExcelFile} encType='multipart/form-data'>
            <VStack align='start' gap='4'>
              <FormControl>
                <Input type='file' name='spreadsheet' required ref={file} />
                <FormHelperText>Upload xls or csv files.</FormHelperText>
                <FormErrorMessage>invalid file type</FormErrorMessage>
              </FormControl>
              <Button colorScheme='teal' type='submit'>Upload</Button>
            </VStack>
          </form>
        </Box>
      </Box>
    </Layout>
  </>
}