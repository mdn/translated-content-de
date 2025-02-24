---
title: "<video>: Das Video-Embed-Element"
slug: Web/HTML/Element/video
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<video>`** [HTML](/de/docs/Web/HTML)-Element bettet einen Mediaplayer ein, der Videowiedergabe im Dokument unterstützt. Sie können `<video>` auch für Audiowiedergaben verwenden, aber das {{HTMLElement("audio")}}-Element bietet möglicherweise ein besser geeignetes Benutzererlebnis.

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

Das obige Beispiel zeigt eine einfache Nutzung des `<video>`-Elements. Ähnlich wie bei dem {{htmlelement("img")}}-Element fügen wir einen Pfad zu dem Medium hinzu, das wir im `src`-Attribut anzeigen möchten; wir können auch andere Attribute hinzufügen, um Informationen wie Videobreite und -höhe anzugeben, ob wir es automatisch abspielen und wiederholen möchten oder ob die Standard-Videosteuerungen des Browsers angezeigt werden sollen usw.

Der Inhalt zwischen den öffnenden und schließenden `<video></video>`-Tags wird als Fallback in Browsern angezeigt, die das Element nicht unterstützen.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `autoplay`

  - : Ein Boolean-Attribut; wenn angegeben, beginnt das Video automatisch mit der Wiedergabe, sobald es ohne Stoppen das Laden der Daten beenden kann.

    > [!NOTE]
    > Moderne Browser blockieren Audio (oder Videos mit einer ungemuteten Audiospur) von der automatischen Wiedergabe, da Websites, die automatisch Audio abspielen, für Benutzer eine unangenehme Erfahrung sein können. Weitere Informationen zur richtigen Verwendung der automatischen Wiedergabe finden Sie in unserem [Autoplay-Leitfaden](/de/docs/Web/Media/Guides/Autoplay).

    Um die Video-Autoplay-Funktion zu deaktivieren, funktioniert `autoplay="false"` nicht; das Video wird automatisch abgespielt, wenn das Attribut im `<video>`-Tag überhaupt vorhanden ist. Um die automatische Wiedergabe zu entfernen, muss das Attribut vollständig entfernt werden.

- `controls`
  - : Wenn dieses Attribut vorhanden ist, bietet der Browser Steuerungen an, mit denen der Benutzer die Videowiedergabe steuern kann, einschließlich Lautstärke, Suche und Pause/Wiedergabefortsetzung.
- `controlslist`

  - : Das [`controlslist`](https://wicg.github.io/controls-list/explainer.html)-Attribut hilft, wenn es angegeben ist, dem Browser auszuwählen, welche Steuerungen für das `video`-Element angezeigt werden sollen, wenn der Browser seine eigene Steuerungsmenge zeigt (das heißt, wenn das `controls`-Attribut angegeben ist).

    Die erlaubten Werte sind `nodownload`, `nofullscreen` und `noremoteplayback`.

    Verwenden Sie das [`disablepictureinpicture`](#disablepictureinpicture)-Attribut, wenn Sie den Bild-in-Bild-Modus (und die Steuerung) deaktivieren möchten.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Dieses {{Glossary("Enumerated", "enumerierte")}} Attribut gibt an, ob CORS zum Abrufen des zugehörigen Videos verwendet werden soll. [CORS-fähige Ressourcen](/de/docs/Web/HTML/CORS_enabled_image) können im {{HTMLElement("canvas")}}-Element ohne _Beeinträchtigung_ wiederverwendet werden. Die erlaubten Werte sind:

    - `anonymous`
      - : Sendet eine Cross-Origin-Anfrage ohne ein Berechtigungsnachweis. Das heißt, es sendet den `Origin:` HTTP-Header ohne ein Cookie, X.509-Zertifikat oder HTTP-Basic-Authentifizierung. Wenn der Server dem Ursprungssite keine Anmeldeinformationen gibt (indem er den Header `Access-Control-Allow-Origin:` nicht setzt), wird die Ressource _beeinträchtigt_ und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Sendet eine Cross-Origin-Anfrage mit einem Berechtigungsnachweis. Das heißt, es sendet den `Origin:` HTTP-Header mit einem Cookie, einem Zertifikat oder durchführt eine HTTP-Basic-Authentifizierung. Wenn der Server dem Ursprungssite keine Anmeldeinformationen gibt (durch den `Access-Control-Allow-Credentials:`-HTTP-Header), wird die Ressource _beeinträchtigt_ und ihre Nutzung eingeschränkt.

    Wenn nicht vorhanden, wird die Ressource ohne eine CORS-Anfrage abgerufen (d.h. ohne den `Origin:` HTTP-Header zu senden), was ihre nicht beeinträchtigte Verwendung in {{HTMLElement('canvas')}}-Elementen verhindert. Wenn ungültig, wird es behandelt, als ob das enumerierte Schlüsselwort `anonymous` verwendet wurde. Weitere Informationen finden Sie in den [CORS-Einstellungen-Attributen](/de/docs/Web/HTML/Attributes/crossorigin).

- `disablepictureinpicture`
  - : Verhindert, dass der Browser ein Bild-in-Bild-Kontextmenü vorschlägt oder den Bild-in-Bild-Modus automatisch in einigen Fällen anfordert.
- `disableremoteplayback`

  - : Ein Boolean-Attribut, das verwendet wird, um die Fähigkeit zur Remote-Wiedergabe an Geräten zu deaktivieren, die über kabelgebundene (HDMI, DVI, usw.) und drahtlose Technologien (Miracast, Chromecast, DLNA, AirPlay, usw.) angeschlossen sind.

    In Safari können Sie [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) als Fallback verwenden.

- `height`
  - : Die Höhe des Anzeigebereichs des Videos in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px) (nur absolute Werte; [keine Prozentsätze](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).
- `loop`
  - : Ein Boolean-Attribut; wenn angegeben, sucht der Browser automatisch zu Beginn zurück, sobald das Ende des Videos erreicht wird.
- `muted`
  - : Ein Boolean-Attribut, das die Standardeinstellung für die Audiostummschaltung im Video angibt. Wenn gesetzt, wird das Audio zunächst stummgeschaltet. Der Standardwert ist `false`, was bedeutet, dass das Audio abgespielt wird, wenn das Video abgespielt wird.
- `playsinline`
  - : Ein Boolean-Attribut, das angibt, dass das Video "inline" abgespielt werden soll, das heißt, im Wiedergabebereich des Elements. Beachten Sie, dass das Fehlen dieses Attributs _nicht_ impliziert, dass das Video immer im Vollbildmodus abgespielt wird.
- `poster`
  - : Eine URL für ein Bild, das angezeigt wird, während das Video heruntergeladen wird. Wenn dieses Attribut nicht angegeben ist, wird nichts angezeigt, bis der erste Frame verfügbar ist, dann wird der erste Frame als Poster-Frame angezeigt.
- `preload`

  - : Dieses {{Glossary("enumerated", "enumerierte")}} Attribut soll dem Browser einen Hinweis darauf geben, was der Autor für die beste Benutzererfahrung hält, bezüglich dessen, welche Inhalte vor der Videowiedergabe geladen werden. Es kann einen der folgenden Werte haben:

    - `none`: Gibt an, dass das Video nicht vorgeladen werden sollte.
    - `metadata`: Gibt an, dass nur Video-Metadaten (z.B. Länge) abgerufen werden.
    - `auto`: Gibt an, dass die gesamte Videodatei heruntergeladen werden kann, auch wenn nicht erwartet wird, dass der Benutzer sie benutzt.
    - _Leerzeichen_: Ein Synonym für den `auto`-Wert.

    Der Standardwert ist für jeden Browser unterschiedlich. Die Spezifikation empfiehlt, ihn auf `metadata` zu setzen.

    > [!NOTE]
    >
    > - Das Attribut `autoplay` hat Vorrang vor `preload`. Wenn `autoplay` angegeben ist, müsste der Browser offensichtlich mit dem Herunterladen des Videos zur Wiedergabe beginnen.
    > - Die Spezifikation zwingt den Browser nicht dazu, den Wert dieses Attributs zu befolgen; es ist lediglich ein Hinweis.

- `src`
  - : Die URL des einzubettenden Videos. Dies ist optional; Sie können stattdessen das {{HTMLElement("source")}}-Element innerhalb des Videoblocks verwenden, um das einzubettende Video anzugeben.
- `width`
  - : Die Breite des Anzeigebereichs des Videos in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px) (nur absolute Werte; [keine Prozentsätze](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).

## Ereignisse

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Ereignisname</th>
      <th scope="col">Ausgelöst wann</th>
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
        Der Browser kann das Medium abspielen, schätzt jedoch, dass nicht genügend Daten geladen wurden, um das Medium bis zum Ende abzuspielen, ohne die Wiedergabe für weiteres Puffern von Inhalten anhalten zu müssen.
      </td>
    </tr>
    <tr>
      <td>
        [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
      </td>
      <td>
        Der Browser schätzt, dass er das Medium bis zum Ende abspielen kann, ohne die Wiedergabe für das Puffern von Inhalten anzuhalten.
      </td>
    </tr>
    <tr>
      <td>
        [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)
      </td>
      <td>
        Das Rendering eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) ist beendet.
      </td>
    </tr>
    <tr>
      <td>
        [`durationchange`](/de/docs/Web/API/HTMLMediaElement/durationchange_event)
      </td>
      <td>Das <code>duration</code>-Attribut wurde aktualisiert.</td>
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
        Ein Fehler trat auf, als die Mediendaten abgerufen wurden, oder der Ressourcentyp ist kein unterstütztes Medienformat.
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
      <td>Die Wiedergabe wurde angehalten.</td>
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
      <td>In regelmäßigen Abständen ausgelöst, wenn der Browser eine Ressource lädt.</td>
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
      <td>Ein <em>Such</em>-Vorgang wurde abgeschlossen.</td>
    </tr>
    <tr>
      <td>
        [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
      </td>
      <td>Ein <em>Such</em>-Vorgang hat begonnen.</td>
    </tr>
    <tr>
      <td>
        [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
      </td>
      <td>
        Der User-Agent versucht, Mediendaten abzurufen, aber die Daten sind unerwarteterweise nicht verfügbar.
      </td>
    </tr>
    <tr>
      <td>
        [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event)
      </td>
      <td>Das Laden von Mediendaten wurde angehalten.</td>
    </tr>
    <tr>
      <td>
        [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)
      </td>
      <td>
        Die durch das <code>currentTime</code>-Attribut angezeigte Zeit wurde aktualisiert.
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
      <td>Die Wiedergabe wurde aufgrund eines temporären Datenmangels gestoppt.</td>
    </tr>
  </tbody>
</table>

## Verwendungshinweise

Browser unterstützen nicht alle dieselben Videoformate. Sie können mehrere Quellen innerhalb verschachtelter {{htmlelement("source")}}-Elemente bereitstellen, und der Browser verwendet dann die erste, die er versteht.

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

Wir bieten einen umfassenden und gründlichen [Leitfaden zu Medien-Dateitypen](/de/docs/Web/Media/Guides/Formats) und den [Leitfaden zu unterstützten Codecs für Video](/de/docs/Web/Media/Guides/Formats/Video_codecs). Außerdem gibt es einen Leitfaden zu [Audio-Codecs, die damit verwendet werden können](/de/docs/Web/Media/Guides/Formats/Audio_codecs).

Weitere Verwendungshinweise:

- Wenn Sie das Attribut `controls` nicht angeben, enthält das Video nicht die Standardsteuerungen des Browsers; Sie können mit JavaScript und der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API eigene benutzerdefinierte Steuerungen erstellen. Weitere Einzelheiten finden Sie unter [Erstellen eines browserübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).
- Um präzise Kontrolle über Ihre Video- (und Audio-)Inhalte zu ermöglichen, lösen `HTMLMediaElement`s viele verschiedene [Ereignisse](/de/docs/Web/API/HTMLMediaElement#events) aus. Neben der Bereitstellung von Kontrollierbarkeit ermöglichen Ihnen diese Ereignisse, den Fortschritt sowohl des Downloads als auch der Wiedergabe des Mediums sowie den Wiedergabe- und Positionszustand zu überwachen.
- Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um die Positionierung des Videos innerhalb des Rahmens des Elements anzupassen, und die {{cssxref("object-fit")}}-Eigenschaft, um zu steuern, wie die Größe des Videos angepasst wird, um in den Rahmen zu passen.
- Um Untertitel/Zwischentitel zusammen mit Ihrem Video anzuzeigen, können Sie etwas JavaScript zusammen mit dem {{htmlelement("track")}}-Element und dem [WebVTT](/de/docs/Web/API/WebVTT_API)-Format verwenden. Weitere Informationen finden Sie unter [Hinzufügen von Untertiteln und Zwischentiteln zu HTML-Videos](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video).
- Sie können Audiodateien mit einem `<video>`-Element abspielen. Dies kann nützlich sein, wenn Sie beispielsweise Audio mit einem [WebVTT](/de/docs/Web/API/WebVTT_API)-Transkript abspielen müssen, da das {{HTMLElement("audio")}}-Element keine Untertitel mit WebVTT zulässt.
- Um den Fallback-Inhalt in Browsern zu testen, die das Element unterstützen, können Sie `<video>` durch ein nicht vorhandenes Element wie `<notavideo>` ersetzen.

Eine gute allgemeine Informationsquelle zur Verwendung von HTML `<video>` ist das [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) Einführungs-Tutorial.

### Gestaltung mit CSS

Das `<video>`-Element ist ein ersetztes Element — sein {{cssxref("display")}}-Wert ist standardmäßig `inline` — aber seine Standardbreite und -höhe im Ansichtsfenster wird durch das eingebettete Video definiert.

Es gibt keine besonderen Überlegungen für die Gestaltung von `<video>`; eine gängige Strategie besteht darin, ihm einen `display`-Wert von `block` zu geben, um es einfacher zu positionieren, zu dimensionieren usw. und dann stilistische und Layout-Informationen nach Bedarf bereitzustellen. [Grundlagen der Videoplayer-Gestaltung](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics) bietet einige nützliche Gestaltungstechniken.

### Hinzufügen von Untertiteln und anderen zeitgesteuerten Textspuren

Zeitgesteuerte Textspuren für Untertitel, geschlossene Untertitel, Kapitelüberschriften usw. können deklarativ durch Verschachteln des {{HTMLElement("track")}}-Elements hinzugefügt werden.
Die Spuren werden im [Web Video Text Tracks File Format (WebVTT)](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) (`.vtt`-Dateien) spezifiziert.

Zum Beispiel enthält das unten stehende HTML die Datei "captions.vtt", die verwendet wird, um auf dem Video geschlossene Untertitel zu überlagern, wenn diese vom Benutzer aktiviert werden.

```html
<video controls src="video.webm">
  <track default kind="captions" src="captions.vtt" />
