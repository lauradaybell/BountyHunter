import React, {Component} from 'react'
import axios from 'axios'
import BountyForm from './BountyForm'
import BountyList from './BountyList'


class Main extends Component {

    constructor() {
        super()
        this.state = {
            bounties: [],
            firstName: '',
            lastName: '',
            bounty: 0,
            living: true,
            type: '',
        }
    }

    componentDidMount() {
        this.getStuff()
    }

    getStuff = () => {
        axios.get("/bounty")
            .then(res => {
                this.setState({
                    bounties:res.data
                })
            })
            .catch(err => console.log(err))
    }
    

    handleChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]:value
        })
    }

    handleDelete = id => {
        axios.delete('/bounty/' + id)
            .then(response => {
                console.log(response.data.msg)
                this.getStuff()
            })
            .catch(err => console.log(err))
    }

    handleSubmit = e => {
        e.preventDefault()
        e.target.reset()
        const newBounty = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            bounty: this.state.bounty,
            isAlive: this.state.isAlive,
            type: this.state.type,
        }

        axios.post('/bounty', newBounty)
            .then(res => {
                console.log('Welcome to my lab')
                this.getStuff()
            })
            .catch(err => console.log(err))

        this.setState(prevState => ({
            bounties:[...prevState.bounties, newBounty],
            firstName: '',
            lastName: '',
            bounty: 0,
            isAlive: true,
            type: ''
        }))
    }

   

    handleEditSubmit = (myId, myUpdates) => {
        axios.put('/bounty/' + myId, myUpdates)
            .then(res => {
                this.getStuff()
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <BountyForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit} />
                <div className='divider'>These CRIMINALS are WANTED</div>
                <BountyList bounties={this.state.bounties}
                    handleDelete={this.handleDelete}
                    handleEditSubmit={this.handleEditSubmit}
                    handleChange={this.handleChange} />
            </div>
        )
    }
}


export default Main