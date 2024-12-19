---
title: "<video>: Das Video-Einbettungselement"
slug: Web/HTML/Element/video
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

Das **`<video>`**-Element in [HTML](/de/docs/Web/HTML) bettet einen Mediaplayer ein, der die Videowiedergabe im Dokument unterstützt. Sie können `<video>` auch für Audioinhalte verwenden, jedoch bietet das {{HTMLElement("audio")}}-Element möglicherweise eine geeignetere Benutzererfahrung.

{{EmbedInteractiveExample("pages/tabbed/video.html", "tabbed-standard")}}

Das obige Beispiel zeigt eine einfache Verwendung des `<video>`-Elements. Ähnlich wie beim {{htmlelement("img")}}-Element geben wir einen Pfad zu den Medien an, die wir im `src`-Attribut anzeigen möchten; wir können weitere Attribute einschließen, um Informationen wie Video-Breite und -Höhe anzugeben, ob wir es automatisch abspielen und wiederholen möchten oder ob wir die standardmäßigen Videosteuerungen des Browsers anzeigen möchten usw.

Der Inhalt innerhalb der öffnenden und schließenden `<video></video>`-Tags wird als Fallback in Browsern angezeigt, die das Element nicht unterstützen.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `autoplay`

  - : Ein boolesches Attribut; wenn es angegeben ist, beginnt das Video automatisch mit der Wiedergabe, sobald es ohne Unterbrechung der Datenladung abspielbereit ist.

    > [!NOTE]
    > Moderne Browser blockieren Audio (oder Videos mit einer ungemuteten Audiospur) von der automatischen Wiedergabe, da Websites, die automatisch Audio abspielen, für Benutzer eine unangenehme Erfahrung sein können. Siehe unseren [Autoplay-Leitfaden](/de/docs/Web/Media/Autoplay_guide) für zusätzliche Informationen zur richtigen Verwendung von Autoplay.

    Um die automatische Videowiedergabe zu deaktivieren, funktioniert `autoplay="false"` nicht; das Video wird automatisch abgespielt, wenn das Attribut im `<video>`-Tag vorhanden ist. Um Autoplay zu entfernen, muss das Attribut vollständig entfernt werden.

- `controls`
  - : Wenn dieses Attribut vorhanden ist, bietet der Browser Steuerungen an, die es dem Benutzer ermöglichen, die Videowiedergabe zu steuern, einschließlich Lautstärke, Suchen und Anhalten/Wiederaufnehmen der Wiedergabe.
