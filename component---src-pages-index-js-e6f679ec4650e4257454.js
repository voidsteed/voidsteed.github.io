(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{RXBc:function(e,t,a){"use strict";a.r(t);var n=a("dI71"),r=a("q1tI"),l=a.n(r),o=a("Wbzz"),s=a("6Gk8"),i=a("Bl7J"),c=a("vrFN"),p=a("p3AD"),d=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return l.a.createElement(i.a,{location:this.props.location,title:t},l.a.createElement(c.a,{title:"All posts",keywords:["blog","gatsby","javascript","react"]}),l.a.createElement(s.a,null),a.map((function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return l.a.createElement("div",{key:t.fields.slug},l.a.createElement("h3",{style:{marginBottom:Object(p.a)(1/4)}},l.a.createElement(o.Link,{style:{boxShadow:"none"},to:t.fields.slug},a)),l.a.createElement("small",null,t.frontmatter.date),l.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}}))})))},t}(l.a.Component);t.default=d}}]);
//# sourceMappingURL=component---src-pages-index-js-e6f679ec4650e4257454.js.map