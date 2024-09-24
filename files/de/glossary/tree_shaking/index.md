---
title: Tree Shaking
slug: Glossary/Tree_shaking
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**Tree Shaking** ist ein Begriff, der häufig im Kontext von JavaScript verwendet wird, um die Entfernung von totem Code zu beschreiben.

Es basiert auf den [import](/de/docs/Web/JavaScript/Reference/Statements/import)- und [export](/de/docs/Web/JavaScript/Reference/Statements/export)-Statements, um zu erkennen, ob Code-Module exportiert und importiert werden, um zwischen JavaScript-Dateien verwendet zu werden.

In modernen JavaScript-Anwendungen verwenden wir Modul-Bundler (z. B. [webpack](https://webpack.js.org/) oder [Rollup](https://github.com/rollup/rollup)), um automatisch toten Code zu entfernen, wenn mehrere JavaScript-Dateien in einzelne Dateien gebündelt werden. Dies ist wichtig, um Code vorzubereiten, der produktionsbereit ist, zum Beispiel mit sauberen Strukturen und minimaler Dateigröße.

## Siehe auch

- ["Vorteile der Eliminierung von totem Code während des Bündelns"](https://exploringjs.com/es6/ch_modules.html#_benefit-dead-code-elimination-during-bundling) im Buch von Axel Rauschmayer: "Exploring JS: Modules"
- [Implementierung von Tree Shaking mit webpack](https://webpack.js.org/guides/tree-shaking/)
