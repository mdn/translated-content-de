---
title: Einführung
slug: Web/JavaScript/Guide/Introduction
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}

Dieses Kapitel führt in JavaScript ein und behandelt einige seiner grundlegenden Konzepte.

## Was Sie bereits wissen sollten

Dieser Leitfaden geht davon aus, dass Sie über folgendes Grundwissen verfügen:

- Ein allgemeines Verständnis des Internets und des World Wide Web ([WWW](/de/docs/Glossary/World_Wide_Web)).
- Gute Kenntnisse in Hypertext Markup Language ([HTML](/de/docs/Glossary/HTML)).
- Etwas Programmiererfahrung. Wenn Sie neu im Programmieren sind, versuchen Sie eines der Tutorials auf der Hauptseite über [JavaScript](/de/docs/Web/JavaScript).

## Wo Sie JavaScript-Informationen finden

Die JavaScript-Dokumentation auf MDN umfasst Folgendes:

- [Learn Web Development](/de/docs/Learn) bietet Informationen für Anfänger und führt grundlegende Konzepte der Programmierung und des Internets ein.
- [JavaScript Guide](/de/docs/Web/JavaScript/Guide) (dieser Leitfaden) bietet einen Überblick über die JavaScript-Sprache und ihre Objekte.
- [JavaScript Reference](/de/docs/Web/JavaScript/Reference) bietet detaillierte Referenzmaterialien für JavaScript.

Wenn Sie neu in JavaScript sind, beginnen Sie mit den Artikeln im [Lernbereich](/de/docs/Learn) und im [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide). Sobald Sie die Grundlagen gut beherrschen, können Sie die [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) nutzen, um mehr Details zu einzelnen Objekten und Anweisungen zu erhalten.

## Was ist JavaScript?

JavaScript ist eine plattformübergreifende, objektorientierte Skriptsprache, die verwendet wird, um Webseiten interaktiv zu gestalten (z.B. komplexe Animationen, anklickbare Schaltflächen, Popup-Menüs usw.). Es gibt auch fortgeschrittenere serverseitige Versionen von JavaScript, wie Node.js, die es ermöglichen, einer Website mehr Funktionalität hinzuzufügen als nur das Herunterladen von Dateien (wie die Echtzeit-Zusammenarbeit zwischen mehreren Computern). Innerhalb einer Hostumgebung (zum Beispiel eines Webbrowsers) kann JavaScript mit den Objekten seiner Umgebung verbunden werden, um eine programmatische Steuerung über diese zu ermöglichen.

JavaScript enthält eine Standardbibliothek von Objekten, wie `Array`, `Date` und `Math`, sowie eine Kerngruppe von Sprachelementen wie Operatoren, Kontrollstrukturen und Anweisungen. Kern-JavaScript kann für eine Vielzahl von Zwecken erweitert werden, indem es mit zusätzlichen Objekten ergänzt wird; zum Beispiel:

- _Clientseitiges JavaScript_ erweitert die Kernsprache, indem Objekte bereitgestellt werden, um einen Browser und dessen _Document Object Model_ (DOM) zu steuern. Zum Beispiel ermöglichen clientseitige Erweiterungen einer Anwendung, Elemente auf einem HTML-Formular zu platzieren und auf Benutzerereignisse wie Mausklicks, Formulareingaben und Seitennavigation zu reagieren.
- _Serverseitiges JavaScript_ erweitert die Kernsprache, indem Objekte bereitgestellt werden, die für das Ausführen von JavaScript auf einem Server relevant sind. Zum Beispiel ermöglichen serverseitige Erweiterungen einer Anwendung, mit einer Datenbank zu kommunizieren, Kontinuität von Informationen bei mehreren Aufrufen der Anwendung zu gewährleisten oder Dateimanipulationen auf einem Server durchzuführen.

Das bedeutet, dass JavaScript im Browser ändern kann, wie die Webseite (DOM) aussieht. Und ebenso kann Node.js-JavaScript auf dem Server auf benutzerdefinierte Anfragen reagieren, die von im Browser ausgeführtem Code gesendet werden.

## JavaScript und Java

JavaScript und Java sind in gewisser Hinsicht ähnlich, unterscheiden sich jedoch grundlegend in anderen. Die JavaScript-Sprache ähnelt Java, besitzt jedoch nicht dessen statische Typisierung und starke Typsicherheit. JavaScript folgt den meisten Java-Ausdruckssyntaxen, Namenskonventionen und grundlegenden Kontrollflusskonstrukten, was der Grund war, warum es von LiveScript in JavaScript umbenannt wurde.

Im Gegensatz zu Javas Kompilierzeitsystem von Klassen, die durch Deklarationen aufgebaut werden, unterstützt JavaScript ein Laufzeitsystem, das auf einer kleinen Anzahl von Datentypen basiert, die numerische, Boolesche und Zeichenkettenwerte darstellen. JavaScript hat ein Prototyp-basiertes Objektmodell anstelle eines üblicheren Klassen-basierten Objektmodells. Das Prototyp-basierte Modell bietet dynamische Vererbung; das heißt, was vererbt wird, kann für einzelne Objekte variieren. JavaScript unterstützt auch Funktionen ohne spezielle deklarative Anforderungen. Funktionen können Eigenschaften von Objekten sein, die als locker typisierte Methoden ausgeführt werden.

