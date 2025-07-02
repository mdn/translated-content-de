---
title: Einführung
slug: Web/JavaScript/Guide/Introduction
l10n:
  sourceCommit: ab279632b84d201ae9ddd3db3981bf0b01573371
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}

Dieses Kapitel führt in JavaScript ein und diskutiert einige seiner grundlegenden Konzepte.

## Was Sie bereits wissen sollten

Dieser Leitfaden setzt voraus, dass Sie die folgenden Grundkenntnisse haben:

- Ein allgemeines Verständnis des Internets und des World Wide Web ({{Glossary("World_Wide_Web", "WWW")}}).
- Gute Arbeitskenntnisse in HyperText Markup Language ({{Glossary("HTML", "HTML")}}).
- Einige Programmiererfahrung. Wenn Sie neu im Programmieren sind, probieren Sie eines der Tutorials auf der Hauptseite über [JavaScript](/de/docs/Web/JavaScript) aus.

## Wo Sie Informationen zu JavaScript finden

Die JavaScript-Dokumentation auf MDN enthält Folgendes:

- [Dynamisches Skripting mit JavaScript](/de/docs/Learn_web_development/Core/Scripting) bietet strukturierte JavaScript-Leitfäden für Anfänger und führt in grundlegende Konzepte der Programmierung und des Internets ein.
- [JavaScript Guide](/de/docs/Web/JavaScript/Guide) (dieser Leitfaden) bietet einen Überblick über die JavaScript-Sprache und ihre Objekte.
- [JavaScript Referenz](/de/docs/Web/JavaScript/Reference) bietet detailliertes Referenzmaterial zu JavaScript.

## Was ist JavaScript?

JavaScript ist eine plattformübergreifende, objektorientierte Skriptsprache, die verwendet wird, um Webseiten interaktiv zu machen (z.B. komplexe Animationen, klickbare Schaltflächen, Popup-Menüs etc.). Es gibt auch fortschrittlichere serverseitige Versionen von JavaScript wie Node.js, die es Ihnen ermöglichen, einer Website mehr Funktionalität hinzuzufügen, als nur Dateien herunterzuladen (wie z.B. Echtzeit-Zusammenarbeit zwischen mehreren Computern). Innerhalb einer Hostumgebung (zum Beispiel einem Webbrowser) kann JavaScript mit den Objekten seiner Umgebung verbunden werden, um programmgesteuerte Kontrolle über sie bereitzustellen.

JavaScript enthält eine Standardbibliothek von Objekten wie `Array`, `Map` und `Math` und ein Kernelement der Sprache wie Operatoren, Steuerstrukturen und Anweisungen. Das Kern-JavaScript kann für eine Vielzahl von Zwecken erweitert werden, indem es mit zusätzlichen Objekten ergänzt wird. Zum Beispiel:

- _Client-seitiges JavaScript_ erweitert die Kernsprache, indem es Objekte bereitstellt, um einen Browser und sein _Document Object Model_ (DOM) zu steuern. Zum Beispiel ermöglichen clientseitige Erweiterungen einer Anwendung, Elemente auf einem HTML-Formular zu platzieren und auf Benutzerereignisse wie Mausklicks, Formulareingaben und Seiten-Navigation zu reagieren.
- _Server-seitiges JavaScript_ erweitert die Kernsprache, indem es Objekte bereitstellt, die für das Ausführen von JavaScript auf einem Server relevant sind. Zum Beispiel ermöglichen serverseitige Erweiterungen einer Anwendung, mit einer Datenbank zu kommunizieren, die Kontinuität von Informationen von einer Aufrufung der Anwendung zur nächsten bereitzustellen oder Dateioperationen auf einem Server durchzuführen.

Das bedeutet, dass JavaScript im Browser das Aussehen der Webseite (DOM) ändern kann. Ebenso kann Node.js JavaScript auf dem Server auf benutzerdefinierte Anfragen reagieren, die im Browser ausgeführt werden.

## JavaScript und Java

JavaScript und Java sind in mancher Hinsicht ähnlich, unterscheiden sich aber in anderen grundlegend. Die JavaScript-Sprache ähnelt Java, hat aber nicht die statische Typisierung und starke Typprüfung von Java. JavaScript folgt den meisten Java-Ausdruckssyntaxen, Namenskonventionen und grundlegenden Kontrollflusskonstrukten, weshalb es von LiveScript in JavaScript umbenannt wurde.

Im Gegensatz zu Javas Kompilierzeitsystem von Klassen, die durch Deklarationen erstellt werden, unterstützt JavaScript ein Laufzeitsystem, das auf einer kleinen Anzahl von Datentypen basiert, die numerische, boolesche und String-Werte darstellen. JavaScript hat ein prototypbasiertes Objektmodell, anstelle des häufigeren klassenbasierten Objektmodells. Das prototypbasierte Modell bietet dynamische Vererbung; das heißt, was geerbt wird, kann für einzelne Objekte variieren. JavaScript unterstützt auch Funktionen ohne spezielle deklarative Anforderungen. Funktionen können Eigenschaften von Objekten sein und als lose typisierte Methoden ausgeführt werden.

