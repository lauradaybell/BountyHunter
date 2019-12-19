import React from 'react'
import Bounty from './Bounty'

const BountyList = props => {

    const mappedBounties = props.bounties.map(((bounty) => <Bounty {...bounty} key ={bounty._id}  handleDelete={props.handleDelete} handleChange={props.handleChange} handleEditSubmit={props.handleEditSubmit} />))

    return (
        <div className='container'>
            {mappedBounties}
        </div>
    )
}

export default BountyList