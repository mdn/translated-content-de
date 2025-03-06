---
title: Einführung
slug: Web/JavaScript/Guide/Introduction
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}

Dieses Kapitel stellt JavaScript vor und behandelt einige seiner grundlegenden Konzepte.

## Was Sie bereits wissen sollten

Dieser Leitfaden geht davon aus, dass Sie über folgendes Grundwissen verfügen:

- Ein allgemeines Verständnis des Internets und des World Wide Web ({{Glossary("World_Wide_Web", "WWW")}}).
- Gute Kenntnisse in der HyperText Markup Language ({{Glossary("HTML", "HTML")}}).
- Etwas Programmiererfahrung. Wenn Sie neu im Programmieren sind, probieren Sie eines der Tutorials aus, die auf der Hauptseite über [JavaScript](/de/docs/Web/JavaScript) verlinkt sind.

## Wo Sie Informationen zu JavaScript finden

Die JavaScript-Dokumentation auf MDN umfasst Folgendes:

- [Dynamisches Scripting mit JavaScript](/de/docs/Learn_web_development/Core/Scripting) bietet strukturierte JavaScript-Leitfäden für Anfänger und führt in grundlegende Programmier- und Internetkonzepte ein.
- [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide) (dieser Leitfaden) bietet einen Überblick über die JavaScript-Sprache und ihre Objekte.
- [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) bietet detaillierte Referenzmaterialien zu JavaScript.

## Was ist JavaScript?

JavaScript ist eine plattformübergreifende, objektorientierte Skriptsprache, die verwendet wird, um Webseiten interaktiv zu gestalten (zum Beispiel komplexe Animationen, klickbare Buttons, Popup-Menüs usw.). Es gibt auch fortgeschrittenere serverseitige Versionen von JavaScript wie Node.js, die es ermöglichen, einer Webseite mehr Funktionalität hinzuzufügen als nur das Herunterladen von Dateien (wie zum Beispiel Echtzeit-Zusammenarbeit zwischen mehreren Computern). In einer Host-Umgebung (zum Beispiel einem Webbrowser) kann JavaScript mit den Objekten seiner Umgebung verbunden werden, um programmatische Kontrolle über diese zu bieten.

JavaScript enthält eine Standardbibliothek von Objekten, wie `Array`, `Map` und `Math`, und einen Kernsatz von Sprachelementen wie Operatoren, Kontrollstrukturen und Anweisungen. Kern-JavaScript kann für eine Vielzahl von Zwecken erweitert werden, indem es mit zusätzlichen Objekten ergänzt wird; zum Beispiel:

- _Clientseitiges JavaScript_ erweitert die Kernsprache, indem es Objekte bereitstellt, um einen Browser und dessen _Document Object Model_ (DOM) zu steuern. Zum Beispiel erlauben clientseitige Erweiterungen einer Anwendung, Elemente auf einem HTML-Formular zu platzieren und auf Benutzerereignisse wie Mausklicks, Formulareingaben und Seitennavigation zu reagieren.
- _Serverseitiges JavaScript_ erweitert die Kernsprache, indem es Objekte bereitstellt, die relevant für die Ausführung von JavaScript auf einem Server sind. Zum Beispiel erlauben serverseitige Erweiterungen einer Anwendung, mit einer Datenbank zu kommunizieren, Kontinuität der Informationen von einem Aufruf zum anderen der Anwendung zu gewährleisten oder Dateioperationen auf einem Server durchzuführen.

Das bedeutet, dass JavaScript im Browser das Erscheinungsbild der Webseite (DOM) ändern kann. Ebenso kann JavaScript in Node.js auf dem Server auf benutzerdefinierte Anfragen reagieren, die durch im Browser ausgeführten Code gesendet werden.

## JavaScript und Java

JavaScript und Java sind in mancher Hinsicht ähnlich, aber in einigen anderen grundlegend verschieden. Die JavaScript-Sprache ähnelt Java, verfügt jedoch nicht über Javas statische Typisierung und strenge Typenprüfung. JavaScript folgt größtenteils der Java-Ausdruckssyntax, den Namenskonventionen und den grundlegenden Kontrollflusskonstrukten, was der Grund ist, warum es von LiveScript in JavaScript umbenannt wurde.

Im Gegensatz zu Javas Kompilierungszeitsystem von Klassen, die durch Deklarationen erstellt werden, unterstützt JavaScript ein Laufzeitsystem, das auf einer kleinen Anzahl von Datentypen basiert, die numerische, boolesche und String-Werte darstellen. JavaScript hat ein prototypenbasiertes Objektmodell anstelle des häufiger vorkommenden klassenbasierten Objektmodells. Das prototypenbasierte Modell bietet dynamische Vererbung; das heißt, was vererbt wird, kann bei einzelnen Objekten variieren. JavaScript unterstützt auch Funktionen ohne spezielle deklarative Anforderungen. Funktionen können Eigenschaften von Objekten sein, die als lose getypte Methoden ausgeführt werden.

