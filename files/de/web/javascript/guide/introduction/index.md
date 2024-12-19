---
title: Einführung
slug: Web/JavaScript/Guide/Introduction
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}

Dieses Kapitel führt in JavaScript ein und erläutert einige seiner grundlegenden Konzepte.

## Was Sie bereits wissen sollten

Dieser Leitfaden setzt voraus, dass Sie über folgende Grundkenntnisse verfügen:

- Ein allgemeines Verständnis des Internets und des World Wide Web ({{Glossary("World_Wide_Web", "WWW")}}).
- Gute Kenntnisse in HyperText Markup Language ({{Glossary("HTML", "HTML")}}).
- Einige Programmiererfahrungen. Wenn Sie neu im Programmieren sind, probieren Sie eines der auf der Hauptseite über [JavaScript](/de/docs/Web/JavaScript) verlinkten Tutorials.

## Wo Sie Informationen über JavaScript finden

Die JavaScript-Dokumentation auf MDN umfasst Folgendes:

- [Dynamisches Scripting mit JavaScript](/de/docs/Learn_web_development/Core/Scripting) bietet strukturierte JavaScript-Leitfäden für Anfänger und führt in grundlegende Konzepte der Programmierung und des Internets ein.
- [JavaScript Guide](/de/docs/Web/JavaScript/Guide) (dieser Leitfaden) bietet einen Überblick über die JavaScript-Sprache und ihre Objekte.
- [JavaScript Reference](/de/docs/Web/JavaScript/Reference) bietet detailliertes Referenzmaterial zu JavaScript.

## Was ist JavaScript?

JavaScript ist eine plattformübergreifende, objektorientierte Skriptsprache, die verwendet wird, um Webseiten interaktiv zu machen (z.B. komplexe Animationen, anklickbare Schaltflächen, Popup-Menüs usw.). Es gibt auch fortgeschrittenere serverseitige Versionen von JavaScript wie Node.js, die es ermöglichen, einer Website mehr Funktionen hinzuzufügen, als nur Dateien herunterzuladen (wie z.B. Echtzeit-Zusammenarbeit zwischen mehreren Computern). In einer Hostumgebung (z.B. einem Webbrowser) kann JavaScript mit den Objekten seiner Umgebung verbunden werden, um diese programmatisch zu steuern.

JavaScript enthält eine Standardbibliothek von Objekten wie `Array`, `Date` und `Math` sowie eine grundlegende Menge an Sprachelementen wie Operatoren, Kontrollstrukturen und Anweisungen. Das Kern-JavaScript kann für verschiedene Zwecke erweitert werden, indem es mit zusätzlichen Objekten ergänzt wird. Zum Beispiel:

- _Clientseitiges JavaScript_ erweitert die Kernsprache, indem es Objekte bereitstellt, die einen Browser und sein _Document Object Model_ (DOM) steuern. Zum Beispiel erlauben clientseitige Erweiterungen einer Anwendung, Elemente auf einem HTML-Formular zu platzieren und auf Benutzereignisse wie Mausklicks, Formulareingaben und Seitennavigation zu reagieren.
- _Serverseitiges JavaScript_ erweitert die Kernsprache, indem es Objekte bereitstellt, die für die Ausführung von JavaScript auf einem Server relevant sind. Zum Beispiel erlauben serverseitige Erweiterungen einer Anwendung, mit einer Datenbank zu kommunizieren, den Informationsfluss von einer Invocation zur nächsten aufrechtzuerhalten oder Dateimanipulationen auf einem Server durchzuführen.

Das bedeutet, dass JavaScript im Browser die Art und Weise ändern kann, wie eine Webseite (DOM) aussieht. Und ebenso kann Node.js JavaScript auf dem Server auf benutzerdefinierte Anfragen reagieren, die durch im Browser ausgeführten Code gesendet werden.

## JavaScript und Java

JavaScript und Java sind in gewisser Weise ähnlich, aber in anderen fundamental unterschiedlich. Die JavaScript-Sprache ähnelt Java, hat jedoch nicht die statische Typisierung und strenge Typenprüfung von Java. JavaScript folgt weitgehend der Ausdruckssyntax, den Namenskonventionen und den grundlegenden Kontrollflusskonstrukten von Java, was der Grund dafür ist, dass es von LiveScript in JavaScript umbenannt wurde.

Im Gegensatz zu Javas kompilierzeitbasiertem System von Klassen, die durch Deklarationen aufgebaut werden, unterstützt JavaScript ein Laufzeitsystem, das auf einer kleinen Anzahl von Datentypen basiert, die numerische, boolesche und string-Werte repräsentieren. JavaScript verfügt über ein prototype-basiertes Objektmodell anstelle des gebräuchlicheren klassenbasierten Objektmodells. Das prototype-basierte Modell ermöglicht eine dynamische Vererbung; das heißt, das was vererbt wird, kann sich von Objekt zu Objekt unterscheiden. Außerdem unterstützt JavaScript Funktionen ohne spezielle deklarative Anforderungen. Funktionen können Eigenschaften von Objekten sein und als lose typisierte Methoden ausgeführt werden.

