import sdk from "./1-initialize-sdk.js";

const token = sdk.getToken("0xA9630BBCFBD34Cd0f1CE53e16Ece46bc8fD41a8F");

(async () => {
    try{
        const amount = 1_000_000;
        await token.mintToSelf(amount);
        const totalSupply = await token.totalSupply();

        console.log("✅ There now is", totalSupply.displayValue, "$HOKAGE in circulation");
    } catch (error){
        console.error("Failed to print money", error);
    }
}) ();