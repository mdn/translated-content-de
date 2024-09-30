---
title: Unterschiede zwischen API-Implementierungen
slug: Mozilla/Add-ons/WebExtensions/Differences_between_API_implementations
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die Browser-Erweiterungen API ist ein [aufkommender Standard](https://browserext.github.io/browserext/). Obwohl sie von den meisten großen Browsern – einschließlich Firefox, Chrome, Edge und Opera – unterstützt wird, gibt es Unterschiede zwischen den verschiedenen Implementierungen. Dies bedeutet, dass möglicherweise einige Änderungen erforderlich sind, um Ihre Erweiterung für mehrere Browser zu implementieren.

Unter den verschiedenen Browsern, die die Erweiterungen API unterstützen, ist Firefox der Standard am nächsten und somit der beste Ausgangspunkt, um Browser-Erweiterungen zu entwickeln.

Die Unterschiede zwischen den API-Implementierungen der Browser fallen in vier Bereiche: Namensraum, asynchrone Ereignisbehandlung, API-Abdeckung und Manifest-Schlüssel.

## Namensraum

Sie beziehen sich auf alle Funktionen der Erweiterungen API unter Verwendung eines Namensraums. Zum Beispiel erstellt `browser.alarms.create({delayInMinutes});` einen Alarm in Firefox, der nach der in `delayInMinutes` angegebenen Zeit ausgelöst wird.

Es gibt zwei in Gebrauch befindliche API-Namensräume:

- `chrome`, verwendet in Chrome, Edge und Opera.
- `browser`, verwendet in Firefox und Safari.

## Asynchrone Ereignisbehandlung

JavaScript bietet mehrere Möglichkeiten zur Behandlung asynchroner Ereignisse. Der vorgeschlagene Standard der Erweiterungen API ist die Verwendung von Promises. Der Ansatz mit Promises bietet erhebliche Vorteile beim Umgang mit verketteten asynchronen Ereignisaufrufen.

Firefox und Safari implementieren Promises für die Erweiterungen API. Alle anderen Browser verwenden Callbacks. In Manifest V3 haben Chrome, Edge und Opera für [Promises](https://developer.chrome.com/docs/extensions/develop/migrate#promises) bei den meisten geeigneten Methoden gesorgt. (vgl. [Chrome-Bug 328932](https://crbug.com/328932))

Wenn Sie nicht vertraut sind, wie JavaScript asynchrone Ereignisse oder Promises behandeln kann, sehen Sie sich [Vertrautmachen mit asynchronem JavaScript: Callbacks, Promises und Async/Await](https://medium.com/codebuddies/getting-to-know-asynchronous-javascript-callbacks-promises-and-async-await-17e0673281ee) oder die MDN-Seite [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises) an.

## API-Abdeckung

Die Unterschiede in den Implementierungen der Funktionen der Erweiterungen API zwischen den Browsern fallen in drei große Kategorien:

- Fehlende Unterstützung für eine gesamte Funktion.
- Unterschiede in der Unterstützung von Funktionen innerhalb einer Funktion. Zum Beispiel unterstützt Firefox zum Zeitpunkt des Schreibens die [`notification`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications)-Funktion [`onButtonClicked`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications/onButtonClicked) nicht, während Firefox der einzige Browser ist, der [`onShown`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications/onShown) unterstützt.
- Proprietäre Funktionen zur Unterstützung browser-spezifischer Merkmale. Zum Beispiel sind Container zum Zeitpunkt des Schreibens ein Firefox-spezifisches Merkmal, das durch die [`contextualIdentities`](/de/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities)-Funktion unterstützt wird.

## Manifest-Schlüssel

Die Unterschiede in den unterstützten [`manifest.json`-Schlüsseln](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) zwischen den Browsern fallen im Wesentlichen in zwei Kategorien:

- Erweiterungsinformationsattribute. Zum Beispiel enthalten Firefox und Opera zum Zeitpunkt des Schreibens den [`developer`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer)-Schlüssel (zusätzlich zum [`author`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/author)-Schlüssel), um Details über den Entwickler der Erweiterung aufzuzeichnen.
- Erweiterungsmerkmale. Zum Beispiel unterstützt zum Zeitpunkt des Schreibens nur Firefox den [`protocol_handlers`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers)-Schlüssel (der webbasierte Protokoll-Handler registriert, Anwendungen, die wissen, wie bestimmte Arten von Links behandelt werden).

## Weitere Informationen

Weitere detaillierte Informationen über die Unterschiede in den unterstützten Browsererweiterungen API-Funktionen finden Sie in:

- [Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities)
- [Browser-Unterstützung für JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)
- [Browser-Kompatibilität für manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json)
