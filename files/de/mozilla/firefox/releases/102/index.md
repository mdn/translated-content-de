---
title: Firefox 102 für Entwickler
slug: Mozilla/Firefox/Releases/102
l10n:
  sourceCommit: 25544baf59024e6b33879f4b303acf4539a94415
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 102, die Entwickler betreffen. Firefox 102 wurde am 28. Juni 2022 veröffentlicht.

## Änderungen für Web-Entwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

Das [`update`](/de/docs/Web/CSS/@media/update) Medienfeature, das verwendet werden kann, um die Fähigkeit des Ausgabegeräts abzufragen, das Erscheinungsbild von Inhalten nach deren Darstellung zu ändern, ist jetzt standardmäßig verfügbar ([Firefox Fehler 1422312](https://bugzil.la/1422312)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- Die nicht standardisierten Schnittstellen `IDBMutableFile`, `IDBFileHandle`, `IDBFileRequest` und die Methode `IDBDatabase.createMutableFile()` wurden standardmäßig deaktiviert, um sie in einer zukünftigen Version zu entfernen ([Firefox Fehler 1764771](https://bugzil.la/1764771)).

- [Transform-Streams](/de/docs/Web/API/TransformStream) werden jetzt unterstützt, sodass Sie von einem [`ReadableStream`](/de/docs/Web/API/ReadableStream) zu einem [`WritableStream`](/de/docs/Web/API/WritableStream) weiterleiten können, wobei eine Transformation auf die Datenblöcke angewendet wird. Das Update umfasst die neuen Schnittstellen [`TransformStream`](/de/docs/Web/API/TransformStream) und [`TransformStreamDefaultController`](/de/docs/Web/API/TransformStreamDefaultController) und die Methode [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) ([Firefox Fehler 1767507](https://bugzil.la/1767507)).

- [Lesbare Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) werden nun unterstützt, um eine effiziente, null-Byte Datenübertragung von einer zugrundeliegenden Byte-Quelle zu einem Verbraucher zu ermöglichen (unter Umgehung der internen Warteschlangen des Streams). Die neuen Schnittstellen sind [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader), [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) und [`ReadableStreamBYOBRequest`](/de/docs/Web/API/ReadableStreamBYOBRequest) ([Firefox Fehler 1767342](https://bugzil.la/1767342)).

### Sicherheit

- Die Unterstützung der [`wasm-unsafe-eval`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_webassembly_execution) CSP-Richtlinie wurde implementiert. Ein Dokument mit einer CSP, die Skripte einschränkt, wird WebAssembly nicht mehr laden und ausführen, es sei denn, die CSP verwendet `'wasm-unsafe-eval'` oder das bestehende `'unsafe-eval'` Schlüsselwort ([Firefox Fehler 1740263](https://bugzil.la/1740263)).

#### DOM

- Die Firefox-exklusive Eigenschaft [`Window.sidebar`](/de/docs/Web/API/Window/external) wurde hinter einer Präferenz verschoben (und in Version 119 dauerhaft entfernt) ([Firefox Fehler 1768486](https://bugzil.la/1768486)).

### WebDriver-Konformität

#### WebDriver BiDi

- Es gibt einige Verbesserungen bei `browsingContext.navigate` von Webdriver BiDi:
  - Behebung von Randfällen, bei denen die Navigation fälschlicherweise zeitlich überschritten wurde ([Firefox Fehler 1766217](https://bugzil.la/1766217)).
  - Unterstützung für Änderungen des Hashs hinzugefügt ([Firefox Fehler 1763127](https://bugzil.la/1763127)).
  - Unterstützung der Navigation zu Fehlerseiten hinzugefügt ([Firefox Fehler 1763124](https://bugzil.la/1763124)).

#### Marionette

- Ermöglicht Marionette die Verbindung zu einer fensterlosen Instanz von Firefox ([Firefox Fehler 1726465](https://bugzil.la/1726465)).
- Behebung eines Problems, bei dem `WebDriver:Navigate` mit einer PageLoadStrategy von "none" zurückkehrt, bevor die Navigation begonnen hat ([Firefox Fehler 1754132](https://bugzil.la/1754132)).
- Behebung einer potenziellen Race-Condition in `WebDriver:SwitchToWindow` beim Wechseln zu einem anderen Tab ([Firefox Fehler 1749666](https://bugzil.la/1749666)).

## Änderungen für Add-on-Entwickler

- Die {{WebExtAPIRef("scripting")}} API, die Funktionen zum Ausführen von Skripten, Einfügen und Entfernen von CSS sowie zur Verwaltung der Registrierung von Inhalts-Skripts bietet, ist für Manifest V2-Erweiterungen verfügbar ([Firefox Fehler 1766615](https://bugzil.la/1766615)).
- Die `nonPersistentCookies` Option der {{WebExtAPIRef("privacy.websites")}} `cookieConfig` Eigenschaft wurde abgelehnt ([Firefox Fehler 1754924](https://bugzil.la/1754924)).
- Manifest V3 [Vorschau](https://blog.mozilla.org/addons/2022/06/08/manifest-v3-firefox-developer-preview-how-to-get-involved/) Funktionen:
  - Mit der Einführung der Unterstützung für das 'wasm-unsafe-eval' CSP-Schlüsselwort in Firefox ([Firefox Fehler 1740263](https://bugzil.la/1740263)) müssen Manifest V3-Erweiterungen dieses Schlüsselwort im [content_security_policy](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) Manifest-Schlüssel angeben, um [WebAssembly](/de/docs/WebAssembly) zu verwenden. Für die Abwärtskompatibilität können Manifest V2-Erweiterungen WebAssembly weiterhin ohne dieses Schlüsselwort verwenden ([Firefox Fehler 1766027](https://bugzil.la/1766027)).

## Ältere Versionen

{{Firefox_for_developers}}
