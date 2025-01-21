---
title: Einführung
slug: Web/JavaScript/Guide/Introduction
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}

Dieses Kapitel führt in JavaScript ein und bespricht einige seiner grundlegenden Konzepte.

## Was Sie bereits wissen sollten

Dieser Leitfaden setzt folgendes Grundwissen voraus:

- Ein allgemeines Verständnis des Internets und des World Wide Web ({{Glossary("World_Wide_Web", "WWW")}}).
- Gute Kenntnisse der HyperText Markup Language ({{Glossary("HTML", "HTML")}}).
- Etwas Programmiererfahrung. Wenn Sie neu im Programmieren sind, probieren Sie eines der Tutorials auf der Hauptseite zu [JavaScript](/de/docs/Web/JavaScript) aus.

## Wo man Informationen über JavaScript findet

Die JavaScript-Dokumentation auf MDN umfasst Folgendes:

- [Dynamisches Skripting mit JavaScript](/de/docs/Learn_web_development/Core/Scripting) bietet strukturierte JavaScript-Leitfäden für Anfänger und führt in grundlegende Programmier- und Internetkonzepte ein.
- [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide) (dieser Leitfaden) bietet einen Überblick über die JavaScript-Sprache und ihre Objekte.
- [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) bietet detailliertes Referenzmaterial für JavaScript.

## Was ist JavaScript?

JavaScript ist eine plattformübergreifende, objektorientierte Skriptsprache, die verwendet wird, um Webseiten interaktiv zu machen (zum Beispiel komplexe Animationen, anklickbare Schaltflächen, Popup-Menüs etc.). Es gibt auch fortgeschrittene serverseitige Versionen von JavaScript, wie Node.js, die es ermöglichen, einer Website mehr Funktionalität hinzuzufügen als nur Dateien herunterzuladen (wie Echtzeit-Kollaboration zwischen mehreren Computern). Innerhalb einer Hostumgebung (zum Beispiel eines Webbrowsers) kann JavaScript mit den Objekten seiner Umgebung verknüpft werden, um sie programmatisch zu steuern.

JavaScript enthält eine Standardbibliothek von Objekten, wie `Array`, `Map` und `Math`, sowie einen Kern aus Sprachelementen wie Operatoren, Kontrollstrukturen und Anweisungen. Das Kern-JavaScript kann für eine Vielzahl von Zwecken erweitert werden, indem zusätzliche Objekte hinzugefügt werden, zum Beispiel:

- _Clientseitiges JavaScript_ erweitert die Kernsprache, indem es Objekte zur Steuerung eines Browsers und seines _Document Object Model_ (DOM) bereitstellt. Zum Beispiel ermöglichen clientseitige Erweiterungen einer Anwendung, Elemente auf ein HTML-Formular zu platzieren und auf Benutzerereignisse wie Mausklicks, Formulareingaben und Seitennavigation zu reagieren.
- _Serverseitiges JavaScript_ erweitert die Kernsprache, indem es Objekte bereitstellt, die für das Ausführen von JavaScript auf einem Server relevant sind. Zum Beispiel ermöglichen serverseitige Erweiterungen einer Anwendung, mit einer Datenbank zu kommunizieren, Informationen von einem Aufruf der Anwendung zum nächsten zu speichern oder Dateimanipulationen auf einem Server durchzuführen.

Das bedeutet, dass JavaScript im Browser die Art und Weise ändern kann, wie die Webseite (DOM) aussieht. Und ebenso kann Server-JavaScript in Node.js auf benutzerdefinierte Anfragen reagieren, die von Code im Browser gesendet werden.

## JavaScript und Java

JavaScript und Java sind in mancher Hinsicht ähnlich, in anderen jedoch grundsätzlich verschieden. Die JavaScript-Sprache ähnelt Java, weist jedoch nicht Javas statische Typisierung und strenge Typüberprüfung auf. JavaScript folgt den meisten Java-Ausdruckssyntaxen, Namenskonventionen und grundlegenden Steuerfluss-Konstrukten, was der Grund war, warum es von LiveScript in JavaScript umbenannt wurde.

Im Gegensatz zum Kompilierungssystem von Java mit Klassen, die durch Deklarationen erstellt werden, unterstützt JavaScript ein Laufzeitsystem, das auf einer kleinen Anzahl von Datentypen basiert, die numerische, boolesche und String-Werte darstellen. JavaScript hat ein prototypenbasiertes Objektmodell anstelle des häufigeren klassenbasierten Objektmodells. Das prototypenbasierte Modell bietet dynamische Vererbung; das heißt, was vererbt wird, kann für einzelne Objekte variieren. JavaScript unterstützt auch Funktionen ohne spezielle deklarative Anforderungen. Funktionen können Eigenschaften von Objekten sein, die als lose typisierte Methoden ausgeführt werden.

