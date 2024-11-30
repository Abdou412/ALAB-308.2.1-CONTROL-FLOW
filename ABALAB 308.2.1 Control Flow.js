// part 1 Growing pains

const total_area_radius = 5; // 5 metters
const total_aera = total_area_radius * total_area_radius * 3.14159; // = 78.5 meters square
const total_possible_plants = total_aera / 0.8;
console.log(
  "this gardin can contains at maximum " + total_possible_plants + " plantes"
);
const plantnumbfirstweek = 20;
console.log("******************************");
// ------------------------------//week 1------------------------

let weeknumber = 1;
let number_of_plants = 2 ** (weeknumber - 1) * 20;
console.log("week " + weeknumber);
if (number_of_plants >= total_possible_plants * 0.8) {
  console.log(
    "the actual number of the plant is " +
      number_of_plants +
      " plants which is over 80% of the capacity, you have to pune the gardin"
  );
} else if (
  number_of_plants > total_possible_plants * 0.5 &&
  number_of_plants < total_possible_plants * 0.8
) {
  console.log("the actual number of the plant is " + number_of_plants);

  console.log(
    "the number of the plants is between 50% and 80% of the maximum capacity, keep an eye on your garden"
  );
} else {
  console.log("the number of plants in the gardin is " + number_of_plants);
  console.log("there is more space for cultivation");
}
console.log("******************************");
// ---------------------------// // week2-----------------------

let weeknumber2 = 2;
let number_of_plants2 = 2 ** (weeknumber2 - 1) * 20;
console.log("week " + weeknumber2);
if (number_of_plants2 >= total_possible_plants * 0.8) {
  console.log(
    "the actual number of the plant is " +
      number_of_plants2 +
      " plants which is over 80% of the capacity, you have to pune the gardin"
  );
} else if (
  number_of_plants2 > total_possible_plants * 0.5 &&
  number_of_plants2 < total_possible_plants * 0.8
) {
  console.log("the actual number of the plant is " + number_of_plants2);

  console.log(
    "the number of the plants is between 50% and 80% of the maximum capacity, keep an eye on your garden"
  );
} else {
  console.log("the number of plants in the gardin is " + number_of_plants2);
  console.log("there is more space for cultivation");
}
console.log("**************************");
// --------------------------------// // week3-------------------------

let weeknumber3 = 3;
let number_of_plants3 = 2 ** (weeknumber3 - 1) * 20;
console.log(" week  " + weeknumber3);
if (number_of_plants3 >= total_possible_plants * 0.8) {
  console.log(
    "the actual number of the plant is " +
      number_of_plants3 +
      " plants which is over 80% of the capacity, you have to pune the gardin"
  );
} else if (
  number_of_plants3 > total_possible_plants * 0.5 &&
  number_of_plants3 < total_possible_plants * 0.8
) {
  console.log("the actual number of the plant is " + number_of_plants3);

  console.log(
    "the number of the plants is between 50% and 80% of the maximum capacity, keep an eye on your garden"
  );
} else {
  console.log("the number of plants in the gardin is " + number_of_plants3);
  console.log("there is more space for cultivation");
}

//part 2
console.log("---------------------------------------------------");
console.log("Part 2: Thinking bigger");

// if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
let weeknumber_part2 = 10;
let number_of_plants_part2 = 2 ** (weeknumber_part2 - 1) * 100;

console.log(
  "if the scientists were to start with 100 plants ",
  "and did not prune them for 10 weeks then the number on plant in the garden will be " +
    number_of_plants_part2
);
let total_aera_part2 = number_of_plants_part2 * 0.8;
console.log(
  " and The amount of additional space that would be required for planting this number of trees is :"
);
console.log(total_aera_part2 + " square meters");
console.log(
  " if the space remain circular, the radius would be 114.18 meters "
);

console.log("");
console.log("");

console.log("-------------part3: Errors and judgement-----------");
console.log("");
console.log("");
//
//
const total_area_radius_part3 = 5; // 5 metters
const total_aera_part3 =
  total_area_radius_part3 * total_area_radius_part3 * 3.14159; // = 78.5 meters square
const total_possible_plants_part3 = total_aera_part3 / 0.8;

const plantnumbfirstweek_part3 = 100;
console.log("******************************");

//
//
//
try {
  if (plantnumbfirstweek_part3 > total_possible_plants_part3) {
    throw new error(
      "the number of trees in this area can not exceed " +
        total_possible_plants_part3
    );
  }
} catch {
  console.error("error: this number of trees can not be planted in this space"
    +" cause the maximum number of trees that can contain this area is 98 trees"
  );
}
