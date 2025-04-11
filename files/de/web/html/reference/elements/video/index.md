---
title: "<video>: Das Video-Einbettungselement"
slug: Web/HTML/Reference/Elements/video
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<video>`**-Element in [HTML](/de/docs/Web/HTML) bettet einen Mediaplayer ein, der die Wiedergabe von Videos im Dokument unterstützt. Sie können `<video>` auch für Audiomaterial verwenden, allerdings bietet das {{HTMLElement("audio")}}-Element möglicherweise ein besseres Benutzererlebnis.

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

Das obige Beispiel zeigt, wie das `<video>`-Element verwendet wird. Ähnlich wie beim {{htmlelement("img")}}-Element fügen wir einen Pfad zu dem Medium, das wir anzeigen möchten, im `src`-Attribut ein. Wir können andere Attribute hinzufügen, um Informationen wie Videobreite und -höhe anzugeben, ob wir es automatisch abspielen und wiederholen lassen möchten oder ob wir die Standard-Videosteuerung des Browsers anzeigen möchten.

Der Inhalt innerhalb der öffnenden und schließenden `<video></video>`-Tags wird als Fallback in Browsern angezeigt, die das Element nicht unterstützen.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `autoplay`

  - : Ein boolean-Attribut; wenn angegeben, beginnt das Video automatisch mit der Wiedergabe, sobald es ohne Unterbrechung der Datenladung möglich ist.

    > [!NOTE]
    > Moderne Browser blockieren automatisch das Abspielen von Audio (oder Videos mit einer nicht stummgeschalteten Tonspur), da Websites, die automatisch Audio abspielen, für Benutzer eine unangenehme Erfahrung sein können. Sehen Sie unseren [Autoplay-Leitfaden](/de/docs/Web/Media/Guides/Autoplay) für zusätzliche Informationen zur korrekten Verwendung von Autoplay.

    Um die automatische Wiedergabe von Videos zu deaktivieren, funktioniert `autoplay="false"` nicht; das Video wird automatisch abgespielt, wenn das Attribut im `<video>`-Tag vorhanden ist. Um die automatische Wiedergabe zu entfernen, muss das Attribut vollständig entfernt werden.

- `controls`
  - : Wenn dieses Attribut vorhanden ist, bietet der Browser Steuerungen an, mit denen der Benutzer die Videowiedergabe steuern kann, einschließlich Lautstärke, Suchvorgänge und Pause/Fortsetzen der Wiedergabe.
- `controlslist`

  - : Das [`controlslist`](https://wicg.github.io/controls-list/explainer.html)-Attribut hilft dem Browser, auszuwählen, welche Steuerungen für das `video`-Element angezeigt werden sollen, wann immer der Browser seine eigene Steuerungssatz anzeigt (also, wenn das `controls`-Attribut angegeben ist).

    Die erlaubten Werte sind `nodownload`, `nofullscreen` und `noremoteplayback`.

    Verwenden Sie das [`disablepictureinpicture`](#disablepictureinpicture)-Attribut, wenn Sie den Bild-im-Bild-Modus (und die Steuerung) deaktivieren möchten.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)

  - : Dieses {{Glossary("Enumerated", "aufgezählte")}} Attribut gibt an, ob CORS verwendet werden soll, um das zugehörige Video abzurufen. [CORS-aktivierte Ressourcen](/de/docs/Web/HTML/How_to/CORS_enabled_image) können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne _verfälscht_ zu sein. Die erlaubten Werte sind:

    - `anonymous`
      - : Sendet eine CORS-Anfrage ohne Anmeldeinformationen. Das bedeutet, dass der `Origin:`-HTTP-Header ohne Cookie, X.509-Zertifikat oder HTTP-Basisauthentifizierung gesendet wird. Wenn der Server keine Anmeldeinformationen an die Ursprungsseite liefert (indem er den `Access-Control-Allow-Origin:`-HTTP-Header nicht setzt), wird die Ressource _verfälscht_ und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Sendet eine CORS-Anfrage mit Anmeldeinformationen. Das bedeutet, dass der `Origin:`-HTTP-Header mit einem Cookie, einem Zertifikat oder bei der Durchführung einer HTTP-Basisauthentifizierung gesendet wird. Wenn der Server keine Anmeldeinformationen an die Ursprungsseite liefert (durch den `Access-Control-Allow-Credentials:`-HTTP-Header), wird die Ressource _verfälscht_ und ihre Nutzung eingeschränkt.

    Wenn nicht vorhanden, wird die Ressource ohne CORS-Anfrage abgerufen (d. h. ohne den `Origin:`-HTTP-Header zu senden), was ihre unverfälschte Nutzung in {{HTMLElement('canvas')}}-Elementen verhindert. Wenn ungültig, wird sie so behandelt, als ob das aufgezählte Schlüsselwort `anonymous` verwendet wurde. Siehe [CORS-Einstellungsattribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für weitere Informationen.

- `disablepictureinpicture`
  - : Verhindert, dass der Browser ein Bild-im-Bild-Kontextmenü vorschlägt oder in einigen Fällen automatisch Bild-im-Bild anfordert.
- `disableremoteplayback`

  - : Ein Boolean-Attribut, das die Fähigkeit zur Remote-Wiedergabe auf Geräten deaktiviert, die mit kabelgebundenen (HDMI, DVI usw.) und drahtlosen Technologien (Miracast, Chromecast, DLNA, AirPlay usw.) verbunden sind.

    In Safari können Sie [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) als Fallback verwenden.

- `height`
  - : Die Höhe des Videoanzeigebereichs in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px) (nur absolute Werte; [keine Prozentangaben](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).
- `loop`
  - : Ein Boolean-Attribut; wenn angegeben, wird der Browser automatisch zum Start zurückkehren, wenn das Ende des Videos erreicht wurde.
- `muted`
  - : Ein Boolean-Attribut, das die Standardeinstellung für die Audiostummschaltung im Video angibt. Wenn aktiviert, wird der Ton zu Beginn stummgeschaltet. Der Standardwert ist `false`, was bedeutet, dass der Ton abgespielt wird, wenn das Video abgespielt wird.
- `playsinline`
  - : Ein Boolean-Attribut, das angibt, dass das Video "inline" abgespielt werden soll, also innerhalb des Wiedergabebereichs des Elements. Beachten Sie, dass das Fehlen dieses Attributs _nicht_ bedeutet, dass das Video immer im Vollbildmodus abgespielt wird.
- `poster`
  - : Eine URL für ein Bild, das angezeigt wird, während das Video heruntergeladen wird. Wenn dieses Attribut nicht angegeben ist, wird nichts angezeigt, bis der erste Frame verfügbar ist, dann wird der erste Frame als Postervorschau angezeigt.
- `preload`

  - : Dieses {{Glossary("enumerated", "aufgezählte")}} Attribut soll dem Browser einen Hinweis darauf geben, was der Autor für die beste Benutzererfahrung hält, in Bezug darauf, welcher Inhalt vor dem Abspielen des Videos geladen wird. Es kann einen der folgenden Werte haben:

    - `none`: Gibt an, dass das Video nicht vorgeladen werden soll.
    - `metadata`: Gibt an, dass nur Videometadaten (z. B. Länge) abgerufen werden.
    - `auto`: Gibt an, dass die gesamte Videodatei heruntergeladen werden kann, auch wenn der Benutzer nicht erwartet wird, sie zu verwenden.
    - _leerer String_: Ein Synonym für den `auto`-Wert.

    Der Standardwert ist in jedem Browser unterschiedlich. Die Spezifikation empfiehlt, ihn auf `metadata` zu setzen.

    > [!NOTE]
    >
    > - Das `autoplay`-Attribut hat Vorrang vor `preload`. Wenn `autoplay` angegeben ist, muss der Browser offensichtlich mit dem Herunterladen des Videos für die Wiedergabe beginnen.
    > - Die Spezifikation zwingt den Browser nicht, den Wert dieses Attributs zu befolgen; es ist nur ein Hinweis.

- `src`
  - : Die URL des einzubettenden Videos. Dies ist optional; Sie können stattdessen das {{HTMLElement("source")}}-Element innerhalb des Video-Blocks verwenden, um das einzubettende Video anzugeben.
- `width`
  - : Die Breite des Videoanzeigebereichs in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px) (nur absolute Werte; [keine Prozentangaben](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).

## Events

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Ereignisname</th>
      <th scope="col">Ausgelöst Wenn</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        [`audioprocess`](/de/docs/Web/API/ScriptProcessorNode/audioprocess_event) {{Deprecated_Inline}}
      </td>
      <td>
        Der Eingabepuffer eines [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) ist
        bereit zur Verarbeitung.
      </td>
    </tr>
    <tr>
      <td>
        [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)
      </td>
      <td>
        Der Browser kann das Medium abspielen, schätzt jedoch, dass nicht genügend Daten geladen wurden, um das Medium ohne Unterbrechung für
        weiteres Puffern abzuspielen.
      </td>
    </tr>
    <tr>
      <td>
        [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
      </td>
      <td>
        Der Browser schätzt, dass er das Medium bis zum Ende ohne
        Unterbrechung für Puffern abspielen kann.
      </td>
    </tr>
    <tr>
      <td>
        [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)
      </td>
      <td>
        Das Rendern eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) ist
        beendet.
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
        Das Medium ist leer geworden; dieses Ereignis wird zum Beispiel gesendet, wenn das Medium bereits geladen (oder teilweise geladen) wurde und die
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
        Es ist ein Fehler beim Abrufen der Mediendaten aufgetreten oder der Typ der
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
        Die Wiedergabe ist bereit zu starten, nachdem sie pausiert oder wegen
        Datenmangels verzögert wurde.
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
        Der Benutzeragent versucht, Mediendaten abzurufen, aber Daten kommen unerwartet nicht.
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
        Die durch das <code>currentTime</code>-Attribut angezeigte Zeit wurde
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
      <td>Die Wiedergabe wurde gestoppt wegen eines temporären Mangels an Daten.</td>
    </tr>
  </tbody>
</table>

## Nutzungshinweise

Browser unterstützen nicht alle das gleiche Videoformate; Sie können mehrere Quellen innerhalb verschachtelter {{htmlelement("source")}}-Elemente bereitstellen, und der Browser verwendet dann das erste, das er versteht.

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

Beim Verwenden von {{htmlelement("source")}}-Elementen versucht der Browser, jede Quelle nacheinander zu laden. Wenn eine Quelle fehlschlägt (z. B. aufgrund einer ungültigen URL oder eines nicht unterstützten Formats), wird die nächste Quelle versucht und so weiter. Ein `error`-Ereignis wird auf dem `<video>`-Element ausgelöst, nachdem alle Quellen fehlgeschlagen sind; `error`-Ereignisse werden nicht auf den einzelnen `<source>`-Elementen ausgelöst.

Wir bieten einen substanziellen und gründlichen [Leitfaden zu Medien-Dateiformaten](/de/docs/Web/Media/Guides/Formats) und den [Leitfaden zu den für Video unterstützten Codecs](/de/docs/Web/Media/Guides/Formats/Video_codecs). Außerdem ist ein Leitfaden zu [Audio-Codecs, die mit ihnen verwendet werden können](/de/docs/Web/Media/Guides/Formats/Audio_codecs), verfügbar.

Weitere Nutzungshinweise:

- Wenn Sie das `controls`-Attribut nicht angeben, enthält das Video nicht die Standard-Steuerelemente des Browsers; Sie können Ihre eigenen benutzerdefinierten Steuerelemente mit JavaScript und der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API erstellen. Sehen Sie [Erstellung eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player) für weitere Details.
- Um eine präzise Kontrolle über Ihre Video- (und Audio-) Inhalte zu ermöglichen, lösen `HTMLMediaElement`s viele verschiedene [Ereignisse](/de/docs/Web/API/HTMLMediaElement#events) aus. Zusätzlich zur Bereitstellung von Kontrollierbarkeit lassen Sie diese Ereignisse den Fortschritt des Downloads und der Wiedergabe des Mediums sowie den Wiedergabestatus und die Position überwachen.
- Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um die Positionierung des Videos innerhalb des Elementrahmens anzupassen, und die {{cssxref("object-fit")}}-Eigenschaft, um zu steuern, wie die Größe des Videos angepasst wird, um innerhalb des Rahmens zu passen.
- Um Untertitel zusammen mit Ihrem Video anzuzeigen, können Sie etwas JavaScript zusammen mit dem {{htmlelement("track")}}-Element und dem [WebVTT](/de/docs/Web/API/WebVTT_API) Format verwenden. Sehen Sie [Untertitel und Beschriftungen zu HTML-Video hinzufügen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) für weitere Informationen.
- Sie können Audiodateien mit einem `<video>`-Element abspielen. Dies kann nützlich sein, wenn Sie zum Beispiel Audio mit einem [WebVTT](/de/docs/Web/API/WebVTT_API) Transkript ausführen müssen, da das {{HTMLElement("audio")}}-Element keine Untertitel mit WebVTT erlaubt.
- Um den Fallback-Inhalt in Browsern zu testen, die das Element unterstützen, können Sie `<video>` durch ein nicht existierendes Element wie `<notavideo>` ersetzen.

Eine gute allgemeine Informationsquelle zur Verwendung von HTML `<video>`-Elementen ist das [HTML-Video- und Audio]-Beginner-Tutorial(/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio).

### Styling mit CSS

Das `<video>`-Element ist ein ersetztes Element—sein {{cssxref("display")}}-Wert ist standardmäßig `inline`—aber seine Standardbreite und -höhe im Ansichtsfenster wird durch das eingebettete Video definiert.

Es gibt keine speziellen Überlegungen zum Styling von `<video>`; eine übliche Strategie besteht darin, ihm einen `display`-Wert von `block` zu geben, um es einfacher zu positionieren, zu skalieren usw., und dann Design- und Layoutinformationen nach Bedarf bereitzustellen. [Grundlagen des Videoplayer-Stylings](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics) bietet einige nützliche Styling-Techniken.

### Hinzufügen von Untertiteln und anderen zeitgesteuerten Textspuren

Zeitgesteuerte Textspuren für Untertitel, Kapitelschlagzeilen usw. können deklarativ hinzugefügt werden, indem das {{HTMLElement("track")}}-Element verschachtelt wird.
Die Spuren werden im [Web Video Text Tracks File Format (WebVTT)](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) (`.vtt`-Dateien) angegeben.

Zum Beispiel enthält das folgende HTML die Datei "captions.vtt", die verwendet wird, um geschlossene Untertitel auf dem Video zu überlagern, wenn Untertitel vom Benutzer aktiviert werden.

```html
<video controls src="video.webm">
  <track default kind="captions" src="captions.vtt" />
