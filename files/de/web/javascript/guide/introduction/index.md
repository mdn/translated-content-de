---
title: Einführung
slug: Web/JavaScript/Guide/Introduction
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}

Dieses Kapitel führt in JavaScript ein und behandelt einige seiner grundlegenden Konzepte.

## Was Sie bereits wissen sollten

Dieser Leitfaden geht davon aus, dass Sie über folgende Grundkenntnisse verfügen:

- Ein allgemeines Verständnis des Internets und des World Wide Web ([WWW](/de/docs/Glossary/World_Wide_Web)).
- Gute Kenntnisse der HyperText Markup Language ([HTML](/de/docs/Glossary/HTML)).
- Einige Programmiererfahrung. Wenn Sie neu im Programmieren sind, versuchen Sie eines der Tutorials auf der Hauptseite über [JavaScript](/de/docs/Web/JavaScript).

## Wo Sie JavaScript-Informationen finden

Die JavaScript-Dokumentation auf MDN umfasst Folgendes:

- [Lernen Sie Webentwicklung](/de/docs/Learn) bietet Informationen für Anfänger und führt grundlegende Konzepte der Programmierung und des Internets ein.
- [JavaScript-Handbuch](/de/docs/Web/JavaScript/Guide) (dieser Leitfaden) bietet einen Überblick über die JavaScript-Sprache und ihre Objekte.
- [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) bietet detailliertes Referenzmaterial für JavaScript.

Wenn Sie neu in JavaScript sind, beginnen Sie mit den Artikeln im [Lernbereich](/de/docs/Learn) und dem [JavaScript-Handbuch](/de/docs/Web/JavaScript/Guide). Sobald Sie ein solides Verständnis der Grundlagen haben, können Sie die [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) nutzen, um mehr Details zu einzelnen Objekten und Anweisungen zu erhalten.

## Was ist JavaScript?

JavaScript ist eine plattformübergreifende, objektorientierte Skriptsprache, die verwendet wird, um Webseiten interaktiv zu machen (z. B. durch komplexe Animationen, klickbare Schaltflächen, Popup-Menüs usw.). Es gibt auch fortgeschrittenere serverseitige Versionen von JavaScript wie Node.js, die es erlauben, einer Website mehr Funktionalität hinzuzufügen als nur das Herunterladen von Dateien (wie z. B. Echtzeit-Zusammenarbeit zwischen mehreren Computern). Innerhalb einer Host-Umgebung (z. B. einem Webbrowser) kann JavaScript mit den Objekten seiner Umgebung verbunden werden, um programmatischen Zugriff darauf zu ermöglichen.

JavaScript enthält eine Standardbibliothek von Objekten, wie `Array`, `Date` und `Math`, und ein Kernset von Sprachelementen, wie Operatoren, Kontrollstrukturen und Anweisungen. Kern-JavaScript kann für verschiedene Zwecke erweitert werden, indem es mit zusätzlichen Objekten ergänzt wird; zum Beispiel:

- _Clientseitiges JavaScript_ erweitert die Kernsprache, indem es Objekte bereitstellt, um einen Browser und sein _Document Object Model_ (DOM) zu steuern. Zum Beispiel erlauben clientseitige Erweiterungen einer Anwendung, Elemente auf einem HTML-Formular zu platzieren und auf Benutzerereignisse wie Mausklicks, Formulareingaben und Seitennavigation zu reagieren.
- _Serverseitiges JavaScript_ erweitert die Kernsprache, indem es Objekte bereitstellt, die für das Ausführen von JavaScript auf einem Server relevant sind. Zum Beispiel erlauben serverseitige Erweiterungen einer Anwendung, mit einer Datenbank zu kommunizieren, die Kontinuität von Informationen von einem Aufruf der Anwendung zum nächsten zu gewährleisten oder Dateimanipulationen auf einem Server durchzuführen.

Dies bedeutet, dass JavaScript im Browser das Aussehen der Webseite (DOM) ändern kann. Und ebenso kann Node.js JavaScript auf dem Server auf benutzerdefinierte Anfragen reagieren, die durch im Browser ausgeführten Code gesendet werden.

## JavaScript und Java

JavaScript und Java sind in gewisser Weise ähnlich, unterscheiden sich jedoch in einigen grundlegenden Aspekten. Die JavaScript-Sprache ähnelt Java, hat jedoch nicht Javas statische Typisierung und starke Typprüfung. JavaScript folgt den meisten Ausdrücksyntaxes von Java, Namenskonventionen und grundlegenden Kontrollflusskonstrukten, was der Grund dafür war, dass es von LiveScript in JavaScript umbenannt wurde.

Im Gegensatz zum Kompilierungszeitklassen-System von Java, das durch Deklarationen aufgebaut wird, unterstützt JavaScript ein Laufzeitsystem, das auf einer kleinen Anzahl von Datentypen basiert, die numerische, boolesche und Zeichenfolgenwerte darstellen. JavaScript hat ein prototypenbasiertes Objektsystem anstelle des verbreiteteren klassenbasierten Objektsystems. Das prototypenbasierte Modell bietet dynamische Vererbung; das heißt, was geerbt wird, kann für einzelne Objekte variieren. JavaScript unterstützt auch Funktionen ohne spezielle deklarative Anforderungen. Funktionen können Eigenschaften von Objekten sein und als lose typisierte Methoden ausgeführt werden.

