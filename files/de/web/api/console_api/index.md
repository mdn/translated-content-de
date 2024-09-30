---
title: Console API
slug: Web/API/Console_API
l10n:
  sourceCommit: f9f48866f02963e752717310b76a70d5bdaf554c
---

{{DefaultAPISidebar("Console API")}} {{AvailableInWorkers}}

Die Console API bietet Funktionen, mit denen Entwickler Debugging-Aufgaben durchführen können, wie das Protokollieren von Nachrichten oder Werten von Variablen an bestimmten Stellen im Code oder das Messen, wie lange eine Operation dauert, um abzuschließen.

## Konzepte und Nutzung

Die Console API begann als weitgehend proprietäre API, wobei verschiedene Browser sie auf unterschiedliche, oft inkonsistente Weisen implementierten. [Die Console API Spezifikation](https://console.spec.whatwg.org/) wurde erstellt, um konsistentes Verhalten zu definieren, und alle modernen Browser einigten sich schließlich darauf, dieses Verhalten zu implementieren — obwohl einige Implementierungen immer noch ihre eigenen zusätzlichen proprietären Funktionen haben. Weitere Informationen finden Sie unter:

- [Google Chrome DevTools Implementation](https://developer.chrome.com/docs/devtools/console/api/)
- [Safari DevTools Implementation](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html)

Die Nutzung ist sehr einfach — das [`console`](/de/docs/Web/API/Console) Objekt enthält viele Methoden, die Sie aufrufen können, um grundlegende Debugging-Aufgaben durchzuführen, die sich im Allgemeinen darauf konzentrieren, verschiedene Werte zur [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) des Browsers zu protokollieren.

Mit Abstand die am häufigsten verwendete Methode ist [`console.log()`](/de/docs/Web/API/Console/log_static), die verwendet wird, um den aktuellen Wert zu protokollieren, der in einer bestimmten Variablen enthalten ist.

## Schnittstellen

- [`console`](/de/docs/Web/API/Console)
  - : Bietet grundlegende Debugging-Funktionalität, einschließlich Protokollierung, Stack-Traces, Timer und Zähler.

## Beispiele

```js
let myString = "Hello world";

// Output "Hello world" to the console
console.log(myString);
```

Weitere Beispiele finden Sie auf der [console](/de/docs/Web/API/console) Referenzseite.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Werkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
- [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) — wie die Web-Konsole in Firefox Konsolen-API-Aufrufe behandelt
- [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) — wie die Konsolenausgabe angezeigt wird, wenn das Debug-Ziel ein mobiles Gerät ist
