---
title: Parsen
slug: Glossary/Parse
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Parsen bedeutet, ein Programm zu analysieren und in ein internes Format umzuwandeln, das eine Laufzeitumgebung tatsächlich ausführen kann, beispielsweise die {{glossary("JavaScript")}}-Engine in Browsern.

Der [Browser parst HTML](/de/docs/Learn/HTML) in einen {{glossary('DOM')}}-Baum. Das HTML-Parsen beinhaltet die [Tokenisierung](/de/docs/Web/API/DOMTokenList) und den Baumaufbau. HTML-Token umfassen Start- und End-Tags sowie Attributnamen und -werte. Wenn das Dokument gut strukturiert ist, ist das Parsen problemlos und schneller. Der Parser analysiert die tokenisierten Eingaben im Dokument und baut den Dokumentbaum auf.

Wenn der HTML-Parser nicht blockierende Ressourcen findet, wie ein Bild, wird der Browser diese Ressourcen anfordern und das Parsen fortsetzen. Das Parsen kann fortgesetzt werden, wenn eine CSS-Datei gefunden wird, aber `<script>`-Tags—insbesondere solche ohne ein [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)- oder `defer`-Attribut—blockieren das Rendering und pausieren das Parsen von HTML.

Wenn der Browser auf CSS-Stile stößt, parst er den Text in das CSS Object Model (oder {{glossary('CSSOM')}}), eine Datenstruktur, die dann für das Styling von Layouts und das Zeichnen verwendet wird. Der Browser erstellt dann einen Renderbaum aus beiden Strukturen, um den Inhalt auf den Bildschirm zu zeichnen. JavaScript wird ebenfalls heruntergeladen, geparst und dann ausgeführt.

Das Parsen von JavaScript erfolgt während der {{glossary("compile time")}} oder wann immer der {{glossary("parser")}} aufgerufen wird, beispielsweise während eines Methodenaufrufs.

## Siehe auch

- [Parsen](https://en.wikipedia.org/wiki/Parsing) auf Wikipedia
