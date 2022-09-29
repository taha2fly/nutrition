import './App.css';
import 'antd/dist/antd.css'
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json'
import React from 'react';


class App extends React.Component {
  constructor(props){
    super(props);
    const foodsOrg = [...foods];
    this.state = { foods: [...foodsOrg], };

    this.handleAddFood = this.handleAddFood.bind(this);
  }

  handleAddFood(food){
    
    let foodsTemp = this.state.foods.slice();
    //foodsTemp.push({...food});
    this.setState( {foods: [...foodsTemp, food] });
    //console.info(foodsTemp[foodsTemp.length - 1]);
    console.info(this.state.foods[this.state.foods.length - 1]);
    alert("end of submit")
  }

  render(){
    const listFoods = this.state.foods;

    const listToRender = listFoods.map( 
      (food) => {return (
        <FoodBox key={food.name} food={food} />
      );} );


    return (
      <div className="App">
        <h1> Food List </h1>

        <AddFoodForm onSubmit={this.handleAddFood}/>

        <Row style={{ width: '100%', justifyContent: 'center' }}>
        {listToRender}
        </Row>
        
      </div>
    );
  }
  
}

class FoodBox extends React.Component{
  
  render(){
    return (
      <Col>
        <Card
          title = {this.props.food.name}
          style={{ width: 230, height: 300, margin: 10 }}
        >
          <img src={this.props.food.image} height="60"></img>
          <p>Calories: {this.props.food.calories}</p>
          <p>Servings: {this.props.food.servings}</p>
          <p> <b> Total Calories: {this.props.food.calories * this.props.food.servings} </b> </p>
        </Card>
      </Col>);
  }
}

class AddFoodForm extends React.Component{
  constructor(props){
    super(props);
    this.state = { name:"TRY", image:"HARDER", calories:100, servings:10, };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleCaloriesChange = this.handleCaloriesChange.bind(this);
    this.handleServingsChange = this.handleServingsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleNameChange(event){
    this.setState({...this.state, name: event.target.value,});
  }

  handleImageChange(event){
    this.setState({...this.state, image: event.target.value,});
  }

  handleCaloriesChange(event){
    this.setState({...this.state, calories: event.target.value,});
  }

  handleServingsChange(event){
    this.setState({...this.state, servings: event.target.value,});
  }

  handleSubmit(event){
    const food = {
      name: this.state.name,
      image: this.state.image,
      calories: this.state.calories,
      servings: this.state.servings,
    };
    this.props.onSubmit( food );
    this.setState({name:"After", image:"Submit", calories:10, servings:20});
    console.log(food);
  }

  render(){
    return (
      
        <form onSubmit={this.handleSubmit}>
        <Divider>Add Food Entry</Divider>
          <label>
            Name
            <Input value={this.state.name} type="text" onChange={this.handleNameChange}/>
          </label>
          <label>
            Image
            <Input value={this.state.image} type="text" onChange={this.handleImageChange}/>
          </label>
          <label>
            Calories
            <Input value={this.state.calories} type="number" onChange={this.handleCaloriesChange}/>
          </label>
          <label>
            Servings
            <Input value={this.state.servings} type="number" onChange={this.handleServingsChange}/> 
          </label>
          <input type="submit" value="submit"/>
        </form>
    );
  }

}

// class Search extends React.Component{
//   constructor(props){
//     super(props);

//   }

//   render(){

//     return (
//       <>
//       <Divider>Search</Divider>

//       <label>Search</label>
//       <Input value={undefined} type="text" onChange={() => {}} />
//     </>

//     );
//   }


// }

export default App;
