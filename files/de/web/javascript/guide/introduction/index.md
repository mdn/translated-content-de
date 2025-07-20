---
title: Einführung
slug: Web/JavaScript/Guide/Introduction
l10n:
  sourceCommit: 30c9f71e6a6cac4d894688cabf7e4b50af87cfe5
---

{{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}

Dieses Kapitel führt in JavaScript ein und diskutiert einige seiner grundlegenden Konzepte.

## Was Sie bereits wissen sollten

Dieser Leitfaden geht davon aus, dass Sie über folgendes Grundwissen verfügen:

- Ein allgemeines Verständnis des Internets und des World Wide Web ({{Glossary("World_Wide_Web", "WWW")}}).
- Gute Kenntnisse in HyperText Markup Language ({{Glossary("HTML", "HTML")}}).
- Etwas Programmiererfahrung. Wenn Sie neu im Programmieren sind, probieren Sie eines der Tutorials auf der Hauptseite über [JavaScript](/de/docs/Web/JavaScript).

## Wo Sie Informationen zu JavaScript finden

Die JavaScript-Dokumentation auf MDN umfasst Folgendes:

- [Dynamisches Scripting mit JavaScript](/de/docs/Learn_web_development/Core/Scripting) bietet strukturierte JavaScript-Leitfäden für Anfänger und führt grundlegende Konzepte der Programmierung und des Internets ein.
- [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide) (dieser Leitfaden) bietet einen Überblick über die JavaScript-Sprache und ihre Objekte.
- [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) bietet detailliertes Referenzmaterial für JavaScript.

## Was ist JavaScript?

JavaScript ist eine plattformübergreifende, objektorientierte Skriptsprache, die verwendet wird, um Webseiten interaktiv zu machen (z.B. durch komplexe Animationen, klickbare Schaltflächen, Popup-Menüs usw.). Es gibt auch fortgeschrittenere serverseitige Versionen von JavaScript wie Node.js, die es ermöglichen, einer Website mehr Funktionalität hinzuzufügen als nur das Herunterladen von Dateien (wie zum Beispiel Echtzeit-Zusammenarbeit zwischen mehreren Computern). Innerhalb einer Host-Umgebung (zum Beispiel eines Webbrowsers) kann JavaScript mit den Objekten seiner Umgebung verbunden werden, um programmatische Kontrolle über sie zu ermöglichen.

JavaScript enthält eine Standardbibliothek von Objekten wie `Array`, `Map` und `Math`, sowie eine Kernmenge von Sprachelementen wie Operatoren, Kontrollstrukturen und Anweisungen. Core JavaScript kann für eine Vielzahl von Zwecken erweitert werden, indem es mit zusätzlichen Objekten ergänzt wird; zum Beispiel:

- _Client-seitiges JavaScript_ erweitert die Kernsprache, indem es Objekte bereitstellt, um einen Browser und sein _Document Object Model_ (DOM) zu steuern. Beispielsweise erlauben client-seitige Erweiterungen einer Anwendung, Elemente auf einem HTML-Formular zu platzieren und auf Benutzerereignisse wie Mausklicks, Formulareingaben und Seitennavigation zu reagieren.
- _Server-seitiges JavaScript_ erweitert die Kernsprache, indem es Objekte bereitstellt, die für das Ausführen von JavaScript auf einem Server relevant sind. Beispielsweise erlauben serverseitige Erweiterungen einer Anwendung, mit einer Datenbank zu kommunizieren, Kontinuität von Informationen von einem Aufruf der Anwendung zum nächsten aufrechtzuerhalten oder Dateimanipulationen auf einem Server durchzuführen.

Das bedeutet, dass JavaScript im Browser das Aussehen der Webseite (DOM) ändern kann. Und ebenso kann Node.js JavaScript auf dem Server benutzerdefinierte Anfragen beantworten, die durch im Browser ausgeführten Code gesendet werden.

## JavaScript und Java

JavaScript und Java sind in gewisser Weise ähnlich, aber in anderen grundlegend unterschiedlich. Die JavaScript-Sprache ähnelt Java, hat jedoch nicht Javas statische Typisierung und starke Typprüfung. JavaScript folgt den meisten Java-Ausdrückesyntaxen, Namenskonventionen und grundlegenden Kontrollflusskonstrukten, was der Grund war, warum es von LiveScript in JavaScript umbenannt wurde.

Im Gegensatz zu Javas zur Kompilierzeit bestehendem System von Klassen, das durch Deklarationen erstellt wird, unterstützt JavaScript ein Laufzeitsystem, das auf einer kleinen Anzahl von Datentypen basiert, die numerische, boolesche und Zeichenfolgenwerte repräsentieren. JavaScript hat ein prototypenbasiertes Objektmodell anstelle des geläufigeren klassenbasierten Objektmodells. Das prototypenbasierte Modell bietet dynamische Vererbung; das heißt, was vererbt wird, kann für einzelne Objekte variieren. JavaScript unterstützt auch Funktionen ohne besondere deklarative Anforderungen. Funktionen können Eigenschaften von Objekten sein und als lose typisierte Methoden ausgeführt werden.

JavaScript ist im Vergleich zu Java eine sehr freie Sprache. Sie müssen nicht alle Variablen, Klassen und Methoden deklarieren. Sie müssen sich nicht darum kümmern, ob Methoden öffentlich, privat oder geschützt sind, und Sie müssen keine Schnittstellen implementieren. Variablen, Parameter und Rückgabetypen von Funktionen sind nicht explizit typisiert.

Java ist eine klassenbasierte Programmiersprache, die für schnelle Ausführung und Typsicherheit entwickelt wurde. Typsicherheit bedeutet beispielsweise, dass Sie einen Java-Integer nicht in eine Objektreferenz umwandeln oder auf privaten Speicher durch Korruption des Java-Bytecodes zugreifen können. Javas klassenbasiertes Modell bedeutet, dass Programme ausschließlich aus Klassen und ihren Methoden bestehen. Javas Klassenvererbung und starke Typisierung erfordern im Allgemeinen eng gekoppelte Objekt-Hierarchien. Diese Anforderungen machen Java-Programmierung komplexer als JavaScript-Programmierung.

Im Gegensatz dazu stammt JavaScript im Geiste aus einer Reihe kleinerer, dynamisch typisierter Sprachen wie HyperTalk und dBase. Diese Skriptsprachen bieten Programmierwerkzeuge für ein viel breiteres Publikum aufgrund ihrer einfacheren Syntax, spezialisierten eingebauten Funktionalität und minimalen Anforderungen für die Objekterstellung.

| JavaScript                                                                                                                                                                                              | Java                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Objektorientiert. Keine Unterscheidung zwischen Arten von Objekten. Vererbung erfolgt über den Prototypmechanismus, und Eigenschaften und Methoden können zu jedem Objekt dynamisch hinzugefügt werden. | Klassenbasiert. Objekte sind in Klassen und Instanzen unterteilt, und alle Vererbung erfolgt über die Klassenhierarchie. Klassen und Instanzen können keine Eigenschaften oder Methoden dynamisch hinzugefügt bekommen. |
| Variablendatentypen sind nicht deklariert (dynamische Typisierung, lose typisiert).                                                                                                                     | Variablendatentypen müssen deklariert werden (statische Typisierung, stark typisiert).                                                                                                                                  |
| Kann nicht automatisch auf Festplatte schreiben.                                                                                                                                                        | Kann automatisch auf Festplatte schreiben.                                                                                                                                                                              |

## JavaScript und die ECMAScript-Spezifikation

JavaScript wird bei [Ecma International](https://ecma-international.org/) — der Europäischen Vereinigung zur Standardisierung von Informations- und Kommunikationssystemen (ECMA war früher ein Akronym für die European Computer Manufacturers Association) standardisiert, um eine standardisierte, internationale Programmiersprache basierend auf JavaScript zu liefern. Diese standardisierte Version von JavaScript, genannt ECMAScript, verhält sich in allen Anwendungen, die den Standard unterstützen, gleich. Unternehmen können die offene Standard-Sprache verwenden, um ihre Implementierung von JavaScript zu entwickeln. Der ECMAScript-Standard ist in der ECMA-262-Spezifikation dokumentiert.

Der ECMA-262-Standard wird auch von der [ISO](https://www.iso.org/home.html) (International Organization for Standardization) als ISO-16262 genehmigt. Sie können die Spezifikation auch auf [der Ecma International Webseite](https://ecma-international.org/publications-and-standards/standards/ecma-262/) finden. Die ECMAScript-Spezifikation beschreibt nicht das Document Object Model (DOM), das vom [World Wide Web Consortium (W3C)](https://www.w3.org/) und/oder [WHATWG (Web Hypertext Application Technology Working Group)](https://whatwg.org/) standardisiert wird. Das DOM definiert, wie HTML-Dokumentobjekte Ihrem Skript zugänglich gemacht werden. Um einen besseren Überblick über die verschiedenen Technologien zu erhalten, die beim Programmieren mit JavaScript verwendet werden, konsultieren Sie den Artikel [Übersicht über JavaScript-Technologien](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview).

### JavaScript-Dokumentation versus ECMAScript-Spezifikation

Die ECMAScript-Spezifikation ist eine Reihe von Anforderungen zur Implementierung von ECMAScript. Sie ist nützlich, wenn Sie standardkonforme Sprachfunktionen in Ihrer ECMAScript-Implementierung oder -Engine (wie SpiderMonkey in Firefox oder V8 in Chrome) implementieren möchten.

Das ECMAScript-Dokument ist _nicht_ dazu gedacht, Skripterstellern zu helfen. Nutzen Sie die JavaScript-Dokumentation, um Informationen beim Schreiben von Skripten zu erhalten.

Die ECMAScript-Spezifikation verwendet Terminologie und Syntax, die einem JavaScript-Programmierer möglicherweise unbekannt sind. Obwohl die Beschreibung der Sprache in ECMAScript abweichen kann, bleibt die Sprache selbst identisch. JavaScript unterstützt alle in der ECMAScript-Spezifikation umrissenen Funktionalitäten.

Die JavaScript-Dokumentation beschreibt Aspekte der Sprache, die für einen JavaScript-Programmierer relevant sind.

## Einstieg in JavaScript

Um mit JavaScript zu beginnen, benötigen Sie lediglich einen modernen Webbrowser. Neuere Versionen von [Firefox](https://www.firefox.com/en-US/), [Chrome](https://www.google.com/chrome/index.html), [Microsoft Edge](https://www.microsoft.com/en-us/edge) und [Safari](https://www.apple.com/safari/) unterstützen alle Funktionen, die in diesem Leitfaden behandelt werden.

Ein sehr nützliches Werkzeug, um JavaScript zu erkunden, ist die JavaScript-Konsole (gelegentlich auch Webkonsole oder einfach Konsole genannt): Dies ist ein Werkzeug, das es Ihnen ermöglicht, JavaScript einzugeben und es auf der aktuellen Seite auszuführen.

Die hier gezeigten Screenshots zeigen die [Firefox-Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/), aber alle modernen Browser bieten eine Konsole, die auf ähnliche Weise funktioniert.

### Öffnen der Konsole

Die genauen Anweisungen zum Öffnen der Konsole variieren von einem Browser zum anderen:

- [Öffnen der Konsole in Firefox](https://firefox-source-docs.mozilla.org/devtools-user/web_console/#opening-the-web-console)
- [Öffnen der Konsole in Chrome](https://developer.chrome.com/docs/devtools/open)
- [Öffnen der Konsole in Microsoft Edge](https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/)

### Eingeben und Ausführen von JavaScript

Die Konsole erscheint am unteren Rand des Browserfensters. Entlang des unteren Rands der Konsole befindet sich eine Eingabezeile, in die Sie JavaScript eingeben können, und die Ausgabe erscheint im darüberliegenden Bereich:

![Ein Browserfenster mit geöffnetem Webkonsole unten, das zwei Zeilen Eingaben und Ausgaben enthält. Darunter kann Text eingegeben werden.](2019-04-04_00-15-29.png)

Die Konsole funktioniert genau wie `eval`: Der letzte eingegebene Ausdruck wird zurückgegeben. Der Einfachheit halber kann man sich vorstellen, dass jedes Mal, wenn etwas in die Konsole eingegeben wird, es tatsächlich mit `console.log` um `eval` herum versehen ist, so:

```js
console.log(eval("3 + 5"));
```

### Mehrzeilige Eingabe in der Konsole

Standardmäßig wird, wenn Sie <kbd>Enter</kbd> (oder <kbd>Return</kbd>, je nach Tastatur) nach der Eingabe einer Codezeile drücken, der von Ihnen eingegebene String ausgeführt. Um mehrzeilige Eingaben zu tätigen:

- Wenn der eingegebene String unvollständig war (zum Beispiel, Sie haben `function foo() {` getippt), wird die Konsole <kbd>Enter</kbd> als Zeilenumbruch behandeln und Sie können eine weitere Zeile eingeben.
- Wenn Sie <kbd>Shift</kbd> gedrückt halten, während Sie <kbd>Enter</kbd> drücken, behandelt die Konsole dies als Zeilenumbruch und Sie können eine weitere Zeile eingeben.
- Nur in Firefox können Sie den [Mehrzeilen-Eingabemodus](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#multi-line-mode) aktivieren, in dem Sie mehrere Zeilen in einem Mini-Editor eingeben können und das Ganze ausführen, wenn Sie bereit sind.

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

Drücken Sie <kbd>Enter</kbd>, um es in Ihrem Browser zu sehen!

## Was kommt als Nächstes

In den folgenden Seiten führt Sie dieser Leitfaden in die JavaScript-Syntax und Sprachmerkmale ein, sodass Sie in der Lage sein werden, komplexere Anwendungen zu schreiben.

Für jetzt jedoch bedenken Sie, immer `(function(){"use strict";` vor Ihrem Code einzufügen und `})();` am Ende Ihres Codes hinzuzufügen. Die Artikel über [Striktmodus](/de/docs/Web/JavaScript/Reference/Strict_mode) und {{Glossary("IIFE", "IIFE")}} erklären, was diese tun, aber für den Moment können sie vereinfacht gesagt Folgendes leisten:

1. Verhindern, dass Semantiken in JavaScript Neulinge in Schwierigkeiten bringen.
2. Verhindern, dass Codeausschnitte, die in der Konsole ausgeführt werden, miteinander interagieren (z.B. dass etwas, das in einem Konsolenausführung erstellt wurde, für eine andere Konsolenausführung verwendet werden kann).

{{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}
