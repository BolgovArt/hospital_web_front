import {adress, adressOfArchive} from '../src/adress_export.js'


const sideButtonList = document.querySelector('.bi-person-lines-fill')
sideButtonList.onclick = () => {
    console.log('тык на заявки !!!!!!!!!')
    try {
        closeArchive()
    } catch (e) {
        console.log(e)
    }
    let i = 0
    if (i === 0) {
        console.log('1')
        openList()
        i++
    }
    if (i === 1) {
        closeList()
        i = 0
    } 
}

const sideButtonArchive = document.querySelector('.bi-server')
sideButtonArchive.onclick = () => {
    try {
        closeList()
    } catch (e) {
        console.log(e)
    }
    let i = 0
    if (i === 0) {
        openArchive()
        i++
    }
    if (i === 1) {
        closeArchive()
        i = 0
    } 
}

function openList () {
// Запрос на первый сервер
    fetch(adress)
    .then(
        response => response.text()
        )
    .then(
        data => {
            const obj = JSON.parse(data)
            return obj
        }
    )
    .then( (obj) => {
        wiewClients(obj)
        
    })
}
function openArchive () {
    // Запрос на второй сервер
        fetch(adressOfArchive)
        .then(
            response => response.text()
            )
        .then(
            data => {
                const obj = JSON.parse(data)
                return obj
            }
        )
        .then( (obj) => {
            archiveList(obj)
        })
}

function closeList() {
    const sideButtonArchive = document.querySelector('.bi-server')
sideButtonArchive.onclick = () => {
    document.querySelector('.titleList').remove()
    try {
        document.querySelector('.windows_of_clients').remove()

    } catch (e) {
        console.log(e)
    }
    openArchive()
}
}
function closeArchive() {
    const sideButtonArchive = document.querySelector('.bi-person-lines-fill')
sideButtonArchive.onclick = () => {
    try {
        document.querySelector('.titleArchive').remove()
        document.querySelector('.windowsArchive').remove()
    } catch (error) {
        console.log(error)
    }

    openList()
}
}


