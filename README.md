For this challenge I was asked to create a React application that pulls restaurant data from a simple REST API, displays that data in a table, and allows users to filter that data. No third party libraries were permitted, but create-react-app was an acceptable starting point for the application.

User stories:
• A user should be able to see a table with the name, city, state, phone number, and genres for each restaurant.
• A user should see results sorted by name in alphabetical order starting with the beginning of the alphabet
• A user should be able to filter restaurants by state.
• A user should be able to filter by genre.
• State and Genre filters should default to “All” and take effect instantaneously (no additional clicks).
• A user should be able to enter text into a search field. When hitting the enter key or clicking on a searchbutton, the table should search results. Search results should match either the name, city, or genre.
• A user should be able to clear the search by clearing the text value in the search input.
• A user should only see 10 results at a time and the table should be paginated.
• A user should be able to combine filters and search. The user should be able to turn filters on and off while a search value is present.
• If any of the filters do not return any restaurants, the UI should indicate that no results were found.

Application needs:
• Deployed application
• No use of third-party component libraries for the table, filter, or search.
• Using Create-React-App or Next.js as a starter kit is okay.
• Well organized file structure
• Descriptive naming conventions
• DRY code that is readable and production ready
• Reusable components
• Sound logic for how the filters are architected
• Styling follows a convention/pattern and is well organized
• Full Git history with atomic commits