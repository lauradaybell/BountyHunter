import React from 'react'


const BountyForm = props => {
    const myForm = document.getElementById('form')
    const myBtn = document.getElementById('btn')

    const toggleForm = () => {
        
        myForm.classList.toggle('hidden')
        myBtn.classList.toggle('textTwo')
        
    }

    return (
        <>
        
        
        <form id = 'form' className= 'mainForm' onSubmit={props.handleSubmit}>
            <div className='name'>
                <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={props.firstName}
                    onChange={props.handleChange} 
                    />
                <input
                    onChange={props.handleChange}
                    type="text"
                    name="lastName"
                    value={props.lastName}
                    placeholder="Last Name" 
                    />
            </div>
            <div>
                <input 
                    className='price'
                    type="number" 
                    name="bounty" 
                    value={props.bounty}
                    placeholder="Bounty Amount"
                    onChange={props.handleChange} 
                    />
            </div>
            <div className='type'>
                <div className='radios'>
                    <label>Sith</label>
                    <input 
                        type="radio" 
                        name="type" 
                        value='Sith'
                        onChange={props.handleChange}
                    />
                </div>
                <div className='radios'>
                    <label>Jedi</label>
                    <input 
                        type="radio" 
                        name="type" 
                        value='Jedi'
                        onChange={props.handleChange} 
                    />
                </div>
            </div>
            <button className='newBaddieSubmit'>Put A Price On Their Head</button>
            
        </form>

        <button className='toggleButton' id= 'btn' onClick={toggleForm}></button>
        </>
    )
}




export default BountyForm