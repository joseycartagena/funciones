document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        pintarRosado();
    /* Cambiar a color 1 */
    } else if (event.key === 's') {
        pintarNaranjo();
    /* Cambiar a color 2 */
    }
    else if (event.key === 'd') {
        pintarCeleste();
        /* Cambiar a color 3 */
        }
    })

    function pintarRosado() {
        key = document.getElementById("key");
        key.style.backgroundColor = "pink"
    }

    function pintarNaranjo() {
        key = document.getElementById("key");
        key.style.backgroundColor = "orange"
    }

    function pintarCeleste() {
        key = document.getElementById("key");
        key.style.backgroundColor = "skyblue"
    }



    document.addEventListener('keydown', function (event) {
        if (event.key === 'q') {
            crearMorado();
        /* Cambiar a color 1 */
        } else if (event.key === 'w') {
            crearGris();
        /* Cambiar a color 2 */
        }
        else if (event.key === 'e') {
            crearCafe();
            /* Cambiar a color 3 */
            }
        })

        function crearMorado() {
            key = document.getElementById("key");
            nuevoDiv = document.createElement("div");
            nuevoDiv.style.backgroundColor = "purple";
            nuevoDiv.style.border = "solid 5px black";
            nuevoDiv.style.width = "200px";
            nuevoDiv.style.height = "200px";
            contenedor.appendChild(nuevoDiv);
        }

        function crearGris() {
            key = document.getElementById("key");
            nuevoDiv = document.createElement("div");
            nuevoDiv.style.backgroundColor = "grey";
            nuevoDiv.style.border = "solid 5px black";
            nuevoDiv.style.width = "200px";
            nuevoDiv.style.height = "200px";
            contenedor.appendChild(nuevoDiv);
        }

        function crearCafe() {
            key = document.getElementById("key");
            nuevoDiv = document.createElement("div");
            nuevoDiv.style.backgroundColor = "brown";
            nuevoDiv.style.border = "solid 5px black";
            nuevoDiv.style.width = "200px";
            nuevoDiv.style.height = "200px";
            contenedor.appendChild(nuevoDiv);
        }

