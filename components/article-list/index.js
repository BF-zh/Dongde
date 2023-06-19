// components/article-list/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    nickName:{
      type:String,
      value:""
    },
    avatar:{
      type:String,
      value:""
    },
    time:{
      type:String,
      value:''
    },
    info:{
      type:String,
      value:""
    },
    title:{
      type:String,
      value:""
    },
    content:{
      type:String,
      value:""
    },
    img:{
      type:String,
      value:""
    },
    tags:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  options:{
    addGlobalClass:true
  }
})
