document.getElementById("startButton").addEventListener("click", startOrder);

function startOrder() {
  // Step 1 - Welcome and introduction
  alert("Welcome to our Javascript Pizzeria. Ready to Start?");

  // Step 2 - Food choice
  let foodChoice;
  do {
    foodChoice = prompt(
      "What would you like to order? (Pizza/Pasta/Salad)"
    ).toLowerCase();
  } while (
    foodChoice !== "pizza" &&
    foodChoice !== "pasta" &&
    foodChoice !== "salad"
  );

  // Step 3 - Subtype choice
  let subtype;
  if (foodChoice === "pizza") {
    do {
      subtype = prompt(
        "What type of pizza? (Vegetarian/Pepperoni/Hawaiian)"
      ).toLowerCase();
    } while (
      subtype !== "vegetarian" &&
      subtype !== "pepperoni" &&
      subtype !== "hawaiian"
    );
  } else if (foodChoice === "pasta") {
    do {
      subtype = prompt(
        "What type of pasta? (Spaghetti/Penne/Fusilli)"
      ).toLowerCase();
    } while (
      subtype !== "spaghetti" &&
      subtype !== "penne" &&
      subtype !== "fusilli"
    );
  } else {
    do {
      subtype = prompt(
        "What type of salad? (Caesar/Greek/Mixed)"
      ).toLowerCase();
    } while (
      subtype !== "caesar" &&
      subtype !== "greek" &&
      subtype !== "mixed"
    );
  }

  // Step 4 - Age
  let age;
  do {
    age = parseInt(prompt("How old are you?"));
  } while (isNaN(age) || age < 0 || age > 120);

  // Step 5 - Order confirmation
  let message = `Thank you for your order!\n\nYou have ordered: ${subtype} ${foodChoice}\n`;

  if (age < 18) {
    let drinkChoice = prompt(
      "As you are under 18, would you like a free juice? (yes/no)"
    ).toLowerCase();
    if (drinkChoice === "yes") {
      message += "We've added a free juice to your order!";
    } else {
      message += "No drink added to your order.";
    }
  } else {
    let beerChoice = prompt(
      "Would you like to add a beer to your order? (yes/no)"
    ).toLowerCase();
    if (beerChoice === "yes") {
      message +=
        "A beer has been added to your order. You can pay at delivery.";
    } else {
      message += "No drink added to your order.";
    }
  }

  alert(message);

  // Optional: Hide the button after the order is complete
  document.getElementById("startButton").style.display = "none";
}
