module.exports = {
  title: 'Java',
  description: 'Just record my learning process',
  base: '/java-learning/',
  themeConfig: {
    sidebar: [
      {
        title: 'Spring Boot',
        collapsable: true,
        path: '/spring-boot/',
        children: [
          './spring-boot/exception',
          './spring-boot/configuration',
          './spring-boot/mybatis-druid'
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
        title: '设计模式',
        collapsable: true,
        path: '/design-pattern/',
        children: [
          './design-pattern/singleton',
          './design-pattern/templateMethod'
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