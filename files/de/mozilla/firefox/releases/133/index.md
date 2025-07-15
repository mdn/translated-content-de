---
title: Firefox 133 für Entwickler
short-title: Firefox 133
slug: Mozilla/Firefox/Releases/133
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 133, die Entwickler betreffen. Firefox 133 wurde am [26. November 2024](https://whattrainisitnow.com/release/?version=133) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Der [`viewport <meta>` Tag](/de/docs/Web/HTML/Guides/Viewport_meta_element) unterstützt nun das [`interactive-widget`](/de/docs/Web/HTML/Guides/Viewport_meta_element#the_effect_of_interactive_ui_widgets) Attribut, das die Größe des Viewports beeinflusst, wenn übliche UI-Widgets, wie virtuelle Tastaturen, auf dem Bildschirm hinzugefügt werden. ([Firefox-Bug 1831649](https://bugzil.la/1831649) und [Firefox-Bug 1920755](https://bugzil.la/1920755)).

### CSS

Keine bemerkenswerten Änderungen

### JavaScript

- Unterstützung für {{jsxref("Uint8Array")}} Methoden zur Erleichterung von Umwandlungen zwischen {{Glossary("base64", "base64")}}- und hex-kodierten Zeichenketten und Byte-Arrays. ([Firefox-Bug 1917885](https://bugzil.la/1917885) und [Firefox-Bug 1862220](https://bugzil.la/1862220)).

  Die neuen Methoden umfassen:
  - {{jsxref("Uint8Array.fromBase64()")}} und {{jsxref("Uint8Array.fromHex()")}} statische Methoden, um ein neues `Uint8Array`-Objekt aus einer base64- bzw. hex-kodierten Zeichenkette zu erstellen.
  - {{jsxref("Uint8Array.prototype.setFromBase64()")}} und {{jsxref("Uint8Array.prototype.setFromHex()")}} Instanzmethoden, um ein vorhandenes `Uint8Array`-Objekt mit Bytes aus einer base64- oder hex-kodierten Zeichenkette zu füllen.
  - {{jsxref("Uint8Array.prototype.toBase64()")}} und {{jsxref("Uint8Array.prototype.toHex()")}} Instanzmethoden, die eine base64- und hex-kodierte Zeichenkette aus den Daten in einem `Uint8Array`-Objekt zurückgeben.

### APIs

- Die [`WorkerNavigator.permissions`](/de/docs/Web/API/WorkerNavigator/permissions) Eigenschaft wird jetzt unterstützt, was die Verwendung der [Permissions API](/de/docs/Web/API/Permissions_API) in [Workern](/de/docs/Web/API/Web_Workers_API) sowie im Haupt-Thread ermöglicht. ([Firefox-Bug 1193373](https://bugzil.la/1193373)).
- Die [`EventSource`](/de/docs/Web/API/EventSource) Schnittstelle zur Verarbeitung von [Server-sent events](/de/docs/Web/API/Server-sent_events) wird jetzt in [Service Workern](/de/docs/Web/API/Service_Worker_API) unterstützt. ([Firefox-Bug 1681218](https://bugzil.la/1681218)).
- Die Schnittstellen [`ImageDecoder`](/de/docs/Web/API/ImageDecoder), [`ImageTrackList`](/de/docs/Web/API/ImageTrackList) und [`ImageTrack`](/de/docs/Web/API/ImageTrack) der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) werden jetzt unterstützt, was das Dekodieren von Bildern im Haupt- und Worker-Thread ermöglicht. ([Firefox-Bug 1923755](https://bugzil.la/1923755)).
- Die Ereignisse [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) der [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle werden jetzt bei {{HTMLElement("dialog")}} Elementen unmittelbar vor und nachdem sie angezeigt oder versteckt werden, ausgelöst. Das `beforetoggle` kann z. B. verwendet werden, um Klassen, die die Animation eines Dialogs steuern, anzuwenden oder zu entfernen oder den Zustand eines Dialogformulars zurückzusetzen, bevor es angezeigt wird. Das `toggle` Ereignis kann verwendet werden, um Benachrichtigungen über den offenen Zustand zu erhalten, was ansonsten einen [`MutationObserver`](/de/docs/Web/API/MutationObserver) erfordern würde. ([Firefox-Bug 1876762](https://bugzil.la/1876762)).
- Die [`keepalive`](/de/docs/Web/API/RequestInit#keepalive) Initialisierungsoption für die globale [`fetch()`](/de/docs/Web/API/Window/fetch) Methode und den [`Request()` Konstruktor](/de/docs/Web/API/Request/Request#options) wird jetzt zusammen mit der [`Request.keepalive`](/de/docs/Web/API/Request/keepalive) Eigenschaft unterstützt. `keepalive` kann auf `true` gesetzt werden, um zu verhindern, dass der Browser die zugehörige Anfrage abbricht, falls die Seite, die sie ausgelöst hat, entladen wird, bevor die Anfrage abgeschlossen ist.
  Dies könnte verwendet werden, um z. B. am Ende einer Sitzung Analysen zu senden, selbst wenn der Benutzer die Seite verlässt oder schließt.

  Die Verwendung von `fetch()` mit `keepalive` hat einige Vorteile gegenüber der Verwendung von [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) für denselben Zweck, wie die Verwendung anderer HTTP-Methoden als [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST), anpassbare Anfrageeigenschaften und Zugriff auf die Serverantwort über die Erfüllung des fetch {{jsxref("Promise")}}. Es ist auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verfügbar. ([Firefox-Bug 1906952](https://bugzil.la/1906952), [Firefox-Bug 1923044](https://bugzil.la/1923044)).

- Das [`onwaitingforkey`](/de/docs/Web/API/HTMLMediaElement/waitingforkey_event) Inhaltsattribut kann jetzt auf {{htmlelement("audio")}}/{{htmlelement("video")}} Elementen angegeben werden, um einen Inline-Ereignishandler für das `waitingforkey` Ereignis festzulegen. ([Firefox-Bug 1925952](https://bugzil.la/1925952)).
- [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) wird jetzt in allen Worker-Kontexten über [`WorkerNavigator.serviceWorker`](/de/docs/Web/API/WorkerNavigator/serviceWorker) bereitgestellt, wodurch Worker die [Service-Worker-Registrierungen](/de/docs/Web/API/ServiceWorkerRegistration) der aktuellen Herkunft überprüfen und verwalten können. Zuvor war `ServiceWorkerContainer` nur im Haupt-Thread über [`Navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) verfügbar. ([Firefox-Bug 1113522](https://bugzil.la/1113522)).
- Die [`name`](/de/docs/Web/API/PerformanceNavigationTiming#performanceentry.name) Eigenschaft von `PerformanceNavigationTiming` lässt nun [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) von der zurückgegebenen URL aus, entsprechend der Spezifikation. Diese Art von [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) Objekt wird von [`Performance.getEntries()`](/de/docs/Web/API/Performance/getEntries) für Einträge mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `navigation` zurückgegeben. ([Firefox-Bug 1919565](https://bugzil.la/1919565)).

#### Entfernungen

- Das [`options.shadowRoots`](/de/docs/Web/API/Document/caretPositionFromPoint#shadowroots) Argument zum Übergeben von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Objekten an die [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) Methode wurde aus der Veröffentlichung zurückgezogen.
  Die Funktion kann in der Nightly-Version getestet werden und wird voraussichtlich in Zukunft wieder veröffentlicht. ([Firefox-Bug 1914596](https://bugzil.la/1914596)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für das `url` Argument des `network.continueRequest` Befehls hinzugefügt, wodurch Anfragen transparent zu einer anderen URL umgeleitet werden können ([Firefox-Bug 1898158](https://bugzil.la/1898158)).
- Das `browsingContext.print` wurde aktualisiert, um einen `InvalidArgumentError` auszulösen, wenn es mit falschen Abmessungen verwendet wird ([Firefox-Bug 1886382](https://bugzil.la/1886382)).
- Fehler bei `script.evaluate` und `script.callFunction` behoben, um die Verwendung von `document.open` in Sandbox-Reichen zu ermöglichen ([Firefox-Bug 1918288](https://bugzil.la/1918288)).
- Fehler behoben, bei dem das `browsingContext.load` Ereignis die falsche Navigations-ID enthalten könnte, wenn eine gleiche Dokumentnavigation während der Hauptnavigation auftrat ([Firefox-Bug 1922327](https://bugzil.la/1922327)).
- Ein weiterer Randfall behoben, bei dem Befehle aufgrund der Navigation mit einem `UnknownError` fehlschlagen könnten ([Firefox-Bug 1923899](https://bugzil.la/1923899)).

#### Marionette

- Marionette wurde aktualisiert, um die Fensterpositionierung unter Linux mit Wayland besser zu handhaben ([Firefox-Bug 1857571](https://bugzil.la/1857571)).
- Ein Fehler wurde behoben, der ein leeres `style` Attribut auf einem Element hinterlassen konnte, wenn versucht wurde, darauf zu klicken oder es leer zu machen ([Firefox-Bug 1922709](https://bugzil.la/1922709)).
- Die Fehlermeldung, die für `UnexpectedAlertOpen` Fehler gesendet wird, wurde aktualisiert, um den Text der entsprechenden Warnung zu enthalten ([Firefox-Bug 1924469](https://bugzil.la/1924469)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("cookies.get")}} ordnet Cookies nun gemäß der [Abschnitt 5.4 Das Cookie-Header des HTTP State Management Mechanism (RFC 6265)](https://datatracker.ietf.org/doc/html/rfc6265#section-5.4). Dies wirkt sich auf die Abrufe aus, wenn ein Cookie Varianten mit unterschiedlichen Pfadkomponenten hat. Zuvor wurde das am frühesten erstellte Cookie von {{WebExtAPIRef("cookies.get")}}, {{WebExtAPIRef("cookies.remove")}}, {{WebExtAPIRef("cookies.set")}} und {{WebExtAPIRef("cookies.getAll")}} abgeglichen. Nach dieser Änderung wird das Cookie mit dem längsten übereinstimmenden Pfad zurückgegeben. ([Firefox-Bug 1798655](https://bugzil.la/1798655))
- Ein Fehler in der {{WebExtAPIRef("declarativeNetRequest")}} API wurde behoben, der die Regelregistrierung nach einem Neustart des Browsers verhinderte ([Firefox-Bug 1921353](https://bugzil.la/1921353)). Dieser Fehler betraf Erweiterungen, die sich auf {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules")}} oder {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets")}} verlassen. Dieser Fix wurde auch auf Firefox ESR 128.5 und Firefox ESR 115.18 zurückportiert.
- Ein Fehler wurde behoben, der verhinderte, dass [`window.close()`](/de/docs/Web/API/Window/close) von einer [Sidebar](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars) aus die Sidebar schließt.

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 133 ausgeliefert, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der [Seite für experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **contenteditable plaintext-only Wert:** `dom.element.contenteditable.plaintext-only.enabled`.

  Der `plaintext-only` Wert des [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) globalen Attributs zeigt an, dass das Element bearbeitbar ist; die Rich-Text-Formatierung ist deaktiviert und alle Formatierungen im eingefügten Text werden automatisch entfernt. ([Firefox-Bug 1922723](https://bugzil.la/1922723).)

- **:has-slotted CSS-Pseudoklasse:** `layout.css.has-slotted-selector.enabled`.

  Die {{CSSXRef(":has-slotted")}} [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wird verwendet, um Elemente in {{HTMLElement("template")}} zu stylen, die Inhalt zu einem {{HTMLElement("slot")}} Element hinzugefügt bekommen, wenn ein [Webkomponente](/de/docs/Web/API/Web_components) gerendert wird. ([Firefox-Bug 1921747](https://bugzil.la/1921747).)
