---
title: HTMLMediaElement
slug: Web/API/HTMLMediaElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Das **`HTMLMediaElement`** Interface erweitert [`HTMLElement`](/de/docs/Web/API/HTMLElement) um Eigenschaften und Methoden, die benötigt werden, um grundlegende medienbezogene Fähigkeiten zu unterstützen, die bei Audio und Video üblich sind.

Die [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) und [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) Elemente erben beide dieses Interface.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Dieses Interface erbt auch Eigenschaften von seinen Vorfahren [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node), und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die die [`AudioTrack`](/de/docs/Web/API/AudioTrack) Objekte auflistet, die im Element enthalten sind.
- [`HTMLMediaElement.autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay)

  - : Ein boolescher Wert, der das [`autoplay`](/de/docs/Web/HTML/Reference/Elements/video#autoplay) HTML-Attribut widerspiegelt und angibt, ob die Wiedergabe automatisch beginnen soll, sobald genügend Medien verfügbar sind, um dies ohne Unterbrechung zu tun.

    > [!NOTE]
    > Audio automatisch abzuspielen, wenn der Benutzer es nicht erwartet oder wünscht, ist eine schlechte Benutzererfahrung und sollte in den meisten Fällen vermieden werden, obwohl es Ausnahmen gibt. Siehe den [Leitfaden zu Autoplay für Medien und Web Audio APIs](/de/docs/Web/Media/Guides/Autoplay) für mehr Informationen. Beachten Sie, dass Browser Autoplay-Anforderungen ignorieren könnten, daher sollten Sie sicherstellen, dass Ihr Code nicht davon abhängig ist, dass Autoplay funktioniert.

- [`HTMLMediaElement.buffered`](/de/docs/Web/API/HTMLMediaElement/buffered) {{ReadOnlyInline}}
  - : Gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges) Objekt zurück, das die Bereiche der Medienquelle angibt, die der Browser (falls vorhanden) gepuffert hat, zu dem Zeitpunkt, zu dem die `buffered` Eigenschaft abgerufen wird.
- [`HTMLMediaElement.controls`](/de/docs/Web/API/HTMLMediaElement/controls)
  - : Ein boolescher Wert, der das [`controls`](/de/docs/Web/HTML/Reference/Elements/video#controls) HTML-Attribut widerspiegelt und angibt, ob Benutzeroberflächenelemente zur Steuerung der Ressource angezeigt werden sollen.
- [`HTMLMediaElement.controlsList`](/de/docs/Web/API/HTMLMediaElement/controlsList)
  - : Gibt eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurück, die dem Benutzeragenten hilft, auszuwählen, welche Steuerungselemente auf dem Medienelement angezeigt werden sollen, wann immer der Benutzeragent seine eigene Kontrolle anzeigt. Die `DOMTokenList` nimmt einen oder mehrere der drei möglichen Werte an: `nodownload`, `nofullscreen`, und `noremoteplayback`.
- [`HTMLMediaElement.crossOrigin`](/de/docs/Web/API/HTMLMediaElement/crossOrigin)
  - : Ein String, der die [CORS-Einstellung](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für dieses Medienelement angibt.
- [`HTMLMediaElement.currentSrc`](/de/docs/Web/API/HTMLMediaElement/currentSrc) {{ReadOnlyInline}}
  - : Gibt einen String mit der absoluten URL der gewählten Medienressource zurück.
- [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)
  - : Ein Gleitkommawert doppelter Genauigkeit, der die aktuelle Wiedergabezeit in Sekunden angibt; wenn die Medien noch nicht gestartet wurden und nicht gesucht wurden, ist dieser Wert die anfängliche Wiedergabezeit des Mediums. Das Setzen dieses Wertes sucht das Medium auf die neue Zeit. Die Zeit wird relativ zur Zeitleiste des Mediums angegeben.
- [`HTMLMediaElement.defaultMuted`](/de/docs/Web/API/HTMLMediaElement/defaultMuted)
  - : Ein boolescher Wert, der das [`muted`](/de/docs/Web/HTML/Reference/Elements/video#muted) HTML-Attribut widerspiegelt, welches angibt, ob die Audioausgabe des Medienelements standardmäßig stummgeschaltet werden soll.
- [`HTMLMediaElement.defaultPlaybackRate`](/de/docs/Web/API/HTMLMediaElement/defaultPlaybackRate)
  - : Ein `double`, der die Standardwiedergaberate für das Medium angibt.
- [`HTMLMediaElement.disableRemotePlayback`](/de/docs/Web/API/HTMLMediaElement/disableRemotePlayback)
  - : Ein boolescher Wert, der den Fernwiedergabe-Zustand festlegt oder zurückgibt und angibt, ob das Medienelement eine Fernwiedergabe-Oberfläche haben darf.
- [`HTMLMediaElement.duration`](/de/docs/Web/API/HTMLMediaElement/duration) {{ReadOnlyInline}}
  - : Ein schreibgeschützter Gleitkommawert doppelter Genauigkeit, der die Gesamtdauer des Mediums in Sekunden angibt. Wenn keine Mediendaten verfügbar sind, ist der zurückgegebene Wert `NaN`. Wenn das Medium eine unbestimmte Länge hat (wie gestreamte Live-Medien, ein WebRTC-Anruf-Medium oder ähnliches), ist der Wert `+Infinity`.
- [`HTMLMediaElement.ended`](/de/docs/Web/API/HTMLMediaElement/ended) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob das Medienelement die Wiedergabe beendet hat.
- [`HTMLMediaElement.error`](/de/docs/Web/API/HTMLMediaElement/error) {{ReadOnlyInline}}
  - : Gibt ein [`MediaError`](/de/docs/Web/API/MediaError) Objekt für den letzten Fehler zurück oder `null`, wenn kein Fehler aufgetreten ist.
- [`HTMLMediaElement.loop`](/de/docs/Web/API/HTMLMediaElement/loop)
  - : Ein boolescher Wert, der das [`loop`](/de/docs/Web/HTML/Reference/Elements/video#loop) HTML-Attribut widerspiegelt und angibt, ob das Medienelement von vorne anfangen soll, wenn es das Ende erreicht.
- [`HTMLMediaElement.mediaKeys`](/de/docs/Web/API/HTMLMediaElement/mediaKeys) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein [`MediaKeys`](/de/docs/Web/API/MediaKeys) Objekt zurück, das einen Satz von Schlüsseln enthält, den das Element zur Entschlüsselung von Mediendaten während der Wiedergabe verwenden kann. Wenn kein Schlüssel verfügbar ist, kann es `null` sein.
- [`HTMLMediaElement.muted`](/de/docs/Web/API/HTMLMediaElement/muted)
  - : Ein boolescher Wert, der bestimmt, ob Audio stummgeschaltet ist. `true`, wenn das Audio stummgeschaltet ist und `false`, wenn nicht.
- [`HTMLMediaElement.networkState`](/de/docs/Web/API/HTMLMediaElement/networkState) {{ReadOnlyInline}}
  - : Gibt einen `unsigned short` (Enumeration) zurück, der den aktuellen Zustand der Abfrage der Medien über das Netzwerk angibt.
- [`HTMLMediaElement.paused`](/de/docs/Web/API/HTMLMediaElement/paused) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Medienelement pausiert ist.
- [`HTMLMediaElement.playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate)
  - : Ein `double`, der die Rate angibt, mit der das Medium wiedergegeben wird.
