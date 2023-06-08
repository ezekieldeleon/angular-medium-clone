import {createActionGroup, emptyProps, props} from '@ngrx/store'
import {BackendErrorMessages} from 'src/app/shared/components/backendErrorMessages/backendErrorMessages.component'
import {ArticleInterface} from 'src/app/shared/types/article.interface'
import {ArticleRequestInterface} from 'src/app/shared/types/articleRequest.interface'
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'

export const createArticleActions = createActionGroup({
  source: 'article',
  events: {
    'Create article': props<{request: ArticleRequestInterface}>(),
    'Create article success': props<{article: ArticleInterface}>(),
    'Create article failure': props<{errors: BackendErrorsInterface}>(),
  },
})
