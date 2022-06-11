using System;
using System.Collections.Generic;

namespace Formulario.Model
{
    public partial class articulos
    {
        public int pkArticulo { get; set; }
        public string descripcion { get; set; }
        public decimal? precio { get; set; }
        public int? cantidad { get; set; }
        public string foto { get; set; }
    }
}
