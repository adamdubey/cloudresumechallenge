"use strict";

axios.post("https://k1ywrf8h8e.execute-api.us-east-1.amazonaws.com/Prod/visit")
    .then(function (response) {
    document.getElementById("visits").innerHTML = response.data;
    })
    .catch(function (error) {
    console.log(error);
    });
