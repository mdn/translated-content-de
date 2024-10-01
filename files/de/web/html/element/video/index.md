---
title: "<video>: Das Video-Einbettungselement"
slug: Web/HTML/Element/video
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}

Das **`<video>`** [HTML](/de/docs/Web/HTML) Element bettet einen Mediaplayer, der Videowiedergabe unterstützt, in das Dokument ein. Sie können `<video>` auch für Audioinhalte verwenden, aber das {{HTMLElement("audio")}} Element könnte ein geeigneteres Benutzererlebnis bieten.

{{EmbedInteractiveExample("pages/tabbed/video.html", "tabbed-standard")}}

Das obige Beispiel zeigt die einfache Verwendung des `<video>` Elements. Ähnlich wie beim {{htmlelement("img")}} Element fügen wir den Pfad zu dem Medium, das wir anzeigen möchten, im `src` Attribut ein; wir können weitere Attribute hinzufügen, um Informationen wie Video-Breite und -Höhe, ob es automatisch abgespielt und geloopt werden soll oder ob die standardmäßigen Videosteuerungen des Browsers angezeigt werden sollen, usw. anzugeben.

Der Inhalt zwischen den öffnenden und schließenden `<video></video>` Tags wird als Fallback in Browsern angezeigt, die das Element nicht unterstützen.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `autoplay`

  - : Ein Boolean-Attribut; wenn angegeben, startet das Video automatisch mit der Wiedergabe, sobald es kann, ohne anzuhalten, um das Laden der Daten abzuschließen.

    > [!NOTE]
    > Moderne Browser blockieren die automatische Wiedergabe von Audio (oder Videos mit ungemuteten Audiospuren), da Websites, die automatisch Audio abspielen, für Benutzer ein unangenehmes Erlebnis sein können. Siehe unseren [Leitfaden zur automatischen Wiedergabe (Autoplay)](/de/docs/Web/Media/Autoplay_guide) für zusätzliche Informationen, wie man Autoplay richtig verwendet.

    Um die automatische Wiedergabe von Videos zu deaktivieren, funktioniert `autoplay="false"` nicht; das Video wird automatisch abgespielt, wenn das Attribut im `<video>` Tag vorhanden ist. Um die automatische Wiedergabe zu entfernen, muss das Attribut vollständig entfernt werden.

- `controls`
  - : Wenn dieses Attribut vorhanden ist, bietet der Browser Steuerelemente an, mit denen der Benutzer die Videowiedergabe steuern kann, einschließlich Lautstärke, Suche und Pause/Wiederaufnahme der Wiedergabe.
