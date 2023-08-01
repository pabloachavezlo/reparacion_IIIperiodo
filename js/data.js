let data = [
    {
        titulo: "Cambio de pasta térmica",
        precio: "Q100",
        img: "https://mx.chemtronics.com/content/images/thumbs/0002268_circuit-works-thermal-paste-users-guide.jpeg",
        descripción: "Cómo cambiar la pasta térmica del procesador",
        herramientas: [
            "Destornillador de estrella",
            "Paño de microfibra",
            "Pasta térmica",
        ],
        pasos: [
            "Apaga la computadora y desconéctala de la corriente.",
            "Desmonta el disipador de calor del procesador.",
            "Limpia cuidadosamente la pasta térmica anterior con el paño de microfibra.",
            "Aplica una nueva capa de pasta térmica en el procesador.",
            "Vuelve a colocar el disipador de calor en su lugar y asegúralo con el destornillador.",
            "Conecta la computadora de nuevo y enciéndela."
        ]
    },
    {
        titulo: "Actualización de BIOS",
        precio: "Q100",
        img: "https://hardzone.es/app/uploads-hardzone.es/2021/09/Actualizar-BIOS.jpg",
        descripción: "Cómo actualizar el BIOS de tu placa base para mejorar el rendimiento y la compatibilidad",
        herramientas: [
            "Unidad USB",
            "Conexión a Internet estable",
        ],
        pasos: [
            "Descarga la última versión del BIOS desde el sitio web del fabricante de la placa base.",
            "Copia el archivo del BIOS en la unidad USB.",
            "Reinicia la computadora e ingresa a la configuración del BIOS presionando una tecla específica (generalmente Del o F2).",
            "Busca la opción de actualización de BIOS y selecciona el archivo desde la unidad USB.",
            "Sigue las instrucciones en pantalla para completar la actualización.",
            "Una vez que la actualización se complete, reinicia la computadora."
        ]
    },
    {
        titulo: "Limpieza del teclado",
        precio: "Q100",
        img: "https://cdn.pccomponentes.com/blog/limpieza-teclado1.jpg",
        descripción: "Cómo limpiar y mantener tu teclado para un mejor funcionamiento y apariencia",
        herramientas: [
            "Cepillo pequeño",
            "Aire comprimido",
            "Paño suave",
        ],
        pasos: [
            "Apaga y desconecta el teclado de la computadora.",
            "Usa el cepillo pequeño para eliminar partículas y polvo entre las teclas.",
            "Rocía aire comprimido para eliminar la suciedad y el polvo atrapados.",
            "Humedece el paño suave con agua o una solución de limpieza suave y limpia las teclas con cuidado.",
            "Seca el teclado completamente antes de volver a conectarlo a la computadora."
        ]
    },
    {
        titulo: "Instalación de RAM",
        precio: "Q100",
        img: "https://datalockperu.com/wp-content/uploads/2022/03/Como-instalar-memoria-RAM-en-tu-PC-1.jpg",
        descripción: "Cómo instalar módulos de memoria RAM adicionales para aumentar la capacidad y velocidad de tu computadora",
        herramientas: [
            "Pulsera antiestática",
            "Destornillador",
            "Módulos de RAM",
        ],
        pasos: [
            "Apaga y desconecta la computadora de la corriente.",
            "Abre el panel lateral de la caja de la computadora.",
            "Localiza las ranuras de la placa base para insertar los módulos de RAM.",
            "Presiona los módulos de RAM cuidadosamente en las ranuras hasta que encajen en su lugar.",
            "Vuelve a cerrar el panel lateral de la caja de la computadora.",
            "Conecta la computadora y enciéndela para verificar la nueva RAM."
        ]
    },
    {
        titulo: "Optimización del disco duro",
        precio: "Q100",
        img: "https://hardzone.es/app/uploads-hardzone.es/2019/12/Disco-duro-01.jpg",
        descripción: "Cómo desfragmentar y liberar espacio en tu disco duro para mejorar el rendimiento del sistema",
        herramientas: [
            "Software de desfragmentación",
            "Utilidad de limpieza de disco",
        ],
        pasos: [
            "Abre el software de desfragmentación y selecciona el disco duro que deseas desfragmentar.",
            "Inicia el proceso de desfragmentación y espera a que se complete.",
            "Lanza la utilidad de limpieza de disco para eliminar archivos innecesarios y temporales.",
            "Selecciona los archivos que desees eliminar y confirma la limpieza.",
            "Reinicia la computadora para aplicar los cambios y mejorar el rendimiento del disco duro."
        ]
    },
    {
        titulo: "Configuración de Red Wi-Fi",
        precio: "Q100",
        img: "https://media.kasperskydaily.com/wp-content/uploads/sites/88/2014/12/05223339/wifi.png",
        descripción: "Cómo configurar y asegurar una conexión Wi-Fi para tu computadora",
        herramientas: [
            "Contraseña de red",
            "Acceso al enrutador",
        ],
        pasos: [
            "Abre el menú de configuración de la computadora y busca la opción de redes inalámbricas.",
            "Selecciona la red Wi-Fi a la que deseas conectarte e ingresa la contraseña de red.",
            "Espera a que la computadora se conecte a la red Wi-Fi.",
            "Accede a la configuración del enrutador para asegurar la red mediante el cifrado WPA2 o superior.",
            "Establece una contraseña segura para el enrutador y guarda los cambios.",
            "Reinicia la computadora y comprueba que esté conectada a la red Wi-Fi de manera segura."
        ]
    },
    {
        titulo: "Reemplazo de Ventiladores",
        precio: "Q100",
        img: "https://tutowin10.com/wp-content/uploads/2020/02/cambiar-ventilador-pc-min.jpg",
        descripción: "Cómo reemplazar los ventiladores defectuosos de tu computadora para evitar el sobrecalentamiento",
        herramientas: [
            "Destornillador",
            "Nuevos ventiladores",
        ],
        pasos: [
            "Apaga la computadora y desconéctala de la corriente.",
            "Abre el panel lateral de la caja de la computadora.",
            "Desconecta los cables de los ventiladores defectuosos de la placa base.",
            "Retira los tornillos que sujetan los ventiladores en su lugar.",
            "Instala los nuevos ventiladores y asegúralos con los tornillos.",
            "Conecta los cables de los nuevos ventiladores a la placa base.",
            "Vuelve a cerrar el panel lateral de la caja de la computadora y conecta la computadora de nuevo.",
            "Enciende la computadora y verifica que los nuevos ventiladores funcionen correctamente."
        ]
    },
    {
        titulo: "Respaldo de Datos en la Nube",
        precio: "Q100",
        img: "https://www.datos101.com/wp-content/uploads/2019/05/iStock-645150874-1200x480.jpg",
        descripción: "Cómo realizar copias de seguridad de tus archivos importantes en servicios de almacenamiento en la nube",
        herramientas: [
            "Cuenta de almacenamiento en la nube",
            "Conexión a Internet",
        ],
        pasos: [
            "Crea una cuenta en un servicio de almacenamiento en la nube de tu elección.",
            "Descarga e instala la aplicación del servicio en tu computadora.",
            "Inicia sesión en la aplicación con tu cuenta.",
            "Selecciona los archivos que desees respaldar y súbelos al almacenamiento en la nube.",
            "Espera a que los archivos se suban y confirmen que están seguros en la nube.",
            "Accede a tus archivos respaldados desde cualquier dispositivo con tu cuenta de almacenamiento en la nube."
        ]
    },
    {
        titulo: "Instalación de Tarjeta Gráfica",
        precio: "Q100",
        img: "https://lignux.com/wp-content/uploads/2021/04/Tarjeta-grafica.jpg",
        descripción: "Cómo instalar una nueva tarjeta gráfica para mejorar el rendimiento gráfico de tu computadora",
        herramientas: [
            "Destornillador",
            "Nueva tarjeta gráfica",
        ],
        pasos: [
            "Apaga la computadora y desconéctala de la corriente.",
            "Abre el panel lateral de la caja de la computadora.",
            "Localiza la ranura de la tarjeta gráfica en la placa base.",
            "Retira la tarjeta gráfica anterior, si la hay, aflojando los tornillos que la sujetan.",
            "Inserta la nueva tarjeta gráfica en la ranura y asegúrala con los tornillos.",
            "Conecta los cables de alimentación de la tarjeta gráfica, si es necesario.",
            "Vuelve a cerrar el panel lateral de la caja de la computadora.",
            "Conecta la computadora de nuevo y enciéndela.",
            "Instala los controladores de la tarjeta gráfica desde el sitio web del fabricante."
        ]
    },
    {
        titulo: "Mantenimiento del Sistema Operativo",
        precio: "Q100",
        img: "https://blog.redigit.es/wp-content/uploads/2018/10/imagen-destacada-mantenimiento-ordenadores-redigit.jpg",
        descripción: "Cómo realizar un mantenimiento regular del sistema operativo para mantenerlo actualizado y optimizado",
        herramientas: [
            "Actualizaciones de software",
            "Herramientas de limpieza de sistema",
        ],
        pasos: [
            "Verifica si hay actualizaciones del sistema operativo disponibles y realiza la instalación.",
            "Ejecuta una herramienta de limpieza de sistema para eliminar archivos temporales y basura.",
            "Revisa y desinstala programas no utilizados para liberar espacio en el disco.",
            "Escanea el sistema en busca de malware y virus utilizando un software de seguridad.",
            "Optimiza la configuración del sistema operativo para un mejor rendimiento.",
            "Realiza copias de seguridad regulares de tus archivos importantes.",
            "Mantén actualizados los controladores de hardware para un funcionamiento óptimo."
        ]
    }
];

export {data};
