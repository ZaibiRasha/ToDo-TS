/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function() {


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
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
var form = document.getElementById('login');
var errorContainer = document.getElementById('error-container');
var errorMessage = document.getElementById('error-message');
if (form) {
    form.addEventListener('click', function (event) { return __awaiter(void 0, void 0, void 0, function () {
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
                        response.json().then(function (data) {
                            var token = data.token;
                            localStorage.setItem('token', token); // set token value in local storage
                            console.log(token); // logs the token value to the console
                        }).catch(function (error) {
                            console.error('There was a problem parsing the JSON data:', error);
                        });
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
}
document.addEventListener("DOMContentLoaded", function () { return __awaiter(void 0, void 0, void 0, function () {
    var token, response, tasks, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                token = localStorage.getItem('token');
                console.log({ token: token });
                return [4 /*yield*/, fetch("http://localhost:8010/tasks", {
                        method: "GET",
                        credentials: "include",
                        headers: {
                            'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiO\u2026zMzfQ.jYQm-6_xO25NnzxNTVgk4aUpV6hn7wE5wApmwVcpuik",
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        }
                    })];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                tasks = _a.sent();
                return [4 /*yield*/, displayTodoList(tasks)];
            case 3:
                _a.sent();
                console.log(tasks); // or do something with tasks
                return [3 /*break*/, 5];
            case 4:
                error_2 = _a.sent();
                console.log(error_2);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1AsZUFBZSxFQUFFLGtIQUE2Rzs0QkFDOUgsY0FBYyxFQUFFLGtCQUFrQjs0QkFDbEMsUUFBUSxFQUFFLGtCQUFrQjt5QkFDN0I7cUJBQ0YsQ0FBQzs7Z0JBUkksUUFBUSxHQUFHLFNBUWY7Z0JBQ1kscUJBQU0sUUFBUSxDQUFDLElBQUksRUFBRTs7Z0JBQTdCLEtBQUssR0FBRyxTQUFxQjtnQkFDbkMscUJBQU0sZUFBZSxDQUFDLEtBQUssQ0FBQzs7Z0JBQTVCLFNBQTRCLENBQUM7Z0JBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyw2QkFBNkI7Ozs7Z0JBRWpELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBSyxDQUFDLENBQUM7Ozs7O0tBRXRCLENBQUMsQ0FBQzs7Ozs7Ozs7VUVqRUw7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG90cy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly90b2RvdHMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvdHMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG90cy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5jb25zdCBwYXNzd29yZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG5jb25zdCBlcnJvckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvci1jb250YWluZXInKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yLW1lc3NhZ2UnKSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuaWYoZm9ybSl7XHJcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgXHJcbiAgICBjb25zdCBlbWFpbCA9IGVtYWlsSW5wdXQudmFsdWU7XHJcbiAgICBjb25zdCBwYXNzd29yZCA9IHBhc3N3b3JkSW5wdXQudmFsdWU7XHJcblxyXG4gICAgXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwMTAvbG9naW4nLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgcGFzc3dvcmQgfSlcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IGRhdGEudG9rZW47XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKTsgLy8gc2V0IHRva2VuIHZhbHVlIGluIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICAgICAgY29uc29sZS5sb2codG9rZW4pOyAvLyBsb2dzIHRoZSB0b2tlbiB2YWx1ZSB0byB0aGUgY29uc29sZVxyXG4gICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGVyZSB3YXMgYSBwcm9ibGVtIHBhcnNpbmcgdGhlIEpTT04gZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwidGFza3MuaHRtbFwiO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdMb2dnZWQgaW4gc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFJlc3BvbnNlIHN0YXR1cyBjb2RlOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICBpZiAoZXJyb3JNZXNzYWdlICYmIGVycm9yQ29udGFpbmVyKSB7XHJcbiAgICAgICAgZXJyb3JNZXNzYWdlLmlubmVyVGV4dCA9IGVycm9yID8gZXJyb3IudG9TdHJpbmcoKSA6IFwiXCI7XHJcbiAgICAgICAgZXJyb3JDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgICAgfSAgICAgIFxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiAgXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdG9rZW4gPWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpOyAvLyBnZXQgdG9rZW4gdmFsdWUgaW4gbG9jYWwgc3RvcmFnZVxyXG4gICAgICBjb25zb2xlLmxvZyh7dG9rZW46dG9rZW59KTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAxMC90YXNrc1wiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SjFjMlZ5U1dRaU/igKZ6TXpmUS5qWVFtLTZfeE8yNU5uenhOVFZnazRhVXBWNmhuN3dFNXdBcG13VmNwdWlrYCxcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgdGFza3MgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIGF3YWl0IGRpc3BsYXlUb2RvTGlzdCh0YXNrcyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRhc2tzKTsgLy8gb3IgZG8gc29tZXRoaW5nIHdpdGggdGFza3NcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9KTtcclxuICBcclxuICAiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuX193ZWJwYWNrX21vZHVsZXNfX1tcIi4vc3JjL2luZGV4LnRzXCJdKCk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=