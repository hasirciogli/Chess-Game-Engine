import { ChessGame } from "./chessLibs/chess_game.js";



const canvas = document.getElementById("base");
const ctx = canvas.getContext("2d");





var taslar =
    [
        {
            id: 0,
            name: "Kale",
            position: { x: 0, y: 0 },
            isAlive: true,
            team: 0,
        },
        {
            id: 1,
            name: "At",
            position: { x: 1, y: 0 },
            isAlive: true,
            team: 0,
        },
        {
            id: 2,
            name: "Fil",
            position: { x: 2, y: 0 },
            isAlive: true,
            team: 0,
        },
        {
            id: 3,
            name: "Vezir",
            position: { x: 3, y: 0 },
            isAlive: true,
            team: 0,
        },
        {
            id: 4,
            name: "Şah",
            position: { x: 4, y: 0 },
            isAlive: true,
            team: 0,
        },
        {
            id: 5,
            name: "Fil",
            position: { x: 5, y: 0 },
            isAlive: true,
            team: 0,
        },
        {
            id: 6,
            name: "At",
            position: { x: 6, y: 0 },
            isAlive: true,
            team: 0,
        },
        {
            id: 7,
            name: "Kale",
            position: { x: 7, y: 0 },
            isAlive: true,
            team: 0,
        },








        {
            id: 8,
            name: "Piyon",
            position: { x: 0, y: 1 },
            isAlive: true,
            team: 0,
        },
        {
            id: 9,
            name: "Piyon",
            position: { x: 1, y: 1 },
            isAlive: true,
            team: 0,
        },
        {
            id: 10,
            name: "Piyon",
            position: { x: 2, y: 1 },
            isAlive: true,
            team: 0,
        },
        {
            id: 11,
            name: "Piyon",
            position: { x: 3, y: 1 },
            isAlive: true,
            team: 0,
        },
        {
            id: 12,
            name: "Piyon",
            position: { x: 4, y: 1 },
            isAlive: true,
            team: 0,
        },
        {
            id: 13,
            name: "Piyon",
            position: { x: 5, y: 1 },
            isAlive: true,
            team: 0,
        },
        {
            id: 14,
            name: "Piyon",
            position: { x: 6, y: 1 },
            isAlive: true,
            team: 0,
        },
        {
            id: 15,
            name: "Piyon",
            position: { x: 7, y: 1 },
            isAlive: true,
            team: 0,
        },

























        {
            id: 16,
            name: "Kale",
            position: { x: 0, y: 7 },
            isAlive: true,
            team: 1,
        },
        {
            id: 17,
            name: "At",
            position: { x: 1, y: 7 },
            isAlive: true,
            team: 1,
        },
        {
            id: 18,
            name: "Fil",
            position: { x: 2, y: 7 },
            isAlive: true,
            team: 1,
        },
        {
            id: 19,
            name: "Vezir",
            position: { x: 3, y: 7 },
            isAlive: true,
            team: 1,
        },
        {
            id: 20,
            name: "Şah",
            position: { x: 4, y: 7 },
            isAlive: true,
            team: 1,
        },
        {
            id: 22,
            name: "Fil",
            position: { x: 5, y: 7 },
            isAlive: true,
            team: 1,
        },
        {
            id: 23,
            name: "At",
            position: { x: 6, y: 7 },
            isAlive: true,
            team: 1,
        },
        {
            id: 24,
            name: "Kale",
            position: { x: 7, y: 7 },
            isAlive: true,
            team: 1,
        },








        {
            id: 25,
            name: "Piyon",
            position: { x: 0, y: 6 },
            isAlive: true,
            team: 1,
        },
        {
            id: 26,
            name: "Piyon",
            position: { x: 1, y: 6 },
            isAlive: true,
            team: 1,
        },
        {
            id: 27,
            name: "Piyon",
            position: { x: 2, y: 6 },
            isAlive: true,
            team: 1,
        },
        {
            id: 28,
            name: "Piyon",
            position: { x: 3, y: 6 },
            isAlive: true,
            team: 1,
        },
        {
            id: 29,
            name: "Piyon",
            position: { x: 4, y: 6 },
            isAlive: true,
            team: 1,
        },
        {
            id: 30,
            name: "Piyon",
            position: { x: 5, y: 6 },
            isAlive: true,
            team: 1,
        },
        {
            id: 31,
            name: "Piyon",
            position: { x: 6, y: 6 },
            isAlive: true,
            team: 1,
        },
        {
            id: 32,
            name: "Piyon",
            position: { x: 7, y: 6 },
            isAlive: true,
            team: 1,
        },
];


const cg = new ChessGame(taslar, canvas, ctx);

cg.loadPlugin("fpspos");