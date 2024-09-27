---
title: "<video>: Das Videoeinbettungselement"
slug: Web/HTML/Element/video
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}

Das **`<video>`** [HTML](/de/docs/Web/HTML) Element bettet einen Mediaplayer ein, der die Videowiedergabe im Dokument unterstützt. Sie können `<video>` auch für Audioinhalte verwenden, aber das {{HTMLElement("audio")}} Element kann ein geeigneteres Benutzererlebnis bieten.

{{EmbedInteractiveExample("pages/tabbed/video.html", "tabbed-standard")}}

Das obige Beispiel zeigt die einfache Verwendung des `<video>` Elements. Ähnlich wie beim {{htmlelement("img")}} Element fügen wir einen Pfad zum Medium, das wir anzeigen möchten, innerhalb des `src` Attributs ein; wir können auch andere Attribute hinzufügen, um Informationen wie Video-Breite und -Höhe, ob es automatisch abgespielt und wiederholt werden soll oder ob die Standard-Video-Steuerelemente des Browsers angezeigt werden sollen, usw. zu spezifizieren.

Der Inhalt zwischen den öffnenden und schließenden `<video></video>` Tags wird als Rückfalloption in Browsern angezeigt, die das Element nicht unterstützen.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `autoplay`

  - : Ein Boolean-Attribut; wenn angegeben, beginnt das Video automatisch mit der Wiedergabe, sobald es kann, ohne zu warten, bis das Laden der Daten abgeschlossen ist.

    > [!NOTE]
    > Moderne Browser blockieren Audio (oder Videos mit unmutiertem Audiotrack) von der automatischen Wiedergabe, da Websites, die automatisch Audio abspielen, für Benutzer unangenehm sein können. Lesen Sie unseren [Autoplay-Leitfaden](/de/docs/Web/Media/Autoplay_guide) für zusätzliche Informationen darüber, wie man Autoplay korrekt verwendet.

    Um die automatische Videowiedergabe zu deaktivieren, funktioniert `autoplay="false"` nicht; das Video wird automatisch abgespielt, wenn das Attribut im `<video>` Tag vorhanden ist. Um die automatische Wiedergabe zu entfernen, muss das Attribut vollständig entfernt werden.

- `controls`
  - : Wenn dieses Attribut vorhanden ist, bietet der Browser Steuerelemente, damit der Benutzer die Videowiedergabe, einschließlich Lautstärke, Suche und Pause/Fortsetzen, steuern kann.
