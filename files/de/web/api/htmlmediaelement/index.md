---
title: HTMLMediaElement
slug: Web/API/HTMLMediaElement
l10n:
  sourceCommit: af9a8ff87cfa6563c9a082162ce4ed7ba0b204e1
---

{{APIRef("HTML DOM")}}

Die **`HTMLMediaElement`** Schnittstelle erweitert [`HTMLElement`](/de/docs/Web/API/HTMLElement) mit den Eigenschaften und Methoden, die erforderlich sind, um grundlegende, medienbezogene Funktionen zu unterstützen, die bei Audio und Video üblich sind.

Die [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) und [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) Elemente erben beide von dieser Schnittstelle.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihren Vorfahren [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) {{ReadOnlyInline}}
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die die [`AudioTrack`](/de/docs/Web/API/AudioTrack)-Objekte im Element auflistet.
- [`HTMLMediaElement.autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay)
  - : Ein boolescher Wert, der das [`autoplay`](/de/docs/Web/HTML/Reference/Elements/video#autoplay) HTML-Attribut widerspiegelt und angibt, ob die Wiedergabe automatisch beginnen soll, sobald genügend Medien verfügbar sind, um dies ohne Unterbrechung zu tun.

    > [!NOTE]
    > Das automatische Abspielen von Audio, wenn der Benutzer es nicht erwartet oder wünscht, ist eine schlechte Benutzererfahrung und sollte in den meisten Fällen vermieden werden, obwohl es Ausnahmen gibt. Weitere Informationen finden Sie im [Leitfaden für automatisches Abspielen von Medien und Web Audio APIs](/de/docs/Web/Media/Guides/Autoplay). Beachten Sie, dass Browser Autoplay-Anfragen möglicherweise ignorieren, daher sollten Sie sicherstellen, dass Ihr Code nicht davon abhängt, dass das Autoplay funktioniert.

- [`HTMLMediaElement.buffered`](/de/docs/Web/API/HTMLMediaElement/buffered) {{ReadOnlyInline}}
  - : Gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Bereiche der Medienquelle anzeigt, die der Browser aktuell gepuffert hat (falls vorhanden), zu dem Zeitpunkt, an dem die `buffered` Eigenschaft aufgerufen wird.
- [`HTMLMediaElement.controls`](/de/docs/Web/API/HTMLMediaElement/controls)
  - : Ein boolescher Wert, der das [`controls`](/de/docs/Web/HTML/Reference/Elements/video#controls) HTML-Attribut widerspiegelt und angibt, ob Benutzeroberflächen-Elemente zur Steuerung der Ressource angezeigt werden sollen.
- [`HTMLMediaElement.controlsList`](/de/docs/Web/API/HTMLMediaElement/controlsList)
  - : Gibt eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurück, die dem Benutzeragenten hilft zu entscheiden, welche Steuerelemente auf dem Medienelement angezeigt werden sollen, wenn der Benutzeragent seine eigenen Steuerelemente anzeigt. Die `DOMTokenList` enthält einen oder mehrere der drei möglichen Werte: `nodownload`, `nofullscreen` und `noremoteplayback`.
- [`HTMLMediaElement.crossOrigin`](/de/docs/Web/API/HTMLMediaElement/crossOrigin)
  - : Ein String, der die [CORS-Einstellung](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für dieses Medienelement angibt.
- [`HTMLMediaElement.currentSrc`](/de/docs/Web/API/HTMLMediaElement/currentSrc) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette mit der absoluten URL der ausgewählten Medienressource zurück.
- [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)
  - : Ein Gleitkommawert mit doppelter Genauigkeit, der die aktuelle Wiedergabezeit in Sekunden angibt; wenn die Medien nicht gestartet haben zu spielen und nicht gesucht wurden, ist dieser Wert die anfängliche Wiedergabezeit der Medien. Durch Setzen dieses Wertes wird das Medium an die neue Zeit gesucht. Die Zeit wird relativ zur Zeitachse der Medien angegeben.
- [`HTMLMediaElement.defaultMuted`](/de/docs/Web/API/HTMLMediaElement/defaultMuted)
  - : Ein boolescher Wert, der das [`muted`](/de/docs/Web/HTML/Reference/Elements/video#muted) HTML-Attribut widerspiegelt, das angibt, ob die Audioausgabe des Medienelements standardmäßig stummgeschaltet sein soll.
- [`HTMLMediaElement.defaultPlaybackRate`](/de/docs/Web/API/HTMLMediaElement/defaultPlaybackRate)
  - : Ein `double`, der die Standard-Wiedergabegeschwindigkeit der Medien angibt.
- [`HTMLMediaElement.disableRemotePlayback`](/de/docs/Web/API/HTMLMediaElement/disableRemotePlayback)
  - : Ein boolescher Wert, der den Zustand der Remote-Wiedergabe setzt oder zurückgibt, was anzeigt, ob das Medienelement eine Benutzeroberfläche für die Remote-Wiedergabe haben darf.
- [`HTMLMediaElement.duration`](/de/docs/Web/API/HTMLMediaElement/duration) {{ReadOnlyInline}}
  - : Ein schreibgeschützter Gleitkommawert mit doppelter Genauigkeit, der die gesamte Dauer der Medien in Sekunden angibt. Wenn keine Mediendaten verfügbar sind, ist der zurückgegebene Wert `NaN`. Wenn die Medien eine unbestimmte Länge haben (wie gestreamte Live-Medien, ein WebRTC-Anruf oder Ähnliches), ist der Wert `Infinity`.
- [`HTMLMediaElement.ended`](/de/docs/Web/API/HTMLMediaElement/ended) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Medienelement die Wiedergabe beendet hat.
- [`HTMLMediaElement.error`](/de/docs/Web/API/HTMLMediaElement/error) {{ReadOnlyInline}}
  - : Gibt ein [`MediaError`](/de/docs/Web/API/MediaError)-Objekt für den letzten Fehler zurück oder `null`, wenn kein Fehler aufgetreten ist.
- [`HTMLMediaElement.loop`](/de/docs/Web/API/HTMLMediaElement/loop)
  - : Ein boolescher Wert, der das [`loop`](/de/docs/Web/HTML/Reference/Elements/video#loop) HTML-Attribut widerspiegelt, das angibt, ob das Medienelement neu starten soll, wenn es sein Ende erreicht.
- [`HTMLMediaElement.mediaKeys`](/de/docs/Web/API/HTMLMediaElement/mediaKeys) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein [`MediaKeys`](/de/docs/Web/API/MediaKeys)-Objekt zurück, das einen Satz von Schlüsseln darstellt, den das Element zur Entschlüsselung von Mediendaten während der Wiedergabe verwenden kann. Wenn kein Schlüssel verfügbar ist, kann es `null` sein.
- [`HTMLMediaElement.muted`](/de/docs/Web/API/HTMLMediaElement/muted)
  - : Ein boolescher Wert, der bestimmt, ob der Ton stummgeschaltet ist. `true`, wenn der Ton stummgeschaltet ist, andernfalls `false`.
- [`HTMLMediaElement.networkState`](/de/docs/Web/API/HTMLMediaElement/networkState) {{ReadOnlyInline}}
  - : Gibt einen `unsigned short` (Enumeration) zurück, der den aktuellen Status des Ladevorgangs der Medien über das Netzwerk angibt.
- [`HTMLMediaElement.paused`](/de/docs/Web/API/HTMLMediaElement/paused) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Medienelement pausiert ist.
- [`HTMLMediaElement.playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate)
  - : Ein `double`, das die Geschwindigkeit angibt, mit der die Medien abgespielt werden.
