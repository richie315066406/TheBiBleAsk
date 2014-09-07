/**
 * Created by luzexi on 14-9-7.
 */


var g_screen_size = null;
var g_

var Tittlelayer = cc.Layer.extend({

    start_menubtn:null,

    init:function()
    {
        g_screen_size = cc.Director.getInstance().getWinSize();

        var bg_layer = cc.LayerColor.create(cc.c4b(50,200,100,255),g_screen_size.width,g_screen_size.height);
        this.addChild(bg_layer);

        var tittle_label = cc.LabelTTF.create("欢迎来到圣经我问你答。\n点击按钮后开始游戏","",30);
        tittle_label.setColor(cc.c3b(255,255,255));
        tittle_label.setPosition(g_screen_size.width/2 , g_screen_size.height/2);
        this.addChild(tittle_label);

        var start_label = cc.LabelTTF.create("开始","",25);
        start_label.setColor(cc.c3b(255,0,0));
        var start_btn = cc.MenuItemLabel.create(start_label,this.start_callback,this);
        start_btn.setColor(cc.c3b(200,100,150));
        this.start_menubtn = cc.Menu.create(start_btn);
        this.start_menubtn.setAnchorPoint(0,0);
        this.start_menubtn.setPosition(g_screen_size.width/2,g_screen_size.height/2 - 300);
        this.addChild(this.start_menubtn);
    },

    start_callback:function()
    {
        var scaleToA = cc.ScaleTo.create(0.1,0.9,0.9);
        var scaleToB = cc.ScaleTo.create(0.1, 1, 1);
        var actionTodo = cc.CallFunc.create(this.startgame);

        this.start_menubtn.runAction(cc.Sequence.create(scaleToA,scaleToB,actionTodo));
    },

    startgame:function()
    {
        cc.log("hiden tittle");
        var scene = cc.Scene.create();
        var layer = new GameLayer();
        layer.init();
        scene.addChild(layer);
        cc.Director.getInstance().replaceScene(scene);
    }

});