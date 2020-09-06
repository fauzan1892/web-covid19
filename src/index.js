import "regenerator-runtime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";

// statistik
import "./scripts/statistik-item.js";

// create custom element
const containerElement = document.querySelector("#cek_statistik");
const statistikItemElement = document.createElement("statistik-item");

containerElement.appendChild(statistikItemElement);


import "./scripts/provinsi.js";
import main from "./scripts/main";
main();

import $ from "jquery";

// datatables
import "datatables.net-bs4/css/dataTables.bootstrap4.css";
import "datatables.net/js/jquery.dataTables.min.js";
import "datatables.net-bs4/js/dataTables.bootstrap4.js";

// Font Awesome 5 (Free)
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid' // https://fontawesome.com/icons?d=gallery&s=solid&m=free
import '@fortawesome/fontawesome-free/js/regular' // https://fontawesome.com/icons?d=gallery&s=regular&m=free
import '@fortawesome/fontawesome-free/js/brands' // https://fontawesome.com/icons?d=gallery&s=brands&m=free

