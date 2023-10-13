import fs from 'fs-extra'
import GetGoogleFonts from 'get-google-fonts'
import path from 'path'

const pathDir = './src/assets/fonts'
const currentDir = path.join(path.dirname(new URL(import.meta.url).pathname), pathDir)

const font_url = GetGoogleFonts.constructUrl(
  {
    Inter: [200, 400, 500, 600, 700, 800],
    Roboto: [400, 500, 700]
  },
  ['cyrillic']
)

// const options = new GetGoogleFonts({
//   outputDir: pathDir
// })

const desiredMode = {
  mode: 0o2775
}

async function downloadGoogleFonts() {
  new GetGoogleFonts()
    .download(font_url, { outputDir: pathDir })
    .then(() => {
      console.log('Done!')
    })
    .catch((e) => {
      console.log('Whoops!', e)
    })
}

async function prepareDirectory(directory) {
  try {
    await fs.ensureDir(directory, desiredMode)
  } catch (err) {
    downloadGoogleFonts()
  }
}
prepareDirectory(currentDir)
