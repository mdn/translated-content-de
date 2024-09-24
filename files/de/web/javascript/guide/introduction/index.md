---
title: Einführung
slug: Web/JavaScript/Guide/Introduction
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}

Dieses Kapitel führt in JavaScript ein und behandelt einige seiner grundlegenden Konzepte.

## Was Sie bereits wissen sollten

Dieser Leitfaden setzt voraus, dass Sie über die folgenden grundlegenden Kenntnisse verfügen:

- Ein allgemeines Verständnis des Internets und des World Wide Webs ([WWW](/de/docs/Glossary/World_Wide_Web)).
- Gute Kenntnisse in HyperText Markup Language ([HTML](/de/docs/Glossary/HTML)).
- Etwas Programmiererfahrung. Wenn Sie neu im Programmieren sind, versuchen Sie eines der auf der Hauptseite zu [JavaScript](/de/docs/Web/JavaScript) verlinkten Tutorials.

## Wo Sie JavaScript-Informationen finden

Die JavaScript-Dokumentation auf MDN umfasst Folgendes:

- [Lernen Sie Webentwicklung](/de/docs/Learn) bietet Informationen für Anfänger und führt grundlegende Konzepte des Programmierens und des Internets ein.
- [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide) (dieser Leitfaden) bietet einen Überblick über die JavaScript-Sprache und ihre Objekte.
- [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) bietet detailliertes Referenzmaterial zu JavaScript.

Wenn Sie neu in JavaScript sind, beginnen Sie mit den Artikeln im [Lernbereich](/de/docs/Learn) und dem [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide). Sobald Sie die Grundlagen fest im Griff haben, können Sie die [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) verwenden, um mehr Details zu einzelnen Objekten und Anweisungen zu erhalten.

## Was ist JavaScript?

JavaScript ist eine plattformübergreifende, objektorientierte Skriptsprache, die verwendet wird, um Webseiten interaktiv zu gestalten (z. B. mit komplexen Animationen, klickbaren Schaltflächen, Popup-Menüs usw.). Es gibt auch fortgeschrittenere serverseitige Versionen von JavaScript wie Node.js, die es ermöglichen, mehr Funktionalitäten zu einer Webseite hinzuzufügen als nur Dateien herunterzuladen (wie z. B. die Echtzeit-Zusammenarbeit zwischen mehreren Computern). Innerhalb einer Host-Umgebung (z. B. einem Webbrowser) kann JavaScript mit den Objekten seiner Umgebung verbunden werden, um programmatische Kontrolle über sie zu bieten.

JavaScript enthält eine Standardbibliothek von Objekten, wie `Array`, `Date` und `Math`, sowie eine Kernauswahl von Sprachelementen wie Operatoren, Kontrollstrukturen und Anweisungen. Das Kern-JavaScript kann für eine Vielzahl von Zwecken erweitert werden, indem zusätzliche Objekte hinzugefügt werden; zum Beispiel:

- _Clientseitiges JavaScript_ erweitert die Kernsprache, indem es Objekte bereitstellt, um einen Browser und sein _Document Object Model_ (DOM) zu steuern. Zum Beispiel ermöglichen clientseitige Erweiterungen einer Anwendung, Elemente auf einem HTML-Formular zu platzieren und auf Benutzerereignisse wie Mausklicks, Formulareingaben und Seitennavigation zu reagieren.
- _Serverseitiges JavaScript_ erweitert die Kernsprache, indem es Objekte bereitstellt, die für die Ausführung von JavaScript auf einem Server relevant sind. Zum Beispiel ermöglichen serverseitige Erweiterungen einer Anwendung, mit einer Datenbank zu kommunizieren, Informationen von einem Aufruf zur nächsten der Anwendung zu übermitteln oder Dateimanipulationen auf einem Server durchzuführen.

Dies bedeutet, dass JavaScript im Browser das Aussehen der Webseite (DOM) ändern kann. Ebenso kann Node.js JavaScript auf dem Server auf benutzerdefinierte Anfragen reagieren, die von im Browser ausgeführtem Code gesendet werden.

## JavaScript und Java

JavaScript und Java sind in manchen Bereichen ähnlich, aber in anderen grundlegend verschieden. Die JavaScript-Sprache ähnelt Java, hat jedoch nicht Javas statische Typisierung und starke Typprüfung. JavaScript folgt den meisten Java-Ausdrucks-Syntaxen, Namenskonventionen und grundlegenden Kontrollflusskonstrukten, was der Grund war, warum es von LiveScript in JavaScript umbenannt wurde.

Im Gegensatz zum Kompilierungszeit-Klassensystem Javas, das durch Deklarationen gebaut wird, unterstützt JavaScript ein Laufzeitsystem, das auf einer kleinen Anzahl von Datentypen basiert, die numerische, Boole'sche und Zeichenkettenwerte repräsentieren. JavaScript verwendet ein auf Prototypen basierendes Objektmodell anstelle des häufiger verwendeten klassenbasierten Modells. Das prototypenbasierte Modell ermöglicht dynamische Vererbung; das heißt, was geerbt wird, kann für einzelne Objekte variieren. JavaScript unterstützt auch Funktionen ohne besondere deklarative Anforderungen. Funktionen können Eigenschaften von Objekten sein und als lose typisierte Methoden ausgeführt werden.

