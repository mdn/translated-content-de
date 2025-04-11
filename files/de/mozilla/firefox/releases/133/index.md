---
title: Firefox 133 für Entwickler
slug: Mozilla/Firefox/Releases/133
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 133, die Entwickler betreffen. Firefox 133 wurde am [26. November 2024](https://whattrainisitnow.com/release/?version=133) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Der [`viewport <meta>` Tag](/de/docs/Web/HTML/Guides/Viewport_meta_element) unterstützt jetzt das Attribut [`interactive-widget`](/de/docs/Web/HTML/Guides/Viewport_meta_element#the_effect_of_interactive_ui_widgets), welches die Größe des Ansichtsfensters beeinflusst, wenn gängige UI-Widgets, wie virtuelle Tastaturen, auf dem Bildschirm hinzugefügt werden. ([Firefox Bug 1831649](https://bugzil.la/1831649) und [Firefox Bug 1920755](https://bugzil.la/1920755)).

### CSS

Keine bemerkenswerten Änderungen

### JavaScript

- Unterstützung für {{jsxref("Uint8Array")}}-Methoden zur Erleichterung der Konvertierungen zwischen {{Glossary("base64", "base64")}}- und hex-codierten Strings und Byte-Arrays. ([Firefox Bug 1917885](https://bugzil.la/1917885) und [Firefox Bug 1862220](https://bugzil.la/1862220)).

  Die neuen Methoden umfassen:

  - {{jsxref("Uint8Array.fromBase64()")}} und {{jsxref("Uint8Array.fromHex()")}} statische Methoden zum Erstellen eines neuen `Uint8Array`-Objekts aus einem base64- bzw. hex-codierten String.
  - {{jsxref("Uint8Array.prototype.setFromBase64()")}}, und {{jsxref("Uint8Array.prototype.setFromHex()")}} Instanzmethoden, um ein bestehendes `Uint8Array`-Objekt mit Bytes aus einem base64- oder hex-codierten String zu füllen.
  - {{jsxref("Uint8Array.prototype.toBase64()")}} und {{jsxref("Uint8Array.prototype.toHex()")}} Instanzmethoden, die einen base64- bzw. hex-codierten String aus den Daten in einem `Uint8Array`-Objekt zurückgeben.

### APIs

- Die [`WorkerNavigator.permissions`](/de/docs/Web/API/WorkerNavigator/permissions) Eigenschaft wird jetzt unterstützt, wodurch die [Permissions API](/de/docs/Web/API/Permissions_API) in [Workern](/de/docs/Web/API/Web_Workers_API) sowie im Hauptfenster-Thread verwendet werden kann. ([Firefox Bug 1193373](https://bugzil.la/1193373)).
- Die [`EventSource`](/de/docs/Web/API/EventSource) Schnittstelle zum Umgang mit [server-gesendeten Ereignissen](/de/docs/Web/API/Server-sent_events) wird jetzt in [Service Workern](/de/docs/Web/API/Service_Worker_API) unterstützt. ([Firefox Bug 1681218](https://bugzil.la/1681218)).
- Die [`ImageDecoder`](/de/docs/Web/API/ImageDecoder), [`ImageTrackList`](/de/docs/Web/API/ImageTrackList), und [`ImageTrack`](/de/docs/Web/API/ImageTrack) Schnittstellen der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) werden jetzt unterstützt, wodurch das Decodieren von Bildern im Haupt- und Worker-Thread ermöglicht wird. ([Firefox Bug 1923755](https://bugzil.la/1923755)).
- Die [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) Ereignisse der [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle werden jetzt bei {{HTMLElement("dialog")}}-Elementen unmittelbar vor und nach deren Anzeige bzw. Verbergen gefeuert. `beforetoggle` kann beispielsweise verwendet werden, um Klassen anzuwenden/zu entfernen, die die Animation eines Dialogs steuern, oder um den Zustand eines Dialogformulars zurückzusetzen, bevor es angezeigt wird. Das `toggle`-Ereignis kann verwendet werden, um Benachrichtigungen über Änderungen des Offenheitszustands zu erhalten, was andernfalls einen [`MutationObserver`](/de/docs/Web/API/MutationObserver) erfordern würde. ([Firefox Bug 1876762](https://bugzil.la/1876762)).
- Die [`keepalive`](/de/docs/Web/API/RequestInit#keepalive) Initialisierungsoption für die globale [`fetch()`](/de/docs/Web/API/Window/fetch)-Methode und den [`Request()` Konstruktor](/de/docs/Web/API/Request/Request#options) wird jetzt unterstützt, zusammen mit der [`Request.keepalive`](/de/docs/Web/API/Request/keepalive) Eigenschaft. `keepalive` kann auf `true` gesetzt werden, um zu verhindern, dass der Browser die zugehörige Anfrage abbricht, wenn die Seite, die sie initiiert hat, entladen wird, bevor die Anfrage abgeschlossen ist.
  Dies könnte beispielsweise verwendet werden, um Analysen am Ende einer Sitzung zu senden, auch wenn der Benutzer die Seite verlässt oder schließt.

  Die Verwendung von `fetch()` mit `keepalive` hat einige Vorteile gegenüber der Verwendung von [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) zu demselben Zweck, wie die Verwendung anderer HTTP-Methoden als [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST) zu erlauben, anpassbare Anfrageeigenschaften und den Zugriff auf die Serverantwort über die Erfüllung des {{jsxref("Promise")}} von fetch. Es ist auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verfügbar. ([Firefox Bug 1906952](https://bugzil.la/1906952), [Firefox Bug 1923044](https://bugzil.la/1923044)).

- Das [`onwaitingforkey`](/de/docs/Web/API/HTMLMediaElement/waitingforkey_event) Inhalt-Attribut kann nun auf {{htmlelement("audio")}}/{{htmlelement("video")}}-Elementen zur Setzung eines Inline-Ereignishandlers für das `waitingforkey`-Ereignis angegeben werden. ([Firefox Bug 1925952](https://bugzil.la/1925952)).
- [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) wird nun in allen Worker-Kontexten über [`WorkerNavigator.serviceWorker`](/de/docs/Web/API/WorkerNavigator/serviceWorker) bereitgestellt, sodass Worker die mit dem aktuellen Ursprung verbundenen [Service Worker-Registrierungen](/de/docs/Web/API/ServiceWorkerRegistration) überprüfen und verwalten können. Bisher war `ServiceWorkerContainer` nur im Haupt-Thread verfügbar, über [`Navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker). ([Firefox Bug 1113522](https://bugzil.la/1113522)).
- Die [`name`](/de/docs/Web/API/PerformanceNavigationTiming#performanceentry.name) Eigenschaft von `PerformanceNavigationTiming` lässt nun [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) von der zurückgegebenen URL aus, was der Spezifikation entspricht. Diese Art von [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) Objekt wird von [`Performance.getEntries()`](/de/docs/Web/API/Performance/getEntries) für Einträge mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `navigation` zurückgegeben. ([Firefox Bug 1919565](https://bugzil.la/1919565)).

#### Rücknahmen

- Das [`options.shadowRoots`](/de/docs/Web/API/Document/caretPositionFromPoint#shadowroots) Argument zum Übergeben von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Objekten an die [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) Methode wurde aus der Veröffentlichung zurückgezogen.
  Das Feature kann in der Nightly-Version getestet werden und wird voraussichtlich in Zukunft erneut veröffentlicht. ([Firefox Bug 1914596](https://bugzil.la/1914596)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für das `url`-Argument für den `network.continueRequest`-Befehl hinzugefügt, um Anfragen transparent zu einer anderen URL umzuleiten ([Firefox Bug 1898158](https://bugzil.la/1898158)).
- `browsingContext.print` wurde aktualisiert, um einen `InvalidArgumentError` auszulösen, wenn es mit falschen Dimensionen verwendet wird ([Firefox Bug 1886382](https://bugzil.la/1886382)).
- `script.evaluate` und `script.callFunction` wurden behoben, um die Verwendung von `document.open` in Sandbox-Reichen zu erlauben ([Firefox Bug 1918288](https://bugzil.la/1918288)).
- Ein Fehler wurde behoben, bei dem das `browsingContext.load`-Ereignis eine falsche Navigations-ID enthalten könnte, wenn während der Hauptnavigation eine gleichseitige Dokumentnavigation stattfand ([Firefox Bug 1922327](https://bugzil.la/1922327)).
- Ein weiterer Randfall wurde behoben, bei dem Befehle aufgrund der Navigation mit einem `UnknownError` fehlschlagen konnten ([Firefox Bug 1923899](https://bugzil.la/1923899)).

#### Marionette

- Marionette wurde aktualisiert, um die Fensterpositionierung auf Linux mit Wayland besser zu handhaben ([Firefox Bug 1857571](https://bugzil.la/1857571)).
- Ein Fehler wurde behoben, der ein leeres `style`-Attribut auf einem Element hinterlassen konnte, wenn versucht wurde, es anzuklicken oder zu leeren ([Firefox Bug 1922709](https://bugzil.la/1922709)).
- Die Fehlermeldung wurde aktualisiert, um den Text des entsprechenden Alerts bei `UnexpectedAlertOpen`-Fehlern einzuschließen ([Firefox Bug 1924469](https://bugzil.la/1924469)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("cookies.get")}} sortiert nun Cookies gemäß der [5.4 The Cookie Header Abschnitt des HTTP State Management Mechanism (RFC 6265)](https://datatracker.ietf.org/doc/html/rfc6265#section-5.4). Dies beeinflusst die Aufrufergebnisse, wenn ein Cookie Varianten mit unterschiedlichen Pfadkomponenten hat. Zuvor wurde das zuerst erstellte Cookie durch {{WebExtAPIRef("cookies.get")}}, {{WebExtAPIRef("cookies.remove")}}, {{WebExtAPIRef("cookies.set")}} und {{WebExtAPIRef("cookies.getAll")}} abgeglichen. Nach dieser Änderung wird das Cookie mit dem längsten übereinstimmenden Pfad zurückgegeben. ([Firefox Bug 1798655](https://bugzil.la/1798655))
- Ein Fehler in der {{WebExtAPIRef("declarativeNetRequest")}} API wurde behoben, der das Registrieren von Regeln nach einem Neustart des Browsers verhinderte ([Firefox Bug 1921353](https://bugzil.la/1921353)). Dieser Fehler betraf Erweiterungen, die auf {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules")}} oder {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets")}} angewiesen sind. Dieser Fix wurde auch auf Firefox ESR 128.5 und Firefox ESR 115.18 zurückportiert.
- Ein Fehler, der verhinderte, dass [`window.close()`](/de/docs/Web/API/Window/close) von einer [Sidebar](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars) aus die Sidebar schließen konnte, wurde behoben.

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 133 implementiert, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Sie finden weitere solche Funktionen auf der [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features) Seite.

- **contenteditable plaintext-only value:** `dom.element.contenteditable.plaintext-only.enabled`.

  Der `plaintext-only`-Wert des [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) globalen Attributs gibt an, dass das Element bearbeitbar ist; Rich-Text-Formatierung ist deaktiviert und jegliche Formatierung im eingefügten Text wird automatisch entfernt. ([Firefox Bug 1922723](https://bugzil.la/1922723).)

- **:has-slotted CSS Pseudoklasse:** `layout.css.has-slotted-selector.enabled`.

  Die {{CSSXRef(":has-slotted")}} [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wird verwendet, um Elemente in {{HTMLElement("template")}} zu stylen, die Inhalte zu einem {{HTMLElement("slot")}}-Element hinzugefügt haben, wenn eine [Webkomponente](/de/docs/Web/API/Web_components) gerendert wird. ([Firefox Bug 1921747](https://bugzil.la/1921747).)

## Ältere Versionen

{{Firefox_for_developers}}
