---
title: "<video>: Das Video-Einbettungselement"
slug: Web/HTML/Element/video
l10n:
  sourceCommit: f10015d1752d5668d8fe0de29f9d9807de475d58
---

{{HTMLSidebar}}

Das **`<video>`**-[HTML](/de/docs/Web/HTML)-Element bettet einen Mediaplayer ein, der Videowiedergabe in das Dokument unterstützt. Sie können `<video>` auch für Audiomaterial verwenden, aber das {{HTMLElement("audio")}}-Element könnte eine passendere Benutzererfahrung bieten.

{{EmbedInteractiveExample("pages/tabbed/video.html", "tabbed-standard")}}

Das obige Beispiel zeigt die einfache Verwendung des `<video>`-Elements. Ähnlich wie beim {{htmlelement("img")}}-Element fügen wir einen Pfad zu dem Medium hinzu, das wir im `src`-Attribut anzeigen möchten. Wir können weitere Attribute einfügen, um Informationen wie die Videobreite und -höhe anzugeben, ob es automatisch abgespielt und wiederholt werden soll oder um die standardmäßigen Videosteuerungen des Browsers anzuzeigen usw.

Der Inhalt zwischen den öffnenden und schließenden `<video></video>`-Tags wird als Fallback in Browsern angezeigt, die das Element nicht unterstützen.

## Attribute

Wie alle anderen HTML-Elemente unterstützt auch dieses Element die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `autoplay`

  - : Ein boolesches Attribut; wenn angegeben, beginnt das Video automatisch mit der Wiedergabe, sobald es ohne Unterbrechung zum vollständigen Laden der Daten abgespielt werden kann.

    > [!NOTE]
    > Moderne Browser blockieren Audio (oder Videos mit einer nicht stummgeschalteten Tonspur) vom Autoplay, da Websites, die automatisch Audio abspielen, eine unangenehme Erfahrung für Nutzer sein können. Siehe unseren [Autoplay-Leitfaden](/de/docs/Web/Media/Autoplay_guide) für zusätzliche Informationen darüber, wie Sie Autoplay korrekt verwenden.

    Um das Autoplay von Videos auszuschalten, funktioniert `autoplay="false"` nicht; das Video wird abgespielt, wenn das Attribut überhaupt im `<video>`-Tag vorhanden ist. Um das Autoplay zu entfernen, muss das Attribut vollständig entfernt werden.

- `controls`
  - : Wenn dieses Attribut vorhanden ist, bietet der Browser Steuerungen an, um dem Benutzer die Kontrolle über die Videowiedergabe zu ermöglichen, einschließlich Lautstärkeeinstellung, Suchlauf und Pausieren/Fortsetzen der Wiedergabe.
