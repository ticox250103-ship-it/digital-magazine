export const EDITIONS = [
    {
        id: "edicion-1",
        number: 1,
        title: "1era Edición",
        fullTitle: "1era Edición · Período Académico 2026-01",
        period: "2026-01",
        subtitle: "Pasantías I en la Oficina de Farmacia",
        faculty: "Facultad de Farmacia — Universidad Santa María, Sede La Florencia",
        description: "Artículos científicos realizados por los estudiantes del 8vo Semestre como requisito obligatorio de sus pasantías en la oficina de farmacia. Investigaciones académicas basadas en experiencias prácticas de campo.",
        publishDate: "Febrero 2026",
        articlesCount: 15,
        articles: [
            {
                id: 1,
                title: "Propuesta de inclusión de dislipidemia en el programa Cuidamos tu Salud de Farmatodo Venezuela",
                excerpt: "Autores: López David y Cáceres Veronica",
                category: "Patologías",
                imageUrl: "https://image.tuasaude.com/media/article/ls/oo/dislipidemia_54189.jpg",
                readTime: "Lectura de 6 min",
                isLarge: true,
                pdfFile: "ediciones/edicion-1/1.pdf"
            },
            {
                id: 2,
                title: "Análisis de la confusión que genera el descuento del 15% en la aplicación de Farmatodo entre los clientes",
                excerpt: "Autores: Ropero Keymy y Vilchez Gabriela",
                category: "Atención al Cliente",
                imageUrl: "https://tse1.explicit.bing.net/th/id/OIP.A602EjHkhvM36YbB12Nt8wHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
                readTime: "Lectura de 4 min",
                isLarge: false,
                pdfFile: "ediciones/edicion-1/2.pdf"
            },
            {
                id: 3,
                title: "Sistema de notificación de productos próximos a vencer para la optimización de gestión de inventarios.",
                excerpt: "Autores: Cedeño Julio y Monsalve Sebastian",
                category: "Innovación",
                imageUrl: "https://img.freepik.com/foto-gratis/farmaceutica-mesa-comprobando-stock-farmacia_23-2150359102.jpg",
                readTime: "Lectura de 5 min",
                isLarge: false,
                pdfFile: "ediciones/edicion-1/3.pdf"
            },
            {
                id: 4,
                title: "Propuesta de capacitación en fórmulas magistrales y oficinales para fortalecer la atención sanitaria en Farmatodo",
                excerpt: "Autores: Rondón Salim y Rondón Samir",
                category: "Fórmulas Magistrales",
                imageUrl: "https://farmaciasaragossa.com/wp-content/uploads/2025/01/Formulas-Magistrales.jpg",
                readTime: "Lectura de 8 min",
                isLarge: false,
                pdfFile: "ediciones/edicion-1/4.pdf"
            },
            {
                id: 5,
                title: "Estrategias de seguridad asistencial y continuidad operativa ante fallas eléctricas en farmacias: Propuesta del protocolo PCOSA",
                excerpt: "Autores: Araujo Margaret y Torres Gabriela",
                category: "Estrategias",
                imageUrl: "https://cdn.pixabay.com/photo/2024/03/26/11/57/woman-8656655_1280.jpg",
                readTime: "Lectura de 7 min",
                isLarge: false,
                pdfFile: "ediciones/edicion-1/5.pdf"
            },
            {
                id: 6,
                title: "Uso indiscriminado de antibióticos y el rol del farmacéutico: análisis crítico durante pasantías profesionales.",
                excerpt: "Autores: Touma Antonio y Salazar Stephany",
                category: "Farmacovigilancia",
                imageUrl: "https://cdn.pixabay.com/photo/2016/07/24/21/01/thermometer-1539191_1280.jpg",
                readTime: "Lectura de 9 min",
                isLarge: true,
                pdfFile: "ediciones/edicion-1/6.pdf"
            },
            {
                id: 7,
                title: "Impacto del déficit de personal en la incidencia de errores en la oficina de farmacia",
                excerpt: "Autores: Martinez Marion y Marquez Luisana",
                category: "Atención al Cliente",
                imageUrl: "https://www.pluriva.com/wp-content/uploads/2023/03/deficit_personal.jpg",
                readTime: "Lectura de 5 min",
                isLarge: false,
                pdfFile: "ediciones/edicion-1/7.pdf"
            },
            {
                id: 8,
                title: "Estrategias comunicacionales para la delimitación del rol farmacéutico en la dispensación",
                excerpt: "Autores: López Fabiola, Molina Nahomith y Torrealba Jose",
                category: "Estrategias",
                imageUrl: "https://plus.unsplash.com/premium_photo-1661766456250-bbde7dd079de?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8",
                readTime: "Lectura de 6 min",
                isLarge: false,
                pdfFile: "ediciones/edicion-1/8.pdf"
            },
            {
                id: 9,
                title: "Evaluación del uso de medias de compresión en la bipedestación prolongada en farmacias",
                excerpt: "Autores: Arena Irina, Baptista Ariadne y De Abreu Yosmar",
                category: "Patologías",
                imageUrl: "https://img.freepik.com/fotos-premium/ilustracion-dolor-pie-como-modelo-3d-cuerpo-lastimado-que-necesita-pastillas-hospital-generative-ai_699690-16916.jpg",
                readTime: "Lectura de 4 min",
                isLarge: false,
                pdfFile: "ediciones/edicion-1/9.pdf"
            },
            {
                id: 10,
                title: "Optimización del sistema en línea de Farmatodo",
                excerpt: "Autores: Molina Rafael y Grasso Giovanna",
                category: "Innovación",
                imageUrl: "https://cdn.pixabay.com/photo/2015/03/04/02/36/image-portal-658240_640.jpg",
                readTime: "Lectura de 7 min",
                isLarge: false,
                pdfFile: "ediciones/edicion-1/10.pdf"
            },
            {
                id: 11,
                title: "Optimización del área de recetura: guía paso a paso",
                excerpt: "Autores: Añez Karla, Porras Juan y Salas Victoria",
                category: "Fórmulas Magistrales",
                imageUrl: "https://img.freepik.com/fotos-premium/laboratorio-desarrollo-productos-cientificos-que-trabajan-formulaciones-cuidado-piel_995578-20627.jpg",
                readTime: "Lectura de 8 min",
                isLarge: true,
                pdfFile: "ediciones/edicion-1/11.pdf"
            },
            {
                id: 12,
                title: "Propuesta de un modelo de gestión integral de datos entre la entidad aseguradora y la oficina de farmacia.",
                excerpt: "Autores: Castro Margareth y Garcia Ariadna",
                category: "Innovación",
                imageUrl: "https://cdn.pixabay.com/photo/2023/09/20/07/36/doctor-8264057_640.jpg",
                readTime: "Lectura de 5 min",
                isLarge: false,
                pdfFile: "ediciones/edicion-1/12.pdf"
            },
            {
                id: 13,
                title: "Asesoría técnica especializada para la optimización de la dispensación de productos OTC en Farmatodo C.A",
                excerpt: "Autores: Dias Katherina, Romero Joshua y Villegas Carmen",
                category: "Innovación",
                imageUrl: "https://img.freepik.com/fotos-premium/productos-farmaceuticos_662214-3335.jpg",
                readTime: "Lectura de 4 min",
                isLarge: false,
                pdfFile: "ediciones/edicion-1/13.pdf"
            },
            {
                id: 14,
                title: "Identificación de la falta de capacitación en el manejo de materiales médico-quirúrgicos en farmacias comunitarias",
                excerpt: "Autores: Varela Soliangel, Verdis Leidy y Vinaja Francys",
                category: "Innovación",
                imageUrl: "https://www.cofide.mx/hs-fs/hubfs/Imagenes%20MS/Falta%20de%20capacitacion/repercusiones-en-la-empresa-por-falta-de-capacitacion.png?width=900&height=500&name=repercusiones-en-la-empresa-por-falta-de-capacitacion.png",
                readTime: "Lectura de 6 min",
                isLarge: false,
                pdfFile: "ediciones/edicion-1/14.pdf"
            },
            {
                id: 15,
                title: "Evaluación de la calidad de atención y dispensación ante falta de farmacéuticos adjuntos en Farmatodo.",
                excerpt: "Autores: Navarro Sofía, Ramos Valentina y Valdivieso Lorena",
                category: "Atención al Cliente",
                imageUrl: "https://blog.hubspot.es/hubfs/WhatsApp%20Image%202023-04-06%20at%202.04.27%20PM.jpeg",
                readTime: "Lectura de 5 min",
                isLarge: false,
                pdfFile: "ediciones/edicion-1/15.pdf"
            }
        ]
    }
    // Futuras ediciones pueden agregarse aquí fácilmente:
    // {
    //    id: "edicion-2",
    //    number: 2,
    //    title: "2da Edición",
    //    ...
    // }
];
