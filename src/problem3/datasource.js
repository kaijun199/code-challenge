// your code here:

const url = "https://interview.switcheo.com/test.json"

const ds = {
    getPrices: () => {
      return fetch(url)
        .then(response => response.json())
        .then(data => {
          // Process the retrieved data and return attributes of pair, mid & quote
            let output = [];
            let items = data.data.prices;
            for (const index in items){
                //get the absolute value of the mid point in the correct decimal places
                let mid = Math.abs((Number(items[index].buy) + Number(items[index].sell))/200);
                //get the pair
                let pair = items[index].pair;
                //get the quote e.g. SGD 
                let quote = items[index].pair.slice(-3);
                output.push({mid: () => mid, pair: pair, quote: () => quote});
            }
            return output;
        })
        .catch(error => {
          throw new Error('Failed to fetch prices: ' + error);
        });
    }
  };
  

ds.getPrices()
    .then(prices => {
        prices.forEach(price => {
            console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
        });
    }).catch(error => {
        console.error(error);
    });