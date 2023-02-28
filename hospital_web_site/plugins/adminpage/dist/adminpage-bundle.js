/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  !*** ./adminpage.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_adress_export_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/adress_export.js */ "../src/adress_export.js");

var sideButtonList = document.querySelector('.bi-person-lines-fill');
sideButtonList.onclick = function () {
  console.log('тык на заявки !!!!!!!!!');
  try {
    closeArchive();
  } catch (e) {
    console.log(e);
  }
  var i = 0;
  if (i === 0) {
    console.log('1');
    openList();
    i++;
  }
  if (i === 1) {
    closeList();
    i = 0;
  }
};
var sideButtonArchive = document.querySelector('.bi-server');
sideButtonArchive.onclick = function () {
  try {
    closeList();
  } catch (e) {
    console.log(e);
  }
  var i = 0;
  if (i === 0) {
    openArchive();
    i++;
  }
  if (i === 1) {
    closeArchive();
    i = 0;
  }
};
function openList() {
  // Запрос на первый сервер
  fetch(_src_adress_export_js__WEBPACK_IMPORTED_MODULE_0__.adress).then(function (response) {
    return response.text();
  }).then(function (data) {
    var obj = JSON.parse(data);
    return obj;
  }).then(function (obj) {
    wiewClients(obj);
  });
}
function openArchive() {
  // Запрос на второй сервер
  fetch(_src_adress_export_js__WEBPACK_IMPORTED_MODULE_0__.adressOfArchive).then(function (response) {
    return response.text();
  }).then(function (data) {
    var obj = JSON.parse(data);
    return obj;
  }).then(function (obj) {
    archiveList(obj);
  });
}
function closeList() {
  var sideButtonArchive = document.querySelector('.bi-server');
  sideButtonArchive.onclick = function () {
    document.querySelector('.titleList').remove();
    try {
      document.querySelector('.windows_of_clients').remove();
    } catch (e) {
      console.log(e);
    }
    openArchive();
  };
}
function closeArchive() {
  var sideButtonArchive = document.querySelector('.bi-person-lines-fill');
  sideButtonArchive.onclick = function () {
    try {
      document.querySelector('.titleArchive').remove();
      document.querySelector('.windowsArchive').remove();
    } catch (error) {
      console.log(error);
    }
    openList();
  };
}
function wiewClients(obj) {
  // создание заголовка
  var titleList = document.createElement('div');
  titleList.classList.add('titleList');
  titleList.insertAdjacentHTML('beforeend', "\u0417\u0430\u044F\u0432\u043A\u0438:");
  document.body.appendChild(titleList);
  // ------------------

  // проверка на совпадение
  var filter1 = []; // (потребуется в дальнейшем)
  fetch(_src_adress_export_js__WEBPACK_IMPORTED_MODULE_0__.adressOfArchive) // Запрос на архив
  .then(function (response) {
    return response.text();
  }).then(function (data) {
    var objFromArchive = JSON.parse(data);
    return objFromArchive;
  }).then(function (objFromArchive) {
    var mailArchive = []; // все почтовые адреса из архива
    objFromArchive.forEach(function (p) {
      mailArchive.push(p.email);
    });
    var mailClient = obj.map(function (key) {
      // все почтовые адреса из необработанного списка
      return key.email;
    });
    filter1 = mailClient.filter(function (i) {
      return !mailArchive.includes(i);
    }); // список допустимых почт (массив из почт в приходящем списке, которых нет в архиве)
    console.log('filter1: ', filter1);
  }).then(function () {
    // Создание окон
    var windowsOfClients = document.createElement('div');
    windowsOfClients.classList.add('windows_of_clients');
    obj.forEach(function (b) {
      // Проверка приходящих списков на допустимость почтового адреса
      filter1.findIndex(function (key) {
        // (?): .find и .findIndex - разницы не было 

        // console.log('есть на сервере: ', b.email)    |
        // console.log('допустимая почта: ', key)       |   ~ для наглядности в консоле ~
        // console.log(key === b.email)                 |

        console.log('есть на сервере: ', b.email);
        console.log('допустимая почта: ', key);
        console.log(key === b.email);
        if (key === b.email === true) {
          makingRightList();
        }
        function makingRightList() {
          var problem = [];
          if (b.problemhead === true) {
            problem.push('головная боль');
          }
          if (b.problemtemp === true) {
            problem.push('температура');
          }
          if (b.problemzud === true) {
            problem.push('кожный зуд');
          }
          if (b.problemnose === true) {
            problem.push('насморк');
          }
          if (b.problemhead === false && b.problemtemp === false && b.problemzud === false && b.problemnose === false) {
            problem.push('жалоб из списка нет');
          }
          var netDopProblem = '';
          if (b.problemDop.length === 0) {
            netDopProblem = 'нет';
          }
          var idOfClient = b.id;
          windowsOfClients.insertAdjacentHTML('beforeend', "\n                    <div class = \"currentWindow\" id=\"".concat(idOfClient, "\">\n                        <br>\n                        <br>\n                        <h3>").concat(b.firstName, " ").concat(b.secondName, "</h3>\n                        <p>\u0422\u0435\u043B\u0435\u0444\u043E\u043D: ").concat(b.number, "</p>\n                        <p>\u041F\u043E\u0447\u0442\u0430: ").concat(b.email, "</p>\n            \n                        <p>\u0421\u0438\u043C\u043F\u0442\u043E\u043C\u044B: ").concat(problem, "</p>\n                        \n                        <p>\u0421\u0432\u043E\u0438 \u0436\u0430\u043B\u043E\u0431\u044B: ").concat(b.problemDop, " ").concat(netDopProblem, "</p>\n            \n                        <p>\u0422\u044F\u0436\u0435\u0441\u0442\u044C \u0441\u0438\u043C\u043F\u0442\u043E\u043C\u043E\u0432: ").concat(b.rangeOfProblem, "</p>\n                        <p>\u0416\u0435\u043B\u0430\u0435\u043C\u0430\u044F \u0434\u0430\u0442\u0430 \u043F\u0440\u0438\u0435\u043C\u0430: ").concat(b.date, "</p>\n                        <div class=\"desigionButton\">\n                            <button class=\"accept\">\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C</button>\n                            <button class=\"decline\">\u041E\u0442\u043A\u043B\u043E\u043D\u0438\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C</button>\n                        </div>\n                        </div>\n                    "));
          document.body.appendChild(windowsOfClients);
        }
      });
    });
    // ------------

    // работа с кнопками "принять" "отклонить"
    windowsOfClients.addEventListener("click", function (event) {
      var acceptPerson = event.target.closest('.accept');
      if (acceptPerson != null) {
        eventProcess(true);
        deleteClientForm();
      }
      var declinePerson = event.target.closest('.decline');
      if (declinePerson != null) {
        eventProcess(false);
        deleteClientForm();
      }
      function eventProcess(w) {
        var currentId = event.target.closest('.currentWindow').id - 1;
        console.log(currentId);
        obj[currentId].status = w;
        console.log(obj);
        var newObj = obj[currentId];
        console.log(newObj);
        fetch(_src_adress_export_js__WEBPACK_IMPORTED_MODULE_0__.adressOfArchive, {
          method: 'post',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(newObj)
        });
      }
      function deleteClientForm() {
        var del = event.target.closest('.currentWindow');
        del.remove();
      }
    });
  });
}
function archiveList(data) {
  var titleArchive = document.createElement('div');
  titleArchive.classList.add('titleArchive');
  titleArchive.insertAdjacentHTML('beforeend', "\u0410\u0440\u0445\u0438\u0432:");
  document.body.appendChild(titleArchive);
  var windowsArchive = document.createElement('div');
  windowsArchive.classList.add('windowsArchive');
  data.forEach(function (b) {
    var info = '';
    if (b.status === true) {
      info = 'Запись подтверждена';
    } else {
      info = 'Запись отклонена';
    }
    console.log(info);
    var problem = [];
    if (b.problemhead === true) {
      problem.push('головная боль');
    }
    if (b.problemtemp === true) {
      problem.push('температура');
    }
    if (b.problemzud === true) {
      problem.push('кожный зуд');
    }
    if (b.problemnose === true) {
      problem.push('насморк');
    }
    if (b.problemhead === false && b.problemtemp === false && b.problemzud === false && b.problemnose === false) {
      problem.push('жалоб из списка нет');
    }
    var netDopProblem = '';
    if (b.problemDop.length === 0) {
      netDopProblem = 'нет';
    }
    windowsArchive.insertAdjacentHTML('beforeend', "\n        <div class = \"currentWindow\">\n            <br>\n            <br>\n            <h3>".concat(b.firstName, " ").concat(b.secondName, " - ").concat(info, "</h3>\n            <p>\u0422\u0435\u043B\u0435\u0444\u043E\u043D: ").concat(b.number, "</p>\n            <p>\u041F\u043E\u0447\u0442\u0430: ").concat(b.email, "</p>\n\n            <p>\u0421\u0438\u043C\u043F\u0442\u043E\u043C\u044B: ").concat(problem, "</p>\n            \n            <p>\u0421\u0432\u043E\u0438 \u0436\u0430\u043B\u043E\u0431\u044B: ").concat(b.problemDop, " ").concat(netDopProblem, "</p>\n\n            <p>\u0422\u044F\u0436\u0435\u0441\u0442\u044C \u0441\u0438\u043C\u043F\u0442\u043E\u043C\u043E\u0432: ").concat(b.rangeOfProblem, "</p>\n            <p>\u0416\u0435\u043B\u0430\u0435\u043C\u0430\u044F \u0434\u0430\u0442\u0430 \u043F\u0440\u0438\u0435\u043C\u0430: ").concat(b.date, "</p>\n            </div>\n        "));
    document.body.appendChild(windowsArchive);
  });
}
})();

/******/ })()
;
//# sourceMappingURL=adminpage-bundle.js.map