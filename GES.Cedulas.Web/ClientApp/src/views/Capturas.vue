<template>
    <v-container>
        <v-row class="text-center">
            <v-col class="mb-4">
                <h1 class="display-1 font-weight-bold mb-3"
                    align="center">
                    Capturas de Artículos
                </h1>
            </v-col>
        </v-row>

        <v-row class="text-center">
            <v-col align="left" cols="8">
                <div class="title row">
                    Descripción       -
                    <v-text-field v-model="articulo.descripcion"
                                  required
                                  outlined
                                  dense
                                  label="Ingrese Descripción"></v-text-field>
                </div>
            </v-col>
        </v-row>

        <v-row class="text-center">
            <v-col align="left" cols="8">
                <div class="title row">
                    Precio       -
                    <v-text-field v-model="articulo.precio"
                                  required
                                  outlined
                                  dense
                                  label="Ingrese Precio"></v-text-field>
                </div>
            </v-col>
        </v-row>

        <v-row class="text-center">
            <v-col align="left" cols="8">
                <div class="title row">
                    Cantidad       -
                    <v-text-field v-model="articulo.cantidad"
                                  required
                                  outlined
                                  dense
                                  label="Cantidad"></v-text-field>
                </div>
            </v-col>
        </v-row>

        <v-row class="text-center">
            <v-col align="left" cols="8">
                <div class="title row">
                    Fotografía       -
                    <!--<input class="form-control" type="file" id="input" accept=".jpg, .jpeg" @change="fileChange($event.target.files)">-->
                    <input class="form-control" type="file" id="input" accept=".jpg, .jpeg" @change="fileChange($event.target.files)">
                </div>
            </v-col>
        </v-row>

        <v-btn 
               color="lime darken-3"
               dark
               @click="Alta()">
            Guardar
        </v-btn>

        {{articulo}}
        {{foto}}
        <v-snackbar v-model="snackbar"
                    :color="colorSnackbar"
                    :multi-line="true"
                    :timeout="5000">
            {{ mensaje }}
            <v-btn dark
                   text
                   @click="snackbar = false">
                Cerrar
            </v-btn>
        </v-snackbar>

    </v-container>
</template>

<script>
    import FormularioService from '../services/formulario-service';
    export default {
        name: "Altas",
        data: () => ({
            folio:null,
            mensaje: "",
            colorSnackbar: "",
            snackbar: false,
            articulo: {
                descripcion: null,
                precio: null,
                cantidad: 1,
                //foto: null,
            },
            foto:null,
            loading: false,
            file: null,

        }),

        /*ready: function () {
            // watch for file input on bootstrap
            this.watchFileInput();
        },*/

        methods: {

            /*watchFileInput: function () {
                // will notify a file input
                $('input[type="file"]').change(this.notifyFileInput.bind(this));
            },

            notifyFileInput: function (event) {
                var fileName = event.target.files[0].name;
                // update file name value
                this.file = fileName;
                console.log(this.file)
            },
            */
            fileChange(fileList) {

                const file = fileList[0];

                // Encode the file using the FileReader API
                const reader = new FileReader();
                reader.onloadend = () => {
                    // Use a regex to remove data url part
                    const base64String = reader.result
                        .replace('data:', '')
                        .replace(/^.+,/, '');

                    console.log(base64String);
                    this.foto = base64String.toString();
                    // Logs wL2dvYWwgbW9yZ...
                };
                reader.readAsDataURL(file);
                /*console.log(fileList[0]);
                var resultado;
                const file = fileList[0];
                var reader = new FileReader();
                reader.onloadend = () => {
                    // Use a regex to remove data url part
                    const base64String = reader.result
                        .replace('data:', '')
                        .replace(/^.+,/, '');

                    console.log(base64String);
                    // Logs wL2dvYWwgbW9yZ...
                };
                reader.readAsDataURL(file);

                reader.onload = function () {
                    console.log('a base64');
                    console.log(reader.result);
                    resultado = reader.result;
                    console.log(resultado);
                };
                reader.onerror = function (error) {
                    console.log('Error: ', error);
                };
                this.articulo.foto = resultado.toString();*/
            },



            Alta() {
                console.log('Guardar');
                FormularioService.alta(JSON.stringify(this.articulo), this.foto).then(
                    g => {
                        console.log("Enviado");
                        console.log(g);
                        this.mensaje = 'Guardado';
                        this.colorSnackbar = 'green';
                        this.snackbar = true;
                        //this.foto.set('id', g);
                        //FormularioService.insertArchivo(this.foto);
                    }, error => {
                        console.log("Ha habido un error");
                        console.log(error);
                        this.mensaje = 'Ha habido un error';
                        this.colorSnackbar = 'error';
                        this.snackbar = true;
                    }
                );
            },

            /*Modificar() {
                var datos = {
                    persona: this.datosPersonales,
                    institucion: JSON.stringify(this.Institucion),
                    capacitacion: JSON.stringify(this.Capacitacion),
                    pago: JSON.stringify(this.planPago),
                    id: this.pkPersona,
                };
                console.log(datos);
                FormularioService.modificar(datos).then(
                    g => {
                        console.log("Enviado");
                        console.log(g);
                        this.mensaje = 'Modificado';
                        this.colorSnackbar = 'green';
                        this.snackbar = true;
                    }, error => {
                        console.log("Ha habido un error");
                        console.log(error);
                        this.mensaje = 'Ha habido un error';
                        this.colorSnackbar = 'error';
                        this.snackbar = true;
                    }
                );
            },*/
        },

        /*mounted() {
            const folio = localStorage.getItem('folio');
            console.log("folio");
            console.log(folio);
            if (folio) {
                localStorage.removeItem('folio');
                this.folio = folio;
                FormularioService.getPersona(folio).then(
                    per => {
                        console.log("Persona Recuperada");
                        console.log(per);
                        this.pkPersona = per.pkFormulario;
                        this.datosPersonales.nombre = per.nombre;
                        this.datosPersonales.apellido = per.apellido;
                        this.datosPersonales.direccion = per.direccion;
                        this.datosPersonales.telefono = per.telefono;
                        this.datosPersonales.correo = per.correo;
                        this.datosPersonales.documento = per.documento;
                        this.datosPersonales.fechaNacimiento = per.fechaNacimiento;

                        this.Institucion.numero = per.noContrato;
                        this.Institucion.personas = per.personaAtendio;
                        this.Institucion.fecha = per.fechaInscripcion;

                        this.planPago.pago = per.formaPago;

                        this.Capacitacion.nombre = per.curso;
                        this.Capacitacion.horario = per.horario;

                    }, error => {
                        console.log("hay error");
                        console.log(error);
                    });
            }
        }*/

    }
</script>