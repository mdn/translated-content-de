---
title: Firefox 133 für Entwickler
slug: Mozilla/Firefox/Releases/133
l10n:
  sourceCommit: 32801b32fceabe1876e405970469f5de76eaf6c0
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

- Unterstützung für {{jsxref("Uint8Array")}}-Methoden zur Erleichterung von Konvertierungen zwischen {{Glossary("base64", "base64")}}- und hex-codierten Strings und Byte-Arrays. ([Firefox Fehler 1917885](https://bugzil.la/1917885) und [Firefox Fehler 1862220](https://bugzil.la/1862220)).

  Die neuen Methoden umfassen:

  - {{jsxref("Uint8Array.fromBase64()")}} und {{jsxref("Uint8Array.fromHex()")}} statische Methoden zur Konstruktion eines neuen `Uint8Array`-Objekts aus einem base64- bzw. hex-codierten String.
  - {{jsxref("Uint8Array.prototype.setFromBase64()")}}, und {{jsxref("Uint8Array.prototype.setFromHex()")}} Instanzmethoden zur Befüllung eines bestehenden `Uint8Array`-Objekts mit Bytes aus einem base64- oder hex-codierten String.
  - {{jsxref("Uint8Array.prototype.toBase64()")}} und {{jsxref("Uint8Array.prototype.toHex()")}} Instanzmethoden, die einen base64- und hex-codierten String aus den Daten in einem `Uint8Array`-Objekt zurückgeben.

#### Entfernungen

### SVG

#### Entfernungen

### HTTP

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

- Die Eigenschaft [`WorkerNavigator.permissions`](/de/docs/Web/API/WorkerNavigator/permissions) wird jetzt unterstützt, sodass die [Permissions-API](/de/docs/Web/API/Permissions_API) sowohl in [Webarbeitern](/de/docs/Web/API/Web_Workers_API) als auch im Hauptfenster-Thread verwendet werden kann. ([Firefox Fehler 1193373](https://bugzil.la/1193373)).
- Die Schnittstelle [`EventSource`](/de/docs/Web/API/EventSource) zur Behandlung von [serverseitigen Ereignissen](/de/docs/Web/API/Server-sent_events) wird nun in [Service Workern](/de/docs/Web/API/Service_Worker_API) unterstützt. ([Firefox Fehler 1681218](https://bugzil.la/1681218)).
- Die Schnittstellen [`ImageDecoder`](/de/docs/Web/API/ImageDecoder), [`ImageTrackList`](/de/docs/Web/API/ImageTrackList) und [`ImageTrack`](/de/docs/Web/API/ImageTrack) der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) werden nun unterstützt, was die Dekodierung von Bildern aus den Haupt- und Arbeitsthreads ermöglicht. ([Firefox Fehler 1923755](https://bugzil.la/1923755)).
- Die Ereignisse [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle werden nun bei {{HTMLElement("dialog")}}-Elementen sofort ausgelöst, bevor sie sichtbar oder unsichtbar werden. `beforetoggle` kann beispielsweise verwendet werden, um Klassen, die die Animation eines Dialogs steuern, anzuwenden oder zu entfernen oder um den Zustand eines Dialogformulars zurückzusetzen, bevor es angezeigt wird. Das `toggle`-Ereignis kann verwendet werden, um Änderungen des offenen Zustands zu überwachen, was sonst einen [`MutationObserver`](/de/docs/Web/API/MutationObserver) erfordern würde. ([Firefox Fehler 1876762](https://bugzil.la/1876762)).
- Das Inhaltsattribut [`onwaitingforkey`](/de/docs/Web/API/HTMLMediaElement/waitingforkey_event) kann jetzt auf {{htmlelement("audio")}}/{{htmlelement("video")}}-Elementen angegeben werden, um einen Inline-Event-Handler für das `waitingforkey`-Ereignis festzulegen. ([Firefox Fehler 1925952](https://bugzil.la/1925952)).
- [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) ist nun in allen Arbeiterkontexten über [`WorkerNavigator.serviceWorker`](/de/docs/Web/API/WorkerNavigator/serviceWorker) verfügbar, sodass Arbeiter die [Service Worker-Registrierungen](/de/docs/Web/API/ServiceWorkerRegistration) der aktuellen Herkunft prüfen und verwalten können. Bisher war `ServiceWorkerContainer` nur im Haupt-Thread über [`Navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) verfügbar. ([Firefox Fehler 1113522](https://bugzil.la/1113522)).
- Die Schnittstellen [`ImageDecoder`](/de/docs/Web/API/ImageDecoder), [`ImageTrackList`](/de/docs/Web/API/ImageTrackList) und [`ImageTrack`](/de/docs/Web/API/ImageTrack) der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) werden nun unterstützt, was die Dekodierung von Bildern aus den Haupt- und Arbeitsthreads ermöglicht. ([Firefox Fehler 1923755](https://bugzil.la/1923755)).
- Die Eigenschaft [`name`](/de/docs/Web/API/PerformanceNavigationTiming#performanceentry.name) von `PerformanceNavigationTiming` lässt jetzt [Textfragmente](/de/docs/Web/URI/Fragment/Text_fragments) aus der zurückgegebenen URL weg, wie es der Spezifikation entspricht. Diese Art von [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Objekt wird von [`Performance.getEntries()`](/de/docs/Web/API/Performance/getEntries) für Einträge mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `navigation` zurückgegeben. ([Firefox Fehler 1919565](https://bugzil.la/1919565)).

#### DOM

#### Medien, WebRTC und Web Audio

#### Entfernungen

### WebAssembly

#### Entfernungen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für das Argument `url` für den Befehl `network.continueRequest` hinzugefügt, das es erlaubt, Anfragen transparent auf eine andere URL umzuleiten ([Firefox Fehler 1898158](https://bugzil.la/1898158)).
- `browsingContext.print` aktualisiert, um einen `InvalidArgumentError` auszulösen, wenn es mit inkorrekten Dimensionen verwendet wird ([Firefox Fehler 1886382](https://bugzil.la/1886382)).
- Fehler in `script.evaluate` und `script.callFunction` behoben, um die Verwendung von `document.open` in Sandbox-Reichen zu ermöglichen ([Firefox Fehler 1918288](https://bugzil.la/1918288)).
- Einen Fehler behoben, bei dem das `browsingContext.load`-Ereignis möglicherweise die falsche Navigations-ID enthält, wenn eine gleiche Dokumentnavigation während der Hauptnavigation auftritt ([Firefox Fehler 1922327](https://bugzil.la/1922327)).
- Einen weiteren Randfall behoben, bei dem Befehle aufgrund der Navigation mit einem `UnknownError` fehlschlagen konnten ([Firefox Fehler 1923899](https://bugzil.la/1923899)).

#### Marionette

- Marionette aktualisiert, um die Fensterpositionierung unter Linux mit Wayland besser zu handhaben ([Firefox Fehler 1857571](https://bugzil.la/1857571)).
- Einen Fehler behoben, der ein leeres `style`-Attribut an einem Element hinterlassen konnte, wenn versucht wurde, darauf zu klicken oder es zu löschen ([Firefox Fehler 1922709](https://bugzil.la/1922709)).
- Fehlermeldung für `UnexpectedAlertOpen`-Fehler aktualisiert, um den Text des entsprechenden Alerts einzuschließen ([Firefox Fehler 1924469](https://bugzil.la/1924469)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("cookies.get")}} ordnet jetzt Cookies gemäß der [5.4 The Cookie Header Sektion des HTTP State Management Mechanismus (RFC 6265)](https://datatracker.ietf.org/doc/html/rfc6265#section-5.4). Dies beeinflusst die Ergebnisse von Aufrufen, wenn ein Cookie Varianten mit unterschiedlichen Pfadkomponenten hat. Bisher wurde das zuerst erstellte Cookie von {{WebExtAPIRef("cookies.get")}}, {{WebExtAPIRef("cookies.remove")}}, {{WebExtAPIRef("cookies.set")}} und {{WebExtAPIRef("cookies.getAll")}} gematcht. Nach dieser Änderung wird das Cookie mit dem längsten übereinstimmenden Pfad zurückgegeben. ([Firefox Fehler 1798655](https://bugzil.la/1798655))
- Ein Fehler in der {{WebExtAPIRef("declarativeNetRequest")}}-API behoben, der nach einem Browser-Neustart die Regelregistrierung verhinderte ([Firefox Fehler 1921353](https://bugzil.la/1921353)). Dieser Fehler betraf Erweiterungen, die sich auf {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules")}} oder {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets")}} verlassen. Dieser Fix wurde auch in Firefox ESR 128.5 und Firefox ESR 115.18 zurückportiert.

### Entfernungen

### Sonstiges

## Experimentelle Webfeatures

Diese Features sind neu in Firefox 133 verfügbar, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solche Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **contenteditable plaintext-only Wert:** `dom.element.contenteditable.plaintext-only.enabled`.

  Der `plaintext-only` Wert des [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) globalen Attributs zeigt an, dass das Element bearbeitbar ist; Formatierungen im Rich-Text sind deaktiviert und jegliche Formate in eingefügtem Text werden automatisch entfernt. ([Firefox Fehler 1922723](https://bugzil.la/1922723).)

## Ältere Versionen

{{Firefox_for_developers}}
