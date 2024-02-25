// section 15 
class Shape{
    constructor(name){
        this.name=name;
    }
    logName(){
        console.log('Shape Name :'+this.name)
    }
}
class Rectangle extends Shape{
    constructor(name,width,height){
        super(name);
        this.height=height;
        this.width=width;
    }
}
class Circle extends Shape{
    constructor(name,radius){
        super(name);
        this.radius=radius;

    }
}
const rect =new Rectangle ('rec1','10','20');
const cir=new Circle('Cir1','20');
console.log(rect)
rect.logName();
console.log(cir)
cir.logName();