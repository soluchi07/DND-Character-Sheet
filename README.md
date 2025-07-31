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

## Video Walkthroughs

Here are walkthroughs of the aforementioned features:

### Viewing Character Details
<img src='view_char.gif' title='Viewing Character Details' width='' alt='Video Walkthrough' />


### Editing Characters
<img src='edit_char.gif' title='Editing Characters' width='' alt='Video Walkthrough' />


### Creating Characters
<img src='create_char.gif' title='Creating Characters' width='' alt='Video Walkthrough' />


### Deleting Characters
<img src='del_char.gif' title='Deleting Characters' width='' alt='Video Walkthrough' />

## Key Features

### Core Functionality
* Character Creation: Interactive form with validation for creating new D&D characters

* Character Management: View, edit, and delete characters with real-time updates

* Detailed Character Profiles: Individual pages for each character with comprehensive stat displays


Responsive Design: Optimized for desktop and mobile devices

### Technical Highlights
* Data Persistence: Secure database storage with Supabase integration

* CRUD Operations: Full Create, Read, Update, Delete functionality

* Dynamic Routing: Unique URLs for each character profile

* Form Validation: Client-side and server-side input validation

* Real-time Updates: Immediate reflection of changes across all views

* Sorted Data Display: Characters ordered by creation date (newest first)


## Tech Stack

### Frontend:

* React.js

* Modern CSS3 with Grid & Flexbox

* Responsive Design Principles


### Backend:

* Supabase (PostgreSQL)

* RESTful API Design

* Real-time Database Subscriptions

### Deployment:

* Netlify


## Performance & UX

* Fast Load Times: Optimized queries and efficient data fetching

* Intuitive Interface: Clean, medieval-themed design with clear visual hierarchy

* Accessibility: Semantic HTML and keyboard navigation support

<!-- Error Handling: Comprehensive error states and user feedback -->
## Responsive Design
The application is fully responsive and provides an optimal experience across:

* Desktop computers (1200px+)
<!-- Tablets (768px - 1199px)
Mobile devices (320px - 767px) -->

## 🔧 Installation & Setup (bash)

### Clone the repository
git clone https://github.com/yourusername/dnd-character-manager.git

### Navigate to project directory
cd dnd-character-manager

### Install dependencies
npm install

### Set up environment variables
cp .env.example .env.local
Add your Supabase credentials to .env.local

### Start development server
npm run dev
🌐 Environment Variables
env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

## Database Schema (sql)
create table public."Characters" (
  name text not null,
  class text null default 'N/A'::text,
  lore text null default 'N/A'::text,
  level bigint null default '1'::bigint,
  img text null default '""'::text,
  skills jsonb null default '["N/A"]'::jsonb,
  str bigint null default '0'::bigint,
  dex bigint null default '0'::bigint,
  con bigint null default '0'::bigint,
  int bigint null default '0'::bigint,
  wis bigint null default '0'::bigint,
  cha bigint null default '0'::bigint,
  armor bigint null default '0'::bigint,
  speed bigint null default '0'::bigint,
  prof bigint null default '0'::bigint,
  special jsonb null default '["N/A"]'::jsonb,
  equipment jsonb null default '["N/A"]'::jsonb,
  hits bigint null default '0'::bigint,
  race text null default 'N/A'::text,
  background text null default 'N/A'::text,
  alignment text null default 'N/A'::text,
  charid bigint generated by default as identity not null,
  time_created timestamp without time zone null default now(),
  constraint Characters_pkey primary key (charid)
) TABLESPACE pg_default;

<!-- 🚦 API Endpoints
GET /api/characters - Retrieve all characters
POST /api/characters - Create new character
GET /api/characters/[id] - Get specific character
PUT /api/characters/[id] - Update character
DELETE /api/characters/[id] - Delete character -->

## Design Decisions
* Medieval Theme: Chose a medieval aesthetic to match D&D's fantasy setting, using warm colors (golds, browns) and ornate typography.

* Component Architecture: Modular React components for reusability and maintainability.

* Database Design: Normalized schema with appropriate data types and constraints for character attributes.

* User Experience: Prioritized intuitive navigation and immediate visual feedback for all user actions.

## Future Enhancements
* Character Categories: Class-based attribute restrictions
* Party Management: Group characters into adventuring parties
* Statistics Dashboard: Analytics on character distributions and attributes
* Export Functionality: PDF character sheet generation
* Collaborative Features: Share characters with other users
* Advanced Search: Filter and sort characters by various attributes

<!-- 📈 Performance Metrics
Page Load Time: < 2 seconds
Database Query Time: < 100ms average
Lighthouse Score: 95+ (Performance, Accessibility, Best Practices) -->

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## Fork the project
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request

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