---
title: Console API
slug: Web/API/Console_API
l10n:
  sourceCommit: 534dcf8cc401ead0b9514f8a2f1fa4c8cf5b5e64
---

{{DefaultAPISidebar("Console API")}} {{AvailableInWorkers}}

Die Console API bietet Funktionen, die es Entwicklern ermöglichen, Debugging-Aufgaben durchzuführen, wie zum Beispiel das Protokollieren von Nachrichten oder den Werten von Variablen an bestimmten Punkten im Code oder das Messen, wie lange eine Operation benötigt, um abgeschlossen zu werden.

## Konzepte und Verwendung

Die Console API begann als eine weitgehend proprietäre API, wobei verschiedene Browser sie in inkonsistenter Weise implementierten. Die [Console API-Spezifikation](https://console.spec.whatwg.org/) wurde erstellt, um konsistentes Verhalten zu definieren, und alle modernen Browser einigten sich darauf, dieses Verhalten zu implementieren – obwohl einige Implementierungen immer noch ihre eigenen zusätzlichen proprietären Funktionen haben. Weitere Informationen dazu finden Sie unter:

- [Google Chrome DevTools Implementierung](https://developer.chrome.com/docs/devtools/console/api/)
- [Safari DevTools Implementierung](https://webkit.org/web-inspector/console-object-api/)

Die Verwendung ist sehr einfach – das [`console`](/de/docs/Web/API/console)-Objekt enthält viele Methoden, die Sie aufrufen können, um grundlegende Debugging-Aufgaben durchzuführen, die sich im Allgemeinen um das Protokollieren verschiedener Werte zur [Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) des Browsers drehen.

Mit Abstand die am häufigsten verwendete Methode ist [`console.log()`](/de/docs/Web/API/console/log_static), die verwendet wird, um den aktuellen Wert zu protokollieren, der in einer bestimmten Variablen enthalten ist.

## Schnittstellen

- [`console`](/de/docs/Web/API/console)
  - : Bietet grundlegende Debugging-Funktionalitäten, einschließlich Protokollierung, Stack-Traces, Timer und Zähler.

## Beispiele

```js
let myString = "Hello world";

// Output "Hello world" to the console
console.log(myString);
```

Sehen Sie sich die [console](/de/docs/Web/API/console)-Referenzseite für weitere Beispiele an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
- [Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) — wie die Web Console in Firefox Konsolen-API-Aufrufe behandelt
- [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) — wie Sie die Konsolenausgabe sehen können, wenn das Debugging-Ziel ein mobiles Gerät ist
