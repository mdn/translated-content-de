---
title: Firefox 133 für Entwickler
slug: Mozilla/Firefox/Releases/133
l10n:
  sourceCommit: 18bf3fc4b2dbccc44e2df1bebc316c1fb10fb214
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 133, die Entwickler betreffen. Firefox 133 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und erscheint am [26. November 2024](https://whattrainisitnow.com/release/?version=133).

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

### HTML

#### Entfernungen

### CSS

#### Entfernungen

### JavaScript

- Unterstützung für die Methoden von {{jsxref("Uint8Array")}}, um die Umwandlungen zwischen {{Glossary("base64", "base64")}}- und hex-kodierten Zeichenfolgen und Byte-Arrays zu erleichtern. ([Firefox Fehler 1917885](https://bugzil.la/1917885) und [Firefox Fehler 1862220](https://bugzil.la/1862220)).

  Die neuen Methoden umfassen:

  - {{jsxref("Uint8Array.fromBase64()")}} und {{jsxref("Uint8Array.fromHex()")}} statische Methoden, um ein neues `Uint8Array`-Objekt aus einer base64- und hex-kodierten Zeichenfolge zu erstellen.
  - {{jsxref("Uint8Array.prototype.setFromBase64()")}}, und {{jsxref("Uint8Array.prototype.setFromHex()")}} Instanzmethoden, um ein bestehendes `Uint8Array`-Objekt mit Bytes aus einer base64- oder hex-kodierten Zeichenfolge zu füllen.
  - {{jsxref("Uint8Array.prototype.toBase64()")}} und {{jsxref("Uint8Array.prototype.toHex()")}} Instanzmethoden, die eine base64- und hex-kodierte Zeichenfolge aus den Daten in einem `Uint8Array`-Objekt zurückgeben.

#### Entfernungen

### SVG

#### Entfernungen

### HTTP

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

- Die [`WorkerNavigator.permissions`](/de/docs/Web/API/WorkerNavigator/permissions) Eigenschaft wird jetzt unterstützt und ermöglicht es, die [Permissions API](/de/docs/Web/API/Permissions_API) sowohl in [Workers](/de/docs/Web/API/Web_Workers_API) als auch im Hauptfenster-Thread zu verwenden. ([Firefox Fehler 1193373](https://bugzil.la/1193373)).
- Die [`EventSource`](/de/docs/Web/API/EventSource) Schnittstelle zur Verarbeitung von [Server-sent events](/de/docs/Web/API/Server-sent_events) wird jetzt in [Service Workers](/de/docs/Web/API/Service_Worker_API) unterstützt. ([Firefox Fehler 1681218](https://bugzil.la/1681218)).
- Die Schnittstellen [`ImageDecoder`](/de/docs/Web/API/ImageDecoder), [`ImageTrackList`](/de/docs/Web/API/ImageTrackList) und [`ImageTrack`](/de/docs/Web/API/ImageTrack) der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) werden jetzt unterstützt und ermöglichen das Dekodieren von Bildern aus den Haupt- und Worker-Threads. ([Firefox Fehler 1923755](https://bugzil.la/1923755)).

#### DOM

#### Media, WebRTC, und Web Audio

#### Entfernungen

### WebAssembly

#### Entfernungen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

#### WebDriver BiDi

#### Marionette

## Änderungen für Add-on-Entwickler

- Ein Fehler in der {{WebExtAPIRef("declarativeNetRequest")}} API wurde behoben, der die Registrierung von Regeln nach einem Browser-Neustart verhinderte ([Firefox Fehler 1921353](https://bugzil.la/1921353)). Dieser Fehler betraf Erweiterungen, die sich auf {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules")}} oder {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets")}} verlassen. Dieser Fix wurde auch auf Firefox ESR 128.5 und Firefox ESR 115.18 zurückportiert.

### Entfernungen

### Sonstiges

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 133 integriert, aber standardmäßig deaktiviert. Um mit diesen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie diese auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **contenteditable plaintext-only Wert:** `dom.element.contenteditable.plaintext-only.enabled`.

  Der `plaintext-only` Wert des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) gibt an, dass das Element bearbeitbar ist; Rich-Text-Formatierung ist deaktiviert und jede Formatierung in eingefügtem Text wird automatisch entfernt. ([Firefox Fehler 1922723](https://bugzil.la/1922723).)

## Ältere Versionen

{{Firefox_for_developers}}
