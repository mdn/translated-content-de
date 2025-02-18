---
title: Firefox 133 für Entwickler
slug: Mozilla/Firefox/Releases/133
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{FirefoxSidebar}}

Dieser Artikel liefert Informationen zu den Änderungen in Firefox 133, die Entwickler betreffen. Firefox 133 wurde am [26. November 2024](https://whattrainisitnow.com/release/?version=133) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Der [`viewport <meta>`-Tag](/de/docs/Web/HTML/Viewport_meta_tag) unterstützt jetzt das [`interactive-widget`](/de/docs/Web/HTML/Viewport_meta_tag#the_effect_of_interactive_ui_widgets)-Attribut, das die Größe des Viewports beeinflusst, wenn gängige UI-Widgets wie virtuelle Tastaturen auf dem Bildschirm angezeigt werden. ([Firefox-Bug 1831649](https://bugzil.la/1831649) und [Firefox-Bug 1920755](https://bugzil.la/1920755)).

### CSS

Keine bemerkenswerten Änderungen.

### JavaScript

- Unterstützung für {{jsxref("Uint8Array")}}-Methoden zur Vereinfachung der Konvertierung zwischen {{Glossary("base64", "base64")}}- und hex-codierten Strings und Byte-Arrays. ([Firefox-Bug 1917885](https://bugzil.la/1917885) und [Firefox-Bug 1862220](https://bugzil.la/1862220)).

  Neue Methoden umfassen:

  - {{jsxref("Uint8Array.fromBase64()")}} und {{jsxref("Uint8Array.fromHex()")}} statische Methoden zur Konstruktion eines neuen `Uint8Array`-Objekts aus einem Base64- bzw. Hex-codierten String.
  - {{jsxref("Uint8Array.prototype.setFromBase64()")}}, und {{jsxref("Uint8Array.prototype.setFromHex()")}} Instanzmethoden zum Auffüllen eines vorhandenen `Uint8Array`-Objekts mit Bytes aus einem Base64- oder Hex-codierten String.
  - {{jsxref("Uint8Array.prototype.toBase64()")}} und {{jsxref("Uint8Array.prototype.toHex()")}} Instanzmethoden, die einen Base64- oder Hex-codierten String aus den Daten in einem `Uint8Array`-Objekt zurückgeben.

### APIs

- Die [`WorkerNavigator.permissions`](/de/docs/Web/API/WorkerNavigator/permissions)-Eigenschaft wird jetzt unterstützt, was ermöglicht, die [Permissions API](/de/docs/Web/API/Permissions_API) in [Workers](/de/docs/Web/API/Web_Workers_API) sowie im Hauptfenster-Thread zu nutzen. ([Firefox-Bug 1193373](https://bugzil.la/1193373)).
- Die [`EventSource`](/de/docs/Web/API/EventSource)-Schnittstelle zur Behandlung von [Server-Sent Events](/de/docs/Web/API/Server-sent_events) wird jetzt in [Service Workern](/de/docs/Web/API/Service_Worker_API) unterstützt. ([Firefox-Bug 1681218](https://bugzil.la/1681218)).
- Die Schnittstellen [`ImageDecoder`](/de/docs/Web/API/ImageDecoder), [`ImageTrackList`](/de/docs/Web/API/ImageTrackList) und [`ImageTrack`](/de/docs/Web/API/ImageTrack) des [WebCodecs API](/de/docs/Web/API/WebCodecs_API) werden jetzt unterstützt, was das Dekodieren von Bildern aus den Haupt- und Worker-Threads ermöglicht. ([Firefox-Bug 1923755](https://bugzil.la/1923755)).
- Die Ereignisse [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle werden jetzt für {{HTMLElement("dialog")}}-Elemente unmittelbar vor und nach deren Anzeige oder Ausblendung ausgelöst. Das `beforetoggle`-Ereignis kann z. B. verwendet werden, um Klassen, die die Animation eines Dialogs steuern, anzuwenden oder zu entfernen oder den Zustand eines Dialogformulars vor dessen Anzeige zurückzusetzen. Das `toggle`-Ereignis kann zur Benachrichtigung über Zustandsänderungen der offenen Ansicht verwendet werden, was sonst einen [`MutationObserver`](/de/docs/Web/API/MutationObserver) erfordern würde. ([Firefox-Bug 1876762](https://bugzil.la/1876762)).
- Die [`keepalive`](/de/docs/Web/API/RequestInit#keepalive)-Initialisierungsoption für die globale Methode [`fetch()`](/de/docs/Web/API/Window/fetch) und den [`Request()`-Konstruktor](/de/docs/Web/API/Request/Request#options) wird jetzt unterstützt, zusammen mit der [`Request.keepalive`](/de/docs/Web/API/Request/keepalive)-Eigenschaft. Mit `keepalive` kann auf `true` gesetzt werden, um zu verhindern, dass der Browser die zugehörige Anfrage abbricht, wenn die Seite, die sie initiiert hat, vor Abschluss der Anfrage geschlossen oder verlassen wird.
  Dies könnte beispielsweise verwendet werden, um Sitzungsanalysen am Ende einer Sitzung zu senden, selbst wenn der Benutzer die Seite verlässt oder schließt.

  Die Verwendung von `fetch()` mit `keepalive` bietet einige Vorteile gegenüber der Nutzung von [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) für denselben Zweck, wie die Verwendung anderer HTTP-Methoden als [`POST`](/de/docs/Web/HTTP/Methods/POST), anpassbare Anforderungseigenschaften und Zugriff auf die Serverantwort durch die Erfüllung des fetch-{{jsxref("Promise")}}. Es ist auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verfügbar. ([Firefox-Bug 1906952](https://bugzil.la/1906952), [Firefox-Bug 1923044](https://bugzil.la/1923044)).

- Der [`onwaitingforkey`](/de/docs/Web/API/HTMLMediaElement/waitingforkey_event)-Inhaltsattribut kann jetzt auf {{htmlelement("audio")}}/{{htmlelement("video")}}-Elementen angegeben werden, um einen Inline-Event-Handler für das `waitingforkey`-Event festzulegen. ([Firefox-Bug 1925952](https://bugzil.la/1925952)).
- [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) wird jetzt in allen Worker-Kontexten über [`WorkerNavigator.serviceWorker`](/de/docs/Web/API/WorkerNavigator/serviceWorker) bereitgestellt, sodass Worker die [Service-Worker-Registrierungen](/de/docs/Web/API/ServiceWorkerRegistration) der aktuellen Herkunft inspizieren und verwalten können. Bisher war `ServiceWorkerContainer` nur im Haupt-Thread über [`Navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) verfügbar. ([Firefox-Bug 1113522](https://bugzil.la/1113522)).
- Die [`name`](/de/docs/Web/API/PerformanceNavigationTiming#performanceentry.name)-Eigenschaft von `PerformanceNavigationTiming` lässt jetzt [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) aus der zurückgegebenen URL weg, was mit der Spezifikation übereinstimmt. Dieser Typ von [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Objekt wird von [`Performance.getEntries()`](/de/docs/Web/API/Performance/getEntries) für Einträge mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `navigation` zurückgegeben. ([Firefox-Bug 1919565](https://bugzil.la/1919565)).

#### Entfernt

- Das [`options.shadowRoots`](/de/docs/Web/API/Document/caretPositionFromPoint#shadowroots)-Argument zum Übergeben von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekten an die Methode [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) wurde aus der Veröffentlichung zurückgezogen.
  Die Funktion kann im Nightly-Release getestet werden und soll in Zukunft erneut veröffentlicht werden. ([Firefox-Bug 1914596](https://bugzil.la/1914596)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für das `url`-Argument für den `network.continueRequest`-Befehl hinzugefügt, das ermöglicht, Anforderungen transparent zu einer anderen URL umzuleiten. ([Firefox-Bug 1898158](https://bugzil.la/1898158)).
- `browsingContext.print` aktualisiert, um einen `InvalidArgumentError` zu werfen, wenn falsche Dimensionen verwendet werden ([Firefox-Bug 1886382](https://bugzil.la/1886382)).
- `script.evaluate` und `script.callFunction` korrigiert, um die Verwendung von `document.open` in Sandbox-Bereichen zu ermöglichen. ([Firefox-Bug 1918288](https://bugzil.la/1918288)).
- Einen Fehler behoben, bei dem das `browsingContext.load`-Ereignis die falsche Navigations-ID enthalten konnte, falls eine Navigation im selben Dokument während der Hauptnavigation auftrat ([Firefox-Bug 1922327](https://bugzil.la/1922327)).
- Ein weiterer Randfall wurde behoben, bei dem Befehle aufgrund von Navigation mit einem `UnknownError` fehlschlagen konnten. ([Firefox-Bug 1923899](https://bugzil.la/1923899)).

#### Marionette

- Marionette aktualisiert, um die Fensterpositionierung unter Linux mit Wayland besser zu handhaben. ([Firefox-Bug 1857571](https://bugzil.la/1857571)).
- Ein Fehler wurde behoben, bei dem ein leerer `style`-Attribut auf einem Element verbleiben konnte, wenn versucht wurde, darauf zu klicken oder es zu leeren. ([Firefox-Bug 1922709](https://bugzil.la/1922709)).
- Die Fehlermeldung für `UnexpectedAlertOpen`-Fehler wurde aktualisiert, um den Text der entsprechenden Warnung einzuschließen. ([Firefox-Bug 1924469](https://bugzil.la/1924469)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("cookies.get")}} ordnet jetzt Cookies gemäß Abschnitt [5.4 The Cookie Header des HTTP State Management Mechanism (RFC 6265)](https://datatracker.ietf.org/doc/html/rfc6265#section-5.4). Dies wirkt sich auf die Ergebnisse des Aufrufs aus, wenn ein Cookie Varianten mit unterschiedlichen Pfad-Komponenten hat. Zuvor wurde das zuerst erstellte Cookie von {{WebExtAPIRef("cookies.get")}}, {{WebExtAPIRef("cookies.remove")}}, {{WebExtAPIRef("cookies.set")}} und {{WebExtAPIRef("cookies.getAll")}} abgeglichen. Nach dieser Änderung wird das Cookie mit dem längsten übereinstimmenden Pfad zurückgegeben. ([Firefox-Bug 1798655](https://bugzil.la/1798655))
- Ein Fehler in der {{WebExtAPIRef("declarativeNetRequest")}}-API, der die Registrierung von Regeln nach einem Neustart des Browsers verhinderte, wurde behoben. ([Firefox-Bug 1921353](https://bugzil.la/1921353)). Dieser Fehler betraf Erweiterungen, die auf {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules")}} oder {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets")}} angewiesen sind. Dieser Fix wurde auch auf Firefox ESR 128.5 und Firefox ESR 115.18 zurückportiert.
- Ein Fehler wurde behoben, der verhinderte, dass [`window.close()`](/de/docs/Web/API/Window/close) aus einer [Sidebar](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars) die Sidebar schließt.

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 133 verfügbar, jedoch standardmäßig deaktiviert. Um sie zu testen, suchen Sie die entsprechende Einstellung auf der Seite `about:config` und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **contenteditable plaintext-only-Wert:** `dom.element.contenteditable.plaintext-only.enabled`.

  Der `plaintext-only`-Wert des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) gibt an, dass das Element bearbeitbar ist; Rich-Text-Formatierungen sind deaktiviert und alle Formatierungen im eingefügten Text werden automatisch entfernt. ([Firefox-Bug 1922723](https://bugzil.la/1922723).)

- **:has-slotted CSS-Pseudoklasse:** `layout.css.has-slotted-selector.enabled`.

  Die {{CSSXRef(":has-slotted")}}-[Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wird verwendet, um Elemente in {{HTMLElement("template")}} zu stylen, die Inhalte enthalten, die zu einem {{HTMLElement("slot")}}-Element hinzugefügt wurden, wenn eine [Web-Komponente](/de/docs/Web/API/Web_components) gerendert wird. ([Firefox-Bug 1921747](https://bugzil.la/1921747).)

## Ältere Versionen

{{Firefox_for_developers}}