</video>
```

Zeitgesteuerte Textspuren können auch programmgesteuert mit der [WebVTT API](/de/docs/Web/API/WebVTT_API) hinzugefügt werden.

### Erkennung der Spurhinzufügung und -entfernung

Sie können erkennen, wann Spuren zu einem `<video>`-Element hinzugefügt oder von diesem entfernt werden, indem Sie die [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event) Ereignisse verwenden. Diese Ereignisse werden jedoch nicht direkt an das `<video>`-Element selbst gesendet.
Stattdessen werden sie an das Spurlisten-Objekt innerhalb des `<video>`-Elements gesendet, das der Art der hinzugefügten Spur entspricht:

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die alle Audiotracks des Medienelements enthält.
    Fügen Sie diesem Objekt einen Listener für `addtrack` hinzu, um benachrichtigt zu werden, wenn neue Audiotracks hinzugefügt werden.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)
  - : Eine [`VideoTrackList`](/de/docs/Web/API/VideoTrackList), die alle Videotracks des Medienelements enthält.
    Fügen Sie diesem Objekt einen `addtrack`-Listener hinzu, um benachrichtigt zu werden, wenn Videotracks hinzugefügt werden.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
  - : Eine [`TextTrackList`](/de/docs/Web/API/TextTrackList), die alle Texttracks des Medienelements enthält (die für Untertitel, geschlossene Untertitel usw. verwendet werden).
    Fügen Sie diesem Objekt einen `addtrack`-Listener hinzu, um benachrichtigt zu werden, wenn Texttracks hinzugefügt werden.

Zum Beispiel können Sie, um zu erkennen, wann Audiotracks zu einem `<video>`-Element hinzugefügt oder von diesem entfernt werden, Code wie diesen verwenden:

```js
const elem = document.querySelector("video");

