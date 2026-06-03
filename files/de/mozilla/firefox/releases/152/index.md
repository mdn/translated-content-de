---
title: Firefox 152 Versionshinweise für Entwickler (Beta)
short-title: Firefox 152 (Beta)
slug: Mozilla/Firefox/Releases/152
l10n:
  sourceCommit: fd64ce7645c6baa06a49662ece68a94f9667f5c0
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 152, die Entwickler betreffen.
Firefox 152 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [16. Juni 2026](https://whattrainisitnow.com/release/?version=152) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften aus, für die Sie Anmerkungen schreiben -->

## Änderungen für Webentwickler

### Entwicklertools

- Die Entwicklertools haben jetzt eine Option "Kommentare anzeigen", um die Anzeige von HTML-Kommentarknoten im Inspektor umzuschalten.
  Diese Option finden Sie im [Einstellungsdialog](https://firefox-source-docs.mozilla.org/devtools-user/settings/index.html#settings-inspector).
  ([Firefox-Bug 1455294](https://bugzil.la/1455294)).

<!-- ### HTML -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### MathML -->

<!-- #### Entfernungen -->

### SVG

- Die schreibgeschützte Eigenschaft [`SVGTextPathElement.side`](/de/docs/Web/API/SVGTextPathElement/side) wird jetzt unterstützt, um anzuzeigen, ob Text auf der linken oder rechten Seite eines Textpfades gezeichnet wird.
  Dies spiegelt das entsprechende [`side`](/de/docs/Web/SVG/Reference/Attribute/side)-Attribut des [`<textPath>`](/de/docs/Web/SVG/Reference/Element/textPath)-Elements wider.
  ([Firefox-Bug 2034371](https://bugzil.la/2034371)).

<!-- #### Entfernungen -->

<!-- ### CSS -->

<!-- #### Entfernungen -->

<!-- ### JavaScript -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### HTTP -->

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

- Die Eigenschaften [`firstInterimResponseStart`](/de/docs/Web/API/PerformanceResourceTiming/firstInterimResponseStart) und [`finalResponseHeadersStart`](/de/docs/Web/API/PerformanceResourceTiming/finalResponseHeadersStart) des [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Interfaces werden unterstützt.
  Diese können verwendet werden, um zu messen, wie lange es dauert, bis der Browser vorläufige HTTP-Antworten und die endgültige HTTP-Antwort nach dem Senden einer Anfrage erhält.
  ([Firefox-Bug 2006340](https://bugzil.la/2006340)).

#### DOM

- Die schreibgeschützte Eigenschaft [`actions`](/de/docs/Web/API/Notification/actions) und die statische schreibgeschützte Eigenschaft [`maxActions`](/de/docs/Web/API/Notification/maxActions_static) des [`Notification`](/de/docs/Web/API/Notification)-Interfaces werden unterstützt.
  Diese enthalten die mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) gesetzten Benachrichtigungsaktionen und die plattformabhängige maximale Anzahl von Aktionen, die für eine Benachrichtigung festgelegt werden können.
  ([Firefox-Bug 1959931](https://bugzil.la/1959931)).
- Die Methode [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) kann jetzt den Parameter [`options.pseudoElement`](/de/docs/Web/API/Element/getAnimations#pseudoelement) akzeptieren.
  Dies ermöglicht es Ihnen, direkt ein bestimmtes Pseudo-Element anzuvisieren, anstatt die Ergebnisse von `{ subtree: true }` zu filtern.
  ([Firefox-Bug 1935557](https://bugzil.la/1935557)).
- Die Methode [`Element.requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock) unterstützt nun den Parameter [`options.unadjustedMovement`](/de/docs/Web/API/Element/requestPointerLock#unadjustedmovement).
  Dies erlaubt es, die Betriebssystem-Ebene der Mausbeschleunigung zu deaktivieren und stattdessen rohe Mausbewegungen zu verwenden, was in Fällen nützlich ist, in denen langsame und präzise Steuerung der Mausbewegung erforderlich ist.
  ([Firefox-Bug 2037802](https://bugzil.la/2037802)).

#### Medien, WebRTC und Web Audio

- Die `recieveTime`-Eigenschaft ist jetzt in den von [`RTCEncodedVideoFrame.getMetadata()`](/de/docs/Web/API/RTCEncodedVideoFrame/getMetadata#receivetime) und [`RTCEncodedAudioFrame.getMetadata()`](/de/docs/Web/API/RTCEncodedAudioFrame/getMetadata#receivetime) zurückgegebenen Metadaten enthalten und kann an die Konstruktoren von [`RTCEncodedVideoFrame()`](/de/docs/Web/API/RTCEncodedVideoFrame/RTCEncodedVideoFrame) und [`RTCEncodedAudioFrame()`](/de/docs/Web/API/RTCEncodedAudioFrame/RTCEncodedAudioFrame) als Eigenschaft im `options`-Parameter übergeben werden.
  ([Firefox-Bug 2033420](https://bugzil.la/2033420)).

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemeines -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Die Möglichkeit von Erweiterungen, Code in ihren `moz-extension:`-Dokumenten mit {{WebExtAPIRef("tabs.executeScript")}}, {{WebExtAPIRef("tabs.insertCSS")}}, {{WebExtAPIRef("tabs.removeCSS")}}, {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}}, und {{WebExtAPIRef("scripting.removeCSS")}} dynamisch auszuführen, wurde entfernt. Dieses Feature wurde in Firefox 149 veraltet. ([Firefox-Bug 2015559](https://bugzil.la/2015559))

  Alternativ kann eine Erweiterung Code in ihren Dokumenten dynamisch ausführen, indem sie einen {{WebExtAPIRef("runtime.onMessage")}}-Listener im Skript des Dokuments registriert und dann eine Nachricht sendet, um die Ausführung des erforderlichen Codes auszulösen.

<!-- ### Entfernungen -->

<!-- ### Andere -->

## Experimentelle Web-Features

Diese Features sind in Firefox 152 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config`-Seite und setzen Sie diese auf `true`.
Weitere solcher Features finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Überprüfen, ob eine Medien-Codierungs/Dekodierungskonfiguration für WebRTC unterstützt wird**: `media.mediacapabilities.webrtc.enabled`

  Der `webrtc`-Typ kann nun als Option für [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo#webrtc) und [`MediaCapabilities.encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo#webrtc) übergeben werden, um zu überprüfen, ob eine Codierungs/Dekodierungskonfiguration für WebRTC verwendet werden kann.
  Dies ersetzt den nicht standardisierten [`transmission`](/de/docs/Web/API/MediaCapabilities/encodingInfo#transmission)-Typ, der zuvor in Firefox als Alias verwendet wurde.
  ([Firefox-Bug 1825286](https://bugzil.la/1825286)).

- **TC39 Iterator includes Proposal**: `javascript.options.experimental.iterator_includes`

  Die Methode [`Iterator.prototype.includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/includes) testet, ob der Iterator einen angegebenen Wert produzieren wird.
  ([Firefox-Bug 2025779](https://bugzil.la/2025779)).

- **TC39 Intl.Locale info Proposal**: `javascript.options.experimental.intl_locale_info`

  Der [TC39 Intl.Locale info Proposal](https://github.com/tc39/proposal-intl-locale-info) wird jetzt auf Nightly-Builds unterstützt, wenn die Einstellung aktiviert ist.
  Dies umfasst alle [`Intl.Locale`-Instanzmethoden, die mit "get" beginnen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale#instance_methods).
  ([Firefox-Bug 1693576](https://bugzil.la/1693576)).

- **Textmodul-Import**: `javascript.options.experimental.import_text`

  Der `with`-Klausel [`{ type: "text" }`](/de/docs/Web/JavaScript/Reference/Statements/import/with#text_modules_type_text) erlaubt das Importieren des Quellcodes eines Moduls als Zeichenfolgenwert.
  Der Medientyp der Antwort wird ignoriert und der Inhalt wird als Text analysiert, selbst wenn der Quellcode Skripte oder andere ausführbare Code enthält.
  ([Firefox-Bug 2024854](https://bugzil.la/2024854)).
