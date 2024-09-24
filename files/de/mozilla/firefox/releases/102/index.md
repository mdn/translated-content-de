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

Das [`update`](/de/docs/Web/CSS/@media/update)-Media-Feature, das verwendet werden kann, um die Fähigkeit des Ausgabegeräts zu erfragen, das Erscheinungsbild von Inhalten nach der Darstellung zu ändern, ist jetzt standardmäßig verfügbar ([Firefox-Bug 1422312](https://bugzil.la/1422312)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- Die nicht standardisierten Schnittstellen `IDBMutableFile`, `IDBFileHandle`, `IDBFileRequest` und die Methode `IDBDatabase.createMutableFile()` sind standardmäßig deaktiviert, um auf eine zukünftige Entfernung vorzubereiten ([Firefox-Bug 1764771](https://bugzil.la/1764771)).

- [Transform Streams](/de/docs/Web/API/TransformStream) werden nun unterstützt, sodass Sie von {{domxref("ReadableStream")}} zu einem {{domxref("WritableStream")}} pipen können, wobei eine Transformation der Datenpakete ausgeführt wird.
  Das Update umfasst die neuen Schnittstellen [`TransformStream`](/de/docs/Web/API/TransformStream) und [`TransformStreamDefaultController`](/de/docs/Web/API/TransformStreamDefaultController) sowie die Methode [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) ([Firefox-Bug 1767507](https://bugzil.la/1767507)).

- [Readable Byte Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) werden nun unterstützt, wodurch eine effiziente Null-Byte-Übertragung von Daten von einer zugrunde liegenden Byte-Quelle zu einem Verbraucher ermöglicht wird (um die internen Warteschlangen des Streams zu umgehen).
  Die neuen Schnittstellen sind {{domxref("ReadableStreamBYOBReader")}}, {{domxref("ReadableByteStreamController")}} und {{domxref("ReadableStreamBYOBRequest")}} ([Firefox-Bug 1767342](https://bugzil.la/1767342)).

### Sicherheit

- Die Unterstützung der [`wasm-unsafe-eval`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_webassembly_execution)-CSP-Richtlinie wurde implementiert.
  Ein Dokument mit einer CSP, die Skripte einschränkt, wird WebAssembly nicht mehr laden und ausführen, es sei denn, die CSP verwendet `'wasm-unsafe-eval'` oder das bestehende `'unsafe-eval'`-Schlüsselwort ([Firefox-Bug 1740263](https://bugzil.la/1740263)).

#### DOM

- Die nur in Firefox verfügbare Eigenschaft {{domxref("Window.sidebar")}} wurde hinter eine Einstellung verschoben (und in Version 119 dauerhaft entfernt) ([Firefox-Bug 1768486](https://bugzil.la/1768486)).

### WebDriver-Konformität

#### WebDriver BiDi

- Es gibt einige Verbesserungen bei `browsingContext.navigate` von Webdriver BiDi
  - Fix von Randfällen, in denen die Navigation fälschlicherweise zeitlich ablaufen konnte ([Firefox-Bug 1766217](https://bugzil.la/1766217)).
  - Unterstützung für Hash-Änderungen hinzugefügt ([Firefox-Bug 1763127](https://bugzil.la/1763127)).
  - Unterstützung für die Navigation zu Fehlerseiten hinzugefügt ([Firefox-Bug 1763124](https://bugzil.la/1763124)).

#### Marionette

- Erlaubt Marionette, eine Verbindung zu einer fensterlosen Instanz von Firefox herzustellen ([Firefox-Bug 1726465](https://bugzil.la/1726465)).
- Behebung eines Problems, bei dem `WebDriver:Navigate` mit einer PageLoadStrategy von "none" zurückkehrt, bevor die Navigation begonnen hat ([Firefox-Bug 1754132](https://bugzil.la/1754132)).
- Behebung eines möglichen Rennzustands in `WebDriver:SwitchToWindow` beim Wechseln zu einem anderen Tab ([Firefox-Bug 1749666](https://bugzil.la/1749666)).

## Änderungen für Add-on-Entwickler

- Die {{WebExtAPIRef("scripting")}}-API, die Funktionen zum Ausführen von Skripten, Einfügen und Entfernen von CSS und Verwalten der Registrierung von Inhalts-Skripten bietet, ist für Manifest V2-Erweiterungen verfügbar ([Firefox-Bug 1766615](https://bugzil.la/1766615)).
- Die `nonPersistentCookies`-Option der {{WebExtAPIRef("privacy.websites")}} `cookieConfig`-Eigenschaft wurde als veraltet markiert ([Firefox-Bug 1754924](https://bugzil.la/1754924)).
- Manifest V3 [Vorschau](https://blog.mozilla.org/addons/2022/06/08/manifest-v3-firefox-developer-preview-how-to-get-involved/)-Features:
  - Mit der Einführung der Unterstützung für das 'wasm-unsafe-eval'-CSP-Schlüsselwort in Firefox ([Firefox-Bug 1740263](https://bugzil.la/1740263)) sind Manifest V3-Erweiterungen nun verpflichtet, dieses Schlüsselwort im [content_security_policy](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy)-Manifest-Schlüssel anzugeben, um [WebAssembly](/de/docs/WebAssembly) zu verwenden. Für die Rückwärtskompatibilität können Manifest V2-Erweiterungen weiterhin WebAssembly ohne das Schlüsselwort verwenden ([Firefox-Bug 1766027](https://bugzil.la/1766027)).

## Ältere Versionen

{{Firefox_for_developers}}