elem.audioTracks.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTracks.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Dieser Code überwacht das Hinzufügen und Entfernen von Audiotracks aus dem Element und ruft eine hypothetische Funktion in einem Spureditor auf, um die Spur in der Liste der verfügbaren Spuren des Editors zu registrieren und zu entfernen.

Sie können auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um die [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event) Ereignisse zu überwachen.

### Serverunterstützung für Video

Wenn der MIME-Typ für das Video auf dem Server nicht korrekt eingestellt ist, wird das Video möglicherweise nicht angezeigt oder zeigt ein graues Kästchen mit einem X an (wenn JavaScript aktiviert ist).

Wenn Sie Apache Web Server verwenden, um WebM-Videos bereitzustellen, können Sie dieses Problem beheben, indem Sie die Dateityp-Erweiterung des Videos dem `video/webm`-MIME-Typ hinzufügen (die häufigste WebM-Dateierweiterung ist `.webm`). Um dies zu tun, bearbeiten Sie die Datei `mime.types` in `/etc/apache` oder verwenden Sie die `AddType`-Konfigurationsanweisung in `httpd.conf`:

```plain
AddType video/webm .webm
```

Ihr Webhoster bietet möglicherweise eine einfache Benutzeroberfläche zum Konfigurieren von MIME-Typ-Änderungen für neue Technologien, bis ein globales Update von selbst stattfindet.

