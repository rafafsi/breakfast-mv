import React, { useContext, useState } from 'react'
import useError from '../hooks/useError';


import { TextField, Button } from '@material-ui/core'
import FormValidation from '../context/FormValidation';

function Form({whenSend}) {

    const [collaborator, setCollaborator] = useState("");
    const [cpf, setCpf] = useState("")
    const [plate, setPlate] = useState("")
    const validation = useContext(FormValidation)
    const [error, toValidFields, canISend ] = useError(validation)
 
    return(
        <form onSubmit={(e) => {
            e.preventDefault()
            whenSend({collaborator, cpf, plate})
        }
    }>
            <TextField
                value={collaborator}
                onChange={(e) => {
                    setCollaborator(e.target.value)
                }}
                name="collaborator"
                id="collaborator"
                label="name"
                variant="outlined"
                fullWidth
                margin="normal">
            </TextField>

            <TextField
                value={cpf}
                onChange={(e) => {
                    setCpf(e.target.value)
                }}

                //onBlur={toValidFields}
                name="cpf"
                error={!error.cpf.valid}
                helperText={error.cpf.text}
                id="cpf"
                label="CPF"
                variant="outlined"
                fullWidth
                margin="normal"
            />

            <TextField
                onChange={(e) => {
                    setPlate(e.target.value)
                }}
                value={plate}
                name="plate"
                id="plate"
                label="their contribution"
                variant="outlined"
                fullWidth
                margin="normal">
            </TextField>

            
            <Button
                type="submit"
                variant="contained"
                color="primary">
                Send
            </Button>
        </form>
    )
}

export default Form