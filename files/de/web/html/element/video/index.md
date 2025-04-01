---
title: "<video>: Das Video-Embed-Element"
slug: Web/HTML/Element/video
l10n:
  sourceCommit: 2279e3961dcd0c70c5217e0db6611e405ecba5fe
---

{{HTMLSidebar}}

Das **`<video>`**-[HTML](/de/docs/Web/HTML) Element bettet einen Mediaplayer ein, der die Wiedergabe von Videos im Dokument unterstützt. Sie können `<video>` auch für Audioinhalte verwenden, aber das {{HTMLElement("audio")}}-Element bietet möglicherweise eine geeignetere Benutzererfahrung.

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

Das obige Beispiel zeigt, wie das `<video>`-Element verwendet wird. Ähnlich wie beim {{htmlelement("img")}}-Element geben wir einen Pfad zu dem Medium, das wir anzeigen möchten, im `src`-Attribut an; wir können auch andere Attribute einfügen, um Informationen wie Videobreite und -höhe anzugeben, ob wir möchten, dass es automatisch wiedergegeben und wiederholt oder die Standardvideosteuerung des Browsers angezeigt wird, und so weiter.

Der Inhalt innerhalb der öffnenden und schließenden `<video></video>`-Tags wird als Fallback in Browsern angezeigt, die das Element nicht unterstützen.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `autoplay`

  - : Ein Boolean-Attribut; wenn angegeben, beginnt das Video automatisch mit der Wiedergabe, sobald es kann, ohne zu stoppen, um das Laden der Daten abzuschließen.

    > [!NOTE]
    > Moderne Browser blockieren Audio (oder Videos mit nicht stummgeschalteter Tonspur) vom automatischen Abspielen, da Webseiten, die automatisch Audio abspielen, für Benutzer eine unangenehme Erfahrung sein können. Siehe unseren [Autoplay-Leitfaden](/de/docs/Web/Media/Guides/Autoplay) für zusätzliche Informationen, wie Sie Autoplay richtig verwenden können.

    Um das automatische Abspielen von Videos zu deaktivieren, funktioniert `autoplay="false"` nicht; das Video spielt automatisch ab, wenn das Attribut überhaupt im `<video>`-Tag vorhanden ist. Um Autoplay zu entfernen, muss das Attribut insgesamt entfernt werden.

- `controls`
  - : Wenn dieses Attribut vorhanden ist, bietet der Browser Steuerungen an, mit denen der Benutzer die Videowiedergabe steuern kann, einschließlich Lautstärke, Suche und Pause/Fortsetzen der Wiedergabe.
