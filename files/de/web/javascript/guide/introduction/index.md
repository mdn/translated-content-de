---
title: Einführung
slug: Web/JavaScript/Guide/Introduction
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}

Dieses Kapitel führt in JavaScript ein und erläutert einige seiner grundlegenden Konzepte.

## Was Sie bereits wissen sollten

Dieser Leitfaden setzt folgendes Grundwissen voraus:

- Allgemeines Verständnis des Internets und des World Wide Web ({{Glossary("World_Wide_Web", "WWW")}}).
- Gute Kenntnisse in HyperText Markup Language ({{Glossary("HTML", "HTML")}}).
- Einige Programmiererfahrungen. Wenn Sie neu im Programmieren sind, probieren Sie eines der Tutorials auf der Hauptseite über [JavaScript](/de/docs/Web/JavaScript) aus.

## Wo Sie Informationen zu JavaScript finden

Die JavaScript-Dokumentation auf MDN enthält Folgendes:

- [Webentwicklung lernen](/de/docs/Learn) bietet Anfängern Informationen und führt in grundlegende Konzepte der Programmierung und des Internets ein.
- [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide) (dieser Leitfaden) bietet einen Überblick über die JavaScript-Sprache und ihre Objekte.
- [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) bietet detailliertes Referenzmaterial für JavaScript.

Wenn Sie neu in JavaScript sind, beginnen Sie mit den Artikeln im [Lernbereich](/de/docs/Learn) und dem [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide). Sobald Sie ein solides Verständnis der Grundlagen haben, können Sie die [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) nutzen, um mehr Details zu einzelnen Objekten und Anweisungen zu erhalten.

## Was ist JavaScript?

JavaScript ist eine plattformübergreifende, objektorientierte Skriptsprache, die zum Interaktiv-Machen von Webseiten verwendet wird (z.B. komplexe Animationen, klickbare Schaltflächen, Popup-Menüs usw.). Es gibt auch fortgeschrittenere serverseitige Versionen von JavaScript wie Node.js, die es ermöglichen, mehr Funktionalität zu einer Website hinzuzufügen als lediglich Datei-Downloads (wie z.B. Echtzeit-Zusammenarbeit zwischen mehreren Computern). Innerhalb einer Hostumgebung (z.B. eines Web-Browsers) kann JavaScript mit den Objekten seiner Umgebung verbunden werden, um sie programmatisch zu steuern.

JavaScript enthält eine Standardbibliothek von Objekten wie `Array`, `Date` und `Math` sowie einen grundlegenden Satz von Sprachelementen wie Operatoren, Kontrollstrukturen und Anweisungen. Das Kern-JavaScript kann für eine Vielzahl von Zwecken durch die Ergänzung zusätzlicher Objekte erweitert werden, zum Beispiel:

- _Client-seitiges JavaScript_ erweitert die Kernsprache durch Bereitstellung von Objekten, um einen Browser und sein _Document Object Model_ (DOM) zu steuern. Beispielsweise ermöglichen clientseitige Erweiterungen einer Anwendung, Elemente auf einem HTML-Formular zu platzieren und auf Benutzerereignisse wie Mausklicks, Formular-Eingaben und Seiten-Navigation zu reagieren.
- _Server-seitiges JavaScript_ erweitert die Kernsprache durch Bereitstellung von Objekten, die für die Ausführung von JavaScript auf einem Server relevant sind. Beispielsweise ermöglichen serverseitige Erweiterungen einer Anwendung die Kommunikation mit einer Datenbank, die Fortführung von Informationen von einem Aufruf der Anwendung zum nächsten oder das Durchführen von Datei-Manipulationen auf einem Server.

Das bedeutet, dass JavaScript im Browser das Aussehen der Webseite (DOM) ändern kann. Ebenso kann Node.js JavaScript auf dem Server auf benutzerdefinierte Anfragen reagieren, die von im Browser ausgeführtem Code gesendet werden.

## JavaScript und Java

JavaScript und Java sind in mancher Hinsicht ähnlich, aber in anderen grundlegend verschieden. Die JavaScript-Sprache ähnelt Java, jedoch ohne die statische Typisierung und starke Typüberprüfung von Java. JavaScript folgt den meisten Java-Ausdruckssyntaxen, Namenskonventionen und grundlegenden Kontrollfluss-Konstrukten, was der Grund war, warum es von LiveScript in JavaScript umbenannt wurde.

Im Gegensatz zu Javas Kompilierzeit-System von Klassen, die durch Deklarationen erstellt werden, unterstützt JavaScript ein Laufzeitsystem, das auf einer kleinen Anzahl von Datentypen basiert, die numerische, boolesche und Zeichenfolgenwerte darstellen. JavaScript hat ein prototypbasiertes Objektmodell anstelle des verbreiteteren klassenbasierten Objektmodells. Das prototypbasierte Modell bietet eine dynamische Vererbung; das bedeutet, dass das, was vererbt wird, für einzelne Objekte variieren kann. JavaScript unterstützt auch Funktionen ohne besondere deklarative Anforderungen. Funktionen können Eigenschaften von Objekten sein, die als lose typisierte Methoden ausgeführt werden.