</video>
```

Zeitgesteuerte Textspuren können auch programmatisch mit der [WebVTT-API](/de/docs/Web/API/WebVTT_API) hinzugefügt werden.

### Erkennung des Hinzufügens und Entfernens von Spuren

Sie können feststellen, wenn Spuren zu und von einem `<video>`-Element hinzugefügt oder entfernt werden, indem Sie die [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event)-Ereignisse verwenden. Diese Ereignisse werden jedoch nicht direkt an das `<video>`-Element selbst gesendet. Stattdessen werden sie an das Spurverzeichnisobjekt innerhalb des `<video>`-Elements geschickt, das dem Typ der Spur entspricht, die dem Element hinzugefügt wurde:

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Ein [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), das alle Audiotracks des Medienelements enthält.
    Fügen Sie diesem Objekt einen `addtrack`-Listener hinzu, um benachrichtigt zu werden, wenn neue Audiotracks zum Element hinzugefügt werden.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)
  - : Ein [`VideoTrackList`](/de/docs/Web/API/VideoTrackList), das alle Videotracks des Medienelements enthält.
    Fügen Sie diesem Objekt einen `addtrack`-Listener hinzu, um benachrichtigt zu werden, wenn Videotracks zum Element hinzugefügt werden.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
  - : Ein [`TextTrackList`](/de/docs/Web/API/TextTrackList), das alle Textspuren des Medienelements enthält (die für Untertitel, geschlossene Untertitel usw. verwendet werden).
    Fügen Sie diesem Objekt einen `addtrack`-Listener hinzu, um benachrichtigt zu werden, wenn Textspuren zum Element hinzugefügt werden.

Zum Beispiel können Sie, um festzustellen, wann Audiotracks zu oder von einem `<video>`-Element hinzugefügt oder entfernt werden, den folgenden Code verwenden:

```js
const elem = document.querySelector("video");

