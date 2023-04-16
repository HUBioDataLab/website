---
to: src/content/projects/<%= h.changeCase.lower(h.inflection.transform(h.changeCase.camelCase(name), ['underscore', 'humanize', 'dasherize'])) %>.mdx
---
---
title: "<%= h.inflection.transform(h.changeCase.camelCase(name), ['underscore', 'humanize', 'titleize']) %>"
description: "Short title"
author: "John Doe"
date: <%= new Date().toISOString() %>
tags: ["other"]
draft: true
---