- [`HTMLMediaElement.played`](/de/docs/Web/API/HTMLMediaElement/played) {{ReadOnlyInline}}
  - : Gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Bereiche der Medienquelle enthält, die der Browser abgespielt hat, falls vorhanden.
- [`HTMLMediaElement.preload`](/de/docs/Web/API/HTMLMediaElement/preload)
  - : Ein String, der das [`preload`](/de/docs/Web/HTML/Reference/Elements/video#preload) HTML-Attribut widerspiegelt und angibt, welche Daten vorab geladen werden sollen, falls vorhanden. Mögliche Werte sind: `none`, `metadata`, `auto`.
- [`HTMLMediaElement.preservesPitch`](/de/docs/Web/API/HTMLMediaElement/preservesPitch)
  - : Ein boolescher Wert, der bestimmt, ob die Tonhöhe des Tons beibehalten wird. Wenn auf `false` gesetzt, passt sich die Tonhöhe an die Geschwindigkeit des Audios an.
- [`HTMLMediaElement.readyState`](/de/docs/Web/API/HTMLMediaElement/readyState) {{ReadOnlyInline}}
  - : Gibt einen `unsigned short` (Enumeration) zurück, der den Bereitschaftszustand der Medien angibt.
- [`HTMLMediaElement.remote`](/de/docs/Web/API/HTMLMediaElement/remote) {{ReadOnlyInline}}
  - : Gibt ein [`RemotePlayback`](/de/docs/Web/API/RemotePlayback)-Objekt zurück, das mit dem Medienelement verbunden ist.
- [`HTMLMediaElement.seekable`](/de/docs/Web/API/HTMLMediaElement/seekable) {{ReadOnlyInline}}
  - : Gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Zeitbereiche enthält, zu denen der Benutzer springen kann, falls vorhanden.
- [`HTMLMediaElement.seeking`](/de/docs/Web/API/HTMLMediaElement/seeking) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Medium in den Prozess des Suchens nach einer neuen Position versetzt wird.
- [`HTMLMediaElement.sinkId`](/de/docs/Web/API/HTMLMediaElement/sinkId) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt einen String zurück, der die eindeutige ID des Audiogeräts darstellt, das die Ausgabe liefert, oder einen leeren String, wenn das Standard-Audiogerät des Benutzeragenten verwendet wird.
- [`HTMLMediaElement.src`](/de/docs/Web/API/HTMLMediaElement/src)
  - : Ein String, der das [`src`](/de/docs/Web/HTML/Reference/Elements/video#src) HTML-Attribut widerspiegelt und die URL einer zu verwendenden Medienressource enthält.
- [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)
  - : Ein Objekt, das als Quelle der mit dem `HTMLMediaElement` verbundenen Medien dient, oder `null`, wenn es nicht zugewiesen ist.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks) {{ReadOnlyInline}}
  - : Gibt ein [`TextTrackList`](/de/docs/Web/API/TextTrackList)-Objekt zurück, das die Liste der [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekte im Element enthält.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) {{ReadOnlyInline}}
  - : Gibt ein [`VideoTrackList`](/de/docs/Web/API/VideoTrackList)-Objekt zurück, das die Liste der [`VideoTrack`](/de/docs/Web/API/VideoTrack)-Objekte im Element enthält.
- [`HTMLMediaElement.volume`](/de/docs/Web/API/HTMLMediaElement/volume)
  - : Ein `double`, das die Lautstärke des Audios angibt, von 0.0 (stumm) bis 1.0 (am lautesten).

## Veraltete Eigenschaften

Diese Eigenschaften sind veraltet und sollten nicht verwendet werden, auch wenn ein Browser sie noch unterstützt.

- [`HTMLMediaElement.controller`](/de/docs/Web/API/HTMLMediaElement/controller) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein [`MediaController`](/de/docs/Web/API/MediaController)-Objekt, das den dem Element zugewiesenen Mediencontroller darstellt, oder `null`, wenn keiner zugewiesen ist.
- [`HTMLMediaElement.mediaGroup`](/de/docs/Web/API/HTMLMediaElement/mediaGroup) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein String, der das `mediagroup` HTML-Attribut widerspiegelt und den Namen der Gruppe angibt, zu der die Elemente gehören. Eine Gruppe von Medienelementen teilt sich einen gemeinsamen [`MediaController`](/de/docs/Web/API/MediaController).
- [`HTMLMediaElement.mozAudioCaptured`](/de/docs/Web/API/HTMLMediaElement/mozAudioCaptured) {{ReadOnlyInline}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Gibt einen booleschen Wert zurück. Steht im Zusammenhang mit der Aufnahme von Audiostreams.
- [`HTMLMediaElement.mozFragmentEnd`](/de/docs/Web/API/HTMLMediaElement/mozFragmentEnd) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Ein `double`, der Zugriff auf das Endzeitpunkt-Fragment bietet, wenn das Medienelement eine Fragment-URI für `currentSrc` hat, andernfalls ist es gleich der Gesamtdauer der Medien.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von ihren Vorfahren [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`HTMLMediaElement.addTextTrack()`](/de/docs/Web/API/HTMLMediaElement/addTextTrack)
  - : Fügt ein neues [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekt (wie z. B. eine Spur für Untertitel) zu einem Medienelement hinzu. Dies ist eine programmatische Schnittstelle und beeinflusst nicht das DOM.
- [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream)
  - : Gibt [`MediaStream`](/de/docs/Web/API/MediaStream) zurück und erfasst einen Stream des Medieninhalts.
- [`HTMLMediaElement.canPlayType()`](/de/docs/Web/API/HTMLMediaElement/canPlayType)
  - : Angenommen, ein String spezifiziert einen MIME-Medientyp (möglicherweise mit dem [`codecs`-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter) enthalten), gibt `canPlayType()` den String `probably` zurück, wenn das Medium abgespielt werden sollte, `maybe`, wenn es nicht genug Informationen gibt, um festzustellen, ob das Medium abgespielt wird oder nicht, oder einen leeren String, wenn das Medium nicht abgespielt werden kann.
- [`HTMLMediaElement.fastSeek()`](/de/docs/Web/API/HTMLMediaElement/fastSeek)
  - : Sucht schnell zur angegebenen Zeit mit niedriger Präzision.
- [`HTMLMediaElement.getStartDate()`](/de/docs/Web/API/HTMLMediaElement/getStartDate)
  - : Gibt ein {{jsxref("Date")}}-Objekt zurück, das das realweltliche Datum und die Zeit darstellt, die dem Beginn des Mediums entspricht. Bei Live-Streams ist dies die Zeit, als die Übertragung auf dem Server begann, was vor dem Beginn des Ansehens durch den Benutzer liegen kann.
- [`HTMLMediaElement.load()`](/de/docs/Web/API/HTMLMediaElement/load)
  - : Setzt das Medium zum Anfang zurück und wählt die beste verfügbare Quelle aus den bereitgestellten Quellen über das [`src`](/de/docs/Web/HTML/Reference/Elements/video#src) Attribut oder das {{HTMLElement("source")}} Element aus.
- [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause)
  - : Pausiert die Medienwiedergabe.
- [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play)
  - : Startet die Wiedergabe der Medien.
- [`HTMLMediaElement.seekToNextFrame()`](/de/docs/Web/API/HTMLMediaElement/seekToNextFrame) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Sucht zum nächsten Frame im Medium. Diese nicht standardisierte, experimentelle Methode ermöglicht es, das Lesen und Rendern von Medien mit einer benutzerdefinierten Geschwindigkeit manuell zu steuern oder sich durch das Medium Bild für Bild zu bewegen, um Filter oder andere Operationen durchzuführen.
- [`HTMLMediaElement.setMediaKeys()`](/de/docs/Web/API/HTMLMediaElement/setMediaKeys) {{SecureContext_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück. Setzt die [`MediaKeys`](/de/docs/Web/API/MediaKeys) Schlüssel, die bei der Entschlüsselung von Medien während der Wiedergabe verwendet werden.
- [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId) {{SecureContext_Inline}}
  - : Setzt die ID des Audiogeräts, das für die Ausgabe verwendet werden soll, und gibt ein {{jsxref("Promise")}} zurück. Dies funktioniert nur, wenn die Anwendung autorisiert ist, das angegebene Gerät zu verwenden.

## Veraltete Methoden

_Diese Methoden sind veraltet und sollten nicht verwendet werden, auch wenn ein Browser sie noch unterstützt._

- [`HTMLMediaElement.mozCaptureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) {{Non-standard_Inline}}
  - : Das mit Firefox präfixierte Äquivalent von [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream). Siehe dessen [Browser-Kompatibilität](/de/docs/Web/API/HTMLMediaElement/captureStream#browser_compatibility) für Details.
- [`HTMLMediaElement.mozCaptureStreamUntilEnded()`](/de/docs/Web/API/HTMLMediaElement/mozCaptureStreamUntilEnded) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : \[Beschreibung eingeben]
- [`HTMLMediaElement.mozGetMetadata()`](/de/docs/Web/API/HTMLMediaElement/mozGetMetadata) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Gibt ein {{jsxref('Object')}} zurück, das Eigenschaften enthält, die Metadaten aus der abspielenden Medienquelle als `{key: value}` Paare darstellen. Jedes Mal, wenn die Methode aufgerufen wird, wird eine separate Kopie der Daten zurückgegeben. Diese Methode muss nach dem [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event) Ereignis aufgerufen werden.

## Ereignisse

_Erbt Ereignisse von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)_.

Sie können diesen Ereignissen mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) lauschen oder einen Ereignis-Listener der `oneventname`-Eigenschaft dieser Schnittstelle zuweisen.

- [`abort`](/de/docs/Web/API/HTMLMediaElement/abort_event)
  - : Wird ausgelöst, wenn die Ressource nicht vollständig geladen wurde, jedoch nicht als Ergebnis eines Fehlers.
- [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)
  - : Wird ausgelöst, wenn der Benutzeragent das Medium abspielen kann, aber schätzt, dass **nicht** genug Daten geladen wurden, um das Medium bis zum Ende abzuspielen, ohne für weiteres Puffern der Inhalte anzuhalten.
- [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
  - : Wird ausgelöst, wenn der Benutzeragent das Medium abspielen kann und schätzt, dass genügend Daten geladen wurden, um das Medium bis zum Ende abzuspielen, ohne für weiteres Puffern der Inhalte anzuhalten.
- [`durationchange`](/de/docs/Web/API/HTMLMediaElement/durationchange_event)
  - : Wird ausgelöst, wenn die duration-Eigenschaft aktualisiert wurde.
- [`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)
  - : Wird ausgelöst, wenn die Medien leer geworden sind; zum Beispiel, wenn Medien bereits geladen wurden (oder teilweise geladen) und die [`HTMLMediaElement.load()`](/de/docs/Web/API/HTMLMediaElement/load)-Methode aufgerufen wird, um sie neu zu laden.
- [`encrypted`](/de/docs/Web/API/HTMLMediaElement/encrypted_event)
  - : Wird ausgelöst, wenn Initialisierungsdaten in den Medien gefunden werden, die darauf hinweisen, dass die Medien verschlüsselt sind.
- [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)
  - : Wird ausgelöst, wenn die Wiedergabe stoppt, weil das Ende der Medien (`<audio>` oder `<video>`) erreicht ist oder weil keine weiteren Daten verfügbar sind.
- [`error`](/de/docs/Web/API/HTMLMediaElement/error_event)
  - : Wird ausgelöst, wenn die Ressource aufgrund eines Fehlers nicht geladen werden konnte.
- [`loadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event)
  - : Wird ausgelöst, wenn das erste Bild der Medien fertig geladen wurde.
- [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
  - : Wird ausgelöst, wenn die Metadaten geladen wurden.
- [`loadstart`](/de/docs/Web/API/HTMLMediaElement/loadstart_event)
  - : Wird ausgelöst, wenn der Browser begonnen hat, eine Ressource zu laden.
- [`pause`](/de/docs/Web/API/HTMLMediaElement/pause_event)
  - : Wird ausgelöst, wenn ein Steuerungsbefehl Pause abzuspielen bearbeitet wurde und die Aktivität in ihren pausierten Zustand übergegangen ist. Dies geschieht am häufigsten, wenn die [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause)-Methode des Mediums aufgerufen wird.
- [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)
  - : Wird ausgelöst, wenn die `paused`-Eigenschaft von `true` auf `false` geändert wurde, als Ergebnis der [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play)-Methode oder des `autoplay` Attributs.
- [`playing`](/de/docs/Web/API/HTMLMediaElement/playing_event)
  - : Wird ausgelöst, wenn die Wiedergabe bereit ist zu starten, nachdem sie pausiert war oder aufgrund von Datenmangel verzögert wurde.
- [`progress`](/de/docs/Web/API/HTMLMediaElement/progress_event)
  - : Wird periodisch ausgelöst, während der Browser eine Ressource lädt.
- [`ratechange`](/de/docs/Web/API/HTMLMediaElement/ratechange_event)
  - : Wird ausgelöst, wenn sich die Wiedergabegeschwindigkeit geändert hat.
- [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event)
  - : Wird ausgelöst, wenn ein Suchvorgang abgeschlossen ist.
- [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
  - : Wird ausgelöst, wenn ein Suchvorgang beginnt.
- [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
  - : Wird ausgelöst, wenn der Benutzeragent versucht, Mediendaten zu holen, aber Daten unvorhergesehen nicht bereitgestellt werden.
- [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event)
  - : Wird ausgelöst, wenn das Laden der Mediendaten unterbrochen wurde.
- [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)
  - : Wird ausgelöst, wenn der durch die [`currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)-Eigenschaft angezeigte Zeitpunkt aktualisiert wurde.
- [`volumechange`](/de/docs/Web/API/HTMLMediaElement/volumechange_event)
  - : Wird ausgelöst, wenn sich die Lautstärke geändert hat.
- [`waiting`](/de/docs/Web/API/HTMLMediaElement/waiting_event)
  - : Wird ausgelöst, wenn die Wiedergabe aufgrund eines vorübergehenden Mangels an Daten gestoppt wurde.
- [`waitingforkey`](/de/docs/Web/API/HTMLMediaElement/waitingforkey_event)
  - : Wird ausgelöst, wenn die Wiedergabe zunächst blockiert wird während des Wartens auf einen Schlüssel.

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
- Lernbereich: [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Medientyp- und Format-Leitfaden](/de/docs/Web/Media/Guides/Formats)
- [Umgang mit Medienunterstützungsproblemen in Web-Inhalten](/de/docs/Web/Media/Guides/Formats/Support_issues)
