---
title: Firefox 133 Versionshinweise für Entwickler
short-title: Firefox 133
slug: Mozilla/Firefox/Releases/133
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 133, die Entwickler betreffen. Firefox 133 wurde am [26. November 2024](https://whattrainisitnow.com/release/?version=133) veröffentlicht.

## Änderungen für Web-Entwickler

### HTML

- Der [`viewport <meta>`-Tag](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) unterstützt jetzt das [`interactive-widget`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport#the_effect_of_interactive_ui_widgets) Attribut, das die Größe des Viewports beeinflusst, wenn allgemeine UI-Widgets, wie virtuelle Tastaturen, zum Bildschirm hinzugefügt werden. ([Firefox Bug 1831649](https://bugzil.la/1831649) und [Firefox Bug 1920755](https://bugzil.la/1920755)).

### CSS

Keine nennenswerten Änderungen

### JavaScript

- Unterstützung für {{jsxref("Uint8Array")}}-Methoden, um Konvertierungen zwischen {{Glossary("base64", "base64")}}- und hex-kodierten Zeichenfolgen und Byte-Arrays zu erleichtern. ([Firefox Bug 1917885](https://bugzil.la/1917885) und [Firefox Bug 1862220](https://bugzil.la/1862220)).

  Die neuen Methoden umfassen:
  - {{jsxref("Uint8Array.fromBase64()")}} und {{jsxref("Uint8Array.fromHex()")}} statische Methoden zum Erstellen eines neuen `Uint8Array`-Objekts aus einer base64- bzw. hex-kodierten Zeichenfolge.
  - {{jsxref("Uint8Array.prototype.setFromBase64()")}} und {{jsxref("Uint8Array.prototype.setFromHex()")}} Instanzmethoden zum Befüllen eines vorhandenen `Uint8Array`-Objekts mit Bytes aus einer base64- oder hex-kodierten Zeichenfolge.
  - {{jsxref("Uint8Array.prototype.toBase64()")}} und {{jsxref("Uint8Array.prototype.toHex()")}} Instanzmethoden, die eine base64- und hex-kodierte Zeichenfolge aus den Daten in einem `Uint8Array`-Objekt zurückgeben.

### APIs

- Die [`WorkerNavigator.permissions`](/de/docs/Web/API/WorkerNavigator/permissions) Eigenschaft wird jetzt unterstützt, wodurch die [Permissions API](/de/docs/Web/API/Permissions_API) sowohl in [workern](/de/docs/Web/API/Web_Workers_API) als auch im Hauptfenster-Thread verwendet werden kann. ([Firefox Bug 1193373](https://bugzil.la/1193373)).
- Die [`EventSource`](/de/docs/Web/API/EventSource) Schnittstelle zur Handhabung von [server-sent events](/de/docs/Web/API/Server-sent_events) wird jetzt in [Service-Workern](/de/docs/Web/API/Service_Worker_API) unterstützt. ([Firefox Bug 1681218](https://bugzil.la/1681218)).
- Die [`ImageDecoder`](/de/docs/Web/API/ImageDecoder), [`ImageTrackList`](/de/docs/Web/API/ImageTrackList) und [`ImageTrack`](/de/docs/Web/API/ImageTrack) Schnittstellen der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) werden jetzt unterstützt und ermöglichen das Dekodieren von Bildern aus den Haupt- und Worker-Threads. ([Firefox Bug 1923755](https://bugzil.la/1923755)).
- Die [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) Ereignisse der [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle werden jetzt an {{HTMLElement("dialog")}} Elementen unmittelbar vor und nach dem Anzeigen bzw. Ausblenden ausgelöst. Das `beforetoggle` Ereignis kann beispielsweise verwendet werden, um Klassen zuzuweisen/zu entfernen, die die Animation eines Dialogs steuern oder den Zustand eines Dialogformulars vor dem Anzeigen zurücksetzen. Das `toggle` Ereignis kann verwendet werden, um eine Änderungsbenachrichtigung des offenen Zustands zu erhalten, was ansonsten einen [`MutationObserver`](/de/docs/Web/API/MutationObserver) erfordern würde. ([Firefox Bug 1876762](https://bugzil.la/1876762)).
- Die [`keepalive`](/de/docs/Web/API/RequestInit#keepalive) Initialisierungsoption für die globale [`fetch()`](/de/docs/Web/API/Window/fetch) Methode und den [`Request()` Konstruktor](/de/docs/Web/API/Request/Request#options) werden jetzt unterstützt, zusammen mit der [`Request.keepalive`](/de/docs/Web/API/Request/keepalive) Eigenschaft. `keepalive` kann auf `true` gesetzt werden, um zu verhindern, dass der Browser die zugehörige Anfrage abbricht, wenn die Seite, die sie initiiert hat, vor Abschluss der Anfrage entladen wird.
  Dies könnte beispielsweise verwendet werden, um Analysen am Ende einer Sitzung zu senden, selbst wenn der Benutzer die Seite verlässt oder schließt.

  Die Verwendung von `fetch()` mit `keepalive` bietet gegenüber der Verwendung von [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) für denselben Zweck einige Vorteile, wie z.B. die Verwendung von HTTP-Methoden außer [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST), anpassbare Anfrageeigenschaften und Zugriff auf die Serverantwort über die Erfüllung des fetch-{{jsxref("Promise")}}. Es ist auch in [Service-Workern](/de/docs/Web/API/Service_Worker_API) verfügbar. ([Firefox Bug 1906952](https://bugzil.la/1906952), [Firefox Bug 1923044](https://bugzil.la/1923044)).

- Das [`onwaitingforkey`](/de/docs/Web/API/HTMLMediaElement/waitingforkey_event) Inhaltselementattribut kann jetzt auf {{htmlelement("audio")}}/{{htmlelement("video")}} Elementen angegeben werden, um einen Inline-Event-Handler für das `waitingforkey`-Ereignis zu setzen. ([Firefox Bug 1925952](https://bugzil.la/1925952)).
- [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) wird jetzt in allen Worker-Kontexten über [`WorkerNavigator.serviceWorker`](/de/docs/Web/API/WorkerNavigator/serviceWorker) bereitgestellt, sodass Worker die [Service-Worker-Registrierungen](/de/docs/Web/API/ServiceWorkerRegistration) verwalten und anzeigen können, die mit dem aktuellen Ursprung verbunden sind. Zuvor war `ServiceWorkerContainer` nur im Haupt-Thread über [`Navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) verfügbar. ([Firefox Bug 1113522](https://bugzil.la/1113522)).
- Die [`name`](/de/docs/Web/API/PerformanceNavigationTiming#performanceentry.name) Eigenschaft von `PerformanceNavigationTiming` lässt jetzt [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) aus der zurückgegebenen URL heraus, entsprechend der Spezifikation. Diese Art von [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Objekt wird von [`Performance.getEntries()`](/de/docs/Web/API/Performance/getEntries) für Einträge mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `navigation` zurückgegeben. ([Firefox Bug 1919565](https://bugzil.la/1919565)).

#### Entfernungen

- Das [`options.shadowRoots`](/de/docs/Web/API/Document/caretPositionFromPoint#shadowroots) Argument zum Übergeben von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Objekten an die [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) Methode wurde aus der Veröffentlichung zurückgezogen.
  Die Funktion kann in der Nightly-Version getestet werden und wird voraussichtlich in Zukunft neu veröffentlicht. ([Firefox Bug 1914596](https://bugzil.la/1914596)).

### WebDriver Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für das `url`-Argument für den `network.continueRequest` Befehl hinzugefügt, das es ermöglicht, Anfragen transparent an eine andere URL umzuleiten ([Firefox Bug 1898158](https://bugzil.la/1898158)).
- `browsingContext.print` wurde aktualisiert, um einen `InvalidArgumentError` zu werfen, wenn es mit falschen Dimensionen verwendet wird ([Firefox Bug 1886382](https://bugzil.la/1886382)).
- `script.evaluate` und `script.callFunction` wurden korrigiert, um die Verwendung von `document.open` in Sandbox-Bereichen zu ermöglichen ([Firefox Bug 1918288](https://bugzil.la/1918288)).
- Ein Fehler wurde behoben, bei dem das `browsingContext.load` Ereignis die falsche Navigations-ID enthalten könnte, wenn während der Hauptnavigation eine gleiche Dokumentnavigation auftrat ([Firefox Bug 1922327](https://bugzil.la/1922327)).
- Ein weiterer Randfall wurde behoben, bei dem Befehle aufgrund der Navigation mit einem `UnknownError` fehlschlagen könnten ([Firefox Bug 1923899](https://bugzil.la/1923899)).

#### Marionette

- Marionette wurde aktualisiert, um die Fensterpositionierung unter Linux mit Wayland besser zu handhaben ([Firefox Bug 1857571](https://bugzil.la/1857571)).
- Ein Fehler wurde behoben, der ein leeres `style`-Attribut an einem Element hinterlassen konnte, wenn versucht wurde, darauf zu klicken oder es zu löschen ([Firefox Bug 1922709](https://bugzil.la/1922709)).
- Die Fehlermeldung für `UnexpectedAlertOpen` Fehler wurde aktualisiert, um den Text des entsprechenden Warnhinweises einzuschließen ([Firefox Bug 1924469](https://bugzil.la/1924469)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("cookies.get")}} ordnet jetzt Cookies gemäß dem [5.4 The Cookie Header Abschnitt des HTTP State Management Mechanism (RFC 6265)](https://datatracker.ietf.org/doc/html/rfc6265#section-5.4). Dies wirkt sich auf die Ergebnisse von Aufrufen aus, wenn ein Cookie Varianten mit unterschiedlichen Pfadkomponenten hat. Zuvor wurde das am frühesten erstellte Cookie durch {{WebExtAPIRef("cookies.get")}}, {{WebExtAPIRef("cookies.remove")}}, {{WebExtAPIRef("cookies.set")}} und {{WebExtAPIRef("cookies.getAll")}} abgeglichen. Nach dieser Änderung wird das Cookie mit dem längsten übereinstimmenden Pfad zurückgegeben. ([Firefox Bug 1798655](https://bugzil.la/1798655))
- Ein Fehler in der {{WebExtAPIRef("declarativeNetRequest")}} API wurde behoben, der die Registrierung von Regeln nach einem Browserneustart verhinderte ([Firefox Bug 1921353](https://bugzil.la/1921353)). Dieser Fehler betraf Erweiterungen, die sich auf {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules")}} oder {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets")}} verlassen. Dieser Fix wurde auch in Firefox ESR 128.5 und Firefox ESR 115.18 zurückportiert.
- Ein Fehler wurde behoben, der verhinderte, dass [`window.close()`](/de/docs/Web/API/Window/close) aus einer [Seitenleiste](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars) die Seitenleiste schließt.

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 133 implementiert, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Voreinstellung auf der `about:config` Seite und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **contenteditable plaintext-only Wert:** `dom.element.contenteditable.plaintext-only.enabled`.

  Der `plaintext-only` Wert des [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) globalen Attributs gibt an, dass das Element bearbeitbar ist; die Formatierung von Rich-Text ist deaktiviert und jegliche Formatierung in eingefügtem Text wird automatisch entfernt. ([Firefox Bug 1922723](https://bugzil.la/1922723).)

- **:has-slotted CSS Pseudoklasse:** `layout.css.has-slotted-selector.enabled`.

  Die {{CSSXRef(":has-slotted")}} [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wird verwendet, um Elemente in {{HTMLElement("template")}} zu stylen, die beim Rendern eines [Web Components](/de/docs/Web/API/Web_components) über ein {{HTMLElement("slot")}} Element mit Inhalt versehen werden. ([Firefox Bug 1921747](https://bugzil.la/1921747).)
