<script lang="ts">
import { onMount } from "svelte";

let ham: HTMLElement;
let enlaces: HTMLElement;
let barras: NodeListOf<HTMLElement>;

onMount(() => {
  ham = document.querySelector(".ham") as HTMLElement;/*ham = document.querySelector(".ham");: Declara una constante llamada ham y la inicializa con el primer elemento que coincide con el selector CSS ".ham". 
  Este selector busca un elemento en el documento HTML que tenga la clase "ham".*/ 
  enlaces = document.querySelector(".enlaces-menu") as HTMLElement;/*enlaces = document.querySelector(".enlaces-menu");: Declara una constante llamada enlaces y la inicializa con el primer elemento que coincide con el selector CSS ".enlaces-menu".
  Este selector busca un elemento en el documento HTML que tenga la clase "enlaces-menu".*/
  barras = document.querySelectorAll(".ham span") as NodeListOf<HTMLElement>; /*barras = document.querySelectorAll(".ham span");: Declara una constante llamada barras y la inicializa con una NodeList de todos los elementos que coinciden con el selector CSS ".ham span". Esto busca todos los elementos span que sean hijos del elemento con la clase "ham".*/

  ham.addEventListener("click", () => { /*ham.addEventListener("click", () => { ... });: Agrega un event listener al elemento ham que escucha el evento "click".
  Cuando se hace clic en el elemento ham, se ejecuta la función de flecha definida entre los corchetes {}.*/ 
    enlaces?.classList.toggle("activado");/*enlaces.classList.toggle("activado");: Alterna la clase "activado" en el elemento enlaces. Si la clase está presente, la elimina; si no está presente, la agrega.*/
    barras?.forEach(child => {
      child?.classList.toggle("animado"); /*barras.forEach(child => {child.classList.toggle("animado")});: Para cada elemento en la lista barras, alterna la clase "animado". Si la clase está presente, la elimina; si no está presente, la agrega.*/
    });
  });
});

</script>
<header>
    <nav>
        <a href='../'>
            <img class="logo" src="https://www.el-ilustrador.com/wp-content/uploads/2019/03/banner_barco.gif" alt="logo">
        </a>    
    <ul class="enlaces-menu">
        <li><a href="./md_sw">Software</a></li>
        <li><a href="./md_dg">Diseño</a></li>
        <li><a href="./md_dp">Deportes</a></li>
        <li><a href="./md_cc">Comercio</a></li>
    </ul>
    <button class="ham" type="button">
        <span class="br-1"></span>
        <span class="br-2"></span>
        <span class="br-3"></span>
    </button>
    </nav>
</header>