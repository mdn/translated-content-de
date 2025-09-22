---
title: "<video>: Das Video-Einbettungselement"
slug: Web/HTML/Reference/Elements/video
l10n:
  sourceCommit: b0c2ce683687410406fa7ccdef391ff1d41503bb
---

Das **`<video>`**-Element [HTML](/de/docs/Web/HTML) bettet einen Mediaplayer ein, der die Videowiedergabe im Dokument unterstützt. Sie können `<video>` auch für Audioinhalte verwenden, aber das {{HTMLElement("audio")}}-Element könnte ein besseres Benutzererlebnis bieten.

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

Das obige Beispiel zeigt, wie das `<video>`-Element verwendet wird. Ähnlich wie beim {{htmlelement("img")}}-Element geben wir im `src`-Attribut einen Pfad zu den Medien an, die wir anzeigen möchten. Wir können weitere Attribute einschließen, um Informationen wie Video-Breite und -Höhe, ob wir es automatisch abspielen und schleifen lassen wollen oder die Standard-Videosteuerungen des Browsers anzeigen möchten, und so weiter.

Der Inhalt zwischen den öffnenden und schließenden `<video></video>`-Tags wird in Browsern angezeigt, die das Element nicht unterstützen.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `autoplay`
  - : Ein Boolean-Attribut; wenn angegeben, beginnt das Video automatisch mit der Wiedergabe, sobald es kann, ohne zu stoppen, um das Laden der Daten abzuschließen.

    > [!NOTE]
    > Moderne Browser blockieren Audio (oder Videos mit einer nicht stummgeschalteten Audiospur) von der automatischen Wiedergabe, da Websites, die automatisch Audio abspielen, für Nutzer eine unangenehme Erfahrung sein können. Siehe unseren [Autoplay-Leitfaden](/de/docs/Web/Media/Guides/Autoplay) für zusätzliche Informationen zur korrekten Verwendung von Autoplay.

    Um die automatische Videowiedergabe zu deaktivieren, funktioniert `autoplay="false"` nicht; das Video wird automatisch abgespielt, wenn das Attribut überhaupt im `<video>`-Tag vorhanden ist. Um die automatische Wiedergabe zu entfernen, muss das Attribut vollständig entfernt werden.

- `controls`
  - : Wenn dieses Attribut vorhanden ist, bietet der Browser Steuerungen an, mit denen der Benutzer unter anderem die Videowiedergabe, Lautstärke, Suche und Pause/Resümee steuern kann.
