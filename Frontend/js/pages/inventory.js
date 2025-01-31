document.addEventListener('DOMContentLoaded', function () {
    // Esperar un momento para asegurarse de que el encabezado se haya cargado
    setTimeout(() => {
        // Busqueda
        const searchForm = document.getElementById('search-form');
        const searchInput = document.getElementById('search-input');

        if (searchForm && searchInput) {
            searchForm.addEventListener('submit', function (event) {
                event.preventDefault(); // Evitar el recargo de página
                const searchTerm = searchInput.value.toLowerCase();
                filterTable(searchTerm);
            });
        } else {
            console.error('El formulario de búsqueda no se encuentra en el DOM');
        }

        // Cargar los datos de inventario
        fetch('http://localhost:3000/api/inventory')
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    const tableBody = document.querySelector('#inventory-table tbody');
                    data.data.forEach(item => {
                        const fecha = new Date(item.fec_reg).toISOString().split('T')[0];

                        const row = document.createElement('tr');
                        row.innerHTML = `
                            <td>${item.cod_equipo}</td>
                            <td>${fecha}</td>
                            <td>${item.cod_almacen}</td>
                            <td>${item.tip_equipo}</td>
                            <td>${item.piso_ubic}</td>
                            <td>${item.serv_depar}</td>
                            <td>${item.nom_custodio}</td>
                            <td>${item.nom_usua}</td>
                            <td>
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick='openEditModal(${JSON.stringify(item)})'> E </button>
                            </td>`;
                        tableBody.appendChild(row);
                    });
                } else {
                    console.error('Error al obtener los datos del inventario');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, 100); // Espera 100 ms para dar tiempo a que se cargue el encabezado

    // Cargar opciones para los select (pisos y servicios)
    loadSelectOptions('pisos', 'modal-piso-ubic');
    loadSelectOptions('servicios', 'modal-serv-depar');
});

// Función para filtrar la tabla
function filterTable(searchTerm) {
    const tableRows = document.querySelectorAll('#inventory-table tbody tr');

    tableRows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const rowText = Array.from(cells).map(cell => cell.textContent.toLowerCase()).join(' ');

        if (rowText.includes(searchTerm)) {
            row.style.display = ''; // Mostrar la fila
        } else {
            row.style.display = 'none'; // Ocultar la fila
        }
    });
}
