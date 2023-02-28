import {showWindowForm, sendDataToAdmin} from './guest.js'
import {autorization} from './admin.js'


const guestButton = document.querySelector('.guest')
guestButton.onclick = () => {
    showWindowForm()
    sendDataToAdmin()
}

const adminButton = document.querySelector('.admin')
adminButton.onclick = () => {
    autorization()
}