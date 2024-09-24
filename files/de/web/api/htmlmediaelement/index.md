---
title: HTMLMediaElement
slug: Web/API/HTMLMediaElement
l10n:
  sourceCommit: c640274a19227cd5790912ea76841732baa6731f
---

{{APIRef("HTML DOM")}}

Das **`HTMLMediaElement`**-Interface erweitert {{domxref("HTMLElement")}} um diejenigen Eigenschaften und Methoden, die benötigt werden, um grundlegende medienbezogene Funktionen zu unterstützen, die für Audio und Video gemeinsam sind.

Sowohl die {{domxref("HTMLVideoElement")}}- als auch die {{domxref("HTMLAudioElement")}}-Elemente erben von diesem Interface.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinen Vorfahren {{domxref("HTMLElement")}}, {{domxref("Element")}}, {{domxref("Node")}} und {{domxref("EventTarget")}}._

- {{domxref("HTMLMediaElement.audioTracks")}}
  - : Ein {{domxref("AudioTrackList")}}, das die {{domxref("AudioTrack")}}-Objekte auflistet, die im Element enthalten sind.
- {{domxref("HTMLMediaElement.autoplay")}}

  - : Ein boolescher Wert, der das [`autoplay`](/de/docs/Web/HTML/Element/video#autoplay)-HTML-Attribut widerspiegelt und anzeigt, ob die Wiedergabe automatisch starten sollte, sobald genügend Medien verfügbar sind, um dies ohne Unterbrechung zu tun.

    > [!NOTE]
    > Das automatische Abspielen von Audio, wenn der Benutzer es nicht erwartet oder wünscht, ist eine schlechte Benutzererfahrung und sollte in den meisten Fällen vermieden werden, obwohl es Ausnahmen gibt. Siehe den [Leitfaden zur automatischen Wiedergabe für Medien- und Web-Audio-APIs](/de/docs/Web/Media/Autoplay_guide) für weitere Informationen. Beachten Sie, dass Browser Anfragen zur automatischen Wiedergabe ignorieren können. Sie sollten sicherstellen, dass Ihr Code nicht von der Funktionalität der automatischen Wiedergabe abhängt.

- {{domxref("HTMLMediaElement.buffered")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("TimeRanges")}}-Objekt zurück, das die Bereiche der Medienquelle angibt, die der Browser im Moment gepuffert hat (falls vorhanden), wenn die `buffered`-Eigenschaft aufgerufen wird.
- {{domxref("HTMLMediaElement.controls")}}
  - : Ein boolescher Wert, der das [`controls`](/de/docs/Web/HTML/Element/video#controls)-HTML-Attribut widerspiegelt und anzeigt, ob Benutzeroberflächenelemente zur Steuerung der Ressource angezeigt werden sollen.
- {{domxref("HTMLMediaElement.controlsList")}} {{ReadOnlyInline}}
  - : Gibt eine {{domxref("DOMTokenList")}} zurück, die dem Benutzeragenten hilft, auszuwählen, welche Steuerungselemente beim Anzeigen der eigenen Steuerungselemente des Medien-Elements angezeigt werden sollen. Die `DOMTokenList` nimmt einen oder mehrere der drei möglichen Werte an: `nodownload`, `nofullscreen` und `noremoteplayback`.
- {{domxref("HTMLMediaElement.crossOrigin")}}
  - : Ein String, der die [CORS-Einstellung](/de/docs/Web/HTML/Attributes/crossorigin) für dieses Media-Element angibt.
- {{domxref("HTMLMediaElement.currentSrc")}} {{ReadOnlyInline}}
  - : Gibt einen String mit der absoluten URL der ausgewählten Medienressource zurück.
- {{domxref("HTMLMediaElement.currentTime")}}
  - : Ein Gleitkommawert doppelter Präzision, der die aktuelle Wiedergabezeit in Sekunden angibt. Wenn die Medienwiedergabe nicht gestartet wurde und die Medien nicht gesprungen sind, ist dieser Wert die anfängliche Wiedergabezeit der Medien. Das Setzen dieses Wertes springt zu der neuen Zeit in den Medien. Die Zeit wird relativ zur Zeitleiste der Medien angegeben.
- {{domxref("HTMLMediaElement.defaultMuted")}}
  - : Ein boolescher Wert, der das [`muted`](/de/docs/Web/HTML/Element/video#muted)-HTML-Attribut widerspiegelt, und angibt, ob die Audiowiedergabe der Medien standardmäßig stummgeschaltet sein sollte.
- {{domxref("HTMLMediaElement.defaultPlaybackRate")}}
  - : Ein `double`, der die Standardwiedergabegeschwindigkeit der Medien angibt.
- {{domxref("HTMLMediaElement.disableRemotePlayback")}}
  - : Ein boolescher Wert, der den Status der Fernwiedergabe setzt oder zurückgibt und anzeigt, ob das Medienelement eine Benutzeroberfläche für die Fernwiedergabe haben darf.
- {{domxref("HTMLMediaElement.duration")}} {{ReadOnlyInline}}
  - : Ein schreibgeschützter Gleitkommawert doppelter Präzision, der die Gesamtdauer des Mediums in Sekunden angibt. Wenn keine Mediadaten verfügbar sind, wird der Wert `NaN` zurückgegeben. Wenn die Medien eine unbestimmte Länge haben (wie Live-Streaming-Medien, ein WebRTC-Anruf oder ähnliches), ist der Wert `+Infinity`.
- {{domxref("HTMLMediaElement.ended")}} {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob die Wiedergabe im Medienelement beendet ist.
- {{domxref("HTMLMediaElement.error")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("MediaError")}}-Objekt für den letzten Fehler zurück oder `null`, wenn es keinen Fehler gab.
- {{domxref("HTMLMediaElement.loop")}}
  - : Ein boolescher Wert, der das [`loop`](/de/docs/Web/HTML/Element/video#loop)-HTML-Attribut widerspiegelt und angibt, ob das Medienelement beim Erreichen des Endes neu starten soll.
- {{domxref("HTMLMediaElement.mediaKeys")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt ein {{domxref("MediaKeys")}}-Objekt zurück, das einen Satz von Schlüsseln darstellt, den das Element zur Entschlüsselung von Mediendaten während der Wiedergabe verwenden kann. Falls kein Schlüssel verfügbar ist, kann es `null` sein.
- {{domxref("HTMLMediaElement.muted")}}
  - : Ein boolescher Wert, der angibt, ob der Ton stummgeschaltet ist. `true`, wenn der Ton stummgeschaltet ist, und `false` andernfalls.
- {{domxref("HTMLMediaElement.networkState")}} {{ReadOnlyInline}}
  - : Gibt einen `unsigned short` (Aufzählung) zurück, der den aktuellen Status des Abrufs der Medien über das Netzwerk angibt.
- {{domxref("HTMLMediaElement.paused")}} {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Medienelement angehalten ist.
- {{domxref("HTMLMediaElement.playbackRate")}}
  - : Ein `double`, der die Rate angibt, mit der die Medienwiedergabe abgespielt wird.
- {{domxref("HTMLMediaElement.played")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref('TimeRanges')}}-Objekt zurück, das die Zeitbereiche enthält, die der Browser von der Medienquelle abgespielt hat, sofern vorhanden.
- {{domxref("HTMLMediaElement.preload")}}
  - : Ein String, der das [`preload`](/de/docs/Web/HTML/Element/video#preload)-HTML-Attribut widerspiegelt und angibt, welche Daten vorgeladen werden sollen, falls vorhanden. Mögliche Werte sind: `none`, `metadata`, `auto`.
- {{domxref("HTMLMediaElement.preservesPitch")}}
  - : Ein boolescher Wert, der bestimmt, ob die Tonhöhe des Klangs erhalten bleibt. Wenn auf `false` gesetzt, wird die Tonhöhe an die Geschwindigkeit des Audios angepasst.
- {{domxref("HTMLMediaElement.readyState")}} {{ReadOnlyInline}}
  - : Gibt einen `unsigned short` (Aufzählung) zurück, der den Bereitschaftszustand des Mediums angibt.
- {{domxref("HTMLMediaElement.remote")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("RemotePlayback")}}-Objekt zurück, das mit dem Medienelement verknüpft ist.
- {{domxref("HTMLMediaElement.seekable")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref('TimeRanges')}}-Objekt zurück, das die Zeitbereiche enthält, zu denen der Benutzer springen kann, sofern vorhanden.
- {{domxref("HTMLMediaElement.seeking")}} {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob die Medien in den Prozess des Suchens nach einer neuen Position sind.
- {{domxref("HTMLMediaElement.sinkId")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt einen String zurück, der die eindeutige ID des Audiogeräts ist, das die Ausgabe liefert, oder einen leeren String, wenn das Standard-Audiogerät des Benutzeragenten verwendet wird.
- {{domxref("HTMLMediaElement.src")}}
  - : Ein String, der das [`src`](/de/docs/Web/HTML/Element/video#src)-HTML-Attribut widerspiegelt und die URL einer zu verwendenden Medienressource enthält.
- {{domxref("HTMLMediaElement.srcObject")}}
  - : Ein {{domxref('MediaStream')}} stellt die Medien dar, die im aktuellen `HTMLMediaElement` abgespielt wurden oder werden, oder `null`, wenn nicht zugewiesen.
- {{domxref("HTMLMediaElement.textTracks")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref('TextTrackList')}}-Objekt zurück, das die Liste der im Element enthaltenen {{domxref("TextTrack")}}-Objekte enthält.
- {{domxref("HTMLMediaElement.videoTracks")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref('VideoTrackList')}}-Objekt zurück, das die Liste der im Element enthaltenen {{domxref("VideoTrack")}}-Objekte enthält.
- {{domxref("HTMLMediaElement.volume")}}
  - : Ein `double`, das die Lautstärke des Audios angibt, von 0,0 (stumm) bis 1,0 (am lautesten).

## Veraltete Eigenschaften

Diese Eigenschaften sind veraltet und sollten nicht verwendet werden, auch wenn ein Browser sie noch unterstützt.

- {{domxref("HTMLMediaElement.controller")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein {{domxref("MediaController")}}-Objekt, das den dem Element zugewiesenen Mediencontroller darstellt, oder `null`, wenn keiner zugewiesen ist.
- {{domxref("HTMLMediaElement.mediaGroup")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein String, der das `mediagroup`-HTML-Attribut widerspiegelt und den Namen der Gruppe von Elementen angibt, zu denen es gehört. Eine Gruppe von Medienelementen teilt einen gemeinsamen {{domxref('MediaController')}}.
- {{domxref("HTMLMediaElement.mozAudioCaptured")}} {{ReadOnlyInline}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Gibt einen booleschen Wert zurück. Bezieht sich auf die Erfassung von Audiostreams.
- {{domxref("HTMLMediaElement.mozFragmentEnd")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Ein `double`, das Zugang zur Fragmentendzeit bietet, wenn das Medienelement eine Fragment-URI für `currentSrc` hat, andernfalls entspricht es der Medienlänge.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von seinen Vorfahren {{domxref("HTMLElement")}}, {{domxref("Element")}}, {{domxref("Node")}} und {{domxref("EventTarget")}}._

- {{domxref("HTMLMediaElement.addTextTrack()")}}
  - : Fügt dem Medienelement ein neues {{domxref("TextTrack")}}-Objekt hinzu (wie z. B. eine Spur für Untertitel). Dies ist nur eine programmatische Schnittstelle und beeinflusst nicht das DOM.
- {{domxref("HTMLMediaElement.captureStream()")}}
  - : Gibt {{domxref("MediaStream")}} zurück und erfasst einen Stream des Medieninhalts.
- {{domxref("HTMLMediaElement.canPlayType()")}}
  - : Wenn ein String angegeben wird, der einen MIME-Medientyp angibt (potenziell mit dem [`codecs`-Parameter](/de/docs/Web/Media/Formats/codecs_parameter) eingeschlossen), gibt `canPlayType()` den String `probably` zurück, wenn das Medium abspielbar sein sollte, `maybe`, wenn es nicht genug Informationen gibt, um zu bestimmen, ob das Medium abgespielt wird oder nicht, oder einen leeren String, wenn das Medium nicht abgespielt werden kann.
- {{domxref("HTMLMediaElement.fastSeek()")}}
  - : Springt schnell zur angegebenen Zeit mit niedriger Präzision.
- {{domxref("HTMLMediaElement.load()")}}
  - : Setzt die Medien an den Anfang zurück und wählt die beste verfügbare Quelle aus den angegebenen Quellen mithilfe des [`src`](/de/docs/Web/HTML/Element/video#src)-Attributs oder des {{HTMLElement("source")}}-Elements aus.
- {{domxref("HTMLMediaElement.pause()")}}
  - : Pausiert die Medienwiedergabe.
- {{domxref("HTMLMediaElement.play()")}}
  - : Startet die Wiedergabe der Medien.
- {{domxref("HTMLMediaElement.seekToNextFrame()")}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Springt zum nächsten Frame im Medium. Diese nicht-standardisierte, experimentelle Methode ermöglicht es, das Lesen und Rendern von Medien manuell in eine benutzerdefinierte Geschwindigkeit zu steuern oder das Medium frame-by-frame zu durchlaufen, um Filterungen oder andere Operationen durchzuführen.
- {{domxref("HTMLMediaElement.setMediaKeys()")}} {{SecureContext_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück. Setzt die {{domxref("MediaKeys")}}-Schlüssel, die beim Entschlüsseln von Medien während der Wiedergabe verwendet werden.
- {{domxref("HTMLMediaElement.setSinkId()")}} {{SecureContext_Inline}}
  - : Setzt die ID des Audiogeräts, das für die Ausgabe zu verwenden ist, und gibt ein {{jsxref("Promise")}} zurück. Dies funktioniert nur, wenn die Anwendung autorisiert ist, das angegebene Gerät zu verwenden.

## Veraltete Methoden

_Diese Methoden sind veraltet und sollten nicht verwendet werden, auch wenn ein Browser sie noch unterstützt._

- {{domxref("HTMLMediaElement.captureStream", "HTMLMediaElement.mozCaptureStream()")}} {{Non-standard_Inline}}
  - : Das mit Firefox präfixierte Äquivalent von {{domxref("HTMLMediaElement.captureStream()")}}. Siehe deren [Browser-Kompatibilität](/de/docs/Web/API/HTMLMediaElement/captureStream#browser_compatibility) für Details.
- {{domxref("HTMLMediaElement.mozCaptureStreamUntilEnded()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : \[Beschreibung eingeben]
- {{domxref("HTMLMediaElement.mozGetMetadata()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Gibt {{jsxref('Object')}} zurück, das Eigenschaften enthält, die Metadaten der wiedergegebenen Medienressource als `{key: value}`-Paare darstellen. Eine separate Kopie der Daten wird jedes Mal zurückgegeben, wenn die Methode aufgerufen wird. Diese Methode muss nach dem [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)-Ereignis aufgerufen werden.

## Ereignisse

_Erbt Ereignisse von seinem Elternteil {{domxref("HTMLElement")}}._

Hören Sie diese Ereignisse mit {{domxref("EventTarget.addEventListener", "addEventListener()")}} ab oder weisen Sie einen Ereignis-Listener der `oneventname`-Eigenschaft dieser Schnittstelle zu.

- {{domxref("HTMLMediaElement.abort_event", 'abort')}}
  - : Wird ausgelöst, wenn die Ressourcen nicht vollständig geladen wurden, jedoch nicht aufgrund eines Fehlers.
- {{domxref("HTMLMediaElement.canplay_event", 'canplay')}}
  - : Wird ausgelöst, wenn der Benutzeragent das Medium abspielen kann, aber nicht genug Daten geladen hat, um das Medium bis zu seinem Ende ohne weitere Pufferung von Inhalten abzuspielen.
- {{domxref("HTMLMediaElement.canplaythrough_event", 'canplaythrough')}}
  - : Wird ausgelöst, wenn der Benutzeragent das Medium abspielen kann und genug Daten geladen hat, um das Medium bis zu seinem Ende ohne weitere Pufferung von Inhalten abzuspielen.
- {{domxref("HTMLMediaElement.durationchange_event", 'durationchange')}}
  - : Wird ausgelöst, wenn die Eigenschaft `duration` aktualisiert wurde.
- {{domxref("HTMLMediaElement.emptied_event", 'emptied')}}
  - : Wird ausgelöst, wenn die Medien leer geworden sind; beispielsweise, wenn die Medien bereits geladen (oder teilweise geladen) sind und die {{domxref("HTMLMediaElement.load()")}}-Methode aufgerufen wird, um sie neu zu laden.
- {{domxref("HTMLMediaElement.encrypted_event", 'encrypted')}}
  - : Wird ausgelöst, wenn Initialisierungsdaten in den Medien gefunden werden, die darauf hinweisen, dass sie verschlüsselt sind.
- {{domxref("HTMLMediaElement.ended_event", 'ended')}}
  - : Wird ausgelöst, wenn die Wiedergabe stoppt, weil das Ende des Mediums (\<audio> oder \<video>) erreicht ist oder weil keine weiteren Daten zur Verfügung stehen.
- {{domxref("HTMLMediaElement.error_event", 'error')}}
  - : Wird ausgelöst, wenn die Ressource aufgrund eines Fehlers nicht geladen werden konnte.
- {{domxref("HTMLMediaElement.loadeddata_event", 'loadeddata')}}
  - : Wird ausgelöst, wenn der erste Frame der Medien geladen ist.
- {{domxref("HTMLMediaElement.loadedmetadata_event", 'loadedmetadata')}}
  - : Wird ausgelöst, wenn die Metadaten geladen sind.
- {{domxref("HTMLMediaElement.loadstart_event", 'loadstart')}}
  - : Wird ausgelöst, wenn der Browser begonnen hat, eine Ressource zu laden.
- {{domxref("HTMLMediaElement.pause_event", 'pause')}}
  - : Wird ausgelöst, wenn eine Anforderung, die Wiedergabe zu pausieren, verarbeitet wird und die Aktivität ihren pausierten Zustand erreicht hat, was meist auftritt, wenn die {{domxref("HTMLMediaElement.pause()")}}-Methode des Mediums aufgerufen wird.
- {{domxref("HTMLMediaElement.play_event", 'play')}}
  - : Wird ausgelöst, wenn die `paused`-Eigenschaft von `true` auf `false` geändert wird, infolge der {{domxref("HTMLMediaElement.play()")}}-Methode oder des `autoplay`-Attributs.
- {{domxref("HTMLMediaElement.playing_event", "playing")}}
  - : Wird ausgelöst, wenn die Wiedergabe bereit ist, zu starten, nachdem sie angehalten oder aufgrund von Datenmangel verzögert wurde.
- {{domxref("HTMLMediaElement.progress_event", "progress")}}
  - : Wird regelmäßig ausgelöst, während der Browser eine Ressource lädt.
- {{domxref("HTMLMediaElement.ratechange_event", 'ratechange')}}
  - : Wird ausgelöst, wenn sich die Wiedergabegeschwindigkeit geändert hat.
- {{domxref("HTMLMediaElement.seeked_event", 'seeked')}}
  - : Wird ausgelöst, wenn ein Suchvorgang abgeschlossen ist.
- {{domxref("HTMLMediaElement.seeking_event", 'seeking')}}
  - : Wird ausgelöst, wenn ein Suchvorgang beginnt.
- {{domxref("HTMLMediaElement.stalled_event", 'stalled')}}
  - : Wird ausgelöst, wenn der Benutzeragent versucht, Mediendaten abzurufen, diese aber unerwartet nicht erhält.
- {{domxref("HTMLMediaElement.suspend_event", 'suspend')}}
  - : Wird ausgelöst, wenn das Laden der Mediendaten ausgesetzt wurde.
- {{domxref("HTMLMediaElement.timeupdate_event", 'timeupdate')}}
  - : Wird ausgelöst, wenn die Zeit, die durch die {{domxref("HTMLMediaElement.currentTime", "currentTime")}}-Eigenschaft angegeben wird, aktualisiert wurde.
- {{domxref("HTMLMediaElement.volumechange_event", 'volumechange')}}
  - : Wird ausgelöst, wenn sich die Lautstärke geändert hat.
- {{domxref("HTMLMediaElement.waiting_event", 'waiting')}}
  - : Wird ausgelöst, wenn die Wiedergabe aufgrund eines vorübergehenden Mangels an Daten gestoppt wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

### Referenzen

- {{HTMLElement("video")}}- und {{HTMLElement("audio")}}-HTML-Elemente
- {{domxref("HTMLVideoElement")}}- und {{domxref("HTMLAudioElement")}}-Interfaces, abgeleitet von `HTMLMediaElement`

### Leitfäden

- [Web-Medientechnologien](/de/docs/Web/Media)
- Lernbereich: [Video- und Audioinhalt](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Formats)
- [Umgang mit Problemen bei der Medienunterstützung in Webinhalten](/de/docs/Web/Media/Formats/Support_issues)
