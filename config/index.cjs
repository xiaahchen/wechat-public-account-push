/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxc05f7ca923d8e110',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '139525c51b8b066d02ef20abdf38b94a',

  PROVINCE: '福建',
  CITY: '泉州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '行行宝宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oJ2Op6N2ZfhzTtBUcxOXL9wyKLGY',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'Saw5Y8PqQ3SLX52TFREvbGrzlq32kXVKS9CRWOXY5ho',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '06-21',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '行行宝宝', year: '2003', date: '05-22',
        },
        {
          type: '节日', name: '恋爱纪念日', year: '2022', date: '05-21',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '04-26',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-05-21' },
        { keyword: 'marry_day', date: '2022-04-26' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'Saw5Y8PqQ3SLX52TFREvbGrzlq32kXVKS9CRWOXY5ho',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oJ2Op6N2ZfhzTtBUcxOXL9wyKLGY',
    }
  ],

}

module.exports = USER_CONFIG

