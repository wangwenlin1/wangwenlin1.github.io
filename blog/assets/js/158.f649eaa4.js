(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{1232:function(r,_,v){"use strict";v.r(_);var t=v(19),n=Object(t.a)({},(function(){var r=this,_=r.$createElement,v=r._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[v("h1",{attrs:{id:"分片集群"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分片集群"}},[r._v("#")]),r._v(" 分片集群")]),r._v(" "),v("h2",{attrs:{id:"_1-1、概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1、概念"}},[r._v("#")]),r._v(" 1.1、概念")]),r._v(" "),v("p",[r._v("分片集群是将数据存储在多台机器上的操作，主要由查询路由mongos、分片、配置服务器组成。"),v("br"),r._v("\n●查询路由根据配置服务器上的元数据将请求分发到相应的分片上，本身不存储集群的元数据，只是缓存在内存中。"),v("br"),r._v("\n●分片用来存储数据块。数据集根据分片键将集合分割为数据块，存储在不同的分片上。在生产环境下，通常一个分片由一个复制集组成。"),v("br"),r._v("\n●配置服务器存储集群的元数据，包括数据与分片的映射关系，配置服务器一旦挂掉，集群将无法工作。"),v("br"),r._v(" "),v("strong",[r._v("注意：")]),v("br"),r._v("\n●当mongos重启时，会从配置服务器读取元数据更新自己缓存的元数据"),v("br"),r._v("\n●当分割数据时或者在分片间移动数据时会写配置服务器。"),v("br"),r._v("\n●在分片集群中，配置服务器可以采用复制集的架构，但复制集中不允许有仲裁节点和延时节点，且buildindexes必须设为true。"),v("br"),r._v("\n●集合的数据分布在多个分片上，如果某个分片失效，查询会返回错误，可以通过为查询指定partial选项，允许接受不完整的数据"),v("br"),r._v(" "),v("strong",[r._v("作用")]),v("br"),r._v(" "),v("strong",[r._v("单台机器无法满足存储需求，内存、磁盘空间不够，读写吞吐量不够。")])]),r._v(" "),v("h2",{attrs:{id:"_1-2、如何维护数据均衡分布"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2、如何维护数据均衡分布"}},[r._v("#")]),r._v(" 1.2、如何维护数据均衡分布")]),r._v(" "),v("p",[v("strong",[r._v("集群使用分割器和平衡器两个后台进程维护数据均匀分布。")])]),r._v(" "),v("h3",{attrs:{id:"分割器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分割器"}},[r._v("#")]),r._v(" 分割器")]),r._v(" "),v("p",[r._v("●分割器的作用是防止数据块变大，数据块大小默认是64MB，当超过64MB时，分割器会将其一分为二。"),v("br"),r._v("\n●分割的对象不是实际的数据，而是元数据，只是在逻辑上进行逻辑块的划分，不会影响到实际数据的分布"),v("br"),r._v("\n●数据块太小会产生大量块，容易使集群不平衡，导致数据块频繁移动，降低集群性能，元数据增加，降低查询效率"),v("br"),r._v("\n●数据块太大，会减小移动频率，元数据少，有利于数据查询，但一旦移动，会花费很长时间"),v("br"),r._v("\n●并不是所有的集合都会分片，没有被分片的集合都存储在同一个主分片上"),v("br"),r._v("\n●只有对数据库和集合开启分片后，数据才会在不同分片上分布，否则只存储在主分片上"),v("br"),r._v("\n●插入和更新操作都有可能引发分割")]),r._v(" "),v("h3",{attrs:{id:"平衡器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#平衡器"}},[r._v("#")]),r._v(" 平衡器")]),r._v(" "),v("p",[r._v("●平衡器的作用是管理数据块的移动。"),v("br"),r._v("\n●当集群中数据块的分布达到移动阈值时，平衡器会移动数据块。"),v("br"),r._v("\n●增加或减少分片或增删数据也会使平衡器移动数据块")]),r._v(" "),v("h2",{attrs:{id:"_1-3数据块如何存储在相应分片上"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3数据块如何存储在相应分片上"}},[r._v("#")]),r._v(" 1.3数据块如何存储在相应分片上")]),r._v(" "),v("p",[r._v("每个需要被分片的集合都需要指定索引字段作为分片键，mongodb使用"),v("strong",[r._v("区间分区")]),r._v("或"),v("strong",[r._v("哈希分区")]),r._v("算法根据分片键将数据分割为数据块。")]),r._v(" "),v("h3",{attrs:{id:"区间分区"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#区间分区"}},[r._v("#")]),r._v(" 区间分区")]),r._v(" "),v("p",[v("strong",[r._v("数据块覆盖一段子区间，任何分片键都会被某一段覆盖")]),v("br"),r._v(" "),v("strong",[r._v("优缺点")]),v("br"),r._v(" "),v("strong",[r._v("区间分区支持更好的range查询，通过分片键查询，查询路由可以很容易的判断出哪些数据块含有查询需要数据，并将请求分配到的分片上。")]),v("br"),r._v(" "),v("strong",[r._v("区间分区使数据分布不均匀")])]),r._v(" "),v("h3",{attrs:{id:"哈希分区"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#哈希分区"}},[r._v("#")]),r._v(" 哈希分区")]),r._v(" "),v("p",[v("strong",[r._v("根据分片键的哈希值进行数据的分配。"),v("br"),r._v("\n优缺点"),v("br"),r._v("\n数据随机分配到不同的数据块"),v("br"),r._v("\n在进行range查询时，由于相邻数据分布在不同分片上，导致访问很多分片")]),v("br"),r._v(" "),v("strong",[r._v("注意")]),v("br"),r._v("\n●分片键不能是多键索引，即索引字段的值不能是数组"),v("br"),r._v("\n●分片键一旦被指定，不能被修改为其他字段，同时分片键的字段值也不能被修改"),v("br"),r._v("\n●如果集群的写操作比较多，可以使用哈希分区，将数据均匀分配到节点上，将写操作均匀应用与集群，"),v("br"),r._v("\n如果集群读操作比较多，可以使用区间分区，将相邻数据分到同一节点上，便于查询"),v("br"),r._v("\n●如果查询时没有指定索引字段，查询路由会将请求分发到所有节点上，等待返回结果，查询效率低"),v("br"),r._v("\n如果查询时指定了索引字段，查询路由会将请求分发到少数节点上，查询效率高")]),r._v(" "),v("h2",{attrs:{id:"_1-4、数据迁移过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-4、数据迁移过程"}},[r._v("#")]),r._v(" 1.4、数据迁移过程")]),r._v(" "),v("p",[r._v("●平衡器向源节点发送movechunk指令"),v("br"),r._v("\n●源节点移动指定数据块，在迁移期间，数据块的读写操作仍路由到源节点"),v("br"),r._v("\n●目的节点如果没有需要的索引，此时会构建索引"),v("br"),r._v("\n●目的节点开始请求数据块中的数据，保存在本地"),v("br"),r._v("\n●在迁移期间，源节点上的数据如果发生变化，在迁移完之后，目的节点会同步源节点上变更的数据"),v("br"),r._v("\n●同步结束后，目的节点会与配置服务器建立连接，配置服务器更新元数据，此期间源节点阻塞写操作"),v("br"),r._v("\n●源节点上的旧数据被删除")]),r._v(" "),v("h2",{attrs:{id:"_1-5、备份数据"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-5、备份数据"}},[r._v("#")]),r._v(" 1.5、备份数据")]),r._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[r._v("mongodump -h dbhost -d dbname -o directory 命令格式\nmongodump -h 127.0.0.1：28002 -d test -o /home/backup\n")])])]),v("p",[r._v("将本机数据库test中数据备份到/home/backup下"),v("br"),r._v("\n恢复数据"),v("br"),r._v("\nmongorestore -h dbhost -d dbname –directoryperdb dbdirectory dbdirectory为备份数据所在位置")]),r._v(" "),v("h1",{attrs:{id:"复制集"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#复制集"}},[r._v("#")]),r._v(" 复制集")]),r._v(" "),v("h2",{attrs:{id:"_2-1、概念与特性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1、概念与特性"}},[r._v("#")]),r._v(" 2.1、概念与特性")]),r._v(" "),v("p",[v("strong",[r._v("概念"),v("br"),r._v("\n复制集是一组具有相同数据的mongod实例，包含主节点以及从节点。集群中任何时候只有一个主节点，主节点将数据变更操作写到oplog（封顶表）中，从节点读取oplog，并将oplog中的操作应用的本地数据，从而实现数据同步。")])]),r._v(" "),v("p",[v("strong",[r._v("特性")]),v("br"),r._v("\n●"),v("strong",[r._v("异步复制")]),v("br"),r._v("\n从节点并不是实时复制主节点中的数据"),v("br"),r._v(" "),v("strong",[r._v("●自动容灾")]),v("br"),r._v("\n主节点宕机，主动发起选举"),v("br"),r._v(" "),v("strong",[r._v("●读操作")]),v("br"),r._v("\n从从节点上读到的数据可能并不是最新的")]),r._v(" "),v("h2",{attrs:{id:"_2-2、复制集成员"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2、复制集成员"}},[r._v("#")]),r._v(" 2.2、复制集成员")]),r._v(" "),v("p",[r._v("复** "),v("strong",[r._v("制集最多包含")]),r._v("50个节点**，最多"),v("strong",[r._v("只能有7个可以投票")]),r._v("。包含以下节点类型"),v("br"),r._v("\n●"),v("strong",[r._v("主节点primary")]),v("br"),r._v("\n可以执行读写操作，所有节点均可以执行读操作。默认情况下，读请求只会发送给主节点，可以通过read preference设置。主节点的优先级priority至少为1。"),v("br"),r._v("\n●"),v("strong",[r._v("从节点secondary")]),v("br"),r._v("\n只可以执行读操作。从节点通过与主节点同步，实现备份数据的功能，复制集至少有一个从节点。通过配置复制集的配置文件可以设置从节点是否参与选举（vote=0）以及是否可以被选举为主节点（priority=0）优先级priority为0的节点不能发起选举，不能被选举为主节点，但可以投票。"),v("br"),r._v("\n●"),v("strong",[r._v("隐藏节点")]),v("br"),r._v("\n通过设置从节点的hidden属性，可以对客户端隐藏节点，不接受读写请求，无法被选举为主节点（priority=0），只能投票，主要用于备份数据。"),v("br"),r._v("\n●"),v("strong",[r._v("延时节点")]),v("br"),r._v("\n通过设置隐藏节点的slaveDelay属性可以使节点延时一定时间从主节点复制数据，可以起到保护数据的作用。延时节点是在隐藏节点的基础上，多了一个延时属性。"),v("br"),r._v("\n●"),v("strong",[r._v("仲裁节点Arbiter")]),v("br"),r._v("\n本身不存储数据，不能被选举为主节点，只能投票，仲裁节点主要用于使复制集中节点个数为奇数，从而容易达到多数派。仲裁节点只消耗极少的资源，但不要与主节点、从节点部署在同一个物理节点上。"),v("br"),r._v("\n●"),v("strong",[r._v("非投票节点")]),v("br"),r._v("\n不参与投票，但存储数据，可以接受读操作")]),r._v(" "),v("h2",{attrs:{id:"_2-3、复制集管理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3、复制集管理"}},[r._v("#")]),r._v(" 2.3、复制集管理")]),r._v(" "),v("p",[r._v("●use admin切换到admin数据库"),v("br"),r._v("\n●config={_id:”myset”,members:[{“_id”:0,”host”:”127.0.0.1:28001”,”priority”:2},{“_id”:1,”host”:”127.0.0.1:28002”,”priority”:1}]}"),v("br"),r._v("\n●rs.initiate(config)"),v("br"),r._v("\n修改复制集配置"),v("br"),r._v("\n●cfg=rs.conf()"),v("br"),r._v("\n●cfg.members[0].priority=1"),v("br"),r._v("\n●rs.reconfig(cfg)"),v("br"),r._v("\n复制集维护"),v("br"),r._v("\n将配置文件中的replset注释掉，从而以单机模式启动复制集，维护完毕后再加入复制集。")]),r._v(" "),v("h2",{attrs:{id:"_2-4、大多数原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-4、大多数原则"}},[r._v("#")]),r._v(" 2.4、大多数原则")]),r._v(" "),v("p",[v("strong",[r._v("概念")]),v("br"),r._v("\n如果复制集中的节点个数为N，则大多数为N/2+1（N/2向下取整），当复制集中存活节点数小于大多数时，不存在主节点，无法提供写服务。")]),r._v(" "),v("p",[v("strong",[r._v("作用")]),v("br"),r._v("\n大多数原则保证了，在任何时刻复制集中的主节点个数不会超过一个。比如复制集部署在两个机房，两个机房通信发生故障，不含有主节点的机房会选举出一个主节点，等到故障恢复，复制集就会存在两个主节点，无法保证数据的一致性。")]),r._v(" "),v("h2",{attrs:{id:"_2-5、选举"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-5、选举"}},[r._v("#")]),r._v(" 2.5、选举")]),r._v(" "),v("p",[v("strong",[r._v("选举的前提条件")]),v("br"),r._v("\n复制集满足大多数原则。在选举的过程中，复制集无法进行写操作。")]),r._v(" "),v("p",[v("strong",[r._v("何时会引发选举")]),v("br"),r._v("\n●复制集初始化时或被重新配置后"),v("br"),r._v("\n●主节点宕机或主节点网络不可达，即大多数节点无法连接主节点"),v("br"),r._v("\n●人为将主节点降为从节点，执行rs.stepDown(n)命令"),v("br"),r._v("\n●有更高优先级的节点加入复制集")]),r._v(" "),v("p",[v("strong",[r._v("选举特点")]),v("br"),r._v("\n●优先级高的节点优先被选为主节点"),v("br"),r._v("\n●具有最高optime的节点被选为主节点"),v("br"),r._v("\n●如果优先级高的节点不具有最新的optime，那么首先会同步主节点的oplog"),v("br"),r._v("\n●优先级为0的节点无法发起选举，且无法成为主节点，只能投票。"),v("br"),r._v("\n●所有成员都可以否决选举，包括不投票的节点Non-voting")]),r._v(" "),v("p",[v("strong",[r._v("何时否决选举")]),v("br"),r._v("\n●发起选举的节点不包含最新数据"),v("br"),r._v("\n●发起选举的节点优先级比其他节点低"),v("br"),r._v("\n●发起选举的节点没有持有最高的optime")]),r._v(" "),v("h2",{attrs:{id:"_2-6、数据回滚"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-6、数据回滚"}},[r._v("#")]),r._v(" 2.6、数据回滚")]),r._v(" "),v("p",[r._v("概念：在主节点失效之前，从节点并未全部复制主节点上的数据，原先的主节点在选举出新的主节点后重新加入复制集，会导致旧主节点与新主节点数据不一致，旧主节点会将不一致的数据回滚，从而与主节点数据保持一致。")]),r._v(" "),v("p",[r._v("避免数据回滚"),v("br"),r._v("\n默认情况下，在主节点上写入成功后，就会向客户端返回结果，可能造成回滚，客户端可以修改写策略writeconcern为向大多数节点写入成功后才返回结果。")]),r._v(" "),v("h2",{attrs:{id:"_2-7、读写策略"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-7、读写策略"}},[r._v("#")]),r._v(" 2.7、读写策略")]),r._v(" "),v("p",[r._v("writeconcern：不等待主节点写入成功，客户端就返回结果；等待主节点写入成功，就返回结果；等到大多数节点写入成功，才返回结果"),v("br"),r._v("\nreadconcern：只读主节点、只读从节点、优先主节点、优先从节点、读网络延迟最小的节点")]),r._v(" "),v("h2",{attrs:{id:"_2-8、复制集优缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-8、复制集优缺点"}},[r._v("#")]),r._v(" 2.8、复制集优缺点")]),r._v(" "),v("p",[v("strong",[r._v("优点")]),v("br"),r._v("\n●自动容灾。主节点宕机，通过投票选举主节点，保证数据安全"),v("br"),r._v("\n●自动备份数据，无需人工干预"),v("br"),r._v("\n●易于扩展"),v("br"),r._v("\n●数据可靠性高"),v("br"),r._v(" "),v("strong",[r._v("缺点")]),v("br"),r._v("\n●消耗资源高"),v("br"),r._v("\n●不能解决负载均衡的问题"),v("br"),r._v("\n●客户端读到的数据可能并未持久化 ，比如：客户端可以读到最新写入的数据，但数据有可能存在磁盘写入失败的可能；客户端读到的数据可能发生rolled back")])])}),[],!1,null,null,null);_.default=n.exports}}]);