- [`HTMLMediaElement.played`](/de/docs/Web/API/HTMLMediaElement/played) {{ReadOnlyInline}}
  - : Gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges) Objekt zurück, das die Bereiche der Medienquelle enthält, die der Browser abgespielt hat, falls vorhanden.
- [`HTMLMediaElement.preload`](/de/docs/Web/API/HTMLMediaElement/preload)
  - : Ein String, der das [`preload`](/de/docs/Web/HTML/Reference/Elements/video#preload) HTML-Attribut widerspiegelt und angibt, welche Daten, falls vorhanden, vorab geladen werden sollen. Mögliche Werte sind: `none`, `metadata`, `auto`.
- [`HTMLMediaElement.preservesPitch`](/de/docs/Web/API/HTMLMediaElement/preservesPitch)
  - : Ein boolescher Wert, der bestimmt, ob die Tonhöhe des Klangs beibehalten wird. Wenn auf `false` gesetzt, passt sich die Tonhöhe der Geschwindigkeit des Audios an.
- [`HTMLMediaElement.readyState`](/de/docs/Web/API/HTMLMediaElement/readyState) {{ReadOnlyInline}}
  - : Gibt einen `unsigned short` (Enumeration) zurück, der den Bereitschaftszustand des Mediums angibt.
- [`HTMLMediaElement.remote`](/de/docs/Web/API/HTMLMediaElement/remote) {{ReadOnlyInline}}
  - : Gibt ein [`RemotePlayback`](/de/docs/Web/API/RemotePlayback) Objekt zurück, das mit dem Medienelement verbunden ist.
- [`HTMLMediaElement.seekable`](/de/docs/Web/API/HTMLMediaElement/seekable) {{ReadOnlyInline}}
  - : Gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges) Objekt zurück, das die Zeitbereiche enthält, zu denen der Benutzer springen kann, falls vorhanden.
