// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

interface IERC20 {
    // 返回代币总供应量
    function totalSupply() external view returns (uint256);
    // 查询指定地址余额
    function balanceOf(address account) external view returns (uint256);
    // 查看授权额度
    function allowance(address owner, address spender) external view returns (uint256);
    
    // 发起代币转账
    function transfer(address recipient, uint256 amount) external returns (bool);
    // 授权第三方使用代币
    function approve(address spender, uint256 amount) external returns (bool);
    // 执行授权转账
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}