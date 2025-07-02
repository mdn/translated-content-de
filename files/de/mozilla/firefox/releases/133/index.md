---
title: Firefox 133 für Entwickler
slug: Mozilla/Firefox/Releases/133
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 133, die Entwickler betreffen. Firefox 133 wurde am [26. November 2024](https://whattrainisitnow.com/release/?version=133) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Der [`viewport <meta>` Tag](/de/docs/Web/HTML/Guides/Viewport_meta_element) unterstützt nun das [`interactive-widget`](/de/docs/Web/HTML/Guides/Viewport_meta_element#the_effect_of_interactive_ui_widgets) Attribut, welches die Größe des Viewports beeinflusst, wenn gängige UI-Widgets wie virtuelle Tastaturen auf dem Bildschirm hinzugefügt werden. ([Firefox Fehler 1831649](https://bugzil.la/1831649) und [Firefox Fehler 1920755](https://bugzil.la/1920755)).

### CSS

Keine bedeutenden Änderungen

### JavaScript

- Unterstützung für {{jsxref("Uint8Array")}} Methoden, um Konvertierungen zwischen {{Glossary("base64", "base64")}}- und hex-kodierten Strings und Byte-Arrays zu erleichtern. ([Firefox Fehler 1917885](https://bugzil.la/1917885) und [Firefox Fehler 1862220](https://bugzil.la/1862220)).

  Die neuen Methoden beinhalten:
  - {{jsxref("Uint8Array.fromBase64()")}} und {{jsxref("Uint8Array.fromHex()")}} statische Methoden zum Erstellen eines neuen `Uint8Array` Objekts aus einem base64- bzw. hex-kodierten String.
  - {{jsxref("Uint8Array.prototype.setFromBase64()")}}, und {{jsxref("Uint8Array.prototype.setFromHex()")}} Instanzmethoden zum Füllen eines vorhandenen `Uint8Array` Objekts mit Bytes aus einem base64- oder hex-kodierten String.
  - {{jsxref("Uint8Array.prototype.toBase64()")}} und {{jsxref("Uint8Array.prototype.toHex()")}} Instanzmethoden, die einen base64- bzw. hex-kodierten String aus den Daten in einem `Uint8Array` Objekt zurückgeben.

### APIs

- Die [`WorkerNavigator.permissions`](/de/docs/Web/API/WorkerNavigator/permissions) Eigenschaft wird jetzt unterstützt, wodurch die [Permissions API](/de/docs/Web/API/Permissions_API) sowohl in [workers](/de/docs/Web/API/Web_Workers_API) als auch im Hauptfenster-Thread verwendet werden kann. ([Firefox Fehler 1193373](https://bugzil.la/1193373)).
- Die [`EventSource`](/de/docs/Web/API/EventSource) Schnittstelle zum Umgang mit [server-sent events](/de/docs/Web/API/Server-sent_events) wird jetzt in [Service-Workern](/de/docs/Web/API/Service_Worker_API) unterstützt. ([Firefox Fehler 1681218](https://bugzil.la/1681218)).
- Die Schnitteflächen [`ImageDecoder`](/de/docs/Web/API/ImageDecoder), [`ImageTrackList`](/de/docs/Web/API/ImageTrackList) und [`ImageTrack`](/de/docs/Web/API/ImageTrack) der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) werden jetzt unterstützt, um das Decodieren von Bildern aus dem Haupt- und Work-Thread zu ermöglichen. ([Firefox Fehler 1923755](https://bugzil.la/1923755)).
- Die Ereignisse [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) der [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle werden jetzt bei {{HTMLElement("dialog")}} Elementen unmittelbar vor und nach dem Anzeigen oder Verbergen ausgelöst. Das `beforetoggle` kann verwendet werden, um zum Beispiel Klassen anzuwenden oder zu entfernen, die die Animation eines Dialogs kontrollieren, oder den Zustand eines Dialogformulars zurückzusetzen, bevor es angezeigt wird. Das `toggle` Ereignis kann genutzt werden, um Benachrichtigungen über den Wechsel des Öffnungszustands zu erhalten, was ansonsten einen [`MutationObserver`](/de/docs/Web/API/MutationObserver) erfordert. ([Firefox Fehler 1876762](https://bugzil.la/1876762)).
- Die [`keepalive`](/de/docs/Web/API/RequestInit#keepalive) Initialisierungsoption für die globale [`fetch()`](/de/docs/Web/API/Window/fetch) Methode und den [`Request()` Konstruktor](/de/docs/Web/API/Request/Request#options) werden jetzt unterstützt, zusammen mit der [`Request.keepalive`](/de/docs/Web/API/Request/keepalive) Eigenschaft. `keepalive` kann auf `true` gesetzt werden, um zu verhindern, dass der Browser die zugehörige Anfrage abbricht, wenn die Seite, die sie initiiert hat, entladen wird, bevor die Anfrage abgeschlossen ist.
  Dies könnte verwendet werden, um zum Beispiel Analysen am Ende einer Sitzung zu senden, selbst wenn der Benutzer die Seite verlässt oder schließt.

  Die Verwendung von `fetch()` mit `keepalive` bietet einige Vorteile gegenüber der Verwendung von [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) für denselben Zweck, wie die Möglichkeit, HTTP-Methoden außer [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST) zu verwenden, anpassbare Anfrageeigenschaften und den Zugriff auf die Serverantwort über die Erfüllung von `fetch` {{jsxref("Promise")}}. Es ist auch in [Service-Workern](/de/docs/Web/API/Service_Worker_API) verfügbar. ([Firefox Fehler 1906952](https://bugzil.la/1906952), [Firefox Fehler 1923044](https://bugzil.la/1923044)).

- Das [`onwaitingforkey`](/de/docs/Web/API/HTMLMediaElement/waitingforkey_event) Inhaltsattribut kann jetzt bei {{htmlelement("audio")}}/{{htmlelement("video")}} Elementen angegeben werden, um einen Inline-Ereignis-Handler für das `waitingforkey` Ereignis festzulegen. ([Firefox Fehler 1925952](https://bugzil.la/1925952)).
- [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) ist jetzt in allen Worker-Kontexten über [`WorkerNavigator.serviceWorker`](/de/docs/Web/API/WorkerNavigator/serviceWorker) verfügbar, sodass Worker die mit dem aktuellen Ursprung verbundenen [Service-Worker-Registrierungen](/de/docs/Web/API/ServiceWorkerRegistration) inspizieren und verwalten können. Zuvor war `ServiceWorkerContainer` nur im Haupt-Thread über [`Navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) verfügbar. ([Firefox Fehler 1113522](https://bugzil.la/1113522)).
- Die [`name`](/de/docs/Web/API/PerformanceNavigationTiming#performanceentry.name) Eigenschaft von `PerformanceNavigationTiming` lässt jetzt [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) aus der zurückgegebenen URL aus, um der Spezifikation zu entsprechen. Diese Art von [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) Objekt wird von [`Performance.getEntries()`](/de/docs/Web/API/Performance/getEntries) für Einträge mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `navigation` zurückgegeben. ([Firefox Fehler 1919565](https://bugzil.la/1919565)).

#### Entfernungen

- Das [`options.shadowRoots`](/de/docs/Web/API/Document/caretPositionFromPoint#shadowroots) Argument zum Übergeben von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Objekten an die [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) Methode wurde aus der Veröffentlichung zurückgezogen.
  Die Funktion kann in der Nightly-Version getestet werden und soll in Zukunft wiederveröffentlicht werden. ([Firefox Fehler 1914596](https://bugzil.la/1914596)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für das `url` Argument für den `network.continueRequest` Befehl hinzugefügt, was ermöglicht, Anfragen transparent zu einer anderen URL umzuleiten ([Firefox Fehler 1898158](https://bugzil.la/1898158)).
- `browsingContext.print` wurde aktualisiert, um einen `InvalidArgumentError` zu werfen, wenn es mit inkorrekten Dimensionen verwendet wird ([Firefox Fehler 1886382](https://bugzil.la/1886382)).
- `script.evaluate` und `script.callFunction` wurden repariert, um die Verwendung von `document.open` in Sandbox-Reichen zu ermöglichen ([Firefox Fehler 1918288](https://bugzil.la/1918288)).
- Ein Fehler behoben, bei dem das `browsingContext.load` Ereignis die falsche Navigations-ID enthalten könnte, wenn eine gleiche Dokument-Navigation während der Hauptnavigation stattfand ([Firefox Fehler 1922327](https://bugzil.la/1922327)).
- Ein weiterer Randfall behoben, bei dem Befehle mit einem `UnknownError` aufgrund von Navigation fehlschlagen konnten ([Firefox Fehler 1923899](https://bugzil.la/1923899)).

#### Marionette

- Marionette wurde aktualisiert, um die Fensterpositionierung unter Linux mit Wayland besser zu handhaben ([Firefox Fehler 1857571](https://bugzil.la/1857571)).
- Ein Fehler behoben, der ein leeres `style` Attribut auf einem Element hinterlassen konnte, wenn versucht wurde, es zu klicken oder zu leeren ([Firefox Fehler 1922709](https://bugzil.la/1922709)).
- Die Fehlermeldung für `UnexpectedAlertOpen` Fehler wurde aktualisiert, um den Text des entsprechenden Alarms einzuschließen ([Firefox Fehler 1924469](https://bugzil.la/1924469)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("cookies.get")}} ordnet jetzt Cookies gemäß des [Abschnitts 5.4 Der Cookie-Header Mechanismus zur Verwaltung des HTTP-Zustands (RFC 6265)](https://datatracker.ietf.org/doc/html/rfc6265#section-5.4). Dies hat Auswirkungen auf die Ergebnisse von Aufrufen, wenn ein Cookie Varianten mit unterschiedlichen Pfadkomponenten hat. Bisher wurde das zuerst erstellte Cookie von {{WebExtAPIRef("cookies.get")}}, {{WebExtAPIRef("cookies.remove")}}, {{WebExtAPIRef("cookies.set")}} und {{WebExtAPIRef("cookies.getAll")}} gematcht. Nach dieser Änderung wird das Cookie mit dem längsten übereinstimmenden Pfad zurückgegeben. ([Firefox Fehler 1798655](https://bugzil.la/1798655))
- Ein Fehler in der {{WebExtAPIRef("declarativeNetRequest")}} API wurde behoben, der die Registrierung von Regeln nach einem Browser-Neustart verhinderte ([Firefox Fehler 1921353](https://bugzil.la/1921353)). Dieser Fehler betraf Erweiterungen, die auf {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules")}} oder {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets")}} angewiesen sind. Dieser Fix wurde auch auf Firefox ESR 128.5 und Firefox ESR 115.18 zurückportiert.
- Ein Fehler wurde behoben, der es verhinderte, dass [`window.close()`](/de/docs/Web/API/Window/close) von einer [Seitenleiste](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars) aus die Seitenleiste schließen konnte.

## Experimentelle Web-Features

Diese Features sind neu in Firefox 133 verfügbar, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie das entsprechende Präferenz auf der `about:config` Seite und setzen es auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **contenteditable plaintext-only Wert:** `dom.element.contenteditable.plaintext-only.enabled`.

  Der `plaintext-only` Wert des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) zeigt an, dass das Element editierbar ist; Rich-Text-Formatierungen sind deaktiviert und alle Formatierungen im eingefügten Text werden automatisch entfernt. ([Firefox Fehler 1922723](https://bugzil.la/1922723).)

- **:has-slotted CSS Pseudoklasse:** `layout.css.has-slotted-selector.enabled`.

  Die {{CSSXRef(":has-slotted")}} [Pseudo-Klasse](/de/docs/Web/CSS/Pseudo-classes) wird verwendet, um Elemente in {{HTMLElement("template")}} stilistisch zu beeinflussen, die Inhalte in einem {{HTMLElement("slot")}} Element haben beim Rendern einer [Web-Komponente](/de/docs/Web/API/Web_components). ([Firefox Fehler 1921747](https://bugzil.la/1921747).)

## Ältere Versionen

{{Firefox_for_developers}}
