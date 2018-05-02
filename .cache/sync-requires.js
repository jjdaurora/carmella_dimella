// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/jjdaurora/dev/clients/carmella_dimella/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/jjdaurora/dev/clients/carmella_dimella/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/jjdaurora/dev/clients/carmella_dimella/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/jjdaurora/dev/clients/carmella_dimella/src/pages/about.js")),
  "component---src-pages-blog-js": preferDefault(require("/Users/jjdaurora/dev/clients/carmella_dimella/src/pages/blog.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/jjdaurora/dev/clients/carmella_dimella/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/jjdaurora/dev/clients/carmella_dimella/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/jjdaurora/dev/clients/carmella_dimella/src/pages/page-2.js")),
  "component---src-pages-shop-js": preferDefault(require("/Users/jjdaurora/dev/clients/carmella_dimella/src/pages/shop.js"))
}

exports.json = {
  "layout-index.json": require("/Users/jjdaurora/dev/clients/carmella_dimella/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/jjdaurora/dev/clients/carmella_dimella/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/jjdaurora/dev/clients/carmella_dimella/.cache/json/404.json"),
  "about.json": require("/Users/jjdaurora/dev/clients/carmella_dimella/.cache/json/about.json"),
  "blog.json": require("/Users/jjdaurora/dev/clients/carmella_dimella/.cache/json/blog.json"),
  "contact.json": require("/Users/jjdaurora/dev/clients/carmella_dimella/.cache/json/contact.json"),
  "index.json": require("/Users/jjdaurora/dev/clients/carmella_dimella/.cache/json/index.json"),
  "page-2.json": require("/Users/jjdaurora/dev/clients/carmella_dimella/.cache/json/page-2.json"),
  "shop.json": require("/Users/jjdaurora/dev/clients/carmella_dimella/.cache/json/shop.json"),
  "404-html.json": require("/Users/jjdaurora/dev/clients/carmella_dimella/.cache/json/404-html.json")
}