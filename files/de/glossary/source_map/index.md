---
title: Source map
slug: Glossary/Source_map
l10n:
  sourceCommit: ed041385cf874deec203e820fd415bdcd6f98a19
---

{{GlossarySidebar}}

Eine **Source Map** ist eine Datei, die zwischen minifiziertem oder transformiertem Code, den der Browser erhält, und dessen ursprünglicher, unveränderter Form vermittelt. Dadurch kann der ursprüngliche Code rekonstruiert und beim Debuggen verwendet werden.

Der von einem Browser ausgeführte JavaScript-Code wurde oft in irgendeiner Weise vom ursprünglichen Quellcode, den ein Entwickler erstellt hat, transformiert. Beispielsweise werden Quellen oft kombiniert und minifiziert, um ihre Auslieferung vom Server effizienter zu gestalten. Darüber hinaus ist JavaScript, das auf einer Seite läuft, oft maschinen-generiert, beispielsweise durch Kompilierung aus einer Sprache wie TypeScript.

In diesen Situationen ist das Debuggen des ursprünglichen Quellcodes viel einfacher als bei dem transformierten Code, den der Browser heruntergeladen hat.

## Siehe auch

- HTTP {{HTTPHeader("SourceMap")}} Response-Header
- [Firefox Developer Tools: using a source map](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html)
