namespace Formulario.Model.ModelExt
{
    public class Carrito
    {
        public int fkCarrito { get; set; } 
        public string descripcion { get; set; }
        public double precio { get; set; }
        public int cantidad { get; set; }
        public int fkArticulo { get; set; }
        public string foto { get; set; }
    }
}
