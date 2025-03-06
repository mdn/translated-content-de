---
title: "<video>: Das Video-Einbetten-Element"
slug: Web/HTML/Element/video
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}

Das **`<video>`** [HTML](/de/docs/Web/HTML) Element bettet einen Mediaplayer ein, der die Videowiedergabe im Dokument unterstützt. Sie können `<video>` auch für Audioinhalte verwenden, allerdings bietet das {{HTMLElement("audio")}} Element möglicherweise ein angemesseneres Benutzererlebnis.

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

Das obige Beispiel zeigt die einfache Verwendung des `<video>` Elements. Ähnlich wie beim {{htmlelement("img")}} Element geben wir im `src` Attribut einen Pfad zu den Medien an, die wir anzeigen möchten; wir können andere Attribute einschließen, um Informationen wie Video-Breite und -Höhe zu spezifizieren, ob es automatisch abgespielt und wiederholt werden soll oder die Standard-Videokontrollen des Browsers angezeigt werden sollen, etc.

Der Inhalt innerhalb der öffnenden und schließenden `<video></video>` Tags wird als Fallback in Browsern angezeigt, die das Element nicht unterstützen.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `autoplay`

  - : Ein Boolean-Attribut; wenn angegeben, beginnt das Video automatisch wiederzugeben, sobald es kann, ohne zu stoppen, um das Laden der Daten abzuschließen.

    > [!NOTE]
    > Modernere Browser blockieren die automatische Wiedergabe von Audio (oder Videos mit einer ungedämpften Tonspur), da Seiten, die automatisch Audio abspielen, eine unangenehme Erfahrung für Benutzer sein können. Siehe unseren [autoplay Leitfaden](/de/docs/Web/Media/Guides/Autoplay) für zusätzliche Informationen über die richtige Verwendung von Autoplay.

    Um die Videowiedergabe zu deaktivieren, wird `autoplay="false"` nicht funktionieren; das Video wird automatisch abgespielt, wenn das Attribut im `<video>` Tag vorhanden ist. Um das automatische Abspielen zu entfernen, muss das Attribut komplett entfernt werden.

- `controls`
  - : Wenn dieses Attribut vorhanden ist, bietet der Browser Kontrollen an, die es dem Benutzer ermöglichen, die Videowiedergabe zu steuern, einschließlich Lautstärke, Suche und Pause/Fortsetzen der Wiedergabe.
