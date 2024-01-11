import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
/**
 * 2초 지연을 시키는 함수입니다 (비동기 작업).
 */
import { waitTwoSeconds } from '../../utils';

export const __addToDo = createAsyncThunk(
  '__addToDo',
  async (payload, thunkAPI) => {
    try {
      const data = await waitTwoSeconds(payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteTodo = createAsyncThunk(
  '__deleteToDo',
  async (payload, thunkAPI) => { 
    try {
      const data = await waitTwoSeconds(payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  list: [],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // addToDo: (state, action) => {
    //   state.list = [...state.list, action.payload];
    // },
    // deleteTodo: (state, action) => {
    //   state.list = state.list.filter(todo => todo.id !== action.payload.id);
    // },
  },
  extraReducers: {
    [__addToDo.pending]: (state) => {
      state.isLoading = true; 
    },
    [__addToDo.fulfilled]: (state, action) => {
      state.isLoading = false; 
      state.list = [...state.list, action.payload]; 
    },
    [__addToDo.rejected]: (state, action) => {
      state.isLoading = false; 
      state.error = action.payload; 
    },
    [__deleteTodo.pending]: (state) => {
      state.isLoading = true; 
    },
    [__deleteTodo.fulfilled]: (state, action) => {
      state.isLoading = false; 
      state.list = state.list.filter(todo => todo.id !== action.payload); 
    },
    [__deleteTodo.rejected]: (state, action) => {
      state.isLoading = false; 
      state.error = action.payload; 
    },
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
