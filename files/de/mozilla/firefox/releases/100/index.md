---
title: Firefox 100 für Entwickler
slug: Mozilla/Firefox/Releases/100
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{FirefoxSidebar}}

Dieser Artikel enthält Informationen über die Änderungen in Firefox 100, die Entwickler betreffen werden. Firefox 100 wurde am 3. Mai 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die CSS-Medienfunktionen für [`dynamic-range`](/de/docs/Web/CSS/@media/dynamic-range) und [`video-dynamic-range`](/de/docs/Web/CSS/@media/video-dynamic-range) werden jetzt unterstützt. Sie können nun testen, ob ein Benutzeragent oder ein Ausgabegerät die Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe unterstützt, indem Sie `dynamic-range` verwenden und auf der Videoebene `video-dynamic-range` verwenden ([Firefox Fehler 1751217](https://bugzil.la/1751217)).

### JavaScript

Keine bemerkenswerten Änderungen.

### HTTP

#### Entfernungen

- Der nicht-standardmäßige {{httpheader("Large-Allocation")}} HTTP-Header wurde entfernt ([Firefox Fehler 1598759](https://bugzil.la/1598759)).

### APIs

- [`WritableStream`](/de/docs/Web/API/WritableStream), [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter), [`WritableStreamDefaultController`](/de/docs/Web/API/WritableStreamDefaultController) und [`ReadableStream.pipeTo()`](/de/docs/Web/API/ReadableStream/pipeTo) werden jetzt unterstützt ([Firefox Fehler 1759597](https://bugzil.la/1759597)).

#### DOM

- Code kann jetzt die statische Methode [`AbortSignal.timeout()`](/de/docs/Web/API/AbortSignal/timeout_static) verwenden. Dies gibt ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) zurück, das verwendet werden kann, um eine Operation automatisch mit `TimeoutError` nach einer bestimmten Zeit abzubrechen ([Firefox Fehler 1753309](https://bugzil.la/1753309)).

### WebAssembly

- WebAssembly unterstützt jetzt Ausnahmen, die sowohl in WebAssembly als auch in JavaScript (oder einer anderen Laufzeitumgebung) geworfen und abgefangen werden können und die Umgebungsgrenzen überschreiten, wenn sie nicht abgefangen werden. Die JavaScript-Darstellungen von WebAssembly-Ausnahmen sind [WebAssembly.Exception](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception) und [WebAssembly.Tag](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag) ([Firefox Fehler 1759217](https://bugzil.la/1759217)).

### WebDriver-Konformität (Marionette)

- Unterstützung für Benutzeraufforderungen (z.B. `alert`) auf Android hinzugefügt ([Firefox Fehler 1708105](https://bugzil.la/1708105)).

## Änderungen für Add-on-Entwickler

- Die Eigenschaften `color_scheme` und `content_color_scheme` wurden zum [theme](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)-Manifest-Schlüssel hinzugefügt und sind in der {{WebExtAPIRef("theme")}} API verfügbar. Diese Eigenschaften ermöglichen es einem Thema, zu überschreiben, ob ein helles oder dunkles Farbschema automatisch auf das Chrome oder den Inhalt angewendet wird ([Firefox Fehler 1708105](https://bugzil.la/1708105)).
- Sie können jetzt einen stummgeschalteten Tab erstellen, indem Sie {{WebExtAPIRef("tabs.create()")}} mit der neuen `muted` Eigenschaft im `createProperties` Objekt verwenden ([Firefox Fehler 1372100](https://bugzil.la/1372100)).
- Unterstützung für {{WebExtAPIRef("runtime.onSuspend")}} und {{WebExtAPIRef("runtime.onSuspendCanceled")}} hinzugefügt, um die Unterstützung für Event-Page-Funktionen zu verbessern ([Firefox Fehler 1753850](https://bugzil.la/1753850)).

## Ältere Versionen

{{Firefox_for_developers}}
