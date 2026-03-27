---
title: "<video>: Das Video-Einbettungselement"
slug: Web/HTML/Reference/Elements/video
l10n:
  sourceCommit: 8db892b3e7ca294621898441e7db2481e0e6d939
---

Das **`<video>`**-Element in [HTML](/de/docs/Web/HTML) bettet einen Mediaplayer ein, der die Videowiedergabe im Dokument unterstützt. Sie können `<video>` auch für Audioinhalte verwenden, aber das {{HTMLElement("audio")}}-Element könnte eine angemessenere Benutzererfahrung bieten.

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

Das obige Beispiel zeigt, wie das `<video>`-Element verwendet wird. Ähnlich wie beim {{htmlelement("img")}}-Element geben wir einen Pfad zu den anzuzeigenden Medien im `src`-Attribut an; wir können andere Attribute einschließen, um Informationen wie Video-Breite und -Höhe, Autoplay und Schleifen oder das Anzeigen der Standard-Videosteuerungen des Browsers usw. zu spezifizieren.

Der Inhalt zwischen dem öffnenden und schließenden `<video></video>`-Tag wird als Fallback in Browsern angezeigt, die das Element nicht unterstützen.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `autoplay`
  - : Ein Boolesches Attribut; wenn angegeben, beginnt das Video automatisch mit der Wiedergabe, sobald es geladen ist, ohne auf das vollständige Laden der Daten zu warten.

    > [!NOTE]
    > Moderne Browser blockieren Audio (oder Videos mit einer nicht stummgeschalteten Tonspur) vom automatischen Abspielen, da Websites, die Audio automatisch abspielen, eine unangenehme Erfahrung für Benutzer sein können. Siehe unseren [Autoplay-Leitfaden](/de/docs/Web/Media/Guides/Autoplay) für weitere Informationen zur richtigen Verwendung von Autoplay.

    Um das automatische Abspielen von Videos zu deaktivieren, funktioniert `autoplay="false"` nicht; das Video startet automatisch, wenn das Attribut im `<video>`-Tag vorhanden ist. Um Autoplay zu entfernen, muss das Attribut vollständig entfernt werden.

    > [!NOTE]
    > Videos mit dem Attribut [`loading="lazy"`](#loading) werden nicht heruntergeladen und abgespielt, bis das Element sich in der Nähe des oder innerhalb des Sichtfensters befindet.

- `controls`
  - : Wenn dieses Attribut vorhanden ist, bietet der Browser Steuerungen an, um dem Benutzer die Kontrolle über die Videowiedergabe zu ermöglichen, einschließlich Lautstärke, Suchfunktion und Pause/Wiedergabe.
- `controlslist`
  - : Das [`controlslist`](https://wicg.github.io/controls-list/explainer.html)-Attribut hilft dem Browser, auszuwählen, welche Steuerungen für das `video`-Element angezeigt werden sollen, wenn der Browser sein eigenes Satz von Steuerungen zeigt (d.h. wenn das `controls`-Attribut angegeben ist).

    Die erlaubten Werte sind `nodownload`, `nofullscreen` und `noremoteplayback`.

    Verwenden Sie das [`disablepictureinpicture`](#disablepictureinpicture)-Attribut, wenn Sie den Bild-in-Bild-Modus (und die Steuerung) deaktivieren möchten.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Dieses {{Glossary("Enumerated", "enumerierte")}} Attribut gibt an, ob CORS verwendet werden soll, um das zugehörige Video abzurufen. [CORS-fähige Ressourcen](/de/docs/Web/HTML/How_to/CORS_enabled_image) können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne _verunreinigt_ zu sein. Die erlaubten Werte sind:
    - `anonymous`
      - : Sendet eine Cross-Origin-Anfrage ohne Berechtigung. Mit anderen Worten, es sendet den `Origin:` HTTP-Header ohne einen Cookie, X.509-Zertifikat oder Durchführung der HTTP-Basisauthentifizierung. Wenn der Server der Ursprung-Website keine Berechtigungen erteilt (durch Nichtsetzen des `Access-Control-Allow-Origin:` HTTP-Headers), wird die Ressource _verunreinigt_ und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Sendet eine Cross-Origin-Anfrage mit Berechtigung. Mit anderen Worten, es sendet den `Origin:` HTTP-Header mit einem Cookie, einem Zertifikat oder Durchführung der HTTP-Basisauthentifizierung. Wenn der Server der Ursprung-Website keine Berechtigungen erteilt (durch den `Access-Control-Allow-Credentials:` HTTP-Header), wird die Ressource _verunreinigt_ und ihre Nutzung eingeschränkt.

    Wenn nicht vorhanden, wird die Ressource ohne CORS-Anfrage abgefragt (d.h. ohne Senden des `Origin:` HTTP-Headers), was ihre unverunreinigte Verwendung in {{HTMLElement('canvas')}}-Elementen verhindert. Wenn ungültig, wird es behandelt, als ob das enumerierte Schlüsselwort `anonymous` verwendet wurde. Siehe [CORS-Einstellungs-Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für weitere Informationen.

- `disablepictureinpicture`
  - : Verhindert, dass der Browser ein Bild-in-Bild-Kontextmenü vorschlägt oder automatisch in einigen Fällen Bild-in-Bild anfordert.
- `disableremoteplayback`
  - : Ein Boolesches Attribut, das die Fähigkeit zur Fernwiedergabe auf Geräten deaktiviert, die über kabelgebundene (HDMI, DVI usw.) und drahtlose Technologien (Miracast, Chromecast, DLNA, AirPlay usw.) angeschlossen sind.

    In Safari können Sie [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) als Fallback verwenden.

- `height`
  - : Die Höhe des Anzeigebereichs des Videos in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px) (nur absolute Werte; [keine Prozentsätze](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).

- `loading`
  - : Gibt an, wie der Browser das Video (einschließlich eines Posterbildes) laden soll:
    - `eager`
      - : Lädt das Video sofort, unabhängig davon, ob sich das Video derzeit im sichtbaren Bereich befindet oder nicht (dies ist der Standardwert).
    - `lazy`
      - : Verschiebt das Laden des Videos, bis es einen berechneten Abstand vom Ansichtsfenster erreicht, wie vom Browser definiert.

        Das „Lazy Loading“ vermeidet den Netzwerk- und Speicherkapazitätsbedarf, um das Video zu handhaben, bis relativ sicher ist, dass es benötigt wird. Dies verbessert die Leistung in den meisten typischen Nutzungsszenarien.

    Während explizite [`width`](#width)- und [`height`](#height)-Attribute für alle Videos empfohlen werden, um Layoutverschiebungen zu vermeiden, sind sie besonders wichtig für „Lazy Loaded“-Videos. „Lazy Loaded“-Videos werden niemals geladen, wenn sie keinen sichtbaren Teil eines Elements schneiden, selbst wenn das Laden sie ändern würde, da ungeladene Videos eine `width` und `height` von `0` haben. Es führt zu einer noch störenderen Benutzererfahrung, wenn sich der Inhalt im sichtbaren Bereich während des Lesens neu formatiert.

    „Lazy Loaded“-Videos, die sich im visuellen Ansichtsfenster befinden, sind möglicherweise noch nicht sichtbar, wenn das Window-Objekt [`load`](/de/docs/Web/API/Window/load_event)-Ereignis ausgelöst wird. Dies liegt daran, dass das Ereignis basierend auf „Eager Loaded“-Videos ausgelöst wird – „Lazy Loaded“-Videos werden nicht berücksichtigt, selbst wenn sie sich im visuellen Ansichtsfenster beim ersten Laden der Seite befinden.

    Das Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Maßnahme gegen das Verfolgen, da, wenn eine Benutzeragent „Lazy Loading“ unterstützt, wenn das Skripten deaktiviert ist, es immer noch möglich wäre, die ungefähre Scrollposition eines Benutzers während einer Sitzung zu verfolgen, indem strategisch Videos im Markup einer Seite platziert werden, sodass ein Server verfolgen kann, wie viele Videos angefordert werden und wann.

    > [!NOTE]
    > Das Attribut `loading="lazy"` beeinflusst auch die Attribute [`autoplay`](#autoplay), [`poster`](#poster) und [`preload`](#preload), wie in den jeweiligen Abschnitten der Seite beschrieben.

- `loop`
  - : Ein Boolesches Attribut; wenn angegeben, geht der Browser automatisch zum Anfang zurück, wenn das Ende des Videos erreicht ist.

- `muted`
  - : Ein Boolesches Attribut, das die Standardeinstellung für die Stummschaltung des im Video enthaltenen Audios angibt. Wenn gesetzt, wird der Ton initial stummgeschaltet. Der Standardwert ist `false`, was bedeutet, dass der Ton abgespielt wird, wenn das Video abgespielt wird.

- `playsinline`
  - : Ein Boolesches Attribut, das angibt, dass das Video „inline“ abgespielt werden soll, das heißt, innerhalb des Abspielbereichs des Elements. Beachten Sie, dass das Fehlen dieses Attributs _nicht_ impliziert, dass das Video immer im Vollbildmodus abgespielt wird.

- `poster`
  - : Eine URL für ein Bild, das angezeigt wird, während das Video heruntergeladen wird. Wenn dieses Attribut nicht angegeben ist, wird nichts angezeigt, bis der erste Frame verfügbar ist, dann wird der erste Frame als Posterframe angezeigt.

    > [!NOTE]
    > Videos, bei denen das Attribut [`loading="lazy"`](#loading) gesetzt ist, laden die `poster`-Ressource nur herunter, wenn sich das Video in der Nähe des oder innerhalb des Ansichtsfensters befindet.

- `preload`
  - : Dieses {{Glossary("enumerated", "enumerierte")}} Attribut soll einen Hinweis für den Browser bieten, was der Autor für die beste Benutzererfahrung hält, in Bezug auf den Inhalt, der vor der Videowiedergabe geladen wird. Es kann einen der folgenden Werte haben:
    - `none`: Gibt an, dass das Video nicht vorab geladen werden sollte.
    - `metadata`: Gibt an, dass nur Metadaten des Videos (z.B. Länge) abgerufen werden.
    - `auto`: Gibt an, dass die ganze Videodatei heruntergeladen werden kann, selbst wenn der Benutzer sie voraussichtlich nicht verwenden wird.
    - _leere Zeichenkette_: Ein Synonym für den Wert `auto`.

    Der Standardwert ist für jeden Browser unterschiedlich. Die Spezifikation empfiehlt, ihn auf `metadata` zu setzen.

    > [!NOTE]
    >
    > - Das `autoplay`-Attribut hat Vorrang vor `preload`. Wenn `autoplay` angegeben ist, müsste der Browser offensichtlich anfangen, das Video für die Wiedergabe herunterzuladen.
    > - Die Spezifikation zwingt den Browser nicht, dem Wert dieses Attributs zu folgen; es ist lediglich ein Hinweis.

    > [!NOTE]
    > Videos, bei denen das Attribut [`loading="lazy"`](#loading) gesetzt ist, wenden das `preload`-Verhalten erst an, wenn sich das Video in der Nähe des oder innerhalb des Ansichtsfensters befindet.

- `src`
  - : Die URL des einzubettenden Videos. Dies ist optional; stattdessen können Sie das {{HTMLElement("source")}}-Element innerhalb des Videoblocks verwenden, um das einzubettende Video anzugeben.
- `width`
  - : Die Breite des Anzeigebereichs des Videos in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px) (nur absolute Werte; [keine Prozentsätze](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).

## Ereignisse

- [`audioprocess`](/de/docs/Web/API/ScriptProcessorNode/audioprocess_event) {{Deprecated_Inline}}
  - : Der Eingabepuffer eines [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) ist bereit zur Verarbeitung.
- [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)
  - : Der Browser kann die Medien abspielen, schätzt jedoch, dass nicht genügend Daten geladen wurden, um die Medien bis zum Ende der Datei abzuspielen, ohne für weiteres Puffern des Inhalts anhalten zu müssen.
- [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
  - : Der Browser schätzt, dass er das Medium bis zum Ende abspielen kann, ohne für das Puffern von Inhalten anzuhalten.
- [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)
  - : Das Rendering eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) ist beendet.
- [`durationchange`](/de/docs/Web/API/HTMLMediaElement/durationchange_event)
  - : Das Attribut `duration` wurde aktualisiert.
- [`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)
  - : Die Medien sind leer geworden; dieses Ereignis wird beispielsweise gesendet, wenn die Medien bereits geladen (oder teilweise geladen) waren und die [`load()`](/de/docs/Web/API/HTMLMediaElement/load)-Methode aufgerufen wird, um sie erneut zu laden.
- [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)
  - : Die Wiedergabe wurde gestoppt, weil das Ende des Mediums erreicht wurde.
- [`error`](/de/docs/Web/API/HTMLMediaElement/error_event)
  - : Ein Fehler trat auf, während die Mediendaten geholt wurden, oder der Typ der Ressource ist kein unterstütztes Medienformat.
- [`loadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event)
  - : Der erste Frame des Mediums ist fertig geladen.
- [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
  - : Die Metadaten wurden geladen.
- [`loadstart`](/de/docs/Web/API/HTMLMediaElement/loadstart_event)
  - : Wird ausgelöst, wenn der Browser begonnen hat, die Ressource zu laden.
- [`pause`](/de/docs/Web/API/HTMLMediaElement/pause_event)
  - : Die Wiedergabe wurde pausiert.
- [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)
  - : Die Wiedergabe hat begonnen.
- [`playing`](/de/docs/Web/API/HTMLMediaElement/playing_event)
  - : Die Wiedergabe ist bereit zu beginnen, nachdem sie pausiert wurde oder durch Datenmangel verzögert wurde.
- [`progress`](/de/docs/Web/API/HTMLMediaElement/progress_event)
  - : Wird periodisch ausgelöst, während der Browser eine Ressource lädt.
- [`ratechange`](/de/docs/Web/API/HTMLMediaElement/ratechange_event)
  - : Die Wiedergabegeschwindigkeit wurde geändert.
- [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event)
  - : Eine _Such_-Operation wurde abgeschlossen.
- [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
  - : Eine _Such_-Operation hat begonnen.
- [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
  - : Die Benutzeragent versucht, Mediendaten zu holen, aber Daten kommen unerwartet nicht weiter.
- [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event)
  - : Das Laden der Mediendaten wurde unterbrochen.
- [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)
  - : Die durch das `currentTime`-Attribut angegebene Zeit wurde aktualisiert.
- [`volumechange`](/de/docs/Web/API/HTMLMediaElement/volumechange_event)
  - : Die Lautstärke wurde geändert.
- [`waiting`](/de/docs/Web/API/HTMLMediaElement/waiting_event)
  - : Die Wiedergabe wurde gestoppt, weil temporär keine Daten verfügbar sind.

## Verwendungshinweise

Browser unterstützen nicht alle dasselben Videoformate; Sie können mehrere Quellen innerhalb verschachtelter {{htmlelement("source")}}-Elemente bereitstellen, und der Browser verwendet dann die erste, die er versteht.

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

Wenn Sie {{htmlelement("source")}}-Elemente verwenden, versucht der Browser, jede Quelle der Reihe nach zu laden. Wenn eine Quelle fehlschlägt (z.B. aufgrund einer ungültigen URL oder eines nicht unterstützten Formats), wird die nächste Quelle versucht, und so weiter. Ein `error`-Ereignis wird auf dem `<video>`-Element ausgelöst, nachdem alle Quellen fehlgeschlagen sind; `error`-Ereignisse werden nicht auf jedem `<source>`-Element einzeln ausgelöst.

Wir bieten einen umfassenden und gründlichen [Leitfaden zu Medien-Dateiformaten](/de/docs/Web/Media/Guides/Formats) und zum [Leitfaden zu den unterstützten Codecs für Video](/de/docs/Web/Media/Guides/Formats/Video_codecs). Auch verfügbar ist ein Leitfaden zu [Audiocodecs, die mit ihnen verwendet werden können](/de/docs/Web/Media/Guides/Formats/Audio_codecs).

Weitere Verwendungshinweise:

- Wenn Sie das `controls`-Attribut nicht angeben, enthält das Video nicht die Standardsteuerungen des Browsers; Sie können Ihre eigenen benutzerdefinierten Steuerungen mit JavaScript und der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API erstellen. Siehe [Erstellung eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player) für mehr Details.
- Um eine genaue Kontrolle über Ihre Video- (und Audio-) Inhalte zu ermöglichen, lösen `HTMLMediaElement`s viele verschiedene [Ereignisse](/de/docs/Web/API/HTMLMediaElement#events) aus. Neben der Bereitstellung von Steuerungsmöglichkeiten ermöglichen diese Ereignisse, den Fortschritt des Downloads und der Wiedergabe des Mediums sowie den Wiedergabezustand und die Position zu überwachen.
- Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um die Positionierung des Videos im Rahmen des Elements anzupassen, und die {{cssxref("object-fit")}}-Eigenschaft, um zu steuern, wie die Größe des Videos angepasst wird, um in den Rahmen zu passen.
- Um Untertitel zusammen mit Ihrem Video anzuzeigen, können Sie etwas JavaScript zusammen mit dem {{htmlelement("track")}}-Element und dem [WebVTT](/de/docs/Web/API/WebVTT_API)-Format verwenden. Siehe [Hinzufügen von Untertiteln zu HTML-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) für weitere Informationen.
- Sie können Audiodateien über ein `<video>`-Element abspielen. Dies kann nützlich sein, wenn Sie beispielsweise Audio mit einem [WebVTT](/de/docs/Web/API/WebVTT_API)-Transkript durchführen müssen, da das {{HTMLElement("audio")}}-Element keine Untertitel mit WebVTT zulässt.
- Um den Fallback-Inhalt in Browsern zu testen, die das Element unterstützen, können Sie `<video>` durch ein nicht vorhandenes Element wie `<notavideo>` ersetzen.

Eine gute allgemeine Informationsquelle zur Verwendung von HTML-`<video>` ist das [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) Einsteigertutorial.

### Styling mit CSS

Das `<video>`-Element ist ein ersetztes Element — sein {{cssxref("display")}}-Wert ist standardmäßig `inline` — aber seine Standardbreite und -höhe im Ansichtsfenster wird durch das eingebettete Video definiert.

Für das Styling von `<video>` gibt es keine speziellen Überlegungen; eine übliche Strategie ist, ihm einen `display`-Wert von `block` zu geben, um das Positionieren, Größenanpassung usw. zu erleichtern, und dann Styling- und Layoutinformationen nach Bedarf bereitzustellen. [Grundlagen der Videoplayer-Styling](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics) bieten einige nützliche Styling-Techniken.

### Hinzufügen von Untertiteln und anderen zeitgesteuerten Textspuren

Zeitgesteuerte Textspuren für Untertitel, geschlossene Untertitel, Kapitelüberschriften usw. können deklarativ hinzugefügt werden, indem das {{HTMLElement("track")}}-Element verschachtelt wird.
Die Spuren werden in [Web Video Text Tracks File Format (WebVTT)](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) (`.vtt`-Dateien) angegeben.

Zum Beispiel enthält das untenstehende HTML die Datei "captions.vtt", die verwendet wird, um geschlossene Untertitel auf das Video zu überlagern, wenn Untertitel vom Benutzer aktiviert sind.

```html
<video controls src="video.webm">
  <track default kind="captions" src="captions.vtt" />
</video>
```

Zeitgesteuerte Textspuren können auch programmgesteuert mithilfe der [WebVTT API](/de/docs/Web/API/WebVTT_API) hinzugefügt werden.

### Erkennung der Spurenhinzufügung und -entfernung

Sie können erkennen, wann Spuren einem `<video>`-Element hinzugefügt und daraus entfernt werden, indem Sie die [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event) Ereignisse verwenden. Diese Ereignisse werden jedoch nicht direkt an das `<video>`-Element selbst gesendet.
Stattdessen werden sie an das Tracklist-Objekt innerhalb des `<video>`-Elements gesendet, das zur Art der Spur im {{HTMLElement}}-Element gehört:

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die alle Audiotracks des Medienelements enthält.
    Fügt diesem Objekt einen Listener für `addtrack` hinzu, um benachrichtigt zu werden, wenn neue Audiotracks zum Element hinzugefügt werden.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)
  - : Eine [`VideoTrackList`](/de/docs/Web/API/VideoTrackList), die alle Videotracks des Medienelements enthält.
    Fügt diesem Objekt einen Listener für `addtrack` hinzu, um benachrichtigt zu werden, wenn Videotracks zum Element hinzugefügt werden.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
  - : Eine [`TextTrackList`](/de/docs/Web/API/TextTrackList), die alle Texttracks des Medienelements enthält (die für Untertitel, geschlossene Untertitel usw. verwendet werden).
    Fügt diesem Objekt einen Listener für `addtrack` hinzu, um benachrichtigt zu werden, wenn Texttracks zum Element hinzugefügt werden.

Zum Beispiel, um zu erkennen, wann Audiotracks zu einem `<video>`-Element hinzugefügt oder daraus entfernt werden, können Sie Code wie diesen verwenden:

```js
const elem = document.querySelector("video");

elem.audioTracks.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTracks.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Dieser Code überwacht, ob Audiotracks zum Element hinzugefügt oder daraus entfernt werden, und ruft eine hypothetische Funktion auf einem Track-Editor auf, um den Track in die Liste der verfügbaren Tracks des Editors aufzunehmen oder daraus zu entfernen.

Sie können auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um die [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event) Ereignisse zu überwachen.

### Serverunterstützung für Videos

Wenn der MIME-Typ für das Video auf dem Server nicht korrekt gesetzt ist, wird das Video möglicherweise nicht angezeigt oder es wird ein graues Feld mit einem X angezeigt (wenn JavaScript aktiviert ist).

Wenn Sie den Apache-Webserver verwenden, um WebM-Videos zu bedienen, können Sie dieses Problem beheben, indem Sie die Dateityp-Erweiterungen zu dem MIME-Typ `video/webm` hinzufügen (die häufigste WebM-Dateierweiterung ist `.webm`). Um dies zu tun, bearbeiten Sie die Datei `mime.types` in `/etc/apache` oder verwenden Sie die `AddType` Konfigurationsanweisung in `httpd.conf`:

```plain
AddType video/webm .webm
```

Ihr Webhoster bietet möglicherweise eine einfache Schnittstelle zu MIME-Typ-Konfigurationsänderungen für neue Technologien, bis ein globales Update auf natürlichem Wege erfolgt.

## Barrierefreiheit

Videos sollten sowohl Untertitel als auch Transkriptionen bieten, die ihren Inhalt genau beschreiben (siehe [Hinzufügen von Untertiteln zu HTML-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) für weitere Informationen über die Implementierung dieser). Untertitel ermöglichen es Personen, die Hörverlust haben, den Audiogehalt eines Videos zu verstehen, während das Video abgespielt wird, während Transkriptionen denjenigen, die mehr Zeit benötigen, ermöglichen, Audioinhalte in einem Tempo und Format zu überprüfen, das für sie komfortabel ist.

Es ist erwähnenswert, dass während Sie Audioinhalte untertiteln können, dies nur möglich ist, wenn Audio in einem `<video>`-Element abgespielt wird, da der Videobereich des Elements verwendet wird, um die Untertitel darzustellen. Dies ist eines der speziellen Szenarien, in denen es nützlich ist, Audio in einem Videoelement abzuspielen.

Wenn automatische Untertitelungsdienste genutzt werden, ist es wichtig, die generierten Inhalte zu überprüfen, um sicherzustellen, dass sie die Ursprungsdatei genau wiedergeben.

Zusätzlich zu gesprochenem Dialog sollten Untertitel und Transkriptionen auch Musik und Soundeffekte identifizieren, die wichtige Informationen vermitteln. Dies schließt Emotion und Ton ein:

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

Untertitel sollten das Hauptmotiv des Videos nicht verdecken. Sie können positioniert werden, indem Sie die [VTT-Cue-Einstellung `align`](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format#cue_settings) verwenden.

- [Web Video Text Tracks Format (WebVTT)](/de/docs/Web/API/WebVTT_API)
- [WebAIM: Untertitel, Transkriptionen und Audiobeschreibungen](https://webaim.org/techniques/captions/)
- [MDN Verstehen von WCAG, Leitlinie 1.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [Verstehen des Erfolgskriteriums 1.2.1 | W3C Verstehen von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Verstehen des Erfolgskriteriums 1.2.2 | W3C Verstehen von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Beispiele

### Einzelquelle

Dieses Beispiel spielt ein Video ab, wenn es aktiviert wird, und bietet dem Benutzer die Standard-Videosteuerungen des Browsers, um die Wiedergabe zu steuern.

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

Bis das Video zu spielen beginnt, wird das im `poster`-Attribut angegebene Bild an seiner Stelle angezeigt. Wenn der Browser keine Videowiedergabe unterstützt, wird der Fallback-Text angezeigt.

### Mehrere Quellen

Dieses Beispiel baut auf dem letzten auf und bietet drei verschiedene Quellen für die Medien an; dies ermöglicht es, das Video unabhängig davon anzusehen, welche Video-Codecs vom Browser unterstützt werden.

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

Zuerst wird AVI ausprobiert. Wenn das nicht abgespielt werden kann, wird [MP4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4) versucht. Eine Fallback-Nachricht wird angezeigt, wenn das Videoelement nicht unterstützt wird, aber nicht, wenn alle Quellen fehlschlagen.

Einige Mediendateiformate ermöglichen es, spezifischere Informationen mit dem [`codecs`](/de/docs/Web/Media/Guides/Formats/codecs_parameter) Parameter als Teil des Dateityp-Strings anzugeben. Zum Beispiel sagt `video/webm; codecs="vp8, vorbis"` aus, dass die Datei ein [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm)-Video ist, das [VP8](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp8) für seine Video- und [Vorbis](/de/docs/Web/Media/Guides/Formats/Audio_codecs#vorbis) für seine Audiospur verwendet.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>, Formulierungsinhalt, eingebetteter Inhalt. Wenn es ein <a href="#controls"><code>controls</code></a> Attribut hat: interaktiver Inhalt und handfester Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <p>
          Wenn das Element ein <a href="#src"><code>src</code></a>
          Attribut hat: null oder mehr {{HTMLElement("track")}}-Elemente, gefolgt von transparentem Inhalt, der keine Medienelemente enthält, d.h. keine {{HTMLElement("audio")}} oder <code>&lt;video&gt;</code>.
        </p>
        <p>
          Andernfalls: null oder mehr {{HTMLElement("source")}}-Elemente, gefolgt von null oder mehr {{HTMLElement("track")}}-Elementen, gefolgt von transparentem Inhalt, der keine Medienelemente enthält, d.h. keine {{HTMLElement("audio")}} oder <code>&lt;video&gt;</code>.
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
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a>
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
  - [Leitfaden zu Web-Video-Codecs](/de/docs/Web/Media/Guides/Formats/Video_codecs)
  - [Leitfaden zu Web-Audio-Codecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs)

- Positionierung und Größenanpassung des Bildes innerhalb seines Rahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
- {{htmlelement("audio")}}
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Manipulation von Video mit Canvas](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [Serverkonfigurationen für Ogg-Medien](/de/docs/Web/Media/Guides/Formats/Configuring_servers_for_Ogg_media)
