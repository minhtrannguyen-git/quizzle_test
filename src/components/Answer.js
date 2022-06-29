import React from 'react'
import he from 'he'

export default function Answer(props) {
  let style = {};
  if(props.checkResult && props.givenValue === props.value && props.isTrue){
    style ={
      backgroundColor:"green"
    }
  }else if(props.checkResult && props.givenValue === props.value && !props.isTrue){
    style={
      backgroundColor:"red"
    }
  }
  return (
    <div className='answer--container'>
      <input className='answer' disabled={props.checkResult} id={props.id} type="radio" name={props.name} checked={props.value === props.givenValue} onChange={props.handleChange} value={props.givenValue}/>
      <label style={style} className='answer--box' htmlFor={props.id}>{he.decode(props.givenValue)}</label>
    </div>
  )
}
