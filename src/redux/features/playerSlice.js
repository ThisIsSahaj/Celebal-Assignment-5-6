import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: '',
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song;

      if (action.payload?.data?.tracks?.hits) {
        state.currentSongs = action.payload.data.tracks.hits;
      } else if (action.payload?.data?.properties) {
        state.currentSongs = action.payload?.data?.tracks;
      } else {
        state.currentSongs = action.payload.data;
      }

      state.currentIndex = action.payload.i;
      state.isActive = true;
    },

    // setActiveSong: (state, action) => {
    //   state.activeSong = action.payload.song;

    //   // Handles ShazamCore formats consistently
    //   const rawData = action.payload.data;

    //   if (Array.isArray(rawData)) {
    //     // Simple array of songs (like in Top Charts)
    //     state.currentSongs = rawData;
    //   } else if (rawData?.tracks?.hits) {
    //     // Search results
    //     state.currentSongs = rawData.tracks.hits.map(hit => hit.track);
    //   } else if (rawData?.tracks) {
    //     // Playlist or album
    //     state.currentSongs = rawData.tracks;
    //   } else {
    //     state.currentSongs = [];
    //   }

    //   state.currentIndex = action.payload.i;
    //   state.isActive = true;
    // },


    nextSong: (state, action) => {
      if (state.currentSongs[action.payload]?.track) {
        state.activeSong = state.currentSongs[action.payload]?.track;
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    prevSong: (state, action) => {
      if (state.currentSongs[action.payload]?.track) {
        state.activeSong = state.currentSongs[action.payload]?.track;
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

//     nextSong: (state, action) => {
//   state.currentIndex = action.payload;
//   state.activeSong = state.currentSongs[action.payload];
//   state.isActive = true;
// },

// prevSong: (state, action) => {
//   state.currentIndex = action.payload;
//   state.activeSong = state.currentSongs[action.payload];
//   state.isActive = true;
// },


    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },

    selectGenreListId: (state, action) => {
      state.genreListId = action.payload;
    },
  },
});

export const { setActiveSong, nextSong, prevSong, playPause, selectGenreListId } = playerSlice.actions;

export default playerSlice.reducer;
