document.addEventListener('DOMContentLoaded', function () {
    loadHtmlTable([])
});

function loadHtmlTable(data) {

    const table = document.querySelector('table tbody');
    let tableHtml = '';

    if (data.length === 0) {
        table.innerHTML = "<tr><td class='no-data' colspan='5'>No data</td></tr>";
    }
}