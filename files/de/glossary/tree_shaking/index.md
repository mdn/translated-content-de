---
title: Tree Shaking
slug: Glossary/Tree_shaking
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Tree Shaking** ist ein Begriff, der im Kontext von JavaScript häufig verwendet wird, um die Entfernung von nicht benötigtem Code zu beschreiben.

Es beruht auf den [import](/de/docs/Web/JavaScript/Reference/Statements/import) und [export](/de/docs/Web/JavaScript/Reference/Statements/export)-Anweisungen, um zu erkennen, ob Code-Module zwischen JavaScript-Dateien exportiert und importiert werden.

In modernen JavaScript-Anwendungen verwenden wir Modul-Bundler (z. B. [webpack](https://webpack.js.org/) oder [Rollup](https://github.com/rollup/rollup)), um automatisch nicht benötigten Code zu entfernen, wenn mehrere JavaScript-Dateien in einzelne Dateien gebündelt werden. Dies ist wichtig für die Vorbereitung von Code, der produktionsreif ist, beispielsweise mit sauberen Strukturen und minimaler Dateigröße.

## Siehe auch

- ["Vorteile der Entfernung von nicht benötigtem Code beim Bündeln"](https://exploringjs.com/es6/ch_modules.html#_benefit-dead-code-elimination-during-bundling) in Axel Rauschmayers Buch: "Exploring JS: Modules"
- [Tree Shaking-Implementierung mit webpack](https://webpack.js.org/guides/tree-shaking/)