JavaScript ist eine sehr freie Sprache im Vergleich zu Java. Sie müssen nicht alle Variablen, Klassen und Methoden deklarieren. Sie müssen sich nicht darum kümmern, ob Methoden öffentlich, privat oder geschützt sind, und Sie müssen keine Schnittstellen implementieren. Variablen, Parameter und Rückgabetypen von Funktionen sind nicht explizit typisiert.

Java ist eine klassenbasierte Programmiersprache, die für schnelle Ausführung und Typsicherheit entwickelt wurde. Typsicherheit bedeutet zum Beispiel, dass Sie keinen Java-Integer in eine Objekt-Referenz umwandeln oder auf privaten Speicher zugreifen können, indem Sie den Java-Bytecode beschädigen. Javas klassenbasiertes Modell bedeutet, dass Programme ausschließlich aus Klassen und ihren Methoden bestehen. Javas Klassenvererbung und starke Typisierung erfordern in der Regel eng gekoppelten Objekt-Hierarchien. Diese Anforderungen machen die Java-Programmierung komplexer als die JavaScript-Programmierung.

Im Gegensatz dazu stammt JavaScript im Geiste von einer Reihe kleinerer, dynamisch typisierter Sprachen wie HyperTalk und dBASE ab. Diese Skriptsprachen bieten eine viel breitere Zielgruppe Programmierwerkzeuge wegen ihrer einfacheren Syntax, spezialisierten eingebauten Funktionalität und minimalen Anforderungen an die Objekterstellung.

| JavaScript                                                                                                                                                                   | Java                                                                                                                                                                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Objektorientiert. Keine Unterscheidung zwischen Objekttypen. Vererbung erfolgt durch den Prototyp-Mechanismus, und Eigenschaften und Methoden können jedem Objekt dynamisch hinzugefügt werden. | Klassenbasiert. Objekte sind in Klassen und Instanzen unterteilt, wobei alle Vererbungen durch die Klassenhierarchie erfolgen. Klassen und Instanzen können keine Eigenschaften oder Methoden dynamisch hinzufügen. |
| Variablen-Datentypen werden nicht deklariert (dynamische Typisierung, locker typisiert).                                                                                      | Variablen-Datentypen müssen deklariert werden (statische Typisierung, stark typisiert).                                                                                                  |
| Kann nicht automatisch auf Festplatte schreiben.                                                                                                                                  | Kann automatisch auf Festplatte schreiben.                                                                                                                                                 |

## JavaScript und die ECMAScript-Spezifikation

