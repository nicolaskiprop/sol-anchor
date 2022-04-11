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
//ctx
#derive(Accounts)
pub struct  create<'info> {
    #[account(init, payer=user, space=264)]
    pub calculator: Accounts<'info, calculator>

    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>


}

#[account]
pub struct Calculator {
    pub greeting: String,
    pub result: i64,
    pub remainder: i64,
}
// #[derive(Accounts)]
// pub struct Initialize {}
