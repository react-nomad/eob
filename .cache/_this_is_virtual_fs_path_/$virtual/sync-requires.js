
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-index-js": preferDefault(require("C:\\Users\\Brad - ArcticLeaf\\Projects\\eob\\src\\pages\\index.js")),
  "component---src-templates-page-js": preferDefault(require("C:\\Users\\Brad - ArcticLeaf\\Projects\\eob\\src\\templates\\page.js"))
}

