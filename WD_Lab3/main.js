function Create()
{
    var task = document.createElement("div");
    task.className = 'task';
//-------------------------------------
    var task_text = document.getElementById('task-input').value;
    if(task_text===''||task_text===' ')
    {
        return;
    }

    var text = document.createElement("div");
    text.className = 'task-name';

    var task_name = document.createElement("p");
    task_name.innerHTML = task_text;
    task_name.className = 'notdone';
    text.appendChild(task_name);
    document.getElementById('task-input').value = '';

    //----------------------------
    var check = document.createElement('div');
    check.className = 'check';

    var checkBox = document.createElement('input');
    checkBox.type = 'checkbox';

    check.appendChild(checkBox);

    checkBox.onclick = function action(){
        var t = this.parentElement.parentElement.getElementsByClassName('task-name')[0].firstChild;

        if(this.checked)
        {
            t.className = 'done';
        }
        else
        {
            t.className = 'notdone';
        }
    }
//------------------------------------
    var deletion = document.createElement("div");
    deletion.className = 'delete';
    var btn = document.createElement("button");

    var btn_img = document.createElement("img");
    btn_img.src = "https://api.iconify.design/mdi-trash-can.svg?color=red";
    btn.onclick = function del()
    {
        this.parentElement.parentElement.remove();
    }
    btn.appendChild(btn_img);
    deletion.appendChild(btn);
//--------------------------------


    task.appendChild(check);
    task.appendChild(text);

    task.appendChild(deletion);
//----------------------------------------
    var list = document.getElementById('content-bottom');

    list.appendChild(task);


}
