import { log } from 'console'
import React from 'react'

export default function page() {

    const helloReturn = (text:string):void=>{
        console.log(text);
        
    }
    helloReturn("Hello World")

  return (
    <div>
        <h1>Hello</h1>
    </div>
  )
}
