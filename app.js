// // Esta funcion selecciona el elemento con el ID especificado
// const wrapper = document.getElementById('wrapper');
// // Esta funcion selecciona una lista de nodos que contengan la clase mensionada
// const links = document.getElementsByClassName('link');
// // Esta funcion selecciona una lista que contengan las etiquetas mencionadas
// const divs = document.getElementsByTagName('div');
// // Esta funcion selecciona una lista de los atributos name especificados
// const input = document.getElementsByTagName('telefono');

// // Esta funcion selecciona el primer selector mencionado
// const selector = document.querySelector('.wrapper');
// /* Esta funcion selecciona una lista de los selectores especificados y se puede recalcar que
//     al obtener selectores se pueden obtener de todo tipo de selectores existentes, por clase, 
//     id, atributos, pseudoclases, pseudoelementos, etc.
// */
// const selector2 = document.querySelector('.wrapper');

// console.log(input);

// gsap.to(".box", { 
//     x: 200,
// });
 
document.addEventListener('DOMContentLoaded', function () {
    const pointer = document.querySelector('.pointer');

    document.addEventListener('mousemove', function (event) {
            let mouseX = event.clientX;
            let mouseY = event.clientY;

            // Toma en cuenta el desplazamiento vertical y horizontal del documento
            let scrollX = window.pageXOffset;
            let scrollY = window.pageYOffset;

            // Utiliza GSAP para animar el punto a la posición del mouse
            gsap.to(pointer, {
            duration: 0.2,
            x: mouseX + scrollX,
            y: mouseY + scrollY,
            ease: 'power2.out'
            });

            gsap.to(pointer, { opacity: 1 });
    });
    
    document.addEventListener('mouseleave', function () {
        // Utiliza GSAP para desvanecer el punto cuando el mouse sale del área del documento
        gsap.set(pointer, { scale: 0 });
    });
});


document.addEventListener("DOMContentLoaded", function(){
    const inicioSection = document.querySelector(".section_inicial");
    gsap.set(inicioSection, { scale: 0 });

    gsap.to(inicioSection, {
        duration: 2,  // Duración de la animación en segundos
        scale: 1,     // Escala al 100%
        ease: "power2.out"  // Puedes ajustar el easing según tus preferencias
    });
});

// Animacion al borde colorido y a los textos coloridos
gsap.to(".wrapper", {
    "--myColor":"#0ae448", 
    yoyo:true, 
    repeat:Infinity, 
    duration: 1
});
// Animacion al cubo que gira y se le da un sombreado
gsap.to(".box", {
    duration: 2,
    x: 0,
    boxShadow: "0px 0px 20px 5px green",
    rotation: 180,
    scale: 1.5,
    opacity: 0.5,
    backgroundColor: "#00bae2"
});
// Animacion a la seccion principal
gsap.tp(".section_inicial", {
    duration: 2,
    x: 100,
    rotation: 180,
    scale: 1.5,
    opacity: 0.5,
    backgroundColor: "#9d95ff"
});