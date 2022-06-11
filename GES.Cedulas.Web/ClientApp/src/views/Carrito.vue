<template>
    <v-container>
        <v-row class="text-center">
            <v-col class="mb-4">
                <h1 class="display-1 font-weight-bold mb-3"
                    align="center">
                    Carrito de compras
                </h1>
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
                            <th>Costo</th>
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
                            <th>{{costo(item.Precio, item.Cantidad)}}</th>
                            <th> | </th>
                            <th>
                                <img :src="aFoto(item.foto)"
                                     width="70"
                                     height="60">
                            </th>
                            <th> | </th>
                            <th>
                                <v-btn color="lime darken-3"
                                       dark
                                       @click="Eliminar(item)">
                                    Eliminar
                                </v-btn>
                            </th>
                        </tr>
                    </tbody>

                </table>
            </v-row>
            <v-row>
                <p>Total de la compra: {{total()}}</p>
            </v-row>

            <v-row>
                <v-btn color="lime darken-3"
                       dark
                       @click="EliminarTodo()">
                    Vaciar Carrito
                </v-btn>
            </v-row>

        </div>
        <v-row>
            <v-btn color="lime darken-3"
                   dark
                   link :to="{ path: '/compras' }">
                Regresar a Compras
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
        name: "Carrito",
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

        mounted() {
            FormularioService.getCarrito().then(
                g => {
                    this.resultados = g;
                    console.log("Buscar");
                    console.log(g);
                }, error => {
                    console.log("Ha habido un error");
                    console.log(error);
                    this.mensaje = 'Ha habido un error';
                    this.colorSnackbar = 'error';
                    this.snackbar = true;
                }
            );
        },

        methods: {
            aFoto(s) {
                return 'data:image/jpeg;base64,' + s;;
            },

            EliminarTodo() {
                var result = confirm("¿Eliminar todo el carrito?");
                if (result == true) {
                    FormularioService.eliminarTodo().then(
                        g => {
                            this.resultados = g;
                            this.mensaje = 'Carrito Vaciado';
                            this.colorSnackbar = 'green';
                            this.snackbar = true;
                            location.reload();
                        }, error => {
                            console.log("Ha habido un error");
                            console.log(error);
                            this.mensaje = 'Ha habido un error';
                            this.colorSnackbar = 'error';
                            this.snackbar = true;
                        }
                    );
                }
            },

            Eliminar(item) {
                var result = confirm("¿Eliminar articulo del carrito?");
                if (result == true) {
                    
                    var fkArticulo = item.FkArticulo;
                    var cantidad = item.Cantidad;
                    FormularioService.eliminar(fkArticulo, cantidad).then(
                        g => {
                            this.resultados = g;
                            this.mensaje = 'Artículo eliminado';
                            this.colorSnackbar = 'green';
                            this.snackbar = true;
                            location.reload();
                        }, error => {
                            console.log("Ha habido un error");
                            console.log(error);
                            this.mensaje = 'Ha habido un error';
                            this.colorSnackbar = 'error';
                            this.snackbar = true;
                        }
                    );
                }
                else {
                    alert("Operación cancelada");
                }
            },

            costo(precio, cantidad) {
                return precio * cantidad;
            },

            total() {
                var total = 0;
                this.resultados.forEach(element =>
                    total = total + this.costo(element.Precio, element.Cantidad)
                );
                return total;
            }
        },
    }
</script>