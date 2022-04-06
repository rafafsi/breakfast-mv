import React from 'react'
import reactInputMask from 'react-input-mask'

function maskedCPF() {
    return <reactInputMask mask='999.999.999-99'/>
}

export default maskedCPF