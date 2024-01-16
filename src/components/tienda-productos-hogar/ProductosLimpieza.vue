<template lang="">
	<div>
		Productos de limpieza

		<b-breadcrumb :items="items"></b-breadcrumb>
	</div>
</template>
<script>
export default {
	data() {
		return {
			items: [
				{
					text: 'Tienda de productos de hogar',
					to: '/tienda-hogar',
					name: 'tienda-hogar',
				},
				{
					text: 'Productos de limpieza',
					to: '/tienda-hogar/limpieza',
					name: 'limpieza',
				},
			],
		};
	},
};
</script>
<style lang=""></style>
