<template lang="">
	<div>
		Tienda de electrodomesticos

		<b-breadcrumb :items="items"></b-breadcrumb>

		<div class="row">
			<div class="col-6">
				<b-card
					title="Juegos de video"
					tag="article"
					style="max-width: 20rem"
					class="mb-2"
				>
					<b-card-text>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequatur voluptates sed voluptas, eaque quia
						similique, voluptate, quibusdam quos fugiat
						exercitationem doloribus. Quisquam, quibusdam.
					</b-card-text>

					<b-link :to="{ name: 'cocina' }">Ir a cocina</b-link>
				</b-card>
			</div>

			<div class="col-6">
				<b-card
					title="Juegos electronicos"
					tag="article"
					style="max-width: 20rem"
					class="mb-2"
				>
					<b-card-text>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequatur voluptates sed voluptas, eaque quia
						similique, voluptate, quibusdam quos fugiat
						exercitationem doloribus. Quisquam, quibusdam.
					</b-card-text>

					<b-link :to="{ name: 'estufas' }">Ir a estufas</b-link>
				</b-card>
			</div>
		</div>
	</div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
