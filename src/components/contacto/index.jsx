

function Contacto() {

    return (
        <>
            <section id="contacto">
                <h5 className="text-2xl sm:text-4xl sm:text-white text-orange-400 text-center mb-10 sm:mt-20 font-semibold">
                    ¡Dejanos tus datos y nos contactamos a la
                    brevedad! </h5>
                <div className="flex justify-around  sm:m-20">
                    <div className=" sm:w-1/2">
                        <form className="text-white  " action="" target="_blank">

                            <legend className="text-white text-4xl">Contactanos</legend>
                            <p className="m-1 text-xl w-[100%] flex flex-col sm:flex-row justify-between">Tu nombre: <input
                                className="text-black w-[100%] sm:w-[50%] " required type="text" name="nombre" /></p>
                            <p className="m-1 text-xl w-[100%] flex flex-col sm:flex-row justify-between">Tu CUIT(sin guiones):
                                <input className="text-black w-[100%] sm:w-[50%]" required type="text" name="correo" />
                            </p>
                            <p className="m-1 text-xl w-[100%] flex flex-col sm:flex-row justify-between">Tu Razon Social:
                                <input className="text-black w-[100%] sm:w-[50%]" required type="text" name="correo" />
                            </p>
                            <p className="m-1 text-xl w-[100%] flex flex-col sm:flex-row justify-between">Tu dirección de
                                correo: <input className="text-black w-[100%] sm:w-[50%]" required type="text" name="correo" />
                            </p>
                            <p className="m-1 text-xl w-[100%] flex flex-col sm:flex-row justify-between">Tu Teléfono: <input
                                className="text-black w-[100%] sm:w-[50%]" required type="text" name="correo" /></p>
                            <p className="m-1 text-xl w-[100%] flex flex-col sm:flex-row justify-between">Tu Localidad y
                                Provincia: <input className="text-black w-[100%] sm:w-[50%]" required type="text" name="correo" />
                            </p>
                            <p className="m-1 text-xl ">
                                Tu mensaje:<br />
                                <textarea className="text-black w-[100%] " name="mensaje"></textarea>

                            </p>

                            <div className=" text-center"><button
                                className="bg-orange-400 hover:bg-orange-100 hover:text-orange-700 text-center p-1"><input
                                    type="submit" value="Enviar mensaje" /></button>
                            </div>
                        </form>
                    </div>
                    <div className="hidden md:block ">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6569.490286678339!2d-58.52872857400661!3d-34.585314679049816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1687319846066!5m2!1ses-419!2sar"
                            class="w-[15rem] h-[20rem] lg:w-[20rem] lg:h-[30rem]" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Contacto