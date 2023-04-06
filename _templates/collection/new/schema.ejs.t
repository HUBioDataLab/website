---
inject: True
to: src/content/config.ts
after: export const collections = {
skip_if: "'<%= name %>': defaultCollection,"
---
  '<%= name %>': defaultCollection,