JavaScript ist eine sehr freizügige Sprache im Vergleich zu Java. Sie müssen nicht alle Variablen, Klassen und Methoden deklarieren. Sie müssen sich nicht darum kümmern, ob Methoden öffentlich, privat oder geschützt sind, und Sie müssen keine Schnittstellen implementieren. Variablen, Parameter und Rückgabetypen von Funktionen sind nicht explizit typisiert.

Java ist eine klassenbasierte Programmiersprache, die für schnelle Ausführung und Typsicherheit konzipiert ist. Typsicherheit bedeutet z.B., dass Sie einen Java-Integer nicht in eine Objektreferenz umwandeln oder auf privaten Speicher zugreifen können, indem Sie den Java-Bytecode beschädigen. Javas klassenbasiertes Modell bedeutet, dass Programme ausschließlich aus Klassen und ihren Methoden bestehen. Javas Klassenvererbung und starke Typisierung erfordern in der Regel eng gekuppelte Objekthierarchien. Diese Anforderungen machen das Programmieren in Java komplexer als in JavaScript.

Im Gegensatz dazu stammt JavaScript im Geiste von einer Reihe kleinerer, dynamisch typisierter Sprachen wie HyperTalk und dBase ab. Diese Skriptsprachen bieten einer viel breiteren Zielgruppe Programmierwerkzeuge aufgrund ihrer einfacheren Syntax, spezialisierten eingebauten Funktionalität und minimalen Anforderungen an die Objekterstellung.

| JavaScript                                                                                                                                                                                       | Java                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Objektorientiert. Keine Unterscheidung zwischen Objekttypen. Vererbung erfolgt über den Prototypenmechanismus und Eigenschaften sowie Methoden können jedem Objekt dynamisch hinzugefügt werden. | Klassenbasiert. Objekte sind in Klassen und Instanzen unterteilt, wobei die gesamte Vererbung über die Klassenhierarchie erfolgt. Klassen und Instanzen können nicht dynamisch um Eigenschaften oder Methoden erweitert werden. |
| Variablendatentypen werden nicht deklariert (dynamische Typisierung, lose typisiert).                                                                                                            | Variablendatentypen müssen deklariert werden (statische Typisierung, stark typisiert).                                                                                                                                          |
| Kann nicht automatisch auf die Festplatte schreiben.                                                                                                                                             | Kann automatisch auf die Festplatte schreiben.                                                                                                                                                                                  |

## JavaScript und die ECMAScript-Spezifikation