JavaScript ist eine sehr freie Sprache im Vergleich zu Java. Sie müssen nicht alle Variablen, Klassen und Methoden deklarieren. Sie müssen sich nicht darum kümmern, ob Methoden öffentlich, privat oder geschützt sind, und Sie müssen keine Schnittstellen implementieren. Variablen, Parameter und Rückgabetypen von Funktionen sind nicht explizit typisiert.

Java ist eine klassenbasierte Programmiersprache, die für schnelle Ausführung und Typensicherheit entwickelt wurde. Typensicherheit bedeutet zum Beispiel, dass Sie in Java keinen Integer in eine Objektreferenz umwandeln oder auf privaten Speicher zugreifen können, indem Sie den Java-Bytecode beschädigen. Das klassenbasierte Modell von Java bedeutet, dass Programme ausschließlich aus Klassen und ihren Methoden bestehen. Javas Vererbung und starke Typisierung erfordern im Allgemeinen eng gekoppelte Objekt-Hierarchien. Diese Anforderungen machen das Java-Programmieren komplexer als das JavaScript-Programmieren.

Im Gegensatz dazu stammt JavaScript im Geiste von einer Linie kleinerer, dynamisch typisierter Sprachen wie HyperTalk und dBASE ab. Diese Skriptsprachen bieten Programmierwerkzeuge für ein viel breiteres Publikum aufgrund ihrer einfacheren Syntax, spezialisierten eingebauten Funktionen und minimalen Anforderungen an die Objekterstellung.

| JavaScript                                                                                                                                                                   | Java                                                                                                                                                                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Objektorientiert. Keine Unterscheidung zwischen Arten von Objekten. Die Vererbung erfolgt durch den Prototyp-Mechanismus, und Eigenschaften und Methoden können jedem Objekt dynamisch hinzugefügt werden. | Klassenbasiert. Objekte sind in Klassen und Instanzen unterteilt. Alle Vererbungen erfolgen durch die Klassenhierarchie. Klassen und Instanzen können keine Eigenschaften oder Methoden dynamisch hinzufügen. |
| Datentypen von Variablen werden nicht deklariert (dynamische Typisierung, lose typisiert).                                                                                   | Datentypen von Variablen müssen deklariert werden (statische Typisierung, stark typisiert).                                                                                              |
| Kann nicht automatisch auf die Festplatte schreiben.                                                                                                                       | Kann automatisch auf die Festplatte schreiben.                                                                                                                                           |

## JavaScript und die ECMAScript-Spezifikation

