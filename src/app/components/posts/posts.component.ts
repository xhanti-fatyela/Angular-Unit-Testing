import { Component } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/Post/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {

  posts: Post[] = []

  constructor(private postService: PostService){}

  ngOnInit(): void {

    this.getPosts()
  }
  
  getPosts() {
    
    this.postService.getPosts().subscribe((posts) => {

      this.posts = posts
    })

  }

  delete(post: Post) {
      this.posts = this.posts.filter(p => p.id != post.id )
      this.postService.deletePosts(post).subscribe()
  }

}