JavaScript ist bei [Ecma International](https://ecma-international.org/) standardisiert — der europäischen Vereinigung zur Standardisierung von Informations- und Kommunikationssystemen (ECMA war früher ein Akronym für die European Computer Manufacturers Association), um eine standardisierte, internationale Programmiersprache basierend auf JavaScript zu liefern. Diese standardisierte Version von JavaScript, genannt ECMAScript, verhält sich in allen Anwendungen, die den Standard unterstützen, gleich. Unternehmen können die offene Standard-Sprache nutzen, um ihre Implementierung von JavaScript zu entwickeln. Der ECMAScript-Standard ist in der Spezifikation ECMA-262 dokumentiert.

Der ECMA-262-Standard ist auch von der [ISO](https://www.iso.org/home.html) (Internationale Organisation für Normung) als ISO-16262 genehmigt. Sie können die Spezifikation auch auf der [Website von Ecma International](https://ecma-international.org/publications-and-standards/standards/ecma-262/) finden. Die ECMAScript-Spezifikation beschreibt nicht das Document Object Model (DOM), das vom [World Wide Web Consortium (W3C)](https://www.w3.org/) und/oder [WHATWG (Web Hypertext Application Technology Working Group)](https://whatwg.org/) standardisiert wird. Das DOM definiert die Art und Weise, wie HTML-Dokumentobjekte Ihrem Skript zugänglich gemacht werden. Um einen besseren Überblick über die verschiedenen Technologien zu erhalten, die bei der Programmierung mit JavaScript verwendet werden, konsultieren Sie den Artikel [JavaScript-Technologieübersicht](/de/docs/Web/JavaScript/JavaScript_technologies_overview).

### JavaScript-Dokumentation versus ECMAScript-Spezifikation

Die ECMAScript-Spezifikation ist eine Reihe von Anforderungen zur Implementierung von ECMAScript. Sie ist nützlich, wenn Sie standardskonforme Sprachfunktionen in Ihrer ECMAScript-Implementierung oder -Engine (wie SpiderMonkey in Firefox oder V8 in Chrome) implementieren möchten.

Das ECMAScript-Dokument ist _nicht_ dazu gedacht, Skript-Programmierern zu helfen. Verwenden Sie die JavaScript-Dokumentation für Informationen zum Schreiben von Skripten.

Die ECMAScript-Spezifikation verwendet Terminologie und Syntax, die JavaScript-Programmierern möglicherweise unbekannt sind. Obwohl die Beschreibung der Sprache in ECMAScript unterschiedlich sein kann, bleibt die Sprache selbst gleich. JavaScript unterstützt alle in der ECMAScript-Spezifikation umrissenen Funktionen.

Die JavaScript-Dokumentation beschreibt Aspekte der Sprache, die für einen JavaScript-Programmierer geeignet sind.

## Erste Schritte mit JavaScript

Um mit JavaScript zu beginnen, benötigen Sie nur einen modernen Webbrowser. Aktuelle Versionen von [Firefox](https://www.mozilla.org/en-CA/firefox/new/), [Chrome](https://www.google.com/chrome/index.html), [Microsoft Edge](https://www.microsoft.com/en-us/edge) und [Safari](https://www.apple.com/safari/) unterstützen alle die in diesem Leitfaden erläuterten Funktionen.

Ein sehr nützliches Werkzeug zum Erkunden von JavaScript ist die JavaScript-Konsole (manchmal auch Web-Konsole oder einfach die Konsole genannt): Ein Werkzeug, das Ihnen ermöglicht, JavaScript einzugeben und es auf der aktuellen Seite auszuführen.

Die hier gezeigten Screenshots stammen von der [Firefox-Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/), aber alle modernen Browser enthalten eine Konsole, die auf ähnliche Weise funktioniert.

### Öffnen der Konsole

Die genauen Anweisungen zum Öffnen der Konsole variieren von Browser zu Browser:

- [Öffnen der Konsole in Firefox](https://firefox-source-docs.mozilla.org/devtools-user/web_console/#opening-the-web-console)
- [Öffnen der Konsole in Chrome](https://developer.chrome.com/docs/devtools/open)
- [Öffnen der Konsole in Microsoft Edge](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/)

### Eingeben und Ausführen von JavaScript

Die Konsole erscheint am unteren Rand des Browserfensters. Entlang des unteren Randes der Konsole befindet sich eine Eingabezeile, die Sie zum Eingeben von JavaScript verwenden können, und die Ausgabe erscheint im darüber liegenden Bereich:

![Ein Browserfenster mit geöffneter Webkonsole unten, die zwei Zeilen Eingabe und Ausgabe enthält. Text kann darunter eingegeben werden.](2019-04-04_00-15-29.png)

Die Konsole funktioniert genau wie `eval`: Der zuletzt eingegebene Ausdruck wird zurückgegeben. Zur Vereinfachung kann man sich vorstellen, dass jedes Mal, wenn etwas in die Konsole eingegeben wird, es tatsächlich von `console.log` um `eval` herum umgeben ist, etwa so:

```js
console.log(eval("3 + 5"));
```

### Mehrzeilige Eingabe in der Konsole

Standardmäßig wird, wenn Sie <kbd>Enter</kbd> (bzw. <kbd>Return</kbd>, je nach Tastatur) nach dem Eingeben einer Codezeile drücken, die von Ihnen eingegebene Zeichenkette ausgeführt. Um mehrzeilige Eingaben zu machen:

- Wenn die von Ihnen eingegebene Zeichenkette unvollständig war (zum Beispiel haben Sie `function foo() {` eingegeben), behandelt die Konsole <kbd>Enter</kbd> als Zeilenumbruch und lässt Sie eine weitere Zeile eingeben.
- Wenn Sie <kbd>Shift</kbd> gedrückt halten, während Sie <kbd>Enter</kbd> drücken, behandelt die Konsole dies als Zeilenumbruch und lässt Sie eine weitere Zeile eingeben.
- Nur in Firefox können Sie den [Mehrzeilige-Eingabemodus](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#multi-line-mode) aktivieren, in dem Sie mehrere Zeilen in einem Mini-Editor eingeben können und dann die gesamte Eingabe ausführen, wenn Sie fertig sind.

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

Drücken Sie <kbd>Enter</kbd>, um zu sehen, wie er in Ihrem Browser abläuft!

## Was als Nächstes

In den folgenden Seiten führt Sie dieser Leitfaden in die JavaScript-Syntax und Sprachmerkmale ein, sodass Sie in der Lage sein werden, komplexere Anwendungen zu schreiben.

Erinnern Sie sich jetzt daran, vor Ihrem Code immer `(function(){"use strict";` hinzuzufügen und `})();` am Ende Ihres Codes hinzuzufügen. Die Artikel über den [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) und [IIFE](/de/docs/Glossary/IIFE) erklären, was diese bewirken, aber im Moment können sie als das Folgende gedacht werden:

1. Sie verhindern Semantiken in JavaScript, die Anfänger in Schwierigkeiten bringen.
2. Sie verhindern, dass Code-Snippets, die in der Konsole ausgeführt werden, miteinander interagieren (z.B., dass etwas, das in einer Konsolenausführung erstellt wurde, für eine andere Konsolenausführung verwendet wird).

{{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}