- `controlslist`

  - : Das [`controlslist`](https://wicg.github.io/controls-list/explainer.html) Attribut, wenn angegeben, hilft dem Browser auszuwählen, welche Steuerelemente für das `video` Element angezeigt werden sollen, wann immer der Browser seine eigenen Steuerelemente anzeigt (das ist der Fall, wenn das `controls` Attribut angegeben ist).

    Die erlaubten Werte sind `nodownload`, `nofullscreen` und `noremoteplayback`.

    Verwenden Sie das [`disablepictureinpicture`](#disablepictureinpicture) Attribut, wenn Sie den Bild-in-Bild-Modus (und die Steuerung) deaktivieren möchten.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Dieses {{Glossary("Enumerated", "Enumerations-")}} Attribut gibt an, ob CORS verwendet werden soll, um das betreffende Video abzurufen. [CORS-fähige Ressourcen](/de/docs/Web/HTML/CORS_enabled_image) können im {{HTMLElement("canvas")}} Element wiederverwendet werden, ohne "verunreinigt" zu werden. Die erlaubten Werte sind:

    - `anonymous`
      - : Sendet eine Cross-Origin-Anfrage ohne Anmeldeinformationen. Mit anderen Worten, es sendet den `Origin:` HTTP-Header ohne ein Cookie, X.509-Zertifikat oder Durchführung einer HTTP-Basic-Authentifizierung. Wenn der Server keine Anmeldeinformationen an die Ursprungsseite gibt (indem er den `Access-Control-Allow-Origin:` HTTP-Header nicht setzt), wird die Ressource "verunreinigt" und ihre Verwendung eingeschränkt.
    - `use-credentials`
      - : Sendet eine Cross-Origin-Anfrage mit Anmeldeinformationen. Mit anderen Worten, es sendet den `Origin:` HTTP-Header mit einem Cookie, einem Zertifikat oder Durchführung einer HTTP-Basic-Authentifizierung. Wenn der Server keine Anmeldeinformationen an die Ursprungsseite gibt (durch den `Access-Control-Allow-Credentials:` HTTP-Header), wird die Ressource "verunreinigt" und ihre Verwendung eingeschränkt.

    Wenn nicht vorhanden, wird die Ressource ohne CORS-Anfrage abgefragt (d. h. ohne den `Origin:` HTTP-Header zu senden), wodurch ihre ungetäuschte Verwendung in {{HTMLElement('canvas')}} Elementen verhindert wird. Wenn ungültig, wird es behandelt, als ob das enumerierte Schlüsselwort `anonymous` verwendet wurde. Weitere Informationen finden Sie unter [CORS-Einstellungen](/de/docs/Web/HTML/Attributes/crossorigin).

- `disablepictureinpicture`
  - : Verhindert, dass der Browser ein Bild-in-Bild-Kontextmenü vorschlägt oder unter bestimmten Umständen Bild-in-Bild automatisch anfordert.
- `disableremoteplayback`

  - : Ein Boolean-Attribut, das die Möglichkeit zur Fernwiedergabe auf Geräten deaktiviert, die über kabelgebundene (HDMI, DVI etc.) und drahtlose Technologien (Miracast, Chromecast, DLNA, AirPlay etc.) angeschlossen sind.

    In Safari können Sie [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) als Fallback verwenden.

- `height`
  - : Die Höhe des Anzeigebereichs des Videos in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px) (nur absolute Werte; [keine Prozentsätze](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).
- `loop`
  - : Ein Boolean-Attribut; wenn angegeben, sucht der Browser automatisch zum Start zurück, sobald das Ende des Videos erreicht ist.
- `muted`
  - : Ein Boolean-Attribut, das die Standardeinstellung zum Stummschalten des Audios im Video angibt. Wenn gesetzt, wird das Audio zunächst stummgeschaltet sein. Sein Standardwert ist `false`, was bedeutet, dass das Audio abgespielt wird, wenn das Video abgespielt wird.
- `playsinline`
  - : Ein Boolean-Attribut, das angibt, dass das Video "inline" abgespielt werden soll, das heißt, innerhalb des Wiedergabebereichs des Elements. Beachten Sie, dass das Fehlen dieses Attributs _nicht_ impliziert, dass das Video immer im Vollbildmodus wiedergegeben wird.
- `poster`
  - : Eine URL für ein Bild, das während des Herunterladens des Videos angezeigt wird. Wenn dieses Attribut nicht angegeben ist, wird nichts angezeigt, bis der erste Frame verfügbar ist, dann wird der erste Frame als Posterbild angezeigt.
- `preload`

  - : Dieses {{Glossary("enumerated", "Enumerations-")}} Attribut soll dem Browser einen Hinweis geben, was der Autor für die beste Benutzererfahrung hält, was den Inhalt betrifft, der vor dem Abspielen des Videos geladen wird. Es kann einen der folgenden Werte haben:

    - `none`: Zeigt an, dass das Video nicht vorab geladen werden soll.
    - `metadata`: Gibt an, dass nur die Videometadaten (z. B. Länge) abgerufen werden.
    - `auto`: Zeigt an, dass die gesamte Videodatei heruntergeladen werden kann, auch wenn der Benutzer nicht erwartet wird, sie zu verwenden.
    - _leerer String_: Ein Synonym für den Wert `auto`.

    Der Standardwert ist bei jedem Browser unterschiedlich. Die Spezifikation rät dazu, es auf `metadata` zu setzen.

    > [!NOTE]
    >
    > - Das `autoplay` Attribut hat Vorrang vor `preload`. Wenn `autoplay` angegeben ist, müsste der Browser offensichtlich beginnen, das Video zum Abspielen herunterzuladen.
    > - Die Spezifikation zwingt den Browser nicht dazu, den Wert dieses Attributs zu befolgen; es ist lediglich ein Hinweis.

- `src`
  - : Die URL des einzubettenden Videos. Dies ist optional; Sie können stattdessen das {{HTMLElement("source")}} Element innerhalb des Videoblocks verwenden, um das einzubettende Video anzugeben.
- `width`
  - : Die Breite des Anzeigebereichs des Videos in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px) (nur absolute Werte; [keine Prozentsätze](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).

## Ereignisse

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Ereignisname</th>
      <th scope="col">Ausgelöst, wenn</th>
    </tr>
  </thead>
  <tbody>
    <!-- ...tabelle fortsetzen, keine Übersetzung benötigt... -->
  </tbody>
</table>

## Nutzungshinweise

Browser unterstützen nicht alle dieselben Videoformate; Sie können mehrere Quellen innerhalb verschachtelter {{htmlelement("source")}} Elemente angeben, und der Browser wird dann das erste verwenden, das er versteht.

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

Wir bieten einen umfassenden und ausführlichen [Leitfaden zu Medien-Dateitypen](/de/docs/Web/Media/Formats) und den [Leitfaden zu den unterstützten Codecs für Videos](/de/docs/Web/Media/Formats/Video_codecs). Zusätzlich ist ein Leitfaden zu [Audio-Codecs, die mit diesen verwendet werden können](/de/docs/Web/Media/Formats/Audio_codecs), verfügbar.

Weitere Nutzungshinweise:

- Wenn Sie das `controls` Attribut nicht angeben, enthält das Video nicht die standardmäßigen Steuerungen des Browsers; Sie können Ihre eigenen benutzerdefinierten Steuerungen mit JavaScript und der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API erstellen. Siehe [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player) für weitere Details.
- Um präzise Kontrolle über Ihre Video- (und Audio-)Inhalte zu ermöglichen, lösen `HTMLMediaElement`s viele verschiedene [Ereignisse](/de/docs/Web/API/HTMLMediaElement#events) aus. Neben der Steuerbarkeit können Sie mit diesen Ereignissen den Fortschritt sowohl des Downloads als auch der Wiedergabe der Medien sowie den Wiedergabestatus und die Position überwachen.
- Sie können die {{cssxref("object-position")}} Eigenschaft verwenden, um die Positionierung des Videos innerhalb des Rahmens des Elements anzupassen, und die {{cssxref("object-fit")}} Eigenschaft, um zu steuern, wie die Größe des Videos an den Rahmen angepasst wird.
- Um Untertitel zusammen mit Ihrem Video anzuzeigen, können Sie JavaScript zusammen mit dem {{htmlelement("track")}} Element und dem [WebVTT](/de/docs/Web/API/WebVTT_API) Format verwenden. Weitere Informationen finden Sie unter [Hinzufügen von Untertiteln und Bildunterschriften zu HTML-Video](/de/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video).
- Sie können Audiodateien mit einem `<video>` Element abspielen. Dies kann nützlich sein, wenn Sie beispielsweise ein Audio mit einem [WebVTT](/de/docs/Web/API/WebVTT_API) Transkript ausführen müssen, da das {{HTMLElement("audio")}} Element keine Untertitel mit WebVTT erlaubt.
- Um den Fallback-Inhalt auf Browsern zu testen, die das Element unterstützen, können Sie `<video>` durch ein nicht existierendes Element wie `<notavideo>` ersetzen.

Eine gute allgemeine Informationsquelle zur Verwendung von HTML `<video>` ist das [Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) Anfänger-Tutorial.

### Styling mit CSS

Das `<video>` Element ist ein ersetztes Element — sein {{cssxref("display")}} Wert ist standardmäßig `inline` — jedoch wird seine Standardbreite und -höhe im Ansichtsfenster durch das eingebettete Video definiert.

Es gibt keine besonderen Überlegungen zum Styling von `<video>`; eine gängige Strategie besteht darin, ihm einen `display` Wert von `block` zu geben, um es einfacher zu positionieren und zu größen, usw., und dann die erforderlichen Styling- und Layoutinformationen bereitzustellen. [Grundlagen der Videoplayer-Styling](/de/docs/Web/Media/Audio_and_video_delivery/Video_player_styling_basics) bietet einige nützliche Styling-Techniken.

### Hinzufügen von Untertiteln und anderen zeitgesteuerten Textspuren

Zeitgesteuerte Textspuren für Untertitel, geschlossene Untertitel, Kapitelüberschriften usw. können deklarativ hinzugefügt werden, indem das {{HTMLElement("track")}} Element verschachtelt wird.
Die Spuren werden im [Web Video Text Tracks File Format (WebVTT)](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) (`.vtt` Dateien) angegeben.

Zum Beispiel enthält der folgende HTML-Code die Datei "captions.vtt", die verwendet wird, um geschlossene Untertitel über das Video zu legen, wenn die Untertitel vom Benutzer aktiviert sind.

```html
<video controls src="video.webm">
  <track default kind="captions" src="captions.vtt" />
</video>
```

Zeitgesteuerte Textspuren können auch programmgesteuert mit der [WebVTT API](/de/docs/Web/API/WebVTT_API) hinzugefügt werden.

### Erkennen von Spur-Hinzufügen und -Entfernen

Sie können erkennen, wann Spuren zu einem `<video>` Element hinzugefügt und von ihm entfernt werden, indem Sie die [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event) Ereignisse verwenden. Diese Ereignisse werden jedoch nicht direkt an das `<video>` Element selbst gesendet. Stattdessen werden sie an das Spur-Listen-Objekt innerhalb des `<video>` Elements gesendet, das dem Typ der hinzugefügten Spur entspricht:

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die alle Audio-Spuren des Medien-Elements enthält.
    Fügen Sie diesem Objekt einen Listener für `addtrack` hinzu, um benachrichtigt zu werden, wenn neue Audiospuren zum Element hinzugefügt werden.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)
  - : Eine [`VideoTrackList`](/de/docs/Web/API/VideoTrackList), die alle Video-Spuren des Medien-Elements enthält.
    Fügen Sie diesem Objekt einen `addtrack` Listener hinzu, um benachrichtigt zu werden, wenn Videospuren zum Element hinzugefügt werden.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
  - : Eine [`TextTrackList`](/de/docs/Web/API/TextTrackList), die alle Textspuren des Medien-Elements enthält (die für Untertitel, geschlossene Untertitel usw. verwendet werden).
    Fügen Sie diesem Objekt einen `addtrack` Listener hinzu, um benachrichtigt zu werden, wenn Textspuren zum Element hinzugefügt werden.

Um beispielsweise zu erkennen, wann Audiospuren zu oder von einem `<video>` Element hinzugefügt werden, können Sie einen Code wie diesen verwenden:

```js
const elem = document.querySelector("video");

elem.audioTracks.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTracks.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Dieser Code beobachtet, wann Audiospuren zum Element hinzugefügt und von ihm entfernt werden, und ruft eine hypothetische Funktion in einem Spur-Editor auf, um die Spur in die Liste der verfügbaren Spuren des Editors zu registrieren oder zu entfernen.

Sie können auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um die [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event) Ereignisse zu überwachen.

### Serverunterstützung für Video

Wenn der MIME-Typ für das Video auf dem Server nicht korrekt eingestellt ist, wird das Video möglicherweise nicht angezeigt oder zeigt ein graues Kästchen mit einem X an (sofern JavaScript aktiviert ist).

Wenn Sie den Apache-Webserver verwenden, um WebM-Videos bereitzustellen, können Sie dieses Problem beheben, indem Sie die Dateityp-Erweiterungen des Videos dem `video/webm` MIME-Typ hinzufügen (die häufigste WebM-Dateierweiterung ist `.webm`). Bearbeiten Sie dazu die `mime.types` Datei in `/etc/apache` oder verwenden Sie die `AddType` Konfigurationsdirektive in `httpd.conf`:

```plain
AddType video/webm .webm
```

Ihr Webhost kann Ihnen eine einfache Oberfläche zur Konfiguration von MIME-Typen für neue Technologien bieten, bis ein globales Update natürlich erfolgt.

## Barrierefreiheit

Videos sollten sowohl Untertitel als auch Transkripte bereitstellen, die ihren Inhalt genau beschreiben (siehe [Hinzufügen von Untertiteln und Bildunterschriften zu HTML-Video](/de/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) für weiterführende Informationen, wie diese Implementiert werden). Untertitel ermöglichen es Menschen mit Hörverlust, den Audioinhalt eines Videos zu verstehen, während das Video abgespielt wird. Transkripte ermöglichen es Menschen, die zusätzliche Zeit benötigen, um Audioinhalte in einem Tempo und Format zu überprüfen, das angenehm für sie ist.

Es ist wichtig zu beachten, dass während Sie Audio-only Medien untertiteln können, dies nur möglich ist, wenn das Audio in einem `<video>` Element abgespielt wird, da der Videobereich des Elements verwendet wird, um die Untertitel anzuzeigen. Dies ist eines der speziellen Szenarien, in denen es nützlich ist, Audio in einem Videoelement abzuspielen.

Wenn automatische Untertitelungsdienste verwendet werden, ist es wichtig, den generierten Inhalt zu überprüfen, um sicherzustellen, dass er das Quellvideo genau repräsentiert.

Zusätzlich zu gesprochenem Dialog sollten Untertitel und Transkripte auch Musik und Soundeffekte beschreiben, die wichtige Informationen kommunizieren. Dazu gehören Emotion und Ton:

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
- [WebAIM: Untertitel, Transkripte und Audiobeschreibungen](https://webaim.org/techniques/captions/)
- [MDN Verständnis von WCAG, Leitlinie 1.2 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [Verständnis des Erfolgskriteriums 1.2.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Verständnis des Erfolgskriteriums 1.2.2 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Beispiele

### Einzelne Quelle

Dieses Beispiel spielt ein Video ab, wenn aktiviert, und stellt dem Benutzer die standardmäßigen Videosteuerungen des Browsers zur Verfügung, um die Wiedergabe zu steuern.

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

Bis das Video zu spielen beginnt, wird das im `poster` Attribut angegebene Bild an seiner Stelle angezeigt. Wenn der Browser die Videowiedergabe nicht unterstützt, wird der Fallback-Text angezeigt.

### Mehrere Quellen

Dieses Beispiel baut auf dem letzten auf und bietet drei verschiedene Quellen für die Medien an; dies ermöglicht das Anschauen des Videos unabhängig davon, welche Videocodecs vom Browser unterstützt werden.

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

Zuerst wird AVI ausprobiert. Wenn das nicht abgespielt werden kann, wird [MP4](/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4) ausprobiert. Eine Fallback-Nachricht wird angezeigt, wenn das Videoelement nicht unterstützt wird, jedoch nicht, wenn alle Quellen fehlschlagen.

Einige Mediadateitypen erlauben es, genauere Informationen mit dem [`codecs`](/de/docs/Web/Media/Formats/codecs_parameter) Parameter als Teil der Typzeichenfolge der Datei bereitzustellen. Ein relativ einfaches Beispiel ist `video/webm; codecs="vp8, vorbis"`, welches sagt, dass die Datei ein [WebM](/de/docs/Web/Media/Formats/Containers#webm) Video ist, das [VP8](/de/docs/Web/Media/Formats/Video_codecs#vp8) für sein Video und [Vorbis](/de/docs/Web/Media/Formats/Audio_codecs#vorbis) für Audio verwendet.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <!-- ...tabelle fortsetzen, keine Übersetzung benötigt... -->
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Formats)

  - [Mediencontainerformate (Dateitypen)](/de/docs/Web/Media/Formats/Containers)
  - [Web-Video-Codec-Leitfaden](/de/docs/Web/Media/Formats/Video_codecs)
  - [Web-Audio-Codec-Leitfaden](/de/docs/Web/Media/Formats/Audio_codecs)

- Positionierung und Größenveränderung des Bildes innerhalb seines Rahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
- {{htmlelement("audio")}}
- [Verwendung von HTML-Audio und -Video](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [Manipulieren von Video mit Canvas](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [Konfiguration von Servern für Ogg-Medien](/de/docs/Web/HTTP/Configuring_servers_for_Ogg_media)
