from datetime import timedelta
from cachier import cachier
from pandas.core.frame import DataFrame
import yfinance


@cachier(stale_after=timedelta(minutes=30))
def get_history(ticker: str, period: str="1mo", interval: str="60m"):
    data: DataFrame = yfinance.download(tickers=ticker, period=period, interval=interval)
    data = data.reset_index()
    data = [[item[0].isoformat(), item[1]] for item in data.values.tolist()]
    return data
