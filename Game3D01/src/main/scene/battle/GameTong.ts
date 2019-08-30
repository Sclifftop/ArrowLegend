import Game from "../../../game/Game";

export default class GameTong{
    static TAG:string = "GameTong";
    public box:Laya.Sprite3D;

    static arr:GameTong[] = [];
    constructor() {
        this.box = Laya.Sprite3D.instantiate(Laya.loader.getRes("h5/tong/wall.lh"));
        //桶
        this.box.transform.scale = Game.cameraCN.boxscale0;
        this.box.transform.localRotationEulerY = 180;
    }

    setPos(v3:Laya.Vector3):void
    {
        this.box.transform.position = v3;
        Game.layer3d.addChild(this.box);
    }

    static recover():void
    {
        while(GameTong.arr.length > 0)
        {
            let rube:GameTong =  GameTong.arr.shift();
            rube.box.removeSelf();
            Laya.Pool.recover(GameTong.TAG,rube);
        }
        GameTong.arr.length = 0;
    }


    static getOne(v3:Laya.Vector3):GameTong
    {
        let rube:GameTong = Laya.Pool.getItemByClass(GameTong.TAG, GameTong);
        rube.setPos(v3);
        GameTong.arr.push(rube);
        return rube;
    }
}