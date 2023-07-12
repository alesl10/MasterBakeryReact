function Footer() {

    return (
        <>
            <footer className="h-[10em] mt-10 sm:mt-0 bg-orange-300 flex flex-col text-white items-center justify-between">
                <div className="text-center">
                    <h1 className="text-xl sm:text-5xl text-center font-semibold">Master Bakery</h1>
                </div>
                <div className="flex sm:justify-around gap-10 sm:gap-40 ">
                    <div>
                        <a className="sm:text-lg " target="_blank" href="https://www.facebook.com/profile.php?id=100094362511413">@facebook<img className="h-[2.5em] sm:h-[3em]" src="./images/iconos/facebook.png"
                            alt="" /></a>
                    </div>
                    <div>
                        <a className="sm:text-lg " target="_blank" href="https://twitter.com/home">@twitter<img className="h-[2.5em] sm:h-[3em]" src="./images/iconos/gorjeo.png"
                            alt="" /></a>
                    </div>
                    <div>
                        <a className="sm:text-lg " target="_blank" href="https://www.instagram.com/masterbakery.arg/">@instagram<img className=" h-[2.5em] sm:h-[3em]"
                            src="./images/iconos/instagram.png" alt="" /></a>
                    </div>
                </div>
                <div>
                    <p className="text-lg">copyright © 2023 Lopez Alexis.</p>
                </div>

            </footer>

            {/* whatsapp */}
            <div className="w-[2.5em] sm:w-[6em] fixed right-[1em] bottom-[1em]">
                <a target="_blank" href="https://wa.me/5491126970953?text=Hola,%20somos%20Master%20Bakery,%20d%C3%A9janos%20tu%20mensaje%20y%20nos%20comunicamos%20a%20la%20brevedad."><img src="./images/iconos/whatsapp.png" alt="icono wp" /></a>
            </div>
        </>
    )
}

export default Footer