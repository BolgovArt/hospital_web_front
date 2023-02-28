/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "autorization": () => (/* binding */ autorization)
/* harmony export */ });
function autorization() {
  var makeWindow = document.createElement('div');
  makeWindow.classList.add('fon');
  makeWindow.insertAdjacentHTML('beforeend', "\n    <div class=\"window\">\n        <div class=\"header\">\n            <h1 class=\"title\">\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F</h1>\n            <span class=\"border-close\"><span class=\"close\">&times;</span></span>\n        </div>\n        <div class=\"body\">\n            <h2>\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043B\u043E\u0433\u0438\u043D \u0438 \u043F\u0430\u0440\u043E\u043B\u044C</h2>\n            <br>\n            <input id=\"loginadmin\" placeholder=\"\u043B\u043E\u0433\u0438\u043D\">\n            <br>\n            <input id=\"passadmin\" placeholder=\"\u043F\u0430\u0440\u043E\u043B\u044C\">\n            <br>\n            <button id=\"buttonforcheckloginpass\"><a href=\"./adminpage.html\" target=\"_blank\" style=\"text-decoration: none; color: black; \">\u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C</a></button>\n            \n        <div class=\"footer\">\n\n        </div>\n    </div>\n    ");
  document.body.appendChild(makeWindow);
}

/***/ }),

/***/ "./guest.js":
/*!******************!*\
  !*** ./guest.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendDataToAdmin": () => (/* binding */ sendDataToAdmin),
/* harmony export */   "showWindowForm": () => (/* binding */ showWindowForm)
/* harmony export */ });
/* harmony import */ var _src_adress_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/adress_export */ "../src/adress_export.js");
/* harmony import */ var _src_isValid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/isValid.js */ "../src/isValid.js");



// const adress = 'http://localhost:3003/firstDataBase'

