const posts = [
    {title: 'Post 1', body: 'This is post one',createdAt: new Date().getTime()},
    {title: 'Post 2', body: 'This is post Two',createdAt: new Date().getTime()}
]

let intervalId = 0;

function getPosts(){
    clearInterval(intervalId);
    setInterval(() => {
            let output = '';
            posts.forEach((post,index) => {
                output = output + `<li>${post.title} created ${(new Date().getTime() - post.createdAt)/1000} seconds ago</li>`;
            })
            document.body.innerHTML = output;
    },1000);
    
}

function createPost(post){

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push({...post, createdAt: new Date().getTime()});
            const error = false;

            if(!error){
                resolve();
            }
            else{
                reject('Error: Something went wrong');
            }

        },1000)
    })
}

function create4Post(post,callback){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push({...post, createdAt: new Date().getTime()});
            const error = false;

            if(!error){
                resolve();
            }
            else{
                reject('Error: Something went wrong');
            }

        },1000)
    })
}

function deletePost(){
    return new Promise((resolve,reject) => {
        let count = posts.length;
        posts.pop();
        setTimeout(() => {
            if(count>0){
                resolve();
            }
            else{
                reject('Array is Empty');
            }
        },5000)
    })
}


createPost({title: 'Post 3', body: 'This is post Three'}).then(() => {
    getPosts(),
    deletePost().then(() => {
        getPosts()
    })
}).catch(error => console.log(error));


create4Post({title: 'Post 4', body: 'This is post four'}).then(() => {
    getPosts();
    setTimeout(() => {
        deletePost().then(() => {
        getPosts()
    })},1000)
    
}).catch(error => console.log(error));

deletePost().then(getPosts).catch(error => console.log(error));
deletePost().then(getPosts).catch(error => console.log(error));
deletePost().then(getPosts).catch(error => console.log(error));

