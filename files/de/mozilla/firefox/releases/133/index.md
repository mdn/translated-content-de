---
title: Firefox 133 für Entwickler
slug: Mozilla/Firefox/Releases/133
l10n:
  sourceCommit: 0c9a26accb155e592a69ce8eec93fe16c2887886
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 133, die Entwickler betreffen. Firefox 133 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [26. November 2024](https://whattrainisitnow.com/release/?version=133) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

### HTML

#### Entfernungen

### CSS

#### Entfernungen

### JavaScript

- Unterstützung für Methoden von {{jsxref("Uint8Array")}}, um Konvertierungen zwischen {{Glossary("base64", "base64")}}- und hex-codierten Zeichenfolgen sowie Byte-Arrays zu erleichtern. ([Firefox-Bug 1917885](https://bugzil.la/1917885) und [Firefox-Bug 1862220](https://bugzil.la/1862220)).

  Die neuen Methoden umfassen:

  - Die statischen Methoden {{jsxref("Uint8Array.fromBase64()")}} und {{jsxref("Uint8Array.fromHex()")}} zur Konstruktion eines neuen `Uint8Array`-Objekts aus einer base64- bzw. hex-codierten Zeichenfolge.
  - Die Instanzmethoden {{jsxref("Uint8Array.prototype.setFromBase64()")}} und {{jsxref("Uint8Array.prototype.setFromHex()")}}, um ein bestehendes `Uint8Array`-Objekt mit Bytes aus einer base64- oder hex-codierten Zeichenfolge zu füllen.
  - Die Instanzmethoden {{jsxref("Uint8Array.prototype.toBase64()")}} und {{jsxref("Uint8Array.prototype.toHex()")}}, die eine base64- bzw. hex-codierte Zeichenfolge aus den Daten in einem `Uint8Array`-Objekt zurückgeben.

#### Entfernungen

### SVG

#### Entfernungen

### HTTP

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

- Die [`WorkerNavigator.permissions`](/de/docs/Web/API/WorkerNavigator/permissions) Eigenschaft wird jetzt unterstützt, wodurch die [Permissions API](/de/docs/Web/API/Permissions_API) sowohl in [Arbeitern](/de/docs/Web/API/Web_Workers_API) als auch im Hauptfenster-Thread genutzt werden kann. ([Firefox-Bug 1193373](https://bugzil.la/1193373)).
- Die [`EventSource`](/de/docs/Web/API/EventSource) Schnittstelle zur Behandlung von [server-sent events](/de/docs/Web/API/Server-sent_events) wird jetzt in [Service Workers](/de/docs/Web/API/Service_Worker_API) unterstützt. ([Firefox-Bug 1681218](https://bugzil.la/1681218)).
- Die [`ImageDecoder`](/de/docs/Web/API/ImageDecoder), [`ImageTrackList`](/de/docs/Web/API/ImageTrackList) und [`ImageTrack`](/de/docs/Web/API/ImageTrack) Schnittstellen der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) werden jetzt unterstützt und ermöglichen das Dekodieren von Bildern sowohl im Haupt- als auch in Arbeitsthreads. ([Firefox-Bug 1923755](https://bugzil.la/1923755)).

#### DOM

#### Medien, WebRTC und Web Audio

#### Entfernungen

### WebAssembly

#### Entfernungen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

#### WebDriver BiDi

#### Marionette

## Änderungen für Add-on-Entwickler

- Ein Fehler in der {{WebExtAPIRef("declarativeNetRequest")}} API wurde behoben, der die Registrierung von Regeln nach einem Browser-Neustart verhinderte ([Firefox-Bug 1921353](https://bugzil.la/1921353)). Dieser Fehler betraf Erweiterungen, die auf {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules")}} oder {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets")}} angewiesen sind. Diese Korrektur wurde auch auf Firefox ESR 128.5 und Firefox ESR 115.18 zurückportiert.

### Entfernungen

### Sonstiges

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 133 enthalten, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

## Ältere Versionen

{{Firefox_for_developers}}
