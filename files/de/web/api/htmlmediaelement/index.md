---
title: HTMLMediaElement
slug: Web/API/HTMLMediaElement
l10n:
  sourceCommit: d678295b8c67d19354bca1db406af1b6bc8cf1c6
---

{{APIRef("HTML DOM")}}

Die Schnittstelle **`HTMLMediaElement`** erweitert [`HTMLElement`](/de/docs/Web/API/HTMLElement) um die Eigenschaften und Methoden, die für grundlegende Medienfunktionen benötigt werden, die Audio und Video gemeinsam haben.

Die Elemente [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) und [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) erben beide diese Schnittstelle.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Diese Schnittstelle erbt außerdem Eigenschaften von ihren Vorfahren [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) {{ReadOnlyInline}}
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die die im Element enthaltenen [`AudioTrack`](/de/docs/Web/API/AudioTrack)-Objekte auflistet.
- [`HTMLMediaElement.autoplay`](/de/docs/Web/API/HTMLMediaElement/autoplay)
  - : Ein boolescher Wert, der das HTML-Attribut [`autoplay`](/de/docs/Web/HTML/Reference/Elements/video#autoplay) widerspiegelt. Er gibt an, ob die Wiedergabe automatisch beginnen soll, sobald genügend Mediendaten für eine unterbrechungsfreie Wiedergabe verfügbar sind.

    > [!NOTE]
    > Das automatische Abspielen von Audio, wenn Benutzer es nicht erwarten oder wünschen, beeinträchtigt die Benutzererfahrung und sollte in den meisten Fällen vermieden werden, auch wenn es Ausnahmen gibt. Weitere Informationen finden Sie im [Leitfaden zur automatischen Wiedergabe für Medien- und Web-Audio-APIs](/de/docs/Web/Media/Guides/Autoplay). Beachten Sie, dass Browser Anfragen zur automatischen Wiedergabe ignorieren können. Stellen Sie daher sicher, dass Ihr Code nicht davon abhängt, dass die automatische Wiedergabe funktioniert.

- [`HTMLMediaElement.buffered`](/de/docs/Web/API/HTMLMediaElement/buffered) {{ReadOnlyInline}}
  - : Gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Bereiche der Medienquelle angibt, die der Browser zum Zeitpunkt des Zugriffs auf die Eigenschaft `buffered` gepuffert hat, sofern vorhanden.
- [`HTMLMediaElement.controls`](/de/docs/Web/API/HTMLMediaElement/controls)
  - : Ein boolescher Wert, der das HTML-Attribut [`controls`](/de/docs/Web/HTML/Reference/Elements/video#controls) widerspiegelt. Er gibt an, ob Bedienelemente für die Ressource angezeigt werden sollen.
- [`HTMLMediaElement.controlsList`](/de/docs/Web/API/HTMLMediaElement/controlsList)
  - : Gibt eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurück, die dem User-Agent dabei hilft auszuwählen, welche Bedienelemente auf dem Medienelement angezeigt werden sollen, wenn der User-Agent eigene Bedienelemente anzeigt. Die `DOMTokenList` enthält einen oder mehrere von drei möglichen Werten: `nodownload`, `nofullscreen` und `noremoteplayback`.
- [`HTMLMediaElement.crossOrigin`](/de/docs/Web/API/HTMLMediaElement/crossOrigin)
  - : Eine Zeichenfolge, die die [CORS-Einstellung](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für dieses Medienelement angibt.
- [`HTMLMediaElement.currentSrc`](/de/docs/Web/API/HTMLMediaElement/currentSrc) {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge mit der absoluten URL der ausgewählten Medienressource zurück.
- [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)
  - : Eine Gleitkommazahl mit doppelter Genauigkeit, die die aktuelle Wiedergabezeit in Sekunden angibt. Wenn die Wiedergabe des Mediums noch nicht begonnen hat und noch keine Suchoperation durchgeführt wurde, entspricht dieser Wert der anfänglichen Wiedergabezeit des Mediums. Wird dieser Wert gesetzt, springt die Wiedergabe zur neuen Zeitposition. Die Zeit wird relativ zur Zeitleiste des Mediums angegeben.
- [`HTMLMediaElement.defaultMuted`](/de/docs/Web/API/HTMLMediaElement/defaultMuted)
  - : Ein boolescher Wert, der das HTML-Attribut [`muted`](/de/docs/Web/HTML/Reference/Elements/video#muted) widerspiegelt. Er gibt an, ob die Audioausgabe des Medienelements standardmäßig stummgeschaltet sein soll.
- [`HTMLMediaElement.defaultPlaybackRate`](/de/docs/Web/API/HTMLMediaElement/defaultPlaybackRate)
  - : Ein `double`, der die Standard-Wiedergabegeschwindigkeit des Mediums angibt.
- [`HTMLMediaElement.disableRemotePlayback`](/de/docs/Web/API/HTMLMediaElement/disableRemotePlayback)
  - : Ein boolescher Wert, der den Status der Remote-Wiedergabe setzt oder zurückgibt und angibt, ob für das Medienelement eine Benutzeroberfläche zur Remote-Wiedergabe zulässig ist.
- [`HTMLMediaElement.duration`](/de/docs/Web/API/HTMLMediaElement/duration) {{ReadOnlyInline}}
  - : Eine schreibgeschützte Gleitkommazahl mit doppelter Genauigkeit, die die Gesamtdauer des Mediums in Sekunden angibt. Wenn keine Mediendaten verfügbar sind, wird `NaN` zurückgegeben. Hat das Medium eine unbegrenzte Dauer, etwa bei einem Livestream oder den Medien eines WebRTC-Anrufs, lautet der Wert `Infinity`.
- [`HTMLMediaElement.ended`](/de/docs/Web/API/HTMLMediaElement/ended) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob die Wiedergabe des Medienelements beendet ist.
- [`HTMLMediaElement.error`](/de/docs/Web/API/HTMLMediaElement/error) {{ReadOnlyInline}}
  - : Gibt ein [`MediaError`](/de/docs/Web/API/MediaError)-Objekt für den letzten Fehler zurück oder `null`, wenn kein Fehler aufgetreten ist.
- [`HTMLMediaElement.loading`](/de/docs/Web/API/HTMLMediaElement/loading) {{experimental_inline}}
  - : Eine Zeichenfolge, die angibt, ob der Browser das Medium sofort (`eager`) oder erst bei Bedarf (`lazy`) laden soll. Weitere Informationen finden Sie bei den HTML-Attributen [`<video loading>`](/de/docs/Web/HTML/Reference/Elements/video#loading) und [`<audio loading>`](/de/docs/Web/HTML/Reference/Elements/audio#loading).
- [`HTMLMediaElement.loop`](/de/docs/Web/API/HTMLMediaElement/loop)
  - : Ein boolescher Wert, der das HTML-Attribut [`loop`](/de/docs/Web/HTML/Reference/Elements/video#loop) widerspiegelt. Er gibt an, ob das Medienelement nach Erreichen des Endes von vorn beginnen soll.
- [`HTMLMediaElement.mediaKeys`](/de/docs/Web/API/HTMLMediaElement/mediaKeys) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein [`MediaKeys`](/de/docs/Web/API/MediaKeys)-Objekt zurück, das einen Satz von Schlüsseln enthält, mit denen das Element Mediendaten während der Wiedergabe entschlüsseln kann. Wenn kein Schlüssel verfügbar ist, kann der Wert `null` sein.
- [`HTMLMediaElement.muted`](/de/docs/Web/API/HTMLMediaElement/muted)
  - : Ein boolescher Wert, der festlegt, ob die Audioausgabe stummgeschaltet ist. Der Wert ist `true`, wenn die Audioausgabe stummgeschaltet ist, andernfalls `false`.
- [`HTMLMediaElement.networkState`](/de/docs/Web/API/HTMLMediaElement/networkState) {{ReadOnlyInline}}
  - : Gibt einen `unsigned short` (Aufzählungswert) zurück, der den aktuellen Status des Abrufs des Mediums über das Netzwerk angibt.
- [`HTMLMediaElement.paused`](/de/docs/Web/API/HTMLMediaElement/paused) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob die Wiedergabe des Medienelements pausiert ist.
- [`HTMLMediaElement.playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate)
  - : Ein `double`, der die Geschwindigkeit angibt, mit der das Medium wiedergegeben wird.
- [`HTMLMediaElement.played`](/de/docs/Web/API/HTMLMediaElement/played) {{ReadOnlyInline}}
  - : Gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die bereits wiedergegebenen Bereiche der Medienquelle enthält, sofern vorhanden.
- [`HTMLMediaElement.preload`](/de/docs/Web/API/HTMLMediaElement/preload)
  - : Eine Zeichenfolge, die das HTML-Attribut [`preload`](/de/docs/Web/HTML/Reference/Elements/video#preload) widerspiegelt und angibt, welche Daten gegebenenfalls vorab geladen werden sollen. Mögliche Werte sind `none`, `metadata` und `auto`.
- [`HTMLMediaElement.preservesPitch`](/de/docs/Web/API/HTMLMediaElement/preservesPitch)
  - : Ein boolescher Wert, der festlegt, ob die Tonhöhe erhalten bleibt. Bei `false` passt sich die Tonhöhe an die Wiedergabegeschwindigkeit an.
- [`HTMLMediaElement.readyState`](/de/docs/Web/API/HTMLMediaElement/readyState) {{ReadOnlyInline}}
  - : Gibt einen `unsigned short` (Aufzählungswert) zurück, der den Bereitschaftsstatus des Mediums angibt.
- [`HTMLMediaElement.remote`](/de/docs/Web/API/HTMLMediaElement/remote) {{ReadOnlyInline}}
  - : Gibt eine dem Medienelement zugeordnete Instanz eines [`RemotePlayback`](/de/docs/Web/API/RemotePlayback)-Objekts zurück.
- [`HTMLMediaElement.seekable`](/de/docs/Web/API/HTMLMediaElement/seekable) {{ReadOnlyInline}}
  - : Gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Zeitbereiche enthält, zu denen Benutzer springen können, sofern vorhanden.
- [`HTMLMediaElement.seeking`](/de/docs/Web/API/HTMLMediaElement/seeking) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob gerade zu einer neuen Position im Medium gesprungen wird.
- [`HTMLMediaElement.sinkId`](/de/docs/Web/API/HTMLMediaElement/sinkId) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt eine Zeichenfolge mit der eindeutigen ID des Audioausgabegeräts zurück oder eine leere Zeichenfolge, wenn das Standard-Audioausgabegerät des User-Agents verwendet wird.
- [`HTMLMediaElement.src`](/de/docs/Web/API/HTMLMediaElement/src)
  - : Eine Zeichenfolge, die das HTML-Attribut [`src`](/de/docs/Web/HTML/Reference/Elements/video#src) widerspiegelt. Dieses enthält die URL der zu verwendenden Medienressource.
- [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)
  - : Ein Objekt, das als Quelle des dem `HTMLMediaElement` zugeordneten Mediums dient, oder `null`, wenn keine Quelle zugewiesen wurde.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks) {{ReadOnlyInline}}
  - : Gibt ein [`TextTrackList`](/de/docs/Web/API/TextTrackList)-Objekt zurück, das die Liste der im Element enthaltenen [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekte enthält.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) {{ReadOnlyInline}}
  - : Gibt ein [`VideoTrackList`](/de/docs/Web/API/VideoTrackList)-Objekt zurück, das die Liste der im Element enthaltenen [`VideoTrack`](/de/docs/Web/API/VideoTrack)-Objekte enthält.
- [`HTMLMediaElement.volume`](/de/docs/Web/API/HTMLMediaElement/volume)
  - : Ein `double`, der die Lautstärke angibt, von 0.0 (stumm) bis 1.0 (maximale Lautstärke).

## Veraltete Eigenschaften

Diese Eigenschaften sind veraltet und sollten nicht verwendet werden, selbst wenn ein Browser sie noch unterstützt.

- [`HTMLMediaElement.controller`](/de/docs/Web/API/HTMLMediaElement/controller) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein [`MediaController`](/de/docs/Web/API/MediaController)-Objekt, das den dem Element zugewiesenen Mediencontroller darstellt, oder `null`, wenn keiner zugewiesen ist.
- [`HTMLMediaElement.mediaGroup`](/de/docs/Web/API/HTMLMediaElement/mediaGroup) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine Zeichenfolge, die das HTML-Attribut `mediagroup` widerspiegelt. Dieses gibt den Namen der Gruppe an, zu der das Element gehört. Eine Gruppe von Medienelementen verwendet einen gemeinsamen [`MediaController`](/de/docs/Web/API/MediaController).
- `HTMLMediaElement.mozAudioCaptured` {{ReadOnlyInline}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Gibt einen booleschen Wert zurück. Steht im Zusammenhang mit der Erfassung von Audiostreams.
- `HTMLMediaElement.mozFragmentEnd` {{ReadOnlyInline}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Ein `double`, der Zugriff auf die Endzeit des Fragments bietet, wenn das Medienelement für `currentSrc` eine Fragment-URI hat. Andernfalls entspricht der Wert der Dauer des Mediums.

## Instanzmethoden

_Diese Schnittstelle erbt außerdem Methoden von ihren Vorfahren [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`HTMLMediaElement.addTextTrack()`](/de/docs/Web/API/HTMLMediaElement/addTextTrack)
  - : Fügt einem Medienelement ein neues [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekt hinzu, beispielsweise eine Untertitelspur. Dies ist ausschließlich eine programmatische Schnittstelle und hat keine Auswirkungen auf das DOM.
- [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream)
  - : Erfasst einen Stream des Medieninhalts und gibt einen [`MediaStream`](/de/docs/Web/API/MediaStream) zurück.
- [`HTMLMediaElement.canPlayType()`](/de/docs/Web/API/HTMLMediaElement/canPlayType)
  - : Wenn eine Zeichenfolge übergeben wird, die einen MIME-Medientyp angibt und gegebenenfalls den [Parameter `codecs`](/de/docs/Web/Media/Guides/Formats/codecs_parameter) enthält, gibt `canPlayType()` die Zeichenfolge `probably` zurück, wenn das Medium voraussichtlich abgespielt werden kann, `maybe`, wenn nicht genügend Informationen für eine Beurteilung vorliegen, oder eine leere Zeichenfolge, wenn das Medium nicht abgespielt werden kann.
- [`HTMLMediaElement.fastSeek()`](/de/docs/Web/API/HTMLMediaElement/fastSeek)
  - : Springt schnell und mit geringer Genauigkeit zur angegebenen Zeitposition.
- [`HTMLMediaElement.getStartDate()`](/de/docs/Web/API/HTMLMediaElement/getStartDate)
  - : Gibt ein {{jsxref("Date")}}-Objekt zurück, das das tatsächliche Datum und die Uhrzeit des Medienbeginns darstellt. Bei Livestreams ist dies der Zeitpunkt, zu dem die Übertragung auf dem Server begann; er kann vor dem Zeitpunkt liegen, zu dem Benutzer mit dem Ansehen begonnen haben.
- [`HTMLMediaElement.load()`](/de/docs/Web/API/HTMLMediaElement/load)
  - : Setzt das Medium auf den Anfang zurück und wählt die am besten geeignete verfügbare Quelle aus den Quellen aus, die über das Attribut [`src`](/de/docs/Web/HTML/Reference/Elements/video#src) oder das Element {{HTMLElement("source")}} angegeben wurden.
- [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause)
  - : Pausiert die Medienwiedergabe.
- [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play)
  - : Beginnt die Wiedergabe des Mediums.
- [`HTMLMediaElement.seekToNextFrame()`](/de/docs/Web/API/HTMLMediaElement/seekToNextFrame) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Springt zum nächsten Frame des Mediums. Diese nicht standardisierte, experimentelle Methode ermöglicht es, das Lesen und Rendern von Medien manuell mit einer eigenen Geschwindigkeit zu steuern oder sich Frame für Frame durch das Medium zu bewegen, um Filter oder andere Operationen auszuführen.
- [`HTMLMediaElement.setMediaKeys()`](/de/docs/Web/API/HTMLMediaElement/setMediaKeys) {{SecureContext_Inline}}
  - : Gibt eine {{jsxref("Promise")}} zurück. Legt die [`MediaKeys`](/de/docs/Web/API/MediaKeys)-Schlüssel fest, die beim Entschlüsseln des Mediums während der Wiedergabe verwendet werden.
- [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId) {{SecureContext_Inline}}
  - : Legt die ID des für die Ausgabe zu verwendenden Audiogeräts fest und gibt eine {{jsxref("Promise")}} zurück. Dies funktioniert nur, wenn die Anwendung zur Verwendung des angegebenen Geräts berechtigt ist.

## Veraltete Methoden

_Diese Methoden sind veraltet und sollten nicht verwendet werden, selbst wenn ein Browser sie noch unterstützt._

- [`HTMLMediaElement.mozCaptureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) {{Non-standard_Inline}}
  - : Das Firefox-spezifische Äquivalent von [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream). Einzelheiten finden Sie unter [Browser-Kompatibilität](/de/docs/Web/API/HTMLMediaElement/captureStream#browser_compatibility).
- `HTMLMediaElement.mozCaptureStreamUntilEnded()` {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Eine nicht standardisierte, veraltete Methode, um den Stream bis zu seinem Ende zu erfassen.
- `HTMLMediaElement.mozGetMetadata()` {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Gibt ein {{jsxref('Object')}} zurück, dessen Eigenschaften die Metadaten der wiedergegebenen Medienressource als `{key: value}`-Paare darstellen. Bei jedem Methodenaufruf wird eine separate Kopie der Daten zurückgegeben. Diese Methode muss aufgerufen werden, nachdem das Ereignis [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event) ausgelöst wurde.

## Ereignisse

_Erbt Ereignisse von der übergeordneten Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Sie können diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) überwachen oder der Eigenschaft `oneventname` dieser Schnittstelle einen Event-Listener zuweisen.

- [`abort`](/de/docs/Web/API/HTMLMediaElement/abort_event)
  - : Wird ausgelöst, wenn die Ressource nicht vollständig geladen wurde, ohne dass ein Fehler die Ursache war.
- [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)
  - : Wird ausgelöst, wenn der User-Agent das Medium abspielen kann, aber davon ausgeht, dass **nicht** genügend Daten geladen wurden, um es ohne Unterbrechung zum Nachpuffern bis zum Ende abzuspielen.
- [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
  - : Wird ausgelöst, wenn der User-Agent das Medium abspielen kann und davon ausgeht, dass genügend Daten geladen wurden, um es ohne Unterbrechung zum Nachpuffern bis zum Ende abzuspielen.
- [`durationchange`](/de/docs/Web/API/HTMLMediaElement/durationchange_event)
  - : Wird ausgelöst, wenn die Eigenschaft für die Dauer aktualisiert wurde.
- [`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)
  - : Wird ausgelöst, wenn das Medium geleert wurde, beispielsweise wenn es bereits vollständig oder teilweise geladen war und die Methode [`HTMLMediaElement.load()`](/de/docs/Web/API/HTMLMediaElement/load) aufgerufen wird, um es erneut zu laden.
- [`encrypted`](/de/docs/Web/API/HTMLMediaElement/encrypted_event)
  - : Wird ausgelöst, wenn im Medium Initialisierungsdaten gefunden werden, die darauf hinweisen, dass das Medium verschlüsselt ist.
- [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)
  - : Wird ausgelöst, wenn die Wiedergabe endet, weil das Ende des Mediums (\<audio> oder \<video>) erreicht wurde oder keine weiteren Daten verfügbar sind.
- [`error`](/de/docs/Web/API/HTMLMediaElement/error_event)
  - : Wird ausgelöst, wenn die Ressource aufgrund eines Fehlers nicht geladen werden konnte.
- [`loadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event)
  - : Wird ausgelöst, wenn der erste Frame des Mediums vollständig geladen wurde.
- [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
  - : Wird ausgelöst, wenn die Metadaten geladen wurden.
- [`loadstart`](/de/docs/Web/API/HTMLMediaElement/loadstart_event)
  - : Wird ausgelöst, wenn der Browser begonnen hat, eine Ressource zu laden.
- [`pause`](/de/docs/Web/API/HTMLMediaElement/pause_event)
  - : Wird ausgelöst, wenn eine Anfrage zum Pausieren der Wiedergabe verarbeitet wurde und die Wiedergabe in den pausierten Zustand übergegangen ist. Dies geschieht meist, wenn die Methode [`HTMLMediaElement.pause()`](/de/docs/Web/API/HTMLMediaElement/pause) des Mediums aufgerufen wird.
- [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)
  - : Wird ausgelöst, wenn die Eigenschaft `paused` infolge eines Aufrufs der Methode [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) oder aufgrund des Attributs `autoplay` von `true` zu `false` wechselt.
- [`playing`](/de/docs/Web/API/HTMLMediaElement/playing_event)
  - : Wird ausgelöst, wenn die Wiedergabe nach einer Pause oder einer Verzögerung aufgrund fehlender Daten beginnen kann.
- [`progress`](/de/docs/Web/API/HTMLMediaElement/progress_event)
  - : Wird regelmäßig ausgelöst, während der Browser eine Ressource lädt.
- [`ratechange`](/de/docs/Web/API/HTMLMediaElement/ratechange_event)
  - : Wird ausgelöst, wenn sich die Wiedergabegeschwindigkeit geändert hat.
- [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event)
  - : Wird ausgelöst, wenn eine Suchoperation abgeschlossen ist.
- [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
  - : Wird ausgelöst, wenn eine Suchoperation beginnt.
- [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
  - : Wird ausgelöst, wenn der User-Agent versucht, Mediendaten abzurufen, aber unerwartet keine Daten eintreffen.
- [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event)
  - : Wird ausgelöst, wenn das Laden der Mediendaten ausgesetzt wurde.
- [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)
  - : Wird ausgelöst, wenn die von der Eigenschaft [`currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime) angegebene Zeit aktualisiert wurde.
- [`volumechange`](/de/docs/Web/API/HTMLMediaElement/volumechange_event)
  - : Wird ausgelöst, wenn sich die Lautstärke geändert hat.
- [`waiting`](/de/docs/Web/API/HTMLMediaElement/waiting_event)
  - : Wird ausgelöst, wenn die Wiedergabe aufgrund eines vorübergehenden Datenmangels angehalten wurde.
- [`waitingforkey`](/de/docs/Web/API/HTMLMediaElement/waitingforkey_event)
  - : Wird ausgelöst, wenn die Wiedergabe erstmals blockiert wird, während auf einen Schlüssel gewartet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

### Referenzen

- Die HTML-Elemente {{HTMLElement("video")}} und {{HTMLElement("audio")}}
- Die von `HTMLMediaElement` abgeleiteten Schnittstellen [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) und [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)

### Leitfäden

- [Web-Medientechnologien](/de/docs/Web/Media)
- Lernbereich: [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats)
- [Umgang mit Problemen bei der Medienunterstützung in Webinhalten](/de/docs/Web/Media/Guides/Formats/Support_issues)
