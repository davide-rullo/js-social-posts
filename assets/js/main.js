const posts = [
    {
        id: 1,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://picsum.photos/600/300?random=",
        author: {
            name: "Phil Mangione",
            image: "https://picsum.photos/300/300?random="
        },
        likes: 80,
        created: "2021-06-25"
    },
    {
        id: 2,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://picsum.photos/600/300?random=",
        author: {
            name: "Sofia Perlari",
            image: "https://picsum.photos/300/300?random="
        },
        likes: 120,
        created: "2021-09-03"
    },
    {
        id: 3,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://picsum.photos/600/300?random=",
        author: {
            name: "Chiara Passaro",
            image: "https://picsum.photos/300/300?random="
        },
        likes: 78,
        created: "2021-05-15"
    },
    {
        id: 4,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://picsum.photos/600/300?random=",
        author: {
            name: "Luca Formicola",
            image: null
        },
        likes: 56,
        created: "2021-04-03"
    },
    {
        id: 5,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://picsum.photos/600/300?random=",
        author: {
            name: "Alessandro Sainato",
            image: "https://picsum.photos/300/300?random="
        },
        likes: 95,
        created: "2021-03-05"
    }
];


const containerEl = document.querySelector(".posts-list");
let randomNumber=0;


posts.forEach(function(user) {
    randomNumber++
    const post = `<div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${user.author.image}${randomNumber}" alt="${user.author.name}">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${user.author.name}</div>
                <div class="post-meta__time">${user.created}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${user.content}</div>
    <div class="post__image">
        <img src="${user.media}${randomNumber}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#" data-postid="1">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-1" class="js-likes-counter">${user.likes}</b> persone
            </div>
        </div> 
    </div>            
</div>`
    containerEl.innerHTML += post;
})