## Barrierefreiheit

Videos sollten sowohl Untertitel als auch Transkripte bereitstellen, die deren Inhalt genau beschreiben (siehe [Untertitel und Beschriftungen zu HTML-Video hinzufügen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) für weitere Informationen zur Implementierung dieser). Untertitel erlauben es Menschen mit Hörverlust, den Audiomaterial des Videos zu verstehen, während das Video abgespielt wird, während Transkripte Menschen, die zusätzliche Zeit benötigen, die Möglichkeit geben, den Audiomaterial in einem Tempo und Format zu überprüfen, das ihnen angenehm ist.

Es sei darauf hingewiesen, dass Sie zwar Audio-only-Medien synchronisieren können, dies jedoch nur beim Abspielen von Audio in einem `<video>`-Element möglich ist, da die Videoregion des Elements verwendet wird, um die Untertitel anzuzeigen. Dies ist eines der speziellen Szenarien, in denen es nützlich ist, Audio in einem Video-Element abzuspielen.

Wenn automatische Untertitelungsdienste verwendet werden, ist es wichtig, den generierten Inhalt zu überprüfen, um sicherzustellen, dass er die Quelle genau widerspiegelt.

Zusätzlich zum gesprochenen Dialog sollten Untertitel und Transkripte auch Musik und Soundeffekte identifizieren, die wichtige Informationen vermitteln. Dies umfasst Emotion und Tonfall:

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