JavaScript ist im Vergleich zu Java eine sehr freie Sprache. Sie müssen nicht alle Variablen, Klassen und Methoden deklarieren. Sie müssen sich keine Gedanken darüber machen, ob Methoden öffentlich, privat oder geschützt sind, und Sie müssen keine Schnittstellen implementieren. Variablen, Parameter und Rückgabetypen von Funktionen sind nicht explizit typisiert.

Java ist eine klassenbasierte Programmiersprache, die für schnelle Ausführung und Typensicherheit konzipiert ist. Typensicherheit bedeutet zum Beispiel, dass ein Java-Integer nicht in eine Objekt-Referenz umgewandelt oder auf privaten Memory durch Korruption des Java-Bytecodes zugegriffen werden kann. Das klassenbasierte Modell von Java bedeutet, dass Programme ausschließlich aus Klassen und ihren Methoden bestehen. Javas klassenbasierte Vererbung und starke Typisierung erfordern in der Regel eng verbundene Objekthierarchien. Diese Anforderungen machen die Java-Programmierung komplexer als die JavaScript-Programmierung.

Im Gegensatz dazu stammt JavaScript im Geiste von einer Reihe kleinerer, dynamisch typisierter Sprachen wie HyperTalk und dBase ab. Diese Skriptsprachen bieten aufgrund ihrer einfacheren Syntax, spezialisierten eingebauten Funktionen und minimalen Anforderungen an die Objekterstellung ein breiteres Publikum für ihre Programmierwerkzeuge.

| JavaScript                                                                                                                                                                   | Java                                                                                                                                                                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Objektorientiert. Kein Unterschied zwischen Objekttypen. Vererbung erfolgt durch den Prototyp-Mechanismus und Eigenschaften und Methoden können einem beliebigen Objekt dynamisch hinzugefügt werden. | Klassenbasiert. Objekte sind in Klassen und Instanzen unterteilt mit allen Vererbungen durch die Klassenhierarchie. Klassen und Instanzen können keine Eigenschaften oder Methoden dynamisch hinzugefügt bekommen. |
| Variablendatentypen werden nicht deklariert (dynamische Typisierung, lose typisiert).                                                                                                       | Variablendatentypen müssen deklariert werden (statische Typisierung, stark typisiert).                                                                                                                     |
| Kann nicht automatisch auf die Festplatte schreiben.                                                                                                                                     | Kann automatisch auf die Festplatte schreiben.                                                                                                                                                    |

## JavaScript und die ECMAScript-Spezifikation

