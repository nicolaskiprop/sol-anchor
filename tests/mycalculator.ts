import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Mycalculator } from "../target/types/mycalculator";

describe("mycalculator", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.Mycalculator as Program<Mycalculator>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
