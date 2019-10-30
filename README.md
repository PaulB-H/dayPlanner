# Day Planner
### Paul Bernard-Hall

## Goal:

### Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

* The application displays timeblocks for standard business hours (9 a.m. to 5 p.m.).

* Each timeblock contains an input field and save button.

* Clicking a timeblock's "Save" button stores the input text in local storage, allowing the text to persist when the application is refreshed.

* The current day is displayed at the top of the calendar.

* Each timeblock is color coded to indicate whether it is in a past, present, or future hour.

Use [Moment.js](https://momentjs.com/) library to work with date and time.

// future ideas for this:
Function run on interval 30 sec IF content of the text box's !== the value for that text box in local storage, SET background-color of save-button for that text box = red