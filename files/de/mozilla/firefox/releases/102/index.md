---
title: Firefox 102 für Entwickler
slug: Mozilla/Firefox/Releases/102
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 102, die Entwickler betreffen. Firefox 102 wurde am 28. Juni 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

Die [`update`](/de/docs/Web/CSS/@media/update) Media-Feature, die verwendet werden kann, um die Fähigkeit des Ausgabegeräts abzufragen, das Erscheinungsbild von Inhalten nach der Darstellung zu ändern, ist jetzt standardmäßig verfügbar ([Firefox Bug 1422312](https://bugzil.la/1422312)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- Die nicht standardmäßigen Schnittstellen `IDBMutableFile`, `IDBFileHandle`, `IDBFileRequest` und die Methode `IDBDatabase.createMutableFile()` wurden standardmäßig deaktiviert, um sie in einer zukünftigen Version zu entfernen ([Firefox Bug 1764771](https://bugzil.la/1764771)).

- [Transform Streams](/de/docs/Web/API/TransformStream) werden jetzt unterstützt, sodass Sie von einem [`ReadableStream`](/de/docs/Web/API/ReadableStream) zu einem [`WritableStream`](/de/docs/Web/API/WritableStream) leiten können, wobei eine Transformation auf die Datenblöcke erfolgt.
  Das Update umfasst die neuen Schnittstellen [`TransformStream`](/de/docs/Web/API/TransformStream) und [`TransformStreamDefaultController`](/de/docs/Web/API/TransformStreamDefaultController) und die Methode [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) ([Firefox Bug 1767507](https://bugzil.la/1767507)).

- [Lesbare Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) werden jetzt unterstützt und ermöglichen einen effizienten Null-Byte-Transfer von Daten aus einer zugrundeliegenden Byte-Quelle zu einem Verbraucher (unter Umgehung der internen Stream-Queues).
  Die neuen Schnittstellen sind [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader), [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) und [`ReadableStreamBYOBRequest`](/de/docs/Web/API/ReadableStreamBYOBRequest) ([Firefox Bug 1767342](https://bugzil.la/1767342)).

### Sicherheit

- Unterstützung der [`wasm-unsafe-eval`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_webassembly_execution) CSP-Richtlinie wurde implementiert.
  Ein Dokument mit einer CSP, die Skripte einschränkt, wird kein WebAssembly mehr laden und ausführen, es sei denn, die CSP verwendet `'wasm-unsafe-eval'` oder das bestehende `'unsafe-eval'`-Schlüsselwort ([Firefox Bug 1740263](https://bugzil.la/1740263)).

#### DOM

- Die nur in Firefox verfügbare Eigenschaft [`Window.sidebar`](/de/docs/Web/API/Window/sidebar) wurde hinter eine Einstellung verschoben (und wird in Version 119 dauerhaft entfernt) ([Firefox Bug 1768486](https://bugzil.la/1768486)).

### WebDriver-Konformität

#### WebDriver BiDi

- Es gibt einige Verbesserungen beim `browsingContext.navigate` von Webdriver BiDi
  - Edge-Fälle wurden behoben, bei denen die Navigation fälschlicherweise in den Timeout ging ([Firefox Bug 1766217](https://bugzil.la/1766217)).
  - Unterstützung für Hash-Änderungen hinzugefügt ([Firefox Bug 1763127](https://bugzil.la/1763127)).
  - Unterstützung für die Navigation zu Fehlerseiten hinzugefügt ([Firefox Bug 1763124](https://bugzil.la/1763124)).

#### Marionette

- Ermöglichen Sie Marionette, eine Verbindung zu einer fensterlosen Instanz von Firefox herzustellen ([Firefox Bug 1726465](https://bugzil.la/1726465)).
- Ein Problem wurde behoben, bei dem `WebDriver:Navigate` mit einer `PageLoadStrategy` von "none" zurückkehrt, bevor die Navigation begonnen hat ([Firefox Bug 1754132](https://bugzil.la/1754132)).
- Ein potenzielles Race-Condition-Problem in `WebDriver:SwitchToWindow` beim Wechseln zu einem anderen Tab wurde behoben ([Firefox Bug 1749666](https://bugzil.la/1749666)).

## Änderungen für Add-on-Entwickler

- Die {{WebExtAPIRef("scripting")}} API, die Funktionen zum Ausführen von Skripten, Einfügen und Entfernen von CSS sowie zur Verwaltung der Registrierung von Inhalts-Skripten bietet, steht für Manifest V2-Erweiterungen zur Verfügung ([Firefox Bug 1766615](https://bugzil.la/1766615)).
- Die `nonPersistentCookies` Option der {{WebExtAPIRef("privacy.websites")}} `cookieConfig` Eigenschaft wurde als veraltet markiert ([Firefox Bug 1754924](https://bugzil.la/1754924)).
- Manifest V3 [Vorschau](https://blog.mozilla.org/addons/2022/06/08/manifest-v3-firefox-developer-preview-how-to-get-involved/) Funktionen:
  - Mit der Einführung der Unterstützung für das 'wasm-unsafe-eval' CSP-Schlüsselwort in Firefox ([Firefox Bug 1740263](https://bugzil.la/1740263)) müssen Manifest V3-Erweiterungen nun dieses Schlüsselwort im [content_security_policy](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) Manifest-Schlüssel angeben, um [WebAssembly](/de/docs/WebAssembly) zu verwenden. Aus Gründen der Kompatibilität können Manifest V2-Erweiterungen WebAssembly weiterhin ohne das Schlüsselwort verwenden ([Firefox Bug 1766027](https://bugzil.la/1766027)).

## Ältere Versionen

{{Firefox_for_developers}}
