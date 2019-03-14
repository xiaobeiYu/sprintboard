import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './App.css';
import CheckboxListSecondary from './checkBoxList';

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
  }

  render() {
    return (
      <div className="App" style={{margin: 30}}>
        <Grid container spacing={24}>
          <Grid item xs={4}>
            <Paper>
              <CheckboxListSecondary
                itemList={this.state.todo.map(item => <a href='#'>{item.title}</a>)}
              />
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
