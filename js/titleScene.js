/* global Phaser */
// Copyright (c) 2020 Janet Do All rights reserved
//
// Created by: Janet Do
// Created on: Sep 2020
// This is the title scene

/**
 * * This class is the title scene
 */
class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: "titleScene" })
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
    console.log("Title Scene")
  }
  /**
   * Can be defined on your own Scenes
   * Use it to create your game objects
   * @param {object} data - any data passed via  ScenePlugin.add() or ScenePlugin.start()
   */
  create(data) {
    //pass
  }

  /**
   * * Should be ovrridden by your own Scenes
   * This method is called once pr step game while the scene is running
   * @param {number} time - The current time
   * @param {number} delta - the delta time in ms since the last frame
   */
  update(time, delta) {
    //pass
  }
}

export default TitleScene
