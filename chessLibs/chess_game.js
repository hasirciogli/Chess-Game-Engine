import { chessRoles } from "./crules.js";
import { loadPlugins } from "./pluginmanager.js";
import { registerEvent, runEvents, runEvent } from "./chessgameevents.js";
// Set line width

// Wall
var max = 700;
export class ChessGame {
    constructor(tData, canvas, ctx) {
        this.tData = tData;
        this.canvas = canvas;
        this.ctx = ctx;
        this.ctx.lineWidth = 3;
        
        this.registerEvents();
        loadPlugins(this);

        (async () => {
            setInterval(() => {
                this.run();
            }, 1000/60);
        })();
    }

    getTas = async (x, y, callBack) => {
        var tb = false;
        await this.tData.forEach(element => {
            if (element.position.x == x && element.position.y == y) {
                callBack(true, element);
                tb = true;
            }
        });

        if (!tb)
            callBack(false, false);
    }

    run = () => {

        for (let i = 0; i < 8; i++) {

            var col = i % 2 == 0 ? false : true;

            for (let i2 = 0; i2 < 8; i2++) {
                col ? this.ctx.fillStyle = "rgb(170, 170, 170)" : this.ctx.fillStyle = "rgb(100, 100, 100)";

                this.ctx.fillRect((max / 8) * i2, (max / 8) * i, max / 8, max / 8);

                this.getTas(i2, i, (status, val) => {
                    if (status && val.isAlive) {
                        this.ctx.font = "20px serif";
                        this.ctx.fillStyle = val.team == 0 ? "black" : "red";
                        this.ctx.fillText(val.name, ((max / 8) * i2) + ((max / 8 / 2) - (this.ctx.measureText(val.name).width / 2)), (((max / 8) * i) + 7) + ((max / 8) / 2));
                    }
                });


                col = !col;
            }
        }

        runEvent("draw");
    }


    makeMove = async (id, x, y) => {
        var rVal = "";
        await this.tData.forEach(element => {
            if (element.id == id) {
                if (element.position.x == x && element.position.y == y) {
                    rVal = "????? are you damn ?????";
                }
                else {
                    this.getTas(x, y, (status, val) => {
                        if (!status) {
                            rVal = "work";
                            element.position.x = x;
                            element.position.y = y;
                        }
                        else {
                            if (val.team != element.team) {
                                rVal = "work";
                                if (val.isAlive) {
                                    val.isAlive = false;
                                    element.position.x = x;
                                    element.position.y = y;
                                }
                                else {
                                    element.position.x = x;
                                    element.position.y = y;
                                }
                            }
                            else {
                                rVal = "No allready defined other block 2222 ";
                            }
                        }
                    });
                }

            }
        });

        return rVal;
    };

    getAllData = () => {
        return this.tData;
    };



    registerEvents = () => {
        //registerEvent("draw", {test: 1, turkey: 558}, ({test, turkey}) => console.log("YES WORK!" + test + " | " + turkey));hasirciogli
    };

    registerEvent = (where, param, fun) => {
        registerEvent(where, param, (p) => fun(p));
    };
}