- [`HTMLMediaElement.seeking`](/de/docs/Web/API/HTMLMediaElement/seeking) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Medium gerade eine neue Position ansteuert.
- [`HTMLMediaElement.sinkId`](/de/docs/Web/API/HTMLMediaElement/sinkId) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt einen String zurück, der die eindeutige ID des Audiogeräts ist, das die Ausgabe liefert, oder einen leeren String, wenn das Standard-Audiogerät des Benutzeragenten verwendet wird.
- [`HTMLMediaElement.src`](/de/docs/Web/API/HTMLMediaElement/src)
  - : Ein String, der das [`src`](/de/docs/Web/HTML/Reference/Elements/video#src) HTML-Attribut widerspiegelt und die URL einer zu verwendenden Medienressource enthält.
- [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)
  - : Ein Objekt, das als Quelle der mit dem `HTMLMediaElement` verbundenen Medien dient, oder `null`, wenn es nicht zugewiesen ist.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks) {{ReadOnlyInline}}
  - : Gibt ein [`TextTrackList`](/de/docs/Web/API/TextTrackList) Objekt zurück, das die Liste der [`TextTrack`](/de/docs/Web/API/TextTrack) Objekte enthält, die im Element enthalten sind.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) {{ReadOnlyInline}}
  - : Gibt ein [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) Objekt zurück, das die Liste der [`VideoTrack`](/de/docs/Web/API/VideoTrack) Objekte enthält, die im Element enthalten sind.
- [`HTMLMediaElement.volume`](/de/docs/Web/API/HTMLMediaElement/volume)
  - : Ein `double`, das die Lautstärke von 0.0 (stumm) bis 1.0 (am lautesten) angibt.

## Veraltete Eigenschaften

Diese Eigenschaften sind veraltet und sollten nicht verwendet werden, auch wenn ein Browser sie noch unterstützt.

- [`HTMLMediaElement.controller`](/de/docs/Web/API/HTMLMediaElement/controller) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein [`MediaController`](/de/docs/Web/API/MediaController) Objekt, das den dem Element zugewiesenen Mediencontroller darstellt, oder `null`, wenn keiner zugewiesen ist.
- [`HTMLMediaElement.mediaGroup`](/de/docs/Web/API/HTMLMediaElement/mediaGroup) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein String, der das `mediagroup` HTML-Attribut widerspiegelt und angibt, zu welcher Gruppe von Elementen es gehört. Eine Gruppe von Medienelementen teilt einen gemeinsamen [`MediaController`](/de/docs/Web/API/MediaController).
- [`HTMLMediaElement.mozAudioCaptured`](/de/docs/Web/API/HTMLMediaElement/mozAudioCaptured) {{ReadOnlyInline}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Gibt einen booleschen Wert zurück. Im Zusammenhang mit Audio-Stream-Aufnahme.
- [`HTMLMediaElement.mozFragmentEnd`](/de/docs/Web/API/HTMLMediaElement/mozFragmentEnd) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Ein `double`, das den Zugriff auf das Fragment-Ende ermöglicht, wenn das Medienelement eine Fragment-URI für `currentSrc` hat, andernfalls entspricht es der Mediendauer.

## Instanzmethoden

_Dieses Interface erbt auch Methoden von seinen Vorfahren [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node), und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`HTMLMediaElement.addTextTrack()`](/de/docs/Web/API/HTMLMediaElement/addTextTrack)
  - : Fügt ein neues [`TextTrack`](/de/docs/Web/API/TextTrack) Objekt (wie eine Spur für Untertitel) zu einem Medienelement hinzu. Dies ist eine programmgesteuerte Schnittstelle und beeinflusst nicht das DOM.
- [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream)
  - : Gibt [`MediaStream`](/de/docs/Web/API/MediaStream) zurück, erfasst einen Stream des Medieninhalts.
