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
    public class LoanController : ControllerBase
    {
        public static Rate Rate = new Rate() { rate = 0 };

        [HttpPost]
        public void SetRate(Rate rate)
        {
            Rate.rate = rate.rate;
        }

        [HttpGet]
        public ActionResult<double> GetRate()
        {
            return Rate.rate;
        }

        [HttpGet("{balance}/{years}")]
        public ActionResult<List<Descript>> AddDescripts(double balance, int years)
        {
            var descripts = new List<Descript>();
            var calc = new Calculate();

            for (int i = 1; i <= years; i++)
            {
                var descript = new Descript();
                descript.Year = i;
                descript.Balance = balance;
                descript.Interest = calc.InterestCalculate(Rate.rate, balance);
                descript.Payments = descript.Balance + descript.Interest;
                balance += descript.Interest;

                descripts.Add(descript);
            }

            return descripts;
        }
    }
}
