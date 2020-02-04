## Jobs board API

The idea for this was to bring together multiple jobs board APIs together and make a simple user interface to show the data from each of them. Didnt have a whole lot of time because 2 other code tests came up in that timeframe.

The user can filter for job title, location, and min and max salary. It keeps track of what jobs the user chose to apply.

It uses express on the backend and react on the front. I chose not to use a database for this and just relied on local storage for data persistence. If i was to spend mpre time on this i would add user auth and and of course use a database.

At first i was pulling off the data from 3 different data sets. I made 3 different kind of job lisiting components to pull the dat from each but this was messy and needed a lot more code on the front end. I refactored to map the 3 different array data sets into a uniform object of arrays before sending to the front end. This reduced a lot of clutter.
