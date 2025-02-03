---
title: "<video>: Das Videoeinbettungselement"
slug: Web/HTML/Element/video
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{HTMLSidebar}}

Das **`<video>`** [HTML](/de/docs/Web/HTML) Element bindet einen Mediaplayer ein, der Videowiedergabe im Dokument unterstützt. Sie können `<video>` auch für Audiowiedergabe verwenden, aber das {{HTMLElement("audio")}} Element könnte eine passendere Benutzererfahrung bieten.

{{EmbedInteractiveExample("pages/tabbed/video.html", "tabbed-standard")}}

Das obige Beispiel zeigt die einfache Verwendung des `<video>` Elements. Ähnlich wie das {{htmlelement("img")}}-Element, schließen wir einen Pfad zum anzuzeigenden Medium im `src`-Attribut ein; wir können andere Attribute hinzufügen, um Informationen wie Video-Breite und -Höhe anzugeben, ob es automatisch abgespielt oder in einer Schleife laufen soll, oder ob die Standard-Videosteuerungen des Browsers angezeigt werden sollen, etc.

Der Inhalt zwischen den öffnenden und schließenden `<video></video>`-Tags wird als Fallback in Browsern angezeigt, die das Element nicht unterstützen.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `autoplay`

  - : Ein boolesches Attribut; wenn angegeben, beginnt das Video automatisch mit der Wiedergabe, sobald es ohne Unterbrechung zum Laden der Daten beginnen kann.

    > [!NOTE]
    > Moderne Browser blockieren Audio (oder Videos mit einem ungemuteten Audiotrack) vom automatischen Abspielen, da Webseiten, die automatisch Audio abspielen, für Benutzer unangenehm sein können. Sehen Sie sich unseren [Autoplay-Leitfaden](/de/docs/Web/Media/Guides/Autoplay) für weitere Informationen darüber an, wie Autoplay richtig verwendet wird.

    Um das automatische Abspielen von Videos zu deaktivieren, funktioniert `autoplay="false"` nicht; das Video wird abgespielt, wenn das Attribut im `<video>` Tag enthalten ist. Um Autoplay zu entfernen, muss das Attribut vollständig entfernt werden.

- `controls`
  - : Wenn dieses Attribut vorhanden ist, bietet der Browser Steuerungen an, mit denen der Benutzer die Videowiedergabe steuern kann, einschließlich Lautstärke, Suche und Pause/Wiedergabe.
