---
title: "<video>: Das Video-Embed-Element"
slug: Web/HTML/Reference/Elements/video
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{HTMLSidebar}}

Das **`<video>`**-[HTML](/de/docs/Web/HTML)-Element bettet einen Mediaplayer ein, der die Wiedergabe von Videos im Dokument unterstützt. Sie können `<video>` auch für Audioinhalte verwenden, aber das {{HTMLElement("audio")}}-Element kann eine passendere Benutzererfahrung bieten.

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

Das obige Beispiel zeigt, wie das `<video>`-Element verwendet wird. Ähnlich wie das {{htmlelement("img")}}-Element beinhalten wir einen Pfad zu dem Medium, das wir im `src`-Attribut anzeigen möchten; wir können andere Attribute einschließen, um Informationen anzugeben, wie z.B. Videobreite und -höhe, ob wir wollen, dass es automatisch abgespielt und wiederholt wird, oder die Standardvideosteuerungen des Browsers angezeigt werden sollen und so weiter.

Der Inhalt zwischen den öffnenden und schließenden `<video></video>`-Tags wird als Fallback in Browsern angezeigt, die das Element nicht unterstützen.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `autoplay`

  - : Ein Boolean-Attribut; wenn es angegeben ist, beginnt das Video automatisch mit der Wiedergabe, sobald es ohne Anhalten mit dem Laden der Daten beginnen kann.

    > [!NOTE]
    > Moderne Browser blockieren Audio (oder Videos mit ungemutetem Audiotrack) von der automatischen Wiedergabe, da Websites, die automatisch Audio abspielen, eine unangenehme Erfahrung für Benutzer sein können. Siehe unseren [Autoplay-Leitfaden](/de/docs/Web/Media/Guides/Autoplay) für zusätzliche Informationen zur richtigen Nutzung von Autoplay.

    Um die automatische Wiedergabe von Videos zu deaktivieren, funktioniert `autoplay="false"` nicht; das Video wird automatisch abgespielt, wenn das Attribut überhaupt im `<video>`-Tag vorhanden ist. Um die automatische Wiedergabe zu entfernen, muss das Attribut vollständig entfernt werden.

- `controls`
  - : Wenn dieses Attribut vorhanden ist, bietet der Browser Steuerungen an, die dem Benutzer die Steuerung der Videowiedergabe ermöglichen, einschließlich Lautstärke, Suchen und Pause/Resume-Wiedergabe.
