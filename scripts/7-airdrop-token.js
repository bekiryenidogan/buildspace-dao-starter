import sdk from "./1-initialize-sdk.js";


// This is the address to our ERC-1155 membership NFT contract.
const editionDrop = sdk.getEditionDrop("0x08d5847E43D29C402F586EaF548205d4b6353465");


const token = sdk.getToken("0xA9630BBCFBD34Cd0f1CE53e16Ece46bc8fD41a8F");

(async ()  => {
    try {
        const walletAddresses = await editionDrop.history.getAllClaimerAddresses(0);
        if (walletAddresses.length === 0) {
            console.log(
              "No NFTs have been claimed yet, maybe get some friends to claim your free NFTs!",
            );
            process.exit(0);
    }

    const airdropTargets = walletAddresses.map((address) => {
        const randomAmount = Math.floor(Math.random() * (10000 - 1000 + 1) + 1000);
        console.log("✅ Going to airdrop", randomAmount, "tokens to", address);

        const airdropTarget = {
            toAddress: address,
            amount : randomAmount,
        };
        return airdropTarget;
    });

    console.log("🌈 Starting airdrop...");
    await token.transferBatch(airdropTargets);
    console.log("✅ Successfully airdropped tokens to all the holders of the NFT!");
  } catch (err) {
    console.error("Failed to airdrop tokens", err);
  }

}) ();