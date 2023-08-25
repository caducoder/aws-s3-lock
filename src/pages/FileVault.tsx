
import React from 'react'
import Navbar from '../components/Navbar'
import { Dropzone } from '../components/Dropzone'
import { FileList } from '../components/FileList';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';

export const FileVault = () => {
  return (
    <>
      <Navbar />
      <main>
        <Container maxWidth="lg">
          <Dropzone />
          <Divider variant='fullWidth' />
          <FileList />
        </Container>
      </main>
    </>
  )
}