- `controlslist`
  - : Das [`controlslist`](https://wicg.github.io/controls-list/explainer.html)-Attribut hilft bei Angabe dem Browser, welche Steuerungen er für das `video`-Element anzeigen soll, wenn der Browser seine eigenen Steuerungen zeigt (also wenn das `controls`-Attribut angegeben ist).

    Zulässige Werte sind `nodownload`, `nofullscreen` und `noremoteplayback`.

    Verwenden Sie das Attribut [`disablepictureinpicture`](#disablepictureinpicture), wenn Sie den Picture-In-Picture-Modus (und die Steuerung) deaktivieren wollen.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Dieses {{Glossary("Enumerated", "aufgezählte")}} Attribut gibt an, ob CORS verwendet werden soll, um das zugehörige Video abzurufen. [CORS-fähige Ressourcen](/de/docs/Web/HTML/How_to/CORS_enabled_image) können im {{HTMLElement("canvas")}}-Element verwendet werden, ohne _verunreinigt_ zu sein. Die zulässigen Werte sind:
    - `anonymous`
      - : Sendet eine anonyme Anfrage ohne Anmeldedaten. Anders ausgedrückt, es sendet den HTTP-Header `Origin:` ohne Cookie, X.509-Zertifikat oder Durchführung der HTTP-Basisauthentifizierung. Wenn der Server der Ursprungsseite keine Anmeldeinformationen gibt (indem er den HTTP-Header `Access-Control-Allow-Origin:` nicht setzt), wird die Ressource _verunreinigt_ und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Sendet eine Anfrage mit Anmeldedaten. Anders ausgedrückt, es sendet den HTTP-Header `Origin:` zusammen mit einem Cookie, einem Zertifikat oder durch Durchführung der HTTP-Basisauthentifizierung. Wenn der Server der Ursprungsseite keine Anmeldeinformationen gibt (durch den HTTP-Header `Access-Control-Allow-Credentials:`), wird die Ressource _verunreinigt_ und ihre Nutzung eingeschränkt.

    Wenn nicht vorhanden, wird die Ressource ohne CORS-Anfrage abgefragt (d.h. ohne den HTTP-Header `Origin:` zu senden), wodurch ihre nicht verunreinigte Verwendung in {{HTMLElement('canvas')}}-Elementen verhindert wird. Wenn ungültig, wird es so behandelt, als ob das aufgezählte Schlüsselwort `anonymous` verwendet wurde. Weitere Informationen finden Sie unter [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin).

- `disablepictureinpicture`
  - : Verhindert, dass der Browser ein Picture-in-Picture-Kontextmenü vorschlägt oder in einigen Fällen automatisch Picture-in-Picture anfordert.
- `disableremoteplayback`
  - : Ein Boolean-Attribut, das verwendet wird, um die Möglichkeit der Remote-Wiedergabe auf Geräten zu deaktivieren, die über kabelgebundene (HDMI, DVI, usw.) und kabellose Techniken (Miracast, Chromecast, DLNA, AirPlay, usw.) angeschlossen sind.

    In Safari können Sie [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) als Fallback verwenden.

- `height`
  - : Die Höhe des Anzeigebereichs des Videos in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px) (nur absolute Werte; [keine Prozentsätze](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).
- `loop`
  - : Ein Boolean-Attribut; wenn angegeben, springt der Browser automatisch zurück zum Start, wenn das Ende des Videos erreicht wird.
- `muted`
  - : Ein Boolean-Attribut, das die Standardeinstellung für die Stummschaltung des im Video enthaltenen Audios angibt. Wenn gesetzt, wird das Audio zunächst stummgeschaltet. Der Standardwert ist `false`, was bedeutet, dass das Audio abgespielt wird, wenn das Video abgespielt wird.
- `playsinline`
  - : Ein Boolean-Attribut, das angibt, dass das Video "inline" abgespielt werden soll, das heißt innerhalb des Wiedergabebereichs des Elements. Beachten Sie, dass das Fehlen dieses Attributs _nicht_ bedeutet, dass das Video immer im Vollbild abgespielt wird.
- `poster`
  - : Eine URL für ein Bild, das angezeigt wird, während das Video heruntergeladen wird. Wenn dieses Attribut nicht angegeben ist, wird nichts angezeigt, bis der erste Frame verfügbar ist. Dann wird der erste Frame als Posterbild angezeigt.
- `preload`
  - : Dieses {{Glossary("enumerated", "aufgezählte")}} Attribut soll dem Browser einen Hinweis darauf geben, was der Autor als die beste Benutzererfahrung in Bezug auf die zu ladenden Inhalte vor dem Abspielen des Videos ansieht. Es kann einen der folgenden Werte haben:
    - `none`: Gibt an, dass das Video nicht vorgeladen werden sollte.
    - `metadata`: Gibt an, dass nur Videometadaten (z.B. Länge) abgerufen werden.
    - `auto`: Gibt an, dass die gesamte Videodatei heruntergeladen werden kann, auch wenn der Benutzer nicht erwartet wird, sie zu verwenden.
    - _leerer String_: Ein Synonym für den Wert `auto`.

    Der Standardwert ist für jeden Browser unterschiedlich. Die Spezifikation empfiehlt, diesen auf `metadata` zu setzen.

    > [!NOTE]
    >
    > - Das `autoplay`-Attribut hat Vorrang vor `preload`. Wenn `autoplay` angegeben ist, müsste der Browser offensichtlich beginnen, das Video für die Wiedergabe herunterzuladen.
    > - Die Spezifikation zwingt den Browser nicht dazu, den Wert dieses Attributs zu befolgen; es ist lediglich ein Hinweis.

- `src`
  - : Die URL des einzubettenden Videos. Dies ist optional; Sie können stattdessen das {{HTMLElement("source")}}-Element innerhalb des Videoblocks verwenden, um das einzubettende Video anzugeben.
- `width`
  - : Die Breite des Anzeigebereichs des Videos in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px) (nur absolute Werte; [keine Prozentsätze](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).

## Ereignisse

- [`audioprocess`](/de/docs/Web/API/ScriptProcessorNode/audioprocess_event) {{Deprecated_Inline}}
  - : Der Eingabepuffer eines [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode)-Objekts ist zur Verarbeitung bereit.
- [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)
  - : Der Browser kann die Medien abspielen, schätzt jedoch, dass nicht genug Daten geladen wurden, um die Medien ohne Zwischenstopps bis zum Ende abzuspielen.
- [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
  - : Der Browser schätzt, dass er die Medien bis zum Ende abspielen kann, ohne für das Puffern von Inhalten stoppen zu müssen.
- [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)
  - : Die Rendering eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) ist abgeschlossen.
- [`durationchange`](/de/docs/Web/API/HTMLMediaElement/durationchange_event)
  - : Das `duration`-Attribut wurde aktualisiert.
- [`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)
  - : Die Medien sind leer geworden; zum Beispiel wird dieses Ereignis gesendet, wenn die Medien bereits geladen sind (oder teilweise geladen) und die Methode [`load()`](/de/docs/Web/API/HTMLMediaElement/load) aufgerufen wird, um sie neu zu laden.
- [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)
  - : Die Wiedergabe wurde gestoppt, weil das Ende der Medien erreicht wurde.
- [`error`](/de/docs/Web/API/HTMLMediaElement/error_event)
  - : Ein Fehler trat auf, während die Mediendaten abgerufen wurden, oder der Typ der Ressource ist kein unterstütztes Medienformat.
- [`loadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event)
  - : Der erste Frame der Medien ist vollständig geladen.
- [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
  - : Die Metadaten wurden geladen.
- [`loadstart`](/de/docs/Web/API/HTMLMediaElement/loadstart_event)
  - : Wird ausgelöst, wenn der Browser begonnen hat, die Ressource zu laden.
- [`pause`](/de/docs/Web/API/HTMLMediaElement/pause_event)
  - : Die Wiedergabe wurde angehalten.
- [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)
  - : Die Wiedergabe hat begonnen.
- [`playing`](/de/docs/Web/API/HTMLMediaElement/playing_event)
  - : Die Wiedergabe ist bereit zu beginnen, nachdem sie pausiert oder aufgrund von Datenmangel verzögert wurde.
- [`progress`](/de/docs/Web/API/HTMLMediaElement/progress_event)
  - : Wird periodisch ausgelöst, während der Browser eine Ressource lädt.
- [`ratechange`](/de/docs/Web/API/HTMLMediaElement/ratechange_event)
  - : Die Wiedergabegeschwindigkeit wurde geändert.
- [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event)
  - : Eine _Seek_-Operation wurde abgeschlossen.
- [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
  - : Eine _Seek_-Operation hat begonnen.
- [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
  - : Der Benutzeragent versucht, Mediendaten abzurufen, aber die Daten kommen unerwartet nicht.
- [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event)
  - : Das Laden von Mediendaten wurde ausgesetzt.
- [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)
  - : Die vom `currentTime`-Attribut angegebene Zeit wurde aktualisiert.
- [`volumechange`](/de/docs/Web/API/HTMLMediaElement/volumechange_event)
  - : Die Lautstärke wurde geändert.
- [`waiting`](/de/docs/Web/API/HTMLMediaElement/waiting_event)
  - : Die Wiedergabe wurde gestoppt, weil ein vorübergehender Datenmangel vorliegt.

## Anwendungshinweise

Browser unterstützen nicht alle die gleichen Videoformate; Sie können mehrere Quellen innerhalb geschachtelter {{htmlelement("source")}}-Elemente bereitstellen, und der Browser verwendet dann die erste, die er versteht.

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

Wenn Sie {{htmlelement("source")}}-Elemente verwenden, versucht der Browser, jede Quelle nacheinander zu laden. Wenn eine Quelle fehlschlägt (z.B. aufgrund einer ungültigen URL oder nicht unterstützten Formats), wird die nächste Quelle ausprobiert, und so weiter. Ein `error`-Ereignis wird auf dem `<video>`-Element ausgelöst, nachdem alle Quellen fehlgeschlagen sind; `error`-Ereignisse werden nicht auf jedem einzelnen `<source>`-Element ausgelöst.

Wir bieten einen umfassenden und gründlichen [Leitfaden zu Medien-Dateitypen](/de/docs/Web/Media/Guides/Formats) und den [Leitfaden zu unterstützten Codecs für Video](/de/docs/Web/Media/Guides/Formats/Video_codecs). Außerdem gibt es einen Leitfaden zu [Audiocodecs, die mit ihnen verwendet werden können](/de/docs/Web/Media/Guides/Formats/Audio_codecs).

Andere Anwendungshinweise:

- Wenn Sie das `controls`-Attribut nicht angeben, enthält das Video nicht die Standardsteuerungen des Browsers; Sie können Ihre eigenen benutzerdefinierten Steuerungen mit JavaScript und der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API erstellen. Weitere Details finden Sie unter [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).
- Um präzise Kontrolle über Ihre Video- (und Audio-)Inhalte zu haben, lösen `HTMLMediaElement`s viele verschiedene [Ereignisse](/de/docs/Web/API/HTMLMediaElement#events) aus. Diese Ereignisse ermöglichen nicht nur Steuerbarkeit, sondern auch die Überwachung des Fortschritts von sowohl Download als auch Wiedergabe der Medien, sowie des Wiedergabezustands und der -position.
- Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um die Position des Videos innerhalb des Rahmens des Elements anzupassen, und die {{cssxref("object-fit")}}-Eigenschaft, um zu steuern, wie die Größe des Videos angepasst wird, um in den Rahmen zu passen.
- Um Untertitel zusammen mit Ihrem Video anzuzeigen, können Sie JavaScript zusammen mit dem {{htmlelement("track")}}-Element und dem [WebVTT](/de/docs/Web/API/WebVTT_API)-Format verwenden. Weitere Informationen finden Sie unter [Hinzufügen von Untertiteln und Beschriftungen zu HTML-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video).
- Sie können Audiodateien mit einem `<video>`-Element abspielen. Dies kann nützlich sein, wenn Sie beispielsweise Audio mit einem [WebVTT](/de/docs/Web/API/WebVTT_API)-Transkript aufführen, da das {{HTMLElement("audio")}}-Element keine Untertitel mit WebVTT erlaubt.
- Um den Fallback-Inhalt bei Browsern zu testen, die das Element unterstützen, können Sie `<video>` durch ein nicht existierendes Element wie `<notavideo>` ersetzen.

Eine gute allgemeine Informationsquelle zur Verwendung von HTML-`<video>` ist das [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) Anfänger-Tutorial.

### Styling mit CSS

Das `<video>`-Element ist ein ersetztes Element — sein {{cssxref("display")}}-Wert ist standardmäßig `inline` — aber seine Standardbreite und -höhe im Ansichtsfenster werden durch das eingebettete Video definiert.

Es gibt keine besonderen Überlegungen für das Styling von `<video>`; eine gängige Strategie ist es, ihm einen `display`-Wert von `block` zu geben, um es leichter positionierbar und größenveränderbar zu machen, und dann die erforderlichen Styling- und Layoutinformationen bereitzustellen. [Grundlagen zur Videoplayer-Stilgestaltung](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics) bieten einige nützliche Styling-Techniken.

### Hinzufügen von Untertiteln und anderen zeitgesteuerten Textspuren

Zeitgesteuerte Textspuren für Untertitel, geschlossene Beschriftungen, Kapitelüberschriften und so weiter können deklarativ hinzugefügt werden, indem das {{HTMLElement("track")}}-Element geschachtelt wird.
Die Spuren werden im [Web Video Text Tracks File Format (WebVTT)](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) (`.vtt`-Dateien) angegeben.

Zum Beispiel enthält das untenstehende HTML die Datei "captions.vtt", die verwendet wird, um geschlossene Beschriftungen auf dem Video zu überlagern, wenn die Beschriftungen vom Benutzer aktiviert sind.

```html
<video controls src="video.webm">
  <track default kind="captions" src="captions.vtt" />
</video>
```

Zeitgesteuerte Textspuren können auch programmatisch mit der [WebVTT API](/de/docs/Web/API/WebVTT_API) hinzugefügt werden.

### Erkennung von Spurzugaben und Entfernungen

Sie können erkennen, wann Spuren zu einem `<video>`-Element hinzugefügt oder daraus entfernt werden, indem Sie die [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event) Ereignisse überwachen. Diese Ereignisse werden jedoch nicht direkt an das `<video>`-Element selbst gesendet.
Stattdessen werden sie an das Spurlistenobjekt innerhalb des `<video>`-Elements gesendet, das dem Typ der hinzugefügten Spur entspricht:

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die alle Audiotracks des Media-Elements enthält.
    Fügen Sie einen Listener für `addtrack` zu diesem Objekt hinzu, um benachrichtigt zu werden, wenn neue Audiotracks zum Element hinzugefügt werden.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)
  - : Eine [`VideoTrackList`](/de/docs/Web/API/VideoTrackList), die alle Videotracks des Media-Elements enthält.
    Fügen Sie einen `addtrack`-Listener zu diesem Objekt hinzu, um benachrichtigt zu werden, wenn Videotracks zum Element hinzugefügt werden.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
  - : Eine [`TextTrackList`](/de/docs/Web/API/TextTrackList), die alle Textspuren des Media-Elements enthält (die für Untertitel, geschlossene Beschriftungen usw. verwendet werden).
    Fügen Sie einen `addtrack`-Listener zu diesem Objekt hinzu, um benachrichtigt zu werden, wenn Textspuren zum Element hinzugefügt werden.

Zum Beispiel, um zu erkennen, wann Audiotracks zu oder aus einem `<video>`-Element hinzugefügt oder entfernt werden, können Sie folgenden Code verwenden:

```js
const elem = document.querySelector("video");

elem.audioTracks.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTracks.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Dieser Code überwacht, wenn Audiotracks zum Element hinzugefügt oder daraus entfernt werden, und ruft eine hypothetische Funktion auf einem Track-Editor auf, um den Track in der Liste der verfügbaren Tracks des Editors zu registrieren oder zu entfernen.

Sie können auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um auf die [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event) Ereignisse zu hören.

### Server-Unterstützung für Video

Wenn der MIME-Typ für das Video auf dem Server nicht korrekt eingestellt ist, wird das Video möglicherweise nicht angezeigt oder zeigt ein graues Kästchen mit einem X (wenn JavaScript aktiviert ist).

Wenn Sie Apache Web Server verwenden, um WebM-Videos zu servieren, können Sie dieses Problem beheben, indem Sie die Erweiterungen des Video-Dateityps zum `video/webm` MIME-Typ hinzufügen (die häufigste WebM-Dateiendung ist `.webm`). Um dies zu tun, bearbeiten Sie die Datei `mime.types` in `/etc/apache` oder verwenden Sie die Konfigurationsdirektive `AddType` in `httpd.conf`:

```plain
AddType video/webm .webm
```

Ihr Webhoster kann eine einfach zu bedienende Schnittstelle für MIME-Typ-Konfigurationsänderungen für neue Technologien bereitstellen, bis ein globales Update natürlich erfolgt.

## Barrierefreiheit

Videos sollten sowohl Untertitel als auch Transkripte bieten, die den Inhalt genau beschreiben (sehen Sie [Hinzufügen von Untertiteln und Beschriftungen zu HTML-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) für weitere Informationen zur Implementierung). Untertitel ermöglichen es Menschen mit Hörverlust, den Audiogehalt eines Videos während der Wiedergabe zu verstehen, während Transkripte Menschen, die mehr Zeit benötigen, ermöglichen, Audiogehalt in einem Tempo und Format zu überprüfen, das für sie angenehm ist.

Es ist erwähnenswert, dass Sie, obwohl Sie Audiomedien beschriften können, dies nur beim Abspielen von Audio in einem `<video>`-Element tun können, da die Videoregion des Elements verwendet wird, um die Untertitel anzuzeigen. Dies ist eines der besonderen Szenarien, in denen es nützlich ist, Audio in einem Videoelement abzuspielen.

Wenn automatische Untertitelungsdienste verwendet werden, ist es wichtig, den erzeugten Inhalt zu überprüfen, um sicherzustellen, dass er die Originalvideoquelle genau wiedergibt.

Zusätzlich zu gesprochenen Dialogen sollten Untertitel und Transkripte auch Musik und Soundeffekte identifizieren, die wichtige Informationen kommunizieren. Dies schließt Emotion und Ton ein:

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

Untertitel sollten das Hauptthema des Videos nicht verdecken. Sie können mit [der `align` VTT-Cue-Einstellung](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format#cue_settings) positioniert werden.

- [Web Video Text Tracks Format (WebVTT)](/de/docs/Web/API/WebVTT_API)
- [WebAIM: Untertitel, Transkripte und Audiobeschreibungen](https://webaim.org/techniques/captions/)
- [MDN Verstehen der WCAG, Leitlinie 1.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [Verstehen des Erfolgskriteriums 1.2.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Verstehen des Erfolgskriteriums 1.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Beispiele

### Einzelne Quelle

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

Bis das Video zu spielen beginnt, wird das im `poster`-Attribut angegebene Bild als Platzhalter angezeigt. Wenn der Browser die Videowiedergabe nicht unterstützt, wird der Fallback-Text angezeigt.

### Mehrere Quellen

Dieses Beispiel baut auf dem letzten auf und bietet drei verschiedene Quellen für die Medien; dies ermöglicht es, das Video unabhängig davon anzusehen, welche Videocodecs vom Browser unterstützt werden.

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

Einige Medien-Dateitypen ermöglichen es, spezifischere Informationen mit dem [`codecs`](/de/docs/Web/Media/Guides/Formats/codecs_parameter)-Parameter als Teil der Typzeichenfolge der Datei bereitzustellen. Zum Beispiel, `video/webm; codecs="vp8, vorbis"` gibt an, dass die Datei ein [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm)-Video ist, das [VP8](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp8) für sein Video und [Vorbis](/de/docs/Web/Media/Guides/Formats/Audio_codecs#vorbis) für Audio verwendet.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>, Phrasing-Inhalt, eingebetteter Inhalt. Wenn es ein <a href="#controls"><code>controls</code></a>-Attribut hat: interaktiver Inhalt und fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <p>
          Wenn das Element ein <a href="#src"><code>src</code></a>-Attribut hat: null oder mehr {{HTMLElement("track")}}-Elemente, gefolgt von transparentem Inhalt, der keine Medienelemente enthält – d.h. kein {{HTMLElement("audio")}} oder <code>&lt;video&gt;</code>.
        </p>
        <p>
          Andernfalls: null oder mehr {{HTMLElement("source")}}-Elemente, gefolgt von null oder mehr {{HTMLElement("track")}}-Elementen, gefolgt von transparentem Inhalt, der keine Medienelemente enthält – d.h. kein {{HTMLElement("audio")}} oder <code>&lt;video&gt;</code>.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebettete Inhalte akzeptiert.</td>
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

- [Leitfaden zu Medien-Typen und Formaten im Web](/de/docs/Web/Media/Guides/Formats)
  - [Mediencontainer-Formate (Dateitypen)](/de/docs/Web/Media/Guides/Formats/Containers)
  - [Web Video Codec-Leitfaden](/de/docs/Web/Media/Guides/Formats/Video_codecs)
  - [Web Audio Codec-Leitfaden](/de/docs/Web/Media/Guides/Formats/Audio_codecs)

- Positionierung und Größenanpassung des Bildes innerhalb des Rahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
- {{htmlelement("audio")}}
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Manipulation von Video mit Canvas](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [Konfigurieren von Servern für Ogg-Medien](/de/docs/Web/Media/Guides/Formats/Configuring_servers_for_Ogg_media)
