---
title: Firefox 133 für Entwickler
slug: Mozilla/Firefox/Releases/133
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 133, die Entwickler betreffen. Firefox 133 wurde am [26. November 2024](https://whattrainisitnow.com/release/?version=133) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Der [`viewport <meta>` tag](/de/docs/Web/HTML/Guides/Viewport_meta_element) unterstützt jetzt das Attribut [`interactive-widget`](/de/docs/Web/HTML/Guides/Viewport_meta_element#the_effect_of_interactive_ui_widgets), das die Größe des Viewports beeinflusst, wenn übliche UI-Widgets wie virtuelle Tastaturen zum Bildschirm hinzugefügt werden. ([Firefox Bug 1831649](https://bugzil.la/1831649) und [Firefox Bug 1920755](https://bugzil.la/1920755)).

### CSS

Keine nennenswerten Änderungen

### JavaScript

- Unterstützung für {{jsxref("Uint8Array")}}-Methoden, um Konvertierungen zwischen {{Glossary("base64", "base64")}}- und hex-kodierten Strings und Byte-Arrays zu erleichtern. ([Firefox Bug 1917885](https://bugzil.la/1917885) und [Firefox Bug 1862220](https://bugzil.la/1862220)).

  Die neuen Methoden umfassen:

  - {{jsxref("Uint8Array.fromBase64()")}} und {{jsxref("Uint8Array.fromHex()")}} statische Methoden, um ein neues `Uint8Array`-Objekt aus einem base64- bzw. hex-kodierten String zu erstellen.
  - {{jsxref("Uint8Array.prototype.setFromBase64()")}}, und {{jsxref("Uint8Array.prototype.setFromHex()")}} Instanzmethoden, um ein bestehendes `Uint8Array`-Objekt mit Bytes aus einem base64- oder hex-kodierten String zu füllen.
  - {{jsxref("Uint8Array.prototype.toBase64()")}} und {{jsxref("Uint8Array.prototype.toHex()")}} Instanzmethoden, die einen base64- und hex-kodierten String aus den Daten eines `Uint8Array`-Objekts zurückgeben.

### APIs

- Die [`WorkerNavigator.permissions`](/de/docs/Web/API/WorkerNavigator/permissions)-Eigenschaft wird jetzt unterstützt, sodass die [Permissions API](/de/docs/Web/API/Permissions_API) sowohl in [Worker](/de/docs/Web/API/Web_Workers_API) als auch im Hauptfenster-Thread verwendet werden kann. ([Firefox Bug 1193373](https://bugzil.la/1193373)).
- Das [`EventSource`](/de/docs/Web/API/EventSource)-Interface zur Behandlung von [server-sent events](/de/docs/Web/API/Server-sent_events) wird jetzt in [Service Worker](/de/docs/Web/API/Service_Worker_API) unterstützt. ([Firefox Bug 1681218](https://bugzil.la/1681218)).
- Die Interfaces [`ImageDecoder`](/de/docs/Web/API/ImageDecoder), [`ImageTrackList`](/de/docs/Web/API/ImageTrackList) und [`ImageTrack`](/de/docs/Web/API/ImageTrack) der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) werden jetzt unterstützt und ermöglichen das Decodieren von Bildern aus den Haupt- und Worker-Threads. ([Firefox Bug 1923755](https://bugzil.la/1923755)).
- Die Ereignisse [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interface werden jetzt bei {{HTMLElement("dialog")}}-Elementen unmittelbar vor und nach deren Anzeige oder Ausblendung ausgelöst. Das `beforetoggle`-Ereignis kann zum Beispiel genutzt werden, um Klassen anzuwenden/zu entfernen, die die Animation eines Dialogs steuern, oder um den Zustand eines Dialogformulars zurückzusetzen, bevor es angezeigt wird. Das `toggle`-Ereignis kann verwendet werden, um eine Benachrichtigung über den geänderten Offen-Status zu erhalten, was ansonsten einen [`MutationObserver`](/de/docs/Web/API/MutationObserver) erfordert. ([Firefox Bug 1876762](https://bugzil.la/1876762)).
- Die [`keepalive`](/de/docs/Web/API/RequestInit#keepalive)-Initialisierungsoption für die globale Methode [`fetch()`](/de/docs/Web/API/Window/fetch) und den [`Request()`-Konstruktor](/de/docs/Web/API/Request/Request#options) wird jetzt unterstützt, zusammen mit der Eigenschaft [`Request.keepalive`](/de/docs/Web/API/Request/keepalive). `keepalive` kann auf `true` gesetzt werden, um zu verhindern, dass der Browser die zugehörige Anfrage abbricht, wenn die Seite, die sie initiiert hat, entladen wird, bevor die Anfrage abgeschlossen ist.
  Dies kann zum Beispiel verwendet werden, um Analysen am Ende einer Sitzung zu senden, auch wenn der Benutzer die Seite verlässt oder schließt.

  Die Verwendung von `fetch()` mit `keepalive` hat einige Vorteile gegenüber der Verwendung von [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) für denselben Zweck, wie die Verwendung von HTTP-Methoden, die nicht [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST) sind, anpassbare Anfrageeigenschaften und Zugriff auf die Serverantwort über das {{jsxref("Promise")}}-Fulfillment von `fetch`. Es ist auch in [Service Worker](/de/docs/Web/API/Service_Worker_API) verfügbar. ([Firefox Bug 1906952](https://bugzil.la/1906952), [Firefox Bug 1923044](https://bugzil.la/1923044)).

- Das Inhaltsattribut [`onwaitingforkey`](/de/docs/Web/API/HTMLMediaElement/waitingforkey_event) kann jetzt auf {{htmlelement("audio")}}/{{htmlelement("video")}}-Elementen angegeben werden, um einen Inline-Event-Handler für das `waitingforkey`-Ereignis einzustellen. ([Firefox Bug 1925952](https://bugzil.la/1925952)).
- [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) ist jetzt in allen Worker-Kontexten über [`WorkerNavigator.serviceWorker`](/de/docs/Web/API/WorkerNavigator/serviceWorker) verfügbar, sodass Worker die [Service Worker-Registrierungen](/de/docs/Web/API/ServiceWorkerRegistration), die mit dem aktuellen Ursprung verbunden sind, inspizieren und verwalten können. Zuvor war `ServiceWorkerContainer` nur im Haupt-Thread über [`Navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) verfügbar. ([Firefox Bug 1113522](https://bugzil.la/1113522)).
- Die [`name`](/de/docs/Web/API/PerformanceNavigationTiming#performanceentry.name)-Eigenschaft von `PerformanceNavigationTiming` lässt jetzt [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) aus der zurückgegebenen URL aus, um die Spezifikation zu erfüllen. Diese Art von [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Objekt wird von [`Performance.getEntries()`](/de/docs/Web/API/Performance/getEntries) für Einträge mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `navigation` zurückgegeben. ([Firefox Bug 1919565](https://bugzil.la/1919565)).

#### Entfernungen

- Das Argument [`options.shadowRoots`](/de/docs/Web/API/Document/caretPositionFromPoint#shadowroots) für das Übergeben von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekten an die Methode [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) wurde aus der Veröffentlichung entfernt.
  Die Funktion kann in der Nightly-Version getestet werden und soll in Zukunft erneut veröffentlicht werden. ([Firefox Bug 1914596](https://bugzil.la/1914596)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für das `url`-Argument für den Befehl `network.continueRequest` hinzugefügt, um Anfragen transparent an eine andere URL umzuleiten ([Firefox Bug 1898158](https://bugzil.la/1898158)).
- `browsingContext.print` wurde aktualisiert, um einen `InvalidArgumentError` auszulösen, wenn es mit falschen Abmessungen verwendet wird ([Firefox Bug 1886382](https://bugzil.la/1886382)).
- Fehler in `script.evaluate` und `script.callFunction` behoben, um die Verwendung von `document.open` in Sandbox-Reichen zu erlauben ([Firefox Bug 1918288](https://bugzil.la/1918288)).
- Ein Fehler behoben, bei dem das `browsingContext.load`-Ereignis die falsche Navigations-ID enthalten könnte, wenn eine Navigation im selben Dokument während der Hauptnavigation stattfand ([Firefox Bug 1922327](https://bugzil.la/1922327)).
- Ein weiterer Randfall behoben, bei dem Befehle aufgrund von Navigation mit einem `UnknownError` fehlschlagen konnten ([Firefox Bug 1923899](https://bugzil.la/1923899)).

#### Marionette

- Marionette wurde aktualisiert, um das Fensterpositionieren unter Linux mit Wayland besser zu handhaben ([Firefox Bug 1857571](https://bugzil.la/1857571)).
- Ein Fehler behoben, der ein leeres `style`-Attribut auf einem Element hinterlassen konnte, wenn versucht wurde, es anzuklicken oder zu löschen ([Firefox Bug 1922709](https://bugzil.la/1922709)).
- Die Fehlermeldung für `UnexpectedAlertOpen`-Fehler aktualisiert, um den Text der entsprechenden Benachrichtigung einzuschließen ([Firefox Bug 1924469](https://bugzil.la/1924469)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("cookies.get")}} sortiert jetzt Cookies gemäß dem [Abschnitt 5.4 des Cookie-Headers des HTTP State Management Mechanism (RFC 6265)](https://datatracker.ietf.org/doc/html/rfc6265#section-5.4). Dies beeinflusst die Aufrufergebnisse, wenn ein Cookie Varianten mit unterschiedlichen Pfadkomponenten hat. Bisher wurde das zuerst erstellte Cookie von {{WebExtAPIRef("cookies.get")}}, {{WebExtAPIRef("cookies.remove")}}, {{WebExtAPIRef("cookies.set")}}, und {{WebExtAPIRef("cookies.getAll")}} übereinstimmend. Nach dieser Änderung wird das Cookie mit dem längsten übereinstimmenden Pfad zurückgegeben. ([Firefox Bug 1798655](https://bugzil.la/1798655))
- Ein Fehler in der {{WebExtAPIRef("declarativeNetRequest")}}-API behoben, der die Regelregistrierung nach einem Browser-Neustart verhinderte ([Firefox Bug 1921353](https://bugzil.la/1921353)). Dieser Fehler betraf Erweiterungen, die von {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules")}} oder {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets")}} abhängen. Dieser Fix wurde auch rückwirkend auf Firefox ESR 128.5 und Firefox ESR 115.18 angewendet.
- Ein Fehler behoben, der verhinderte, dass [`window.close()`](/de/docs/Web/API/Window/close) aus einer [Seitenleiste](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars) heraus die Seitenleiste schloss.

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 133 enthalten, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der Seite `about:config` und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **contenteditable plaintext-only Wert:** `dom.element.contenteditable.plaintext-only.enabled`.

  Der `plaintext-only`-Wert des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) zeigt an, dass das Element bearbeitbar ist; Rich-Text-Formatierung ist deaktiviert und jegliche Formatierung in eingefügtem Text wird automatisch entfernt. ([Firefox Bug 1922723](https://bugzil.la/1922723).)

- **:has-slotted CSS-Pseudoklasse:** `layout.css.has-slotted-selector.enabled`.

  Die {{CSSXRef(":has-slotted")}} [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wird verwendet, um Elemente in {{HTMLElement("template")}} zu stylen, die beim Rendern eines [Webkomponenten](/de/docs/Web/API/Web_components) Inhalten zu einem {{HTMLElement("slot")}}-Element hinzugefügt bekommen. ([Firefox Bug 1921747](https://bugzil.la/1921747).)

## Ältere Versionen

{{Firefox_for_developers}}
