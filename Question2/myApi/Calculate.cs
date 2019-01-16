namespace myApi
{
    public class Calculate
    {
        public double DiscountCalculate(double price, int amount)
        {
            return (amount / 4) * price;
        }
    }
}