---
title: Firefox 152 Versionshinweise für Entwickler (Stabile Version)
short-title: Firefox 152 (Stabile Version)
slug: Mozilla/Firefox/Releases/152
l10n:
  sourceCommit: 3305c80f225be0e373313d96841f6bf9a52e314b
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 152, die Entwickler betreffen.
Firefox 152 wurde am [16. Juni 2026](https://whattrainisitnow.com/release/?version=152) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

- Die Entwicklertools verfügen jetzt über eine Option "Kommentare anzeigen", um die Anzeige von HTML-Kommentarknoten im Inspektor umzuschalten.
  Diese Option finden Sie im [Einstellungen-Panel](https://firefox-source-docs.mozilla.org/devtools-user/settings/index.html#settings-inspector).
  ([Firefox Bug 1455294](https://bugzil.la/1455294)).

### HTML

Keine bemerkenswerten Änderungen.

### SVG

- Die schreibgeschützte Eigenschaft [`SVGTextPathElement.side`](/de/docs/Web/API/SVGTextPathElement/side) wird jetzt unterstützt. Sie gibt an, ob Text auf der linken oder rechten Seite eines Textpfades gezeichnet wird.
  Dies spiegelt das entsprechende [`side`](/de/docs/Web/SVG/Reference/Attribute/side)-Attribut des [`<textPath>`](/de/docs/Web/SVG/Reference/Element/textPath)-Elements wider.
  ([Firefox Bug 2034371](https://bugzil.la/2034371)).

### CSS

- Die CSS-Eigenschaft {{cssxref("field-sizing")}} ermöglicht die Steuerung des Größenverhaltens von Formularelementen. Diese Eigenschaft hat zwei Werte: `content` erlaubt es Elementen, sich in der Größe dem Inhalt anzupassen, und `fixed` legt eine feste Größe für Elemente fest.
  ([Firefox Bug 2036620](https://bugzil.la/2036620)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- Die Eigenschaften [`firstInterimResponseStart`](/de/docs/Web/API/PerformanceResourceTiming/firstInterimResponseStart) und [`finalResponseHeadersStart`](/de/docs/Web/API/PerformanceResourceTiming/finalResponseHeadersStart) des [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Interfaces werden unterstützt.
  Diese können verwendet werden, um zu messen, wie lange es dauert, bis der Browser vorläufige HTTP-Antworten und die endgültige HTTP-Antwort nach dem Senden einer Anfrage empfängt.
  ([Firefox Bug 2006340](https://bugzil.la/2006340)).
- Die Eigenschaften [`AnimationEvent.animation`](/de/docs/Web/API/AnimationEvent/animation) und [`TransitionEvent.animation`](/de/docs/Web/API/TransitionEvent/animation) werden jetzt unterstützt.
  Diese bieten einen ergonomischeren Weg, auf die zugehörige Animation zuzugreifen, als die Verwendung von [`element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) und das Filtern nach dem `animationName` oder `propertyName` des Ereignisses.
  ([Firefox Bug 1929118](https://bugzil.la/1929118)).

#### DOM

- Benachrichtigungsaktionen werden unterstützt. Dies schließt den [`actions`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification#actions)-Parameter von [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification), sowie die schreibgeschützte [`actions`](/de/docs/Web/API/Notification/actions)-Eigenschaft und die statische schreibgeschützte [`maxActions`](/de/docs/Web/API/Notification/maxActions_static)-Eigenschaft des [`Notification`](/de/docs/Web/API/Notification)-Interfaces ein.
  Dies ermöglicht das Hinzufügen von Aktionsbuttons zu Gerätemeldungen und die Reaktion auf deren Betätigung.
  ([Firefox Bug 1959931](https://bugzil.la/1959931)).
- Die Methode [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) kann jetzt den Parameter [`options.pseudoElement`](/de/docs/Web/API/Element/getAnimations#pseudoelement) akzeptieren.
  Dies ermöglicht es, direkt ein bestimmtes Pseudo-Element zu fokussieren, anstatt die Ergebnisse von `{ subtree: true }` zu filtern.
  ([Firefox Bug 1935557](https://bugzil.la/1935557)).
- Die Methode [`Element.requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock) unterstützt jetzt den Parameter [`options.unadjustedMovement`](/de/docs/Web/API/Element/requestPointerLock#unadjustedmovement).
  Dies ermöglicht es, die Betriebssystem-Stufenmausbeschleunigung zu deaktivieren und stattdessen rohe Mausdaten zu verwenden, was nützlich ist in Fällen, in denen langsame und präzise Kontrolle über die Mausbewegung erforderlich ist.
  ([Firefox Bug 2037802](https://bugzil.la/2037802)).

#### Medien, WebRTC und Web Audio

- Die `receiveTime`-Eigenschaft ist jetzt in den Metadaten enthalten, die von [`RTCEncodedVideoFrame.getMetadata()`](/de/docs/Web/API/RTCEncodedVideoFrame/getMetadata#receivetime) und [`RTCEncodedAudioFrame.getMetadata()`](/de/docs/Web/API/RTCEncodedAudioFrame/getMetadata#receivetime) zurückgegeben werden, und kann als Eigenschaft im `options`-Parameter an die Konstruktoren [`RTCEncodedVideoFrame()`](/de/docs/Web/API/RTCEncodedVideoFrame/RTCEncodedVideoFrame) und [`RTCEncodedAudioFrame()`](/de/docs/Web/API/RTCEncodedAudioFrame/RTCEncodedAudioFrame) übergeben werden.
  ([Firefox Bug 2033420](https://bugzil.la/2033420)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Verbesserung der Marionette- und WebDriver BiDi-Screenshot-Befehle zur Durchsetzung maximal zulässiger Dimensionen. ([Firefox Bug 2020302](https://bugzil.la/2020302)).

#### WebDriver BiDi

- Der `webExtension.install`-Befehl wurde erweitert, um das Installieren von Web-Erweiterungen in Firefox im Privaten Modus zu unterstützen. ([Firefox Bug 1947679](https://bugzil.la/1947679)).
- Der `browser.setDownloadBehavior`-Befehl wurde verbessert, um das Überschreiben des Download-Zielordners bevor die temporäre Datei erstellt wird, zu ermöglichen. ([Firefox Bug 2017252](https://bugzil.la/2017252)).
- Die Netzwerkevents wurden angepasst, um nur im Speicher zwischengespeicherte JavaScript-Antworten weiterzuleiten, wenn ein entsprechender Netzwerk-Event-Sammler vorhanden ist, um unnötiges Daten-Forwarding zu vermeiden. ([Firefox Bug 2018237](https://bugzil.la/2018237)).

#### Marionette

- Die `WebDriver:Navigate`- und `WebDriver:Refresh`-Befehle wurden verbessert, um Fehler ordnungsgemäß zu melden, wenn die Auslösung der Navigation fehlschlägt, anstatt sie stillschweigend zu ignorieren. ([Firefox Bug 2033769](https://bugzil.la/2033769)).

## Änderungen für Add-on-Entwickler

- Die Fähigkeit von Erweiterungen, dynamisch Code in ihren `moz-extension:`-Dokumenten mit {{WebExtAPIRef("tabs.executeScript")}}, {{WebExtAPIRef("tabs.insertCSS")}}, {{WebExtAPIRef("tabs.removeCSS")}}, {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}}, und {{WebExtAPIRef("scripting.removeCSS")}} auszuführen, wurde entfernt. Diese Funktion wurde in Firefox 149 veraltet. ([Firefox Bug 2015559](https://bugzil.la/2015559))

  Als Alternative kann eine Erweiterung Code in ihren Dokumenten dynamisch ausführen, indem ein {{WebExtAPIRef("runtime.onMessage")}}-Listener im Skript des Dokuments registriert wird und dann eine Nachricht gesendet wird, um die Ausführung des erforderlichen Codes auszulösen.

## Experimentelle Web-Features

Diese Features sind in Firefox 152 enthalten, aber standardmäßig deaktiviert.
Um diese Features auszuprobieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **WebAssembly JavaScript Promise Integration (JS-PI)**: `javascript.options.wasm_js_promise_integration`

  Die WebAssembly-[JavaScript Promise Integration (JS-PI)](https://github.com/WebAssembly/js-promise-integration/blob/main/proposals/js-promise-integration/Overview.md) ermöglicht es WebAssembly-Modulen, mit asynchronen, {{jsxref("Promise")}}-basierten JavaScript-APIs zu interagieren. Dies ermöglicht es WebAssembly-Code, auszusetzen, während auf ein JavaScript-Promise gewartet wird, und die Ausführung fortzusetzen, wenn das Promise erfüllt ist.
  ([Firefox Bug 2015877](https://bugzil.la/2015877)).

- **Prüfen, ob eine Medienkodierungs/-dekodierungskonfiguration für WebRTC unterstützt wird**: `media.mediacapabilities.webrtc.enabled`

  Der `webrtc`-Typ kann nun als Option für [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo#webrtc) und [`MediaCapabilities.encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo#webrtc) verwendet werden, um zu prüfen, ob eine Kodierungs-/Dekodierungskonfiguration für WebRTC verwendet werden kann.
  Dies ersetzt den nicht-standardmäßigen [`transmission`](/de/docs/Web/API/MediaCapabilities/encodingInfo#transmission)-Typ, der bisher als Alias in Firefox verwendet wurde.
  ([Firefox Bug 1825286](https://bugzil.la/1825286)).

- **TC39 Iterator includes Proposal**: `javascript.options.experimental.iterator_includes`

  Die Methode [`Iterator.prototype.includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/includes) prüft, ob der Iterator einen bestimmten Wert produzieren wird.
  ([Firefox Bug 2025779](https://bugzil.la/2025779)).

- **TC39 Intl.Locale info Proposal**: `javascript.options.experimental.intl_locale_info`

  Der [TC39 Intl.Locale info Proposal](https://github.com/tc39/proposal-intl-locale-info) wird nun in Nightly-Builds unterstützt, wenn die Einstellung aktiviert ist.
  Dies umfasst alle [`Intl.Locale` Instanzmethoden mit dem Präfix "get"](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale#instance_methods).
  ([Firefox Bug 1693576](https://bugzil.la/1693576)).

- **Textmodul-Import**: `javascript.options.experimental.import_text`

  Der `with`-Abschnitt [`{ type: "text" }`](/de/docs/Web/JavaScript/Reference/Statements/import/with#text_modules_type_text) ermöglicht den Import einer Modulquelle als Zeichenfolgenwert.
  Der Medientyp der Antwort wird ignoriert, und der Inhalt wird als Text analysiert, auch wenn die Quelle Skripte oder anderen ausführbaren Code enthält.
  ([Firefox Bug 2024854](https://bugzil.la/2024854)).

- **`<timeline-range-name>`-Werte in `@keyframes`-Selektoren**: `layout.css.scroll-driven-animations.enabled`

  Die {{cssxref("@keyframes")}}-Regel unterstützt jetzt [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name)-Werte. Diese [Werte](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#timeline_range_names) ermöglichen es Ihnen, das Segment anzugeben, in dem eine scrollgesteuerte Animation stattfindet. ([Firefox Bug 1824875](https://bugzil.la/1824875)).
