using System.Collections.Generic;

namespace myApi.Models
{
    public class Cart
    {
        public List<Product> Products { get; set; }
        public double TotalPrice { get; set; }
        public double Discount { get; set; }
        public double Payments { get; set; }
    }
}