JavaScript ist bei [Ecma International](https://ecma-international.org/) – der europäischen Vereinigung zur Standardisierung von Informations- und Kommunikationssystemen (ECMA war früher ein Akronym für European Computer Manufacturers Association) – standardisiert, um eine standardisierte, internationale Programmiersprache basierend auf JavaScript bereitzustellen. Diese standardisierte Version von JavaScript, genannt ECMAScript, verhält sich in allen Anwendungen, die den Standard unterstützen, gleich. Unternehmen können die offene Standardsprache verwenden, um ihre Implementierung von JavaScript zu entwickeln. Der ECMAScript-Standard ist in der ECMA-262-Spezifikation dokumentiert.

Der ECMA-262-Standard ist auch von der [ISO](https://www.iso.org/home.html) (Internationale Organisation für Normung) als ISO-16262 genehmigt. Die Spezifikation finden Sie auch auf [der Ecma International-Website](https://ecma-international.org/publications-and-standards/standards/ecma-262/). Die ECMAScript-Spezifikation beschreibt nicht das Document Object Model (DOM), das vom [World Wide Web Consortium (W3C)](https://www.w3.org/) und/oder [WHATWG (Web Hypertext Application Technology Working Group)](https://whatwg.org/) standardisiert wurde. Das DOM definiert die Art und Weise, in der HTML-Dokumentobjekte in Ihrem Skript verfügbar sind. Um eine bessere Vorstellung von den verschiedenen Technologien zu bekommen, die beim Programmieren mit JavaScript verwendet werden, konsultieren Sie den Artikel [JavaScript-Technologieübersicht](/de/docs/Web/JavaScript/JavaScript_technologies_overview).

### JavaScript-Dokumentation versus die ECMAScript-Spezifikation

Die ECMAScript-Spezifikation ist eine Auflistung von Anforderungen für die Implementierung von ECMAScript. Sie ist nützlich, wenn Sie standardkonforme Sprachfunktionen in Ihrer ECMAScript-Implementierung oder Engine (wie SpiderMonkey in Firefox oder V8 in Chrome) implementieren möchten.

Das ECMAScript-Dokument ist _nicht_ dazu gedacht, Skriptprogrammierer zu unterstützen. Verwenden Sie die JavaScript-Dokumentation für Informationen beim Schreiben von Skripten.

Die ECMAScript-Spezifikation verwendet Terminologie und Syntax, die einem JavaScript-Programmierer vielleicht unbekannt sein könnten. Obwohl die Beschreibung der Sprache in ECMAScript unterschiedlich sein kann, bleibt die Sprache selbst gleich. JavaScript unterstützt alle in der ECMAScript-Spezifikation umfassten Funktionen.

Die JavaScript-Dokumentation beschreibt Aspekte der Sprache, die für einen JavaScript-Programmierer geeignet sind.

## Einstieg in JavaScript

Um mit JavaScript zu beginnen, brauchen Sie lediglich einen modernen Webbrowser. Aktuelle Versionen von [Firefox](https://www.mozilla.org/en-CA/firefox/new/), [Chrome](https://www.google.com/chrome/index.html), [Microsoft Edge](https://www.microsoft.com/en-us/edge) und [Safari](https://www.apple.com/safari/) unterstützen die in diesem Leitfaden behandelten Funktionen.

Ein sehr nützliches Werkzeug zum Erkunden von JavaScript ist die JavaScript-Konsole (manchmal auch Web-Konsole oder einfach nur Konsole genannt): dies ist ein Werkzeug, das Ihnen ermöglicht, JavaScript einzugeben und es auf der aktuellen Seite auszuführen.

Die hier gezeigten Screenshots zeigen die [Firefox-Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/), aber alle modernen Browser werden mit einer Konsole geliefert, die auf ähnliche Weise funktioniert.

### Die Konsole öffnen

Die genauen Anweisungen zum Öffnen der Konsole variieren von Browser zu Browser:

- [Konsole in Firefox öffnen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/#opening-the-web-console)
- [Konsole in Chrome öffnen](https://developer.chrome.com/docs/devtools/open)
- [Konsole in Microsoft Edge öffnen](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/)

### Eingeben und Ausführen von JavaScript

Die Konsole erscheint unten im Browserfenster. Am unteren Rand der Konsole befindet sich eine Eingabezeile, die Sie verwenden können, um JavaScript einzugeben, und die Ausgabe erscheint im darüber liegenden Panel:

![Ein Browserfenster mit der geöffneten Web-Konsole unten, die zwei Zeilen Eingabe und Ausgabe enthält. Text kann darunter eingegeben werden.](2019-04-04_00-15-29.png)

Die Konsole funktioniert auf die gleiche Weise wie `eval`: der letzte eingegebene Ausdruck wird zurückgegeben. Der Einfachheit halber kann man sich vorstellen, dass jedes Mal, wenn etwas in die Konsole eingegeben wird, es tatsächlich von `console.log` umschlossen wird, wie hier:

```js
console.log(eval("3 + 5"));
```

### Mehrzeilige Eingaben in der Konsole

Standardmäßig wird die Zeichenfolge, die Sie nach dem Eingeben einer Codezeile tippen, ausgeführt, wenn Sie <kbd>Enter</kbd> (oder <kbd>Return</kbd>, je nach Tastatur) drücken. Um mehrzeilige Eingaben zu tätigen:

- Wenn die von Ihnen eingetippte Zeichenfolge unvollständig war (zum Beispiel, wenn Sie `function foo() {` eingetippt haben), behandelt die Konsole <kbd>Enter</kbd> als Zeilenumbruch und lässt Sie eine weitere Zeile eingeben.

- Wenn Sie <kbd>Shift</kbd> gedrückt halten, während Sie <kbd>Enter</kbd> drücken, behandelt die Konsole dies als Zeilenumbruch und lässt Sie eine weitere Zeile eingeben.

- Nur in Firefox können Sie den [Mehrzeilen-Eingabemodus](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#multi-line-mode) aktivieren, in dem Sie mehrere Zeilen in einem Mini-Editor eingeben und das Ganze ausführen können, wenn Sie bereit sind.

Um mit dem Schreiben von JavaScript zu beginnen, öffnen Sie die Konsole, kopieren Sie den folgenden Code und fügen Sie ihn an der Eingabeaufforderung ein:

```js
(function () {
  "use strict";
  /* Start of your code */
  function greetMe(yourName) {
    alert(`Hello ${yourName}`);
  }

  greetMe("World");
  /* End of your code */
})();
```

Drücken Sie <kbd>Enter</kbd>, um zu sehen, wie es sich im Browser entfaltet!

## Was folgt als nächstes

Auf den folgenden Seiten wird Sie dieser Leitfaden in die JavaScript-Syntax und Sprachfunktionen einführen, sodass Sie in der Lage sein werden, komplexere Anwendungen zu schreiben.

Aber denken Sie vorerst daran, immer `(function(){"use strict";` vor Ihrem Code einzuschließen und `})();` am Ende Ihres Codes hinzuzufügen. Die Artikel über den [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) und [IIFE](/de/docs/Glossary/IIFE) erklären, was diese tun, aber vorerst können sie als folgende Maßnahmen angesehen werden:

1. Semantiken verhindern, die für Anfänger in JavaScript Stolperfallen darstellen.
2. Verhindern, dass sich Codestücke, die in der Konsole ausgeführt werden, gegenseitig beeinflussen (z. B. dass etwas, das in einem Konsolenausführung erstellt wurde, für eine andere Konsolenausführung verwendet wird).

{{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}
