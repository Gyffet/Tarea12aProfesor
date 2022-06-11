<template>
    <v-container>
        <v-row class="text-center">
            <v-col class="mb-4">
                <h1 class="display-2 font-weight-bold mb-3">
                    Tarea 12
                </h1>
            </v-col>

            <v-col class="mb-5" cols="12">

                <v-btn class="mb-4"
                       elevation="2"
                       color="blue darken-1"
                       raised
                       dark
                       link :to="{ path: '/capturas' }"
                       x-large
                       rounded>
                    Captura de artículo
                </v-btn>
                <br />
                <v-btn class="mb-4"
                       elevation="2"
                       color="blue darken-1"
                       raised
                       dark
                       link :to="{ path: '/compras' }"
                       x-large
                       rounded>
                    Compra de artículo
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "Inicio",
        data: () => ({
            
        }),
        
    };
</script>