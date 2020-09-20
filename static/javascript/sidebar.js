const navSlide = () => {
    const burger= document.querySelector('.burger');
    const table = document.querySelector('.container');
    const nav = document.querySelector('.nav-links');
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        table.classList.toggle('container-active');
     //   burger.style.display="none";
    });
}

navSlide();

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("active");
});
$(document).ready(function() {
    $('#example').DataTable();
} );