import sdk from "./1-initialize-sdk.js";


(async () => {
    try {
        const voteContractAddress = await sdk.deployer.deployVote({
            name: "myDao",
            voting_token_address: "0xA9630BBCFBD34Cd0f1CE53e16Ece46bc8fD41a8F",
            voting_delay_in_blocks: 0,
             // 1 day = 6570 blocks
            voting_period_in_blocks: 6750,
            // The minimum % of the total supply that need to vote for
            voting_quorum_fraction : 0,
            // What's the minimum # of tokens a user needs to be allowed to create a proposal?
            proposal_token_threshold : 0,
        });
        console.log(
            "✅ Successfully deployed vote contract, address:",
            voteContractAddress,
          );
      
    } catch (error) {
        console.error("Failed to deploy vote contract", err);
    }
}) () ;