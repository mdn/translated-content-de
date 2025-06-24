---
title: HTMLMediaElement
slug: Web/API/HTMLMediaElement
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML DOM")}}

Das **`HTMLMediaElement`** Interface erweitert [`HTMLElement`](/de/docs/Web/API/HTMLElement) um die Eigenschaften und Methoden, die zur Unterstützung grundlegender medienbezogener Funktionen erforderlich sind, die für Audio und Video üblich sind.

Die Elemente [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) und [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) erben beide dieses Interface.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinen Vorfahren [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die die [`AudioTrack`](/de/docs/Web/API/AudioTrack) Objekte auflistet, die im Element enthalten sind.
- [`HTMLMediaElement.autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay)

  - : Ein boolescher Wert, der das [`autoplay`](/de/docs/Web/HTML/Reference/Elements/video#autoplay) HTML-Attribut widerspiegelt und angibt, ob die Wiedergabe automatisch beginnen soll, sobald genügend Medien vorhanden sind, um dies ohne Unterbrechung zu tun.

    > [!NOTE]
    > Das automatische Abspielen von Audio, wenn der Benutzer es nicht erwartet oder wünscht, ist ein schlechtes Benutzererlebnis und sollte in den meisten Fällen vermieden werden, obwohl es Ausnahmen gibt. Weitere Informationen finden Sie im [Autoplay-Leitfaden für Medien- und Web-Audio-APIs](/de/docs/Web/Media/Guides/Autoplay). Beachten Sie, dass Browser Autoplay-Anfragen möglicherweise ignorieren. Daher sollten Sie sicherstellen, dass Ihr Code nicht davon abhängig ist, dass Autoplay funktioniert.

- [`HTMLMediaElement.buffered`](/de/docs/Web/API/HTMLMediaElement/buffered) {{ReadOnlyInline}}
  - : Gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges) Objekt zurück, das die Bereiche der Medienquelle angibt, die der Browser aktuell gepuffert hat (falls vorhanden), wenn die `buffered` Eigenschaft abgerufen wird.
- [`HTMLMediaElement.controls`](/de/docs/Web/API/HTMLMediaElement/controls)
  - : Ein boolescher Wert, der das [`controls`](/de/docs/Web/HTML/Reference/Elements/video#controls) HTML-Attribut widerspiegelt und angibt, ob Benutzeroberflächenelemente zur Steuerung der Ressource angezeigt werden sollen.
- [`HTMLMediaElement.controlsList`](/de/docs/Web/API/HTMLMediaElement/controlsList)
  - : Gibt eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurück, die dem Benutzeragenten hilft, auszuwählen, welche Steuerelemente auf dem Medienelement angezeigt werden sollen, wenn der Benutzeragent sein eigenes Set von Steuerelementen anzeigt. Die `DOMTokenList` nimmt einen oder mehrere der drei möglichen Werte an: `nodownload`, `nofullscreen` und `noremoteplayback`.
- [`HTMLMediaElement.crossOrigin`](/de/docs/Web/API/HTMLMediaElement/crossOrigin)
  - : Ein String, der die [CORS-Einstellung](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für dieses Medienelement angibt.
- [`HTMLMediaElement.currentSrc`](/de/docs/Web/API/HTMLMediaElement/currentSrc) {{ReadOnlyInline}}
  - : Gibt einen String mit der absoluten URL der gewählten Medienressource zurück.
- [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)
  - : Ein Wert mit doppelter Genauigkeit, der die aktuelle Wiedergabezeit in Sekunden angibt; wenn die Medien nicht gestartet und nicht gesucht wurden, entspricht dieser Wert der anfänglichen Wiedergabezeit der Medien. Das Setzen dieses Wertes sucht die Medien zu der neuen Zeit. Die Zeit wird relativ zur Zeitleiste der Medien angegeben.
- [`HTMLMediaElement.defaultMuted`](/de/docs/Web/API/HTMLMediaElement/defaultMuted)
  - : Ein boolescher Wert, der das [`muted`](/de/docs/Web/HTML/Reference/Elements/video#muted) HTML-Attribut widerspiegelt und angibt, ob die Audioausgabe des Medienelements standardmäßig stummgeschaltet sein soll.
- [`HTMLMediaElement.defaultPlaybackRate`](/de/docs/Web/API/HTMLMediaElement/defaultPlaybackRate)
  - : Ein `double`, der die Standardwiedergaberate für die Medien angibt.
- [`HTMLMediaElement.disableRemotePlayback`](/de/docs/Web/API/HTMLMediaElement/disableRemotePlayback)
  - : Ein boolescher Wert, der den Zustand der Fernwiedergabe festlegt oder zurückgibt und angibt, ob das Medienelement eine Benutzeroberfläche für die Fernwiedergabe haben darf.
- [`HTMLMediaElement.duration`](/de/docs/Web/API/HTMLMediaElement/duration) {{ReadOnlyInline}}
  - : Ein schreibgeschützter Wert mit doppelter Genauigkeit, der die Gesamtdauer der Medien in Sekunden angibt. Wenn keine Mediendaten verfügbar sind, ist der zurückgegebene Wert `NaN`. Wenn die Medien von unbestimmter Länge sind (z. B. gestreamte Live-Medien, die Medien eines WebRTC-Anrufs oder ähnliches), ist der Wert `Infinity`.
- [`HTMLMediaElement.ended`](/de/docs/Web/API/HTMLMediaElement/ended) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob das Medienelement das Abspielen beendet hat.
- [`HTMLMediaElement.error`](/de/docs/Web/API/HTMLMediaElement/error) {{ReadOnlyInline}}
  - : Gibt ein [`MediaError`](/de/docs/Web/API/MediaError) Objekt für den letzten Fehler zurück oder `null`, wenn kein Fehler aufgetreten ist.
- [`HTMLMediaElement.loop`](/de/docs/Web/API/HTMLMediaElement/loop)
  - : Ein boolescher Wert, der das [`loop`](/de/docs/Web/HTML/Reference/Elements/video#loop) HTML-Attribut widerspiegelt und angibt, ob das Medienelement neu starten soll, wenn es das Ende erreicht.
- [`HTMLMediaElement.mediaKeys`](/de/docs/Web/API/HTMLMediaElement/mediaKeys) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein [`MediaKeys`](/de/docs/Web/API/MediaKeys) Objekt zurück, das ein Satz von Schlüsseln ist, den das Element zur Entschlüsselung von Mediendaten während der Wiedergabe verwenden kann. Wenn kein Schlüssel verfügbar ist, kann es `null` sein.
- [`HTMLMediaElement.muted`](/de/docs/Web/API/HTMLMediaElement/muted)
  - : Ein boolescher Wert, der bestimmt, ob der Ton stummgeschaltet ist. `true`, wenn der Ton stummgeschaltet ist, andernfalls `false`.
- [`HTMLMediaElement.networkState`](/de/docs/Web/API/HTMLMediaElement/networkState) {{ReadOnlyInline}}
  - : Gibt ein `unsigned short` (Enumeration) zurück, das den aktuellen Zustand des Abrufens der Medien über das Netzwerk angibt.
- [`HTMLMediaElement.paused`](/de/docs/Web/API/HTMLMediaElement/paused) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob das Medienelement angehalten ist.
- [`HTMLMediaElement.playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate)
  - : Ein `double`, der die Wiedergabegeschwindigkeit der Medien angibt.
- [`HTMLMediaElement.played`](/de/docs/Web/API/HTMLMediaElement/played) {{ReadOnlyInline}}
  - : Gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges) Objekt zurück, das die Bereiche der Medienquelle enthält, die der Browser abgespielt hat, falls vorhanden.
