import React from 'react'

import { Container, Typography } from '@material-ui/core'
import './App.css';
import Breakfast from './components/Breakfast';

import toValidCPFdigits from './models/Registration';
import FormValidation from './context/FormValidation';

function App() {
  return (
    <Container 
        component='article' 
        maxWidth='sm'>
          <Typography
                variant='h3'
                align='center'
                component='h1'>
            Breakfast MV
          </Typography>
          
          <FormValidation.Provider value={{cpf: toValidCPFdigits}}>
            <Breakfast whenSend={whenSending} />
          </FormValidation.Provider>
    </Container>
  );
}

function whenSending(data) {
  console.log(data)
}

export default App;
