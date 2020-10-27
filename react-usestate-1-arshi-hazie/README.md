# React useState Workshop

## Task 1 - Random Bootcamper Name Generator - Morning

**1.1:**

This repo has already created the React app. You just need to install the modules - you know the drill!

**1.2:**

First, you'll need to import `useState` from React at the top of the file.

**1.3:**

You've been provided with an array of bootcamper names in [this](./src/bootcampers.js) file. Import it into your [App.js file](./src/App.js) so we can use it in our app.

**1.4:**

Create a piece of state at the top of your `App` component called `bootcamperIndex` with an initial state on `0`. If you need a reminder of how to declare state, check the docs!

**1.5:**

In the jsx, insert into the `<p>` tag the item of the bootcampers array at the current `bootcamperIndex`.

**1.6:**

Write a function called `handleClick` within your app component, and inside of this, use the function from your useState to set the `bootcamperIndex` state to be a random number between zero and the length of the bootcampers array.

**1.7:**

Create a button in `App.js` that calls the `handleClick` function when it gets clicked.

Great! You should now be getting a random bootcamper every time you click that button.

## Task 2

Now try and repeat the outcome of task one, but this time with a random compliment as well as the bootcamper names. There's an array of compliments in [here](./src/bootcampers.js) that you may have noticed earlier. Feel free to add to the array with more compliments. Make a new piece of state, and a separate `<p>` tag to display the compliment alongside the name you've generated in task one.
