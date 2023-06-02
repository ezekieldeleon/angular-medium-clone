import {Component} from '@angular/core'
import {BannerComponent} from 'src/app/shared/components/banner/banner.component'
import {ErrorMessageComponent} from 'src/app/shared/components/error-message/error-message.component'
import {FeedComponent} from 'src/app/shared/components/feed/feed.component'
import {FeedTogglerComponent} from 'src/app/shared/components/feedToggler/feedToggler.component'
import {PopularTagsComponent} from 'src/app/shared/components/popularTags/popularTags.component'

@Component({
  selector: 'mc-global-feed',
  templateUrl: './globalFeed.component.html',
  standalone: true,
  imports: [
    FeedComponent,
    BannerComponent,
    ErrorMessageComponent,
    PopularTagsComponent,
    FeedTogglerComponent,
  ],
})
export class GlobalFeedComponent {
  apiUrl = '/articles'
}
