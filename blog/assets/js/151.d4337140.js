(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{1224:function(e,n,t){"use strict";t.r(n);var a=t(19),_=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"元字段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#元字段"}},[e._v("#")]),e._v(" 元字段")]),e._v(" "),t("p",[t("code",[e._v("元字段是ES为每个文档配置的内置字段, 主要用于ES内部相关操作.")])]),e._v(" "),t("h3",{attrs:{id:"标识元字段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#标识元字段"}},[e._v("#")]),e._v(" 标识元字段")]),e._v(" "),t("ul",[t("li",[e._v("_index"),t("br"),e._v(" "),t("code",[e._v("文档所属的索引")])]),e._v(" "),t("li",[e._v("_id"),t("br"),e._v(" "),t("code",[e._v("文档的id")])])]),e._v(" "),t("h3",{attrs:{id:"文档源元字段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文档源元字段"}},[e._v("#")]),e._v(" 文档源元字段")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("_source"),t("br"),e._v("\n表示文档主体的原始 JSON")])]),e._v(" "),t("li",[t("p",[e._v("_size"),t("br"),e._v(" "),t("code",[e._v("_source的大小,由mapper-size plugin 插件.")])])])]),e._v(" "),t("h3",{attrs:{id:"文档计数元数据字段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文档计数元数据字段"}},[e._v("#")]),e._v(" 文档计数元数据字段")]),e._v(" "),t("ul",[t("li",[e._v("_doc_count"),t("br"),e._v(" "),t("code",[e._v("当文档表示预聚合数据时，用于存储文档计数的自定义字段")])])]),e._v(" "),t("h3",{attrs:{id:"索引元数据字段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#索引元数据字段"}},[e._v("#")]),e._v(" 索引元数据字段")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("_field_names"),t("br"),e._v(" "),t("code",[e._v("文档中包含非空值的所有字段")])])]),e._v(" "),t("li",[t("p",[e._v("_ignored"),t("br"),e._v(" "),t("code",[e._v("在索引时由于以下原因而被忽略的文档中的所有字段[")]),e._v("ignore_malformed"),t("code",[e._v("]")])])])]),e._v(" "),t("h3",{attrs:{id:"路由元数据字段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#路由元数据字段"}},[e._v("#")]),e._v(" 路由元数据字段")]),e._v(" "),t("ul",[t("li",[e._v("_routing"),t("br"),e._v(" "),t("code",[e._v("将文档路由到特定分片的自定义路由值")])])]),e._v(" "),t("h3",{attrs:{id:"其他元数据字段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他元数据字段"}},[e._v("#")]),e._v(" 其他元数据字段")]),e._v(" "),t("ul",[t("li",[e._v("_meta"),t("br"),e._v(" "),t("code",[e._v("特定于应用程序的元数据")])])]),e._v(" "),t("h2",{attrs:{id:"doc-count"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#doc-count"}},[e._v("#")]),e._v(" _doc_count")]),e._v(" "),t("p",[e._v("Bucket 聚合总是返回一个名为 doc_count 的字段，该字段显示在每个 Bucket 中聚合和分区的文档数量。计算 doc_count 的值非常简单。Doc 计数为每桶中收集的每个文档增加1。")]),e._v(" "),t("p",[e._v("虽然这种简单的方法在计算单个文档的聚合时是有效的，但它不能准确地表示存储预聚合数据的文档(例如直方图或聚合_metric_double 字段) ，因为一个汇总字段可能表示多个文档。")]),e._v(" "),t("p",[e._v("为了在处理预聚合数据时能够正确计算文档数量，我们引入了名为_doc_count 的元数据字段类型。_doc_count 必须始终是一个正整数，表示在单个汇总字段中聚合的文档数量。")]),e._v(" "),t("p",[e._v("当将 field_doc_count 添加到文档中时，所有 bucket 聚合都将尊重其值，并按字段值递增 bucket doc_count。如果一个文档不包含任何_doc_count 字段，默认情况下是_doc_count = 1。")]),e._v(" "),t("ul",[t("li",[e._v("A 字段只能在每个文档中存储一个正整数。不允许嵌套数组")]),e._v(" "),t("li",[e._v("如果文件中没有包含 字段，聚合器将增加1，这是默认行为")])]),e._v(" "),t("h3",{attrs:{id:"例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[e._v("#")]),e._v(" 例子")]),e._v(" "),t("p",[e._v("下面的 create index API 请求使用以下字段映射创建一个新索引:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('PUT my_index\n{\n  "mappings" : {\n    "properties" : {\n      "my_histogram" : {\n        "type" : "histogram"\n      },\n      "my_text" : {\n        "type" : "keyword"\n      }\n    }\n  }\n}\n')])])]),t("p",[e._v("下面的索引 API 请求为两个直方图存储预聚合数据: histogram_1 and histogram_2。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('PUT my_index/_doc/1\n{\n  "my_text" : "histogram_1",\n  "my_histogram" : {\n      "values" : [0.1, 0.2, 0.3, 0.4, 0.5],\n      "counts" : [3, 7, 23, 12, 6]\n   },\n  "_doc_count": 45 \n}\n\nPUT my_index/_doc/2\n{\n  "my_text" : "histogram_2",\n  "my_histogram" : {\n      "values" : [0.1, 0.25, 0.35, 0.4, 0.45, 0.5],\n      "counts" : [8, 17, 8, 7, 6, 2]\n   },\n  "_doc_count": 62 \n}\n')])])]),t("ul",[t("li",[e._v("doc_count 必须是一个正整数，存储为生成每个直方图而聚合的文档数量。")])]),e._v(" "),t("p",[e._v("如果我们在 my_index 上运行以下术语聚合:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('GET /_search\n{\n    "aggs" : {\n        "histogram_titles" : {\n            "terms" : { "field" : "my_text" }\n        }\n    }\n}\n')])])]),t("p",[e._v("我们将得到以下回应:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n    ...\n    "aggregations" : {\n        "histogram_titles" : {\n            "doc_count_error_upper_bound": 0,\n            "sum_other_doc_count": 0,\n            "buckets" : [\n                {\n                    "key" : "histogram_2",\n                    "doc_count" : 62\n                },\n                {\n                    "key" : "histogram_1",\n                    "doc_count" : 45\n                }\n            ]\n        }\n    }\n}\n')])])]),t("h2",{attrs:{id:"field-names"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#field-names"}},[e._v("#")]),e._v(" _field_names")]),e._v(" "),t("p",[e._v("_field_names 字段索引文档中所有包含非空值的字段名称。_field_names字段用于存在查询和缺失查询的情况下，查找指定字段拥有非空值的文档是否存在。")]),e._v(" "),t("p",[e._v("现在，_field_names 字段只对禁用 doc_value 和规范的字段的名称进行索引。对于启用 doc_value 或 norm 的字段，现有的查询仍然可用，但不会使用_field_names 字段。")]),e._v(" "),t("h3",{attrs:{id:"禁用-field-names"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#禁用-field-names"}},[e._v("#")]),e._v(" 禁用"),t("code",[e._v("_field_names")])]),e._v(" "),t("p",[e._v("不推荐禁用_field_names，将在以后的主要版本中删除。")]),e._v(" "),t("p",[e._v("禁用_field_names 通常是不必要的，因为它不再像以前那样带有索引开销。如果有很多字段禁用了 doc 值和规范，你不需要使用这些字段执行 exists 查询，你可以通过在映射中添加以下命令来禁用 field 名:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('PUT tweets\n{\n  "mappings": {\n    "_field_names": {\n      "enabled": false\n    }\n  }\n}\n')])])]),t("h2",{attrs:{id:"ignored"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ignored"}},[e._v("#")]),e._v(" _ignored")]),e._v(" "),t("p",[e._v("在6.4.0中添加。")]),e._v(" "),t("p",[e._v("忽略字段索引并存储文档中每个字段的名称，这些字段由于格式错误而被忽略，并且忽略打开了格式错误。")]),e._v(" "),t("p",[e._v("该字段可以用术语、术语和已存在的查询进行搜索，并作为搜索结果的一部分返回。")]),e._v(" "),t("p",[e._v("例如，下面的查询匹配所有具有一个或多个被忽略字段的文档:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('GET _search\n{\n  "query": {\n    "exists": {\n      "field": "_ignored"\n    }\n  }\n}\n')])])]),t("p",[e._v("类似地，下面的查询将查找其@timestamp 字段在索引时被忽略的所有文档:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('GET _search\n{\n  "query": {\n    "term": {\n      "_ignored": "@timestamp"\n    }\n  }\n}\n')])])]),t("h2",{attrs:{id:"id"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#id"}},[e._v("#")]),e._v(" _id")]),e._v(" "),t("p",[e._v("每个文档都有一个_id 来唯一地标识它，该 id 被索引，以便可以使用 GET API 或 ids 查询查找文档。可以在索引时分配_id，也可以通过 Elasticsearch 生成惟一的_id。此字段在映射中是不可配置的。")]),e._v(" "),t("p",[e._v("在诸如 term、 terms、 match 和 query_string 等查询中可以访问_id 字段的值。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('# Example documents\nPUT my-index-000001/_doc/1\n{\n  "text": "Document with ID 1"\n}\n\nPUT my-index-000001/_doc/2?refresh=true\n{\n  "text": "Document with ID 2"\n}\n\nGET my-index-000001/_search\n{\n  "query": {\n    "terms": {\n      "_id": [ "1", "2" ] \n    }\n  }\n}\n')])])]),t("ul",[t("li",[e._v("在_id 字段上查询(也可以参见 id 查询)")])]),e._v(" "),t("p",[e._v("_id 字段被限制在聚合、排序和脚本中使用。如果需要对_id 字段进行排序或聚合，建议将_id 字段的内容复制到另一个启用 doc_值的字段中。")]),e._v(" "),t("p",[e._v("_id 的大小限制为512个字节，较大的值将被拒绝。")]),e._v(" "),t("h2",{attrs:{id:"index"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[e._v("#")]),e._v(" _index")]),e._v(" "),t("p",[e._v("在跨多个索引执行查询时，有时候需要添加查询子句，这些子句与仅具有某些索引的文档关联。_index 字段允许匹配索引到的文档的索引。在某些查询和聚合中，以及在排序或编写脚本时，可以访问它的值:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('PUT index_1/_doc/1\n{\n  "text": "Document in index 1"\n}\n\nPUT index_2/_doc/2?refresh=true\n{\n  "text": "Document in index 2"\n}\n\nGET index_1,index_2/_search\n{\n  "query": {\n    "terms": {\n      "_index": ["index_1", "index_2"] \n    }\n  },\n  "aggs": {\n    "indices": {\n      "terms": {\n        "field": "_index", \n        "size": 10\n      }\n    }\n  },\n  "sort": [\n    {\n      "_index": { \n        "order": "asc"\n      }\n    }\n  ],\n  "script_fields": {\n    "index_name": {\n      "script": {\n        "lang": "painless",\n        "source": "doc[\'_index\']" \n      }\n    }\n  }\n}\n')])])]),t("ul",[t("li",[e._v("查询_index 字段")]),e._v(" "),t("li",[e._v("在_index 字段上聚合")]),e._v(" "),t("li",[e._v("在_index 字段上排序")]),e._v(" "),t("li",[e._v("访问脚本中的_index 字段")])]),e._v(" "),t("p",[e._v("_index 字段实际上是公开的ー它不作为实字段添加到 Lucene 索引中。这意味着您可以在术语或术语查询中使用_index 字段(或任何重写为术语查询的查询，如 match、 query_string 或 simple_query_string 查询) ，以及前缀和通配符查询。但是，它不支持 regexp 和模糊查询。")]),e._v(" "),t("p",[e._v("除了具体的索引名之外，对_index 字段的查询还接受索引别名。")]),e._v(" "),t("p",[e._v("在指定远程索引名称(如 cluster_1: index_3)时，查询必须包含分隔符: 。例如，cluster_* : index_3上的通配符查询将匹配远程索引中的文档。但是，在 cluster * index_1上的查询只能与本地索引匹配，因为不存在分隔符。此行为与远程索引名称的通常解析规则一致。")]),e._v(" "),t("h2",{attrs:{id:"meta"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#meta"}},[e._v("#")]),e._v(" _meta")]),e._v(" "),t("p",[e._v("每个映射类型都可以拥有自定义的元数据。这些元数据对Elasticsearch来说毫无用处，但是可以用来存储应用程序的特定元数据，例如文档所属的类:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('PUT my-index-000001\n{\n  "mappings": {\n    "_meta": { \n      "class": "MyApp::User",\n      "version": {\n        "min": "1.0",\n        "max": "1.3"\n      }\n    }\n  }\n}\n')])])]),t("ul",[t("li",[e._v("这个_meta 信息可以通过 GET 映射 API 检索。")])]),e._v(" "),t("p",[e._v("可以使用 PUT 映射 API 在现有类型上更新 meta 字段:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('PUT my-index-000001/_mapping\n{\n  "_meta": {\n    "class": "MyApp2::User3",\n    "version": {\n      "min": "1.3",\n      "max": "1.5"\n    }\n  }\n}\n')])])]),t("h2",{attrs:{id:"routing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#routing"}},[e._v("#")]),e._v(" _routing")]),e._v(" "),t("p",[e._v("使用以下公式将文档路由到索引中的特定分片:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("shard_num = hash(_routing) % num_primary_shards\n")])])]),t("p",[e._v("用于_routing 的默认值是文档的_id。")]),e._v(" "),t("p",[e._v("自定义路由模式可以通过为每个文档指定一个自定义路由值来实现。例如:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('PUT my-index-000001/_doc/1?routing=user1&refresh=true \n{\n  "title": "This is a document"\n}\n\nGET my-index-000001/_doc/1?routing=user1 \n')])])]),t("ul",[t("li",[e._v("此文档使用 user1作为其路由值，而不是其 ID。")]),e._v(" "),t("li",[e._v("在获取、删除或更新文档时，需要提供相同的路由值。")])]),e._v(" "),t("p",[e._v("可以在查询中访问_routing 字段的值:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('GET my-index-000001/_search\n{\n  "query": {\n    "terms": {\n      "_routing": [ "user1" ] \n    }\n  }\n}\n')])])]),t("ul",[t("li",[e._v("在_routing 字段上查询(还可以参见 ids 查询)")])]),e._v(" "),t("p",[e._v("数据流不支持自定义路由。相反，应针对该流的适当后台索引。")]),e._v(" "),t("h3",{attrs:{id:"使用自定义路由进行搜索"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用自定义路由进行搜索"}},[e._v("#")]),e._v(" 使用自定义路由进行搜索")]),e._v(" "),t("p",[e._v("自定义路由可以减少搜索的影响。不必将搜索请求分散到索引中的所有分片，只需将请求发送到与特定路由值(或值)匹配的分片即可:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('GET my-index-000001/_search?routing=user1,user2 \n{\n  "query": {\n    "match": {\n      "title": "document"\n    }\n  }\n}\n')])])]),t("ul",[t("li",[e._v("这个搜索请求只会在与 user1和 user2路由值关联的碎片上执行。")])]),e._v(" "),t("h3",{attrs:{id:"确定需要的路由值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#确定需要的路由值"}},[e._v("#")]),e._v(" 确定需要的路由值")]),e._v(" "),t("p",[e._v("在使用自定义路由时，在索引、获取、删除或更新文档时提供路由值非常重要。")]),e._v(" "),t("p",[e._v("忘记路由值可能导致一个文档被索引到多个分片上。为了安全起见，可以将_routing 字段配置为为所有 CRUD 操作都需要自定义路由值:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('PUT my-index-000002\n{\n  "mappings": {\n    "_routing": {\n      "required": true \n    }\n  }\n}\n\nPUT my-index-000002/_doc/1 \n{\n  "text": "No routing value provided"\n}\n')])])]),t("ul",[t("li",[e._v("所有文件都需要路由。")]),e._v(" "),t("li",[e._v("这个索引请求引发一个 routing_missing_exception")])]),e._v(" "),t("h3",{attrs:{id:"具有自定义路由的唯一ids"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#具有自定义路由的唯一ids"}},[e._v("#")]),e._v(" 具有自定义路由的唯一IDs")]),e._v(" "),t("p",[e._v("当索引文档指定自定义_路由时，不能保证在索引中的所有分片中_id 的唯一性。实际上，如果使用不同的_routing 值进行索引，具有相同_id 的文档可能最终会出现在不同的分片上。")]),e._v(" "),t("p",[e._v("由用户来确保 id 在索引中是唯一的。")]),e._v(" "),t("h3",{attrs:{id:"路由到索引分区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#路由到索引分区"}},[e._v("#")]),e._v(" 路由到索引分区")]),e._v(" "),t("p",[e._v("可以配置一个索引，这样自定义路由值将到达分片的一个子集，而不是单个分片。这有助于降低集群不平衡的风险，同时减少搜索的影响。")]),e._v(" "),t("p",[e._v("这是通过在创建索引时提供索引级别设置 index.routing_partition_size 来实现的。随着分区大小的增加，数据分布越均匀，每个请求搜索的分片就越多。")]),e._v(" "),t("p",[e._v("当存在此设置时，计算碎片的公式为:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("shard_num = (hash(_routing) + hash(_id) % routing_partition_size) % num_primary_shards\n")])])]),t("p",[e._v("也就是说，_routing 字段用于计算索引中的一组碎片，然后使用_id 挑选该索引中的一个碎片。")]),e._v(" "),t("p",[e._v("要启用这个特性，index.routing_partition_size 的值应该大于1，小于 index.number of_shards。")]),e._v(" "),t("p",[e._v("一旦启用，分区索引将有以下限制:")]),e._v(" "),t("ul",[t("li",[e._v("带有 关系不能在其中建立")]),e._v(" "),t("li",[e._v("索引中的所有映射都必须具有 标记为必需的字段")])]),e._v(" "),t("h2",{attrs:{id:"source"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#source"}},[e._v("#")]),e._v(" _source")]),e._v(" "),t("p",[e._v("_source 字段包含在索引时传递的原始 JSON 文档主体。_source 字段本身没有索引(因此不能搜索) ，但是它被存储起来，以便在执行获取请求(如 get 或 search)时返回。")]),e._v(" "),t("h3",{attrs:{id:"禁用-字段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#禁用-字段"}},[e._v("#")]),e._v(" 禁用 字段")]),e._v(" "),t("p",[e._v("尽管使用源字段非常方便，但是在索引中确实会引起存储开销。由于这个原因，它可以被禁用如下:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('PUT my-index-000001\n{\n  "mappings": {\n    "_source": {\n      "enabled": false\n    }\n  }\n}\n')])])]),t("h3",{attrs:{id:"在禁用-source-字段之前请三思"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在禁用-source-字段之前请三思"}},[e._v("#")]),e._v(" 在禁用_source 字段之前请三思")]),e._v(" "),t("p",[e._v("用户经常在不考虑后果的情况下禁用_source 字段，然后后悔莫及。如果_source 字段不可用，则不支持一些特性:")]),e._v(" "),t("ul",[t("li",[e._v("这个"),t("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.x/docs-update.html",title:"Update API",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("update")]),t("OutboundLink")],1),e._v(", ，及 美国石油学会")]),e._v(" "),t("li",[e._v("在飞行中"),t("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.x/highlighting.html",title:"Highlighting",target:"_blank",rel:"noopener noreferrer"}},[e._v(" 突出"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("li",[e._v("从一个 Elasticsearch 索引重新索引到另一个索引的能力，可以更改映射或分析，或者将索引升级到新的主版本")]),e._v(" "),t("li",[e._v("通过查看索引时使用的原始文档来调试查询或聚合的能力")]),e._v(" "),t("li",[e._v("在未来，自动修复索引损坏的能力")])]),e._v(" "),t("p",[e._v("如果需要考虑磁盘空间，请提高压缩级别，而不要禁用_源。")]),e._v(" "),t("h3",{attrs:{id:"包括-不包括来自-source"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#包括-不包括来自-source"}},[e._v("#")]),e._v(" 包括/不包括来自"),t("code",[e._v("_source")])]),e._v(" "),t("p",[e._v("纯专家特性是在文档被编入索引之后，但在_source 字段被存储之前，对_source 字段的内容进行删除的能力。")]),e._v(" "),t("p",[e._v("从_source 中删除字段与禁用_source 有类似的缺点，尤其是不能将文档从一个 Elasticsearch 索引重新索引到另一个。考虑使用源过滤代替。")]),e._v(" "),t("p",[e._v("Includes/excludes 参数(也接受通配符)可以使用如下:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('PUT logs\n{\n  "mappings": {\n    "_source": {\n      "includes": [\n        "*.count",\n        "meta.*"\n      ],\n      "excludes": [\n        "meta.description",\n        "meta.other.*"\n      ]\n    }\n  }\n}\n\nPUT logs/_doc/1\n{\n  "requests": {\n    "count": 10,\n    "foo": "bar" \n  },\n  "meta": {\n    "name": "Some metric",\n    "description": "Some metric description", \n    "other": {\n      "foo": "one", \n      "baz": "two" \n    }\n  }\n}\n\nGET logs/_search\n{\n  "query": {\n    "match": {\n      "meta.other.foo": "one" \n    }\n  }\n}\n')])])]),t("ul",[t("li",[e._v("这些字段将从 _source 字段中删除。")]),e._v(" "),t("li",[e._v("我们仍然可以在这个字段上搜索，即使它不在存储的_source中。")])])])}),[],!1,null,null,null);n.default=_.exports}}]);