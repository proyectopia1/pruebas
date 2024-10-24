<script>
    import './inicio.css'
</script>
<main>
    <header>
        <a href="Registro.html">
            <h2 class="logo">logo</h2>
        </a>
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
                    <label>Email</label>
                </div>
                <div class="input-box">
                    <span class="icon"><ion-icon name="person"></ion-icon></span>
                    <input type="contraseña" required />
                    <label>contraseña</label>
                </div>
                <div>
                    <a href=""><button class="btn" type="submit" >Enviar</button></a>
                </div>
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


