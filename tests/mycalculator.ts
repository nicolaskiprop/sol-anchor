import assert from 'assert';
import anchor from '@project-serum/anchor';
import { fetchData } from '@project-serum/anchor/dist/cjs/utils/registry';
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

    it('Adds two numbers', async() => {
        await program.rpc.add(new anchor.BN(2), new anchor.BN(3), {
            accounts: {
                calculator: calculator.publicKey
            }
        })
        const account = await program.account.calculator.fetch(calculator.publicKey)
        assert.ok(account.result.eq(new anchor.BN(5)))
    })

    it('Subtracts two numbers', async () => {
        await program.rpc.add(new anchor.BN(9), new anchor.BN(5), {
            accounts: {
                calculator: calculator.publicKey
            }
        })
        const account = await program.account.calculator.fetch(calculator.publicKey)
        assert.ok(account.result.eq(new anchor.BN(4)))
    })

    it('Multiplies two numbers', async () => {
        await program.rpc.multiply(new anchor.BN(3), new anchor.BN(3), {
            accounts: {
                calculator: calculator.publicKey
            }
        })
        const account = await program.account.calculator.fetch(calculator.publicKey)
        assert.ok(account.result.eq(new anchor.BN(9)))
    })

}) 