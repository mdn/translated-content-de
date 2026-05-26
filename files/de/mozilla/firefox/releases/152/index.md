---
title: Firefox 152 Versionshinweise für Entwickler (Beta)
short-title: Firefox 152 (Beta)
slug: Mozilla/Firefox/Releases/152
l10n:
  sourceCommit: 0df5de3b03a8dee24f96657f74b8a598d985d25a
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 152, die Entwickler betreffen.
Firefox 152 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [16. Juni 2026](https://whattrainisitnow.com/release/?version=152) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften ein, für die Sie Anmerkungen schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwicklerwerkzeuge -->

<!-- ### HTML -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### MathML -->

<!-- #### Entfernungen -->

<!-- ### SVG -->

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

#### DOM

- Die schreibgeschützte Eigenschaft [`actions`](/de/docs/Web/API/Notification/actions) und die statische, schreibgeschützte Eigenschaft [`maxActions`](/de/docs/Web/API/Notification/maxActions_static) der [`Notification`](/de/docs/Web/API/Notification)-Schnittstelle werden unterstützt.
  Diese enthalten die Benachrichtigungsaktionen, die mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) gesetzt wurden, sowie die plattformabhängige maximale Anzahl an Aktionen, die für eine Benachrichtigung gesetzt werden können.
  ([Firefox Bug 1959931](https://bugzil.la/1959931)).
- Die Methode [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) kann jetzt den Parameter [`options.pseudoElement`](/de/docs/Web/API/Element/getAnimations#pseudoelement) akzeptieren.
  Dies erlaubt es Ihnen, ein spezifisches Pseudo-Element direkt anzusprechen, anstatt die Ergebnisse von `{ subtree: true }` zu filtern.
  ([Firefox Bug 1935557](https://bugzil.la/1935557)).
- Die Methode [`Element.requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock) unterstützt jetzt den Parameter [`options.unadjustedMovement`](/de/docs/Web/API/Element/requestPointerLock#unadjustedmovement).
  Dies ermöglicht es, die Betriebssystem-Mausbeschleunigung zu deaktivieren und stattdessen rohe Mausbewegungen zu verwenden, was in Fällen nützlich ist, in denen langsame und präzise Kontrolle über die Mausbewegung erforderlich ist.
  ([Firefox Bug 2037802](https://bugzil.la/2037802)).

#### Media, WebRTC und Web Audio

- Die `recieveTime`-Eigenschaft ist jetzt in den Metadaten enthalten, die von [`RTCEncodedVideoFrame.getMetadata()`](/de/docs/Web/API/RTCEncodedVideoFrame/getMetadata#receivetime) und [`RTCEncodedAudioFrame.getMetadata()`](/de/docs/Web/API/RTCEncodedAudioFrame/getMetadata#receivetime) zurückgegeben werden, und kann als Eigenschaft im `options`-Parameter an die Konstruktoren [`RTCEncodedVideoFrame()`](/de/docs/Web/API/RTCEncodedVideoFrame/RTCEncodedVideoFrame) und [`RTCEncodedAudioFrame()`](/de/docs/Web/API/RTCEncodedAudioFrame/RTCEncodedAudioFrame) übergeben werden.
  ([Firefox Bug 2033420](https://bugzil.la/2033420)).

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Die Fähigkeit von Erweiterungen, Code dynamisch in ihren `moz-extension:`-Dokumenten mit {{WebExtAPIRef("tabs.executeScript")}}, {{WebExtAPIRef("tabs.insertCSS")}}, {{WebExtAPIRef("tabs.removeCSS")}}, {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}} und {{WebExtAPIRef("scripting.removeCSS")}} auszuführen, wurde entfernt. Dieses Feature wurde in Firefox 149 veraltet. ([Firefox Bug 2015559](https://bugzil.la/2015559))

  Als Alternative kann eine Erweiterung Code in ihren Dokumenten dynamisch ausführen, indem sie einen {{WebExtAPIRef("runtime.onMessage")}}-Listener im Skript des Dokuments registriert und dann eine Nachricht sendet, um die Ausführung des erforderlichen Codes auszulösen.

<!-- ### Entfernungen -->

<!-- ### Weitere -->

## Experimentelle Webfeatures

Diese Features werden in Firefox 152 ausgeliefert, sind aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Präferenz auf der `about:config`-Seite und setzen Sie sie auf `true`.
Weitere solche Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Prüfen, ob eine Mediencodierungs-/Dekodierungskonfiguration für WebRTC unterstützt wird**: `media.mediacapabilities.webrtc.enabled`

  Der `webrtc`-Typ kann jetzt als Option für [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo#webrtc) und [`MediaCapabilities.encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo#webrtc) verwendet werden, um zu prüfen, ob eine Codierungs-/Dekodierungskonfiguration für WebRTC verwendet werden kann.
  Dies ersetzt den nicht-standardisierten [`transmission`](/de/docs/Web/API/MediaCapabilities/encodingInfo#transmission)-Typ, der zuvor als Alias in Firefox verwendet wurde.
  ([Firefox Bug 1825286](https://bugzil.la/1825286)).
