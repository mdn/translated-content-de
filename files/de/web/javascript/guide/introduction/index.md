---
title: Einführung
slug: Web/JavaScript/Guide/Introduction
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}

Dieses Kapitel führt in JavaScript ein und behandelt einige seiner grundlegenden Konzepte.

## Was Sie bereits wissen sollten

Dieser Leitfaden geht davon aus, dass Sie über folgende Grundkenntnisse verfügen:

- Ein allgemeines Verständnis des Internets und des World Wide Webs ({{Glossary("World_Wide_Web", "WWW")}}).
- Gute Kenntnisse von HyperText Markup Language ({{Glossary("HTML", "HTML")}}).
- Einige Programmiererfahrungen. Wenn Sie neu im Programmieren sind, versuchen Sie eines der Tutorials auf der Hauptseite über [JavaScript](/de/docs/Web/JavaScript).

## Wo Sie Informationen über JavaScript finden

Die JavaScript-Dokumentation auf MDN umfasst Folgendes:

- [Dynamische Skripterstellung mit JavaScript](/de/docs/Learn_web_development/Core/Scripting) bietet strukturierte JavaScript-Leitfäden für Anfänger und führt in grundlegende Konzepte der Programmierung und des Internets ein.
- [JavaScript Leitfaden](/de/docs/Web/JavaScript/Guide) (dieser Leitfaden) bietet einen Überblick über die JavaScript-Sprache und ihre Objekte.
- [JavaScript Referenz](/de/docs/Web/JavaScript/Reference) bietet detailliertes Referenzmaterial für JavaScript.

## Was ist JavaScript?

JavaScript ist eine plattformübergreifende, objektorientierte Skriptsprache, die verwendet wird, um Webseiten interaktiv zu gestalten (z.B. komplexe Animationen, anklickbare Buttons, Popup-Menüs usw.). Es gibt auch fortgeschrittenere serverseitige Versionen von JavaScript wie Node.js, die es ermöglichen, eine Website um mehr Funktionalität als nur das Herunterladen von Dateien zu erweitern (wie Echtzeit-Zusammenarbeit zwischen mehreren Computern). Innerhalb einer Host-Umgebung (z.B. eines Webbrowsers) kann JavaScript mit den Objekten seiner Umgebung verbunden werden, um diese programmatisch zu steuern.

JavaScript enthält eine Standardbibliothek von Objekten wie `Array`, `Map` und `Math` sowie eine Kernmenge von Sprachelementen wie Operatoren, Kontrollstrukturen und Anweisungen. Core JavaScript kann für verschiedene Zwecke erweitert werden, indem es mit zusätzlichen Objekten ergänzt wird; zum Beispiel:

- _Clientseitiges JavaScript_ erweitert die Kernsprache, indem es Objekte bereitstellt, um einen Browser und sein _Document Object Model_ (DOM) zu steuern. Zum Beispiel ermöglichen clientseitige Erweiterungen einer Anwendung, Elemente auf ein HTML-Formular zu platzieren und auf Benutzerereignisse wie Mausklicks, Formulareingaben und Seitenaufrufe zu reagieren.
- _Serverseitiges JavaScript_ erweitert die Kernsprache, indem es Objekte bereitstellt, die für das Ausführen von JavaScript auf einem Server relevant sind. Zum Beispiel ermöglichen serverseitige Erweiterungen einer Anwendung die Kommunikation mit einer Datenbank, die Kontinuität von Informationen von einem Aufruf der Anwendung zum nächsten oder Dateimanipulationen auf einem Server.

Das bedeutet, dass JavaScript im Browser das Aussehen der Webseite (DOM) verändern kann. Ebenso kann Node.js JavaScript auf dem Server auf benutzerdefinierte Anfragen reagieren, die durch im Browser ausgeführten Code gesendet werden.

## JavaScript und Java

JavaScript und Java sind in mancher Hinsicht ähnlich, unterscheiden sich jedoch grundlegend in anderen. Die JavaScript-Sprache ähnelt Java, verfügt jedoch nicht über Javas statische Typisierung und strenge Typprüfung. JavaScript folgt dem meisten Java-Ausdruckssyntax, den Benennungs-Konventionen und grundlegenden Kontrollflusskonstrukten, weshalb es von LiveScript in JavaScript umbenannt wurde.

Im Gegensatz zu Javas Kompilierzeit-System von Klassen, die durch Deklarationen gebaut werden, unterstützt JavaScript ein Laufzeitsystem, das auf einer kleinen Anzahl von Datentypen basiert, die numerische, boolesche und Zeichenfolgenwerte darstellen. JavaScript hat ein prototypbasiertes Objektmodell anstelle des weiter verbreiteten klassenbasierten Objektmodells. Das prototypbasierte Modell ermöglicht dynamische Vererbung; das heißt, was vererbt wird, kann für einzelne Objekte variieren. JavaScript unterstützt auch Funktionen ohne besondere deklarative Anforderungen. Funktionen können Eigenschaften von Objekten sein, die als lose typisierte Methoden ausgeführt werden.

