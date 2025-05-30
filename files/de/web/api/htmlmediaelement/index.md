---
title: HTMLMediaElement
slug: Web/API/HTMLMediaElement
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{APIRef("HTML DOM")}}

Das **`HTMLMediaElement`**-Interface erweitert [`HTMLElement`](/de/docs/Web/API/HTMLElement) um die Eigenschaften und Methoden, die benötigt werden, um grundlegende medienbezogene Fähigkeiten zu unterstützen, die sowohl für Audio als auch Video üblich sind.

Die [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) und [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)-Elemente erben beide dieses Interface.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinen Vorfahren [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Ein [`AudioTrackList`](/de/docs/Web/API/AudioTrackList)-Objekt, das die [`AudioTrack`](/de/docs/Web/API/AudioTrack)-Objekte im Element auflistet.
- [`HTMLMediaElement.autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay)

  - : Ein boolescher Wert, der das HTML-Attribut [`autoplay`](/de/docs/Web/HTML/Reference/Elements/video#autoplay) widerspiegelt und angibt, ob die Wiedergabe automatisch beginnen soll, sobald genügend Medien verfügbar sind, um dies ohne Unterbrechung zu tun.

    > [!NOTE]
    > Das automatische Abspielen von Audio, wenn der Benutzer es nicht erwartet oder wünscht, ist eine schlechte Benutzererfahrung und sollte in den meisten Fällen vermieden werden, auch wenn es Ausnahmen gibt. Siehe den [Leitfaden zur Autoplay für Medien und Web Audio APIs](/de/docs/Web/Media/Guides/Autoplay) für weitere Informationen. Beachten Sie, dass Browser Autoplay-Anfragen ignorieren können, daher sollten Sie sicherstellen, dass Ihr Code nicht davon abhängt, dass Autoplay funktioniert.

- [`HTMLMediaElement.buffered`](/de/docs/Web/API/HTMLMediaElement/buffered) {{ReadOnlyInline}}
  - : Gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Bereiche der Medienquelle anzeigt, die der Browser zum Zeitpunkt des Zugriffs auf die `buffered`-Eigenschaft zwischengespeichert hat.
- [`HTMLMediaElement.controls`](/de/docs/Web/API/HTMLMediaElement/controls)
  - : Ein boolescher Wert, der das HTML-Attribut [`controls`](/de/docs/Web/HTML/Reference/Elements/video#controls) widerspiegelt und angibt, ob Benutzeroberflächen-Elemente zur Steuerung der Ressource angezeigt werden sollen.
- [`HTMLMediaElement.controlsList`](/de/docs/Web/API/HTMLMediaElement/controlsList)
  - : Gibt eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurück, die dem Benutzeragenten hilft, auszuwählen, welche Steuerelemente auf dem Medienelement angezeigt werden sollen, wann immer der Benutzeragent seine eigenen Steuerelemente anzeigt. Die `DOMTokenList` nimmt einen oder mehrere der drei möglichen Werte an: `nodownload`, `nofullscreen` und `noremoteplayback`.
- [`HTMLMediaElement.crossOrigin`](/de/docs/Web/API/HTMLMediaElement/crossOrigin)
  - : Ein String, der die [CORS-Einstellung](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für dieses Medienelement angibt.
- [`HTMLMediaElement.currentSrc`](/de/docs/Web/API/HTMLMediaElement/currentSrc) {{ReadOnlyInline}}
  - : Gibt einen String mit der absoluten URL der gewählten Medienressource zurück.
- [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)
  - : Ein Gleitkommawert mit doppelter Präzision, der die aktuelle Wiedergabezeit in Sekunden angibt; wenn das Medium noch nicht gestartet hat und nicht navigiert wurde, ist dieser Wert die initiale Wiedergabezeit des Mediums. Durch das Setzen dieses Werts wird das Medium auf die neue Zeit verschoben. Die Zeit wird relativ zur Zeitleiste des Mediums angegeben.
- [`HTMLMediaElement.defaultMuted`](/de/docs/Web/API/HTMLMediaElement/defaultMuted)
  - : Ein boolescher Wert, der das HTML-Attribut [`muted`](/de/docs/Web/HTML/Reference/Elements/video#muted) widerspiegelt und angibt, ob die Audioausgabe des Medienelements standardmäßig stummgeschaltet sein soll.
- [`HTMLMediaElement.defaultPlaybackRate`](/de/docs/Web/API/HTMLMediaElement/defaultPlaybackRate)
  - : Ein `double`, der die Standard-Wiedergaberate für das Medium angibt.
- [`HTMLMediaElement.disableRemotePlayback`](/de/docs/Web/API/HTMLMediaElement/disableRemotePlayback)
  - : Ein boolescher Wert, der den Zustand der Fernwiedergabe festlegt oder zurückgibt und angibt, ob dem Medienelement das Vorhandensein einer Fernwiedergabe-Benutzeroberfläche erlaubt ist.
- [`HTMLMediaElement.duration`](/de/docs/Web/API/HTMLMediaElement/duration) {{ReadOnlyInline}}
  - : Ein schreibgeschützter Gleitkommawert mit doppelter Genauigkeit, der die gesamte Dauer des Mediums in Sekunden angibt. Wenn keine Mediendaten verfügbar sind, wird der Wert `NaN` zurückgegeben. Wenn das Medium eine unbestimmte Länge hat (wie gestreamte Live-Medien, ein WebRTC-Anrufmedium oder Ähnliches), ist der Wert `Infinity`.
- [`HTMLMediaElement.ended`](/de/docs/Web/API/HTMLMediaElement/ended) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Medienelement die Wiedergabe beendet hat.
- [`HTMLMediaElement.error`](/de/docs/Web/API/HTMLMediaElement/error) {{ReadOnlyInline}}
  - : Gibt ein [`MediaError`](/de/docs/Web/API/MediaError)-Objekt für den letzten Fehler zurück oder `null`, wenn kein Fehler aufgetreten ist.
- [`HTMLMediaElement.loop`](/de/docs/Web/API/HTMLMediaElement/loop)
  - : Ein boolescher Wert, der das HTML-Attribut [`loop`](/de/docs/Web/HTML/Reference/Elements/video#loop) widerspiegelt und angibt, ob das Medienelement von vorne beginnen soll, wenn es das Ende erreicht.
- [`HTMLMediaElement.mediaKeys`](/de/docs/Web/API/HTMLMediaElement/mediaKeys) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein [`MediaKeys`](/de/docs/Web/API/MediaKeys)-Objekt zurück, das eine Gruppe von Schlüsseln repräsentiert, die das Element zum Entschlüsseln von Mediendaten während der Wiedergabe verwenden kann. Wenn kein Schlüssel verfügbar ist, kann es `null` sein.
- [`HTMLMediaElement.muted`](/de/docs/Web/API/HTMLMediaElement/muted)
  - : Ein boolescher Wert, der bestimmt, ob der Ton stummgeschaltet ist. `true`, wenn der Ton stummgeschaltet ist, andernfalls `false`.
- [`HTMLMediaElement.networkState`](/de/docs/Web/API/HTMLMediaElement/networkState) {{ReadOnlyInline}}
  - : Gibt einen `unsigned short` (Enumeration) zurück, der den aktuellen Zustand beim Laden des Mediums über das Netzwerk angibt.
- [`HTMLMediaElement.paused`](/de/docs/Web/API/HTMLMediaElement/paused) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Medienelement pausiert ist.
- [`HTMLMediaElement.playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate)
  - : Ein `double`, der die Rate angibt, mit der das Medium wiedergegeben wird.
- [`HTMLMediaElement.played`](/de/docs/Web/API/HTMLMediaElement/played) {{ReadOnlyInline}}
  - : Gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Bereiche der Medienquelle enthält, die der Browser, wenn überhaupt, abgespielt hat.
- [`HTMLMediaElement.preload`](/de/docs/Web/API/HTMLMediaElement/preload)
  - : Ein String, der das HTML-Attribut [`preload`](/de/docs/Web/HTML/Reference/Elements/video#preload) widerspiegelt und angibt, welche Daten, falls vorhanden, vorab geladen werden sollen. Mögliche Werte sind: `none`, `metadata`, `auto`.
- [`HTMLMediaElement.preservesPitch`](/de/docs/Web/API/HTMLMediaElement/preservesPitch)
  - : Ein boolescher Wert, der bestimmt, ob die Tonhöhe des Klangs beibehalten wird. Wenn auf `false` gesetzt, passt sich die Tonhöhe der Geschwindigkeit des Audios an.
- [`HTMLMediaElement.readyState`](/de/docs/Web/API/HTMLMediaElement/readyState) {{ReadOnlyInline}}
  - : Gibt einen `unsigned short` (Enumeration) zurück, der den Zustandsgrad der Medienbereitschaft angibt.
- [`HTMLMediaElement.remote`](/de/docs/Web/API/HTMLMediaElement/remote) {{ReadOnlyInline}}
  - : Gibt ein [`RemotePlayback`](/de/docs/Web/API/RemotePlayback)-Objekt zurück, das mit dem Medienelement verbunden ist.
- [`HTMLMediaElement.seekable`](/de/docs/Web/API/HTMLMediaElement/seekable) {{ReadOnlyInline}}
  - : Gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Zeitbereiche enthält, zu denen der Benutzer, wenn überhaupt, springen kann.
- [`HTMLMediaElement.seeking`](/de/docs/Web/API/HTMLMediaElement/seeking) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Medium gerade versucht, sich an eine neue Position zu bewegen.
- [`HTMLMediaElement.sinkId`](/de/docs/Web/API/HTMLMediaElement/sinkId) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt einen String zurück, der die eindeutige ID des Audiogeräts ist, das die Ausgabe liefert, oder einen leeren String, wenn das Standard-Audiogerät des Benutzeragenten verwendet wird.
- [`HTMLMediaElement.src`](/de/docs/Web/API/HTMLMediaElement/src)
  - : Ein String, der das HTML-Attribut [`src`](/de/docs/Web/HTML/Reference/Elements/video#src) widerspiegelt, welches die URL einer zu nutzenden Medienressource enthält.
- [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)
  - : Ein Objekt, das als Quelle des mit `HTMLMediaElement` verbundenen Mediums dient oder `null`, wenn nicht zugewiesen.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks) {{ReadOnlyInline}}
  - : Gibt ein [`TextTrackList`](/de/docs/Web/API/TextTrackList)-Objekt zurück, das die Liste der [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekte enthält, die im Element enthalten sind.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) {{ReadOnlyInline}}
  - : Gibt ein [`VideoTrackList`](/de/docs/Web/API/VideoTrackList)-Objekt zurück, das die Liste der [`VideoTrack`](/de/docs/Web/API/VideoTrack)-Objekte enthält, die im Element enthalten sind.
- [`HTMLMediaElement.volume`](/de/docs/Web/API/HTMLMediaElement/volume)
  - : Ein `double`, das die Lautstärke des Audios angibt, von 0.0 (leise) bis 1.0 (am lautesten).

## Veraltete Eigenschaften

Diese Eigenschaften sind veraltet und sollten nicht verwendet werden, selbst wenn ein Browser sie noch unterstützt.

- [`HTMLMediaElement.controller`](/de/docs/Web/API/HTMLMediaElement/controller) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein [`MediaController`](/de/docs/Web/API/MediaController)-Objekt, das den dem Element zugewiesenen Medien-Controller repräsentiert, oder `null`, wenn keiner zugewiesen ist.
- [`HTMLMediaElement.mediaGroup`](/de/docs/Web/API/HTMLMediaElement/mediaGroup) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein String, der das HTML-Attribut `mediagroup` widerspiegelt und angibt, zu welcher Gruppe von Elementen es gehört. Eine Gruppe von Medienelementen teilt einen gemeinsamen [`MediaController`](/de/docs/Web/API/MediaController).
- [`HTMLMediaElement.mozAudioCaptured`](/de/docs/Web/API/HTMLMediaElement/mozAudioCaptured) {{ReadOnlyInline}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Gibt einen booleschen Wert zurück. Steht im Zusammenhang mit der Erfassung von Audiostreams.
- [`HTMLMediaElement.mozFragmentEnd`](/de/docs/Web/API/HTMLMediaElement/mozFragmentEnd) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Ein `double`, das Zugriff auf die Fragment-Endzeit bietet, wenn das Medienelement eine Fragment-URI für `currentSrc` hat, andernfalls ist es gleich der Mediendauer.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von seinen Vorfahren [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`HTMLMediaElement.addTextTrack()`](/de/docs/Web/API/HTMLMediaElement/addTextTrack)
  - : Fügt dem Medienelement ein neues [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekt (wie beispielsweise eine Spur für Untertitel) hinzu. Dies ist eine programmgesteuerte Schnittstelle und beeinflusst nicht das DOM.
- [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream)
  - : Gibt [`MediaStream`](/de/docs/Web/API/MediaStream) zurück und erfasst einen Stream des Medieninhalts.
- [`HTMLMediaElement.canPlayType()`](/de/docs/Web/API/HTMLMediaElement/canPlayType)
  - : Angenommen, ein String, der einen MIME-Mediatyp spezifiziert (möglicherweise mit dem [`codecs` Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter) enthalten), wird übergeben, gibt `canPlayType()` den String `probably` zurück, wenn das Medium abspielbar sein sollte, `maybe`, wenn nicht genug Informationen vorhanden sind, um zu bestimmen, ob das Medium abgespielt werden kann oder nicht, oder einen leeren String, wenn das Medium nicht abgespielt werden kann.
- [`HTMLMediaElement.fastSeek()`](/de/docs/Web/API/HTMLMediaElement/fastSeek)
  - : Springt schnell mit geringer Präzision zur angegebenen Zeit.
- [`HTMLMediaElement.load()`](/de/docs/Web/API/HTMLMediaElement/load)
  - : Setzt das Medium auf den Anfang zurück und wählt die beste verfügbare Quelle aus den bereitgestellten Quellen über das [`src`](/de/docs/Web/HTML/Reference/Elements/video#src)-Attribut oder das {{HTMLElement("source")}}-Element aus.
- [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause)
  - : Pausiert die Medienwiedergabe.
- [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play)
  - : Beginnt mit der Wiedergabe der Medien.
- [`HTMLMediaElement.seekToNextFrame()`](/de/docs/Web/API/HTMLMediaElement/seekToNextFrame) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Springt zum nächsten Frame im Medium. Diese nicht-standardisierte, experimentelle Methode ermöglicht es, das Lesen und Rendern von Medien manuell mit einer benutzerdefinierten Geschwindigkeit zu steuern oder das Medium frameweise durchzugehen, um Filterung oder andere Operationen durchzuführen.
- [`HTMLMediaElement.setMediaKeys()`](/de/docs/Web/API/HTMLMediaElement/setMediaKeys) {{SecureContext_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück. Setzt die [`MediaKeys`](/de/docs/Web/API/MediaKeys), die zum Entschlüsseln von Medien während der Wiedergabe verwendet werden sollen.
- [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId) {{SecureContext_Inline}}
  - : Setzt die ID des Audiogeräts, das für die Ausgabe verwendet werden soll, und gibt ein {{jsxref("Promise")}} zurück. Dies funktioniert nur, wenn die Anwendung berechtigt ist, das angegebene Gerät zu verwenden.

## Veraltete Methoden

_Diese Methoden sind veraltet und sollten nicht verwendet werden, selbst wenn ein Browser sie noch unterstützt._

- [`HTMLMediaElement.mozCaptureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) {{Non-standard_Inline}}
  - : Das Firefox-präfixierte Äquivalent von [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream). Siehe die [Browser-Kompatibilität](/de/docs/Web/API/HTMLMediaElement/captureStream#browser_compatibility) für Details.
- [`HTMLMediaElement.mozCaptureStreamUntilEnded()`](/de/docs/Web/API/HTMLMediaElement/mozCaptureStreamUntilEnded) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : \[Beschreibung eingeben]
- [`HTMLMediaElement.mozGetMetadata()`](/de/docs/Web/API/HTMLMediaElement/mozGetMetadata) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Gibt ein {{jsxref('Object')}} zurück, das Eigenschaften enthält, die Metadaten aus der abspielenden Medienressource als `{key: value}`-Paare darstellen. Jedes Mal, wenn die Methode aufgerufen wird, wird eine separate Kopie der Daten zurückgegeben. Diese Methode muss aufgerufen werden, nachdem das [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)-Ereignis ausgelöst wurde.

## Ereignisse

_Erbt Ereignisse von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)_.

Hören Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Event-Listener der `oneventname`-Eigenschaft dieser Schnittstelle zuweisen.

- [`abort`](/de/docs/Web/API/HTMLMediaElement/abort_event)
  - : Wird ausgelöst, wenn die Ressource nicht vollständig geladen wurde, jedoch nicht aufgrund eines Fehlers.
- [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)
  - : Wird ausgelöst, wenn der Benutzeragent das Medium abspielen kann, jedoch schätzt, dass **nicht** genug Daten geladen wurden, um das Medium bis zum Ende ohne weiteres Puffern des Inhalts abzuspielen.
- [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
  - : Wird ausgelöst, wenn der Benutzeragent das Medium abspielen kann und schätzt, dass genug Daten geladen wurden, um das Medium bis zum Ende ohne weiteres Puffern des Inhalts abzuspielen.
- [`durationchange`](/de/docs/Web/API/HTMLMediaElement/durationchange_event)
  - : Wird ausgelöst, wenn die Dauer-Eigenschaft aktualisiert wurde.
- [`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)
  - : Wird ausgelöst, wenn das Medium leer geworden ist; beispielsweise, wenn das Medium bereits geladen (oder teilweise geladen) wurde und die Methode [`HTMLMediaElement.load()`](/de/docs/Web/API/HTMLMediaElement/load) aufgerufen wird, um es neu zu laden.
- [`encrypted`](/de/docs/Web/API/HTMLMediaElement/encrypted_event)
  - : Wird ausgelöst, wenn Initialisierungsdaten im Medium gefunden werden, die darauf hinweisen, dass das Medium verschlüsselt ist.
- [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)
  - : Wird ausgelöst, wenn die Wiedergabe gestoppt wird, weil das Ende des Mediums (`<audio>` oder `<video>`) erreicht wird oder weil keine weiteren Daten verfügbar sind.
- [`error`](/de/docs/Web/API/HTMLMediaElement/error_event)
  - : Wird ausgelöst, wenn die Ressource aufgrund eines Fehlers nicht geladen werden konnte.
- [`loadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event)
  - : Wird ausgelöst, wenn das erste Bild des Mediums vollständig geladen ist.
- [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
  - : Wird ausgelöst, wenn die Metadaten geladen wurden.
- [`loadstart`](/de/docs/Web/API/HTMLMediaElement/loadstart_event)
  - : Wird ausgelöst, wenn der Browser begonnen hat, eine Ressource zu laden.
- [`pause`](/de/docs/Web/API/HTMLMediaElement/pause_event)
  - : Wird ausgelöst, wenn eine Anfrage zum Pausieren der Wiedergabe verarbeitet wird und die Aktivität in den pausierten Zustand übergegangen ist, am häufigsten, wenn die Methode [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) des Mediums aufgerufen wird.
- [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)
  - : Wird ausgelöst, wenn sich die `paused`-Eigenschaft von `true` nach `false` ändert, als Ergebnis der [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play)-Methode oder des `autoplay`-Attributs.
- [`playing`](/de/docs/Web/API/HTMLMediaElement/playing_event)
  - : Wird ausgelöst, wenn die Wiedergabe startbereit ist, nachdem sie pausiert wurde oder aus Mangel an Daten verzögert wurde.
- [`progress`](/de/docs/Web/API/HTMLMediaElement/progress_event)
  - : Wird in regelmäßigen Abständen ausgelöst, während der Browser eine Ressource lädt.
- [`ratechange`](/de/docs/Web/API/HTMLMediaElement/ratechange_event)
  - : Wird ausgelöst, wenn sich die Wiedergaberate geändert hat.
- [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event)
  - : Wird ausgelöst, wenn eine Suchoperation abgeschlossen ist.
- [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
  - : Wird ausgelöst, wenn eine Suchoperation beginnt.
- [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
  - : Wird ausgelöst, wenn der Benutzeragent versucht, Mediendaten abzurufen, die Daten jedoch unerwartet nicht zugänglich sind.
- [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event)
  - : Wird ausgelöst, wenn das Laden von Mediendaten ausgesetzt wurde.
- [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)
  - : Wird ausgelöst, wenn die vom [`currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)-Eigenschaft angezeigte Zeit aktualisiert wurde.
- [`volumechange`](/de/docs/Web/API/HTMLMediaElement/volumechange_event)
  - : Wird ausgelöst, wenn sich die Lautstärke geändert hat.
- [`waiting`](/de/docs/Web/API/HTMLMediaElement/waiting_event)
  - : Wird ausgelöst, wenn die Wiedergabe gestoppt wurde, weil vorübergehend keine Daten verfügbar sind.
- [`waitingforkey`](/de/docs/Web/API/HTMLMediaElement/waitingforkey_event)
  - : Wird ausgelöst, wenn die Wiedergabe zuerst blockiert wird, während auf einen Schlüssel gewartet wird.

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
- Lernbereich: [HTML-Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Leitfaden zu Medientyp und -format](/de/docs/Web/Media/Guides/Formats)
- [Umgang mit Medienunterstützungsproblemen in Webinhalten](/de/docs/Web/Media/Guides/Formats/Support_issues)
