---
id: HAL库开发笔记（一）-环境配置
title: HAL 库开发笔记（一）- 环境配置
---

注：本教程基于反客的 STM32F429IGT6 板子。

## 软件安装

### Keil MDK

详见文章 [**Keil MDK 配置指南**](https://wiki-power.com/KeilMDK%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97)

### Java Runtime Environment

这是 STM32CubeMX 所需要的 Java 环境，从 [**官网链接**](https://www.java.com/en/download/) 下载安装即可。

### STM32CubeMX

从 [**官网链接**](https://my.st.com/content/my_st_com/zh/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-configurators-and-code-generators/stm32cubemx.license=1611899126599.product=STM32CubeMX.version=6.1.1.html) 下载并安装 STM32CubeMX.

## 项目的配置

### 初始化

新建项目，选择芯片后先保存。

### 配置 SYS

`Pinout & Configurations` - `System Core` - `SYS`

将 `Debug` 选项改为 `Serial Wire`（原因详见文章 [**CubeMX 的一些坑**](https://wiki-power.com/CubeMX%E7%9A%84%E4%B8%80%E4%BA%9B%E5%9D%91#%E9%BB%98%E8%AE%A4%E5%85%B3%E9%97%AD%E8%B0%83%E8%AF%95%E7%AB%AF%E5%8F%A3)）

### 配置 RCC

`Pinout & Configurations` - `System Core` - `RCC`

按照板子的情况设置就行了。

举个例子，参照板子原理图：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210205205030.png)

将 `HSE` 和 `LSE` 的选项都设置为外部晶振就可以了：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210205205140.png)

### 配置时钟树

在 `Clock Configuration` 界面进行配置。


![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210205205550.png)

根据上图的步骤如下：

1. 根据板载外部晶振的参数，填入最左侧两个频率的值
2. 勾选 `HSE` ，因为外部晶振频率和精度都比内部的高
3. 勾选 `PLLCLK` ，使用 PLL 锁相环倍频得到高频率
4. 填入 `HCKL` 的值，一般根据下方提示的最大频率填写，填写后按回车，便可自动计算分频倍频数

### 配置项目管理选项

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210130095224.png)

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210130095239.png)


## 参考与致谢 

- [【STM32】系统时钟 RCC 详解](https://blog.csdn.net/as480133937/article/details/98845509)
- [板子初始化，RCC时钟树完整配置的方式和详细过程](https://www.notion.so/2-RCC-770c0c454f954408a3956257aa0fb523)



> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。