JavaScript ist eine sehr freie Sprache im Vergleich zu Java. Sie müssen nicht alle Variablen, Klassen und Methoden deklarieren. Sie müssen sich nicht darum kümmern, ob Methoden öffentlich, privat oder geschützt sind, und Sie müssen keine Schnittstellen implementieren. Variablen, Parameter und Rückgabetypen von Funktionen sind nicht explizit typisiert.

Java ist eine klassenbasierte Programmiersprache, die für schnelle Ausführung und Typsicherheit entwickelt wurde. Typsicherheit bedeutet beispielsweise, dass Sie einen Java-Integer nicht in einen Objektverweis umwandeln oder auf privaten Speicher zugreifen können, indem Sie den Java-Bytecode beschädigen. Javas klassenbasiertes Modell bedeutet, dass Programme ausschließlich aus Klassen und deren Methoden bestehen. Die Klassenerbschaft und starke Typisierung von Java erfordern in der Regel eng gekoppelte Objekt-Hierarchien. Diese Anforderungen machen die Java-Programmierung komplexer als die JavaScript-Programmierung.

Im Gegensatz dazu leitet sich JavaScript im Geist von einer Reihe kleinerer, dynamisch typisierter Sprachen wie HyperTalk und dBase ab. Diese Skriptsprachen bieten Programmierwerkzeuge für ein wesentlich breiteres Publikum dank ihrer einfacheren Syntax, spezialisierter eingebauter Funktionalität und minimalen Anforderungen an die Objekterstellung.

| JavaScript                                                                                                                                                                                     | Java                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Objektorientiert. Keine Unterscheidung zwischen Objekttypen. Vererbung erfolgt über den Prototyp-Mechanismus, und Eigenschaften und Methoden können jedem Objekt dynamisch hinzugefügt werden. | Klassenbasiert. Objekte sind in Klassen und Instanzen unterteilt, wobei alle Vererbung über die Klassenhierarchie erfolgt. Klassen und Instanzen können keine Eigenschaften oder Methoden dynamisch hinzufügen. |
| Variablentypen werden nicht deklariert (dynamische Typisierung, lose getypt).                                                                                                                  | Variablentypen müssen deklariert werden (statische Typisierung, stark getypt).                                                                                                                                  |
| Kann nicht automatisch auf die Festplatte schreiben.                                                                                                                                           | Kann automatisch auf die Festplatte schreiben.                                                                                                                                                                  |

## JavaScript und die ECMAScript-Spezifikation

