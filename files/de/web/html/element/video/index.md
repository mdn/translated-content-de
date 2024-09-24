---
title: "<video>: Das Video-Einbettungselement"
slug: Web/HTML/Element/video
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}

Das **`<video>`** [HTML](/de/docs/Web/HTML) Element bettet einen Medienplayer ein, der die Videowiedergabe im Dokument unterstützt. Sie können `<video>` auch für Audioinhalte verwenden, aber das {{HTMLElement("audio")}} Element bietet möglicherweise eine passendere Benutzererfahrung.

{{EmbedInteractiveExample("pages/tabbed/video.html", "tabbed-standard")}}

Das obige Beispiel zeigt die einfache Verwendung des `<video>` Elements. Ähnlich wie beim {{htmlelement("img")}} Element fügen wir im `src` Attribut einen Pfad zu den Medien ein, die wir anzeigen möchten; wir können auch andere Attribute einfügen, um Informationen wie die Video-Breite und -Höhe anzugeben, ob es automatisch wiedergegeben und wiederholt werden soll oder ob die standardmäßigen Videosteuerungen des Browsers angezeigt werden sollen, usw.

Der Inhalt zwischen den öffnenden und schließenden `<video></video>` Tags wird als Fallback in Browsern angezeigt, die das Element nicht unterstützen.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `autoplay`

  - : Ein Boolean-Attribut; wenn angegeben, beginnt das Video automatisch mit der Wiedergabe, sobald es geladen werden kann, ohne anzuhalten, um das Laden der Daten abzuschließen.

    > [!NOTE]
    > Moderne Browser blockieren die automatische Wiedergabe von Audios (oder Videos mit einer nicht stummgeschalteten Tonspur), da Websites, die automatisch Audios abspielen, für Benutzer unangenehm sein können. Siehe unseren [Autoplay-Guide](/de/docs/Web/Media/Autoplay_guide) für zusätzliche Informationen zur ordnungsgemäßen Verwendung von Autoplay.

    Um die Video-Autoplay zu deaktivieren, funktioniert `autoplay="false"` nicht; das Video wird automatisch abgespielt, wenn das Attribut im `<video>` Tag überhaupt vorhanden ist. Um Autoplay zu entfernen, muss das Attribut vollständig entfernt werden.

- `controls`
  - : Wenn dieses Attribut vorhanden ist, bietet der Browser Steuerungen zur Wiedergabesteuerung des Videos, einschließlich Lautstärke, Suchen und Pause/Fortsetzen der Wiedergabe.
