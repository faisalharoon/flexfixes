using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using EF.Core;

namespace EF.Data.Mapping
{
    public class FeedbackMap : EntityTypeConfiguration<tblFeedback>
    {
        public FeedbackMap()
        {
            //key  
            HasKey(t => t.Id);

            //property  
            Property(t => t.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
            Property(t => t.Name);
            Property(t => t.Email);
            Property(t => t.MobileNo);
            Property(t => t.Message);
            Property(t => t.Rating);
            Property(t => t.CreationDate);

            //table  
            ToTable("tblFeedback");
        }
    }
}