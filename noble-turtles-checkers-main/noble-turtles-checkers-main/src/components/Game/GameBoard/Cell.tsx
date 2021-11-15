import { Component } from "react";

interface CellProps {
    handlePieceClick : any,
    rowIndex : number,
    index : number,
    cell : number
}

interface CellState {
   
}

export default class Cell extends Component<CellProps,CellState> {

    constructor(props:CellProps) {
        super(props);
    }
	public render(): JSX.Element {
		return(
			<div  className={'cell cell-'+this.props.cell} >
				<div onClick={this.props.handlePieceClick} data-row={this.props.rowIndex} data-col={this.props.index} className="gamePiece"></div>
			</div>
		)
	}
}