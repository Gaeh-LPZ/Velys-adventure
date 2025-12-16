/**
 * Función para cambiar de pestañas en la configuración
 * @param {string} tabId - El ID del div que queremos mostrar (ej: 'audio', 'controls')
 * @param {HTMLElement} element - El botón del menú que fue clickeado
 */
function openTab(tabId, element) {
    // 1. Ocultar todos los contenidos de las pestañas
    // Buscamos todos los elementos que tengan la clase 'tab-content'
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active-tab');
    });

    // 2. Desactivar todos los botones del menú lateral
    // Buscamos todos los elementos con clase 'nav-item'
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });

    // 3. Mostrar el contenido de la pestaña seleccionada
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.classList.add('active-tab');
    }

    // 4. Activar visualmente el botón del menú que se clickeó
    if (element) {
        element.classList.add('active');
    }
}