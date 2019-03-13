import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [
        {title: 'todo1', description: 'description for todo1'},
        {title: 'todo2', description: 'description for todo2'}
      ],
      doing: [],
      done: []
    };
  }

  moveItem(index) {
    this.setState((state) => {
      return {
        todo: state.todo.filter(item => item.title !== state.todo[index].title),
        doing: [...state.doing, state.todo[index]]
      };
    });
    console.log(this.state);
  }

  render() {
    return (
      <div className="App" style={{margin: 100}}>
       <Grid container spacing={24}>
        <Grid item xs={4}>
          <Paper>
            <h1>ToDo</h1>
            <ul>
              {this.state.todo.map((i, index) => <li><a href="#">{i.title}</a><button onClick={()=>this.moveItem(index)} /></li>)}
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>xs=6</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>xs=6</Paper>
        </Grid>
      </Grid>
  
      </div>
    );
  }
}

export default App;
