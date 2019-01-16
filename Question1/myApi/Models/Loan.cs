using System.Collections.Generic;

namespace myApi.Models
{
    public class Loan
    {
        public double rate { get; set; }
        public List<Descript> Descripts { get; set; }
    }
}