function wiewClients (obj) {
    // создание заголовка
    const titleList = document.createElement('div')
    titleList.classList.add('titleList')
    titleList.insertAdjacentHTML('beforeend',`Заявки:`)
    document.body.appendChild(titleList)
    // ------------------

    // проверка на совпадение
    let filter1 = [] // (потребуется в дальнейшем)
    fetch(adressOfArchive) // Запрос на архив
    .then(response => response.text())
    .then(data => {
            const objFromArchive = JSON.parse(data)
            return objFromArchive
    })
    .then(objFromArchive => {

        let mailArchive = [] // все почтовые адреса из архива
        objFromArchive.forEach(p => {
            mailArchive.push(p.email) 
        })

        const mailClient = obj.map((key)=>{ // все почтовые адреса из необработанного списка
            return key.email
        })
        
        filter1 = mailClient.filter(i => !mailArchive.includes(i)) // список допустимых почт (массив из почт в приходящем списке, которых нет в архиве)
        console.log('filter1: ', filter1)

    })
    .then(() => {
        // Создание окон
        const windowsOfClients = document.createElement('div')
        windowsOfClients.classList.add('windows_of_clients')
        obj.forEach( (b) => {
            // Проверка приходящих списков на допустимость почтового адреса
            filter1.findIndex(function(key) {       // (?): .find и .findIndex - разницы не было 

                // console.log('есть на сервере: ', b.email)    |
                // console.log('допустимая почта: ', key)       |   ~ для наглядности в консоле ~
                // console.log(key === b.email)                 |
                
                console.log('есть на сервере: ', b.email)    
                console.log('допустимая почта: ', key)       
                console.log(key === b.email)                 

                if (key === b.email === true){
                makingRightList()
                }
                function makingRightList() {
                    const problem = []
                    if (b.problemhead === true) {
                        problem.push('головная боль')
                    }
                    if (b.problemtemp === true) {
                        problem.push('температура')
                    }
                    if (b.problemzud === true) {
                        problem.push('кожный зуд')
                    }
                    if (b.problemnose === true) {
                        problem.push('насморк')
                    }
                    if (b.problemhead === false && b.problemtemp === false && b.problemzud === false && b.problemnose === false) {
                        problem.push('жалоб из списка нет')
                        } 
            
                    let netDopProblem = ''
                    if (b.problemDop.length === 0) {
                        netDopProblem = 'нет'
                    }
                    const idOfClient = b.id
                    windowsOfClients.insertAdjacentHTML('beforeend',`
                    <div class = "currentWindow" id="${idOfClient}">
                        <br>
                        <br>
                        <h3>${b.firstName} ${b.secondName}</h3>
                        <p>Телефон: ${b.number}</p>
                        <p>Почта: ${b.email}</p>
            
                        <p>Симптомы: ${problem}</p>
                        
                        <p>Свои жалобы: ${b.problemDop} ${netDopProblem}</p>
            
                        <p>Тяжесть симптомов: ${b.rangeOfProblem}</p>
                        <p>Желаемая дата приема: ${b.date}</p>
                        <div class="desigionButton">
                            <button class="accept">Подтвердить запись</button>
                            <button class="decline">Отклонить запись</button>
                        </div>
                        </div>
                    `)
                    document.body.appendChild(windowsOfClients)
                }
            })
        })
        // ------------

        // работа с кнопками "принять" "отклонить"
        windowsOfClients.addEventListener("click", function (event) {

            const acceptPerson = event.target.closest('.accept')
            if (acceptPerson != null) {
                eventProcess(true)
                deleteClientForm()
            }

            const declinePerson = event.target.closest('.decline')
            if (declinePerson != null) {
                eventProcess(false)
                deleteClientForm()
            }

            function eventProcess (w) {
                const currentId = event.target.closest('.currentWindow').id - 1
                console.log(currentId)
                obj[currentId].status = w
                console.log(obj)
                let newObj = obj[currentId]
                console.log(newObj)
                fetch(adressOfArchive, {
                    method: 'post',
                    headers: {'Content-type':'application/json',},
                    body: JSON.stringify(newObj)})
            }

            function deleteClientForm () {
                const del = event.target.closest('.currentWindow')
                del.remove()
            }
        })
    })
}

function archiveList (data) {
    const titleArchive = document.createElement('div')
    titleArchive.classList.add('titleArchive')
    titleArchive.insertAdjacentHTML('beforeend',`Архив:`)
    document.body.appendChild(titleArchive)

    const windowsArchive = document.createElement('div')
    windowsArchive.classList.add('windowsArchive')
    data.forEach(b => {

        let info = ''
        if(b.status === true) {
            info = 'Запись подтверждена'
        } else {
            info = 'Запись отклонена'
        }
        console.log(info)

        const problem = []
        if (b.problemhead === true) {
            problem.push('головная боль')
        }
        if (b.problemtemp === true) {
            problem.push('температура')
        }
        if (b.problemzud === true) {
            problem.push('кожный зуд')
        }
        if (b.problemnose === true) {
            problem.push('насморк')
        }
        if (b.problemhead === false && b.problemtemp === false && b.problemzud === false && b.problemnose === false) {
            problem.push('жалоб из списка нет')
            } 

            let netDopProblem = ''
            if (b.problemDop.length === 0) {
                netDopProblem = 'нет'
            }


        windowsArchive.insertAdjacentHTML('beforeend',`
        <div class = "currentWindow">
            <br>
            <br>
            <h3>${b.firstName} ${b.secondName} - ${info}</h3>
            <p>Телефон: ${b.number}</p>
            <p>Почта: ${b.email}</p>

            <p>Симптомы: ${problem}</p>
            
            <p>Свои жалобы: ${b.problemDop} ${netDopProblem}</p>

            <p>Тяжесть симптомов: ${b.rangeOfProblem}</p>
            <p>Желаемая дата приема: ${b.date}</p>
            </div>
        `)
        document.body.appendChild(windowsArchive)
    })
}