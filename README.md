# Manvi's Developer Portfolio ⚡️ [![GitHub](https://img.shields.io/github/license/Manvi/portfolio?color=blue)](https://github.com/Manvi/portfolio/blob/main/LICENSE) [![GitHub stars](https://img.shields.io/github/stars/Manvi/portfolio)](https://github.com/Manvi/portfolio/stargazers)

## 🎉 A clean, beautiful and responsive portfolio built by me — [Manvi Panjwani](https://www.linkedin.com/in/manvi-panjwani/)!

This portfolio is built using React, deployed via GitHub Pages, and fully customizable from a single config file. Designed to showcase my projects, experience, and skills in a clean and professional format.

<p align="center">
  <kbd>
    <img src="https://user-images.githubusercontent.com/53429438/106779355-e9cd9e80-666c-11eb-9417-8a4b54441bc6.gif" />
  </kbd>
</p>

Just change `src/portfolio.js` to personalize your portfolio. Customize the theme globally by editing `src/_globalColor.scss`. Use it as-is or style it your way!

If you find this useful, feel free to [contribute](https://github.com/Manvi/portfolio/issues) or [star 🌟 the repo](https://github.com/Manvi/portfolio/stargazers)!

---

## Table of Contents
- [Portfolio Sections](#portfolio-sections)
- [Getting Started](#getting-started)
- [How To Use](#how-to-use)
- [GitHub Integration](#github-integration)
- [Medium Blog Integration](#medium-blog-integration)
- [Customization](#customization)
- [Deployment](#deployment)
- [Tech Stack](#tech-stack)
- [Illustrations](#illustrations)

---

## Portfolio Sections

✔️ Summary and About Me  
✔️ Skills  
✔️ Education  
✔️ Work Experience  
✔️ Projects  
✔️ Achievements & Certifications  
✔️ Contact Info  

---

## Getting Started

You’ll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) installed. Or use [Docker](https://www.docker.com/products/docker-desktop).

```bash
node@v16 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
```

### Docker Commands

```bash
# Build image
docker build -t portfolio:latest .

# Run container
docker run -t -p 3000:3000 portfolio:latest
```

---

## How To Use

```bash
# Clone the repository
git clone https://github.com/Manvi/portfolio.git

# Navigate into the directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm start
```

---

## GitHub Integration

Create a `.env` file in the root:

```env
REACT_APP_GITHUB_TOKEN="your_token_here"
GITHUB_USERNAME="ManviPanjwani"
USE_GITHUB_DATA="true"
```

Note: Your GitHub token should not have any scopes selected.

---

## Medium Blog Integration

Inside `.env` add:

```env
MEDIUM_USERNAME="your_medium_username"
```

Also update `blogSection.displayMediumBlogs` in `portfolio.js` to `"true"`.

---

## Customization

Update content inside:

- `src/portfolio.js` for text & structure
- `src/_globalColor.scss` for theme colors
- `src/assets/lottie` to change animations
- `public/index.html` for page metadata

---

## Deployment

### Deploy on GitHub Pages

1. In `package.json`, set your homepage:
```json
"homepage": "https://ManviPanjwani.github.io/portfolio"
```

2. Deploy:
```bash
npm run build
npm run deploy
```

### Deploy on Netlify

Click below to deploy using Netlify:

[![Deploy To Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Manvi/portfolio)

---

## Tech Stack

- React
- Sass
- JavaScript
- Lottie
- GitHub Pages
- Docker

---

## Illustrations

- [Undraw](https://undraw.co/)
- [LottieFiles](https://lottiefiles.com/)

---

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/Manvi/portfolio/blob/main/LICENSE) file for details.
