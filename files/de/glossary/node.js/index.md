---
title: Node.js
slug: Glossary/Node.js
l10n:
  sourceCommit: 6a01359152716aafd62878599603f6ce76a9a9bf
---

{{GlossarySidebar}}

Node.js ist eine plattformübergreifende Laufzeitumgebung für {{Glossary("JavaScript", "JavaScript")}}, die es Entwicklern ermöglicht, serverseitige und Netzwerkanwendungen mit JavaScript zu erstellen.

## Node Package Manager (npm)

[npm](https://www.npmjs.com/) ist ein Paketmanager, der zusammen mit Node.js heruntergeladen und gebündelt wird. Sein Kommandozeilen-Client (CLI) `npm` kann verwendet werden, um Pakete herunterzuladen, zu konfigurieren und zu erstellen, die in Node.js-Projekten verwendet werden können. Heruntergeladene Pakete können durch [ES imports](/de/docs/Web/JavaScript/Reference/Statements/import) und [CommonJS `require()`](https://en.wikipedia.org/wiki/CommonJS) importiert werden, ohne das Abhängigkeitsverzeichnis `node_modules/` einzuschließen, in das sie heruntergeladen werden, da Node.js Pakete auflöst, ohne dass ein relativer oder absoluter Pfad in ihrem Import angegeben ist.

Pakete, die auf npm gehostet werden, werden aus dem Registry unter [https://registry.npmjs.org/](https://registry.npmjs.org/) heruntergeladen, aber das CLI kann so konfiguriert werden, dass es jede kompatible Instanz verwendet.

## Siehe auch

- [Node.js](https://en.wikipedia.org/wiki/Node.js) auf Wikipedia
- [Node.js Website](https://nodejs.org/)
- [API-Referenzdokumentation](https://nodejs.org/api/)
- [Leitfäden](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
- [npm-Dokumentation](https://docs.npmjs.com/)
