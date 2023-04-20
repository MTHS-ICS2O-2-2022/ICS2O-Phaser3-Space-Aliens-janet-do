/* global Phaser */
// Copyright (c) 2020 Janet Do All rights reserved
//
// Created by: Janet Do
// Created on: Sep 2020

// scene import statements
import SplashScene from "./splashScene.js"

// create the new scenes
const splashScene = new SplashScene()

const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  //set background color
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
}
const game = new Phaser.Game(config)

//load scenes
// NOTE: remember any 'key' is global an cannot be reused
game.scene.add("splashScene", splashScene)

// start title
game.scene.start("splashScene")
