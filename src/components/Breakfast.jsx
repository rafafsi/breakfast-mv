import { AppBar, Tab, Tabs, Box, Typography } from '@material-ui/core'
import React, { useState } from 'react'

import Form from './Form'
import List from './List'

function Breakfast({ whenSend, validation }) {
    
    const [ currentStep, setCurrentStep ] = useState(0)
    const [ dataCollected, setData ] = useState({})
    const [ value, setValue] = useState(0)


    function collectData(data) { 
        setData(dataCollected)
    }
    

    function handleChange(_event, newValue) {
        setValue(newValue)
    }

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box p={3} >
                <Typography>{children}</Typography>
              </Box>    
            )}
          </div>
        );  
      }

    return <>
        <AppBar position='static' >
            <Tabs value={currentStep} onChange={handleChange}>
                <Tab label='Form'></Tab>
                <Tab label='List'></Tab>
            </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
            <Form  validation={validation}/> 
        </TabPanel>
        <TabPanel value={value} index={1}>
            <List /> 
        </TabPanel>
    </>
}

export default Breakfast