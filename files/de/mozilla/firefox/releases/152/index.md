---
title: Firefox 152 Versionshinweise für Entwickler (Stabil)
short-title: Firefox 152 (Stabil)
slug: Mozilla/Firefox/Releases/152
l10n:
  sourceCommit: 97a6738de30dbb1072346dca78f24dca67da9eca
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 152, die Entwickler betreffen.
Firefox 152 wurde am [16. Juni 2026](https://whattrainisitnow.com/release/?version=152) veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

- Die Entwickler-Tools verfügen jetzt über eine Option "Kommentare anzeigen", um die Anzeige von HTML-Kommentarknoten im Inspektor umzuschalten.
  Diese Option ist im [Einstellungs-Panel](https://firefox-source-docs.mozilla.org/devtools-user/settings/index.html#settings-inspector) zu finden.
  ([Firefox-Bug 1455294](https://bugzil.la/1455294)).

### HTML

Keine bemerkenswerten Änderungen.

### SVG

- Die schreibgeschützte Eigenschaft [`SVGTextPathElement.side`](/de/docs/Web/API/SVGTextPathElement/side) wird jetzt unterstützt und gibt an, ob der Text auf der linken oder rechten Seite eines Textpfades gezeichnet wird.
  Dies spiegelt das entsprechende [`side`](/de/docs/Web/SVG/Reference/Attribute/side)-Attribut auf dem [`<textPath>`](/de/docs/Web/SVG/Reference/Element/textPath)-Element wider.
  ([Firefox-Bug 2034371](https://bugzil.la/2034371)).

### CSS

- Die {{cssxref("field-sizing")}} CSS-Eigenschaft ermöglicht die Kontrolle des Größenverhaltens von Formularsteuerelementen. Diese Eigenschaft hat zwei Werte: `content` erlaubt es, dass Elemente die Größe an ihren Inhalt anpassen, und `fixed` legt eine feste Größe auf Elemente fest.
  ([Firefox-Bug 2036620](https://bugzil.la/2036620)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- Die Eigenschaften [`firstInterimResponseStart`](/de/docs/Web/API/PerformanceResourceTiming/firstInterimResponseStart) und [`finalResponseHeadersStart`](/de/docs/Web/API/PerformanceResourceTiming/finalResponseHeadersStart) der Schnittstelle [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) werden unterstützt.
  Diese können verwendet werden, um zu messen, wie lange es dauert, bis der Browser vorübergehende HTTP-Antworten und die endgültige HTTP-Antwort nach dem Senden einer Anfrage erhält.
  ([Firefox-Bug 2006340](https://bugzil.la/2006340)).
- Die Eigenschaften [`AnimationEvent.animation`](/de/docs/Web/API/AnimationEvent/animation) und [`TransitionEvent.animation`](/de/docs/Web/API/TransitionEvent/animation) werden jetzt unterstützt.
  Diese bieten eine ergonomischere Möglichkeit, auf die zugehörige Animation zuzugreifen, als durch Aufrufen von [`element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) und Filtern nach dem `animationName` oder `propertyName` des Ereignisses.
  ([Firefox-Bug 1929118](https://bugzil.la/1929118)).

#### DOM

- Benachrichtigungsaktionen werden unterstützt. Dies beinhaltet den [`actions`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification#actions)-Parameter von [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification), sowie die schreibgeschützte [`actions`](/de/docs/Web/API/Notification/actions)-Eigenschaft und die statische, schreibgeschützte [`maxActions`](/de/docs/Web/API/Notification/maxActions_static)-Eigenschaft der [`Notification`](/de/docs/Web/API/Notification)-Schnittstelle.
  Dies ermöglicht es Ihnen, Aktionsschaltflächen auf Gerätbenachrichtigungen hinzuzufügen und auf deren Drücken zu reagieren.
  ([Firefox-Bug 1959931](https://bugzil.la/1959931)).
- Die Methode [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) kann nun den Parameter [`options.pseudoElement`](/de/docs/Web/API/Element/getAnimations#pseudoelement) akzeptieren.
  Dadurch können Sie direkt ein spezifisches Pseudo-Element anvisieren, anstatt die Ergebnisse von `{ subtree: true }` zu filtern.
  ([Firefox-Bug 1935557](https://bugzil.la/1935557)).
- Die Methode [`Element.requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock) unterstützt jetzt den Parameter [`options.unadjustedMovement`](/de/docs/Web/API/Element/requestPointerLock#unadjustedmovement).
  Dies erlaubt es dem Code, die Betriebssystem-Mausbeschleunigung zu deaktivieren und stattdessen rohe Mauseingaben zu verwenden, was in Fällen nützlich ist, in denen eine langsame und präzise Kontrolle über Mausbewegungen erforderlich ist.
  ([Firefox-Bug 2037802](https://bugzil.la/2037802)).

#### Medien, WebRTC und Web Audio

- Die `receiveTime`-Eigenschaft ist jetzt in den Metadaten enthalten, die von [`RTCEncodedVideoFrame.getMetadata()`](/de/docs/Web/API/RTCEncodedVideoFrame/getMetadata#receivetime) und [`RTCEncodedAudioFrame.getMetadata()`](/de/docs/Web/API/RTCEncodedAudioFrame/getMetadata#receivetime) zurückgegeben werden, und kann als Eigenschaft im `options`-Parameter an die Konstruktoren [`RTCEncodedVideoFrame()`](/de/docs/Web/API/RTCEncodedVideoFrame/RTCEncodedVideoFrame) und [`RTCEncodedAudioFrame()`](/de/docs/Web/API/RTCEncodedAudioFrame/RTCEncodedAudioFrame) übergeben werden.
  ([Firefox-Bug 2033420](https://bugzil.la/2033420)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Verbesserte die Screenshot-Befehle von Marionette und WebDriver BiDi, um die maximal zulässigen Dimensionen durchzusetzen. ([Firefox-Bug 2020302](https://bugzil.la/2020302)).

#### WebDriver BiDi

- Der `webExtension.install`-Befehl wurde erweitert, um die Installation von Web Extensions in Firefox im Modus "Privates Surfen" zu unterstützen. ([Firefox-Bug 1947679](https://bugzil.la/1947679)).
- Der `browser.setDownloadBehavior`-Befehl wurde verbessert, um das Überschreiben des Download-Zielordners zu ermöglichen, bevor die temporäre Datei erstellt wird. ([Firefox-Bug 2017252](https://bugzil.la/2017252)).
- Netzwerkevents wurden so angepasst, dass nur dann JavaScript-Antworten aus dem Zwischenspeicher weitergeleitet werden, wenn ein passender Netzwerk-Ereignissammler vorhanden ist, um unnötige Datenweiterleitungen zu vermeiden. ([Firefox-Bug 2018237](https://bugzil.la/2018237)).

#### Marionette

- Die `WebDriver:Navigate` und `WebDriver:Refresh`-Befehle wurden verbessert, um Fehler korrekt zu melden, wenn das Auslösen der Navigation fehlschlägt, anstatt diese stillschweigend zu ignorieren. ([Firefox-Bug 2033769](https://bugzil.la/2033769)).

## Änderungen für Add-On-Entwickler

- Die Fähigkeit von Erweiterungen, Code dynamisch in ihren `moz-extension:`-Dokumenten mit {{WebExtAPIRef("tabs.executeScript")}}, {{WebExtAPIRef("tabs.insertCSS")}}, {{WebExtAPIRef("tabs.removeCSS")}}, {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}}, und {{WebExtAPIRef("scripting.removeCSS")}} auszuführen, wurde entfernt. Diese Funktion wurde in Firefox 149 veraltet. ([Firefox-Bug 2015559](https://bugzil.la/2015559))

  Als Alternative kann eine Erweiterung Code in ihren Dokumenten dynamisch ausführen, indem sie einen {{WebExtAPIRef("runtime.onMessage")}}-Listener im Skript des Dokuments registriert und dann eine Nachricht sendet, um die Ausführung des erforderlichen Codes auszulösen.

## Experimentelle Web-Features

Diese Funktionen werden in Firefox 152 ausgeliefert, sind aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Integration von JavaScript Promises mit WebAssembly (JS-PI)**: `javascript.options.wasm_js_promise_integration`

  Die WebAssembly-[Integration von JavaScript Promises (JS-PI)](https://github.com/WebAssembly/js-promise-integration/blob/main/proposals/js-promise-integration/Overview.md) ermöglicht es WebAssembly-Modulen, mit asynchronen, {{jsxref("Promise")}}-basierten JavaScript-APIs zu interagieren. Dadurch können WebAssembly-Codes angehalten werden, während sie auf ein JavaScript-Versprechen warten, und wieder aufgenommen werden, wenn das Versprechen erfüllt wird.
  ([Firefox-Bug 2015877](https://bugzil.la/2015877)).

- **Überprüfen, ob eine Medienkodierungs-/Dekodierungskonfiguration für WebRTC unterstützt wird**: `media.mediacapabilities.webrtc.enabled`

  Der `webrtc`-Typ kann jetzt als Option für [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo#webrtc) und [`MediaCapabilities.encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo#webrtc) übergeben werden, um zu überprüfen, ob eine Kodierungs-/Dekodierungskonfiguration für WebRTC verwendet werden kann.
  Dies ersetzt den nicht standardmäßigen [`transmission`](/de/docs/Web/API/MediaCapabilities/encodingInfo#transmission)-Typ, der zuvor in Firefox als Alias verwendet wurde.
  ([Firefox-Bug 1825286](https://bugzil.la/1825286)).

- **TC39 Iterator Includes Proposal**: `javascript.options.experimental.iterator_includes`

  Die Methode [`Iterator.prototype.includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/includes) testet, ob der Iterator einen angegebenen Wert produzieren wird.
  ([Firefox-Bug 2025779](https://bugzil.la/2025779)).

- **TC39 Intl.Locale Info Proposal**: `javascript.options.experimental.intl_locale_info`

  Der [TC39 Intl.Locale Info Proposal](https://github.com/tc39/proposal-intl-locale-info) wird jetzt in den Nightly-Builds unterstützt, wenn die Präferenz aktiviert ist.
  Dies umfasst alle [`Intl.Locale` Instanzmethoden, die mit "get" beginnen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale#instance_methods).
  ([Firefox-Bug 1693576](https://bugzil.la/1693576)).

- **Textmodul-Import**: `javascript.options.experimental.import_text`

  Der `with`-Klausel [`{ type: "text" }`](/de/docs/Web/JavaScript/Reference/Statements/import/with#text_modules_type_text) erlaubt es, den Quelltext eines Moduls als Zeichenfolgenwert zu importieren.
  Der Medientyp der Antwort wird ignoriert, und der Inhalt wird als Text geparst, auch wenn der Quelltext Skripte oder anderen ausführbaren Code enthält.
  ([Firefox-Bug 2024854](https://bugzil.la/2024854)).

- **`<timeline-range-name>` Werte in `@keyframes` Selektoren**: `layout.css.scroll-driven-animations.enabled`

  Die {{cssxref("@keyframes")}}-Regel unterstützt jetzt [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name)-Werte. Diese [Werte](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#timeline_range_names) ermöglichen es Ihnen, das Segment festzulegen, innerhalb dessen eine scroll-gesteuerte Animation stattfindet. ([Firefox-Bug 1824875](https://bugzil.la/1824875)).

- **Absturzberichterstattung** (Nightly): `dom.reporting.crash.enabled`

  Absturzberichte können jetzt über die [Reporting API](/de/docs/Web/API/Reporting_API) gesendet werden.
  ([Firefox-Bug 2036160](https://bugzil.la/2036160)).
