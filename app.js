let container = document.querySelector('.container')
function generatePost() {    
    for (let i = 0; i < posts.length; i++) {
        const name = posts[i].author.name;
        console.log(name)
    }
};
generatePost();