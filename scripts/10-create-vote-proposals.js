import sdk from "./1-initialize-sdk.js";
import { ethers } from "ethers";


const vote = sdk.getVote("0x89EBB66E96A44C3E48C176bCEe0CD4E177BB2B18");

const token = sdk.getToken("0xA9630BBCFBD34Cd0f1CE53e16Ece46bc8fD41a8F");

(async () => {
    try {
        // Create proposal to mint 420,000 new token to the treasury.
        const amount = 420_000;
        const description = " Should the DAO mint an additional" +amount+ "tokens into the treasury?";
        const executions = [
            {
            toAddress : token.getAddress(),
            nativeTokenValue: 0 ,
            transactionData: token.encoder.encode(
                "mintTo", [
                vote.getAddress(),
                ethers.utils.parseUnits(amount.toString(), 18),
              ]
              ),
            }
          ];
        await vote.propose(description,executions);
        console.log("✅ Successfully created proposal to mint tokens");
    } catch (error) {
        console.error("failed to create first proposal", error);
        process.exit(1);
    }
   
    })();