JavaScript ist im Vergleich zu Java eine sehr frei formbare Sprache. Sie müssen nicht alle Variablen, Klassen und Methoden deklarieren. Sie müssen sich nicht darum kümmern, ob Methoden öffentlich, privat oder geschützt sind, und müssen keine Schnittstellen implementieren. Variablen, Parameter und Funktionsrückgabetypen sind nicht explizit typisiert.

Java ist eine klassenbasierte Programmiersprache, die für schnelle Ausführung und Typsicherheit entwickelt wurde. Typsicherheit bedeutet zum Beispiel, dass Sie in Java keinen Integer in eine Objektreferenz umwandeln oder auf privaten Speicher zugreifen können, indem Sie den Java-Bytecode beschädigen. Javas klassenbasiertes Modell bedeutet, dass Programme ausschließlich aus Klassen und deren Methoden bestehen. Javas Klassenvererbung und starke Typisierung erfordern im Allgemeinen eng gekoppelte Objekthierarchien. Diese Anforderungen machen die Java-Programmierung komplexer als die JavaScript-Programmierung.

Im Gegensatz dazu stammt JavaScript in der Struktur von einer Reihe kleinerer, dynamisch typisierter Sprachen wie HyperTalk und dBase ab. Diese Skriptsprachen bieten Programmierwerkzeuge für ein viel breiteres Publikum aufgrund ihrer einfacheren Syntax, spezialisierten eingebauten Funktionalitäten und minimalen Anforderungen an die Objekterstellung.

| JavaScript                                                                                                                                                                                       | Java                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Objektorientiert. Keine Unterscheidung zwischen Objekttypen. Vererbung erfolgt durch den Prototypenmechanismus, und Eigenschaften und Methoden können jedem Objekt dynamisch hinzugefügt werden. | Klassenbasiert. Objekte sind in Klassen und Instanzen unterteilt, und alle Vererbungen erfolgen durch die Klassenhierarchie. Klassen und Instanzen können keine Eigenschaften oder Methoden dynamisch hinzugefügt werden. |
| Variablentypen werden nicht deklariert (dynamische Typisierung, lose typisiert).                                                                                                                 | Variablentypen müssen deklariert werden (statische Typisierung, stark typisiert).                                                                                                                                         |
| Kann nicht automatisch auf die Festplatte schreiben.                                                                                                                                             | Kann automatisch auf die Festplatte schreiben.                                                                                                                                                                            |

## JavaScript und die ECMAScript-Spezifikation

