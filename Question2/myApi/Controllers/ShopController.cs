using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using myApi.Models;

namespace myApi.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ShopController : ControllerBase
    {
        public static List<Product> Products = new List<Product>();
        public static Cart Cart = new Cart() { Products = new List<Product>() };

        [HttpPost]
        public void AddProduct(Product product)
        {
            product.Id = Guid.NewGuid().ToString();
            Products.Add(product);
        }

        [HttpGet]
        public ActionResult<List<Product>> GetAllProduct()
        {
            return Products;
        }

        [HttpGet("{id}")]
        public ActionResult<Product> GetProduct(string id)
        {
            return Products.Find(it => it.Id == id);
        }

        [HttpPost]
        public void AddProductInCart(List<Product> products)
        {
            Cart.Products = products.Where(it => it.Amount > 0).ToList();
            Cart.Discount = 0.0;
            var calc = new Calculate();
            foreach (var pro in Cart.Products)
            {
                pro.TotalPrice = pro.Price * pro.Amount;
                Cart.Discount += calc.DiscountCalculate(pro.Price, pro.Amount);
            }
            Cart.TotalPrice = Cart.Products.Sum(it => it.TotalPrice);
            Cart.Payments = Cart.TotalPrice - Cart.Discount;
        }

        [HttpGet]
        public ActionResult<Cart> GetCart()
        {
            return Cart;
        }
    }
}
