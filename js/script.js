// Copyright (c) 2024 Fetuha All rights reserved
//
// Created by: Fetuha
// Created on: Mar 2024
// This file contains the JS functions for index.html
"use strict"

function findDiscountClicked() {
  const userAge = parseInt(document.getElementById("age-entered").value)

  const currentDate = (document.getElementById("day-entered").value)

  if (((userAge > 12) && (userAge < 21)) || ((currentDate == "Tuesday") || (currentDate == "Thursday"))) {
    document.getElementById("answer").innerHTML = "You are eligible for the discount"
  } else {
    document.getElementById("answer").innerHTML = "You are Not eligible for the discount"
  }

  // Ouput the answer to the user in the class "answer"
}
