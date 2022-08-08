document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:5000/getAll')
    .then(response => response.json())
    
    // if I pass 'data' into the object and data into the parenthases then data table disappears
    .then(data => console.log(data))
    loadHtmlTable([])
});

function loadHtmlTable(data) {

    const table = document.querySelector('table tbody');

    if (data.length === 0) {
        table.innerHTML = "<tr><td class='no-data' colspan='5'>No data</td></tr>";
    }
}