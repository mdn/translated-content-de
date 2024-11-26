---
title: Firefox 133 für Entwickler
slug: Mozilla/Firefox/Releases/133
l10n:
  sourceCommit: 3ee441723555f8e4622055361d367a88badf6326
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 133, die Entwickler betreffen. Firefox 133 wurde am [26. November 2024](https://whattrainisitnow.com/release/?version=133) veröffentlicht.

## Änderungen für Web-Entwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

Keine bemerkenswerten Änderungen

### JavaScript

- Unterstützung für die Methoden von {{jsxref("Uint8Array")}}, um Konvertierungen zwischen {{Glossary("base64", "base64")}}- und hex-codierten Zeichenfolgen und Byte-Arrays zu erleichtern. ([Firefox-Bug 1917885](https://bugzil.la/1917885) und [Firefox-Bug 1862220](https://bugzil.la/1862220)).

  Die neuen Methoden umfassen:

  - Statische Methoden {{jsxref("Uint8Array.fromBase64()")}} und {{jsxref("Uint8Array.fromHex()")}} zum Erstellen eines neuen `Uint8Array`-Objekts aus einer base64- bzw. hex-codierten Zeichenfolge.
  - Instanzmethoden {{jsxref("Uint8Array.prototype.setFromBase64()")}} und {{jsxref("Uint8Array.prototype.setFromHex()")}} zum Befüllen eines bestehenden `Uint8Array`-Objekts mit Bytes aus einer base64- oder hex-codierten Zeichenfolge.
  - Instanzmethoden {{jsxref("Uint8Array.prototype.toBase64()")}} und {{jsxref("Uint8Array.prototype.toHex()")}}, die eine base64- bzw. hex-codierte Zeichenfolge aus den Daten in einem `Uint8Array`-Objekt zurückgeben.

### APIs

- Die Eigenschaft [`WorkerNavigator.permissions`](/de/docs/Web/API/WorkerNavigator/permissions) wird jetzt unterstützt, sodass die [Permissions API](/de/docs/Web/API/Permissions_API) sowohl in [Workers](/de/docs/Web/API/Web_Workers_API) als auch im Hauptfenster-Thread verwendet werden kann. ([Firefox-Bug 1193373](https://bugzil.la/1193373)).
- Das Interface [`EventSource`](/de/docs/Web/API/EventSource) zur Verarbeitung von [Server-Sent Events](/de/docs/Web/API/Server-sent_events) wird jetzt in [Service Workern](/de/docs/Web/API/Service_Worker_API) unterstützt. ([Firefox-Bug 1681218](https://bugzil.la/1681218)).
- Die Schnittstellen [`ImageDecoder`](/de/docs/Web/API/ImageDecoder), [`ImageTrackList`](/de/docs/Web/API/ImageTrackList) und [`ImageTrack`](/de/docs/Web/API/ImageTrack) des [WebCodecs API](/de/docs/Web/API/WebCodecs_API) werden jetzt unterstützt, was das Dekodieren von Bildern im Haupt- und Worker-Thread ermöglicht. ([Firefox-Bug 1923755](https://bugzil.la/1923755)).
- Die Ereignisse [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle werden jetzt an {{HTMLElement("dialog")}}-Elementen unmittelbar vor und nach dem Anzeigen oder Verbergen ausgelöst. Das `beforetoggle`-Ereignis kann beispielsweise verwendet werden, um Klassen anzuwenden/zu entfernen, die die Animation eines Dialogs steuern, oder um den Zustand eines Dialogformulars vor dem Anzeigen zurückzusetzen. Das `toggle`-Ereignis kann verwendet werden, um eine Änderungsbenachrichtigung des offenen Zustands zu erhalten, was sonst einen [`MutationObserver`](/de/docs/Web/API/MutationObserver) erfordern würde. ([Firefox-Bug 1876762](https://bugzil.la/1876762)).
- Die Initialisierungsoption [`keepalive`](/de/docs/Web/API/RequestInit#keepalive) für die globale Methode [`fetch()`](/de/docs/Web/API/Window/fetch) und den [`Request()`-Konstruktor](/de/docs/Web/API/Request/Request#options) wird jetzt unterstützt, zusammen mit der Eigenschaft [`Request.keepalive`](/de/docs/Web/API/Request/keepalive). `keepalive` kann auf `true` gesetzt werden, um zu verhindern, dass der Browser die zugehörige Anfrage abbricht, wenn die Seite, die sie initiiert hat, vor Abschluss der Anfrage entladen wird. Dies kann beispielsweise verwendet werden, um Analysen am Ende einer Sitzung zu senden, selbst wenn der Benutzer die Seite verlässt oder schließt.

  Die Verwendung von `fetch()` mit `keepalive` hat einige Vorteile gegenüber der Verwendung von [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) für denselben Zweck, wie z.B. die Verwendung von HTTP-Methoden außer [`POST`](/de/docs/Web/HTTP/Methods/POST), anpassbare Anforderungseigenschaften und Zugriff auf die Serverantwort über die Erfüllung des fetch-{{jsxref("Promise")}}. Es ist auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verfügbar. ([Firefox-Bug 1906952](https://bugzil.la/1906952), [Firefox-Bug 1923044](https://bugzil.la/1923044)).

- Das Inhaltsattribut [`onwaitingforkey`](/de/docs/Web/API/HTMLMediaElement/waitingforkey_event) kann jetzt auf {{htmlelement("audio")}}/{{htmlelement("video")}}-Elementen angegeben werden, um einen Inline-Ereignishandler für das `waitingforkey`-Ereignis festzulegen. ([Firefox-Bug 1925952](https://bugzil.la/1925952)).
- [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) ist jetzt in allen Worker-Kontexten über [`WorkerNavigator.serviceWorker`](/de/docs/Web/API/WorkerNavigator/serviceWorker) verfügbar, sodass Worker die [Service Worker-Registrierungen](/de/docs/Web/API/ServiceWorkerRegistration) überwachen und verwalten können, die mit dem aktuellen Ursprung verbunden sind. Zuvor war `ServiceWorkerContainer` nur im Haupt-Thread über [`Navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) verfügbar. ([Firefox-Bug 1113522](https://bugzil.la/1113522)).
- Die [`name`](/de/docs/Web/API/PerformanceNavigationTiming#performanceentry.name)-Eigenschaft von `PerformanceNavigationTiming` lässt jetzt [Textfragmente](/de/docs/Web/URI/Fragment/Text_fragments) aus der zurückgegebenen URL weg, entsprechend der Spezifikation. Diese Art von [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Objekt wird von [`Performance.getEntries()`](/de/docs/Web/API/Performance/getEntries) für Einträge mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `navigation` zurückgegeben. ([Firefox-Bug 1919565](https://bugzil.la/1919565)).

#### Entfernungen

- Das Argument [`options.shadowRoots`](/de/docs/Web/API/Document/caretPositionFromPoint#shadowroots) zum Übergeben von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekten an die Methode [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) wurde aus der Veröffentlichung zurückgezogen. Diese Funktion kann in der Nightly-Version getestet werden und soll in Zukunft wiederveröffentlicht werden. ([Firefox-Bug 1914596](https://bugzil.la/1914596)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für das `url`-Argument für den `network.continueRequest`-Befehl hinzugefügt, um Anfragen transparent zu einer anderen URL umzuleiten ([Firefox-Bug 1898158](https://bugzil.la/1898158)).
- Aktualisiert `browsingContext.print`, um einen `InvalidArgumentError` zu werfen, wenn es mit falschen Abmessungen verwendet wird ([Firefox-Bug 1886382](https://bugzil.la/1886382)).
- Behoben `script.evaluate` und `script.callFunction`, um die Verwendung von `document.open` in Sandbox-Bereichen zu erlauben ([Firefox-Bug 1918288](https://bugzil.la/1918288)).
- Ein Fehler behoben, bei dem das `browsingContext.load`-Ereignis die falsche Navigations-ID enthalten könnte, wenn eine gleichseitige Navigierung während der Hauptnavigation auftrat ([Firefox-Bug 1922327](https://bugzil.la/1922327)).
- Ein weiterer Sonderfall wurde behoben, bei dem Befehle aufgrund von Navigation mit einem `UnknownError` fehlschlagen könnten ([Firefox-Bug 1923899](https://bugzil.la/1923899)).

#### Marionette

- Marionette wurde aktualisiert, um die Fensterpositionierung unter Linux mit Wayland besser zu handhaben ([Firefox-Bug 1857571](https://bugzil.la/1857571)).
- Ein Fehler wurde behoben, der ein leeres `style`-Attribut auf einem Element hinterlassen könnte, wenn versucht wurde, es zu klicken oder zu löschen ([Firefox-Bug 1922709](https://bugzil.la/1922709)).
- Die Fehlermeldung für `UnexpectedAlertOpen`-Fehler wurde aktualisiert, um den Text der entsprechenden Warnung einzuschließen ([Firefox-Bug 1924469](https://bugzil.la/1924469)).

## Änderungen für Add-On-Entwickler

- {{WebExtAPIRef("cookies.get")}} ordnet jetzt Cookies gemäß der [Abschnitt 5.4 Der Cookie Header der HTTP State Management Mechanism (RFC 6265)](https://datatracker.ietf.org/doc/html/rfc6265#section-5.4). Dies wirkt sich auf die Aufrufergebnisse aus, wenn ein Cookie Varianten mit unterschiedlichen Pfadkomponenten hat. Zuvor wurde das zuerst erstellte Cookie von {{WebExtAPIRef("cookies.get")}}, {{WebExtAPIRef("cookies.remove")}}, {{WebExtAPIRef("cookies.set")}} und {{WebExtAPIRef("cookies.getAll")}} gefunden. Nach dieser Änderung wird das Cookie mit dem längsten übereinstimmenden Pfad zurückgegeben. ([Firefox-Bug 1798655](https://bugzil.la/1798655))
- Behoben wurde ein Fehler in der {{WebExtAPIRef("declarativeNetRequest")}}-API, der die Registierung von Regeln nach einem Neustart des Browsers verhinderte ([Firefox-Bug 1921353](https://bugzil.la/1921353)). Dieser Fehler betraf Erweiterungen, die sich auf {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules")}} oder {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets")}} verlassen. Dieser Fix wurde auch an Firefox ESR 128.5 und Firefox ESR 115.18 zurückportiert.

## Experimentelle Webfeatures

Diese Funktionen sind neu in Firefox 133, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **contenteditable plaintext-only Wert:** `dom.element.contenteditable.plaintext-only.enabled`.

  Der `plaintext-only`-Wert des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) zeigt an, dass das Element bearbeitbar ist; die Formatierung von Rich-Text ist deaktiviert und jegliche Formatierung in eingefügtem Text wird automatisch entfernt. ([Firefox-Bug 1922723](https://bugzil.la/1922723).)

- **:has-slotted CSS-Pseudoklasse:** `layout.css.has-slotted-selector.enabled`.

  Die {{CSSXRef(":has-slotted")}} [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wird verwendet, um Elemente in {{HTMLElement("template")}} zu stylen, die beim Rendern eines [Webkomponenten](/de/docs/Web/API/Web_components) Inhalts zu einem {{HTMLElement("slot")}}-Element hinzugefügt haben. ([Firefox-Bug 1921747](https://bugzil.la/1921747).)

## Ältere Versionen

{{Firefox_for_developers}}
