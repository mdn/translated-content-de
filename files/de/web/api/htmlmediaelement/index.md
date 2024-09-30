---
title: HTMLMediaElement
slug: Web/API/HTMLMediaElement
l10n:
  sourceCommit: c640274a19227cd5790912ea76841732baa6731f
---

{{APIRef("HTML DOM")}}

Das **`HTMLMediaElement`**-Interface erweitert [`HTMLElement`](/de/docs/Web/API/HTMLElement) um die Eigenschaften und Methoden, die erforderlich sind, um grundlegende medienbezogene Fähigkeiten zu unterstützen, die für Audio und Video üblich sind.

Die Elemente [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) und [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) erben beide von diesem Interface.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinen Vorfahren [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node), und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die die [`AudioTrack`](/de/docs/Web/API/AudioTrack)-Objekte auflistet, die im Element enthalten sind.
- [`HTMLMediaElement.autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay)

  - : Ein boolescher Wert, der das HTML-Attribut [`autoplay`](/de/docs/Web/HTML/Element/video#autoplay) widerspiegelt und angibt, ob die Wiedergabe automatisch beginnen soll, sobald genügend Medien verfügbar sind, ohne Unterbrechung.

    > [!NOTE]
    > Das automatische Abspielen von Audio, wenn der Benutzer es nicht erwartet oder wünscht, stellt eine schlechte Benutzererfahrung dar und sollte in den meisten Fällen vermieden werden, wenngleich es Ausnahmen gibt. Siehe den [Autoplay-Leitfaden für Medien und Web Audio APIs](/de/docs/Web/Media/Autoplay_guide) für weitere Informationen. Beachten Sie, dass Browser Autoplay-Anfragen möglicherweise ignorieren, daher sollten Sie sicherstellen, dass Ihr Code nicht davon abhängt, dass Autoplay funktioniert.

- [`HTMLMediaElement.buffered`](/de/docs/Web/API/HTMLMediaElement/buffered) {{ReadOnlyInline}}
  - : Gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Bereiche der Medienquelle anzeigt, die der Browser zum Zeitpunkt des Zugriffs auf die `buffered`-Eigenschaft zwischengespeichert hat (falls vorhanden).
- [`HTMLMediaElement.controls`](/de/docs/Web/API/HTMLMediaElement/controls)
  - : Ein boolescher Wert, der das HTML-Attribut [`controls`](/de/docs/Web/HTML/Element/video#controls) widerspiegelt und angibt, ob Steuerelemente zur Steuerung der Ressource angezeigt werden sollen.
- [`HTMLMediaElement.controlsList`](/de/docs/Web/API/HTMLMediaElement/controlsList) {{ReadOnlyInline}}
  - : Gibt eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurück, die dem Benutzeragenten hilft auszuwählen, welche Steuerelemente auf dem Medienelement angezeigt werden sollen, wann immer der Benutzeragent seine eigene Steuerungssammlung anzeigt. Die `DOMTokenList` kann einen oder mehrere der drei möglichen Werte enthalten: `nodownload`, `nofullscreen` und `noremoteplayback`.
- [`HTMLMediaElement.crossOrigin`](/de/docs/Web/API/HTMLMediaElement/crossOrigin)
  - : Ein String, der die [CORS-Einstellung](/de/docs/Web/HTML/Attributes/crossorigin) für dieses Medienelement angibt.
- [`HTMLMediaElement.currentSrc`](/de/docs/Web/API/HTMLMediaElement/currentSrc) {{ReadOnlyInline}}
  - : Gibt einen String mit der absoluten URL der gewählten Medienressource zurück.
- [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)
  - : Ein Wert mit doppelter Genauigkeit, der die aktuelle Wiedergabezeit in Sekunden angibt; wenn das Medium nicht gestartet wurde und nicht gesucht (seeked) wurde, ist dieser Wert die anfängliche Wiedergabezeit des Mediums. Das Setzen dieses Wertes führt dazu, dass das Medium zur neuen Zeit gesucht wird. Die Zeit wird relativ zur Zeitachse des Mediums angegeben.
- [`HTMLMediaElement.defaultMuted`](/de/docs/Web/API/HTMLMediaElement/defaultMuted)
  - : Ein boolescher Wert, der das HTML-Attribut [`muted`](/de/docs/Web/HTML/Element/video#muted) widerspiegelt und angibt, ob die Audioausgabe des Medienelements standardmäßig stummgeschaltet sein sollte.
- [`HTMLMediaElement.defaultPlaybackRate`](/de/docs/Web/API/HTMLMediaElement/defaultPlaybackRate)
  - : Ein `double`, das die Standardwiedergabegeschwindigkeit für das Medium angibt.
- [`HTMLMediaElement.disableRemotePlayback`](/de/docs/Web/API/HTMLMediaElement/disableRemotePlayback)
  - : Ein boolescher Wert, der den Fernwiedergabestatus festlegt oder zurückgibt, der angibt, ob das Medienelement eine Fernwiedergabe-Benutzeroberfläche haben darf.
- [`HTMLMediaElement.duration`](/de/docs/Web/API/HTMLMediaElement/duration) {{ReadOnlyInline}}
  - : Ein schreibgeschützter Wert mit doppelter Genauigkeit, der die Gesamtdauer des Mediums in Sekunden angibt. Wenn keine Mediendaten verfügbar sind, ist der zurückgegebene Wert `NaN`. Wenn das Medium eine unbestimmte Länge hat (z. B. gestreamte Live-Medien, Medien eines WebRTC-Anrufs oder ähnliches), ist der Wert `+Infinity`.
- [`HTMLMediaElement.ended`](/de/docs/Web/API/HTMLMediaElement/ended) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Medienelement die Wiedergabe beendet hat.
- [`HTMLMediaElement.error`](/de/docs/Web/API/HTMLMediaElement/error) {{ReadOnlyInline}}
  - : Gibt ein [`MediaError`](/de/docs/Web/API/MediaError)-Objekt für den zuletzt aufgetretenen Fehler zurück, oder `null`, wenn kein Fehler aufgetreten ist.
- [`HTMLMediaElement.loop`](/de/docs/Web/API/HTMLMediaElement/loop)
  - : Ein boolescher Wert, der das HTML-Attribut [`loop`](/de/docs/Web/HTML/Element/video#loop) widerspiegelt, welches angibt, ob das Medienelement von vorne beginnen soll, wenn es das Ende erreicht.
- [`HTMLMediaElement.mediaKeys`](/de/docs/Web/API/HTMLMediaElement/mediaKeys) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein [`MediaKeys`](/de/docs/Web/API/MediaKeys)-Objekt zurück, das einen Satz von Schlüsseln darstellt, die das Element zur Entschlüsselung von Mediendaten während der Wiedergabe verwenden kann. Wenn kein Schlüssel verfügbar ist, kann er `null` sein.
- [`HTMLMediaElement.muted`](/de/docs/Web/API/HTMLMediaElement/muted)
  - : Ein boolescher Wert, der bestimmt, ob das Audio stummgeschaltet ist. `true`, wenn das Audio stummgeschaltet ist, andernfalls `false`.
- [`HTMLMediaElement.networkState`](/de/docs/Web/API/HTMLMediaElement/networkState) {{ReadOnlyInline}}
  - : Gibt einen `unsigned short` (Enumeration) zurück, der den aktuellen Zustand des Abrufs der Medien über das Netzwerk anzeigt.
- [`HTMLMediaElement.paused`](/de/docs/Web/API/HTMLMediaElement/paused) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Medienelement angehalten ist.
- [`HTMLMediaElement.playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate)
  - : Ein `double`, das die Wiedergabegeschwindigkeit des Mediums angibt.
