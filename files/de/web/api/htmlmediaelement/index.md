---
title: HTMLMediaElement
slug: Web/API/HTMLMediaElement
l10n:
  sourceCommit: 3d7c7d4e151ff1b578bef4eff10c201b761a9d7d
---

{{APIRef("HTML DOM")}}

Die **`HTMLMediaElement`**-Schnittstelle erweitert [`HTMLElement`](/de/docs/Web/API/HTMLElement) um die Eigenschaften und Methoden, die erforderlich sind, um grundlegende medienbezogene Funktionen zu unterstützen, die sowohl für Audio als auch für Video verbreitet sind.

Die [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) und [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) Elemente erben beide diese Schnittstelle.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihren Vorfahren [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node), und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) {{ReadOnlyInline}}
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die die im Element enthaltenen [`AudioTrack`](/de/docs/Web/API/AudioTrack)-Objekte auflistet.
- [`HTMLMediaElement.autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay)
  - : Ein boolescher Wert, der das HTML-Attribut [`autoplay`](/de/docs/Web/HTML/Reference/Elements/video#autoplay) widerspiegelt und angibt, ob die Wiedergabe automatisch beginnen soll, sobald genügend Medien verfügbar sind, um sie unterbrechungsfrei abzuspielen.

    > [!NOTE]
    > Audio automatisch abzuspielen, wenn der Benutzer es nicht erwartet oder wünscht, ist eine schlechte Benutzererfahrung und sollte in den meisten Fällen vermieden werden, obwohl es Ausnahmen gibt. Siehe den [Autoplay-Leitfaden für Medien und Web Audio APIs](/de/docs/Web/Media/Guides/Autoplay) für weitere Informationen. Beachten Sie, dass Browser Autoplay-Anfragen ignorieren können, daher sollten Sie sicherstellen, dass Ihr Code nicht darauf angewiesen ist, dass Autoplay funktioniert.

- [`HTMLMediaElement.buffered`](/de/docs/Web/API/HTMLMediaElement/buffered) {{ReadOnlyInline}}
  - : Gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Bereiche der Medienquelle anzeigt, die der Browser momentan gepuffert hat (falls vorhanden), wenn auf die `buffered`-Eigenschaft zugegriffen wird.
- [`HTMLMediaElement.controls`](/de/docs/Web/API/HTMLMediaElement/controls)
  - : Ein boolescher Wert, der das HTML-Attribut [`controls`](/de/docs/Web/HTML/Reference/Elements/video#controls) widerspiegelt und angibt, ob Benutzeroberflächenelemente zur Steuerung der Ressource angezeigt werden sollen.
- [`HTMLMediaElement.controlsList`](/de/docs/Web/API/HTMLMediaElement/controlsList)
  - : Gibt eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurück, die dem Benutzeragenten hilft auszuwählen, welche Steuerelemente auf dem Medienelement angezeigt werden sollen, wann immer der Benutzeragent seine eigene Kontrollsatz anzeigt. Die `DOMTokenList` kann einen oder mehrere der drei möglichen Werte enthalten: `nodownload`, `nofullscreen` und `noremoteplayback`.
- [`HTMLMediaElement.crossOrigin`](/de/docs/Web/API/HTMLMediaElement/crossOrigin)
  - : Ein String, der die [CORS-Einstellung](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für dieses Medienelement angibt.
- [`HTMLMediaElement.currentSrc`](/de/docs/Web/API/HTMLMediaElement/currentSrc) {{ReadOnlyInline}}
  - : Gibt einen String mit der absoluten URL der gewählten Medienressource zurück.
- [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)
  - : Ein Gleitkommawert mit doppelter Genauigkeit, der die aktuelle Wiedergabezeit in Sekunden angibt; wenn das Medium noch nicht zu spielen begonnen hat und nicht gesucht wurde, ist dieser Wert die anfängliche Wiedergabezeit des Mediums. Das Setzen dieses Wertes springt das Medium zu der neuen Zeit. Die Zeit wird relativ zur Zeitleiste des Mediums angegeben.
- [`HTMLMediaElement.defaultMuted`](/de/docs/Web/API/HTMLMediaElement/defaultMuted)
  - : Ein boolescher Wert, das das HTML-Attribut [`muted`](/de/docs/Web/HTML/Reference/Elements/video#muted) widerspiegelt, welches angibt, ob die Audioausgabe des Medienelements standardmäßig stummgeschaltet sein soll.
- [`HTMLMediaElement.defaultPlaybackRate`](/de/docs/Web/API/HTMLMediaElement/defaultPlaybackRate)
  - : Ein `double`, der die Standard-Wiedergabegeschwindigkeit für das Medium angibt.
- [`HTMLMediaElement.disableRemotePlayback`](/de/docs/Web/API/HTMLMediaElement/disableRemotePlayback)
  - : Ein boolescher Wert, der den Status der Fernwiedergabe setzt oder zurückgibt und angibt, ob das Medienelement eine UI für die Fernwiedergabe haben darf.
- [`HTMLMediaElement.duration`](/de/docs/Web/API/HTMLMediaElement/duration) {{ReadOnlyInline}}
  - : Ein schreibgeschützter Gleitkommawert mit doppelter Genauigkeit, der die Gesamtdauer des Mediums in Sekunden angibt. Wenn keine Mediendaten verfügbar sind, wird der Wert `NaN` zurückgegeben. Wenn das Medium eine unbestimmte Länge hat (wie bei gestreamten Live-Medien, einem WebRTC-Anrufmedium oder ähnlichem), ist der Wert `Infinity`.
- [`HTMLMediaElement.ended`](/de/docs/Web/API/HTMLMediaElement/ended) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Medienelement die Wiedergabe beendet hat.
- [`HTMLMediaElement.error`](/de/docs/Web/API/HTMLMediaElement/error) {{ReadOnlyInline}}
  - : Gibt ein [`MediaError`](/de/docs/Web/API/MediaError)-Objekt für den letzten Fehler zurück oder `null`, wenn es keinen Fehler gegeben hat.
- [`HTMLMediaElement.loading`](/de/docs/Web/API/HTMLMediaElement/loading) {{experimental_inline}}
  - : Ein String, der angibt, ob der Browser das Medium sofort (`eager`) oder bei Bedarf (`lazy`) laden soll. Siehe HTML-Attribute [`<video loading>`](/de/docs/Web/HTML/Reference/Elements/video#loading) und [`<audio loading>`](/de/docs/Web/HTML/Reference/Elements/audio#loading) für mehr Informationen.
- [`HTMLMediaElement.loop`](/de/docs/Web/API/HTMLMediaElement/loop)
  - : Ein boolescher Wert, der das HTML-Attribut [`loop`](/de/docs/Web/HTML/Reference/Elements/video#loop) widerspiegelt, welches angibt, ob das Medienelement erneut beginnen soll, wenn es das Ende erreicht.
- [`HTMLMediaElement.mediaKeys`](/de/docs/Web/API/HTMLMediaElement/mediaKeys) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein [`MediaKeys`](/de/docs/Web/API/MediaKeys)-Objekt zurück, das ein Satz von Schlüsseln ist, den das Element verwenden kann, um Mediendaten während der Wiedergabe zu entschlüsseln. Wenn kein Schlüssel verfügbar ist, kann es `null` sein.
- [`HTMLMediaElement.muted`](/de/docs/Web/API/HTMLMediaElement/muted)
  - : Ein boolescher Wert, der angibt, ob der Ton stummgeschaltet ist. `true`, wenn der Ton stummgeschaltet ist, andernfalls `false`.
- [`HTMLMediaElement.networkState`](/de/docs/Web/API/HTMLMediaElement/networkState) {{ReadOnlyInline}}
  - : Gibt einen `unsigned short` (Enumeration) zurück, der den aktuellen Zustand des Abrufs des Mediums über das Netzwerk anzeigt.
- [`HTMLMediaElement.paused`](/de/docs/Web/API/HTMLMediaElement/paused) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Medienelement pausiert ist.
- [`HTMLMediaElement.playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate)
  - : Ein `double`, das die Geschwindigkeit angibt, mit der das Medium abgespielt wird.
