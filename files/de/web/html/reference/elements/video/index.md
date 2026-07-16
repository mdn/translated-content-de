---
title: "`<video>` HTML-Videoeinbettungselement"
short-title: <video>
slug: Web/HTML/Reference/Elements/video
l10n:
  sourceCommit: d1aa0dbd7441564e6ce8f6706c2022a2e1912d8c
---

Das **`<video>`** [HTML](/de/docs/Web/HTML) Element bettet einen Mediaplayer, der Videowiedergabe unterstützt, in das Dokument ein. Sie können `<video>` auch für Audiowiedergabe verwenden, obwohl das {{HTMLElement("audio")}} Element eine geeignetere Benutzererfahrung bieten könnte.

{{InteractiveExample("HTML Demo: &lt;video&gt;", "tabbed-standard")}}

```html interactive-example
<video controls width="250">
  <source src="/shared-assets/videos/flower.webm" type="video/webm" />

  <source src="/shared-assets/videos/flower.mp4" type="video/mp4" />

  Download the
  <a href="/shared-assets/videos/flower.webm">WEBM</a>
  or
  <a href="/shared-assets/videos/flower.mp4">MP4</a>
  video.
</video>
```

Das obige Beispiel zeigt, wie das `<video>` Element verwendet wird. Ähnlich wie beim {{htmlelement("img")}} Element geben wir den Pfad zur anzuzeigenden Datei im `src` Attribut an; wir können andere Attribute einschließen, um Informationen wie Video-Breite und -Höhe anzugeben, ob es automatisch abgespielt und in Schleife abgespielt werden soll, oder um die Standard-Steuerelemente des Browsers anzuzeigen, und so weiter.

