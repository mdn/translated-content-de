---
title: Code-Splitting
slug: Glossary/Code_splitting
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

**Code-Splitting** ist die Praxis, den Code, von dem eine Webanwendung abhängt — einschließlich ihres eigenen Codes und jeglicher Drittanbieter-Abhängigkeiten — in separate Bündel aufzuteilen, die unabhängig voneinander geladen werden können. Dadurch kann eine Anwendung nur den Code laden, den sie zu einem bestimmten Zeitpunkt tatsächlich benötigt, und andere Bündel bei Bedarf laden. Dieser Ansatz wird verwendet, um die Leistung von Anwendungen zu verbessern, insbesondere beim ersten Laden.

Code-Splitting ist eine Funktion, die von Bundlern wie [Webpack](https://webpack.js.org/) und [Browserify](https://browserify.org/) unterstützt wird. Diese können mehrere Bündel erstellen, die zur Laufzeit dynamisch geladen werden können.

## Siehe auch

- [Lazy Loading](/de/docs/Web/Performance/Lazy_loading)
- Verwandte Glossarbegriffe:
  - [HTTP/2](/de/docs/Glossary/HTTP_2)
  - [Tree Shaking](/de/docs/Glossary/Tree_shaking)
