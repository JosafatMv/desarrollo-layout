<template lang="">
	<div>
		<b-breadcrumb :items="items"></b-breadcrumb>
	</div>
</template>
<script>
export default {
	data() {
		return {
			items: [
				{
					text: 'Acerca',
					to: '/acerca',
					name: 'acerca',
				},
				{
					text: 'Contacto',
					to: '/contacto',
					name: 'contacto',
				},
				{
					text: 'Inicio',
					to: '#',
					name: 'inicio',
				},
			],
		};
	},
};
</script>
<style lang=""></style>
