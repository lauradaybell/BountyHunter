import React, {Component} from 'react'


class Bounty extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bounty: this.props.bounty,
            living: this.props.living
        }
        
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    toggle = (e) => {
        e.preventDefault()
        const updates = {
            living: !this.state.living
        }
        this.props.handleEditSubmit(this.props._id, updates)
        this.setState({
            living: !this.state.living
        })
        
    }

    handleEdit = e => {
        e.preventDefault()

        const updates = {
            living: this.state.living,
            bounty: this.state.bounty
        }

        this.props.handleEditSubmit(this.props._id, updates)
       
    }

    render() {
        return (
            <div className={this.state.living ? 'single' : 'deadBox'} style={{border: '1px solid black', margin: 10, padding: 10}}>
                <h3>{this.props.firstName} {this.props.lastName}, the fugitive {this.props.type}, is wanted for CRIMES AGAINST SOMEONE!!!</h3>
                <h5>Information resulting the capture or death of this fugitive will be rewarded with ${this.state.bounty} </h5>
                <form onSubmit={this.handleEdit}>
                    <span className={this.state.living ? 'checkbox' : 'dead'}>Check if life has ended</span>
                    <input 
                        className={this.state.living ? 'checkbox' : 'dead'}
                        type="checkbox" 
                        name="living" 
                        value={this.state.living}
                        onChange={this.toggle}
                    />
                    <input 
                        className={this.state.living ? 'bountyAmt' : null}
                        type="number" 
                        name='bounty' 
                        value={this.state.bounty} 
                        placeholder='Bounty Amount' 
                        onChange={this.handleChange} 
                    />
                    <button className='changeExistingBtn'>Submit Changes</button>
                </form>
                <button onClick={() => this.props.handleDelete(this.props._id)}>DELETE</button>
            </div>
        )
    }
}



export default Bounty