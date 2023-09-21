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

        beforeEach(() => {
          
            mockPostService.deletePosts.and.returnValue(of(true))
            component.posts = POSTS;

        })

        it('should delete the selected Post from the posts', () => {
         
         component.delete(POSTS[1]);
         expect(component.posts.length).toBe(2);
            
        })

        it('should delete the actual selected Post from Posts', () => {
           
            component.delete(POSTS[1]);

            for (let post of component.posts) {

                expect(post).not.toEqual(POSTS[1]) 
            }

        })

        it('should call the delete method in post Service only once', () => {

            component.delete(POSTS[1]);
            expect(mockPostService.deletePosts).toHaveBeenCalledTimes(1);
            
        })
        
        it('should call the delete method in post Service twice', () => {

            component.delete(POSTS[1]);
            component.delete(POSTS[1]);
            expect(mockPostService.deletePosts).toHaveBeenCalledTimes(2);
            
        })
        

    })
})