JavaScript ist eine sehr freie Sprache im Vergleich zu Java. Sie müssen nicht alle Variablen, Klassen und Methoden deklarieren. Sie müssen sich nicht darum kümmern, ob Methoden öffentlich, privat oder geschützt sind, und Sie müssen keine Schnittstellen implementieren. Variablen, Parameter und Rückgabetypen von Funktionen sind nicht explizit typisiert.

Java ist eine klassenbasierte Programmiersprache, die für schnelle Ausführung und Typensicherheit entwickelt wurde. Typensicherheit bedeutet beispielsweise, dass Sie keine Java-Integer in einen Objektverweis umwandeln oder auf privaten Speicher zugreifen können, indem Sie den Java-Bytecode beschädigen. Javas klassenbasiertes Modell bedeutet, dass Programme ausschließlich aus Klassen und deren Methoden bestehen. Javas Klassenvererbung und starke Typisierung erfordern in der Regel eng gekoppelte Objekt-Hierarchien. Diese Anforderungen machen die Java-Programmierung komplexer als die JavaScript-Programmierung.

Im Gegensatz dazu stammt JavaScript von einer Reihe kleinerer, dynamisch typisierter Sprachen wie HyperTalk und dBase ab. Diese Skriptsprachen bieten einer viel breiteren Zielgruppe Programmierwerkzeuge aufgrund ihrer einfacheren Syntax, ihrer speziellen integrierten Funktionalität und minimalen Anforderungen an die Objekterstellung.

| JavaScript                                                                                                                                                                                       | Java                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Objektorientiert. Kein Unterschied zwischen Arten von Objekten. Vererbung erfolgt über den Prototypmechanismus, und Eigenschaften und Methoden können jedem Objekt dynamisch hinzugefügt werden. | Klassenbasiert. Objekte sind in Klassen und Instanzen unterteilt, wobei alle Vererbungen über die Klassenhierarchie erfolgen. Klassen und Instanzen können Eigenschaften oder Methoden nicht dynamisch hinzufügen. |
| Variablen-Datentypen müssen nicht deklariert werden (dynamische Typisierung, lose typisiert).                                                                                                    | Variablen-Datentypen müssen deklariert werden (statische Typisierung, stark typisiert).                                                                                                                            |
| Kann nicht automatisch auf die Festplatte schreiben.                                                                                                                                             | Kann automatisch auf die Festplatte schreiben.                                                                                                                                                                     |

## JavaScript und die ECMAScript-Spezifikation