Untertitel sollten das Hauptthema des Videos nicht verdecken. Sie können mit [der `align`-VTT-Hinweis-Einstellung](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format#cue_settings) positioniert werden.

- [Web Video Text Tracks Format (WebVTT)](/de/docs/Web/API/WebVTT_API)
- [WebAIM: Captions, Transcripts, and Audio Descriptions](https://webaim.org/techniques/captions/)
- [MDN Verständnis der WCAG, Richtlinie 1.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [Verständnis des Erfolgskriteriums 1.2.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Verständnis des Erfolgskriteriums 1.2.2 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Beispiele

### Einzelne Quelle

Dieses Beispiel spielt ein Video ab, wenn es aktiviert wird, und stellt dem Benutzer die Standard-Steuerungen des Browsers zur Verfügung, um die Wiedergabe zu steuern.

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

Bis das Video abgespielt wird, wird das Bild angezeigt, das im `poster`-Attribut bereitgestellt wird. Wenn der Browser die Videowiedergabe nicht unterstützt, wird der Fallback-Text angezeigt.

### Mehrere Quellen

Dieses Beispiel baut auf dem vorherigen auf und bietet drei verschiedene Quellen für das Medium; dies ermöglicht es, dass das Video unabhängig davon angesehen werden kann, welche Videocodecs vom Browser unterstützt werden.

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

Einige Medien-Dateitypen ermöglichen es Ihnen, spezifischere Informationen mit dem [`codecs`](/de/docs/Web/Media/Guides/Formats/codecs_parameter)-Parameter als Teil des Dateityp-Strings bereitzustellen. Zum Beispiel sagt `video/webm; codecs="vp8, vorbis"`, dass die Datei ein [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm)-Video ist, das [VP8](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp8) für Video und [Vorbis](/de/docs/Web/Media/Guides/Formats/Audio_codecs#vorbis) für Audio verwendet.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flow-Inhalt</a>, Phasing-Inhalt, eingebetteter Inhalt. Wenn es ein <a href="#controls"><code>controls</code></a>-Attribut hat: Interaktiver Inhalt und tastbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <p>
          Wenn das Element ein <a href="#src"><code>src</code></a>
          Attribut hat: null oder mehr {{HTMLElement("track")}}-Elemente, gefolgt von transparentem Inhalt, der keine Medienelemente enthält, also keine {{HTMLElement("audio")}} oder <code>&lt;video&gt;</code>.
        </p>
        <p>
          Sonst: null oder mehr {{HTMLElement("source")}}-Elemente, gefolgt von null oder mehr {{HTMLElement("track")}}-Elementen, gefolgt von transparentem Inhalt, der keine Medienelemente enthält, also keine {{HTMLElement("audio")}} oder <code>&lt;video&gt;</code>.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>Jedes Element, das eingebettete Inhalte akzeptiert.</td>
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

- [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Guides/Formats)

  - [Medien-Container-Formate (Dateitypen)](/de/docs/Web/Media/Guides/Formats/Containers)
  - [Web-Video-Codec-Leitfaden](/de/docs/Web/Media/Guides/Formats/Video_codecs)
  - [Web-Audio-Codec-Leitfaden](/de/docs/Web/Media/Guides/Formats/Audio_codecs)

- Positionierung und Größenanpassung des Bildes innerhalb des Rahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
- {{htmlelement("audio")}}
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Manipulation von Videos mit Canvas](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [Konfiguration von Servern für Ogg-Medien](/de/docs/Web/Media/Guides/Formats/Configuring_servers_for_Ogg_media)
