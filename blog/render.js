/* ---------------------------------------------------------------------------
   blog/render.js — tiny client-side blog renderer

   Purpose: load `blog/posts.json` and inject the posts into the page. The JSON
   file is a simple array of post objects. This script is intentionally tiny
   so you can edit or extend it without a build step.

   How to update posts:
   - Open `blog/posts.json` and add a new object to the "posts" array. Each
     post should have: id, title, date, excerpt, image (optional).

   Note: If you open the HTML via file:// some browsers block fetch(). Run a
   simple local server (python -m http.server) to view posts.
   --------------------------------------------------------------------------- */
(function(){
  // #region main renderer
  const container = document.getElementById('blog-list');
  if(!container) return; // nothing to do if the blog element was removed

  fetch('blog/posts.json')
    .then(r=>r.json())
    .then(data=>{
      const posts = data.posts || [];
      container.innerHTML = posts.map(p=>`
        <article class="post">
          <h4 class="post-title">${p.title}</h4>
          <div class="post-meta">${p.date}</div>
          <p class="post-excerpt">${p.excerpt}</p>
        </article>
      `).join('');
    }).catch(e=>{
      container.innerHTML='<p class="muted-link">No posts available.</p>';
      console.warn(e);
    });
  // #endregion main renderer
})();
