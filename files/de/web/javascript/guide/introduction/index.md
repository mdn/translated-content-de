---
title: Einführung
slug: Web/JavaScript/Guide/Introduction
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

{{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}

Dieses Kapitel führt in JavaScript ein und diskutiert einige seiner grundlegenden Konzepte.

## Was Sie bereits wissen sollten

Dieser Leitfaden setzt die folgende Grundkenntnisse voraus:

- Ein allgemeines Verständnis des Internets und des World Wide Web ({{Glossary("World_Wide_Web", "WWW")}}).
- Gute Arbeitskenntnisse von HyperText Markup Language ({{Glossary("HTML", "HTML")}}).
- Einige Programmiererfahrungen. Wenn Sie neu im Programmieren sind, versuchen Sie eines der auf der Hauptseite zu [JavaScript](/de/docs/Web/JavaScript) verlinkten Tutorials.

## Wo Sie Informationen zu JavaScript finden

Die JavaScript-Dokumentation auf MDN umfasst Folgendes:

- [Dynamisches Skripting mit JavaScript](/de/docs/Learn_web_development/Core/Scripting) bietet strukturierte JavaScript-Leitfäden für Anfänger und führt grundlegende Programmier- und Internetkonzepte ein.
- [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide) (dieser Leitfaden) bietet einen Überblick über die JavaScript-Sprache und ihre Objekte.
- [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) bietet detailliertes Referenzmaterial für JavaScript.

## Was ist JavaScript?

JavaScript ist eine plattformübergreifende, objektorientierte Skriptsprache, die verwendet wird, um Webseiten interaktiv zu machen (z. B. komplexe Animationen, klickbare Schaltflächen, Popup-Menüs usw.). Es gibt auch fortgeschrittenere serverseitige Versionen von JavaScript wie Node.js, die es Ihnen ermöglichen, einer Website mehr Funktionen hinzuzufügen als nur Dateien herunterzuladen (wie Echtzeit-Zusammenarbeit zwischen mehreren Computern). Innerhalb einer Hostumgebung (zum Beispiel eines Webbrowsers) kann JavaScript mit den Objekten seiner Umgebung verbunden werden, um sie programmatisch zu steuern.

JavaScript enthält eine Standardbibliothek von Objekten wie `Array`, `Map` und `Math` sowie einen Grundsatz von Sprachelementen wie Operatoren, Kontrollstrukturen und Anweisungen. Das Kern-JavaScript kann für verschiedene Zwecke erweitert werden, indem es mit zusätzlichen Objekten ergänzt wird; zum Beispiel:

- _Client-seitiges JavaScript_ erweitert die Kernsprache, indem es Objekte bereitstellt, um einen Browser und dessen _Document Object Model_ (DOM) zu steuern. Beispielsweise ermöglichen clientseitige Erweiterungen einer Anwendung, Elemente auf einem HTML-Formular zu platzieren und auf Benutzerereignisse wie Mausklicks, Formulareingaben und Seitennavigation zu reagieren.
- _Server-seitiges JavaScript_ erweitert die Kernsprache, indem es Objekte bereitstellt, die für das Ausführen von JavaScript auf einem Server relevant sind. Beispielsweise ermöglichen serverseitige Erweiterungen einer Anwendung, mit einer Datenbank zu kommunizieren, Informationskontinuität von einem Aufruf der Anwendung zu einem anderen bereitzustellen oder Dateioperationen auf einem Server auszuführen.

Das bedeutet, dass JavaScript im Browser das Aussehen der Webseite (DOM) ändern kann. Und ebenso kann Node.js-JavaScript auf dem Server auf benutzerdefinierte Anfragen reagieren, die von einem im Browser ausgeführten Code gesendet werden.

## JavaScript und Java

JavaScript und Java sind in einigen Aspekten ähnlich, aber in anderen grundlegend unterschiedlich. Die JavaScript-Sprache ähnelt Java, hat jedoch nicht die statische Typisierung und die starke Typprüfung von Java. JavaScript folgt den meisten Java-Ausdruckssyntaxen, Namenskonventionen und Grundkontrollflusskonstrukten, weshalb es von LiveScript in JavaScript umbenannt wurde.

Im Gegensatz zu Javas deklarationsbasiertem System von Klassen zur Kompilierungszeit unterstützt JavaScript ein Laufzeitsystem, das auf einer kleinen Anzahl von Datentypen basiert, die numerische, boolesche und Zeichenfolgenwerte darstellen. JavaScript hat ein prototypbasiertes Objektmodell anstelle des häufigeren klassenbasierten Objektmodells. Das prototypbasierte Modell bietet dynamische Vererbung; das bedeutet, dass das, was vererbt wird, für einzelne Objekte variieren kann. JavaScript unterstützt auch Funktionen ohne spezielle deklarative Anforderungen. Funktionen können Eigenschaften von Objekten sein, die als locker typisierte Methoden ausgeführt werden.

JavaScript ist im Vergleich zu Java eine sehr freiformige Sprache. Sie müssen nicht alle Variablen, Klassen und Methoden deklarieren. Sie müssen sich keine Gedanken darüber machen, ob Methoden öffentlich, privat oder geschützt sind, und Sie müssen keine Schnittstellen implementieren. Variablen, Parameter und Rückgabewerte von Funktionen sind nicht explizit typisiert.

Java ist eine klassenbasierte Programmiersprache, die für schnelle Ausführung und Typsicherheit ausgelegt ist. Typsicherheit bedeutet zum Beispiel, dass Sie keinen Java-Integer in eine Objektreferenz umwandeln oder auf privaten Speicher zugreifen können, indem Sie den Java-Bytecode beschädigen. Das klassenbasierte Modell von Java bedeutet, dass Programme ausschließlich aus Klassen und deren Methoden bestehen. Die klassenbasierte Vererbung und starke Typisierung von Java erfordern im Allgemeinen eng verbundene Objekthierarchien. Diese Anforderungen machen Java-Programmierung komplexer als JavaScript-Programmierung.

Im Gegensatz dazu stammt JavaScript im Geiste von einer Reihe kleinerer, dynamisch typisierter Sprachen wie HyperTalk und dBase ab. Diese Skriptsprachen bieten einem weitaus breiteren Publikum Programmierwerkzeuge dank ihrer einfacheren Syntax, spezialisierten eingebauten Funktionalität und minimalen Anforderungen an die Objekterstellung.

| JavaScript                                                                                                                                                                                           | Java                                                                                                                                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Objektorientiert. Keine Unterscheidung zwischen Arten von Objekten. Vererbung erfolgt über den Prototypmechanismus, und Eigenschaften und Methoden können jedem Objekt dynamisch hinzugefügt werden. | Klassenbasiert. Objekte sind in Klassen und Instanzen unterteilt, wobei die gesamte Vererbung über die Klassenhierarchie erfolgt. Klassen und Instanzen können keine Eigenschaften oder Methoden dynamisch hinzugefügt werden. |
| Variablen-Datentypen müssen nicht deklariert werden (dynamische Typisierung, schwach typisiert).                                                                                                     | Variablen-Datentypen müssen deklariert werden (statische Typisierung, stark typisiert).                                                                                                                                        |
| Kann nicht automatisch auf Festplatte schreiben.                                                                                                                                                     | Kann automatisch auf Festplatte schreiben.                                                                                                                                                                                     |

## JavaScript und die ECMAScript-Spezifikation

JavaScript ist bei [Ecma International](https://ecma-international.org/) standardisiert – der europäischen Vereinigung zur Standardisierung von Informations- und Kommunikationssystemen (ECMA war früher ein Akronym für die European Computer Manufacturers Association), um eine standardisierte, internationale Programmiersprache basierend auf JavaScript bereitzustellen. Diese standardisierte Version von JavaScript, genannt ECMAScript, verhält sich in allen Anwendungen gleich, die den Standard unterstützen. Unternehmen können die offene Standardsprache verwenden, um ihre Implementierung von JavaScript zu entwickeln. Der ECMAScript-Standard ist in der ECMA-262-Spezifikation dokumentiert.

Der ECMA-262-Standard wird auch von der [ISO](https://www.iso.org/home.html) (International Organization for Standardization) als ISO-16262 genehmigt. Sie können die Spezifikation auch auf [der Website von Ecma International](https://ecma-international.org/publications-and-standards/standards/ecma-262/) finden. Die ECMAScript-Spezifikation beschreibt nicht das Document Object Model (DOM), welches vom [World Wide Web Consortium (W3C)](https://www.w3.org/) und/oder [WHATWG (Web Hypertext Application Technology Working Group)](https://whatwg.org/) standardisiert ist. Das DOM definiert, wie HTML-Dokumentobjekte Ihrem Skript zugänglich gemacht werden. Um einen besseren Überblick über die verschiedenen Technologien zu bekommen, die beim Programmieren mit JavaScript verwendet werden, konsultieren Sie den Artikel [JavaScript-Technologieübersicht](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview).

### JavaScript-Dokumentation versus die ECMAScript-Spezifikation

Die ECMAScript-Spezifikation ist eine Reihe von Anforderungen zur Implementierung von ECMAScript. Sie ist nützlich, wenn Sie standardkonforme Sprachfunktionen in Ihrer ECMAScript-Implementierung oder -Engine implementieren möchten (wie SpiderMonkey in Firefox oder V8 in Chrome).

Das ECMAScript-Dokument ist _nicht_ dazu gedacht, Skriptprogrammierern zu helfen. Verwenden Sie die JavaScript-Dokumentation für Informationen beim Schreiben von Skripten.

Die ECMAScript-Spezifikation verwendet Terminologie und Syntax, die einem JavaScript-Programmierer möglicherweise unbekannt sind. Obwohl die Beschreibung der Sprache in ECMAScript variieren kann, bleibt die Sprache selbst gleich. JavaScript unterstützt alle in der ECMAScript-Spezifikation beschriebenen Funktionalitäten.

Die JavaScript-Dokumentation beschreibt Aspekte der Sprache, die für einen JavaScript-Programmierer geeignet sind.

## Erste Schritte mit JavaScript

Um mit JavaScript zu beginnen, benötigen Sie lediglich einen modernen Webbrowser. Die aktuellen Versionen von [Firefox](https://www.mozilla.org/en-CA/firefox/new/), [Chrome](https://www.google.com/chrome/index.html), [Microsoft Edge](https://www.microsoft.com/en-us/edge) und [Safari](https://www.apple.com/safari/) unterstützen alle die in diesem Leitfaden behandelten Funktionen.

Ein sehr nützliches Werkzeug zum Erkunden von JavaScript ist die JavaScript-Konsole (manchmal als Webkonsole oder einfach als Konsole bezeichnet): dies ist ein Werkzeug, das es Ihnen ermöglicht, JavaScript einzugeben und es auf der aktuellen Seite auszuführen.

Die hier gezeigten Screenshots zeigen die [Firefox-Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/), aber alle modernen Browser verfügen über eine Konsole, die ähnlich funktioniert.

### Die Konsole öffnen

Die genauen Anweisungen zum Öffnen der Konsole variieren von einem Browser zum anderen:

- [Die Konsole in Firefox öffnen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/#opening-the-web-console)
- [Die Konsole in Chrome öffnen](https://developer.chrome.com/docs/devtools/open)
- [Die Konsole in Microsoft Edge öffnen](https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/)

### JavaScript eingeben und ausführen

Die Konsole erscheint am unteren Rand des Browserfensters. Entlang des unteren Randes der Konsole befindet sich eine Eingabezeile, die Sie verwenden können, um JavaScript einzugeben, und die Ausgabe erscheint im Panel darüber:

![Ein Browserfenster mit geöffneter Webkonsole am unteren Rand, das zwei Eingabe- und Ausgabelinien enthält. Unten kann Text eingegeben werden.](2019-04-04_00-15-29.png)

Die Konsole funktioniert genauso wie `eval`: Der zuletzt eingegebene Ausdruck wird zurückgegeben. Zur Vereinfachung kann man sich vorstellen, dass jedes Mal, wenn etwas in die Konsole eingegeben wird, es tatsächlich von `console.log` um `eval` herum umgeben ist, so:

```js
console.log(eval("3 + 5"));
```

### Mehrzeilige Eingabe in der Konsole

Standardmäßig wird, wenn Sie nach Eingabe einer Codezeile <kbd>Enter</kbd> (oder <kbd>Return</kbd>, je nach Tastatur) drücken, die von Ihnen eingegebene Zeichenfolge ausgeführt. Um mehrzeilige Eingaben zu machen:

- Wenn die von Ihnen eingegebene Zeichenfolge unvollständig war (zum Beispiel, wenn Sie `function foo() {` eingegeben haben), behandelt die Konsole <kbd>Enter</kbd> als Zeilenumbruch und lässt Sie eine weitere Zeile eingeben.
- Wenn Sie <kbd>Shift</kbd> gedrückt halten, während Sie <kbd>Enter</kbd> drücken, wird dies von der Konsole als Zeilenumbruch behandelt und Sie können eine weitere Zeile eingeben.
- Nur in Firefox können Sie den [Mehrzeilen-Eingabemodus](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#multi-line-mode) aktivieren, in dem Sie mehrere Zeilen in einem Mini-Editor eingeben können, und dann das Ganze ausführen, wenn Sie bereit sind.

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

In den folgenden Seiten führt Sie dieser Leitfaden in die JavaScript-Syntax und die Sprachfunktionen ein, sodass Sie in der Lage sein werden, komplexere Anwendungen zu schreiben.

Aber denken Sie vorerst daran, immer `(function(){"use strict";` vor Ihrem Code einzuschließen und `})();` am Ende Ihres Codes hinzuzufügen. Die Artikel zu [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) und {{Glossary("IIFE", "IIFE")}} erklären, was diese bewirken, aber Sie können sie zunächst als Folgendes betrachten:

1. Verhindern Sie Semantiken in JavaScript, die Anfänger in Verwirrung bringen.
2. Verhindern Sie, dass in der Konsole ausgeführte Codeschnipsel miteinander interagieren (z.B. dass etwas, das in einer Konsolenausführung erstellt wurde, für eine andere Konsolenausführung verwendet wird).

{{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}
