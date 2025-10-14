---
title: Firefox 133 für Entwickler
short-title: Firefox 133
slug: Mozilla/Firefox/Releases/133
l10n:
  sourceCommit: c7a8b2584452bcd5d2c135b637f4ec659ff74b99
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 133, die Entwickler betreffen. Firefox 133 wurde am [26. November 2024](https://whattrainisitnow.com/release/?version=133) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`viewport <meta>`-Tag](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) unterstützt nun das Attribut [`interactive-widget`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport#the_effect_of_interactive_ui_widgets), das die Größe des Viewports beeinflusst, wenn übliche UI-Widgets, wie virtuelle Tastaturen, auf dem Bildschirm angezeigt werden. ([Firefox-Bug 1831649](https://bugzil.la/1831649) und [Firefox-Bug 1920755](https://bugzil.la/1920755)).

### CSS

Keine bemerkenswerten Änderungen

### JavaScript

- Unterstützung für {{jsxref("Uint8Array")}}-Methoden, um Konvertierungen zwischen {{Glossary("base64", "base64")}}- und hex-codierten Zeichenfolgen und Byte-Arrays zu erleichtern. ([Firefox-Bug 1917885](https://bugzil.la/1917885) und [Firefox-Bug 1862220](https://bugzil.la/1862220)).

  Die neuen Methoden umfassen:
  - Die statischen Methoden {{jsxref("Uint8Array.fromBase64()")}} und {{jsxref("Uint8Array.fromHex()")}} zur Konstruktion eines neuen `Uint8Array`-Objekts aus einer base64- bzw. hex-codierten Zeichenfolge.
  - Die Instanzmethoden {{jsxref("Uint8Array.prototype.setFromBase64()")}}, und {{jsxref("Uint8Array.prototype.setFromHex()")}} zum Füllen eines bestehenden `Uint8Array`-Objekts mit Bytes aus einer base64- oder hex-codierten Zeichenfolge.
  - Die Instanzmethoden {{jsxref("Uint8Array.prototype.toBase64()")}} und {{jsxref("Uint8Array.prototype.toHex()")}}, die eine base64- bzw. hex-codierte Zeichenfolge aus den Daten in einem `Uint8Array`-Objekt zurückgeben.

### APIs

- Die Eigenschaft [`WorkerNavigator.permissions`](/de/docs/Web/API/WorkerNavigator/permissions) wird nun unterstützt und ermöglicht die Verwendung der [Permission API](/de/docs/Web/API/Permissions_API) sowohl in [Workern](/de/docs/Web/API/Web_Workers_API) als auch im Hauptfenster-Thread. ([Firefox-Bug 1193373](https://bugzil.la/1193373)).
- Die [`EventSource`](/de/docs/Web/API/EventSource)-Schnittstelle zur Handhabung von [Server-Sent Events](/de/docs/Web/API/Server-sent_events) wird jetzt in [Service Worker](/de/docs/Web/API/Service_Worker_API) unterstützt. ([Firefox-Bug 1681218](https://bugzil.la/1681218)).
- Die Schnittstellen [`ImageDecoder`](/de/docs/Web/API/ImageDecoder), [`ImageTrackList`](/de/docs/Web/API/ImageTrackList) und [`ImageTrack`](/de/docs/Web/API/ImageTrack) der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) werden nun unterstützt, was das Decodieren von Bildern sowohl aus dem Hauptthread als auch aus Workern ermöglicht. ([Firefox-Bug 1923755](https://bugzil.la/1923755)).
- Die Ereignisse [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle werden nun bei {{HTMLElement("dialog")}}-Elementen unmittelbar vor und nach dem Ein- oder Ausblenden ausgelöst. `beforetoggle` kann zum Beispiel verwendet werden, um Klassen für die Animation eines Dialogs zu setzen oder den Zustand eines Dialogformulars zurückzusetzen, bevor es angezeigt wird. Das `toggle`-Ereignis kann verwendet werden, um Benachrichtigungen über den offenen Zustand zu erhalten, was ansonsten einen [`MutationObserver`](/de/docs/Web/API/MutationObserver) erfordern würde. ([Firefox-Bug 1876762](https://bugzil.la/1876762)).
- Die Initialisierungsoption [`keepalive`](/de/docs/Web/API/RequestInit#keepalive) für die globale [`fetch()`](/de/docs/Web/API/Window/fetch)-Methode und den [`Request()` Konstruktor](/de/docs/Web/API/Request/Request#options) wird jetzt unterstützt, zusammen mit der Eigenschaft [`Request.keepalive`](/de/docs/Web/API/Request/keepalive). `keepalive` kann auf `true` gesetzt werden, um zu verhindern, dass der Browser die zugehörige Anfrage abbricht, wenn die Seite, die sie initiiert hat, entladen wird, bevor die Anfrage abgeschlossen ist. Dies könnte verwendet werden, um Analysen am Ende einer Sitzung zu senden, auch wenn der Benutzer die Seite verlässt oder schließt.

  Die Verwendung von `fetch()` mit `keepalive` bietet einige Vorteile gegenüber der Verwendung von [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) für denselben Zweck, wie z. B. die Verwendung von HTTP-Methoden außer [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST), anpassbare Anfrageeigenschaften und Zugriff auf die Serverantwort über die Erfüllung von Fetch-{{jsxref("Promise")}}. Es ist auch in [Service Worker](/de/docs/Web/API/Service_Worker_API) verfügbar. ([Firefox-Bug 1906952](https://bugzil.la/1906952), [Firefox-Bug 1923044](https://bugzil.la/1923044)).

- Das Inhaltsattribut [`onwaitingforkey`](/de/docs/Web/API/HTMLMediaElement/waitingforkey_event) kann nun in {{htmlelement("audio")}}/{{htmlelement("video")}}-Elementen angegeben werden, um einen Inline-Event-Handler für das `waitingforkey`-Ereignis zu setzen. ([Firefox-Bug 1925952](https://bugzil.la/1925952)).
- [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) ist jetzt in allen Worker-Kontexten über [`WorkerNavigator.serviceWorker`](/de/docs/Web/API/WorkerNavigator/serviceWorker) verfügbar, wodurch Worker die [Service-Worker-Registrierungen](/de/docs/Web/API/ServiceWorkerRegistration) der aktuellen Herkunft inspizieren und verwalten können. Bisher war `ServiceWorkerContainer` nur im Haupt-Thread über [`Navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) verfügbar. ([Firefox-Bug 1113522](https://bugzil.la/1113522)).
- Die Eigenschaft [`name`](/de/docs/Web/API/PerformanceNavigationTiming#performanceentry.name) von `PerformanceNavigationTiming` lässt nun [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) aus der zurückgegebenen URL aus, um der Spezifikation zu entsprechen. Dieses [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Objekt wird von [`Performance.getEntries()`](/de/docs/Web/API/Performance/getEntries) für Einträge mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `navigation` zurückgegeben. ([Firefox-Bug 1919565](https://bugzil.la/1919565)).

#### Entfernte Funktionen

- Das Argument [`options.shadowRoots`](/de/docs/Web/API/Document/caretPositionFromPoint#shadowroots) zur Übergabe von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekten an die Methode [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) wurde aus der Veröffentlichung zurückgezogen. Die Funktion kann in der Nightly-Version getestet werden und wird voraussichtlich in Zukunft wieder veröffentlicht. ([Firefox-Bug 1914596](https://bugzil.la/1914596)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für das `url`-Argument des Befehls `network.continueRequest` hinzugefügt, der es erlaubt, Anfragen transparent an eine andere URL weiterzuleiten ([Firefox-Bug 1898158](https://bugzil.la/1898158)).
- `browsingContext.print` aktualisiert, um einen `InvalidArgumentError` zu werfen, wenn es mit falschen Abmessungen verwendet wird ([Firefox-Bug 1886382](https://bugzil.la/1886382)).
- Fehler in `script.evaluate` und `script.callFunction` behoben, um die Verwendung von `document.open` in Sandbox-Bereichen zu ermöglichen ([Firefox-Bug 1918288](https://bugzil.la/1918288)).
- Ein Fehler behoben, bei dem das `browsingContext.load`-Ereignis möglicherweise die falsche Navigations-ID enthält, wenn eine gleichzeitige Navigationsaktion während der Hauptnavigation auftritt ([Firefox-Bug 1922327](https://bugzil.la/1922327)).
- Ein weiterer Sonderfall behoben, bei dem Befehle aufgrund von Navigation mit einem `UnknownError` fehlschlagen konnten ([Firefox-Bug 1923899](https://bugzil.la/1923899)).

#### Marionette

- Marionette aktualisiert, um die Fensterpositionierung unter Linux mit Wayland besser zu handhaben ([Firefox-Bug 1857571](https://bugzil.la/1857571)).
- Ein Fehler behoben, der ein leeres `style`-Attribut an einem Element hinterlassen konnte, wenn versucht wurde, es zu klicken oder zu leeren ([Firefox-Bug 1922709](https://bugzil.la/1922709)).
- Die Fehlermeldung für `UnexpectedAlertOpen`-Fehler aktualisiert, um den Text des entsprechenden Alerts einzuschließen ([Firefox-Bug 1924469](https://bugzil.la/1924469)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("cookies.get")}} ordnet jetzt Cookies gemäß dem [5.4 The Cookie Header-Abschnitt des HTTP State Management Mechanism (RFC 6265)](https://datatracker.ietf.org/doc/html/rfc6265#section-5.4). Dies beeinflusst die Ergebnisse von Aufrufen, wenn ein Cookie Varianten mit unterschiedlichen Pfadkomponenten hat. Bisher wurde das zuerst erstellte Cookie von {{WebExtAPIRef("cookies.get")}}, {{WebExtAPIRef("cookies.remove")}}, {{WebExtAPIRef("cookies.set")}}, und {{WebExtAPIRef("cookies.getAll")}} abgeglichen. Nach dieser Änderung wird das Cookie mit dem längsten übereinstimmenden Pfad zurückgegeben. ([Firefox-Bug 1798655](https://bugzil.la/1798655))
- Ein Fehler in der {{WebExtAPIRef("declarativeNetRequest")}}-API behoben, der die Regelregistrierung nach einem Browser-Neustart verhinderte ([Firefox-Bug 1921353](https://bugzil.la/1921353)). Dieser Fehler betraf Erweiterungen, die sich auf {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules")}} oder {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets")}} verlassen. Dieser Fix wurde auch in Firefox ESR 128.5 und Firefox ESR 115.18 zurückportiert.
- Ein Fehler behoben, der verhinderte, dass [`window.close()`](/de/docs/Web/API/Window/close) aus einer [Sidebar](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars) heraus die Sidebar schließt.

## Experimentelle Webfunktionen

Diese Funktionen sind neu in Firefox 133 enthalten, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Präferenz auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **contenteditable-Wert für Nur-Text:** `dom.element.contenteditable.plaintext-only.enabled`.

  Der `plaintext-only`-Wert des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) gibt an, dass das Element bearbeitbar ist; die Formatierung für Rich Text ist deaktiviert, und jede Formatierung im eingefügten Text wird automatisch entfernt. ([Firefox-Bug 1922723](https://bugzil.la/1922723).)

- **:has-slotted CSS-Pseudoklasse:** `layout.css.has-slotted-selector.enabled`.

  Die {{CSSXRef(":has-slotted")}} [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wird verwendet, um Elemente in {{HTMLElement("template")}} zu gestalten, die Inhalte zu einem {{HTMLElement("slot")}}-Element hinzufügen, wenn ein [Webkomponenten](/de/docs/Web/API/Web_components) gerendert wird. ([Firefox-Bug 1921747](https://bugzil.la/1921747).)
