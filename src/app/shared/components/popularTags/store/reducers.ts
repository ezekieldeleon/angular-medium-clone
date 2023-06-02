import {createFeature, createReducer, on} from '@ngrx/store'
import {PopularTagsStateInterface} from '../types/popularTagsState.interface'
import {getPopularTagsAction} from './actions'

const initialState: PopularTagsStateInterface = {
  isLoading: false,
  error: null,
  data: null,
}

const popularTagsFeature = createFeature({
  name: 'popularTags',
  reducer: createReducer(
    initialState,
    on(getPopularTagsAction.getPopularTags, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(getPopularTagsAction.getPopularTagsSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      data: action.popularTags,
    })),
    on(getPopularTagsAction.getPopularTagsSuccess, (state) => ({
      ...state,
      isLoading: false,
    }))
  ),
})

export const {
  name: popularTagsFeatureKey,
  reducer: popularTagsReducer,
  selectIsLoading,
  selectError,
  selectData: selectPopularTagsData,
} = popularTagsFeature