- `controlslist`

  - : Das [`controlslist`](https://wicg.github.io/controls-list/explainer.html) Attribut hilft dem Browser, auszuwählen, welche Steuerelemente für das `video` Element angezeigt werden sollen, wann immer der Browser seine eigene Steuerelemente-Gruppe anzeigt (wenn das `controls` Attribut angegeben wurde).

    Die zulässigen Werte sind `nodownload`, `nofullscreen` und `noremoteplayback`.

    Verwenden Sie das [`disablepictureinpicture`](#disablepictureinpicture) Attribut, wenn Sie den Picture-In-Picture-Modus (und die Steuerung) deaktivieren möchten.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Dieses [enumerierte](/de/docs/Glossary/Enumerated) Attribut gibt an, ob CORS verwendet werden soll, um das zugehörige Video abzurufen. [CORS-fähige Ressourcen](/de/docs/Web/HTML/CORS_enabled_image) können im {{HTMLElement("canvas")}} Element verwendet werden, ohne _kontaminiert_ zu werden. Die zulässigen Werte sind:

    - `anonymous`
      - : Sendet eine cross-origin Anfrage ohne Berechtigung. Das bedeutet, dass der `Origin:` HTTP-Header ohne Cookie, X.509-Zertifikat oder HTTP-Basic-Authentifizierung gesendet wird. Wenn der Server dem Ursprungsort keine Berechtigungen gibt (durch Nicht-Setzen des `Access-Control-Allow-Origin:` HTTP-Headers), wird die Ressource _kontaminiert_ und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Sendet eine cross-origin Anfrage mit Berechtigung. Das bedeutet, dass der `Origin:` HTTP-Header mit einem Cookie, einem Zertifikat oder durch HTTP-Basic-Authentifizierung gesendet wird. Wenn der Server dem Ursprungsort keine Berechtigungen gibt (durch den `Access-Control-Allow-Credentials:` HTTP-Header), wird die Ressource _kontaminiert_ und ihre Nutzung eingeschränkt.

    Wenn nicht vorhanden, wird die Ressource ohne eine CORS Anfrage abgerufen (d.h. ohne den `Origin:` HTTP-Header zu senden), was ihre nicht-kontaminierte Verwendung in {{HTMLElement('canvas')}} Elementen verhindert. Wenn ungültig, wird es behandelt, als ob das enumerierte Schlüsselwort `anonymous` verwendet wurde. Lesen Sie [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Attributes/crossorigin) für zusätzliche Informationen.

- `disablepictureinpicture`
  - : Verhindert, dass der Browser ein Picture-In-Picture Kontextmenü vorschlägt oder in einigen Fällen automatisch Picture-In-Picture anfordert.
- `disableremoteplayback`

  - : Ein Boolean-Attribut, das verwendet wird, um die Fähigkeit zur Fernwiedergabe auf Geräten zu deaktivieren, die über kabelgebundene (HDMI, DVI, etc.) und drahtlose Technologien (Miracast, Chromecast, DLNA, AirPlay, etc.) angeschlossen sind.

    In Safari können Sie [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) als Rückfalloption verwenden.

- `height`
  - : Die Höhe des Anzeigebereichs des Videos, in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px) (nur absolute Werte; [keine Prozentsätze](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).
- `loop`
  - : Ein Boolean-Attribut; wenn angegeben, sucht der Browser automatisch zurück zum Anfang, sobald das Ende des Videos erreicht wird.
- `muted`
  - : Ein Boolean-Attribut, das die Standard-Audio-Stummschaltungseinstellung des Videos angibt. Wenn gesetzt, wird das Audio anfänglich stummgeschaltet. Der Standardwert ist `false`, was bedeutet, dass das Audio abgespielt wird, wenn das Video abgespielt wird.
- `playsinline`
  - : Ein Boolean-Attribut, das angibt, dass das Video "inline" abgespielt werden soll, das heißt innerhalb des Wiedergabebereichs des Elements. Beachten Sie, dass das Fehlen dieses Attributs _nicht_ impliziert, dass das Video immer im Vollbildmodus abgespielt wird.
- `poster`
  - : Eine URL für ein Bild, das angezeigt wird, während das Video heruntergeladen wird. Wenn dieses Attribut nicht angegeben ist, wird nichts angezeigt, bis das erste Bild verfügbar ist, dann wird das erste Bild als Poster-Bild angezeigt.
- `preload`

  - : Dieses [enumerierte](/de/docs/Glossary/enumerated) Attribut soll dem Browser einen Hinweis darauf geben, was der Autor für die beste Benutzererfahrung hält, in Bezug auf den Inhalt, der geladen wird, bevor das Video abgespielt wird. Es kann einen der folgenden Werte haben:

    - `none`: Gibt an, dass das Video nicht vorgeladen werden soll.
    - `metadata`: Gibt an, dass nur Videometadaten (z.B. Länge) abgerufen werden.
    - `auto`: Gibt an, dass die gesamte Videodatei heruntergeladen werden kann, selbst wenn der Benutzer nicht erwartet wird, sie zu verwenden.
    - _leerer String_: Ein Synonym für den Wert `auto`.

    Der Standardwert ist für jeden Browser unterschiedlich. Die Spezifikation empfiehlt, es auf `metadata` zu setzen.

    > [!NOTE]
    >
    > - Das `autoplay` Attribut hat Vorrang vor `preload`. Wenn `autoplay` festgelegt ist, müsste der Browser offensichtlich mit dem Herunterladen des Videos zur Wiedergabe beginnen.
    > - Die Spezifikation zwingt den Browser nicht, den Wert dieses Attributs zu befolgen; es ist nur ein Hinweis.

- `src`
  - : Die URL des einzubettenden Videos. Dies ist optional; Sie können stattdessen das {{HTMLElement("source")}} Element innerhalb des Video-Blocks verwenden, um das einzubettende Video anzugeben.
- `width`
  - : Die Breite des Anzeigebereichs des Videos, in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px) (nur absolute Werte; [keine Prozentsätze](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).

## Ereignisse

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Ereignisname</th>
      <th scope="col">Ausgelöst wenn</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        [`audioprocess`](/de/docs/Web/API/ScriptProcessorNode/audioprocess_event) {{Deprecated_Inline}}
      </td>
      <td>
        Der Eingabepuffer eines [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) ist bereit zur Verarbeitung.
      </td>
    </tr>
    <tr>
      <td>
        [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)
      </td>
      <td>
        Der Browser kann das Medium abspielen, erkennt jedoch, dass nicht genügend Daten geladen wurden, um das Medium bis zum Ende abzuspielen, ohne für weiteres Zwischenspeichern von Inhalten anhalten zu müssen.
      </td>
    </tr>
    <tr>
      <td>
        [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
      </td>
      <td>
        Der Browser schätzt, dass er das Medium bis zum Ende abspielen kann, ohne das Zwischenspeichern von Inhalten anhalten zu müssen.
      </td>
    </tr>
    <tr>
      <td>
        [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)
      </td>
      <td>
        Die Wiedergabe eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) ist beendet.
      </td>
    </tr>
    <tr>
      <td>
        [`durationchange`](/de/docs/Web/API/HTMLMediaElement/durationchange_event)
      </td>
      <td>Das <code>duration</code> Attribut wurde aktualisiert.</td>
    </tr>
    <tr>
      <td>
        [`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)
      </td>
      <td>
        Das Medium ist leer geworden; beispielsweise wird dieses Ereignis gesendet, wenn das Medium bereits geladen (oder teilweise geladen) wurde und die Methode <a href="/de/docs/Web/API/HTMLMediaElement/load" rel="internal"><code>load()</code></a> aufgerufen wird, um es neu zu laden.
      </td>
    </tr>
    <tr>
      <td>
        [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)
      </td>
      <td>Die Wiedergabe wurde gestoppt, weil das Ende des Mediums erreicht wurde.</td>
    </tr>
    <tr>
      <td>
        [`error`](/de/docs/Web/API/HTMLMediaElement/error_event)
      </td>
      <td>
        Ein Fehler trat beim Abrufen der Mediadaten auf, oder der Typ der Ressource ist kein unterstütztes Medienformat.
      </td>
    </tr>
    <tr>
      <td>
        [`loadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event)
      </td>
      <td>Der erste Frame des Mediums wurde geladen.</td>
    </tr>
    <tr>
      <td>
        [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
      </td>
      <td>Die Metadaten wurden geladen.</td>
    </tr>
    <tr>
      <td>
        [`loadstart`](/de/docs/Web/API/HTMLMediaElement/loadstart_event)
      </td>
      <td>Ausgelöst, wenn der Browser angefangen hat, die Ressource zu laden.</td>
    </tr>
    <tr>
      <td>
        [`pause`](/de/docs/Web/API/HTMLMediaElement/pause_event)
      </td>
      <td>Die Wiedergabe wurde pausiert.</td>
    </tr>
    <tr>
      <td>
        [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)
      </td>
      <td>Die Wiedergabe hat begonnen.</td>
    </tr>
    <tr>
      <td>
        [`playing`](/de/docs/Web/API/HTMLMediaElement/playing_event)
      </td>
      <td>
        Die Wiedergabe ist bereit zu starten, nachdem sie pausiert oder aufgrund von Datenmangel verzögert wurde.
      </td>
    </tr>
    <tr>
      <td>
        [`progress`](/de/docs/Web/API/HTMLMediaElement/progress_event)
      </td>
      <td>Periodisch ausgelöst, während der Browser eine Ressource lädt.</td>
    </tr>
    <tr>
      <td>
        [`ratechange`](/de/docs/Web/API/HTMLMediaElement/ratechange_event)
      </td>
      <td>Die Wiedergabegeschwindigkeit hat sich geändert.</td>
    </tr>
    <tr>
      <td>
        [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event)
      </td>
      <td>Ein <em>seek</em> Vorgang wurde abgeschlossen.</td>
    </tr>
    <tr>
      <td>
        [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
      </td>
      <td>Ein <em>seek</em> Vorgang hat begonnen.</td>
    </tr>
    <tr>
      <td>
        [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
      </td>
      <td>
        Der User-Agent versucht, Mediendaten abzurufen, aber die Daten kommen unerwartet nicht.
      </td>
    </tr>
    <tr>
      <td>
        [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event)
      </td>
      <td>Das Laden von Mediendaten wurde ausgesetzt.</td>
    </tr>
    <tr>
      <td>
        [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)
      </td>
      <td>
        Die durch das <code>currentTime</code> Attribut angezeigte Zeit wurde aktualisiert.
      </td>
    </tr>
    <tr>
      <td>
        [`volumechange`](/de/docs/Web/API/HTMLMediaElement/volumechange_event)
      </td>
      <td>Die Lautstärke hat sich geändert.</td>
    </tr>
    <tr>
      <td>
        [`waiting`](/de/docs/Web/API/HTMLMediaElement/waiting_event)
      </td>
      <td>Die Wiedergabe wurde aufgrund eines kurzfristigen Datenmangels gestoppt.</td>
    </tr>
  </tbody>
</table>

## Nutzungshinweise

Browser unterstützen nicht alle gleichen Videoformate; Sie können mehrere Quellen innerhalb verschachtelter {{htmlelement("source")}} Elemente angeben, und der Browser verwendet dann die erste, die er versteht.

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

Wir bieten einen substanziellen und gründlichen [Leitfaden zu Mediadateiformaten](/de/docs/Web/Media/Formats) sowie den [Leitfaden zu den unterstützten Codecs für Videos](/de/docs/Web/Media/Formats/Video_codecs). Außerdem steht ein Leitfaden zu [Audio-Codecs, die mit ihnen verwendet werden können](/de/docs/Web/Media/Formats/Audio_codecs), zur Verfügung.

Weitere Nutzungshinweise:

- Wenn Sie das `controls` Attribut nicht angeben, werden im Video nicht die standardmäßigen Steuerungen des Browsers enthalten sein; Sie können Ihre eigenen benutzerdefinierten Steuerelemente mit JavaScript und der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API erstellen. Lesen Sie [Einen plattformübergreifenden Videoplayer erstellen](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player) für mehr Details.
- Um eine präzise Kontrolle über Ihre Video- (und Audio-)Inhalte zu ermöglichen, lösen `HTMLMediaElements` viele verschiedene [Ereignisse](/de/docs/Web/API/HTMLMediaElement#events) aus. Neben der Bereitstellung von Steuerungsmöglichkeiten ermöglichen Ihnen diese Ereignisse, den Fortschritt sowohl des Downloads als auch der Wiedergabe der Medien sowie den Wiedergabestatus und die Position zu überwachen.
- Sie können die {{cssxref("object-position")}} Eigenschaft verwenden, um die Lage des Videos innerhalb des Rahmens des Elements zu justieren, und die {{cssxref("object-fit")}} Eigenschaft, um zu kontrollieren, wie die Größe des Videos angepasst wird, um innerhalb des Rahmens zu passen.
- Um Untertitel/Beschriftungen zusammen mit Ihrem Video anzuzeigen, können Sie etwas JavaScript zusammen mit dem {{htmlelement("track")}} Element und dem [WebVTT](/de/docs/Web/API/WebVTT_API) Format verwenden. Siehe [Hinzufügen von Untertiteln und Captioning zu HTML-Videos](/de/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) für mehr Informationen.
- Sie können Audiodateien mit einem `<video>` Element abspielen. Das kann nützlich sein, wenn Sie zum Beispiel Audio mit einem [WebVTT](/de/docs/Web/API/WebVTT_API) Transkript wiedergeben müssen, da das {{HTMLElement("audio")}}-Element keine Beschriftungen mit WebVTT erlaubt.
- Um den Fallback-Content in Browsern zu testen, die das Element unterstützen, können Sie `<video>` durch ein nicht existierendes Element wie `<notavideo>` ersetzen.

Eine gute allgemeine Informationsquelle zur Verwendung von HTML `<video>` ist das [Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) Einsteiger-Tutorial.

### Stilgebung mit CSS

Das `<video>` Element ist ein ersetztes Element — sein {{cssxref("display")}} Wert ist standardmäßig `inline` — aber seine Standardbreite und -höhe im Ansichtsfenster wird durch das eingebettete Video definiert.

Es gibt keine besonderen Überlegungen zur Stilgebung des `<video>` Elements; eine übliche Strategie ist es, ihm einen `display` Wert von `block` zu geben, um es leichter positionieren, die Größe anpassen usw. zu können, und dann erforderliche Stil- und Layoutinformationen bereitzustellen. [Basiswissen zur Video-Player-Stilgebung](/de/docs/Web/Media/Audio_and_video_delivery/Video_player_styling_basics) bietet einige nützliche Stilgebungstechniken.

### Hinzufügen von Untertiteln und anderen zeitlich abgestimmten Textspuren

Zeitlich abgestimmte Textspuren für Untertitel, geschlossene Untertitel, Kapitelüberschriften usw. können deklarativ durch Verschachteln des {{HTMLElement("track")}} Elements hinzugefügt werden.
Die Spuren werden im [Web Video Text Tracks File Format (WebVTT)](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) (`.vtt` Dateien) angegeben.

Zum Beispiel enthält das unten stehende HTML die Datei "captions.vtt", die verwendet wird, um geschlossene Untertitel über das Video zu legen, wenn Untertitel vom Benutzer aktiviert sind.

```html
<video controls src="video.webm">
  <track default kind="captions" src="captions.vtt" />
</video>
```

Zeitlich abgestimmte Textspuren können auch programmatisch mit der [WebVTT API](/de/docs/Web/API/WebVTT_API) hinzugefügt werden.

### Erkennen von Track-Zusätzen und -Entfernungen

Sie können erkennen, wann Spuren zu einem `<video>` Element hinzugefügt oder entfernt werden, indem Sie auf die [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event) Ereignisse hören. Diese Ereignisse werden jedoch nicht direkt an das `<video>` Element selbst gesendet.
Stattdessen werden sie an das Tracklist-Objekt innerhalb des `<video>` Elements gesendet, das zu dem Typ der Spur gehört, die dem Element hinzugefügt wurde:

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die alle Audio-Tracks des Media-Elements enthält.
    Fügen Sie diesem Objekt einen Listener für `addtrack` hinzu, um benachrichtigt zu werden, wenn neue Audio-Tracks zum Element hinzugefügt werden.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)
  - : Eine [`VideoTrackList`](/de/docs/Web/API/VideoTrackList), die alle Video-Tracks des Media-Elements enthält.
    Fügen Sie diesem Objekt einen `addtrack` Listener hinzu, um benachrichtigt zu werden, wenn Video-Tracks zum Element hinzugefügt werden.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
  - : Eine [`TextTrackList`](/de/docs/Web/API/TextTrackList), die alle Textspuren des Media-Elements enthält (die für Untertitel, geschlossene Untertitel usw. verwendet werden).
    Fügen Sie diesem Objekt einen `addtrack` Listener hinzu, um benachrichtigt zu werden, wenn Textspuren zum Element hinzugefügt werden.

Beispielsweise, um zu erkennen, wann Audio-Tracks zu einem `<video>` Element hinzugefügt oder von ihm entfernt werden, können Sie Code wie diesen verwenden:

```js
const elem = document.querySelector("video");

elem.audioTracks.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTracks.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Dieser Code überwacht, ob Audio-Tracks zum Element hinzugefügt oder von ihm entfernt werden, und ruft eine hypothetische Funktion auf einem Track-Editor auf, um die Spur in die Liste der verfügbaren Tracks des Editors aufzunehmen bzw. daraus zu entfernen.

Sie können auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um auf die [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event) Ereignisse zu hören.

### Serverunterstützung für Videos

Wenn der MIME-Typ für das Video auf dem Server nicht korrekt eingestellt ist, wird das Video möglicherweise nicht angezeigt oder es wird anstelle des Videos ein graues Feld mit einem X angezeigt (wenn JavaScript aktiviert ist).

Wenn Sie Apache Webserver verwenden, um WebM-Videos bereitzustellen, können Sie dieses Problem beheben, indem Sie die Dateityperweiterungen für Videodateien zum MIME-Typ `video/webm` hinzufügen (die häufigste WebM-Dateierweiterung ist `.webm`). Um dies zu tun, bearbeiten Sie die Datei `mime.types` in `/etc/apache` oder verwenden Sie die `AddType` Konfigurationsanweisung in `httpd.conf`:

```plain
AddType video/webm .webm
```

Ihr Webhoster kann Ihnen eine einfache Schnittstelle zur Verfügung stellen, um Änderungen an der MIME-Typ-Konfiguration für neue Technologien vorzunehmen, bis ein globales Update natürlich erfolgt.

## Barrierefreiheit

Videos sollten sowohl Untertitel als auch Transkripte bereitstellen, die ihren Inhalt genau beschreiben (siehe [Hinzufügen von Untertiteln und Beschriftungen zu HTML-Videos](/de/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) für mehr Informationen zur Umsetzung). Untertitel ermöglichen es Menschen mit Hörverlust, den Audioinhalt eines Videos während der Wiedergabe zu verstehen, während Transkripte es Menschen, die zusätzliche Zeit benötigen, ermöglichen, Audioinhalte in einem Tempo und Format zu überprüfen, das für sie angenehm ist.

Es ist erwähnenswert, dass, während Sie Audio-Only-Medien beschriften können, Sie dies nur tun können, wenn Audio in einem `<video>` Element abgespielt wird, da der Videobereich des Elements verwendet wird, um die Untertitel anzuzeigen. Dies ist eines der speziellen Szenarien, in denen es nützlich ist, Audio in einem Videoelement abzuspielen.

Wenn automatische Untertitelungsdienste verwendet werden, ist es wichtig, den generierten Inhalt zu überprüfen, um sicherzustellen, dass er das Quellvideo genau wiedergibt.

Neben gesprochenem Dialog sollten Untertitel und Transkripte auch Musik und Soundeffekte identifizieren, die wichtige Informationen kommunizieren. Dazu gehören Emotionen und Tonlage:

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

Untertitel sollten das Hauptmotiv des Videos nicht verdecken. Sie können mit [der `align` VTT Cue-Einstellung](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format#cue_settings) positioniert werden.

- [Web Video Text Tracks Format (WebVTT)](/de/docs/Web/API/WebVTT_API)
- [WebAIM: Captions, Transcripts, and Audio Descriptions](https://webaim.org/techniques/captions/)
- [MDN Verständnis von WCAG, Leitlinie 1.2 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [Understanding Success Criterion 1.2.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Understanding Success Criterion 1.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Beispiele

### Einzelne Quelle

Dieses Beispiel spielt ein Video ab, wenn es aktiviert wird, und bietet dem Benutzer die standardmäßigen Videosteuerungen des Browsers, um die Wiedergabe zu steuern.

#### HTML

```html
<!-- Simple video example -->
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

Bis das Video mit der Wiedergabe beginnt, wird das im `poster` Attribut bereitgestellte Bild anstelle dessen angezeigt. Wenn der Browser die Videowiedergabe nicht unterstützt, wird der Fallback-Text angezeigt.

### Mehrere Quellen

Dieses Beispiel baut auf dem letzten auf und bietet drei verschiedene Quellen für das Medium an; dies ermöglicht das Ansehen des Videos, unabhängig davon, welche Video-Codecs vom Browser unterstützt werden.

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

Zuerst wird AVI ausprobiert. Wenn das nicht abgespielt werden kann, wird [MP4](/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4) versucht. Eine Fallback-Nachricht wird angezeigt, wenn das Videoelement nicht unterstützt wird, jedoch nicht, wenn alle Quellen fehlschlagen.

Einige Media-Dateitypen ermöglichen es, genauere Informationen mit dem [`codecs`](/de/docs/Web/Media/Formats/codecs_parameter) Parameter als Teil des Typ-Strings der Datei bereitzustellen. Ein relativ einfaches Beispiel ist `video/webm; codecs="vp8, vorbis"`, das sagt, dass die Datei ein [WebM](/de/docs/Web/Media/Formats/Containers#webm) Video ist, das [VP8](/de/docs/Web/Media/Formats/Video_codecs#vp8) für sein Video und [Vorbis](/de/docs/Web/Media/Formats/Audio_codecs#vorbis) für Audio verwendet.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>, Sprachinhalt, eingebetteter Inhalt. Wenn es ein <a href="#controls"><code>controls</code></a> Attribut hat: Interaktiver Inhalt und greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <p>
          Wenn das Element ein <a href="#src"><code>src</code></a> Attribut hat: null oder mehr {{HTMLElement("track")}} Elemente, gefolgt von transparentem Inhalt, der keine Medienelemente enthält, das heißt kein {{HTMLElement("audio")}} oder <code>&lt;video&gt;</code>.
        </p>
        <p>
          Andernfalls: null oder mehr {{HTMLElement("source")}} Elemente, gefolgt von null oder mehr {{HTMLElement("track")}} Elementen, gefolgt von transparentem Inhalt, der keine Medienelemente enthält, das heißt kein {{HTMLElement("audio")}} oder <code>&lt;video&gt;</code>.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebetteten Inhalt akzeptiert.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Roles/application_role"><code>application</code></a></td>
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

- [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Formats)

  - [Medien-Container-Formate (Dateitypen)](/de/docs/Web/Media/Formats/Containers)
  - [Web-Video-Codec-Leitfaden](/de/docs/Web/Media/Formats/Video_codecs)
  - [Web-Audio-Codec-Leitfaden](/de/docs/Web/Media/Formats/Audio_codecs)

- Positionierung und Größenanpassung des Bildes innerhalb seines Rahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
- {{htmlelement("audio")}}
- [Verwendung von HTML-Audio und -Video](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [Manipulation von Videos mit Canvas](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [Konfigurieren von Servern für Ogg-Medien](/de/docs/Web/HTTP/Configuring_servers_for_Ogg_media)
