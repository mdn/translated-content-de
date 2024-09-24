---
title: Code-Splitting
slug: Glossary/Code_splitting
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

**Code-Splitting** ist die Praxis, den Code, von dem eine Webanwendung abhängt — einschließlich ihres eigenen Codes und aller Drittanbieter-Abhängigkeiten — in separate Bündel zu unterteilen, die unabhängig voneinander geladen werden können. Dadurch kann eine Anwendung nur den Code laden, den sie zu einem bestimmten Zeitpunkt tatsächlich benötigt, und andere Bündel bei Bedarf laden. Dieser Ansatz wird verwendet, um die Anwendungsleistung zu verbessern, insbesondere beim initialen Laden.

Code-Splitting ist ein Merkmal, das von Bundlern wie [Webpack](https://webpack.js.org/) und [Browserify](https://browserify.org/) unterstützt wird, die mehrere Bündel erstellen können, die zur Laufzeit dynamisch geladen werden können.

## Siehe auch

- [Lazy Loading](/de/docs/Web/Performance/Lazy_loading)
- Verwandte Glossarbegriffe:
  - {{Glossary("HTTP 2", "HTTP/2")}}
  - {{Glossary("Tree shaking")}}