JavaScript ist im Vergleich zu Java eine sehr freiformatige Sprache. Sie müssen nicht alle Variablen, Klassen und Methoden deklarieren. Sie müssen sich nicht darum kümmern, ob Methoden öffentlich, privat oder geschützt sind, und Sie müssen keine Schnittstellen implementieren. Variablen, Parameter und Rückgabetypen von Funktionen sind nicht explizit typisiert.

Java ist eine klassenbasierte Programmiersprache, die für schnelle Ausführung und Typsicherheit entwickelt wurde. Typsicherheit bedeutet zum Beispiel, dass Sie in Java keine Ganzzahl in eine Objektreferenz umwandeln oder auf privaten Speicher zugreifen können, indem Sie den Java-Bytecode beschädigen. Javas klassenbasiertes Modell bedeutet, dass Programme ausschließlich aus Klassen und deren Methoden bestehen. Javas Klassenvererbung und starke Typisierung erfordern in der Regel eng gekoppelte Objekthierarchien. Diese Anforderungen machen die Java-Programmierung komplexer als die JavaScript-Programmierung.

Im Gegensatz dazu stammt JavaScript in der Geisteshaltung von einer Reihe kleinerer, dynamisch typisierter Sprachen wie HyperTalk und dBASE ab. Diese Skriptsprachen bieten Programmierwerkzeuge für ein viel breiteres Publikum aufgrund ihrer einfacheren Syntax, spezialisierten eingebauten Funktionalität und minimalen Anforderungen an die Objekterstellung.

| JavaScript                                                                                                                                                                                      | Java                                                                                                                                                                                                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Objektorientiert. Keine Unterscheidung zwischen Objektarten. Vererbung erfolgt durch den Prototyp-Mechanismus, und Eigenschaften und Methoden können jedem Objekt dynamisch hinzugefügt werden. | Klassenbasiert. Objekte sind in Klassen und Instanzen unterteilt, wobei alle Vererbungen durch die Klassenhierarchie erfolgen. Klassen und Instanzen können keine Eigenschaften oder Methoden dynamisch hinzufügen. |
| Variable Datentypen werden nicht deklariert (dynamische Typisierung, lose typisiert).                                                                                                           | Variable Datentypen müssen deklariert werden (statische Typisierung, streng typisiert).                                                                                                                             |
| Kann nicht automatisch auf die Festplatte schreiben.                                                                                                                                            | Kann automatisch auf die Festplatte schreiben.                                                                                                                                                                      |

## JavaScript und die ECMAScript-Spezifikation