Der Inhalt zwischen den öffnenden und schließenden `<video></video>` Tags wird als Fallback in Browsern angezeigt, die das Element nicht unterstützen.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `autoplay`
  - : Ein boolesches Attribut; wenn angegeben, beginnt das Video automatisch mit der Wiedergabe, sobald es dies ohne Unterbrechung durch ein Nachladen kann.

    > [!NOTE]
    > Moderne Browser blockieren Audio (oder Videos mit einer nicht stummgeschalteten Tonspur) vor der automatischen Wiedergabe, da Websites, die automatisch Audio abspielen, eine unangenehme Erfahrung für Benutzer sein können. Siehe unseren [Autoplay-Leitfaden](/de/docs/Web/Media/Guides/Autoplay) für zusätzliche Informationen zur korrekten Verwendung von Autoplay.

    Um die Videowiedergabe automatisch zu deaktivieren, funktioniert `autoplay="false"` nicht; das Video wird automatisch abgespielt, wenn das Attribut im `<video>` Tag vorhanden ist. Um automatische Wiedergabe zu entfernen, muss das Attribut vollständig entfernt werden.

    > [!NOTE]
    > Videos mit dem Attribut [`loading="lazy"`](#loading) starten den Download und die Wiedergabe nicht, bis das Element in der Nähe des Sichtfensters ist oder sich darin befindet.

- `controls`
  - : Wenn dieses Attribut vorhanden ist, bietet der Browser Steuerelemente an, die es dem Benutzer ermöglichen, die Videowiedergabe zu kontrollieren, einschließlich Lautstärke, Suche und Pausieren/Fortsetzen der Wiedergabe.
- `controlslist`
  - : Das [`controlslist`](https://wicg.github.io/controls-list/explainer.html) Attribut hilft dem Browser bei der Auswahl der anzuzeigenden Steuerelemente für das `video` Element, wann immer der Browser sein eigenes Set an Steuerelementen anzeigt (wenn das `controls` Attribut angegeben ist).

    Die erlaubten Werte sind `nodownload`, `nofullscreen` und `noremoteplayback`.

    Verwenden Sie das [`disablepictureinpicture`](#disablepictureinpicture) Attribut, wenn Sie den Bild-im-Bild Modus (und das Steuerelement) deaktivieren möchten.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Dieses {{Glossary("Enumerated", "aufgezählte")}} Attribut gibt an, ob CORS verwendet werden soll, um das zugehörige Video abzurufen. [CORS-fähige Ressourcen](/de/docs/Web/HTML/How_to/CORS_enabled_image) können im {{HTMLElement("canvas")}} Element wiederverwendet werden, ohne _verunreinigt_ zu sein. Die zulässigen Werte sind:
    - `anonymous`
      - : Sendet eine Cross-Origin-Anfrage ohne Berechtigung. Mit anderen Worten, es sendet den `Origin:` HTTP-Header ohne Cookie, X.509-Zertifikat oder Durchführung von HTTP-Basic-Authentifizierung. Wenn der Server keine Berechtigungen an die Ursprungsseite gibt (indem er den `Access-Control-Allow-Origin:` HTTP-Header nicht setzt), wird die Ressource _verunreinigt_, und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Sendet eine Cross-Origin-Anfrage mit Berechtigung. Mit anderen Worten, es sendet den `Origin:` HTTP-Header mit einem Cookie, einem Zertifikat oder führt eine HTTP-Basic-Authentifizierung durch. Wenn der Server keine Berechtigungen an die Ursprungsseite gibt (durch den `Access-Control-Allow-Credentials:` HTTP-Header), wird die Ressource _verunreinigt_ und deren Nutzung eingeschränkt.

    Wenn nicht vorhanden, wird die Ressource ohne eine CORS-Anfrage abgerufen (d.h. ohne den `Origin:` HTTP-Header zu senden), was eine nicht verunreinigte Nutzung in {{HTMLElement('canvas')}} Elementen verhindert. Wenn ungültig, wird es so behandelt, als ob das aufgezählte Schlüsselwort `anonymous` verwendet wurde. Siehe [CORS-Einstellungen für Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für weitere Informationen.

- `disablepictureinpicture`
  - : Verhindert, dass der Browser ein Bild-im-Bild-Kontextmenü vorschlägt oder in einigen Fällen automatisch ein Bild-im-Bild anfordert.
- `disableremoteplayback`
  - : Ein boolesches Attribut, das verwendet wird, um die Fähigkeit zur Remote-Wiedergabe auf Geräten, die mit drahtgebundenen (HDMI, DVI, etc.) und drahtlosen Technologien (Miracast, Chromecast, DLNA, AirPlay, etc.) angeschlossen sind, zu deaktivieren.

    In Safari können Sie [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) als Fallback verwenden.

- `height`
  - : Die Höhe des Anzeigebereichs des Videos, in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px) (nur absolute Werte; [keine Prozentsätze](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).

- `loading` {{experimental_inline}}
  - : Gibt an, wie der Browser das Video laden soll (einschließlich eines Posterbildes):
    - `eager`
      - : Lädt das Video sofort, unabhängig davon, ob das Video derzeit innerhalb des sichtbaren Viewports ist oder nicht (dies ist der Standardwert).
    - `lazy`
      - : Verschiebt das Laden des Videos, bis es einen berechneten Abstand vom Viewport erreicht hat, wie vom Browser definiert.

        Lazy Loading vermeidet das Netzwerk- und Speicherbandbreite, die zum Verarbeiten des Videos erforderlich ist, bis es mit vernünftiger Wahrscheinlichkeit benötigt wird. Dies verbessert die Leistung in den meisten typischen Anwendungsfällen.

        Während explizite [`width`](#width) und [`height`](#height) Attribute für alle Videos empfohlen werden, um Layoutverschiebungen zu vermeiden, sind sie besonders wichtig für Lazy-Load-Videos. Lazy-Load-Videos werden niemals geladen, wenn sie keinen sichtbaren Teil eines Elements schneiden, selbst wenn das Laden deren Ansicht ändern würde, da ungeladene Videos eine `width` und `height` von `0` haben. Dies schafft eine noch störendere Benutzererfahrung, wenn der im Viewport sichtbare Inhalt mitten beim Lesen umfließt.

        Lazy-Load-Videos, die sich im visuellen Viewport befinden, sind möglicherweise noch nicht sichtbar, wenn das Fenster [`load`](/de/docs/Web/API/Window/load_event) Ereignis ausgelöst wird. Dies liegt daran, dass das Ereignis basierend auf eager-geladenen Videos ausgelöst wird – Lazy-Load-Videos werden nicht berücksichtigt, auch wenn sie sich beim initialen Seitenladen innerhalb des visuellen Viewports befinden.

        Das Laden wird nur verschoben, wenn JavaScript aktiviert ist. Dies ist eine Maßnahme zum Schutz vor Tracking, denn wenn ein Benutzeragent Lazy Loading unterstützt, während das Scripting deaktiviert ist, wäre es immer noch möglich, die ungefähre Scrollposition des Benutzers während einer Sitzung zu verfolgen, indem Videos strategisch im Seitenmarkup platziert werden, sodass ein Server verfolgen kann, wie viele Videos angefordert werden und wann.

        > [!NOTE]
        > Das Attribut `loading="lazy"` wirkt sich auch auf die Attribute [`autoplay`](#autoplay), [`poster`](#poster), und [`preload`](#preload) aus, wie in den jeweiligen Abschnitten der Seite beschrieben.

- `loop`
  - : Ein boolesches Attribut; wenn angegeben, wird der Browser automatisch zu Beginn des Videos zurückspringen, wenn das Ende erreicht ist.

- `muted`
  - : Ein boolesches Attribut, das die Standard-Audioschalldämpfungseinstellung im Video angibt. Wenn eingestellt, wird das Audio anfangs stummgeschaltet. Sein Standardwert ist `false`, was bedeutet, dass das Audio gehört wird, wenn das Video abgespielt wird.

    > [!NOTE]
    > Um die Stummschaltung aufzuheben, funktioniert `muted="false"` nicht; das Audio wird stummgeschaltet, wenn das Attribut überhaupt vorhanden ist. Um die Stummschaltung aufzuheben, muss das Attribut vollständig entfernt werden.

- `playsinline`
  - : Ein boolesches Attribut, das angibt, dass das Video "inline", das heißt, innerhalb des Wiedergabebereichs des Elements abgespielt wird. Beachten Sie, dass die Abwesenheit dieses Attributs _nicht_ impliziert, dass das Video immer im Vollbildmodus abgespielt wird.

- `poster`
  - : Eine URL für ein Bild, das während des Herunterladens des Videos angezeigt wird. Wenn dieses Attribut nicht angegeben wird, wird nichts angezeigt, bis der erste Frame verfügbar ist, dann wird der erste Frame als Posterframe angezeigt.

    > [!NOTE]
    > Videos mit dem Attribut [`loading="lazy"`](#loading) laden die `poster` Ressource erst, wenn sich das Video in der Nähe oder innerhalb des Viewports befindet.

- `preload`
  - : Dieses {{Glossary("enumerated", "aufgezählte")}} Attribut soll dem Browser einen Hinweis darauf geben, was der Autor für die beste Benutzererfahrung hält, was den Inhalt betrifft, der geladen werden soll, bevor das Video abgespielt wird. Es kann einen der folgenden Werte haben:
    - `none`: Gibt an, dass das Video nicht vorgeladen werden soll.
    - `metadata`: Gibt an, dass nur Videodaten (z.B. Länge) abgerufen werden.
    - `auto`: Gibt an, dass die gesamte Videodatei heruntergeladen werden kann, auch wenn nicht erwartet wird, dass der Benutzer sie verwendet.
    - _leere Zeichenkette_: Ein Synonym für den `auto` Wert.

    Der Standardwert ist für jeden Browser unterschiedlich. Die Spezifikation empfiehlt, ihn auf `metadata` zu setzen.

    > [!NOTE]
    >
    > - Videos mit dem Attribut [`loading="lazy"`](#loading) setzen das `preload` Verhalten erst dann um, wenn sich das Video in der Nähe oder innerhalb des Viewports befindet.
    > - Das Attribut `autoplay` hat Vorrang vor `preload`. Wenn `autoplay` angegeben ist, müsste der Browser offensichtlich mit dem Herunterladen des Videos für die Wiedergabe beginnen.
    > - Die Spezifikation erzwingt nicht, dass der Browser den Wert dieses Attributs befolgt; es ist lediglich ein Hinweis.

- `src`
  - : Die URL des einzubettenden Videos. Dies ist optional; Sie können stattdessen das {{HTMLElement("source")}} Element innerhalb des Video-Blocks verwenden, um das einzubettende Video anzugeben.
- `width`
  - : Die Breite des Anzeigebereichs des Videos, in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px) (nur absolute Werte; [keine Prozentsätze](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).

## Ereignisse

- [`audioprocess`](/de/docs/Web/API/ScriptProcessorNode/audioprocess_event) {{Deprecated_Inline}}
  - : Der Eingabepuffer eines [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) ist bereit zur Verarbeitung.
- [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)
  - : Der Browser kann die Medien abspielen, schätzt jedoch, dass nicht genügend Daten geladen wurden, um die Medien bis zum Ende abzuspielen, ohne für ein weiteres Puffern der Inhalte anhalten zu müssen.
- [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
  - : Der Browser schätzt, dass es die Medien bis zum Ende abspielen kann, ohne für das Puffern der Inhalte anzuhalten.
- [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)
  - : Die Wiedergabe eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) ist beendet.
- [`durationchange`](/de/docs/Web/API/HTMLMediaElement/durationchange_event)
  - : Das `duration` Attribut wurde aktualisiert.
- [`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)
  - : Die Medien sind leer geworden; zum Beispiel wird dieses Ereignis gesendet, wenn die Medien bereits geladen (oder teilweise geladen) wurden und die [`load()`](/de/docs/Web/API/HTMLMediaElement/load) Methode aufgerufen wird, um sie neu zu laden.
- [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)
  - : Die Wiedergabe wurde gestoppt, da das Ende der Medien erreicht wurde.
- [`error`](/de/docs/Web/API/HTMLMediaElement/error_event)
  - : Ein Fehler ist beim Abrufen der Mediendaten aufgetreten oder der Typ der Ressource ist kein unterstütztes Medienformat.
- [`loadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event)
  - : Der erste Frame der Medien wurde geladen.
- [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
  - : Die Metadaten wurden geladen.
- [`loadstart`](/de/docs/Web/API/HTMLMediaElement/loadstart_event)
  - : Ausgelöst, wenn der Browser begonnen hat, die Ressource zu laden.
- [`pause`](/de/docs/Web/API/HTMLMediaElement/pause_event)
  - : Die Wiedergabe wurde unterbrochen.
- [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)
  - : Die Wiedergabe hat begonnen.
- [`playing`](/de/docs/Web/API/HTMLMediaElement/playing_event)
  - : Die Wiedergabe ist bereit, nach einer Pause oder Verzögerung aufgrund fehlender Daten zu beginnen.
- [`progress`](/de/docs/Web/API/HTMLMediaElement/progress_event)
  - : Wird periodisch ausgelöst, während der Browser eine Ressource lädt.
- [`ratechange`](/de/docs/Web/API/HTMLMediaElement/ratechange_event)
  - : Die Wiedergabegeschwindigkeit hat sich geändert.
- [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event)
  - : Ein _Such_-Vorgang wurde abgeschlossen.
- [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
  - : Ein _Such_-Vorgang hat begonnen.
- [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
  - : Der Benutzeragent versucht, Mediendaten abzurufen, aber die Daten kommen unerwartet nicht.
- [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event)
  - : Das Laden von Mediendaten wurde unterbrochen.
- [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)
  - : Die durch das `currentTime` Attribut angegebene Zeit wurde aktualisiert.
- [`volumechange`](/de/docs/Web/API/HTMLMediaElement/volumechange_event)
  - : Die Lautstärke hat sich geändert.
- [`waiting`](/de/docs/Web/API/HTMLMediaElement/waiting_event)
  - : Die Wiedergabe wurde aufgrund eines temporären Mangels an Daten gestoppt.

## Anwendungsnotizen

Browser unterstützen nicht alle dieselben Videoformate; Sie können mehrere Quellen innerhalb verschachtelter {{htmlelement("source")}} Elemente angeben und der Browser verwendet dann die erste, die er versteht.

```html
<video controls>
  <source src="myVideo.webm" type="video/webm" />
  <source src="myVideo.mp4" type="video/mp4" />
  <p>
    Your browser doesn't support HTML video. Here is a
    <a href="myVideo.mp4" download="myVideo.mp4">link to the video</a> instead.
  </p>
</video>
```

Wenn Sie {{htmlelement("source")}} Elemente verwenden, versucht der Browser, jede Quelle nacheinander zu laden. Wenn eine Quelle fehlschlägt (z.B. aufgrund einer ungültigen URL oder eines nicht unterstützten Formats), wird die nächste Quelle versucht, und so weiter. Ein `error` Ereignis wird auf dem `<video>` Element ausgelöst, nachdem alle Quellen fehlgeschlagen sind; `error` Ereignisse werden nicht auf jedem einzelnen `<source>` Element ausgelöst.

Wir bieten einen substanziellen und umfassenden [Leitfaden zu Medien-Dateitypen](/de/docs/Web/Media/Guides/Formats) und den [Leitfaden zu den für Video unterstützten Codecs](/de/docs/Web/Media/Guides/Formats/Video_codecs). Auch verfügbar ist ein Leitfaden zu [Audio-Codecs, die damit verwendet werden können](/de/docs/Web/Media/Guides/Formats/Audio_codecs).

Weitere Anwendungsnotizen:

- Wenn Sie das Attribut `controls` nicht angeben, enthält das Video nicht die Standard-Steuerelemente des Browsers; Sie können Ihre eigenen benutzerdefinierten Steuerelemente mit JavaScript und der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API erstellen. Siehe [Erstellung eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player) für weitere Details.
- Um präzise Kontrolle über Ihre Video- (und Audio-)Inhalte zu ermöglichen, feuern `HTMLMediaElement`s viele verschiedene [Ereignisse](/de/docs/Web/API/HTMLMediaElement#events) ab. Neben der Bereitstellung von Steuerungsmöglichkeiten ermöglichen Ihnen diese Ereignisse, den Fortschritt sowohl beim Herunterladen als auch bei der Wiedergabe der Medien zu überwachen, sowie den Wiedergabestatus und die Position.
- Sie können die {{cssxref("object-position")}} Eigenschaft verwenden, um die Positionierung des Videos innerhalb des Rahmens des Elements anzupassen, und die {{cssxref("object-fit")}} Eigenschaft, um zu steuern, wie die Größe des Videos angepasst wird, um in den Rahmen zu passen.
- Um Untertitel zusammen mit Ihrem Video anzuzeigen, können Sie einige JavaScript zusammen mit dem {{htmlelement("track")}} Element und dem [WebVTT](/de/docs/Web/API/WebVTT_API) Format verwenden. Siehe [Hinzufügen von Untertiteln und Beschriftungen zu HTML-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) für weitere Informationen.
- Sie können Audiodateien mit einem `<video>` Element abspielen. Dies kann nützlich sein, wenn Sie beispielsweise ein Audio mit einem [WebVTT](/de/docs/Web/API/WebVTT_API) Transkript ausführen müssen, da das {{HTMLElement("audio")}} Element keine Beschriftungen mit WebVTT erlaubt.
- Um den Fallback-Inhalt in Browsern zu testen, die das Element unterstützen, können Sie `<video>` durch ein nicht existierendes Element wie `<notavideo>` ersetzen.

Eine gute allgemeine Informationsquelle zur Verwendung von HTML `<video>` ist das [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) Einsteiger-Tutorial.

### Styling mit CSS

Das `<video>` Element ist ein ersetztes Element — sein {{cssxref("display")}} Wert ist standardmäßig `inline` — aber seine Standardbreite und -höhe im Viewport wird durch das eingebettete Video definiert.

Es gibt keine besonderen Überlegungen zum Styling von `<video>`; eine übliche Strategie besteht darin, ihm einen `display` Wert von `block` zu geben, um es leichter positionieren, dimensionieren usw. zu können und dann Styling und Layoutinformationen nach Bedarf bereitzustellen. [Grundlagen des Video-Player-Stylings](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics) bietet einige nützliche Stylingtechniken.

### Hinzufügen von Untertiteln und anderen zeitgesteuerten Textspuren

Zeitgesteuerte Textspuren für Untertitel, geschlossene Beschriftungen, Kapitelüberschriften usw. können deklarativ hinzugefügt werden, indem das {{HTMLElement("track")}} Element verschachtelt wird. Die Spuren werden im [Web Video Text Tracks File Format (WebVTT)](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) (`.vtt` Dateien) angegeben.

Beispielsweise enthält der unten stehende HTML-Code die Datei "captions.vtt", die verwendet wird, um geschlossene Untertitel auf das Video zu legen, wenn diese vom Benutzer aktiviert werden.

```html
<video controls src="video.webm">
  <track default kind="captions" src="captions.vtt" />
</video>
```

Zeitgesteuerte Textspuren können auch programmatisch mit der [WebVTT API](/de/docs/Web/API/WebVTT_API) hinzugefügt werden.

### Erkennung von Spurhinzufügungen und -entfernungen

Sie können erkennen, wann Spuren zu einem `<video>` Element hinzugefügt oder daraus entfernt werden, indem Sie die [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event) Ereignisse verwenden. Diese Ereignisse werden jedoch nicht direkt an das `<video>` Element selbst gesendet. Stattdessen werden sie an das Track-Listen-Objekt innerhalb des `<video>` Elements gesendet, das dem Typ der Spur entspricht, die dem Element hinzugefügt wurde:

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die alle Audiotracks des Medien-Elements enthält.
    Fügen Sie diesem Objekt einen `addtrack`-Listener hinzu, um benachrichtigt zu werden, wenn neue Audiotracks dem Element hinzugefügt werden.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)
  - : Eine [`VideoTrackList`](/de/docs/Web/API/VideoTrackList), die alle Video Tracks des Medien-Elements enthält.
    Fügen Sie diesem Objekt einen `addtrack`-Listener hinzu, um benachrichtigt zu werden, wenn Video Tracks dem Element hinzugefügt werden.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
  - : Eine [`TextTrackList`](/de/docs/Web/API/TextTrackList), die alle Textspuren des Medien-Elements enthält (die für Untertitel, geschlossene Beschriftungen usw. verwendet werden).
    Fügen Sie diesem Objekt einen `addtrack`-Listener hinzu, um benachrichtigt zu werden, wenn Textspuren dem Element hinzugefügt werden.

Um beispielsweise zu erkennen, wann Audio-Spuren einem `<video>` Element hinzugefügt oder daraus entfernt werden, können Sie Code wie diesen verwenden:

```js
const elem = document.querySelector("video");

elem.audioTracks.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTracks.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Dieser Code überwacht, wann Audio-Spuren zu oder aus dem Element hinzugefügt oder entfernt werden, und ruft eine hypothetische Funktion an einem Track-Editor auf, um die Spur in die Liste der verfügbaren Spuren des Editors ein- oder auszutragen.

Sie können auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um auf die [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event) Ereignisse zu hören.

### Serverunterstützung für Video

Wenn der MIME-Typ für das Video auf dem Server nicht korrekt festgelegt ist, wird das Video möglicherweise nicht angezeigt oder es wird ein graues Feld mit einem X angezeigt (wenn JavaScript aktiviert ist).

Wenn Sie einen Apache-Webserver verwenden, um WebM-Videos bereitzustellen, können Sie dieses Problem beheben, indem Sie die Erweiterungen der Videodateitypen dem `video/webm` MIME-Typ hinzufügen (die häufigste WebM-Dateierweiterung ist `.webm`). Um dies zu tun, bearbeiten Sie die Datei `mime.types` in `/etc/apache` oder verwenden Sie die `AddType` Konfigurationsdirektive in `httpd.conf`:

```plain
AddType video/webm .webm
```

Ihr Webhost könnte ein einfaches Interface für MIME-Typ Konfigurationsänderungen für neue Technologien bieten, bis ein globales Update natürlich erfolgt.

## Barrierefreiheit

Videos sollten sowohl Untertitel als auch Transkripte bereitstellen, die deren Inhalt genau beschreiben (siehe [Hinzufügen von Untertiteln und Beschriftungen zu HTML-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) für weitere Informationen zur Implementierung). Untertitel ermöglichen es Menschen mit Hörverlust, den Audioinhalt eines Videos zu verstehen, während das Video abgespielt wird, während Transkripte den Menschen, die zusätzliche Zeit benötigen, erlauben, den Audioinhalt bequem und in ihrem eigenen Tempo zu überprüfen.

Es ist erwähnenswert, dass, obwohl Sie nur-audio Medien untertiteln können, Sie dies nur tun können, wenn Sie Audio in einem `<video>` Element abspielen, da die Video-Region des Elements zum Präsentieren der Untertitel verwendet wird. Dies ist eines der speziellen Szenarien, in denen es nützlich ist, Audio in einem Video-Element abzuspielen.

Wenn automatische Untertitelungsdienste verwendet werden, ist es wichtig, den generierten Inhalt zu überprüfen, um sicherzustellen, dass er die Originalquelle genau wiedergibt.

Zusätzlich zum gesprochenen Dialog sollten Untertitel und Transkripte auch Musik und Soundeffekte identifizieren, die wichtige Informationen vermitteln. Dazu gehören Emotion und Tonfall:

```plain
14
00:03:14 --> 00:03:18
[Dramatic rock music]

15
00:03:19 --> 00:03:21
[whispering] What's that off in the distance?

16
00:03:22 --> 00:03:24
It's… it's a…

16 00:03:25 --> 00:03:32
[Loud thumping]
[Dishes clattering]
```

Untertitel sollten das Hauptthema des Videos nicht verdecken. Sie können mit [dem `align` VTT-Cue-Setting](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format#cue_settings) positioniert werden.

- [Web Video Text Tracks Format (WebVTT)](/de/docs/Web/API/WebVTT_API)
- [WebAIM: Untertitel, Transkripte und Audiodeskriptionen](https://webaim.org/techniques/captions/)
- [MDN Verständnis von WCAG, Richtlinie 1.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [Verständnis des Erfolgskriteriums 1.2.1 | W3C Verständnis für WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Verständnis des Erfolgskriteriums 1.2.2 | W3C Verständnis für WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Beispiele

### Einzelne Quelle

Dieses Beispiel spielt ein Video ab, wenn es aktiviert ist, und bietet dem Benutzer die Standard-Videosteuerung des Browsers zur Steuerung der Wiedergabe.

#### HTML

```html
<!-- Basic video example -->
<!-- 'Big Buck Bunny' licensed under CC 3.0 by the Blender foundation. Hosted by archive.org -->
<!-- Poster from peach.blender.org -->
<video
  controls
  src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
  poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
  width="620">
  Sorry, your browser doesn't support embedded videos, but don't worry, you can
  <a href="https://archive.org/details/BigBuckBunny_124">download it</a>
  and watch it with your favorite video player!
</video>
```

#### Ergebnis

{{EmbedLiveSample('Single source', '', '400')}}

Bis das Video abgespielt wird, wird das Bild, das im `poster` Attribut bereitgestellt wird, an seiner Stelle angezeigt. Wenn der Browser die Videowiedergabe nicht unterstützt, wird der Fallback-Text angezeigt.

### Mehrere Quellen

Dieses Beispiel baut auf dem letzten auf und bietet drei verschiedene Quellen für die Medien; dies ermöglicht das Ansehen des Videos unabhängig davon, welche Video-Codecs vom Browser unterstützt werden.

#### HTML

```html
<!-- Using multiple sources as fallbacks for a video tag -->
<!-- 'Elephants Dream' by Orange Open Movie Project Studio, licensed under CC-3.0, hosted by archive.org -->
<!-- Poster hosted by Wikimedia -->
<video
  width="620"
  controls
  poster="https://upload.wikimedia.org/wikipedia/commons/e/e8/Elephants_Dream_s5_both.jpg">
  <source
    src="https://archive.org/download/ElephantsDream/ed_hd.avi"
    type="video/avi" />
  <source
    src="https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4"
    type="video/mp4" />

  Sorry, your browser doesn't support embedded videos, but don't worry, you can
  <a
    href="https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4"
    download="ed_1024_512kb.mp4">
    download the MP4
  </a>
  and watch it with your favorite video player!
</video>
```

#### Ergebnis

{{EmbedLiveSample('Multiple sources', '', '400')}}

Zuerst wird AVI versucht. Wenn das nicht abgespielt werden kann, wird [MP4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4) versucht. Eine Fallback-Nachricht wird angezeigt, wenn das Video-Element nicht unterstützt wird, aber nicht, wenn alle Quellen fehlschlagen.

Einige Mediadateitypen erlauben es Ihnen, genauere Informationen mithilfe des [`codecs`](/de/docs/Web/Media/Guides/Formats/codecs_parameter) Parameters als Teil der Typ-Zeichenkette der Datei bereitzustellen. Zum Beispiel zeigt `video/webm; codecs="vp8, vorbis"` an, dass die Datei ein [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm) Video ist, das [VP8](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp8) für sein Video und [Vorbis](/de/docs/Web/Media/Guides/Formats/Audio_codecs#vorbis) für Audio verwendet.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>, Phrasinhalte, eingebettete Inhalte. Wenn es ein <a href="#controls"><code>controls</code></a> Attribut hat: interaktiver Inhalt und fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <p>
          Wenn das Element ein <a href="#src"><code>src</code></a>
          Attribut hat: null oder mehr {{HTMLElement("track")}} Elemente, gefolgt von transparentem Inhalt, der keine Medienelemente enthält – das heißt, keine {{HTMLElement("audio")}} oder <code>&lt;video&gt;</code>.
        </p>
        <p>
          Ansonsten: null oder mehr {{HTMLElement("source")}} Elemente, gefolgt von null oder mehr {{HTMLElement("track")}} Elementen, gefolgt von transparentem Inhalt, der keine Medienelemente enthält – das heißt, keine {{HTMLElement("audio")}} oder <code>&lt;video&gt;</code>.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>Jedes Element, das eingebetteten Inhalt akzeptiert.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role"><code>application</code></a></td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats)
  - [Mediencontainerformate (Dateitypen)](/de/docs/Web/Media/Guides/Formats/Containers)
  - [Web-Video-Codec-Leitfaden](/de/docs/Web/Media/Guides/Formats/Video_codecs)
  - [Web-Audio-Codec-Leitfaden](/de/docs/Web/Media/Guides/Formats/Audio_codecs)

- Positionierung und Größenänderung des Bildes innerhalb seines Rahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
- {{htmlelement("audio")}}
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Manipulation von Videos mit Canvas](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [Konfigurieren von Servern für Ogg-Medien](/de/docs/Web/Media/Guides/Formats/Configuring_servers_for_Ogg_media)
