---
title: Firefox 102 für Entwickler
slug: Mozilla/Firefox/Releases/102
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 102, die Entwickler betreffen werden. Firefox 102 wurde am 28. Juni 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

Das [`update`](/de/docs/Web/CSS/@media/update) Medienfeature, das verwendet werden kann, um die Fähigkeit des Ausgabegeräts zu erfragen, das Erscheinungsbild von Inhalten nach deren Rendering zu ändern, ist jetzt standardmäßig verfügbar ([Firefox Bug 1422312](https://bugzil.la/1422312)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- Die nicht standardisierten Schnittstellen `IDBMutableFile`, `IDBFileHandle`, `IDBFileRequest` und die Methode `IDBDatabase.createMutableFile()` wurden standardmäßig deaktiviert, um sie in einer zukünftigen Version zu entfernen ([Firefox Bug 1764771](https://bugzil.la/1764771)).

- [Transform Streams](/de/docs/Web/API/TransformStream) werden jetzt unterstützt, was es Ihnen ermöglicht, von einem [`ReadableStream`](/de/docs/Web/API/ReadableStream) zu einem [`WritableStream`](/de/docs/Web/API/WritableStream) zu leiten und dabei eine Transformation der Datenblöcke durchzuführen. Das Update beinhaltet die neuen Schnittstellen [`TransformStream`](/de/docs/Web/API/TransformStream) und [`TransformStreamDefaultController`](/de/docs/Web/API/TransformStreamDefaultController) sowie die Methode [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) ([Firefox Bug 1767507](https://bugzil.la/1767507)).

- [Lesbare Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) werden jetzt unterstützt, wodurch eine effiziente Zero-Byte-Übertragung von Daten aus einer zugrunde liegenden Byte-Quelle zu einem Verbraucher möglich ist (Umgehung der internen Warteschlangen des Streams). Die neuen Schnittstellen sind [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader), [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) und [`ReadableStreamBYOBRequest`](/de/docs/Web/API/ReadableStreamBYOBRequest) ([Firefox Bug 1767342](https://bugzil.la/1767342)).

### Sicherheit

- Unterstützung der `wasm-unsafe-eval` CSP-Richtlinienanweisung wurde implementiert. Ein Dokument mit einer CSP, die Skripte einschränkt, wird WebAssembly nicht mehr laden und ausführen, es sei denn, die CSP verwendet `'wasm-unsafe-eval'` oder das bestehende `'unsafe-eval'` Schlüsselwort ([Firefox Bug 1740263](https://bugzil.la/1740263)).

#### DOM

- Die nur in Firefox verfügbare Eigenschaft [`Window.sidebar`](/de/docs/Web/API/Window/sidebar) wurde hinter einer Voreinstellung verschoben (und wird in Version 119 dauerhaft entfernt) ([Firefox Bug 1768486](https://bugzil.la/1768486)).

### WebDriver-Konformität

#### WebDriver BiDi

- Es gibt einige Verbesserungen am WebDriver BiDi `browsingContext.navigate`
  - Behoben: Randfälle, in denen die Navigation fälschlicherweise ein Timeout erhielt ([Firefox Bug 1766217](https://bugzil.la/1766217)).
  - Unterstützung für Hash-Änderungen hinzugefügt ([Firefox Bug 1763127](https://bugzil.la/1763127)).
  - Unterstützung der Navigation zu Fehlerseiten hinzugefügt ([Firefox Bug 1763124](https://bugzil.la/1763124)).

#### Marionette

- Erlaubt, dass Marionette sich mit einer fensterlosen Instanz von Firefox verbindet ([Firefox Bug 1726465](https://bugzil.la/1726465)).
- Korrigiert: Ein Problem, bei dem `WebDriver:Navigate` mit einer PageLoadStrategy von "none" zurückkehrt, bevor die Navigation begonnen hat ([Firefox Bug 1754132](https://bugzil.la/1754132)).
- Behoben: Eine potenzielle Rennbedingung in `WebDriver:SwitchToWindow`, wenn zu einem anderen Tab gewechselt wird ([Firefox Bug 1749666](https://bugzil.la/1749666)).

## Änderungen für Add-on-Entwickler

- Die {{WebExtAPIRef("scripting")}} API, die Funktionen zum Ausführen von Skripten, Einfügen und Entfernen von CSS und zur Verwaltung der Registrierung von Inhaltsskripten bietet, steht für Manifest V2-Erweiterungen zur Verfügung ([Firefox Bug 1766615](https://bugzil.la/1766615)).
- Die `nonPersistentCookies`-Option der {{WebExtAPIRef("privacy.websites")}} `cookieConfig`-Eigenschaft wurde veraltet ([Firefox Bug 1754924](https://bugzil.la/1754924)).
- Manifest V3 [Vorschau](https://blog.mozilla.org/addons/2022/06/08/manifest-v3-firefox-developer-preview-how-to-get-involved/) Funktionen:
  - Mit der Einführung der Unterstützung für das 'wasm-unsafe-eval' CSP-Schlüsselwort in Firefox ([Firefox Bug 1740263](https://bugzil.la/1740263)) müssen Manifest V3-Erweiterungen dieses Schlüsselwort im [content_security_policy](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) manifest key angeben, um [WebAssembly](/de/docs/WebAssembly) zu verwenden. Aus Gründen der Rückwärtskompatibilität können Manifest V2-Erweiterungen weiterhin WebAssembly ohne das Schlüsselwort verwenden ([Firefox Bug 1766027](https://bugzil.la/1766027)).

## Ältere Versionen

{{Firefox_for_developers}}
