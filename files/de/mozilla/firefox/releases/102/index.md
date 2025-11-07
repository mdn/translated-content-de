---
title: Firefox 102 Versionshinweise für Entwickler
short-title: Firefox 102
slug: Mozilla/Firefox/Releases/102
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 102, die Entwickler betreffen werden. Firefox 102 wurde am 28. Juni 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

Das [`update`](/de/docs/Web/CSS/Reference/At-rules/@media/update) Medienmerkmal, das verwendet werden kann, um die Fähigkeit des Ausgabegeräts zu erfragen, das Erscheinungsbild von Inhalten nach deren Darstellung zu ändern, ist jetzt standardmäßig verfügbar ([Firefox-Bug 1422312](https://bugzil.la/1422312)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- Die nicht-standardisierten Schnittstellen `IDBMutableFile`, `IDBFileHandle`, `IDBFileRequest` und die Methode `IDBDatabase.createMutableFile()` wurden standardmäßig deaktiviert, um sie in einer zukünftigen Version zu entfernen ([Firefox-Bug 1764771](https://bugzil.la/1764771)).

- [Transform-Streams](/de/docs/Web/API/TransformStream) werden nun unterstützt, sodass Sie von einem [`ReadableStream`](/de/docs/Web/API/ReadableStream) zu einem [`WritableStream`](/de/docs/Web/API/WritableStream) pipen können, um eine Transformation der Chunks durchzuführen.
  Das Update umfasst die neuen Schnittstellen [`TransformStream`](/de/docs/Web/API/TransformStream) und [`TransformStreamDefaultController`](/de/docs/Web/API/TransformStreamDefaultController) sowie die Methode [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) ([Firefox-Bug 1767507](https://bugzil.la/1767507)).

- [Lesbare Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) werden jetzt unterstützt, was eine effiziente null-Byte-Datenübertragung von einer zugrunde liegenden Byte-Quelle zu einem Verbraucher ermöglicht (unter Umgehung der internen Warteschlangen des Streams).
  Die neuen Schnittstellen sind [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader), [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) und [`ReadableStreamBYOBRequest`](/de/docs/Web/API/ReadableStreamBYOBRequest) ([Firefox-Bug 1767342](https://bugzil.la/1767342)).

### Sicherheit

- Die Unterstützung der [`wasm-unsafe-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#unsafe_webassembly_execution) CSP-Richtlinie wurde implementiert.
  Ein Dokument mit einer CSP, die Skripte einschränkt, wird WebAssembly nicht mehr laden und ausführen, es sei denn, die CSP verwendet `'wasm-unsafe-eval'` oder das bestehende `'unsafe-eval'` Schlüsselwort ([Firefox-Bug 1740263](https://bugzil.la/1740263)).

#### DOM

- Die Firefox-eigene Eigenschaft [`Window.sidebar`](/de/docs/Web/API/Window/external) wurde hinter einer Einstellung platziert (und wird in Version 119 dauerhaft entfernt) ([Firefox-Bug 1768486](https://bugzil.la/1768486)).

### WebDriver-Konformität

#### WebDriver BiDi

- Es gibt einige Verbesserungen bei Webdriver BiDis `browsingContext.navigate`
  - Behoben wurden Grenzfälle, bei denen die Navigation fälschlicherweise ausgelöst wurde ([Firefox-Bug 1766217](https://bugzil.la/1766217)).
  - Unterstützung für Hash-Änderungen hinzugefügt ([Firefox-Bug 1763127](https://bugzil.la/1763127)).
  - Unterstützung für die Navigation zu Fehlerseiten hinzugefügt ([Firefox-Bug 1763124](https://bugzil.la/1763124)).

#### Marionette

- Erlaubt Marionette, sich mit einer fensterlosen Instanz von Firefox zu verbinden ([Firefox-Bug 1726465](https://bugzil.la/1726465)).
- Behobenes Problem, bei dem `WebDriver:Navigate` mit einer PageLoadStrategy von "none" zurückkehrt, bevor die Navigation begonnen hat ([Firefox-Bug 1754132](https://bugzil.la/1754132)).
- Behoben wurde eine potenzielle Rennbedingung in `WebDriver:SwitchToWindow` beim Wechseln zu einem anderen Tab ([Firefox-Bug 1749666](https://bugzil.la/1749666)).

## Änderungen für Add-on-Entwickler

- Die {{WebExtAPIRef("scripting")}} API, die Funktionen zum Skriptausführen, Einfügen und Entfernen von CSS und zur Verwaltung der Registrierung von Inhalts-Skripten bietet, ist für Manifest V2-Erweiterungen verfügbar ([Firefox-Bug 1766615](https://bugzil.la/1766615)).
- Die `nonPersistentCookies` Option der {{WebExtAPIRef("privacy.websites")}} `cookieConfig` Eigenschaft ist veraltet ([Firefox-Bug 1754924](https://bugzil.la/1754924)).
- Vorschau von Manifest V3 [Funktionen](https://blog.mozilla.org/addons/2022/06/08/manifest-v3-firefox-developer-preview-how-to-get-involved/):
  - Mit der Einführung der Unterstützung des 'wasm-unsafe-eval' CSP-Schlüsselworts in Firefox ([Firefox-Bug 1740263](https://bugzil.la/1740263)) müssen Manifest V3-Erweiterungen dieses Schlüsselwort im [content_security_policy](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) Manifest-Schlüssel angeben, um [WebAssembly](/de/docs/WebAssembly) zu verwenden. Für Rückwärtskompatibilität können Manifest V2-Erweiterungen WebAssembly weiterhin ohne das Schlüsselwort verwenden ([Firefox-Bug 1766027](https://bugzil.la/1766027)).
