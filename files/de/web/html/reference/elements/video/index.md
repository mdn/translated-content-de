---
title: "`<video>`: Das Video-Einbettungselement"
slug: Web/HTML/Reference/Elements/video
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTMLSidebar}}

Das **`<video>`**-Element [HTML](/de/docs/Web/HTML) bettet einen Mediaplayer ein, der die Videowiedergabe im Dokument unterstützt. Sie können `<video>` auch für Audioinhalte verwenden, jedoch bietet das {{HTMLElement("audio")}}-Element möglicherweise ein angemesseneres Benutzererlebnis.

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

Das obige Beispiel zeigt, wie das `<video>`-Element verwendet wird. Ähnlich wie beim {{htmlelement("img")}}-Element fügen wir einen Pfad zu dem Medium ein, das wir im `src`-Attribut anzeigen möchten. Wir können andere Attribute einfügen, um Informationen wie Videobreite und -höhe anzugeben, ob wir möchten, dass es automatisch abgespielt und wiederholt wird oder ob die Standard-Videosteuerungen des Browsers angezeigt werden sollen, und so weiter.

Der Inhalt zwischen den öffnenden und schließenden `<video></video>`-Tags wird als Fallback in Browsern angezeigt, die das Element nicht unterstützen.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `autoplay`

  - : Ein Boolean-Attribut; wenn angegeben, beginnt das Video automatisch, so schnell es kann, ohne anzuhalten, um das Laden der Daten abzuschließen, mit der Wiedergabe.

    > [!NOTE]
    > Moderne Browser blockieren Audio (oder Videos mit einem nicht stumm geschalteten Audiotrack) vom automatischen Abspielen, da Websites, die automatisch Audio abspielen, eine unangenehme Erfahrung für Benutzer darstellen können. Weitere Informationen zur ordnungsgemäßen Verwendung von Autoplay finden Sie in unserem [Autoplay-Leitfaden](/de/docs/Web/Media/Guides/Autoplay).

    Um die automatische Videowiedergabe zu deaktivieren, funktioniert `autoplay="false"` nicht; das Video wird automatisch abgespielt, wenn das Attribut überhaupt im `<video>`-Tag vorhanden ist. Um Autoplay zu entfernen, muss das Attribut komplett entfernt werden.

- `controls`
  - : Wenn dieses Attribut vorhanden ist, bietet der Browser Steuerelemente an, die es dem Benutzer ermöglichen, die Videowiedergabe zu steuern, einschließlich Lautstärke, Suche und Pause/Wiedergabe der Wiedergabe.
