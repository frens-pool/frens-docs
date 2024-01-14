# FRENS is a single-validator-staking-pool as a service.

## What does that mean?
- Easily deploy your own staking pool and invite your frens.
- Pool depositors recieve NFTs representing their stake in the pool.
- This NFT allows them to claim their share of the staking rewards from the pool, and to retrieve their initial deposit once the pool has been exited.
- The NFTs are transferable, so they can be sold on the open market if you need to exit your position quickly.

## How does it work?
- Navigate to the [app](https://app.frens.fun/) and connect your wallet
- Click on the "new pool" button.
- Click "create pool" and sign the transaction in your wallet.
- When the transaction confirms, you will be given a link, which you can distribute to your frens.
- Follow the link to make your own contribution to the pool.
- Once the pool is full, click "Setup Validator now". 
- You will be directed to generate your keys with Wagyu Key Gen using the pool address as the withdrawal address.

## How do I use Waygu Key Gen?
- Navigate to [Waygu](https://wagyu.gg/).
- Download the version for your operating system (keys should be generated locally for security, preferably while your computer is offline).
- Open the app and click "Create New Secret Recovery Phrase".
- Select the correct network and click "OK"
- Click "Create".
- Write your reovery phrase don on paper, you will need this later. Do not screenshot, or store electronically.
- Click "I'm Sure" (if you're sure).
- Enter recovery phrase, click "Check".
- Enter the pool address from the FRENS app as the withdrawal address, creae a password and click "Next".
- Retype password and click "Next".
- Select a folder to save your keys, click "Create".
- Click close.

## I have my validator keys, now what?
- Return to your pool in the FRENS app.
- Click "Next".
- Drop or navigate to your deposit file created by Waygu (the name will be deposit_data_XXXXX.json).
- Click "Set Deposit File" and sign the transaction.
- Click "Deposit Eth to Beacon Chain" and sign the tansaction.
- You have now deposited the 32 Eth to the beacon chain, and set the withdrawal address to th pool address. You will now be prompted to select 4 operators.

## What is an operator?
- Operators run validators as a service.
- Using distributed validtor technology, your key is split, so you can give a key-share to each of four different operators.
- 3 operators must agree in order to sign a block.
- This makes it very difficult to get sashed, and as long as 3 of the 4 are online, your validator will run normally.

## How do I choose my operators?
- On the "select Your Oprators" page on the FRENS site, the 30 day performance of various operators is shown.
- If you click on "details" it will take you to the SSV site, which will show more information for that operator.
- Check the box next to the operators of your choice.
- Click "Next".

## What does it mean to split keyshare?
- This takes the signing key for your validator and splits it into 4 parts for the 4 operators (like some kind of cryptographic magic).
- Drop your keystore file (keystore-m_XXXXX.json) into the field, and click next.

## What does register validator mean?
- The operators must be paid for thier services.
- This payment is made with SSV tokens.
- If you don't have any SSV tokens, now is the time to buy them (or collect then from your FRENS).
- Click "Allow Spending" and approve the transaction.
- Click "Register Validator" and approve the transaction.
- Congratulations your FRENS pool is complete!

