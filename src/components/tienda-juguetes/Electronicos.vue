<template lang="">
	<div>
		Juegos electronicos

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
					text: 'Juegos electronicos',
					to: '/tienda-juguetes/electronicos',
					name: 'electronicos',
				},
			],
		};
	},
};
</script>
<style lang=""></style>
