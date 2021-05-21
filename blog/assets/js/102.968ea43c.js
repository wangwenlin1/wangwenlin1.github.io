(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{1158:function(t,s,a){"use strict";a.r(s);var n=a(19),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"表达式、语句和简单语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表达式、语句和简单语句"}},[t._v("#")]),t._v(" 表达式、语句和简单语句")]),t._v(" "),a("p",[t._v("此篇文章将简单介绍一下Go语言中的表达式和语句，为后面的（特别是下一篇）文章做一个铺垫。")]),t._v(" "),a("p",[t._v("简单说来，一个表达式表示一个值，而一条语句表示一个操作。 但是在实际中，有些个表达式可能同时表示多个值，有些语句可能是由很多更基本的语句组成的。 另外，根据场合不同，某些语句也可以被视为表达式。")]),t._v(" "),a("p",[t._v("Go中，某些语句被称为简单语句。Go中各种流程控制语句的某些部分可能会被要求必须为简单语句或者表达式。 详见下一篇文章对Go中基本流程控制语句的介绍和解释。")]),t._v(" "),a("p",[t._v("本篇文章将不对表达式和语句作出详尽的解释。 详尽的解释需要大量的篇幅。 本文只是列出一些表达式和语句的例子，并非包括所有的表达式和语句的种类，但是简单语句的所有种类都会被列出来。")]),t._v(" "),a("h2",{attrs:{id:"一些表达式的例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一些表达式的例子"}},[t._v("#")]),t._v(" 一些表达式的例子")]),t._v(" "),a("p",[t._v("Go中大多数的表达式都是单值表达式。一个单值表达式只表示一个值。 某些表达式可以表示多个值，它们被称为多值表达式。")]),t._v(" "),a("p",[t._v("以后（不包括本文），如果没有特殊说明，当表达式这个词被提及的时候，它表示一个单值表达式。")]),t._v(" "),a("p",[t._v("前面的几篇文章介绍的字面量、变量和有名常量等均属于单值表达式。它们可称为基本表达式。")]),t._v(" "),a("p",[t._v("前面的"),a("a",{attrs:{href:"https://gfw.go101.org/article/operators.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("运算操作符"),a("OutboundLink")],1),t._v("一文中介绍的运算符操作（不包括赋值部分）也都属于单值表达式。")]),t._v(" "),a("p",[t._v("如果一个函数至少返回一个值，则它的调用属于表达式。 特别的，如果此函数返回两个或两个以上的值，则对它的调用称为多值表达式。 不返回任何结果的函数的调用不属于表达式。")]),t._v(" "),a("p",[t._v("以后的某篇文章中介绍的"),a("a",{attrs:{href:"https://gfw.go101.org/article/method.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("方法"),a("OutboundLink")],1),t._v("可以看作是特殊的函数。 所以上述对函数的解释同样适用于方法。")]),t._v(" "),a("p",[t._v("事实上，以后我们将会了解到自定义函数（包括方法）本身都属于函数类型的值，所以它们都是单值表达式。")]),t._v(" "),a("p",[t._v("通道的接收数据操作（不包括赋值部分）也属于表达式。"),a("a",{attrs:{href:"https://gfw.go101.org/article/channel.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("通道"),a("OutboundLink")],1),t._v("将在以后详解。")]),t._v(" "),a("p",[t._v("Go中的一些表达式，包括刚提及的通道的接收数据操作，可能会表示可变数量的值。 根据不同的场景，这样的表达式可能呈现为单值表达式，也可能呈现为多值表达式。 我们将在以后的文章中了解到这样的表达式。")]),t._v(" "),a("h2",{attrs:{id:"简单语句类型列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单语句类型列表"}},[t._v("#")]),t._v(" 简单语句类型列表")]),t._v(" "),a("p",[t._v("Go中有六种简单语句类型：")]),t._v(" "),a("ol",[a("li",[t._v("变量短声明语句。")]),t._v(" "),a("li",[t._v("纯赋值语句，包括"),a("code",[t._v("x op= y")]),t._v("这种运算形式。")]),t._v(" "),a("li",[t._v("有返回结果的函数或方法调用，以及通道的接收数据操作。 上一节已经提到了，这些语句也可以用做表达式。")]),t._v(" "),a("li",[t._v("通道的发送数据操作。上面已经提到过一次，通道以后将在"),a("a",{attrs:{href:"https://gfw.go101.org/article/channel.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("此文中"),a("OutboundLink")],1),t._v("详解。")]),t._v(" "),a("li",[t._v("空语句。在下一篇文章我们将看到一些空语句的应用。")]),t._v(" "),a("li",[t._v("自增（"),a("code",[t._v("x++")]),t._v("）和自减（"),a("code",[t._v("x--")]),t._v("）语句。")])]),t._v(" "),a("p",[t._v("注意：和C/C++不一样，在Go中，自增和自减语句不能被当作表达式使用。")]),t._v(" "),a("p",[t._v("简单语句这个概念在Go中比较重要，所以请牢记这六种简单语句类型。")]),t._v(" "),a("h2",{attrs:{id:"一些非简单语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一些非简单语句"}},[t._v("#")]),t._v(" 一些非简单语句")]),t._v(" "),a("p",[t._v("下面是一个非简单语句的不完整列表：")]),t._v(" "),a("ul",[a("li",[t._v("标准变量声明语句。是的，短声明语句属于简单语句，但是标准变量声明语句不属于。")]),t._v(" "),a("li",[t._v("（有名）常量声明语句。")]),t._v(" "),a("li",[t._v("类型声明语句。")]),t._v(" "),a("li",[t._v("（代码）包引入语句。")]),t._v(" "),a("li",[t._v("显式代码块。一个显式代码块起始于一个左大括号"),a("code",[t._v("{")]),t._v("，终止于一个右大括号"),a("code",[t._v("}")]),t._v("。 一个显式代码块中可以包含若干子语句。")]),t._v(" "),a("li",[t._v("函数声明。 一个函数声明中可以包含若干子语句。")]),t._v(" "),a("li",[t._v("流程控制跳转语句。详见下一章。")]),t._v(" "),a("li",[t._v("函数返回（"),a("code",[t._v("return")]),t._v("）语句。")]),t._v(" "),a("li",[t._v("延迟函数调用和协程创建语句。下下篇文章将会介绍。")])]),t._v(" "),a("h2",{attrs:{id:"一些表达式和语句的例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一些表达式和语句的例子"}},[t._v("#")]),t._v(" 一些表达式和语句的例子")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一些非简单语句：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"time"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" B "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Go"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Choice "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这是一个显式代码块。")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("567")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一些简单语句的例子：")]),t._v("\nc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("chan")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通道将在以后讲解")]),t._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("789")]),t._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这是一个纯赋值语句")]),t._v("\na"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\na"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("\nc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一个通道发送操作")]),t._v("\nz "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v("c  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一个使用通道接收操作")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 做为源值的变量短声明语句")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一些表达式的例子：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\nB\nB "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" language"')]),t._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("789")]),t._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一个类型不确定布尔值")]),t._v("\nf     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一个类型为“func ()”的表达式")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 下面这些即可以被视为简单语句，也可以被视为表达式。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 函数调用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v("c "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通道接收操作")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);