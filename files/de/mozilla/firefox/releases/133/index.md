---
title: Firefox 133 für Entwickler
slug: Mozilla/Firefox/Releases/133
l10n:
  sourceCommit: 66fa0acf565a240c390418f588d571d6e650514d
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 133, die Entwickler betreffen. Firefox 133 wurde am [26. November 2024](https://whattrainisitnow.com/release/?version=133) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Der [`viewport <meta>`-Tag](/de/docs/Web/HTML/Viewport_meta_tag) unterstützt jetzt das Attribut [`interactive-widgets`](/de/docs/Web/HTML/Viewport_meta_tag#the_effect_of_interactive_ui_widgets), das die Größe des Viewports beeinflusst, wenn gängige UI-Widgets wie virtuelle Tastaturen auf dem Bildschirm hinzugefügt werden. ([Firefox-Bug 1831649](https://bugzil.la/1831649) und [Firefox-Bug 1920755](https://bugzil.la/1920755)).

### CSS

Keine bemerkenswerten Änderungen

### JavaScript

- Unterstützung für {{jsxref("Uint8Array")}}-Methoden zur Erleichterung von Konvertierungen zwischen {{Glossary("base64", "base64")}}- und hex-kodierten Zeichenketten und Byte-Arrays. ([Firefox-Bug 1917885](https://bugzil.la/1917885) und [Firefox-Bug 1862220](https://bugzil.la/1862220)).

  Die neuen Methoden umfassen:

  - Statische Methoden {{jsxref("Uint8Array.fromBase64()")}} und {{jsxref("Uint8Array.fromHex()")}} zur Konstruktion eines neuen `Uint8Array`-Objekts aus einer base64- und hex-kodierten Zeichenkette.
  - Instanzmethoden {{jsxref("Uint8Array.prototype.setFromBase64()")}} und {{jsxref("Uint8Array.prototype.setFromHex()")}} zur Befüllung eines vorhandenen `Uint8Array`-Objekts mit Bytes aus einer base64- oder hex-kodierten Zeichenkette.
  - Instanzmethoden {{jsxref("Uint8Array.prototype.toBase64()")}} und {{jsxref("Uint8Array.prototype.toHex()")}}, die eine base64- und hex-kodierte Zeichenkette aus den Daten in einem `Uint8Array`-Objekt zurückgeben.

### APIs

- Die Eigenschaft [`WorkerNavigator.permissions`](/de/docs/Web/API/WorkerNavigator/permissions) wird jetzt unterstützt, wodurch die [Permissions API](/de/docs/Web/API/Permissions_API) sowohl in [Workers](/de/docs/Web/API/Web_Workers_API) als auch im Hauptfensterthread verwendet werden kann. ([Firefox-Bug 1193373](https://bugzil.la/1193373)).
- Das [`EventSource`](/de/docs/Web/API/EventSource)-Interface zur Behandlung von [servergesendeten Ereignissen](/de/docs/Web/API/Server-sent_events) wird jetzt in [Service Worker](/de/docs/Web/API/Service_Worker_API) unterstützt. ([Firefox-Bug 1681218](https://bugzil.la/1681218)).
- Die Schnittstellen [`ImageDecoder`](/de/docs/Web/API/ImageDecoder), [`ImageTrackList`](/de/docs/Web/API/ImageTrackList) und [`ImageTrack`](/de/docs/Web/API/ImageTrack) der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) werden jetzt unterstützt, was die Dekodierung von Bildern aus dem Haupt- und Worker-Thread ermöglicht. ([Firefox-Bug 1923755](https://bugzil.la/1923755)).
- Die Ereignisse [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle werden jetzt bei {{HTMLElement("dialog")}}-Elementen unmittelbar vor und nachdem sie angezeigt oder verborgen werden, ausgelöst. Das `beforetoggle`-Ereignis kann zum Beispiel verwendet werden, um Klassen anzuwenden oder zu entfernen, die die Animation eines Dialogs steuern, oder um den Status eines Dialogformulars zurückzusetzen, bevor es angezeigt wird. Das `toggle`-Ereignis kann verwendet werden, um Benachrichtigungen über Zustandsänderungen zu erhalten, die sonst einen [`MutationObserver`](/de/docs/Web/API/MutationObserver) erfordern würden. ([Firefox-Bug 1876762](https://bugzil.la/1876762)).
- Die Initialisierungsoption [`keepalive`](/de/docs/Web/API/RequestInit#keepalive) für die globale Methode [`fetch()`](/de/docs/Web/API/Window/fetch) und den [`Request()`](/de/docs/Web/API/Request/Request#options)-Konstruktor wird jetzt unterstützt, zusammen mit der [`Request.keepalive`](/de/docs/Web/API/Request/keepalive)-Eigenschaft. `keepalive` kann auf `true` gesetzt werden, um zu verhindern, dass der Browser die zugehörige Anfrage abbricht, wenn die Seite, die sie initiiert hat, entladen wird, bevor die Anfrage abgeschlossen ist.
  Dies könnte beispielsweise verwendet werden, um am Ende einer Sitzung Analysen zu senden, auch wenn der Benutzer die Seite verlässt oder schließt.

  Die Verwendung von `fetch()` mit `keepalive` bietet einige Vorteile gegenüber der Verwendung von [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) für denselben Zweck, wie z.B. die Verwendung von HTTP-Methoden außer [`POST`](/de/docs/Web/HTTP/Methods/POST), anpassbare Anfrageeigenschaften und den Zugriff auf die Serverantwort über die {{jsxref("Promise")}}-Erfüllung von fetch. Es ist auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verfügbar. ([Firefox-Bug 1906952](https://bugzil.la/1906952), [Firefox-Bug 1923044](https://bugzil.la/1923044)).

- Das Inhaltsattribut [`onwaitingforkey`](/de/docs/Web/API/HTMLMediaElement/waitingforkey_event) kann jetzt auf {{htmlelement("audio")}}/{{htmlelement("video")}}-Elementen angegeben werden, um einen Inline-Ereignishandler für das `waitingforkey`-Ereignis festzulegen. ([Firefox-Bug 1925952](https://bugzil.la/1925952)).
- [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) ist jetzt in allen Worker-Kontexten über [`WorkerNavigator.serviceWorker`](/de/docs/Web/API/WorkerNavigator/serviceWorker) zugänglich, sodass Worker die [Service Worker-Registrierungen](/de/docs/Web/API/ServiceWorkerRegistration) inspizieren und verwalten können, die mit dem aktuellen Ursprung verbunden sind. Bisher war `ServiceWorkerContainer` nur im Hauptthread verfügbar, über [`Navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker). ([Firefox-Bug 1113522](https://bugzil.la/1113522)).
- Die Eigenschaft [`name`](/de/docs/Web/API/PerformanceNavigationTiming#performanceentry.name) von `PerformanceNavigationTiming` lässt jetzt [Textfragmente](/de/docs/Web/URI/Fragment/Text_fragments) aus der zurückgegebenen URL weg, in Übereinstimmung mit der Spezifikation. Diese Art von [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Objekt wird von [`Performance.getEntries()`](/de/docs/Web/API/Performance/getEntries) für Einträge mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `navigation` zurückgegeben. ([Firefox-Bug 1919565](https://bugzil.la/1919565)).

#### Entfernungen

- Das Argument [`options.shadowRoots`](/de/docs/Web/API/Document/caretPositionFromPoint#shadowroots) zum Übergeben von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekten an die Methode [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) wurde aus der Veröffentlichung zurückgezogen.
  Die Funktion kann in der Nightly-Version getestet werden und soll in Zukunft erneut veröffentlicht werden. ([Firefox-Bug 1914596](https://bugzil.la/1914596)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für das `url`-Argument für den `network.continueRequest`-Befehl hinzugefügt, das es ermöglicht, Anfragen transparent auf eine andere URL umzuleiten ([Firefox-Bug 1898158](https://bugzil.la/1898158)).
- `browsingContext.print` wurde aktualisiert, um einen `InvalidArgumentError` zu werfen, wenn es mit falschen Dimensionen verwendet wird ([Firefox-Bug 1886382](https://bugzil.la/1886382)).
- Fehler im `script.evaluate` und `script.callFunction` behoben, um die Verwendung von `document.open` in Sandbox-Reichen zu ermöglichen ([Firefox-Bug 1918288](https://bugzil.la/1918288)).
- Ein Fehler behoben, bei dem das `browsingContext.load`-Ereignis die falsche Navigations-ID enthalten konnte, wenn eine Same-Document-Navigation während der Haupnavigation stattfand ([Firefox-Bug 1922327](https://bugzil.la/1922327)).
- Ein weiterer Randfall behoben, bei dem Befehle aufgrund der Navigation mit einem `UnknownError` fehlschlagen konnten ([Firefox-Bug 1923899](https://bugzil.la/1923899)).

#### Marionette

- Marionette aktualisiert, um die Fensterpositionierung unter Linux mit Wayland besser zu handhaben ([Firefox-Bug 1857571](https://bugzil.la/1857571)).
- Ein Fehler behoben, der ein leeres `style`-Attribut auf einem Element hinterlassen konnte, wenn versucht wurde, darauf zu klicken oder es zu löschen ([Firefox-Bug 1922709](https://bugzil.la/1922709)).
- Die Fehlermeldung für `UnexpectedAlertOpen`-Fehler aktualisiert, um den Text des entsprechenden Alarms einzuschließen ([Firefox-Bug 1924469](https://bugzil.la/1924469)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("cookies.get")}} sortiert jetzt Cookies entsprechend der [5.4 The Cookie Header Sektion des HTTP State Management Mechanism (RFC 6265)](https://datatracker.ietf.org/doc/html/rfc6265#section-5.4). Dies beeinflusst die Ergebnisse von Aufrufen, wenn ein Cookie Varianten mit unterschiedlichen Pfadkomponenten hat. Zuvor wurde das frühest erstellte Cookie von {{WebExtAPIRef("cookies.get")}}, {{WebExtAPIRef("cookies.remove")}}, {{WebExtAPIRef("cookies.set")}}, und {{WebExtAPIRef("cookies.getAll")}} ausgewählt. Nach dieser Änderung wird das Cookie mit dem längsten übereinstimmenden Pfad zurückgegeben. ([Firefox-Bug 1798655](https://bugzil.la/1798655))
- Ein Fehler in der {{WebExtAPIRef("declarativeNetRequest")}}-API behoben, der die Registrierung von Regeln nach einem Browser-Neustart verhinderte ([Firefox-Bug 1921353](https://bugzil.la/1921353)). Dieser Fehler betraf Erweiterungen, die auf {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules")}} oder {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets")}} angewiesen sind. Diese Korrektur wurde auch in Firefox ESR 128.5 und Firefox ESR 115.18 zurückportiert.

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 133 eingeführt, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **contenteditable-Wert nur-Text:** `dom.element.contenteditable.plaintext-only.enabled`.

  Der `plaintext-only`-Wert des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) zeigt an, dass das Element bearbeitbar ist; die Rich-Text-Formatierung ist deaktiviert und jegliche Formatierung im eingefügten Text wird automatisch entfernt. ([Firefox-Bug 1922723](https://bugzil.la/1922723).)

- **:has-slotted CSS-Pseudoklasse:** `layout.css.has-slotted-selector.enabled`.

  Die {{CSSXRef(":has-slotted")}} [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wird verwendet, um Elemente in {{HTMLElement("template")}} zu stylen, die beim Rendern einer [Webkomponente](/de/docs/Web/API/Web_components) Inhalt zu einem {{HTMLElement("slot")}}-Element hinzufügen. ([Firefox-Bug 1921747](https://bugzil.la/1921747).)

## Ältere Versionen

{{Firefox_for_developers}}
