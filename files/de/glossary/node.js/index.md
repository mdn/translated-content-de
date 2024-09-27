---
title: Node.js
slug: Glossary/Node.js
l10n:
  sourceCommit: 6a01359152716aafd62878599603f6ce76a9a9bf
---

{{GlossarySidebar}}

Node.js ist eine plattformübergreifende Laufzeitumgebung für [JavaScript](/de/docs/Glossary/JavaScript), die es Entwicklern ermöglicht, serverseitige und Netzwerk-Anwendungen mit JavaScript zu erstellen.

## Node Package Manager (npm)

[npm](https://www.npmjs.com/) ist ein Paketmanager, der zusammen mit Node.js heruntergeladen und gebündelt wird. Der Kommandozeilen-Client (CLI) `npm` kann verwendet werden, um Pakete für die Verwendung in Node.js-Projekten herunterzuladen, zu konfigurieren und zu erstellen. Heruntergeladene Pakete können durch [ES imports](/de/docs/Web/JavaScript/Reference/Statements/import) und [CommonJS `require()`](https://en.wikipedia.org/wiki/CommonJS) importiert werden, ohne dass das Abhängigkeitsverzeichnis `node_modules/`, in das sie heruntergeladen werden, eingeschlossen werden muss. Node.js [löst](https://nodejs.org/api/modules.html#loading-from-node_modules-folders) Pakete ohne eine festgelegte relative oder absolute Pfadangabe in ihrem Import auf.

Pakete, die auf npm gehostet werden, werden aus dem Registry unter [https://registry.npmjs.org/](https://registry.npmjs.org/) heruntergeladen, aber das CLI kann so konfiguriert werden, dass es jede kompatible Instanz verwendet.

## Siehe auch

- [Node.js](https://en.wikipedia.org/wiki/Node.js) auf Wikipedia
- [Node.js Webseite](https://nodejs.org/)
- [API-Referenzdokumentation](https://nodejs.org/api/)
- [Leitfäden](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
- [npm Dokumentation](https://docs.npmjs.com/)