JavaScript ist eine sehr flexible Sprache im Vergleich zu Java. Sie müssen nicht alle Variablen, Klassen und Methoden deklarieren. Sie müssen sich nicht darum kümmern, ob Methoden öffentlich, privat oder geschützt sind, und Sie müssen keine Schnittstellen implementieren. Variablen, Parameter und Rückgabetypen von Funktionen sind nicht explizit typisiert.

Java ist eine klassenbasierte Programmiersprache, die für schnelle Ausführung und Typsicherheit konzipiert ist. Typsicherheit bedeutet beispielsweise, dass Sie in Java keinen Integer in eine Objekt-Referenz umwandeln oder auf privaten Speicher zugreifen können, indem Sie den Java-Bytecode beschädigen. Java's klassenbasiertes Modell bedeutet, dass Programme ausschließlich aus Klassen und ihren Methoden bestehen. Java's Klassenvererbung und strenge Typisierung erfordern in der Regel eng gekoppelte Objekt-Hierarchien. Diese Anforderungen machen die Java-Programmierung komplexer im Vergleich zur JavaScript-Programmierung.

Im Gegensatz dazu stammt JavaScript sozusagen aus einer Linie kleinerer, dynamisch typisierter Sprachen wie HyperTalk und dBase ab. Diese Skriptsprachen bieten eine weite Verbreitung der Programmierwerkzeuge, dank ihrer leichteren Syntax, spezieller eingebauter Funktionalität und minimalen Anforderungen an die Objekterstellung.

| JavaScript                                                                                                                                                                                     | Java                                                                                                                                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Objektorientiert. Keine Unterscheidung zwischen Objekttypen. Vererbung erfolgt über den Prototyp-Mechanismus, und Eigenschaften und Methoden können jedem Objekt dynamisch hinzugefügt werden. | Klassenbasiert. Objekte sind in Klassen und Instanzen unterteilt, mit all ihrer Vererbung über die Klassenhierarchie. Klassen und Instanzen können keine Eigenschaften oder Methoden dynamisch hinzugefügt bekommen. |
| Variablendatentypen werden nicht deklariert (dynamisches Tippen, lose getypt).                                                                                                                 | Variablendatentypen müssen deklariert werden (statisches Tippen, stark getypt).                                                                                                                                      |
| Kann nicht automatisch auf die Festplatte schreiben.                                                                                                                                           | Kann automatisch auf die Festplatte schreiben.                                                                                                                                                                       |

## JavaScript und die ECMAScript-Spezifikation

