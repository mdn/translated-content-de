---
title: Firefox 133 für Entwickler
slug: Mozilla/Firefox/Releases/133
l10n:
  sourceCommit: 6c1df7c1cb839131c0f90d08a21c6d7935cc4de0
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

- Unterstützung für Methoden von {{jsxref("Uint8Array")}} zur Erleichterung der Konvertierungen zwischen {{Glossary("base64", "base64")}}- und hex-codierten Strings und Byte-Arrays. ([Firefox Fehler 1917885](https://bugzil.la/1917885) und [Firefox Fehler 1862220](https://bugzil.la/1862220)).

  Die neuen Methoden umfassen:

  - Die statischen Methoden {{jsxref("Uint8Array.fromBase64()")}} und {{jsxref("Uint8Array.fromHex()")}}, um ein neues `Uint8Array`-Objekt aus einem base64- und hex-codierten String zu erstellen.
  - Die Instanzmethoden {{jsxref("Uint8Array.prototype.setFromBase64()")}} und {{jsxref("Uint8Array.prototype.setFromHex()")}}, um ein bestehendes `Uint8Array`-Objekt mit Bytes aus einem base64- oder hex-codierten String zu füllen.
  - Die Instanzmethoden {{jsxref("Uint8Array.prototype.toBase64()")}} und {{jsxref("Uint8Array.prototype.toHex()")}}, die einen base64- und hex-codierten String aus den Daten in einem `Uint8Array`-Objekt zurückgeben.

#### Entfernungen

### SVG

#### Entfernungen

### HTTP

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

- Die [`WorkerNavigator.permissions`](/de/docs/Web/API/WorkerNavigator/permissions) Eigenschaft wird nun unterstützt, sodass die [Permissions API](/de/docs/Web/API/Permissions_API) sowohl in [workern](/de/docs/Web/API/Web_Workers_API) als auch im Hauptfenster-Thread verwendet werden kann. ([Firefox Fehler 1193373](https://bugzil.la/1193373)).
- Das [`EventSource`](/de/docs/Web/API/EventSource) Interface für den Umgang mit [Server-Sent Events](/de/docs/Web/API/Server-sent_events) wird nun in [Service Workern](/de/docs/Web/API/Service_Worker_API) unterstützt. ([Firefox Fehler 1681218](https://bugzil.la/1681218)).
- Die [`ImageDecoder`](/de/docs/Web/API/ImageDecoder), [`ImageTrackList`](/de/docs/Web/API/ImageTrackList) und [`ImageTrack`](/de/docs/Web/API/ImageTrack) Schnittstellen der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) werden nun unterstützt, was es ermöglicht, Bilder von Haupt- und Worker-Threads zu decodieren. ([Firefox Fehler 1923755](https://bugzil.la/1923755)).
- Die [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) Ereignisse der [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle werden nun an {{HTMLElement("dialog")}} Elementen unmittelbar bevor und nachdem sie angezeigt oder versteckt werden, ausgelöst. Das `beforetoggle` kann z.B. verwendet werden, um Klassen anzuwenden/zu entfernen, die die Animation eines Dialogs steuern, oder den Zustand eines Dialogformulars zurückzusetzen, bevor es angezeigt wird. Das `toggle` Ereignis kann verwendet werden, um eine Änderungsbenachrichtigung über den offenen Zustand zu erhalten, was ansonsten einen [`MutationObserver`](/de/docs/Web/API/MutationObserver) erfordert. ([Firefox Fehler 1876762](https://bugzil.la/1876762)).
- Die [`keepalive`](/de/docs/Web/API/RequestInit#keepalive) Initialisierungsoption für die globale [`fetch()`](/de/docs/Web/API/Window/fetch) Methode und den [`Request()` Konstruktor](/de/docs/Web/API/Request/Request#options) werden nun unterstützt, zusammen mit der [`Request.keepalive`](/de/docs/Web/API/Request/keepalive) Eigenschaft. `keepalive` kann auf `true` gesetzt werden, um zu verhindern, dass der Browser die zugehörige Anfrage abbricht, wenn die Seite, die sie initiiert hat, entladen wird, bevor die Anfrage abgeschlossen ist. Dies könnte z.B. verwendet werden, um Analysen am Ende einer Sitzung zu senden, auch wenn der Benutzer die Seite verlässt oder schließt.

  Die Verwendung von `fetch()` mit `keepalive` hat einige Vorteile gegenüber der Verwendung von [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) für denselben Zweck, wie z.B. die Verwendung von HTTP-Methoden außer [`POST`](/de/docs/Web/HTTP/Methods/POST), anpassbare Anforderungseigenschaften und der Zugriff auf die Serverantwort über die Erfüllung des Fetch {{jsxref("Promise")}}. Es ist auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verfügbar. ([Firefox Fehler 1906952](https://bugzil.la/1906952), [Firefox Fehler 1923044](https://bugzil.la/1923044)).

- Das [`onwaitingforkey`](/de/docs/Web/API/HTMLMediaElement/waitingforkey_event) Inhaltsattribut kann jetzt an {{htmlelement("audio")}}/{{htmlelement("video")}} Elementen angegeben werden, um einen Inline-Event-Handler für das `waitingforkey` Ereignis festzulegen. ([Firefox Fehler 1925952](https://bugzil.la/1925952)).
- [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) ist jetzt in allen Worker-Kontexten über [`WorkerNavigator.serviceWorker`](/de/docs/Web/API/WorkerNavigator/serviceWorker) verfügbar, wodurch Worker die [Service-Worker-Registrierungen](/de/docs/Web/API/ServiceWorkerRegistration) im Zusammenhang mit dem aktuellen Ursprung inspizieren und verwalten können. Zuvor war `ServiceWorkerContainer` nur im Hauptthread verfügbar, über [`Navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker). ([Firefox Fehler 1113522](https://bugzil.la/1113522)).
- Die [`ImageDecoder`](/de/docs/Web/API/ImageDecoder), [`ImageTrackList`](/de/docs/Web/API/ImageTrackList) und [`ImageTrack`](/de/docs/Web/API/ImageTrack) Schnittstellen der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) werden nun unterstützt, was es ermöglicht, Bilder von Haupt- und Worker-Threads zu decodieren. ([Firefox Fehler 1923755](https://bugzil.la/1923755)).
- Die [`name`](/de/docs/Web/API/PerformanceNavigationTiming#performanceentry.name) Eigenschaft von `PerformanceNavigationTiming` lässt jetzt [Textfragmente](/de/docs/Web/URI/Fragment/Text_fragments) aus der zurückgegebenen URL weg und entspricht damit der Spezifikation. Diese Art von [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) Objekt wird von [`Performance.getEntries()`](/de/docs/Web/API/Performance/getEntries) für Einträge mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `navigation` zurückgegeben. ([Firefox Fehler 1919565](https://bugzil.la/1919565)).

#### DOM

#### Medien, WebRTC und Web Audio

#### Entfernungen

### WebAssembly

#### Entfernungen

### WebDriver-Komformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für das `url`-Argument für den `network.continueRequest` Befehl hinzugefügt, wodurch Anfragen transparent an eine andere URL umgeleitet werden können ([Firefox Fehler 1898158](https://bugzil.la/1898158)).
- `browsingContext.print` wurde aktualisiert, um einen `InvalidArgumentError` auszulösen, wenn falsche Dimensionen verwendet werden ([Firefox Fehler 1886382](https://bugzil.la/1886382)).
- `script.evaluate` und `script.callFunction` wurden korrigiert, um die Verwendung von `document.open` in Sandbox-Reichen zu ermöglichen ([Firefox Fehler 1918288](https://bugzil.la/1918288)).
- Ein Fehler wurde behoben, bei dem das `browsingContext.load` Ereignis die falsche Navigations-ID enthalten könnte, wenn während der Hauptnavigation eine gleiche Dokumentnavigation stattfand ([Firefox Fehler 1922327](https://bugzil.la/1922327)).
- Ein weiterer Randfall wurde behoben, bei dem Befehle aufgrund der Navigation mit einem `UnknownError` fehlschlagen konnten ([Firefox Fehler 1923899](https://bugzil.la/1923899)).

#### Marionette

- Marionette wurde aktualisiert, um die Fensterpositionierung unter Linux mit Wayland besser zu handhaben ([Firefox Fehler 1857571](https://bugzil.la/1857571)).
- Ein Fehler wurde behoben, der ein leeres `style` Attribut an einem Element hinterlassen konnte, wenn versucht wurde, darauf zu klicken oder es zu löschen ([Firefox Fehler 1922709](https://bugzil.la/1922709)).
- Die Fehlermeldung, die für `UnexpectedAlertOpen`-Fehler gesendet wird, wurde aktualisiert, um den Text des entsprechenden Alerts einzuschließen ([Firefox Fehler 1924469](https://bugzil.la/1924469)).

## Änderungen für Add-On-Entwickler

- {{WebExtAPIRef("cookies.get")}} ordnet jetzt Cookies gemäß dem Abschnitt [5.4 The Cookie Header der HTTP State Management Mechanism (RFC 6265)](https://datatracker.ietf.org/doc/html/rfc6265#section-5.4). Dies beeinflusst die Ergebnismenge, wenn ein Cookie mit verschiedenen Pfadkomponenten Varianten hat. Zuvor wurde das zuerst erstellte Cookie von {{WebExtAPIRef("cookies.get")}}, {{WebExtAPIRef("cookies.remove")}}, {{WebExtAPIRef("cookies.set")}} und {{WebExtAPIRef("cookies.getAll")}} abgeglichen. Nach dieser Änderung wird das Cookie mit dem am längsten übereinstimmenden Pfad zurückgegeben. ([Firefox Fehler 1798655](https://bugzil.la/1798655))
- Ein Fehler in der {{WebExtAPIRef("declarativeNetRequest")}} API wurde behoben, der die Regelregistrierung nach einem Neustart des Browsers verhinderte ([Firefox Fehler 1921353](https://bugzil.la/1921353)). Dieser Fehler betraf Erweiterungen, die sich auf {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules")}} oder {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets")}} verlassen. Dieser Fix wurde auch auf Firefox ESR 128.5 und Firefox ESR 115.18 zurückportiert.

### Entfernungen

### Sonstiges

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 133 verfügbar, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite über [experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **contenteditable plaintext-only Wert:** `dom.element.contenteditable.plaintext-only.enabled`.

  Der `plaintext-only` Wert des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) zeigt an, dass das Element bearbeitbar ist; die Formatierung von Rich-Text ist deaktiviert und jegliche Formatierung in eingefügtem Text wird automatisch entfernt. ([Firefox Fehler 1922723](https://bugzil.la/1922723).)

- **:has-slotted CSS-Pseudoklasse:** `layout.css.has-slotted-selector.enabled`.

  Die {{CSSXRef(":has-slotted")}} [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wird verwendet, um Elemente in einem {{HTMLElement("template")}}, die Inhalte zu einem {{HTMLElement("slot")}}-Element hinzugefügt werden, beim Rendering eines [Web-Components](/de/docs/Web/API/Web_components) zu stylen. ([Firefox Fehler 1921747](https://bugzil.la/1921747).)

## Ältere Versionen

{{Firefox_for_developers}}