- [`HTMLMediaElement.played`](/de/docs/Web/API/HTMLMediaElement/played) {{ReadOnlyInline}}
  - : Gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Bereiche der Medienquelle enthält, die der Browser abgespielt hat, falls vorhanden.
- [`HTMLMediaElement.preload`](/de/docs/Web/API/HTMLMediaElement/preload)
  - : Ein String, der das HTML-Attribut [`preload`](/de/docs/Web/HTML/Reference/Elements/video#preload) widerspiegelt und angibt, welche Daten vorab geladen werden sollen, falls vorhanden. Mögliche Werte sind: `none`, `metadata`, `auto`.
- [`HTMLMediaElement.preservesPitch`](/de/docs/Web/API/HTMLMediaElement/preservesPitch)
  - : Ein boolescher Wert, der bestimmt, ob die Tonhöhe des Klangs beibehalten wird. Wenn auf `false` gesetzt, passt sich die Tonhöhe an die Geschwindigkeit des Audios an.
- [`HTMLMediaElement.readyState`](/de/docs/Web/API/HTMLMediaElement/readyState) {{ReadOnlyInline}}
  - : Gibt einen `unsigned short` (Enumeration) zurück, der den Bereitschaftszustand des Mediums angibt.
- [`HTMLMediaElement.remote`](/de/docs/Web/API/HTMLMediaElement/remote) {{ReadOnlyInline}}
  - : Gibt eine Instanz des [`RemotePlayback`](/de/docs/Web/API/RemotePlayback)-Objekts zurück, das mit dem Medienelement verbunden ist.
- [`HTMLMediaElement.seekable`](/de/docs/Web/API/HTMLMediaElement/seekable) {{ReadOnlyInline}}
  - : Gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Zeitbereiche enthält, zu denen der Benutzer springen kann, falls vorhanden.
- [`HTMLMediaElement.seeking`](/de/docs/Web/API/HTMLMediaElement/seeking) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Medium dabei ist, eine neue Position zu suchen.
- [`HTMLMediaElement.sinkId`](/de/docs/Web/API/HTMLMediaElement/sinkId) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt einen String zurück, der die eindeutige ID des Ausgabegeräts für Audio darstellt, oder einen leeren String, wenn das Standard-Audiogerät des Benutzeragenten verwendet wird.
- [`HTMLMediaElement.src`](/de/docs/Web/API/HTMLMediaElement/src)
  - : Ein String, der das HTML-Attribut [`src`](/de/docs/Web/HTML/Reference/Elements/video#src) widerspiegelt und die URL einer zu verwendenden Medienressource enthält.
- [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)
  - : Ein Objekt, das als Quelle des mit dem `HTMLMediaElement` verknüpften Mediums dient, oder `null`, wenn nicht zugewiesen.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks) {{ReadOnlyInline}}
  - : Gibt ein [`TextTrackList`](/de/docs/Web/API/TextTrackList)-Objekt zurück, das die Liste der im Element enthaltenen [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekte enthält.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) {{ReadOnlyInline}}
  - : Gibt ein [`VideoTrackList`](/de/docs/Web/API/VideoTrackList)-Objekt zurück, das die Liste der im Element enthaltenen [`VideoTrack`](/de/docs/Web/API/VideoTrack)-Objekte enthält.
- [`HTMLMediaElement.volume`](/de/docs/Web/API/HTMLMediaElement/volume)
  - : Ein `double`, das die Lautstärke des Audios angibt, von 0.0 (leise) bis 1.0 (am lautesten).

## Veraltete Eigenschaften

Diese Eigenschaften sind veraltet und sollten nicht mehr verwendet werden, auch wenn ein Browser sie noch unterstützt.

- [`HTMLMediaElement.controller`](/de/docs/Web/API/HTMLMediaElement/controller) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein [`MediaController`](/de/docs/Web/API/MediaController)-Objekt, das den Media-Controller repräsentiert, der dem Element zugewiesen ist, oder `null`, wenn keiner zugewiesen ist.
- [`HTMLMediaElement.mediaGroup`](/de/docs/Web/API/HTMLMediaElement/mediaGroup) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein String, der das `mediagroup` HTML-Attribut widerspiegelt, das den Namen der Gruppe von Elementen angibt, zu der es gehört. Eine Gruppe von Medienelementen teilt einen gemeinsamen [`MediaController`](/de/docs/Web/API/MediaController).
- `HTMLMediaElement.mozAudioCaptured` {{ReadOnlyInline}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Gibt einen booleschen Wert zurück. Bezieht sich auf die Erfassung von Audiostreams.
- `HTMLMediaElement.mozFragmentEnd` {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Ein `double`, das den Zugriff auf die Fragment-Endzeit bietet, wenn das Medienelement eine Fragment-URI für `currentSrc` hat, andernfalls ist es gleich der Mediendauer.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von ihren Vorfahren [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node), und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`HTMLMediaElement.addTextTrack()`](/de/docs/Web/API/HTMLMediaElement/addTextTrack)
  - : Fügt einem Medienelement ein neues [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekt hinzu (wie ein Untertitel-Track). Dies ist eine programmatische Schnittstelle und beeinflusst nicht das DOM.
- [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream)
  - : Gibt ein [`MediaStream`](/de/docs/Web/API/MediaStream) zurück, das einen Stream des Medieninhalts erfasst.
- [`HTMLMediaElement.canPlayType()`](/de/docs/Web/API/HTMLMediaElement/canPlayType)
  - : Bei Angabe eines Strings, der einen MIME Medientyp (möglicherweise mit dem [`codecs` Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter)) spezifiziert, gibt `canPlayType()` den String `probably` zurück, wenn das Medium abspielbar sein sollte, `maybe`, wenn nicht genügend Informationen vorliegen, um festzustellen, ob das Medium abgespielt wird oder nicht, oder einen leeren String, wenn das Medium nicht abgespielt werden kann.
- [`HTMLMediaElement.fastSeek()`](/de/docs/Web/API/HTMLMediaElement/fastSeek)
  - : Sucht schnell mit geringer Präzision zur angegebenen Zeit.
- [`HTMLMediaElement.getStartDate()`](/de/docs/Web/API/HTMLMediaElement/getStartDate)
  - : Gibt ein {{jsxref("Date")}}-Objekt zurück, das das reale Datum und die Uhrzeit repräsentiert, die dem Beginn des Mediums entsprechen. Für Live-Streams ist dies die Zeit, zu der die Übertragung auf dem Server begann, was vor dem Zeitpunkt sein kann, zu dem der Benutzer mit dem Anschauen begann.
- [`HTMLMediaElement.load()`](/de/docs/Web/API/HTMLMediaElement/load)
  - : Setzt das Medium an den Anfang zurück und wählt die beste verfügbare Quelle aus den mithilfe des [`src`](/de/docs/Web/HTML/Reference/Elements/video#src)-Attributs oder dem {{HTMLElement("source")}}-Element bereitgestellten Quellen aus.
- [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause)
  - : Pausiert die Medienwiedergabe.
- [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play)
  - : Beginnt die Wiedergabe des Mediums.
- [`HTMLMediaElement.seekToNextFrame()`](/de/docs/Web/API/HTMLMediaElement/seekToNextFrame) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Sucht zum nächsten Bild im Medium. Diese nicht-standardisierte, experimentelle Methode ermöglicht es, das Lesen und Rendern von Medien manuell mit einer benutzerdefinierten Geschwindigkeit zu steuern, oder durch das Medium Bild für Bild zu navigieren, um Filterung oder andere Operationen durchzuführen.
- [`HTMLMediaElement.setMediaKeys()`](/de/docs/Web/API/HTMLMediaElement/setMediaKeys) {{SecureContext_Inline}}
  - : Gibt {{jsxref("Promise")}} zurück. Legt fest, welche [`MediaKeys`](/de/docs/Web/API/MediaKeys) bei der Entschlüsselung von Medien während der Wiedergabe verwendet werden.
- [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId) {{SecureContext_Inline}}
  - : Legt die ID des Audiogeräts fest, das für die Ausgabe verwendet werden soll, und gibt ein {{jsxref("Promise")}} zurück. Dies funktioniert nur, wenn die Anwendung berechtigt ist, das angegebene Gerät zu verwenden.

## Veraltete Methoden

_Diese Methoden sind veraltet und sollten nicht mehr verwendet werden, auch wenn ein Browser sie noch unterstützt._

- [`HTMLMediaElement.mozCaptureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) {{Non-standard_Inline}}
  - : Die mit einem Firefox-Präfix versehene Entsprechung von [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream). Siehe dessen [Browser-Kompatibilität](/de/docs/Web/API/HTMLMediaElement/captureStream#browser_compatibility) für Details.
- `HTMLMediaElement.mozCaptureStreamUntilEnded()` {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Eine nicht standardisierte, veraltete Methode zum Erfassen des Streams, bis dieser zu Ende ist.
- `HTMLMediaElement.mozGetMetadata()` {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Gibt ein {{jsxref('Object')}} zurück, das Eigenschaften enthält, die Metadaten aus der abspielenden Medienquelle als `{key: value}`-Paare repräsentieren. Eine separate Kopie der Daten wird jedes Mal zurückgegeben, wenn die Methode aufgerufen wird. Diese Methode muss nach dem [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)-Ereignis aufgerufen werden.

## Ereignisse

_Ereignisse von seinem übergeordneten Element, [`HTMLElement`](/de/docs/Web/API/HTMLElement), werden geerbt._

Diese Ereignisse können mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) gehört werden oder durch Zuweisung eines Event-Listeners zur `oneventname`-Eigenschaft dieser Schnittstelle.

- [`abort`](/de/docs/Web/API/HTMLMediaElement/abort_event)
  - : Wird ausgelöst, wenn die Ressource nicht vollständig geladen wurde, jedoch nicht als Ergebnis eines Fehlers.
- [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)
  - : Wird ausgelöst, wenn der Benutzeragent das Medium abspielen kann, jedoch schätzt, dass **nicht** genügend Daten geladen wurden, um das Medium bis zum Ende abzuspielen, ohne für weiteres Puffern des Inhalts anhalten zu müssen.
- [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
  - : Wird ausgelöst, wenn der Benutzeragent das Medium abspielen kann und schätzt, dass genug Daten geladen wurden, um das Medium bis zum Ende abzuspielen, ohne für weiteres Puffern des Inhalts anhalten zu müssen.
- [`durationchange`](/de/docs/Web/API/HTMLMediaElement/durationchange_event)
  - : Wird ausgelöst, wenn die Eigenschaft für die Dauer aktualisiert wurde.
- [`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)
  - : Wird ausgelöst, wenn das Medium leer geworden ist; zum Beispiel, wenn das Medium bereits geladen ist (oder teilweise geladen war) und die Methode [`HTMLMediaElement.load()`](/de/docs/Web/API/HTMLMediaElement/load) aufgerufen wird, um es neu zu laden.
- [`encrypted`](/de/docs/Web/API/HTMLMediaElement/encrypted_event)
  - : Wird ausgelöst, wenn Initialisierungsdaten im Medium gefunden werden, die darauf hinweisen, dass das Medium verschlüsselt ist.
- [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)
  - : Wird ausgelöst, wenn die Wiedergabe stoppt, wenn das Ende des Mediums (`<audio>` oder `<video>`) erreicht wird oder weil keine weiteren Daten verfügbar sind.
- [`error`](/de/docs/Web/API/HTMLMediaElement/error_event)
  - : Wird ausgelöst, wenn die Ressource aufgrund eines Fehlers nicht geladen werden konnte.
- [`loadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event)
  - : Wird ausgelöst, wenn das erste Bild des Mediums fertig geladen ist.
- [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
  - : Wird ausgelöst, wenn Metadaten geladen wurden.
- [`loadstart`](/de/docs/Web/API/HTMLMediaElement/loadstart_event)
  - : Wird ausgelöst, wenn der Browser begonnen hat, eine Ressource zu laden.
- [`pause`](/de/docs/Web/API/HTMLMediaElement/pause_event)
  - : Wird ausgelöst, wenn ein Pausieren der Wiedergabe angefordert wurde und die Aktivität ihren pausierten Zustand erreicht hat, am häufigsten wenn die Methode [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) des Mediums aufgerufen wird.
- [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)
  - : Wird ausgelöst, wenn die `paused`-Eigenschaft von `true` auf `false` geändert wurde, als Ergebnis der Methode [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) oder dem `autoplay` Attribut.
- [`playing`](/de/docs/Web/API/HTMLMediaElement/playing_event)
  - : Wird ausgelöst, wenn die Wiedergabe bereit ist zu starten, nachdem sie pausiert oder durch Datenmangel verzögert wurde.
- [`progress`](/de/docs/Web/API/HTMLMediaElement/progress_event)
  - : Wird periodisch ausgelöst, während der Browser eine Ressource lädt.
- [`ratechange`](/de/docs/Web/API/HTMLMediaElement/ratechange_event)
  - : Wird ausgelöst, wenn sich die Wiedergabegeschwindigkeit geändert hat.
- [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event)
  - : Wird ausgelöst, wenn ein Suchvorgang abgeschlossen ist.
- [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
  - : Wird ausgelöst, wenn ein Suchvorgang beginnt.
- [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
  - : Wird ausgelöst, wenn der Benutzeragent versucht, Mediendaten abzurufen, Daten jedoch unerwartet nicht bereitgestellt werden.
- [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event)
  - : Wird ausgelöst, wenn das Laden der Mediendaten angehalten wurde.
- [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)
  - : Wird ausgelöst, wenn die durch die [`currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)-Eigenschaft angezeigte Zeit aktualisiert wurde.
- [`volumechange`](/de/docs/Web/API/HTMLMediaElement/volumechange_event)
  - : Wird ausgelöst, wenn sich die Lautstärke geändert hat.
- [`waiting`](/de/docs/Web/API/HTMLMediaElement/waiting_event)
  - : Wird ausgelöst, wenn die Wiedergabe aufgrund eines vorübergehenden Mangels an Daten gestoppt wurde.
- [`waitingforkey`](/de/docs/Web/API/HTMLMediaElement/waitingforkey_event)
  - : Wird ausgelöst, wenn die Wiedergabe erstmals blockiert wird, während auf einen Schlüssel gewartet wird.

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
- [Umgang mit Unterstützung von Medieninhalten in Web-Inhalten](/de/docs/Web/Media/Guides/Formats/Support_issues)