JavaScript wird bei [Ecma International](https://ecma-international.org/) standardisiert – der europäischen Vereinigung zur Standardisierung von Informations- und Kommunikationssystemen (ECMA war früher ein Akronym für die European Computer Manufacturers Association), um eine standardisierte, internationale Programmiersprache auf Basis von JavaScript bereitzustellen. Diese standardisierte Version von JavaScript, genannt ECMAScript, verhält sich in allen Anwendungen, die den Standard unterstützen, auf die gleiche Weise. Unternehmen können die offene Standardsprache verwenden, um ihre Implementierung von JavaScript zu entwickeln. Der ECMAScript-Standard ist in der ECMA-262-Spezifikation dokumentiert.

Der ECMA-262-Standard wurde auch von der [ISO](https://www.iso.org/home.html) (International Organization for Standardization) als ISO-16262 genehmigt. Die Spezifikation kann auch auf der [Website von Ecma International](https://ecma-international.org/publications-and-standards/standards/ecma-262/) eingesehen werden. Die ECMAScript-Spezifikation beschreibt nicht das Document Object Model (DOM), welches vom [World Wide Web Consortium (W3C)](https://www.w3.org/) und/oder [WHATWG (Web Hypertext Application Technology Working Group)](https://whatwg.org/) standardisiert wird. Das DOM definiert die Art und Weise, wie HTML-Dokumentobjekte Ihrem Skript zugänglich gemacht werden. Um einen besseren Überblick über die verschiedenen Technologien, die beim JavaScript-Programmieren verwendet werden, zu bekommen, lesen Sie den Artikel [JavaScript technologies overview](/de/docs/Web/JavaScript/JavaScript_technologies_overview).

### JavaScript-Dokumentation versus die ECMAScript-Spezifikation

Die ECMAScript-Spezifikation ist eine Reihe von Anforderungen zur Implementierung von ECMAScript. Sie ist nützlich, wenn Sie standardkonforme Sprachfunktionen in Ihrer ECMAScript-Implementierung oder -Engine (wie SpiderMonkey in Firefox oder V8 in Chrome) implementieren möchten.

Das ECMAScript-Dokument ist _nicht_ dazu gedacht, Skriptprogrammierern zu helfen. Verwenden Sie die JavaScript-Dokumentation für Informationen beim Schreiben von Skripten.

Die ECMAScript-Spezifikation verwendet Terminologie und Syntax, die einem JavaScript-Programmierer möglicherweise unbekannt sind. Obwohl die Beschreibung der Sprache in ECMAScript unterschiedlich sein mag, bleibt die Sprache selbst dieselbe. JavaScript unterstützt alle im ECMAScript-Standard umrissenen Funktionen.

Die JavaScript-Dokumentation beschreibt Aspekte der Sprache, die für einen JavaScript-Programmierer angemessen sind.

## Einstieg in JavaScript

Um mit JavaScript zu beginnen, benötigen Sie lediglich einen modernen Webbrowser. Die aktuellen Versionen von [Firefox](https://www.mozilla.org/en-CA/firefox/new/), [Chrome](https://www.google.com/chrome/index.html), [Microsoft Edge](https://www.microsoft.com/en-us/edge) und [Safari](https://www.apple.com/safari/) unterstützen alle die in diesem Leitfaden besprochenen Funktionen.

Ein sehr nützliches Werkzeug zum Erkunden von JavaScript ist die JavaScript-Konsole (manchmal auch Webkonsole oder einfach nur Konsole genannt): Dies ist ein Werkzeug, das es Ihnen ermöglicht, JavaScript einzugeben und auf der aktuellen Seite auszuführen.

Die hier gezeigten Screenshots zeigen die [Firefox-Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/), aber alle modernen Browser enthalten eine Konsole, die auf ähnliche Weise funktioniert.

### Öffnen der Konsole

Die genauen Anweisungen zum Öffnen der Konsole variieren von Browser zu Browser:

- [Öffnen der Konsole in Firefox](https://firefox-source-docs.mozilla.org/devtools-user/web_console/#opening-the-web-console)
- [Öffnen der Konsole in Chrome](https://developer.chrome.com/docs/devtools/open)
- [Öffnen der Konsole in Microsoft Edge](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/)

### Eingeben und Ausführen von JavaScript

Die Konsole erscheint am unteren Rand des Browserfensters. Entlang des unteren Randes der Konsole befindet sich eine Eingabezeile, die Sie zur Eingabe von JavaScript verwenden können, und die Ausgabe erscheint im darüberliegenden Panel:

![Ein Browserfenster mit geöffneter Webkonsole am unteren Rand, enthält zwei Zeilen von Eingaben und Ausgaben. Text kann darunter eingegeben werden.](2019-04-04_00-15-29.png)

Die Konsole funktioniert genau wie `eval`: Der zuletzt eingegebene Ausdruck wird zurückgegeben. Der Einfachheit halber kann man sich vorstellen, dass jedes Mal, wenn etwas in die Konsole eingegeben wird, es tatsächlich von `console.log` um `eval` umgeben ist, etwa so:

```js
console.log(eval("3 + 5"));
```

### Mehrzeilige Eingabe in der Konsole

Standardmäßig wird der von Ihnen eingegebene String, wenn Sie <kbd>Enter</kbd> (oder <kbd>Return</kbd>, je nach Tastatur) nach einer Zeile Code drücken, ausgeführt. Um eine mehrzeilige Eingabe zu machen:

- Wenn der eingegebene String unvollständig war (zum Beispiel, Sie haben `function foo() {` getippt), behandelt die Konsole <kbd>Enter</kbd> als Zeilenumbruch und lässt Sie eine weitere Zeile eingeben.
- Wenn Sie <kbd>Shift</kbd> gedrückt halten, während Sie <kbd>Enter</kbd> drücken, wird die Konsole dies als Zeilenumbruch ansehen und Ihnen erlauben, eine weitere Zeile einzugeben.
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

## Was kommt als Nächstes

Auf den folgenden Seiten wird Ihnen dieser Leitfaden die JavaScript-Syntax und Sprachmerkmale näher bringen, damit Sie in der Lage sind, komplexere Anwendungen zu schreiben.

Aber denken Sie vorerst daran, immer `(function(){"use strict";` vor Ihrem Code einzufügen und `})();` am Ende Ihres Codes hinzuzufügen. Die Artikel zum [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) und zur {{Glossary("IIFE", "IIFE")}} erklären deren genaue Funktion, aber im Moment können sie als Folgendes betrachtet werden:

1. Sie verhindern Semantiken in JavaScript, die Anfängern Probleme bereiten.
2. Sie verhindern, dass sich Code-Snippets, die in der Konsole ausgeführt werden, gegenseitig beeinflussen (z.B. dass etwas, das in einer Konsolenausführung erstellt wird, für eine andere Konsolenausführung verwendet wird).

{{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}
