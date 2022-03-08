let container = document.querySelector('#container');
let icon = document.querySelector('.post-meta__icon');
let btnAddLike = document.querySelector('.like-button');
let likeCounter = document.querySelector('#like-counter-1');

function generatePost() {
  for (let i = 0; i < posts.length; i++) {
    let element = posts[i];
    let id = element.id;
    let content = element.content;
    let media = element.media;
    let name = element.author.name;
    let image = element.author.image;
    let photo = `<img class="profile-pic" src="${image}" alt="${name}">`;
    let likes = element.likes;
    let created = element.created;
    let post = document.createElement('div');
    if (image == null) {
      let rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');
      let initials = [...name.matchAll(rgx)] || [];
      initials = (
        (initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')
      ).toUpperCase();
      photo = `<div>${initials}</div>`;
    }
    post.classList.add('team-card');
    post.innerHTML = `
        <div class="post">
        <div class="post__header">
            <div class="post-meta">
                <div class="post-meta__icon">
                    ${photo}
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${name}</div>
                    <div class="post-meta__time">${created}</div>
                </div>
            </div>
        </div>
        <div class="post__text">${content}</div>
        <div class="post__image">
            <img src="${media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="${id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
                </div>
            </div>
        </div>
      </div>`;

    container.appendChild(post);
  }
}
generatePost();

btnAddLike.addEventListener('submit', addLike());

function addLike(event) {
  // crea oggetto del nuovo membro prendendo i dati dal form
}
