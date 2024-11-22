---
title: Firefox 133 für Entwickler
slug: Mozilla/Firefox/Releases/133
l10n:
  sourceCommit: c63713c66a2c671b52edca37691f50293a542fad
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 133, die Entwickler betreffen. Firefox 133 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [26. November 2024](https://whattrainisitnow.com/release/?version=133) veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

### HTML

#### Entfernungen

### CSS

#### Entfernungen

### JavaScript

- Unterstützung für `Uint8Array`-Methoden, um Konvertierungen zwischen {{Glossary("base64", "base64")}}- und hex-codierten Zeichenfolgen und Byte-Arrays zu erleichtern. ([Firefox Fehler 1917885](https://bugzil.la/1917885) und [Firefox Fehler 1862220](https://bugzil.la/1862220)).

  Die neuen Methoden umfassen:

  - `Uint8Array.fromBase64()` und `Uint8Array.fromHex()` statische Methoden zum Erstellen eines neuen `Uint8Array`-Objekts aus einer base64- bzw. hex-codierten Zeichenfolge.
  - `Uint8Array.prototype.setFromBase64()`, und `Uint8Array.prototype.setFromHex()` Instanzmethoden zum Auffüllen eines vorhandenen `Uint8Array`-Objekts mit Bytes aus einer base64- oder hex-codierten Zeichenfolge.
  - `Uint8Array.prototype.toBase64()` und `Uint8Array.prototype.toHex()` Instanzmethoden, die eine base64- bzw. hex-codierte Zeichenfolge aus den Daten in einem `Uint8Array`-Objekt zurückgeben.

#### Entfernungen

### SVG

#### Entfernungen

### HTTP

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

- Die [`WorkerNavigator.permissions`](/de/docs/Web/API/WorkerNavigator/permissions) Eigenschaft wird jetzt unterstützt, was es ermöglicht, die [Permissions API](/de/docs/Web/API/Permissions_API) sowohl in [Workern](/de/docs/Web/API/Web_Workers_API) als auch im Hauptfenster-Thread zu verwenden. ([Firefox Fehler 1193373](https://bugzil.la/1193373)).
- Die [`EventSource`](/de/docs/Web/API/EventSource) Schnittstelle zur Verarbeitung von [servergesendeten Ereignissen](/de/docs/Web/API/Server-sent_events) wird jetzt in [Service Workern](/de/docs/Web/API/Service_Worker_API) unterstützt. ([Firefox Fehler 1681218](https://bugzil.la/1681218)).
- Die [`ImageDecoder`](/de/docs/Web/API/ImageDecoder), [`ImageTrackList`](/de/docs/Web/API/ImageTrackList), und [`ImageTrack`](/de/docs/Web/API/ImageTrack) Schnittstellen des [WebCodecs API](/de/docs/Web/API/WebCodecs_API) werden jetzt unterstützt, was das Dekodieren von Bildern aus dem Haupt- und Worker-Thread ermöglicht. ([Firefox Fehler 1923755](https://bugzil.la/1923755)).
- Die [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) Ereignisse der [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle werden jetzt an {{HTMLElement("dialog")}}-Elementen unmittelbar vor und nach deren Anzeige oder Ausblenden ausgelöst. Das `beforetoggle`-Ereignis kann beispielsweise verwendet werden, um Klassen zu entfernen oder hinzuzufügen, die die Animation eines Dialogs steuern, oder um den Zustand eines Dialogformulars zurückzusetzen, bevor es angezeigt wird. Das `toggle`-Ereignis kann verwendet werden, um Benachrichtigungen über den offenen Zustand zu erhalten, wozu sonst ein [`MutationObserver`](/de/docs/Web/API/MutationObserver) erforderlich wäre. ([Firefox Fehler 1876762](https://bugzil.la/1876762)).
- Das [`onwaitingforkey`](/de/docs/Web/API/HTMLMediaElement/waitingforkey_event) Inhaltsattribut kann jetzt auf {{htmlelement("audio")}}/{{htmlelement("video")}}-Elementen spezifiziert werden, um einen Inline-Ereignishandler für das `waitingforkey`-Ereignis festzulegen. ([Firefox Fehler 1925952](https://bugzil.la/1925952)).
- [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) wird jetzt in allen Worker-Kontexten über [`WorkerNavigator.serviceWorker`](/de/docs/Web/API/WorkerNavigator/serviceWorker) bereitgestellt, wodurch es Workern möglich ist, die [Service-Worker-Registrierungen](/de/docs/Web/API/ServiceWorkerRegistration) der aktuellen Herkunft zu inspizieren und zu verwalten. Zuvor war `ServiceWorkerContainer` nur im Haupt-Thread über [`Navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) verfügbar. ([Firefox Fehler 1113522](https://bugzil.la/1113522)).

#### DOM

#### Medien, WebRTC und Web Audio

#### Entfernungen

### WebAssembly

#### Entfernungen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für das `url`-Argument für den `network.continueRequest`-Befehl hinzugefügt, sodass Anforderungen transparent zu einer anderen URL umgeleitet werden können ([Firefox Fehler 1898158](https://bugzil.la/1898158)).
- Aktualisierung von `browsingContext.print`, um einen `InvalidArgumentError` auszulösen, wenn es mit falschen Dimensionen verwendet wird ([Firefox Fehler 1886382](https://bugzil.la/1886382)).
- Beheben der `script.evaluate` und `script.callFunction`, um die Verwendung von `document.open` in Sandbox-Reichen zu erlauben ([Firefox Fehler 1918288](https://bugzil.la/1918288)).
- Fehlerbehebung, bei dem das `browsingContext.load`-Ereignis die falsche Navigations-ID enthalten konnte, wenn während der Hauptnavigation eine Navigation im gleichen Dokument stattfand ([Firefox Fehler 1922327](https://bugzil.la/1922327)).
- Behebung eines weiteren Randfalls, bei dem Befehle mit einem `UnknownError` wegen der Navigation fehlschlagen konnten ([Firefox Fehler 1923899](https://bugzil.la/1923899)).

#### Marionette

- Aktualisierung von Marionette zur besseren Handhabung der Fensterpositionierung auf Linux mit Wayland ([Firefox Fehler 1857571](https://bugzil.la/1857571)).
- Behebung eines Fehlers, der ein leeres `style`-Attribut auf einem Element hinterlassen konnte, wenn versucht wurde, es zu klicken oder zu löschen ([Firefox Fehler 1922709](https://bugzil.la/1922709)).
- Aktualisierung der Fehlermeldung, die bei `UnexpectedAlertOpen`-Fehlern gesendet wird, um den Text des entsprechenden Alerts einzuschließen ([Firefox Fehler 1924469](https://bugzil.la/1924469)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("cookies.get")}} ordnet jetzt Cookies gemäß dem Abschnitt [5.4 The Cookie Header des HTTP State Management Mechanism (RFC 6265)](https://datatracker.ietf.org/doc/html/rfc6265#section-5.4). Dies betrifft die Ergebnisse von Aufrufen, wenn ein Cookie Varianten mit unterschiedlichen Pfadkomponenten hat. Vorher wurde das früheste erstellte Cookie von {{WebExtAPIRef("cookies.get")}}, {{WebExtAPIRef("cookies.remove")}}, {{WebExtAPIRef("cookies.set")}}, und {{WebExtAPIRef("cookies.getAll")}} abgeglichen. Nach dieser Änderung wird das Cookie mit dem längsten übereinstimmenden Pfad zurückgegeben. ([Firefox Fehler 1798655](https://bugzil.la/1798655))
- Behebung eines Fehlers in der {{WebExtAPIRef("declarativeNetRequest")}} API, der die Registrierung von Regeln nach einem Neustart des Browsers verhinderte ([Firefox Fehler 1921353](https://bugzil.la/1921353)). Dieser Fehler betraf Erweiterungen, die auf {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules")}} oder {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets")}} angewiesen sind. Diese Korrektur wurde auch in Firefox ESR 128.5 und Firefox ESR 115.18 zurückportiert.

### Entfernungen

### Weitere Änderungen

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 133 ausgeliefert, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **contenteditable plaintext-only Wert:** `dom.element.contenteditable.plaintext-only.enabled`.

  Der `plaintext-only`-Wert des [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) globalen Attributs gibt an, dass das Element bearbeitbar ist; Rich-Text-Formatierung ist deaktiviert und jegliche Formatierung in eingefügtem Text wird automatisch entfernt. ([Firefox Fehler 1922723](https://bugzil.la/1922723).)

## Ältere Versionen

{{Firefox_for_developers}}
