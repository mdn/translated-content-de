---
title: Code-Splitting
slug: Glossary/Code_splitting
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{GlossarySidebar}}

**Code-Splitting** ist die Praxis, den Code, auf den eine Webanwendung angewiesen ist — einschließlich des eigenen Codes und aller Drittanbieter-Abhängigkeiten — in separate Bündel zu unterteilen, die unabhängig voneinander geladen werden können. Dies ermöglicht es einer Anwendung, nur den Code zu laden, den sie tatsächlich zu einem bestimmten Zeitpunkt benötigt, und andere Bündel bei Bedarf zu laden. Dieser Ansatz wird verwendet, um die Performance der Anwendung zu verbessern, insbesondere beim erstmaligen Laden.

Code-Splitting ist eine Funktion, die von Bundlern wie [webpack](https://webpack.js.org/) und [Browserify](https://browserify.org/) unterstützt wird, die mehrere Bündel erstellen können, die zur Laufzeit dynamisch geladen werden können.

## Siehe auch

- [Lazy Loading](/de/docs/Web/Performance/Lazy_loading)
- Verwandte Glossarbegriffe:
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("Tree_shaking", "Tree Shaking")}}
