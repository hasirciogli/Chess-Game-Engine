
class Plugin{
    constructor(cnvs, ctx){
        this.mmPos = {x: 0, y: 0};
        this.lastCalledTime = 0;
        this.fps = 0;

        this.cnvs = cnvs;
        this.ctx = ctx;
    }

    getMousePos = (cnvs, evt) => {
        var rect = this.cnvs.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    };
    
    onMoueUpdateEvent = (event) => {
        this.mmPos = this.getMousePos(this.canvas, event);
    };
    
    requestAnimFrame() {
    
      if(!this.lastCalledTime) {
        this.lastCalledTime = Date.now();
         fps = 0;
         return;
      }
      var delta = (Date.now() - this.lastCalledTime)/1000;
      this.lastCalledTime = Date.now();
      this.fps = 1 / delta;
    }
    
    render = (params) => {
        console.log("render");
        
        this.ctx.font = "19px serif";
        this.ctx.fillStyle = 1 ? "black" : "red";
    
        this.ctx.fillText("x: " + this.mmPos.x + " | y: " + this.mmPos.y, 100, 20);
        
    
    
    
        this.ctx.font = "19px serif";
        this.ctx.fillStyle = 1 ? "black" : "red";
    
        this.ctx.fillText("fps: " + parseInt(this.fps), 5, 20);
    
    
        this.requestAnimFrame();
    }
}


export default function( cg ) {
    const p = new Plugin(cg.canvas, cg.ctx);
    cg.canvas.addEventListener("mousemove", p.onMoueUpdateEvent);

    cg.registerEvent("draw", {}, (params) => p.render(params));
}