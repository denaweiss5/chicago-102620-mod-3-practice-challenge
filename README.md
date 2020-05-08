# Dance Rader

Today you'll be building an app for viewing and editing dancers. You will be using a local API and building out the frontend for our app, Dance Rader.

## Testing

This practice code challenge includes a test suite. Keep in mind that the actual code challenge will not include a test suite. To get the most out of this, manually test your code as you would during a code challenge. After you've completed the Core Deliverables and are satisfied with your progress, run the tests for the Core Deliverables. Do the same for the Advanced Deliverables.

### Test Commands:
- `npm run core`
- `npm run adv`

## Setup

- Fork and clone this repository
- Run `json-server --watch db.json` to get the backend started
- Open `index.html` in your browser

## Endpoints

Your base URL for your API will be: http://localhost:3000

The endpoints you will need are:

- GET `/dancers/[:id]` (start with /dancers/1) (Alternatively, you can get all dancers and then select one)
- PATCH `/dancers/[:id]`
- GET `/dancers` (for Advanced Deliverables)

## Core Deliverables

As a user, I can:

- See the first dancer's details, including their **name, image, description, likes, and feedback**, when the page loads
- Like the dancer and **still see the new number of likes when reloading the page**
- Leave feedback for the dancer (no persistence needed, will disappear on refresh)

## Advanced Deliverables

These deliverables are not required, but if you have the extra time, they are a great way to stretch your skills. Consider refactoring your current code before moving on.

> Note: If you are going to attempt these advanced deliverables, please be sure to have a working commit with all the Core Deliverables first!

As a user, I can:

- Still see the feedback after refreshing the page
- Delete feedback (persistent)
- Reduce the likes by clicking on a button (persistent) without going below 0 likes
- See a menu of dancers. Clicking a dancer's name should update the page to show that dancer's details

## Rubric

You can find the rubric for this assessment [here](https://github.com/learn-co-curriculum/se-rubrics/blob/master/module-3.md).