function showWindowForm() {
  var makeWindow = document.createElement('div');
  makeWindow.classList.add('fon');
  makeWindow.insertAdjacentHTML('beforeend', "\n    <div class=\"window\">\n        <div class=\"header\">\n            <h1 class=\"title\">\u0417\u0430\u043F\u0438\u0441\u044C \u043D\u0430 \u043F\u0440\u0438\u0451\u043C</h1>\n            <span class=\"border-close\"><span class=\"close\">&times;</span></span>\n        </div>\n        <div class=\"body\">\n            <h2>\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0444\u043E\u0440\u043C\u0443</h2>\n\n            <div class = \"nameDiv\">\n                <label>\u0418\u043C\u044F</label>\n                <input type=\"text\" placeholder=\"\u0418\u0432\u0430\u043D\" id=\"firstname\">\n            </div> \n            <br>   \n            <div class = \"secondNameDiv\">\n                <label>\u0424\u0430\u043C\u0438\u043B\u0438\u044F</label>\n                <input type=\"text\" placeholder=\"\u0418\u0432\u0430\u043D\u043E\u0432\" id=\"secondname\">\n            </div>\n            \n            <br>\n            <div class = \"numberDiv\">\n                <label>\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430</label>\n                <input type=\"number\" placeholder=\"+7-\u0425\u0425\u0425-\u0425\u0425\u0425-\u0425\u0425-\u0425\u0425\" id=\"number\">\n            </div> \n            <br>\n            <div class = \"emailDiv\">\n                <label>\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430</label>\n                <input type=\"email\" placeholder=\"\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435\" id=\"email\">\n            </div>    \n            <br>\n            <div class = \"probpemsDiv\">\n                <label>\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0434\u043D\u0443 \u0438\u043B\u0438 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043F\u0440\u0438\u0447\u0438\u043D \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u044F:</label>\n                <br>\n                <input type=\"checkbox\" id=\"problemhead\"> \u0413\u043E\u043B\u043E\u0432\u043D\u044B\u0435 \u0431\u043E\u043B\u0438\n                <br>\n                <input type=\"checkbox\" id=\"problemtemp\"> \u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430\n                <br>\n                <input type=\"checkbox\" id=\"problemzud\"> \u041A\u043E\u0436\u043D\u044B\u0439 \u0437\u0443\u0434\n                <br>\n                <input type=\"checkbox\" id=\"problemnose\"> \u0417\u0430\u043B\u043E\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u043D\u043E\u0441\u0430\n            </div> \n            <br>\n            <div class = \"probpemDopDiv\">\n                <label>\u0415\u0441\u043B\u0438 \u0412\u0430\u0448\u0435\u0439 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u043D\u0435\u0442 \u0432 \u0441\u043F\u0438\u0441\u043A\u0435, \u043E\u043F\u0438\u0448\u0438\u0442\u0435 \u0435\u0435 \u043D\u0438\u0436\u0435:</label>\n                <br>\n                <textarea type=\"message\" cols=\"30\" rows=\"4\" id=\"problemdop\"></textarea>\n            </div>\n            <br>\n            <div class = \"rangeDiv\">\n                <label>\u041E\u0446\u0435\u043D\u0438\u0442\u0435 \u0442\u044F\u0436\u0435\u0441\u0442\u044C \u0441\u0438\u043C\u043F\u0442\u043E\u043C\u043E\u0432 \u043F\u043E 10-\u0442\u0438 \u0431\u0430\u043B\u044C\u043D\u043E\u0439 \u0448\u043A\u0430\u043B\u0435:</label>\n                <input type=\"range\" min=\"1\" max=\"10\" step=\"1\" id=\"rangeofproblem\">\n            </div> \n            <br>\n            <div class = \"dateDiv\">    \n                <label>\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0436\u0435\u043B\u0430\u0435\u043C\u0443\u044E \u0434\u0430\u0442\u0443 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F \u0432\u0440\u0430\u0447\u0430</label>\n                <input type=\"date\" id=\"date\">\n            </div>\n        <br>\n            <button type=\"submit\" id=\"submit\">\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0444\u043E\u0440\u043C\u0443</button>\n\n        </div>\n        <div class=\"footer\">\n\n        </div>\n    </div>\n    ");
  document.body.appendChild(makeWindow);
}
function sendDataToAdmin() {
  var submit = document.querySelector('#submit').onclick = function () {
    var firstNameDom = document.querySelector('#firstname');
    var secondNameDom = document.querySelector('#secondname');
    var numberDom = document.querySelector('#number');
    var emailDom = document.querySelector('#email');

    // let firstName = firstNameDom.value
    // let secondName = secondNameDom.value
    var number = numberDom.value;
    // let email = emailDom.value

    var problemheadDom = document.getElementById('problemhead');
    var problemtempDom = document.getElementById('problemtemp');
    var problemzudDom = document.getElementById('problemzud');
    var problemnoseDom = document.getElementById('problemnose');
    var problemhead = problemheadDom.checked;
    var problemtemp = problemtempDom.checked;
    var problemzud = problemzudDom.checked;
    var problemnose = problemnoseDom.checked;
    var problemDopDom = document.querySelector('#problemdop');
    var rangeOfProblemDom = document.querySelector('#rangeofproblem');
    var dateDom = document.querySelector('#date');
    var problemDop = problemDopDom.value;
    var rangeOfProblem = rangeOfProblemDom.value;
    var date = dateDom.value;

    // --- Проверка значений на корректность ---
    var firstName; // (!) 
    if ((0,_src_isValid_js__WEBPACK_IMPORTED_MODULE_1__.isValidNameAndSurname)(firstNameDom.value)) {
      var back = function back() {
        // (?) почему без функции не работает?
        firstName = firstNameDom.value;
        console.log(firstName);
        // return firstName              // (!)
      };

      back();
    } else {
      var errorName = document.querySelector('.nameDiv');
      errorName.insertAdjacentHTML('beforeend', "\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-exclamation-triangle-fill\" viewBox=\"0 0 16 16\">\n             <path d=\"M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z\"/>\n            </svg>\n            ");
      // document.nameDiv.(errorName) 
    }

    var secondName;
    if ((0,_src_isValid_js__WEBPACK_IMPORTED_MODULE_1__.isValidNameAndSurname)(secondNameDom.value)) {
      var _back = function _back() {
        secondName = secondNameDom.value;
      };
      _back();
    } else {
      var _errorName = document.querySelector('.secondNameDiv');
      _errorName.insertAdjacentHTML('beforeend', "\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-exclamation-triangle-fill\" viewBox=\"0 0 16 16\">\n             <path d=\"M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z\"/>\n            </svg>\n            ");
      // document.secondNameDiv.appendChild(errorName)
    }

    var email;
    if ((0,_src_isValid_js__WEBPACK_IMPORTED_MODULE_1__.isValidEmail)(emailDom.value)) {
      var _back2 = function _back2() {
        email = emailDom.value;
      };
      _back2();
      console.log(email);
    } else {
      var _errorName2 = document.querySelector('.emailDiv');
      _errorName2.insertAdjacentHTML('beforeend', "\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-exclamation-triangle-fill\" viewBox=\"0 0 16 16\">\n             <path d=\"M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z\"/>\n            </svg>\n            ");
      // document.secondNameDiv.appendChild(errorName)
    }

    if (!!firstName && !!secondName && !!email) {
      try {
        var removeIcons = document.querySelectorAll('.bi');
        console.log(removeIcons);
        removeIcons.forEach(function (i) {
          i.remove();
        });
      } catch (error) {
        console.log(error);
      }
      fetch(_src_adress_export__WEBPACK_IMPORTED_MODULE_0__.adress, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
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
          date: date
        })
      }).then(function () {
        firstNameDom.value = '';
        secondNameDom.value = '';
        numberDom.value = '';
        emailDom.value = '';
        problemheadDom.checked = '';
        problemtempDom.checked = '';
        problemzudDom.checked = '';
        problemnoseDom.checked = '';
        problemDopDom.value = '';
        rangeOfProblemDom.value = '';
        dateDom.value = '';
        var succsess = document.createElement('div');
        succsess.classList.add('succsess');
        succsess.insertAdjacentHTML('afterbegin', "\n                <div class=\"items\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" fill=\"currentColor\" class=\"bi bi-clipboard-check-fill\" viewBox=\"0 0 16 16\">\n                    <path d=\"M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z\"/>\n                    <path d=\"M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1Zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708Z\"/>\n                </svg>\n                <h1>\u0412\u0430\u0448\u0430 \u0437\u0430\u044F\u0432\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430</h1>\n                </div>\n                ");
        document.body.appendChild(succsess);
        var fonblur = document.querySelector('.fon');
        fonblur.classList.add('backblur');
        fonblur.onclick = function () {
          // fonblur.remove()
          succsess.remove();
          fonblur.classList.remove('backblur');
        };
        succsess.onclick = function () {
          // fonblur.remove()
          succsess.remove();
          fonblur.classList.remove('backblur');
        };
      });
    }
  };
}

