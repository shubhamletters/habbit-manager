import React from "react";
// importing the useDispatch hook so that the reducer can be dispatched with data to change the state
import { useDispatch } from "react-redux";
// importing the deleteHabit and updateStatus reducers [function] from habitSlice
import { deleteHabit, updateStatus } from "../features/habitFeatures";

function ViewCard(props) {
	// We are getting habitName, habitDiscription, habitStatus, habitId as props from parent component i.e HabitContainer

	// using useDispatch hoot for dispatching data form the UI to redux store so that state can be updated accordingly
	// data which is begin send is known as payload and redux store can access the data
	const dispatch = useDispatch();

	// This function is executed when any of the dates status has to be changed i.e none,done,fail
	const updateCompleteStatus = (e) => {
		// console.log(e.target.getAttribute("data-date"));
		// constructing the data object for updating the status of the date selected
		const data = {
			date: e.target.getAttribute("data-date"),
			id: props.habitId,
		};

		// dispatching the data to redux store ; data is passed as an argument to updateStatus reducer [function]
		dispatch(updateStatus(data));
	};

	return (
        <div class="card">
        
        <div class="c1">
            <div class="card-body">
                <h2 class="card-title">{props.habitName}</h2>
                <p class="card-text">{props.habitDiscription}</p>
                <br/>
            </div>
            <ul>
                <div class="tb">
                    <div>
                        <table>
                            <tr>
                                <th>date:</th>
                                <th>status:</th>
                            </tr>
                            <tr>
                                <td style={{backgroundColor:"aquamarine"}}>{props.habitStatus[6].date}</td>
                                <td onClick={updateCompleteStatus} data-date={props.habitStatus[6].date} style={{backgroundColor:"aquamarine"}}>
								{/* displaying the none, done or fail icon accoring to the state */}
								{props.habitStatus[6].status === "none" ? <i className="fa-solid fa-check"></i> : props.habitStatus[6].status === "done" ? <i className="fa-solid fa-circle-check done"></i> : <i className="fa-solid fa-circle-xmark fail"></i>}
							</td>
                            </tr>
                            <tr>
                                <td>{props.habitStatus[5].date}</td>
                                <td onClick={updateCompleteStatus} data-date={props.habitStatus[5].date}>
								{props.habitStatus[5].status === "none" ? <i className="fa-solid fa-check"></i> : props.habitStatus[5].status === "done" ? <i className="fa-solid fa-circle-check done"></i> : <i className="fa-solid fa-circle-xmark fail"></i>}
							</td>
                            </tr>
                            <tr>
                                <td>{props.habitStatus[4].date}</td>
                                <td onClick={updateCompleteStatus} data-date={props.habitStatus[4].date}>
								{props.habitStatus[4].status === "none" ? <i className="fa-solid fa-check"></i> : props.habitStatus[4].status === "done" ? <i className="fa-solid fa-circle-check done"></i> : <i className="fa-solid fa-circle-xmark fail"></i>}
							</td>
                            </tr>
                            <tr>
                                <td>{props.habitStatus[3].date}</td>
                                <td onClick={updateCompleteStatus} data-date={props.habitStatus[3].date}>
								{props.habitStatus[3].status === "none" ? <i className="fa-solid fa-check"></i> : props.habitStatus[3].status === "done" ? <i className="fa-solid fa-circle-check done"></i> : <i className="fa-solid fa-circle-xmark fail"></i>}
							</td>
                            </tr>
                            <tr>
                                <td>{props.habitStatus[2].date}</td>
                                <td onClick={updateCompleteStatus} data-date={props.habitStatus[2].date}>
								{props.habitStatus[2].status === "none" ? <i className="fa-solid fa-check"></i> : props.habitStatus[2].status === "done" ? <i className="fa-solid fa-circle-check done"></i> : <i className="fa-solid fa-circle-xmark fail"></i>}
							</td>
                            </tr>
                            <tr>
                                <td>{props.habitStatus[1].date}</td>
                                <td onClick={updateCompleteStatus} data-date={props.habitStatus[1].date}>
								{props.habitStatus[1].status === "none" ? <i className="fa-solid fa-check"></i> : props.habitStatus[1].status === "done" ? <i className="fa-solid fa-circle-check done"></i> : <i className="fa-solid fa-circle-xmark fail"></i>}
							</td>
                            </tr>
                            <tr>
                                <td>{props.habitStatus[0].date}</td>
                                <td onClick={updateCompleteStatus} data-date={props.habitStatus[0].date} >
								{props.habitStatus[0].status === "none" ? <i className="fa-solid fa-check"></i> : props.habitStatus[0].status === "done" ? <i className="fa-solid fa-circle-check done"></i> : <i className="fa-solid fa-circle-xmark fail"></i>}
							</td>
                            </tr>
                        </table>
                        <br/>
                        <center>
                            <button id="one"  onClick={() => dispatch(deleteHabit(props.habitId))}>Delete</button>
                        </center>
                    </div>
                </div>
            </ul>
        </div>
       
    </div>
	);
}

export default ViewCard;

