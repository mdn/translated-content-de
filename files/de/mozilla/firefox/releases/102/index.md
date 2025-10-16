---
title: Firefox 102 Versionshinweise für Entwickler
short-title: Firefox 102
slug: Mozilla/Firefox/Releases/102
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 102, die Entwickler betreffen. Firefox 102 wurde am 28. Juni 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

Das [`update`](/de/docs/Web/CSS/@media/update) Media-Feature, das verwendet werden kann, um die Fähigkeit des Ausgabegeräts zu ermitteln, das Erscheinungsbild von Inhalten nach deren Rendern zu modifizieren, ist nun standardmäßig verfügbar ([Firefox-Bug 1422312](https://bugzil.la/1422312)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- Die nicht standardisierten Schnittstellen `IDBMutableFile`, `IDBFileHandle`, `IDBFileRequest` und die Methode `IDBDatabase.createMutableFile()` wurden standardmäßig deaktiviert, um sie in einer zukünftigen Version zu entfernen ([Firefox-Bug 1764771](https://bugzil.la/1764771)).

- [Transformstreams](/de/docs/Web/API/TransformStream) werden jetzt unterstützt, sodass Sie von einem [`ReadableStream`](/de/docs/Web/API/ReadableStream) zu einem [`WritableStream`](/de/docs/Web/API/WritableStream) leiten und dabei eine Transformation der Datenstücke durchführen können. Die Aktualisierung umfasst die neuen Schnittstellen [`TransformStream`](/de/docs/Web/API/TransformStream) und [`TransformStreamDefaultController`](/de/docs/Web/API/TransformStreamDefaultController) sowie die Methode [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) ([Firefox-Bug 1767507](https://bugzil.la/1767507)).

- [Lesbare Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) werden jetzt unterstützt, wodurch eine effiziente Übertragung von Daten ohne Zwischenschritte von einer zugrunde liegenden Bytequelle zu einem Verbraucher (unter Umgehung interner Warteschlangen des Streams) ermöglicht wird. Die neuen Schnittstellen sind [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader), [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) und [`ReadableStreamBYOBRequest`](/de/docs/Web/API/ReadableStreamBYOBRequest) ([Firefox-Bug 1767342](https://bugzil.la/1767342)).

### Sicherheit

- Die Unterstützung der [`wasm-unsafe-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#unsafe_webassembly_execution) CSP-Policydirektive wurde implementiert. Ein Dokument mit einer CSP, die Skripte einschränkt, lädt und führt WebAssembly nicht mehr aus, es sei denn, die CSP verwendet `'wasm-unsafe-eval'` oder das vorhandene `'unsafe-eval'` Schlüsselwort ([Firefox-Bug 1740263](https://bugzil.la/1740263)).

#### DOM

- Die Firefox-exklusive Eigenschaft [`Window.sidebar`](/de/docs/Web/API/Window/external) wurde hinter einer Präferenz verschoben (und in Version 119 dauerhaft entfernt) ([Firefox-Bug 1768486](https://bugzil.la/1768486)).

### WebDriver-Konformität

#### WebDriver BiDi

- Es gibt einige Verbesserungen bei Webdriver BiDi's `browsingContext.navigate`
  - Behebung von Randfällen, bei denen die Navigation fälschlicherweise in einen Timeout läuft ([Firefox-Bug 1766217](https://bugzil.la/1766217)).
  - Unterstützung für Hash-Änderungen hinzugefügt ([Firefox-Bug 1763127](https://bugzil.la/1763127)).
  - Unterstützung der Navigation zu Fehlerseiten hinzugefügt ([Firefox-Bug 1763124](https://bugzil.la/1763124)).

#### Marionette

- Ermöglichen Sie es Marionette, sich mit einer instanzlosen Instanz von Firefox zu verbinden ([Firefox-Bug 1726465](https://bugzil.la/1726465)).
- Behebung eines Problems, bei dem `WebDriver:Navigate` mit einer `PageLoadStrategy` von "none" zurückkehrt, bevor die Navigation begonnen hat ([Firefox-Bug 1754132](https://bugzil.la/1754132)).
- Behebung einer potenziellen Race-Condition in `WebDriver:SwitchToWindow`, wenn zu einem anderen Tab gewechselt wird ([Firefox-Bug 1749666](https://bugzil.la/1749666)).

## Änderungen für Add-on-Entwickler

- Die {{WebExtAPIRef("scripting")}} API, die Funktionen zum Ausführen von Skripten, Einfügen und Entfernen von CSS und Verwalten der Registrierung von Inhalts-Skripten bietet, ist für Manifest V2-Erweiterungen verfügbar ([Firefox-Bug 1766615](https://bugzil.la/1766615)).
- Die Option `nonPersistentCookies` der {{WebExtAPIRef("privacy.websites")}} `cookieConfig`-Eigenschaft wurde als veraltet markiert ([Firefox-Bug 1754924](https://bugzil.la/1754924)).
- Manifest V3 [Vorschau](https://blog.mozilla.org/addons/2022/06/08/manifest-v3-firefox-developer-preview-how-to-get-involved/) Funktionen:
  - Mit der Einführung der Unterstützung für das 'wasm-unsafe-eval' CSP-Schlüsselwort in Firefox ([Firefox-Bug 1740263](https://bugzil.la/1740263)) müssen Manifest V3-Erweiterungen dieses Schlüsselwort im [content_security_policy](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) Manifest-Schlüssel spezifizieren, um [WebAssembly](/de/docs/WebAssembly) zu verwenden. Für die Abwärtskompatibilität können Manifest V2-Erweiterungen weiterhin WebAssembly ohne das Schlüsselwort verwenden ([Firefox-Bug 1766027](https://bugzil.la/1766027)).
