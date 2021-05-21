(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{1151:function(e,t,s){"use strict";s.r(t);var a=s(19),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"关键字和标识符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关键字和标识符"}},[e._v("#")]),e._v(" 关键字和标识符")]),e._v(" "),s("h1",{attrs:{id:"关键字和标识符-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关键字和标识符-2"}},[e._v("#")]),e._v(" 关键字和标识符")]),e._v(" "),s("p",[e._v("此篇文章将介绍Go中的关键字和标识符。")]),e._v(" "),s("h2",{attrs:{id:"关键字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关键字"}},[e._v("#")]),e._v(" 关键字")]),e._v(" "),s("p",[e._v("关键字是一些特殊的用来帮助编译器理解和解析源代码的单词。")]),e._v(" "),s("p",[e._v("截止目前（Go 1.16），Go中共有25个关键字。")]),e._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("break")]),e._v("     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("default")]),e._v("      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("func")]),e._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("interface")]),e._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("case")]),e._v("      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("defer")]),e._v("        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("go")]),e._v("      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("map")]),e._v("        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("struct")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("chan")]),e._v("      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("else")]),e._v("         "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("goto")]),e._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("package")]),e._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("switch")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v("     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("fallthrough")]),e._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v("      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("range")]),e._v("      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("continue")]),e._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v("          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v("     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v("\n")])])]),s("p",[e._v("这些关键字可以分为四组：")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("const")]),e._v("、"),s("code",[e._v("func")]),e._v("、"),s("code",[e._v("import")]),e._v("、"),s("code",[e._v("package")]),e._v("、"),s("code",[e._v("type")]),e._v("和"),s("code",[e._v("var")]),e._v("用来声明各种代码元素。")]),e._v(" "),s("li",[s("code",[e._v("chan")]),e._v("、"),s("code",[e._v("interface")]),e._v("、"),s("code",[e._v("map")]),e._v("和"),s("code",[e._v("struct")]),e._v("用做 一些组合类型的字面表示中。")]),e._v(" "),s("li",[s("code",[e._v("break")]),e._v("、"),s("code",[e._v("case")]),e._v("、"),s("code",[e._v("continue")]),e._v("、"),s("code",[e._v("default")]),e._v("、 "),s("code",[e._v("else")]),e._v("、"),s("code",[e._v("fallthrough")]),e._v("、"),s("code",[e._v("for")]),e._v("、 "),s("code",[e._v("goto")]),e._v("、"),s("code",[e._v("if")]),e._v("、"),s("code",[e._v("range")]),e._v("、 "),s("code",[e._v("return")]),e._v("、"),s("code",[e._v("select")]),e._v("和"),s("code",[e._v("switch")]),e._v("用在流程控制语句中。 详见"),s("a",{attrs:{href:"https://gfw.go101.org/article/control-flows.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("基本流程控制语法"),s("OutboundLink")],1),e._v("。")]),e._v(" "),s("li",[s("code",[e._v("defer")]),e._v("和"),s("code",[e._v("go")]),e._v("也可以看作是流程控制关键字， 但它们有一些特殊的作用。详见"),s("a",{attrs:{href:"https://gfw.go101.org/article/control-flows-more.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("协程和延迟函数调用"),s("OutboundLink")],1),e._v("。")])]),e._v(" "),s("p",[e._v("这些关键字将在后续文章中得到详细介绍。")]),e._v(" "),s("h2",{attrs:{id:"标识符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标识符"}},[e._v("#")]),e._v(" 标识符")]),e._v(" "),s("p",[e._v("一个标识符是一个以Unicode字母或者 "),s("code",[e._v("_")]),e._v(" 开头并且完全由Unicode字母和Unicode数字组成的单词。")]),e._v(" "),s("ul",[s("li",[e._v("Unicode字母是定义在"),s("a",{attrs:{href:"https://www.unicode.org/versions/Unicode8.0.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Unicode标准8.0"),s("OutboundLink")],1),e._v(" 中的"),s("em",[e._v("Lu")]),e._v("、"),s("em",[e._v("Ll")]),e._v("、"),s("em",[e._v("Lt")]),e._v("、"),s("em",[e._v("Lm")]),e._v("和"),s("em",[e._v("Lo")]),e._v("分类中的字符。")]),e._v(" "),s("li",[e._v("Unicode数字是定义在Unicode标准8.0中的"),s("em",[e._v("Nd")]),e._v("数字字符分类中的字符。")])]),e._v(" "),s("p",[e._v("注意："),s("strong",[e._v("关键字不能被用做标识符。")])]),e._v(" "),s("p",[e._v("标识符 "),s("code",[e._v("_")]),e._v(" 是一个特殊字符，它叫做"),s("strong",[e._v("空标识符")]),e._v("。")]),e._v(" "),s("p",[e._v("以后，我们将知道所有的类型名、变量名、常量名、跳转标签、包名和包的引入名都必须是标识符。")]),e._v(" "),s("p",[e._v("一个由"),s("a",{attrs:{href:"http://www.fileformat.info/info/unicode/category/Lu/list.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("Unicode大写字母"),s("OutboundLink")],1),e._v("开头的标识符称为"),s("strong",[e._v("导出标识符")]),e._v("。 这里"),s("strong",[s("em",[e._v("导出*"),s("strong",[e._v("可以被理解为")]),s("em",[e._v("公开*")])]),e._v("（public）。 其它（即非Unicode大写字母开头的）标识符称为")]),e._v("非导出标识符**。 **"),s("em",[e._v("非导出*"),s("strong",[e._v("可以被理解为")]),s("em",[e._v("私有*")])]),e._v("（private）。 截至目前（Go 1.16），东方字符都被视为非导出字符。 "),s("strong",[e._v("非导出")]),e._v("有时候也被称为*"),s("strong",[e._v("未导出*")]),e._v("。")]),e._v(" "),s("p",[e._v("下面是一些合法的导出标识符：")]),e._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[e._v("Player_9\nDoSomething\nVERSION\nĜo\nΠ\n")])])]),s("p",[e._v("下面是一些合法的未导出标识符：")]),e._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("_")]),e._v("\n_status\nmemStat\nbook\nπ\n一个类型\n변수\nエラー\n")])])]),s("p",[e._v("下面这些不能被用做标识符：")]),e._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Unicode数字开头")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("123")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v("apples\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 含有不符合要求的Unicode字符")]),e._v("\na"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("b\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("ptr\n$name\na@b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("c\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 这两个是关键字")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("range")]),e._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);