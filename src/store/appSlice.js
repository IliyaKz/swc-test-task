import { createSlice} from '@reduxjs/toolkit';

const initialState = {
  isPopupShow: false
}

const constructorSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    togglePopupVisibility(state) {
      state.isPopupShow = !state.isPopupShow;
      const body = document.body;
      body.classList.toggle('scroll-hidden')
    }
  }
})

export const {
  togglePopupVisibility,
} = constructorSlice.actions;

export default constructorSlice.reducer;