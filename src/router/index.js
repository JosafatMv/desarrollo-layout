import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

const routes = [
	//la ruta base
	{
		path: '/',
		redirect: '/inicio',
	},
	{
		path: '/',
		component: {
			render(c) {
				return c('router-view');
			},
		},
		children: [
			{
				path: '/inicio',
				name: 'inicio',
				component: () => import('../components/Inicio.vue'),
			},
			{
				path: '/acerca',
				name: 'acerca',
				component: () => import('../components/Acerca.vue'),
			},
			{
				path: '/contacto',
				name: 'contacto',
				component: () => import('../components/Contacto.vue'),
			},
			{
				path: '/tienda-juguetes',
				name: 'tienda-juguetes',
				component: () =>
					import('../components/tienda-juguetes/TiendaJuguetes.vue'),
			},
			{
				path: '/tienda-juguetes/electronicos',
				name: 'electronicos',
				component: () =>
					import('../components/tienda-juguetes/Electronicos.vue'),
			},
			{
				path: '/tienda-juguetes/videojuegos',
				name: 'videojuegos',
				component: () =>
					import('../components/tienda-juguetes/JuegosVideo.vue'),
			},
			{
				path: '/tienda-electrodomesticos',
				name: 'tienda-electrodomesticos',
				component: () =>
					import(
						'../components/tienda-electrodomesticos/TiendaElectrodomesticos.vue'
					),
			},
			{
				path: '/tienda-electrodomesticos/cocina',
				name: 'cocina',
				component: () =>
					import('../components/tienda-electrodomesticos/Cocina.vue'),
			},
			{
				path: '/tienda-electrodomesticos/estufas',
				name: 'estufas',
				component: () =>
					import(
						'../components/tienda-electrodomesticos/Estufas.vue'
					),
			},
			{
				path: '/tienda-hogar',
				name: 'tienda-hogar',
				component: () =>
					import(
						'../components/tienda-productos-hogar/TiendaProductosHogar.vue'
					),
			},
			{
				path: '/tienda-hogar/detergentes',
				name: 'detergentes',
				component: () =>
					import(
						'../components/tienda-productos-hogar/DetergentesIndustriales.vue'
					),
			},
			{
				path: '/tienda-hogar/limpieza',
				name: 'limpieza',
				component: () =>
					import(
						'../components/tienda-productos-hogar/ProductosLimpieza.vue'
					),
			},
			{
				path: '/formulario',
				name: 'formulario',
				component: () => import('../components/Formulario.vue'),
			},
		],
	},
	// {
	// 	path: '/tienda',
	// 	component: () => import('../components/Tienda.vue'),
	// 	children: [
	// 		{
	// 			path: '/tienda',
	// 			name: 'producto',
	// 			component: () => import('../components/Producto.vue'),
	// 		},
	// 	],
	// },
];

const router = new VueRouter({
	routes,
});

export default router;
