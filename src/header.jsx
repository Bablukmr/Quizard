import { Button } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save';
import React from 'react'

function Header() {
  return (
    <div>
        <div className='flex justify-between px-5 py-2'>
            <div>
                <h1 className='text-gray-600 text-2xl font-bold'>Quizard</h1>
            </div>
            <div>
            <Button variant="contained"><SaveIcon/> Contained</Button>
            </div>
        </div>
    </div>
  )
}

export default Header