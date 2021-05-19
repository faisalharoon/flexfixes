using System;
namespace EF.Core
{
    public class tblFeedback
    {

        public Int64 Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }

        public string Message { get; set; }

        public string MobileNo { get; set; }

        public string Rating { get; set; }
        public DateTime CreationDate { get; set; }

    }
}
