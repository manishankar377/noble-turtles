
import { Component } from "react";
import Cell from './Cell';
import './GameBoard.css';

export interface RowProps {
    rowArr : any,
    rowIndex : any,
    handlePieceClick : any,
}

interface RowState {
   
}

export default class Row extends Component<RowProps,RowState> {

    constructor(props:RowProps) {
        super(props);
    }
	public render(): JSX.Element {
		return (
			<div className="row">
				{
					this.props.rowArr.map((cell:number, index:number) => {
						return (
							<Cell rowIndex={this.props.rowIndex} index={index} cell={cell} handlePieceClick={this.props.handlePieceClick} />
						)
					})
				}
			</div>
		)
	}
}