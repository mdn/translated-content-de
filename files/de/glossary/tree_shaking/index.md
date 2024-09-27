---
title: Tree shaking
slug: Glossary/Tree_shaking
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**Tree shaking** ist ein Begriff, der häufig im JavaScript-Kontext verwendet wird, um das Entfernen von totem Code zu beschreiben.

Es basiert auf den [import](/de/docs/Web/JavaScript/Reference/Statements/import) und [export](/de/docs/Web/JavaScript/Reference/Statements/export) Anweisungen, um zu erkennen, ob Code-Module exportiert und importiert werden, um sie zwischen JavaScript-Dateien zu verwenden.

In modernen JavaScript-Anwendungen nutzen wir Modul-Bundler (z. B. [webpack](https://webpack.js.org/) oder [Rollup](https://github.com/rollup/rollup)), um toten Code automatisch zu entfernen, wenn mehrere JavaScript-Dateien in einzelne Dateien gebündelt werden. Dies ist wichtig, um Code vorzubereiten, der für die Produktion bereit ist, zum Beispiel mit sauberen Strukturen und minimaler Dateigröße.

## Siehe auch

- ["Vorteile der Eliminierung von totem Code während des Bündelns"](https://exploringjs.com/es6/ch_modules.html#_benefit-dead-code-elimination-during-bundling) in Axel Rauschmayers Buch: "Exploring JS: Modules"
- [Umsetzung von Tree shaking mit webpack](https://webpack.js.org/guides/tree-shaking/)
