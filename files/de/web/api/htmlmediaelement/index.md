---
title: HTMLMediaElement
slug: Web/API/HTMLMediaElement
l10n:
  sourceCommit: 281a6e50be0858c0200a59aac6b4a3f1b64116dc
---

{{APIRef("HTML DOM")}}

Das **`HTMLMediaElement`**-Interface erweitert [`HTMLElement`](/de/docs/Web/API/HTMLElement) um die Eigenschaften und Methoden, die zur Unterstützung grundlegender medienbezogener Funktionen benötigt werden, die für Audio und Video üblich sind.

Die [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)- und [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)-Elemente erben beide dieses Interface.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Dieses Interface erbt auch Eigenschaften von seinen Vorfahren [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die die [`AudioTrack`](/de/docs/Web/API/AudioTrack)-Objekte im Element auflistet.
- [`HTMLMediaElement.autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay)

  - : Ein boolescher Wert, der das HTML-Attribut [`autoplay`](/de/docs/Web/HTML/Element/video#autoplay) widerspiegelt und angibt, ob die Wiedergabe automatisch beginnen soll, sobald genügend Medien ohne Unterbrechung verfügbar sind.

    > [!NOTE]
    > Das automatische Abspielen von Audio, wenn der Benutzer es nicht erwartet oder wünscht, ist eine schlechte Benutzererfahrung und sollte in den meisten Fällen vermieden werden, obwohl es Ausnahmen gibt. Weitere Informationen finden Sie im [Leitfaden zum automatischen Abspielen von Medien und Web Audio APIs](/de/docs/Web/Media/Guides/Autoplay). Beachten Sie, dass Browser Autoplay-Anfragen ignorieren können, sodass Ihr Code nicht davon abhängig sein sollte, dass Autoplay funktioniert.

- [`HTMLMediaElement.buffered`](/de/docs/Web/API/HTMLMediaElement/buffered) {{ReadOnlyInline}}
  - : Gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Bereiche der Medienquelle anzeigt, die der Browser momentan zwischengespeichert hat (falls vorhanden), wenn auf die `buffered`-Eigenschaft zugegriffen wird.
- [`HTMLMediaElement.controls`](/de/docs/Web/API/HTMLMediaElement/controls)
  - : Ein boolescher Wert, der das HTML-Attribut [`controls`](/de/docs/Web/HTML/Element/video#controls) widerspiegelt und angibt, ob Benutzeroberfläche-Elemente zur Steuerung der Ressource angezeigt werden sollen.
- [`HTMLMediaElement.controlsList`](/de/docs/Web/API/HTMLMediaElement/controlsList)
  - : Gibt eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurück, die dem Benutzeragenten hilft, auszuwählen, welche Steuerelemente auf dem Mediaelement angezeigt werden sollen, wann immer der Benutzeragent seine eigenen Steuerelemente anzeigt. Die `DOMTokenList` akzeptiert einen oder mehrere der drei möglichen Werte: `nodownload`, `nofullscreen` und `noremoteplayback`.
- [`HTMLMediaElement.crossOrigin`](/de/docs/Web/API/HTMLMediaElement/crossOrigin)
  - : Eine Zeichenkette, die die [CORS-Einstellung](/de/docs/Web/HTML/Attributes/crossorigin) für dieses Medienelement angibt.
- [`HTMLMediaElement.currentSrc`](/de/docs/Web/API/HTMLMediaElement/currentSrc) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette mit der absoluten URL der ausgewählten Medienressource zurück.
- [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)
  - : Ein Doppel-Präzisions-Gleitkommawert, der die aktuelle Wiedergabezeit in Sekunden angibt; wenn die Medienwiedergabe nicht gestartet wurde und nicht verschoben wurde, ist dieser Wert die anfängliche Wiedergabezeit der Medien. Beim Setzen dieses Wertes wird das Medium auf die neue Zeit verschoben. Die Zeit wird relativ zur Zeitleiste der Medien angegeben.
- [`HTMLMediaElement.defaultMuted`](/de/docs/Web/API/HTMLMediaElement/defaultMuted)
  - : Ein boolescher Wert, der das HTML-Attribut [`muted`](/de/docs/Web/HTML/Element/video#muted) widerspiegelt, welches angibt, ob der Audioausgang des Medienelements standardmäßig stummgeschaltet sein soll.
- [`HTMLMediaElement.defaultPlaybackRate`](/de/docs/Web/API/HTMLMediaElement/defaultPlaybackRate)
  - : Ein `double`, der die Standard-Wiedergaberate für die Medien angibt.
- [`HTMLMediaElement.disableRemotePlayback`](/de/docs/Web/API/HTMLMediaElement/disableRemotePlayback)
  - : Ein boolescher Wert, der den Fernwiedergabestatus setzt oder zurückgibt und angibt, ob das Medienelement eine Fernwiedergabe-Benutzeroberfläche haben darf.
- [`HTMLMediaElement.duration`](/de/docs/Web/API/HTMLMediaElement/duration) {{ReadOnlyInline}}
  - : Ein schreibgeschützter Doppel-Präzisions-Gleitkommawert, der die Gesamtdauer der Medien in Sekunden angibt. Wenn keine Mediendaten verfügbar sind, wird der Wert `NaN` zurückgegeben. Wenn die Medien von unbestimmter Länge sind (wie z. B. gestreamte Live-Medien, Medien eines WebRTC-Anrufs oder ähnliches), ist der Wert `+Unendlichkeit`.
- [`HTMLMediaElement.ended`](/de/docs/Web/API/HTMLMediaElement/ended) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Medienelement die Wiedergabe beendet hat.
- [`HTMLMediaElement.error`](/de/docs/Web/API/HTMLMediaElement/error) {{ReadOnlyInline}}
  - : Gibt ein [`MediaError`](/de/docs/Web/API/MediaError)-Objekt für den neuesten Fehler zurück, oder `null`, wenn kein Fehler aufgetreten ist.
- [`HTMLMediaElement.loop`](/de/docs/Web/API/HTMLMediaElement/loop)
  - : Ein boolescher Wert, der das HTML-Attribut [`loop`](/de/docs/Web/HTML/Element/video#loop) widerspiegelt, welches angibt, ob das Medienelement von vorne starten soll, wenn es das Ende erreicht.
- [`HTMLMediaElement.mediaKeys`](/de/docs/Web/API/HTMLMediaElement/mediaKeys) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein [`MediaKeys`](/de/docs/Web/API/MediaKeys)-Objekt zurück, das ein Satz von Schlüsseln ist, den das Element zur Entschlüsselung von Mediendaten während der Wiedergabe verwenden kann. Wenn kein Schlüssel verfügbar ist, kann es `null` sein.
- [`HTMLMediaElement.muted`](/de/docs/Web/API/HTMLMediaElement/muted)
  - : Ein boolescher Wert, der bestimmt, ob der Ton stummgeschaltet ist. `true`, wenn der Ton stummgeschaltet ist, und `false` andernfalls.
- [`HTMLMediaElement.networkState`](/de/docs/Web/API/HTMLMediaElement/networkState) {{ReadOnlyInline}}
  - : Gibt einen `unsigned short` (Enumeration) zurück, der den aktuellen Status des Abrufens der Medien über das Netzwerk angibt.
- [`HTMLMediaElement.paused`](/de/docs/Web/API/HTMLMediaElement/paused) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Medienelement pausiert ist.
- [`HTMLMediaElement.playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate)
  - : Ein `double`, der die Rate angibt, mit der die Medien abgespielt werden.
- [`HTMLMediaElement.played`](/de/docs/Web/API/HTMLMediaElement/played) {{ReadOnlyInline}}
  - : Gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Bereiche der Medienquelle enthält, die der Browser bereits abgespielt hat, falls vorhanden.
- [`HTMLMediaElement.preload`](/de/docs/Web/API/HTMLMediaElement/preload)
  - : Eine Zeichenkette, die das HTML-Attribut [`preload`](/de/docs/Web/HTML/Element/video#preload) widerspiegelt und angibt, welche Daten vorab geladen werden sollen, falls vorhanden. Mögliche Werte sind: `none`, `metadata`, `auto`.
- [`HTMLMediaElement.preservesPitch`](/de/docs/Web/API/HTMLMediaElement/preservesPitch)
  - : Ein boolescher Wert, der bestimmt, ob die Tonhöhe des Klangs beibehalten wird. Wenn auf `false` gesetzt, wird die Tonhöhe an die Geschwindigkeit des Audios angepasst.
- [`HTMLMediaElement.readyState`](/de/docs/Web/API/HTMLMediaElement/readyState) {{ReadOnlyInline}}
  - : Gibt einen `unsigned short` (Enumeration) zurück, der den Bereitschaftszustand der Medien angibt.
- [`HTMLMediaElement.remote`](/de/docs/Web/API/HTMLMediaElement/remote) {{ReadOnlyInline}}
  - : Gibt ein [`RemotePlayback`](/de/docs/Web/API/RemotePlayback)-Objekt zurück, das dem Medienelement zugeordnet ist.
- [`HTMLMediaElement.seekable`](/de/docs/Web/API/HTMLMediaElement/seekable) {{ReadOnlyInline}}
  - : Gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Zeitbereiche enthält, zu denen der Benutzer springen kann, falls vorhanden.
- [`HTMLMediaElement.seeking`](/de/docs/Web/API/HTMLMediaElement/seeking) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob die Medien gerade dabei sind, zu einer neuen Position zu springen.
- [`HTMLMediaElement.sinkId`](/de/docs/Web/API/HTMLMediaElement/sinkId) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt einen String zurück, der die eindeutige ID des Audioausgabegeräts angibt, oder einen leeren String, wenn das Standard-Audiogerät des Benutzeragents verwendet wird.
- [`HTMLMediaElement.src`](/de/docs/Web/API/HTMLMediaElement/src)
  - : Ein String, der das HTML-Attribut [`src`](/de/docs/Web/HTML/Element/video#src) widerspiegelt, das die URL einer zu verwendenden Medienressource enthält.
- [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)
  - : Ein Objekt, das als Quelle für die mit dem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) assoziierte Medien dient, oder `null`, wenn nicht zugewiesen.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks) {{ReadOnlyInline}}
  - : Gibt ein [`TextTrackList`](/de/docs/Web/API/TextTrackList)-Objekt zurück, das die Liste der [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekte im Element enthält.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) {{ReadOnlyInline}}
  - : Gibt ein [`VideoTrackList`](/de/docs/Web/API/VideoTrackList)-Objekt zurück, das die Liste der [`VideoTrack`](/de/docs/Web/API/VideoTrack)-Objekte im Element enthält.
- [`HTMLMediaElement.volume`](/de/docs/Web/API/HTMLMediaElement/volume)
  - : Ein `double`, das die Lautstärke angibt, von 0.0 (stumm) bis 1.0 (laut).

## Veraltete Eigenschaften

Diese Eigenschaften sind veraltet und sollten nicht verwendet werden, selbst wenn ein Browser sie noch unterstützt.

- [`HTMLMediaElement.controller`](/de/docs/Web/API/HTMLMediaElement/controller) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein [`MediaController`](/de/docs/Web/API/MediaController)-Objekt, das den dem Element zugewiesenen Mediencontroller darstellt, oder `null`, wenn keiner zugewiesen ist.
- [`HTMLMediaElement.mediaGroup`](/de/docs/Web/API/HTMLMediaElement/mediaGroup) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein String, der das `mediagroup` HTML-Attribut widerspiegelt, welches den Namen der Gruppe von Elementen angibt, zu der es gehört. Eine Gruppe von Medienelementen teilt einen gemeinsamen [`MediaController`](/de/docs/Web/API/MediaController).
- [`HTMLMediaElement.mozAudioCaptured`](/de/docs/Web/API/HTMLMediaElement/mozAudioCaptured) {{ReadOnlyInline}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Gibt einen booleschen Wert zurück. In Bezug auf die Erfassung von Audiostreams.
- [`HTMLMediaElement.mozFragmentEnd`](/de/docs/Web/API/HTMLMediaElement/mozFragmentEnd) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Ein `double`, der Zugriff auf die Segmentendzeit bietet, wenn das Medienelement eine Segment-URL für `currentSrc` hat, andernfalls ist er gleich der Mediendauer.

## Instanzmethoden

_Dieses Interface erbt auch Methoden von seinen Vorfahren [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`HTMLMediaElement.addTextTrack()`](/de/docs/Web/API/HTMLMediaElement/addTextTrack)
  - : Fügt einem Medienelement ein neues [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekt hinzu (z. B. eine Spur für Untertitel). Dies ist eine programmatische Schnittstelle und wirkt sich nicht auf das DOM aus.
- [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream)
  - : Gibt [`MediaStream`](/de/docs/Web/API/MediaStream) zurück und erfasst einen Stream des Medieninhalts.
- [`HTMLMediaElement.canPlayType()`](/de/docs/Web/API/HTMLMediaElement/canPlayType)
  - : Bei Angabe eines Strings, der einen MIME-Medientyp (möglicherweise mit dem [`codecs`-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter)) angibt, gibt `canPlayType()` den String `probably` zurück, wenn die Medien wahrscheinlich abspielbar sind, `maybe`, wenn nicht genügend Informationen vorliegen, um festzustellen, ob die Medien abgespielt werden können, oder einen leeren String, wenn die Medien nicht abgespielt werden können.
- [`HTMLMediaElement.fastSeek()`](/de/docs/Web/API/HTMLMediaElement/fastSeek)
  - : Springt schnell mit niedriger Präzision zur angegebenen Zeit.
- [`HTMLMediaElement.load()`](/de/docs/Web/API/HTMLMediaElement/load)
  - : Setzt die Medien zurück zum Anfang und wählt die beste verfügbare Quelle aus den bereitgestellten Quellen unter Verwendung des [`src`](/de/docs/Web/HTML/Element/video#src)-Attributs oder des {{HTMLElement("source")}}-Elements.
- [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause)
  - : Pausiert die Medienwiedergabe.
- [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play)
  - : Beginnt die Wiedergabe der Medien.
- [`HTMLMediaElement.seekToNextFrame()`](/de/docs/Web/API/HTMLMediaElement/seekToNextFrame) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Springt zum nächsten Frame in den Medien. Diese nicht-standardisierte, experimentelle Methode ermöglicht es, Lesen und Rendern der Medien mit einer benutzerdefinierten Geschwindigkeit manuell zu steuern oder Bild-für-Bild durch die Medien zu navigieren, um Filter oder andere Operationen durchzuführen.
- [`HTMLMediaElement.setMediaKeys()`](/de/docs/Web/API/HTMLMediaElement/setMediaKeys) {{SecureContext_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück. Setzt die [`MediaKeys`](/de/docs/Web/API/MediaKeys)-Schlüssel, um Medien während der Wiedergabe zu entschlüsseln.
- [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId) {{SecureContext_Inline}}
  - : Setzt die ID des Audiogeräts, das für die Ausgabe verwendet werden soll, und gibt ein {{jsxref("Promise")}} zurück. Dies funktioniert nur, wenn die Anwendung berechtigt ist, das angegebene Gerät zu verwenden.

## Veraltete Methoden

_Diese Methoden sind veraltet und sollten nicht verwendet werden, selbst wenn ein Browser sie noch unterstützt._

- [`HTMLMediaElement.mozCaptureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) {{Non-standard_Inline}}
  - : Das mit Firefox präfixierte Äquivalent von [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream). Siehe seine [Browser-Kompatibilität](/de/docs/Web/API/HTMLMediaElement/captureStream#browser_compatibility) für Details.
- [`HTMLMediaElement.mozCaptureStreamUntilEnded()`](/de/docs/Web/API/HTMLMediaElement/mozCaptureStreamUntilEnded) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : \[Beschreibung eingeben]
- [`HTMLMediaElement.mozGetMetadata()`](/de/docs/Web/API/HTMLMediaElement/mozGetMetadata) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Gibt ein {{jsxref('Object')}} zurück, das Eigenschaften enthält, die Metadaten der abspielenden Medienressource als `{key: value}`-Paare darstellen. Eine separate Kopie der Daten wird jedes Mal zurückgegeben, wenn die Methode aufgerufen wird. Diese Methode muss nach dem [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)-Ereignis aufgerufen werden.

## Events

_Erbt Ereignisse von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)_.

Hören Sie auf diese Ereignisse, indem Sie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden oder einen Ereignis-Listener auf die `oneventname`-Eigenschaft dieser Schnittstelle zuweisen.

- [`abort`](/de/docs/Web/API/HTMLMediaElement/abort_event)
  - : Ausgelöst, wenn die Ressource nicht vollständig geladen wurde, aber nicht als Ergebnis eines Fehlers.
- [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)
  - : Ausgelöst, wenn der Benutzeragent die Medien abspielen kann, aber schätzt, dass **nicht** genügend Daten geladen wurden, um die Medien bis zum Ende abzuspielen, ohne für weiteres Puffern des Inhalts anzuhalten.
- [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
  - : Ausgelöst, wenn der Benutzeragent die Medien abspielen kann und schätzt, dass genügend Daten geladen wurden, um die Medien bis zum Ende abzuspielen, ohne für weiteres Puffern des Inhalts anzuhalten.
- [`durationchange`](/de/docs/Web/API/HTMLMediaElement/durationchange_event)
  - : Ausgelöst, wenn die Eigenschaft für die Dauer aktualisiert wurde.
- [`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)
  - : Ausgelöst, wenn die Medien leer geworden sind; zum Beispiel, wenn die Medien bereits geladen (oder teilweise geladen) sind und die [`HTMLMediaElement.load()`](/de/docs/Web/API/HTMLMediaElement/load)-Methode aufgerufen wird, um sie neu zu laden.
- [`encrypted`](/de/docs/Web/API/HTMLMediaElement/encrypted_event)
  - : Ausgelöst, wenn Initialisierungsdaten in den Medien gefunden werden, die darauf hinweisen, dass die Medien verschlüsselt sind.
- [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)
  - : Ausgelöst, wenn die Wiedergabe stoppt, weil das Ende der Medien (`<audio>` oder `<video>`) erreicht ist oder weil keine weiteren Daten verfügbar sind.
- [`error`](/de/docs/Web/API/HTMLMediaElement/error_event)
  - : Ausgelöst, wenn die Ressource aufgrund eines Fehlers nicht geladen werden konnte.
- [`loadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event)
  - : Ausgelöst, wenn das erste Frame der Medien vollständig geladen ist.
- [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
  - : Ausgelöst, wenn die Metadaten geladen wurden.
- [`loadstart`](/de/docs/Web/API/HTMLMediaElement/loadstart_event)
  - : Ausgelöst, wenn der Browser begonnen hat, eine Ressource zu laden.
- [`pause`](/de/docs/Web/API/HTMLMediaElement/pause_event)
  - : Ausgelöst, wenn eine Pause-Anfrage bearbeitet wird und die Aktivität ihren pausierten Zustand erreicht hat, was am häufigsten auftritt, wenn die `HTMLMediaElement.pause()`-Methode des Mediums aufgerufen wird.
- [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)
  - : Ausgelöst, wenn die `paused`-Eigenschaft von `true` auf `false` geändert wird, als Ergebnis der `HTMLMediaElement.play()`-Methode oder des `autoplay`-Attributs.
- [`playing`](/de/docs/Web/API/HTMLMediaElement/playing_event)
  - : Ausgelöst, wenn die Wiedergabe startbereit ist, nachdem sie paussiert oder aufgrund von Datenmangel verzögert wurde.
- [`progress`](/de/docs/Web/API/HTMLMediaElement/progress_event)
  - : Regelmäßig ausgelöst, während der Browser eine Ressource lädt.
- [`ratechange`](/de/docs/Web/API/HTMLMediaElement/ratechange_event)
  - : Ausgelöst, wenn die Wiedergaberate geändert wurde.
- [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event)
  - : Ausgelöst, wenn eine Suche (seek) abgeschlossen ist.
- [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
  - : Ausgelöst, wenn eine Suche (seek) beginnt.
- [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
  - : Ausgelöst, wenn der Benutzeragent versucht, Mediendaten abzurufen, aber keine Daten unerwarteterweise eintreffen.
- [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event)
  - : Ausgelöst, wenn das Laden von Mediendaten ausgesetzt wurde.
- [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)
  - : Ausgelöst, wenn die durch die `currentTime`-Eigenschaft angegebene Zeit aktualisiert wurde.
- [`volumechange`](/de/docs/Web/API/HTMLMediaElement/volumechange_event)
  - : Ausgelöst, wenn die Lautstärke geändert wurde.
- [`waiting`](/de/docs/Web/API/HTMLMediaElement/waiting_event)
  - : Ausgelöst, wenn die Wiedergabe gestoppt hat, aufgrund eines vorübergehenden Mangels an Daten.
- [`waitingforkey`](/de/docs/Web/API/HTMLMediaElement/waitingforkey_event)
  - : Ausgelöst, wenn die Wiedergabe das erste Mal blockiert wird, während auf einen Schlüssel gewartet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

### Referenzen

- {{HTMLElement("video")}} und {{HTMLElement("audio")}} HTML-Elemente
- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) und [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)-Interfaces, die von `HTMLMediaElement` abgeleitet sind

### Leitfäden

- [Webmedientechnologien](/de/docs/Web/Media)
- Lernbereich: [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats)
- [Umgang mit Problemen in der Medienunterstützung in Web-Inhalten](/de/docs/Web/Media/Guides/Formats/Support_issues)
