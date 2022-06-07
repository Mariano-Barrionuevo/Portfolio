const seccionesPagina = new fullpage('#fullpage', {
	// ──────────────────────────────────────────────────
	//   :::::: Opciones Basicas
	// ──────────────────────────────────────────────────
	autoScrolling: true, // Se activa el scroll.
	fitToSection: true, // Acomoda el scroll automaticamente para que la seccion se muestre en pantalla.
	fitToSectionDelay: 500, // Delay antes de acomodar la seccion automaticamente.
	easing: 'easeInOutCubic', // Funcion de tiempo de la animacion.
	scrollingSpeed: 700, // Velocidad del scroll. Valores: en milisegundos.
	css3: true, // Si usara CSS3 o javascript.
	easingcss3: 'ease-out', // Curva de velocidad del efecto.
	loopBottom: false,
	// ──────────────────────────────────────────────────
	//   :::::: Barra de navegación
	// ──────────────────────────────────────────────────
	navigation: true, // Muesta la barra de navegación.
	menu: '#menu', // Menu de navegación.
	anchors: ['inicio', 'habilidades', 'cursos', 'proyectos', 'contacto'], // Anclas, las usamos para identificar cada seccion y poder acceder a ellas con el menu.
	navigationTooltips: ['INICIO', 'HABILIDADES', 'CURSOS', 'PROYECTOS', 'CONTACTO'], // Tooltips que mostrara por cada boton.
	showActiveTooltip: true, // Mostrar tooltip activa.
	// ──────────────────────────────────────────────────
	//   :::::: Secciones
	// ──────────────────────────────────────────────────
	sectionsColor : ['rgba(0, 0, 0, 0)', '#c2c2c2', 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0'], // Color de fondo de cada seccion.
	verticalCentered: true, // Si alineara de forma vertical los contenidos de cada seccion.
	// ──────────────────────────────────────────────────
	//   :::::: Slides
	// ──────────────────────────────────────────────────
	controlArrows: true, // Flechas del slide
	slidesNavigation: false, // Indicadores del slide
	afterLoad: function(origin, destination){
		if(destination.anchor == 'contacto'){
			document.querySelector('.footer h2').style.opacity = 1;
		}
	}
});