- `controlslist`

  - : Das [`controlslist`](https://wicg.github.io/controls-list/explainer.html) Attribut, wenn angegeben, hilft dem Browser auszuwählen, welche Steuerungen für das `video`-Element angezeigt werden sollen, wann immer der Browser seine eigenen Steuerungen anzeigt (das heißt, wenn das `controls`-Attribut angegeben ist).

    Die erlaubten Werte sind `nodownload`, `nofullscreen` und `noremoteplayback`.

    Verwenden Sie das [`disablepictureinpicture`](#disablepictureinpicture) Attribut, wenn Sie den Bild-in-Bild-Modus (und die Steuerung) deaktivieren möchten.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Dieses {{Glossary("Enumerated", "Enumerierte")}} Attribut gibt an, ob CORS verwendet werden soll, um das zugehörige Video abzurufen. [CORS-fähige Ressourcen](/de/docs/Web/HTML/CORS_enabled_image) können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne _contaminated_ zu werden. Die erlaubten Werte sind:

    - `anonymous`
      - : Sendet eine Anfrage über die Herkunftsgrenzen hinweg ohne Anmeldeinformationen. Das bedeutet, dass es den `Origin: ` HTTP-Header ohne ein Cookie, X.509 Zertifikat oder Durchführung einer HTTP-Basisauthentifizierung sendet. Wenn der Server keine Anmeldeinformationen zur Ursprungsseite sendet (indem er den `Access-Control-Allow-Origin: ` HTTP-Header nicht setzt), wird die Ressource _contaminated_ und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Sendet eine Anfrage über die Herkunftsgrenzen hinweg mit Anmeldeinformationen. Das bedeutet, dass es den `Origin: ` HTTP-Header mit einem Cookie, einem Zertifikat oder Durchführung einer HTTP-Basisauthentifizierung sendet. Wenn der Server keine Anmeldeinformationen zur Ursprungsseite sendet (durch den `Access-Control-Allow-Credentials: ` HTTP-Header), wird die Ressource _contaminated_ und ihre Nutzung eingeschränkt.

    Wenn nicht vorhanden, wird die Ressource ohne eine CORS-Anfrage abgerufen (d.h. ohne den `Origin: ` HTTP-Header zu senden), was ihre nicht-contaminierte Nutzung in {{HTMLElement('canvas')}}-Elementen verhindert. Ist es ungültig, wird es behandelt, als wäre das enumerierte Schlüsselwort `anonymous` verwendet worden. Sehen Sie sich die [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Attributes/crossorigin) für weitere Informationen an.

- `disablepictureinpicture`
  - : Verhindert, dass der Browser ein Bild-in-Bild-Kontextmenü vorschlägt oder in einigen Fällen automatisch um Bild-in-Bild bittet.
- `disableremoteplayback`

  - : Ein boolesches Attribut, das verwendet wird, um die Fähigkeit der Fernwiedergabe in Geräten zu deaktivieren, die mit kabelgebundenen (HDMI, DVI, etc.) und drahtlosen Technologien (Miracast, Chromecast, DLNA, AirPlay, etc.) verbunden sind.

    In Safari können Sie [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) als Fallback verwenden.

- `height`
  - : Die Höhe des Anzeigebereichs des Videos in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px) (nur absolute Werte; [keine Prozentwerte](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).
- `loop`
  - : Ein boolesches Attribut; wenn angegeben, sucht der Browser automatisch zum Anfang zurück, wenn das Ende des Videos erreicht wird.
- `muted`
  - : Ein boolesches Attribut, das die Standardeinstellung der Audio-Stummschaltung im Video angibt. Wenn gesetzt, wird das Audio anfänglich stumm geschaltet. Sein Standardwert ist `false`, was bedeutet, dass das Audio abgespielt wird, wenn das Video abgespielt wird.
- `playsinline`
  - : Ein boolesches Attribut, das angibt, dass das Video "inline", also innerhalb des Wiedergabebereichs des Elements, abgespielt wird. Beachten Sie, dass das Fehlen dieses Attributs _nicht_ impliziert, dass das Video immer im Vollbildmodus abgespielt wird.
- `poster`
  - : Eine URL für ein Bild, das angezeigt wird, während das Video heruntergeladen wird. Wenn dieses Attribut nicht angegeben ist, wird nichts angezeigt, bis der erste Frame verfügbar ist, dann wird der erste Frame als Poster-Frame angezeigt.
- `preload`

  - : Dieses {{Glossary("enumerated", "Enumerierte")}} Attribut soll dem Browser einen Hinweis darauf geben, was der Autor glaubt, dass zu der besten Benutzererfahrung führt, hinsichtlich dessen, was vor dem Abspielen des Videos geladen werden soll. Es kann einen der folgenden Werte haben:

    - `none`: Gibt an, dass das Video nicht vorgeladen werden soll.
    - `metadata`: Gibt an, dass nur Videometadaten (z.B. Länge) abgerufen werden.
    - `auto`: Gibt an, dass die gesamte Videodatei heruntergeladen werden kann, sogar wenn der Benutzer nicht erwartet wird sie zu verwenden.
    - _leerer String_: Ein Synonym für den `auto` Wert.

    Der Standardwert ist bei jedem Browser unterschiedlich. Die Spezifikation rät dazu, es auf `metadata` zu setzen.

    > [!NOTE]
    >
    > - Das `autoplay` Attribut hat Vorrang vor `preload`. Wenn `autoplay` angegeben ist, muss der Browser offensichtlich anfangen, das Video für die Wiedergabe herunterzuladen.
    > - Die Spezifikation zwingt den Browser nicht, dem Wert dieses Attributs zu folgen; es ist lediglich ein Hinweis.

- `src`
  - : Die URL des einzubindenden Videos. Dies ist optional; Sie können stattdessen das {{HTMLElement("source")}} Element innerhalb des Video-Blocks verwenden, um das Video anzugeben, das eingebunden werden soll.
- `width`
  - : Die Breite des Anzeigebereichs des Videos, in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px) (nur absolute Werte; [keine Prozentwerte](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).

## Ereignisse

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Ereignisname</th>
      <th scope="col">Ausgelöst, wenn</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        [`audioprocess`](/de/docs/Web/API/ScriptProcessorNode/audioprocess_event) {{Deprecated_Inline}}
      </td>
      <td>
        Der Eingabepuffer eines [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode)
        ist bereit zur Verarbeitung.
      </td>
    </tr>
    <tr>
      <td>
        [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)
      </td>
      <td>
        Der Browser kann das Medium abspielen, schätzt aber, dass nicht genug
        Daten geladen wurden, um das Medium bis zu seinem Ende abzuspielen,
        ohne für weitere Pufferung von Inhalten anhalten zu müssen.
      </td>
    </tr>
    <tr>
      <td>
        [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
      </td>
      <td>
        Der Browser schätzt, dass er das Medium bis zu seinem Ende
        abspielen kann, ohne für Inhalts-Pufferung anhalten zu müssen.
      </td>
    </tr>
    <tr>
      <td>
        [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)
      </td>
      <td>
        Das Rendern eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext)
        wird beendet.
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
        Das Medium ist leer geworden; zum Beispiel wird dieses Ereignis gesendet,
        wenn das Medium bereits geladen (oder teilweise geladen) wurde, und die
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
        Ein Fehler trat beim Abrufen der Mediendaten auf, oder der Typ der
        Ressource ist kein unterstütztes Medienformat.
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
        Die Wiedergabe ist bereit zu starten, nachdem sie pausiert oder
        verzögert wurde aufgrund Datenmangels.
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
      <td>Ein <em>Seek</em>-Vorgang wurde abgeschlossen.</td>
    </tr>
    <tr>
      <td>
        [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
      </td>
      <td>Ein <em>Seek</em>-Vorgang hat begonnen.</td>
    </tr>
    <tr>
      <td>
        [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
      </td>
      <td>
        Der Benutzeragent versucht, Mediendaten abzurufen, aber die Daten
        kommen unerwartet nicht.
      </td>
    </tr>
    <tr>
      <td>
        [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event)
      </td>
      <td>Das Laden von Mediendaten wurde unterbrochen.</td>
    </tr>
    <tr>
      <td>
        [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)
      </td>
      <td>
        Die Zeit, die durch das <code>currentTime</code>-Attribut angezeigt wird,
        wurde aktualisiert.
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
      <td>Die Wiedergabe wurde aufgrund eines vorübergehenden Datenmangels gestoppt.</td>
    </tr>
  </tbody>
</table>

## Verwendungshinweise

Browser unterstützen nicht alle dieselben Videoformate; Sie können mehrere Quellen innerhalb geschachtelter {{htmlelement("source")}}-Elemente bereitstellen, und der Browser verwendet dann die erste, die er versteht.

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

Wir bieten einen umfassenden [Leitfaden zu Medien-Dateitypen](/de/docs/Web/Media/Guides/Formats) und den [Leitfaden zu den für Video unterstützten Codecs](/de/docs/Web/Media/Guides/Formats/Video_codecs). Außerdem steht ein Leitfaden zu [Audiocodecs, die mit ihnen verwendet werden können](/de/docs/Web/Media/Guides/Formats/Audio_codecs), zur Verfügung.

Weitere Verwendungshinweise:

- Wenn Sie das `controls`-Attribut nicht angeben, enthält das Video nicht die Standard-Steuerelemente des Browsers; Sie können Ihre eigenen benutzerdefinierten Steuerelemente mit JavaScript und der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API erstellen. Weitere Informationen finden Sie unter [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).
- Um eine präzise Kontrolle über Ihre Video- (und Audio-)Inhalte zu ermöglichen, lösen `HTMLMediaElement`s viele verschiedene [Ereignisse](/de/docs/Web/API/HTMLMediaElement#events) aus. Diese Ereignisse ermöglichen nicht nur die Steuerbarkeit, sondern auch die Überwachung des Fortschritts sowohl des Downloads als auch der Wiedergabe des Mediums sowie des Wiedergabestatus und der Position.
- Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um die Positionierung des Videos innerhalb des Rahmens des Elements anzupassen, und die {{cssxref("object-fit")}}-Eigenschaft, um zu steuern, wie die Größe des Videos angepasst wird, um in den Rahmen zu passen.
- Um Untertitel zusammen mit Ihrem Video anzuzeigen, können Sie JavaScript zusammen mit dem {{htmlelement("track")}}-Element und dem [WebVTT](/de/docs/Web/API/WebVTT_API) Format verwenden. Weitere Informationen finden Sie unter [Hinzufügen von Untertiteln und Untertitelspuren zu HTML-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video).
- Sie können Audio Dateien mit einem `<video>`-Element abspielen. Dies kann hilfreich sein, wenn Sie beispielsweise Audio mit einem [WebVTT](/de/docs/Web/API/WebVTT_API) Transkript ausführen müssen, da das {{HTMLElement("audio")}}-Element keine Untertitel mit WebVTT erlaubt.
- Um den Fallback-Inhalt in Browsern zu testen, die das Element unterstützen, können Sie `<video>` durch ein nicht existierendes Element wie `<notavideo>` ersetzen.

Eine gute allgemeine Informationsquelle zur Verwendung von HTML `<video>` ist das [HTML-Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) Anfängertutorial.

### Styling mit CSS

Das `<video>`-Element ist ein ersetztes Element — sein {{cssxref("display")}}-Wert ist standardmäßig `inline` — aber seine Standardbreite und -höhe im Viewport ist durch das eingebettete Video definiert.

Es gibt keine besonderen Überlegungen zum Styling von `<video>`; eine übliche Strategie ist, ihm einen `display`-Wert von `block` zu geben, um es einfacher positionieren, skalieren usw. zu können, und dann die Styling- und Layoutinformationen entsprechend bereitzustellen. [Grundlagen der Videoplayer-Stilgebung](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics) bietet einige nützliche Stilgebungstechniken.

### Hinzufügen von Untertiteln und anderen zeitgesteuerten Textspuren

Zeitgesteuerte Textspuren für Untertitel, geschlossene Untertitel, Kapitelüberschriften und so weiter, können deklarativ hinzugefügt werden, indem das {{HTMLElement("track")}}-Element eingebettet wird.
Die Spuren sind im [Web Video Text Tracks Dateiformat (WebVTT)](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) (`.vtt` Dateien) angegeben.

Zum Beispiel wird im folgenden HTML-Datei die Datei "captions.vtt" eingebunden, die verwendet wird, um geschlossene Untertitel auf dem Video zu überlagern, wenn Untertitel durch den Benutzer aktiviert sind.

```html
<video controls src="video.webm">
  <track default kind="captions" src="captions.vtt" />
</video>
```

Zeitgesteuerte Textspuren können auch programmatisch über die [WebVTT API](/de/docs/Web/API/WebVTT_API) hinzugefügt werden.

### Erkennen von Spurhinzufügungen und -entfernungen

Sie können erkennen, wann Spuren zu einem `<video>`-Element hinzugefügt oder von ihm entfernt werden, indem Sie die [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event) Ereignisse verwenden. Diese Ereignisse werden jedoch nicht direkt auf das `<video>`-Element selbst gesendet. Stattdessen werden sie an das Spur-Listenobjekt innerhalb des `<video>`-Elements gesendet, das dem Typ der hinzugefügten Spur entspricht:

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die alle Audiotracks des Medienelements enthält.
    Fügen Sie einen `addtrack`-Listener zu diesem Objekt hinzu, um benachrichtigt zu werden, wenn neue Audiotracks zum Element hinzugefügt werden.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)
  - : Eine [`VideoTrackList`](/de/docs/Web/API/VideoTrackList), die alle Videotracks des Medienelements enthält.
    Fügen Sie diesem Objekt einen `addtrack`-Listener hinzu, um benachrichtigt zu werden, wenn Videotracks zum Element hinzugefügt werden.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
  - : Eine [`TextTrackList`](/de/docs/Web/API/TextTrackList), die alle Textspuren des Medienelements enthält (die für Untertitel, Closed Captions und so weiter verwendet werden).
    Fügen Sie diesem Objekt einen `addtrack`-Listener hinzu, um benachrichtigt zu werden, wenn Textspuren zum Element hinzugefügt werden.

Zum Beispiel, um zu erkennen, wann Audiotracks zu oder von einem `<video>`-Element hinzugefügt oder entfernt werden, können Sie solchen Code verwenden:

```js
const elem = document.querySelector("video");

elem.audioTracks.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTracks.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Dieser Code überwacht, wann Audiotracks zum Element hinzugefügt oder entfernt werden, und ruft eine hypothetische Funktion auf einem Spur-Editor auf, um die Spur in der Liste der verfügbaren Spuren des Editors zu registrieren und zu entfernen.

Sie können auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um für die [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event) Ereignisse zu lauschen.

### Serverunterstützung für Video

Wenn der MIME-Typ des Videos auf dem Server nicht korrekt gesetzt ist, wird das Video möglicherweise nicht angezeigt oder zeigt ein graues Feld mit einem X (wenn JavaScript aktiviert ist).

Wenn Sie den Apache Web Server verwenden, um WebM Videos auszuliefern, können Sie dieses Problem beheben, indem Sie die Video-Dateitypen-Erweiterungen dem MIME-Typ `video/webm` hinzufügen (die häufigste WebM Dateiendung ist `.webm`). Dazu bearbeiten Sie die `mime.types` Datei in `/etc/apache` oder verwenden Sie die `AddType` Konfigurationsdirektive in `httpd.conf`:

```plain
AddType video/webm .webm
```

Ihr Webhost könnte eine einfache Schnittstelle für Änderungen von MIME-Typen für neue Technologien bereitstellen, bis eine globale Aktualisierung natürlich erfolgt.

## Barrierefreiheit

Videos sollten sowohl Untertitel als auch Transkripte bereitstellen, die ihre Inhalte genau beschreiben (siehe [Hinzufügen von Untertiteln und Untertitelspuren zu HTML-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) für weitere Informationen, wie diese implementiert werden). Untertitel ermöglichen Menschen mit Hörverlust, den Audioteil eines Videos zu verstehen, während das Video abgespielt wird, während Transkripte Menschen ermöglichen, die zusätzliche Zeit benötigen, um Audioinhalte in einem Tempo und Format, das ihnen angenehm ist, überprüfen zu können.

Es ist erwähnenswert, dass obwohl Sie Audio-Only-Medien untertiteln können, können Sie dies nur tun, wenn Sie Audio in einem `<video>`-Element abspielen, da die Videoregion des Elements verwendet wird, um die Untertitel anzuzeigen. Dies ist eines der besonderen Szenarien, in denen es nützlich ist, Audio in einem Videoelement abzuspielen.

Wenn automatische Untertitelungsdienste verwendet werden, ist es wichtig, den generierten Inhalt zu überprüfen, um sicherzustellen, dass er das Quellvideo genau wiedergibt.

Zusätzlich zu gesprochenem Dialog sollten Untertitel und Transkripte auch Musik und Soundeffekte identifizieren, die wichtige Informationen übermitteln. Dies schließt Emotionen und Ton ein:

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

Untertitel sollten das Hauptthema des Videos nicht behindern. Sie können mit [der `align`-VTT-Cue-Einstellung](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format#cue_settings) positioniert werden.

- [Web Video Text Tracks Format (WebVTT)](/de/docs/Web/API/WebVTT_API)
- [WebAIM: Captions, Transcripts, and Audio Descriptions](https://webaim.org/techniques/captions/)
- [MDN Understanding WCAG, Guideline 1.2 explanations](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [Understanding Success Criterion 1.2.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Understanding Success Criterion 1.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Beispiele

### Einzelne Quelle

Dieses Beispiel spielt ein Video ab, wenn es aktiviert wird, und bietet dem Benutzer die Standard-Videosteuerungen des Browsers, um die Wiedergabe zu steuern.

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

Bis das Video zu spielen beginnt, wird das Bild angezeigt, das im `poster`-Attribut bereitgestellt wird. Wenn der Browser keine Videowiedergabe unterstützt, wird der Fallback-Text angezeigt.

### Mehrere Quellen

Dieses Beispiel baut auf dem letzten auf und bietet drei verschiedene Quellen für das Medium; dies ermöglicht es, das Video unabhängig davon anzusehen, welche Videocodecs vom Browser unterstützt werden.

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

Zuerst wird AVI versucht. Wenn das nicht abgespielt werden kann, wird [MP4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4) versucht. Eine Fallback-Nachricht wird angezeigt, wenn das Videoelement nicht unterstützt wird, aber nicht, wenn alle Quellen fehlschlagen.

Einige Medien-Dateitypen ermöglichen es Ihnen, spezifischere Informationen mit dem [`codecs`](/de/docs/Web/Media/Guides/Formats/codecs_parameter) Parameter als Teil der Dateitypzeichenfolge bereitzustellen. Ein relativ einfaches Beispiel ist `video/webm; codecs="vp8, vorbis"`, das besagt, dass die Datei ein [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm) Video mit [VP8](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp8) für das Video und [Vorbis](/de/docs/Web/Media/Guides/Formats/Audio_codecs#vorbis) für den Audioinhalt ist.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fluss-Inhalt</a>, Phraseninhalt, eingebetteter Inhalt. Wenn es ein <a href="#controls"><code>controls</code></a> Attribut hat: interaktiver Inhalt und fassbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <p>
          Wenn das Element ein <a href="#src"><code>src</code></a> Attribut hat: null oder mehr {{HTMLElement("track")}} Elemente, gefolgt von transparentem Inhalt, der keine Medienelemente enthält–also kein {{HTMLElement("audio")}} oder <code>&lt;video&gt;</code>.
        </p>
        <p>
          Sonst: null oder mehr {{HTMLElement("source")}} Elemente, gefolgt von null oder mehr {{HTMLElement("track")}} Elementen, gefolgt von transparentem Inhalt, der keine Medienelemente enthält–also kein {{HTMLElement("audio")}} oder <code>&lt;video&gt;</code>.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind zwingend.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebetteten Inhalt akzeptiert.</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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

- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats)

  - [Containerformate für Medien (Dateitypen)](/de/docs/Web/Media/Guides/Formats/Containers)
  - [Leitfaden zu Web-Videocodecs](/de/docs/Web/Media/Guides/Formats/Video_codecs)
  - [Leitfaden zu Web-Audio-Codecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs)

- Positionierung und Größenanpassung des Bildes innerhalb seines Rahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
- {{htmlelement("audio")}}
- [HTML-Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Manipulation von Video mit Canvas](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [Konfiguration von Servern für Ogg-Medien](/de/docs/Web/Media/Guides/Formats/Configuring_servers_for_Ogg_media)
