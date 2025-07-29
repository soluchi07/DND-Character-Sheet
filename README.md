# Web Development Project 7 - *DND Character Sheet*

Submitted by: **Soluchi Fidel-Ibeabuchi**

This web app: **insert description**

Time spent: **6** hours spent in total

## Required Features

The following **required** functionality is completed:


- [x] **The web app contains a page that features a create form to add a new character**
  - Users can name the character
  - Users can set the character’s attributes by clicking on one of several values
- [x] **The web app includes a summary page of all the user’s added characterse**
  -  The web app contains a summary page dedicated to displaying all the characters the user has made so far
  -  The summary page is sorted by creation date such that the most recently created characters appear at the top
- [x] **A previously created character can be updated from the list of characters in the summary page**
  - Each character has an edit button that will take users to an update form for the relevant character
  - Users can see the current attributes of their character on the update form
  - After editing the character's attribute values using the form, the user can immediately see those changes reflected in the update form and on the summary page 
- [x] **A previously created character can be deleted from the character list**
  - Using the edit form detailed in the previous _characters can be updated_ feature, there is a button that allows users to delete that character
  - After deleting a character, the character should no longer be visible in the summary page
  - [x] **Each character has a direct, unique URL link to an info page about them**
    - Clicking on a character in the summary page navigates to a detail page for that character
    - The detail page contains extra information about the character not included in the summary page
    - Users can navigate to to the edit form from the detail page

The following **optional** features are implemented:

- [ ] A character can be given a category upon creation which restricts their attribute value options
  - e.g., a Dungeons and Dragons class or a development team role (project manager, product owner, etc.)
  - User can choose a `category` option to describe their character before any attributes are specified
  - Based on the category value, users are allowed to access only a subset of the possible attributes
- [ ] A section of the summary page, displays summary statistics about a user’s crew on their crew page
  - e.g., the percent of members with a certain attribute 
- [ ] The summary page displays a custom “success” metric about a user’s crew which changes the look of the character list
  - e.g., a pirate crew’s predicted success at commandeering a new galley


The following **additional** features are implemented:

* Character properties have default values on creation and have different input methods

## Video Walkthrough

Here's a walkthrough of the aforementioned features:

<img src='view_char.gif' title='Viewing Character Details' width='' alt='Video Walkthrough' />

<img src='edit_char.gif' title='Editing Characters' width='' alt='Video Walkthrough' />

<img src='create_char.gif' title='Creating Characters' width='' alt='Video Walkthrough' />

<img src='del_char.gif' title='Deleting Characters' width='' alt='Video Walkthrough' />


<!-- Replace this with whatever GIF tool you used! -->
GIF created with screentogif.com


## Notes

The form handling and styling took me a while. I also had to handle errors that rose from the uniqueness of the columns of the table. 

## License

    Copyright 2025 Soluchi Fidel-Ibeabuchi

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.