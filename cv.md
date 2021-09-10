# Kaniusheuski Artsiom
***
## _Contact information_
- Phone: +375 33 693 59 05
- E-mail: konusevskiart@gmail.com
- Telegram: +375 33 693 59 05
***
## _About Myself:_
My name is Artsiom Kaniusheuski, I am 27 years old and I want to be a front-end developer. When I wrote my first line in html, it was the famous phrase 'Hello world', it was very exciting to create something out of nothing with your own hands and see the result. Since then, every task, every mini-project I have done has strengthened my intention to become a frontend developer. I love that feeling when I look at the result of my work. Day by day, step by step, I improve my skills in programming and English so that in the future I have the opportunity to participate in team development of large projects and become a professional front-tender. After mastering the frontend at the proper level, I plan to study the backend. In general, that's all, thanks for your time.         
***
## _Skills_
- HTML5, CSS3
- SASS
- JavaScript (ES5, ES6, OOP, DOM)
- Git, GitHub
- Webpack (basic)
- React, Redux (TypeScript) in process 
***
## _Code examples_ 
```javascript
const deepCopy = (item) => {
  let copy;
  if (typeof item === 'object' && item !== null) {
    if (Array.isArray(item)) {
      copy = item.map((el) => deepCopy(el));
    } else {
      copy = {};
      for (let key in item) {
        copy[key] = deepCopy(item[key]);
      }
    }
  } else {
    copy = item;
  }
  return copy;
}
```
***
## _Experience_
- professional Javascript course at IT Academy, where I performed many different tasks ([link to tasks](https://github.com/KonushevskiArt/homework))
- link to my graduation project ([galaxy](https://github.com/KonushevskiArt/homework))
- link to my another little project ([sticker](https://github.com/KonushevskiArt/homework))
***
## _Education_
- I completed the Professional Javascript course at the IT Academy. 
- I also watched many different YouTube videos about the web interface (Vladilen Minin, webDev, Dmitry Lavrik, etc).
- And I use sites like MDN Web Docs, LernJs, React doc and others.
***
## _Languages_ 
- Russian (native)
- English (A2)