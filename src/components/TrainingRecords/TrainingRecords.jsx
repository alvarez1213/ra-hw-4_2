import React, { Component } from "react";

import "./training-records.css";

import { TrainingRecordsForm } from "../TrainingRecordsForm";
import { TrainingRecordsTable } from "../TrainingRecordsTable";

export class TrainingRecords extends Component {
  constructor() {
    super()

    this.state = {
      data: []
    }
    this.listOfData = []
    this.handleFormData = this.handleFormData.bind(this)
  }

  handleDelete = (e) => {
    const date = e.target.previousElementSibling.previousElementSibling.textContent
    this.listOfData = this.listOfData.filter((el) => {
      return el.dateToShow !== date
    })
    this.setState({
      data: this.listOfData
    })
  }

  compareDates = (a, b) => {
    const aDate = new Date(a.dateToSort);
    const bDate = new Date(b.dateToSort);
    
    if (aDate > bDate) return -1;
    if (bDate > aDate) return 1;
    return 0;
  }

  handleFormData = (data) => {
    for (let i = 0; i < this.listOfData.length; i++) {
      if (this.listOfData[i].dateToShow === data.dateToShow) {
        this.listOfData[i].distance += data.distance
        this.setState({
          data: this.listOfData
        })
        return
      }
    }
    this.listOfData.push(data)

    this.listOfData.sort(this.compareDates)

    this.setState({
      data: this.listOfData
    })
  }

  render() {
    return (
      <div>
        <TrainingRecordsForm
          handleFormData={this.handleFormData}
        />
        <TrainingRecordsTable
          data={this.state.data}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
