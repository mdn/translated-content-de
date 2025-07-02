---
title: Firefox 102 für Entwickler
slug: Mozilla/Firefox/Releases/102
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 102, die Entwickler betreffen. Firefox 102 wurde am 28. Juni 2022 veröffentlicht.

## Änderungen für Web-Entwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

Das [`update`](/de/docs/Web/CSS/@media/update) Media-Feature, das verwendet werden kann, um die Fähigkeit des Ausgabegeräts abzufragen, das Erscheinungsbild von Inhalten nach deren Darstellung zu ändern, ist jetzt standardmäßig verfügbar ([Firefox Bug 1422312](https://bugzil.la/1422312)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- Die nicht standardisierten Schnittstellen `IDBMutableFile`, `IDBFileHandle`, `IDBFileRequest` und die Methode `IDBDatabase.createMutableFile()` wurden standardmäßig deaktiviert, um sie in einer künftigen Version zu entfernen ([Firefox Bug 1764771](https://bugzil.la/1764771)).

- [Transform Streams](/de/docs/Web/API/TransformStream) werden jetzt unterstützt, sodass Sie von einem [`ReadableStream`](/de/docs/Web/API/ReadableStream) zu einem [`WritableStream`](/de/docs/Web/API/WritableStream) leiten können, wobei eine Transformation auf den Chunks ausgeführt wird.
  Die Aktualisierung umfasst die neuen Schnittstellen [`TransformStream`](/de/docs/Web/API/TransformStream) und [`TransformStreamDefaultController`](/de/docs/Web/API/TransformStreamDefaultController) und die Methode [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) ([Firefox Bug 1767507](https://bugzil.la/1767507)).

- [Lesbare Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) werden jetzt unterstützt, um eine effiziente Null-Byte-Übertragung von Daten aus einer zugrunde liegenden Byte-Quelle an einen Verbraucher zu ermöglichen (unter Umgehung der internen Warteschlangen des Streams).
  Die neuen Schnittstellen sind [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader), [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) und [`ReadableStreamBYOBRequest`](/de/docs/Web/API/ReadableStreamBYOBRequest) ([Firefox Bug 1767342](https://bugzil.la/1767342)).

### Sicherheit

- Die Unterstützung der [`wasm-unsafe-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#unsafe_webassembly_execution) CSP-Richtlinie wurde implementiert.
  Ein Dokument mit einer CSP, die Skripte einschränkt, wird WebAssembly nicht mehr laden und ausführen, es sei denn, die CSP verwendet `'wasm-unsafe-eval'` oder das vorhandene Keyword `'unsafe-eval'` ([Firefox Bug 1740263](https://bugzil.la/1740263)).

#### DOM

- Die Firefox-exklusive Eigenschaft [`Window.sidebar`](/de/docs/Web/API/Window/external) wurde hinter einer Präferenz verschoben (und in Version 119 dauerhaft entfernt) ([Firefox Bug 1768486](https://bugzil.la/1768486)).

### WebDriver-Konformität

#### WebDriver BiDi

- Es gibt einige Verbesserungen an WebDriver BiDis `browsingContext.navigate`
  - Behobene Randfälle, in denen die Navigation fälschlicherweise eine Zeitüberschreitung verursachen konnte ([Firefox Bug 1766217](https://bugzil.la/1766217)).
  - Unterstützung für Hash-Änderungen hinzugefügt ([Firefox Bug 1763127](https://bugzil.la/1763127)).
  - Unterstützung für die Navigation zu Fehlerseiten hinzugefügt ([Firefox Bug 1763124](https://bugzil.la/1763124)).

#### Marionette

- Ermöglicht Marionette, sich mit einer fensterlosen Instanz von Firefox zu verbinden ([Firefox Bug 1726465](https://bugzil.la/1726465)).
- Behobenes Problem, bei dem `WebDriver:Navigate` mit einer PageLoadStrategy von "none" zurückkehrt, bevor die Navigation gestartet wurde ([Firefox Bug 1754132](https://bugzil.la/1754132)).
- Potenzielle Race-Bedingung in `WebDriver:SwitchToWindow` behoben, wenn zu einem anderen Tab gewechselt wird ([Firefox Bug 1749666](https://bugzil.la/1749666)).

## Änderungen für Add-on-Entwickler

- Die {{WebExtAPIRef("scripting")}} API, die Funktionen zur Ausführung von Skripten, zum Einfügen und Entfernen von CSS und zur Verwaltung der Registrierung von Inhaltsskripten bietet, ist nun für Manifest V2 Erweiterungen verfügbar ([Firefox Bug 1766615](https://bugzil.la/1766615)).
- Die `nonPersistentCookies` Option der {{WebExtAPIRef("privacy.websites")}} `cookieConfig` Eigenschaft wurde als veraltet markiert ([Firefox Bug 1754924](https://bugzil.la/1754924)).
- Manifest V3 [Vorschau](https://blog.mozilla.org/addons/2022/06/08/manifest-v3-firefox-developer-preview-how-to-get-involved/) Funktionen:
  - Mit der Einführung der Unterstützung für das 'wasm-unsafe-eval' CSP-Keyword in Firefox ([Firefox Bug 1740263](https://bugzil.la/1740263)) müssen Manifest V3 Erweiterungen dieses Keyword im [content_security_policy](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) manifest key angeben, um [WebAssembly](/de/docs/WebAssembly) zu verwenden. Aus Gründen der Abwärtskompatibilität können Manifest V2 Erweiterungen WebAssembly weiterhin ohne das Keyword verwenden ([Firefox Bug 1766027](https://bugzil.la/1766027)).

## Ältere Versionen

{{Firefox_for_developers}}
