# Font Viewer with useState

## Task 1

For these tasks, we're going to be splitting everything down into individual components so we can get used to writing our apps in this way.

**1.1:**

For this task, you've again been provided with the create-react-app premade so all you need to do is install the modules!

**1.2**

If you look at the file tree, you'll see that you have a slightly different folder structure to this morning's as we've provided you with a `components` folder and an `App` folder inside that. This is how you should always organise your React apps.

Inside that 'components' folder, create a new folder called `Input` with an `index.js` inside. The `Input` folder should be on the same level as your App folder.

**1.3**

In that `index.js` file, you're going to create a new component, which means you need to do three key things:

1. Import React into the file.
2. Create a new function called `Input` that will return JSX (we'll come back to the specifics of this in the next part).
3. Export that function.

Remember, the `Input` function _must_ be capitalized as it's a component.

**1.4**

In that function, return an input tag in JSX that you'll use later to take in some text.

**1.4**

Now repeat those steps again (new folder in components and then steps one to three in task 1.3) but for a new component called `Item` that contains a list item tag in JSX instead of the input tag.

## Task 2

**2.1**

In [App.js](./src/components/App/App.js), import those two components that we just made into the file so we can use them.

**2.2**

Now return both of those components within `App` and load it up! (Don't forget what you need to do in order to see a local version of your React app in the browser - it's different from loading a normal HTML file.)

On your page, you should see your input field and an empty bullet point.

**2.3**

Now we're going to make those components actually do something.

Still in `App.js`, create a piece of state called `text`. Don't forget to use the 'set' convention when you're making the functionality that will eventually change the state! Set the initial state be an empty string (so that the value of the state is an empty string when the page is first loaded).

**2.4**

Next, we're going to hand down that state as **props** to the two components; however, they don't both need both parts of the state.

To put this in context, given that the `Input` component will be controlling what the list item says, we'll need to make a function in a moment to hand `Input` the part of the state that does the controlling, the mechanism that's used to change the value of the state. This means that the `Item` component will be getting the other part of state handed to it, the state itself. Now let's implement this with code:

1. For the function to use to change the state, create a new function within your `App` component's function underneath where you defined your state called `handleChange`. This function needs to use the mechanism from where you defined your state to change the value of `text` to whatever value the user inputs into the input field (hint: it will use the part of your state that starts with 'set'!).

2. The state itself is a bit easier. Set up the Input component's function to expect to receive a prop called `text`.

## Task 3

**3.1**

The last thing we're going to do is prove the power of reusable components using fonts!

In the `Item` component, take in `font` to the function as a prop. Hand `font` in to some inline styling in the list item element's tag by doing `` style={{fontFamily: `${font}`}} ``.

**3.2**

In App.js, duplicate the item component at least three times using your `Item` component. For each one, hand in `font={}`. In the {}, hand in a different font's name (just like the font names you'd use in your CSS normally) to each `Item`.

Now load up, type in a word, and bask in the glory of your React typeface extravaganza!
