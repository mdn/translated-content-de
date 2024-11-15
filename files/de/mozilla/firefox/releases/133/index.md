---
title: Firefox 133 für Entwickler
slug: Mozilla/Firefox/Releases/133
l10n:
  sourceCommit: 46708b20453b7a2a873a7d21ebdefc4bcdd6bbf3
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 133, die Entwickler betreffen. Firefox 133 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [26. November 2024](https://whattrainisitnow.com/release/?version=133) veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Werkzeuge

### HTML

#### Entfernungen

### CSS

#### Entfernungen

### JavaScript

- Unterstützung für {{jsxref("Uint8Array")}}-Methoden zur Erleichterung von Konvertierungen zwischen {{Glossary("base64", "base64")}}- und hex-codierten Strings und Byte-Arrays. ([Firefox Bug 1917885](https://bugzil.la/1917885) und [Firefox Bug 1862220](https://bugzil.la/1862220)).

  Die neuen Methoden umfassen:

  - {{jsxref("Uint8Array.fromBase64()")}} und {{jsxref("Uint8Array.fromHex()")}} statische Methoden zur Konstruktion eines neuen `Uint8Array`-Objekts aus einem base64- bzw. hex-codierten String.
  - {{jsxref("Uint8Array.prototype.setFromBase64()")}} und {{jsxref("Uint8Array.prototype.setFromHex()")}} Instanzmethoden zur Befüllung eines vorhandenen `Uint8Array`-Objekts mit Bytes aus einem base64- oder hex-codierten String.
  - {{jsxref("Uint8Array.prototype.toBase64()")}} und {{jsxref("Uint8Array.prototype.toHex()")}} Instanzmethoden, die einen base64- bzw. hex-codierten String aus den Daten in einem `Uint8Array`-Objekt zurückgeben.

#### Entfernungen

### SVG

#### Entfernungen

### HTTP

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

- Die [`WorkerNavigator.permissions`](/de/docs/Web/API/WorkerNavigator/permissions)-Eigenschaft wird jetzt unterstützt und ermöglicht die Nutzung der [Permissions API](/de/docs/Web/API/Permissions_API) sowohl in [Arbeitern](/de/docs/Web/API/Web_Workers_API) als auch im Hauptfenster-Thread. ([Firefox Bug 1193373](https://bugzil.la/1193373)).
- Die [`EventSource`](/de/docs/Web/API/EventSource)-Schnittstelle zum Verarbeiten [servergesendeter Ereignisse](/de/docs/Web/API/Server-sent_events) wird jetzt in [Service-Workern](/de/docs/Web/API/Service_Worker_API) unterstützt. ([Firefox Bug 1681218](https://bugzil.la/1681218)).
- Die Schnittstellen [`ImageDecoder`](/de/docs/Web/API/ImageDecoder), [`ImageTrackList`](/de/docs/Web/API/ImageTrackList) und [`ImageTrack`](/de/docs/Web/API/ImageTrack) der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) werden jetzt unterstützt, wodurch die Dekodierung von Bildern aus dem Haupt- und Arbeitsthreads ermöglicht wird. ([Firefox Bug 1923755](https://bugzil.la/1923755)).
- Die [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) Ereignisse der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle werden jetzt an {{HTMLElement("dialog")}}-Elementen unmittelbar vor und nachdem sie angezeigt oder ausgeblendet werden, ausgelöst. Das `beforetoggle`-Ereignis kann beispielsweise verwendet werden, um Klassen anzuwenden oder zu entfernen, die die Animation eines Dialogs steuern, oder den Zustand eines Dialogformulars zurückzusetzen, bevor es angezeigt wird. Das `toggle`-Ereignis kann verwendet werden, um Benachrichtigungen über den geöffneten Zustand zu erhalten, was sonst einen [`MutationObserver`](/de/docs/Web/API/MutationObserver) erfordert. ([Firefox Bug 1876762](https://bugzil.la/1876762)).

#### DOM

#### Medien, WebRTC und Web Audio

#### Entfernungen

### WebAssembly

#### Entfernungen

### Konformität mit WebDriver (WebDriver BiDi, Marionette)

#### Allgemein

#### WebDriver BiDi

#### Marionette

## Änderungen für Add-on-Entwickler

- Ein Fehler in der {{WebExtAPIRef("declarativeNetRequest")}} API wurde behoben, der die Registrierung von Regeln nach einem Neustart des Browsers verhinderte ([Firefox Bug 1921353](https://bugzil.la/1921353)). Dieser Fehler betraf Erweiterungen, die sich auf {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules")}} oder {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets")}} verlassen. Dieser Fix wurde auch auf Firefox ESR 128.5 und Firefox ESR 115.18 zurückportiert.

### Entfernungen

### Sonstiges

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 133, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der [Seite für experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **contenteditable plaintext-only Wert:** `dom.element.contenteditable.plaintext-only.enabled`.

  Der `plaintext-only` Wert des [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) globalen Attributs gibt an, dass das Element bearbeitbar ist; Rich-Text-Formatierungen sind deaktiviert und jegliche Formatierungen in eingefügtem Text werden automatisch entfernt. ([Firefox Bug 1922723](https://bugzil.la/1922723).)

## Ältere Versionen

{{Firefox_for_developers}}
