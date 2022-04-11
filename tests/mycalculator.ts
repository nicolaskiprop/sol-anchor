import assert from 'assert';
import anchor from '@project-serum/anchor';
const {SystemProgram} = anchor.web3

describe('mycalculator', () => {
    //provider
    const provider = anchor.Provider.local();
    anchor.setProvider(provider)
    const calculator = anchor.web3.Keypair.generate()
    const program = anchor.workspace.Mycalculator

    it('creates a calculator', async() => {
        await program.rpc.create('Welcome to Sol Test (solana)', {
            accounts: {
                calculator: calculator.publicKey,
                user: provider.wallet.publicKey,
                SystemProgram: SystemProgram.programId
            },
            signers:[calculator]
        })
        const account = await program.account.calculator.fetch(calculator.publicKey)
        assert.ok(account.greeting === "Welcome to Sol Test (solana)")
    })

})