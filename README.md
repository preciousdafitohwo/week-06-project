# React + Vite



User Stories
🐿️ As a user, I want to be able to click the cookie and increment the counter
🐿️ As a user, I want to see the counter automatically increment using an interval timer
🐿️ As a user, I want to purchase items i can afford in the shop and increase the number of cookies every time the interval passes



REQUIREMENTS
Create state variables to store the current number of cookies and the cookies PerSecond value (useState)

Set up a timer to increment the number of cookies by the cookiesPerSecond value (useEffect). Be sure to handle clearing the timer using the useEffect return value.

Set up an array of objects containing the items available for purchase in the store, their cost and their increment increase value. Map through these and create buttons for each.

Create a function to handle the purchase of an item. This should check if the user has enough cookies to purchase the item, and if so, subtract the cost of the item from the number of cookies and add the increment value to the cookiesPerSecond value.


Stretch Goals
🏹 Store the cookies and cookiesPerSecond values in localStorage so they persist between page refreshes.


Requirements met and goals achieved
1) I was able to fufil the user stories by allowing the user to be able to click on a cookie img to buy a cookie and display current cookie count, the user is also able to buy upgrades when they have enough cookies to afford the upgrade


Requirements/goals not able to achieve
1)Not able to set the interval so that the cookie count increases gradually rather than a jump based on the current cps value



Difficulties about the task
1))Not able to set the interval so that the cookie count increases gradually rather than a jump based on the current cps value
