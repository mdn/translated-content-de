---
title: Firefox 133 für Entwickler
slug: Mozilla/Firefox/Releases/133
l10n:
  sourceCommit: 42846ed2f7de20bbfbf54877200af261db01da0e
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

- Unterstützung für {{jsxref("Uint8Array")}}-Methoden, um die Umwandlungen zwischen {{Glossary("base64", "base64")}}- und hex-kodierten Strings sowie Byte-Arrays zu erleichtern. ([Firefox-Bug 1917885](https://bugzil.la/1917885) und [Firefox-Bug 1862220](https://bugzil.la/1862220)).

  Die neuen Methoden umfassen:

  - {{jsxref("Uint8Array.fromBase64()")}} und {{jsxref("Uint8Array.fromHex()")}} statische Methoden zum Konstruieren eines neuen `Uint8Array` Objekts aus einem base64- bzw. hex-kodierten String.
  - {{jsxref("Uint8Array.prototype.setFromBase64()")}} und {{jsxref("Uint8Array.prototype.setFromHex()")}} Instanzmethoden zur Befüllung eines vorhandenen `Uint8Array` Objekts mit Bytes aus einem base64- oder hex-kodierten String.
  - {{jsxref("Uint8Array.prototype.toBase64()")}} und {{jsxref("Uint8Array.prototype.toHex()")}} Instanzmethoden, die einen base64- und hex-kodierten String aus den Daten eines `Uint8Array` Objekts zurückgeben.

#### Entfernungen

### SVG

#### Entfernungen

### HTTP

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

- Die Eigenschaft [`WorkerNavigator.permissions`](/de/docs/Web/API/WorkerNavigator/permissions) wird jetzt unterstützt, sodass die [Permissions API](/de/docs/Web/API/Permissions_API) in [workern](/de/docs/Web/API/Web_Workers_API) sowie im Hauptfenster-Thread verwendet werden kann. ([Firefox-Bug 1193373](https://bugzil.la/1193373)).
- Die Schnittstelle [`EventSource`](/de/docs/Web/API/EventSource) zur Behandlung von [server-sent events](/de/docs/Web/API/Server-sent_events) wird jetzt in [Service Workern](/de/docs/Web/API/Service_Worker_API) unterstützt. ([Firefox-Bug 1681218](https://bugzil.la/1681218)).
- Die Schnittstellen [`ImageDecoder`](/de/docs/Web/API/ImageDecoder), [`ImageTrackList`](/de/docs/Web/API/ImageTrackList), und [`ImageTrack`](/de/docs/Web/API/ImageTrack) der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) werden jetzt unterstützt, sodass die Dekodierung von Bildern aus dem Haupt- und Arbeiter-Thread ermöglicht wird. ([Firefox-Bug 1923755](https://bugzil.la/1923755)).

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

### Entfernungen

### Sonstiges

## Experimentelle Webfunktionen

Diese Funktionen sind neu in Firefox 133, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der [Seite für experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

## Ältere Versionen

{{Firefox_for_developers}}
