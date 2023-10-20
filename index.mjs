import fs from "fs-extra"
import GetGoogleFonts from "get-google-fonts"
import path from "path"

const pathDir = "./src/assets/fonts"

const font_family = ['Montserrat', 'Lora', 'Satisfy']

const arrayRange = (start, stop, step) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );

const font_sizes = arrayRange(100, 900, 100)

const font_url_setup = font_family.map(e => {
  const fn = e.toString().replace(' ', '+')
  let temp = 'family=' + fn
  const wghts = [[]]
  for (let i = 0; i <= 1; i++) {
    font_sizes.forEach(f => {
      if ((fn == 'Lora' && f >= 400 && f <= 700) || fn != 'Lora') {
        if (fn != 'Satisfy') {
          wghts.push([i, f])
        }
      }
    })
  }
  temp = temp + (wghts.length > 1 ? ':ital,wght@' : '')
  return temp + wghts.join(';').substring(1)
}).join("&")

const font_url = `https://fonts.googleapis.com/css2?${font_url_setup}&subset=cyrillic`

const currentDir = path.join(
  path.dirname(new URL(import.meta.url).pathname),
  pathDir
)

async function downloadGoogleFonts() {
  console.log("Downloading fonts...");
  new GetGoogleFonts()
    .download(
      font_url, { outputDir: pathDir, overwriting: true })
    .then(() => {
      console.log("\n\nSuccess!\n\n"+
      "Downloaded fonts:\n" 
       + ' •' + font_family.join('\n •'));
    })
    .catch((e) => {
      console.log("Whoops!", e);
    });
}

async function prepareDirectory(directory) {
  fs.remove(directory, err =>{
    if (err) return console.error(err)
    console.log('Deleted outdated font folder.')
  })
  try {
    await fs.ensureDir(directory, { mode: 0o2775 });
  } catch (err) {
    console.log("Error:", err);
  }
  downloadGoogleFonts();
}
// console.log(font_url)
 prepareDirectory(currentDir);
