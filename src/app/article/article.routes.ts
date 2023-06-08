import {Route} from '@angular/router'
import {ArticleComponent} from './components/article/article.component'
import {provideEffects} from '@ngrx/effects'
import * as articleEffects from './store/effects'
import {articleFeatureKey, articleReducer} from './store/reducers'
import {provideState} from '@ngrx/store'
import {ArticleService} from './services/article.service'

export const routes: Route[] = [
  {
    path: '',
    component: ArticleComponent,
    providers: [
      provideEffects(articleEffects),
      provideState({name: articleFeatureKey, reducer: articleReducer}),
      ArticleService,
    ],
  },
]
