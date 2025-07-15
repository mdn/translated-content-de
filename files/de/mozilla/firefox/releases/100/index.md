---
title: Firefox 100 für Entwickler
short-title: Firefox 100
slug: Mozilla/Firefox/Releases/100
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 100, die Entwickler betreffen werden. Firefox 100 wurde am 3. Mai 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die CSS-Medieneigenschaften für [`dynamic-range`](/de/docs/Web/CSS/@media/dynamic-range) und [`video-dynamic-range`](/de/docs/Web/CSS/@media/video-dynamic-range) werden nun unterstützt. Sie können jetzt testen, ob ein User-Agent oder ein Ausgabegerät die Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe mit `dynamic-range` und im Videobereich mit `video-dynamic-range` unterstützt ([Firefox-Bug 1751217](https://bugzil.la/1751217)).

### JavaScript

Keine bemerkenswerten Änderungen.

### HTTP

#### Entfernungen

- Der nicht standardisierte `Large-Allocation` HTTP-Header wurde entfernt ([Firefox-Bug 1598759](https://bugzil.la/1598759)).

### APIs

- [`WritableStream`](/de/docs/Web/API/WritableStream), [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter), [`WritableStreamDefaultController`](/de/docs/Web/API/WritableStreamDefaultController) und [`ReadableStream.pipeTo()`](/de/docs/Web/API/ReadableStream/pipeTo) werden nun unterstützt ([Firefox-Bug 1759597](https://bugzil.la/1759597)).

#### DOM

- Code kann nun die statische Methode [`AbortSignal.timeout()`](/de/docs/Web/API/AbortSignal/timeout_static) verwenden. Diese gibt ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) zurück, das verwendet werden kann, um eine Operation automatisch mit `TimeoutError` nach einer bestimmten Zeit abzubrechen ([Firefox-Bug 1753309](https://bugzil.la/1753309)).

### WebAssembly

- WebAssembly unterstützt jetzt Ausnahmen, die entweder in WebAssembly oder JavaScript (oder einer anderen Laufzeitumgebung) ausgelöst und abgefangen werden können, wobei sie die Umgebungsgrenzen überschreiten, wenn sie nicht behandelt werden. Die JavaScript-Darstellungen von WebAssembly-Ausnahmen sind [WebAssembly.Exception](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception) und [WebAssembly.Tag](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag) ([Firefox-Bug 1759217](https://bugzil.la/1759217)).

### WebDriver-Konformität (Marionette)

- Unterstützung für Benutzeraufforderungen (z.B. `alert`) auf Android hinzugefügt ([Firefox-Bug 1708105](https://bugzil.la/1708105)).

## Änderungen für Add-on-Entwickler

- Die Eigenschaften `color_scheme` und `content_color_scheme` wurden dem [Theme](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Manifest-Schlüssel hinzugefügt und sind in der {{WebExtAPIRef("theme")}} API verfügbar. Diese Eigenschaften ermöglichen es einem Theme, zu überschreiben, ob automatisch ein helles oder dunkles Farbschema auf das Chrome oder den Inhalt angewendet wird ([Firefox-Bug 1708105](https://bugzil.la/1708105)).
- Sie können jetzt einen stummgeschalteten Tab mit {{WebExtAPIRef("tabs.create()")}} mit der neuen Eigenschaft `muted` im Objekt `createProperties` erstellen ([Firefox-Bug 1372100](https://bugzil.la/1372100)).
- Unterstützung für {{WebExtAPIRef("runtime.onSuspend")}} und {{WebExtAPIRef("runtime.onSuspendCanceled")}} hinzugefügt, um die Unterstützung für Event-Page-Funktionen zu verbessern ([Firefox-Bug 1753850](https://bugzil.la/1753850)).
