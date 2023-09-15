import { of } from "rxjs";
import { Post } from "src/app/models/Post"
import { PostsComponent } from "./posts.component";

describe('Posts Component', () => {

    let POSTS: Post[];
    let component: PostsComponent;
    let mockPostService: any

    beforeEach(() => {
        POSTS = [{
            id: 1, 
            body: 'body 1',
            title: 'title 1'
        },
        {
            id: 2, 
            body: 'body 2',
            title: 'title 2'
        },
        {
            id: 3, 
            body: 'body 3',
            title: 'title 3'
        }
      
    ]

    mockPostService = jasmine.createSpyObj(['getPosts', 'deletePosts'])
    component = new PostsComponent(mockPostService)

    
    })
    describe('delete method', () => {

        it('should delete the selected Post from the posts', () => {
            mockPostService.deletePosts.and.returnValue(of(true))
            
            component.posts = POSTS;
            component.delete(POSTS[1]);


        expect(component.posts.length).toBe(2);
            
        })

        it('should call the delete method in post Service only once', () => {
            mockPostService.deletePosts.and.returnValue(of(true))
            
            component.posts = POSTS;
            component.delete(POSTS[1]);


        expect(mockPostService.deletePosts).toHaveBeenCalledTimes(1);
            
        })
    })
})