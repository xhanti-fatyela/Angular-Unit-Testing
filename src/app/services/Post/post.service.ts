import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts() {
     
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`)

  }

  deletePosts(post: Post):Observable<any>{
    
    return this.http.delete(
      `https://jsonplaceholder.typicode.com/posts/${post.id}`)

  }
}