- `controlslist`

  - : Das [`controlslist`](https://wicg.github.io/controls-list/explainer.html) Attribut hilft dem Browser, auszuwählen, welche Steuerungen für das `video`-Element angezeigt werden sollen, wenn der Browser sein eigenes Steuerungsset zeigt (das heißt, wenn das `controls`-Attribut angegeben ist).

    Erlaubte Werte sind `nodownload`, `nofullscreen` und `noremoteplayback`.

    Verwenden Sie das [`disablepictureinpicture`](#disablepictureinpicture) Attribut, wenn Sie den Bild-im-Bild-Modus (und die Steuerung) deaktivieren möchten.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Dieses {{Glossary("Enumerated", "enumerierte")}} Attribut gibt an, ob CORS verwendet werden soll, um das zugehörige Video abzurufen. [CORS-fähige Ressourcen](/de/docs/Web/HTML/CORS_enabled_image) können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne _verunreinigt_ zu werden. Erlaubte Werte sind:

    - `anonymous`
      - : Sendet eine Cross-Origin-Anfrage ohne Berechtigung. Mit anderen Worten, es sendet den `Origin:` HTTP-Header ohne ein Cookie, X.509-Zertifikat oder Durchführung der HTTP-Basisauthentifizierung. Wenn der Server der Originalsite keine Berechtigungen gewährt (indem er den HTTP-Header `Access-Control-Allow-Origin:` nicht setzt), wird die Ressource _verunreinigt_ und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Sendet eine Cross-Origin-Anfrage mit Berechtigung. Mit anderen Worten, es sendet den `Origin:` HTTP-Header mit einem Cookie, einem Zertifikat oder Durchführung der HTTP-Basisauthentifizierung. Wenn der Server der Originalsite keine Berechtigungen gewährt (durch den HTTP-Header `Access-Control-Allow-Credentials:`), wird die Ressource _verunreinigt_ und ihre Nutzung eingeschränkt.

    Wenn nicht vorhanden, wird die Ressource ohne eine CORS-Anfrage abgerufen (d. h. ohne Senden des `Origin:` HTTP-Headers), was ihre nicht verunreinigte Nutzung in {{HTMLElement('canvas')}}-Elementen verhindert. Wenn ungültig, wird es so behandelt, als wäre das enumerierte Schlüsselwort `anonymous` verwendet. Siehe [CORS-Einstellungsattribute](/de/docs/Web/HTML/Attributes/crossorigin) für zusätzliche Informationen.

- `disablepictureinpicture`
  - : Verhindert, dass der Browser ein Bild-im-Bild-Kontextmenü vorschlägt oder in einigen Fällen automatisch den Bild-im-Bild-Modus anfordert.
- `disableremoteplayback`

  - : Ein boolesches Attribut, das verwendet wird, um die Fähigkeit zur Fernwiedergabe auf Geräten zu deaktivieren, die mit vernetzten (HDMI, DVI, etc.) und kabellosen Technologien (Miracast, Chromecast, DLNA, AirPlay, etc.) verbunden sind.

    In Safari können Sie [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) als Fallback verwenden.

- `height`
  - : Die Höhe des Videoanzeigebereichs in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px) (nur absolute Werte; [keine Prozentwerte](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).
- `loop`
  - : Ein boolesches Attribut; wenn angegeben, wird der Browser automatisch zum Start zurückspringen, wenn das Ende des Videos erreicht wird.
- `muted`
  - : Ein boolesches Attribut, das die standardmäßige Audio-Stummschaltungseinstellung im Video angibt. Wenn gesetzt, bleibt der Ton zunächst stumm. Der Standardwert ist `false`, d.h. der Ton wird abgespielt, wenn das Video abgespielt wird.
- `playsinline`
  - : Ein boolesches Attribut, das angibt, dass das Video "inline" abgespielt werden soll, das heißt, innerhalb des Wiedergabebereichs des Elements. Beachten Sie, dass das Fehlen dieses Attributs _nicht_ bedeutet, dass das Video immer im Vollbild abgespielt wird.
- `poster`
  - : Eine URL für ein Bild, das angezeigt wird, während das Video heruntergeladen wird. Wenn dieses Attribut nicht angegeben ist, wird nichts angezeigt, bis der erste Frame verfügbar ist. Dann wird der erste Frame als Poster-Frame angezeigt.
- `preload`

  - : Dieses {{Glossary("enumerated", "enumerierte")}} Attribut ist dazu gedacht, dem Browser einen Hinweis darauf zu geben, was der Autor für die beste Benutzererfahrung in Bezug auf den Inhalt hält, der geladen wird, bevor das Video abgespielt wird. Es kann einen der folgenden Werte haben:

    - `none`: Gibt an, dass das Video nicht vorab geladen werden soll.
    - `metadata`: Gibt an, dass nur Metadaten des Videos (z. B. Länge) abgerufen werden.
    - `auto`: Gibt an, dass die gesamte Videodatei heruntergeladen werden kann, auch wenn der Benutzer nicht erwartet, sie zu verwenden.
    - _leerer String_: Ein Synonym für den Wert `auto`.

    Der Standardwert ist für jeden Browser unterschiedlich. Die Spezifikation empfiehlt, ihn auf `metadata` zu setzen.

    > [!NOTE]
    >
    > - Das `autoplay`-Attribut hat Vorrang vor `preload`. Wenn `autoplay` angegeben ist, müsste der Browser das Video offensichtlich zum Abspielen herunterladen.
    > - Die Spezifikation zwingt den Browser nicht, den Wert dieses Attributs zu befolgen; es ist ein reiner Hinweis.

- `src`
  - : Die URL des einzubettenden Videos. Dies ist optional; Sie können stattdessen das {{HTMLElement("source")}}-Element innerhalb des Videoblocks verwenden, um das einzubettende Video anzugeben.
- `width`
  - : Die Breite des Videoanzeigebereichs in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px) (nur absolute Werte; [keine Prozentwerte](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).

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
        Der Eingabepuffer eines [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) ist bereit zur Verarbeitung.
      </td>
    </tr>
    <tr>
      <td>
        [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)
      </td>
      <td>
        Der Browser kann das Medium abspielen, schätzt aber, dass nicht genug Daten geladen wurden, um das Medium bis zum Ende abzuspielen, ohne für weiteres Puffern des Inhalts anhalten zu müssen.
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
        Die Wiedergabe eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) wird beendet.
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
        Das Medium ist leer geworden; zum Beispiel wird dieses Ereignis gesendet, wenn das Medium bereits geladen (oder teilweise geladen) ist und die <a href="/de/docs/Web/API/HTMLMediaElement/load" rel="internal"><code>load()</code></a>-Methode aufgerufen wird, um es erneut zu laden.
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
        Ein Fehler ist aufgetreten, während die Mediendaten abgerufen wurden oder der Ressourcentyp kein unterstütztes Medienformat ist.
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
        Die Wiedergabe ist bereit, zu starten, nachdem sie pausiert oder verzögert wurde, aufgrund fehlender Daten.
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
      <td>Ein <em>Seek</em>-Vorgang wurde abgeschlossen.</td>
    </tr>
    <tr>
      <td>
        [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
      </td>
      <td>Ein <em>Seek</em>-Vorgang hat begonnen.</td>
    </tr>
    <tr>
      <td>
        [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
      </td>
      <td>
        Der Benutzeragent versucht, Mediendaten abzurufen, aber die Daten kommen unerwartet nicht.
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
        Die Zeit, die durch das <code>currentTime</code>-Attribut angezeigt wird, wurde aktualisiert.
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
      <td>Die Wiedergabe wurde gestoppt, weil vorübergehend Daten fehlen.</td>
    </tr>
  </tbody>
</table>

## Hinweise zur Verwendung

Nicht alle Browser unterstützen die gleichen Videoformate; Sie können mehrere Quellen innerhalb verschachtelter {{htmlelement("source")}}-Elemente angeben, und der Browser wird dann die erste verwenden, die er versteht.

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

Wir bieten einen substanziellen und umfassenden [Leitfaden zu Medien-Dateitypen](/de/docs/Web/Media/Formats) und den [Leitfaden zu den für Video unterstützten Codecs](/de/docs/Web/Media/Formats/Video_codecs). Ebenfalls verfügbar ist ein Leitfaden zu [Audiocodecs, die mit ihnen verwendet werden können](/de/docs/Web/Media/Formats/Audio_codecs).

Weitere Nutzungshinweise:

- Wenn Sie das `controls`-Attribut nicht angeben, enthält das Video nicht die Standardeinstellungen des Browsers. Sie können eigene Steuerungen mit JavaScript und der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API erstellen. Siehe [Erstellung eines plattformübergreifenden Video-Players](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player) für weitere Details.
- Um eine präzise Kontrolle über Ihre Videos (und Audioinhalte) zu ermöglichen, lösen `HTMLMediaElement`s viele verschiedene [Ereignisse](/de/docs/Web/API/HTMLMediaElement#events) aus. Neben der Bereitstellung von Kontrollierbarkeit ermöglichen diese Ereignisse die Überwachung des Fortschritts von sowohl dem Herunterladen als auch der Wiedergabe des Mediums, sowie des Wiedergabestatus und der Position.
- Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um die Positionierung des Videos innerhalb des Rahmens des Elements anzupassen, und die {{cssxref("object-fit")}}-Eigenschaft, um zu steuern, wie die Größe des Videos angepasst wird, um in den Rahmen zu passen.
- Um Untertitel zu Ihrem Video anzuzeigen, können Sie einige JavaScript zusammen mit dem {{htmlelement("track")}}-Element und dem [WebVTT](/de/docs/Web/API/WebVTT_API)-Format verwenden. Siehe [Hinzufügen von Untertiteln zu HTML-Videos](/de/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) für weitere Informationen.
- Sie können Audiodateien mit einem `<video>`-Element abspielen. Dies kann nützlich sein, wenn Sie beispielsweise Audio mit einem [WebVTT](/de/docs/Web/API/WebVTT_API)-Transkript wiedergeben müssen, da das {{HTMLElement("audio")}}-Element keine Untertitel mit WebVTT zulässt.
- Um den Fallback-Inhalt in Browsern zu testen, die das Element unterstützen, können Sie `<video>` durch ein nicht existentes Element wie `<notavideo>` ersetzen.

Eine gute allgemeine Informationsquelle zur Verwendung von HTML `<video>` ist das [Video- und Audiomaterial](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) Einsteiger-Tutorial.

### Styling mit CSS

Das `<video>`-Element ist ein ersetztes Element — sein {{cssxref("display")}}-Wert ist standardmäßig `inline` — aber seine Standardbreite und -höhe im Ansichtsfenster wird durch das eingebettete Video definiert.

Es gibt keine besonderen Überlegungen zum Styling von `<video>`; eine gängige Strategie ist es, ihm einen `display`-Wert von `block` zu geben, um es einfacher zu positionieren, zu skalieren usw., und dann Styling- und Layoutinformationen wie gewünscht bereitzustellen. [Grundlagen des Video-Player-Stylings](/de/docs/Web/Media/Audio_and_video_delivery/Video_player_styling_basics) bietet einige nützliche Styling-Techniken.

### Hinzufügen von Untertiteln und anderen zeitgesteuerten Textspuren

Zeitgesteuerte Textspuren für Untertitel, geschlossene Untertitel, Kapitelüberschriften usw. können deklarativ hinzugefügt werden, indem das {{HTMLElement("track")}}-Element verschachtelt wird. Die Spuren werden im [Web Video Text Tracks File Format (WebVTT)](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) (`.vtt`-Dateien) spezifiziert.

Zum Beispiel enthält der folgende HTML-Code die Datei "captions.vtt", die verwendet wird, um geschlossene Untertitel auf dem Video einzublenden, wenn Untertitel vom Benutzer aktiviert werden.

```html
<video controls src="video.webm">
  <track default kind="captions" src="captions.vtt" />
</video>
```

Zeitgesteuerte Textspuren können auch programmatisch mit der [WebVTT-API](/de/docs/Web/API/WebVTT_API) hinzugefügt werden.

### Erkennen von Spur hinzufügung und -entfernung

Sie können erkennen, wenn Spuren zu einem `<video>`-Element hinzugefügt oder entfernt werden, indem Sie die [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event)- und [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event)-Ereignisse verwenden. Diese Ereignisse werden jedoch nicht direkt an das `<video>`-Element selbst gesendet. Stattdessen werden sie an das Track-List-Objekt innerhalb des `<video>`-Elements gesendet, das dem Typ der hinzugefügten Spur entspricht:

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die alle Audio-Tracks des Medienelements enthält. Fügen Sie diesem Objekt einen Listener für `addtrack` hinzu, um benachrichtigt zu werden, wenn neue Audiotracks zum Element hinzugefügt werden.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)
  - : Eine [`VideoTrackList`](/de/docs/Web/API/VideoTrackList), die alle Video-Tracks des Medienelements enthält. Fügen Sie diesem Objekt einen `addtrack`-Listener hinzu, um benachrichtigt zu werden, wenn Video-Tracks zum Element hinzugefügt werden.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
  - : Eine [`TextTrackList`](/de/docs/Web/API/TextTrackList), die alle Textspuren des Medienelements enthält (die für Untertitel, geschlossene Untertitel usw. verwendet werden). Fügen Sie diesem Objekt einen `addtrack`-Listener hinzu, um benachrichtigt zu werden, wenn Textspuren zum Element hinzugefügt werden.

Zum Beispiel können Sie Code wie diesen verwenden, um zu erkennen, wann Audiospuren zu oder von einem `<video>`-Element hinzugefügt oder entfernt werden:

```js
const elem = document.querySelector("video");

elem.audioTracks.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTracks.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Dieser Code überwacht das Hinzufügen und Entfernen von Audiotracks zum Element und ruft eine hypothetische Funktion in einem Track-Editor auf, um den Track in der Liste der verfügbaren Tracks des Editors zu registrieren und zu entfernen.

Sie können auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um die [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event)- und [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event)-Ereignisse zu überwachen.

### Serverunterstützung für Video

Wenn der MIME-Typ des Videos auf dem Server nicht korrekt eingestellt ist, wird das Video möglicherweise nicht angezeigt oder es wird ein graues Feld mit einem X angezeigt (wenn JavaScript aktiviert ist).

Wenn Sie den Apache-Webserver verwenden, um WebM-Videos bereitzustellen, können Sie dieses Problem beheben, indem Sie die Dateitypen-Erweiterungen der Videodatei dem MIME-Typ `video/webm` hinzufügen (die häufigste WebM-Dateierweiterung ist `.webm`). Um dies zu tun, bearbeiten Sie die Datei `mime.types` in `/etc/apache` oder verwenden Sie die `AddType`-Konfigurationsdirektive in `httpd.conf`:

```plain
AddType video/webm .webm
```

Ihr Webhost kann eine einfache Benutzeroberfläche zur Konfiguration von MIME-Typ-Änderungen für neue Technologien bereitstellen, bis ein globales Update von selbst erfolgt.

## Barrierefreiheit

Videos sollten sowohl Untertitel als auch Transkripte bereitstellen, die ihren Inhalt genau beschreiben (siehe [Hinzufügen von Untertiteln zu HTML-Videos](/de/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) für weitere Informationen zur Implementierung). Untertitel ermöglichen es Menschen, die von Hörverlust betroffen sind, den Audioinhalt eines Videos zu verstehen, während das Video abgespielt wird. Transkripte erlauben es Personen, die zusätzliche Zeit benötigen, audioinhalte in einem Tempo und Format zu überprüfen, das für sie angenehm ist.

Es ist erwähnenswert, dass während Sie Audio-Only-Medien untertiteln können, dies nur möglich ist, wenn die Audiodateien in einem `<video>`-Element abgespielt werden, da der Videobereich des Elements verwendet wird, um die Untertitel anzuzeigen. Dies ist eines der besonderen Szenarien, in denen es nützlich ist, Audio in einem Videoelement abzuspielen.

Falls automatische Untertitelungsdienste verwendet werden, ist es wichtig, die erstellten Inhalte zu überprüfen, um sicherzustellen, dass sie den ursprünglichen Videoinhalt genau repräsentieren.

Zusätzlich zum gesprochenen Dialog sollten Untertitel und Transkripte auch Musik und Soundeffekte identifizieren, die wichtige Informationen kommunizieren. Dies umfasst Emotionen und Tonalität:

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

Untertitel sollten das Hauptmotiv des Videos nicht verdecken. Sie können mit [der `align` VTT-Cue-Einstellung](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format#cue_settings) positioniert werden.

- [Web Video Text Tracks Format (WebVTT)](/de/docs/Web/API/WebVTT_API)
- [WebAIM: Untertitel, Transkripte und Audiobeschreibungen](https://webaim.org/techniques/captions/)
- [MDN Benötigung von WCAG, Leitlinie 1.2 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [Erklärung des Erfolgskriteriums 1.2.1 | W3C Benötigung von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Erklärung des Erfolgskriteriums 1.2.2 | W3C Benötigung von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Beispiele

### Einzelne Quelle

Dieses Beispiel spielt ein Video ab, wenn es aktiviert wird, und bietet dem Benutzer die standardmäßigen Videosteuerungen des Browsers, um die Wiedergabe zu steuern.

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

Bis das Video beginnt, wird das im `poster`-Attribut angegebene Bild an seiner Stelle angezeigt. Wenn der Browser die Videowiedergabe nicht unterstützt, wird der Fallback-Text angezeigt.

### Mehrere Quellen

Dieses Beispiel baut auf dem vorherigen auf und bietet drei verschiedene Quellen für das Medium; dies ermöglicht es, das Video unabhängig davon anzusehen, welche Videocodecs vom Browser unterstützt werden.

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

Zuerst wird AVI versucht. Wenn das nicht abgespielt werden kann, wird [MP4](/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4) versucht. Eine Fallback-Nachricht wird angezeigt, wenn das Videoelement nicht unterstützt wird, aber nicht, wenn alle Quellen fehlschlagen.

Einige Medien-Dateitypen ermöglichen es Ihnen, spezifischere Informationen mit dem [`codecs`](/de/docs/Web/Media/Formats/codecs_parameter)-Parameter als Teil des Dateityps anzugeben. Ein relativ einfaches Beispiel ist `video/webm; codecs="vp8, vorbis"`, welches angibt, dass es sich um ein [WebM](/de/docs/Web/Media/Formats/Containers#webm)-Video handelt, das [VP8](/de/docs/Web/Media/Formats/Video_codecs#vp8) für Video und [Vorbis](/de/docs/Web/Media/Formats/Audio_codecs#vorbis) für Audio verwendet.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>, phrasierter Inhalt, eingebetteter Inhalt. Wenn es ein <a href="#controls"><code>controls</code></a>-Attribut hat: interaktiver Inhalt und fassbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <p>
          Wenn das Element ein <a href="#src"><code>src</code></a>-Attribut hat: null oder mehr {{HTMLElement("track")}}-Elemente, gefolgt von transparentem Inhalt, der keine Medienelemente enthält–das heißt, kein {{HTMLElement("audio")}} oder <code>&lt;video&gt;</code>.
        </p>
        <p>
          Andernfalls: null oder mehr {{HTMLElement("source")}}-Elemente, gefolgt von null oder mehr {{HTMLElement("track")}}-Elementen, gefolgt von transparentem Inhalt, der keine Medienelemente enthält – das heißt, kein {{HTMLElement("audio")}} oder <code>&lt;video&gt;</code>.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebetteten Inhalt akzeptiert.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a>
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

- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Formats)

  - [Mediencontainerformate (Dateitypen)](/de/docs/Web/Media/Formats/Containers)
  - [Leitfaden für Web-Videocodecs](/de/docs/Web/Media/Formats/Video_codecs)
  - [Leitfaden für Web-Audiocodecs](/de/docs/Web/Media/Formats/Audio_codecs)

- Positionieren und Größenanpassung des Bildes im Rahmen: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
- {{htmlelement("audio")}}
- [Verwendung von HTML-Audio und -Video](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [Manipulieren von Videos mit Canvas](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [Konfigurieren von Servern für Ogg-Medien](/de/docs/Web/HTTP/Configuring_servers_for_Ogg_media)
