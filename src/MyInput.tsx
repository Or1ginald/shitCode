import React, {FC, memo} from 'react'
import {TextField} from "@mui/material";


export const MyInput:FC<any> = memo((props)=>{
    console.log("rerender input");
    return (
      <TextField sx={{border: '1px solid red'}} variant={"outlined"} onKeyDown={(event)=>props.onKeyDown(event)} {...props}/>
    )
  }
  )
