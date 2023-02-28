import {adress} from '../src/adress_export'
import {isValidNameAndSurname, isValidEmail} from '../src/isValid.js'

// const adress = 'http://localhost:3003/firstDataBase'


export function showWindowForm () {
    const makeWindow = document.createElement('div')
    makeWindow.classList.add('fon')
    makeWindow.insertAdjacentHTML('beforeend', `
    <div class="window">
        <div class="header">
            <h1 class="title">Запись на приём</h1>
            <span class="border-close"><span class="close">&times;</span></span>
        </div>
        <div class="body">
            <h2>Заполните форму</h2>

            <div class = "nameDiv">
                <label>Имя</label>
                <input type="text" placeholder="Иван" id="firstname">
            </div> 
            <br>   
            <div class = "secondNameDiv">
                <label>Фамилия</label>
                <input type="text" placeholder="Иванов" id="secondname">
            </div>
            
            <br>
            <div class = "numberDiv">
                <label>Номер телефона</label>
                <input type="number" placeholder="+7-ХХХ-ХХХ-ХХ-ХХ" id="number">
            </div> 
            <br>
            <div class = "emailDiv">
                <label>Электронная почта</label>
                <input type="email" placeholder="Обязательное поле" id="email">
            </div>    
            <br>
            <div class = "probpemsDiv">
                <label>Выберите одну или несколько причин обращения:</label>
                <br>
                <input type="checkbox" id="problemhead"> Головные боли
                <br>
                <input type="checkbox" id="problemtemp"> Температура
                <br>
                <input type="checkbox" id="problemzud"> Кожный зуд
                <br>
                <input type="checkbox" id="problemnose"> Заложенность носа
            </div> 
            <br>
            <div class = "probpemDopDiv">
                <label>Если Вашей проблемы нет в списке, опишите ее ниже:</label>
                <br>
                <textarea type="message" cols="30" rows="4" id="problemdop"></textarea>
            </div>
            <br>
            <div class = "rangeDiv">
                <label>Оцените тяжесть симптомов по 10-ти бальной шкале:</label>
                <input type="range" min="1" max="10" step="1" id="rangeofproblem">
            </div> 
            <br>
            <div class = "dateDiv">    
                <label>Выберите желаемую дату посещения врача</label>
                <input type="date" id="date">
            </div>
        <br>
            <button type="submit" id="submit">Отправить форму</button>

        </div>
        <div class="footer">

        </div>
    </div>
    `)
    document.body.appendChild(makeWindow)
}


export function sendDataToAdmin() {
    let submit = document.querySelector('#submit').onclick = () => {
        let firstNameDom = document.querySelector('#firstname')
        let secondNameDom = document.querySelector('#secondname')
        let numberDom = document.querySelector('#number')
        let emailDom = document.querySelector('#email')

        // let firstName = firstNameDom.value
        // let secondName = secondNameDom.value
        let number = numberDom.value
        // let email = emailDom.value

        let problemheadDom = document.getElementById('problemhead')
        let problemtempDom = document.getElementById('problemtemp')
        let problemzudDom = document.getElementById('problemzud')
        let problemnoseDom = document.getElementById('problemnose')
        
        let problemhead = problemheadDom.checked
        let problemtemp = problemtempDom.checked
        let problemzud = problemzudDom.checked
        let problemnose = problemnoseDom.checked

        let problemDopDom = document.querySelector('#problemdop')
        let rangeOfProblemDom = document.querySelector('#rangeofproblem')
        let dateDom = document.querySelector('#date')

        let problemDop = problemDopDom.value
        let rangeOfProblem = rangeOfProblemDom.value
        let date = dateDom.value

        // --- Проверка значений на корректность ---
        let firstName                            // (!) 
        if (isValidNameAndSurname(firstNameDom.value)) {
            function back () {  // (?) почему без функции не работает?
                firstName = firstNameDom.value
                console.log(firstName)
                // return firstName              // (!)
            }
            back()
        } else {
            const errorName = document.querySelector('.nameDiv')
            errorName.insertAdjacentHTML('beforeend', `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
             <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            `)
            // document.nameDiv.(errorName) 
        }
        let secondName
        if (isValidNameAndSurname(secondNameDom.value)) {
            function back () {
                secondName = secondNameDom.value
            }
            back()
        } else {
            const errorName = document.querySelector('.secondNameDiv')
            errorName.insertAdjacentHTML('beforeend', `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
             <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            `)
            // document.secondNameDiv.appendChild(errorName)
        }
        let email
        if (isValidEmail(emailDom.value)) {
            function back () {
                email = emailDom.value
            }
            back()
            console.log(email)
        } else {
            const errorName = document.querySelector('.emailDiv')
            errorName.insertAdjacentHTML('beforeend', `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
             <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            `)
            // document.secondNameDiv.appendChild(errorName)
        }


        if (!!firstName && !!secondName && !! email) {
            try {
                const removeIcons = document.querySelectorAll('.bi')
                console.log(removeIcons)
                removeIcons.forEach (function (i) {
                    i.remove()
                }) 
            } catch (error) {
                console.log(error)
            }
             
            fetch(adress, {
                method: "POST",
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify ({
                    firstName: firstName,
                    secondName: secondName,
                    number: number,
                    email: email,

                    problemhead: problemhead,
                    problemtemp: problemtemp,
                    problemzud: problemzud,
                    problemnose: problemnose,

                    problemDop: problemDop,
                    rangeOfProblem: rangeOfProblem,
                    date: date,
                    
                })
            }). then (()=>{

                firstNameDom.value = ''
                secondNameDom.value = ''
                numberDom.value = ''
                emailDom.value = ''

                problemheadDom.checked = ''
                problemtempDom.checked = ''
                problemzudDom.checked = ''
                problemnoseDom.checked = ''

                problemDopDom.value = ''
                rangeOfProblemDom.value = ''
                dateDom.value = ''

                const succsess = document.createElement('div')
                succsess.classList.add('succsess')
                succsess.insertAdjacentHTML('afterbegin', `
                <div class="items">
                <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" class="bi bi-clipboard-check-fill" viewBox="0 0 16 16">
                    <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z"/>
                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1Zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708Z"/>
                </svg>
                <h1>Ваша заявка отправлена</h1>
                </div>
                `)
                document.body.appendChild(succsess) 
                const fonblur = document.querySelector('.fon')
                fonblur.classList.add('backblur') 

                fonblur.onclick = () => {
                    // fonblur.remove()
                    succsess.remove()
                    fonblur.classList.remove('backblur')
                }
                succsess.onclick = () => {
                    // fonblur.remove()
                    succsess.remove()
                    fonblur.classList.remove('backblur')
                }
            })
        }
    }
}

