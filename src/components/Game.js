import React, { Component } from 'react';
import Board from './Board'

export default class Game extends Component {
     constructor(props){
         super(props);
         this.state ={
             squares: Array(9).fill(null),
             xIsNext: true,
         }
     }

     handleClick(i){
         const squares = this.state.squares.slice();
         squares[i] = this.state.xIsNext ?'X':'O';
         this.setState({
             squares:squares,
             xIsNext: !this.state.xIsNext
             
         });
     }

     render(){
            

         return(
             <div className="game">
                 <div className="game-board">
                    <Board onClick = {(i) => this.handleClick(i)} />
                 </div>


             </div>
         )
     }
}