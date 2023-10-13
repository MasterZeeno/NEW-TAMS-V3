import { promises as fsPromises } from 'fs'
import { fileURLToPath, URL } from 'node:url'
import fs from 'fs-extra'
import ggf from 'get-google-fonts'
import path from 'path'

const pathDir = './src/assets/fonts'
const currentDir = path.join(path.dirname(new URL(import.meta.url).pathname), pathDir)

const font_url = {
    Inter: [ 200, 400, 500, 600, 700, 800 ],
    Roboto: [ 400, 500, 700 ]
  }

const options = {
	outputDir:  pathDir
}

const desiredMode = {
  mode: 0o2775
}

function noDupes(arr) {
  return [...new Set(arr)]
}

async function downloadGoogleFonts(fontObj) {
  ggf.download([
    font_url,
    options
  ]).then(() => {
    console.log('Done!')
  }).catch((e) => {
    console.log('Whoops!', e)
  })
}


async function prepareDirectory(directory) {
  try {
    await fs.ensureDir(directory, desiredMode)
  } catch (err) {
  }
  downloadGoogleFonts(fontDefs)
}
prepareDirectory(currentDir)
//console.log(fontDefs)