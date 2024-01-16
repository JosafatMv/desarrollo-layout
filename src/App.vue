<script setup></script>

<template>
	<div class="app">
		<header>
			<div>
				<b-navbar type="dark" variant="dark">
					<b-navbar-nav>
						<b-nav-item href="#">
							<b-link :to="{ name: 'inicio' }">Inicio</b-link>
						</b-nav-item>
						<b-nav-item href="#">
							<b-link :to="{ name: 'acerca' }">Acerca de</b-link>
						</b-nav-item>
						<b-nav-item href="#">
							<b-link :to="{ name: 'contacto' }">Contacto</b-link>
						</b-nav-item>
					</b-navbar-nav>
				</b-navbar>
			</div>
		</header>

		<div class="container-fluid">
			<div class="row">
				<div class="col-2 m-0 p-0">
					<b-nav vertical>
						<b-nav-item>
							<b-link :to="{ name: '/' }">Inicio</b-link>
						</b-nav-item>
						<b-nav-item href="#">
							<b-link :to="{ name: 'acerca' }">Acerca de</b-link>
						</b-nav-item>
						<b-nav-item href="#">
							<b-link :to="{ name: 'contacto' }">Contacto</b-link>
						</b-nav-item>
						<b-nav-item href="#">
							<b-link :to="{ name: 'tienda-juguetes' }"
								>Tienda de juguetes</b-link
							>
						</b-nav-item>
						<b-nav-item href="#">
							<b-link :to="{ name: 'tienda-electrodomesticos' }"
								>Tienda de electrodomesticos</b-link
							>
						</b-nav-item>
						<b-nav-item href="#">
							<b-link :to="{ name: 'tienda-hogar' }"
								>Tienda de productos de hogar</b-link
							>
						</b-nav-item>
					</b-nav>
				</div>

				<div class="col-10">
					<router-view />
				</div>
			</div>
		</div>

		<footer class="footer">
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
				odio tenetur consequuntur? Ipsa aspernatur possimus ut placeat
				nihil voluptatum delectus porro dolore ex, vel qui itaque
			</p>
		</footer>
	</div>
</template>

<style scoped>
.app {
	height: 100vh;
}

.footer {
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 60px;
	background-color: #f5f5f5;
}
</style>
