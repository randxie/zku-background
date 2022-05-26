# zku-background

## Questions

1. What is a hash? Why do people use hashing to hide information?
   
Hash is a function f(x)=y to convert the original information x into y. From y, it's hard to reverse engineer x.

2. What is a smart contract?

A smart contract is a program that can execute on a blockchain network, which can mutate global states in the blockchain.

3. What are gas fees? Why is gas optimization a big focus when building smart contracts?

Gas fees are the fee needed to execute functions in the smart contracts on chain. You want to minimize the fee needed to execute your contract and reduce network congestion, which leads to the topic of gas optimization.

4. You have the ability to quickly count the number of leaves in a tree. How can you prove this to a friend, without revealing the exact number of leaves?

I will tell my friend whether the number of leaves is an odd number or even number. Then my friend can remove a random number of leaves from the tree. Afterwards, I will tell my friend again whether the current number of leaves is an odd numbers of even numbers. By doing so N times, the probability of a false proof is 1/(2^N). The only caveat is that the tree hurts because we are removing leaves from the tree :).

5. How are smart contracts deployed? List the necessary steps.

hardhat rocks!! To deploy a smart contract, I will firstly compile the contract to generate the bytecode, then call the deploy method with my signature.

7. Is the new design better over having separate confirmReceived() and refundSeller()? Why or why not?

The new design is better in two aspects:
(1) It simplifies the state management by reducing state "Release"
(2) The process is simpler compared to two separate steps.

However, the new design has less protection to buyer, because seller can wait until time elapsed without sending out items. 