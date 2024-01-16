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
					text: 'Tienda de detergentes industriales',
					to: '/tienda-hogar',
					name: 'tienda-hogar',
				},
				{
					text: 'Detergentes industriales',
					to: '/tienda-hogar/detergentes',
					name: 'detergentes',
				},
			],
		};
	},
};
</script>
<style lang=""></style>
