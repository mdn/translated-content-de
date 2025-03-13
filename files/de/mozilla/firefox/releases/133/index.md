---
title: Firefox 133 für Entwickler
slug: Mozilla/Firefox/Releases/133
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 133, die Entwickler betreffen. Firefox 133 wurde am [26. November 2024](https://whattrainisitnow.com/release/?version=133) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`<meta>`-Tag für den Viewport](/de/docs/Web/HTML/Viewport_meta_tag) unterstützt nun das Attribut [`interactive-widget`](/de/docs/Web/HTML/Viewport_meta_tag#the_effect_of_interactive_ui_widgets). Dieses beeinflusst die Größe des Viewports, wenn übliche UI-Widgets wie virtuelle Tastaturen zum Bildschirm hinzugefügt werden. ([Firefox Bug 1831649](https://bugzil.la/1831649) und [Firefox Bug 1920755](https://bugzil.la/1920755)).

### CSS

Keine bemerkenswerten Änderungen

### JavaScript

- Unterstützung für {{jsxref("Uint8Array")}}-Methoden zur Vereinfachung von Konvertierungen zwischen {{Glossary("base64", "base64")}}- und hex-codierten Strings und Byte-Arrays. ([Firefox Bug 1917885](https://bugzil.la/1917885) und [Firefox Bug 1862220](https://bugzil.la/1862220)).

  Die neuen Methoden umfassen:

  - {{jsxref("Uint8Array.fromBase64()")}} und {{jsxref("Uint8Array.fromHex()")}} statische Methoden zum Erstellen eines neuen `Uint8Array`-Objekts aus einem base64- bzw. hex-codierten String.
  - {{jsxref("Uint8Array.prototype.setFromBase64()")}} und {{jsxref("Uint8Array.prototype.setFromHex()")}} Instanzmethoden zum Füllen eines bestehenden `Uint8Array`-Objekts mit Bytes aus einem base64- oder hex-codierten String.
  - {{jsxref("Uint8Array.prototype.toBase64()")}} und {{jsxref("Uint8Array.prototype.toHex()")}} Instanzmethoden, die einen base64- bzw. hex-codierten String aus den Daten eines `Uint8Array`-Objekts zurückgeben.

### APIs

- Die Eigenschaft [`WorkerNavigator.permissions`](/de/docs/Web/API/WorkerNavigator/permissions) wird nun unterstützt, sodass die [Permissions API](/de/docs/Web/API/Permissions_API) sowohl in [workern](/de/docs/Web/API/Web_Workers_API) als auch im Haupt-Thread des Fensters verwendet werden kann. ([Firefox Bug 1193373](https://bugzil.la/1193373)).
- Das [`EventSource`](/de/docs/Web/API/EventSource)-Interface zum Verarbeiten von [server-sent events](/de/docs/Web/API/Server-sent_events) wird nun in [Service Workern](/de/docs/Web/API/Service_Worker_API) unterstützt. ([Firefox Bug 1681218](https://bugzil.la/1681218)).
- Die Schnittstellen [`ImageDecoder`](/de/docs/Web/API/ImageDecoder), [`ImageTrackList`](/de/docs/Web/API/ImageTrackList) und [`ImageTrack`](/de/docs/Web/API/ImageTrack) der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) werden nun unterstützt, was die Bilddekodierung von Haupt- und Worker-Threads ermöglicht. ([Firefox Bug 1923755](https://bugzil.la/1923755)).
- Die Events [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces werden nun auf {{HTMLElement("dialog")}}-Elementen unmittelbar vor und nach deren Anzeige oder Ausblendung ausgelöst. Das `beforetoggle`-Event kann z.B. verwendet werden, um Klassen zuzuweisen oder zu entfernen, die die Animation eines Dialogs steuern, oder um den Zustand eines Dialogformulars zurückzusetzen, bevor es angezeigt wird. Das `toggle`-Event kann genutzt werden, um eine Benachrichtigung über die Änderung des offenen Zustands zu erhalten, die andernfalls einen [`MutationObserver`](/de/docs/Web/API/MutationObserver) erfordert. ([Firefox Bug 1876762](https://bugzil.la/1876762)).
- Die Initialisierungsoption [`keepalive`](/de/docs/Web/API/RequestInit#keepalive) für die globale Methode [`fetch()`](/de/docs/Web/API/Window/fetch) und den [`Request()`-Konstruktor](/de/docs/Web/API/Request/Request#options) wird nun unterstützt, zusammen mit der Eigenschaft [`Request.keepalive`](/de/docs/Web/API/Request/keepalive). `keepalive` kann auf `true` gesetzt werden, um zu verhindern, dass der Browser die zugehörige Anfrage abbricht, wenn die Seite, die sie initiiert hat, entladen wird, bevor die Anfrage abgeschlossen ist.
  Dies könnte z.B. verwendet werden, um Analysen am Ende einer Sitzung zu senden, selbst wenn der Benutzer die Seite verlässt oder schließt.

  Die Verwendung von `fetch()` mit `keepalive` bietet einige Vorteile gegenüber der Verwendung von [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) für denselben Zweck, wie z.B. die Verwendung von HTTP-Methoden außer [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST), anpassbare Anforderungseigenschaften und Zugriff auf die Serverantwort durch das `fetch` {{jsxref("Promise")}} Erfüllung. Es ist auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verfügbar. ([Firefox Bug 1906952](https://bugzil.la/1906952), [Firefox Bug 1923044](https://bugzil.la/1923044)).

- Das Attribut [`onwaitingforkey`](/de/docs/Web/API/HTMLMediaElement/waitingforkey_event) kann nun auf {{htmlelement("audio")}}/{{htmlelement("video")}}-Elementen angegeben werden, um einen Inline-Event-Handler für das `waitingforkey`-Event festzulegen. ([Firefox Bug 1925952](https://bugzil.la/1925952)).
- [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) wird nun in allen Worker-Kontexten über [`WorkerNavigator.serviceWorker`](/de/docs/Web/API/WorkerNavigator/serviceWorker) bereitgestellt, sodass Worker die mit dem aktuellen Ursprung verbundenen [Service Worker Registrierungen](/de/docs/Web/API/ServiceWorkerRegistration) überprüfen und verwalten können. Bisher war `ServiceWorkerContainer` nur im Haupt-Thread über [`Navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) verfügbar. ([Firefox Bug 1113522](https://bugzil.la/1113522)).
- Die Eigenschaft [`name`](/de/docs/Web/API/PerformanceNavigationTiming#performanceentry.name) von `PerformanceNavigationTiming` lässt nun [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) aus der zurückgegebenen URL aus, was der Spezifikation entspricht. Diese Art von [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Objekt wird von [`Performance.getEntries()`](/de/docs/Web/API/Performance/getEntries) für Einträge mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `navigation` zurückgegeben. ([Firefox Bug 1919565](https://bugzil.la/1919565)).

#### Entfernungen

- Das Argument [`options.shadowRoots`](/de/docs/Web/API/Document/caretPositionFromPoint#shadowroots) zum Übergeben von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekten an die Methode [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) wurde aus der Veröffentlichung zurückgezogen.
  Das Feature kann in der Nightly-Version getestet werden und soll in Zukunft erneut veröffentlicht werden. ([Firefox Bug 1914596](https://bugzil.la/1914596)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für das `url`-Argument für den Befehl `network.continueRequest` hinzugefügt, der es ermöglicht, Anfragen transparent auf eine andere URL umzuleiten ([Firefox Bug 1898158](https://bugzil.la/1898158)).
- `browsingContext.print` aktualisiert, um einen `InvalidArgumentError` zu werfen, wenn es mit falschen Abmessungen verwendet wird ([Firefox Bug 1886382](https://bugzil.la/1886382)).
- `script.evaluate` und `script.callFunction` behoben, um die Verwendung von `document.open` in Sandbox-Bereichen zu ermöglichen ([Firefox Bug 1918288](https://bugzil.la/1918288)).
- Ein Fehler behoben, bei dem das `browsingContext.load`-Event die falsche Navigations-ID enthalten konnte, wenn während der Hauptnavigation eine gleichseitige Dokumentennavigation auftrat ([Firefox Bug 1922327](https://bugzil.la/1922327)).
- Ein weiterer Randfall behoben, bei dem Befehle aufgrund von Navigation mit einem `UnknownError` fehlschlagen konnten ([Firefox Bug 1923899](https://bugzil.la/1923899)).

#### Marionette

- Marionette aktualisiert, um die Fensterpositionierung unter Linux mit Wayland besser zu handhaben ([Firefox Bug 1857571](https://bugzil.la/1857571)).
- Ein Fehler behoben, der ein leeres `style`-Attribut auf einem Element hinterlassen konnte, wenn versucht wurde, es zu klicken oder zu löschen ([Firefox Bug 1922709](https://bugzil.la/1922709)).
- Die Fehlermeldung für `UnexpectedAlertOpen`-Fehler aktualisiert, um den Text der entsprechenden Warnung einzuschließen ([Firefox Bug 1924469](https://bugzil.la/1924469)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("cookies.get")}} ordnet nun Cookies gemäß der [5.4 The Cookie Header-Sektion des HTTP State Management Mechanism (RFC 6265)](https://datatracker.ietf.org/doc/html/rfc6265#section-5.4). Dies wirkt sich auf die Aufrufergebnisse aus, wenn ein Cookie Varianten mit unterschiedlichen Pfadkomponenten hat. Bisher wurde das zuerst erstellte Cookie von {{WebExtAPIRef("cookies.get")}}, {{WebExtAPIRef("cookies.remove")}}, {{WebExtAPIRef("cookies.set")}} und {{WebExtAPIRef("cookies.getAll")}} abgeglichen. Nach dieser Änderung wird das Cookie mit dem längsten übereinstimmenden Pfad zurückgegeben. ([Firefox Bug 1798655](https://bugzil.la/1798655))
- Ein Fehler in der {{WebExtAPIRef("declarativeNetRequest")}}-API behoben, der die Registrierung von Regeln nach einem Neustart des Browsers verhinderte ([Firefox Bug 1921353](https://bugzil.la/1921353)). Dieser Fehler betraf Erweiterungen, die auf {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules")}} oder {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets")}} angewiesen sind. Dieser Fix wurde auch auf Firefox ESR 128.5 und Firefox ESR 115.18 zurückportiert.
- Ein Fehler behoben, der verhinderte, dass [`window.close()`](/de/docs/Web/API/Window/close) aus einer [Seitenleiste](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars) heraus die Seitenleiste schloss.

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 133 enthalten, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie diese auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **contenteditable-Wert nur-Text:** `dom.element.contenteditable.plaintext-only.enabled`.

  Der Wert `plaintext-only` des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) zeigt an, dass das Element bearbeitbar ist; die Formatierung von Rich-Text wird deaktiviert und jede Formatierung im eingefügten Text wird automatisch entfernt. ([Firefox Bug 1922723](https://bugzil.la/1922723).)

- **:has-slotted CSS-Pseudoklasse:** `layout.css.has-slotted-selector.enabled`.

  Die {{CSSXRef(":has-slotted")}} [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wird verwendet, um Elemente in {{HTMLElement("template")}} zu stylen, die Inhalt zu einem {{HTMLElement("slot")}}-Element hinzugefügt haben, wenn ein [Webkomponente](/de/docs/Web/API/Web_components) gerendert wird. ([Firefox Bug 1921747](https://bugzil.la/1921747).)

## Ältere Versionen

{{Firefox_for_developers}}
