# 万花筒 校园导航

主页：[https://wht.im](https://wht.im/)

邮箱：hi@wht.im

## 添加指南

### 1. 复制代码库

通过 Fork 代码库或直接通过 [Propose new file](https://github.com/flagrow/flarum-ext-image-upload/new/master) 创建文件。

### 2. 获取学校 ID 字段

根据 [univ.li.js](https://github.com/wht-im/wht-university-link/blob/master/univ.li.js) 找到目标学校，并记录其对应的 id 字段。

    {
        id: 1001,       // 学校 ID
        name: "清华大学" // 学校名称
    }

### 3. 添加导航链接

参考 [univ/1001.js](https://github.com/wht-im/wht-university-link/blob/master/univ/1001.js) 的格式添加链接，**其中链接数量必须小于或等于 7 个。**

    var univ_list = {
        school: "清华大学",                        // 学校名称
        id: "1001",                               // 学校 ID
        link: [ {
            name: "清华主页",                      // 链接名称
            url: "https://www.tsinghua.edu.cn/"   // 链接地址
        }, {
            ...
        }, {
            name: "清华园",                        // 链接数量必须小于等于7个
            url: "http://www.thubbs.cn/"
        } ]
    };

### 4. 提交代码
通过pull request 或 [propose new file](https://github.com/flagrow/flarum-ext-image-upload/new/master) 提交代码，路径为 /univ/学校ID.js。
