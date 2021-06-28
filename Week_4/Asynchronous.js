// let myPost = ["post 1","post 2", "post 3"]

// const allPosts =() => {
//     setTimeout(()=>{
//         for(let i = 0; i < myPost.length; i++){
//             console.log(myPost[i])
//         }
//     },1000)
// }


// const creatPost = (post) => {
//     setTimeout(() =>{
//         myPost.push(`${post}`)
//     },2000)
// }

// post 4 will not be logged becasue the timeout does let it be created intime for the creat post function


// creatPost("post 4");
// allPosts();

let myPost = ["post 1","post 2", "post 3"]

const allPosts =() => {
    setTimeout(()=>{
        for(let i = 0; i < myPost.length; i++){
            console.log(myPost[i])
        }
    },1000)
}


const creatPost = (post,callback) => {
    setTimeout(() =>{
        myPost.push(`${post}`)
        callback()
    },2000)
}

creatPost("post 4",allPosts);
// by adding the callback() function it calls allPost once the timeout and the new post has been added





