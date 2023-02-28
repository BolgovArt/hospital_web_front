

export function autorization () {
    const makeWindow = document.createElement('div')
    makeWindow.classList.add('fon')
    makeWindow.insertAdjacentHTML('beforeend', `
    <div class="window">
        <div class="header">
            <h1 class="title">Авторизация</h1>
            <span class="border-close"><span class="close">&times;</span></span>
        </div>
        <div class="body">
            <h2>Введите логин и пароль</h2>
            <br>
            <input id="loginadmin" placeholder="логин">
            <br>
            <input id="passadmin" placeholder="пароль">
            <br>
            <button id="buttonforcheckloginpass"><a href="./adminpage.html" target="_blank" style="text-decoration: none; color: black; ">отправить</a></button>
            
        <div class="footer">

        </div>
    </div>
    `)
    document.body.appendChild(makeWindow)
}