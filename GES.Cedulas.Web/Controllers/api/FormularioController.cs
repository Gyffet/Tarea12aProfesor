using Formulario.Model;
using Formulario.Model.ModelExt;
using Formulario.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.IO;

namespace Formulario.Controllers.api
{
    [Route("api/[controller]")]
    [AllowAnonymous]
    [ApiController]
    [Authorize]
    public class FormularioController : ControllerBase
    {
        private readonly IFormularioRepository repository;
        private readonly Tarea12Context context;

        public FormularioController(IFormularioRepository repository, Tarea12Context context)
        {
            this.repository = repository;
            this.context = context;
        }


        [HttpPost, DisableRequestSizeLimit]
        [Route("subirArchivo")]
        //public ActionResult subirArchivoPDF(IFormFile files, string noCed)
        public ActionResult subirArchivoPDF(string files)
        {
            try
            {
                if (Request.Form.Files.Count > 0)
                {
                    string id = Request.Form["id"];
                    var archivos = Request.Form.Files[0];
                    var fileName = archivos.FileName;
                    var contentType = archivos.ContentType;
                    var length = archivos.Length;

                    using (var ms = new MemoryStream())
                    {
                        archivos.CopyTo(ms);
                        var fileBytes = ms.ToArray();
                        string s = Convert.ToBase64String(fileBytes);
                        var art = repository.getid(Int32.Parse(id));
                        art.foto = s;
                        context.Update(art);
                        context.SaveChanges();
                    }
                        return Ok();
                }
                else
                    return BadRequest("Seleccionar archivo");
            }
            catch (Exception ex)
            {
                return (BadRequest("El archivo es demasiado largo o incompatible"));
            }
        }

        [HttpPost]
        [Route("alta")]
        public IActionResult guardarFormulario(string z)
        {
            try
            {
                var input = JsonConvert.DeserializeObject<Articulo>(z);
                var pk = repository.guardarFormulario(input);
                return Ok(pk);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPost]
        [Route("alcarro")]
        public IActionResult alcarro(string z)
        {
            try
            {
                var input = JsonConvert.DeserializeObject<Carrito>(z);
                repository.guardarCarro(input);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPost]
        [Route("eliminar")]
        public IActionResult eliminar(int z, int y)
        {
            try
            {
                //var input = JsonConvert.DeserializeObject<carrito_compra>(z);
                repository.eliminar(z,y);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPost]
        [Route("eliminarTodo")]
        public IActionResult eliminarTodo()
        {
            try
            {
                repository.eliminarTodo();
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpGet]
        [Route("buscar")]
        public IActionResult Buscar(string z)
        {
            try
            {
                return Ok(repository.buscar(z));
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpGet]
        [Route("getCarrito")]
        public IActionResult getCarrito()
        {
            try
            {
                return Ok(repository.getCarrito());
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
        
        //Scaffold-DbContext -Connection name=DatabaseConnection -Provider Microsoft.EntityFrameworkCore.SqlServer -UseDatabaseNames -Force –Tables "articulos", "carrito_compra" -OutputDir Model
    }
}
