using System;
using System.Collections.Generic;

namespace Formulario.Model
{
    public partial class carrito_compra
    {
        public int pkCarrito { get; set; }
        public string descripcion { get; set; }
        public decimal? precio { get; set; }
        public int? cantidad { get; set; }
        public int? fkArticulo { get; set; }
    }
}
