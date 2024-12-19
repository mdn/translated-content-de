---
title: Parse
slug: Glossary/Parse
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{GlossarySidebar}}

Das Parsen bedeutet, ein Programm zu analysieren und in ein internes Format zu konvertieren, das von einer Laufzeitumgebung tatsächlich ausgeführt werden kann, zum Beispiel die {{Glossary("JavaScript", "JavaScript")}}-Engine in Browsern.

Der [Browser parst HTML](/de/docs/Learn_web_development/Core/Structuring_content) in einen {{Glossary("DOM", "DOM")}}-Baum. Das Parsen von HTML beinhaltet die [Tokenisierung](/de/docs/Web/API/DOMTokenList) und den Aufbau des Baumes. HTML-Tokens umfassen Start- und End-Tags sowie Attributnamen und -werte. Wenn das Dokument wohlgeformt ist, ist das Parsen einfach und schneller. Der Parser parst das tokenisierte Eingabematerial ins Dokument und baut dabei den Dokumentbaum auf.

Wenn der HTML-Parser nicht blockierende Ressourcen findet, wie etwa ein Bild, fordert der Browser diese Ressourcen an und setzt das Parsen fort. Das Parsen kann fortgesetzt werden, wenn eine CSS-Datei angetroffen wird, aber `<script>`-Tags, insbesondere solche ohne das [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)- oder `defer`-Attribut, blockieren das Rendering und pausieren das Parsen von HTML.

Wenn der Browser auf CSS-Stile trifft, parst er den Text in das CSS Object Model (oder {{Glossary("CSSOM", "CSSOM")}}), eine Datenstruktur, die dann zum Stylen von Layouts und zum Malen verwendet wird. Der Browser erstellt dann einen Renderbaum aus beiden Strukturen, um den Inhalt auf dem Bildschirm zu zeichnen. JavaScript wird ebenfalls heruntergeladen, geparst und dann ausgeführt.

Das Parsen von JavaScript erfolgt während der {{Glossary("compile_time", "Kompilierzeit")}} oder wann immer der {{Glossary("parser", "Parser")}} aufgerufen wird, zum Beispiel während eines Aufrufs einer Methode.

## Siehe auch

- [Parse](https://en.wikipedia.org/wiki/Parsing) auf Wikipedia
