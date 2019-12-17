/** @module log-watcher-webpack-plugin */

import chalk from "chalk"
import zahl from "zahl"

/**
 * @class
 */
export default class {

  /**
   * @constructor
   * @param {Object} options
   */
  constructor(options) {
    this.options = {...options}
  }

  /**
   * @param {import("webpack").Compiler} compiler
   */
  apply(compiler) {
    compiler.hooks.watchRun.tap("watch-run", () => {
      const changedTimes = compiler.watchFileSystem.watcher.mtimes
      const changedFiles = Object.keys(changedTimes).map(time => time.file)
      if (changedFiles.length) {
        console.log(title("File changes:"), files(changedFiles))
      }
    })
  }

}