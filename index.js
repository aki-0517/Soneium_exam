const { Chainlink } = require("dev3-sdk");

const ethSDK = Chainlink.instance("https://ethereum.publicnode.com", Chainlink.PriceFeeds.ETH);

// AAVE/ETH price feed
ethSDK.getFromOracle(ethSDK.feeds.AAVE_ETH).then((res) => {
    console.log(res.answer.toString());
});