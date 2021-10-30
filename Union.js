import React from 'react'
import Andhrabank from './Andhrabank'
import Corporationbank from './Corporationbank'

export default function Union() {
    let data={
        firstname:"sowji",
        lastname:"mani"
    }
    return (
        <div>
           <Andhrabank info={data}/>
           <Corporationbank info={data}/> 
        </div>
    )
}
