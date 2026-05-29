---
title: Firefox 152 Versionshinweise für Entwickler (Beta)
short-title: Firefox 152 (Beta)
slug: Mozilla/Firefox/Releases/152
l10n:
  sourceCommit: 19b7f7947d6173be1640b0a8f07632e5176a8aef
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 152, die Entwickler betreffen.
Firefox 152 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [16. Juni 2026](https://whattrainisitnow.com/release/?version=152) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Die Entwicklerwerkzeuge verfügen nun über eine Option "Kommentare anzeigen", um die Anzeige von HTML-Kommentar-Knoten im Inspektor umzuschalten.
  Diese Option befindet sich im [Einstellungsfeld](https://firefox-source-docs.mozilla.org/devtools-user/settings/index.html#settings-inspector).
  ([Firefox Fehler 1455294](https://bugzil.la/1455294)).

### APIs

#### DOM

- Die schreibgeschützte Eigenschaft [`actions`](/de/docs/Web/API/Notification/actions) und die statische schreibgeschützte Eigenschaft [`maxActions`](/de/docs/Web/API/Notification/maxActions_static) des [`Notification`](/de/docs/Web/API/Notification)-Interfaces werden unterstützt.
  Diese enthalten die Benachrichtigungsaktionen, die mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) festgelegt wurden, bzw. die plattformabhängige maximale Anzahl von Aktionen, die für eine Benachrichtigung festgelegt werden können.
  ([Firefox Fehler 1959931](https://bugzil.la/1959931)).
- Die Methode [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) kann jetzt den Parameter [`options.pseudoElement`](/de/docs/Web/API/Element/getAnimations#pseudoelement) akzeptieren.
  Dies ermöglicht es, direkt ein bestimmtes Pseudo-Element anzusprechen, anstatt die Ergebnisse von `{ subtree: true }` zu filtern.
  ([Firefox Fehler 1935557](https://bugzil.la/1935557)).
- Die Methode [`Element.requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock) unterstützt jetzt den Parameter [`options.unadjustedMovement`](/de/docs/Web/API/Element/requestPointerLock#unadjustedmovement).
  Dies ermöglicht es, die Betriebssystem-Mausbeschleunigung zu deaktivieren und stattdessen rohe Mauseingaben zu verwenden, was in Fällen nützlich ist, in denen eine langsame und präzise Steuerung der Mausbewegung erforderlich ist.
  ([Firefox Fehler 2037802](https://bugzil.la/2037802)).

#### Medien, WebRTC und Web Audio

- Die Eigenschaft `recieveTime` ist jetzt in den Metadaten enthalten, die von [`RTCEncodedVideoFrame.getMetadata()`](/de/docs/Web/API/RTCEncodedVideoFrame/getMetadata#receivetime) und [`RTCEncodedAudioFrame.getMetadata()`](/de/docs/Web/API/RTCEncodedAudioFrame/getMetadata#receivetime) zurückgegeben werden, und kann an die Konstruktoren [`RTCEncodedVideoFrame()`](/de/docs/Web/API/RTCEncodedVideoFrame/RTCEncodedVideoFrame) und [`RTCEncodedAudioFrame()`](/de/docs/Web/API/RTCEncodedAudioFrame/RTCEncodedAudioFrame) als Eigenschaft im `options`-Parameter übergeben werden.
  ([Firefox Fehler 2033420](https://bugzil.la/2033420)).

## Änderungen für Add-on-Entwickler

- Die Fähigkeit von Erweiterungen, Code dynamisch in ihren `moz-extension:` Dokumenten mit {{WebExtAPIRef("tabs.executeScript")}}, {{WebExtAPIRef("tabs.insertCSS")}}, {{WebExtAPIRef("tabs.removeCSS")}}, {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}} und {{WebExtAPIRef("scripting.removeCSS")}} auszuführen, wurde entfernt. Diese Funktion wurde in Firefox 149 veraltet. ([Firefox Fehler 2015559](https://bugzil.la/2015559))

  Als Alternative kann eine Erweiterung Code dynamisch in ihren Dokumenten ausführen, indem ein {{WebExtAPIRef("runtime.onMessage")}} Listener im Skript des Dokuments registriert wird, der dann eine Nachricht sendet, um die Ausführung des benötigten Codes auszulösen.

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 152 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Prüfen, ob eine Medienencodierungs-/Decodierungskonfiguration für WebRTC unterstützt wird**: `media.mediacapabilities.webrtc.enabled`

  Der `webrtc`-Typ kann nun als Option für [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo#webrtc) und [`MediaCapabilities.encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo#webrtc) übergeben werden, um zu prüfen, ob eine Encodierungs-/Decodierungskonfiguration für WebRTC verwendet werden kann.
  Dies ersetzt den nicht standardisierten [`transmission`](/de/docs/Web/API/MediaCapabilities/encodingInfo#transmission)-Typ, der zuvor als Alias in Firefox verwendet wurde.
  ([Firefox Fehler 1825286](https://bugzil.la/1825286)).

- **TC39 Iterator includes proposal**: `javascript.options.experimental.iterator_includes`

  Die Methode [`Iterator.prototype.includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/includes) testet, ob der Iterator einen bestimmten Wert liefern wird.
  ([Firefox Fehler 2025779](https://bugzil.la/2025779)).
