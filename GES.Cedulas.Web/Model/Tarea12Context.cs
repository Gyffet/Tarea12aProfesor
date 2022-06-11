using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Formulario.Model
{
    public partial class Tarea12Context : DbContext
    {
        public Tarea12Context()
        {
        }

        public Tarea12Context(DbContextOptions<Tarea12Context> options)
            : base(options)
        {
        }

        public virtual DbSet<articulos> articulos { get; set; }
        public virtual DbSet<carrito_compra> carrito_compra { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("name=DatabaseConnection");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<articulos>(entity =>
            {
                entity.HasKey(e => e.pkArticulo);

                entity.Property(e => e.descripcion).IsUnicode(false);

                entity.Property(e => e.foto).IsUnicode(false);

                entity.Property(e => e.precio).HasColumnType("money");
            });

            modelBuilder.Entity<carrito_compra>(entity =>
            {
                entity.HasKey(e => e.pkCarrito);

                entity.Property(e => e.descripcion).IsUnicode(false);

                entity.Property(e => e.precio).HasColumnType("money");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