JavaScript ist standardisiert bei [Ecma International](https://ecma-international.org/) — der europäischen Vereinigung zur Standardisierung von Informations- und Kommunikationssystemen (ECMA war früher ein Akronym für die Europäische Vereinigung der Computerhersteller) um eine standardisierte, internationale Programmiersprache basierend auf JavaScript bereitzustellen. Diese standardisierte Version von JavaScript, genannt ECMAScript, verhält sich in allen Anwendungen, die den Standard unterstützen, gleich. Unternehmen können die Open-Standard-Sprache verwenden, um ihre Implementierung von JavaScript zu entwickeln. Der ECMAScript-Standard ist in der ECMA-262-Spezifikation dokumentiert.

Der ECMA-262-Standard wird auch von der [ISO](https://www.iso.org/home.html) (International Organization for Standardization) als ISO-16262 genehmigt. Sie können die Spezifikation auch auf [der Ecma International Website](https://ecma-international.org/publications-and-standards/standards/ecma-262/) finden. Die ECMAScript-Spezifikation beschreibt nicht das Document Object Model (DOM), das vom [World Wide Web Consortium (W3C)](https://www.w3.org/) und/oder [WHATWG (Web Hypertext Application Technology Working Group)](https://whatwg.org/) standardisiert wird. Das DOM definiert die Art und Weise, wie HTML-Dokumentobjekte Ihrem Skript zugänglich gemacht werden. Um einen besseren Überblick über die verschiedenen Technologien zu bekommen, die bei der Programmierung mit JavaScript verwendet werden, schauen Sie sich den Artikel [Überblick über JavaScript-Technologien](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview) an.

### JavaScript-Dokumentation versus ECMAScript-Spezifikation

Die ECMAScript-Spezifikation ist ein Satz von Anforderungen zur Implementierung von ECMAScript. Sie ist nützlich, wenn Sie standardkonforme Sprachfeatures in Ihrer ECMAScript-Implementierung oder -Engine (wie SpiderMonkey in Firefox oder V8 in Chrome) implementieren möchten.

Das ECMAScript-Dokument ist _nicht_ dazu gedacht, Skriptprogrammierer zu unterstützen. Verwenden Sie die JavaScript-Dokumentation für Informationen bei der Erstellung von Skripten.

Die ECMAScript-Spezifikation verwendet Begriffe und Syntax, die einem JavaScript-Programmierer möglicherweise unbekannt sind. Obwohl die Beschreibung der Sprache in ECMAScript abweichen kann, bleibt die Sprache selbst gleich. JavaScript unterstützt alle in der ECMAScript-Spezifikation aufgeführten Funktionalitäten.

Die JavaScript-Dokumentation beschreibt Aspekte der Sprache, die für einen JavaScript-Programmierer relevant sind.

## Einstieg in JavaScript

Um mit JavaScript zu beginnen, benötigen Sie lediglich einen modernen Webbrowser. Aktuelle Versionen von [Firefox](https://www.mozilla.org/en-CA/firefox/new/), [Chrome](https://www.google.com/chrome/index.html), [Microsoft Edge](https://www.microsoft.com/en-us/edge) und [Safari](https://www.apple.com/safari/) unterstützen alle die in diesem Leitfaden besprochenen Funktionen.

Ein sehr nützliches Werkzeug, um JavaScript zu erkunden, ist die JavaScript-Konsole (manchmal auch Webkonsole oder einfach Konsole genannt): Dies ist ein Werkzeug, das Ihnen ermöglicht, JavaScript einzugeben und es auf der aktuellen Seite auszuführen.

Die hier gezeigten Screenshots zeigen die [Firefox Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/), aber alle modernen Browser liefern eine Konsole, die auf ähnliche Weise funktioniert.

### Öffnen der Konsole

Die genauen Anweisungen zum Öffnen der Konsole unterscheiden sich von Browser zu Browser:

- [Öffnen der Konsole in Firefox](https://firefox-source-docs.mozilla.org/devtools-user/web_console/#opening-the-web-console)
- [Öffnen der Konsole in Chrome](https://developer.chrome.com/docs/devtools/open)
- [Öffnen der Konsole in Microsoft Edge](https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/)

### Eingabe und Ausführung von JavaScript

Die Konsole erscheint am unteren Rand des Browserfensters. Entlang der unteren Linie der Konsole befindet sich eine Eingabezeile, die Sie zum Eingeben von JavaScript verwenden können, und die Ausgabe erscheint im oberen Fenster:

![Ein Browserfenster mit geöffneter Webkonsole unten, das zwei Eingabe- und Ausgabelinien enthält. Text kann darunter eingegeben werden.](2019-04-04_00-15-29.png)

Die Konsole funktioniert genau wie `eval`: Der zuletzt eingegebene Ausdruck wird zurückgegeben. Der Einfachheit halber kann man sich vorstellen, dass jedes Mal, wenn etwas in die Konsole eingegeben wird, es tatsächlich von `console.log` um `eval` umgeben ist, etwa so:

```js
console.log(eval("3 + 5"));
```

### Mehrzeilige Eingabe in der Konsole

Standardmäßig, wenn Sie <kbd>Enter</kbd> (oder <kbd>Return</kbd>, je nach Ihrer Tastatur) drücken, nachdem Sie eine Codezeile eingegeben haben, wird die von Ihnen eingegebene Zeichenkette ausgeführt. Um mehrzeilige Eingaben zu machen:

- Wenn die von Ihnen eingegebene Zeichenkette unvollständig war (zum Beispiel, wenn Sie `function foo() {` eingegeben haben), wird die Konsole <kbd>Enter</kbd> als Zeilenumbruch behandeln und Sie können eine weitere Zeile eingeben.
- Wenn Sie <kbd>Shift</kbd> gedrückt halten, während Sie <kbd>Enter</kbd> drücken, wird die Konsole dies als Zeilenumbruch behandeln und Sie können eine weitere Zeile eingeben.
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

Drücken Sie <kbd>Enter</kbd>, um zu sehen, wie es in Ihrem Browser entfaltet wird!

## Was kommt als Nächstes

Auf den folgenden Seiten führt Sie dieser Leitfaden in die JavaScript-Syntax und Sprachmerkmale ein, damit Sie komplexere Anwendungen schreiben können.

Aber denken Sie vorerst daran, immer `(function(){"use strict";` vor Ihrem Code einzufügen und mit `})();` am Ende Ihres Codes abzuschließen. Die Artikel über den [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) und {{Glossary("IIFE", "IIFE")}} erklären, was diese tun, aber vorerst können sie als folgendes gedacht werden:

1. Vermeiden Sie Semantiken in JavaScript, die Anfängern Probleme bereiten.
2. Verhindern Sie, dass Codeschnipsel, die in der Konsole ausgeführt werden, miteinander interagieren (z.B. dass etwas, das in einer Konsolenausführung erstellt wurde, für eine andere Konsolenausführung verwendet wird).

{{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}
