import fpspos from './plugins/fpspos.js';


export const loadPlugins = (ChessGameInstance) => {
    fpspos(ChessGameInstance);
}