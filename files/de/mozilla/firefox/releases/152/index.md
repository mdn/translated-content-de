---
title: Firefox 152 Versionshinweise für Entwickler
short-title: Firefox 152
slug: Mozilla/Firefox/Releases/152
l10n:
  sourceCommit: cb5a9829f49b8ef7a28311ca419538194fd6525e
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 152, die Entwickler betreffen. Firefox 152 wurde am [16. Juni 2026](https://whattrainisitnow.com/release/?version=152) veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

- Die Entwickler-Tools verfügen jetzt über eine Option "Kommentare anzeigen", mit der das Anzeigen von HTML-Kommentarknoten im Inspector umgeschaltet werden kann. Diese Option finden Sie im [Einstellungsbereich](https://firefox-source-docs.mozilla.org/devtools-user/settings/index.html#settings-inspector).
  ([Firefox Bug 1455294](https://bugzil.la/1455294)).

### HTML

Keine bemerkenswerten Änderungen.

### SVG

- Die schreibgeschützte Eigenschaft [`SVGTextPathElement.side`](/de/docs/Web/API/SVGTextPathElement/side) wird jetzt unterstützt und gibt an, ob Text auf der linken oder rechten Seite eines Textpfads gezeichnet wird. Dies entspricht dem entsprechenden [`side`](/de/docs/Web/SVG/Reference/Attribute/side)-Attribut auf dem [`<textPath>`](/de/docs/Web/SVG/Reference/Element/textPath)-Element.
  ([Firefox Bug 2034371](https://bugzil.la/2034371)).

### CSS

- Die {{cssxref("field-sizing")}} CSS-Eigenschaft ermöglicht es Ihnen, das Größenverhalten von Formularelementen zu steuern. Diese Eigenschaft hat zwei Werte: `content` erlaubt es den Elementen, ihre Größe an den Inhalt anzupassen, und `fixed` setzt eine feste Größe für die Elemente.
  ([Firefox Bug 2036620](https://bugzil.la/2036620)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- Die Eigenschaften [`firstInterimResponseStart`](/de/docs/Web/API/PerformanceResourceTiming/firstInterimResponseStart) und [`finalResponseHeadersStart`](/de/docs/Web/API/PerformanceResourceTiming/finalResponseHeadersStart) des [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Interfaces werden unterstützt. Diese können verwendet werden, um zu messen, wie lange es dauert, bis der Browser interimistische HTTP-Antworten und die finale HTTP-Antwort nach dem Senden einer Anfrage erhält.
  ([Firefox Bug 2006340](https://bugzil.la/2006340)).
- Die Eigenschaften [`AnimationEvent.animation`](/de/docs/Web/API/AnimationEvent/animation) und [`TransitionEvent.animation`](/de/docs/Web/API/TransitionEvent/animation) werden jetzt unterstützt. Diese bieten eine ergonomischere Möglichkeit, auf die zugehörige Animation zuzugreifen, als [`element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) aufzurufen und basierend auf dem `animationName` oder `propertyName` des Ereignisses zu filtern.
  ([Firefox Bug 1929118](https://bugzil.la/1929118)).

#### DOM

- Benachrichtigungsaktionen werden unterstützt. Dazu gehören der [`actions`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification#actions)-Parameter von [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) sowie die schreibgeschützte Eigenschaft [`actions`](/de/docs/Web/API/Notification/actions) und die statische schreibgeschützte Eigenschaft [`maxActions`](/de/docs/Web/API/Notification/maxActions_static) des [`Notification`](/de/docs/Web/API/Notification)-Interfaces. Dies ermöglicht es Ihnen, Aktionsschaltflächen zu Gerätemitteilungen hinzuzufügen und darauf zu reagieren, wenn diese gedrückt werden.
  ([Firefox Bug 1959931](https://bugzil.la/1959931)).
- Die Methode [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) kann jetzt den Parameter [`options.pseudoElement`](/de/docs/Web/API/Element/getAnimations#pseudoelement) akzeptieren. Dies ermöglicht es Ihnen, direkt ein bestimmtes Pseudo-Element anzusprechen, anstatt die Ergebnisse von `{ subtree: true }` zu filtern.
  ([Firefox Bug 1935557](https://bugzil.la/1935557)).
- Die Methode [`Element.requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock) unterstützt jetzt den Parameter [`options.unadjustedMovement`](/de/docs/Web/API/Element/requestPointerLock#unadjustedmovement). Dies ermöglicht es dem Code, das Mausbeschleunigung auf Betriebssystemebene zu deaktivieren und stattdessen rohe Mausbewegungsdaten zu verwenden, was in Fällen nützlich ist, in denen eine langsame und präzise Steuerung der Mausbewegung erforderlich ist.
  ([Firefox Bug 2037802](https://bugzil.la/2037802)).

#### Medien, WebRTC und Web Audio

- Die Eigenschaft `receiveTime` ist jetzt im Metadaten-Return von [`RTCEncodedVideoFrame.getMetadata()`](/de/docs/Web/API/RTCEncodedVideoFrame/getMetadata#receivetime) und [`RTCEncodedAudioFrame.getMetadata()`](/de/docs/Web/API/RTCEncodedAudioFrame/getMetadata#receivetime) enthalten und kann als Eigenschaft im `options`-Parameter an die Konstruktoren [`RTCEncodedVideoFrame()`](/de/docs/Web/API/RTCEncodedVideoFrame/RTCEncodedVideoFrame) und [`RTCEncodedAudioFrame()`](/de/docs/Web/API/RTCEncodedAudioFrame/RTCEncodedAudioFrame) übergeben werden.
  ([Firefox Bug 2033420](https://bugzil.la/2033420)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Die Marionette und WebDriver BiDi Screenshot-Befehle wurden verbessert, um maximale zulässige Dimensionen zu erzwingen. ([Firefox Bug 2020302](https://bugzil.la/2020302)).

#### WebDriver BiDi

- Der Befehl `webExtension.install` wurde erweitert, um die Installation von Web-Erweiterungen im Firefox im privaten Modus zu unterstützen. ([Firefox Bug 1947679](https://bugzil.la/1947679)).
- Der Befehl `browser.setDownloadBehavior` wurde verbessert, um das Überschreiben des Download-Zielordners zu ermöglichen, bevor die temporäre Datei erstellt wird. ([Firefox Bug 2017252](https://bugzil.la/2017252)).
- Netzwerkevents wurden so korrigiert, dass JavaScript-Antworten im Zwischenspeicher nur weitergeleitet werden, wenn ein passendes Netzwerk-Event-Sammler vorhanden ist, um unnötige Datenweiterleitung zu vermeiden. ([Firefox Bug 2018237](https://bugzil.la/2018237)).

#### Marionette

- Die Befehle `WebDriver:Navigate` und `WebDriver:Refresh` wurden verbessert, um Fehler korrekt zu melden, wenn das Auslösen der Navigation fehlschlägt, anstatt sie stillschweigend zu ignorieren. ([Firefox Bug 2033769](https://bugzil.la/2033769)).

## Änderungen für Add-on-Entwickler

- Die Fähigkeit von Erweiterungen, Code dynamisch in ihren `moz-extension:`-Dokumenten auszuführen mit {{WebExtAPIRef("tabs.executeScript")}}, {{WebExtAPIRef("tabs.insertCSS")}}, {{WebExtAPIRef("tabs.removeCSS")}}, {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}}, und {{WebExtAPIRef("scripting.removeCSS")}} wurde entfernt. Diese Funktion wurde in Firefox 149 veraltet. ([Firefox Bug 2015559](https://bugzil.la/2015559))

  Als Alternative kann eine Erweiterung Code in ihren Dokumenten dynamisch ausführen, indem sie einen {{WebExtAPIRef("runtime.onMessage")}}-Listener im Skript des Dokuments registriert und dann eine Nachricht sendet, um die Ausführung des erforderlichen Codes auszulösen.

## Experimentelle Web-Features

Diese Features werden in Firefox 152 ausgeliefert, sind aber standardmäßig deaktiviert. Um sie zu testen, suchen Sie nach der entsprechenden Einstellung auf der Seite `about:config` und setzen Sie diese auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **WebAssembly JavaScript Promise Integration (JS-PI)**: `javascript.options.wasm_js_promise_integration`

  WebAssembly [JavaScript Promise Integration (JS-PI)](https://github.com/WebAssembly/js-promise-integration/blob/main/proposals/js-promise-integration/Overview.md) ermöglicht es WebAssembly-Modulen, mit asynchronen, auf {{jsxref("Promise")}}-basierenden JavaScript-APIs zu interagieren. Dadurch kann der WebAssembly-Code unterbrochen werden, während auf ein JavaScript-Promise gewartet wird, und wiederaufgenommen werden, wenn das Promise abgeschlossen ist.
  ([Firefox Bug 2015877](https://bugzil.la/2015877)).

- **Überprüfung, ob eine Medienkodierung/dekodierungskonfiguration für WebRTC unterstützt wird**: `media.mediacapabilities.webrtc.enabled`

  Der `webrtc`-Typ kann jetzt als Option für [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo#webrtc) und [`MediaCapabilities.encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo#webrtc) übergeben werden, um zu überprüfen, ob eine Kodierungs-/Dekodierungskonfiguration für WebRTC verwendet werden kann. Dies ersetzt den nicht standardisierten [`transmission`](/de/docs/Web/API/MediaCapabilities/encodingInfo#transmission)-Typ, der zuvor in Firefox als Alias verwendet wurde.
  ([Firefox Bug 1825286](https://bugzil.la/1825286)).

- **TC39 Iterator includes Vorschlag**: `javascript.options.experimental.iterator_includes`

  Die Methode [`Iterator.prototype.includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/includes) prüft, ob der Iterator einen angegebenen Wert erzeugen wird.
  ([Firefox Bug 2025779](https://bugzil.la/2025779)).

- **TC39 Intl.Locale info Vorschlag**: `javascript.options.experimental.intl_locale_info`

  Der [TC39 Intl.Locale info Vorschlag](https://github.com/tc39/proposal-intl-locale-info) wird jetzt in den Nightly-Builds unterstützt, wenn die Einstellung aktiviert ist. Dazu gehören alle [`Intl.Locale` Instanzmethoden, die mit "get" beginnen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale#instance_methods).
  ([Firefox Bug 1693576](https://bugzil.la/1693576)).

- **Textmodul-Import**: `javascript.options.experimental.import_text`

  Die `with`-Klausel [`{ type: "text" }`](/de/docs/Web/JavaScript/Reference/Statements/import/with#text_modules_type_text) ermöglicht das Importieren einer Modulo-Quelle als Zeichenfolgewert. Der Medientyp der Antwort wird ignoriert und der Inhalt wird als Text geparst, selbst wenn die Quelle Skripte oder anderen ausführbaren Code enthält.
  ([Firefox Bug 2024854](https://bugzil.la/2024854)).

- **`<timeline-range-name>` Werte in `@keyframes` Selektoren**: `layout.css.scroll-driven-animations.enabled`

  Die {{cssxref("@keyframes")}}-At-Regel unterstützt jetzt [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name) Werte. Diese [Werte](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#timeline_range_names) ermöglichen es, das Segment anzugeben, innerhalb dessen eine scrollgesteuerte Animation stattfindet. ([Firefox Bug 1824875](https://bugzil.la/1824875)).

- **Crash-Berichterstattung** (Nightly): `dom.reporting.crash.enabled`

  Absturzberichte können jetzt über die [Reporting API](/de/docs/Web/API/Reporting_API) gesendet werden.
  ([Firefox Bug 2036160](https://bugzil.la/2036160)).
