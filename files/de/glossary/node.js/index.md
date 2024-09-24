---
title: Node.js
slug: Glossary/Node.js
l10n:
  sourceCommit: 6a01359152716aafd62878599603f6ce76a9a9bf
---

{{GlossarySidebar}}

Node.js ist eine plattformübergreifende {{Glossary("JavaScript")}}-Laufzeitumgebung, die es Entwicklern ermöglicht, serverseitige und netzwerkbasierte Anwendungen mit JavaScript zu erstellen.

## Node Package Manager (npm)

[npm](https://www.npmjs.com/) ist ein Paketmanager, der zusammen mit Node.js heruntergeladen und gebündelt wird. Sein Kommandozeilen-Client (CLI) `npm` kann verwendet werden, um Pakete herunterzuladen, zu konfigurieren und zu erstellen, die in Node.js-Projekten verwendet werden sollen. Heruntergeladene Pakete können durch [ES imports](/de/docs/Web/JavaScript/Reference/Statements/import) und [CommonJS `require()`](https://en.wikipedia.org/wiki/CommonJS) importiert werden, ohne das Abhängigkeitsverzeichnis `node_modules/`, in das sie heruntergeladen werden, einzuschließen, da Node.js Pakete [auflöst](https://nodejs.org/api/modules.html#loading-from-node_modules-folders), ohne einen relativen oder absoluten Pfad in ihrem Import anzugeben.

Pakete, die auf npm gehostet werden, werden aus dem Register unter [https://registry.npmjs.org/](https://registry.npmjs.org/) heruntergeladen, aber das CLI kann so konfiguriert werden, dass es jede kompatible Instanz verwendet.

## Siehe auch

- [Node.js](https://en.wikipedia.org/wiki/Node.js) auf Wikipedia
- [Node.js Webseite](https://nodejs.org/)
- [API-Referenzdokumentation](https://nodejs.org/api/)
- [Anleitungen](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
- [npm-Dokumentation](https://docs.npmjs.com/)
