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
        public static Loan Loan = new Loan() { rate = 0, Descripts = new List<Descript>() };

        [HttpPost]
        public void SetRate(Loan loan)
        {
            Loan.rate = loan.rate;
        }

        [HttpGet]
        public ActionResult<double> GetRate()
        {
            return Loan.rate;
        }

        [HttpGet("{balance}/{years}")]
        public ActionResult<Loan> AddDescripts(double balance, int years)
        {
            Loan.Descripts = new List<Descript>();
            var calc = new Calculate();

            for (int i = 1; i <= years; i++)
            {
                var descript = new Descript();
                descript.Year = i;
                descript.Balance = balance;
                descript.Interest = calc.InterestCalculate(Loan.rate, balance);
                descript.Payments = descript.Balance + descript.Interest;
                balance += descript.Interest;

                Loan.Descripts.Add(descript);
            }
            
            return Loan;
        }
    }
}
