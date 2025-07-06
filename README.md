# Spotify Clone 

## Steps -
- create /redux/services/shazamCore.js
- use RapidApi to get JS fetch code and paste in above file
- import createApi & fetchBaseQuery
- export api with createApi - an api must have a reducerPath - simply the name of our API
- import API in store.js
- define reducer & middleware

- go to `shazamCore.js` and define `baseQuery`, `endPoints` and export Query
- go to `Discover.jsx` and use this exported Query