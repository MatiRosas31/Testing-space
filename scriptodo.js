/* 
Tareas: 
1)programar una function que una vez clickeado en el boton de "Crear nuevo item" se desaparezca el boton (elimine) y se ponga una form tipo esta: 
<input type="text" class="form-control" id="formgenerica" placeholder="Que tienes en mente?"
  required>
2) Agregar event listener al boton "Crear nuevo item" y agregar esa function
3)
*/

const todoformHTML = document.getElementById('todoForm');

const todolistHTML = document.getElementById('todoList');


function Creadora (e) {
  e.preventDefault();
  const newItemText = document.getElementById('newItem').value;
  //Primero crear el elemento li para añadir
  const newItem = document.createElement('li');
  //Darle una clase a ese item
  newItem.className = 'list-group-item d-flex justify-content-between align-items-center';
  //Crea un span para poner lo que sea que se escriba
  const itemText = document.createElement('span');
  itemText.textContent = newItemText
  //Boton de Checkbox
  const itemCheckbox = document.createElement('input');
  itemCheckbox.type = 'checkbox';
  itemCheckbox.className = 'ml-2';
 
  // Botón para eliminar el ítem
  const deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.className = 'btn btn-outline-danger ml-2';
  deleteButton.textContent = 'X';

  // Event Listener para eliminar el ítem
  deleteButton.addEventListener('click', function() {
      todolistHTML.removeChild(newItem);
  });
  //Ahora meter todo adentro del "li" newItem
  newItem.appendChild(itemText);
  newItem.appendChild(deleteButton);
  //Metemos todo adentro del ol que se llama todoList
  todolistHTML.appendChild(newItem);
  // Limpiar el campo de entrada del form que ya esta
  document.getElementById('newItem').value = '';
  // Event Listener para cambiar la clase en doble clic
  newItem.addEventListener('dblclick', function() {
      newItem.classList.toggle('bg-success');
      newItem.classList.toggle('text-light');
  });
}

todoformHTML.addEventListener('submit',Creadora,false);
