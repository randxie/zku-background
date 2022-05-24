const hre = require("hardhat");

(async () => {
    try {
        // sleep function
        const sleep = ms => new Promise(r => setTimeout(r, ms));
        console.log("================ Start ===================")
        const [seller, buyer] = await hre.ethers.getSigners();

        // Deploy contract and record time needed to deploy the contract
        const start = new Date().getTime();
        const RemotePurchase = await hre.ethers.getContractFactory("Purchase");
        const contract = await RemotePurchase.deploy();
        let elapsed = new Date().getTime() - start;
        console.log(`Contract address: ${contract.address}`)
        console.log("It takes " + elapsed + " milliseconds to deploy the contract");
        console.log("=====================================================")

        // buyer confirms the purchase
        await contract.connect(buyer).confirmPurchase();
        const purchaseTime = await contract.connect(seller).getPurchaseTimestamp();
        var date = new Date(purchaseTime * 1000);
        console.log("The buyer purchases at: " + date.toUTCString())

        // Note: reduce 5 min to 1 min to see result faster.
        console.log("Sleep for 1 min.")
        await sleep(60 * 1000) // sleep 60 sec

        // Seller complete the purchase successfully.
        console.log("=====================================================")
        await contract.connect(seller).completePurchase();
        console.log("Complete purchase successfully")
        console.log("================= End  =================")
    } catch (e) {
        console.log(e)
        console.log(e.message)
    }

})()