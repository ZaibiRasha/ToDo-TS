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
    var token, myHeaders, response, tasks, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                token = localStorage.getItem('token');
                console.log({ token: token });
                myHeaders = new Headers({
                    'Authorization': "Bearer ".concat(token),
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                });
                return [4 /*yield*/, fetch("http://localhost:8010/tasks", {
                        method: "GET",
                        credentials: "include",
                        headers: myHeaders
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLEVBQUUsa0JBQWtCO2lCQUMvQixDQUFDLENBQUM7Z0JBQ2MscUJBQU0sS0FBSyxDQUFDLDZCQUE2QixFQUFFO3dCQUMxRCxNQUFNLEVBQUUsS0FBSzt3QkFDYixXQUFXLEVBQUUsU0FBUzt3QkFDdEIsT0FBTyxFQUFFLFNBQVM7cUJBQ25CLENBQUM7O2dCQUpJLFFBQVEsR0FBRyxTQUlmO2dCQUNZLHFCQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUU7O2dCQUE3QixLQUFLLEdBQUcsU0FBcUI7Z0JBQ25DLHFCQUFNLGVBQWUsQ0FBQyxLQUFLLENBQUM7O2dCQUE1QixTQUE0QixDQUFDO2dCQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsNkJBQTZCOzs7O2dCQUVqRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQUssQ0FBQyxDQUFDOzs7OztLQUV0QixDQUFDLENBQUM7Ozs7Ozs7O1VFbEVMO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvdHMvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdG9kb3RzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb3RzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvdHMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuY29uc3QgcGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuY29uc3QgZXJyb3JDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3ItY29udGFpbmVyJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbmNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvci1tZXNzYWdlJykgYXMgSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbmlmKGZvcm0pe1xyXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIFxyXG4gICAgY29uc3QgZW1haWwgPSBlbWFpbElucHV0LnZhbHVlO1xyXG4gICAgY29uc3QgcGFzc3dvcmQgPSBwYXNzd29yZElucHV0LnZhbHVlO1xyXG5cclxuICAgIFxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDEwL2xvZ2luJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwsIHBhc3N3b3JkIH0pXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBkYXRhLnRva2VuO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbik7IC8vIHNldCB0b2tlbiB2YWx1ZSBpbiBsb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRva2VuKTsgLy8gbG9ncyB0aGUgdG9rZW4gdmFsdWUgdG8gdGhlIGNvbnNvbGVcclxuICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGEgcHJvYmxlbSBwYXJzaW5nIHRoZSBKU09OIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcInRhc2tzLmh0bWxcIjtcclxuICAgICAgICBjb25zb2xlLmxvZygnTG9nZ2VkIGluIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBSZXNwb25zZSBzdGF0dXMgY29kZTogJHtyZXNwb25zZS5zdGF0dXN9YCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgaWYgKGVycm9yTWVzc2FnZSAmJiBlcnJvckNvbnRhaW5lcikge1xyXG4gICAgICAgIGVycm9yTWVzc2FnZS5pbm5lclRleHQgPSBlcnJvciA/IGVycm9yLnRvU3RyaW5nKCkgOiBcIlwiO1xyXG4gICAgICAgIGVycm9yQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgIH0gICAgICBcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4gIFxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHRva2VuID1sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTsgLy8gZ2V0IHRva2VuIHZhbHVlIGluIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgY29uc29sZS5sb2coe3Rva2VuOnRva2VufSk7XHJcbiAgICAgIGNvbnN0IG15SGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcclxuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAxMC90YXNrc1wiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIixcclxuICAgICAgICBoZWFkZXJzOiBteUhlYWRlcnNcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHRhc2tzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBhd2FpdCBkaXNwbGF5VG9kb0xpc3QodGFza3MpO1xyXG4gICAgICBjb25zb2xlLmxvZyh0YXNrcyk7IC8vIG9yIGRvIHNvbWV0aGluZyB3aXRoIHRhc2tzXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgXHJcbiAgIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSB7fTtcbl9fd2VicGFja19tb2R1bGVzX19bXCIuL3NyYy9pbmRleC50c1wiXSgpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9