JavaScript ist bei [Ecma International](https://ecma-international.org/) — dem europäischen Verband zur Standardisierung von Informations- und Kommunikationssystemen (ECMA war früher ein Akronym für European Computer Manufacturers Association) standardisiert, um eine standardisierte, internationale Programmiersprache auf Basis von JavaScript bereitzustellen. Diese standardisierte Version von JavaScript, genannt ECMAScript, verhält sich in allen Anwendungen, die den Standard unterstützen, gleich. Unternehmen können die offene Standardsprache nutzen, um ihre Implementierung von JavaScript zu entwickeln. Der ECMAScript-Standard ist in der ECMA-262-Spezifikation dokumentiert.

Der ECMA-262-Standard ist auch von der [ISO](https://www.iso.org/home.html) (International Organization for Standardization) als ISO-16262 genehmigt. Sie können die Spezifikation auch auf [der Website von Ecma International](https://ecma-international.org/publications-and-standards/standards/ecma-262/) finden. Die ECMAScript-Spezifikation beschreibt nicht das Document Object Model (DOM), das vom [World Wide Web Consortium (W3C)](https://www.w3.org/) und/oder [WHATWG (Web Hypertext Application Technology Working Group)](https://whatwg.org/) standardisiert ist. Das DOM definiert die Art und Weise, in der HTML-Dokumentobjekte Ihrem Skript zugänglich gemacht werden. Um eine bessere Vorstellung von den verschiedenen Technologien zu bekommen, die beim Programmieren mit JavaScript verwendet werden, konsultieren Sie den Artikel [JavaScript technologies overview](/de/docs/Web/JavaScript/JavaScript_technologies_overview).

### JavaScript-Dokumentation versus die ECMAScript-Spezifikation

Die ECMAScript-Spezifikation ist ein Satz von Anforderungen zur Implementierung von ECMAScript. Sie ist nützlich, wenn Sie standardkonforme Sprachfunktionen in Ihrer ECMAScript-Implementierung oder Engine (wie SpiderMonkey in Firefox oder V8 in Chrome) implementieren möchten.

Das ECMAScript-Dokument ist _nicht_ dazu gedacht, Skriptprogrammierern zu helfen. Verwenden Sie die JavaScript-Dokumentation, um Informationen zum Schreiben von Skripten zu erhalten.

Die ECMAScript-Spezifikation verwendet Terminologie und Syntax, die einem JavaScript-Programmierer möglicherweise nicht vertraut sind. Obwohl die Beschreibung der Sprache in ECMAScript abweichen kann, bleibt die Sprache selbst gleich. JavaScript unterstützt alle in der ECMAScript-Spezifikation beschriebenen Funktionen.

Die JavaScript-Dokumentation beschreibt Aspekte der Sprache, die für einen JavaScript-Programmierer geeignet sind.

## Erste Schritte mit JavaScript

Um mit JavaScript zu beginnen, benötigen Sie lediglich einen modernen Webbrowser. Aktuelle Versionen von [Firefox](https://www.mozilla.org/en-CA/firefox/new/), [Chrome](https://www.google.com/chrome/index.html), [Microsoft Edge](https://www.microsoft.com/en-us/edge) und [Safari](https://www.apple.com/safari/) unterstützen alle die in diesem Leitfaden besprochenen Funktionen.

Ein sehr nützliches Werkzeug zur Erforschung von JavaScript ist die JavaScript-Konsole (manchmal als Webkonsole oder einfach als Konsole bezeichnet): Dieses ist ein Werkzeug, das es Ihnen ermöglicht, JavaScript einzugeben und es auf der aktuellen Seite auszuführen.

Die hier gezeigten Screenshots zeigen die [Firefox-Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/), aber alle modernen Browser verfügen über eine Konsole, die in ähnlicher Weise funktioniert.

### Die Konsole öffnen

Die genauen Anweisungen zum Öffnen der Konsole unterscheiden sich von Browser zu Browser:

- [Die Konsole in Firefox öffnen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/#opening-the-web-console)
- [Die Konsole in Chrome öffnen](https://developer.chrome.com/docs/devtools/open)
- [Die Konsole in Microsoft Edge öffnen](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/)

### JavaScript eingeben und ausführen

Die Konsole erscheint unten im Browserfenster. Entlang der unteren Linie der Konsole befindet sich eine Eingabezeile, die Sie verwenden können, um JavaScript einzugeben, und die Ausgabe erscheint im darüber liegenden Bereich:

![Ein Browserfenster mit geöffneter Webkonsole am unteren Rand, das zwei Zeilen Eingabe und Ausgabe enthält. Text kann darunter eingegeben werden.](2019-04-04_00-15-29.png)

Die Konsole funktioniert genau wie `eval`: Der letzte eingegebene Ausdruck wird zurückgegeben. Der Einfachheit halber kann man sich vorstellen, dass jedes Mal, wenn etwas in die Konsole eingegeben wird, es eigentlich von `console.log` um `eval` herum umgeben ist, wie folgt:

```js
console.log(eval("3 + 5"));
```

### Mehrzeilige Eingabe in der Konsole

Standardmäßig wird die von Ihnen getippte Zeichenfolge ausgeführt, wenn Sie nach dem Eingeben einer Codezeile die Taste <kbd>Enter</kbd> (oder <kbd>Return</kbd>, je nach Tastatur) drücken. Um mehrzeilige Eingaben vorzunehmen:

- Wenn die von Ihnen getippte Zeichenfolge unvollständig war (zum Beispiel `function foo() {`), behandelt die Konsole <kbd>Enter</kbd> als Zeilenumbruch und lässt Sie eine weitere Zeile eingeben.
- Wenn Sie <kbd>Shift</kbd> gedrückt halten, während Sie <kbd>Enter</kbd> drücken, behandelt die Konsole dies als Zeilenumbruch und lässt Sie eine weitere Zeile eingeben.
- Nur in Firefox können Sie den [Mehrzeiligen Eingabemodus](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#multi-line-mode) aktivieren, in dem Sie mehrere Zeilen in einem Mini-Editor eingeben und das Ganze ausführen können, wenn Sie fertig sind.

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

Drücken Sie <kbd>Enter</kbd>, um zu sehen, wie es sich in Ihrem Browser entfaltet!

## Was kommt als Nächstes

Auf den folgenden Seiten führt Sie dieser Leitfaden in die JavaScript-Syntax und die Sprachmerkmale ein, sodass Sie in der Lage sein werden, komplexere Anwendungen zu schreiben.

Aber für den Moment denken Sie daran, immer `(function(){"use strict";` vor Ihrem Code einzuschließen und `})();` am Ende Ihres Codes hinzuzufügen. Die Artikel über den [Strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) und {{Glossary("IIFE", "IIFE")}} erklären, was diese bewirken, aber vorerst kann man sich vorstellen, dass sie Folgendes tun:

1. Verhindern Sie Semantiken in JavaScript, die Anfängern Probleme bereiten.
2. Verhindern Sie, dass Codeschnipsel, die in der Konsole ausgeführt werden, miteinander interagieren (z. B. etwas, das in einer Konsolenausführung erstellt wurde, für eine andere Konsolenausführung verwendet wird).

{{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}