- `controlslist`

  - : Das [`controlslist`](https://wicg.github.io/controls-list/explainer.html)-Attribut, wenn es angegeben ist, hilft dem Browser dabei, auszuwählen, welche Steuerungen für das `video`-Element angezeigt werden sollen, wenn der Browser seine eigene Steuersatz anzeigt (also wenn das `controls`-Attribut angegeben ist).

    Die erlaubten Werte sind `nodownload`, `nofullscreen` und `noremoteplayback`.

    Verwenden Sie das [`disablepictureinpicture`](#disablepictureinpicture)-Attribut, wenn Sie den Picture-In-Picture-Modus (und die Steuerung) deaktivieren möchten.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Dieses {{Glossary("Enumerated", "enumerierte")}} Attribut gibt an, ob CORS verwendet werden soll, um das zugehörige Video abzurufen. [CORS-enabled resources](/de/docs/Web/HTML/CORS_enabled_image) können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne _verfälscht_ zu werden. Die erlaubten Werte sind:

    - `anonymous`
      - : Sendet eine Cross-Origin-Anfrage ohne Anmeldeinformationen. Mit anderen Worten, es sendet den `Origin:`-HTTP-Header ohne Cookie, X.509-Zertifikat oder wird über die HTTP-Basis-Authentifizierung ausgeführt. Wenn der Server dem Ursprungsstandort keine Anmeldeinformationen gibt (indem er den `Access-Control-Allow-Origin:`-HTTP-Header nicht setzt), wird die Ressource _verfälscht_, und ihre Verwendung eingeschränkt.
    - `use-credentials`
      - : Sendet eine Cross-Origin-Anfrage mit Anmeldeinformationen. Mit anderen Worten, es sendet den `Origin:`-HTTP-Header mit einem Cookie, einem Zertifikat oder wird über die HTTP-Basis-Authentifizierung ausgeführt. Wenn der Server dem Ursprungsstandort keine Anmeldeinformationen gibt (durch `Access-Control-Allow-Credentials:`-HTTP-Header), wird die Ressource _verfälscht_ und ihre Verwendung eingeschränkt.

    Wenn nicht vorhanden, wird die Ressource ohne CORS-Anfrage abgerufen (d.h. ohne den `Origin:`-HTTP-Header zu senden), wodurch ihre unverfälschte Verwendung in {{HTMLElement('canvas')}}-Elementen verhindert wird. Wenn ungültig, wird es so behandelt, als wäre das enumerierte Schlüsselwort `anonymous` verwendet worden. Weitere Informationen finden Sie unter [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Attributes/crossorigin).

- `disablepictureinpicture`
  - : Verhindert, dass der Browser ein Picture-in-Picture-Kontextmenü vorschlägt oder in einigen Fällen automatisch Picture-in-Picture anfordert.
- `disableremoteplayback`

  - : Ein Boolean-Attribut, das verwendet wird, um die Möglichkeit der Fernwiedergabe auf Geräten zu deaktivieren, die über kabelgebundene (HDMI, DVI usw.) und drahtlose Technologien (Miracast, Chromecast, DLNA, AirPlay usw.) angeschlossen sind.

    In Safari können Sie [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) als Fallback verwenden.

- `height`
  - : Die Höhe des Anzeigebereichs des Videos, in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px) (nur absolute Werte; [keine Prozentsätze](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).
- `loop`
  - : Ein Boolean-Attribut; wenn angegeben, wird der Browser automatisch zum Anfang zurückkehren, nachdem er das Ende des Videos erreicht hat.
- `muted`
  - : Ein Boolean-Attribut, das die Standardlautstärkeeinstellung im Video angibt. Wenn gesetzt, wird der Ton zunächst stummgeschaltet. Der Standardwert ist `false`, was bedeutet, dass der Ton abgespielt wird, wenn das Video abgespielt wird.
- `playsinline`
  - : Ein Boolean-Attribut, das angibt, dass das Video „inline“ abgespielt werden soll, also innerhalb des Wiedergabebereichs des Elements. Beachten Sie, dass die Abwesenheit dieses Attributs _nicht_ bedeutet, dass das Video immer im Vollbildmodus abgespielt wird.
- `poster`
  - : Eine URL für ein Bild, das während des Herunterladens des Videos angezeigt werden soll. Wenn dieses Attribut nicht angegeben ist, wird nichts angezeigt, bis der erste Frame verfügbar ist. Dann wird der erste Frame als Poster-Frame angezeigt.
- `preload`

  - : Dieses {{Glossary("enumerated", "enumerierte")}} Attribut soll dem Browser einen Hinweis geben, was der Autor für die beste Benutzererfahrung hinsichtlich der Inhalte hält, die vor dem Abspielen des Videos geladen werden. Es kann einen der folgenden Werte haben:

    - `none`: Gibt an, dass das Video nicht vorgeladen werden soll.
    - `metadata`: Gibt an, dass nur Videometadaten (z.B. Länge) abgerufen werden.
    - `auto`: Gibt an, dass die gesamte Videodatei heruntergeladen werden kann, selbst wenn nicht erwartet wird, dass der Benutzer sie verwendet.
    - _leerer String_: Ein Synonym für den Wert `auto`.

    Der Standardwert ist für jeden Browser unterschiedlich. Die Spezifikation rät dazu, ihn auf `metadata` zu setzen.

    > [!NOTE]
    >
    > - Das `autoplay`-Attribut hat Vorrang vor `preload`. Wenn `autoplay` angegeben ist, muss der Browser offensichtlich beginnen, das Video zum Abspielen herunterzuladen.
    > - Die Spezifikation zwingt den Browser nicht, den Wert dieses Attributs zu befolgen; es ist nur ein Hinweis.

- `src`
  - : Die URL des einzubettenden Videos. Dies ist optional; Sie können stattdessen das {{HTMLElement("source")}}-Element innerhalb des Videoblocks verwenden, um das einzubettende Video anzugeben.
- `width`
  - : Die Breite des Anzeigebereichs des Videos, in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px) (nur absolute Werte; [keine Prozentsätze](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).

## Events

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Eventname</th>
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
        bereit zur Verarbeitung ist.
      </td>
    </tr>
    <tr>
      <td>
        [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)
      </td>
      <td>
        Der Browser das Medium abspielen kann, aber schätzt, dass nicht genug Daten geladen wurden,
        um das Medium bis zum Ende abzuspielen, ohne für weiteres Buffering des Inhaltes anhalten zu müssen.
      </td>
    </tr>
    <tr>
      <td>
        [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
      </td>
      <td>
        Der Browser schätzt, dass er das Medium bis zum Ende abspielen kann,
        ohne für Content Buffering anzuhalten.
      </td>
    </tr>
    <tr>
      <td>
        [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)
      </td>
      <td>
        Das Rendering eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext)
        beendet wurde.
      </td>
    </tr>
    <tr>
      <td>
        [`durationchange`](/de/docs/Web/API/HTMLMediaElement/durationchange_event)
      </td>
      <td>Das <code>duration</code>-Attribut aktualisiert wurde.</td>
    </tr>
    <tr>
      <td>
        [`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)
      </td>
      <td>
        Das Medium leer geworden ist; zum Beispiel, wird dieses Ereignis gesendet,
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
      <td>Die Wiedergabe gestoppt wurde, da das Ende des Mediums erreicht wurde.</td>
    </tr>
    <tr>
      <td>
        [`error`](/de/docs/Web/API/HTMLMediaElement/error_event)
      </td>
      <td>
        Ein Fehler beim Abrufen der Mediendaten aufgetreten ist oder der
        Typ der Ressource kein unterstütztes Medienformat ist.
      </td>
    </tr>
    <tr>
      <td>
        [`loadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event)
      </td>
      <td>Der erste Frame des Mediums das Laden abgeschlossen hat.</td>
    </tr>
    <tr>
      <td>
        [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
      </td>
      <td>Die Metadaten geladen wurden.</td>
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
      <td>Die Wiedergabe pausiert wurde.</td>
    </tr>
    <tr>
      <td>
        [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)
      </td>
      <td>Die Wiedergabe begonnen hat.</td>
    </tr>
    <tr>
      <td>
        [`playing`](/de/docs/Web/API/HTMLMediaElement/playing_event)
      </td>
      <td>
        Die Wiedergabe bereit ist, zu starten, nachdem sie pausiert oder aufgrund
        von Datenmangel verzögert wurde.
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
      <td>Die Wiedergabegeschwindigkeit geändert wurde.</td>
    </tr>
    <tr>
      <td>
        [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event)
      </td>
      <td>Eine <em>Such</em>-Operation abgeschlossen wurde.</td>
    </tr>
    <tr>
      <td>
        [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
      </td>
      <td>Eine <em>Such</em>-Operation begonnen hat.</td>
    </tr>
    <tr>
      <td>
        [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
      </td>
      <td>
        Der Benutzeragent versucht, Mediendaten abzurufen, aber die Daten kommen
        unerwartet nicht nach.
      </td>
    </tr>
    <tr>
      <td>
        [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event)
      </td>
      <td>Das Laden der Mediendaten ausgesetzt wurde.</td>
    </tr>
    <tr>
      <td>
        [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)
      </td>
      <td>
        Die im <code>currentTime</code>-Attribut angegebene Zeit wurde
        aktualisiert.
      </td>
    </tr>
    <tr>
      <td>
        [`volumechange`](/de/docs/Web/API/HTMLMediaElement/volumechange_event)
      </td>
      <td>Die Lautstärke wurde geändert.</td>
    </tr>
    <tr>
      <td>
        [`waiting`](/de/docs/Web/API/HTMLMediaElement/waiting_event)
      </td>
      <td>Die Wiedergabe gestoppt wurde, aufgrund eines vorübergehenden Datenmangels.</td>
    </tr>
  </tbody>
</table>

## Nutzungshinweise

Browser unterstützen nicht alle dieselben Videoformate; Sie können mehrere Quellen innerhalb von verschachtelten {{htmlelement("source")}}-Elementen angeben, und der Browser wird dann die erste verwenden, die er versteht.

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

Wenn Sie {{htmlelement("source")}}-Elemente verwenden, versucht der Browser, jede Quelle nacheinander zu laden. Wenn eine Quelle fehlschlägt (z.B. aufgrund einer ungültigen URL oder eines nicht unterstützten Formats), wird die nächste Quelle versucht, und so weiter. Ein `error`-Ereignis wird auf dem `<video>`-Element ausgelöst, nachdem alle Quellen fehlgeschlagen sind; `error`-Ereignisse werden nicht auf jedem einzelnen `<source>`-Element ausgelöst.

Wir bieten eine substanzielle und gründliche [Anleitung zu Mediadateitypen](/de/docs/Web/Media/Guides/Formats) und die [Anleitung zu den unterstützten Codecs für Video](/de/docs/Web/Media/Guides/Formats/Video_codecs). Ebenfalls verfügbar ist eine Anleitung zu [Audio-Codecs, die mit ihnen verwendet werden können](/de/docs/Web/Media/Guides/Formats/Audio_codecs).

Andere Nutzungshinweise:

- Wenn Sie das `controls`-Attribut nicht angeben, enthält das Video nicht die Standardsteuerungen des Browsers; Sie können Ihre eigenen benutzerdefinierten Steuerungen mit JavaScript und der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API erstellen. Siehe [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player) für weitere Details.
- Um über Ihr Video (und Audio) Inhalte präzise zu steuern, `HTMLMediaElement`s feuern viele verschiedene [Ereignisse](/de/docs/Web/API/HTMLMediaElement#events) ab. Neben der Bereitstellung von Steuerungsfähigkeiten ermöglichen Ihnen diese Ereignisse, den Fortschritt sowohl beim Download als auch bei der Wiedergabe des Mediums sowie den Wiedergabezustand und die Position zu überwachen.
- Sie können das {{cssxref("object-position")}}-Eigenschaft verwenden, um die Positionierung des Videos innerhalb des Rahmens des Elements anzupassen, und die {{cssxref("object-fit")}}-Eigenschaft, um zu steuern, wie die Größe des Videos innerhalb des Rahmens angepasst wird.
- Um Untertitel/Untertitel in Ihrem Video anzuzeigen, können Sie etwas JavaScript zusammen mit dem {{htmlelement("track")}}-Element und dem [WebVTT](/de/docs/Web/API/WebVTT_API) Format verwenden. Siehe [Hinzufügen von Untertiteln und Untertiteln zu HTML-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) für weitere Informationen.
- Sie können Audiodateien mit einem `<video>`-Element abspielen. Dies kann nützlich sein, wenn Sie beispielsweise Audio mit einem [WebVTT](/de/docs/Web/API/WebVTT_API) Transkript abspielen müssen, da das {{HTMLElement("audio")}}-Element keine Untertitel mit WebVTT erlaubt.
- Um den Fallback-Inhalt in Browsern zu testen, die das Element unterstützen, können Sie `<video>` durch ein nicht existierendes Element wie `<notavideo>` ersetzen.

Eine gute allgemeine Informationsquelle zur Verwendung von HTML `<video>` ist das [HTML-Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) Anfänger-Tutorial.

### Styling mit CSS

Das `<video>`-Element ist ein ersetztes Element — sein {{cssxref("display")}}-Wert ist standardmäßig `inline` — aber seine Standardbreite und -höhe im Ansichtsfenster wird durch das eingebettete Video definiert.

Es gibt keine besonderen Überlegungen zum Styling von `<video>`; eine gängige Strategie besteht darin, ihm einen `display`-Wert von `block` zu geben, um es einfacher zu machen, es zu positionieren, zu skalieren usw., und dann Styling- und Layoutinformationen nach Bedarf bereitzustellen. [Grundlagen des Video-Player-Stylings](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics) bietet einige nützliche Styling-Techniken.

### Hinzufügen von Untertiteln und anderen zeitlich abgestimmten Textspuren

Zeitlich abgestimmte Textspuren für Untertitel, geschlossene Untertitel, Kapitelüberschriften und so weiter, können deklarativ durch das Verschachteln des {{HTMLElement("track")}}-Elements hinzugefügt werden.
Die Spuren werden im [Web Video Text Tracks File Format (WebVTT)](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) (`.vtt`-Dateien) angegeben.

Zum Beispiel enthält das folgende HTML die Datei "captions.vtt", die verwendet wird, um geschlossene Untertitel auf das Video zu überlagern, wenn Untertitel vom Benutzer aktiviert werden.

```html
<video controls src="video.webm">
  <track default kind="captions" src="captions.vtt" />
</video>
```

Zeitlich abgestimmte Textspuren können auch programmgesteuert unter Verwendung der [WebVTT API](/de/docs/Web/API/WebVTT_API) hinzugefügt werden.

### Erkennung des Hinzufügens und Entfernens von Spuren

Sie können erkennen, wann Spuren zu einem `<video>`-Element hinzugefügt oder daraus entfernt werden, indem Sie die [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event) Ereignisse verwenden. Diese Ereignisse werden jedoch nicht direkt an das `<video>`-Element selbst gesendet.
Stattdessen werden sie an das Spurverzeichnisobjekt innerhalb des `<video>`-Elements gesendet, das dem Typ der zu dem Element hinzufügten Spur entspricht:

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList) die alle Audiospuren des Medienelements enthält.
    Fügen Sie diesem Objekt einen Listener für `addtrack` hinzu, um benachrichtigt zu werden, wenn neue Audiospuren zum Element hinzugefügt werden.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)
  - : Eine [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) die alle Videospuren des Medienelements enthält.
    Fügen Sie diesem Objekt einen `addtrack`-Listener hinzu, um benachrichtigt zu werden, wenn Videospuren zum Element hinzugefügt werden.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
  - : Eine [`TextTrackList`](/de/docs/Web/API/TextTrackList) die alle Textspuren des Medienelements enthält (die für Untertitel, geschlossene Untertitel und so weiter verwendet werden).
    Fügen Sie diesem Objekt einen `addtrack`-Listener hinzu, um benachrichtigt zu werden, wenn Textspuren zum Element hinzugefügt werden.

Um beispielsweise zu erkennen, wann Audiospuren zu einem `<video>`-Element hinzugefügt oder daraus entfernt werden, können Sie Code wie diesen verwenden:

```js
const elem = document.querySelector("video");

elem.audioTracks.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTracks.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Dieser Code überwacht, wann Audiospuren zum Element hinzugefügt oder daraus entfernt werden, und ruft eine hypothetische Funktion in einem Spur-Editor auf, um die Spur in der Liste der verfügbaren Spuren des Editors zu registrieren und zu entfernen.

Sie können auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um auf die [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event) Ereignisse zu hören.

### Unterstützung des Servers für Video

Wenn der MIME-Typ für das Video auf dem Server nicht korrekt eingestellt ist, wird das Video möglicherweise nicht angezeigt oder zeigt ein graues Feld mit einem X an (wenn JavaScript aktiviert ist).

Wenn Sie den Apache-Webserver verwenden, um WebM-Videos bereitzustellen, können Sie dieses Problem beheben, indem Sie die Dateityp-Erweiterungen des Videos dem `video/webm`-MIME-Typ hinzufügen (die häufigste WebM-Dateierweiterung ist `.webm`). Um dies zu tun, bearbeiten Sie die Datei `mime.types` in `/etc/apache` oder verwenden Sie die `AddType` Konfigurationsdirektive in `httpd.conf`:

```plain
AddType video/webm .webm
```

Ihr Webhost bietet möglicherweise eine einfache Schnittstelle für Änderungen an der MIME-Typ-Konfiguration für neue Technologien, bis eine globale Aktualisierung natürlich erfolgt.

## Barrierefreiheit

In Videos sollten sowohl Untertitel als auch Transkripte bereitgestellt werden, die ihren Inhalt genau beschreiben (siehe [Hinzufügen von Untertiteln zu HTML-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) für weitere Informationen, wie diese implementiert werden können). Untertitel ermöglichen Personen mit Hörverlust, den Audiogehalt eines Videos zu verstehen, während das Video abgespielt wird, während Transkripte Personen, die mehr Zeit benötigen, in die Lage versetzen, Audioinhalte in einem Tempo und Format zu überprüfen, das ihnen angenehm ist.

Es ist erwähnenswert, dass während Sie Audio-only-Medien untertiteln können, dies nur möglich ist, wenn Sie Audio in einem `<video>`-Element abspielen, da die Videoregion des Elements verwendet wird, um die Untertitel anzuzeigen. Dies ist eines der besonderen Szenarien, in denen es nützlich ist, Audio in einem Videoelement abzuspielen.

Wenn automatisierte Untertitel-Services verwendet werden, ist es wichtig, den generierten Inhalt zu überprüfen, um sicherzustellen, dass er den Quellvideo-Inhalt genau wiedergibt.

Zusätzlich zum gesprochenen Dialog sollten Untertitel und Transkripte auch Musik und Soundeffekte identifizieren, die wichtige Informationen vermitteln. Dies umfasst Emotionen und Ton:

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

Untertitel sollten nicht das Hauptmotiv des Videos verdecken. Sie können mit [der `align` VTT Cue-Einstellung](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format#cue_settings) positioniert werden.

- [Web Video Text Tracks Format (WebVTT)](/de/docs/Web/API/WebVTT_API)
- [WebAIM: Captions, Transcripts, and Audio Descriptions](https://webaim.org/techniques/captions/)
- [MDN Understanding WCAG, Guideline 1.2 explanations](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [Understanding Success Criterion 1.2.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Understanding Success Criterion 1.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Beispiele

### Einfache Quelle

Dieses Beispiel spielt ein Video ab, wenn es aktiviert wird, und stellt dem Benutzer die Standardvideosteuerungen des Browsers zur Verfügung, um die Wiedergabe zu steuern.

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

Dieses Beispiel baut auf dem letzten auf und bietet drei verschiedene Quellen für die Medien. Dadurch kann das Video unabhängig davon angesehen werden, welche Videocodecs vom Browser unterstützt werden.

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

Zuerst wird AVI versucht. Wenn das nicht abgespielt werden kann, wird [MP4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4) versucht. Eine Fallback-Nachricht wird angezeigt, wenn das Video-Element nicht unterstützt wird, jedoch nicht, wenn alle Quellen fehlschlagen.

Einige Mediadateitypen ermöglichen es Ihnen, spezifischere Informationen mit dem [`codecs`](/de/docs/Web/Media/Guides/Formats/codecs_parameter)-Parameter als Teil des Dateityp-Strings bereitzustellen. Beispielsweise sagt `video/webm; codecs="vp8, vorbis"`, dass die Datei ein [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm)-Video ist, das [VP8](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp8) für sein Video und [Vorbis](/de/docs/Web/Media/Guides/Formats/Audio_codecs#vorbis) für Audio verwendet.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>, Phraseninhalt, eingebetteter Inhalt. Wenn es ein <a href="#controls"><code>controls</code></a>-Attribut hat: interaktiver Inhalt und greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <p>
          Wenn das Element ein <a href="#src"><code>src</code></a>
          Attribut hat: null oder mehr {{HTMLElement("track")}}-Elemente, gefolgt von transparentem Inhalt, der keine Medienelemente enthält–also keine {{HTMLElement("audio")}} oder <code>&lt;video&gt;</code>.
        </p>
        <p>
          Andernfalls: null oder mehr {{HTMLElement("source")}}-Elemente, gefolgt von null oder mehr {{HTMLElement("track")}}-Elementen, gefolgt von transparentem Inhalt, der keine Medienelemente enthält–also keine {{HTMLElement("audio")}} oder <code>&lt;video&gt;</code>.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebettete Inhalte akzeptiert.</td>
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
  - [Web-Videocodec-Leitfaden](/de/docs/Web/Media/Guides/Formats/Video_codecs)
  - [Web-Audiocodec-Leitfaden](/de/docs/Web/Media/Guides/Formats/Audio_codecs)

- Positionierung und Größe des Bildes innerhalb seines Rahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
- {{htmlelement("audio")}}
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Manipulieren von Video mit Canvas](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [Konfigurieren von Servern für Ogg-Medien](/de/docs/Web/Media/Guides/Formats/Configuring_servers_for_Ogg_media)
