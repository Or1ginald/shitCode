import React, {FC, memo} from 'react'
import {Button} from "@mui/material";

export const MyButton:FC<any> = memo((props)=>{
    console.log("rerender button");
    return (
        <Button {...props}>Toggle</Button>
    )
  }
  )
