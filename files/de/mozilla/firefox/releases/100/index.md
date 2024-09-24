---
title: Firefox 100 für Entwickler
slug: Mozilla/Firefox/Releases/100
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 100, die Entwickler betreffen. Firefox 100 wurde am 3. Mai 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- CSS-Media-Features für [`dynamic-range`](/de/docs/Web/CSS/@media/dynamic-range) und [`video-dynamic-range`](/de/docs/Web/CSS/@media/video-dynamic-range) werden jetzt unterstützt. Sie können nun testen, ob ein User-Agent oder ein Ausgabegerät die Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe unterstützt, indem Sie `dynamic-range` und im Videobereich `video-dynamic-range` verwenden ([Firefox-Bug 1751217](https://bugzil.la/1751217)).

### JavaScript

Keine bemerkenswerten Änderungen.

### HTTP

#### Entfernungen

- Der nicht standardisierte {{httpheader("Large-Allocation")}} HTTP-Header wurde entfernt ([Firefox-Bug 1598759](https://bugzil.la/1598759)).

### APIs

- [`WritableStream`](/de/docs/Web/API/WritableStream), [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter), [`WritableStreamDefaultController`](/de/docs/Web/API/WritableStreamDefaultController) und [`ReadableStream.pipeTo()`](/de/docs/Web/API/ReadableStream/pipeTo) werden jetzt unterstützt ([Firefox-Bug 1759597](https://bugzil.la/1759597)).

#### DOM

- Code kann jetzt die statische Methode [`AbortSignal.timeout()`](/de/docs/Web/API/AbortSignal/timeout_static) verwenden.
  Dies gibt ein {{domxref("AbortSignal")}} zurück, das verwendet werden kann, um eine Operation nach einer bestimmten Zeit mit `TimeoutError` automatisch abzubrechen ([Firefox-Bug 1753309](https://bugzil.la/1753309)).

### WebAssembly

- WebAssembly unterstützt jetzt Ausnahmen, die entweder in WebAssembly oder JavaScript (oder einer anderen Laufzeit) geworfen und abgefangen werden können und dabei die Umgebungsgrenzen überschreiten, wenn sie nicht behandelt werden.
  Die JavaScript-Darstellungen von WebAssembly-Ausnahmen sind [WebAssembly.Exception](/de/docs/WebAssembly/JavaScript_interface/Exception) und [WebAssembly.Tag](/de/docs/WebAssembly/JavaScript_interface/Tag) ([Firefox-Bug 1759217](https://bugzil.la/1759217)).

### WebDriver-Konformität (Marionette)

- Unterstützung für Benutzeraufforderungen (z. B. `alert`) auf Android hinzugefügt ([Firefox-Bug 1708105](https://bugzil.la/1708105)).

## Änderungen für Add-on-Entwickler

- Die Eigenschaften `color_scheme` und `content_color_scheme` wurden zum [theme](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)-Manifest-Schlüssel hinzugefügt und sind in der {{WebExtAPIRef("theme")}}-API verfügbar. Diese Eigenschaften ermöglichen es einem Thema, zu überschreiben, ob ein helles oder dunkles Farbschema automatisch auf das Chrome oder den Inhalt angewendet wird ([Firefox-Bug 1708105](https://bugzil.la/1708105)).
- Sie können jetzt einen stummgeschalteten Tab erstellen, indem Sie {{WebExtAPIRef("tabs.create()")}} mit der neuen `muted`-Eigenschaft im `createProperties`-Objekt verwenden ([Firefox-Bug 1372100](https://bugzil.la/1372100)).
- Unterstützung für {{WebExtAPIRef("runtime.onSuspend")}} und {{WebExtAPIRef("runtime.onSuspendCanceled")}} hinzugefügt, um die Unterstützung für Event-Page-Funktionen zu verbessern ([Firefox-Bug 1753850](https://bugzil.la/1753850)).

## Ältere Versionen

{{Firefox_for_developers}}
