# Blog Project

This is a project developed in ReactJS, based on the course "React: Developing with React Router in JavaScript" from Alura. Some customizations were made to the layout. Noteworthy differences from the course include creating the project using Vite and styling with the Sass preprocessor. Additionally, the Block Element Modifier (BEM) methodology was adopted to standardize class naming.

## Layout

<div align="center">
    
 ![Blog Project](https://github.com/vanessavargas/reactjs-blog/blob/main/src/assets/layout.png)
    
</div>

The project is deployed on Netlify, and you can view it [here](https://site-blog-react.netlify.app/)

### Key Features
- Single Page Application (SPA): Utilized react-router-dom for seamless navigation within the application.
- Nested Routes: Implemented nested routes for a structured and intuitive user experience.
- Markdown Rendering: Integrated the react-markdown library to transform plain text into Markdown for HTML rendering.
- React Hooks: Applied various hooks such as useLocation, useParams, and useNavigate for efficient state management and navigation.

### Project Structure
```
├── public
│ └── assets
│   └── posts
│     ├── 1
│     |   ├── capa.png
│     |   ├── gif-1.gif
│     |   └── gif-2.gif
│     ├── 2
│     |   ├── capa.png
│     |   ├── gif-1.gif
│     |   └── gif-2.gif
│     ├── 3
│     |   ├── capa.png
│     |   ├── gif-1.gif
│     |   └── gif-2.gif
│     ├── 4
│     |   ├── capa.png
│     |   ├── gif-1.gif
│     |   └── gif-2.gif
│     ├── 5
│     |   ├── capa.png
│     |   ├── gif-1.gif
│     |   └── gif-2.gif
│     ├── 6
│     |   ├── capa.png
│     |   ├── gif-1.gif
│     |   └── gif-2.gif
│     ├── 7
│     |   ├── capa.png
│     |   ├── gif-1.gif
│     |   └── gif-2.gif
│     └── 8
│         ├── capa.png
│         ├── gif-1.gif
│         └── gif-2.gif
├── src
│  ├── assets
│  │  ├── circulo_colorido.png
│  │  ├── erro_404.png
│  │  ├── layout.png
│  │  ├── minha_foto.png
│  │  ├── sobre_mim_capa.png
│  │  └── sobre_mim_gif.gif
│  ├── components
│  |  ├── Banner
│  │  |  ├── Banner.jsx
│  │  |  └── index.js
│  |  ├── Footer
│  │  |  ├── Footer.jsx
│  │  |  └── index.js
│  |  ├── MainButton
│  │  |  ├── MainButton.jsx
│  │  |  └── index.js
│  |  ├── Menu
│  │  |  ├── Menu.jsx
│  │  |  └── index.js
│  |  ├── ModelPost
│  │  |  ├── ModelPost.jsx
│  │  |  └── index.js
│  |  ├── PostCard
│  │  |  ├── PostCard.jsx
│  │  |  └── index.js
│  |  └── ScrollToTop
│  │     ├── ScrollToTop.jsx
│  │     └── index.js
│  ├── json
│  │  └── posts.json
│  ├── pages
│  |  ├── About
│  │  |  ├── About.jsx
│  │  |  └── index.js
│  |  ├── DefaultPage
│  │  |  ├── DefaultPage.jsx
│  │  |  └── index.js
│  |  ├── Home
│  │  |  ├── Home.jsx
│  │  |  └── index.js
│  |  ├── NotFound
│  │  |  ├── NotFound.jsx
│  │  |  └── index.js
│  |  └── Post
│  │     ├── Post.jsx
│  │     └── index.js
│  ├── styles
│  |  ├── abstract
│  │  |  ├── _base.scss
│  │  |  └── _variables.scss
│  |  ├── components
│  │  |  ├── _about.scss
│  │  |  ├── _banner.scss
│  │  |  ├── _footer.scss
│  │  |  ├── _home.scss
│  │  |  ├── _main-button.scss
│  │  |  ├── _menu-link.scss
│  │  |  ├── _menu.scss
│  │  |  ├── _model-post.scss
│  │  |  ├── _not-found.scss
│  │  |  ├── _post-card.scss
│  │  |  └── _posts.js
│  │  ├── style.css
│  │  ├── style.css.map
│  │  └── style.scss
│  ├── main.jsx
│  └── routes.jsx
├── .eslintrc.cjs
├── .gitignore
├── README.md
├── index.html
├── package.json
└── vite.config.js
```

### Getting Started
- Clone the Repository:
  ```
  git clone https://github.com/vanessavargas/reactjs-blog.git
  cd reactjs-blog
  ```
  
- Install Dependencies:
  ```
  npm install
  ```

- Run the Application:
  ```
  npm run dev
  ```

<hr>
<div align="center">
    Developed with ❤️ by VanessaVargas
</div>
