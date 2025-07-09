---
title: "<video>: Das Videoeinbettungselement"
slug: Web/HTML/Reference/Elements/video
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<video>`**-[HTML](/de/docs/Web/HTML)-Element bettet einen Mediaplayer ein, der die Videowiedergabe im Dokument unterstützt. Sie können `<video>` auch für Audiowiedergabe nutzen, aber das {{HTMLElement("audio")}}-Element bietet möglicherweise eine geeignetere Benutzererfahrung.

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

Das obige Beispiel zeigt, wie man das `<video>`-Element verwendet. Ähnlich wie beim {{htmlelement("img")}}-Element fügen wir einen Pfad zu dem Medium, das wir anzeigen möchten, im `src`-Attribut ein; wir können weitere Attribute hinzufügen, um Informationen wie Videobreite und -höhe anzugeben, ob es automatisch abspielen und wiederholen soll oder ob die Standardeinstellungen des Browsers für Videosteuerungen angezeigt werden sollen, und so weiter.

Der Inhalt innerhalb der öffnenden und schließenden `<video></video>`-Tags wird als Fallback in Browsern angezeigt, die das Element nicht unterstützen.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `autoplay`
  - : Ein boolesches Attribut; wenn angegeben, beginnt das Video automatisch mit der Wiedergabe, sobald es kann, ohne anzuhalten, um das Herunterladen der Daten abzuschließen.

    > [!NOTE]
    > Moderne Browser blockieren Audio (oder Videos mit einem nicht stummgeschalteten Audiotrack) von der automatischen Wiedergabe, da Websites, die automatisch Audio abspielen, für Benutzer eine unangenehme Erfahrung sein können. Siehe unseren [Autoplay-Leitfaden](/de/docs/Web/Media/Guides/Autoplay) für weitere Informationen zur ordnungsgemäßen Verwendung von Autoplay.

    Um die automatische Wiedergabe von Videos zu deaktivieren, funktioniert `autoplay="false"` nicht; das Video wird automatisch abgespielt, wenn das Attribut im `<video>`-Tag vorhanden ist. Um die automatische Wiedergabe zu entfernen, muss das Attribut vollständig entfernt werden.

- `controls`
  - : Ist dieses Attribut vorhanden, bietet der Browser Steuerungen an, die es dem Benutzer ermöglichen, die Videowiedergabe zu steuern, einschließlich Lautstärke, Suchlauf und Pause/Wiedergabe.
- `controlslist`
  - : Das [`controlslist`](https://wicg.github.io/controls-list/explainer.html)-Attribut hilft bei Angabe, welche Steuerungen für das `video`-Element angezeigt werden sollen, wann auch immer der Browser seine eigenen Steuerungen anzeigt (das heißt, wenn das `controls`-Attribut angegeben wird).

    Die erlaubten Werte sind `nodownload`, `nofullscreen` und `noremoteplayback`.

    Verwenden Sie das [`disablepictureinpicture`](#disablepictureinpicture)-Attribut, wenn Sie den Picture-In-Picture-Modus (und die Steuerung) deaktivieren möchten.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Dieses [enumerierte](https://en.wikipedia.org/wiki/Enumerated) Attribut gibt an, ob CORS verwendet wird, um das zugehörige Video abzurufen. [Ressourcen mit CORS-Unterstützung](/de/docs/Web/HTML/How_to/CORS_enabled_image) können im {{HTMLElement("canvas")}}-Element ohne _Beschädigung_ wiederverwendet werden. Die zulässigen Werte sind:
    - `anonymous`
      - : Sendet eine Anfrage über Ursprungsgrenzen hinweg ohne Anmeldeinformationen. Anders ausgedrückt sendet es den `Origin:`-HTTP-Header ohne Cookie, X.509-Zertifikat oder Durchführung einer HTTP-Basis-Authentifizierung. Gibt der Server keine Anmeldeinformationen an die Ursprungsseite (indem er den `Access-Control-Allow-Origin:`-HTTP-Header nicht setzt), wird die Ressource _beschädigt_, und ihre Verwendung eingeschränkt.
    - `use-credentials`
      - : Sendet eine Anfrage über Ursprungsgrenzen hinweg mit Anmeldeinformationen. Anders ausgedrückt sendet es den `Origin:`-HTTP-Header mit einem Cookie, einem Zertifikat oder Durchführung einer HTTP-Basis-Authentifizierung. Gibt der Server keine Anmeldeinformationen an die Ursprungsseite (durch den `Access-Control-Allow-Credentials:`-HTTP-Header), wird die Ressource _beschädigt_ und ihre Verwendung eingeschränkt.

    Wenn nicht vorhanden, wird die Ressource ohne CORS-Anfrage abgerufen (d.h. ohne den `Origin:`-HTTP-Header zu senden), was ihre unbeschädigte Nutzung in {{HTMLElement('canvas')}}-Elementen verhindert. Wenn ungültig, wird es behandelt, als ob das enumerierte Schlüsselwort `anonymous` verwendet worden wäre. Weitere Informationen finden Sie unter [CORS-Einstellungen für Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin).

- `disablepictureinpicture`
  - : Verhindert, dass der Browser ein Picture-in-Picture-Kontextmenü vorschlägt oder manchmal automatisch das Picture-in-Picture anfragt.
- `disableremoteplayback`
  - : Ein boolesches Attribut, das verwendet wird, um die Fähigkeit zur Remote-Wiedergabe auf Geräten zu deaktivieren, die über kabelgebundene (HDMI, DVI usw.) und drahtlose Technologien (Miracast, Chromecast, DLNA, AirPlay usw.) angeschlossen sind.

    In Safari können Sie [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) als Fallback verwenden.

- `height`
  - : Die Höhe des Anzeigebereichs des Videos, in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px) (nur absolute Werte; [keine Prozentsätze](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).
- `loop`
  - : Ein boolesches Attribut; wenn angegeben, springt der Browser automatisch zurück zum Anfang, wenn das Ende des Videos erreicht ist.
- `muted`
  - : Ein boolesches Attribut, das die Standardeinstellung für das Stummschalten des im Video enthaltenen Audios angibt. Wenn gesetzt, wird das Audio zu Beginn stumm geschaltet. Der Standardwert ist `false`, das heißt, das Audio wird abgespielt, wenn das Video abgespielt wird.
- `playsinline`
  - : Ein boolesches Attribut, das angibt, dass das Video „inline“ abgespielt wird, das heißt, innerhalb des Wiedergabebereichs des Elements. Beachten Sie, dass das Fehlen dieses Attributs _nicht_ bedeutet, dass das Video immer im Vollbildmodus abgespielt wird.
- `poster`
  - : Eine URL für ein Bild, das angezeigt wird, während das Video heruntergeladen wird. Wenn dieses Attribut nicht angegeben wird, wird nichts angezeigt, bis das erste Frame verfügbar ist; dann wird das erste Frame als Posterbild angezeigt.
- `preload`
  - : Dieses {{Glossary("enumerated", "enumerierte")}} Attribut soll dem Browser einen Hinweis darauf geben, was der Autor für das beste Benutzererlebnis hinsichtlich des Inhalts hält, der vor dem Abspielen des Videos geladen wird. Es kann einen der folgenden Werte haben:
    - `none`: Gibt an, dass das Video nicht vorab geladen werden soll.
    - `metadata`: Gibt an, dass nur Videometadaten (z. B. Länge) abgerufen werden.
    - `auto`: Gibt an, dass die gesamte Videodatei heruntergeladen werden kann, auch wenn der Benutzer sie voraussichtlich nicht verwendet.
    - _leere Zeichenkette_: Ein Synonym für den Wert `auto`.

    Der Standardwert ist für jeden Browser unterschiedlich. Die Spezifikation rät, ihn auf `metadata` zu setzen.

    > [!NOTE]
    >
    > - Das `autoplay`-Attribut hat Vorrang vor `preload`. Wenn `autoplay` angegeben ist, müsste der Browser offensichtlich mit dem Herunterladen des Videos zur Wiedergabe beginnen.
    > - Die Spezifikation zwingt den Browser nicht, dem Wert dieses Attributs zu folgen; es ist lediglich ein Hinweis.

- `src`
  - : Die URL des einzubettenden Videos. Dies ist optional; Sie können stattdessen das {{HTMLElement("source")}}-Element innerhalb des Videoblocks verwenden, um das einzubettende Video anzugeben.
- `width`
  - : Die Breite des Anzeigebereichs des Videos, in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px) (nur absolute Werte; [keine Prozentsätze](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).

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
        Die Eingabepuffer eines [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) ist bereit zur Verarbeitung.
      </td>
    </tr>
    <tr>
      <td>
        [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)
      </td>
      <td>
        Der Browser kann das Medium abspielen, schätzt jedoch, dass nicht genügend Daten geladen wurden, um das Medium bis zum Ende abzuspielen, ohne dass ein zusätzliches Puffern von Inhalten erforderlich ist.
      </td>
    </tr>
    <tr>
      <td>
        [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
      </td>
      <td>
        Der Browser schätzt, dass er das Medium bis zum Ende abspielen kann, ohne zum Puffern von Inhalten anhalten zu müssen.
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
        Das Medium ist leer geworden; beispielsweise wird dieses Ereignis ausgelöst, wenn das Medium bereits geladen (oder teilweise geladen) wurde und die <a href="/de/docs/Web/API/HTMLMediaElement/load" rel="internal"><code>load()</code></a>-Methode aufgerufen wird, um es erneut zu laden.
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
        Ein Fehler trat beim Abrufen der Mediendaten auf, oder der Typ der Ressource ist kein unterstütztes Medienformat.
      </td>
    </tr>
    <tr>
      <td>
        [`loadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event)
      </td>
      <td>Das erste Frame des Mediums wurde geladen.</td>
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
      <td>Ausgelöst, wenn der Browser beginnt, die Ressource zu laden.</td>
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
        Die Wiedergabe ist bereit, nach einer Pause oder Verzögerung aufgrund von Datenmangel zu starten.
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
      <td>Eine <em>Such</em>-Operation hat begonnen.</td>
    </tr>
    <tr>
      <td>
        [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
      </td>
      <td>
        Der Benutzeragent versucht, Mediendaten abzurufen, jedoch kommen unerwartet keine Daten.
      </td>
    </tr>
    <tr>
      <td>
        [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event)
      </td>
      <td>Das Laden von Mediendaten wurde ausgesetzt.</td>
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
      <td>Die Wiedergabe wurde aufgrund eines vorübergehenden Datenmangels gestoppt.</td>
    </tr>
  </tbody>
</table>

## Verwendungshinweise

Browser unterstützen nicht alle die gleichen Videoformate; Sie können mehrere Quellen innerhalb verschachtelter {{htmlelement("source")}}-Elemente bereitstellen, und der Browser verwendet dann den ersten, den er versteht.

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

Wir bieten einen umfangreichen und gründlichen [Leitfaden zu Medien-Dateitypen](/de/docs/Web/Media/Guides/Formats) und den [Leitfaden zu den unterstützten Codecs für Video](/de/docs/Web/Media/Guides/Formats/Video_codecs). Ebenfalls verfügbar ist ein Leitfaden zu [Audio-Codecs, die mit ihnen verwendet werden können](/de/docs/Web/Media/Guides/Formats/Audio_codecs).

Weitere Verwendungshinweise:

- Wenn Sie das `controls`-Attribut nicht angeben, wird das Video nicht die Standardsteuerelemente des Browsers enthalten; Sie können Ihre eigenen benutzerdefinierten Steuerelemente mit JavaScript und der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API erstellen. Siehe [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player) für weitere Details.
- Um präzise Kontrolle über Ihre Video- (und Audio-)Inhalte zu ermöglichen, lösen `HTMLMediaElement`s viele verschiedene [Ereignisse](/de/docs/Web/API/HTMLMediaElement#events) aus. Zusätzlich zur Bereitstellung von Kontrollierbarkeit, ermöglichen diese Ereignisse die Überwachung des Fortschritts sowohl des Downloads als auch der Wiedergabe des Mediums sowie des Wiedergabestatus und der Position.
- Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um die Positionierung des Videos innerhalb des Elementrahmens einzustellen, und die {{cssxref("object-fit")}}-Eigenschaft, um zu steuern, wie die Größe des Videos angepasst wird, um in den Rahmen zu passen.
- Um Untertitel bei Ihrem Video anzuzeigen, können Sie JavaScript zusammen mit dem {{htmlelement("track")}}-Element und dem [WebVTT](/de/docs/Web/API/WebVTT_API)-Format verwenden. Siehe [Hinzufügen von Untertiteln und Bildunterschriften zu HTML5-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) für weitere Informationen.
- Sie können Audiodateien mit einem `<video>`-Element abspielen. Dies kann nützlich sein, wenn Sie beispielsweise Audio mit einem [WebVTT](/de/docs/Web/API/WebVTT_API)-Transkript wiedergeben müssen, da das {{HTMLElement("audio")}}-Element keine Untertitel mit WebVTT erlaubt.
- Um den Fallback-Inhalt in Browsern zu testen, die das Element unterstützen, können Sie `<video>` durch ein nicht existierendes Element wie `<notavideo>` ersetzen.

Eine gute allgemeine Informationsquelle zur Verwendung von HTML `<video>` ist das [HTML-Video- und Audio-Tutorial](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) für Anfänger.

### Styling mit CSS

Das `<video>`-Element ist ein ersetztes Element — sein {{cssxref("display")}}-Wert ist standardmäßig `inline` — aber seine Standardbreite und -höhe im Ansichtsbereich wird durch das eingebettete Video definiert.

Es gibt keine besonderen Überlegungen beim Styling von `<video>`; eine gängige Strategie ist es, ihm einen `display`-Wert von `block` zu geben, um es leichter zu positionieren und zu dimensionieren, etc., und dann bei Bedarf Styling- und Layoutinformationen bereitzustellen. [Grundlagen zur Videoplayer-Bereitstellung](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics) bieten einige nützliche Styling-Techniken.

### Hinzufügen von Untertiteln und anderen zeitgesteuerten Textspuren

Zeitgesteuerte Textspuren für Untertitel, geschlossene Untertitel, Kapitelüberschriften usw. können deklarativ hinzugefügt werden, indem das {{HTMLElement("track")}}-Element verschachtelt wird.
Die Spuren sind in [Web Video Text Tracks File Format (WebVTT)](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) (`.vtt`-Dateien) angegeben.

Zum Beispiel enthält das untenstehende HTML die Datei "captions.vtt", die verwendet wird, um geschlossene Untertitel auf das Video zu legen, wenn Untertitel vom Benutzer aktiviert werden.

```html
<video controls src="video.webm">
  <track default kind="captions" src="captions.vtt" />
</video>
```

Zeitgesteuerte Textspuren können auch programmiert mit der [WebVTT API](/de/docs/Web/API/WebVTT_API) hinzugefügt werden.

### Erkennen von Spurhinzufügung und -entfernung

Sie können erkennen, wann Spuren zu einem `<video>`-Element hinzugefügt oder daraus entfernt werden, indem Sie die [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event)- und [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event)-Ereignisse verwenden. Diese Ereignisse werden jedoch nicht direkt an das `<video>`-Element selbst gesendet.
Stattdessen werden sie an das Spurlistenobjekt innerhalb des `<video>`-Elements gesendet, das im [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) die Art der hinzugefügten Spur entspricht:

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die alle Audiotracks des Medienelements enthält.
    Fügen Sie diesem Objekt einen Listener für `addtrack` hinzu, um benachrichtigt zu werden, wenn neue Audiotracks zum Element hinzugefügt werden.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)
  - : Eine [`VideoTrackList`](/de/docs/Web/API/VideoTrackList), die alle Videotracks des Medienelements enthält.
    Fügen Sie diesem Objekt einen `addtrack`-Listener hinzu, um benachrichtigt zu werden, wenn Videotracks dem Element hinzugefügt werden.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
  - : Eine [`TextTrackList`](/de/docs/Web/API/TextTrackList), die alle Textspuren des Medienelements enthält (die für Untertitel, geschlossene Untertitel usw. verwendet werden).
    Fügen Sie diesem Objekt einen `addtrack`-Listener hinzu, um benachrichtigt zu werden, wenn Textspuren dem Element hinzugefügt werden.

Zum Beispiel können Sie Code wie diesen verwenden, um zu erkennen, wann Audiotracks zu einem `<video>`-Element hinzugefügt oder daraus entfernt werden:

```js
const elem = document.querySelector("video");

elem.audioTracks.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTracks.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Dieser Code überwacht das Hinzufügen und Entfernen von Audiotracks aus dem Element und ruft eine hypothetische Funktion auf einem Track-Editor auf, um den Track in die Liste der verfügbaren Tracks des Editors aufzunehmen und daraus zu entfernen.

Sie können auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um die [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event) Ereignisse zu hören.

### Serverunterstützung für Video

Wenn der MIME-Typ für das Video auf dem Server nicht korrekt eingestellt ist, wird das Video möglicherweise nicht angezeigt oder zeigt einen grauen Kasten mit einem X (wenn JavaScript aktiviert ist).

Wenn Sie Apache Web Server verwenden, um WebM-Videos zu servieren, können Sie dieses Problem beheben, indem Sie die Dateityp-Erweiterungen des Videos dem `video/webm` MIME-Typ hinzufügen (die häufigste WebM-Dateierweiterung ist `.webm`). Dazu bearbeiten Sie die `mime.types`-Datei in `/etc/apache` oder verwenden die `AddType`-Konfigurationsdirektive in `httpd.conf`:

```plain
AddType video/webm .webm
```

Ihr Webhoster bietet möglicherweise eine einfache Benutzeroberfläche zur Änderung der MIME-Typ-Konfiguration für neue Technologien, bis ein globales Update natürlich erfolgt.

## Barrierefreiheit

Videos sollten sowohl Untertitel als auch Transkripte bereitstellen, die ihren Inhalt genau beschreiben (siehe [Hinzufügen von Untertiteln und Bildunterschriften zu HTML5-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) für weitere Informationen zur Implementierung dieser). Untertitel ermöglichen es Personen mit Hörverlust, den Audioinhalt eines Videos während der Wiedergabe zu verstehen, während Transkripte es Personen ermöglichen, die zusätzliche Zeit benötigen, den Audiocontent in einem für sie angenehmen Tempo und Format zu überprüfen.

Es ist erwähnenswert, dass, obwohl Sie nur Audio-Medien untertiteln können, dies nur möglich ist, wenn Sie Audio in einem `<video>`-Element abspielen, da der Videobereich des Elements verwendet wird, um die Untertitel darzustellen. Dies ist ein spezielles Szenario, in dem es nützlich ist, Audio in einem Videoelement abzuspielen.

Wenn automatische Untertitelungsdienste verwendet werden, ist es wichtig, den generierten Inhalt zu überprüfen, um sicherzustellen, dass er die Quellvideo-Inhalte genau wiedergibt.

Zusätzlich zu gesprochenem Dialog sollten auch Musik und Soundeffekte, die wichtige Informationen kommunizieren, in den Untertiteln und Transkripten identifiziert werden. Dies schließt Emotion und Ton ein:

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

Untertitel sollten das Hauptmotiv des Videos nicht behindern. Sie können mit [dem `align` VTT-Cue-Setting](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format#cue_settings) positioniert werden.

- [Web Video Text Tracks Format (WebVTT)](/de/docs/Web/API/WebVTT_API)
- [WebAIM: Captions, Transcripts, and Audio Descriptions](https://webaim.org/techniques/captions/)
- [MDN Verständnis der WCAG-Erklärungen, Richtlinie 1.2](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [Verständnis der Erfolgskriterien 1.2.1 | W3C Verständnis der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Verständnis der Erfolgskriterien 1.2.2 | W3C Verständnis der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Beispiele

### Einzelne Quelle

Dieses Beispiel spielt ein Video ab, wenn es aktiviert wird und gibt dem Benutzer die standardmäßigen Videosteuerungen des Browsers, um die Wiedergabe zu steuern.

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

{{EmbedLiveSample('Einzelne Quelle', '', '400')}}

Bis das Video zu spielen beginnt, wird das im `poster`-Attribut angegebene Bild an seiner Stelle angezeigt. Wenn der Browser die Videowiedergabe nicht unterstützt, wird der Fallback-Text angezeigt.

### Mehrere Quellen

Dieses Beispiel baut auf dem letzten auf und bietet drei verschiedene Quellen für das Medium an; dies ermöglicht das Ansehen des Videos unabhängig davon, welche Video-Codecs vom Browser unterstützt werden.

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

{{EmbedLiveSample('Mehrere Quellen', '', '400')}}

Zuerst wird AVI versucht. Wenn das nicht abgespielt werden kann, wird [MP4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4) probiert. Eine Fallback-Nachricht wird angezeigt, wenn das Videoelement nicht unterstützt wird, jedoch nicht, wenn alle Quellen fehlschlagen.

Einige Mediadateitypen erlauben es, spezifischere Informationen mit dem [`codecs`](/de/docs/Web/Media/Guides/Formats/codecs_parameter)-Parameter als Teil des Dateityp-Strings bereitzustellen. Zum Beispiel sagt `video/webm; codecs="vp8, vorbis"`, dass die Datei ein [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm)-Video ist, das [VP8](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp8) für sein Video und [Vorbis](/de/docs/Web/Media/Guides/Formats/Audio_codecs#vorbis) für Audio verwendet.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließender Inhalt</a>, sprachlicher Inhalt, eingebetteter Inhalt. Wenn es ein <a href="#controls"><code>controls</code></a>-Attribut hat: interaktiver Inhalt und greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <p>
          Wenn das Element ein <a href="#src"><code>src</code></a>-Attribut hat: null oder mehr {{HTMLElement("track")}}-Elemente, gefolgt von transparentem Inhalt, der keine Medienelemente enthalten darf - das heißt, keine {{HTMLElement("audio")}} oder <code>&lt;video&gt;</code>.
        </p>
        <p>
          Ansonsten: null oder mehr {{HTMLElement("source")}}-Elemente, gefolgt von null oder mehr {{HTMLElement("track")}}-Elementen, gefolgt von transparentem Inhalt, der keine Medienelemente enthalten darf - das heißt, keine {{HTMLElement("audio")}} oder <code>&lt;video&gt;</code>.
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
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a>
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

- [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Guides/Formats)
  - [Mediencontainerformate (Dateitypen)](/de/docs/Web/Media/Guides/Formats/Containers)
  - [Web-Video-Codec-Leitfaden](/de/docs/Web/Media/Guides/Formats/Video_codecs)
  - [Web-Audio-Codec-Leitfaden](/de/docs/Web/Media/Guides/Formats/Audio_codecs)

- Positionierung und Größenanpassung des Bildes innerhalb des Rahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
- {{htmlelement("audio")}}
- [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Manipulation von Videos mithilfe von Canvas](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [Konfiguration von Servern für Ogg-Medien](/de/docs/Web/Media/Guides/Formats/Configuring_servers_for_Ogg_media)
