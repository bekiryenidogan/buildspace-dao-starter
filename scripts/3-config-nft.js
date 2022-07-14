import sdk from "./1-initialize-sdk.js";
import { readFileSync} from "fs";

const editionDrop = sdk.getEditionDrop("0x08d5847E43D29C402F586EaF548205d4b6353465");

(async () => {
    try {
        await editionDrop.createBatch([
            {
                name: " Content Creator",
                description: " This NFT is a gift for your effort",
                image : readFileSync( "scripts/assets/ppkbekir.png"),
            },
            ]);

         console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
}) ();