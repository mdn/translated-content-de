---
title: Unterschiede zwischen API-Implementierungen
slug: Mozilla/Add-ons/WebExtensions/Differences_between_API_implementations
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Die Browser-Erweiterungen API ist ein [entstehender Standard](https://browserext.github.io/browserext/). Dadurch, dass sie von den meisten großen Browsern – einschließlich Firefox, Chrome, Edge und Opera – unterstützt wird, gibt es Unterschiede zwischen den verschiedenen Implementierungen. Das bedeutet, dass einige Änderungen notwendig sein könnten, um Ihre Erweiterung für mehrere Browser zu implementieren.

Unter den verschiedenen Browsern, die die Erweiterungen API unterstützen, ist Firefox am konformsten mit dem entstehenden Standard und daher der beste Ausgangspunkt für die Entwicklung von Browser-Erweiterungen.

Die Unterschiede zwischen den API-Implementierungen der Browser fallen in vier Bereiche: Namensraum, asynchrone Ereignisbehandlung, API-Abdeckung und Manifest-Schlüssel.

## Namensraum

Sie referenzieren alle Funktionen der Erweiterungen API mithilfe eines Namensraums. Zum Beispiel, `browser.alarms.create({delayInMinutes});` erstellt einen Alarm in Firefox, der nach der in `delayInMinutes` angegebenen Zeit ausgelöst wird.

Es gibt zwei verwendete API-Namensräume:

- `chrome` wird in Chrome, Edge und Opera verwendet.
- `browser` wird in Firefox und Safari verwendet.

## Asynchrone Ereignisbehandlung

JavaScript bietet mehrere Möglichkeiten, asynchrone Ereignisse zu behandeln. Der vorgeschlagene API-Standard für Erweiterungen ist die Verwendung von Promises. Der Ansatz mit Promises bietet erhebliche Vorteile beim Umgang mit verketteten asynchronen Ereignisaufrufen.

Firefox und Safari implementieren Promises für die API der Erweiterungen. Alle anderen Browser verwenden Callbacks. In Manifest V3 bieten Chrome, Edge und Opera für die meisten geeigneten Methoden [Promises](https://developer.chrome.com/docs/extensions/develop/migrate#promises) an. (vgl. [Chrome Bug 328932](https://crbug.com/328932))

Wenn Sie nicht vertraut damit sind, wie JavaScript asynchrone Ereignisse oder Promises behandeln kann, werfen Sie einen Blick auf [Getting to know asynchronous JavaScript: Callbacks, Promises and Async/Await](https://medium.com/codebuddies/getting-to-know-asynchronous-javascript-callbacks-promises-and-async-await-17e0673281ee) oder die MDN-Seite [Using promises](/de/docs/Web/JavaScript/Guide/Using_promises).

## API-Abdeckung

Die Unterschiede in den Implementierungen der API-Funktionen der Erweiterungen zwischen den Browsern lassen sich in drei breite Kategorien einordnen:

- Keine Unterstützung für eine gesamte Funktion.
- Unterschiede in der Unterstützung von Features innerhalb einer Funktion. Zum Beispiel unterstützt Firefox zum Zeitpunkt des Schreibens nicht die `notification`-Funktionsmethode [`onButtonClicked`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications/onButtonClicked), während Firefox der einzige Browser ist, der [`onShown`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications/onShown) unterstützt.
- Proprietäre Funktionen, die browserspezifische Features unterstützen. Zum Beispiel wird containers zum Zeitpunkt des Schreibens als ein spezifisches Feature von Firefox durch die Funktion [`contextualIdentities`](/de/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities) unterstützt.

## Manifest-Schlüssel

Die Unterschiede in den unterstützten [`manifest.json`-Schlüsseln](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) zwischen den Browsern fallen allgemein in zwei Kategorien:

- Attributinformationen zur Erweiterung. Zum Beispiel enthalten Firefox und Opera zum Zeitpunkt des Schreibens den Schlüssel [`developer`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer) (zusätzlich zum Schlüssel [`author`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/author)), um Details zum Entwickler der Erweiterung aufzuzeichnen.
- Erweiterungsfeatures. Zum Beispiel unterstützt nur Firefox zum Zeitpunkt des Schreibens den Schlüssel [`protocol_handlers`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers) (der webbasierte Protokoll-Handler registriert, Anwendungen, die wissen, wie sie bestimmte Arten von Links behandeln können).

## Weitere Informationen

Detailliertere Informationen zu den Unterschieden in den unterstützten Features der Browser-Erweiterungs-API finden Sie in:

- [Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities)
- [Browser-Unterstützung für JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)
- [Browser-Kompatibilität für manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json#browser_compatibility)
