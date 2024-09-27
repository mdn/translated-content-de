---
title: HTMLMediaElement
slug: Web/API/HTMLMediaElement
l10n:
  sourceCommit: c640274a19227cd5790912ea76841732baa6731f
---

{{APIRef("HTML DOM")}}

Das **`HTMLMediaElement`** Interface erweitert [`HTMLElement`](/de/docs/Web/API/HTMLElement) um die Eigenschaften und Methoden, die notwendig sind, um grundlegende medienbezogene Fähigkeiten zu unterstützen, die für Audio und Video üblich sind.

Die [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) und [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) Elemente erben beide von diesem Interface.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinen Vorfahren [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die die [`AudioTrack`](/de/docs/Web/API/AudioTrack)-Objekte im Element auflistet.
- [`HTMLMediaElement.autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay)

  - : Ein boolescher Wert, der das [`autoplay`](/de/docs/Web/HTML/Element/video#autoplay) HTML-Attribut widerspiegelt, das angibt, ob die Wiedergabe automatisch beginnen soll, sobald genügend Medien verfügbar sind, um dies ohne Unterbrechung zu tun.

    > [!NOTE]
    > Das automatische Abspielen von Audio, wenn der Benutzer es nicht erwartet oder erwünscht, ist eine schlechte Benutzererfahrung und sollte in den meisten Fällen vermieden werden, obwohl es Ausnahmen gibt. Siehe den [Autoplay-Leitfaden für Medien und Web Audio APIs](/de/docs/Web/Media/Autoplay_guide) für weitere Informationen. Beachten Sie, dass Browser Autoplay-Anfragen ignorieren können, weshalb Sie sicherstellen sollten, dass Ihr Code nicht von der Funktionalität des Autoplay abhängt.

- [`HTMLMediaElement.buffered`](/de/docs/Web/API/HTMLMediaElement/buffered) {{ReadOnlyInline}}
  - : Gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Bereiche der Medienquelle anzeigt, die der Browser gepuffert hat (falls vorhanden), zu dem Zeitpunkt, zu dem auf die `buffered`-Eigenschaft zugegriffen wird.
- [`HTMLMediaElement.controls`](/de/docs/Web/API/HTMLMediaElement/controls)
  - : Ein boolescher Wert, der das [`controls`](/de/docs/Web/HTML/Element/video#controls) HTML-Attribut widerspiegelt und angibt, ob Benutzeroberfläche-Elemente zum Steuern der Ressource angezeigt werden sollen.
- [`HTMLMediaElement.controlsList`](/de/docs/Web/API/HTMLMediaElement/controlsList) {{ReadOnlyInline}}
  - : Gibt eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurück, die dem Benutzeragenten hilft, auszuwählen, welche Steuerungen auf dem Media-Element angezeigt werden sollen, wenn der Benutzeragent seine eigenen Steuerungen anzeigt. Die `DOMTokenList` kann einen oder mehrere der folgenden Werte enthalten: `nodownload`, `nofullscreen`, und `noremoteplayback`.
- [`HTMLMediaElement.crossOrigin`](/de/docs/Web/API/HTMLMediaElement/crossOrigin)
  - : Ein String, der die [CORS-Einstellung](/de/docs/Web/HTML/Attributes/crossorigin) für dieses Media-Element angibt.
- [`HTMLMediaElement.currentSrc`](/de/docs/Web/API/HTMLMediaElement/currentSrc) {{ReadOnlyInline}}
  - : Gibt einen String mit der absoluten URL der ausgewählten Medienressource zurück.
- [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)
  - : Ein Gleitkommawert doppelter Genauigkeit, der die aktuelle Wiedergabezeit in Sekunden angibt; wenn das Medium noch nicht zu spielen begonnen hat und nicht gesucht wurde, ist dieser Wert die Anfangsspielzeit des Mediums. Beim Setzen dieses Wertes wird das Medium auf die neue Zeit gesucht. Die Zeit ist relativ zur Zeitleiste des Mediums angegeben.
- [`HTMLMediaElement.defaultMuted`](/de/docs/Web/API/HTMLMediaElement/defaultMuted)
  - : Ein boolescher Wert, der das [`muted`](/de/docs/Web/HTML/Element/video#muted) HTML-Attribut widerspiegelt und angibt, ob die Audioausgabe des Media-Elements standardmäßig stummgeschaltet sein soll.
- [`HTMLMediaElement.defaultPlaybackRate`](/de/docs/Web/API/HTMLMediaElement/defaultPlaybackRate)
  - : Ein `double`, der die Standardwiedergabegeschwindigkeit für das Medium angibt.
- [`HTMLMediaElement.disableRemotePlayback`](/de/docs/Web/API/HTMLMediaElement/disableRemotePlayback)
  - : Ein boolescher Wert, der den Status der Fernwiedergabe festlegt oder zurückgibt und angibt, ob das Media-Element eine Remote-Wiedergabe-Benutzeroberfläche haben darf.
- [`HTMLMediaElement.duration`](/de/docs/Web/API/HTMLMediaElement/duration) {{ReadOnlyInline}}
  - : Ein schreibgeschützter Gleitkommawert doppelter Genauigkeit, der die Gesamtdauer des Mediums in Sekunden angibt. Wenn keine Mediendaten verfügbar sind, ist der zurückgegebene Wert `NaN`. Wenn das Medium von unbestimmter Länge ist (wie z.B. gestreamte Live-Medien, Medien eines WebRTC-Anrufs oder ähnliches), ist der Wert `+Infinity`.
- [`HTMLMediaElement.ended`](/de/docs/Web/API/HTMLMediaElement/ended) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Media-Element die Wiedergabe abgeschlossen hat.
- [`HTMLMediaElement.error`](/de/docs/Web/API/HTMLMediaElement/error) {{ReadOnlyInline}}
  - : Gibt ein [`MediaError`](/de/docs/Web/API/MediaError)-Objekt für den letzten Fehler zurück oder `null`, wenn kein Fehler aufgetreten ist.
- [`HTMLMediaElement.loop`](/de/docs/Web/API/HTMLMediaElement/loop)
  - : Ein boolescher Wert, der das [`loop`](/de/docs/Web/HTML/Element/video#loop) HTML-Attribut widerspiegelt und angibt, ob das Media-Element von vorne beginnen soll, wenn es das Ende erreicht.
- [`HTMLMediaElement.mediaKeys`](/de/docs/Web/API/HTMLMediaElement/mediaKeys) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein [`MediaKeys`](/de/docs/Web/API/MediaKeys)-Objekt zurück, das ein Satz von Schlüsseln ist, die das Element zur Entschlüsselung von Mediendaten während der Wiedergabe verwenden kann. Wenn kein Schlüssel verfügbar ist, kann es `null` sein.
- [`HTMLMediaElement.muted`](/de/docs/Web/API/HTMLMediaElement/muted)
  - : Ein boolescher Wert, der festlegt, ob der Ton stummgeschaltet ist. `true` wenn der Ton stummgeschaltet ist, andernfalls `false`.
- [`HTMLMediaElement.networkState`](/de/docs/Web/API/HTMLMediaElement/networkState) {{ReadOnlyInline}}
  - : Gibt einen `unsigned short` (Enumeration) zurück, der den aktuellen Status des Abrufens der Medien über das Netzwerk angibt.
- [`HTMLMediaElement.paused`](/de/docs/Web/API/HTMLMediaElement/paused) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Media-Element pausiert ist.
- [`HTMLMediaElement.playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate)
  - : Ein `double`, der die Wiedergabegeschwindigkeit des Mediums angibt.
- [`HTMLMediaElement.played`](/de/docs/Web/API/HTMLMediaElement/played) {{ReadOnlyInline}}
  - : Gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Bereiche der Medienquelle enthält, die der Browser abgespielt hat, falls vorhanden.
- [`HTMLMediaElement.preload`](/de/docs/Web/API/HTMLMediaElement/preload)
  - : Ein String, der das [`preload`](/de/docs/Web/HTML/Element/video#preload) HTML-Attribut widerspiegelt und angibt, welche Daten vorab geladen werden sollen, falls vorhanden. Mögliche Werte sind: `none`, `metadata`, `auto`.
- [`HTMLMediaElement.preservesPitch`](/de/docs/Web/API/HTMLMediaElement/preservesPitch)
  - : Ein boolescher Wert, der bestimmt, ob die Tonhöhe des Sounds beibehalten werden soll. Wird er auf `false` gesetzt, passt sich die Tonhöhe der Geschwindigkeit des Audios an.
- [`HTMLMediaElement.readyState`](/de/docs/Web/API/HTMLMediaElement/readyState) {{ReadOnlyInline}}
  - : Gibt einen `unsigned short` (Enumeration) zurück, der den Bereitschaftszustand des Mediums angibt.
- [`HTMLMediaElement.remote`](/de/docs/Web/API/HTMLMediaElement/remote) {{ReadOnlyInline}}
  - : Gibt eine Instanz des [`RemotePlayback`](/de/docs/Web/API/RemotePlayback)-Objekts zurück, das mit dem Media-Element verknüpft ist.
- [`HTMLMediaElement.seekable`](/de/docs/Web/API/HTMLMediaElement/seekable) {{ReadOnlyInline}}
  - : Gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Zeitbereiche enthält, die der Benutzer ansteuern kann, falls vorhanden.
- [`HTMLMediaElement.seeking`](/de/docs/Web/API/HTMLMediaElement/seeking) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Medium gerade dabei ist, an eine neue Position zu springen.
- [`HTMLMediaElement.sinkId`](/de/docs/Web/API/HTMLMediaElement/sinkId) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt einen String zurück, der die eindeutige ID des Audiogeräts ist, das den Ausgang liefert, oder einen leeren String, wenn das Standard-Audiogerät des Benutzeragenten verwendet wird.
- [`HTMLMediaElement.src`](/de/docs/Web/API/HTMLMediaElement/src)
  - : Ein String, der das [`src`](/de/docs/Web/HTML/Element/video#src) HTML-Attribut widerspiegelt und die URL einer zu verwendenden Medienressource enthält.
- [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)
  - : Ein [`MediaStream`](/de/docs/Web/API/MediaStream), der das Medium repräsentiert, das im aktuellen `HTMLMediaElement` abgespielt wird oder wurde, oder `null`, falls nicht zugewiesen.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks) {{ReadOnlyInline}}
  - : Gibt ein [`TextTrackList`](/de/docs/Web/API/TextTrackList)-Objekt zurück, das die Liste der [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekte im Element enthält.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) {{ReadOnlyInline}}
  - : Gibt ein [`VideoTrackList`](/de/docs/Web/API/VideoTrackList)-Objekt zurück, das die Liste der [`VideoTrack`](/de/docs/Web/API/VideoTrack)-Objekte im Element enthält.
- [`HTMLMediaElement.volume`](/de/docs/Web/API/HTMLMediaElement/volume)
  - : Ein `double`, das die Lautstärke des Audios angibt, von 0.0 (lautlos) bis 1.0 (am lautesten).

## Veraltete Eigenschaften

Diese Eigenschaften sind veraltet und sollten nicht verwendet werden, selbst wenn ein Browser sie noch unterstützt.

- [`HTMLMediaElement.controller`](/de/docs/Web/API/HTMLMediaElement/controller) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein [`MediaController`](/de/docs/Web/API/MediaController)-Objekt, das den dem Element zugewiesenen Medien-Controller darstellt, oder `null`, wenn keiner zugewiesen ist.
- [`HTMLMediaElement.mediaGroup`](/de/docs/Web/API/HTMLMediaElement/mediaGroup) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein String, der das `mediagroup` HTML-Attribut widerspiegelt und den Namen der Mediengruppe angibt, zu der es gehört. Eine Gruppe von Medienelementen teilt einen gemeinsamen [`MediaController`](/de/docs/Web/API/MediaController).
- [`HTMLMediaElement.mozAudioCaptured`](/de/docs/Web/API/HTMLMediaElement/mozAudioCaptured) {{ReadOnlyInline}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Gibt einen booleschen Wert zurück. Bezieht sich auf die Aufnahme von Audiostreams.
- [`HTMLMediaElement.mozFragmentEnd`](/de/docs/Web/API/HTMLMediaElement/mozFragmentEnd) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Ein `double`, das auf die Fragmentendzeit zugreift, wenn das Media-Element eine Fragment-URI für `currentSrc` hat, andernfalls ist es gleich der Mediendauer.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von seinen Vorfahren [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`HTMLMediaElement.addTextTrack()`](/de/docs/Web/API/HTMLMediaElement/addTextTrack)
  - : Fügt einem Media-Element ein neues [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekt (wie eine Spur für Untertitel) hinzu. Dies ist eine rein programmgesteuerte Schnittstelle und beeinflusst nicht den DOM.
- [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream)
  - : Gibt [`MediaStream`](/de/docs/Web/API/MediaStream) zurück und erfasst einen Stream des Medieninhalts.
- [`HTMLMediaElement.canPlayType()`](/de/docs/Web/API/HTMLMediaElement/canPlayType)
  - : Angesichts eines Strings, der einen MIME-Mediatype spezifiziert (möglicherweise mit dem [`codecs`-Parameter](/de/docs/Web/Media/Formats/codecs_parameter)), gibt `canPlayType()` den String `probably` zurück, wenn das Medium abspielbar sein sollte, `maybe`, wenn es nicht genügend Informationen gibt, um zu bestimmen, ob das Medium abgespielt werden kann oder nicht, oder einen leeren String, wenn das Medium nicht abgespielt werden kann.
- [`HTMLMediaElement.fastSeek()`](/de/docs/Web/API/HTMLMediaElement/fastSeek)
  - : Sucht schnell zur angegebenen Zeit mit niedriger Präzision.
- [`HTMLMediaElement.load()`](/de/docs/Web/API/HTMLMediaElement/load)
  - : Setzt das Medium auf den Anfang zurück und wählt die beste verfügbare Quelle basierend auf den mit dem [`src`](/de/docs/Web/HTML/Element/video#src)-Attribut oder dem {{HTMLElement("source")}}-Element bereitgestellten Quellen aus.
- [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause)
  - : Pausiert die Wiedergabe des Mediums.
- [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play)
  - : Beginnt mit der Wiedergabe des Mediums.
- [`HTMLMediaElement.seekToNextFrame()`](/de/docs/Web/API/HTMLMediaElement/seekToNextFrame) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Sucht zum nächsten Frame im Medium. Diese nicht standardisierte, experimentelle Methode ermöglicht es, die Wiedergabe und Darstellung von Medien manuell in einer benutzerdefinierten Geschwindigkeit zu steuern oder Frame für Frame durch die Medien zu navigieren, um Filterungen oder andere Operationen durchzuführen.
- [`HTMLMediaElement.setMediaKeys()`](/de/docs/Web/API/HTMLMediaElement/setMediaKeys) {{SecureContext_Inline}}
  - : Gibt {{jsxref("Promise")}} zurück. Setzt die [`MediaKeys`](/de/docs/Web/API/MediaKeys) ein, die bei der Entschlüsselung von Medien während der Wiedergabe verwendet werden sollen.
- [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId) {{SecureContext_Inline}}
  - : Setzt die ID des Audiogeräts ein, das für die Ausgabe verwendet werden soll, und gibt ein {{jsxref("Promise")}} zurück. Dies funktioniert nur, wenn die Anwendung autorisiert ist, das angegebene Gerät zu verwenden.

## Veraltete Methoden

_Diese Methoden sind veraltet und sollten nicht verwendet werden, selbst wenn ein Browser sie noch unterstützt._

- [`HTMLMediaElement.mozCaptureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) {{Non-standard_Inline}}
  - : Die Firefox-präfixierte Entsprechung von [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream). Siehe deren [Browser-Kompatibilität](/de/docs/Web/API/HTMLMediaElement/captureStream#browser_compatibility) für Details.
- [`HTMLMediaElement.mozCaptureStreamUntilEnded()`](/de/docs/Web/API/HTMLMediaElement/mozCaptureStreamUntilEnded) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : [Beschreibung eingeben]
- [`HTMLMediaElement.mozGetMetadata()`](/de/docs/Web/API/HTMLMediaElement/mozGetMetadata) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Gibt {{jsxref('Object')}} zurück, das Eigenschaften enthält, die Metadaten der abspielenden Medienressource als `{key: value}` Paare darstellen. Eine separate Kopie der Daten wird bei jedem Aufruf der Methode zurückgegeben. Diese Methode muss nach dem [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)-Ereignis aufgerufen werden.

## Ereignisse

_Erbt Ereignisse von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)_.

Hören Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisung eines Ereignis-Listeners zur `oneventname`-Eigenschaft dieser Schnittstelle.

- [`abort`](/de/docs/Web/API/HTMLMediaElement/abort_event)
  - : Ausgelöst, wenn die Ressource nicht vollständig geladen wurde, aber nicht aufgrund eines Fehlers.
- [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)
  - : Ausgelöst, wenn der Benutzeragent die Medien abspielen kann, aber schätzt, dass **nicht** genügend Daten geladen wurden, um die Medien bis zum Ende abzuspielen, ohne für weiteres Puffern von Inhalten anhalten zu müssen.
- [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
  - : Ausgelöst, wenn der Benutzeragent die Medien abspielen kann und schätzt, dass genügend Daten geladen wurden, um die Medien bis zum Ende abzuspielen, ohne für weiteres Puffern von Inhalten anhalten zu müssen.
- [`durationchange`](/de/docs/Web/API/HTMLMediaElement/durationchange_event)
  - : Ausgelöst, wenn die Eigenschaft duration aktualisiert wurde.
- [`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)
  - : Ausgelöst, wenn das Medium leer geworden ist; zum Beispiel, wenn das Medium bereits geladen (oder teilweise geladen) war und die [`HTMLMediaElement.load()`](/de/docs/Web/API/HTMLMediaElement/load)-Methode aufgerufen wird, um es erneut zu laden.
- [`encrypted`](/de/docs/Web/API/HTMLMediaElement/encrypted_event)
  - : Ausgelöst, wenn Initialisierungsdaten im Medium gefunden werden, was darauf hinweist, dass es verschlüsselt ist.
- [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)
  - : Ausgelöst, wenn die Wiedergabe stoppt, weil das Ende des Mediums (`<audio>` oder `<video>`) erreicht wurde oder weil keine weiteren Daten verfügbar sind.
- [`error`](/de/docs/Web/API/HTMLMediaElement/error_event)
  - : Ausgelöst, wenn die Ressource aufgrund eines Fehlers nicht geladen werden konnte.
- [`loadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event)
  - : Ausgelöst, wenn der erste Frame des Mediums vollständig geladen wurde.
- [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
  - : Ausgelöst, wenn die Metadaten geladen wurden.
- [`loadstart`](/de/docs/Web/API/HTMLMediaElement/loadstart_event)
  - : Ausgelöst, wenn der Browser begonnen hat, eine Ressource zu laden.
- [`pause`](/de/docs/Web/API/HTMLMediaElement/pause_event)
  - : Ausgelöst, wenn ein Antrag auf Anhalten der Wiedergabe bearbeitet wurde und die Aktivität in ihren pausierten Zustand übergegangen ist, was am häufigsten vorkommt, wenn die [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause)-Methode des Mediums aufgerufen wird.
- [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)
  - : Ausgelöst, wenn die `paused`-Eigenschaft von `true` in `false` geändert wird, als Ergebnis der [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play)-Methode oder des `autoplay`-Attributs.
- [`playing`](/de/docs/Web/API/HTMLMediaElement/playing_event)
  - : Ausgelöst, wenn die Wiedergabe nach einer Pause oder Verzögerung aufgrund fehlender Daten startbereit ist.
- [`progress`](/de/docs/Web/API/HTMLMediaElement/progress_event)
  - : Periodisch ausgelöst, während der Browser eine Ressource lädt.
- [`ratechange`](/de/docs/Web/API/HTMLMediaElement/ratechange_event)
  - : Ausgelöst, wenn sich die Wiedergabegeschwindigkeit geändert hat.
- [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event)
  - : Ausgelöst, wenn eine Suchoperation abgeschlossen ist.
- [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
  - : Ausgelöst, wenn eine Suchoperation beginnt.
- [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
  - : Ausgelöst, wenn der Benutzeragent versucht, Mediendaten abzurufen, aber die Daten unerwartet nicht verfügbar sind.
- [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event)
  - : Ausgelöst, wenn das Laden der Mediendaten unterbrochen wurde.
- [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)
  - : Ausgelöst, wenn sich die durch die [`currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)-Eigenschaft angegebene Zeit aktualisiert hat.
- [`volumechange`](/de/docs/Web/API/HTMLMediaElement/volumechange_event)
  - : Ausgelöst, wenn sich die Lautstärke geändert hat.
- [`waiting`](/de/docs/Web/API/HTMLMediaElement/waiting_event)
  - : Ausgelöst, wenn die Wiedergabe aufgrund eines vorübergehenden Mangels an Daten gestoppt hat.

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
- [Umgang mit Medienunterstützungsproblemen in Web-Inhalten](/de/docs/Web/Media/Formats/Support_issues)
