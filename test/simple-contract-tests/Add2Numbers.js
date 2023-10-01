const {ethers} = require("hardhat");
const {expect, assert} = require("chai");

describe("AddNumbers Contract Test", function () {
  let add2Numbers;

  beforeEach(async function () {
    // Deploy the AddNumbers contract
    const Add2Numbers = await ethers.getContractFactory("Add2Numbers");
    add2Numbers = await Add2Numbers.deploy();
    await add2Numbers.deployed();
  });

  it("should add two numbers correctly", async function () {
    // Define the two numbers you want to add
    const a = 42;
    const b = 13;

    // Call the add function on the contract
    const result = await add2Numbers.add(a, b);

    // Check if the result is as expected
    expect(result).to.equal(a + b);
  });
});
