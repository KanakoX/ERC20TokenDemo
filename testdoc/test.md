# 基础功能测试过程文档

## 测试使用3个账户地址：  
账户1：`TTd8161s14UtC7QUNA5RdCRN6j32CfCyuM`  
账户2：`THERNcGd35PZNSLK6i7LkLEmuYSxe3UEVD`  
账户3：`TEcf5PaudE9TKXHaXHFQRGTJmHvGpRGuqh`  

## 部署时分发100MTT代币
账户1 当前代币  
![部署分发货币](./assets/img_1.png)

## 直接转账功能 Transfer
账户1 转账给 账户2 `2.5MTT`
![直接转账](./assets/img_2.png)

账户2 当前代币持有
![账户2当前代币持有](./assets/img_3.png)

## 授权与授权转账 Approve & TransferFrom
### 授权功能
账户1 授权 账户3 `3.3MTT`
![账户1授权账户3](./assets/img_4.png)

授权查询
![授权查询](./assets/img_5.png)

### 授权转账
被授权方 (账户3) 发起 账户1 转账给 账户2 `3.3MTT`
![授权转账](./assets/img_6.png)

账户2 当前货币持有
![账户2当前代币持有](./assets/img_7.png)

账户1 给 账户3 的授权代币已使用
![授权代币已使用](./assets/img_8.png)