import { allow, type Permissions } from "@zodiaceco/sdk";

export default [
  allow.arb1.weth.deposit({ send: true }),
  allow.arb1.weth.withdraw(),
] satisfies Permissions;
