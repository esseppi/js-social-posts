let container = document.querySelector('#container');

for (let i = 0; i < posts.length; i++) {
  let id = posts[i].id;
  let content = posts[i].content;
  let media = posts[i].media;
  let name = posts[i].author.name;
  let image = posts[i].author.image;
  let likes = posts[i].likes;
  let created = posts[i].created;
  let post = document.createElement('div');
  post.classList.add('team-card');
  post.innerHTML = `
  <div class="post">
  <div class="post__header">
      <div class="post-meta">
          <div class="post-meta__icon">
              <img class="profile-pic" src="${image}" alt="${name}">
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
              <a class="like-button  js-like-button" href="#" data-postid="1">
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
