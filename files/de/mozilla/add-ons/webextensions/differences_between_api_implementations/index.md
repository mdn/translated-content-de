---
title: Unterschiede zwischen API-Implementierungen
slug: Mozilla/Add-ons/WebExtensions/Differences_between_API_implementations
l10n:
  sourceCommit: 4f197acb904fe25772ddcd928ca1e397fd7680b4
---

{{AddonSidebar}}

Die API für Browsererweiterungen ist ein [aufkommender Standard](https://browserext.github.io/browserext/). Daher gibt es, obwohl sie von den meisten großen Browsern – einschließlich Firefox, Chrome, Edge und Opera – unterstützt wird, Unterschiede zwischen den verschiedenen Implementierungen. Das bedeutet, dass einige Änderungen erforderlich sein können, um Ihre Erweiterung für mehrere Browser zu implementieren.

Unter den verschiedenen Browsern, die die Erweiterungen API unterstützen, ist Firefox am konformsten mit dem aufkommenden Standard und daher der beste Ausgangspunkt für die Entwicklung von Browsererweiterungen.

Die Unterschiede zwischen den API-Implementierungen der Browser fallen in vier Bereiche: Namensraum, asynchrone Ereignisbehandlung, API-Abdeckung und Manifest-Schlüssel.

## Namensraum

Sie verweisen auf alle Funktionen der Erweiterungen API unter Verwendung eines Namensraums. Zum Beispiel erstellt `browser.alarms.create({delayInMinutes});` in Firefox einen Alarm, der nach der in `delayInMinutes` angegebenen Zeit ausgelöst wird.

Es gibt zwei verwendete API-Namensräume:

- `chrome` wird in Chrome, Edge und Opera verwendet.
- `browser` wird in Firefox und Safari verwendet.

## Asynchrone Ereignisbehandlung

JavaScript bietet mehrere Möglichkeiten, asynchrone Ereignisse zu handhaben. Der vorgeschlagene Standard für die Erweiterungen API ist die Verwendung von Promises. Die Promises-Ansatz bietet erhebliche Vorteile beim Umgang mit verketteten asynchronen Ereignisaufrufen.

Firefox und Safari implementieren Promises für die Erweiterungen API. Alle anderen Browser verwenden Callbacks. In Manifest V3 wurden in Chrome, Edge und Opera für die meisten geeigneten Methoden [Promises](https://developer.chrome.com/docs/extensions/develop/migrate#promises) bereitgestellt. (siehe [Chrome-Bug 328932](https://crbug.com/328932))

Wenn Sie nicht damit vertraut sind, wie JavaScript asynchrone Ereignisse oder Promises handhaben kann, schauen Sie sich [Getting to know asynchronous JavaScript: Callbacks, Promises and Async/Await](https://medium.com/codebuddies/getting-to-know-asynchronous-javascript-callbacks-promises-and-async-await-17e0673281ee) oder die MDN-Seite [Using promises](/de/docs/Web/JavaScript/Guide/Using_promises) an.

## API-Abdeckung

Die Unterschiede in der Implementierung der Funktionen der Erweiterungen API unter den Browsern fallen in drei breite Kategorien:

- Fehlende Unterstützung für eine gesamte Funktion.
- Variationen in der Unterstützung von Funktionen innerhalb einer Funktion. Zum Beispiel unterstützt Firefox zum Zeitpunkt des Schreibens nicht die [`notification`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications)-Methodenfunktion [`onButtonClicked`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications/onButtonClicked), während Firefox der einzige Browser ist, der [`onShown`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications/onShown) unterstützt.
- Proprietäre Funktionen, die browser-spezifische Funktionen unterstützen. Zum Beispiel wird Containers zum Zeitpunkt des Schreibens als Firefox-spezifische Funktion durch die [`contextualIdentities`](/de/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities)-Funktion unterstützt.

## Manifest-Schlüssel

Die Unterschiede in den unterstützten [`manifest.json`-Schlüsseln](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) unter den Browsern fallen in zwei breite Kategorien:

- Erweiterungsinformationen Attribute. Zum Beispiel umfassen Firefox und Opera zum Zeitpunkt des Schreibens den [`developer`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer)-Schlüssel (zusätzlich zum [`author`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/author)-Schlüssel), um Details über den Entwickler der Erweiterung aufzuzeichnen.
- Erweiterungsfunktionen. Zum Beispiel unterstützt nur Firefox zum Zeitpunkt des Schreibens den [`protocol_handlers`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers)-Schlüssel (welcher webbasierte Protokoll-Handler registriert, Anwendungen, die wissen, wie bestimmte Typen von Links behandelt werden).

## Weitere Informationen

Detailliertere Informationen über die Unterschiede in den unterstützten Funktionen der Browsererweiterungen API finden Sie in:

- [Inkompatibilitäten bei Chrome](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities)
- [Browser-Unterstützung für JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)
- [Browser-Kompatibilität für manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json#browser_compatibility)
