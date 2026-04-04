---
title: "<video>: Das Video-Embed-Element"
slug: Web/HTML/Reference/Elements/video
l10n:
  sourceCommit: 40fa68f80d38ba7142d47f52cdd0960325d63a44
---

Das **`<video>`** [HTML](/de/docs/Web/HTML) Element bettet einen Mediaplayer ein, der die Videowiedergabe im Dokument unterstützt. Sie können `<video>` auch für Audioinhalte verwenden, jedoch liefert das {{HTMLElement("audio")}} Element möglicherweise ein passenderes Benutzererlebnis.

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

Das obige Beispiel zeigt, wie das `<video>` Element verwendet wird. Ähnlich wie beim {{htmlelement("img")}} Element geben wir einen Pfad zur anzuzeigenden Mediendatei im `src` Attribut an; wir können andere Attribute einschließen, um Informationen wie Videobreite und -höhe, ob es automatisch abgespielt und wiederholt werden soll, oder ob die Standard-Videosteuerung des Browsers angezeigt werden soll, usw.

Der Inhalt innerhalb der öffnenden und schließenden `<video></video>` Tags wird als Fallback in Browsern angezeigt, die das Element nicht unterstützen.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `autoplay`
  - : Ein Boolesches Attribut; wenn angegeben, beginnt das Video automatisch mit der Wiedergabe, sobald es möglich ist, ohne das Laden der Daten abzuwarten.

    > [!NOTE]
    > Moderne Browser blockieren Audio (oder Videos mit einem nicht stummgeschalteten Audiotrack) vom automatischen Abspielen, da Websites, die automatisch Audio abspielen, für Benutzer eine unangenehme Erfahrung sein können. Siehe unsere [Autoplay Anleitung](/de/docs/Web/Media/Guides/Autoplay) für zusätzliche Informationen zur richtigen Nutzung von Autoplay.

    Um das automatische Abspielen von Videos zu deaktivieren, funktioniert `autoplay="false"` nicht; das Video wird automatisch abgespielt, wenn das Attribut im `<video>` Tag vorhanden ist. Um Autoplay zu entfernen, muss das Attribut vollständig entfernt werden.

    > [!NOTE]
    > Videos mit dem Attribut [`loading="lazy"`](#loading) beginnen erst mit dem Herunterladen und Spielen, wenn das Element in der Nähe oder innerhalb des Viewports ist.

- `controls`
  - : Wenn dieses Attribut vorhanden ist, bietet der Browser Steuerelemente an, mit denen der Benutzer die Videowiedergabe steuern kann, einschließlich Lautstärke, Suche und Pause/Fortsetzen der Wiedergabe.
- `controlslist`
  - : Das [`controlslist`](https://wicg.github.io/controls-list/explainer.html) Attribut, wenn angegeben, hilft dem Browser auszuwählen, welche Steuerelemente für das `video` Element angezeigt werden sollen, wenn der Browser seine eigenen Steuerelemente zeigt (d.h. wenn das `controls` Attribut angegeben ist).

    Die zulässigen Werte sind `nodownload`, `nofullscreen` und `noremoteplayback`.

    Verwenden Sie das [`disablepictureinpicture`](#disablepictureinpicture) Attribut, wenn Sie den Bild-im-Bild-Modus (und die Steuerung) deaktivieren möchten.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Dieses {{Glossary("Enumerated", "enumerierte")}} Attribut gibt an, ob CORS verwendet werden soll, um das zugehörige Video abzurufen. [CORS-fähige Ressourcen](/de/docs/Web/HTML/How_to/CORS_enabled_image) können im {{HTMLElement("canvas")}} Element wiederverwendet werden, ohne _verunreinigt_ zu sein. Die zulässigen Werte sind:
    - `anonymous`
      - : Sendet eine Cross-Origin-Anfrage ohne Anmeldeinformationen. Mit anderen Worten: Es sendet den `Origin:` HTTP-Header ohne Cookie, X.509-Zertifikat oder HTTP-Basic-Authentifizierung. Wenn der Server keine Anmeldeinformationen für die Ursprungsseite bereitstellt (indem der `Access-Control-Allow-Origin:` HTTP-Header nicht gesetzt wird), wird die Ressource _verunreinigt_ und ihre Verwendung eingeschränkt.
    - `use-credentials`
      - : Sendet eine Cross-Origin-Anfrage mit Anmeldeinformationen. Mit anderen Worten: Es sendet den `Origin:` HTTP-Header mit einem Cookie, einem Zertifikat oder führt eine HTTP-Basic-Authentifizierung durch. Wenn der Server keine Anmeldeinformationen für die Ursprungsseite bereitstellt (durch den `Access-Control-Allow-Credentials:` HTTP-Header), wird die Ressource _verunreinigt_ und ihre Nutzung eingeschränkt.

    Wenn nicht vorhanden, wird die Ressource ohne CORS-Anfrage abgerufen (d.h. ohne den `Origin:` HTTP-Header zu senden), was die nicht-verunreinigte Verwendung in {{HTMLElement('canvas')}}-Elementen verhindert. Wenn ungültig, wird es so behandelt, als ob das enumerierte Schlüsselwort `anonymous` verwendet wurde. Siehe [CORS-Attributseinstellungen](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für zusätzliche Informationen.

- `disablepictureinpicture`
  - : Verhindert, dass der Browser ein Bild-im-Bild-Kontextmenü vorschlägt oder in einigen Fällen automatisch Bild-im-Bild anfordert.
- `disableremoteplayback`
  - : Ein Boolesches Attribut, das die Fähigkeit zur Fernwiedergabe auf an das Gerät angeschlossenen Geräten über Kabel (HDMI, DVI, etc.) und kabellose Technologien (Miracast, Chromecast, DLNA, AirPlay, etc.) deaktiviert.

    In Safari können Sie [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) als Fallback verwenden.

- `height`
  - : Die Höhe des Anzeigebereichs des Videos, in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px) (nur absolute Werte; [keine Prozentsätze](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).

- `loading` {{experimental_inline}}
  - : Gibt an, wie der Browser das Video laden soll (einschließlich eines eventuellen Posterbildes):
    - `eager`
      - : Lädt das Video sofort, unabhängig davon, ob das Video derzeit im sichtbaren Viewport ist oder nicht (dies ist der Standardwert).
    - `lazy`
      - : Verzögert das Laden des Videos, bis es eine berechnete Entfernung zum Viewport erreicht, wie vom Browser definiert.

        Lazy Loading spart Netz- und Speicherbandbreite, die zum Handhaben des Videos erforderlich ist, bis sicher ist, dass es benötigt wird. Dies verbessert die Performance in den meisten typischen Anwendungsfällen.

    Während explizite [`width`](#width) und [`height`](#height)-Attribute für alle Videos empfohlen werden, um Layoutverschiebungen zu vermeiden, sind sie besonders wichtig für lazy-geladene Videos. Lazy-geladene Videos werden niemals geladen, wenn sie keinen sichtbaren Teil eines Elements schneiden, selbst wenn das Laden sie ändern würde, da ungeladene Videos eine `width` und `height` von `0` haben. Dies führt zu einem noch störenderen Benutzererlebnis, wenn der im Viewport sichtbare Inhalt mitten beim Lesen umbricht.

    Lazy-geladene Videos, die im visuellen Viewport platziert sind, sind möglicherweise noch nicht sichtbar, wenn das Window [`load`](/de/docs/Web/API/Window/load_event) Ereignis ausgelöst wird. Dies liegt daran, dass das Ereignis basierend auf eager-geladenen Videos ausgelöst wird – lazy-geladene Videos werden nicht berücksichtigt, selbst wenn sie sich bei der ersten Seitenladung im visuellen Viewport befinden.

    Das Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Anti-Tracking-Maßnahme, da es möglich wäre, die ungefähre Scrollposition eines Benutzers während einer Sitzung zu verfolgen, indem strategisch Videos im Markup einer Seite platziert werden, damit ein Server nachverfolgen kann, wie viele Videos angefordert werden und wann.

    > [!NOTE]
    > Das Attribut `loading="lazy"` beeinflusst auch die Attribute [`autoplay`](#autoplay), [`poster`](#poster) und [`preload`](#preload), wie in den jeweiligen Abschnitten auf dieser Seite beschrieben.

- `loop`
  - : Ein Boolesches Attribut; wenn angegeben, sucht der Browser automatisch nach dem Start, wenn das Ende des Videos erreicht ist.

- `muted`
  - : Ein Boolesches Attribut, das die Standardeinstellung für die Audiostummschaltung im Video angibt. Wenn eingestellt, wird das Audio zunächst stummgeschaltet. Der Standardwert ist `false`, was bedeutet, dass das Audio abgespielt wird, wenn das Video abgespielt wird.

- `playsinline`
  - : Ein Boolesches Attribut, das angibt, dass das Video "inline" abgespielt werden soll, also innerhalb des Abspielbereichs des Elements. Beachten Sie, dass das Fehlen dieses Attributs _nicht_ impliziert, dass das Video immer im Vollbildmodus abgespielt wird.

- `poster`
  - : Eine URL für ein Bild, das angezeigt wird, während das Video heruntergeladen wird. Wenn dieses Attribut nicht angegeben ist, wird nichts angezeigt, bis der erste Frame verfügbar ist, dann wird der erste Frame als Posterframe angezeigt.

    > [!NOTE]
    > Videos mit dem Attribut [`loading="lazy"`](#loading) werden die `poster` Ressource erst herunterladen, wenn das Video in der Nähe oder innerhalb des Viewports ist.

- `preload`
  - : Dieses {{Glossary("enumerated", "enumerierte")}} Attribut soll dem Browser einen Hinweis darauf geben, was der Autor für die beste Benutzererfahrung hält, in Bezug auf den Inhalt, der geladen wird, bevor das Video abgespielt wird. Es kann einen der folgenden Werte haben:
    - `none`: Gibt an, dass das Video nicht vorab geladen werden sollte.
    - `metadata`: Gibt an, dass nur Videometadaten (z. B. Länge) abgerufen werden.
    - `auto`: Gibt an, dass die gesamte Videodatei heruntergeladen werden kann, selbst wenn der Benutzer nicht erwartet, sie zu nutzen.
    - _leerer String_: Ein Synonym für den Wert `auto`.

    Der Standardwert ist für jeden Browser unterschiedlich. Die Spezifikation empfiehlt, ihn auf `metadata` zu setzen.

    > [!NOTE]
    >
    > - Das `autoplay` Attribut hat Vorrang vor `preload`. Wenn `autoplay` angegeben ist, müsste der Browser offensichtlich mit dem Herunterladen des Videos zur Wiedergabe beginnen.
    > - Die Spezifikation zwingt den Browser nicht, dem Wert dieses Attributs zu folgen; es ist nur ein Hinweis.

    > [!NOTE]
    > Videos mit dem Attribut [`loading="lazy"`](#loading) wenden das `preload` Verhalten erst an, wenn das Video in der Nähe oder innerhalb des Viewports ist.

- `src`
  - : Die URL des einzubettenden Videos. Dies ist optional; stattdessen können Sie das {{HTMLElement("source")}} Element innerhalb des Videobereichs verwenden, um das einzubettende Video anzugeben.
- `width`
  - : Die Breite des Anzeigebereichs des Videos, in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px) (nur absolute Werte; [keine Prozentsätze](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).

## Events

- [`audioprocess`](/de/docs/Web/API/ScriptProcessorNode/audioprocess_event) {{Deprecated_Inline}}
  - : Der Eingabepuffer eines [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) ist bereit zur Verarbeitung.
- [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)
  - : Der Browser kann das Medium abspielen, jedoch schätzt er, dass nicht genügend Daten geladen wurden, um das Medium bis zu seinem Ende abzuspielen, ohne zum weiteren Puffern des Inhalts stoppen zu müssen.
- [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
  - : Der Browser schätzt, dass er das Medium bis zu seinem Ende abspielen kann, ohne zum Puffern von Inhalten zu stoppen.
- [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)
  - : Die Renderung eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) ist beendet.
- [`durationchange`](/de/docs/Web/API/HTMLMediaElement/durationchange_event)
  - : Das `duration` Attribut wurde aktualisiert.
- [`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)
  - : Das Medium ist leer geworden; beispielsweise wird dieses Ereignis gesendet, wenn das Medium bereits geladen (oder teilweise geladen) ist und die Methode [`load()`](/de/docs/Web/API/HTMLMediaElement/load) aufgerufen wird, um es neu zu laden.
- [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)
  - : Die Wiedergabe wurde gestoppt, weil das Ende des Mediums erreicht wurde.
- [`error`](/de/docs/Web/API/HTMLMediaElement/error_event)
  - : Ein Fehler ist beim Abrufen der Mediendaten aufgetreten oder der Ressourcentyp ist kein unterstütztes Medienformat.
- [`loadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event)
  - : Der erste Frame des Mediums wurde fertig geladen.
- [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
  - : Die Metadaten wurden geladen.
- [`loadstart`](/de/docs/Web/API/HTMLMediaElement/loadstart_event)
  - : Wird ausgelöst, wenn der Browser begonnen hat, die Ressource zu laden.
- [`pause`](/de/docs/Web/API/HTMLMediaElement/pause_event)
  - : Die Wiedergabe wurde angehalten.
- [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)
  - : Die Wiedergabe hat begonnen.
- [`playing`](/de/docs/Web/API/HTMLMediaElement/playing_event)
  - : Die Wiedergabe ist bereit, zu beginnen, nachdem sie angehalten oder wegen Datenmangel verzögert wurde.
- [`progress`](/de/docs/Web/API/HTMLMediaElement/progress_event)
  - : Wird periodisch ausgelöst, während der Browser eine Ressource lädt.
- [`ratechange`](/de/docs/Web/API/HTMLMediaElement/ratechange_event)
  - : Die Wiedergabegeschwindigkeit hat sich geändert.
- [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event)
  - : Eine _Such_ operation wurde abgeschlossen.
- [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
  - : Eine _Such_ operation hat begonnen.
- [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
  - : Der User-Agent versucht, Mediendaten abzurufen, aber Daten kommen unerwartet nicht.
- [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event)
  - : Das Laden der Mediendaten wurde ausgesetzt.
- [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)
  - : Die durch das `currentTime` Attribut angezeigte Zeit wurde aktualisiert.
- [`volumechange`](/de/docs/Web/API/HTMLMediaElement/volumechange_event)
  - : Die Lautstärke hat sich geändert.
- [`waiting`](/de/docs/Web/API/HTMLMediaElement/waiting_event)
  - : Die Wiedergabe wurde gestoppt, weil vorübergehend keine Daten vorhanden sind.

## Verwendungshinweise

Browser unterstützen nicht alle das gleiche Videoformat; Sie können mehrere Quellen innerhalb verschachtelter {{htmlelement("source")}} Elemente angeben, und der Browser wird dann die erste verwenden, die er versteht.

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

Beim Verwenden von {{htmlelement("source")}} Elementen versucht der Browser, jede Quelle der Reihe nach zu laden. Wenn eine Quelle fehlschlägt (z. B. aufgrund einer ungültigen URL oder eines nicht unterstützten Formats), wird die nächste Quelle versucht usw. Ein `error` Ereignis wird auf dem `<video>` Element ausgelöst, nachdem alle Quellen fehlgeschlagen sind; `error` Ereignisse werden nicht auf jedem einzelnen `<source>` Element ausgelöst.

Wir bieten Ihnen einen substanziellen und gründlichen [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats) und den [Leitfaden zu den Codecs, die für Videos unterstützt werden](/de/docs/Web/Media/Guides/Formats/Video_codecs). Auch verfügbar ist ein Leitfaden zu [Audiocodecs, die mit ihnen verwendet werden können](/de/docs/Web/Media/Guides/Formats/Audio_codecs).

Weitere Verwendungshinweise:

- Wenn Sie das `controls` Attribut nicht angeben, enthält das Video nicht die Standardsteuerungen des Browsers; Sie können Ihre eigenen benutzerdefinierten Steuerungen mit JavaScript und der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API erstellen. Siehe [Erstellung eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player) für weitere Details.
- Um eine präzise Steuerung über Ihre Video- (und Audio-) Inhalte zu ermöglichen, senden `HTMLMediaElement`s viele unterschiedliche [Ereignisse](/de/docs/Web/API/HTMLMediaElement#events). Neben der Bereitstellung von Steuerungsmöglichkeiten ermöglichen Ihnen diese Ereignisse, den Fortschritt sowohl beim Download als auch bei der Wiedergabe der Medien sowie den Wiedergabestatus und die Position zu überwachen.
- Sie können die {{cssxref("object-position")}} Eigenschaft verwenden, um die Position des Videos innerhalb des Rahmens des Elements anzupassen, und die {{cssxref("object-fit")}} Eigenschaft, um zu steuern, wie die Größe des Videos angepasst wird, um innerhalb des Rahmens zu passen.
- Um Untertitel zusammen mit Ihrem Video anzuzeigen, können Sie etwas JavaScript zusammen mit dem {{htmlelement("track")}} Element und dem [WebVTT](/de/docs/Web/API/WebVTT_API) Format verwenden. Siehe [Hinzufügen von Beschriftungen und Untertiteln zu HTML-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) für mehr Informationen.
- Sie können Audio-Dateien mit einem `<video>` Element abspielen. Dies kann nützlich sein, wenn Sie beispielsweise Audio mit einem [WebVTT](/de/docs/Web/API/WebVTT_API) Transkript ausgeben müssen, da das {{HTMLElement("audio")}} Element keine Beschriftungen mit WebVTT erlaubt.
- Um den Fallback-Inhalt in Browsern zu testen, die das Element unterstützen, können Sie `<video>` durch ein nicht-existierendes Element wie `<notavideo>` ersetzen.

Eine gute allgemeine Informationsquelle zur Verwendung von HTML `<video>` ist das [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) Anfänger-Tutorial.

### CSS-Styling

Das `<video>` Element ist ein Ersetztes Element – sein {{cssxref("display")}}-Wert ist standardmäßig `inline` – aber seine Standardbreite und -höhe im Viewport ist durch das eingebettete Video definiert.

Es gibt keine besonderen Überlegungen zum Styling von `<video>`; eine gängige Strategie ist, ihm einen `display`-Wert von `block` zu geben, um es einfacher zu positionieren, zu skalieren usw., und dann bei Bedarf Styling- und Layoutinformationen bereitzustellen. [Grundlagen der Videoplayer-Stilgebung](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics) bietet einige nützliche Styling-Techniken.

### Hinzufügen von Untertiteln und anderen zeitgesteuerten Textspuren

Zeitgesteuerte Textspuren für Untertitel, geschlossene Bildschirme, Kapitelüberschriften usw. können deklarativ hinzugefügt werden, indem das {{HTMLElement("track")}} Element geschachtelt wird.
Die Spuren werden im [Web Video Text Tracks File Format (WebVTT)](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) (`.vtt`-Dateien) angegeben.

Beispielsweise enthält der unten stehende HTML-Teil die Datei "captions.vtt", die verwendet wird, um geschlossene Untertitel auf dem Video zu überlagern, wenn Untertitel vom Benutzer aktiviert sind.

```html
<video controls src="video.webm">
  <track default kind="captions" src="captions.vtt" />
</video>
```

Zeitgesteuerte Textspuren können auch programmgesteuert mit der [WebVTT API](/de/docs/Web/API/WebVTT_API) hinzugefügt werden.

### Erkennung von Spurhinzufügung und -entfernung

Sie können erkennen, wann Spuren zu einem `<video>` Element hinzugefügt oder entfernt werden, indem Sie die [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event) Ereignisse abonnieren. Diese Ereignisse werden jedoch nicht direkt an das `<video>` Element selbst gesendet.
Stattdessen werden sie an das Track-Listenobjekt innerhalb des `<video>` Elements gesendet, das dem Typ der zum Element hinzugefügten Spur entspricht:

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList) enthält alle Audiospuren des Medienelements.
    Fügen Sie diesem Objekt einen `addtrack` Listener hinzu, um benachrichtigt zu werden, wenn neue Audiospuren dem Element hinzugefügt werden.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)
  - : Eine [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) enthält alle Videospuren des Medienelements.
    Fügen Sie diesem Objekt einen `addtrack` Listener hinzu, um benachrichtigt zu werden, wenn Videospuren dem Element hinzugefügt werden.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
  - : Eine [`TextTrackList`](/de/docs/Web/API/TextTrackList) enthält alle Textspuren des Medienelements (die für Untertitel, geschlossene Bildschirme usw. verwendet werden).
    Fügen Sie diesem Objekt einen `addtrack` Listener hinzu, um benachrichtigt zu werden, wenn Textspuren dem Element hinzugefügt werden.

Zum Beispiel, um zu erkennen, wenn Audiospuren zu einem `<video>` Element hinzugefügt oder entfernt werden, können Sie Code wie diesen verwenden:

```js
const elem = document.querySelector("video");

elem.audioTracks.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTracks.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Dieser Code beobachtet, wenn Audiospuren dem Element hinzugefügt oder vom Element entfernt werden, und ruft eine hypothetische Funktion in einem Spur-Editor auf, um die Spur in der Liste der verfügbaren Spuren des Editors zu registrieren oder zu entfernen.

Sie können auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um die [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event) Ereignisse zu abonnieren.

### Serverunterstützung für Video

Wenn der MIME-Typ des Videos auf dem Server nicht korrekt eingestellt ist, wird das Video möglicherweise nicht angezeigt oder es wird ein grauer Kasten mit einem X (wenn JavaScript aktiviert ist) angezeigt.

Wenn Sie den Apache-Webserver verwenden, um WebM-Videos bereitzustellen, können Sie dieses Problem beheben, indem Sie die Dateitypen-Erweiterungen dem `video/webm` MIME-Typ hinzufügen (die häufigste WebM-Dateierweiterung ist `.webm`). Dazu bearbeiten Sie die Datei `mime.types` in `/etc/apache` oder verwenden die `AddType` Konfigurationsdirektive in `httpd.conf`:

```plain
AddType video/webm .webm
```

Ihr Webhost kann eine einfache Benutzeroberfläche für Änderungen an der MIME-Typ-Konfiguration für neue Technologien bieten, bis ein globales Update auf natürliche Weise erfolgt.

## Barrierefreiheit

Videos sollten sowohl Untertitel als auch Transkripte bereitstellen, die ihren Inhalt genau beschreiben (siehe [Hinzufügen von Untertiteln und Beschriftungen zu HTML-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) für weitere Informationen zur Implementierung dieser). Untertitel ermöglichen es Menschen mit Hörverlust, den Audioinhalt eines Videos zu verstehen, während das Video abgespielt wird, während Transkripte es Menschen ermöglichen, die zusätzliche Zeit benötigen, in einem für sie angenehmen Tempo und Format den Audioinhalt zu überprüfen.

Es ist erwähnenswert, dass Sie zwar Audio-only Medien untertiteln können, jedoch nur, wenn Sie Audio in einem `<video>` Element abspielen, da die Videoregion des Elements verwendet wird, um die Untertitel darzustellen. Dies ist eines der besonderen Szenarien, in denen es nützlich ist, Audio in einem Videoelement abzuspielen.

Wenn automatische Untertitelungsdienste verwendet werden, ist es wichtig, den generierten Inhalt zu überprüfen, um sicherzustellen, dass er das Quellvideo genau darstellt.

Neben dem gesprochenen Dialog sollten in Untertiteln und Transkripten auch Musik und Soundeffekte identifiziert werden, die wichtige Informationen kommunizieren. Dazu gehören Emotion und Ton:

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

Untertitel sollten das Hauptmotiv des Videos nicht verdecken. Sie können mit [der `align` VTT Cues Einstellung](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format#cue_settings) positioniert werden.

- [Web Video Text Tracks Format (WebVTT)](/de/docs/Web/API/WebVTT_API)
- [WebAIM: Untertitel, Transkripte und Audio-Beschreibungen](https://webaim.org/techniques/captions/)
- [MDN Verständnis von WCAG, Leitfaden 1.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [Verständnis des Erfolgskriteriums 1.2.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Verständnis des Erfolgskriteriums 1.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Beispiele

### Einzele Quelle

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

Bis das Video beginnt zu spielen, wird das im `poster` Attribut angegebene Bild an seiner Stelle angezeigt. Wenn der Browser die Videowiedergabe nicht unterstützt, wird der Fallback-Text angezeigt.

### Mehrere Quellen

Dieses Beispiel baut auf dem vorherigen auf und bietet drei verschiedene Quellen für das Medium an; dies ermöglicht es, das Video unabhängig davon anzusehen, welche Videocodecs vom Browser unterstützt werden.

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

Zuerst wird AVI getestet. Wenn das nicht abgespielt werden kann, wird [MP4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4) versucht. Eine Fallback-Nachricht wird angezeigt, wenn das Videoelement nicht unterstützt wird, aber nicht, wenn alle Quellen fehlschlagen.

Einige Medientypen erlauben es Ihnen, spezifischere Informationen mithilfe des [`codecs`](/de/docs/Web/Media/Guides/Formats/codecs_parameter) Parameters als Teil des Typstrings der Datei bereitzustellen. Zum Beispiel besagt `video/webm; codecs="vp8, vorbis"`, dass die Datei ein [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm) Video ist, das [VP8](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp8) für sein Video und [Vorbis](/de/docs/Web/Media/Guides/Formats/Audio_codecs#vorbis) für Audio verwendet.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>, Phasing-Inhalt, eingebetteter Inhalt. Wenn es ein <a href="#controls"><code>controls</code></a> Attribut hat: interaktiver Inhalt und greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <p>
          Wenn das Element ein <a href="#src"><code>src</code></a>
          Attribut hat: null oder mehr {{HTMLElement("track")}} Elemente, gefolgt von transparentem Inhalt, der keine Medienelemente enthält – also keine {{HTMLElement("audio")}} oder <code>&lt;video&gt;</code>.
        </p>
        <p>
          Andernfalls: null oder mehr {{HTMLElement("source")}} Elemente, gefolgt von null oder mehr {{HTMLElement("track")}} Elementen, gefolgt von transparentem Inhalt, der keine Medienelemente enthält – also keine {{HTMLElement("audio")}} oder <code>&lt;video&gt;</code>.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
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

- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats)
  - [Medienspeicherformaten (Dateitypen)](/de/docs/Web/Media/Guides/Formats/Containers)
  - [Web Videocodec Leitfaden](/de/docs/Web/Media/Guides/Formats/Video_codecs)
  - [Web Audiocodec Leitfaden](/de/docs/Web/Media/Guides/Formats/Audio_codecs)

- Positionieren und Skalieren des Bildes innerhalb des Rahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
- {{htmlelement("audio")}}
- [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Manipulation von Videos mit Canvas](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [Konfiguration von Servern für Ogg-Medien](/de/docs/Web/Media/Guides/Formats/Configuring_servers_for_Ogg_media)
