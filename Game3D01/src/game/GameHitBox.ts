export default class GameHitBox {

    private x_:number  = 0;
    private y_:number  = 0;
    private ww_:number = 2;
    private hh_:number = 2;
    private cx_:number = 1;
    private cy_:number = 1;
    private h2_:number = 1;
    private w2_:number = 1;

    private top_   :number  = 0;
    private left_  :number  = 0;
    private right_ :number  = 0;
    private bottom_:number  = 0;

    constructor(ww:number,hh:number){
        this.ww_ = ww;
        this.hh_ = hh;
        this.h2_ = this.hh_/2;
        this.w2_ = this.ww_/2;
        this.setXY(0,0);
    }

    public get ww():number{
        return this.ww_;
    }

    public get hh():number{
        return this.hh_;
    }

    public setXY(xx:number , yy:number):void{
        this.x_ = xx;
        this.y_ = yy;
        this.cx_ = this.x_ + this.w2_;
        this.cy_ = this.y_ + this.h2_;
        this.update();
    }

    public setCenter(xx:number , yy:number):void{
        this.cx_ = xx;
        this.cy_ = yy;
        this.x_ = this.cx_ - this.w2_;
        this.y_ = this.cy_ - this.h2_;
        this.update();
    }

    private update():void{
        this.top_ = this.y_;
        this.left_ = this.x_;
        this.bottom_ = this.y_ + this.hh_;
        this.right_ = this.x_ + this.ww_;
    }

    public get cx():number{
        return this.cx_;
    }
    public get cy():number{
        return this.cy_;
    }
    public get x():number{
        return this.x_;
    }
    public get y():number{
        return this.y_;
    }
    //top left right bottom
    public get top():number{
        return this.top_;
    }
    public get bottom():number{
        return this.bottom_;
    }
    public get left():number{
        return this.left_;
    }
    public get right():number{
        return this.right_;
    }

    public hit(b0:GameHitBox , b1:GameHitBox):boolean{
        return b0.x < b1.right &&
        b0.right > b1.x &&
        b0.y < b1.bottom &&
        b0.bottom > b1.y
    }
}
