// Life Cycle stages
/*
1) Get Default State
2) Set Deafult State
3) Before Get Created
4) Render
5) After Get Created
*/

import React, {Component} from 'react';

class LifeCycle extends Component{
    constructor(props){
        super(props)

        this.state={
            title: "React App"
        }
    }
    render(){

    }
}

export default LifeCycle;