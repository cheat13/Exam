using System;
using myApi;
using Xunit;

namespace myTest
{
    public class Test
    {
        [Theory]
        [InlineData(12, 10000, 1200)]
        [InlineData(12, 11200, 1344)]
        [InlineData(12, 12544, 1505.28)]
        [InlineData(15, 10000, 1500)]
        public void TestInterestCalculate(double rate, double balance, double expectInterest)
        {
            var sut = new Calculate();
            var result = sut.InterestCalculate(rate, balance);
            Assert.Equal(expectInterest, result);
        }
    }
}
