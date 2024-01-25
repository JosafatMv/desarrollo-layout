<template>
	<b-container>
		<div>
			<b-form @submit.prevent="checkForm" action="" method="post">
				<b-alert variant="danger" dismissible :show="errors.length > 0">
					<b>{{
						errors.length > 1
							? 'Corrige los siguientes errores:'
							: 'Corrige el siguiente error:'
					}}</b>
					<ul>
						<li v-for="error in errors" :key="error">
							{{ error }}
						</li>
					</ul>
				</b-alert>

				<b-form-group
					id="name-group"
					label="Nombre Completo"
					:state="validName(name) ? null : false"
				>
					<b-form-input
						id="name"
						v-model="name"
						type="text"
						name="name"
					></b-form-input>
				</b-form-group>

				<b-form-group
					id="address-group"
					label="Dirección"
					:state="validAddress(address) ? null : false"
				>
					<b-form-input
						id="address"
						v-model="address"
						type="text"
						name="address"
						required
					></b-form-input>
				</b-form-group>

				<b-form-group
					id="birthdate-group"
					label="Fecha de Nacimiento"
					:state="validBirthdate(birthdate) ? null : false"
				>
					<b-form-input
						id="birthdate"
						v-model="birthdate"
						type="date"
						name="birthdate"
						required
					></b-form-input>
				</b-form-group>

				<b-form-group
					id="email-group"
					label="Correo Electrónico"
					:state="validEmail(email) ? null : false"
				>
					<b-form-input
						id="email"
						v-model="email"
						type="email"
						name="email"
						required
					></b-form-input>
				</b-form-group>

				<b-form-group
					id="phone-group"
					label="Número Telefónico"
					:state="validPhone(phone) ? null : false"
				>
					<b-form-input
						id="phone"
						v-model="phone"
						type="tel"
						name="phone"
						required
					></b-form-input>
				</b-form-group>

				<b-form-group
					id="photo-group"
					label="Fotografía (PNG)"
					:state="validPhoto(photo) ? null : false"
				>
					<b-form-file
						id="photo"
						v-model="photo"
						accept="image/png"
					></b-form-file>
				</b-form-group>

				<b-button type="submit" variant="primary">Enviar</b-button>
			</b-form>
		</div>
	</b-container>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
	data() {
		return {
			errors: [],
			name: null,
			address: null,
			birthdate: null,
			email: null,
			phone: null,
			photo: null,
		};
	},
	methods: {
		checkForm: function (e) {
			this.errors = [];

			if (!this.validName(this.name)) {
				this.errors.push('Nombre y apellido paterno son obligatorios.');
			}

			if (!this.validAddress(this.address)) {
				this.errors.push('Dirección es obligatoria.');
			}

			if (!this.validBirthdate(this.birthdate)) {
				this.errors.push(
					'Fecha de nacimiento no puede ser presente ni futura, y debes tener al menos 18 años.'
				);
			}

			if (!this.validEmail(this.email)) {
				this.errors.push('Correo electrónico no válido.');
			}

			if (!this.validPhone(this.phone)) {
				this.errors.push(
					'Número telefónico debe tener un tamaño válido.'
				);
			}

			if (!this.validPhoto(this.photo)) {
				this.errors.push(
					'Fotografía debe ser un archivo PNG de menos de 3 MB.'
				);
			}

			if (this.errors.length === 0) {
				return true;
			}

			e.preventDefault();
		},

		validName: function (name) {
			return name && name.split(' ').length >= 2;
		},

		validAddress: function (address) {
			return address && address.length > 0;
		},

		validBirthdate: function (birthdate) {
			let today = new Date();
			let birthdateDate = new Date(birthdate);
			let age = today.getFullYear() - birthdateDate.getFullYear();
			let m = today.getMonth() - birthdateDate.getMonth();

			if (
				m < 0 ||
				(m === 0 && today.getDate() < birthdateDate.getDate())
			) {
				age--;
			}

			return age >= 18;
		},

		validEmail: function (email) {
			let re =
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		},

		validPhone: function (phone) {
			return phone && phone.length >= 8 && phone.length <= 10;
		},

		validPhoto: function (photo) {
			return photo && photo.size < 3000000 && photo.type === 'image/png';
		},
	},
});
</script>

<style></style>
