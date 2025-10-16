---
title: Firefox 100 Versionshinweise für Entwickler
short-title: Firefox 100
slug: Mozilla/Firefox/Releases/100
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 100, die Entwickler betreffen werden. Firefox 100 wurde am 3. Mai 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- CSS-Medienfeatures für [`dynamic-range`](/de/docs/Web/CSS/@media/dynamic-range) und [`video-dynamic-range`](/de/docs/Web/CSS/@media/video-dynamic-range) werden jetzt unterstützt. Sie können jetzt testen, ob ein User-Agent oder ein Ausgabegerät die Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe unterstützt, indem Sie `dynamic-range` verwenden und im Videobereich `video-dynamic-range` verwenden ([Firefox-Bug 1751217](https://bugzil.la/1751217)).

### JavaScript

Keine bemerkenswerten Änderungen.

### HTTP

#### Entfernungen

- Der nicht-standardisierte `Large-Allocation` HTTP-Header wurde entfernt ([Firefox-Bug 1598759](https://bugzil.la/1598759)).

### APIs

- [`WritableStream`](/de/docs/Web/API/WritableStream), [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter), [`WritableStreamDefaultController`](/de/docs/Web/API/WritableStreamDefaultController) und [`ReadableStream.pipeTo()`](/de/docs/Web/API/ReadableStream/pipeTo) werden jetzt unterstützt ([Firefox-Bug 1759597](https://bugzil.la/1759597)).

#### DOM

- Code kann jetzt die statische Methode [`AbortSignal.timeout()`](/de/docs/Web/API/AbortSignal/timeout_static) verwenden.
  Dies gibt ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) zurück, das verwendet werden kann, um eine Operation nach einer bestimmten Zeit automatisch mit `TimeoutError` abzubrechen ([Firefox-Bug 1753309](https://bugzil.la/1753309)).

### WebAssembly

- WebAssembly unterstützt jetzt Ausnahmen, die entweder in WebAssembly oder JavaScript (oder einer anderen Laufzeit) ausgelöst und abgefangen werden können und die Umweltgrenzen überschreiten, wenn sie nicht behandelt werden.
  Die JavaScript-Darstellungen von WebAssembly-Ausnahmen sind [WebAssembly.Exception](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception) und [WebAssembly.Tag](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag) ([Firefox-Bug 1759217](https://bugzil.la/1759217)).

### WebDriver-Konformität (Marionette)

- Unterstützung für Benutzeraufforderungen (z.B. `alert`) auf Android hinzugefügt ([Firefox-Bug 1708105](https://bugzil.la/1708105)).

## Änderungen für Add-on-Entwickler

- Die `color_scheme` und `content_color_scheme` Eigenschaften wurden dem [theme](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Manifest-Schlüssel hinzugefügt und sind in der {{WebExtAPIRef("theme")}} API verfügbar. Diese Eigenschaften ermöglichen es einem Theme, zu überschreiben, ob ein helles oder dunkles Farbschema automatisch auf das Chrome oder den Inhalt angewendet wird ([Firefox-Bug 1708105](https://bugzil.la/1708105)).
- Sie können jetzt mit der neuen `muted` Eigenschaft im `createProperties` Objekt einen stummen Tab mit {{WebExtAPIRef("tabs.create()")}} erstellen ([Firefox-Bug 1372100](https://bugzil.la/1372100)).
- Unterstützung für {{WebExtAPIRef("runtime.onSuspend")}} und {{WebExtAPIRef("runtime.onSuspendCanceled")}} hinzugefügt, um die Unterstützung für Event-Page-Funktionalitäten zu verbessern ([Firefox-Bug 1753850](https://bugzil.la/1753850)).
