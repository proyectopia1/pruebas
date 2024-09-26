<script>
    import './inicio.css'
</script>
<main>
    <header>
        <a href="Registro.html">
            <h2 class="logo">logo</h2>
        </a>
        <nav class="navigation">
            <a href="/media_tecnicas/md_cc">
                <button class="btnLogin-popup">El pascual bravo</button>
            </a>
            <a href="/">
                <button class="btnLogin-popup">Acerca del proyectoz</button>
            </a>
            <a href="Registro.html">
                <button class="btnLogin-popup">logo</button>
            </a>
        </nav>
    </header>
    <div class="wrapper">
        <span class="icon-close">
            <ion-icon name="close-outline"></ion-icon>
        </span>
        <div class="form-box login">
            <h2>Login</h2>
            <form action="#">
                <div class="input-box">
                    <span class="icon"><ion-icon name="mail"></ion-icon> </span>
                    <input type="email" required />
                    <label> Email</label>
                </div>
                <div class="input-box">
                    <span class="icon"><ion-icon name="person"></ion-icon></span
                    >
                    <input type="usuario" required />
                    <label> usuario</label>
                </div>d
                <label for="option">Elige una opción:</label>
                <div class="input-box">
                    <span class="icon"><ion-icon name="cube"></ion-icon></span>
                    <select id="option" name="option">
                        <option value="paginaA.html">dfg</option>
                        <option value="paginaB.html">Opción B</option>
                        <option value="paginaC.html">Opción C</option>
                    </select>
                </div>
                <div>
                    <button class="btn" type="submit" 
                        >Enviar</button
                    >
                </div>
                <a href='./media_tecnicas/md_sw'>pruebas</a>
            </form>
        </div>
    </div>
    <script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
    ></script>
    <script
        nomodule
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
    ></script>
</main>


