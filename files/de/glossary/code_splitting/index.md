---
title: Code-Splitting
slug: Glossary/Code_splitting
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

{{GlossarySidebar}}

**Code-Splitting** ist die Praxis, den Code, von dem eine Webanwendung abhängt — einschließlich ihres eigenen Codes und jeglicher Drittanbieterabhängigkeiten — in separate Bündel aufzuteilen, die unabhängig voneinander geladen werden können. Dies ermöglicht es einer Anwendung, nur den Code zu laden, den sie zu einem bestimmten Zeitpunkt tatsächlich benötigt, und andere Bündel bei Bedarf zu laden. Dieser Ansatz wird verwendet, um die Anwendungsleistung zu verbessern, insbesondere beim erstmaligen Laden.

Code-Splitting ist ein Feature, das von Bundlern wie [webpack](https://webpack.js.org/) und [Browserify](https://browserify.org/) unterstützt wird. Diese können mehrere Bündel erstellen, die zur Laufzeit dynamisch geladen werden können.

## Siehe auch

- [Lazy Loading](/de/docs/Web/Performance/Guides/Lazy_loading)
- Verwandte Glossarbegriffe:
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("Tree_shaking", "Tree Shaking")}}
