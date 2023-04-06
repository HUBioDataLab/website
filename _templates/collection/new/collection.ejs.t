---
to: _templates/<%= h.changeCase.lower(h.inflection.transform(h.changeCase.camelCase(name), ['underscore', 'humanize', 'dasherize'])) %>/<%= action || 'new' %>/<%= h.changeCase.lower(h.inflection.transform(h.changeCase.camelCase(name), ['underscore', 'humanize', 'dasherize'])) %>.ejs.t
---
---
to: src/content/<%= h.changeCase.lower(h.inflection.transform(h.changeCase.camelCase(name), ['underscore', 'humanize', 'dasherize'])) %>/<%%= h.changeCase.lower(h.inflection.transform(h.changeCase.camelCase(name), ['underscore', 'humanize', 'dasherize'])) %>.mdx
---
---
title: "<%%= h.inflection.transform(h.changeCase.camelCase(name), ['underscore', 'humanize', 'titleize']) %>"
description: "Short title"
author: "John Doe"
date: <%%= new Date().toISOString() %>
tags: ["other"]
draft: true
---

