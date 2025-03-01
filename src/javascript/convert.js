const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const inputDir = "./src/images";
const outputDir = "./public/images";

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach((file) => {
    if (path.extname(file).toLowerCase() === ".jpeg") {
        const inputPath = path.join(inputDir, file);
        const outputPath = path.join(outputDir, file.replace(".jpeg", ".webp"));

        sharp(inputPath)
            .toFormat("webp")
            .toFile(outputPath)
            .then(() =>
                console.log(
                    `✅ Done: ${file} → ${path.basename(outputPath)}`
                )
            )
            .catch((err) => console.error(`❌ Error ${file}`, err));
    }
});
