<script setup></script>

<template>
	<div class="app">
		<header>
			<div>
				<b-navbar type="dark" variant="dark">
					<b-navbar-nav>
						<b-nav-item href="#">Home</b-nav-item>

						<b-nav-item-dropdown text="Lang" right>
							<b-dropdown-item href="#">EN</b-dropdown-item>
							<b-dropdown-item href="#">ES</b-dropdown-item>
							<b-dropdown-item href="#">RU</b-dropdown-item>
							<b-dropdown-item href="#">FA</b-dropdown-item>
						</b-nav-item-dropdown>

						<b-nav-item-dropdown text="User" right>
							<b-dropdown-item href="#">Account</b-dropdown-item>
							<b-dropdown-item href="#">Settings</b-dropdown-item>
						</b-nav-item-dropdown>
					</b-navbar-nav>
				</b-navbar>
			</div>
		</header>

		<div class="container-fluid">
			<div class="row">
				<div class="col-3 m-0 p-0">
					<b-list-group>
						<b-list-group-item href="#">Link 1</b-list-group-item>
						<b-list-group-item href="#">Link 2</b-list-group-item>
						<b-list-group-item href="#">Link 3</b-list-group-item>
						<b-list-group-item href="#">Link 4</b-list-group-item>
					</b-list-group>
				</div>
				<div class="col-9">
					<h2>texto</h2>
					<p>
						beatae suscipit quia molestias. Blanditiis illo saepe
						mollitia minus eos explicabo architecto maiores neque
						cum quasi quis eum nam voluptate vero quaerat sint
						temporibus, recusandae doloremque reprehenderit unde
						nisi ad, repellendus provident. Natus, libero. Provident
						eaque velit numquam consequatur eveniet itaque rem
						officia, animi atque possimus perspiciatis distinctio!
						Ut laudantium incidunt at eos hic modi, enim nobis
						placeat voluptas tempora quibusdam quaerat. Numquam,
						quo!
					</p>
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
