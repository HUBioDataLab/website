---
to: src/content/pages/<%= h.changeCase.lower(h.inflection.transform(h.changeCase.camelCase(name), ['underscore', 'humanize', 'dasherize'])) %>.mdx
---
---
title: "<%= h.inflection.transform(h.changeCase.camelCase(name), ['underscore', 'humanize', 'titleize']) %>"
description: "Short description"
# image: ""
---

