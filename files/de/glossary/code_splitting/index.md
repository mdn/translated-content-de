---
title: Code-Splitting
slug: Glossary/Code_splitting
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Code-Splitting** ist die Praxis, den Code, von dem eine Webanwendung abhängt – einschließlich ihres eigenen Codes und aller Abhängigkeiten von Drittanbietern – in separate Bundles aufzuteilen, die unabhängig voneinander geladen werden können. Dadurch kann eine Anwendung nur den Code laden, den sie zu einem bestimmten Zeitpunkt tatsächlich benötigt, und andere Bundles bei Bedarf nachladen. Dieser Ansatz wird eingesetzt, um die Leistung der Anwendung zu verbessern, insbesondere beim ersten Laden.

Code-Splitting ist eine Funktion, die von Bundlern wie [webpack](https://webpack.js.org/) und [Browserify](https://browserify.org/) unterstützt wird, die mehrere Bundles erstellen können, die zur Laufzeit dynamisch geladen werden können.

## Siehe auch

- [Lazy Loading](/de/docs/Web/Performance/Guides/Lazy_loading)
- Verwandte Glossarbegriffe:
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("Tree_shaking", "Tree Shaking")}}
