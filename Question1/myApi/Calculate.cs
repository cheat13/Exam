namespace myApi
{
    public class Calculate
    {
        public double InterestCalculate(double rate, double balance)
        {
            return balance * rate / 100;
        }
    }
}