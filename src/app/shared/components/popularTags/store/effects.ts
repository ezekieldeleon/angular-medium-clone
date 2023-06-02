import {inject} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {PopularTagService} from '../services/popularTag.service'
import {getPopularTagsAction} from './actions'
import {catchError, switchMap, map, of} from 'rxjs'
import {PopularTagType} from 'src/app/shared/types/popularTag.type'

export const getPopularTagsEffect = createEffect(
  (
    actions$ = inject(Actions),
    popularTagsService = inject(PopularTagService)
  ) => {
    return actions$.pipe(
      ofType(getPopularTagsAction.getPopularTags),
      switchMap(() => {
        return popularTagsService.getPopularTags().pipe(
          map((popularTags: PopularTagType[]) => {
            return getPopularTagsAction.getPopularTagsSuccess({popularTags})
          }),
          catchError(() => {
            return of(getPopularTagsAction.getPopularTagsFailure())
          })
        )
      })
    )
  },
  {functional: true}
)
