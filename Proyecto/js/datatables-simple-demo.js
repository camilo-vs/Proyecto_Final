window.addEventListener("DOMContentLoaded", (event) => {
  // Simple-DataTables
  // https://github.com/fiduswriter/Simple-DataTables/wiki
  // const datatablesSimple = document.getElementById("datatablesSimple");
  // if (datatablesSimple) {
  //   new simpleDatatables.DataTable(datatablesSimple, {});
  // }
});
$(document).ready(function () {
  $("#datatablesSimple").DataTable({
    language: {
      url: "//cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json",
    },
  });
});
