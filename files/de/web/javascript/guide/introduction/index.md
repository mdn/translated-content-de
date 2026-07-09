---
title: Einführung
slug: Web/JavaScript/Guide/Introduction
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

{{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}

Dieses Kapitel führt in JavaScript ein und diskutiert einige seiner grundlegenden Konzepte.

## Was Sie bereits wissen sollten

Dieser Leitfaden setzt voraus, dass Sie folgendes Grundwissen besitzen:

- Allgemeines Verständnis des Internets und des World Wide Web ({{Glossary("World_Wide_Web", "WWW")}}).
- Gute Arbeitskenntnisse von HyperText Markup Language ({{Glossary("HTML", "HTML")}}).
- Einige Programmiererfahrungen. Wenn Sie neu im Programmieren sind, probieren Sie eines der auf der Hauptseite über [JavaScript](/de/docs/Web/JavaScript) verlinkten Tutorials.

## Wo Sie Informationen zu JavaScript finden

Die JavaScript-Dokumentation auf MDN umfasst Folgendes:

- [Dynamisches Skripting mit JavaScript](/de/docs/Learn_web_development/Core/Scripting) bietet strukturierte JavaScript-Leitfäden für Anfänger und führt in grundlegende Konzepte der Programmierung und des Internets ein.
- [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide) (dieser Leitfaden) bietet einen Überblick über die JavaScript-Sprache und ihre Objekte.
- [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) bietet detailliertes Referenzmaterial für JavaScript.

## Was ist JavaScript?

JavaScript ist eine plattformübergreifende, objektorientierte Skriptsprache, die verwendet wird, um Webseiten interaktiv zu machen (z. B. durch komplexe Animationen, anklickbare Schaltflächen, Popup-Menüs usw.). Es gibt auch fortgeschrittenere serverseitige Versionen von JavaScript wie Node.js, die es ermöglichen, einer Website mehr Funktionalität hinzuzufügen als nur das Herunterladen von Dateien (zum Beispiel Echtzeit-Zusammenarbeit zwischen mehreren Computern). Innerhalb einer Host-Umgebung (zum Beispiel eines Webbrowsers) kann JavaScript mit den Objekten seiner Umgebung verbunden werden, um eine programmatische Kontrolle über sie zu bieten.

JavaScript enthält eine Standardbibliothek von Objekten, wie `Array`, `Map` und `Math`, sowie eine Kernmenge von Sprachelementen wie Operatoren, Kontrollstrukturen und Anweisungen. Das Kern-JavaScript kann für eine Vielzahl von Zwecken erweitert werden, indem es mit zusätzlichen Objekten ergänzt wird; zum Beispiel:

- _Clientseitiges JavaScript_ erweitert die Kernsprache, indem es Objekte bereitstellt, um einen Browser und seinen _Document Object Model_ (DOM) zu steuern. Zum Beispiel erlauben clientseitige Erweiterungen einer Anwendung, Elemente auf einem HTML-Formular zu platzieren und auf Benutzereingaben wie Mausklicks, Formulareingaben und Seitennavigation zu reagieren.
- _Serverseitiges JavaScript_ erweitert die Kernsprache, indem es Objekte bereitstellt, die für das Ausführen von JavaScript auf einem Server relevant sind. Zum Beispiel erlauben serverseitige Erweiterungen einer Anwendung, mit einer Datenbank zu kommunizieren, Informationen von einem Aufruf der Anwendung zum nächsten fortzuführen oder Dateioperationen auf einem Server durchzuführen.

Das bedeutet, dass JavaScript im Browser das Aussehen der Webseite (DOM) ändern kann. Und ebenso kann Node.js-JavaScript auf dem Server auf benutzerdefinierte Anfragen reagieren, die durch im Browser ausgeführten Code gesendet werden.

## JavaScript und Java

JavaScript und Java sind in manchen Aspekten ähnlich, unterscheiden sich jedoch in wesentlichen Punkten. Die JavaScript-Sprache ähnelt Java, hat jedoch nicht dessen statische Typisierung und strenge Typprüfung. JavaScript folgt den meisten Java-Ausdruckssyntaxen, Namenskonventionen und grundlegenden Kontrollflussstrukturen, was auch der Grund war, warum es von LiveScript in JavaScript umbenannt wurde.

Im Gegensatz zu Javas Kompilierzeit-System von Klassen, die durch Deklarationen erstellt werden, unterstützt JavaScript ein Laufzeitsystem, das auf einer kleinen Anzahl von Datentypen basiert, die numerische, Boolean- und Zeichenfolgenwerte repräsentieren. JavaScript hat ein prototypbasiertes Objektmodell anstelle des gebräuchlicheren klassenbasierten Objektmodells. Das prototypbasierte Modell bietet dynamische Vererbung; das bedeutet, dass das, was vererbt wird, für einzelne Objekte variieren kann. JavaScript unterstützt auch Funktionen ohne spezielle deklarative Anforderungen. Funktionen können Eigenschaften von Objekten sein, die als lose typisierte Methoden ausgeführt werden.

JavaScript ist im Vergleich zu Java eine sehr freie Sprache. Sie müssen nicht alle Variablen, Klassen und Methoden deklarieren. Sie müssen sich keine Gedanken darüber machen, ob Methoden öffentlich, privat oder geschützt sind, und Sie müssen keine Schnittstellen implementieren. Variablen, Parameter und Rückgabetypen von Funktionen sind nicht explizit typisiert.

Java ist eine klassenbasierte Programmiersprache, die für schnelle Ausführung und Typsicherheit entwickelt wurde. Typsicherheit bedeutet zum Beispiel, dass Sie einen Java-Integer nicht in eine Objektreferenz umwandeln oder durch das Beschädigen des Java-Bytecodes auf privaten Speicher zugreifen können. Javas klassenbasiertes Modell bedeutet, dass Programme ausschließlich aus Klassen und deren Methoden bestehen. Javas Klassenerbschaft und starke Typisierung erfordern in der Regel eng gekoppelte Objekthierarchien. Diese Anforderungen machen das Java-Programmieren komplexer als das JavaScript-Programmieren.

Im Gegensatz dazu stammt JavaScript im Geiste von kleineren, dynamisch typisierten Sprachen wie HyperTalk und dBase ab. Diese Skriptsprachen bieten Programmierwerkzeuge für ein viel breiteres Publikum aufgrund ihrer einfacheren Syntax, spezialisierter eingebauter Funktionalitäten und minimaler Anforderungen an die Objekterstellung.

| JavaScript                                                                                                                                                                                     | Java                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Objektorientiert. Keine Unterscheidung zwischen Objekttypen. Vererbung erfolgt durch den Prototypmechanismus, und Eigenschaften und Methoden können jedem Objekt dynamisch hinzugefügt werden. | Klassenbasiert. Objekte sind in Klassen und Instanzen unterteilt, wobei alle Vererbungen durch die Klassenhierarchie erfolgen. Klassen und Instanzen können keine Eigenschaften oder Methoden dynamisch hinzugefügt bekommen. |
| Variablendatentypen werden nicht deklariert (dynamische Typisierung, lose typisiert).                                                                                                          | Variablendatentypen müssen deklariert werden (statische Typisierung, stark typisiert).                                                                                                                                        |
| Kann nicht automatisch auf die Festplatte schreiben.                                                                                                                                           | Kann automatisch auf die Festplatte schreiben.                                                                                                                                                                                |

## JavaScript und die ECMAScript-Spezifikation

JavaScript ist bei [Ecma International](https://ecma-international.org/) standardisiert — der europäischen Vereinigung zur Standardisierung von Informations- und Kommunikationssystemen (ECMA war früher ein Akronym für die European Computer Manufacturers Association), um eine standardisierte, internationale Programmiersprache basierend auf JavaScript zu liefern. Diese standardisierte Version von JavaScript, genannt ECMAScript, verhält sich in allen Anwendungen, die den Standard unterstützen, gleich. Unternehmen können die offene Standardsprache nutzen, um ihre Implementierung von JavaScript zu entwickeln. Der ECMAScript-Standard ist in der ECMA-262-Spezifikation dokumentiert.

Der ECMA-262-Standard ist auch von der [ISO](https://www.iso.org/home.html) (International Organization for Standardization) als ISO-16262 genehmigt. Sie können die Spezifikation auch auf [der Ecma International-Website](https://ecma-international.org/publications-and-standards/standards/ecma-262/) finden. Die ECMAScript-Spezifikation beschreibt nicht das Document Object Model (DOM), das vom [World Wide Web Consortium (W3C)](https://www.w3.org/) und/oder [WHATWG (Web Hypertext Application Technology Working Group)](https://whatwg.org/) standardisiert ist. Das DOM definiert, wie HTML-Dokumentobjekte Ihrem Skript zugänglich sind. Um einen besseren Eindruck von den verschiedenen Technologien zu bekommen, die beim Programmieren mit JavaScript verwendet werden, lesen Sie bitte den Artikel [Übersicht über JavaScript-Technologien](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview).

### JavaScript-Dokumentation versus ECMAScript-Spezifikation

Die ECMAScript-Spezifikation ist eine Sammlung von Anforderungen zur Implementierung von ECMAScript. Sie ist nützlich, wenn Sie standardkonforme Sprachfunktionen in Ihrer ECMAScript-Implementierung oder -Engine (wie SpiderMonkey in Firefox oder V8 in Chrome) implementieren möchten.

Das ECMAScript-Dokument ist _nicht_ dazu gedacht, Skriptprogrammierern zu helfen. Verwenden Sie die JavaScript-Dokumentation, um Informationen beim Schreiben von Skripten zu erhalten.

Die ECMAScript-Spezifikation verwendet eine Terminologie und Syntax, die einem JavaScript-Programmierer möglicherweise nicht vertraut ist. Obwohl die Beschreibung der Sprache in ECMAScript abweichen kann, bleibt die Sprache selbst dieselbe. JavaScript unterstützt die gesamte Funktionalität, die in der ECMAScript-Spezifikation beschrieben ist.

Die JavaScript-Dokumentation beschreibt Aspekte der Sprache, die für einen JavaScript-Programmierer geeignet sind.

## Erste Schritte mit JavaScript

Um mit JavaScript zu beginnen, benötigen Sie lediglich einen modernen Webbrowser. Aktuelle Versionen von [Firefox](https://www.firefox.com/en-US/), [Chrome](https://www.google.com/chrome/index.html), [Microsoft Edge](https://explore.microsoft.com/en-us/edge) und [Safari](https://www.apple.com/safari/) unterstützen alle die Funktionen, die in diesem Leitfaden besprochen werden.

Ein sehr nützliches Werkzeug zum Erkunden von JavaScript ist die JavaScript-Konsole (manchmal auch als Webkonsole oder einfach die Konsole bezeichnet): Dies ist ein Werkzeug, das es Ihnen ermöglicht, JavaScript einzugeben und es in der aktuellen Seite auszuführen.

Die hier gezeigten Screenshots zeigen die [Firefox-Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/), aber alle modernen Browser bieten eine Konsole, die auf ähnliche Weise funktioniert.

### Öffnen der Konsole

Die genauen Anweisungen zum Öffnen der Konsole variieren von Browser zu Browser:

- [Öffnen der Konsole in Firefox](https://firefox-source-docs.mozilla.org/devtools-user/web_console/#opening-the-web-console)
- [Öffnen der Konsole in Chrome](https://developer.chrome.com/docs/devtools/open)
- [Öffnen der Konsole in Microsoft Edge](https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/)

### Eingabe und Ausführung von JavaScript

Die Konsole erscheint unten im Browserfenster. Am unteren Rand der Konsole befindet sich eine Eingabezeile, in die Sie JavaScript eingeben können, und die Ausgabe erscheint im oberen Bereich:

![Ein Browserfenster mit geöffneter Webkonsole am unteren Rand, das zwei Zeilen Eingabe und Ausgabe enthält. Text kann darunter eingegeben werden.](2019-04-04_00-15-29.png)

Die Konsole funktioniert genau so wie `eval`: Der zuletzt eingegebene Ausdruck wird zurückgegeben. Der Einfachheit halber kann man sich vorstellen, dass jedes Mal, wenn etwas in die Konsole eingegeben wird, es tatsächlich von `console.log` um `eval` herum umgeben ist, etwa so:

```js
console.log(eval("3 + 5"));
```

### Mehrzeilige Eingabe in der Konsole

Standardmäßig wird die Zeichenkette, die Sie eingegeben haben, ausgeführt, wenn Sie <kbd>Enter</kbd> (oder <kbd>Return</kbd>, je nach Tastatur) nach einer Zeile Code drücken. Um eine mehrzeilige Eingabe einzugeben:

- Wenn die von Ihnen eingegebene Zeichenkette unvollständig war (zum Beispiel, wenn Sie `function foo() {` eingegeben haben), behandelt die Konsole <kbd>Enter</kbd> als Zeilenumbruch und lässt Sie eine weitere Zeile eingeben.
- Wenn Sie <kbd>Shift</kbd> gedrückt halten, während Sie <kbd>Enter</kbd> drücken, behandelt die Konsole dies als Zeilenumbruch und lässt Sie eine weitere Zeile eingeben.
- Nur in Firefox können Sie den [Mehrzeilen-Eingabemodus](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#multi-line-mode) aktivieren, in dem Sie mehrere Zeilen in einem Mini-Editor eingeben können, bevor Sie das Ganze ausführen, wenn Sie bereit sind.

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

Drücken Sie <kbd>Enter</kbd>, um zu sehen, wie es in Ihrem Browser entfaltet wird!

## Was kommt als Nächstes

Auf den folgenden Seiten führt Sie dieser Leitfaden in die JavaScript-Syntax und Sprachmerkmale ein, sodass Sie in der Lage sein werden, komplexere Anwendungen zu schreiben.

Denken Sie jedoch daran, immer `(function(){"use strict";` vor Ihrem Code einzuschließen und `})();` ans Ende Ihres Codes anzufügen. Die Artikel über den [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) und {{Glossary("IIFE", "IIFE")}} erklären, was diese tun, aber vorerst können sie wie folgt gedacht werden:

1. Verhindern Sie Semantiken in JavaScript, die Anfänger in Stolpern bringen.
2. Verhindern Sie, dass Code-Snippets, die in der Konsole ausgeführt werden, miteinander interagieren (z. B. wenn etwas, das in einer Konsolenausführung erstellt wurde, in einer anderen Konsolenausführung verwendet wird).

{{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}
