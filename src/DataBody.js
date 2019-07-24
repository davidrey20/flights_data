import React from "react";
import { inject, observer } from "mobx-react";

@inject("DataStore")
@observer
class DataBody extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          name="airlineCode"
          onChange={event =>
            (this.props.DataStore.airlineCode = event.target.value)
          }
        />
        <input
          type="text"
          name="flightNumber"
          onChange={event =>
            (this.props.DataStore.flightNumber = event.target.value)
          }
        />
        <button onClick={this.props.DataStore.getData}>Press</button>
        <h1>From: {this.props.DataStore.fromCity}</h1>
        <h1>Airport: {this.props.DataStore.fromAirport}</h1>
        <h1>
          Time: {this.props.DataStore.departureTime}{" "}
          {this.props.DataStore.departureTimeSuffix}
        </h1>
        <h1>To: {this.props.DataStore.toCity}</h1>
        <h1>Airport: {this.props.DataStore.toAirport}</h1>
        <h1>
          Time: {this.props.DataStore.arrivalTime}{" "}
          {this.props.DataStore.arrivalTimeSuffix}
        </h1>
      </div>
    );
  }
}

export default DataBody;
