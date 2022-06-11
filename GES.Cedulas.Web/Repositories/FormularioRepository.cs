using Formulario.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
//using Newtonsoft.Json;
//using Formulario.Model.ModelExt.Mensajeria;
using System.Dynamic;
using Microsoft.EntityFrameworkCore;
using Formulario.Model.ModelExt;
using System.IO;
using System.Drawing;

namespace Formulario.Repositories
{
    public interface IFormularioRepository
    {
        public int guardarFormulario(Articulo articulo);
        public dynamic buscar(string busqueda);
        public void guardarCarro(Carrito carro);
        public dynamic getCarrito();
        public void eliminar(int z, int y);
        public void eliminarTodo();
        /*
        public dynamic getTodas();
        public void modificarFormulario(Persona persona, Institucion institucion, Capacitacion capacitacion, Pago pago, int id);
        public dynamic getPersona(int folio);
        public void eliminar(int folio);*/

        public articulos getid(int id);
    }

    public class FormularioRepository : IFormularioRepository
    {
        private readonly Tarea12Context context;

        public FormularioRepository(Tarea12Context context)
        {
            this.context = context;
        }

        public articulos getid(int id)
        {
            var articulo = (from x in context.articulos
                            where x.pkArticulo.Equals(id)
                            select x).FirstOrDefault();
            return articulo;
        }

        public void eliminarTodo()
        {
            var todo = (from w in context.carrito_compra
                        select w).ToList();
            foreach(var t in todo)
            {
                var articulo = (from x in context.articulos
                                where x.pkArticulo.Equals(t.fkArticulo)
                                select x).FirstOrDefault();
                articulo.cantidad = articulo.cantidad + t.cantidad;
                context.Update(articulo);
                context.Remove(t);
                context.SaveChanges();
            }
        }

        public dynamic getCarrito()
        {
            var articulos = (from x in context.carrito_compra
                             select x).ToList();

            List<string> fotos = new List<string>();

            foreach(var item in articulos)
            {
                var f = (from z in context.articulos
                         where z.pkArticulo.Equals(item.fkArticulo)
                         select z.foto).FirstOrDefault();
                fotos.Add(f);
            }

            List<Carrito> carroAux = new List<Carrito>();
            
            
            var a = articulos.ToArray();
            var b = fotos.ToArray();
            var c = carroAux.ToArray();
            
            for(int i = 0; i < articulos.Count(); i++)
            {
                Carrito carrito = new Carrito();
                carrito.fkCarrito = a[i].pkCarrito;
                carrito.descripcion = a[i].descripcion;
                carrito.precio = (double)a[i].precio;
                carrito.cantidad = (int)a[i].cantidad;
                carrito.foto = b[i];
                carroAux.Add(carrito);

            }

            
            return carroAux;

        }

        public void eliminar(int z, int y)
        {
            var articulo = (from x in context.articulos
                            where x.pkArticulo.Equals(z)
                            select x).FirstOrDefault();
            articulo.cantidad = articulo.cantidad + y;

            var delCarro = (from b in context.carrito_compra
                            where b.pkCarrito.Equals(z)
                            select b).FirstOrDefault();

            context.Remove(delCarro);
            context.Update(articulo);
            context.SaveChanges();
        }

        public void guardarCarro(Carrito carro)
        {
            var articulo = (from x in context.articulos
                            where x.pkArticulo.Equals(carro.fkArticulo)
                            select x).FirstOrDefault();
            articulo.cantidad = articulo.cantidad - carro.cantidad;
            carrito_compra carrito = new carrito_compra();
            carrito.descripcion = carro.descripcion;
            carrito.precio = (decimal?)carro.precio;
            carrito.cantidad = carro.cantidad;
            carrito.fkArticulo = carro.fkArticulo;
            context.Add(carrito);
            context.Update(articulo);
            context.SaveChanges();
        }

        public dynamic buscar(string busqueda)
        {
            dynamic articulos = new ExpandoObject();

            articulos = (from articulo in context.articulos
                         where articulo.descripcion.Contains(busqueda)
                        select articulo).ToList();

            /*foreach(var a in articulos)
            {
                byte[] imageBytes = Convert.FromBase64String(a.foto);
                // Convert byte[] to Image
                using (var ms = new MemoryStream(imageBytes, 0, imageBytes.Length))
                {
                    Image image = Image.FromStream(ms, true);
                    articulos.foto = image;
                }
            }*/

            

            return articulos;
        }

        public int guardarFormulario(Articulo articulo)
        {
            articulos arti = new articulos();
            arti.descripcion = articulo.descripcion;
            arti.precio = (decimal?)articulo.precio;
            arti.cantidad = articulo.cantidad;
            //arti.foto = articulo.foto;
            context.Add(arti);
            context.SaveChanges();
            var pk = (from a in context.articulos
                      where a.descripcion.Contains(articulo.descripcion)
                      select a).FirstOrDefault();
            return pk.pkArticulo;
        }
        /*
        public void eliminar(int folio)
        {
            var persona = (from registro in context.Datos
                             where registro.pkFormulario.Equals(folio)
                             select registro).FirstOrDefault();
            context.Remove(persona);
            context.SaveChanges();
        }


        public void modificarFormulario(Persona persona, Institucion institucion, Capacitacion capacitacion, Pago pago, int id)
        {
            var modificar = (from registro in context.Datos
                             where registro.pkFormulario.Equals(id)
                             select registro).FirstOrDefault();
            modificar.nombre = persona.nombre;
            modificar.apellido = persona.apellido;
            modificar.direccion = persona.direccion;
            modificar.telefono = persona.telefono;
            modificar.correo = persona.correo;
            modificar.documento = persona.documento;
            modificar.fechaNacimiento = persona.fechaNacimiento;
            modificar.curso = capacitacion.nombre;
            modificar.horario = capacitacion.horario;
            modificar.formaPago = pago.pago;
            modificar.NoContrato = institucion.numero;
            modificar.personaAtendio = institucion.personas;
            modificar.fechaInscripcion = institucion.fecha;
            context.Update(modificar);
            context.SaveChanges();

        }

        
        public dynamic getPersona(int folio)
        {
            dynamic persona = new ExpandoObject();

            persona = (from registro in context.Datos
                       where registro.pkFormulario.Equals(folio)
                        select registro).FirstOrDefault();

            return persona;
        }
        */
    }
}
