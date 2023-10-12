import { promises as fsPromises } from 'fs'
import GetGoogleFonts from 'get-google-fonts'
import path from 'path'

// Get the current module's directory name
const currentDir = new URL(import.meta.url).pathname
const fontsFolderPath = path
  .join(currentDir, 'fonts')
  .substring(1)
  .replaceAll('%20', ' ')
  .replaceAll('\\', '/') // Specify the path relative to the project's root
const substringToCheck = 'Inter'

const fontWeights = (() => {
  const array = []
  for (let i = 100; i <= 900; i++) {
    array.push(i)
  }
  return array
})()

let fontsToDownload = []

async function downloadGoogleFonts() {
  console.log('Downloading fonts...')
  try {
    await new GetGoogleFonts().download(
      'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&subset=cyrillic'
    )
    console.log('Done!')
  } catch (error) {
    console.error('Whoops!', error)
  }
}

async function checkFolder() {
  try {
    const files = await fsPromises.readdir(fontsFolderPath  )
    if (files.length > 0 && files.some((file) => file.includes(substringToCheck))) {
      files.forEach((e) => {
        if (e.includes('-')) {
          const trimmedName = e.split('-')[1]
          if (fontWeights.some(Number(trimmedName)) != -1) {
            fontsToDownload.push(Number(trimmedName))
          }
        }
      })
    } else {
      console.error('No files yet')
      await downloadGoogleFonts() // Wait for the fonts to be downloaded before continuing
    }

    if (fontsToDownload.length < 1) {
      console.log(
        'Folder exists, contains files, and at least one file contains the substring "Inter"'
      )
    } else {
      console.log('Folder exists, but no file contains the substring "Inter"')
      await downloadGoogleFonts() // Wait for the fonts to be downloaded before continuing
    }
  } catch (error) {
    console.error('Error accessing folder:', error)
    await downloadGoogleFonts() // Wait for the fonts to be downloaded before continuing
  }
}
// console.log(fontsFolderPath)
checkFolder()
