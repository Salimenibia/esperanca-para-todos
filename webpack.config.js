const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {

    mode: "production",

    entry: {
        main: [
            "./js/script.js",
            "./css/style.css"
        ]
    },

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    },

    plugins: [

        new MiniCssExtractPlugin({
            filename: "style.css"
        }),

        new HtmlWebpackPlugin({
    template: "./html/index.html",
    templateParameters: {
        imagemWebp: "imagem/imagem.ong.webp",
        imagemJpg: "imagem/imagem.ong.jpg"
    }
}),

        new CopyPlugin({
    patterns: [
        { from: "imagem", to: "imagem" }
    ]
})

    ],

    optimization: {

        minimizer: [
            "...",
            new CssMinimizerPlugin()
        ]

    }

};