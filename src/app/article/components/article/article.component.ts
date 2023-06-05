import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {Store} from '@ngrx/store'
import {articleActions} from '../../store/actions'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  standalone: true,
})
export class ArticleComponent implements OnInit {
  slug = this.route.snapshot.paramMap.get('slug') ?? '  '
  constructor(private store: Store, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.store.dispatch(articleActions.getArticle({slug: this.slug}))
  }
}
