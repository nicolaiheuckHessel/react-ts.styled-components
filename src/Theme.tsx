export type Theme = {
    primary: String,
    text: String
}

const darkTheme: Theme = {
    primary: "#000",
    text: "#fff"
}
const lightTheme: Theme = {
    primary: "#2c7ef6",
    text: "#000"
}
export const themes = {
    dark: darkTheme,
    light: lightTheme,
    fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"
}