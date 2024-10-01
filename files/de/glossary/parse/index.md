---
title: Parse
slug: Glossary/Parse
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Das Parsen bedeutet, ein Programm zu analysieren und in ein internes Format zu konvertieren, das eine Laufzeitumgebung tatsächlich ausführen kann, beispielsweise die {{Glossary("JavaScript", "JavaScript")}}-Engine in Browsern.

Der [Browser parst HTML](/de/docs/Learn/HTML) in einen {{Glossary("DOM", "DOM")}}-Baum. Das HTML-Parsen umfasst die [Tokenisierung](/de/docs/Web/API/DOMTokenList) und den Baumaufbau. HTML-Token umfassen Start- und End-Tags sowie Attributnamen und -werte. Wenn das Dokument gut formatiert ist, ist das Parsen unkompliziert und schneller. Der Parser parst tokenisierten Input in das Dokument und baut den Dokumentbaum auf.

Wenn der HTML-Parser nicht-blockierende Ressourcen wie ein Bild findet, fordert der Browser diese Ressourcen an und setzt das Parsen fort. Das Parsen kann fortgesetzt werden, wenn eine CSS-Datei angetroffen wird, aber `<script>`-Tags — insbesondere solche ohne ein [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)- oder `defer`-Attribut — blockieren das Rendering und pausieren das Parsen von HTML.

Wenn der Browser auf CSS-Stile trifft, parst er den Text in das CSS Object Model (oder {{Glossary("CSSOM", "CSSOM")}}), eine Datenstruktur, die dann für die Gestaltung von Layouts und das Malen verwendet wird. Der Browser erstellt dann einen Renderbaum aus beiden Strukturen, um den Inhalt auf den Bildschirm malen zu können. JavaScript wird ebenfalls heruntergeladen, geparst und dann ausgeführt.

Das Parsen von JavaScript erfolgt während der {{Glossary("compile_time", "Kompilierungszeit")}} oder wann immer der {{Glossary("parser", "Parser")}} aufgerufen wird, zum Beispiel während eines Methodenaufrufs.

## Siehe auch

- [Parse](https://en.wikipedia.org/wiki/Parsing) auf Wikipedia
