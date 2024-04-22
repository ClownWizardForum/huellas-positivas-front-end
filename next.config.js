const path = require("path")

module.exports = {
    compiler: {
        styledComponents: true,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    webpack(config) {
        // SVG loader
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        })

        return config
    },
    //env: {
     //   API_URL: process.env.API_URL,
    // },
}
