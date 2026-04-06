---
title: Node.js
slug: Glossary/Node.js
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

Node.js ist eine plattformübergreifende {{Glossary("JavaScript", "JavaScript")}}-Laufzeitumgebung, die es Entwicklern ermöglicht, serverseitige und Netzwerk-Anwendungen mit JavaScript zu erstellen.

## Node Package Manager (npm)

[npm](https://www.npmjs.com/) ist ein Paketmanager, der zusammen mit Node.js heruntergeladen und gebündelt wird. Der Befehlszeilen-Client (CLI) `npm` kann verwendet werden, um Pakete für die Verwendung in Node.js-Projekten herunterzuladen, zu konfigurieren und zu erstellen. Heruntergeladene Pakete können durch [ES imports](/de/docs/Web/JavaScript/Reference/Statements/import) und [CommonJS `require()`](https://en.wikipedia.org/wiki/CommonJS) importiert werden, ohne das Abhängigkeitsverzeichnis `node_modules/`, in das sie heruntergeladen werden, anzugeben, da Node.js Pakete [auflöst](https://nodejs.org/api/modules.html#loading-from-node_modules-folders), ohne dass ein relativer oder absoluter Pfad in ihrem Import angegeben wird.

Pakete, die auf npm gehostet werden, werden aus dem Registry unter [https://registry.npmjs.org/](https://registry.npmjs.org/) heruntergeladen, aber der CLI-Client kann so konfiguriert werden, dass er jede kompatible Instanz verwendet.

## Siehe auch

- [Node.js](https://en.wikipedia.org/wiki/Node.js) auf Wikipedia
- [Node.js Webseite](https://nodejs.org/)
- [API-Referenzdokumentation](https://nodejs.org/api/)
- [Leitfaden](https://nodejs.org/learn/getting-started/introduction-to-nodejs)
- [npm Dokumentation](https://docs.npmjs.com/)
