import {Component, OnInit} from '@angular/core'
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router'
import {Store, select} from '@ngrx/store'
import {userProfileActions} from '../../store/actions'
import {combineLatest, filter, map} from 'rxjs'
import {
  selectError,
  selectIsLoading,
  selectUserProfileData,
} from '../../store/reducers'
import {selectCurrentUser} from 'src/app/auth/store/reducers'
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface'
import {UserProfileInterface} from '../../types/userProfile.interface'
import {CommonModule} from '@angular/common'
import {FeedComponent} from 'src/app/shared/components/feed/feed.component'

@Component({
  selector: 'app-user-profile',
  templateUrl: './userProfile.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, FeedComponent],
})
export class UserProfileComponent implements OnInit {
  slug: string = ''
  isCurrentUserProfile$ = combineLatest({
    currentUser: this.store.pipe(
      select(selectCurrentUser),
      filter((currentUser): currentUser is CurrentUserInterface =>
        Boolean(currentUser)
      )
    ),
    userProfile: this.store.pipe(
      select(selectUserProfileData),
      filter((userProfile): userProfile is UserProfileInterface =>
        Boolean(userProfile)
      )
    ),
  }).pipe(
    map(
      ({currentUser, userProfile}) =>
        currentUser.username === userProfile.username
    )
  )
  data$ = combineLatest({
    userProfile: this.store.select(selectUserProfileData),
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectError),
    isCurrentUserProfile: this.isCurrentUserProfile$,
  })
  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private router: Router
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.slug = params['slug']
      this.fetchUserProfile()
    })
  }

  fetchUserProfile() {
    this.store.dispatch(userProfileActions.getUserProfile({slug: this.slug}))
  }

  getApiUrl(): string {
    const isFavorites = this.router.url.includes('favorites')
    return isFavorites
      ? `/articles?favorited=${this.slug}`
      : `/articles?author=${this.slug}`
  }
}
