---
title: Console API
slug: Web/API/Console_API
l10n:
  sourceCommit: f9f48866f02963e752717310b76a70d5bdaf554c
---

{{DefaultAPISidebar("Console API")}} {{AvailableInWorkers}}

Die Console API bietet Funktionen, die es Entwicklern ermöglichen, Debugging-Aufgaben durchzuführen, wie zum Beispiel das Protokollieren von Nachrichten oder den Werten von Variablen an bestimmten Stellen im Code, oder das Messen der Zeit, die eine Operation für den Abschluss benötigt.

## Konzepte und Verwendung

Die Console API begann als weitgehend proprietäre API, wobei verschiedene Browser sie auf unterschiedliche, oft inkonsistente Weise implementierten. Die [Console API-Spezifikation](https://console.spec.whatwg.org/) wurde erstellt, um ein konsistentes Verhalten zu definieren, und alle modernen Browser einigten sich schließlich darauf, dieses Verhalten zu implementieren — obwohl einige Implementierungen ihre eigenen zusätzlichen proprietären Funktionen beibehalten haben. Weitere Informationen dazu finden Sie unter:

- [Google Chrome DevTools-Implementierung](https://developer.chrome.com/docs/devtools/console/api/)
- [Safari DevTools-Implementierung](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html)

Die Verwendung ist sehr einfach — das [`console`](/de/docs/Web/API/Console)-Objekt enthält viele Methoden, die Sie aufrufen können, um grundlegende Debugging-Aufgaben durchzuführen, die sich im Allgemeinen auf das Protokollieren verschiedener Werte zur [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) des Browsers konzentrieren.

Bei weitem die am häufigsten verwendete Methode ist [`console.log()`](/de/docs/Web/API/Console/log_static), die verwendet wird, um den aktuellen Wert, der in einer bestimmten Variablen enthalten ist, zu protokollieren.

## Schnittstellen

- [`console`](/de/docs/Web/API/Console)
  - : Bietet grundlegende Debugging-Funktionen, einschließlich Protokollierung, Stack-Traces, Timer und Zähler.

## Beispiele

```js
let myString = "Hello world";

// Output "Hello world" to the console
console.log(myString);
```

Siehe die [console](/de/docs/Web/API/console)-Referenzseite für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
- [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) — wie die Webkonsole in Firefox mit Console-API-Aufrufen umgeht
- [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) — wie Sie Konsolenausgaben sehen können, wenn das Debugging-Ziel ein mobiles Gerät ist
