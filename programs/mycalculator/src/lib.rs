use anchor_lang::prelude::*;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod mycalculator {
    use super::*;

    pub fn create(ctx: Context<Create>, init_message: String) -> programResult {
        let calculator = &mut ctx.accounts.calculator;
        calculator.greeting = init_message;
        Ok(())
    }

    // pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
    //     Ok(())
    // }
}

// #[derive(Accounts)]
// pub struct Initialize {}