elem.audioTracks.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTracks.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Dieser Code überwacht das Hinzufügen und Entfernen von Audiotracks aus dem Element und ruft eine hypothetische Funktion in einem Spuren-Editor auf, um den Track im Verzeichnis der verfügbaren Tracks des Editors zu registrieren und zu entfernen.

Sie können auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um auf die [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event)-Ereignisse zu hören.

### Serverunterstützung für Video

Wenn der MIME-Typ für das Video auf dem Server nicht korrekt eingestellt ist, wird das Video möglicherweise nicht angezeigt oder zeigt ein graues Feld mit einem X an (wenn JavaScript aktiviert ist).

Wenn Sie Apache Web Server verwenden, um WebM-Videos bereitzustellen, können Sie dieses Problem beheben, indem Sie die Dateityperweiterungen für Videos zum `video/webm` MIME-Typ hinzufügen (die häufigste WebM-Dateierweiterung ist `.webm`). Um dies zu tun, bearbeiten Sie die Datei `mime.types` in `/etc/apache` oder verwenden Sie die `AddType`-Konfigurationsanweisung in `httpd.conf`:

```plain
AddType video/webm .webm
```

Ihr Webhost bietet möglicherweise eine einfache Schnittstelle für MIME-Typ-Konfigurationsänderungen für neue Technologien an, bis eine globale Aktualisierung auf natürliche Weise erfolgt.