- `controlslist`

  - : Das [`controlslist`](https://wicg.github.io/controls-list/explainer.html)-Attribut, wenn angegeben, hilft dem Browser bei der Auswahl der anzuzeigenden Steuerungen für das `video`-Element, wann immer der Browser seine eigene Steuerungssatz anzeigt (d.h. wenn das `controls`-Attribut angegeben ist).

    Die erlaubten Werte sind `nodownload`, `nofullscreen` und `noremoteplayback`.

    Verwenden Sie das [`disablepictureinpicture`](#disablepictureinpicture)-Attribut, wenn Sie den Bild-im-Bild-Modus (und die Steuerung) deaktivieren möchten.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)

  - : Dieses {{Glossary("Enumerated", "enumerierte")}} Attribut gibt an, ob CORS verwendet werden soll, um das verwandte Video abzurufen. [CORS-fähige Ressourcen](/de/docs/Web/HTML/How_to/CORS_enabled_image) können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne _verfälscht_ zu werden. Die zulässigen Werte sind:

    - `anonymous`
      - : Sendet eine Cross-Origin-Anfrage ohne Anmeldeinformationen. Mit anderen Worten, es sendet den `Origin:` HTTP-Header ohne ein Cookie, X.509-Zertifikat oder Durchführung von HTTP-Basic-Authentifizierung. Wenn der Server der Ursprungsseite keine Anmeldeinformationen gibt (indem er den HTTP-Header `Access-Control-Allow-Origin:` nicht setzt), wird die Ressource _verfälscht_ und ihre Verwendung eingeschränkt.
    - `use-credentials`
      - : Sendet eine Cross-Origin-Anfrage mit Anmeldeinformationen. Mit anderen Worten, es sendet den `Origin:` HTTP-Header mit einem Cookie, einem Zertifikat oder Durchführung von HTTP-Basic-Authentifizierung. Wenn der Server der Ursprungsseite keine Anmeldeinformationen gibt (durch den HTTP-Header `Access-Control-Allow-Credentials:`), wird die Ressource _verfälscht_ und ihre Verwendung eingeschränkt.

    Wenn nicht vorhanden, wird die Ressource ohne eine CORS-Anfrage abgerufen (d.h. ohne den HTTP-Header `Origin:` zu senden), was ihre nicht verfälschte Verwendung in {{HTMLElement('canvas')}}-Elementen verhindert. Wenn ungültig, wird es behandelt, als ob das enumerierte Schlüsselwort `anonymous` verwendet wurde. Siehe [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für zusätzliche Informationen.

- `disablepictureinpicture`
  - : Verhindert, dass der Browser ein Bild-im-Bild-Kontextmenü vorschlägt oder in einigen Fällen automatisch Bild-im-Bild anfordert.
- `disableremoteplayback`

  - : Ein Boolean-Attribut, das verwendet wird, um die Fähigkeit der Fernwiedergabe auf Geräten zu deaktivieren, die mit kabelgebundenen (HDMI, DVI, etc.) und drahtlosen Technologien (Miracast, Chromecast, DLNA, AirPlay, etc.) verbunden sind.

    In Safari können Sie [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) als Fallback verwenden.

- `height`
  - : Die Höhe des Anzeigebereichs des Videos in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px) (nur absolute Werte; [keine Prozentsätze](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).
- `loop`
  - : Ein Boolean-Attribut; wenn angegeben, wird der Browser automatisch zum Anfang zurückkehren, wenn das Ende des Videos erreicht ist.
- `muted`
  - : Ein Boolean-Attribut, das die Standard-Einstellung für die Stummschaltung im Video angibt. Wenn gesetzt, wird das Audio zunächst stummgeschaltet. Der Standardwert ist`false`, was bedeutet, dass das Audio abgespielt wird, wenn das Video abgespielt wird.
- `playsinline`
  - : Ein Boolean-Attribut, das angibt, dass das Video "inline", also innerhalb des Wiedergabebereichs des Elements, abgespielt wird. Beachten Sie, dass das Fehlen dieses Attributs _nicht_ impliziert, dass das Video immer im Vollbildmodus abgespielt wird.
- `poster`
  - : Eine URL für ein Bild, das angezeigt wird, während das Video heruntergeladen wird. Wenn dieses Attribut nicht angegeben ist, wird nichts angezeigt, bis der erste Frame verfügbar ist, dann wird der erste Frame als Poster-Frame angezeigt.
- `preload`

  - : Dieses {{Glossary("enumerated", "enumerierte")}} Attribut soll dem Browser einen Hinweis darauf geben, was der Autor für das beste Benutzererlebnis hält, hinsichtlich dessen, was vor dem Abspielen des Videos geladen wird. Es kann einen der folgenden Werte haben:

    - `none`: Gibt an, dass das Video nicht vorgeladen werden sollte.
    - `metadata`: Gibt an, dass nur Videometadaten (z.B. Länge) abgerufen werden.
    - `auto`: Gibt an, dass die gesamte Videodatei heruntergeladen werden kann, selbst wenn nicht erwartet wird, dass der Benutzer sie verwendet.
    - _leerer String_: Ein Synonym für den `auto`-Wert.

    Der Standardwert ist für jeden Browser unterschiedlich. Die Spezifikation empfiehlt, es auf `metadata` gesetzt zu haben.

    > [!NOTE]
    >
    > - Das `autoplay`-Attribut hat Vorrang vor `preload`. Wenn `autoplay` angegeben ist, muss der Browser das Video zum Abspielen laden.
    > - Die Spezifikation zwingt den Browser nicht, den Wert dieses Attributs zu befolgen; es ist lediglich ein Hinweis.

- `src`
  - : Die URL des einzubettenden Videos. Dies ist optional; Sie können stattdessen das {{HTMLElement("source")}}-Element innerhalb des Videoblocks verwenden, um das einzubettende Video anzugeben.
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
        Der Eingabepuffer eines [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) steht bereit zur Verarbeitung.
      </td>
    </tr>
    <tr>
      <td>
        [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)
      </td>
      <td>
        Der Browser kann das Medium abspielen, schätzt jedoch, dass nicht genügend Daten geladen wurden, um das Medium bis zum Ende abzuspielen, ohne für weiteres Puffern anzuhalten.
      </td>
    </tr>
    <tr>
      <td>
        [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
      </td>
      <td>
        Der Browser schätzt, dass er das Medium bis zum Ende abspielen kann, ohne für das Puffern anzuhalten.
      </td>
    </tr>
    <tr>
      <td>
        [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)
      </td>
      <td>
        Das Rendering eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) wurde beendet.
      </td>
    </tr>
    <tr>
      <td>
        [`durationchange`](/de/docs/Web/API/HTMLMediaElement/durationchange_event)
      </td>
      <td>Das `duration`-Attribut wurde aktualisiert.</td>
    </tr>
    <tr>
      <td>
        [`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)
      </td>
      <td>
        Das Medium ist leer geworden; zum Beispiel wird dieses Ereignis gesendet, wenn das Medium bereits geladen (oder teilweise geladen) wurde und die
        <a href="/de/docs/Web/API/HTMLMediaElement/load" rel="internal"
          ><code>load()</code></a
        >
        Methode aufgerufen wird, um es neu zu laden.
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
        Ein Fehler ist beim Abrufen der Mediendaten aufgetreten oder der Ressourcentyp ist kein unterstütztes Medienformat.
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
      <td>Ausgelöst, wenn der Browser begonnen hat, die Ressource zu laden.</td>
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
        Die Wiedergabe ist bereit zu starten, nachdem sie pausiert oder verzögert wurde, weil Daten fehlten.
      </td>
    </tr>
    <tr>
      <td>
        [`progress`](/de/docs/Web/API/HTMLMediaElement/progress_event)
      </td>
      <td>Wird regelmäßig ausgelöst, während der Browser eine Ressource lädt.</td>
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
      <td>Eine <em>Such</em>-Operation wurde abgeschlossen.</td>
    </tr>
    <tr>
      <td>
        [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
      </td>
      <td>Eine <em>Such</em>-Operation hat begonnen.</td>
    </tr>
    <tr>
      <td>
        [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
      </td>
      <td>
        Der User-Agent versucht, Mediendaten zu holen, aber Daten kommen unerwartet nicht voran.
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
        Die durch das `currentTime`-Attribut angegebene Zeit wurde aktualisiert.
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
      <td>Die Wiedergabe wurde wegen vorübergehend fehlender Daten gestoppt.</td>
    </tr>
  </tbody>
</table>

## Hinweise zur Verwendung

Browser unterstützen nicht alle das gleiche Videoformat; Sie können mehrere Quellen innerhalb verschachtelter {{htmlelement("source")}}-Elemente angeben, und der Browser wird dann die erste verwenden, die er versteht.

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

Bei Verwendung von {{htmlelement("source")}}-Elementen versucht der Browser, jede Quelle nacheinander zu laden. Wenn eine Quelle fehlschlägt (z. B. aufgrund einer ungültigen URL oder eines nicht unterstützten Formats), wird die nächste Quelle versucht usw. Ein `error`-Ereignis wird auf dem `<video>`-Element ausgelöst, nachdem alle Quellen fehlgeschlagen sind; `error`-Ereignisse werden nicht auf jedem einzelnen `<source>`-Element ausgelöst.

Wir bieten einen umfassenden und gründlichen [Leitfaden zu Mediendateitypen](/de/docs/Web/Media/Guides/Formats) und den [Leitfaden zu den unterstützten Codecs für Videos](/de/docs/Web/Media/Guides/Formats/Video_codecs). Ebenfalls verfügbar ist ein Leitfaden zu [Audiocodecs, die mit ihnen verwendet werden können](/de/docs/Web/Media/Guides/Formats/Audio_codecs).

Andere Verwendungshinweise:

- Wenn Sie das `controls`-Attribut nicht angeben, enthält das Video nicht die Standardsteuerungen des Browsers; Sie können Ihre eigenen benutzerdefinierten Steuerungen mit JavaScript und der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API erstellen. Weitere Einzelheiten finden Sie unter [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).
- Um genaue Kontrolle über Ihre Video- (und Audio-)Inhalte zu ermöglichen, lösen `HTMLMediaElement`s viele verschiedene [Ereignisse](/de/docs/Web/API/HTMLMediaElement#events) aus. Zusätzlich zur Steuerbarkeit ermöglichen Ihnen diese Ereignisse, den Fortschritt des Downloads und der Wiedergabe der Medien sowie den Wiedergabestatus und die Position zu überwachen.
- Sie können das {{cssxref("object-position")}}-Eigenschaft verwenden, um die Positionierung des Videos innerhalb des Rahmen des Elements anzupassen, und das {{cssxref("object-fit")}}-Eigenschaft, um zu steuern, wie die Größe des Videos innerhalb des Rahmens angepasst wird.
- Um Untertitel/Untertitel zusammen mit Ihrem Video anzuzeigen, können Sie etwas JavaScript zusammen mit dem {{htmlelement("track")}}-Element und dem [WebVTT](/de/docs/Web/API/WebVTT_API)-Format verwenden. Weitere Informationen finden Sie unter [Hinzufügen von Untertiteln und Untertitel zu HTML-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video).
- Sie können Audiodateien mit einem `<video>`-Element abspielen. Dies kann nützlich sein, wenn Sie beispielsweise Audio mit einem [WebVTT](/de/docs/Web/API/WebVTT_API)-Transkript ausführen müssen, da das {{HTMLElement("audio")}}-Element keine Untertitel mit WebVTT ermöglicht.
- Um die Fallback-Inhalte in Browsern zu testen, die das Element unterstützen, können Sie `<video>` durch ein nicht existierendes Element wie `<notavideo>` ersetzen.

Eine gute allgemeine Informationsquelle zur Verwendung von HTML `<video>` ist das [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) Einführungs-Tutorial.

### Styling mit CSS

Das `<video>`-Element ist ein ersetztes Element — sein {{cssxref("display")}}-Wert ist standardmäßig `inline` — aber seine Standardbreite und -höhe im Ansichtsfenster werden durch das eingebettete Video definiert.

Es gibt keine besonderen Überlegungen zum Styling von `<video>`; Eine übliche Strategie besteht darin, ihm einen `display`-Wert von `block` zu geben, um es einfacher zu positionieren, zu dimensionieren usw., und dann bei Bedarf Styling- und Layout-Informationen bereitzustellen. [Grundlagen des Videoplayer-Stylings](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics) bietet einige nützliche Styling-Techniken.

### Hinzufügen von Untertiteln und anderen zeitgesteuerten Textspuren

Zeitgesteuerte Textspuren für Untertitel, geschlossene Untertitel, Kapitelüberschriften und so weiter können deklarativ hinzugefügt werden, indem das {{HTMLElement("track")}}-Element verschachtelt wird.
Die Tracks sind im [Web Video Text Tracks File Format (WebVTT)](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) (`.vtt`-Dateien) angegeben.

Zum Beispiel enthält das untenstehende HTML die Datei "captions.vtt", die verwendet wird, um Untertitel auf das Video zu überlagern, wenn Untertitel vom Benutzer aktiviert sind.

```html
<video controls src="video.webm">
  <track default kind="captions" src="captions.vtt" />
</video>
```

Zeitgesteuerte Textspuren können auch programmatisch mit der [WebVTT-API](/de/docs/Web/API/WebVTT_API) hinzugefügt werden.

### Erkennung von Track-Hinzufügung und -Entfernung

Sie können erkennen, wann Tracks zu einem `<video>`-Element hinzugefügt und entfernt werden, indem Sie die [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event)- und [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event)-Ereignisse verwenden. Diese Ereignisse werden jedoch nicht direkt an das `<video>`-Element selbst gesendet.
Stattdessen werden sie an das Track-Listenobjekt innerhalb des `<video>`-Elements gesendet, das dem hinzugefügten Tracktyp im entsprechenden [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) entspricht:

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die alle Audiospuren des Mediaelements enthält.
    Fügen Sie diesem Objekt einen Listener für `addtrack` hinzu, um benachrichtigt zu werden, wenn neue Audiospuren zum Element hinzugefügt werden.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)
  - : Eine [`VideoTrackList`](/de/docs/Web/API/VideoTrackList), die alle Videospuren des Mediaelements enthält.
    Fügen Sie diesem Objekt einen `addtrack`-Listener hinzu, um benachrichtigt zu werden, wenn Videospuren zum Element hinzugefügt werden.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
  - : Eine [`TextTrackList`](/de/docs/Web/API/TextTrackList), die alle Textspuren des Mediaelements enthält (die für Untertitel, geschlossene Untertitel usw. verwendet werden).
    Fügen Sie diesem Objekt einen `addtrack`-Listener hinzu, um benachrichtigt zu werden, wenn Textspuren zum Element hinzugefügt werden.

Um beispielsweise zu erkennen, wann Audiospuren zu einem `<video>`-Element hinzugefügt oder daraus entfernt werden, können Sie einen Code wie diesen verwenden:

```js
const elem = document.querySelector("video");

elem.audioTracks.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTracks.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Dieser Code überwacht das Hinzufügen und Entfernen von Audiospuren zum Element und ruft eine hypothetische Funktion auf einem Track-Editor auf, um die Spur in der Liste der verfügbaren Spuren des Editors zu registrieren und zu entfernen.

Sie können auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um die [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event)- und [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event)-Ereignisse zu überwachen.

### Serverunterstützung für Video

Wenn der MIME-Typ für das Video auf dem Server nicht korrekt gesetzt ist, wird das Video möglicherweise nicht angezeigt oder zeigt ein graues Kästchen mit einem X an (falls JavaScript aktiviert ist).

Wenn Sie den Apache-Webserver verwenden, um WebM-Videos bereitzustellen, können Sie dieses Problem beheben, indem Sie die Erweiterungen des Video-Dateityps zum `video/webm`-MIME-Typ hinzufügen (die häufigste WebM-Dateiendung ist `.webm`). Dazu bearbeiten Sie die Datei `mime.types` in `/etc/apache` oder verwenden die `AddType`-Konfigurationsdirektive in `httpd.conf`:

```plain
AddType video/webm .webm
```

Ihr Webhoster bietet möglicherweise eine benutzerfreundliche Schnittstelle für MIME-Type-Konfigurationsänderungen für neue Technologien, bis ein globales Update natürlich erfolgt.

## Barrierefreiheit

Videos sollten sowohl Untertitel als auch Transkripte enthalten, die ihre Inhalte genau beschreiben (siehe [Hinzufügen von Untertiteln und Untertitel zu HTML-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) für weitere Informationen zur Implementierung). Untertitel ermöglichen es Menschen mit Hörverlust, die audiovisuelle Inhalte eines Videos während der Wiedergabe zu verstehen, während Transkripte Menschen helfen, die zusätzliche Zeit benötigen, um die Audioinhalte in einem für sie angenehmen Tempo und Format überprüfen zu können.

Es ist erwähnenswert, dass Sie, während Sie nur Audiomedien untertiteln können, dies nur tun können, indem Sie Audio in einem `<video>`-Element abspielen, da die Videoregion des Elements verwendet wird, um die Untertitel darzustellen. Dies ist eine der speziellen Szenarien, in denen es nützlich ist, Audio in einem Videoelement abzuspielen.

Wenn automatische Untertitelungsdienste verwendet werden, ist es wichtig, die generierten Inhalte zu überprüfen, um sicherzustellen, dass sie das Quellvideo genau wiedergeben.

Neben dem gesprochenen Dialog sollen auch Untertitel und Transkripte Musik und Soundeffekte identifizieren, die wichtige Informationen kommunizieren. Dazu gehören Emotionen und Ton:

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

Untertitel sollten das Hauptmotiv des Videos nicht verdecken. Sie können mit [der `align` VTT-Cue-Einstellung](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format#cue_settings) positioniert werden.

- [Web Video Text Tracks Format (WebVTT)](/de/docs/Web/API/WebVTT_API)
- [WebAIM: Captions, Transcripts, and Audio Descriptions](https://webaim.org/techniques/captions/)
- [MDN Understanding WCAG, Guideline 1.2 explanations](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [Understanding Success Criterion 1.2.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Understanding Success Criterion 1.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Beispiele

### Eine einzelne Quelle

Dieses Beispiel spielt ein Video ab, wenn es aktiviert wird, und stellt dem Benutzer die Standardsteuerungen des Browsers zur Steuerung der Wiedergabe zur Verfügung.

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

Bis das Video zu spielen beginnt, wird das im `poster`-Attribut angegebene Bild an seiner Stelle angezeigt. Wenn der Browser die Videowiedergabe nicht unterstützt, wird der Fallback-Text angezeigt.

### Mehrere Quellen

Dieses Beispiel baut auf dem letzten auf und bietet drei verschiedene Quellen für das Medium an. Dies ermöglicht es, das Video anzusehen, unabhängig davon, welche Videocodecs vom Browser unterstützt werden.

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

Einige Mediendateitypen ermöglichen es Ihnen, genauere Informationen mit dem [`codecs`](/de/docs/Web/Media/Guides/Formats/codecs_parameter)-Parameter als Teil des Dateityp-Strings bereitzustellen. Zum Beispiel sagt `video/webm; codecs="vp8, vorbis"`, dass es sich um ein [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm)-Video handelt, das [VP8](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp8) für sein Video und [Vorbis](/de/docs/Web/Media/Guides/Formats/Audio_codecs#vorbis) für Audio verwendet.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließender Inhalt</a>, Phrasierungskomponenten, eingebetteter Inhalt. Wenn es ein <a href="#controls"><code>controls</code></a>-Attribut hat: interaktiver Inhalt und fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <p>
          Wenn das Element ein <a href="#src"><code>src</code></a>-Attribut
          hat: null oder mehr {{HTMLElement("track")}}-Elemente, gefolgt von transparentem Inhalt, der keine Medienelemente enthält - das heißt kein {{HTMLElement("audio")}} oder <code>&lt;video&gt;</code>.
        </p>
        <p>
          Andernfalls: null oder mehr {{HTMLElement("source")}}-Elemente, gefolgt von null oder mehr {{HTMLElement("track")}}-Elementen, gefolgt von transparentem Inhalt, das keine Medienelemente enthält - das heißt kein {{HTMLElement("audio")}} oder <code>&lt;video&gt;</code>.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebetteten Inhalt akzeptiert.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
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

- [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Guides/Formats)

  - [Mediencontainerformate (Dateitypen)](/de/docs/Web/Media/Guides/Formats/Containers)
  - [Leitfaden für Web-Video-Codecs](/de/docs/Web/Media/Guides/Formats/Video_codecs)
  - [Leitfaden für Web-Audio-Codecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs)

- Positionierung und Größenanpassung des Bildes innerhalb seines Rahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
- {{htmlelement("audio")}}
- [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Manipulation von Videos mit Canvas](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [Konfigurieren von Servern für Ogg-Medien](/de/docs/Web/Media/Guides/Formats/Configuring_servers_for_Ogg_media)