/***/ }),

/***/ "../src/adress_export.js":
/*!*******************************!*\
  !*** ../src/adress_export.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "adress": () => (/* binding */ adress),
/* harmony export */   "adressOfArchive": () => (/* binding */ adressOfArchive)
/* harmony export */ });
var adress = 'http://localhost:3003/firstDataBase';
var adressOfArchive = 'http://localhost:3004/secondDataBase';


/***/ }),

/***/ "../src/isValid.js":
/*!*************************!*\
  !*** ../src/isValid.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isValidEmail": () => (/* binding */ isValidEmail),
/* harmony export */   "isValidNameAndSurname": () => (/* binding */ isValidNameAndSurname)
/* harmony export */ });
function isValidNameAndSurname(value) {
  return value.length >= 2;
}
var EMAIL_REGEXP = /^(((?:(?![\t-\r "\(\),\.:-<>@\[\]\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uD800-\uDFFF\uFEFF])[\s\S]|[\uD800-\uDBFF][\uDC00-\uDFFF])+(\.(?:(?![\t-\r "\(\),\.:-<>@\[\]\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uD800-\uDFFF\uFEFF])[\s\S]|[\uD800-\uDBFF][\uDC00-\uDFFF])+)*)|("(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+"))@(((?:(?![\t-\r "\(\),\.:-<>@\[\]\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uD800-\uDFFF\uFEFF])[\s\S]|[\uD800-\uDBFF][\uDC00-\uDFFF])+\.)+(?:(?![\t-\r "\(\),\.:-<>@\[\]\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uD800-\uDFFF\uFEFF])[\s\S]|[\uD800-\uDBFF][\uDC00-\uDFFF]){2,})$/i;
function isValidEmail(value) {
  return EMAIL_REGEXP.test(value);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./guestpage.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _guest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guest.js */ "./guest.js");
/* harmony import */ var _admin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.js */ "./admin.js");


var guestButton = document.querySelector('.guest');
guestButton.onclick = function () {
  (0,_guest_js__WEBPACK_IMPORTED_MODULE_0__.showWindowForm)();
  (0,_guest_js__WEBPACK_IMPORTED_MODULE_0__.sendDataToAdmin)();
};
var adminButton = document.querySelector('.admin');
adminButton.onclick = function () {
  (0,_admin_js__WEBPACK_IMPORTED_MODULE_1__.autorization)();
};
})();

/******/ })()
;
//# sourceMappingURL=guestpage-bundle.js.map