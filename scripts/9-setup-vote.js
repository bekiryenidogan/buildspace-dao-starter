import sdk from "./1-initialize-sdk.js";

const vote = sdk.getVote("0x89EBB66E96A44C3E48C176bCEe0CD4E177BB2B18");

const token = sdk.getToken("0xA9630BBCFBD34Cd0f1CE53e16Ece46bc8fD41a8F");


(async () => {
    try {
        await token.roles.grant("minter", vote.getAddress());
        console.log(
            "Successfully gave vote contract permissions to act on token contract"
          );

    } catch (error) {
            console.error(
              "failed to grant vote contract permissions on token contract",
              error
            );
            process.exit(1);
        }

    try {
        const ownedTokenBalance = await token.balanceOf(
            process.env.WALLET_ADDRESS
          );

        const ownedAmount = ownedTokenBalance.displayValue;
        const percent90 = Number(ownedAmount) / 100 * 90;
        await token.transfer(
            vote.getAddress(),
            percent90
          ); 
          console.log("✅ Successfully transferred " + percent90 + " tokens to vote contract");
    } catch (err) {
    console.error("failed to transfer tokens to vote contract", err);
  }
})();