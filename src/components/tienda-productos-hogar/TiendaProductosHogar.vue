<template lang="">
	<div>
		Tienda de jueguetes

		<b-breadcrumb :items="items"></b-breadcrumb>

		<!-- Cards para juegos de video y juegos electronicos -->
		<div class="row">
			<div class="col-6">
				<b-card
					title="Productos de limpieza"
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

					<b-link :to="{ name: 'limpieza' }"
						>Ir a productos de limpieza</b-link
					>
				</b-card>
			</div>

			<div class="col-6">
				<b-card
					title="Detergentes industriales"
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

					<b-link :to="{ name: 'detergentes' }"
						>Ir a detergentes industriales</b-link
					>
				</b-card>
			</div>
		</div>
	</div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
