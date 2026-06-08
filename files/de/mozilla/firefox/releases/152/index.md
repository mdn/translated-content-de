---
title: Firefox 152 Versionshinweise für Entwickler (Beta)
short-title: Firefox 152 (Beta)
slug: Mozilla/Firefox/Releases/152
l10n:
  sourceCommit: 2a8ddaf5bc1e331d7ff3e3e91d0eeabccaf9549a
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 152, die Entwickler betreffen.
Firefox 152 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [16. Juni 2026](https://whattrainisitnow.com/release/?version=152) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Authors: Bitte kommentieren Sie alle Überschriften, für die Sie Notizen schreiben -->

## Änderungen für Webentwickler

### Entwicklertools

- Die Entwicklertools haben jetzt eine "Kommentare anzeigen"-Option, um die Anzeige von HTML-Kommentarknoten im Inspector umzuschalten.
  Diese Option ist im [Einstellungen-Panel](https://firefox-source-docs.mozilla.org/devtools-user/settings/index.html#settings-inspector) zu finden.
  ([Firefox-Bug 1455294](https://bugzil.la/1455294)).

<!-- ### HTML -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### MathML -->

<!-- #### Entfernungen -->

### SVG

- Die schreibgeschützte Eigenschaft [`SVGTextPathElement.side`](/de/docs/Web/API/SVGTextPathElement/side) wird jetzt unterstützt und gibt an, ob Text auf der linken oder rechten Seite eines Textpfades gezeichnet wird.
  Dies spiegelt das entsprechende [`side`]-Attribut(/de/docs/Web/SVG/Reference/Attribute/side) auf dem [`<textPath>`]-Element(/de/docs/Web/SVG/Reference/Element/textPath) wider.
  ([Firefox-Bug 2034371](https://bugzil.la/2034371)).

<!-- #### Entfernungen -->

### CSS

- Die {{cssxref("field-sizing")}} CSS-Eigenschaft ermöglicht es, das Größenverhalten von Formularelementen zu steuern. Diese Eigenschaft hat zwei Werte: `content` ermöglicht es den Elementen, sich in ihrer Größe an ihren Inhalt anzupassen, und `fixed` setzt eine feste Größe für die Elemente.
  ([Firefox-Bug 2036620](https://bugzil.la/2036620)).

<!-- #### Entfernungen -->

<!-- ### JavaScript -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### HTTP -->

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

- Die Eigenschaften [`firstInterimResponseStart`](/de/docs/Web/API/PerformanceResourceTiming/firstInterimResponseStart) und [`finalResponseHeadersStart`](/de/docs/Web/API/PerformanceResourceTiming/finalResponseHeadersStart) des [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) Interface werden unterstützt.
  Diese können verwendet werden, um zu messen, wie lange es dauert, bis der Browser vorläufige HTTP-Antworten und die endgültige HTTP-Antwort nach dem Senden einer Anfrage erhält.
  ([Firefox-Bug 2006340](https://bugzil.la/2006340)).

#### DOM

- Die schreibgeschützte Eigenschaft [`actions`](/de/docs/Web/API/Notification/actions) und die statische schreibgeschützte Eigenschaft [`maxActions`](/de/docs/Web/API/Notification/maxActions_static) des [`Notification`](/de/docs/Web/API/Notification) Interface werden unterstützt.
  Diese enthalten die Benachrichtigungsaktionen, die mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) festgelegt wurden, und die plattformabhängige maximale Anzahl von Aktionen, die für eine Benachrichtigung festgelegt werden können.
  ([Firefox-Bug 1959931](https://bugzil.la/1959931)).
- Die Methode [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) kann jetzt den Parameter [`options.pseudoElement`](/de/docs/Web/API/Element/getAnimations#pseudoelement) akzeptieren.
  Dies ermöglicht es, direkt ein spezifisches Pseudo-Element anzusprechen, anstatt die Ergebnisse von `{ subtree: true }` zu filtern.
  ([Firefox-Bug 1935557](https://bugzil.la/1935557)).
- Die Methode [`Element.requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock) unterstützt nun den Parameter [`options.unadjustedMovement`](/de/docs/Web/API/Element/requestPointerLock#unadjustedmovement).
  Dies ermöglicht es, die OS-Ebene der Mausbeschleunigung zu deaktivieren und stattdessen rohe Mausinhalte zu nutzen, was in Fällen nützlich ist, in denen langsame und präzise Steuerung der Mausbewegung erforderlich ist.
  ([Firefox-Bug 2037802](https://bugzil.la/2037802)).

#### Medien, WebRTC und Web Audio

- Die Eigenschaft `recieveTime` ist jetzt in den Metadaten enthalten, die von [`RTCEncodedVideoFrame.getMetadata()`](/de/docs/Web/API/RTCEncodedVideoFrame/getMetadata#receivetime) und [`RTCEncodedAudioFrame.getMetadata()`](/de/docs/Web/API/RTCEncodedAudioFrame/getMetadata#receivetime) zurückgegeben werden, und kann als Eigenschaft im `options`-Parameter an die Konstruktoren von [`RTCEncodedVideoFrame()`](/de/docs/Web/API/RTCEncodedVideoFrame/RTCEncodedVideoFrame) und [`RTCEncodedAudioFrame()`](/de/docs/Web/API/RTCEncodedAudioFrame/RTCEncodedAudioFrame) übergeben werden.
  ([Firefox-Bug 2033420](https://bugzil.la/2033420)).

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Die Fähigkeit von Erweiterungen, Code dynamisch in ihren `moz-extension:`-Dokumenten mit {{WebExtAPIRef("tabs.executeScript")}}, {{WebExtAPIRef("tabs.insertCSS")}}, {{WebExtAPIRef("tabs.removeCSS")}}, {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}} und {{WebExtAPIRef("scripting.removeCSS")}} auszuführen, wurde entfernt. Dieses Feature wurde in Firefox 149 veraltet. ([Firefox-Bug 2015559](https://bugzil.la/2015559))

  Als Alternative kann eine Erweiterung Code dynamisch in ihren Dokumenten ausführen, indem sie einen {{WebExtAPIRef("runtime.onMessage")}} Listener im Skript des Dokuments registriert und dann eine Nachricht sendet, um die Ausführung des erforderlichen Codes auszulösen.

<!-- ### Entfernungen -->

<!-- ### Andere -->

## Experimentelle Web-Features

Diese Features werden in Firefox 152 bereitgestellt, sind aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der Seite `about:config` die entsprechende Einstellung und setzen Sie sie auf `true`.
Weitere solcher Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Prüfen, ob eine Medienkodierungs/-decodierungskonfiguration für WebRTC unterstützt wird**: `media.mediacapabilities.webrtc.enabled`

  Der `webrtc`-Typ kann jetzt als Option für [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo#webrtc) und [`MediaCapabilities.encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo#webrtc) übergeben werden, um zu prüfen, ob eine Kodierungs-/Dekodierungskonfiguration für WebRTC verwendet werden kann.
  Dies ersetzt den nicht standardmäßigen [`transmission`]-Typ(/de/docs/Web/API/MediaCapabilities/encodingInfo#transmission), der zuvor als Alias in Firefox verwendet wurde.
  ([Firefox-Bug 1825286](https://bugzil.la/1825286)).

- **TC39 Iterator includes Vorschlag**: `javascript.options.experimental.iterator_includes`

  Die Methode [`Iterator.prototype.includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/includes) testet, ob der Iterator einen angegebenen Wert produziert.
  ([Firefox-Bug 2025779](https://bugzil.la/2025779)).

- **TC39 Intl.Locale info Vorschlag**: `javascript.options.experimental.intl_locale_info`

  Der [TC39 Intl.Locale-Informationsvorschlag](https://github.com/tc39/proposal-intl-locale-info) wird jetzt in Nightly-Builds unterstützt, wenn die Einstellung aktiviert ist.
  Dies umfasst alle [`Intl.Locale` Instanzmethoden, die mit "get" beginnen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale#instance_methods).
  ([Firefox-Bug 1693576](https://bugzil.la/1693576)).

- **Textmodul-Import**: `javascript.options.experimental.import_text`

  Die `with` Klausel [`{ type: "text" }`](/de/docs/Web/JavaScript/Reference/Statements/import/with#text_modules_type_text) ermöglicht den Import des Quellcodes eines Moduls als Zeichenfolgenwert.
  Der Medientyp der Antwort wird ignoriert, und der Inhalt wird als Text geparst, selbst wenn der Quelltext Skripte oder anderen ausführbaren Code enthält.
  ([Firefox-Bug 2024854](https://bugzil.la/2024854)).
