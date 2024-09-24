---
title: Konsole API
slug: Web/API/Console_API
l10n:
  sourceCommit: f9f48866f02963e752717310b76a70d5bdaf554c
---

{{DefaultAPISidebar("Console API")}} {{AvailableInWorkers}}

Die Konsole API bietet Funktionen, die es Entwicklern ermöglichen, Debugging-Aufgaben durchzuführen, wie z.B. das Protokollieren von Nachrichten oder den Werten von Variablen an bestimmten Stellen in Ihrem Code oder das Messen, wie lange ein Vorgang dauert, um abgeschlossen zu sein.

## Konzepte und Verwendung

Die Konsole API begann als eine weitgehend proprietäre API, mit der verschiedene Browser sie implementierten, wenn auch auf inkonsistente Weise. Die [Console API-Spezifikation](https://console.spec.whatwg.org/) wurde erstellt, um ein konsistentes Verhalten zu definieren, und alle modernen Browser einigten sich schließlich darauf, dieses Verhalten zu implementieren — obwohl einige Implementierungen immer noch ihre eigenen zusätzlichen proprietären Funktionen haben. Erfahren Sie mehr darüber unter:

- [Google Chrome DevTools-Implementierung](https://developer.chrome.com/docs/devtools/console/api/)
- [Safari DevTools-Implementierung](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html)

Die Verwendung ist sehr einfach — das {{domxref("console")}} Objekt enthält viele Methoden, die Sie aufrufen können, um grundlegende Debugging-Aufgaben durchzuführen, die sich im Allgemeinen auf das Protokollieren verschiedener Werte in der [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) des Browsers konzentrieren.

Bei weitem die am häufigsten verwendete Methode ist {{domxref("console/log_static", "console.log()")}}, die verwendet wird, um den aktuellen Wert, der in einer bestimmten Variablen enthalten ist, zu protokollieren.

## Schnittstellen

- {{domxref("console")}}
  - : Bietet grundlegende Debugging-Funktionen, einschließlich Protokollierung, Stacktraces, Timer und Zähler.

## Beispiele

```js
let myString = "Hello world";

// Ausgabe von "Hello world" an die Konsole
console.log(myString);
```

Siehe die [console](/de/docs/Web/API/console) Referenzseite für mehr Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Werkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
- [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) — wie die Web-Konsole in Firefox API-Aufrufe der Konsole behandelt
- [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) — wie die Konsolenausgabe angezeigt wird, wenn das Debugging-Ziel ein mobiles Gerät ist