## Barrierefreiheit

Videos sollten sowohl Untertitel als auch Transkripte bereitstellen, die ihren Inhalt genau beschreiben (siehe [Hinzufügen von Untertiteln und Zwischentiteln zu HTML-Videos](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) für weitere Informationen zur Implementierung). Untertitel ermöglichen es Menschen mit Hörverlust, den Audioinhalt eines Videos während der Wiedergabe zu verstehen, während Transkripte es Menschen ermöglichen, die zusätzliche Zeit benötigen, den Audioinhalt in einem für sie angenehmen Tempo und Format zu überprüfen.

Es ist erwähnenswert, dass Sie zwar Audio-only-Medien untertiteln können, dies jedoch nur tun können, wenn Sie Audio in einem `<video>`-Element abspielen, da die Videoregion des Elements verwendet wird, um die Untertitel darzustellen. Dies ist eines der besonderen Szenarien, in denen es nützlich ist, Audio in einem Videoelement abzuspielen.

Wenn automatische Untertitelungsdienste verwendet werden, ist es wichtig, den generierten Inhalt zu überprüfen, um sicherzustellen, dass er die Originalquelle genau repräsentiert.

Neben gesprochenen Dialogen sollten Untertitel und Transkripte auch Musik und Soundeffekte identifizieren, die wichtige Informationen kommunizieren. Dazu gehören Emotionen und Ton:

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
- [MDN Understanding WCAG, Richtlinie 1.2 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [Verständnis des Erfolgskriteriums 1.2.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Verständnis des Erfolgskriteriums 1.2.2 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Beispiele

### Einzelquelle

Dieses Beispiel spielt ein Video ab, wenn es aktiviert wird, und bietet dem Benutzer die Standard-Videosteuerungen des Browsers zur Steuerung der Wiedergabe.

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

Bis das Video beginnt, wird das Bild angezeigt, das im `poster`-Attribut vorgesehen ist. Wenn der Browser die Videowiedergabe nicht unterstützt, zeigt er den Fallback-Text an.

### Mehrere Quellen

Dieses Beispiel baut auf dem vorherigen auf und bietet drei verschiedene Quellen für das Medium an; dies ermöglicht es, das Video anzuschauen, unabhängig davon, welche Videocodecs vom Browser unterstützt werden.

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

Zuerst wird AVI versucht. Wenn das nicht abgespielt werden kann, wird [MP4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4) versucht. Eine Fallback-Nachricht wird angezeigt, wenn das Videoelement nicht unterstützt wird, jedoch nicht, wenn alle Quellen fehlschlagen.

Einige Mediendateitypen ermöglichen es, spezifischere Informationen mit dem [`codecs`](/de/docs/Web/Media/Guides/Formats/codecs_parameter)-Parameter im Typstring der Datei bereitzustellen. Ein relativ einfaches Beispiel ist `video/webm; codecs="vp8, vorbis"`, was bedeutet, dass die Datei ein [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm)-Video ist, das [VP8](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp8) für Video und [Vorbis](/de/docs/Web/Media/Guides/Formats/Audio_codecs#vorbis) für Audio verwendet.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließinhalt</a>, Phrasierungsinhalt, eingebetteter Inhalt. Wenn es ein <a href="#controls"><code>controls</code></a>-Attribut hat: interaktiver Inhalt und greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <p>
          Wenn das Element ein <a href="#src"><code>src</code></a>-Attribut hat: Null oder mehr {{HTMLElement("track")}}-Elemente, gefolgt von transparentem Inhalt, der keine Medienelemente enthält, das heißt keine {{HTMLElement("audio")}} oder <code>&lt;video&gt;</code>.
        </p>
        <p>
          Sonst: Null oder mehr {{HTMLElement("source")}}-Elemente, gefolgt von null oder mehr {{HTMLElement("track")}}-Elementen, gefolgt von transparentem Inhalt, der keine Medienelemente enthält, das heißt keine {{HTMLElement("audio")}} oder <code>&lt;video&gt;</code>.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind obligatorisch.</td>
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

- [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Guides/Formats)

  - [Mediencontainer-Formate (Dateitypen)](/de/docs/Web/Media/Guides/Formats/Containers)
  - [Webvideo-Codec-Leitfaden](/de/docs/Web/Media/Guides/Formats/Video_codecs)
  - [Webaudio-Codec-Leitfaden](/de/docs/Web/Media/Guides/Formats/Audio_codecs)

- Positionierung und Größenanpassung des Bildes innerhalb seines Rahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
- {{htmlelement("audio")}}
- [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Bearbeiten von Videos mit Canvas](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [Server für Ogg-Medien konfigurieren](/de/docs/Web/Media/Guides/Formats/Configuring_servers_for_Ogg_media)
