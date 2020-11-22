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
   // 1) Get Default State
    constructor(props){
        super(props)

  // 2) Set Deafult State
        this.state={
            title: "React App"
        }
        console.log("Inside constructor");
    }

 //  3) Before get created
      UNSAFE_componentWillMount(){
          console.log("Inside component will mount");
      }

  // 4) render
    render(){
        console.log("Inside render");
       return(
           <div>
             <h1>{this.state.title}</h1>
           </div>
       )
    }

  //  5) After Get created
    componentDidMount(){
        console.log("Inside component will mount");
    }
}

export default LifeCycle;
