import React from 'react'
import { Amplify } from 'aws-amplify'
import { Authenticator } from '@aws-amplify/ui-react'
import { FileVault } from './pages/FileVault'
import '@aws-amplify/ui-react/styles.css'

import awsExports from './aws-exports'
Amplify.configure(awsExports)

export const App = () => {
  return (
    <Authenticator hideSignUp>
      {({ signOut, user }) => {
        console.log(user)
        return (
          <FileVault signOut={signOut} />
        )
      }}
    </Authenticator>
  )
}
