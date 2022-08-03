//adicionar task nova
document.getElementById("addTaskBtn").addEventListener("click", function(){
    //salvando a 'descrição' da task nova : "Arrumar a cama"
    const newTask = document.getElementById("newTask").value;

    //criando a estrutura HTML da nova task
    const newTaskLineHtml = document.createElement("li");
    newTaskLineHtml.className = "task";
    newTaskLineHtml.innerHTML = `<input type="checkbox"/> <span>${newTask}</span> <button>X</button> <button>Edit</button>`

    //metodo para inserir a nova task no DOM
    const elementoPai = document.querySelector("#taskList");
    elementoPai.insertBefore(newTaskLineHtml, elementoPai.firstElementChild);
});

console.log("teste");

//riscar task checked


//remover task


//editar task