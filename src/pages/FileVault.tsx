
import React from 'react'
import Navbar from '../components/Navbar'
import { Dropzone } from '../components/Dropzone'
import { FileList } from '../components/FileList';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import { AuthEventData } from '@aws-amplify/ui';


// usar o Authenticator para verificar se o usuário está logado
export const FileVault = ({ signOut }: { signOut: ((data?: AuthEventData | undefined) => void) | undefined }) => {
  return (
    <>
      <Navbar signOut={signOut} />
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
