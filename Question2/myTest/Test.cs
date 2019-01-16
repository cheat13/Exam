using System;
using myApi;
using Xunit;

namespace myTest
{
    public class Test
    {
        [Theory]
        [InlineData(100, 3, 0)]
        [InlineData(100, 4, 100)]
        [InlineData(100, 9, 200)]
        [InlineData(1000, 15, 3000)]
        public void TestDiscountCalculate(double price, int amount, double expectDiscount)
        {
            var sut = new Calculate();
            var result = sut.DiscountCalculate(price, amount);
            Assert.Equal(expectDiscount, result);
        }
    }
}
