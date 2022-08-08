/*!
 * Start Bootstrap - SB Admin v7.0.5 (https://startbootstrap.com/template/sb-admin)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Toggle the side navigation
  const sidebarToggle = document.body.querySelector("#sidebarToggle");
  if (sidebarToggle) {
    // Uncomment Below to persist sidebar toggle between refreshes
    // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
    //     document.body.classList.toggle('sb-sidenav-toggled');
    // }
    sidebarToggle.addEventListener("click", (event) => {
      event.preventDefault();
      document.body.classList.toggle("sb-sidenav-toggled");
      localStorage.setItem(
        "sb|sidebar-toggle",
        document.body.classList.contains("sb-sidenav-toggled")
      );
    });
  }
  document.getElementById(
    "layoutSidenav_nav"
  ).innerHTML = `<nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
    <div class="sb-sidenav-menu">
      <div class="nav">
        <div class="sb-sidenav-menu-heading">Modulos</div>
        <a
          class="nav-link collapsed"
          href="#"
          data-bs-toggle="collapse"
          data-bs-target="#collapseLayouts"
          aria-expanded="false"
          aria-controls="collapseLayouts"
        >
          <div class="sb-nav-link-icon">
            <i class="fas fa-columns"></i>
          </div>
          Productos
          <div class="sb-sidenav-collapse-arrow">
            <i class="fas fa-angle-down"></i>
          </div>
        </a>
        <div
          class="collapse"
          id="collapseLayouts"
          aria-labelledby="headingOne"
          data-bs-parent="#sidenavAccordion"
        >
          <nav class="sb-sidenav-menu-nested nav">
            <a class="nav-link" href="RegisterProducts.html"
              >Registrar productos</a
            >
            <a class="nav-link" href="ListProducts.html"
              >Lista de productos</a
            >
          </nav>
        </div>
        <a
          class="nav-link collapsed"
          href="#"
          data-bs-toggle="collapse"
          data-bs-target="#collapsePages"
          aria-expanded="false"
          aria-controls="collapseLayouts"
        >
          <div class="sb-nav-link-icon">
            <i class="fas fa-columns"></i>
          </div>
          Categorias
          <div class="sb-sidenav-collapse-arrow">
            <i class="fas fa-angle-down"></i>
          </div>
        </a>
        <div
          class="collapse"
          id="collapsePages"
          aria-labelledby="headingOne"
          data-bs-parent="#sidenavAccordion"
        >
          <nav class="sb-sidenav-menu-nested nav">
            <a class="nav-link" href="RegisterCategories.html"
              >Registrar categorias</a
            >
            <a class="nav-link" href="ListCategories.html"
              >Lista de categorias</a
            >
          </nav>
        </div>
        
        <a
          class="nav-link collapsed"
          href="#"
          data-bs-toggle="collapse"
          data-bs-target="#sidenavAccordionPages"
          aria-expanded="false"
          aria-controls="collapseLayouts"
        >
          <div class="sb-nav-link-icon">
            <i class="fas fa-columns"></i>
          </div>
          Marcas
          <div class="sb-sidenav-collapse-arrow">
            <i class="fas fa-angle-down"></i>
          </div>
        </a>
        <div
          class="collapse"
          id="sidenavAccordionPages"
          aria-labelledby="headingOne"
          data-bs-parent="#sidenavAccordion"
        >
          <nav class="sb-sidenav-menu-nested nav">
            <a class="nav-link" href="RegisterBrand.html"
              >Registrar marcas</a
            >
            <a class="nav-link" href="ListBrand.html">Lista de marcas</a>
          </nav>
        </div>
        

        <a
          class="nav-link collapsed"
          href="#"
          data-bs-toggle="collapse"
          data-bs-target="#sidenavAccordionUsers"
          aria-expanded="false"
          aria-controls="collapseLayouts"
        >
          <div class="sb-nav-link-icon">
            <i class="fas fa-columns"></i>
          </div>
          Usuarios
          <div class="sb-sidenav-collapse-arrow">
            <i class="fas fa-angle-down"></i>
          </div>
        </a>
        <div
          class="collapse"
          id="sidenavAccordionUsers"
          aria-labelledby="headingOne"
          data-bs-parent="#sidenavAccordion"
        >
          <nav class="sb-sidenav-menu-nested nav">
            <a class="nav-link" href="RegisterUser.html"
              >Registrar Usuarios</a
            >
            <a class="nav-link" href="ListUser.html">Lista de Usuarios</a>
          </nav>
        </div>
        
      </div>
    </div>
  </nav>`;
});