- `controlslist`

  - : Das [`controlslist`](https://wicg.github.io/controls-list/explainer.html)-Attribut hilft bei der Angabe, welche Steuerelemente dem Benutzer für das `video`-Element angezeigt werden sollen, wenn der Browser den eigenen Satz von Steuerelementen anzeigt (d.h. wenn das `controls`-Attribut angegeben ist).

    Erlaubte Werte sind `nodownload`, `nofullscreen` und `noremoteplayback`.

    Verwenden Sie das [`disablepictureinpicture`](#disablepictureinpicture)-Attribut, wenn Sie den Picture-In-Picture-Modus (und die Steuerung) deaktivieren möchten.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)

  - : Dieses {{Glossary("Enumerated", "aufzählbare")}} Attribut gibt an, ob CORS verwendet werden soll, um das zugehörige Video abzurufen. [CORS-fähige Ressourcen](/de/docs/Web/HTML/How_to/CORS_enabled_image) können im {{HTMLElement("canvas")}}-Element ohne _Verunreinigung_ wiederverwendet werden. Die erlaubten Werte sind:

    - `anonymous`
      - : Sendet eine Cross-Origin-Anfrage ohne Anmeldeinformationen. Mit anderen Worten, es sendet den `Origin:` HTTP-Header ohne Cookie, X.509-Zertifikat oder Durchführung einer HTTP-Basic-Authentifizierung. Wenn der Server keine Anmeldeinformationen für die Ursprungsseite bereitstellt (indem der `Access-Control-Allow-Origin:` HTTP-Header nicht gesetzt wird), wird die Ressource als _verunreinigt_ betrachtet und ihre Verwendung eingeschränkt.
    - `use-credentials`
      - : Sendet eine Cross-Origin-Anfrage mit Anmeldeinformationen. Mit anderen Worten, es sendet den `Origin:` HTTP-Header mit einem Cookie, einem Zertifikat oder führt eine HTTP-Basic-Authentifizierung durch. Wenn der Server der Ursprungsseite keine Anmeldeinformationen bereitstellt (durch den `Access-Control-Allow-Credentials:` HTTP-Header), wird die Ressource als _verunreinigt_ betrachtet und ihre Verwendung eingeschränkt.

    Wenn nicht vorhanden, wird die Ressource ohne CORS-Anfrage abgerufen (d.h. ohne den `Origin:` HTTP-Header zu senden), was ihre unverunreinigte Verwendung in {{HTMLElement('canvas')}}-Elementen verhindert. Ist sie ungültig, wird sie behandelt, als wäre das aufgezählte Schlüsselwort `anonymous` verwendet worden. Weitere Informationen finden Sie in den [CORS-Einstellungsattributen](/de/docs/Web/HTML/Reference/Attributes/crossorigin).

- `disablepictureinpicture`
  - : Verhindert, dass der Browser ein Picture-in-Picture-Kontextmenü vorschlägt oder in manchen Fällen automatisch Picture-in-Picture anfordert.
- `disableremoteplayback`

  - : Ein Boolean-Attribut, das die Möglichkeit der Fernwiedergabe in Geräten deaktiviert, die über kabelgebundene (HDMI, DVI usw.) und kabellose Technologien (Miracast, Chromecast, DLNA, AirPlay usw.) angeschlossen sind.

    In Safari können Sie `x-webkit-airplay="deny"` als Fallback verwenden.

- `height`
  - : Die Höhe des Anzeigebereichs des Videos, in [CSS-Pixel] (https://drafts.csswg.org/css-values/#px) (nur absolute Werte; [keine Prozentsätze](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).
- `loop`
  - : Ein Boolean-Attribut; wenn angegeben, wird der Browser automatisch zum Anfang zurückgespult, wenn das Ende des Videos erreicht ist.
- `muted`
  - : Ein Boolean-Attribut, das die Standardlautstärke des im Video enthaltenen Sounds angibt. Wenn gesetzt, wird der Ton zunächst stummgeschaltet. Der Standardwert ist `false`, was bedeutet, dass der Ton abgespielt wird, wenn das Video abgespielt wird.
- `playsinline`
  - : Ein Boolean-Attribut, das angibt, dass das Video "inline" abgespielt wird, also innerhalb des Wiedergabebereichs des Elements. Beachten Sie, dass das Fehlen dieses Attributs _nicht_ impliziert, dass das Video immer im Vollbildmodus abgespielt wird.
- `poster`
  - : Eine URL für ein Bild, das angezeigt wird, während das Video heruntergeladen wird. Wenn dieses Attribut nicht angegeben ist, wird nichts angezeigt, bis der erste Frame verfügbar ist, dann wird der erste Frame als Posterframe angezeigt.
- `preload`

  - : Dieses {{Glossary("enumerated", "aufzählbare")}} Attribut soll dem Browser einen Hinweis darauf geben, was der Autor für die beste Benutzererfahrung hält, in Bezug darauf, welche Inhalte vor dem Abspielen des Videos geladen werden sollten. Es kann einen der folgenden Werte haben:

    - `none`: Gibt an, dass das Video nicht vorab geladen werden soll.
    - `metadata`: Gibt an, dass nur Videometadaten (z.B. Länge) abgerufen werden sollen.
    - `auto`: Gibt an, dass die gesamte Videodatei heruntergeladen werden kann, auch wenn nicht erwartet wird, dass sie vom Benutzer verwendet wird.
    - _leerer String_: Ein Synonym für den `auto`-Wert.

    Der Standardwert ist in jedem Browser unterschiedlich. Die Spezifikation empfiehlt, ihn auf `metadata` zu setzen.

    > [!NOTE]
    >
    > - Das `autoplay`-Attribut hat Vorrang vor `preload`. Wenn `autoplay` angegeben ist, muss der Browser offensichtlich mit dem Herunterladen des Videos für die Wiedergabe beginnen.
    > - Die Spezifikation zwingt den Browser nicht, den Wert dieses Attributs zu befolgen; es ist lediglich ein Hinweis.

- `src`
  - : Die URL des einzubettenden Videos. Dies ist optional; Sie können stattdessen das {{HTMLElement("source")}}-Element innerhalb des Videoblocks verwenden, um das einzubettende Video anzugeben.
- `width`
  - : Die Breite des Anzeigebereichs des Videos, in [CSS-Pixel] (https://drafts.csswg.org/css-values/#px) (nur absolute Werte; [keine Prozentsätze](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).

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
        Der Eingabepuffer eines [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) ist zur Verarbeitung bereit.
      </td>
    </tr>
    <tr>
      <td>
        [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)
      </td>
      <td>
        Der Browser kann das Medium abspielen, schätzt aber, dass nicht genügend Daten geladen wurden, um das Medium bis zum Ende ohne zusätzliche Pufferung abzuspielen.
      </td>
    </tr>
    <tr>
      <td>
        [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
      </td>
      <td>
        Der Browser schätzt, dass er das Medium bis zum Ende abspielen kann, ohne für das Puffern von Inhalten anzuhalten.
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
      <td>Das <code>duration</code>-Attribut wurde aktualisiert.</td>
    </tr>
    <tr>
      <td>
        [`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)
      </td>
      <td>
        Das Medium wurde leer; zum Beispiel wird dieses Ereignis gesendet, wenn das Medium bereits geladen (oder teilweise geladen) ist und die <a href="/de/docs/Web/API/HTMLMediaElement/load" rel="internal"><code>load()</code></a>-Methode aufgerufen wird, um es neu zu laden.
      </td>
    </tr>
    <tr>
      <td>
        [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)
      </td>
      <td>Die Wiedergabe wurde beendet, da das Ende des Mediums erreicht wurde.</td>
    </tr>
    <tr>
      <td>
        [`error`](/de/docs/Web/API/HTMLMediaElement/error_event)
      </td>
      <td>
        Ein Fehler trat auf, während die Mediendaten abgerufen wurden, oder der Typ der Ressource ist kein unterstütztes Medienformat.
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
        Die Wiedergabe ist bereit zu starten, nachdem sie angehalten oder aufgrund von Datenmangel verzögert wurde.
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
      <td>Eine <em>Suchoperation</em> wurde abgeschlossen.</td>
    </tr>
    <tr>
      <td>
        [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
      </td>
      <td>Eine <em>Suchoperation</em> begann.</td>
    </tr>
    <tr>
      <td>
        [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
      </td>
      <td>
        Der Benutzeragent versucht, Medien-Daten abzurufen, aber diese sind unerwartet nicht verfügbar.
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
      <td>Die Wiedergabe wurde aufgrund eines vorübergehenden Mangels an Daten gestoppt.</td>
    </tr>
  </tbody>
</table>

## Nutzungshinweise

Browser unterstützen nicht alle dieselben Videoformate; Sie können mehrere Quellen innerhalb verschachtelter {{htmlelement("source")}}-Elemente bereitstellen, und der Browser wird dann die erste verwenden, die er versteht.

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

Beim Verwenden von {{htmlelement("source")}}-Elementen versucht der Browser, jede Quelle nacheinander zu laden. Wenn eine Quelle fehlschlägt (z. B. aufgrund einer ungültigen URL oder eines nicht unterstützten Formats), wird die nächste Quelle versucht und so weiter. Ein `error`-Ereignis wird am `<video>`-Element ausgelöst, nachdem alle Quellen fehlgeschlagen sind; `error`-Ereignisse werden nicht bei jedem einzelnen `<source>`-Element ausgelöst.

Wir bieten einen substanziellen und umfassenden [Leitfaden zu Mediendateitypen](/de/docs/Web/Media/Guides/Formats) und den [Leitfaden zu den Codecs, die für Video unterstützt werden](/de/docs/Web/Media/Guides/Formats/Video_codecs). Zusätzlich steht ein Leitfaden zu [den Audiocodecs zur Verfügung, die damit verwendet werden können](/de/docs/Web/Media/Guides/Formats/Audio_codecs).

Weitere Nutzungshinweise:

- Wenn Sie das `controls`-Attribut nicht angeben, enthält das Video nicht die Standardkontrollen des Browsers; Sie können Ihre eigenen benutzerdefinierten Steuerelemente mithilfe von JavaScript und der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API erstellen. Weitere Details finden Sie unter [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).
- Um eine präzise Kontrolle über Ihre Video- (und Audio-)Inhalte zu ermöglichen, lösen `HTMLMediaElement`s viele verschiedene [Ereignisse](/de/docs/Web/API/HTMLMediaElement#events) aus. Zusätzlich zur Bereitstellung von Kontrollierbarkeit ermöglichen Ihnen diese Ereignisse, den Fortschritt sowohl des Downloads als auch der Wiedergabe des Mediums sowie den Wiedergabe-Status und die Position zu überwachen.
- Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um die Positionierung des Videos innerhalb des Rahmens des Elements anzupassen, und die {{cssxref("object-fit")}}-Eigenschaft, um zu steuern, wie die Größe des Videos an den Rahmen angepasst wird.
- Um Untertitel/Untertitel zusammen mit Ihrem Video anzuzeigen, können Sie JavaScript zusammen mit dem {{htmlelement("track")}}-Element und dem [WebVTT](/de/docs/Web/API/WebVTT_API)-Format verwenden. Weitere Informationen finden Sie unter [Hinzufügen von Untertiteln und Untertiteln zum HTML-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video).
- Sie können Audiodateien mit einem `<video>`-Element abspielen. Dies kann nützlich sein, wenn Sie beispielsweise Audio mit einem [WebVTT](/de/docs/Web/API/WebVTT_API)-Transkript ausführen müssen, da das {{HTMLElement("audio")}}-Element keine Beschriftungen mit WebVTT erlaubt.
- Um den Fallback-Inhalt in Browsern zu testen, die das Element unterstützen, können Sie `<video>` durch ein nicht existierendes Element wie `<notavideo>` ersetzen.

Eine gute allgemeine Informationsquelle zur Verwendung von HTML `<video>` ist das [HTML-Video- und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) Einsteiger-Tutorial.

### Stilgestaltung mit CSS

Das `<video>`-Element ist ein ersetztes Element - sein {{cssxref("display")}}-Wert ist standardmäßig `inline` - aber seine Standardbreite und -höhe im Anzeigebereich wird durch das eingebettete Video definiert.

Es gibt keine besonderen Überlegungen zur Stilgestaltung von `<video>`; eine übliche Strategie besteht darin, ihm einen `display`-Wert von `block` zu geben, um es einfacher zu positionieren, zu dimensionieren usw., und dann die erforderlichen Stil- und Layoutinformationen bereitzustellen. [Grundlagen der Videoplayer-Stilgestaltung](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics) bieten einige nützliche Stiltechniken.

### Hinzufügen von Untertiteln und anderen zeitgesteuerten Textspuren

Zeitgesteuerte Textspuren für Untertitel, geschlossene Bildunterschriften, Kapitelüberschriften und so weiter können deklarativ hinzugefügt werden, indem das {{HTMLElement("track")}}-Element verschachtelt wird.
Die Tracks werden im [Web Video Text Tracks File Format (WebVTT)](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) (`.vtt` Dateien) spezifiziert.

Zum Beispiel enthält das untenstehende HTML die Datei "captions.vtt", die verwendet wird, um Untertitel auf dem Video zu überlagern, wenn Untertitel vom Benutzer aktiviert werden.

```html
<video controls src="video.webm">
  <track default kind="captions" src="captions.vtt" />
</video>
```

Zeitgesteuerte Textspuren können auch programmatisch mit der [WebVTT API](/de/docs/Web/API/WebVTT_API) hinzugefügt werden.

### Erkennung der Hinzufügung und Entfernung von Tracks

Sie können erkennen, wann Tracks zu einem `<video>`-Element hinzugefügt oder von diesem entfernt werden, indem Sie die [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event)- und [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event)-Ereignisse verwenden. Diese Ereignisse werden jedoch nicht direkt an das `<video>`-Element selbst gesendet. Stattdessen werden sie an das Track-Listen-Objekt innerhalb des `<video>`-Elements gesendet, das dem Typ des hinzugefügten Tracks entspricht:

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die alle Audio-Tracks des Medienelements enthält.
    Fügen Sie diesem Objekt einen Listener für `addtrack` hinzu, um benachrichtigt zu werden, wenn neue Audio-Tracks zum Element hinzugefügt werden.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)
  - : Eine [`VideoTrackList`](/de/docs/Web/API/VideoTrackList), die alle Video-Tracks des Medienelements enthält.
    Fügen Sie diesem Objekt einen `addtrack`-Listener hinzu, um benachrichtigt zu werden, wenn Video-Tracks zum Element hinzugefügt werden.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
  - : Eine [`TextTrackList`](/de/docs/Web/API/TextTrackList), die alle Text-Tracks des Medienelements enthält (die für Untertitel, geschlossene Bildunterschriften usw. verwendet werden).
    Fügen Sie diesem Objekt einen `addtrack`-Listener hinzu, um benachrichtigt zu werden, wenn Text-Tracks zum Element hinzugefügt werden.

Um beispielsweise zu erkennen, wann Audio-Tracks zu einem `<video>`-Element hinzugefügt oder von diesem entfernt werden, können Sie einen Code wie diesen verwenden:

```js
const elem = document.querySelector("video");

elem.audioTracks.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTracks.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Dieser Code beobachtet, wann Audio-Tracks zum Element hinzugefügt oder von diesem entfernt werden, und ruft eine hypothetische Funktion in einem Track-Editor auf, um den Track in der Liste der verfügbaren Tracks des Editors zu registrieren und zu entfernen.

Sie können auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um die [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event)- und [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event)-Ereignisse zu überwachen.

### Serverunterstützung für Video

Wenn der MIME-Typ für das Video auf dem Server nicht korrekt gesetzt ist, wird das Video möglicherweise nicht angezeigt oder es wird ein graues Kästchen mit einem X angezeigt (wenn JavaScript aktiviert ist).

Wenn Sie Apache Webserver verwenden, um WebM-Videos bereitzustellen, können Sie dieses Problem beheben, indem Sie die Dateityp-Erweiterungen des Videos dem `video/webm`-MIME-Typ hinzufügen (die häufigste WebM-Dateierweiterung ist `.webm`). Um dies zu tun, bearbeiten Sie die `mime.types`-Datei in `/etc/apache` oder verwenden Sie die `AddType`-Konfigurationsrichtlinie in `httpd.conf`:

```plain
AddType video/webm .webm
```

Ihr Webhost kann eine einfache Schnittstelle für MIME-Typ-Konfigurationsänderungen für neue Technologien bereitstellen, bis ein globales Update natürlich erfolgt.

## Barrierefreiheit

Videos sollten sowohl Untertitel als auch Transkripte bereitstellen, die ihren Inhalt genau beschreiben (siehe [Hinzufügen von Untertiteln und Untertiteln zum HTML-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) für weitere Informationen zur Implementierung dieser). Untertitel ermöglichen es Menschen mit Hörverlust, den Audioinhalt eines Videos während der Wiedergabe zu verstehen, während Transkripte es Menschen ermöglichen, die zusätzliche Zeit benötigen, den Audioinhalt in einem Tempo und Format zu überprüfen, das für sie angenehm ist.

Es ist erwähnenswert, dass Sie zwar Audio-Only-Medien untertiteln können, dies jedoch nur tun können, wenn Sie Audio in einem `<video>`-Element abspielen, da die Videoregion des Elements zur Anzeige der Untertitel verwendet wird. Dies ist eines der speziellen Szenarien, in denen es nützlich ist, Audio in einem Videoelement abzuspielen.

Wenn automatische Untertitelungsdienste verwendet werden, ist es wichtig, den generierten Inhalt zu überprüfen, um sicherzustellen, dass er die Quellvideo genau darstellt.

Neben gesprochenem Dialog sollten Untertitel und Transkripte auch Musik und Soundeffekte identifizieren, die wichtige Informationen kommunizieren. Dies schließt Emotionen und Ton ein:

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

Untertitel sollten das Hauptmotiv des Videos nicht verdecken. Sie können mit [der `align`-VTT-cue-Einstellung](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format#cue_settings) positioniert werden.

- [Web Video Text Tracks Format (WebVTT)](/de/docs/Web/API/WebVTT_API)
- [WebAIM: Captions, Transcripts, and Audio Descriptions](https://webaim.org/techniques/captions/)
- [MDN Understanding WCAG, Guideline 1.2 explanations](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [Understanding Success Criterion 1.2.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Understanding Success Criterion 1.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Beispiele

### Einzelne Quelle

Dieses Beispiel spielt ein Video ab, wenn es aktiviert wird, und bietet dem Benutzer die Standard-Videosteuerungen des Browsers an, um die Wiedergabe zu steuern.

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

Bis das Video zu spielen beginnt, wird das im `poster`-Attribut bereitgestellte Bild an seiner Stelle angezeigt. Wenn der Browser die Videowiedergabe nicht unterstützt, zeigt er den Fallback-Text an.

### Mehrere Quellen

Dieses Beispiel baut auf dem letzten auf und bietet drei verschiedene Quellen für das Medium an; so kann das Video unabhängig davon angesehen werden, welche Video-Codecs vom Browser unterstützt werden.

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

Zuerst wird AVI ausprobiert. Wenn das nicht abgespielt werden kann, wird [MP4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4) versucht. Eine Fallback-Nachricht wird angezeigt, wenn das Videoelement nicht unterstützt wird, jedoch nicht, wenn alle Quellen fehlschlagen.

Einige Medien-Dateitypen erlauben es, spezifischere Informationen mit dem [`codecs`](/de/docs/Web/Media/Guides/Formats/codecs_parameter)-Anzeigeparameter in der Typzeichenfolge der Datei bereitzustellen. Zum Beispiel gibt `video/webm; codecs="vp8, vorbis"` an, dass die Datei ein [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm)-Video ist, das für Video [VP8](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp8) und für Audio [Vorbis](/de/docs/Web/Media/Guides/Formats/Audio_codecs#vorbis) verwendet.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flow content</a>, phraseninhalt, eingebetteter Inhalt. Wenn es ein <a href="#controls"><code>controls</code></a>-Attribut hat: interaktiver Inhalt und fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <p>
          Wenn das Element ein <a href="#src"><code>src</code></a>-Attribut hat: null oder mehr {{HTMLElement("track")}}-Elemente, gefolgt von transparentem Inhalt, der keine Medienelemente enthält–also keine {{HTMLElement("audio")}} oder `<video>`.
        </p>
        <p>
          Andernfalls: null oder mehr {{HTMLElement("source")}}-Elemente, gefolgt von null oder mehr {{HTMLElement("track")}}-Elementen, gefolgt von transparentem Inhalt, der keine Medienelemente enthält–also keine {{HTMLElement("audio")}} oder `<video>`.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
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

- Positionieren und Anpassen der Größe des Bildes innerhalb seines Rahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
- {{htmlelement("audio")}}
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Manipulieren von Videos mit Canvas](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [Konfigurieren von Servern für Ogg-Medien](/de/docs/Web/Media/Guides/Formats/Configuring_servers_for_Ogg_media)
