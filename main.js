var content = `/*
*你好，我叫董晓兴
*我将以动画的形式介绍我自己
*只用文字太单调了
*我就用代码来介绍吧
*先来一些样式
*/
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background: rgb(222,222,222);
    font-size: 16px;
    transition: all 1s;
}
#code {
    border: 1px solid red;
    padding: 16px;
}
/*
*我要给代码来点高亮
*/
.token.selector {
    color: #690;
}
.token.punctuation {
    color: #999;
}
.token.property {
    color: #905;
}
.token.function {
    color: #DD4A68;
}
/*加点3D动画*/
#code{
    transform: rotate(360deg)
}
/*不玩了，我来介绍一下我自己吧
*我需要一张白纸
*/
`

let n = 0
let timer = setInterval(() => {
    code.innerHTML = Prism.highlight(content.substr(0,n), Prism.languages.css, 'css');
    style.innerHTML = content.substr(0,n)
    n += 1
    if (n > content.length) {
        window.clearInterval(timer)
        f1.call()
        f2.call()
    }
}, 0)

function f1 () {
    let paper = document.createElement('pre')
    paper.id = 'paper'
    document.body.appendChild(paper)
}
function f2 () {
    let content1 = `
    #paper{
        border: 1px solid green;
        position: fixed;
        top: 0;
        right: 0;
        width: 50%;
    }
    #code {
        height: 100vh;
        width: 50%;
        overflow: scroll;
    }
    `
    let n = 0
    let timer = setInterval(()=>{
        code.innerHTML = Prism.highlight((content + content1.substr(0,n)), Prism.languages.css, 'css')
        style.innerHTML = content +content1.substr(0,n)
        code.scrollTop =code.scrollHeight
        n += 1
        if (n > content1.length) {
            window.clearInterval(timer)
        }
    },0)
}
