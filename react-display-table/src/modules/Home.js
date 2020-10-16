import React, { Component } from 'react';
import axios from 'axios';
import Table from './Table'

class home extends Component {
    
    constructor(){
        
    super()
        this.state={
            data:[]
        }
    }


    componentWillMount() {
        axios.get(`https://jsonplaceholder.typicode.com/photos`)
        .then(res => {
          const data = res.data;
          this.setState({ data });
        });

    }
    

    render() {
        return (
            <div>
              <Table tabledata={this.state.data} />
            </div>
        )
    }
}

export default home
