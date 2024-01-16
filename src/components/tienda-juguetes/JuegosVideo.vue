<template lang="">
	<div>
		Juegos de Video

		<b-breadcrumb :items="items"></b-breadcrumb>
	</div>
</template>
<script>
export default {
	data() {
		return {
			items: [
				{
					text: 'Tienda de juguetes',
					to: '/tienda-juguetes',
					name: 'tienda-juguetes',
				},
				{
					text: 'Juegos de Video',
					to: '/tienda-juguetes/videojuegos',
					name: 'videojuegos',
				},
			],
		};
	},
};
</script>
<style lang=""></style>
