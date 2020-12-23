(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{506:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"分布式锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式锁"}},[s._v("#")]),s._v(" 分布式锁")]),s._v(" "),a("p",[s._v("因为在生产环境中，服务都不是单机环境，单个服务都会部署多个然后使用负载均衡进行访问，避免因单节点宕机以后整个服务全部宕机的情况出现。这种在多台机器部署服务的情况下，你如果只是在单个服务中使用同步代码块，是无法确保对同一变量的修改是同步的，这样数据的准确性就会出现问题。比如我们商品扣减库存的操作，如果多个服务同时读取库存，并进行扣减操作，必然会出现扣减出错的情况，导致库存计算不准确。")]),s._v(" "),a("p",[s._v("分布式锁就是为了解决以上问题出现的，它可以让多个服务共用一把锁，来确保数据不会出错。")]),s._v(" "),a("h2",{attrs:{id:"分布式锁应具备条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式锁应具备条件"}},[s._v("#")]),s._v(" 分布式锁应具备条件")]),s._v(" "),a("ul",[a("li",[s._v("在分布式系统环境下，一个方法在同一时间只能被一个机器的一个线程执行")]),s._v(" "),a("li",[s._v("高可用的获取锁与释放锁")]),s._v(" "),a("li",[s._v("高性能的获取锁与释放锁")]),s._v(" "),a("li",[s._v("具备可重入特性（可理解为重新进入，由多于一个任务并发使用，而不必担心数据错误）")]),s._v(" "),a("li",[s._v("具备锁失效机制，防止死锁")]),s._v(" "),a("li",[s._v("具备非阻塞锁特性，即没有获取到锁将直接返回获取锁失败")])]),s._v(" "),a("h2",{attrs:{id:"分布式锁实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式锁实现"}},[s._v("#")]),s._v(" 分布式锁实现")]),s._v(" "),a("ul",[a("li",[s._v("Redis：和 Memcached 的方式类似，利用 Redis 的 setnx 命令。此命令同样是原子性操作，只有在 key 不存在的情况下，才能 set 成功。")]),s._v(" "),a("li",[s._v("Memcached：利用 Memcached 的 add 命令。此命令是原子性操作，只有在 key 不存在的情况下，才能 add 成功，也就意味着线程得到了锁。")]),s._v(" "),a("li",[s._v("Zookeeper：利用 Zookeeper 的顺序临时节点，来实现分布式锁和等待队列。Zookeeper 设计的初衷，就是为了实现分布式锁服务的。")]),s._v(" "),a("li",[s._v("Chubby：Google 公司实现的粗粒度分布式锁服务，底层利用了 Paxos 一致性算法。")])]),s._v(" "),a("h2",{attrs:{id:"redis-分布式锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-分布式锁"}},[s._v("#")]),s._v(" Redis 分布式锁")]),s._v(" "),a("h3",{attrs:{id:"redis-分布式锁面临的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-分布式锁面临的问题"}},[s._v("#")]),s._v(" Redis 分布式锁面临的问题")]),s._v(" "),a("ul",[a("li",[a("p",[a("strong",[s._v("死锁")])]),s._v(" "),a("p",[s._v("问题：解锁流程异常，未成功解锁，导致锁一致未被释放，发生死锁")]),s._v(" "),a("p",[s._v("解决方案：设置锁超时时间，并使用 "),a("code",[s._v("finally")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("B 锁释放了 A锁")])]),s._v(" "),a("p",[s._v("问题：当线程 A 执行时间过长，导致线程 A 加的 A 锁超时自动释放，线程 B 获取到了锁加锁执行，然后线程 A 先执行完毕，继续去执行解锁逻辑，这个时候会把 B 锁给释放了。")]),s._v(" "),a("p",[s._v("解决方案：每个线程加锁的时候都设置特定的 value 值，解锁的时候判断锁的 value 是否与自己加锁的 value 值一致，若一致则解锁，反之则不解锁。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("锁超时过期了，但是业务还在执行")])]),s._v(" "),a("p",[s._v("问题：当有时候业务执行时间过长的时候，可能锁超时了业务还在执行，这个时候没锁了其他线程可以获取到锁，可能导致业务执行结果不正确。")]),s._v(" "),a("p",[s._v("解决方案：加入看门狗机制，监听业务执行状况，当业务未执行完但是锁到期的话，给锁续期，增加锁的时间，比较好的办法就是使用 "),a("code",[s._v("redisson")]),s._v("。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("主从复制的过程中宕机")])]),s._v(" "),a("p",[s._v("问题：当使用 redis 集群的时候，我们一般会有主节点和从节点，主节点负责写，从节点负责读。当线程 A 加锁的时候，写入了主节点，主节点会将自身的数据同步到从节点，当复制的过程主节点宕机了的话，会从集群中选取新的节点作为主节点，这个时候线程 B 来加锁的话则可以加锁成功，因为 A 锁并未同步到新的节点。")]),s._v(" "),a("p",[s._v("解决方案：尚未有好的解决方案，需尽量保持集群稳定性，若实在要解决，考虑方向可以是当所有节点都同步成功了以后才判定加锁成功，未实际研究过，不确定可行性。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("锁阻塞导致数据库事务超时回滚（验证，不存在该问题）")])]),s._v(" "),a("p",[s._v("问题：网上有说当锁阻塞时间超过数据库事务超时时间的话，会抛出异常，导致业务执行失败回滚。实测不存在这个问题，数据库注解 "),a("code",[s._v("@Transactional(timeout = 5, rollbackFor = Exception.class)")]),s._v("，其中的超时时间指的是 MyBatis 中的 SQL 执行的时间，并不是业务代码执行时间，只要 SQL 执行时间不超时，锁阻塞不会导致超时异常的发生。")])])]),s._v(" "),a("h3",{attrs:{id:"代码实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码实现"}},[s._v("#")]),s._v(" 代码实现")]),s._v(" "),a("ol",[a("li",[s._v("定义锁接口")])]),s._v(" "),a("div",{staticClass:"language-JAVA extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RedisLock")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 加锁")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("lock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 解锁")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("unlock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("锁接口实现")])]),s._v(" "),a("div",{staticClass:"language-JAVA extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Service")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RedisLockImpl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RedisLock")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Autowired")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RedisTemplate")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" redisTemplate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("lock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 用加锁结果来判断是否需要继续循环获取锁")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("innerLock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 此处也可加入 sleep 方法，让未获取成功锁的时候释放资源")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("innerLock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用 lua 脚本，原子性的加锁")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Long")]),s._v(" success "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" redisTemplate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("execute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DefaultRedisScript")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Long")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 用 key 判断当前锁是否已经存在")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"if (redis.call('exists', KEYS[1]) == 0) then \"")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n                                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不存在则使用哈希保存数据，value 为 1，用于可重入锁计数")]),s._v("\n                            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"redis.call('hset', KEYS[1], ARGV[2], 1); \"")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n                            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置过期时间")]),s._v("\n                            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"redis.call('pexpire', KEYS[1], ARGV[1]); \"")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n                            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置成功返回0")]),s._v("\n                            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"return 0; "')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"end;"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 判断当前锁是否已经存在")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"if (redis.call('hexists', KEYS[1], ARGV[2]) == 1) then \"")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n                            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 若存在则让哈希 value 值加1")]),s._v("\n                            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"redis.call('hincrby', KEYS[1], ARGV[2], 1); \"")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n                            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 重新设置过期时间")]),s._v("\n                            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"redis.call('pexpire', KEYS[1], ARGV[1]); \"")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n                            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置成功返回0")]),s._v("\n                            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"return 0; "')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"end; "')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 若不满足以上条件，获取当前锁的过期时间")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"return redis.call('pttl', KEYS[1]);\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Long")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Collections")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("singletonList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"30000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Objects")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("success"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0L")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("unlock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用 lua 脚本原子性解锁")]),s._v("\n        redisTemplate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("execute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DefaultRedisScript")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Long")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 判断当前锁是否存在，若不存在则返回 null")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"if (redis.call('exists', KEYS[1]) == 0 or redis.call('hexists', KEYS[1], ARGV[2]) == 0) then \"")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"return nil;"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"end;"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将当前哈希value值减1，并返回计算后的结果")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"local counter = redis.call('hincrby', KEYS[1], ARGV[2], -1); \"")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 若结果大于0，则重新设置过期时间，返回0")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"if (counter > 0) then "')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"redis.call('pexpire', KEYS[1], ARGV[1]); \"")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"return 0; "')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 若结果不大于0，则删除锁")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"else "')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"redis.call('del', KEYS[1]); \"")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"return 1; "')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"end;"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"return nil;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Long")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Collections")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("singletonList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"30000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("锁使用")])]),s._v(" "),a("div",{staticClass:"language-JAVA extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 初始化线程池，固定10个")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExecutorService")]),s._v(" pool "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadPoolExecutor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0L")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TimeUnit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("MILLISECONDS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LinkedBlockingQueue")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Runnable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 循环自增至1000")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        pool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("execute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用线程 id 做为哈希 key")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" value "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("valueOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Thread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("currentThread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 加锁")]),s._v("\n                redisLock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("lock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("LOCK_KEY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n                COUNT"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n                "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Thread --- "')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" COUNT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("finally")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 解锁")]),s._v("\n                redisLock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("unlock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("LOCK_KEY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 结果能累加至 1000，若不加锁大概率无法累加至1000")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("上面的实现是基于 Redis 的可重入锁，只解决了问题1和2，未加入看门狗机制。Redisson 的看门狗机制即在加锁成功以后新建一个定时任务，定时任务每隔10秒会判断锁是否还存在，若锁存在则重置锁的时间为30秒。")]),s._v(" "),a("p",[s._v("推荐阅读"),a("a",{attrs:{href:"https://www.jianshu.com/p/2a90bba8922f",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考资料2"),a("OutboundLink")],1),s._v("，很好地解析了 Redisson 源码，看完后可以很好地了解 Redisson 是如何实现的。")])]),s._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://juejin.im/post/6844904134764658702#heading-5",target:"_blank",rel:"noopener noreferrer"}},[s._v("部门老大：redis 分布式锁再这么用，我就劝退你"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.jianshu.com/p/2a90bba8922f",target:"_blank",rel:"noopener noreferrer"}},[s._v("汪~汪~汪~redisson的WatchDog是如何看家护院的？"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);