- `controlslist`

  - : Das [`controlslist`](https://wicg.github.io/controls-list/explainer.html)-Attribut hilft, wenn angegeben, dem Browser bei der Auswahl der Steuerungen, die für das `video`-Element angezeigt werden, wann immer der Browser seine eigenen Steuerungssets anzeigt (d. h. wenn das `controls`-Attribut angegeben ist).

    Die erlaubten Werte sind `nodownload`, `nofullscreen` und `noremoteplayback`.

    Verwenden Sie das Attribut [`disablepictureinpicture`](#disablepictureinpicture), wenn Sie den Bild-in-Bild-Modus (und die Steuerung) deaktivieren möchten.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Dieses {{Glossary("Enumerated", "enumerierte")}} Attribut gibt an, ob CORS zum Abrufen des zugehörigen Videos verwendet werden soll. [CORS-fähige Ressourcen](/de/docs/Web/HTML/CORS_enabled_image) können im {{HTMLElement("canvas")}}-Element ohne _Verfälschung_ wiederverwendet werden. Die erlaubten Werte sind:

    - `anonymous`
      - : Sendet eine Cross-Origin-Anfrage ohne Anmeldeinformation. Mit anderen Worten, es sendet den `Origin:`-HTTP-Header ohne Cookie, X.509-Zertifikat oder Ausführung der HTTP-Basisautorisierung. Wenn der Server keine Anmeldeinformationen an die Ursprungsseite gibt (indem er den `Access-Control-Allow-Origin:`-HTTP-Header nicht setzt), ist die Ressource _verfälscht_ und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Sendet eine Cross-Origin-Anfrage mit Anmeldeinformation. Mit anderen Worten, es sendet den `Origin:`-HTTP-Header mit einem Cookie, einem Zertifikat oder Ausführung der HTTP-Basisautorisierung. Wenn der Server keine Anmeldeinformationen an die Ursprungsseite gibt (über den `Access-Control-Allow-Credentials:`-HTTP-Header), ist die Ressource _verfälscht_ und ihre Nutzung eingeschränkt.

    Wenn nicht vorhanden, wird die Ressource ohne CORS-Anfrage abgerufen (d. h. ohne Senden des `Origin:`-HTTP-Headers), sodass ihre nicht-verfälschte Nutzung in {{HTMLElement('canvas')}}-Elementen verhindert wird. Wenn ungültig, wird es behandelt, als ob das aufgezählte Schlüsselwort `anonymous` verwendet wurde. Siehe [CORS-Einstellungen](/de/docs/Web/HTML/Attributes/crossorigin) für weitere Informationen.

- `disablepictureinpicture`
  - : Verhindert, dass der Browser ein Bild-in-Bild-Kontextmenü vorschlägt oder den Bild-in-Bild-Modus automatisch in einigen Fällen anfordert.
- `disableremoteplayback`

  - : Ein boolesches Attribut, das die Fähigkeit der Fernwiedergabe in Geräten deaktiviert, die über kabelgebundene (HDMI, DVI, etc.) und drahtlose Technologien (Miracast, Chromecast, DLNA, AirPlay, usw.) angeschlossen sind.

    In Safari können Sie [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) als Fallback verwenden.

- `height`
  - : Die Höhe des Videoanzeigebereichs in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px) (nur absolute Werte; [keine Prozentsätze](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).
- `loop`
  - : Ein boolesches Attribut; wenn es angegeben ist, wird der Browser beim Erreichen des Endes des Videos automatisch zum Anfang zurückspringen.
- `muted`
  - : Ein boolesches Attribut, das die Standardeinstellung der Audio-Stummschaltung im Video angibt. Wenn gesetzt, wird das Audio anfänglich stummgeschaltet sein. Der Standardwert ist `false`, d. h. das Audio wird abgespielt, wenn das Video abgespielt wird.
- `playsinline`
  - : Ein boolesches Attribut, das angibt, dass das Video "inline" abgespielt werden soll, also innerhalb des Wiedergabebereichs des Elements. Beachten Sie, dass das Fehlen dieses Attributs _nicht_ impliziert, dass das Video immer im Vollbild abgespielt wird.
- `poster`
  - : Eine URL für ein Bild, das angezeigt wird, während das Video heruntergeladen wird. Wenn dieses Attribut nicht angegeben ist, wird nichts angezeigt, bis der erste Frame verfügbar ist; dann wird der erste Frame als Poster-Frame angezeigt.
- `preload`

  - : Dieses {{Glossary("enumerated", "enumerierte")}} Attribut soll dem Browser einen Hinweis darauf geben, was der Autor für die beste Benutzererfahrung hält, in Bezug auf welche Inhalte geladen werden sollen, bevor das Video abgespielt wird. Es kann einen der folgenden Werte haben:

    - `none`: Gibt an, dass das Video nicht vorgeladen werden soll.
    - `metadata`: Gibt an, dass nur Videometadaten (z. B. Länge) abgerufen werden.
    - `auto`: Gibt an, dass die gesamte Videodatei heruntergeladen werden kann, auch wenn nicht erwartet wird, dass der Benutzer sie verwendet.
    - _leerer String_: Ein Synonym für den Wert `auto`.

    Der Standardwert ist für jeden Browser unterschiedlich. Die Spezifikation empfiehlt, es auf `metadata` zu setzen.

    > [!NOTE]
    >
    > - Das `autoplay`-Attribut hat Vorrang vor `preload`. Wenn `autoplay` angegeben ist, muss der Browser logischerweise mit dem Herunterladen des Videos zur Wiedergabe beginnen.
    > - Die Spezifikation zwingt den Browser nicht, den Wert dieses Attributs zu befolgen; es ist lediglich ein Hinweis.

- `src`
  - : Die URL des einzubettenden Videos. Dies ist optional; Sie können stattdessen das {{HTMLElement("source")}}-Element innerhalb des Video-Blocks verwenden, um das einzubettende Video anzugeben.
- `width`
  - : Die Breite des Videoanzeigebereichs in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px) (nur absolute Werte; [keine Prozentsätze](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).

## Ereignisse

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Ereignisname</th>
      <th scope="col">Wird ausgelöst, wenn</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        [`audioprocess`](/de/docs/Web/API/ScriptProcessorNode/audioprocess_event) {{Deprecated_Inline}}
      </td>
      <td>
        Der Eingabepuffer eines [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) bereit zur Verarbeitung ist.
      </td>
    </tr>
    <tr>
      <td>
        [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)
      </td>
      <td>
        Der Browser das Medium abspielen kann, aber schätzt, dass nicht genügend Daten geladen wurden, um das Medium bis zum Ende abzuspielen, ohne für weiteres Puffern anhalten zu müssen.
      </td>
    </tr>
    <tr>
      <td>
        [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
      </td>
      <td>
        Der Browser schätzt, dass er das Medium bis zum Ende abspielen kann, ohne wegen Inhalts-Pufferns anzuhalten.
      </td>
    </tr>
    <tr>
      <td>
        [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)
      </td>
      <td>
        Die Wiedergabe eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) beendet wurde.
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
        Das Medium leer geworden ist; dieses Ereignis wird z. B. gesendet, wenn das Medium bereits geladen (oder teilweise geladen) ist und die
        <a href="/de/docs/Web/API/HTMLMediaElement/load" rel="internal"><code>load()</code></a>
        Methode aufgerufen wird, um es erneut zu laden.
      </td>
    </tr>
    <tr>
      <td>
        [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)
      </td>
      <td>Die Wiedergabe gestoppt hat, weil das Ende des Mediums erreicht wurde.</td>
    </tr>
    <tr>
      <td>
        [`error`](/de/docs/Web/API/HTMLMediaElement/error_event)
      </td>
      <td>
        Ein Fehler beim Abrufen der Mediendaten aufgetreten ist oder der Typ der Ressource kein unterstütztes Medienformat ist.
      </td>
    </tr>
    <tr>
      <td>
        [`loadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event)
      </td>
      <td>Der erste Frame des Mediums fertig geladen ist.</td>
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
      <td>Ausgelöst wird, wenn der Browser begonnen hat, die Ressource zu laden.</td>
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
        Die Wiedergabe startbereit nach einer Pause oder Verzögerung aufgrund eines Datenmangels ist.
      </td>
    </tr>
    <tr>
      <td>
        [`progress`](/de/docs/Web/API/HTMLMediaElement/progress_event)
      </td>
      <td>Periodisch ausgelöst wird, während der Browser eine Ressource lädt.</td>
    </tr>
    <tr>
      <td>
        [`ratechange`](/de/docs/Web/API/HTMLMediaElement/ratechange_event)
      </td>
      <td>Die Abspielgeschwindigkeit geändert wurde.</td>
    </tr>
    <tr>
      <td>
        [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event)
      </td>
      <td>Ein <em>Suchvorgang</em> abgeschlossen wurde.</td>
    </tr>
    <tr>
      <td>
        [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
      </td>
      <td>Ein <em>Suchvorgang</em> begonnen hat.</td>
    </tr>
    <tr>
      <td>
        [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
      </td>
      <td>
        Der Benutzeragent versucht, Mediendaten zu holen, aber die Daten kommen unerwartet nicht.
      </td>
    </tr>
    <tr>
      <td>
        [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event)
      </td>
      <td>Das Laden von Mediendaten ausgesetzt wurde.</td>
    </tr>
    <tr>
      <td>
        [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)
      </td>
      <td>
        Die durch das <code>currentTime</code>-Attribut angezeigte Zeit aktualisiert wurde.
      </td>
    </tr>
    <tr>
      <td>
        [`volumechange`](/de/docs/Web/API/HTMLMediaElement/volumechange_event)
      </td>
      <td>Die Lautstärke geändert wurde.</td>
    </tr>
    <tr>
      <td>
        [`waiting`](/de/docs/Web/API/HTMLMediaElement/waiting_event)
      </td>
      <td>Die Wiedergabe aufgrund eines vorübergehenden Datenmangels gestoppt wurde.</td>
    </tr>
  </tbody>
</table>

## Nutzungshinweise

Browser unterstützen nicht alle dieselben Videoformate; Sie können mehrere Quellen innerhalb verschachtelter {{htmlelement("source")}}-Elemente angeben, und der Browser verwendet dann die erste, die er versteht.

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

Wir bieten einen substanziellen und umfassenden [Leitfaden zu Medien-Dateitypen](/de/docs/Web/Media/Formats) und den [Leitfaden zu den unterstützten Codecs für Videos](/de/docs/Web/Media/Formats/Video_codecs). Zudem ist ein Leitfaden für [Audio-Codecs, die mit ihnen verwendet werden können](/de/docs/Web/Media/Formats/Audio_codecs) verfügbar.

Andere Nutzungshinweise:

- Wenn Sie nicht das Attribut `controls` angeben, enthält das Video nicht die standardmäßigen Steuerungen des Browsers; Sie können Ihre eigenen benutzerdefinierten Steuerungen mithilfe von JavaScript und der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API erstellen. Siehe [Erstellen eines geräteübergreifenden Videoplayers](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player) für weitere Details.
- Um genaue Kontrolle über Ihre Video- (und Audio-)Inhalte zu ermöglichen, lösen `HTMLMediaElement`s viele verschiedene [Ereignisse](/de/docs/Web/API/HTMLMediaElement#events) aus. Neben der Bereitstellung von Steuerungsmöglichkeiten lassen diese Ereignisse auch zu, den Fortschritt sowohl des Downloads als auch der Wiedergabe der Medien sowie den Wiedergabestatus und die -position zu überwachen.
- Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um die Positionierung des Videos innerhalb des Rahmens des Elements anzupassen, und die {{cssxref("object-fit")}}-Eigenschaft, um zu steuern, wie die Größe des Videos an die Rahmenbreite angepasst wird.
- Um Untertitel / Captions zusammen mit Ihrem Video anzuzeigen, können Sie etwas JavaScript zusammen mit dem {{htmlelement("track")}}-Element und dem [WebVTT](/de/docs/Web/API/WebVTT_API)-Format verwenden. Siehe [Hinzufügen von Captions und Untertiteln zu HTML-Videos](/de/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) für weitere Informationen.
- Sie können Audiodateien mit einem `<video>`-Element wiedergeben. Dies kann nützlich sein, wenn Sie zum Beispiel Audio mit einem [WebVTT](/de/docs/Web/API/WebVTT_API)-Transkript durchführen müssen, da das {{HTMLElement("audio")}}-Element keine Captions mit WebVTT zulässt.
- Um den Fallback-Inhalt in Browsern zu testen, die das Element unterstützen, können Sie `<video>` durch ein nicht existentes Element wie `<notavideo>` ersetzen.

Eine gute allgemeine Informationsquelle zur Verwendung von HTML `<video>` ist der [HTML-Video-und-Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) Anfänger-Tutorial.

### Styling mit CSS

Das `<video>`-Element ist ein ersetztes Element — der {{cssxref("display")}}-Wert ist standardmäßig `inline` — aber seine Standardbreite und -höhe im Ansichtsfenster wird durch das eingebettete Video definiert.

Es gibt keine besonderen Überlegungen für das Styling von `<video>`; eine übliche Strategie ist, ihm einen `display`-Wert von `block` zu geben, um es einfacher zu positionieren, zu dimensionieren usw., und dann Stil- und Layoutinformationen bereitzustellen, wie erforderlich. [Grundlagen der Videoplayer-Stilisierung](/de/docs/Web/Media/Audio_and_video_delivery/Video_player_styling_basics) bietet einige nützliche Styling-Techniken.

### Hinzufügen von Untertiteln und anderen zeitgesteuerten Textspuren

Zeitgesteuerte Textspuren für Untertitel, geschlossene Captions, Kapitelüberschriften usw. können deklarativ durch die Verschachtelung des {{HTMLElement("track")}}-Elements hinzugefügt werden.
Die Spuren werden im [Web Video Text Tracks File Format (WebVTT)](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) (`.vtt`-Dateien) angegeben.

Zum Beispiel enthält der untenstehende HTML-Code die Datei "captions.vtt", die verwendet wird, um geschlossene Captions auf dem Video zu überlagern, wenn Captions vom Benutzer aktiviert werden.

```html
<video controls src="video.webm">
  <track default kind="captions" src="captions.vtt" />
</video>
```

Zeitgesteuerte Textspuren können auch programmatisch unter Verwendung der [WebVTT-API](/de/docs/Web/API/WebVTT_API) hinzugefügt werden.

### Erkennen der Hinzufügung und Entfernung von Spuren

Sie können erkennen, wann Spuren einem `<video>`-Element hinzugefügt oder davon entfernt werden, indem Sie die Ereignisse [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event) verwenden. Diese Ereignisse sind jedoch nicht direkt an das `<video>`-Element selbst gesendet.
Stattdessen werden sie an das Spurlistenobjekt innerhalb des `<video>`-Elements gesendet, das dem Typ von Spur entspricht, die dem Element hinzugefügt wurde:

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die alle Audiospuren des Medienelements enthält.
    Fügen Sie diesem Objekt einen Listener für `addtrack` hinzu, um benachrichtigt zu werden, wenn neue Audiospuren zum Element hinzugefügt werden.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)
  - : Eine [`VideoTrackList`](/de/docs/Web/API/VideoTrackList), die alle Videospuren des Medienelements enthält.
    Fügen Sie diesem Objekt einen `addtrack`-Listener hinzu, um benachrichtigt zu werden, wenn Videospuren zum Element hinzugefügt werden.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
  - : Eine [`TextTrackList`](/de/docs/Web/API/TextTrackList), die alle Textspuren des Medienelements enthält (die für Untertitel, geschlossene Captions usw. verwendet werden).
    Fügen Sie diesem Objekt einen `addtrack`-Listener hinzu, um benachrichtigt zu werden, wenn Textspuren zum Element hinzugefügt werden.

Zum Beispiel können Sie, um zu erkennen, wann Audiospuren zu einem `<video>`-Element hinzugefügt oder daraus entfernt werden, Code wie diesen verwenden:

```js
const elem = document.querySelector("video");

elem.audioTracks.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTracks.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Dieser Code überwacht, dass Audiospuren dem Element hinzugefügt oder davon entfernt werden, und ruft eine hypothetische Funktion in einem Spur-Editor auf, um die Spur in der Liste der verfügbaren Spuren des Editors zu registrieren und zu entfernen.

Sie können auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um auf die Ereignisse [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event) zu hören.

### Server-Unterstützung für Video

Wenn der MIME-Typ für das Video auf dem Server nicht korrekt eingestellt ist, wird das Video möglicherweise nicht angezeigt oder zeigt ein graues Kästchen mit einem X (wenn JavaScript aktiviert ist).

Wenn Sie den Apache-Webserver verwenden, um WebM-Videos bereitzustellen, können Sie dieses Problem beheben, indem Sie die Videodateityperweiterungen dem `video/webm`-MIME-Typ hinzufügen (die häufigste WebM-Dateierweiterung ist `.webm`). Dazu bearbeiten Sie die Datei `mime.types` in `/etc/apache` oder verwenden die `AddType`-Konfigurationsdirektive in `httpd.conf`:

```plain
AddType video/webm .webm
```

Ihr Webhost kann eine einfache Schnittstelle zur Änderung der MIME-Typ-Konfiguration für neue Technologien anbieten, bis ein globales Update natürlich erfolgt.

## Barrierefreiheit

Videos sollten sowohl Captions als auch Transkripte enthalten, die ihren Inhalt genau beschreiben (siehe [Hinzufügen von Captions und Untertiteln zu HTML-Videos](/de/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) für mehr Informationen darüber, wie Sie diese implementieren). Captions ermöglichen es Personen mit Hörverlust, den Audioinhalt eines Videos zu verstehen, während das Video abgespielt wird, während Transkripte Personen, die zusätzliche Zeit benötigen, ermöglichen, Audioinhalte in einem Tempo und Format zu überprüfen, das für sie angenehm ist.

Es ist erwähnenswert, dass Sie zwar auch Audio-Medien untertiteln können, dies jedoch nur möglich ist, wenn Sie Audio in einem `<video>`-Element abspielen, da die Videoregion des Elements verwendet wird, um die Untertitel anzuzeigen. Dies ist eines der besonderen Szenarien, in denen es nützlich ist, Audio in einem Videoelement abzuspielen.

Wenn automatische Untertitelungsdienste verwendet werden, ist es wichtig, den erstellten Inhalt zu überprüfen, um sicherzustellen, dass er die Quelle des Videos genau repräsentiert.

Neben dem gesprochenen Dialog sollten Untertitel und Transkripte auch Musik und Soundeffekte identifizieren, die wichtige Informationen übermitteln. Dazu gehören Emotionen und Tonalität:

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

Untertitel sollten das Hauptmotiv des Videos nicht verdecken. Sie können mit [der `align`-VTT-Cue-Einstellung](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format#cue_settings) positioniert werden.

- [Web Video Text Tracks Format (WebVTT)](/de/docs/Web/API/WebVTT_API)
- [WebAIM: Captions, Transcripts, and Audio Descriptions](https://webaim.org/techniques/captions/)
- [MDN Understanding WCAG, Leitlinie 1.2 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [Verstehen des Erfolgskriteriums 1.2.1 | W3C Verstehen von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Verstehen des Erfolgskriteriums 1.2.2 | W3C Verstehen von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Beispiele

### Einzelne Quelle

Dieses Beispiel spielt ein Video ab, wenn es aktiviert wird, und bietet dem Benutzer die standardmäßigen Videosteuerungen des Browsers zur Steuerung der Wiedergabe.

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

Bis das Video mit der Wiedergabe beginnt, wird das im `poster`-Attribut angegebene Bild an seiner Stelle angezeigt. Wenn der Browser die Videowiedergabe nicht unterstützt, wird der Fallback-Text angezeigt.

### Mehrere Quellen

Dieses Beispiel baut auf dem vorherigen auf und bietet drei verschiedene Quellen für die Medien an; dadurch kann das Video angesehen werden, unabhängig davon, welche Videocodecs vom Browser unterstützt werden.

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

Zuerst wird AVI versucht. Wenn das nicht abgespielt werden kann, wird [MP4](/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4) versucht. Eine Fallback-Nachricht wird angezeigt, wenn das Videoelement nicht unterstützt wird, jedoch nicht, falls alle Quellen fehlschlagen.

Einige Mediendateitypen ermöglichen spezifischere Informationen durch den [`codecs`](/de/docs/Web/Media/Formats/codecs_parameter)-Parameter als Teil der Dateitypzeichenfolge. Ein relativ einfaches Beispiel ist `video/webm; codecs="vp8, vorbis"`, was besagt, dass die Datei ein [WebM](/de/docs/Web/Media/Formats/Containers#webm)-Video mit [VP8](/de/docs/Web/Media/Formats/Video_codecs#vp8) für das Video und [Vorbis](/de/docs/Web/Media/Formats/Audio_codecs#vorbis) für Audio ist.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>, Phrasierungsinhalt, eingebetteter Inhalt. Wenn es ein <a href="#controls"><code>controls</code></a>-Attribut hat: interaktiver Inhalt und fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <p>
          Wenn das Element ein <a href="#src"><code>src</code></a>
          Attribut hat: Null oder mehr {{HTMLElement("track")}}-Elemente, gefolgt von transparentem Inhalt, der keine Medienelemente enthält, das heißt keine {{HTMLElement("audio")}} oder <code>&lt;video&gt;</code>.
        </p>
        <p>
          Andernfalls: Null oder mehr {{HTMLElement("source")}}-Elemente, gefolgt von Null oder mehr {{HTMLElement("track")}}-Elementen, gefolgt von transparentem Inhalt, der keine Medienelemente enthält, d. h. keine {{HTMLElement("audio")}} oder <code>&lt;video&gt;</code>.
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
          >Keine entsprechende Rolle</a>
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
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

  - [Mediencontainerformate (Dateitypen)](/de/docs/Web/Media/Formats/Containers)
  - [Leitfaden zu Web-Video-Codecs](/de/docs/Web/Media/Formats/Video_codecs)
  - [Leitfaden zu Web-Audio-Codecs](/de/docs/Web/Media/Formats/Audio_codecs)

- Positionierung und Größenanpassung des Bildes innerhalb des Rahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
- {{htmlelement("audio")}}
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Manipulieren von Videos mit Canvas](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [Serverkonfiguration für Ogg-Medien](/de/docs/Web/Media/Formats/Configuring_servers_for_Ogg_media)
