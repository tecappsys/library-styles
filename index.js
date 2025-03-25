// Exportar archivos SCSS para ser usados en proyectos
module.exports = {
    styles: require.resolve("./scss/styles.scss"),
    themes: require.resolve("./scss/_themes.scss"),
    variables: require.resolve("./scss/_variables.scss"),
    fonts: require.resolve("./scss/fonts.scss"),
    mixins: require.resolve("./scss/mixins.scss"),
    icons: require.resolve("./svg/icons.svg"),
};