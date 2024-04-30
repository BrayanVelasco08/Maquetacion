function consultar() {
    var fecha_desde = document.getElementById("fecha_desde").value;
    var fecha_hasta = document.getElementById("fecha_hasta").value;
    window.location.href = "informes_graficos.html?fecha_desde=" + fecha_desde + "&fecha_hasta=" + fecha_hasta;
}