import { createFeature, createReducer, on } from '@ngrx/store';
import { UserState } from '../models/state.interface';
import { AuthActions } from './auth.actions';

const initialState: UserState = {
  user: null,
};

const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,

    on(AuthActions.register, (state) => {
      return {
        ...state,
      };
    }),

    on(AuthActions.registerSuccess, (state, action) => {
      return {
        ...state,
        user: action.user,
      };
    }),

    on(AuthActions.registerFailure, (state, action) => {
      return {
        ...state,
      };
    })
  ),
});

export const { name: authFeatureKey, reducer: authReducer } = authFeature;
