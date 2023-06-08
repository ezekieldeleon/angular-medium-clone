import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable, map} from 'rxjs'
import {environment} from 'src/environments/environment.development'
import {ArticleInterface} from 'src/app/shared/types/article.interface'
import {ArticleResponseInterface} from 'src/app/shared/types/articleResponse.interface'

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  deleteArticle(slug: string): Observable<{}> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`
    return this.http.delete(fullUrl)
  }
}
