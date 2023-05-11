/* global Phaser */
// Copyright (c) 2020 Janet Do All rights reserved
//
// Created by: Janet Do
// Created on: Sep 2020
// This is the Game scene

/**
 * * This class is the Game scene
 */
class GameScene extends Phaser.Scene {
  /**
   * This is the constructor
   */
  constructor() {
    super({ key: "gameScene" })

    this.background = null
    this.ship = null
    this.fireMissle = false
  }
  /**
   * Can be defined on your own Scenes
   * This method is called when the Scene is started by the SceneManager.
   * before preload() and create()
   * @param {object} data - any data passed via  ScenePlugin.add() or ScenePlugin.start()
   */
  init(data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  /**
   * Can be defined on your own Scenes
   * Use this to load your game assets
   */
  preload() {
    console.log("Game Scene")

    this.load.image("starBackground", "./assets/starBackground.png")
    this.load.image("ship", "./assets/spaceShip.png")
    this.load.image("missle", "./assets/missle.png")
  }
  /**
   * Can be defined on your own Scenes
   * Use it to create your game objects
   * @param {object} data - any data passed via  ScenePlugin.add() or ScenePlugin.start()
   */
  create(data) {
    this.background = this.add.sprite(0, 0, "starBackground").setScale(2.0)
    this.background.setOrigin(0, 0)

    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, "ship")

    //create a group for the missles
    this.missleGroup = this.physics.add.group()
  }

  /**
   * * Should be ovrridden by your own Scenes
   * This method is called once pr step game while the scene is running
   * @param {number} time - The current time
   * @param {number} delta - the delta time in ms since the last frame
   */
  update(time, delta) {
    const keyLeftObj = this.input.keyboard.addKey("LEFT")
    const keyRightObj = this.input.keyboard.addKey("RIGHT")
    const keySpaceObj = this.input.keyboard.addKey("SPACE")

    if (keyLeftObj.isDown === true) {
      this.ship.x -= 15
      if (this.ship.x < 0) {
        this.ship.x = 0
      }
    }
    if (keyRightObj.isDown === true) {
      this.ship.x += 15
      if (this.ship.x > 1920) {
        this.ship = 1920
      }
    }

    if (keySpaceObj.isDown === true) {
      if (this.fireMissle === false)
        // fire missle
        this.fireMissle = true
      const aNewMissle =
        this / physics.add.sprite(this.ship.x, this.ship.y, "missle")
      this.missleGroup.add(aNewMissle)
    }
    if (keySpaceObj.isUp === true) {
      this.fireMissle = false
    }
  }
}

export default GameScene
