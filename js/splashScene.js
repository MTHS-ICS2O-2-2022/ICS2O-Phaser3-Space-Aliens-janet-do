/* global Phaser */
// Copyright (c) 2020 Janet Do All rights reserved
//
// Created by: Janet Do
// Created on: Sep 2020
// This is the splash scene

/**
 * * This class is the splash scene
 */
class SplashScene extends Phaser.Scene {
  /**
   * This is the constructor
   */
  constructor() {
    super({ key: "splashScene" })
    
    this.splashSceneBackgroundImage = null
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
    console.log("Splash Scene")
    this.load.image("splashSceneBackground", "./assets/splashSceneImage.png")
  }
  /**
   * Can be defined on your own Scenes
   * Use it to create your game objects
   * @param {object} data - any data passed via  ScenePlugin.add() or ScenePlugin.start()
   */
  create(data) {
    this.splashSceneBackgroundImage = this.add.sprite(
      0,
      0,
      "splashSceneBackground"
    )
    this.splashSceneBackgroundImage.x = 1920 / 2
    this.splashSceneBackgroundImage.y = 1080 / 2
  }

  /**
   * * Should be ovrridden by your own Scenes
   * This method is called once pr step game while the scene is running
   * @param {number} time - The current time
   * @param {number} delta - the delta time in ms since the last frame
   */
  update(time, delta) {
    if (time > 3000) {
      this.scene.switch("titleScene")
    }
  }
}

export default SplashScene
