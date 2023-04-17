/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deleteCompletedTodoItems = exports.completeTodoItem = exports.addTodoItem = void 0;
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
var formLogin = document.getElementById('login-form');
var errorContainer = document.getElementById('error-container');
var errorMessage = document.getElementById('error-message');
formLogin.addEventListener('click', function (event) { return __awaiter(void 0, void 0, void 0, function () {
    var email, password, response, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                event.preventDefault();
                email = emailInput.value;
                password = passwordInput.value;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, fetch('http://localhost:8010/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ email: email, password: password })
                    })];
            case 2:
                response = _a.sent();
                if (response.status === 200) {
                    window.location.href = "tasks.html";
                    console.log('Logged in successfully');
                }
                else {
                    console.log("Response status code: ".concat(response.status));
                }
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.log(error_1);
                if (errorMessage && errorContainer) {
                    errorMessage.innerText = error_1 ? error_1.toString() : "";
                    errorContainer.classList.remove("hidden");
                }
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
// Create an array to hold our to-do items
var todoList = [];
// Function to add a new to-do item to the list
function addTodoItem(task) {
    var newTodoItem = {
        id: todoList.length + 1,
        task: task,
        completed: false,
    };
    todoList.push(newTodoItem);
    displayTodoList();
}
exports.addTodoItem = addTodoItem;
// Function to mark a to-do item as completed
function completeTodoItem(id) {
    var todoItem = todoList.find(function (item) { return item.id === id; });
    if (todoItem) {
        todoItem.completed = true;
        displayTodoList();
    }
}
exports.completeTodoItem = completeTodoItem;
// Function to delete a completed to-do item
function deleteCompletedTodoItems() {
    todoList = todoList.filter(function (item) { return !item.completed; });
    displayTodoList();
}
exports.deleteCompletedTodoItems = deleteCompletedTodoItems;
// Function to display the to-do list
function displayTodoList() {
    var taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    todoList.forEach(function (item) {
        var li = document.createElement('li');
        var span = document.createElement('span');
        span.innerText = item.task;
        li.appendChild(span);
        var completeButton = document.createElement('button');
        completeButton.innerText = 'Complete';
        completeButton.id = "completeButton-".concat(item.id);
        completeButton.className = "complete";
        completeButton.addEventListener('click', function () { return completeTodoItem(item.id); });
        li.appendChild(completeButton);
        var deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.id = "deleteButton-".concat(item.id);
        deleteButton.className = "delete";
        deleteButton.addEventListener('click', function () { return deleteTodoItem(item.id); });
        li.appendChild(deleteButton);
        if (item.completed) {
            li.classList.add('complete');
        }
        taskList.appendChild(li);
    });
}
// Event listener to handle form submission
var formTask = document.getElementById('addTaskBtn');
formTask.addEventListener('click', function (event) {
    event.preventDefault();
    var taskInput = document.getElementById('taskInput');
    var task = taskInput.value.trim();
    if (task) {
        addTodoItem(task);
        taskInput.value = '';
        taskInput.focus();
    }
});
function deleteTodoItem(id) {
    var todoIndex = todoList.findIndex(function (item) { return item.id === id; });
    if (todoIndex >= 0) {
        todoList.splice(todoIndex, 1);
        displayTodoList();
    }
}
// Initial display of the to-do list
displayTodoList();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxFQUFFO1FBQ2xCLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlCLGVBQWUsRUFBRSxDQUFDO0tBQ25CO0FBQ0gsQ0FBQztBQUVELG9DQUFvQztBQUNwQyxlQUFlLEVBQUUsQ0FBQzs7Ozs7Ozs7VUVuSXBCO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvdHMvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdG9kb3RzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb3RzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvdHMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuY29uc3QgcGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbmNvbnN0IGZvcm1Mb2dpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1mb3JtJykgYXMgSFRNTEZvcm1FbGVtZW50O1xyXG5jb25zdCBlcnJvckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvci1jb250YWluZXInKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yLW1lc3NhZ2UnKSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuXHJcbmZvcm1Mb2dpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICBcclxuICAgIGNvbnN0IGVtYWlsID0gZW1haWxJbnB1dC52YWx1ZTtcclxuICAgIGNvbnN0IHBhc3N3b3JkID0gcGFzc3dvcmRJbnB1dC52YWx1ZTtcclxuXHJcbiAgICBcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAxMC9sb2dpbicsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCB9KVxyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcInRhc2tzLmh0bWxcIjtcclxuICAgICAgICBjb25zb2xlLmxvZygnTG9nZ2VkIGluIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBSZXNwb25zZSBzdGF0dXMgY29kZTogJHtyZXNwb25zZS5zdGF0dXN9YCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgaWYgKGVycm9yTWVzc2FnZSAmJiBlcnJvckNvbnRhaW5lcikge1xyXG4gICAgICAgIGVycm9yTWVzc2FnZS5pbm5lclRleHQgPSBlcnJvciA/IGVycm9yLnRvU3RyaW5nKCkgOiBcIlwiO1xyXG4gICAgICAgIGVycm9yQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgIH0gICAgICBcclxuICAgIH1cclxuICB9KTtcclxuICBcclxuLy8gRGVmaW5lIGFuIGludGVyZmFjZSBmb3Igb3VyIHRvLWRvIGl0ZW1cclxuaW50ZXJmYWNlIFRvZG9JdGVtIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICB0YXNrOiBzdHJpbmc7XHJcbiAgICBjb21wbGV0ZWQ6IGJvb2xlYW47XHJcbiAgfVxyXG4gIFxyXG4gIC8vIENyZWF0ZSBhbiBhcnJheSB0byBob2xkIG91ciB0by1kbyBpdGVtc1xyXG4gIGxldCB0b2RvTGlzdDogVG9kb0l0ZW1bXSA9IFtdO1xyXG4gIFxyXG4gIC8vIEZ1bmN0aW9uIHRvIGFkZCBhIG5ldyB0by1kbyBpdGVtIHRvIHRoZSBsaXN0XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGFkZFRvZG9JdGVtKHRhc2s6IHN0cmluZykge1xyXG4gICAgY29uc3QgbmV3VG9kb0l0ZW06IFRvZG9JdGVtID0ge1xyXG4gICAgICBpZDogdG9kb0xpc3QubGVuZ3RoICsgMSxcclxuICAgICAgdGFzayxcclxuICAgICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgIH07XHJcbiAgICB0b2RvTGlzdC5wdXNoKG5ld1RvZG9JdGVtKTtcclxuICAgIGRpc3BsYXlUb2RvTGlzdCgpO1xyXG4gIH1cclxuICBcclxuICAvLyBGdW5jdGlvbiB0byBtYXJrIGEgdG8tZG8gaXRlbSBhcyBjb21wbGV0ZWRcclxuICBleHBvcnQgZnVuY3Rpb24gY29tcGxldGVUb2RvSXRlbShpZDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCB0b2RvSXRlbSA9IHRvZG9MaXN0LmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGlkKTtcclxuICAgIGlmICh0b2RvSXRlbSkge1xyXG4gICAgICB0b2RvSXRlbS5jb21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgICBkaXNwbGF5VG9kb0xpc3QoKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gRnVuY3Rpb24gdG8gZGVsZXRlIGEgY29tcGxldGVkIHRvLWRvIGl0ZW1cclxuICBleHBvcnQgZnVuY3Rpb24gZGVsZXRlQ29tcGxldGVkVG9kb0l0ZW1zKCkge1xyXG4gICAgdG9kb0xpc3QgPSB0b2RvTGlzdC5maWx0ZXIoKGl0ZW0pID0+ICFpdGVtLmNvbXBsZXRlZCk7XHJcbiAgICBkaXNwbGF5VG9kb0xpc3QoKTtcclxuICB9XHJcbiAgXHJcbiAgLy8gRnVuY3Rpb24gdG8gZGlzcGxheSB0aGUgdG8tZG8gbGlzdFxyXG4gIGZ1bmN0aW9uIGRpc3BsYXlUb2RvTGlzdCgpIHtcclxuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tMaXN0JykhO1xyXG4gICAgdGFza0xpc3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgXHJcbiAgICB0b2RvTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIHNwYW4uaW5uZXJUZXh0ID0gaXRlbS50YXNrO1xyXG4gICAgICBsaS5hcHBlbmRDaGlsZChzcGFuKTtcclxuICBcclxuICAgICAgY29uc3QgY29tcGxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgY29tcGxldGVCdXR0b24uaW5uZXJUZXh0ID0gJ0NvbXBsZXRlJztcclxuICAgICAgY29tcGxldGVCdXR0b24uaWQgPSBgY29tcGxldGVCdXR0b24tJHtpdGVtLmlkfWA7XHJcbiAgICAgIGNvbXBsZXRlQnV0dG9uLmNsYXNzTmFtZSA9IGBjb21wbGV0ZWA7XHJcbiAgICAgIGNvbXBsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY29tcGxldGVUb2RvSXRlbShpdGVtLmlkKSk7XHJcbiAgICAgIGxpLmFwcGVuZENoaWxkKGNvbXBsZXRlQnV0dG9uKTtcclxuICBcclxuICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgIGRlbGV0ZUJ1dHRvbi5pbm5lclRleHQgPSAnRGVsZXRlJztcclxuICAgICAgZGVsZXRlQnV0dG9uLmlkID0gYGRlbGV0ZUJ1dHRvbi0ke2l0ZW0uaWR9YDtcclxuICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTmFtZSA9IGBkZWxldGVgO1xyXG4gICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkZWxldGVUb2RvSXRlbShpdGVtLmlkKSk7XHJcbiAgICAgIGxpLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XHJcbiAgXHJcbiAgICAgIGlmIChpdGVtLmNvbXBsZXRlZCkge1xyXG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlJyk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8vIEV2ZW50IGxpc3RlbmVyIHRvIGhhbmRsZSBmb3JtIHN1Ym1pc3Npb25cclxuICBjb25zdCBmb3JtVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUYXNrQnRuJykhO1xyXG4gIGZvcm1UYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tJbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBjb25zdCB0YXNrID0gdGFza0lucHV0LnZhbHVlLnRyaW0oKTtcclxuICAgIGlmICh0YXNrKSB7XHJcbiAgICAgIGFkZFRvZG9JdGVtKHRhc2spO1xyXG4gICAgICB0YXNrSW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgdGFza0lucHV0LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgZnVuY3Rpb24gZGVsZXRlVG9kb0l0ZW0oaWQ6IG51bWJlcikge1xyXG4gICAgY29uc3QgdG9kb0luZGV4ID0gdG9kb0xpc3QuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmlkID09PSBpZCk7XHJcbiAgICBpZiAodG9kb0luZGV4ID49IDApIHtcclxuICAgICAgdG9kb0xpc3Quc3BsaWNlKHRvZG9JbmRleCwgMSk7XHJcbiAgICAgIGRpc3BsYXlUb2RvTGlzdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBJbml0aWFsIGRpc3BsYXkgb2YgdGhlIHRvLWRvIGxpc3RcclxuICBkaXNwbGF5VG9kb0xpc3QoKTtcclxuICAiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuX193ZWJwYWNrX21vZHVsZXNfX1tcIi4vc3JjL2luZGV4LnRzXCJdKDAsIF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9