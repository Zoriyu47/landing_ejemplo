/*menu*/
((d)=>{
    const $btn_menu = d.querySelector(".btn-menu"),
        $menu = d.querySelector(".menu");

    $btn_menu.addEventListener("click", (e)=>{
        $btn_menu.firstElementChild.classList.toggle("none");
        $btn_menu.lastElementChild.classList.toggle("none");
        $menu.classList.toggle("active");
    });

    d.addEventListener("click", e=> {
        if(!e.target.matches(".menu a"))return false;

        $btn_menu.firstElementChild.classList.remove("none");
        $btn_menu.lastElementChild.classList.add("none");
        $menu.classList.remove("active");
    });
})
(document);

/*formulario de contacto*/

((d)=>{
    const $form = d.querySelector(".contact-form"),
    $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-form-response")

    $form.addEventListener("submit", (e) =>{
        e.preventDefault();
        $loader.classList.remove("none");
        fetch("https://formsubmit.co/ajax/zoriyu47@gmail.com",
        {method:"POST",
        body:new FormData(e.target)
        }).then((res) => (res.ok? res.json():Promise.reject(res)))
        .then(json=>
            {console.log(json);
            $loader.classList.add("none");
            location.hash = "#gracias";
            $form.reset();
            })
            .catch(err => 
                {console.log(err);
                let message = err.statusText||'Ocurrió un error al enviar, intenta nuevamente'
                $response.querySelector("h3").innerHTML = 'Error ${err.status} : ${message}'
            }).finally(()=>{
                $loader.classList.add("none");
                setTimeout(() => {
                    location.hash = "#close";
                },3000);
            });
        });
})(document);
