import React from 'react'

export default function(props){
    const timeClicker= ()=>{
        if(props.time === 'day'){
            return <button   style={{backgroundColor: 'yellow', justifyContent: 'center'}}>DAY</button>
        }
        else{return <button style={{backgroundColor: 'blue'}}>NIGHT</button>}
    }
    
      
    return(
        <div>
            {timeClicker()}
        </div>
    )
}
    
    
    

    