---
title: 合约地址
description: MNS（Mixin Name Service）
---

# 合约地址

## MNS注册表合约
0xd9523C82d16D94d08788A968a5bCab3b1aee152e<br />
存储所有注册的域名记录。

## MNS注册器合约
0x2136c2646e0C4ca5e9220119b9E70c5324f09642<br />
继承ERC721合约，包含具体注册、续费相关的逻辑。

## STABLEPRICEORACLE
0x2187d5855f75ae888E7D06a609EDddD4a4A309Ba<br />
设置价格，计算价格，设置五个等级的价格。
- L1: 1 位字符
- L2:2 位字符
- L3:3 位字符
- L4:4 位字符
- L5:5 位及以上字符

## DUMMYORACLE
0x8a1797cAd2538EEA75b9F17F0d13cf28724f2617<br />
设置一个价格基数，调整价格基数直接改变各个位数的域名价格。

## MNSRESOLVER
0x6C9cAc6742097b20c906B8A9f0a9e8f17efCD9C0<br />
解析 name->address 的关系。

## REVERSEREGISTRAR
0x18adabF90f4F144DC91547922A4B01B2E77496b0<br />
解析 address->name 的关系。

## MNS控制器主合约
0xe6c74ff4F72a07f456782370965C264984BFD02B<br />
MNS 整套合约的主入口，主要功能如下：
1.查询注册或续费某个域名的价格 
2.查询域名是否已被注册 
3.注册域名 
4.续费域名

## MNSREGISTRY 
0x6f5Cbf87Df9eBeFdfda2a2A5c83C911B03610F90<br />
基于 Mixin架构下的适配代理合约（参考：[https://mvm.dev/zh/registry/registry.html](https://mvm.dev/zh/registry/registry.html)），注册续费域名不支持操作控制器合约，而是操作此代理合约。只有代理合约有权限操作控制器合约。在代理合约中，会验证交易的 Token 是否满足，调用控制器合约进行注册或续费。