- [`HTMLMediaElement.played`](/de/docs/Web/API/HTMLMediaElement/played) {{ReadOnlyInline}}
  - : Gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Bereiche der Medienquelle enthält, die der Browser abgespielt hat, falls vorhanden.
- [`HTMLMediaElement.preload`](/de/docs/Web/API/HTMLMediaElement/preload)
  - : Ein String, der das HTML-Attribut [`preload`](/de/docs/Web/HTML/Element/video#preload) widerspiegelt und angibt, welche Daten vorab geladen werden sollen, falls vorhanden. Mögliche Werte sind: `none`, `metadata`, `auto`.
- [`HTMLMediaElement.preservesPitch`](/de/docs/Web/API/HTMLMediaElement/preservesPitch)
  - : Ein boolescher Wert, der bestimmt, ob die Tonhöhe des Klangs erhalten bleibt. Wenn auf `false` gesetzt, passt sich die Tonhöhe der Geschwindigkeit des Audios an.
- [`HTMLMediaElement.readyState`](/de/docs/Web/API/HTMLMediaElement/readyState) {{ReadOnlyInline}}
  - : Gibt einen `unsigned short` (Enumeration) zurück, der den Bereitschaftszustand des Mediums anzeigt.
- [`HTMLMediaElement.remote`](/de/docs/Web/API/HTMLMediaElement/remote) {{ReadOnlyInline}}
  - : Gibt eine [`RemotePlayback`](/de/docs/Web/API/RemotePlayback)-Objektinstanz zurück, die dem Medienelement zugeordnet ist.
- [`HTMLMediaElement.seekable`](/de/docs/Web/API/HTMLMediaElement/seekable) {{ReadOnlyInline}}
  - : Gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Zeitbereiche enthält, die der Benutzer ansteuern kann, falls vorhanden.
- [`HTMLMediaElement.seeking`](/de/docs/Web/API/HTMLMediaElement/seeking) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Medium gerade dabei ist, zu einer neuen Position zu suchen.
- [`HTMLMediaElement.sinkId`](/de/docs/Web/API/HTMLMediaElement/sinkId) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt einen String zurück, der die eindeutige ID des Ausgabegeräts für Audio ist, oder einen leeren String, wenn das Standard-Audiogerät des Benutzeragenten verwendet wird.
- [`HTMLMediaElement.src`](/de/docs/Web/API/HTMLMediaElement/src)
  - : Ein String, der das HTML-Attribut [`src`](/de/docs/Web/HTML/Element/video#src) widerspiegelt, welches die URL einer zu verwendenden Medienressource enthält.
- [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)
  - : Ein [`MediaStream`](/de/docs/Web/API/MediaStream), der das Medium repräsentiert, das im aktuellen `HTMLMediaElement` wiedergegeben wird oder wurde, oder `null`, wenn nicht zugewiesen.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks) {{ReadOnlyInline}}
  - : Gibt ein [`TextTrackList`](/de/docs/Web/API/TextTrackList)-Objekt zurück, das die Liste der [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekte enthält, die im Element enthalten sind.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) {{ReadOnlyInline}}
  - : Gibt ein [`VideoTrackList`](/de/docs/Web/API/VideoTrackList)-Objekt zurück, das die Liste der [`VideoTrack`](/de/docs/Web/API/VideoTrack)-Objekte enthält, die im Element enthalten sind.
- [`HTMLMediaElement.volume`](/de/docs/Web/API/HTMLMediaElement/volume)
  - : Ein `double`, das die Lautstärke des Audios angibt, von 0.0 (stumm) bis 1.0 (am lautesten).

## Veraltete Eigenschaften

Diese Eigenschaften sind veraltet und sollten nicht mehr verwendet werden, auch wenn ein Browser sie noch unterstützt.

- [`HTMLMediaElement.controller`](/de/docs/Web/API/HTMLMediaElement/controller) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein [`MediaController`](/de/docs/Web/API/MediaController)-Objekt, das den dem Element zugeordneten Medienkontroller repräsentiert, oder `null`, falls keiner zugewiesen ist.
- [`HTMLMediaElement.mediaGroup`](/de/docs/Web/API/HTMLMediaElement/mediaGroup) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein String, der das `mediagroup` HTML-Attribut widerspiegelt, welches den Namen der Gruppe von Elementen angibt, zu der es gehört. Eine Gruppe von Medienelementen teilt sich einen gemeinsamen [`MediaController`](/de/docs/Web/API/MediaController).
- [`HTMLMediaElement.mozAudioCaptured`](/de/docs/Web/API/HTMLMediaElement/mozAudioCaptured) {{ReadOnlyInline}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Gibt einen booleschen Wert zurück, der mit der Audio-Stream-Erfassung zusammenhängt.
- [`HTMLMediaElement.mozFragmentEnd`](/de/docs/Web/API/HTMLMediaElement/mozFragmentEnd) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Ein `double`, das den Zugang zum Fragmentendzeitpunkt bietet, wenn das Medienelement eine Fragment-URI für `currentSrc` hat, sonst ist es gleich der Mediendauer.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von seinen Vorfahren [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node), und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`HTMLMediaElement.addTextTrack()`](/de/docs/Web/API/HTMLMediaElement/addTextTrack)
  - : Fügt einem Medienelement ein neues [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekt hinzu (wie z. B. eine Spur für Untertitel). Dies ist eine programmgesteuerte Schnittstelle und beeinflusst nicht das DOM.
- [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream)
  - : Gibt [`MediaStream`](/de/docs/Web/API/MediaStream) zurück, erfasst einen Stream des Medieninhalts.
- [`HTMLMediaElement.canPlayType()`](/de/docs/Web/API/HTMLMediaElement/canPlayType)
  - : Bei Angabe eines Strings, der einen MIME-Medientyp spezifiziert (möglicherweise mit dem [`codecs`-Parameter](/de/docs/Web/Media/Formats/codecs_parameter) enthalten), gibt `canPlayType()` den String `probably` zurück, wenn das Medium abgespielt werden sollte, `maybe`, wenn nicht genügend Informationen vorhanden sind, um festzustellen, ob das Medium abgespielt wird oder nicht, oder einen leeren String, wenn das Medium nicht abgespielt werden kann.
- [`HTMLMediaElement.fastSeek()`](/de/docs/Web/API/HTMLMediaElement/fastSeek)
  - : Sucht schnell zur angegebenen Zeit mit geringer Präzision.
- [`HTMLMediaElement.load()`](/de/docs/Web/API/HTMLMediaElement/load)
  - : Setzt das Medium zum Anfang zurück und wählt die beste verfügbare Quelle aus den bereitgestellten Quellen aus unter Verwendung des [`src`](/de/docs/Web/HTML/Element/video#src)-Attributs oder des {{HTMLElement("source")}}-Elements.
- [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause)
  - : Pausiert die Medienwiedergabe.
- [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play)
  - : Startet die Wiedergabe des Mediums.
- [`HTMLMediaElement.seekToNextFrame()`](/de/docs/Web/API/HTMLMediaElement/seekToNextFrame) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Sucht zum nächsten Frame im Medium. Diese nicht standardisierte, experimentelle Methode ermöglicht es, das Lesen und Rendern von Medien mit einer benutzerdefinierten Geschwindigkeit manuell zu steuern oder durch die Medien Frame für Frame zu gehen, um Filterungen oder andere Operationen durchzuführen.
- [`HTMLMediaElement.setMediaKeys()`](/de/docs/Web/API/HTMLMediaElement/setMediaKeys) {{SecureContext_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück. Legt die [`MediaKeys`](/de/docs/Web/API/MediaKeys)-Schlüssel fest, die bei der Entschlüsselung von Medien während der Wiedergabe verwendet werden.
- [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId) {{SecureContext_Inline}}
  - : Legt die ID des Audiogeräts fest, das für die Ausgabe verwendet werden soll, und gibt ein {{jsxref("Promise")}} zurück. Dies funktioniert nur, wenn die Anwendung autorisiert ist, das angegebene Gerät zu verwenden.

## Veraltete Methoden

_Diese Methoden sind veraltet und sollten nicht mehr verwendet werden, auch wenn ein Browser sie noch unterstützt._

- [`HTMLMediaElement.mozCaptureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) {{Non-standard_Inline}}
  - : Das Firefox-präfixierte Äquivalent von [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream). Siehe die [Browser-Kompatibilität](/de/docs/Web/API/HTMLMediaElement/captureStream#browser_compatibility) für Details.
- [`HTMLMediaElement.mozCaptureStreamUntilEnded()`](/de/docs/Web/API/HTMLMediaElement/mozCaptureStreamUntilEnded) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : \[enter description]
- [`HTMLMediaElement.mozGetMetadata()`](/de/docs/Web/API/HTMLMediaElement/mozGetMetadata) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Gibt ein {{jsxref('Object')}} zurück, das Eigenschaften enthält, die Metadaten aus der gerade gespielten Medienressource als `{key: value}`-Paare repräsentieren. Eine separate Kopie der Daten wird jedes Mal zurückgegeben, wenn die Methode aufgerufen wird. Diese Methode muss nach dem [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)-Ereignis aufgerufen werden.

## Events

_Erbt Ereignisse von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)_.

Hören Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener der `oneventname`-Eigenschaft dieses Interfaces zuweisen.

- [`abort`](/de/docs/Web/API/HTMLMediaElement/abort_event)
  - : Wird ausgelöst, wenn die Ressource nicht vollständig geladen wurde, jedoch nicht infolge eines Fehlers.
- [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)
  - : Wird ausgelöst, wenn der Benutzeragent das Medium abspielen kann, aber schätzt, dass **nicht** genügend Daten geladen wurden, um das Medium bis zum Ende ohne weiteres Pufferung der Inhalte abzuspielen.
- [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
  - : Wird ausgelöst, wenn der Benutzeragent das Medium abspielen kann und schätzt, dass genügend Daten geladen wurden, um das Medium bis zum Ende ohne weiteres Pufferung der Inhalte abzuspielen.
- [`durationchange`](/de/docs/Web/API/HTMLMediaElement/durationchange_event)
  - : Wird ausgelöst, wenn die Eigenschaft `duration` aktualisiert wurde.
- [`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)
  - : Wird ausgelöst, wenn das Medium leer geworden ist; zum Beispiel, wenn das Medium bereits geladen wurde (oder teilweise geladen wurde) und die Methode [`HTMLMediaElement.load()`](/de/docs/Web/API/HTMLMediaElement/load) aufgerufen wird, um es neu zu laden.
- [`encrypted`](/de/docs/Web/API/HTMLMediaElement/encrypted_event)
  - : Wird ausgelöst, wenn Initialisierungsdaten im Medium gefunden werden, die darauf hinweisen, dass es verschlüsselt ist.
- [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)
  - : Wird ausgelöst, wenn die Wiedergabe stoppt, weil das Ende des Mediums (<audio> oder <video>) erreicht wurde oder weil keine weiteren Daten verfügbar sind.
- [`error`](/de/docs/Web/API/HTMLMediaElement/error_event)
  - : Wird ausgelöst, wenn die Ressource aufgrund eines Fehlers nicht geladen werden konnte.
- [`loadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event)
  - : Wird ausgelöst, wenn der erste Frame des Mediums geladen wurde.
- [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
  - : Wird ausgelöst, wenn die Metadaten geladen wurden.
- [`loadstart`](/de/docs/Web/API/HTMLMediaElement/loadstart_event)
  - : Wird ausgelöst, wenn der Browser begonnen hat, eine Ressource zu laden.
- [`pause`](/de/docs/Web/API/HTMLMediaElement/pause_event)
  - : Wird ausgelöst, wenn eine Anforderung, die Wiedergabe zu pausieren, bearbeitet wird und die Aktivität ihren pausierten Zustand erreicht hat, am häufigsten, wenn die Methode [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) des Mediums aufgerufen wird.
- [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)
  - : Wird ausgelöst, wenn die Eigenschaft `paused` von `true` nach `false` geändert wird, infolge der Methode [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) oder des `autoplay`-Attributs.
- [`playing`](/de/docs/Web/API/HTMLMediaElement/playing_event)
  - : Wird ausgelöst, wenn die Wiedergabe nach einer Pause oder Verzögerung wegen fehlender Daten bereit ist zu starten.
- [`progress`](/de/docs/Web/API/HTMLMediaElement/progress_event)
  - : Wird periodisch ausgelöst, während der Browser eine Ressource lädt.
- [`ratechange`](/de/docs/Web/API/HTMLMediaElement/ratechange_event)
  - : Wird ausgelöst, wenn sich die Wiedergabegeschwindigkeit geändert hat.
- [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event)
  - : Wird ausgelöst, wenn eine Suchoperation abgeschlossen ist.
- [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
  - : Wird ausgelöst, wenn eine Suchoperation beginnt.
- [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
  - : Wird ausgelöst, wenn der Benutzeragent versucht, Mediendaten abzurufen, aber die Daten unerwarteterweise nicht rechtzeitig ankommen.
- [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event)
  - : Wird ausgelöst, wenn das Laden der Mediendaten angehalten wurde.
- [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)
  - : Wird ausgelöst, wenn die durch die Eigenschaft [`currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime) angegebene Zeit aktualisiert wurde.
- [`volumechange`](/de/docs/Web/API/HTMLMediaElement/volumechange_event)
  - : Wird ausgelöst, wenn sich die Lautstärke geändert hat.
- [`waiting`](/de/docs/Web/API/HTMLMediaElement/waiting_event)
  - : Wird ausgelöst, wenn die Wiedergabe gestoppt wurde, weil vorübergehend keine Daten verfügbar sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

### Referenzen

- {{HTMLElement("video")}} und {{HTMLElement("audio")}} HTML-Elemente
- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) und [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) Schnittstellen, abgeleitet von `HTMLMediaElement`

### Leitfäden

- [Web-Medientechnologien](/de/docs/Web/Media)
- Lernbereich: [Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [Leitfaden für Medientypen und -formate](/de/docs/Web/Media/Formats)
- [Umgang mit Problemen der Medienunterstützung in Webinhalten](/de/docs/Web/Media/Formats/Support_issues)
