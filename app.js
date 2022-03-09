let container = document.querySelector('#container');
let arrLikedIds = [];
for (let i in posts) {
  generatePost(posts[i]);
}

function generatePost(ele) {
  let post = document.createElement('div');
  post.classList.add('post');
  post.dataset.postid = ele.id;
  post.innerHTML = `
      <div class="post__header">
          <div class="post-meta">
              <div class="post-meta__icon">
                  ${getProfilePicHtml(ele)}
              </div>
              <div class="post-meta__data">
                  <div class="post-meta__author">${ele.author.name}</div>
                  <div class="post-meta__time">${dateFromIsoToItalian(
                    ele.created
                  )}</div>
              </div>
          </div>
      </div>
      <div class="post__text">${ele.content}</div>
      <div class="post__image">
          <img src="${ele.media}" alt="">
      </div>
      <div class="post__footer">
          <div class="likes js-likes">
              <div class="likes__cta">
                  <a class="like-button  js-like-button" href="#" data-postid="${
                    ele.id
                  }">
                      <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                      <span class="like-button__label">Mi Piace</span>
                  </a>
              </div>
              <div class="likes__counter">
                  Piace a <b id="like-counter-1" class="js-likes-counter">${
                    ele.likes
                  }</b> persone
              </div>
          </div>
      </div>
  `;
  post.querySelector('.js-like-button').addEventListener('click', toggleLike);
  container.appendChild(post);
}
function getProfilePicHtml(ele) {
  if (ele.author.image == null) {
    let arrNameParts = ele.author.name.split(' ');
    let initials = '';
    for (let index in arrNameParts) {
      initials += arrNameParts[index][0].toUpperCase();
    }
    return `<div class="profile-pic-default"><span>${initials}</span></div>`;
  } else {
    return `<img class="profile-pic" src="${ele.author.image}" alt="${ele.author.name}"></img>`;
  }
}
function dateFromIsoToItalian(originalDate) {
  return originalDate.split('-').reverse().join('/');
}

function toggleLike(event) {
  event.preventDefault();
  const btnLike = this;
  const elePost = btnLike.closest('.post');
  const postId = parseInt(elePost.dataset.postid);
  const eleCounter = elePost.querySelector('.js-likes-counter');

  let indexLikedPost = 0;
  while (postId != posts[indexLikedPost].id) {
    indexLikedPost++;
  }
  const objPost = posts[indexLikedPost];

  if (btnLike.classList.contains('like-button--liked')) {
    removeLike(btnLike, objPost);
  } else {
    addLike(btnLike, objPost);
  }

  eleCounter.innerHTML = objPost.likes;
}

function removeLike(btnLikeArgument, objPostArgument) {
  btnLikeArgument.classList.remove('like-button--liked');
  objPostArgument.likes--;
  const index = arrLikedIds.indexOf(objPostArgument.id);
  arrLikedIds.splice(index, 1);

  console.log(arrLikedIds);
  console.table(posts);
}

function addLike(btnLikeArgument, objPostArgument) {
  btnLikeArgument.classList.add('like-button--liked');

  objPostArgument.likes++;
  arrLikedIds.push(objPostArgument.id);

  console.log(arrLikedIds);
  console.table(posts);
}
