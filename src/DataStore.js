import { observable, action } from "mobx";

import axios from "axios";
import cheerio from "cheerio";

class DataStore {
  //Departure data

  @observable fromCity = "";
  @observable fromAirport = "";
  @observable departureTime = "";
  @observable departureTimeSuffix = "";

  //Arrival data
  @observable toCity = "";
  @observable toAirport = "";
  @observable arrivalTime = "";
  @observable arrivalTimeSuffix = "";

  @action getData = () => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://www.flightstats.com/v2/flight-tracker/SQ/11"
      )
      .then(response => {
        // console.log(response.data);
        let $ = cheerio.load(response.data);

        //From City
        // console.log(
        //   $("div.text-helper__TextHelper-s8bko4a-0.blQyiG", "html")[0]
        //     .children[0].data
        // );
        this.fromCity = $(
          "div.text-helper__TextHelper-s8bko4a-0.blQyiG",
          "html"
        )[0].children[0].data;
        //From Airport
        // console.log(
        //   $("div.text-helper__TextHelper-s8bko4a-0.CPamx", "html")[0]
        //     .children[0].data
        // );
        this.fromAirport = $(
          "div.text-helper__TextHelper-s8bko4a-0.CPamx",
          "html"
        )[0].children[0].data;
        //Scheduled Time
        // console.log(
        //   $("div.text-helper__TextHelper-s8bko4a-0.cCfBRT", "html")[0]
        //     .children[0].data
        // );
        this.departureTime = $(
          "div.text-helper__TextHelper-s8bko4a-0.cCfBRT",
          "html"
        )[0].children[0].data;
        //Scheduled Time Suffix
        // console.log(
        //   $("div.text-helper__TextHelper-s8bko4a-0.cCfBRT", "html")[0]
        //     .children[1].children[0].data
        // );
        this.departureTimeSuffix = $(
          "div.text-helper__TextHelper-s8bko4a-0.cCfBRT",
          "html"
        )[0].children[1].children[0].data;
        //To City
        // console.log(
        //   $("div.text-helper__TextHelper-s8bko4a-0.blQyiG", "html")[1]
        //     .children[0].data
        // );
        this.toCity = $(
          "div.text-helper__TextHelper-s8bko4a-0.blQyiG",
          "html"
        )[1].children[0].data;
        //To Airport
        // console.log(
        //   $("div.text-helper__TextHelper-s8bko4a-0.CPamx", "html")[1]
        //     .children[0].data
        // );
        this.toAirport = $(
          "div.text-helper__TextHelper-s8bko4a-0.CPamx",
          "html"
        )[1].children[0].data;
        //Departure Time
        // console.log(
        //   $("div.text-helper__TextHelper-s8bko4a-0.cCfBRT", "html")[4]
        //     .children[0].data
        // );
        this.departureTime = $(
          "div.text-helper__TextHelper-s8bko4a-0.cCfBRT",
          "html"
        )[4].children[0].data;
        //Departure Suffix
        // console.log(
        //   $("div.text-helper__TextHelper-s8bko4a-0.cCfBRT", "html")[4]
        //     .children[1].children[0].data
        // );
        this.departureTimeSuffix = $(
          "div.text-helper__TextHelper-s8bko4a-0.cCfBRT",
          "html"
        )[4].children[1].children[0].data;
      })
      .catch(error => {
        console.log("Flight Not Found");
      });
  };
}

const store = new DataStore();

export default store;
