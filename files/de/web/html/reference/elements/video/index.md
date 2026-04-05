---
title: "<video>: Das Video-Einbettungselement"
slug: Web/HTML/Reference/Elements/video
l10n:
  sourceCommit: 743ba8b257cd06449b192818df120e609f6e16d2
---

Das **`<video>`** [HTML](/de/docs/Web/HTML)-Element bettet einen Mediaplayer in das Dokument ein, der die Wiedergabe von Videos unterstützt. Sie können `<video>` auch für Audioinhalte verwenden, aber das {{HTMLElement("audio")}}-Element bietet möglicherweise eine passendere Benutzererfahrung.

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

Das obige Beispiel zeigt, wie das `<video>`-Element verwendet wird. Ähnlich wie beim {{htmlelement("img")}}-Element fügen wir einen Pfad zur anzuzeigenden Mediendatei in das `src`-Attribut ein; wir können andere Attribute hinzufügen, um Informationen wie Videobreite und -höhe, automatisches Abspielen und Schleifen oder die Anzeige der Standard-Videosteuerungen des Browsers anzugeben.

Der Inhalt innerhalb der öffnenden und schließenden `<video></video>`-Tags wird als Fallback in Browsern angezeigt, die das Element nicht unterstützen.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `autoplay`
  - : Ein Boolesches Attribut; wenn angegeben, beginnt das Video automatisch mit der Wiedergabe, sobald es kann, ohne anzuhalten, um das Laden der Daten abzuschließen.

    > [!NOTE]
    > Moderne Browser blockieren Audio (oder Videos mit einer nicht stummgeschalteten Audiospur) vom automatischen Abspielen, da Websites, die automatisch Audio abspielen, eine unangenehme Erfahrung für Nutzer sein können. Siehe unseren [Leitfaden zum automatischen Abspielen](/de/docs/Web/Media/Guides/Autoplay) für weitere Informationen zur korrekten Verwendung von Autoplay.

    Um das automatische Abspielen von Videos zu deaktivieren, funktioniert `autoplay="false"` nicht; das Video wird abgespielt, wenn das Attribut im `<video>`-Tag vorhanden ist. Um das automatische Abspielen zu entfernen, muss das Attribut komplett entfernt werden.

    > [!NOTE]
    > Videos mit dem [`loading="lazy"`](#loading)-Attribut beginnen nicht mit dem Download und automatischem Abspielen, bis sich das Element in der Nähe oder innerhalb des Viewports befindet.

- `controls`
  - : Wenn dieses Attribut vorhanden ist, bietet der Browser Steuerungen, um dem Benutzer die Steuerung der Videowiedergabe zu ermöglichen, einschließlich Lautstärke, Suchvorgang und Wiedergabepause/-fortsetzung.
- `controlslist`
  - : Das [`controlslist`](https://wicg.github.io/controls-list/explainer.html)-Attribut, wenn spezifiziert, hilft dem Browser dabei, auszuwählen, welche Steuerungen für das `video`-Element angezeigt werden sollen, wann immer der Browser sein eigenes Set von Steuerungen zeigt (d.h. wenn das `controls`-Attribut angegeben ist).

    Die erlaubten Werte sind `nodownload`, `nofullscreen` und `noremoteplayback`.

    Verwenden Sie das [`disablepictureinpicture`](#disablepictureinpicture)-Attribut, wenn Sie den Bild-in-Bild-Modus (und die Steuerung) deaktivieren möchten.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Dieses {{Glossary("Enumerated", "Aufzählungs-")}}Attribut gibt an, ob CORS verwendet wird, um das zugehörige Video abzurufen. [CORS-fähige Ressourcen](/de/docs/Web/HTML/How_to/CORS_enabled_image) können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne _beeinträchtigt_ zu werden. Die erlaubten Werte sind:
    - `anonymous`
      - : Sendet eine Cross-Origin-Anfrage ohne Anmeldedaten. Mit anderen Worten, es sendet den `Origin:`-HTTP-Header ohne Cookie, X.509-Zertifikat oder Durchführung von HTTP-Basic-Authentifizierung. Wenn der Server keine Anmeldedaten an die Ursprungsseite gibt (indem er den `Access-Control-Allow-Origin:`-HTTP-Header nicht setzt), wird die Ressource _beeinträchtigt_ und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Sendet eine Cross-Origin-Anfrage mit Anmeldedaten. Mit anderen Worten, es sendet den `Origin:`-HTTP-Header mit einem Cookie, einem Zertifikat oder der Durchführung von HTTP-Basic-Authentifizierung. Wenn der Server keine Anmeldedaten an die Ursprungsseite gibt (durch `Access-Control-Allow-Credentials:`-HTTP-Header), wird die Ressource _beeinträchtigt_ und ihre Nutzung eingeschränkt.

    Wenn nicht vorhanden, wird die Ressource ohne eine CORS-Anfrage (d.h. ohne Senden des `Origin:`-HTTP-Headers) abgerufen, was ihre untainted Verwendung in {{HTMLElement('canvas')}}-Elementen verhindert. Wenn ungültig, wird es so behandelt, als wäre das aufzählende Schlüsselwort `anonymous` verwendet worden. Siehe [CORS-Einstellungen-Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für weitere Informationen.

- `disablepictureinpicture`
  - : Verhindert, dass der Browser ein Bild-in-Bild-Kontextmenü vorschlägt oder in einigen Fällen automatisch Bild-in-Bild anfragt.
- `disableremoteplayback`
  - : Ein Boolesches Attribut, das die Fähigkeit zur Fernwiedergabe in Geräten deaktiviert, die mit kabelgebundenen (HDMI, DVI, etc.) und kabellosen Technologien (Miracast, Chromecast, DLNA, AirPlay, etc.) verbunden sind.

    In Safari können Sie [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) als Fallback verwenden.

- `height`
  - : Die Höhe des Anzeigebereichs des Videos in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px) (nur absolute Werte; [keine Prozentsätze](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).

- `loading` {{experimental_inline}}
  - : Gibt an, wie der Browser das Video laden soll (einschließlich eines Posterbildes):
    - `eager`
      - : Lädt das Video sofort, unabhängig davon, ob das Video derzeit innerhalb des sichtbaren Viewports ist oder nicht (dies ist der Standardwert).
    - `lazy`
      - : Verzögert das Laden des Videos, bis es eine berechnete Entfernung vom Viewport erreicht hat, wie es der Browser definiert.

        Lazy Loading vermeidet das Netzwerk- und Speicheraufkommen, das erforderlich ist, um das Video zu verarbeiten, bis es mit ziemlicher Sicherheit benötigt wird. Dies verbessert die Leistung in den meisten typischen Anwendungsfällen.

        Obwohl explizite [`width`](#width) und [`height`](#height)-Attribute für alle Videos empfohlen werden, um Layoutverschiebungen zu vermeiden, sind sie bei Lazy-Loaded-Videos von besonderer Bedeutung. Lazy-Loaded-Videos werden niemals geladen, wenn sie keinen sichtbaren Teil eines Elements berühren, selbst wenn das Laden sie ändern würde, da nicht geladene Videos eine `width` und `height` von `0` haben. Dies führt zu einer noch störenderen Benutzererfahrung, wenn der im Viewport sichtbare Inhalt während des Lesens umbricht.

        Lazy-Loaded-Videos, die sich im visuellen Viewport befinden, sind möglicherweise nicht sichtbar, wenn das Fenster [`load`](/de/docs/Web/API/Window/load_event)-Ereignis ausgelöst wird. Dies liegt daran, dass das Ereignis basierend auf entsprichtigend geladenen Videos ausgelöst wird - Lazy-Loaded-Videos werden nicht gezählt, selbst wenn sie sich beim ersten Laden der Seite innerhalb des visuellen Viewports befinden.

        Das Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Maßnahme gegen Tracking, denn wenn ein Benutzeragent das Lazy Loading unterstützt, wenn Skripting deaktiviert ist, wäre es immer noch möglich, dass eine Website die ungefähre Scroll-Position eines Benutzers während einer Sitzung verfolgt, indem Videos strategisch im Markup einer Seite platziert werden, sodass ein Server verfolgen kann, wie viele Videos angefordert und wann.

        > [!NOTE]
        > Das `loading="lazy"`-Attribut beeinflusst auch die [`autoplay`](#autoplay)-, [`poster`](#poster)- und [`preload`](#preload)-Attribute, wie in jedem dieser Abschnitte der Seite beschrieben.

- `loop`
  - : Ein Boolesches Attribut; wenn angegeben, springt der Browser automatisch an den Anfang zurück, wenn das Ende des Videos erreicht ist.

- `muted`
  - : Ein Boolesches Attribut, das die Standard-Audiostummschaltungseinstellung im Video angibt. Wenn gesetzt, wird der Audioeingang zunächst stummgeschaltet. Der Standardwert ist `false`, was bedeutet, dass der Ton abgespielt wird, wenn das Video abgespielt wird.

- `playsinline`
  - : Ein Boolesches Attribut, das angibt, dass das Video "inline" abgespielt werden soll, also innerhalb des Wiedergabebereichs des Elements. Beachten Sie, dass das Fehlen dieses Attributs _nicht_ impliziert, dass das Video immer im Vollbildmodus abgespielt wird.

- `poster`
  - : Eine URL für ein Bild, das angezeigt wird, während das Video heruntergeladen wird. Wenn dieses Attribut nicht angegeben ist, wird nichts angezeigt, bis der erste Frame verfügbar ist, dann wird der erste Frame als Posterframe angezeigt.

    > [!NOTE]
    > Videos mit dem [`loading="lazy"`](#loading)-Attribut laden die `poster`-Ressource erst herunter, wenn das Video in der Nähe oder innerhalb des Viewports ist.

- `preload`
  - : Dieses {{Glossary("enumerated", "aufzählbare")}} Attribut soll dem Browser einen Hinweis geben, was nach Meinung des Autors zu der besten Benutzererfahrung führen wird, bezüglich welcher Inhalte vor dem Abspielen des Videos geladen werden. Es kann einen der folgenden Werte haben:
    - `none`: Gibt an, dass das Video nicht vorgeladen werden soll.
    - `metadata`: Gibt an, dass nur Videometadaten (z.B. Länge) abgerufen werden.
    - `auto`: Gibt an, dass die gesamte Videodatei heruntergeladen werden kann, auch wenn nicht erwartet wird, dass der Benutzer sie verwendet.
    - _leerer String_: Ein Synonym für den `auto`-Wert.

    Der Standardwert ist für jeden Browser unterschiedlich. Die Spezifikation empfiehlt, ihn auf `metadata` zu setzen.

    > [!NOTE]
    >
    > - Videos mit dem [`loading="lazy"`](#loading)-Attribut setzen das `preload`-Verhalten erst um, wenn das Video in der Nähe oder innerhalb des Viewports ist.
    > - Das `autoplay`-Attribut hat Vorrang vor `preload`. Wenn `autoplay` angegeben ist, müsste der Browser offensichtlich mit dem Herunterladen des Videos für die Wiedergabe beginnen.
    > - Die Spezifikation zwingt den Browser nicht, den Wert dieses Attributs zu befolgen; es ist lediglich ein Hinweis.

- `src`
  - : Die URL des einzubettenden Videos. Dies ist optional; Sie können stattdessen das {{HTMLElement("source")}}-Element innerhalb des Videoblocks verwenden, um das einzubettende Video anzugeben.
- `width`
  - : Die Breite des Anzeigebereichs des Videos in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px) (nur absolute Werte; [keine Prozentsätze](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).

## Ereignisse

- [`audioprocess`](/de/docs/Web/API/ScriptProcessorNode/audioprocess_event) {{Deprecated_Inline}}
  - : Der Eingabepuffer eines [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) ist bereit zur Verarbeitung.
- [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)
  - : Der Browser kann das Medium abspielen, schätzt jedoch, dass nicht genug Daten geladen wurden, um das Medium bis zum Ende abzuspielen, ohne für weiteres Puffern von Inhalten anzuhalten.
- [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
  - : Der Browser schätzt, dass er das Medium bis zum Ende abspielen kann, ohne für das Puffern von Inhalten anzuhalten.
- [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)
  - : Die Verarbeitung eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) ist abgeschlossen.
- [`durationchange`](/de/docs/Web/API/HTMLMediaElement/durationchange_event)
  - : Das `duration`-Attribut wurde aktualisiert.
- [`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)
  - : Das Medium ist leer geworden; beispielsweise wird dieses Ereignis gesendet, wenn das Medium bereits geladen (oder teilweise geladen) war und die [`load()`](/de/docs/Web/API/HTMLMediaElement/load)-Methode aufgerufen wurde, um es neu zu laden.
- [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)
  - : Die Wiedergabe wurde gestoppt, weil das Ende des Mediums erreicht wurde.
- [`error`](/de/docs/Web/API/HTMLMediaElement/error_event)
  - : Ein Fehler ist beim Abrufen der Mediendaten aufgetreten, oder der Typ der Ressource ist kein unterstütztes Medienformat.
- [`loadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event)
  - : Der erste Frame des Mediums ist geladen.
- [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
  - : Die Metadaten wurden geladen.
- [`loadstart`](/de/docs/Web/API/HTMLMediaElement/loadstart_event)
  - : Wird ausgelöst, wenn der Browser begonnen hat, die Ressource zu laden.
- [`pause`](/de/docs/Web/API/HTMLMediaElement/pause_event)
  - : Die Wiedergabe wurde angehalten.
- [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)
  - : Die Wiedergabe hat begonnen.
- [`playing`](/de/docs/Web/API/HTMLMediaElement/playing_event)
  - : Die Wiedergabe ist bereit zu starten, nachdem sie pausiert oder aufgrund von Datenmangel verzögert wurde.
- [`progress`](/de/docs/Web/API/HTMLMediaElement/progress_event)
  - : Wird periodisch ausgelöst, während der Browser eine Ressource lädt.
- [`ratechange`](/de/docs/Web/API/HTMLMediaElement/ratechange_event)
  - : Die Wiedergabegeschwindigkeit hat sich geändert.
- [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event)
  - : Eine _Such_-Operation wurde abgeschlossen.
- [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
  - : Eine _Such_-Operation hat begonnen.
- [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
  - : Der Benutzeragent versucht, Mediendaten abzurufen, aber Daten kommen unerwartet nicht.
- [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event)
  - : Die Medien-Datenbeladung wurde ausgesetzt.
- [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)
  - : Die Zeit, die durch das `currentTime`-Attribut angegeben wird, wurde aktualisiert.
- [`volumechange`](/de/docs/Web/API/HTMLMediaElement/volumechange_event)
  - : Die Lautstärke hat sich geändert.
- [`waiting`](/de/docs/Web/API/HTMLMediaElement/waiting_event)
  - : Die Wiedergabe wurde wegen eines vorübergehenden Datenmangels gestoppt.

## Verwendungshinweise

Nicht alle Browser unterstützen die gleichen Videoformate; Sie können mehrere Quellen innerhalb geschachtelter {{htmlelement("source")}}-Elemente bereitstellen, und der Browser verwendet dann die erste, die er versteht.

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

Beim Verwenden von {{htmlelement("source")}}-Elementen versucht der Browser, jede Quelle nacheinander zu laden. Wenn eine Quelle fehlschlägt (z.B. aufgrund einer ungültigen URL oder eines nicht unterstützten Formats), wird die nächste Quelle versucht und so weiter. Ein `error`-Ereignis wird auf dem `<video>`-Element ausgelöst, nachdem alle Quellen fehlgeschlagen sind; `error`-Ereignisse werden nicht auf jedem einzelnen `<source>`-Element ausgelöst.

Wir bieten einen substanziellen und ausführlichen [Leitfaden zu Medien-Dateitypen](/de/docs/Web/Media/Guides/Formats) und den [Leitfaden zu den für Video unterstützten Codecs](/de/docs/Web/Media/Guides/Formats/Video_codecs). Auch verfügbar ist ein Leitfaden zu [Audiocodecs, die mit ihnen verwendet werden können](/de/docs/Web/Media/Guides/Formats/Audio_codecs).

Weitere Verwendungshinweise:

- Wenn Sie das `controls`-Attribut nicht angeben, enthält das Video keine Standardsteuerungen des Browsers; Sie können Ihre eigenen benutzerdefinierten Steuerungen mit JavaScript und der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API erstellen. Siehe [Erstellen eines browserübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player) für weitere Details.
- Um präzise Kontrolle über Ihre Video- (und Audio-) Inhalte zu ermöglichen, lösen `HTMLMediaElement`s viele verschiedene [Ereignisse](/de/docs/Web/API/HTMLMediaElement#events) aus. Neben der Bereitstellung von Kontrollierbarkeit ermöglichen diese Ereignisse das Überwachen des Fortschritts sowohl des Downloads als auch der Wiedergabe des Mediums sowie des Wiedergabestatus und der Position.
- Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um die Positionierung des Videos innerhalb des Rahmens des Elements anzupassen, und die {{cssxref("object-fit")}}-Eigenschaft, um zu steuern, wie die Größe des Videos angepasst wird, um innerhalb des Rahmens zu passen.
- Um Untertitel zusammen mit Ihrem Video anzuzeigen, können Sie etwas JavaScript zusammen mit dem {{htmlelement("track")}}-Element und dem [WebVTT](/de/docs/Web/API/WebVTT_API)-Format verwenden. Siehe [Hinzufügen von Untertiteln und Transkripten zum HTML-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) für weitere Informationen.
- Sie können Audio-Dateien mit einem `<video>`-Element abspielen. Dies kann nützlich sein, wenn Sie beispielsweise Audio mit einem [WebVTT](/de/docs/Web/API/WebVTT_API)-Transkript wiedergeben müssen, da das {{HTMLElement("audio")}}-Element keine Untertitel mit WebVTT erlaubt.
- Um den Fallback-Inhalt in Browsern zu testen, die das Element unterstützen, können Sie `<video>` durch ein nicht vorhandenes Element wie `<notavideo>` ersetzen.

Eine gute allgemeine Informationsquelle zur Verwendung von HTML `<video>` ist der [HTML-Video- und Audio-](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) Anfänger-Tutorial.

### Styling mit CSS

Das `<video>`-Element ist ein ersetztes Element — sein {{cssxref("display")}}-Wert ist standardmäßig `inline` — aber seine Standardbreite und -höhe im Viewport wird durch das eingebettete Video definiert.

Es gibt keine besonderen Überlegungen für das Styling von `<video>`; eine häufige Strategie besteht darin, ihm einen `display`-Wert von `block` zu geben, um es einfacher zu positionieren, zu dimensionieren usw., und dann Stil- und Layoutinformationen nach Bedarf bereitzustellen. [Grundlagen der Video-Player-Stilisierung](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics) bietet einige nützliche Stilisierungstechniken.

### Hinzufügen von Untertiteln und anderen zeitgesteuerten Textspuren

Zeitgesteuerte Textspuren für Untertitel, geschlossene Untertitel, Kapitelüberschriften usw. können deklarativ durch das Einbetten des {{HTMLElement("track")}}-Elements hinzugefügt werden. Die Spuren sind im [Web Video Text Tracks File Format (WebVTT)](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) (`.vtt`-Dateien) angegeben.

Zum Beispiel enthält der unten stehende HTML-Code die Datei "captions.vtt", die verwendet wird, um geschlossene Untertitel auf dem Video zu überlagern, wenn Untertitel vom Benutzer aktiviert werden.

```html
<video controls src="video.webm">
  <track default kind="captions" src="captions.vtt" />
</video>
```

Zeitgesteuerte Textspuren können auch programmgesteuert mithilfe der [WebVTT API](/de/docs/Web/API/WebVTT_API) hinzugefügt werden.

### Erkennen von Hinzufügen und Entfernen von Spuren

Sie können erkennen, wann Spuren zu einem `<video>`-Element hinzugefügt und entfernt werden, indem Sie auf die [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event)- und [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event)-Ereignisse achten. Diese Ereignisse werden jedoch nicht direkt an das `<video>`-Element selbst gesendet.
Stattdessen werden sie an das Tracklistenobjekt im `<video>`-Element's [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) gesendet, das dem Typ der hinzugefügten Spur entspricht:

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die alle Audio-Tracks des Medienelements enthält. Fügen Sie dieser Objekt einen `addtrack`-Listener hinzu, um benachrichtigt zu werden, wenn neue Audio-Tracks zum Element hinzugefügt werden.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)
  - : Eine [`VideoTrackList`](/de/docs/Web/API/VideoTrackList), die alle Video-Tracks des Medienelements enthält. Fügen Sie diesem Objekt einen `addtrack`-Listener hinzu, um benachrichtigt zu werden, wenn Video-Tracks zum Element hinzugefügt werden.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
  - : Eine [`TextTrackList`](/de/docs/Web/API/TextTrackList), die alle Textspuren des Medienelements umfasst (welche für Untertitel, geschlossene Untertitel usw. verwendet werden). Fügen Sie diesem Objekt einen `addtrack`-Listener hinzu, um benachrichtigt zu werden, wenn Textspuren zum Element hinzugefügt werden.

Zum Beispiel können Sie Code wie diesen verwenden, um zu erkennen, wann Audio-Tracks zu einem `<video>`-Element hinzugefügt oder entfernt werden:

```js
const elem = document.querySelector("video");

elem.audioTracks.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTracks.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Dieser Code überwacht das Hinzufügen und Entfernen von Audio-Tracks zum Element und ruft eine hypothetische Funktion auf einem Track-Editor auf, um den Track in der Liste der verfügbaren Tracks des Editors zu registrieren und zu entfernen.

Sie können auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um auf die [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event)- und [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event)-Ereignisse zu hören.

### Serverunterstützung für Video

Wenn der MIME-Typ für das Video nicht korrekt auf dem Server gesetzt ist, wird das Video möglicherweise nicht angezeigt oder zeigt ein graues Feld mit einem X (wenn JavaScript aktiviert ist).

Wenn Sie Apache-Webserver verwenden, um WebM-Videos bereitzustellen, können Sie dieses Problem beheben, indem Sie die Video-Dateitypen-Erweiterungen zum `video/webm`-MIME-Typ hinzufügen (die häufigste WebM-Dateierweiterung ist `.webm`). Um dies zu tun, bearbeiten Sie die `mime.types`-Datei in `/etc/apache` oder verwenden Sie die `AddType`-Konfigurationsdirektive in `httpd.conf`:

```plain
AddType video/webm .webm
```

Ihr Webhoster bietet möglicherweise eine einfache Schnittstelle zur Änderung der MIME-Type-Konfiguration für neue Technologien, bis ein globales Update natürlicherweise erfolgt.

## Zugänglichkeit

Videos sollten sowohl Untertitel als auch Transkripte bereitstellen, die ihren Inhalt genau beschreiben (siehe [Hinzufügen von Untertiteln und Transkripten zum HTML-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) für weitere Informationen, wie diese implementiert werden). Untertitel ermöglichen es Menschen, die einen Hörverlust erleben, den Audiocontent eines Videos zu verstehen, während das Video abgespielt wird, während Transkripte es Menschen ermöglichen, die zusätzliche Zeit benötigen, den Audiocontent in einem angenehmen Tempo und Format zu überprüfen.

Es ist erwähnenswert, dass Sie zwar Audio-Only-Medien untertiteln können, dies jedoch nur tun können, wenn Sie Audio in einem `<video>`-Element abspielen, da der Videobereich des Elements verwendet wird, um die Untertitel anzuzeigen. Dies ist einer der speziellen Szenarien, in denen es nützlich ist, Audio in einem Videoelement abzuspielen.

Wenn automatische Untertitelungsdienste verwendet werden, ist es wichtig, den generierten Content zu überprüfen, um sicherzustellen, dass er die Ausgangsvideo genau repräsentiert.

Zusätzlich zum gesprochenen Dialog sollten Untertitel und Transkripte auch Musik und Soundeffekte identifizieren, die wichtige Informationen kommunizieren. Dies schließt Emotionen und Tonalität ein:

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

Untertitel sollten das Hauptobjekt des Videos nicht verdecken. Sie können mithilfe [der `align` VTT-Cue-Einstellung](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format#cue_settings) platziert werden.

- [Web Video Text Tracks Format (WebVTT)](/de/docs/Web/API/WebVTT_API)
- [WebAIM: Untertitel, Transkripte und Audiobeschreibungen](https://webaim.org/techniques/captions/)
- [MDN Verstehen von WCAG, Richtlinie 1.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [Verständnis von Erfolgskriterium 1.2.1 | W3C Verstehen von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Verständnis von Erfolgskriterium 1.2.2 | W3C Verstehen von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Beispiele

### Einzelne Quelle

Dieses Beispiel spielt ein Video ab, wenn es aktiviert wird, und stellt dem Benutzer die Standard-Videosteuerungen des Browsers zur Wiedergabesteuerung zur Verfügung.

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

Dieses Beispiel baut auf dem letzten auf und bietet drei verschiedene Quellen für das Medium; dies ermöglicht es dem Video, angesehen zu werden, unabhängig davon, welche Videocodecs vom Browser unterstützt werden.

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

Zuerst wird AVI versucht. Wenn das nicht abgespielt werden kann, wird [MP4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4) versucht. Eine Fallback-Nachricht wird angezeigt, wenn das Videoelement nicht unterstützt wird, aber nicht, wenn alle Quellen fehlschlagen.

Einige Medien-Dateitypen ermöglichen es Ihnen, spezifischere Informationen mit dem [`codecs`](/de/docs/Web/Media/Guides/Formats/codecs_parameter)-Parameter als Teil der Typzeichenfolge der Datei anzugeben. Zum Beispiel sagt `video/webm; codecs="vp8, vorbis"`, dass die Datei ein [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm)-Video ist, das [VP8](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp8) für sein Video und [Vorbis](/de/docs/Web/Media/Guides/Formats/Audio_codecs#vorbis) für Audio verwendet.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließinhalte</a>, phrasing-Inhalte, eingebettete Inhalte. Wenn es ein <a href="#controls"><code>controls</code></a>-Attribut hat: interaktive Inhalte und greifbare Inhalte.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        <p>
          Wenn das Element ein <a href="#src"><code>src</code></a>
          Attribut hat: null oder mehr {{HTMLElement("track")}} Elemente, gefolgt von transparentem Inhalt, der keine Medienelemente enthält - das heißt, kein {{HTMLElement("audio")}} oder <code>&lt;video&gt;</code>.
        </p>
        <p>
          Andernfalls: Null oder mehr {{HTMLElement("source")}} Elemente, gefolgt von null oder mehr {{HTMLElement("track")}} Elementen, gefolgt von transparentem Inhalt, der keine Medienelemente enthält - das heißt, kein {{HTMLElement("audio")}} oder <code>&lt;video&gt;</code>.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
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
      <td><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role"><code>Anwendung</code></a></td>
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

- Positionierung und Größenanpassung des Bildes innerhalb seines Rahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
- {{htmlelement("audio")}}
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Manipulation von Video mit Canvas](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [Konfiguration von Servern für Ogg-Medien](/de/docs/Web/Media/Guides/Formats/Configuring_servers_for_Ogg_media)