JavaScript ist standardisiert bei [Ecma International](https://ecma-international.org/) — der europäischen Organisation zur Standardisierung von Informations- und Kommunikationssystemen (ECMA war früher ein Akronym für die European Computer Manufacturers Association), um eine standardisierte, internationale Programmiersprache auf Basis von JavaScript zu liefern. Diese standardisierte Version von JavaScript, genannt ECMAScript, verhält sich in allen Anwendungen, die den Standard unterstützen, gleich. Unternehmen können die offene Standardsprache nutzen, um ihre Implementierung von JavaScript zu entwickeln. Der ECMAScript-Standard ist in der ECMA-262-Spezifikation dokumentiert.

Der ECMA-262-Standard ist auch von der [ISO](https://www.iso.org/home.html) (International Organization for Standardization) als ISO-16262 genehmigt. Sie können die Spezifikation auch auf [der Website von Ecma International](https://ecma-international.org/publications-and-standards/standards/ecma-262/) finden. Die ECMAScript-Spezifikation beschreibt nicht das Document Object Model (DOM), das vom [World Wide Web Consortium (W3C)](https://www.w3.org/) und/oder [WHATWG (Web Hypertext Application Technology Working Group)](https://whatwg.org/) standardisiert ist. Das DOM definiert, wie HTML-Dokumentobjekte Ihrem Skript zugänglich gemacht werden. Um sich ein besseres Bild über die verschiedenen Technologien zu machen, die beim Programmieren mit JavaScript verwendet werden, lesen Sie den Artikel [JavaScript-Technologieübersicht](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview).

### JavaScript-Dokumentation vs. die ECMAScript-Spezifikation

Die ECMAScript-Spezifikation ist eine Reihe von Anforderungen zur Implementierung von ECMAScript. Sie ist nützlich, wenn Sie standardkonforme Sprachfeatures in Ihrer ECMAScript-Implementierung oder -Engine (wie dem SpiderMonkey in Firefox oder V8 in Chrome) implementieren möchten.

Das ECMAScript-Dokument ist _nicht_ dazu gedacht, Skriptprogrammierern zu helfen. Verwenden Sie die JavaScript-Dokumentation, um Informationen zum Schreiben von Skripten zu erhalten.

Die ECMAScript-Spezifikation verwendet Terminologie und Syntax, die einem JavaScript-Programmierer möglicherweise nicht vertraut sind. Obwohl die Beschreibung der Sprache in ECMAScript anders sein kann, bleibt die Sprache selbst gleich. JavaScript unterstützt alle in der ECMAScript-Spezifikation beschriebenen Funktionen.

Die JavaScript-Dokumentation beschreibt Aspekte der Sprache, die für einen JavaScript-Programmierer geeignet sind.

## Der Einstieg in JavaScript

Um mit JavaScript zu beginnen, benötigen Sie nur einen modernen Webbrowser. Neuere Versionen von [Firefox](https://www.mozilla.org/en-CA/firefox/new/), [Chrome](https://www.google.com/chrome/index.html), [Microsoft Edge](https://www.microsoft.com/en-us/edge) und [Safari](https://www.apple.com/safari/) unterstützen alle die in diesem Leitfaden besprochenen Funktionen.

Ein sehr nützliches Werkzeug zum Erforschen von JavaScript ist die JavaScript-Konsole (manchmal als Webkonsole oder einfach als Konsole bezeichnet): Dies ist ein Werkzeug, das es Ihnen ermöglicht, JavaScript einzugeben und es auf der aktuellen Seite auszuführen.

Die hier gezeigten Screenshots zeigen die [Firefox-Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/), aber alle modernen Browser verfügen über eine Konsole, die auf ähnliche Weise funktioniert.

### Öffnen der Konsole

Die genauen Anweisungen zum Öffnen der Konsole variieren je nach Browser:

- [Öffnen der Konsole in Firefox](https://firefox-source-docs.mozilla.org/devtools-user/web_console/#opening-the-web-console)
- [Öffnen der Konsole in Chrome](https://developer.chrome.com/docs/devtools/open)
- [Öffnen der Konsole in Microsoft Edge](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/)

### Eingeben und Ausführen von JavaScript

Die Konsole erscheint am unteren Rand des Browserfensters. Entlang der Unterseite der Konsole befindet sich eine Eingabezeile, die Sie verwenden können, um JavaScript einzugeben. Die Ausgabe erscheint im darüber liegenden Bereich:

![Ein Browserfenster mit geöffneter Webkonsole unten, die zwei Zeilen Eingabe und Ausgabe enthält. Text kann darunter eingegeben werden.](2019-04-04_00-15-29.png)

Die Konsole funktioniert genauso wie `eval`: Der zuletzt eingegebene Ausdruck wird zurückgegeben. Der Einfachheit halber kann man sich vorstellen, dass jedes Mal, wenn etwas in die Konsole eingegeben wird, es tatsächlich von `console.log` um `eval` umschlossen ist, etwa so:

```js
console.log(eval("3 + 5"));
```

### Mehrzeilige Eingabe in der Konsole

Standardmäßig, wenn Sie <kbd>Enter</kbd> (oder je nach Tastatur <kbd>Return</kbd>) drücken, nachdem Sie eine Zeile Code eingegeben haben, wird die Zeichenfolge, die Sie eingegeben haben, ausgeführt. Um eine mehrzeilige Eingabe einzugeben:

- Wenn die Zeichenfolge, die Sie eingegeben haben, unvollständig war (zum Beispiel, Sie haben `function foo() {` eingegeben), behandelt die Konsole <kbd>Enter</kbd> als Zeilenumbruch und lässt Sie eine weitere Zeile eingeben.
- Wenn Sie <kbd>Shift</kbd> gedrückt halten, während Sie <kbd>Enter</kbd> drücken, behandelt die Konsole dies als Zeilenumbruch und lässt Sie eine weitere Zeile eingeben.
- Nur in Firefox können Sie den [Mehrzeilen-Eingabemodus](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#multi-line-mode) aktivieren, in dem Sie mehrere Zeilen in einem Mini-Editor eingeben können, um dann das Ganze auszuführen, wenn Sie bereit sind.

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

Drücken Sie <kbd>Enter</kbd>, um es in Ihrem Browser auszuführen!

## Was kommt als Nächstes

In den folgenden Seiten führt Sie dieser Leitfaden in die JavaScript-Syntax und Sprachmerkmale ein, damit Sie komplexere Anwendungen schreiben können.

Denken Sie aber vorerst daran, immer die `(function(){"use strict";` vor Ihrem Code einzuschließen und `})();` am Ende Ihres Codes hinzuzufügen. Die Artikel über den [strengen Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) und über {{Glossary("IIFE", "IIFE")}} erklären, was diese tun, aber vorerst können sie als folgendes verstanden werden:

1. Verhindern von Semantiken in JavaScript, die Anfänger verwirren.
2. Verhindern, dass Codeschnipsel, die in der Konsole ausgeführt werden, aufeinander wirken (z.B. dass etwas in einer Konsolenausführung Erstelltes für eine andere Konsolenausführung verwendet wird).

{{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}