- [`HTMLMediaElement.canPlayType()`](/de/docs/Web/API/HTMLMediaElement/canPlayType)
  - : Angenommen, ein String, der einen MIME-Medientyp angibt (möglicherweise mit dem [`codecs` Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter) eingeschlossen), gibt `canPlayType()` den String `probably` zurück, wenn das Medium abspielbar sein sollte, `maybe`, wenn nicht genug Informationen vorliegen, um festzustellen, ob das Medium abgespielt werden kann, oder einen leeren String, wenn das Medium nicht abgespielt werden kann.
- [`HTMLMediaElement.fastSeek()`](/de/docs/Web/API/HTMLMediaElement/fastSeek)
  - : Sucht schnell zu der angegebenen Zeit mit geringer Präzision.
- [`HTMLMediaElement.load()`](/de/docs/Web/API/HTMLMediaElement/load)
  - : Setzt das Medium an den Anfang zurück und wählt die beste verfügbare Quelle aus den mit dem [`src`](/de/docs/Web/HTML/Reference/Elements/video#src) Attribut oder dem {{HTMLElement("source")}} Element bereitgestellten Quellen aus.
- [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause)
  - : Pausiert die Medienwiedergabe.
- [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play)
  - : Beginnt die Wiedergabe des Mediums.
- [`HTMLMediaElement.seekToNextFrame()`](/de/docs/Web/API/HTMLMediaElement/seekToNextFrame) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Sucht zum nächsten Bild im Medium. Diese nicht-standardisierte, experimentelle Methode ermöglicht es, das Lesen und Rendern von Medien mit einer benutzerdefinierten Geschwindigkeit manuell zu steuern oder durch die Medien Bild für Bild zu gehen, um Filterung oder andere Operationen durchzuführen.
- [`HTMLMediaElement.setMediaKeys()`](/de/docs/Web/API/HTMLMediaElement/setMediaKeys) {{SecureContext_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück. Setzt die [`MediaKeys`](/de/docs/Web/API/MediaKeys) Schlüssel, die bei der Entschlüsselung von Medien während der Wiedergabe verwendet werden.
- [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId) {{SecureContext_Inline}}
  - : Setzt die ID des Audiogeräts, das für die Ausgabe verwendet werden soll, und gibt ein {{jsxref("Promise")}} zurück. Dies funktioniert nur, wenn die Anwendung berechtigt ist, das angegebene Gerät zu verwenden.

## Veraltete Methoden

_Diese Methoden sind veraltet und sollten nicht verwendet werden, auch wenn ein Browser sie noch unterstützt._

- [`HTMLMediaElement.mozCaptureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) {{Non-standard_Inline}}
  - : Das Firefox-präfigierte Äquivalent zu [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream). Siehe dessen [Browser-Kompatibilität](/de/docs/Web/API/HTMLMediaElement/captureStream#browser_compatibility) für Details.
- [`HTMLMediaElement.mozCaptureStreamUntilEnded()`](/de/docs/Web/API/HTMLMediaElement/mozCaptureStreamUntilEnded) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : \[Beschreibung eingeben]
- [`HTMLMediaElement.mozGetMetadata()`](/de/docs/Web/API/HTMLMediaElement/mozGetMetadata) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Gibt {{jsxref('Object')}} zurück, das Eigenschaften enthält, die Metadaten von der abgespielten Medienressource als `{key: value}` Paare darstellen. Eine separate Kopie der Daten wird jedes Mal zurückgegeben, wenn die Methode aufgerufen wird. Diese Methode muss nach dem [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event) Ereignis aufgerufen werden.

## Ereignisse

_Erbt Ereignisse von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)_.

Hören Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener der `oneventname` Eigenschaft dieses Interface zuordnen.

- [`abort`](/de/docs/Web/API/HTMLMediaElement/abort_event)
  - : Ausgelöst, wenn die Ressource nicht vollständig geladen wurde, jedoch nicht als Ergebnis eines Fehlers.
- [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)
  - : Ausgelöst, wenn der Benutzeragent das Medium abspielen kann, aber schätzt, dass **nicht** genug Daten geladen wurden, um das Medium bis zu seinem Ende zu spielen, ohne für weiteres Puffern von Inhalten anhalten zu müssen.
- [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
  - : Ausgelöst, wenn der Benutzeragent das Medium abspielen kann und schätzt, dass genug Daten geladen wurden, um das Medium bis zu seinem Ende zu spielen, ohne für weiteres Puffern von Inhalten anhalten zu müssen.
- [`durationchange`](/de/docs/Web/API/HTMLMediaElement/durationchange_event)
  - : Ausgelöst, wenn die `duration`-Eigenschaft aktualisiert wurde.
- [`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)
  - : Ausgelöst, wenn das Medium leer geworden ist; zum Beispiel, wenn das Medium bereits geladen (oder teilweise geladen) wurde und die [`HTMLMediaElement.load()`](/de/docs/Web/API/HTMLMediaElement/load) Methode aufgerufen wird, um es neu zu laden.
- [`encrypted`](/de/docs/Web/API/HTMLMediaElement/encrypted_event)
  - : Ausgelöst, wenn Initialisierungsdaten in den Medien gefunden werden, die darauf hinweisen, dass die Medien verschlüsselt sind.
- [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)
  - : Ausgelöst, wenn die Wiedergabe stoppt, wenn das Ende des Mediums (`<audio>` oder `<video>`) erreicht ist oder weil keine weiteren Daten verfügbar sind.
- [`error`](/de/docs/Web/API/HTMLMediaElement/error_event)
  - : Ausgelöst, wenn die Ressource aufgrund eines Fehlers nicht geladen werden konnte.
- [`loadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event)
  - : Ausgelöst, wenn der erste Frame des Mediums fertig geladen ist.
- [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
  - : Ausgelöst, wenn die Metadaten geladen wurden.
- [`loadstart`](/de/docs/Web/API/HTMLMediaElement/loadstart_event)
  - : Ausgelöst, wenn der Browser begonnen hat, eine Ressource zu laden.
- [`pause`](/de/docs/Web/API/HTMLMediaElement/pause_event)
  - : Ausgelöst, wenn eine Anforderung zum Pausieren der Wiedergabe bearbeitet wird und die Aktivität ihren Pausenzustand erreicht hat, was am häufigsten auftritt, wenn die [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) Methode des Mediums aufgerufen wird.
- [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)
  - : Ausgelöst, wenn die `paused` Eigenschaft von `true` auf `false` geändert wird, als Ergebnis der [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) Methode oder des `autoplay`-Attributs.
- [`playing`](/de/docs/Web/API/HTMLMediaElement/playing_event)
  - : Ausgelöst, wenn die Wiedergabe nach dem Pausieren oder Verzögern aufgrund von Datenmangel bereit ist zu starten.
- [`progress`](/de/docs/Web/API/HTMLMediaElement/progress_event)
  - : Wird regelmäßig ausgelöst, während der Browser eine Ressource lädt.
- [`ratechange`](/de/docs/Web/API/HTMLMediaElement/ratechange_event)
  - : Ausgelöst, wenn sich die Wiedergaberate ändert.
- [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event)
  - : Ausgelöst, wenn ein Suchvorgang abgeschlossen ist.
- [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
  - : Ausgelöst, wenn ein Suchvorgang beginnt.
- [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
  - : Ausgelöst, wenn der Benutzeragent versucht, Mediendaten abzurufen, aber unerwarteterweise keine Daten kommen.
- [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event)
  - : Ausgelöst, wenn das Laden der Mediendaten angehalten wurde.
- [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)
  - : Ausgelöst, wenn die durch die [`currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime) Eigenschaft angegebene Zeit aktualisiert wurde.
- [`volumechange`](/de/docs/Web/API/HTMLMediaElement/volumechange_event)
  - : Ausgelöst, wenn sich die Lautstärke verändert hat.
- [`waiting`](/de/docs/Web/API/HTMLMediaElement/waiting_event)
  - : Ausgelöst, wenn die Wiedergabe aufgrund eines vorübergehenden Datenmangels gestoppt hat.
- [`waitingforkey`](/de/docs/Web/API/HTMLMediaElement/waitingforkey_event)
  - : Ausgelöst, wenn die Wiedergabe zuerst blockiert wird, während auf einen Schlüssel gewartet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

### Referenzen

- {{HTMLElement("video")}} und {{HTMLElement("audio")}} HTML-Elemente
- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) und [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) Interfaces, abgeleitet von `HTMLMediaElement`

### Leitfäden

- [Web-Medientechnologien](/de/docs/Web/Media)
- Lernbereich: [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Medientyp- und Format-Leitfaden](/de/docs/Web/Media/Guides/Formats)
- [Umgang mit Medienunterstützungsproblemen in Web-Inhalten](/de/docs/Web/Media/Guides/Formats/Support_issues)
