import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addHabit } from "../features/habitFeatures";
import ViewCard from "./ViewCard";


function HabitCard() {
	const [habit, setHabit] = useState("");
	const [description, setDescription] = useState("");

	const dispatch = useDispatch();

	const addOwnHabit = () => {
		function formatDate(date) {
			var dd = date.getDate();
			var mm = date.getMonth() + 1;
			var yyyy = date.getFullYear().toString().substring(2);
			if (dd < 10) {
				dd = "0" + dd;
			}
			if (mm < 10) {
				mm = "0" + mm;
			}
			date = dd + "/" + mm + "/" + yyyy;
			return date;
		}

		// This function is responsible for returning the array of last 7 day dates
		function weakdays() {
			var today = new Date();
			var oneDayAgo = new Date(today);
			var twoDaysAgo = new Date(today);
			var threeDaysAgo = new Date(today);
			var fourDaysAgo = new Date(today);
			var fiveDaysAgo = new Date(today);
			var sixDaysAgo = new Date(today);

			// setDate is responsible for setting up the appropriate value for last 6 days
			oneDayAgo.setDate(today.getDate() - 1);
			twoDaysAgo.setDate(today.getDate() - 2);
			threeDaysAgo.setDate(today.getDate() - 3);
			fourDaysAgo.setDate(today.getDate() - 4);
			fiveDaysAgo.setDate(today.getDate() - 5);
			sixDaysAgo.setDate(today.getDate() - 6);

			// formatting the date accordingly as we want in our project
			var result0 = formatDate(today);
			var result1 = formatDate(oneDayAgo);
			var result2 = formatDate(twoDaysAgo);
			var result3 = formatDate(threeDaysAgo);
			var result4 = formatDate(fourDaysAgo);
			var result5 = formatDate(fiveDaysAgo);
			var result6 = formatDate(sixDaysAgo);

			// Creating the array of last 7 days and returing it
			var result = [result0, result1, result2, result3, result4, result5, result6];
			return result;
		}

		// Creating the habit object with all the info which is required for creating different functionalities
		let habitToBeAdded = {
			id: Date.now(),
			title: habit,
			description: description,
			dates: [
				{ date: weakdays()[6], status: "none" },
				{ date: weakdays()[5], status: "none" },
				{ date: weakdays()[4], status: "none" },
				{ date: weakdays()[3], status: "none" },
				{ date: weakdays()[2], status: "none" },
				{ date: weakdays()[1], status: "none" },
				{ date: weakdays()[0], status: "none" },
			],
		};
		// Setting up the habit and discription state to empty string so that input box can get empty
		setHabit("");
		setDescription("");

		// dispatching the data [habitToBeAdded] object to addHabit (reducer)
		dispatch(addHabit(habitToBeAdded));
	};

	const data = useSelector((h) => {
		return h.habit.habits;
	});

	return (
		<>
		<div className="main-container">
						<center><h1 id="disc_head">Enter Habbit & it's discription</h1></center>
			<div className="habits-bar-container">
				<section className="habit-adding">
					<div className="input-bar">
						<span className="icon-container">
							<i className="fa-solid fa-repeat"></i>
						</span>
						<input onChange={(e) => setHabit(e.target.value)} value={habit} type="text" placeholder="Enter the name of habit" />
					</div>
					<div className="input-bar">
					
						<span className="icon-container">
							<i className="fa-solid fa-circle-info"></i>
						</span>
						<input onChange={(e) => setDescription(e.target.value)} value={description} type="text" placeholder="Write the discription of the habit...."  />
					</div>
					<center>
					<button onClick={addOwnHabit}>Add Habit</button>
					</center>
				</section>
				</div>
			</div>
			<div id="main-main">
                
				{data.map((habit, index) => {
					return (
						<>
					<ViewCard habitName={habit.title} habitDiscription={habit.description} habitStatus={habit.dates} habitId={habit.id} key={index} />
				
					</>
					);
				})}
				</div>
				</>
	);
}

export default HabitCard;
