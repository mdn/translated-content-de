---
title: Tree shaking
slug: Glossary/Tree_shaking
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**Tree shaking** ist ein Begriff, der häufig im JavaScript-Kontext verwendet wird, um die Entfernung von nicht benötigtem Code zu beschreiben.

Es stützt sich auf die [import](/de/docs/Web/JavaScript/Reference/Statements/import) und [export](/de/docs/Web/JavaScript/Reference/Statements/export) Anweisungen, um zu erkennen, ob Code-Module zwischen JavaScript-Dateien exportiert und importiert werden.

In modernen JavaScript-Anwendungen verwenden wir Module-Bundler (z. B. [webpack](https://webpack.js.org/) oder [Rollup](https://github.com/rollup/rollup)), um beim Bündeln mehrerer JavaScript-Dateien in einzelne Dateien automatisch unnötigen Code zu entfernen. Das ist wichtig, um Code vorzubereiten, der produktionsbereit ist, zum Beispiel mit sauberen Strukturen und minimaler Dateigröße.

## Siehe auch

- ["Vorteile der Entfernung von nicht benötigtem Code während des Bündelns"](https://exploringjs.com/es6/ch_modules.html#_benefit-dead-code-elimination-during-bundling) im Buch von Axel Rauschmayer: "Exploring JS: Modules"
- [Tree shaking Implementierung mit webpack](https://webpack.js.org/guides/tree-shaking/)
