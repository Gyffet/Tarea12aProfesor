import axios from 'axios';
//import authHeader from '../services/auth-header';
//import Utils from '../services/utils';

class FormularioServices {

    alta(e,f) {
        console.log('service formulario');
        console.log(e);
        /*return axios.post(Utils.urlAPI() + 'formulario/alta',
            {
                
            },
            {
                params: {
                    z: e,
                    
                },
                headers: authHeader()
            })
            .then(this.handleResponse).then(response => {
                console.log('api guardar formulario');
                console.log(response);
                return response.data;
            });
        */
        //Para azure

        return axios.post('https://tarea12420220610061513.azurewebsites.net/api/Alta', { 'f': f }, { params: { e } })
        //return axios.post('http://localhost:7286/api/Alta', { 'f': f }, { params: { e } })
            .then(this.handleResponse).then(response => {
                console.log('api guardar formulario');
                console.log(response);
                return response.data;
            });

    }

    eliminar(fk, cantidad) {
        console.log('service formulario');
        console.log(fk);
        //return axios.post('http://localhost:7286/api/Eliminar', null,{ params: { fk, cantidad }})
        return axios.post('https://tarea12420220610061513.azurewebsites.net/api/Eliminar', null, { params: { fk, cantidad } })
            .then(this.handleResponse).then(response => {
                console.log('api guardar formulario');
                console.log(response);
                return response.data;
            });
        /*console.log('service formulario');
        console.log(e);
        return axios.post(Utils.urlAPI() + 'formulario/eliminar',
            {
            },
            {
                params: {
                    z: e,
                    y: y,
                },
                headers: authHeader()
            })
            .then(this.handleResponse).then(response => {
                console.log('api guardar formulario');
                console.log(response);
                return response.data;
            });*/
    }

    alCarro(e) {
        console.log('service formulario');
        console.log(e);
        
        //return axios.post('http://localhost:7286/api/alCarro', null, { params: { e } })
        return axios.post('https://tarea12420220610061513.azurewebsites.net/api/alCarro', null, { params: { e } })
            .then(this.handleResponse).then(response => {
                console.log('api guardar formulario');
                console.log(response);
                return response.data;
            });
        /*console.log('service formulario');
        console.log(e);
        return axios.post(Utils.urlAPI() + 'formulario/alcarro',
            {
            },
            {
                params: {
                    z: e,
                },
                headers: authHeader()
            })
            .then(this.handleResponse).then(response => {
                console.log('api guardar formulario');
                console.log(response);
                return response.data;
            });*/
    }

    getCarrito() {

        //return axios.get('http://localhost:7286/api/GetCarrito', { params: {} })
        return axios.get('https://tarea12420220610061513.azurewebsites.net/api/GetCarrito', { params: {} })
            .then(this.handleResponse)
            .then(response => {
                return response.data;
            });
        /*return axios.get(Utils.urlAPI() + 'formulario/getCarrito', {
            params: {
                
            },
            headers: authHeader()
        }).then(this.handleResponse)
            .then(response => {
                return response.data;
            });*/
    }

    buscar(e) {

        //return axios.get('http://localhost:7286/api/Consulta', { params: { e } })
        return axios.get('https://tarea12420220610061513.azurewebsites.net/api/Consulta', { params: { e } })
            .then(this.handleResponse)
            .then(response => {
                return response.data;
            });
        /*return axios.get(Utils.urlAPI() + 'formulario/buscar', {
            params: {
                z: e
            },
            headers: authHeader()
        }).then(this.handleResponse)
            .then(response => {
                return response.data;
            });*/
    }

    insertArchivo(files) {
        /*console.log('Service insertar archivo');
        return axios.post(Utils.urlAPI() + 'formulario/subirArchivo', files, { headers: authHeader() })
            .then(this.handleResponse)
            .then(response => {
                console.log('api subir archivo');
                console.log(response);
                return response.data;
            });*/

        console.log('Service insertar archivo');
        return axios.post('http://localhost:7286/api/SubirArchivo', null, { params: { files } })
            .then(this.handleResponse)
            .then(response => {
                console.log('api subir archivo');
                console.log(response);
                return response.data;
            });
    }

    eliminarTodo() {
        console.log('service formulario');
        //return axios.post('http://localhost:7286/api/EliminarTodo', null, null)
        return axios.post('https://tarea12420220610061513.azurewebsites.net/api/EliminarTodo', null, null)
            .then(this.handleResponse).then(response => {
                console.log('api guardar formulario');
                console.log(response);
                return response.data;
            });
        /*
        console.log('service formulario');
        return axios.post(Utils.urlAPI() + 'formulario/eliminarTodo',
            {
            },
            {
                params: {
                    
                },
                headers: authHeader()
            })
            .then(this.handleResponse).then(response => {
                console.log('api guardar formulario');
                console.log(response);
                return response.data;
            });*/
    }

    
    
        

    handleResponse(response) {
        if (response.status === 401) {
            this.logout();
            location.reload(true);

            const error = response.data && response.data.message;
            return Promise.reject(error);
        }
        return Promise.resolve(response);
    }
}


export default new FormularioServices();