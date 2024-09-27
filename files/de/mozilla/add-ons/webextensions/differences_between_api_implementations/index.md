---
title: Unterschiede zwischen API-Implementierungen
slug: Mozilla/Add-ons/WebExtensions/Differences_between_API_implementations
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die Browser-Erweiterungen API ist ein [aufkommender Standard](https://browserext.github.io/browserext/). Infolgedessen wird sie zwar von den meisten großen Browsern unterstützt – einschließlich Firefox, Chrome, Edge und Opera – es gibt jedoch Unterschiede zwischen den verschiedenen Implementierungen. Das bedeutet, dass einige Änderungen notwendig sein könnten, um Ihre Erweiterung für mehrere Browser zu implementieren.

Unter den verschiedenen Browsern, die die Erweiterungen API unterstützen, ist Firefox der Standard am nächsten und daher Ihr bester Ausgangspunkt, wenn Sie Browser-Erweiterungen entwickeln.

Die Unterschiede zwischen den API-Implementierungen der Browser fallen in vier Bereiche: Namespace, asynchrone Ereignisbehandlung, API-Abdeckung und Manifest-Schlüssel.

## Namespace

Alle Funktionen der Erweiterungen-API werden über einen Namespace referenziert. Zum Beispiel, `browser.alarms.create({delayInMinutes});` erstellt einen Alarm in Firefox, der nach der in `delayInMinutes` angegebenen Zeit ausgelöst wird.

Es gibt zwei verwendete API-Namespaces:

- `chrome`, verwendet in Chrome, Edge und Opera.
- `browser`, verwendet in Firefox und Safari.

## Asynchrone Ereignisbehandlung

JavaScript bietet mehrere Möglichkeiten, asynchrone Ereignisse zu behandeln. Der vorgeschlagene Standard für die Erweiterungen-API ist die Verwendung von Promises. Der Promises-Ansatz bietet erhebliche Vorteile bei der Behandlung von verketteten asynchronen Ereignisaufrufen.

Firefox und Safari implementieren Promises für die Erweiterungen-API. Alle anderen Browser verwenden Callbacks. In Manifest V3 unterstützen Chrome, Edge und Opera [Promises](https://developer.chrome.com/docs/extensions/develop/migrate#promises) bei den meisten geeigneten Methoden. (vgl. [Chrome Bug 328932](https://crbug.com/328932))

Wenn Sie nicht mit der Handhabung asynchroner Ereignisse oder Promises in JavaScript vertraut sind, schauen Sie sich [Getting to know asynchronous JavaScript: Callbacks, Promises and Async/Await](https://medium.com/codebuddies/getting-to-know-asynchronous-javascript-callbacks-promises-and-async-await-17e0673281ee) oder die MDN-Seite [Using promises](/de/docs/Web/JavaScript/Guide/Using_promises) an.

## API-Abdeckung

Die Unterschiede in den Implementierungen der Funktionen der Erweiterungen API zwischen den Browsern fallen in drei große Kategorien:

- Mangelnde Unterstützung für eine gesamte Funktion.
- Unterschiede in der Unterstützung von Funktionen innerhalb einer Funktion. Zum Beispiel unterstützt Firefox zum Zeitpunkt der Erstellung dieses Dokuments die Funktion [`notification`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications)-Methode [`onButtonClicked`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications/onButtonClicked) nicht, während Firefox der einzige Browser ist, der [`onShown`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications/onShown) unterstützt.
- Proprietäre Funktionen, die browser-spezifische Funktionen unterstützen. Zum Beispiel ist zum Zeitpunkt der Erstellung dieses Dokuments "containers" eine Firefox-spezifische Funktion, die von der [`contextualIdentities`](/de/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities)-Funktion unterstützt wird.

## Manifest-Schlüssel

Die Unterschiede in den unterstützten [`manifest.json`-Schlüsseln](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) zwischen den Browsern fallen im Wesentlichen in zwei Kategorien:

- Erweiterungsinformationsattribute. Zum Beispiel beinhalten Firefox und Opera zum Zeitpunkt der Erstellung dieses Dokuments den Schlüssel [`developer`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer) (zusätzlich zum Schlüssel [`author`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/author)), um Details über den Entwickler der Erweiterung zu erfassen.
- Erweiterungsfunktionen. Zum Beispiel unterstützt nur Firefox zum Zeitpunkt der Erstellung dieses Dokuments den Schlüssel [`protocol_handlers`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers) (welcher webbasierte Protokoll-Handler registriert, Anwendungen, die wissen, wie man mit bestimmten Arten von Links umgeht).

## Mehr Informationen

Ausführlichere Informationen über die Unterschiede in den unterstützten Funktionen der Browser-Erweiterungen API finden Sie in:

- [Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities)
- [Browserunterstützung für JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)
- [Browser-Kompatibilität für manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json)