- [`HTMLMediaElement.preload`](/de/docs/Web/API/HTMLMediaElement/preload)
  - : Ein String, der das [`preload`](/de/docs/Web/HTML/Reference/Elements/video#preload) HTML-Attribut widerspiegelt und angibt, welche Daten vorgeladen werden sollen, falls vorhanden. Mögliche Werte sind: `none`, `metadata`, `auto`.
- [`HTMLMediaElement.preservesPitch`](/de/docs/Web/API/HTMLMediaElement/preservesPitch)
  - : Ein boolescher Wert, der bestimmt, ob die Tonhöhe beibehalten wird. Wenn auf `false` gesetzt, passt sich die Tonhöhe der Geschwindigkeit des Audios an.
- [`HTMLMediaElement.readyState`](/de/docs/Web/API/HTMLMediaElement/readyState) {{ReadOnlyInline}}
  - : Gibt ein `unsigned short` (Enumeration) zurück, das den Bereitschaftszustand der Medien angibt.
- [`HTMLMediaElement.remote`](/de/docs/Web/API/HTMLMediaElement/remote) {{ReadOnlyInline}}
  - : Gibt ein [`RemotePlayback`](/de/docs/Web/API/RemotePlayback) Objekt zurück, das mit dem Medienelement verbunden ist.
- [`HTMLMediaElement.seekable`](/de/docs/Web/API/HTMLMediaElement/seekable) {{ReadOnlyInline}}
  - : Gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges) Objekt zurück, das die Zeitbereiche enthält, zu denen der Benutzer springen kann, falls vorhanden.