- `controlslist`

  - : Das [`controlslist`](https://wicg.github.io/controls-list/explainer.html) Attribut hilft dem Browser auszuwählen, welche Steuerungen für das `video` Element angezeigt werden sollen, wenn der Browser sein eigenes Set von Steuerungen zeigt (d. h. wenn das `controls` Attribut angegeben ist).

    Die erlaubten Werte sind `nodownload`, `nofullscreen` und `noremoteplayback`.

    Verwenden Sie das [`disablepictureinpicture`](#disablepictureinpicture) Attribut, wenn Sie den Bild-im-Bild-Modus (und die Steuerung) deaktivieren möchten.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Dieses [aufzählbare](/de/docs/Glossary/Enumerated) Attribut gibt an, ob CORS verwendet werden soll, um das entsprechende Video abzurufen. [CORS-fähige Ressourcen](/de/docs/Web/HTML/CORS_enabled_image) können im {{HTMLElement("canvas")}} Element wiederverwendet werden, ohne _verfälscht_ zu werden. Die erlaubten Werte sind:

    - `anonymous`
      - : Sendet eine Cross-Origin-Anfrage ohne Anmeldeinformationen. Mit anderen Worten, es wird der `Origin:` HTTP-Header ohne Cookie, X.509-Zertifikat oder HTTP-Basis-Authentifizierung gesendet. Wenn der Server dem Ursprungsort keine Anmeldeinformationen gibt (indem er den `Access-Control-Allow-Origin:` HTTP-Header nicht setzt), wird die Ressource _verfälscht_, und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Sendet eine Cross-Origin-Anfrage mit Anmeldeinformationen. Mit anderen Worten, es wird der `Origin:` HTTP-Header mit einem Cookie, einem Zertifikat oder einer HTTP-Basis-Authentifizierung gesendet. Wenn der Server dem Ursprungsort keine Anmeldeinformationen gibt (durch den `Access-Control-Allow-Credentials:` HTTP-Header), wird die Ressource _verfälscht_ und ihre Nutzung eingeschränkt.

    Wenn nicht vorhanden, wird die Ressource ohne CORS-Anfrage abgerufen (d. h. ohne den `Origin:` HTTP-Header zu senden), was ihre unverfälschte Nutzung in {{HTMLElement('canvas')}} Elementen verhindert. Wenn ungültig, wird es behandelt, als wäre das aufgezählte Schlüsselwort `anonymous` verwendet worden. Siehe [CORS Einstellungen Attribute](/de/docs/Web/HTML/Attributes/crossorigin) für zusätzliche Informationen.

- `disablepictureinpicture`
  - : Verhindert, dass der Browser ein Bild-im-Bild-Kontextmenü vorschlägt oder in einigen Fällen automatisch ein Bild-im-Bild anfordert.
- `disableremoteplayback`

  - : Ein Boolean-Attribut, das die Fähigkeit der Fernwiedergabe auf Geräten deaktiviert, die über kabelgebundene (HDMI, DVI, etc.) und drahtlose Technologien (Miracast, Chromecast, DLNA, AirPlay, etc.) verbunden sind.

    In Safari können Sie [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) als Fallback verwenden.

- `height`
  - : Die Höhe des Anzeigebereichs des Videos in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px) (nur absolute Werte; [keine Prozentsätze](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).
- `loop`
  - : Ein Boolean-Attribut; wenn angegeben, springt der Browser automatisch zurück zum Anfang, sobald das Ende des Videos erreicht wird.
- `muted`
  - : Ein Boolean-Attribut, das die Standardeinstellung für das Deaktivieren des Audios im Video angibt. Wenn gesetzt, wird der Ton zunächst stummgeschaltet. Sein Standardwert ist `false`, was bedeutet, dass das Audio abgespielt wird, wenn das Video abgespielt wird.
- `playsinline`
  - : Ein Boolean-Attribut, das angibt, dass das Video „inline“ abgespielt werden soll, das heißt innerhalb des Wiedergabebereichs des Elements. Beachten Sie, dass das Fehlen dieses Attributs _nicht_ impliziert, dass das Video immer im Vollbildmodus abgespielt wird.
- `poster`
  - : Eine URL für ein Bild, das angezeigt wird, während das Video heruntergeladen wird. Wenn dieses Attribut nicht angegeben ist, wird nichts angezeigt, bis der erste Frame verfügbar ist, dann wird der erste Frame als Posterframe angezeigt.
- `preload`

  - : Dieses {{Glossary("enumerated")}} Attribut soll dem Browser einen Hinweis darauf geben, was der Autor für das beste Benutzererlebnis hält bezüglich dessen, was geladen wird, bevor das Video abgespielt wird. Es kann einen der folgenden Werte haben:

    - `none`: Gibt an, dass das Video nicht vorgeladen werden soll.
    - `metadata`: Gibt an, dass nur Videometadaten (z. B. Länge) abgerufen werden.
    - `auto`: Gibt an, dass die gesamte Videodatei heruntergeladen werden kann, auch wenn der Benutzer sie wahrscheinlich nicht verwenden wird.
    - _leerer String_: Ein Synonym für den Wert `auto`.

    Der Standardwert ist für jeden Browser unterschiedlich. Die Spezifikation rät, es auf `metadata` zu setzen.

    > [!NOTE]
    >
    > - Das `autoplay` Attribut hat Vorrang vor `preload`. Wenn `autoplay` angegeben ist, müsste der Browser offensichtlich beginnen, das Video für die Wiedergabe herunterzuladen.
    > - Die Spezifikation zwingt den Browser nicht, dem Wert dieses Attributs zu folgen; es ist lediglich ein Hinweis.

- `src`
  - : Die URL des einzubettenden Videos. Dies ist optional; Sie können stattdessen das {{HTMLElement("source")}} Element innerhalb des Video-Blocks verwenden, um das einzubettende Video anzugeben.
- `width`
  - : Die Breite des Anzeigebereichs des Videos in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px) (nur absolute Werte; [keine Prozentsätze](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).

## Ereignisse

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Name des Ereignisses</th>
      <th scope="col">Ausgelöst Wenn</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{domxref("ScriptProcessorNode.audioprocess_event","audioprocess")}} {{Deprecated_Inline}}
      </td>
      <td>
        Der Eingabepuffer eines {{DOMxRef("ScriptProcessorNode")}} ist
        bereit zur Verarbeitung.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.canplay_event", 'canplay')}}
      </td>
      <td>
        Der Browser kann das Medium abspielen, schätzt jedoch, dass nicht genügend Daten geladen wurden, um das Medium bis zum Ende abzuspielen, ohne für weiteres Puffern der Inhalte anhalten zu müssen.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.canplaythrough_event", 'canplaythrough')}}
      </td>
      <td>
        Der Browser schätzt, dass es das Medium bis zum Ende abspielen kann, ohne für das Puffern der Inhalte anzuhalten.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("OfflineAudioContext.complete_event", "complete")}}
      </td>
      <td>
        Das Rendering eines {{DOMxRef("OfflineAudioContext")}} ist
        beendet.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.durationchange_event", 'durationchange')}}
      </td>
      <td>Das <code>duration</code>-Attribut wurde aktualisiert.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.emptied_event", 'emptied')}}
      </td>
      <td>
        Die Medien sind leer geworden; zum Beispiel wird dieses Ereignis gesendet, wenn die Medien bereits geladen (oder teilweise geladen) wurden und die
        <a href="/de/docs/Web/API/HTMLMediaElement/load" rel="internal"
          ><code>load()</code></a
        >
        Methode aufgerufen wird, um sie neu zu laden.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.ended_event", 'ended')}}
      </td>
      <td>Die Wiedergabe wurde beendet, da das Ende des Mediums erreicht wurde.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.error_event", 'error')}}
      </td>
      <td>
        Beim Abrufen der Mediendaten ist ein Fehler aufgetreten, oder der Typ der Ressource ist kein unterstütztes Medienformat.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.loadeddata_event", 'loadeddata')}}
      </td>
      <td>Der erste Frame der Medien ist fertig geladen.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.loadedmetadata_event", 'loadedmetadata')}}
      </td>
      <td>Die Metadaten wurden geladen.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.loadstart_event", 'loadstart')}}
      </td>
      <td>Wird ausgelöst, wenn der Browser begonnen hat, die Ressource zu laden.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.pause_event", 'pause')}}
      </td>
      <td>Die Wiedergabe wurde angehalten.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.play_event", 'play')}}
      </td>
      <td>Die Wiedergabe hat begonnen.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.playing_event", 'playing')}}
      </td>
      <td>
        Die Wiedergabe ist bereit zu starten, nachdem sie pausiert oder aufgrund fehlender Daten verzögert wurde.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.progress_event", 'progress')}}
      </td>
      <td>Wird periodisch ausgelöst, während der Browser eine Ressource lädt.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.ratechange_event", 'ratechange')}}
      </td>
      <td>Die Wiedergabegeschwindigkeit hat sich geändert.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.seeked_event", 'seeked')}}
      </td>
      <td>Eine <em>Such</em>-Operation wurde abgeschlossen.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.seeking_event", 'seeking')}}
      </td>
      <td>Eine <em>Such</em>-Operation wurde gestartet.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.stalled_event", 'stalled')}}
      </td>
      <td>
        Der Benutzeragent versucht, Mediendaten abzurufen, aber die Daten sind unerwartet nicht verfügbar.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.suspend_event", 'suspend')}}
      </td>
      <td>Das Laden von Mediendaten wurde ausgesetzt.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.timeupdate_event", 'timeupdate')}}
      </td>
      <td>
        Die durch das <code>currentTime</code>-Attribut angegebene Zeit wurde
        aktualisiert.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.volumechange_event", 'volumechange')}}
      </td>
      <td>Die Lautstärke hat sich geändert.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.waiting_event", 'waiting')}}
      </td>
      <td>Die Wiedergabe wurde wegen eines vorübergehenden Mangels an Daten gestoppt.</td>
    </tr>
  </tbody>
