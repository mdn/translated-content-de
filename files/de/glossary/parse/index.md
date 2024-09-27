---
title: Parse
slug: Glossary/Parse
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Parsen bedeutet, ein Programm zu analysieren und in ein internes Format umzuwandeln, das in einer Laufzeitumgebung tatsächlich ausgeführt werden kann, zum Beispiel die [JavaScript](/de/docs/Glossary/JavaScript)-Engine in Browsern.

Der [Browser parst HTML](/de/docs/Learn/HTML) in einen [DOM](/de/docs/Glossary/DOM)-Baum. Das HTML-Parsen umfasst die [Tokenisierung](/de/docs/Web/API/DOMTokenList) und den Baumaufbau. HTML-Token umfassen Start- und End-Tags sowie Attributnamen und -werte. Wenn das Dokument gut geformt ist, ist das Parsen einfach und schneller. Der Parser parst tokenisierten Eingang in das Dokument und baut den Dokumentbaum auf.

Wenn der HTML-Parser nicht blockierende Ressourcen, wie ein Bild, findet, fordert der Browser diese Ressourcen an und fährt mit dem Parsen fort. Das Parsen kann fortgesetzt werden, wenn eine CSS-Datei gefunden wird, aber `<script>`-Tags – insbesondere solche ohne [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)- oder `defer`-Attribut – blockieren das Rendern und unterbrechen das Parsen von HTML.

Wenn der Browser auf CSS-Stile trifft, parst er den Text in das CSS Object Model (oder [CSSOM](/de/docs/Glossary/CSSOM)), eine Datenstruktur, die er dann zur Gestaltung von Layouts und zum Zeichnen verwendet. Der Browser erstellt dann sowohl aus diesen Strukturen einen Render-Baum, um den Inhalt auf dem Bildschirm darzustellen. JavaScript wird ebenfalls heruntergeladen, geparst und dann ausgeführt.

Das JavaScript-Parsen erfolgt während der [Kompilierungszeit](/de/docs/Glossary/compile_time) oder wann immer der [Parser](/de/docs/Glossary/parser) aufgerufen wird, wie zum Beispiel während eines Methodenaufrufs.

## Siehe auch

- [Parsen](https://en.wikipedia.org/wiki/Parsing) auf Wikipedia
