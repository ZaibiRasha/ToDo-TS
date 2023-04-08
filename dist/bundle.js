(()=>{"use strict";(()=>{var e=[];function t(){var n=document.getElementById("taskList");n.innerHTML="",e.forEach((function(d){var c=document.createElement("li"),i=document.createElement("span");i.innerText=d.task,c.appendChild(i);var a=document.createElement("button");a.innerText="Complete",a.id="completeButton-".concat(d.id),a.className="complete",a.addEventListener("click",(function(){return n=d.id,c=e.find((function(e){return e.id===n})),void(c&&(c.completed=!0,t()));var n,c})),c.appendChild(a);var l=document.createElement("button");l.innerText="Delete",l.id="deleteButton-".concat(d.id),l.className="delete",l.addEventListener("click",(function(){return n=d.id,c=e.findIndex((function(e){return e.id===n})),void(c>=0&&(e.splice(c,1),t()));var n,c})),c.appendChild(l),d.completed&&c.classList.add("complete"),n.appendChild(c)}))}document.getElementById("addTaskBtn").addEventListener("click",(function(n){n.preventDefault();var d=document.getElementById("taskInput"),c=d.value.trim();c&&(function(n){var d={id:e.length+1,task:n,completed:!1};e.push(d),t()}(c),d.value="",d.focus())})),t()})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiJ5QkFRQSxJQUFJQSxFQUF1QixHQTZCM0IsU0FBU0MsSUFDUCxJQUFNQyxFQUFXQyxTQUFTQyxlQUFlLFlBQ3pDRixFQUFTRyxVQUFZLEdBRXJCTCxFQUFTTSxTQUFRLFNBQUNDLEdBQ2hCLElBQU1DLEVBQUtMLFNBQVNNLGNBQWMsTUFFNUJDLEVBQU9QLFNBQVNNLGNBQWMsUUFDcENDLEVBQUtDLFVBQVlKLEVBQUtLLEtBQ3RCSixFQUFHSyxZQUFZSCxHQUVmLElBQU1JLEVBQWlCWCxTQUFTTSxjQUFjLFVBQzlDSyxFQUFlSCxVQUFZLFdBQzNCRyxFQUFlQyxHQUFLLHlCQUFrQlIsRUFBS1EsSUFDM0NELEVBQWVFLFVBQVksV0FDM0JGLEVBQWVHLGlCQUFpQixTQUFTLFdBQU0sT0E5QmxCRixFQThCbUNSLEVBQUtRLEdBN0JqRUcsRUFBV2xCLEVBQVNtQixNQUFLLFNBQUNaLEdBQVMsT0FBQUEsRUFBS1EsS0FBT0EsQ0FBWixTQUNyQ0csSUFDRkEsRUFBU0UsV0FBWSxFQUNyQm5CLE1BSkosSUFBaUNjLEVBQ3pCRyxDQTZCMkMsSUFDL0NWLEVBQUdLLFlBQVlDLEdBRWYsSUFBTU8sRUFBZWxCLFNBQVNNLGNBQWMsVUFDNUNZLEVBQWFWLFVBQVksU0FDekJVLEVBQWFOLEdBQUssdUJBQWdCUixFQUFLUSxJQUN2Q00sRUFBYUwsVUFBWSxTQUN6QkssRUFBYUosaUJBQWlCLFNBQVMsV0FBTSxPQXlCekJGLEVBekJ3Q1IsRUFBS1EsR0EwQjdETyxFQUFZdEIsRUFBU3VCLFdBQVUsU0FBQ2hCLEdBQVMsT0FBQUEsRUFBS1EsS0FBT0EsQ0FBWixTQUMzQ08sR0FBYSxJQUNmdEIsRUFBU3dCLE9BQU9GLEVBQVcsR0FDM0JyQixNQUpKLElBQXdCYyxFQUNoQk8sQ0ExQnlDLElBQzdDZCxFQUFHSyxZQUFZUSxHQUVYZCxFQUFLYSxXQUNQWixFQUFHaUIsVUFBVUMsSUFBSSxZQUduQnhCLEVBQVNXLFlBQVlMLEVBQ3ZCLEdBQ0YsQ0FLYUwsU0FBU0MsZUFBZSxjQUNoQ2EsaUJBQWlCLFNBQVMsU0FBQ1UsR0FDOUJBLEVBQU1DLGlCQUNOLElBQU1DLEVBQVkxQixTQUFTQyxlQUFlLGFBQ3BDUSxFQUFPaUIsRUFBVUMsTUFBTUMsT0FDekJuQixJQW5FTixTQUE0QkEsR0FDMUIsSUFBTW9CLEVBQXdCLENBQzVCakIsR0FBSWYsRUFBU2lDLE9BQVMsRUFDdEJyQixLQUFJLEVBQ0pRLFdBQVcsR0FFYnBCLEVBQVNrQyxLQUFLRixHQUNkL0IsR0FDRixDQTRESWtDLENBQVl2QixHQUNaaUIsRUFBVUMsTUFBUSxHQUNsQkQsRUFBVU8sUUFFZCxJQVVBbkMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG90cy8uL3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRGVmaW5lIGFuIGludGVyZmFjZSBmb3Igb3VyIHRvLWRvIGl0ZW1cclxuaW50ZXJmYWNlIFRvZG9JdGVtIHtcclxuICBpZDogbnVtYmVyO1xyXG4gIHRhc2s6IHN0cmluZztcclxuICBjb21wbGV0ZWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbi8vIENyZWF0ZSBhbiBhcnJheSB0byBob2xkIG91ciB0by1kbyBpdGVtc1xyXG5sZXQgdG9kb0xpc3Q6IFRvZG9JdGVtW10gPSBbXTtcclxuXHJcbi8vIEZ1bmN0aW9uIHRvIGFkZCBhIG5ldyB0by1kbyBpdGVtIHRvIHRoZSBsaXN0XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRUb2RvSXRlbSh0YXNrOiBzdHJpbmcpIHtcclxuICBjb25zdCBuZXdUb2RvSXRlbTogVG9kb0l0ZW0gPSB7XHJcbiAgICBpZDogdG9kb0xpc3QubGVuZ3RoICsgMSxcclxuICAgIHRhc2ssXHJcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gIH07XHJcbiAgdG9kb0xpc3QucHVzaChuZXdUb2RvSXRlbSk7XHJcbiAgZGlzcGxheVRvZG9MaXN0KCk7XHJcbn1cclxuXHJcbi8vIEZ1bmN0aW9uIHRvIG1hcmsgYSB0by1kbyBpdGVtIGFzIGNvbXBsZXRlZFxyXG5leHBvcnQgZnVuY3Rpb24gY29tcGxldGVUb2RvSXRlbShpZDogbnVtYmVyKSB7XHJcbiAgY29uc3QgdG9kb0l0ZW0gPSB0b2RvTGlzdC5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBpZCk7XHJcbiAgaWYgKHRvZG9JdGVtKSB7XHJcbiAgICB0b2RvSXRlbS5jb21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgZGlzcGxheVRvZG9MaXN0KCk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBGdW5jdGlvbiB0byBkZWxldGUgYSBjb21wbGV0ZWQgdG8tZG8gaXRlbVxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQ29tcGxldGVkVG9kb0l0ZW1zKCkge1xyXG4gIHRvZG9MaXN0ID0gdG9kb0xpc3QuZmlsdGVyKChpdGVtKSA9PiAhaXRlbS5jb21wbGV0ZWQpO1xyXG4gIGRpc3BsYXlUb2RvTGlzdCgpO1xyXG59XHJcblxyXG4vLyBGdW5jdGlvbiB0byBkaXNwbGF5IHRoZSB0by1kbyBsaXN0XHJcbmZ1bmN0aW9uIGRpc3BsYXlUb2RvTGlzdCgpIHtcclxuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrTGlzdCcpITtcclxuICB0YXNrTGlzdC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgdG9kb0xpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgXHJcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgc3Bhbi5pbm5lclRleHQgPSBpdGVtLnRhc2s7XHJcbiAgICBsaS5hcHBlbmRDaGlsZChzcGFuKTtcclxuXHJcbiAgICBjb25zdCBjb21wbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29tcGxldGVCdXR0b24uaW5uZXJUZXh0ID0gJ0NvbXBsZXRlJztcclxuICAgIGNvbXBsZXRlQnV0dG9uLmlkID0gYGNvbXBsZXRlQnV0dG9uLSR7aXRlbS5pZH1gO1xyXG4gICAgY29tcGxldGVCdXR0b24uY2xhc3NOYW1lID0gYGNvbXBsZXRlYDtcclxuICAgIGNvbXBsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY29tcGxldGVUb2RvSXRlbShpdGVtLmlkKSk7XHJcbiAgICBsaS5hcHBlbmRDaGlsZChjb21wbGV0ZUJ1dHRvbik7XHJcblxyXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBkZWxldGVCdXR0b24uaW5uZXJUZXh0ID0gJ0RlbGV0ZSc7XHJcbiAgICBkZWxldGVCdXR0b24uaWQgPSBgZGVsZXRlQnV0dG9uLSR7aXRlbS5pZH1gO1xyXG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTmFtZSA9IGBkZWxldGVgO1xyXG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZGVsZXRlVG9kb0l0ZW0oaXRlbS5pZCkpO1xyXG4gICAgbGkuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcclxuXHJcbiAgICBpZiAoaXRlbS5jb21wbGV0ZWQpIHtcclxuICAgICAgbGkuY2xhc3NMaXN0LmFkZCgnY29tcGxldGUnKTtcclxuICAgIH1cclxuXHJcbiAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gRXZlbnQgbGlzdGVuZXIgdG8gaGFuZGxlIGZvcm0gc3VibWlzc2lvblxyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2tCdG4nKSE7XHJcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrSW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIGNvbnN0IHRhc2sgPSB0YXNrSW5wdXQudmFsdWUudHJpbSgpO1xyXG4gIGlmICh0YXNrKSB7XHJcbiAgICBhZGRUb2RvSXRlbSh0YXNrKTtcclxuICAgIHRhc2tJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgdGFza0lucHV0LmZvY3VzKCk7XHJcbiAgfVxyXG59KTtcclxuZnVuY3Rpb24gZGVsZXRlVG9kb0l0ZW0oaWQ6IG51bWJlcikge1xyXG4gIGNvbnN0IHRvZG9JbmRleCA9IHRvZG9MaXN0LmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaWQpO1xyXG4gIGlmICh0b2RvSW5kZXggPj0gMCkge1xyXG4gICAgdG9kb0xpc3Quc3BsaWNlKHRvZG9JbmRleCwgMSk7XHJcbiAgICBkaXNwbGF5VG9kb0xpc3QoKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEluaXRpYWwgZGlzcGxheSBvZiB0aGUgdG8tZG8gbGlzdFxyXG5kaXNwbGF5VG9kb0xpc3QoKTtcclxuIl0sIm5hbWVzIjpbInRvZG9MaXN0IiwiZGlzcGxheVRvZG9MaXN0IiwidGFza0xpc3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiZm9yRWFjaCIsIml0ZW0iLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJzcGFuIiwiaW5uZXJUZXh0IiwidGFzayIsImFwcGVuZENoaWxkIiwiY29tcGxldGVCdXR0b24iLCJpZCIsImNsYXNzTmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0b2RvSXRlbSIsImZpbmQiLCJjb21wbGV0ZWQiLCJkZWxldGVCdXR0b24iLCJ0b2RvSW5kZXgiLCJmaW5kSW5kZXgiLCJzcGxpY2UiLCJjbGFzc0xpc3QiLCJhZGQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidGFza0lucHV0IiwidmFsdWUiLCJ0cmltIiwibmV3VG9kb0l0ZW0iLCJsZW5ndGgiLCJwdXNoIiwiYWRkVG9kb0l0ZW0iLCJmb2N1cyJdLCJzb3VyY2VSb290IjoiIn0=