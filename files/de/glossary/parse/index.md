---
title: Parse
slug: Glossary/Parse
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Parsen bedeutet, ein Programm zu analysieren und in ein internes Format umzuwandeln, das eine Laufzeitumgebung tatsächlich ausführen kann, beispielsweise die {{Glossary("JavaScript", "JavaScript")}}-Engine in Browsern.

Der [Browser parst HTML](/de/docs/Learn_web_development/Core/Structuring_content) in einen {{Glossary("DOM", "DOM")}}-Baum. Das Parsen von HTML umfasst [Tokenisierung](/de/docs/Web/API/DOMTokenList) und Baumkonstruktion. HTML-Token beinhalten Start- und End-Tags sowie Attributnamen und -werte. Wenn das Dokument gut strukturiert ist, ist das Parsen einfach und schneller. Der Parser parst das tokenisierte Eingabematerial in das Dokument und baut den Dokumentbaum auf.

Wenn der HTML-Parser nicht blockierende Ressourcen wie ein Bild findet, wird der Browser diese Ressourcen anfordern und das Parsen fortsetzen. Das Parsen kann fortgesetzt werden, wenn eine CSS-Datei gefunden wird, aber `<script>`-Tags, insbesondere solche ohne ein [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)- oder `defer`-Attribut, blockieren das Rendering und pausieren das Parsen von HTML.

Wenn der Browser auf CSS-Stile trifft, parst er den Text in das CSS Object Model (oder {{Glossary("CSSOM", "CSSOM")}}), eine Datenstruktur, die er dann für die Gestaltung von Layouts und das Zeichnen verwendet. Der Browser erstellt dann einen Renderbaum aus beiden Strukturen, um den Inhalt auf den Bildschirm zu malen. JavaScript wird ebenfalls heruntergeladen, geparst und dann ausgeführt.

Das Parsen von JavaScript erfolgt während der {{Glossary("compile_time", "Kompilierungszeit")}} oder wann immer der {{Glossary("parser", "Parser")}} aufgerufen wird, wie zum Beispiel bei einem Methodenaufruf.

## Siehe auch

- [Parsen](https://en.wikipedia.org/wiki/Parsing) auf Wikipedia
