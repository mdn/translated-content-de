---
title: Unterschiede zwischen API-Implementierungen
slug: Mozilla/Add-ons/WebExtensions/Differences_between_API_implementations
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die API für Browsererweiterungen ist ein [entstehender Standard](https://browserext.github.io/browserext/). Daher gibt es, obwohl sie von den meisten großen Browsern - einschließlich Firefox, Chrome, Edge und Opera - unterstützt wird, Unterschiede zwischen den verschiedenen Implementierungen. Dies bedeutet, dass einige Änderungen erforderlich sein können, um Ihre Erweiterung für mehrere Browser zu implementieren.

Unter den verschiedenen Browsern, die die Erweiterungs-API unterstützen, ist Firefox der konformste mit dem aufkommenden Standard und daher der beste Ausgangspunkt für die Entwicklung von Browser-Erweiterungen.

Die Unterschiede zwischen den API-Implementierungen der Browser lassen sich in vier Bereiche unterteilen: Namensraum, asynchrone Ereignisbehandlung, API-Abdeckung und Manifestschlüssel.

## Namensraum

Sie referenzieren alle Funktionen der Erweiterungs-API unter Verwendung eines Namensraums. Zum Beispiel erzeugt `browser.alarms.create({delayInMinutes});` einen Alarm in Firefox, der nach der in `delayInMinutes` angegebenen Zeit ausgelöst wird.

Es gibt zwei verwendete API-Namensräume:

- `chrome`, verwendet in Chrome, Edge und Opera.
- `browser`, verwendet in Firefox und Safari.

## Asynchrone Ereignisbehandlung

JavaScript bietet mehrere Möglichkeiten, um asynchrone Ereignisse zu handhaben. Der vorgeschlagene Standard der Erweiterungs-API ist die Verwendung von Promises. Der Ansatz mit Promises bietet erhebliche Vorteile bei der Verarbeitung von verketteten asynchronen Ereignisaufrufen.

Firefox und Safari implementieren Promises für die Erweiterungs-API. Alle anderen Browser verwenden Rückrufe. In Manifest V3 bieten Chrome, Edge und Opera [Promises](https://developer.chrome.com/docs/extensions/develop/migrate#promises) für die meisten geeigneten Methoden an. (vgl. [Chrome Bug 328932](https://crbug.com/328932))

Wenn Sie nicht vertraut damit sind, wie JavaScript asynchrone Ereignisse oder Promises handhaben kann, werfen Sie einen Blick auf [Getting to know asynchronous JavaScript: Callbacks, Promises and Async/Await](https://medium.com/codebuddies/getting-to-know-asynchronous-javascript-callbacks-promises-and-async-await-17e0673281ee) oder die MDN-Seite [Using promises](/de/docs/Web/JavaScript/Guide/Using_promises).

## API-Abdeckung

Die Unterschiede in der Implementierung der Erweiterungs-API-Funktionen zwischen den Browsern lassen sich in drei allgemeine Kategorien einteilen:

- Keine Unterstützung für eine gesamte Funktion.
- Unterschiede in der Unterstützung von Funktionen innerhalb einer Funktion. Zum Beispiel unterstützt Firefox zum Zeitpunkt des Schreibens die [`notification`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications)-Funktion [`onButtonClicked`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications/onButtonClicked) nicht, während Firefox der einzige Browser ist, der [`onShown`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications/onShown) unterstützt.
- Proprietäre Funktionen, die browserspezifische Funktionen unterstützen. Zum Beispiel ist "containers" zum Zeitpunkt des Schreibens eine Firefox-spezifische Funktion, die von der [`contextualIdentities`](/de/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities)-Funktion unterstützt wird.

## Manifestschlüssel

Die Unterschiede in den unterstützten [`manifest.json`-Schlüsseln](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) zwischen den Browsern lassen sich grob in zwei Kategorien einteilen:

- Attributinformationen der Erweiterung. Zum Beispiel enthalten Firefox und Opera zum Zeitpunkt des Schreibens zusätzlich zum [`author`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/author)-Schlüssel den [`developer`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer)-Schlüssel, um Details über den Erweiterungsentwickler aufzuzeichnen.
- Erweiterungsfunktionen. Zum Beispiel unterstützt nur Firefox zum Zeitpunkt des Schreibens den [`protocol_handlers`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers)-Schlüssel (der webbasierte Protokoll-Handler registriert, Anwendungen, die wissen, wie man bestimmte Arten von Links verarbeitet).

## Weitere Informationen

Detailliertere Informationen zu den Unterschieden in den unterstützten API-Funktionen von Browser-Erweiterungen finden Sie in:

- [Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities)
- [Browserunterstützung für JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)
- [Browserkompatibilität für manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json)
