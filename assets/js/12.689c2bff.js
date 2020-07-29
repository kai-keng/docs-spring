(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{354:function(t,a,r){t.exports=r.p+"assets/img/index-1.e6f1d3a8.jpg"},392:function(t,a,r){"use strict";r.r(a);var e=r(42),_=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#索引"}},[t._v("#")]),t._v(" 索引")]),t._v(" "),e("h2",{attrs:{id:"什么是索引？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是索引？"}},[t._v("#")]),t._v(" 什么是索引？")]),t._v(" "),e("p",[t._v("索引是一种特殊的文件(InnoDB数据表上的索引是表空间的一个组成部分)，它们包含着对数据表里所有记录的引用指针。")]),t._v(" "),e("p",[t._v("索引是一种数据结构。数据库索引，是数据库管理系统中一个排序的数据结构，以协助快速查询、更新数据库表中数据。索引的实现通常使用B树及其变种B+树。")]),t._v(" "),e("p",[t._v("更通俗的说，索引就相当于目录。为了方便查找书中的内容，通过对内容建立索引形成目录。索引是一个文件，它是要占据物理空间的")]),t._v(" "),e("h2",{attrs:{id:"索引有哪些优缺点？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#索引有哪些优缺点？"}},[t._v("#")]),t._v(" 索引有哪些优缺点？")]),t._v(" "),e("p",[t._v("索引的优点")]),t._v(" "),e("ul",[e("li",[t._v("可以大大加快数据的检索速度，这也是创建索引的最主要的原因。")]),t._v(" "),e("li",[t._v("通过使用索引，可以在查询的过程中，使用优化隐藏器，提高系统的性能。")])]),t._v(" "),e("p",[t._v("索引的缺点")]),t._v(" "),e("ul",[e("li",[t._v("时间方面：创建索引和维护索引要耗费时间，具体地，当对表中的数据进行增加、删除和修改的时候，索引也要动态的维护，会降低增/改/删的执行效率；")]),t._v(" "),e("li",[t._v("空间方面：索引需要占物理空间。")])]),t._v(" "),e("h2",{attrs:{id:"索引使用场景（重点）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#索引使用场景（重点）"}},[t._v("#")]),t._v(" 索引使用场景（重点）")]),t._v(" "),e("h3",{attrs:{id:"where"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#where"}},[t._v("#")]),t._v(" where")]),t._v(" "),e("p",[e("img",{attrs:{src:r(354),alt:"主键索引"}})]),t._v(" "),e("p",[t._v("上图中，根据"),e("code",[t._v("id")]),t._v("查询记录，因为"),e("code",[t._v("id")]),t._v("字段仅建立了主键索引，因此此SQL执行可选的索引只有主键索引，如果有多个，最终会选一个较优的作为检索的依据。")]),t._v(" "),e("h3",{attrs:{id:"order-by"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#order-by"}},[t._v("#")]),t._v(" order by")]),t._v(" "),e("p",[t._v("当我们使用"),e("code",[t._v("order by")]),t._v("将查询结果按照某个字段排序时，如果该字段没有建立索引，那么执行计划会将查询出的所有数据使用外部排序（将数据从硬盘分批读取到内存使用内部排序，最后合并排序结果），这个操作是很影响性能的，因为需要将查询涉及到的所有数据从磁盘中读到内存（如果单条数据过大或者数据量过多都会降低效率），更无论读到内存之后的排序了。")]),t._v(" "),e("p",[t._v("但是如果我们对该字段建立索引"),e("code",[t._v("alter table 表名 add index(字段名)")]),t._v("，那么由于索引本身是有序的，因此直接按照索引的顺序和映射关系逐条取出数据即可。而且如果分页的，那么只用取出索引表某个范围内的索引对应的数据，而不用像上述那取出所有数据进行排序再返回某个范围内的数据。（从磁盘取数据是最影响性能的）")]),t._v(" "),e("h3",{attrs:{id:"join"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#join"}},[t._v("#")]),t._v(" join")]),t._v(" "),e("p",[t._v("对"),e("code",[t._v("join")]),t._v("语句匹配关系"),e("code",[t._v("on")]),t._v("涉及的字段建立索引能够提高效率")]),t._v(" "),e("h3",{attrs:{id:"索引覆盖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#索引覆盖"}},[t._v("#")]),t._v(" 索引覆盖")]),t._v(" "),e("p",[t._v("如果要查询的字段都建立过索引，那么引擎会直接在索引表中查询而不会访问原始数据（否则只要有一个字段没有建立索引就会做全表扫描），这叫索引覆盖。因此我们需要尽可能的在select后只写必要的查询字段，以增加索引覆盖的几率。")]),t._v(" "),e("p",[t._v("这里值得注意的是不要想着为每个字段建立索引，因为优先使用索引的优势就在于其体积小。")]),t._v(" "),e("h2",{attrs:{id:"文章来源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文章来源"}},[t._v("#")]),t._v(" 文章来源")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://blog.csdn.net/ThinkWon/article/details/104778621",target:"_blank",rel:"noopener noreferrer"}},[t._v("MySQL数据库面试题（2020最新版）"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=_.exports}}]);