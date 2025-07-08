# Web Development Project 4 - Veni Vici Dog Explorer

Submitted by: **Xavier Cabrera**

This web app: **uses The Dog API to allow users to discover random dog breeds. Each time the user clicks the Discover button, a new dog image and its breed attributes are displayed. Users can ban certain attributes (like breed origin or lifespan), and future results will automatically filter out dogs matching those banned traits.**

Time spent: **5.5** hours spent in total

## Required Features

The following **required** functionality is completed: 

- [x] **Application features a button that creates a new API fetch request on click and displays at least three attributes and an image obtained from the returned JSON data**
  - The type of attribute displayed for each image is consistent: breed name, weight, origin, and lifespan
- [x] **Only one item/data from API call response is viewable at a time and at least one image is displayed per API call**
  - A single dog is displayed at a time, with a matching image and attributes
- [x] **API call response results should appear random to the user**
  - Each API request fetches a new random dog breed (with fallback to retry if banned)
- [x] **Clicking on a displayed value for one attribute adds it to a displayed ban list**
  - Attribute buttons are clickable and add their value to the ban list
- [x] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**
  - Results are filtered if their attribute matches any value on the ban list
  - [x] _Ban list values can be removed and updated dynamically_

The following **optional** features are implemented:

- [x] Multiple types of attributes are clickable and can be added to the ban list
- [ ] Users can see a stored history of their previously displayed results from this session

The following **additional** features are implemented:

- [x] API key is securely stored in a `.env` file and not exposed in code
- [x] App is responsive and includes a styled UI with clickable attribute tags
- [x] Ban list display dynamically updates with each added or removed item

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://i.imgur.com/JP7hhGf.gif' title='Video Walkthrough' width='700' alt='Video Walkthrough' />

GIF created with ScreenToGif

## Notes

Describe any challenges encountered while building the app.

- Mapping unfamiliar Dog API fields and ensuring consistency across different breeds was tricky.
- Filtering based on dynamic attribute values required custom logic to avoid infinite loops.
- Learning how to safely use `.env` with Vite was essential for protecting the API key.

## License

    Copyright 2025 Xavier Cabrera

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
