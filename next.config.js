const path = require("path")

module.exports = {
    compiler: {
        styledComponents: true,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });
        return config;
    },
}