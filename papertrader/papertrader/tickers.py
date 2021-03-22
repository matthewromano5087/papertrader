from typing import List

from .config import STATIC_DIR


with open(STATIC_DIR / 'tickers.csv') as fp:
    tickers = fp.read().split('\n')
if tickers[-1] == "":
    tickers.pop()


def get_all_tickers() -> List[str]:
    return tickers
