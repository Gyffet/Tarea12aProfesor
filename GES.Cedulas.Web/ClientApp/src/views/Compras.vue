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

        <v-row>
            <v-col align="right" cols="8">
                <div class="title row">
                    Buscar       -
                    <v-text-field v-model="busqueda"
                                  required
                                  outlined
                                  dense
                                  label="Ingrese Descripción"></v-text-field>
                </div>
            </v-col>
            <v-col>
                <v-btn color="lime darken-3"
                       dark
                       @click="Buscar()">
                    Buscar
                </v-btn>
            </v-col>
        </v-row>

        <div v-if="resultados!=null">
            <v-row class="text-center">
                <table class="table table-sm table-hover">
                    <thead>
                        <tr>
                            <th>Artículo</th>
                            <th> | </th>
                            <th>Precio</th>
                            <th> | </th>
                            <th>Cantidad</th>
                            <th> | </th>
                            <th>Foto</th>
                            <th> | </th>
                            <th>Cantidad a Comprar</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="item in resultados" :key="item.pkArticulo">
                            <th>{{item.Descripcion}}</th>
                            <th> | </th>
                            <th>{{item.Precio}}</th>
                            <th> | </th>
                            <th>{{item.Cantidad}}</th>
                            <th> | </th>
                            <th>
                                <img :src="aFoto(item.Foto)"
                                     width="70"
                                     height="60">
                            </th>
                            <th> | </th>
                            <th>
                                <v-text-field v-model="item.deseados"
                                              outlined
                                              dense
                                              label="Deseados"></v-text-field>
                                <v-btn color="lime darken-3"
                                       dark
                                       @click="Agregar(item)">
                                    Agregar
                                </v-btn>
                            </th>
                        </tr>
                    </tbody>

                </table>
            </v-row>
        </div>
        <v-row>
            <v-btn color="lime darken-3"
                   dark
                   link :to="{ path: '/carrito' }">
                Carrito
            </v-btn>
        </v-row>
        <v-row>
            {{resultados}}
        </v-row>
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
            resultados:null,
            mensaje: "",
            colorSnackbar: "",
            snackbar: false,
            articulo: {
                descripcion: null,
                precio: null,
                cantidad: 1,
                foto: null,
            },
            loading: false,
            busqueda: null,
        }),

        computed: {
            imageSrc() {
                var path ='data:image/jpeg;base64,'
                return path;
            }
        },

        methods: {
            aFoto(s) {
                return 'data:image/jpeg;base64,' + s;;
            },

            Agregar(item) {
                console.log(item)
                if (parseInt(item.deseados) > item.Cantidad) {
                    this.mensaje = 'Se solicitan más de los que hay disponibles';
                    this.colorSnackbar = 'error';
                    this.snackbar = true;
                }
                else {
                    var articulo = {
                        descripcion: item.Descripcion,
                        precio: item.Precio,
                        cantidad : item.deseados,
                        fkArticulo: item.PkArticulo
                    }
                    var auxiliar = JSON.stringify(articulo);
                    console.log('Json articulo');
                    console.log(auxiliar);
                    FormularioService.alCarro(JSON.stringify(articulo)).then(
                        g => {
                            this.mensaje = 'Guardado en el Carro';
                            this.colorSnackbar = 'green';
                            this.snackbar = true;
                            console.log(g);
                        }, error => {
                            console.log("Ha habido un error");
                            console.log(error);
                            this.mensaje = 'Ha habido un error';
                            this.colorSnackbar = 'error';
                            this.snackbar = true;
                        }
                    )
                }
            },

            Buscar() {
                console.log('Buscar');
                FormularioService.buscar(this.busqueda).then(
                    g => {
                        console.log("Buscar");
                        console.log(g);
                        this.resultados = (g);
                        this.resultados.forEach(element =>
                            element.deseados = 1);
                    }, error => {
                        console.log("Ha habido un error");
                        console.log(error);
                        this.mensaje = 'Ha habido un error';
                        this.colorSnackbar = 'error';
                        this.snackbar = true;
                    }
                );
            },

        },
    }
</script>