- `controlslist`

  - : Das [`controlslist`](https://wicg.github.io/controls-list/explainer.html) Attribut hilft dem Browser, auszuwählen, welche Kontrollen für das `video` Element angezeigt werden sollen, wann immer der Browser seine eigene Kontrollenmenü anzeigt (das heißt, wenn das `controls` Attribut angegeben ist).

    Die erlaubten Werte sind `nodownload`, `nofullscreen` und `noremoteplayback`.

    Verwenden Sie das [`disablepictureinpicture`](#disablepictureinpicture) Attribut, wenn Sie den Bild-im-Bild-Modus (und die Steuerung) deaktivieren möchten.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Dieses {{Glossary("Enumerated", "aufzählende")}} Attribut gibt an, ob CORS verwendet werden soll, um das zugehörige Video abzurufen. [CORS-fähige Ressourcen](/de/docs/Web/HTML/CORS_enabled_image) können im {{HTMLElement("canvas")}} Element wiederverwendet werden, ohne _verfälscht_ zu werden. Die erlaubten Werte sind:

    - `anonymous`
      - : Sendet eine cross-origin Anfrage ohne Anmeldeinformationen. Anders gesagt, es sendet den `Origin:` HTTP Header ohne ein Cookie, X.509-Zertifikat oder der Durchführung einer HTTP Basic-Authentifizierung. Wenn der Server keine Anmeldeinformationen an die Ursprungsseite sendet (indem er den `Access-Control-Allow-Origin:` HTTP-Header nicht setzt), wird die Ressource _verfälscht_ und ihre Verwendung eingeschränkt.
    - `use-credentials`
      - : Sendet eine cross-origin Anfrage mit Anmeldeinformationen. Anders gesagt, es sendet den `Origin:` HTTP Header mit einem Cookie, einem Zertifikat oder führt HTTP Basic-Authentifizierung durch. Wenn der Server keine Anmeldeinformationen an die Ursprungsseite gibt (durch den `Access-Control-Allow-Credentials:` HTTP-Header), wird die Ressource _verfälscht_ und ihre Verwendung eingeschränkt.

    Wenn nicht vorhanden, wird die Ressource ohne eine CORS-Anfrage abgerufen (d.h. ohne Senden des `Origin:` HTTP Headers), was ihre unverfälschte Verwendung in {{HTMLElement('canvas')}} Elementen verhindert. Wenn ungültig, wird sie behandelt, als wäre das aufgezählte Schlüsselwort `anonymous` verwendet worden. Siehe [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Attributes/crossorigin) für zusätzliche Informationen.

- `disablepictureinpicture`
  - : Verhindert, dass der Browser ein Bild-im-Bild-Kontextmenü vorschlägt oder in einigen Fällen automatisch auf Bild-im-Bild-Anfragen wechselt.
- `disableremoteplayback`

  - : Ein Boolean-Attribut, das die Fähigkeit zur Remote-Wiedergabe auf Geräten, die über kabelgebundene (HDMI, DVI, etc.) und kabellose Technologien (Miracast, Chromecast, DLNA, AirPlay usw.) angeschlossen sind, deaktiviert.

    In Safari können Sie [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) als Fallback verwenden.

- `height`
  - : Die Höhe des Videoanzeigebereichs in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px) (nur absolute Werte; [keine Prozentsätze](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).
- `loop`
  - : Ein Boolean-Attribut; wenn angegeben, sucht der Browser automatisch an den Start zurück, sobald das Ende des Videos erreicht ist.
- `muted`
  - : Ein Boolean-Attribut, das die standardmäßige Audio-Stummschaltungseinstellung im Video angibt. Wenn gesetzt, wird das Audio zunächst stummgeschaltet. Sein Standardwert ist `false`, was bedeutet, dass das Audio abgespielt wird, wenn das Video gespielt wird.
- `playsinline`
  - : Ein Boolean-Attribut, das anzeigt, dass das Video "inline" abgespielt werden soll, das heißt, innerhalb des Wiedergabebereichs des Elements. Beachten Sie, dass das Fehlen dieses Attributs _nicht_ bedeutet, dass das Video immer im Vollbild abgespielt wird.
- `poster`
  - : Eine URL für ein Bild, das angezeigt wird, während das Video heruntergeladen wird. Wenn dieses Attribut nicht angegeben ist, wird nichts angezeigt, bis der erste Frame verfügbar ist, dann wird der erste Frame als Poster-Frame angezeigt.
- `preload`

  - : Dieses {{Glossary("enumerated", "aufzählende")}} Attribut soll einen Hinweis an den Browser geben, was der Autor denkt, was zur besten Benutzererfahrung führt, in Bezug auf welches Inhalt vor dem Abspielen des Videos geladen wird. Es kann einen der folgenden Werte haben:

    - `none`: Gibt an, dass das Video nicht vorgeladen werden soll.
    - `metadata`: Gibt an, dass nur Videometadaten (z.B. Länge) abgerufen werden.
    - `auto`: Gibt an, dass die gesamte Videodatei heruntergeladen werden kann, auch wenn die Nutzung durch den Benutzer nicht erwartet wird.
    - _leerer String_: Ein Synonym für den `auto` Wert.

    Der Standardwert ist für jeden Browser unterschiedlich. Die Spezifikation rät dazu, sie auf `metadata` zu setzen.

    > [!NOTE]
    >
    > - Das `autoplay` Attribut hat Vorrang vor `preload`. Wenn `autoplay` angegeben ist, muss der Browser natürlich beginnen, das Video zum Abspielen herunterzuladen.
    > - Die Spezifikation zwingt den Browser nicht, dem Wert dieses Attributs zu folgen; es ist nur ein Hinweis.

- `src`
  - : Die URL des einzubettenden Videos. Dies ist optional; Sie können stattdessen das {{HTMLElement("source")}} Element innerhalb des Videoblocks verwenden, um das einzubettende Video anzugeben.
- `width`
  - : Die Breite des Videoanzeigebereichs in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px) (nur absolute Werte; [keine Prozentsätze](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).

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
        Der Eingabepuffer eines [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) ist
        bereit, verarbeitet zu werden.
      </td>
    </tr>
    <tr>
      <td>
        [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)
      </td>
      <td>
        Der Browser kann die Medien abspielen, schätzt jedoch, dass nicht genug Daten
        geladen wurden, um die Medien bis zum Ende abzuspielen, ohne für
        weiteres Puffern angehalten zu werden.
      </td>
    </tr>
    <tr>
      <td>
        [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
      </td>
      <td>
        Der Browser schätzt, dass er die Medien bis zum Ende abspielen kann, ohne
        für Inhalte zu puffern anzuhalten.
      </td>
    </tr>
    <tr>
      <td>
        [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)
      </td>
      <td>
        Die Verarbeitung eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) ist
        beendet.
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
        Die Medien sind leer geworden; dieses Ereignis wird z.B. gesendet, wenn die Medien
        bereits geladen (oder teilweise geladen) wurden und die
        <a href="/de/docs/Web/API/HTMLMediaElement/load" rel="internal"
          ><code>load()</code></a
        >
        Methode aufgerufen wird, um sie neu zu laden.
      </td>
    </tr>
    <tr>
      <td>
        [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)
      </td>
      <td>Die Wiedergabe wurde gestoppt, weil das Ende der Medien erreicht wurde.</td>
    </tr>
    <tr>
      <td>
        [`error`](/de/docs/Web/API/HTMLMediaElement/error_event)
      </td>
      <td>
        Ein Fehler ist beim Abrufen der Mediendaten aufgetreten oder der Typ der
        Ressource ist kein unterstütztes Medienformat.
      </td>
    </tr>
    <tr>
      <td>
        [`loadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event)
      </td>
      <td>Der erste Frame der Medien wurde geladen.</td>
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
      <td>Wird ausgelöst, wenn der Browser begonnen hat, die Ressource zu laden.</td>
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
        Die Wiedergabe ist bereit zu starten, nachdem sie pausiert oder verzögert wurde
        aufgrund von Datenmangel.
      </td>
    </tr>
    <tr>
      <td>
        [`progress`](/de/docs/Web/API/HTMLMediaElement/progress_event)
      </td>
      <td>Wird periodisch ausgelöst, während der Browser eine Ressource lädt.</td>
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
      <td>Eine <em>Such</em>-Operation wurde begonnen.</td>
    </tr>
    <tr>
      <td>
        [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
      </td>
      <td>
        Der Benutzeragent versucht, Mediendaten abzurufen, aber diese kommen
        unerwartet nicht.
      </td>
    </tr>
    <tr>
      <td>
        [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event)
      </td>
      <td>Das Laden der Mediendaten wurde ausgesetzt.</td>
    </tr>
    <tr>
      <td>
        [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)
      </td>
      <td>
        Die im <code>currentTime</code> Attribut angegebene Zeit wurde
        aktualisiert.
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

## Nutzungshinweise

Nicht alle Browser unterstützen dieselben Videoformate; Sie können mehrere Quellen innerhalb geschachtelter {{htmlelement("source")}} Elemente angeben, und der Browser verwendet dann die erste, die er versteht.

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

Wir bieten einen substanziellen und umfassenden [Leitfaden zu Medien-Dateitypen](/de/docs/Web/Media/Leitfäden/Formats) und den [Leitfaden zu den unterstützten Codecs für Video](/de/docs/Web/Media/Leitfäden/Formats/Video_codecs). Ebenfalls verfügbar ist ein Leitfaden zu [Audio-Codecs, die mit ihnen verwendet werden können](/de/docs/Web/Media/Leitfäden/Formats/Audio_codecs).

Weitere Nutzungshinweise:

- Wenn Sie das `controls` Attribut nicht angeben, enthält das Video nicht die Standard-Steuerelemente des Browsers; Sie können eigene benutzerdefinierte Steuerelemente mithilfe von JavaScript und der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API erstellen. Siehe [Erstellen eines Browser-übergreifenden Videoplayers](/de/docs/Web/Media/Leitfäden/Audio_und_Video_Delivery/cross_browser_video_player) für mehr Details.
- Um eine genaue Kontrolle über Ihre Video- (und Audio-) Inhalte zu ermöglichen, lösen `HTMLMediaElement`s viele verschiedene [Ereignisse](/de/docs/Web/API/HTMLMediaElement#ereignisse) aus. Neben der Steuerungsmöglichkeit können Sie mit diesen Ereignissen auch den Fortschritt des Herunterladens und Abspielens der Medien sowie den Abspielzustand und die Position überwachen.
- Sie können die {{cssxref("object-position")}} Eigenschaft verwenden, um die Positionierung des Videos innerhalb des Rahmens des Elements anzupassen, und die {{cssxref("object-fit")}} Eigenschaft, um zu steuern, wie die Größe des Videos an den Rahmen angepasst wird.
- Um Untertitel/Standbilder zusammen mit Ihrem Video anzuzeigen, können Sie etwas JavaScript zusammen mit dem {{htmlelement("track")}} Element und dem [WebVTT](/de/docs/Web/API/WebVTT_API) Format verwenden. Siehe [Hinzufügen von Untertiteln und Captions zu HTML-Video](/de/docs/Web/Media/Leitfäden/Audio_und_Video_Delivery/Hinzufügen_von_Captions_und_Untertiteln_zu_HTML5_Video) für weitere Informationen.
- Sie können Audiodateien mit einem `<video>` Element abspielen. Dies kann nützlich sein, wenn Sie z.B. Audio mit einem [WebVTT](/de/docs/Web/API/WebVTT_API) Transkript ausführen müssen, da das {{HTMLElement("audio")}} Element keine Captions mit WebVTT erlaubt.
- Um den Fallback-Inhalt in Browsern zu testen, die das Element unterstützen, können Sie `<video>` durch ein nicht existierendes Element wie `<notavideo>` ersetzen.

Eine gute allgemeine Informationsquelle zur Verwendung von HTML `<video>` ist das [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) Anfänger-Tutorial.

### Styling mit CSS

Das `<video>` Element ist ein ersetztes Element - sein {{cssxref("display")}} Wert ist standardmäßig `inline` - aber seine Standardbreite und -höhe im Ansichtsfenster wird durch das eingebettete Video definiert.

Es gibt keine besonderen Überlegungen zum Styling von `<video>`; eine häufige Strategie besteht darin, ihm einen `display` Wert von `block` zu geben, um es einfacher zu positionieren, zu skalieren, etc. und dann Styling- und Layoutinformationen nach Bedarf bereitzustellen. [Video-Player-Styling-Grundlagen](/de/docs/Web/Media/Leitfäden/Audio_und_Video_Delivery/Video_Player_Styling_Grundlagen) bietet einige nützliche Styling-Techniken.

### Hinzufügen von Untertiteln und anderen zeitgesteuerten Textspuren

Zeitgesteuerte Textspuren für Untertitel, Captions, Kapitelüberschriften und so weiter, können deklarativ durch Verschachtelung des {{HTMLElement("track")}} Elements hinzugefügt werden. Die Spuren werden im [Web Video Text Tracks File Format (WebVTT)](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) (`.vtt` Dateien) angegeben.

Zum Beispiel enthält der untenstehende HTML-Code die Datei "captions.vtt", die verwendet wird, um Captions auf dem Video zu überlagern, falls Captions durch den Benutzer aktiviert werden.

```html
<video controls src="video.webm">
  <track default kind="captions" src="captions.vtt" />
</video>
```

Zeitgesteuerte Textspuren können auch programmatisch mit der [WebVTT API](/de/docs/Web/API/WebVTT_API) hinzugefügt werden.

### Erkennung der Hinzufügung und Entfernung von Spuren

Sie können erkennen, wann Spuren zu einem `<video>` Element hinzugefügt oder von diesem entfernt werden, indem Sie auf die [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event) Ereignisse horchen. Diese Ereignisse werden jedoch nicht direkt an das `<video>` Element selbst gesendet. Stattdessen werden sie an die Track-Listen-Objekte innerhalb des `<video>` Elements gesendet, die dem Typ der Spur entsprechen, die dem Element hinzugefügt wurde:

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die alle Audiotracks des Medienelements enthält. Fügen Sie diesem Objekt einen `addtrack` Listener hinzu, um benachrichtigt zu werden, wenn neue Audiotracks zum Element hinzugefügt werden.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)
  - : Eine [`VideoTrackList`](/de/docs/Web/API/VideoTrackList), die alle Videotracks des Medienelements enthält. Fügen Sie diesem Objekt einen `addtrack` Listener hinzu, um benachrichtigt zu werden, wenn Videotracks zum Element hinzugefügt werden.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
  - : Eine [`TextTrackList`](/de/docs/Web/API/TextTrackList), die alle Texttracks des Medienelements enthält (die für Untertitel, Captions usw. verwendet werden). Fügen Sie diesem Objekt einen `addtrack` Listener hinzu, um benachrichtigt zu werden, wenn Texttracks zum Element hinzugefügt werden.

Um beispielsweise festzustellen, wann Audiotracks zu oder von einem `<video>` Element hinzugefügt oder entfernt werden, können Sie einen Code wie diesen verwenden:

```js
const elem = document.querySelector("video");

elem.audioTracks.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTracks.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Dieser Code beobachtet, wann Audiotracks zum Element hinzugefügt oder entfernt werden, und ruft eine hypothetische Funktion in einem Track-Editor auf, um den Track in der Liste der verfügbaren Tracks des Editors zu registrieren bzw. zu entfernen.

Sie können auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um den [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event) Ereignissen zu lauschen.

### Serverunterstützung für Video

Wenn der MIME-Typ für das Video auf dem Server nicht richtig eingestellt ist, wird das Video möglicherweise nicht angezeigt oder zeigt ein graues Kästchen mit einem X an (falls JavaScript aktiviert ist).

Wenn Sie den Apache Web Server verwenden, um WebM-Videos zu servieren, können Sie dieses Problem lösen, indem Sie die Dateitypen-Erweiterungen zum `video/webm` MIME-Typ hinzufügen (die häufigste WebM-Dateierweiterung ist `.webm`). Um dies zu tun, bearbeiten Sie die `mime.types` Datei in `/etc/apache` oder verwenden Sie die `AddType` Konfigurationsanweisung in `httpd.conf`:

```plain
AddType video/webm .webm
```

Ihr Webhoster bietet möglicherweise eine einfache Oberfläche für Konfigurationsänderungen der MIME-Typen für neue Technologien, bis ein globales Update natürlich erfolgt.

## Barrierefreiheit

Videos sollten sowohl Captions als auch Transkripte bereitstellen, die ihren Inhalt genau beschreiben (siehe [Hinzufügen von Captions und Untertiteln zu HTML-Video](/de/docs/Web/Media/Leitfäden/Audio_und_Video_Delivery/Hinzufügen_von_Captions_und_Untertiteln_zu_HTML5_Video) für mehr Informationen über die Implementierung davon). Captions ermöglichen es Menschen mit Hörverlust, den Audiocontent eines Videos zu verstehen, während das Video abgespielt wird, während Transkripte Menschen, die mehr Zeit benötigen, es ermöglichen, den Audiocontent in einem angenehmen Tempo und Format zu überprüfen.

Es ist zu beachten, dass während Sie auch Audio-Only-Medien untertiteln können, dies nur möglich ist, wenn Sie Audio in einem `<video>` Element abspielen, da die Videoregion des Elements verwendet wird, um die Untertitel zu präsentieren. Dies ist eines der speziellen Szenarien, in denen es nützlich ist, Audio in einem Videoelement abzuspielen.

Wenn automatische Captioning-Dienste verwendet werden, ist es wichtig, den generierten Inhalt zu überprüfen, um sicherzustellen, dass er die Quelle des Videos genau widerspiegelt.

Zusätzlich zu gesprochenen Dialogen sollten Untertitel und Transkripte auch Musik und Soundeffekte identifizieren, die wichtige Informationen kommunizieren. Dazu gehören Emotionen und Ton:

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

Captions sollten das Hauptmotiv des Videos nicht verdecken. Sie können mit [der `align` VTT-Cue-Einstellung](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format#cue_settings) positioniert werden.

- [Web Video Text Tracks Format (WebVTT)](/de/docs/Web/API/WebVTT_API)
- [WebAIM: Untertitel, Transkripte und Audiobeschreibungen](https://webaim.org/techniques/captions/)
- [MDN Understanding WCAG, Guideline 1.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [Understanding Success Criterion 1.2.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Understanding Success Criterion 1.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Beispiele

### Einzelne Quelle

Dieses Beispiel spielt ein Video ab, wenn es aktiviert wird, und stellt dem Benutzer die Standard-Videokontrollen des Browsers zur Steuerung der Wiedergabe bereit.

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

Bis das Video beginnt zu spielen, wird das im `poster` Attribut angegebene Bild an seiner Stelle angezeigt. Wenn der Browser das Abspielen von Videos nicht unterstützt, wird der Fallback-Text angezeigt.

### Mehrere Quellen

Dieses Beispiel baut auf dem vorherigen auf und bietet drei verschiedene Quellen für das Medium; dies ermöglicht es, das Video unabhängig davon anzusehen, welche Video-Codecs vom Browser unterstützt werden.

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

Zuerst wird AVI versucht. Wenn das nicht abgespielt werden kann, wird [MP4](/de/docs/Web/Media/Leitfäden/Formats/Containers#mpeg-4_mp4) versucht. Eine Fallback-Mitteilung wird angezeigt, wenn das Videoelement nicht unterstützt wird, jedoch nicht, wenn alle Quellen fehlschlagen.

Einige Mediadateitypen ermöglichen es, spezifischere Informationen zu liefern, indem der [`codec`](/de/docs/Web/Media/Leitfäden/Formats/codecs_parameter) Parameter als Teil des Dateityp-Strings verwendet wird. Ein relativ einfaches Beispiel ist `video/webm; codecs="vp8, vorbis"`, was besagt, dass die Datei ein [WebM](/de/docs/Web/Media/Leitfäden/Formats/Containers#webm) Video ist, das [VP8](/de/docs/Web/Media/Leitfäden/Formats/Video_codecs#vp8) für das Video und [Vorbis](/de/docs/Web/Media/Leitfäden/Formats/Audio_codecs#vorbis) für das Audio verwendet.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Content-Kategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>, Satzinhalt, eingebetteter Inhalt. Wenn es ein <a href="#controls"><code>controls</code></a> Attribut hat: interaktiver Inhalt und spürbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <p>
          Wenn das Element ein <a href="#src"><code>src</code></a>
          Attribut hat: Null oder mehr {{HTMLElement("track")}} Elemente, gefolgt von transparentem Inhalt, der keine Medienelemente enthält–d.h. keine {{HTMLElement("audio")}} oder <code>&lt;video&gt;</code>.
        </p>
        <p>
          Andernfalls: Null oder mehr {{HTMLElement("source")}} Elemente, gefolgt von Null oder mehr {{HTMLElement("track")}} Elementen, gefolgt von transparentem Inhalt, der keine Medienelemente enthält–d.h. keine {{HTMLElement("audio")}} oder <code>&lt;video&gt;</code>.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl öffnende als auch schließende Tags sind verpflichtend.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
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

- [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Leitfäden/Formats)

  - [Mediencontainer-Formate (Dateitypen)](/de/docs/Web/Media/Leitfäden/Formats/Containers)
  - [Leitfaden zu Web-Videocodecs](/de/docs/Web/Media/Leitfäden/Formats/Video_codecs)
  - [Leitfaden zu Web-Audiocodecs](/de/docs/Web/Media/Leitfäden/Formats/Audio_codecs)

- Positionierung und Größenanpassung des Bildes innerhalb des Rahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
- {{htmlelement("audio")}}
- [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Manipulieren von Videos mit Canvas](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [Serverkonfigurationen für Ogg-Medien](/de/docs/Web/Media/Leitfäden/Formats/Configuring_servers_for_Ogg_media)