JavaScript ist bei [Ecma International](https://ecma-international.org/) — der europäischen Vereinigung zur Standardisierung von Informations- und Kommunikationssystemen (ECMA war früher ein Akronym für European Computer Manufacturers Association) — standardisiert, um eine standardisierte, internationale Programmiersprache basierend auf JavaScript zu liefern. Diese standardisierte Version von JavaScript, genannt ECMAScript, verhält sich in allen Anwendungen, die den Standard unterstützen, gleich. Unternehmen können die offene Standardsprache verwenden, um ihre eigene Implementierung von JavaScript zu entwickeln. Der ECMAScript-Standard ist in der Spezifikation ECMA-262 dokumentiert.

Der ECMA-262-Standard wurde auch von der [ISO](https://www.iso.org/home.html) (Internationale Organisation für Normung) als ISO-16262 genehmigt. Sie können die Spezifikation auch auf [der Ecma International Website](https://ecma-international.org/publications-and-standards/standards/ecma-262/) finden. Die ECMAScript-Spezifikation beschreibt nicht das _Document Object Model_ (DOM), das von [World Wide Web Consortium (W3C)](https://www.w3.org/) und/oder [WHATWG (Web Hypertext Application Technology Working Group)](https://whatwg.org/) standardisiert wird. Das DOM definiert, wie HTML-Dokumentobjekte Ihrem Skript zugänglich gemacht werden. Um einen besseren Überblick über die verschiedenen Technologien zu bekommen, die bei der Programmierung mit JavaScript verwendet werden, konsultieren Sie den Artikel [JavaScript-Technologieüberblick](/de/docs/Web/JavaScript/JavaScript_technologies_overview).

### JavaScript-Dokumentation versus die ECMAScript-Spezifikation

Die ECMAScript-Spezifikation ist eine Reihe von Anforderungen für die Implementierung von ECMAScript. Sie ist nützlich, wenn Sie standardkonforme Sprachfunktionen in Ihrer ECMAScript-Implementierung oder -Engine implementieren möchten (wie SpiderMonkey in Firefox oder V8 in Chrome).

Das ECMAScript-Dokument ist _nicht_ für Skript-Programmierer gedacht. Verwenden Sie die JavaScript-Dokumentation für Informationen zum Schreiben von Skripten.

Die ECMAScript-Spezifikation verwendet Terminologie und Syntax, die einem JavaScript-Programmierer möglicherweise unbekannt sind. Obwohl die Beschreibung der Sprache in der ECMAScript-Spezifikation anders sein mag, bleibt die Sprache selbst gleich. JavaScript unterstützt alle in der ECMAScript-Spezifikation beschriebenen Funktionalitäten.

Die JavaScript-Dokumentation beschreibt Aspekte der Sprache, die für einen JavaScript-Programmierer geeignet sind.

## Erste Schritte mit JavaScript

Um mit JavaScript loszulegen, brauchen Sie nur einen modernen Web-Browser. Aktuelle Versionen von [Firefox](https://www.mozilla.org/en-CA/firefox/new/), [Chrome](https://www.google.com/chrome/index.html), [Microsoft Edge](https://www.microsoft.com/en-us/edge) und [Safari](https://www.apple.com/safari/) unterstützen alle die in diesem Leitfaden besprochenen Funktionen.

Ein sehr nützliches Werkzeug zur Erkundung von JavaScript ist die JavaScript-Konsole (manchmal auch als Web-Konsole oder einfach die Konsole bezeichnet): Dies ist ein Werkzeug, das es ermöglicht, JavaScript einzugeben und es auf der aktuellen Seite auszuführen.

Die Screenshots hier zeigen die [Firefox-Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/), aber alle modernen Browser bieten eine Konsole, die ähnlich funktioniert.

### Öffnen der Konsole

Die genauen Anweisungen zum Öffnen der Konsole variieren je nach Browser:

- [Öffnen der Konsole in Firefox](https://firefox-source-docs.mozilla.org/devtools-user/web_console/#opening-the-web-console)
- [Öffnen der Konsole in Chrome](https://developer.chrome.com/docs/devtools/open)
- [Öffnen der Konsole in Microsoft Edge](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/)

### Eingeben und Ausführen von JavaScript

Die Konsole erscheint unten im Browserfenster. Entlang des unteren Teils der Konsole befindet sich eine Eingabezeile, in die Sie JavaScript eingeben können, und die Ausgabe erscheint im Feld darüber:

![Ein Browserfenster mit der geöffneten Webkonsole unten, die zwei Zeilen mit Eingaben und Ausgaben enthält. Text kann darunter eingegeben werden.](2019-04-04_00-15-29.png)

Die Konsole arbeitet genauso wie `eval`: Der zuletzt eingegebene Ausdruck wird zurückgegeben. Der Einfachheit halber kann man sich vorstellen, dass jedes Mal, wenn etwas in die Konsole eingegeben wird, es tatsächlich von `console.log` um `eval` umgeben ist, wie folgt:

```js
console.log(eval("3 + 5"));
```

### Mehrzeilige Eingabe in der Konsole

Standardmäßig wird, wenn Sie <kbd>Enter</kbd> (oder <kbd>Return</kbd>, je nach Tastatur) drücken, nachdem Sie eine Codezeile eingegeben haben, der eingegebene String ausgeführt. Um mehrzeilige Eingaben einzugeben:

- Wenn der eingegebene String unvollständig ist (zum Beispiel haben Sie `function foo() {` eingegeben), dann behandelt die Konsole <kbd>Enter</kbd> als Zeilenumbruch und lässt Sie eine weitere Zeile eingeben.
- Wenn Sie die <kbd>Shift</kbd>-Taste gedrückt halten, während Sie <kbd>Enter</kbd> drücken, behandelt die Konsole dies als Zeilenumbruch und lässt Sie eine weitere Zeile eingeben.
- Nur in Firefox können Sie den [Mehrzeilen-Eingabemodus](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#multi-line-mode) aktivieren, in dem Sie mehrere Zeilen in einem kleinen Editor eingeben und dann das Ganze ausführen können, wenn Sie bereit sind.

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

## Was als Nächstes

Auf den folgenden Seiten wird Ihnen dieser Leitfaden die JavaScript-Syntax und Sprachfunktionen näherbringen, damit Sie in der Lage sind, komplexere Anwendungen zu schreiben.

Aber für jetzt denken Sie daran, immer das `(function(){"use strict";` vor Ihrem Code zu inkludieren, und fügen Sie `})();` am Ende Ihres Codes hinzu. Die Artikel zum [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) und {{Glossary("IIFE", "IIFE")}} erklären, was sie tun, aber für jetzt können Sie sie sich wie folgt vorstellen:

1. Verhindern von Semantiken in JavaScript, die Anfängern Schwierigkeiten bereiten.
2. Verhindern, dass Codeschnipsel, die in der Konsole ausgeführt werden, miteinander interagieren (z.B. etwas, das in einer Konsolenausführung erstellt wurde, in einer anderen Konsolenausführung zu verwenden).

{{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}