- [`HTMLMediaElement.seeking`](/de/docs/Web/API/HTMLMediaElement/seeking) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob die Medien dabei sind, an eine neue Position zu springen.
- [`HTMLMediaElement.sinkId`](/de/docs/Web/API/HTMLMediaElement/sinkId) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt einen String zurück, der die eindeutige ID des Audiogeräts angibt, das eine Ausgabe liefert, oder einen leeren String, wenn das Standard-Audiogerät des Benutzeragenten verwendet wird.
- [`HTMLMediaElement.src`](/de/docs/Web/API/HTMLMediaElement/src)
  - : Ein String, der das [`src`](/de/docs/Web/HTML/Reference/Elements/video#src) HTML-Attribut widerspiegelt und die URL einer zu verwendenden Medienressource enthält.
- [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)
  - : Ein Objekt, das als Quelle der mit dem `HTMLMediaElement` verbundenen Medien dient, oder `null`, wenn nicht zugewiesen.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks) {{ReadOnlyInline}}
  - : Gibt ein [`TextTrackList`](/de/docs/Web/API/TextTrackList) Objekt zurück, das die Liste der im Element enthaltenen [`TextTrack`](/de/docs/Web/API/TextTrack) Objekte enthält.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) {{ReadOnlyInline}}
  - : Gibt ein [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) Objekt zurück, das die Liste der im Element enthaltenen [`VideoTrack`](/de/docs/Web/API/VideoTrack) Objekte enthält.
- [`HTMLMediaElement.volume`](/de/docs/Web/API/HTMLMediaElement/volume)
  - : Ein `double`, der die Lautstärke angibt, von 0.0 (stumm) bis 1.0 (am lautesten).

## Veraltete Eigenschaften

Diese Eigenschaften sind veraltet und sollten nicht verwendet werden, selbst wenn ein Browser sie noch unterstützt.

