---
title: Firefox 133 für Entwickler
slug: Mozilla/Firefox/Releases/133
l10n:
  sourceCommit: c73ba3bad7eae7988b16a4bbadcd3c3d64b3e954
---

{{FirefoxSidebar}}

Dieser Artikel enthält Informationen über die Änderungen in Firefox 133, die Entwickler betreffen. Firefox 133 wurde am [26. November 2024](https://whattrainisitnow.com/release/?version=133) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Der [`viewport <meta>` Tag](/de/docs/Web/HTML/Viewport_meta_tag) unterstützt jetzt das [`interactive-widget`](/de/docs/Web/HTML/Viewport_meta_tag#the_effect_of_interactive_ui_widgets) Attribut, welches die Größe des Viewports beeinflusst, wenn gängige UI-Widgets wie virtuelle Tastaturen dem Bildschirm hinzugefügt werden. ([Firefox Fehler 1831649](https://bugzil.la/1831649) und [Firefox Fehler 1920755](https://bugzil.la/1920755)).

### CSS

Keine bemerkenswerten Änderungen

### JavaScript

- Unterstützung für {{jsxref("Uint8Array")}} Methoden zur Vereinfachung von Konvertierungen zwischen {{Glossary("base64", "base64")}}- und hex-codierten Zeichenfolgen sowie Byte-Arrays. ([Firefox Fehler 1917885](https://bugzil.la/1917885) und [Firefox Fehler 1862220](https://bugzil.la/1862220)).

  Die neuen Methoden umfassen:

  - {{jsxref("Uint8Array.fromBase64()")}} und {{jsxref("Uint8Array.fromHex()")}} statische Methoden zum Erstellen eines neuen `Uint8Array`-Objekts aus einem base64- bzw. hex-codierten String.
  - {{jsxref("Uint8Array.prototype.setFromBase64()")}} und {{jsxref("Uint8Array.prototype.setFromHex()")}} Instanzmethoden zum Befüllen eines bestehenden `Uint8Array`-Objekts mit Bytes aus einem base64- oder hex-codierten String.
  - {{jsxref("Uint8Array.prototype.toBase64()")}} und {{jsxref("Uint8Array.prototype.toHex()")}} Instanzmethoden, die einen base64- oder hex-codierten String aus den Daten in einem `Uint8Array`-Objekt zurückgeben.

### APIs

- Die [`WorkerNavigator.permissions`](/de/docs/Web/API/WorkerNavigator/permissions) Eigenschaft wird nun unterstützt, was es ermöglicht, die [Permissions API](/de/docs/Web/API/Permissions_API) sowohl in [Workern](/de/docs/Web/API/Web_Workers_API) als auch im Hauptfenster-Thread zu verwenden. ([Firefox Fehler 1193373](https://bugzil.la/1193373)).
- Die [`EventSource`](/de/docs/Web/API/EventSource) Schnittstelle zur Verarbeitung von [servergesendeten Ereignissen](/de/docs/Web/API/Server-sent_events) wird jetzt in [Service Workern](/de/docs/Web/API/Service_Worker_API) unterstützt. ([Firefox Fehler 1681218](https://bugzil.la/1681218)).
- Die [`ImageDecoder`](/de/docs/Web/API/ImageDecoder), [`ImageTrackList`](/de/docs/Web/API/ImageTrackList) und [`ImageTrack`](/de/docs/Web/API/ImageTrack) Schnittstellen der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) werden nun unterstützt, was die Dekodierung von Bildern sowohl vom Haupt- als auch vom Worker-Thread ermöglicht. ([Firefox Fehler 1923755](https://bugzil.la/1923755)).
- Die [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) Ereignisse der [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle werden nun bei {{HTMLElement("dialog")}} Elementen unmittelbar vor und nach dem Anzeigen oder Ausblenden ausgelöst. Das `beforetoggle` kann beispielsweise verwendet werden, um Klassen anzuwenden/zu entfernen, die die Animation eines Dialogs steuern, oder um den Zustand eines Dialogformulars zurückzusetzen, bevor es angezeigt wird. Das `toggle` Ereignis kann genutzt werden, um Benachrichtigungen über den offenen Zustand zu erhalten, was sonst einen [`MutationObserver`](/de/docs/Web/API/MutationObserver) erfordern würde. ([Firefox Fehler 1876762](https://bugzil.la/1876762)).
- Die [`keepalive`](/de/docs/Web/API/RequestInit#keepalive) Initialisierungsoption für die globale [`fetch()`](/de/docs/Web/API/Window/fetch) Methode und den [`Request()` Konstruktor](/de/docs/Web/API/Request/Request#options) wird jetzt unterstützt, zusammen mit der [`Request.keepalive`](/de/docs/Web/API/Request/keepalive) Eigenschaft. `keepalive` kann auf `true` gesetzt werden, um zu verhindern, dass der Browser die zugehörige Anfrage abbricht, wenn die Seite, die sie ausgelöst hat, entladen wird, bevor die Anfrage abgeschlossen ist.
  Dies könnte beispielsweise genutzt werden, um am Ende einer Sitzung Analysen zu senden, selbst wenn der Benutzer die Seite verlässt oder schließt.

  Die Verwendung von `fetch()` mit `keepalive` bietet einige Vorteile gegenüber der Verwendung von [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) für denselben Zweck, wie das Zulassen der Verwendung anderer HTTP-Methoden als [`POST`](/de/docs/Web/HTTP/Methods/POST), anpassbare Anfrageeigenschaften und Zugriff auf die Serverantwort über die `fetch`-{{jsxref("Promise")}}-Erfüllung. Es ist auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verfügbar. ([Firefox Fehler 1906952](https://bugzil.la/1906952), [Firefox Fehler 1923044](https://bugzil.la/1923044)).

- Das [`onwaitingforkey`](/de/docs/Web/API/HTMLMediaElement/waitingforkey_event) Inhaltsattribut kann jetzt auf {{htmlelement("audio")}}/{{htmlelement("video")}} Elementen angegeben werden, um einen Inline-Ereignishandler für das `waitingforkey` Ereignis zu setzen. ([Firefox Fehler 1925952](https://bugzil.la/1925952)).
- [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) wird nun in allen Worker-Kontexten über [`WorkerNavigator.serviceWorker`](/de/docs/Web/API/WorkerNavigator/serviceWorker) bereitgestellt, sodass Worker die [Service-Worker-Registrierungen](/de/docs/Web/API/ServiceWorkerRegistration) inspizieren und verwalten können, die mit dem aktuellen Ursprung verbunden sind. Zuvor war `ServiceWorkerContainer` nur im Hauptthread über [`Navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) verfügbar. ([Firefox Fehler 1113522](https://bugzil.la/1113522)).
- Die [`name`](/de/docs/Web/API/PerformanceNavigationTiming#performanceentry.name) Eigenschaft von `PerformanceNavigationTiming` lässt jetzt [Textfragmente](/de/docs/Web/URI/Fragment/Text_fragments) aus der zurückgegebenen URL aus, was der Spezifikation entspricht. Diese Art von [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Objekt wird von [`Performance.getEntries()`](/de/docs/Web/API/Performance/getEntries) für Einträge mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `navigation` zurückgegeben. ([Firefox Fehler 1919565](https://bugzil.la/1919565)).

#### Entfernungen

- Das [`options.shadowRoots`](/de/docs/Web/API/Document/caretPositionFromPoint#shadowroots) Argument für die Übergabe von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Objekten an die [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) Methode wurde aus der Veröffentlichung zurückgezogen.
  Das Feature kann in der Nightly-Version getestet werden und wird voraussichtlich in Zukunft erneut veröffentlicht. ([Firefox Fehler 1914596](https://bugzil.la/1914596)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für das `url` Argument für den `network.continueRequest` Befehl hinzugefügt, welches es ermöglicht, Anfragen transparent zu einer anderen URL umzuleiten ([Firefox Fehler 1898158](https://bugzil.la/1898158)).
- `browsingContext.print` wurde aktualisiert, um einen `InvalidArgumentError` zu werfen, wenn es mit falschen Abmessungen verwendet wird ([Firefox Fehler 1886382](https://bugzil.la/1886382)).
- `script.evaluate` und `script.callFunction` wurden korrigiert, um die Verwendung von `document.open` in Sandbox-Reichen zu ermöglichen ([Firefox Fehler 1918288](https://bugzil.la/1918288)).
- Ein Fehler wurde behoben, bei dem das `browsingContext.load` Ereignis möglicherweise die falsche Navigations-ID enthielt, wenn während der Hauptnavigation eine gleiche Dokumentnavigation auftrat ([Firefox Fehler 1922327](https://bugzil.la/1922327)).
- Ein weiterer Randfall wurde behoben, bei dem Befehle aufgrund von Navigation mit einem `UnknownError` fehlschlagen konnten ([Firefox Fehler 1923899](https://bugzil.la/1923899)).

#### Marionette

- Marionette wurde aktualisiert, um das Positionieren von Fenstern unter Linux mit Wayland besser zu handhaben ([Firefox Fehler 1857571](https://bugzil.la/1857571)).
- Ein Fehler wurde behoben, der ein leeres `style` Attribut auf einem Element hinterlassen konnte, wenn versucht wurde, darauf zu klicken oder es zu löschen ([Firefox Fehler 1922709](https://bugzil.la/1922709)).
- Die Fehlermeldung, die für `UnexpectedAlertOpen` Fehler gesendet wird, wurde aktualisiert, um den Text der entsprechenden Warnung einzuschließen ([Firefox Fehler 1924469](https://bugzil.la/1924469)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("cookies.get")}} ordnet nun Cookies gemäß dem [Abschnitt 5.4 Der Cookie-Header des HTTP State Management Mechanism (RFC 6265)](https://datatracker.ietf.org/doc/html/rfc6265#section-5.4). Dies beeinflusst die Ergebnisse der Aufrufe, wenn ein Cookie Varianten mit verschiedenen Pfadkomponenten hat. Zuvor wurde das zuerst erstellte Cookie von {{WebExtAPIRef("cookies.get")}}, {{WebExtAPIRef("cookies.remove")}}, {{WebExtAPIRef("cookies.set")}} und {{WebExtAPIRef("cookies.getAll")}} gefunden. Nach dieser Änderung wird das Cookie mit dem am längsten übereinstimmenden Pfad zurückgegeben. ([Firefox Fehler 1798655](https://bugzil.la/1798655))
- Ein Fehler in der {{WebExtAPIRef("declarativeNetRequest")}} API wurde behoben, der die Registrierung von Regeln nach einem Browser-Neustart verhinderte ([Firefox Fehler 1921353](https://bugzil.la/1921353)). Dieser Fehler betraf Erweiterungen, die sich auf {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules")}} oder {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets")}} verlassen. Dieser Fix wurde auch in Firefox ESR 128.5 und Firefox ESR 115.18 zurückportiert.
- Ein Fehler wurde behoben, der verhinderte, dass [`window.close()`](/de/docs/Web/API/Window/close) aus einer [Sidebar](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars) aufgerufen werden konnte, um die Sidebar zu schließen.

## Experimentelle Web-Features

Diese Features sind neu in Firefox 133, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie die entsprechende Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`. Weitere solcher Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **contenteditable plaintext-only Wert:** `dom.element.contenteditable.plaintext-only.enabled`.

  Der `plaintext-only` Wert des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) zeigt an, dass das Element bearbeitbar ist; Rich-Text-Formatierungen sind deaktiviert und jegliche Formatierungen im eingefügten Text werden automatisch entfernt. ([Firefox Fehler 1922723](https://bugzil.la/1922723).)

- **:has-slotted CSS Pseudo-Klasse:** `layout.css.has-slotted-selector.enabled`.

  Die {{CSSXRef(":has-slotted")}} [Pseudo-Klasse](/de/docs/Web/CSS/Pseudo-classes) wird verwendet, um Elemente in {{HTMLElement("template")}} zu stylen, die Inhalt haben, der einem {{HTMLElement("slot")}}-Element hinzugefügt wird, wenn eine [Web-Komponente](/de/docs/Web/API/Web_components) gerendert wird. ([Firefox Fehler 1921747](https://bugzil.la/1921747).)

## Ältere Versionen

{{Firefox_for_developers}}
