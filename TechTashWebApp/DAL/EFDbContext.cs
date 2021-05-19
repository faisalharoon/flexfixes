using System.Data.Entity;
using EF.Data.Mapping;
using EF.Core;

namespace EF.Data
{
    public class EFDbContext : DbContext
    {
        public EFDbContext()
            : base("name=DbConnectionString")
        {

        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Configurations.Add(new FeedbackMap());
        }

        public DbSet<tblFeedback> Feedbacks { get; set; }

    }
}