JavaScript wird bei [Ecma International](https://ecma-international.org/) standardisiert — der europäischen Vereinigung zur Standardisierung von Informations- und Kommunikationssystemen (ECMA war früher ein Akronym für die European Computer Manufacturers Association), um eine standardisierte, internationale Programmiersprache auf der Basis von JavaScript bereitzustellen. Diese standardisierte Version von JavaScript, genannt ECMAScript, verhält sich in allen Anwendungen, die den Standard unterstützen, gleich. Unternehmen können die offene Standardsprache nutzen, um ihre Implementierung von JavaScript zu entwickeln. Der ECMAScript-Standard ist in der Spezifikation ECMA-262 dokumentiert.

Der ECMA-262-Standard wird auch von der [ISO](https://www.iso.org/home.html) (International Organization for Standardization) als ISO-16262 genehmigt. Sie können die Spezifikation auch auf [der Webseite von Ecma International](https://ecma-international.org/publications-and-standards/standards/ecma-262/) finden. Die ECMAScript-Spezifikation beschreibt nicht das Document Object Model (DOM), das vom [World Wide Web Consortium (W3C)](https://www.w3.org/) und/oder [WHATWG (Web Hypertext Application Technology Working Group)](https://whatwg.org/) standardisiert wird. Das DOM definiert die Art und Weise, wie HTML-Dokumentobjekte Ihrem Skript ausgesetzt werden. Um ein besseres Verständnis der verschiedenen Technologien zu bekommen, die beim Programmieren mit JavaScript verwendet werden, konsultieren Sie den Artikel [JavaScript-Technologie-Übersicht](/de/docs/Web/JavaScript/JavaScript_technologies_overview).

### JavaScript-Dokumentation versus die ECMAScript-Spezifikation

Die ECMAScript-Spezifikation ist eine Reihe von Anforderungen zur Implementierung von ECMAScript. Sie ist nützlich, wenn Sie standardskonforme Sprachfunktionen in Ihrer ECMAScript-Implementierung oder -Engine (wie SpiderMonkey in Firefox oder V8 in Chrome) implementieren möchten.

Das ECMAScript-Dokument ist _nicht_ dazu gedacht, Skriptprogrammierer zu unterstützen. Verwenden Sie die JavaScript-Dokumentation, um Informationen beim Schreiben von Skripten zu erhalten.

Die ECMAScript-Spezifikation verwendet Terminologie und Syntax, die einem JavaScript-Programmierer möglicherweise unbekannt sind. Obwohl die Beschreibung der Sprache in ECMAScript unterschiedlich sein mag, bleibt die Sprache selbst gleich. JavaScript unterstützt alle in der ECMAScript-Spezifikation beschriebenen Funktionen.

Die JavaScript-Dokumentation beschreibt Aspekte der Sprache, die für einen JavaScript-Programmierer geeignet sind.

## Einstieg in JavaScript

Um mit JavaScript zu beginnen, benötigen Sie lediglich einen modernen Webbrowser. Aktuelle Versionen von [Firefox](https://www.mozilla.org/en-CA/firefox/new/), [Chrome](https://www.google.com/chrome/index.html), [Microsoft Edge](https://www.microsoft.com/en-us/edge) und [Safari](https://www.apple.com/safari/) unterstützen alle in diesem Leitfaden besprochenen Funktionen.

Ein sehr nützliches Werkzeug, um JavaScript zu erkunden, ist die JavaScript-Konsole (manchmal auch Webkonsole oder einfach nur Konsole genannt): Dies ist ein Werkzeug, mit dem Sie JavaScript eingeben und auf der aktuellen Seite ausführen können.

Die hier gezeigten Screenshots zeigen die [Firefox-Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/), aber alle modernen Browser werden mit einer Konsole geliefert, die ähnlich funktioniert.

### Die Konsole öffnen

Die genauen Anweisungen zum Öffnen der Konsole variieren von Browser zu Browser:

- [Konsole in Firefox öffnen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/#opening-the-web-console)
- [Konsole in Chrome öffnen](https://developer.chrome.com/docs/devtools/open)
- [Konsole in Microsoft Edge öffnen](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/)

### JavaScript eingeben und ausführen

Die Konsole erscheint am unteren Rand des Browserfensters. Entlang des unteren Randes der Konsole befindet sich eine Eingabezeile, die Sie nutzen können, um JavaScript einzugeben, und die Ausgabe erscheint im Bedienpanel darüber:

![Ein Browserfenster mit geöffneter Webkonsole am unteren Rand, das zwei Eingabezeilen und ihre Ausgaben enthält. Text kann darunter eingegeben werden.](2019-04-04_00-15-29.png)

Die Konsole funktioniert genau wie `eval`: Der letzte eingegebene Ausdruck wird zurückgegeben. Zur Vereinfachung kann man sich vorstellen, dass jedes Mal, wenn etwas in die Konsole eingegeben wird, es tatsächlich von `console.log` um `eval` herum umgeben ist, wie folgt:

```js
console.log(eval("3 + 5"));
```

### Mehrzeilige Eingabe in der Konsole

Standardmäßig wird, wenn Sie <kbd>Enter</kbd> (oder <kbd>Return</kbd>, je nach Tastatur) nach der Eingabe einer Zeile Code drücken, der von Ihnen eingegebene String ausgeführt. Um mehrzeilig einzugeben:

- War der von Ihnen eingegebene String unvollständig (z.B. wenn Sie `function foo() {` eingetippt haben), dann behandelt die Konsole <kbd>Enter</kbd> als Zeilenumbruch und lässt Sie eine weitere Zeile eingeben.
- Wenn Sie <kbd>Shift</kbd> gedrückt halten, während Sie <kbd>Enter</kbd> drücken, behandelt die Konsole dies als Zeilenumbruch und lässt Sie eine weitere Zeile eingeben.
- Nur in Firefox können Sie den [Mehrzeileneingabemodus](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#multi-line-mode) aktivieren, in dem Sie mehrere Zeilen in einem Mini-Editor eingeben und das Ganze dann ausführen können, wenn Sie bereit sind.

Um mit dem Schreiben von JavaScript zu beginnen, öffnen Sie die Konsole, kopieren Sie den folgenden Code und fügen Sie ihn am Prompt ein:

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

Drücken Sie <kbd>Enter</kbd>, um es in Ihrem Browser abzuspielen!

## Was kommt als Nächstes

Auf den folgenden Seiten stellt Ihnen dieser Leitfaden die JavaScript-Syntax- und Sprachfunktionen vor, sodass Sie in der Lage sein werden, komplexere Anwendungen zu schreiben.

Aber für jetzt denken Sie daran, immer `(function(){"use strict";` vor Ihren Code einzuschließen, und fügen Sie `})();` am Ende Ihres Codes hinzu. Die Artikel [Strict Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) und [IIFE](/de/docs/Glossary/IIFE) erklären, was dies bewirkt, aber vorerst können sie als Folgendes betrachtet werden:

1. Verhindern von Semantik in JavaScript, die Anfänger austrickst.
2. Verhindern, dass Codeschnipsel, die in der Konsole ausgeführt werden, miteinander interagieren (z.B., dass etwas, was in einer Konsolenausführung erstellt wird, für eine andere Konsolenausführung verwendet wird).

{{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}
