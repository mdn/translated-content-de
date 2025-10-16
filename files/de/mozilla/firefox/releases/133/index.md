---
title: Firefox 133 Versionshinweise für Entwickler
short-title: Firefox 133
slug: Mozilla/Firefox/Releases/133
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 133, die Entwickler betreffen. Firefox 133 wurde am [26. November 2024](https://whattrainisitnow.com/release/?version=133) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`viewport <meta>`-Tag](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) unterstützt nun das Attribut [`interactive-widget`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport#the_effect_of_interactive_ui_widgets). Dieses beeinflusst die Größe des Viewports, wenn häufig verwendete UI-Widgets, wie virtuelle Tastaturen, dem Bildschirm hinzugefügt werden. ([Firefox Bug 1831649](https://bugzil.la/1831649) und [Firefox Bug 1920755](https://bugzil.la/1920755)).

### CSS

Keine bemerkenswerten Änderungen

### JavaScript

- Unterstützung für {{jsxref("Uint8Array")}}-Methoden, um Konvertierungen zwischen {{Glossary("base64", "base64")}}- und hex-kodierten Strings und Byte-Arrays zu erleichtern. ([Firefox Bug 1917885](https://bugzil.la/1917885) und [Firefox Bug 1862220](https://bugzil.la/1862220)).

  Die neuen Methoden umfassen:
  - Die statischen Methoden {{jsxref("Uint8Array.fromBase64()")}} und {{jsxref("Uint8Array.fromHex()")}}, um ein neues `Uint8Array`-Objekt aus einem base64- oder hex-kodierten String zu erstellen.
  - Die Instanzmethoden {{jsxref("Uint8Array.prototype.setFromBase64()")}} und {{jsxref("Uint8Array.prototype.setFromHex()")}}, um ein bestehendes `Uint8Array`-Objekt mit Bytes aus einem base64- oder hex-kodierten String zu befüllen.
  - Die Instanzmethoden {{jsxref("Uint8Array.prototype.toBase64()")}} und {{jsxref("Uint8Array.prototype.toHex()")}}, die einen base64- oder hex-kodierten String aus den Daten in einem `Uint8Array`-Objekt zurückgeben.

### APIs

- Die Eigenschaft [`WorkerNavigator.permissions`](/de/docs/Web/API/WorkerNavigator/permissions) wird nun unterstützt, sodass die [Permissions API](/de/docs/Web/API/Permissions_API) sowohl in [Workers](/de/docs/Web/API/Web_Workers_API) als auch im Hauptfenster-Thread verwendet werden kann. ([Firefox Bug 1193373](https://bugzil.la/1193373)).
- Die [`EventSource`](/de/docs/Web/API/EventSource)-Schnittstelle zur Verarbeitung von [server-sent events](/de/docs/Web/API/Server-sent_events) wird nun in [Service-Workern](/de/docs/Web/API/Service_Worker_API) unterstützt. ([Firefox Bug 1681218](https://bugzil.la/1681218)).
- Die Schnittstellen [`ImageDecoder`](/de/docs/Web/API/ImageDecoder), [`ImageTrackList`](/de/docs/Web/API/ImageTrackList) und [`ImageTrack`](/de/docs/Web/API/ImageTrack) der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) werden nun unterstützt, um das Dekodieren von Bildern aus dem Haupt- und Worker-Thread zu ermöglichen. ([Firefox Bug 1923755](https://bugzil.la/1923755)).
- Die Ereignisse [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle werden nun für {{HTMLElement("dialog")}}-Elemente unmittelbar vor und nach deren Anzeige oder Ausblendung ausgelöst. Das `beforetoggle`-Ereignis kann beispielsweise verwendet werden, um Klassen anzuwenden/zu entfernen, die die Animation eines Dialogs steuern, oder um den Zustand eines Dialogformulars vor dessen Anzeige zurückzusetzen. Das `toggle`-Ereignis kann verwendet werden, um Benachrichtigungen über den Änderungszustand des offenen Zustands zu erhalten, was ansonsten einen [`MutationObserver`](/de/docs/Web/API/MutationObserver) erfordert. ([Firefox Bug 1876762](https://bugzil.la/1876762)).
- Die Initialisierungsoption [`keepalive`](/de/docs/Web/API/RequestInit#keepalive) für die globale [`fetch()`](/de/docs/Web/API/Window/fetch)-Methode und den [`Request()`-Konstruktor](/de/docs/Web/API/Request/Request#options) wird nun unterstützt, zusammen mit der Eigenschaft [`Request.keepalive`](/de/docs/Web/API/Request/keepalive). `keepalive` kann auf `true` gesetzt werden, um zu verhindern, dass der Browser die zugehörige Anfrage abbricht, wenn die Seite, die sie initiiert hat, entladen wird, bevor die Anfrage abgeschlossen ist. Dies kann beispielsweise verwendet werden, um Analysen am Ende einer Sitzung zu senden, auch wenn der Benutzer die Seite verlässt oder schließt.

  Die Verwendung von `fetch()` mit `keepalive` hat einige Vorteile gegenüber dem Einsatz von [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) für denselben Zweck, wie die Verwendung von HTTP-Methoden außer [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST), anpassbaren Anfrageeigenschaften und den Zugriff auf die Serverantwort über das `fetch` {{jsxref("Promise")}}-Erfüllungsversprechen. Es ist auch in [Service-Workern](/de/docs/Web/API/Service_Worker_API) verfügbar. ([Firefox Bug 1906952](https://bugzil.la/1906952), [Firefox Bug 1923044](https://bugzil.la/1923044)).

- Das Inhaltsattribut [`onwaitingforkey`](/de/docs/Web/API/HTMLMediaElement/waitingforkey_event) kann nun auf {{htmlelement("audio")}}/{{htmlelement("video")}}-Elementen angegeben werden, um einen Inline-Ereignishandler für das `waitingforkey`-Ereignis festzulegen. ([Firefox Bug 1925952](https://bugzil.la/1925952)).
- [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) ist nun in allen Worker-Kontexten über [`WorkerNavigator.serviceWorker`](/de/docs/Web/API/WorkerNavigator/serviceWorker) verfügbar, sodass Worker die mit dem aktuellen Ursprung verbundenen [Service Worker-Registrierungen](/de/docs/Web/API/ServiceWorkerRegistration) inspizieren und verwalten können. Bisher war `ServiceWorkerContainer` nur im Haupt-Thread über [`Navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) zugänglich. ([Firefox Bug 1113522](https://bugzil.la/1113522)).
- Die Eigenschaft [`name`](/de/docs/Web/API/PerformanceNavigationTiming#performanceentry.name) von `PerformanceNavigationTiming` lässt nun [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) aus der zurückgegebenen URL weg, entsprechend der Spezifikation. Diese Art von [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Objekt wird von [`Performance.getEntries()`](/de/docs/Web/API/Performance/getEntries) für Einträge mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `navigation` zurückgegeben. ([Firefox Bug 1919565](https://bugzil.la/1919565)).

#### Entfernung

- Das Argument [`options.shadowRoots`](/de/docs/Web/API/Document/caretPositionFromPoint#shadowroots) zum Übergeben von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekten an die Methode [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) wurde aus der Veröffentlichung zurückgezogen. Die Funktion kann im Nightly-Release getestet werden und wird voraussichtlich in Zukunft neu veröffentlicht. ([Firefox Bug 1914596](https://bugzil.la/1914596)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für das `url`-Argument für den `network.continueRequest`-Befehl hinzugefügt, der es ermöglicht, Anfragen transparent an eine andere URL umzuleiten ([Firefox Bug 1898158](https://bugzil.la/1898158)).
- `browsingContext.print` aktualisiert, um bei Verwendung mit falschen Dimensionen einen `InvalidArgumentError` auszulösen ([Firefox Bug 1886382](https://bugzil.la/1886382)).
- Fehler bei `script.evaluate` und `script.callFunction` behoben, um die Verwendung von `document.open` in Sandbox-Bereichen zu ermöglichen ([Firefox Bug 1918288](https://bugzil.la/1918288)).
- Ein Fehler behoben, bei dem das `browsingContext.load`-Ereignis die falsche Navigations-ID enthalten könnte, wenn während der Hauptnavigation eine gleichseitige Dokumentnavigation erfolgte ([Firefox Bug 1922327](https://bugzil.la/1922327)).
- Ein weiterer Edge-Case behoben, bei dem Befehle aufgrund von Navigation mit einem `UnknownError` fehlschlagen konnten ([Firefox Bug 1923899](https://bugzil.la/1923899)).

#### Marionette

- Marionette aktualisiert, um die Fensterpositionierung unter Linux mit Wayland besser zu handhaben ([Firefox Bug 1857571](https://bugzil.la/1857571)).
- Ein Fehler behoben, der ein leeres `style`-Attribut an einem Element hinterlassen konnte, wenn versucht wurde, darauf zu klicken oder es zu löschen ([Firefox Bug 1922709](https://bugzil.la/1922709)).
- Die Fehlermeldung für `UnexpectedAlertOpen`-Fehler aktualisiert, um den Text der entsprechenden Warnung einzuschließen ([Firefox Bug 1924469](https://bugzil.la/1924469)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("cookies.get")}} ordnet jetzt Cookies gemäß Abschnitt 5.4 Der Cookie-Header des HTTP State Management Mechanism (RFC 6265)](https://datatracker.ietf.org/doc/html/rfc6265#section-5.4). Dies hat Auswirkungen auf die Aufrufergebnisse, wenn ein Cookie Varianten mit unterschiedlichen Pfadkomponenten hat. Bisher wurde das am frühesten erstellte Cookie von {{WebExtAPIRef("cookies.get")}}, {{WebExtAPIRef("cookies.remove")}}, {{WebExtAPIRef("cookies.set")}} und {{WebExtAPIRef("cookies.getAll")}} abgeglichen. Nach dieser Änderung wird das Cookie mit dem längsten übereinstimmenden Pfad zurückgegeben. ([Firefox Bug 1798655](https://bugzil.la/1798655))
- Ein Fehler im {{WebExtAPIRef("declarativeNetRequest")}}-API behoben, der die Registrierung von Regeln nach einem Browser-Neustart verhinderte ([Firefox Bug 1921353](https://bugzil.la/1921353)). Dieser Fehler betraf Erweiterungen, die sich auf {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules")}} oder {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets")}} verlassen. Dieser Fix wurde auch auf Firefox ESR 128.5 und Firefox ESR 115.18 zurückportiert.
- Ein Fehler behoben, der das Schließen eines [Sidebars](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars) verhinderte, wenn [`window.close()`](/de/docs/Web/API/Window/close) von dort aufgerufen wurde.

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 133 enthalten, jedoch standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config`-Seite und setzen Sie diese auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **contenteditable-Plaintext-only-Wert:** `dom.element.contenteditable.plaintext-only.enabled`.

  Der `plaintext-only`-Wert des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) zeigt an, dass das Element bearbeitbar ist; Rich-Text-Formatierung ist deaktiviert und jede Formatierung in eingefügtem Text wird automatisch entfernt. ([Firefox Bug 1922723](https://bugzil.la/1922723).)

- **:has-slotted CSS-Pseudoklasse:** `layout.css.has-slotted-selector.enabled`.

  Die {{CSSXRef(":has-slotted")}} [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wird verwendet, um Elemente im {{HTMLElement("template")}} zu stylen, die Inhalt in einem {{HTMLElement("slot")}}-Element haben, wenn ein [Web-Komponente](/de/docs/Web/API/Web_components) gerendert wird. ([Firefox Bug 1921747](https://bugzil.la/1921747).)