JavaScript wird bei [Ecma International](https://ecma-international.org/) standardisiert — der europäischen Vereinigung zur Standardisierung von Informations- und Kommunikationssystemen (ECMA war früher ein Akronym für die European Computer Manufacturers Association), um eine standardisierte, internationale Programmiersprache basierend auf JavaScript zu liefern. Diese standardisierte Version von JavaScript, genannt ECMAScript, verhält sich in allen Anwendungen, die den Standard unterstützen, gleich. Unternehmen können die offene Standardsprache nutzen, um ihre Implementierung von JavaScript zu entwickeln. Der ECMAScript-Standard ist in der ECMA-262-Spezifikation dokumentiert.

Der ECMA-262-Standard ist auch von der [ISO](https://www.iso.org/home.html) (International Organization for Standardization) als ISO-16262 genehmigt. Sie können die Spezifikation auch auf [der Ecma International Website](https://ecma-international.org/publications-and-standards/standards/ecma-262/) finden. Die ECMAScript-Spezifikation beschreibt nicht das Document Object Model (DOM), das vom [World Wide Web Consortium (W3C)](https://www.w3.org/) und/oder [WHATWG (Web Hypertext Application Technology Working Group)](https://whatwg.org/) standardisiert wird. Das DOM definiert die Art und Weise, wie HTML-Dokumentobjekte Ihrem Skript zugänglich gemacht werden. Um eine bessere Vorstellung von den unterschiedlichen Technologien zu bekommen, die bei der Programmierung mit JavaScript verwendet werden, lesen Sie den Artikel [JavaScript-Technologieübersicht](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview).

### JavaScript-Dokumentation versus die ECMAScript-Spezifikation

Die ECMAScript-Spezifikation ist eine Reihe von Anforderungen zur Implementierung von ECMAScript. Sie ist nützlich, wenn Sie standardkonforme Sprachfunktionen in Ihrer ECMAScript-Implementierung oder -Engine implementieren möchten (wie SpiderMonkey in Firefox oder V8 in Chrome).

Das ECMAScript-Dokument ist _nicht_ dazu gedacht, Skriptprogrammierern zu helfen. Verwenden Sie die JavaScript-Dokumentation, um Informationen beim Schreiben von Skripten zu erhalten.

Die ECMAScript-Spezifikation verwendet Terminologie und Syntax, die einem JavaScript-Programmierer möglicherweise unbekannt sind. Obwohl die Beschreibung der Sprache in ECMAScript abweichen kann, bleibt die Sprache selbst die gleiche. JavaScript unterstützt alle in der ECMAScript-Spezifikation beschriebenen Funktionalitäten.

Die JavaScript-Dokumentation beschreibt Aspekte der Sprache, die für einen JavaScript-Programmierer angemessen sind.

## Erste Schritte mit JavaScript

Um mit JavaScript zu beginnen, benötigen Sie lediglich einen modernen Webbrowser. Aktuelle Versionen von [Firefox](https://www.mozilla.org/en-CA/firefox/new/), [Chrome](https://www.google.com/chrome/index.html), [Microsoft Edge](https://www.microsoft.com/en-us/edge) und [Safari](https://www.apple.com/safari/) unterstützen alle in diesem Leitfaden diskutierten Funktionen.

Ein sehr nützliches Werkzeug zum Erkunden von JavaScript ist die JavaScript-Konsole (manchmal auch Webkonsole oder einfach nur Konsole genannt): Dies ist ein Werkzeug, das es Ihnen ermöglicht, JavaScript einzugeben und es auf der aktuellen Seite auszuführen.

Die hier gezeigten Screenshots zeigen die [Firefox-Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/), aber alle modernen Browser verfügen über eine Konsole, die auf ähnliche Weise funktioniert.

### Öffnen der Konsole

Die genauen Anweisungen zum Öffnen der Konsole variieren je nach Browser:

- [Öffnen der Konsole in Firefox](https://firefox-source-docs.mozilla.org/devtools-user/web_console/#opening-the-web-console)
- [Öffnen der Konsole in Chrome](https://developer.chrome.com/docs/devtools/open)
- [Öffnen der Konsole in Microsoft Edge](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide/console/)

### Eingeben und Ausführen von JavaScript

Die Konsole erscheint am unteren Rand des Browserfensters. Entlang des unteren Randes der Konsole befindet sich eine Eingabezeile, die Sie verwenden können, um JavaScript einzugeben, und die Ausgabe erscheint im Panel darüber:

![Ein Browserfenster mit geöffneter Webkonsole am unteren Rand, das zwei Zeilen mit Eingabe und Ausgabe enthält. Unten kann Text eingegeben werden.](2019-04-04_00-15-29.png)

Die Konsole funktioniert genau wie `eval`: Der zuletzt eingegebene Ausdruck wird zurückgegeben. Zur Vereinfachung kann man sich vorstellen, dass jedes Mal, wenn etwas in die Konsole eingegeben wird, es tatsächlich von `console.log` um `eval` herum umgeben ist, wie folgt:

```js
console.log(eval("3 + 5"));
```

### Mehrzeilige Eingabe in der Konsole

Standardmäßig wird die von Ihnen eingegebene Zeichenkette ausgeführt, wenn Sie nach der Eingabe einer Codezeile <kbd>Enter</kbd> (oder <kbd>Return</kbd>, abhängig von Ihrer Tastatur) drücken. Um mehrzeilige Eingaben einzugeben:

- Wenn die von Ihnen eingegebene Zeichenkette unvollständig war (zum Beispiel, wenn Sie `function foo() {` eingegeben haben), behandelt die Konsole <kbd>Enter</kbd> als Zeilenumbruch und lässt Sie eine weitere Zeile eingeben.
- Wenn Sie beim Drücken von <kbd>Enter</kbd> die <kbd>Shift</kbd>-Taste gedrückt halten, behandelt die Konsole dies als Zeilenumbruch und lässt Sie eine weitere Zeile eingeben.
- Nur in Firefox können Sie den [Mehrzeilen-Eingabemodus](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#multi-line-mode) aktivieren, in dem Sie mehrere Zeilen in einem Mini-Editor eingeben und dann das Ganze ausführen können, wenn Sie bereit sind.

Um mit dem Schreiben von JavaScript zu beginnen, öffnen Sie die Konsole, kopieren Sie den folgenden Code und fügen Sie ihn bei der Eingabeaufforderung ein:

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

Drücken Sie <kbd>Enter</kbd>, um ihn in Ihrem Browser ablaufen zu sehen!

## Was kommt als Nächstes

Auf den folgenden Seiten führt Sie dieser Leitfaden in die JavaScript-Syntax und Sprachfunktionen ein, damit Sie in der Lage sind, komplexere Anwendungen zu schreiben.

Aber jetzt denken Sie daran, immer `(function(){"use strict";` vor Ihrem Code zu ergänzen und `})();` ans Ende Ihres Codes hinzuzufügen. Die Artikel zum [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) und {{Glossary("IIFE", "IIFE")}} erklären, was diese tun, aber fürs Erste können sie als Folgendes betrachtet werden:

1. Verhindern von Semantiken in JavaScript, die Anfänger in die Irre führen.
2. Verhindern, dass Codeausschnitte, die in der Konsole ausgeführt werden, miteinander interagieren (z.B. dass etwas, das in einer Konsolenausführung erstellt wurde, für eine andere Konsolenausführung verwendet wird).

{{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}
