var univ_list = {
    school: "江西师大",                        // 学校名称
    id: "22011",                               // 学校 ID
    link: [ {
        name: "师大主页",                      // 链接名称少于7个汉字或其等宽字符
        url: "http://www.jxnu.edu.cn/"   // 链接地址
    }, {
        ...
    }, {
        name: "教务在线",                        // 链接数量小于或等于7个
        url: "http://jwc.jxnu.edu.cn/Portal/Index.aspx"
    } , {
        name: "办公系统",                        // 链接数量小于或等于7个
        url: "http://oa.jxnu.edu.cn/"
    }, {
        name: "数字化校园平台",                        // 链接数量小于或等于7个
        url: "http://uis.jxnu.edu.cn/cas/login?service=http%3A%2F%2Fecampus.jxnu.edu.cn%2Fc%2Fportal%2Flogin"
    }]
};