</table>

## Verwendungshinweise

Browser unterstützen nicht alle dasselben Videoformate; Sie können mehrere Quellen innerhalb verschachtelter {{htmlelement("source")}} Elemente bereitstellen und der Browser verwendet dann das erste, das er versteht.

```html
<video controls>
  <source src="myVideo.webm" type="video/webm" />
  <source src="myVideo.mp4" type="video/mp4" />
  <p>
    Ihr Browser unterstützt kein HTML-Video. Hier ist stattdessen ein
    <a href="myVideo.mp4" download="myVideo.mp4">Link zum Video</a>.
  </p>
</video>
```

Wir bieten einen substantielle und umfassende [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Formats) und den [Leitfaden zu den unterstützten Codecs für Video](/de/docs/Web/Media/Formats/Video_codecs). Auch ein Leitfaden zu [Audiocodecs, die mit ihnen verwendet werden können](/de/docs/Web/Media/Formats/Audio_codecs) ist verfügbar.

Weitere Hinweise zur Verwendung:

- Wenn Sie das `controls` Attribut nicht angeben, enthält das Video nicht die Standardsteuerungen des Browsers; Sie können Ihre eigenen benutzerdefinierten Steuerungen mithilfe von JavaScript und der {{domxref("HTMLMediaElement")}} API erstellen. Siehe [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player) für weitere Details.
- Um präzise Kontrolle über Ihre Video-(und Audio-)Inhalte zu ermöglichen, lösen `HTMLMediaElement`s viele verschiedene [Ereignisse](/de/docs/Web/API/HTMLMediaElement#events) aus. Zusätzlich zur Bereitstellung von Steuerungsmöglichkeit ermöglichen diese Ereignisse das Überwachen des Fortschritts von sowohl dem Herunterladen als auch der Wiedergabe der Medien, sowie des Wiedergabezustands und der Position.
- Sie können die {{cssxref("object-position")}} Eigenschaft verwenden, um die Positionierung des Videos innerhalb des Elementsrahmens anzupassen und die {{cssxref("object-fit")}} Eigenschaft, um zu kontrollieren, wie die Größe des Videos angepasst wird, um in den Rahmen zu passen.
- Um Untertitel/Untertexte zusammen mit Ihrem Video anzuzeigen, können Sie etwas JavaScript zusammen mit dem {{htmlelement("track")}} Element und dem [WebVTT](/de/docs/Web/API/WebVTT_API) Format verwenden. Siehe [Hinzufügen von Untertiteln zu HTML-Video](/de/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) für weitere Informationen.
- Sie können Audiodateien mit einem `<video>` Element abspielen. Dies kann nützlich sein, wenn Sie beispielsweise Audio mit einem [WebVTT](/de/docs/Web/API/WebVTT_API) Transkript abspielen müssen, da das {{HTMLElement("audio")}} Element keine Untertitel mit WebVTT erlaubt.
- Um die Fallback-Inhalte in Browsern zu testen, die das Element unterstützen, können Sie `<video>` durch ein nicht vorhandenes Element wie `<notavideo>` ersetzen.

Eine gute allgemeine Informationsquelle zur Verwendung von HTML `<video>` ist das [Einsteiger-Tutorial Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content).

### Gestaltung mit CSS

Das `<video>` Element ist ein ersetzendes Element — sein {{cssxref("display")}} Wert ist standardmäßig `inline` — aber seine Standardbreite und -höhe im Viewport werden durch das eingebettete Video definiert.

Es gibt keine besonderen Überlegungen zur Gestaltung von `<video>`; eine gängige Strategie besteht darin, ihm einen `display` Wert von `block` zu geben, um es einfacher zu positionieren, zu dimensionieren usw., und dann Styling- und Layoutinformationen nach Bedarf bereitzustellen. [Grundlagen zur Videoplayer-Gestaltung](/de/docs/Web/Media/Audio_and_video_delivery/Video_player_styling_basics) bietet einige nützliche Stiltechniken.

### Hinzufügen von Untertiteln und anderen zeitgesteuerten Textspuren

Zeitgesteuerte Textspuren für Untertitel, geschlossene Untertitel, Kapitelüberschriften usw. können deklarativ durch Verschachteln des {{HTMLElement("track")}} Elements hinzugefügt werden. Die Spuren sind im [Web Video Text Tracks File Format (WebVTT)](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) (`.vtt` Dateien) angegeben.

Zum Beispiel enthält das HTML unten die Datei "captions.vtt", die verwendet wird, um geschlossene Untertexte im Video zu überlagern, wenn Untertitel vom Benutzer aktiviert werden.

```html
<video controls src="video.webm">
  <track default kind="captions" src="captions.vtt" />
</video>
```

Zeitgesteuerte Textspuren können auch programmatisch mit der [WebVTT API](/de/docs/Web/API/WebVTT_API) hinzugefügt werden.

### Erkennung von Spurenhinzufügung und -entfernung

Sie können erkennen, wann Spuren zu einem `<video>` Element hinzugefügt und von ihm entfernt werden, indem Sie die {{domxref("VideoTrackList/addtrack_event", "addtrack")}} und {{domxref("VideoTrackList/removetrack_event", "removetrack")}} Ereignisse verwenden. Diese Ereignisse werden jedoch nicht direkt an das `<video>` Element selbst gesendet. Stattdessen werden sie an das Spurlistenobjekt innerhalb des `<video>` Elements gesendet, das dem Typ der Spur entspricht, die dem Element hinzugefügt wurde:

- {{domxref("HTMLMediaElement.audioTracks")}}
  - : Eine {{domxref("AudioTrackList")}} mit allen Audiospuren des Medienelements.
    Fügen Sie einen Listener für `addtrack` zu diesem Objekt hinzu, um benachrichtigt zu werden, wenn neue Audiospuren zum Element hinzugefügt werden.
- {{domxref("HTMLMediaElement.videoTracks")}}
  - : Eine {{domxref("VideoTrackList")}} mit allen Videospuren des Medienelements.
    Fügen Sie einen `addtrack` Listener zu diesem Objekt hinzu, um benachrichtigt zu werden, wenn Videospuren zum Element hinzugefügt werden.
- {{domxref("HTMLMediaElement.textTracks")}}
  - : Eine {{domxref("TextTrackList")}} mit allen Textspuren des Medienelements (die für Untertitel, geschlossene Untertitel usw. verwendet werden).
    Fügen Sie einen `addtrack` Listener zu diesem Objekt hinzu, um benachrichtigt zu werden, wenn Textspuren zum Element hinzugefügt werden.

Zum Beispiel können Sie Code wie diesen verwenden, um zu erkennen, wenn Audiospuren zu einem `<video>` Element hinzugefügt oder von ihm entfernt werden:

```js
const elem = document.querySelector("video");

elem.audioTracks.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTracks.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Dieser Code überwacht, wann Audiospuren zum Element hinzugefügt und von ihm entfernt werden, und ruft eine hypothetische Funktion in einem Spur-Editor auf, um die Spur in die Liste der verfügbaren Spuren des Editors einzutragen und zu entfernen.

Sie können auch {{domxref("EventTarget.addEventListener", "addEventListener()")}} verwenden, um die {{domxref("VideoTrackList/addtrack_event", "addtrack")}} und {{domxref("VideoTrackList/removetrack_event", "removetrack")}} Ereignisse zu hören.

### Serverunterstützung für Video

Wenn der MIME-Typ für das Video nicht korrekt auf dem Server gesetzt ist, wird das Video möglicherweise nicht angezeigt oder zeigt ein graues Feld mit einem X (wenn JavaScript aktiviert ist).

Wenn Sie den Apache-Webserver verwenden, um WebM-Videos bereitzustellen, können Sie dieses Problem beheben, indem Sie die Dateierweiterungen des Videodateityps auf den `video/webm` MIME-Typ setzen (die häufigste WebM-Dateierweiterung ist `.webm`). Dazu bearbeiten Sie die `mime.types` Datei in `/etc/apache` oder verwenden die `AddType` Konfigurationsdirektive in `httpd.conf`:

```plain
AddType video/webm .webm
```

Ihr Webhoster bietet möglicherweise eine benutzerfreundliche Oberfläche für MIME-Typ-Konfigurationsänderungen für neue Technologien, bis ein globales Update auf natürliche Weise erfolgt.

## Barrierefreiheit

Videos sollten sowohl Untertitel als auch Transkripte bereitstellen, die den Inhalt genau beschreiben (siehe [Hinzufügen von Untertiteln zu HTML-Video](/de/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video), um weitere Informationen darüber zu erhalten, wie dies implementiert werden kann). Untertitel ermöglichen es Menschen, die unter Hörverlust leiden, den Audioinhalt eines Videos zu verstehen, während das Video abgespielt wird, während Transkripte es Menschen ermöglichen, die zusätzliche Zeit benötigen, um Audioinhalte in einem Format zu überprüfen, das für sie angenehm ist.

Es ist erwähnenswert, dass, während Sie nur Audio-Medien untertiteln können, dies nur möglich ist, wenn das Audio in einem `<video>` Element dargestellt wird, da die Video-Region des Elements verwendet wird, um die Untertitel anzuzeigen. Dies ist eines der speziellen Szenarien, in denen es nützlich ist, Audio in einem Videoelement abzuspielen.

Wenn automatische Untertitelungsdienste verwendet werden, ist es wichtig, den generierten Inhalt zu überprüfen, um sicherzustellen, dass er die ursprünglichen Videos genau wiedergibt.

Zusätzlich zu gesprochenen Dialogen sollten Untertitel und Transkripte auch Musik und Soundeffekte identifizieren, die wichtige Informationen vermitteln. Dazu gehören Emotionen und Tonalität:

```plain
14
00:03:14 --> 00:03:18
[Dramatische Rockmusik]

15
00:03:19 --> 00:03:21
[flüsternd] Was ist das in der Ferne?

16
00:03:22 --> 00:03:24
Es ist… es ist ein…

16 00:03:25 --> 00:03:32
[Lautes Stampfen]
[Geschirrklirren]
```

Untertitel sollten das Hauptmotiv des Videos nicht verdecken. Sie können mit [der `align` VTT-Cue-Einstellung](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format#cue_settings) positioniert werden.

- [Web Video Text Tracks Format (WebVTT)](/de/docs/Web/API/WebVTT_API)
- [WebAIM: Captions, Transcripts, and Audio Descriptions](https://webaim.org/techniques/captions/)
- [MDN Verständnis von WCAG, Richtlinie 1.2 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [Understanding Success Criterion 1.2.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Understanding Success Criterion 1.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Beispiele

### Eine einzige Quelle

Dieses Beispiel spielt ein Video ab, wenn es aktiviert wird, und bietet dem Benutzer die Standard-Videosteuerungen des Browsers, um die Wiedergabe zu steuern.

#### HTML

```html
<!-- Einfaches Video-Beispiel -->
<!-- 'Big Buck Bunny' lizenziert unter CC 3.0 von der Blender Foundation. Gehostet von archive.org -->
<!-- Poster von peach.blender.org -->
<video
  controls
  src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
  poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
  width="620">
  Entschuldigung, Ihr Browser unterstützt keine eingebetteten Videos, aber keine Sorge, Sie können
  <a href="https://archive.org/details/BigBuckBunny_124">es herunterladen</a>
  und mit Ihrem bevorzugten Videoplayer ansehen!
</video>
```

#### Ergebnis

{{EmbedLiveSample('Single source', '', '400')}}

Bis das Video zu spielen beginnt, wird das im `poster` Attribut angegebene Bild an seiner Stelle angezeigt. Wenn der Browser die Videowiedergabe nicht unterstützt, wird der Fallback-Text angezeigt.

### Mehrere Quellen

Dieses Beispiel basiert auf dem vorherigen und bietet drei verschiedene Medienquellen an, was es ermöglicht, das Video unabhängig davon anzuschauen, welche Videocodecs vom Browser unterstützt werden.

#### HTML

```html
<!-- Mehrere Quellen als Fallbacks für ein Video-Tag verwenden -->
<!-- 'Elephants Dream' von Orange Open Movie Project Studio, lizenziert unter CC-3.0, gehostet von archive.org -->
<!-- Poster gehostet von Wikimedia -->
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

  Entschuldigung, Ihr Browser unterstützt keine eingebetteten Videos, aber keine Sorge, Sie können
  <a
    href="https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4"
    download="ed_1024_512kb.mp4">
    die MP4 herunterladen
  </a>
  und mit Ihrem bevorzugten Videoplayer ansehen!
</video>
```

#### Ergebnis

{{EmbedLiveSample('Multiple sources', '', '400')}}

Zuerst wird AVI versucht. Wenn das nicht abgespielt werden kann, wird [MP4](/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4) versucht. Eine Fallback-Nachricht wird angezeigt, wenn das Videoelement nicht unterstützt wird, jedoch nicht, wenn alle Quellen fehlschlagen.

Einige Mediendateiformate ermöglichen es, spezifischere Informationen durch den [`codecs`](/de/docs/Web/Media/Formats/codecs_parameter) Parameter als Teil der Typzeichenfolge der Datei bereitzustellen. Ein relativ einfaches Beispiel ist `video/webm; codecs="vp8, vorbis"`, was sagt, dass die Datei ein [WebM](/de/docs/Web/Media/Formats/Containers#webm) Video ist, das [VP8](/de/docs/Web/Media/Formats/Video_codecs#vp8) für Video und [Vorbis](/de/docs/Web/Media/Formats/Audio_codecs#vorbis) für Audio verwendet.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>, Texinhalt, eingebetteter Inhalt. Wenn es ein <a href="#controls"><code>controls</code></a> Attribut hat: interaktiver Inhalt und fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        <p>
          Wenn das Element ein <a href="#src"><code>src</code></a>
          Attribut hat: Null oder mehr {{HTMLElement("track")}} Elemente, gefolgt von transparentem Inhalt, der keine Medienelemente enthält–das heißt keine {{HTMLElement("audio")}} oder <code>&lt;video&gt;</code>.
        </p>
        <p>
          Andernfalls: Null oder mehr {{HTMLElement("source")}} Elemente, gefolgt von Null oder mehr {{HTMLElement("track")}} Elementen, gefolgt von transparentem Inhalt, der keine Medienelemente enthält–das heißt keine {{HTMLElement("audio")}} oder <code>&lt;video&gt;</code>.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
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
      <td>{{domxref("HTMLVideoElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Formats)

  - [Medienbehälterformate (Dateitypen)](/de/docs/Web/Media/Formats/Containers)
  - [Web-Video-Codec-Leitfaden](/de/docs/Web/Media/Formats/Video_codecs)
  - [Web-Audio-Codec-Leitfaden](/de/docs/Web/Media/Formats/Audio_codecs)

- Positionierung und Größenänderung des Bildes innerhalb seines Rahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
- {{htmlelement("audio")}}
- [Verwendung von HTML-Audio und -Video](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [Manipulation von Videos mit Canvas](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [Konfiguration von Servern für Ogg-Medien](/de/docs/Web/HTTP/Configuring_servers_for_Ogg_media)
