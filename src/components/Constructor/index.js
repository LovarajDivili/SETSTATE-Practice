import { Component } from 'react';



class Constructor extends Component {
  constructor() {
    super();

    this.state = {
      name : "Lovaraju",
      surname : 'Divili',
      age : "23"
    }
  }


  render() {

    const onChangeName = () =>  {
        this.setState({name: "Shiva", age: "22", surname: "Boora"})

        console.log(this.state)
    }

    return (
      <>
      <h1> my name is :  {this.state.name} </h1>
      <p> my surname is : {this.state.surname}</p>
      <h4>my age is : : {this.state.age}</h4>
      <button onClick={onChangeName}>Change Name</button>
      </>
    )
  }
}



export default Constructor;
