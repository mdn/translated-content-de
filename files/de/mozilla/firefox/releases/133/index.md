---
title: Firefox 133 für Entwickler
slug: Mozilla/Firefox/Releases/133
l10n:
  sourceCommit: f98deaa21bc31b006cbb597309d3aef7843c4b28
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 133, die Entwickler betreffen. Firefox 133 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und erscheint am [26. November 2024](https://whattrainisitnow.com/release/?version=133).

## Änderungen für Webentwickler

### Entwickler-Tools

### HTML

#### Entfernungen

### CSS

#### Entfernungen

### JavaScript

- Unterstützung für die Methoden von {{jsxref("Uint8Array")}}, um Konvertierungen zwischen {{Glossary("base64", "base64")}}- und hex-kodierten Zeichenketten und Byte-Arrays zu erleichtern. ([Firefox Fehler 1917885](https://bugzil.la/1917885) und [Firefox Fehler 1862220](https://bugzil.la/1862220)).

  Die neuen Methoden umfassen:

  - Die statischen Methoden {{jsxref("Uint8Array.fromBase64()")}} und {{jsxref("Uint8Array.fromHex()")}} zum Erstellen eines neuen `Uint8Array`-Objekts aus einer base64- bzw. hex-kodierten Zeichenkette.
  - Die Instanzmethoden {{jsxref("Uint8Array.prototype.setFromBase64()")}} und {{jsxref("Uint8Array.prototype.setFromHex()")}} zum Füllen eines bestehenden `Uint8Array`-Objekts mit Bytes aus einer base64- oder hex-kodierten Zeichenkette.
  - Die Instanzmethoden {{jsxref("Uint8Array.prototype.toBase64()")}} und {{jsxref("Uint8Array.prototype.toHex()")}}, die eine base64- oder hex-kodierte Zeichenkette aus den Daten in einem `Uint8Array`-Objekt zurückgeben.

#### Entfernungen

### SVG

#### Entfernungen

### HTTP

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

- Die Eigenschaft [`WorkerNavigator.permissions`](/de/docs/Web/API/WorkerNavigator/permissions) wird jetzt unterstützt, wodurch die [Permissions API](/de/docs/Web/API/Permissions_API) sowohl in [Web Workers](/de/docs/Web/API/Web_Workers_API) als auch im Hauptfenster-Thread verwendet werden kann. ([Firefox Fehler 1193373](https://bugzil.la/1193373)).
- Die Schnittstelle [`EventSource`](/de/docs/Web/API/EventSource) für den Umgang mit [servergesendeten Ereignissen](/de/docs/Web/API/Server-sent_events) wird jetzt in [Service-Workern](/de/docs/Web/API/Service_Worker_API) unterstützt. ([Firefox Fehler 1681218](https://bugzil.la/1681218)).
- Die Schnittstellen [`ImageDecoder`](/de/docs/Web/API/ImageDecoder), [`ImageTrackList`](/de/docs/Web/API/ImageTrackList) und [`ImageTrack`](/de/docs/Web/API/ImageTrack) der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) werden jetzt unterstützt, was die Dekodierung von Bildern sowohl im Haupt- als auch im Worker-Thread ermöglicht. ([Firefox Fehler 1923755](https://bugzil.la/1923755)).
- Die Ereignisse [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle werden jetzt bei {{HTMLElement("dialog")}}-Elementen unmittelbar vor und nachdem sie angezeigt oder versteckt werden, ausgelöst. `beforetoggle` kann zum Beispiel verwendet werden, um Klassen, die die Animation eines Dialogs steuern, anzuwenden oder zu entfernen oder den Zustand eines Dialogformulars vor der Anzeige zurückzusetzen. Das `toggle`-Ereignis kann verwendet werden, um Benachrichtigungen über Zustandsänderungen zu erhalten, die sonst einen [`MutationObserver`](/de/docs/Web/API/MutationObserver) erfordern. ([Firefox Fehler 1876762](https://bugzil.la/1876762)).
- Das Attribut [`onwaitingforkey`](/de/docs/Web/API/HTMLMediaElement/waitingforkey_event) kann jetzt an {{htmlelement("audio")}}/{{htmlelement("video")}}-Elementen spezifiziert werden, um einen Inline-Event-Handler für das `waitingforkey`-Ereignis festzulegen. ([Firefox Fehler 1925952](https://bugzil.la/1925952)).
- [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) wird jetzt in allen Worker-Kontexten über [`WorkerNavigator.serviceWorker`](/de/docs/Web/API/WorkerNavigator/serviceWorker) exponiert, was es Workern ermöglicht, die [Service-Worker-Registrierungen](/de/docs/Web/API/ServiceWorkerRegistration) zu inspizieren und zu verwalten, die mit der aktuellen Herkunftsadresse verknüpft sind. Bisher war `ServiceWorkerContainer` nur im Haupt-Thread über [`Navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) verfügbar. ([Firefox Fehler 1113522](https://bugzil.la/1113522)).

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

- Ein Fehler in der {{WebExtAPIRef("declarativeNetRequest")}} API, der die Registrierung von Regeln nach einem Browser-Neustart verhinderte, wurde behoben ([Firefox Fehler 1921353](https://bugzil.la/1921353)). Dieser Fehler betraf Erweiterungen, die auf {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules")}} oder {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets")}} angewiesen sind. Dieser Fix wurde auch auf Firefox ESR 128.5 und Firefox ESR 115.18 zurückportiert.

### Entfernungen

### Andere

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 133 eingeführt, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie diese auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **contenteditable-Wert nur-Text:** `dom.element.contenteditable.plaintext-only.enabled`.

  Der `plaintext-only`-Wert des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) gibt an, dass das Element bearbeitbar ist; Rich-Text-Formatierung ist deaktiviert und jede Formatierung in eingefügtem Text wird automatisch entfernt. ([Firefox Fehler 1922723](https://bugzil.la/1922723).)

## Frühere Versionen

{{Firefox_for_developers}}
