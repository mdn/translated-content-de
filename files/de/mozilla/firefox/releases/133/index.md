---
title: Firefox 133 für Entwickler
slug: Mozilla/Firefox/Releases/133
l10n:
  sourceCommit: e844942f3020741e15ba533441424ba6249ba209
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 133, die Entwickler betreffen. Firefox 133 wurde am [26. November 2024](https://whattrainisitnow.com/release/?version=133) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Der [`viewport <meta>` Tag](/de/docs/Web/HTML/Viewport_meta_tag) unterstützt jetzt das Attribut [`interactive-widgets`](/de/docs/Web/HTML/Viewport_meta_tag#the_effect_of_interactive_ui_widgets), das die Größe des Viewports beeinflusst, wenn allgemeine UI-Widgets wie virtuelle Tastaturen auf dem Bildschirm hinzugefügt werden. ([Firefox Bug 1831649](https://bugzil.la/1831649) und [Firefox Bug 1920755](https://bugzil.la/1920755)).

### CSS

Keine bemerkenswerten Änderungen

### JavaScript

- Unterstützung für {{jsxref("Uint8Array")}} Methoden zur Erleichterung von Konvertierungen zwischen {{Glossary("base64", "base64")}}- und hex-codierten Zeichenfolgen und Byte-Arrays. ([Firefox Bug 1917885](https://bugzil.la/1917885) und [Firefox Bug 1862220](https://bugzil.la/1862220)).

  Die neuen Methoden umfassen:

  - {{jsxref("Uint8Array.fromBase64()")}} und {{jsxref("Uint8Array.fromHex()")}} statische Methoden, um ein neues `Uint8Array` Objekt aus einer base64- und hex-codierten Zeichenfolge zu erstellen.
  - {{jsxref("Uint8Array.prototype.setFromBase64()")}} und {{jsxref("Uint8Array.prototype.setFromHex()")}} Instanzmethoden, um ein existierendes `Uint8Array` Objekt mit Bytes aus einer base64- oder hex-codierten Zeichenfolge zu befüllen.
  - {{jsxref("Uint8Array.prototype.toBase64()")}} und {{jsxref("Uint8Array.prototype.toHex()")}} Instanzmethoden, die eine base64- und hex-codierte Zeichenfolge aus den Daten in einem `Uint8Array` Objekt zurückgeben.

### APIs

- Die [`WorkerNavigator.permissions`](/de/docs/Web/API/WorkerNavigator/permissions) Eigenschaft wird jetzt unterstützt und ermöglicht es, die [Permissions API](/de/docs/Web/API/Permissions_API) in [Workern](/de/docs/Web/API/Web_Workers_API) sowie im Hauptfenster-Thread zu verwenden. ([Firefox Bug 1193373](https://bugzil.la/1193373)).
- Die [`EventSource`](/de/docs/Web/API/EventSource) Schnittstelle zur Behandlung von [Server-Sent Events](/de/docs/Web/API/Server-sent_events) wird jetzt in [Service Workern](/de/docs/Web/API/Service_Worker_API) unterstützt. ([Firefox Bug 1681218](https://bugzil.la/1681218)).
- Die [`ImageDecoder`](/de/docs/Web/API/ImageDecoder), [`ImageTrackList`](/de/docs/Web/API/ImageTrackList) und [`ImageTrack`](/de/docs/Web/API/ImageTrack) Schnittstellen der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) werden jetzt unterstützt, was das Dekodieren von Bildern sowohl vom Haupt- als auch vom Worker-Thread aus ermöglicht. ([Firefox Bug 1923755](https://bugzil.la/1923755)).
- Die [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) Ereignisse der [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle werden jetzt an {{HTMLElement("dialog")}} Elementen unmittelbar vor und nach ihrer Anzeige oder Ausblendung ausgelöst. Das `beforetoggle` kann zum Beispiel verwendet werden, um Klassen anzuwenden oder zu entfernen, die die Animation eines Dialogs steuern, oder den Zustand eines Dialogformulars zurückzusetzen, bevor es angezeigt wird. Das `toggle` Ereignis kann verwendet werden, um Benachrichtigungen über den geänderten Zustand zu erhalten, was sonst einen [`MutationObserver`](/de/docs/Web/API/MutationObserver) erfordern würde. ([Firefox Bug 1876762](https://bugzil.la/1876762)).
- Die [`keepalive`](/de/docs/Web/API/RequestInit#keepalive) Initialisierungsoption für die globale [`fetch()`](/de/docs/Web/API/Window/fetch) Methode und den [`Request()` Konstruktor](/de/docs/Web/API/Request/Request#options) werden jetzt unterstützt, zusammen mit der [`Request.keepalive`](/de/docs/Web/API/Request/keepalive) Eigenschaft. `keepalive` kann auf `true` gesetzt werden, um zu verhindern, dass der Browser die zugehörige Anfrage abbricht, wenn die Seite, die sie initiiert hat, entladen wird, bevor die Anfrage abgeschlossen ist.
  Dies könnte zum Beispiel verwendet werden, um am Ende einer Sitzung Analysen zu senden, selbst wenn der Benutzer die Seite verlässt oder schließt.

  Die Verwendung von `fetch()` mit `keepalive` hat einige Vorteile gegenüber der Verwendung von [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) für denselben Zweck, wie die Möglichkeit, HTTP-Methoden außer [`POST`](/de/docs/Web/HTTP/Methods/POST) zu verwenden, anpassbare Anfrageeigenschaften und der Zugriff auf die Serverantwort über die Erfüllung des fetch {{jsxref("Promise")}}. Es steht auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) zur Verfügung. ([Firefox Bug 1906952](https://bugzil.la/1906952), [Firefox Bug 1923044](https://bugzil.la/1923044)).

- Das [`onwaitingforkey`](/de/docs/Web/API/HTMLMediaElement/waitingforkey_event) Inhaltsattribut kann jetzt auf {{htmlelement("audio")}}/{{htmlelement("video")}} Elementen angegeben werden, um einen Inline-Ereignishandler für das `waitingforkey` Ereignis festzulegen. ([Firefox Bug 1925952](https://bugzil.la/1925952)).
- [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) wird jetzt in allen Worker-Kontexten über [`WorkerNavigator.serviceWorker`](/de/docs/Web/API/WorkerNavigator/serviceWorker) bereitgestellt, wodurch Worker [Service Worker-Registrierungen](/de/docs/Web/API/ServiceWorkerRegistration) inspizieren und verwalten können, die mit der aktuellen Herkunft verknüpft sind. Zuvor war `ServiceWorkerContainer` nur im Hauptthread über [`Navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) verfügbar. ([Firefox Bug 1113522](https://bugzil.la/1113522)).
- Die [`name`](/de/docs/Web/API/PerformanceNavigationTiming#performanceentry.name) Eigenschaft von `PerformanceNavigationTiming` lässt jetzt [Textfragmente](/de/docs/Web/URI/Fragment/Text_fragments) aus der zurückgegebenen URL weg, um der Spezifikation zu entsprechen. Diese Art von [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) Objekt wird von [`Performance.getEntries()`](/de/docs/Web/API/Performance/getEntries) für Einträge mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `navigation` zurückgegeben. ([Firefox Bug 1919565](https://bugzil.la/1919565)).

#### Entfernungen

- Das [`options.shadowRoots`](/de/docs/Web/API/Document/caretPositionFromPoint#shadowroots) Argument zum Übergeben von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Objekten an die [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) Methode wurde aus der Veröffentlichung zurückgezogen.
  Die Funktion kann in der Nightly-Version getestet werden und wird voraussichtlich in Zukunft erneut veröffentlicht. ([Firefox Bug 1914596](https://bugzil.la/1914596)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für das `url` Argument für den `network.continueRequest` Befehl hinzugefügt, das es ermöglicht, Anfragen transparent zu einer anderen URL umzuleiten ([Firefox Bug 1898158](https://bugzil.la/1898158)).
- Aktualisiert `browsingContext.print`, um einen `InvalidArgumentError` zu werfen, wenn es mit falschen Dimensionen verwendet wird ([Firefox Bug 1886382](https://bugzil.la/1886382)).
- Behoben `script.evaluate` und `script.callFunction`, um die Verwendung von `document.open` in Sandbox-Umgebungen zu ermöglichen ([Firefox Bug 1918288](https://bugzil.la/1918288)).
- Einen Fehler behoben, bei dem das `browsingContext.load` Ereignis die falsche Navigations-ID enthalten konnte, wenn während der Hauptnavigation eine gleiche Dokumentnavigation stattfand ([Firefox Bug 1922327](https://bugzil.la/1922327)).
- Ein weiterer Randfall wurde behoben, in dem Befehle aufgrund der Navigation mit einem `UnknownError` fehlschlagen konnten ([Firefox Bug 1923899](https://bugzil.la/1923899)).

#### Marionette

- Marionette aktualisiert, um die Fenstereinstellung auf Linux mit Wayland besser zu handhaben ([Firefox Bug 1857571](https://bugzil.la/1857571)).
- Behoben einen Fehler, der ein leeres `style` Attribut auf einem Element hinterlassen konnte, wenn versucht wurde, es zu klicken oder zu leeren ([Firefox Bug 1922709](https://bugzil.la/1922709)).
- Die Fehlermeldung für `UnexpectedAlertOpen` Fehler aktualisiert, um den Text des entsprechenden Alerts einzuschließen ([Firefox Bug 1924469](https://bugzil.la/1924469)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("cookies.get")}} ordnet jetzt Cookies entsprechend der [5.4 Der Cookie Header Abschnitt des HTTP State Management Mechanism (RFC 6265)](https://datatracker.ietf.org/doc/html/rfc6265#section-5.4). Dies wirkt sich auf die Aufrufergebnisse aus, wenn ein Cookie Varianten mit unterschiedlichen Pfadkomponenten hat. Bisher wurde das früheste erstellte Cookie von {{WebExtAPIRef("cookies.get")}}, {{WebExtAPIRef("cookies.remove")}}, {{WebExtAPIRef("cookies.set")}} und {{WebExtAPIRef("cookies.getAll")}} abgeglichen. Nach dieser Änderung wird das Cookie mit dem am längsten passenden Pfad zurückgegeben. ([Firefox Bug 1798655](https://bugzil.la/1798655))
- Einen Fehler in der {{WebExtAPIRef("declarativeNetRequest")}} API behoben, der die Registrierung von Regeln nach einem Browser-Neustart verhinderte ([Firefox Bug 1921353](https://bugzil.la/1921353)). Dieser Fehler betraf Erweiterungen, die auf {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules")}} oder {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets")}} angewiesen sind. Dieser Fix wurde auch auf Firefox ESR 128.5 und Firefox ESR 115.18 zurückportiert.
- Ein Fehler behoben, der verhinderte, dass [`window.close()`](/de/docs/Web/API/Window/close) aus einer [Seitenleiste](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars) aufgerufen wurde, um die Seitenleiste zu schließen.

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 133 enthalten, aber standardmäßig deaktiviert. Um sie zu testen, suchen Sie den entsprechenden Parameter auf der `about:config` Seite und setzen Sie ihn auf `true`. Weitere solche Funktionen finden Sie auf der [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features) Seite.

- **contenteditable plaintext-only Wert:** `dom.element.contenteditable.plaintext-only.enabled`.

  Der `plaintext-only` Wert des [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) globalen Attributs gibt an, dass das Element bearbeitbar ist; die Textformatierung ist deaktiviert, und jegliches Format in eingefügtem Text wird automatisch entfernt. ([Firefox Bug 1922723](https://bugzil.la/1922723).)

- **:has-slotted CSS Pseudoklasse:** `layout.css.has-slotted-selector.enabled`.

  Die {{CSSXRef(":has-slotted")}} [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wird verwendet, um Elemente in {{HTMLElement("template")}} zu stylen, die Inhalt zu einem {{HTMLElement("slot")}} Element hinzugefügt haben, wenn ein [Web Component](/de/docs/Web/API/Web_components) rendert. ([Firefox Bug 1921747](https://bugzil.la/1921747).)

## Ältere Versionen

{{Firefox_for_developers}}
