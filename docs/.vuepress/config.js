module.exports = {
  title: 'Java',
  description: 'Just record my learning process',
  base: '/java-learning/',
  themeConfig: {
    nav: [
      { text: '主站', link: 'https://kai-keng.github.io/', target:'', rel:'' },
    ],
    sidebar: [
      {
        title: 'Spring Boot',
        collapsable: true,
        path: '/spring-boot/',
        children: [
          './spring-boot/0-idea-configuration',
          './spring-boot/1-exception',
          './spring-boot/2-configuration',
          './spring-boot/3-mybatis-druid',
          './spring-boot/4-spring-multi-datasource',
          './spring-boot/5-operation-log-aop',
          './spring-boot/6-redis-cache',
          './spring-boot/10-hibernate-validator',
          './spring-boot/11-mybatis-auto',
          './spring-boot/12-common-result',
          './spring-boot/13-knife4j',
        ]
      },
      {
        title: 'Spring Cloud',
        collapsable: true,
        path: '/spring-cloud/',
        children: [
          'waiting'
        ]
      },
      {
        title: 'JVM',
        collapsable: true,
        path: '/jvm/',
        children: [
          'waiting'
        ]
      },
      {
        title: '多线程',
        collapsable: true,
        path: '/multi-thread/',
        children: [
          './multi-thread/basis'
        ]
      },
      {
        title: '设计模式',
        collapsable: true,
        path: '/design-pattern/',
        children: [
          './design-pattern/singleton',
          './design-pattern/templateMethod',
          './design-pattern/state',
          './design-pattern/builder',
        ]
      },
      {
        title: '相关资料',
        collapsable: true,
        path: '/materials/',
      }
    ]
  }
}