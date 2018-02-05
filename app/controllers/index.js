import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		nuevoLed(nombre){
			this.store.createRecord('led', {
				nombre: nombre,
				valor: false
			}).save()
			this.set('nombre', undefined)
		},
		save(led){
			led.set('valor', !led.get('valor'))
			led.save()
		},
		borrar(led){

			led.destroyRecord()
		}
	}
});
