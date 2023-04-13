/*Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin.  */
const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const lista = document.querySelector('ul');
const article = document.querySelector('article');
const btnEliminar = document.createElement('button');

btnEliminar.innerText = 'Eliminar';
btnEliminar.classList.add('btn', 'btn-outline-light');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const tarea = input.value.trim();

  if (tarea !== '') {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    const checkbox = document.createElement('input');

    li.innerText = tarea;
    checkbox.type = 'checkbox';
    btn.innerText = 'X';
    btn.classList.add('btn', 'btn-outline-danger', 'ms-3');
    btn.addEventListener('click', () => {
      li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(btn);
    lista.appendChild(li);
    input.value = '';
  }
});


