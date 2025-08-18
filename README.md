# [MyTokenTest] - ERC20 Token Contract
###### version 1.0

## 合约地址
`TNuMmWUyVv6RmGRXCeHMWLK2w24ZGWCkxK`  
TronScan测试网合约地址链接： [NILE TESTNET](https://nile.tronscan.org/?_gl=1*t4atnr*_ga*MTg0NTkwMjA1Ny4xNzU1MjYxMDk4*_ga_TBLE5BZDE8*czE3NTU0MzIxODkkbzYkZzAkdDE3NTU0MzIxODkkajYwJGwwJGgw&_ga=2.188252264.1381738422.1755261098-1845902057.1755261098#/token20/TNuMmWUyVv6RmGRXCeHMWLK2w24ZGWCkxK)

## 代币介绍
`MyTokenTest`代币(以下简称`MTT`)完全兼容ERC20接口，并拓展了铸币与销币功能  
### 后续更新
`MTT`未来拓展：安全铸造控制、交易暂停功能等

## 代币基本信息
|属性|值|
|---|---|
|名称|MyTokenTest|
|符号|MTT|
|小数位|18|
|初始分配|100个币|

### 标准功能
- ERC20 Standard
### 拓展功能
- 铸币功能
- 销币功能

# 项目结构
├── contracts  
│ ├── `IERC20.sol` 定义ERC20标准规范  
│ ├── `ERC20.sol` 实现核心功能  
│ └── `MyToken.sol` 部署具体代币  
├── migrations  
│ └── `deploy_my_token_contracts.js` 合约部署脚本  
├── test  
│ └── `transferTest.js` transfer函数测试脚本 
├── testdoc  
│ └── `test.md` 测试过程文档