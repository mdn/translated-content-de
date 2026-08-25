---
title: Unterschiede zwischen API-Implementierungen
slug: Mozilla/Add-ons/WebExtensions/Differences_between_API_implementations
l10n:
  sourceCommit: 83b221d2955a42bed9b87a5206a7953d1b57d8a9
---

Die Browser-Erweiterungen-API ist ein [aufkommender Standard](https://browserext.github.io/browserext/). Infolgedessen gibt es, obwohl sie von den meisten großen Browsern unterstützt wird – einschließlich Firefox, Chrome, Edge und Opera – Unterschiede zwischen den verschiedenen Implementierungen. Dies bedeutet, dass möglicherweise einige Änderungen erforderlich sind, um Ihre Erweiterung für mehrere Browser zu implementieren.

Unter den verschiedenen Browsern, die die Erweiterungen-API unterstützen, ist Firefox der Standard am nächsten und daher der beste Ausgangspunkt bei der Entwicklung von Browser-Erweiterungen.

Die Unterschiede zwischen den API-Implementierungen der Browser fallen in vier Bereiche: Namensraum, asynchrone Ereignisbehandlung, API-Abdeckung und Manifest-Schlüssel.

## Namensraum

Sie beziehen sich auf alle API-Funktionen von Erweiterungen über einen Namensraum. Zum Beispiel erstellt `browser.alarms.create({delayInMinutes});` in Firefox einen Alarm, der nach der in `delayInMinutes` angegebenen Zeit ausgelöst wird.

Es gibt zwei API-Namensräume, die verwendet werden:

- `browser`, verwendet in Firefox und Safari, und ab Chrome 148, in Chrome, Edge und Opera (siehe [Historische Unterschiede](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#historical_differences) auf der Chrome-Inkompatibilitäten-Seite für weitere Details).
- `chrome`, verwendet in Chrome, Edge und Opera.

## Asynchrone Ereignisbehandlung

JavaScript bietet mehrere Möglichkeiten zur Behandlung asynchroner Ereignisse. Der vorgeschlagene Standard für die Erweiterungen-API ist die Verwendung von Promises. Der Ansatz der Promises bietet erhebliche Vorteile bei der Handhabung verketteter asynchroner Ereignisaufrufe.

Firefox und Safari implementieren [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) für die Erweiterungen-API. Mit der Einführung von Manifest V3 begannen auch Chrome, Edge und Opera, Promises für asynchrone Methoden zu bieten, mit vollständiger Abdeckung in Chrome 152. Siehe [Historische Unterschiede](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#historical_differences) auf der Chrome-Inkompatibilitäten-Seite für weitere Details.

> [!NOTE]
> Alle Hauptbrowser unterstützen auch Callbacks für die Kompatibilität.

Wenn Sie nicht mit der Handhabung von asynchronen Ereignissen oder Promises in JavaScript vertraut sind, schauen Sie sich [Einführung in asynchrones JavaScript: Callbacks, Promises und Async/Await](https://medium.com/codebuddies/getting-to-know-asynchronous-javascript-callbacks-promises-and-async-await-17e0673281ee) oder die MDN-Seite [Using promises](/de/docs/Web/JavaScript/Guide/Using_promises) an.

## API-Abdeckung

Die Unterschiede in der Implementierung der Erweiterungen-API-Funktionen zwischen den Browsern fallen in drei breite Kategorien:

- Mangelnde Unterstützung für eine gesamte Funktion.
- Unterschiede in der Unterstützung von Funktionen innerhalb einer Funktion. Zum Beispiel unterstützt Firefox zum Zeitpunkt des Schreibens nicht die [`notification`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications)-Funktionen-Methode [`onButtonClicked`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications/onButtonClicked), während Firefox der einzige Browser ist, der [`onShown`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications/onShown) unterstützt.
- Proprietäre Funktionen, die browserspezifische Features unterstützen. Zum Beispiel ist Containers zum Zeitpunkt des Schreibens ein Firefox-spezifisches Feature, das von der [`contextualIdentities`](/de/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities)-Funktion unterstützt wird.

## Manifest-Schlüssel

Die Unterschiede in den unterstützten [`manifest.json`-Schlüsseln](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) zwischen den Browsern lassen sich grob in zwei Kategorien unterteilen:

- Erweiterungsinformation-Attribute. Zum Beispiel fügen Firefox und Opera zum Zeitpunkt des Schreibens den [`developer`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer)-Schlüssel hinzu (zusätzlich zum [`author`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/author)-Schlüssel), um Details über den Erweiterungsentwickler zu protokollieren.
- Erweiterungsfunktionen. Zum Beispiel unterstützt nur Firefox zum Zeitpunkt des Schreibens den [`protocol_handlers`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers)-Schlüssel (der webbasierte Protokoll-Handler registriert, Anwendungen, die wissen, wie man bestimmte Arten von Links behandelt).

## Weitere Informationen

Detaillierte Informationen über die Unterschiede in den unterstützten Browser-Erweiterungen-API-Features finden Sie in:

- [Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities)
- [Browserunterstützung für JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)
- [Browser-Kompatibilität für manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json#browser_compatibility)
