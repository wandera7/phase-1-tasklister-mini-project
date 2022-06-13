document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form=document.querySelector('#create-task-form');
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let value=document.getElementById('new-task-description').value;
    handleTask(value);
    form.reset();
  })
});

function handleTask(task){
  let li=document.createElement('li');
  let btn=document.createElement('button');
  btn.textContent='X';
  btn.addEventListener('click',deleteTask) ;
  li.setAttribute("contenteditable", "true");// Edits the task
  li.textContent=`${task} `;
  li.appendChild(btn);
  document.querySelector('#tasks').appendChild(li);

}

function deleteTask(e){
  e.target.parentNode.remove();//Deletes the task
}
