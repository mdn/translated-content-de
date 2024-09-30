---
title: Code splitting
slug: Glossary/Code_splitting
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

**Code splitting** ist die Praxis, den Code, auf den eine Webanwendung angewiesen ist — einschließlich ihres eigenen Codes und etwaiger Drittanbieter-Abhängigkeiten — in separate Bündel aufzuteilen, die unabhängig voneinander geladen werden können. Dies ermöglicht es einer Anwendung, nur den Code zu laden, den sie zu einem bestimmten Zeitpunkt tatsächlich benötigt, und andere Bündel bei Bedarf zu laden. Dieser Ansatz wird verwendet, um die Anwendungsleistung zu verbessern, insbesondere beim ersten Laden.

Code splitting ist ein Feature, das von Bundlern wie [Webpack](https://webpack.js.org/) und [Browserify](https://browserify.org/) unterstützt wird, die mehrere Bündel erstellen können, die zur Laufzeit dynamisch geladen werden können.

## Siehe auch

- [Lazy loading](/de/docs/Web/Performance/Lazy_loading)
- Verwandte Glossarbegriffe:
  - [HTTP/2](/de/docs/Glossary/HTTP_2)
  - [Tree shaking](/de/docs/Glossary/Tree_shaking)