- [`HTMLMediaElement.controller`](/de/docs/Web/API/HTMLMediaElement/controller) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein [`MediaController`](/de/docs/Web/API/MediaController) Objekt, das den dem Element zugewiesenen Mediencontroller darstellt, oder `null`, wenn keiner zugewiesen ist.
- [`HTMLMediaElement.mediaGroup`](/de/docs/Web/API/HTMLMediaElement/mediaGroup) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein String, der das `mediagroup` HTML-Attribut widerspiegelt und den Namen der Gruppe von Elementen angibt, zu der es gehört. Eine Gruppe von Medienelementen teilt sich einen gemeinsamen [`MediaController`](/de/docs/Web/API/MediaController).
- [`HTMLMediaElement.mozAudioCaptured`](/de/docs/Web/API/HTMLMediaElement/mozAudioCaptured) {{ReadOnlyInline}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Gibt einen booleschen Wert zurück. Bezogen auf die Erfassung des Audiostreams.
- [`HTMLMediaElement.mozFragmentEnd`](/de/docs/Web/API/HTMLMediaElement/mozFragmentEnd) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Ein `double`, das Zugriff auf das Fragment-Ende bietet, wenn das Medienelement eine Fragment-URI für `currentSrc` hat, andernfalls ist es gleich der Mediendauer.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von seinen Vorfahren [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`HTMLMediaElement.addTextTrack()`](/de/docs/Web/API/HTMLMediaElement/addTextTrack)
  - : Fügt ein neues [`TextTrack`](/de/docs/Web/API/TextTrack) Objekt (z. B. eine Spur für Untertitel) einem Medienelement hinzu. Dies ist eine rein programmatische Schnittstelle und hat keinen Einfluss auf das DOM.
- [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream)
  - : Gibt [`MediaStream`](/de/docs/Web/API/MediaStream) zurück und erfasst einen Stream des Medieninhalts.
- [`HTMLMediaElement.canPlayType()`](/de/docs/Web/API/HTMLMediaElement/canPlayType)
  - : Gegeben ein String, der einen MIME-Medientyp angibt (möglicherweise mit dem [`codecs` Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter)), gibt `canPlayType()` den String `probably` zurück, wenn die Medien abspielbar sein sollten, `maybe`, wenn nicht genügend Informationen vorliegen, um zu bestimmen, ob die Medien abgespielt werden können oder nicht, oder einen leeren String, wenn die Medien nicht abgespielt werden können.
- [`HTMLMediaElement.fastSeek()`](/de/docs/Web/API/HTMLMediaElement/fastSeek)
  - : Springt schnell zu der angegebenen Zeit mit geringer Präzision.
- [`HTMLMediaElement.load()`](/de/docs/Web/API/HTMLMediaElement/load)
  - : Setzt die Medien an den Anfang zurück und wählt die beste verfügbare Quelle aus den mittels des [`src`](/de/docs/Web/HTML/Reference/Elements/video#src) Attributs oder des {{HTMLElement("source")}} Elements bereitgestellten Quellen aus.
- [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause)
  - : Pausiert die Medienwiedergabe.
- [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play)
  - : Beginnt die Wiedergabe der Medien.
- [`HTMLMediaElement.seekToNextFrame()`](/de/docs/Web/API/HTMLMediaElement/seekToNextFrame) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Springt zum nächsten Frame in den Medien. Diese nicht standardisierte, experimentelle Methode ermöglicht es, das Lesen und Rendern von Medien mit benutzerdefinierter Geschwindigkeit manuell zu steuern oder frameweise durch die Medien zu gehen, um Filterungen oder andere Vorgänge durchzuführen.
- [`HTMLMediaElement.setMediaKeys()`](/de/docs/Web/API/HTMLMediaElement/setMediaKeys) {{SecureContext_Inline}}
  - : Gibt {{jsxref("Promise")}} zurück. Setzt die [`MediaKeys`](/de/docs/Web/API/MediaKeys) Schlüssel, die bei der Entschlüsselung von Medien während der Wiedergabe zu verwenden sind.
- [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId) {{SecureContext_Inline}}
  - : Setzt die ID des Audiogeräts für die Ausgabe und gibt ein {{jsxref("Promise")}} zurück. Dies funktioniert nur, wenn die Anwendung berechtigt ist, das angegebene Gerät zu verwenden.

## Veraltete Methoden

_Diese Methoden sind veraltet und sollten nicht verwendet werden, selbst wenn ein Browser sie noch unterstützt._

- [`HTMLMediaElement.mozCaptureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) {{Non-standard_Inline}}
  - : Das Firefox-spezifische Gegenstück von [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream). Siehe deren [Browser-Kompatibilität](/de/docs/Web/API/HTMLMediaElement/captureStream#browser_compatibility) für Details.
- [`HTMLMediaElement.mozCaptureStreamUntilEnded()`](/de/docs/Web/API/HTMLMediaElement/mozCaptureStreamUntilEnded) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : \[Beschreibung einfügen]
- [`HTMLMediaElement.mozGetMetadata()`](/de/docs/Web/API/HTMLMediaElement/mozGetMetadata) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Gibt {{jsxref('Object')}} zurück, das Eigenschaften enthält, die Metadaten der abspielenden Medienressource als `{key: value}` Paare darstellen. Eine separate Kopie der Daten wird jedes Mal zurückgegeben, wenn die Methode aufgerufen wird. Diese Methode muss nach dem [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event) Ereignis aufgerufen werden.

## Ereignisse

_Erbt Ereignisse von seinem Vorfahren [`HTMLElement`](/de/docs/Web/API/HTMLElement)_.

Diese Ereignisse können mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) überwacht werden oder indem ein Ereignislistener der `oneventname` Eigenschaft dieses Interfaces zugewiesen wird.

- [`abort`](/de/docs/Web/API/HTMLMediaElement/abort_event)
  - : Wird ausgelöst, wenn die Ressource nicht vollständig geladen wurde, aber nicht aufgrund eines Fehlers.
- [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)
  - : Wird ausgelöst, wenn der Benutzeragent die Medien abspielen kann, aber schätzt, dass **nicht** genügend Daten geladen wurden, um die Medien bis zum Ende abzuspielen, ohne für weiteres Puffern von Inhalten anzuhalten.
- [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
  - : Wird ausgelöst, wenn der Benutzeragent die Medien abspielen kann und schätzt, dass genügend Daten geladen wurden, um die Medien bis zum Ende abzuspielen, ohne für weiteres Puffern von Inhalten anzuhalten.
- [`durationchange`](/de/docs/Web/API/HTMLMediaElement/durationchange_event)
  - : Wird ausgelöst, wenn die Eigenschaft `duration` aktualisiert wurde.
- [`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)
  - : Wird ausgelöst, wenn die Medien leer geworden sind; zum Beispiel, wenn die Medien bereits geladen (oder teilweise geladen) wurden und die Methode [`HTMLMediaElement.load()`](/de/docs/Web/API/HTMLMediaElement/load) aufgerufen wird, um sie neu zu laden.
- [`encrypted`](/de/docs/Web/API/HTMLMediaElement/encrypted_event)
  - : Wird ausgelöst, wenn Initialisierungsdaten in den Medien gefunden werden, die darauf hinweisen, dass die Medien verschlüsselt sind.
- [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)
  - : Wird ausgelöst, wenn die Wiedergabe stoppt, wenn das Ende der Medien (`<audio>` oder `<video>`) erreicht wird oder weil keine weiteren Daten verfügbar sind.
- [`error`](/de/docs/Web/API/HTMLMediaElement/error_event)
  - : Wird ausgelöst, wenn die Ressource aufgrund eines Fehlers nicht geladen werden konnte.
- [`loadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event)
  - : Wird ausgelöst, wenn der erste Frame des Mediums fertig geladen ist.
- [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
  - : Wird ausgelöst, wenn die Metadaten geladen wurden.
- [`loadstart`](/de/docs/Web/API/HTMLMediaElement/loadstart_event)
  - : Wird ausgelöst, wenn der Browser begonnen hat, eine Ressource zu laden.
- [`pause`](/de/docs/Web/API/HTMLMediaElement/pause_event)
  - : Wird ausgelöst, wenn eine Anforderung zum Anhalten der Wiedergabe bearbeitet wird und die Aktivität ihren pausierten Zustand erreicht hat, was meist auftritt, wenn die Methode [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) des Mediums aufgerufen wird.
- [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)
  - : Wird ausgelöst, wenn die Eigenschaft `paused` von `true` auf `false` geändert wird, als Ergebnis der Methode [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) oder des `autoplay` Attributs.
- [`playing`](/de/docs/Web/API/HTMLMediaElement/playing_event)
  - : Wird ausgelöst, wenn die Wiedergabe nach einer Pause oder einer Verzögerung aufgrund fehlender Daten startbereit ist.
- [`progress`](/de/docs/Web/API/HTMLMediaElement/progress_event)
  - : Wird regelmäßig ausgelöst, während der Browser eine Ressource lädt.
- [`ratechange`](/de/docs/Web/API/HTMLMediaElement/ratechange_event)
  - : Wird ausgelöst, wenn die Wiedergabegeschwindigkeit geändert wurde.
- [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event)
  - : Wird ausgelöst, wenn eine Suchoperation abgeschlossen ist.
- [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
  - : Wird ausgelöst, wenn eine Suchoperation beginnt.
- [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
  - : Wird ausgelöst, wenn der Benutzeragent versucht, Mediendaten abzurufen, aber keine Daten unerwartet verfügbar sind.
- [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event)
  - : Wird ausgelöst, wenn das Laden von Mediendaten ausgesetzt wurde.
- [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)
  - : Wird ausgelöst, wenn die durch die [`currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime) Eigenschaft angegebene Zeit aktualisiert wurde.
- [`volumechange`](/de/docs/Web/API/HTMLMediaElement/volumechange_event)
  - : Wird ausgelöst, wenn sich die Lautstärke geändert hat.
- [`waiting`](/de/docs/Web/API/HTMLMediaElement/waiting_event)
  - : Wird ausgelöst, wenn die Wiedergabe gestoppt wurde aufgrund eines vorübergehenden Mangels an Daten.
- [`waitingforkey`](/de/docs/Web/API/HTMLMediaElement/waitingforkey_event)
  - : Wird ausgelöst, wenn die Wiedergabe erstmals blockiert ist, während auf einen Schlüssel gewartet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

### Referenzen

- {{HTMLElement("video")}} und {{HTMLElement("audio")}} HTML Elemente
- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) und [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) Interfaces, abgeleitet von `HTMLMediaElement`

### Leitfäden

- [Web-Medientechnologien](/de/docs/Web/Media)
- Lernbereich: [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Medientypen- und Formatleitfaden](/de/docs/Web/Media/Guides/Formats)
- [Umgang mit Medienunterstützungsproblemen in Webinhalten](/de/docs/Web/Media/Guides/Formats/Support_issues)
