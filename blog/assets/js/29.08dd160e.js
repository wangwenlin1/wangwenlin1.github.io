(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1253:function(s,t,a){"use strict";a.r(t);var r=a(19),v=Object(r.a)({},(function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("h1",{attrs:{id:"持久化之rdb"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#持久化之rdb"}},[s._v("#")]),s._v(" 持久化之RDB")]),s._v(" "),r("h2",{attrs:{id:"总体介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总体介绍"}},[s._v("#")]),s._v(" 总体介绍")]),s._v(" "),r("p",[s._v("官网介绍：http://www.redis.io")]),s._v(" "),r("p",[r("img",{attrs:{src:a(832),alt:""}})]),s._v(" "),r("p",[s._v("Redis 提供了2个不同形式的持久化方式。")]),s._v(" "),r("ul",[r("li",[r("p",[s._v("RDB（Redis DataBase）")])]),s._v(" "),r("li",[r("p",[s._v("AOF（Append Of File）")])])]),s._v(" "),r("h2",{attrs:{id:"rdb-redis-database"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rdb-redis-database"}},[s._v("#")]),s._v(" RDB（Redis DataBase）")]),s._v(" "),r("h3",{attrs:{id:"官网介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#官网介绍"}},[s._v("#")]),s._v(" 官网介绍")]),s._v(" "),r("p",[r("img",{attrs:{src:a(833),alt:""}})]),s._v(" "),r("h3",{attrs:{id:"是什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#是什么"}},[s._v("#")]),s._v(" 是什么")]),s._v(" "),r("p",[s._v("在指定的时间间隔内将内存中的数据集快照写入磁盘， 也就是行话讲的Snapshot快照，它恢复时是将快照文件直接读到内存里")]),s._v(" "),r("h3",{attrs:{id:"备份是如何执行的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#备份是如何执行的"}},[s._v("#")]),s._v(" 备份是如何执行的")]),s._v(" "),r("p",[s._v("Redis会单独创建（fork）一个子进程来进行持久化，会先将数据写入到 一个临时文件中，待持久化过程都结束了，再用这个临时文件替换上次持久化好的文件。 整个过程中，主进程是不进行任何IO操作的，这就确保了极高的性能 如果需要进行大规模数据的恢复，且对于数据恢复的完整性不是非常敏感，那RDB方式要比AOF方式更加的高效。"),r("strong",[s._v("RDB的缺点是最后一次持久化后的数据可能丢失")]),s._v("。")]),s._v(" "),r("p",[r("strong",[s._v("Fork")])]),s._v(" "),r("ul",[r("li",[r("p",[s._v("Fork的作用是复制一个与当前进程一样的进程。新进程的所有数据（变量、环境变量、程序计数器等） 数值都和原进程一致，但是是一个全新的进程，并作为原进程的子进程")])]),s._v(" "),r("li",[r("p",[s._v("在Linux程序中，fork()会产生一个和父进程完全相同的子进程，但子进程在此后多会exec系统调用，出于效率考虑，Linux中引入了“"),r("strong",[s._v("写时复制技术")]),s._v("”")])]),s._v(" "),r("li",[r("p",[r("strong",[s._v("一般情况父进程和子进程会共用同一段物理内存")]),s._v("，只有进程空间的各段的内容要发生变化时，才会将父进程的内容复制一份给子进程。")])])]),s._v(" "),r("h3",{attrs:{id:"rdb持久化流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rdb持久化流程"}},[s._v("#")]),s._v(" RDB持久化流程")]),s._v(" "),r("p",[r("img",{attrs:{src:a(834),alt:""}})]),s._v(" "),r("h3",{attrs:{id:"dump-rdb文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dump-rdb文件"}},[s._v("#")]),s._v(" dump.rdb文件")]),s._v(" "),r("p",[s._v("在redis.conf中配置文件名称，默认为dump.rdb"),r("br"),s._v(" "),r("img",{attrs:{src:a(835),alt:""}})]),s._v(" "),r("h3",{attrs:{id:"配置位置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置位置"}},[s._v("#")]),s._v(" 配置位置")]),s._v(" "),r("p",[s._v("rdb文件的保存路径，也可以修改。默认为Redis启动时命令行所在的目录下")]),s._v(" "),r("p",[s._v('dir "/myredis/"')]),s._v(" "),r("p",[r("img",{attrs:{src:a(836),alt:""}})]),s._v(" "),r("h3",{attrs:{id:"如何触发rdb快照-保持策略"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何触发rdb快照-保持策略"}},[s._v("#")]),s._v(" 如何触发RDB快照；保持策略")]),s._v(" "),r("h4",{attrs:{id:"配置文件中默认的快照配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置文件中默认的快照配置"}},[s._v("#")]),s._v(" 配置文件中默认的快照配置")]),s._v(" "),r("p",[r("img",{attrs:{src:a(837),alt:""}})]),s._v(" "),r("h4",{attrs:{id:"命令save-vs-bgsave"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#命令save-vs-bgsave"}},[s._v("#")]),s._v(" 命令save VS bgsave")]),s._v(" "),r("p",[s._v("save ：save时只管保存，其它不管，全部阻塞。手动保存。不建议。")]),s._v(" "),r("p",[r("strong",[s._v("bgsave："),r("strong",[r("strong",[s._v("Redis")])]),s._v("会在后台异步进行快照操作， 快照同时还可以响应客户端请求。")])]),s._v(" "),r("p",[s._v("可以通过lastsave 命令获取最后一次成功执行快照的时间")]),s._v(" "),r("h4",{attrs:{id:"flushall命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flushall命令"}},[s._v("#")]),s._v(" flushall命令")]),s._v(" "),r("p",[s._v("执行flushall命令，也会产生dump.rdb文件，但里面是空的，无意义")]),s._v(" "),r("h4",{attrs:{id:"snapshotting快照"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#snapshotting快照"}},[s._v("#")]),s._v(" SNAPSHOTTING快照")]),s._v(" "),r("h4",{attrs:{id:"save"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#save"}},[s._v("#")]),s._v(" Save")]),s._v(" "),r("p",[s._v("格式：save 秒钟 写操作次数")]),s._v(" "),r("p",[s._v("RDB是整个内存的压缩过的Snapshot，RDB的数据结构，可以配置复合的快照触发条件，")]),s._v(" "),r("p",[r("strong",[s._v("默认是1分钟内改了"),r("strong",[r("strong",[s._v("1")])]),s._v("万次，或"),r("strong",[r("strong",[s._v("5")])]),s._v("分钟内改了"),r("strong",[r("strong",[s._v("10")])]),s._v("次，或"),r("strong",[r("strong",[s._v("15")])]),s._v("分钟内改了"),r("strong",[r("strong",[s._v("1")])]),s._v("次。")])]),s._v(" "),r("p",[r("strong",[s._v("禁用")])]),s._v(" "),r("p",[r("strong",[s._v("不设置save指令，或者给save传入空字符串")])]),s._v(" "),r("h4",{attrs:{id:"stop-writes-on-bgsave-error"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#stop-writes-on-bgsave-error"}},[s._v("#")]),s._v(" stop-writes-on-bgsave-error")]),s._v(" "),r("p",[r("img",{attrs:{src:a(838),alt:""}})]),s._v(" "),r("p",[s._v("当Redis无法写入磁盘的话，直接关掉Redis的写操作。推荐yes.")]),s._v(" "),r("h4",{attrs:{id:"rdbcompression压缩文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rdbcompression压缩文件"}},[s._v("#")]),s._v(" rdbcompression压缩文件")]),s._v(" "),r("p",[r("img",{attrs:{src:a(839),alt:""}})]),s._v(" "),r("p",[s._v("对于存储到磁盘中的快照，可以设置是否进行压缩存储。如果是的话，redis会采用LZF算法进行压缩。")]),s._v(" "),r("p",[s._v("如果你不想消耗CPU来进行压缩的话，可以设置为关闭此功能。推荐yes.")]),s._v(" "),r("h4",{attrs:{id:"rdbchecksum检查完整性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rdbchecksum检查完整性"}},[s._v("#")]),s._v(" rdbchecksum检查完整性")]),s._v(" "),r("p",[r("img",{attrs:{src:a(840),alt:""}})]),s._v(" "),r("p",[s._v("在存储快照后，还可以让redis使用CRC64算法来进行数据校验，")]),s._v(" "),r("p",[s._v("但是这样做会增加大约10%的性能消耗，如果希望获取到最大的性能提升，可以关闭此功能")]),s._v(" "),r("p",[s._v("推荐yes.")]),s._v(" "),r("h4",{attrs:{id:"rdb的备份"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rdb的备份"}},[s._v("#")]),s._v(" rdb的备份")]),s._v(" "),r("p",[s._v("先通过config get dir  查询rdb文件的目录")]),s._v(" "),r("p",[s._v("将*.rdb的文件拷贝到别的地方")]),s._v(" "),r("p",[s._v("rdb的恢复")]),s._v(" "),r("ul",[r("li",[r("p",[s._v("关闭Redis")])]),s._v(" "),r("li",[r("p",[s._v("先把备份的文件拷贝到工作目录下 cp dump2.rdb dump.rdb")])]),s._v(" "),r("li",[r("p",[s._v("启动Redis, 备份数据会直接加载")])])]),s._v(" "),r("h3",{attrs:{id:"优势"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#优势"}},[s._v("#")]),s._v(" 优势")]),s._v(" "),r("ul",[r("li",[r("p",[s._v("适合大规模的数据恢复")])]),s._v(" "),r("li",[r("p",[s._v("对数据完整性和一致性要求不高更适合使用")])]),s._v(" "),r("li",[r("p",[s._v("节省磁盘空间")])]),s._v(" "),r("li",[r("p",[s._v("恢复速度快")])])]),s._v(" "),r("p",[r("img",{attrs:{src:a(841),alt:""}})]),s._v(" "),r("h3",{attrs:{id:"劣势"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#劣势"}},[s._v("#")]),s._v(" 劣势")]),s._v(" "),r("ul",[r("li",[r("p",[s._v("Fork的时候，内存中的数据被克隆了一份，大致2倍的膨胀性需要考虑")])]),s._v(" "),r("li",[r("p",[s._v("虽然Redis在fork时使用了"),r("strong",[s._v("写时拷贝技术")]),s._v(",但是如果数据庞大时还是比较消耗性能。")])]),s._v(" "),r("li",[r("p",[s._v("在备份周期在一定间隔时间做一次备份，所以如果Redis意外down掉的话，就会丢失最后一次快照后的所有修改。")])])]),s._v(" "),r("h3",{attrs:{id:"如何停止"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何停止"}},[s._v("#")]),s._v(" 如何停止")]),s._v(" "),r("p",[s._v('动态停止RDB：redis-cli config set save ""#save后给空值，表示禁用保存策略')]),s._v(" "),r("h3",{attrs:{id:"小总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#小总结"}},[s._v("#")]),s._v(" 小总结")]),s._v(" "),r("p",[r("img",{attrs:{src:a(842),alt:""}})])])}),[],!1,null,null,null);t.default=v.exports},832:function(s,t,a){s.exports=a.p+"assets/img/2021-05-15-08-50-27.0529a1a0.png"},833:function(s,t,a){s.exports=a.p+"assets/img/2021-05-15-08-52-17.9760ec61.png"},834:function(s,t,a){s.exports=a.p+"assets/img/2021-05-15-08-54-01.c72423b0.png"},835:function(s,t,a){s.exports=a.p+"assets/img/2021-05-15-08-54-18.7aff44a4.png"},836:function(s,t,a){s.exports=a.p+"assets/img/2021-05-15-08-54-35.0eb426c4.png"},837:function(s,t,a){s.exports=a.p+"assets/img/2021-05-15-08-55-12.b04d6051.png"},838:function(s,t,a){s.exports=a.p+"assets/img/2021-05-15-08-57-19.6567c349.png"},839:function(s,t,a){s.exports=a.p+"assets/img/2021-05-15-08-57-34.7e9d2ab4.png"},840:function(s,t,a){s.exports=a.p+"assets/img/2021-05-15-08-57-54.ee5b7a1c.png"},841:function(s,t,a){s.exports=a.p+"assets/img/2021-05-15-08-58-59.3410a2b1.png"},842:function(s,t,a){s.exports=a.p+"assets/img/2021-05-15-08-59-38.3b0d70ce.png"}}]);