
function createPortfolio() {
    const stocks = {}; 
  
    function isEmpty() {
      return Object.keys(stocks).length === 0;
    }
  
    function sharesOf(symbol) {
      if (stocks[symbol] === undefined) return 0;
      return stocks[symbol];
    }
  
    function uniqueSymbolCount() {
      return Object.keys(stocks).length;
    }
  
    function buy(symbol, shares) {
      if (stocks[symbol] === undefined) {
        stocks[symbol] = shares;
      } else {
        stocks[symbol] += shares;
      }
    }
  
    function sell(symbol, shares) {
      if (stocks[symbol] === undefined) {
        throw new Error("not possible to sell this number of shares");
      }
      if (stocks[symbol] < shares) {
        throw new Error("not possible to sell this number of shares");
      }
  
      stocks[symbol] -= shares;
      if (stocks[symbol] === 0) {
        delete stocks[symbol];
      }
    }
  
    return { isEmpty, sharesOf, uniqueSymbolCount, buy, sell };
  }
  
  module.exports = { createPortfolio };
  