<template lang="">
	<div>
		Cocina

		<b-breadcrumb :items="items"></b-breadcrumb>
	</div>
</template>
<script>
export default {
	data() {
		return {
			items: [
				{
					text: 'Tienda de electrodomesticos',
					to: '/tienda-electrodomesticos',
					name: 'tienda-electrodomesticos',
				},
				{
					text: 'Estufas',
					to: '/tienda-electrodomesticos/estufas',
					name: 'estufas',
				},
			],
		};
	},
};
</script>
<style lang=""></style>
