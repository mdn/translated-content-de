---
title: "`<video>` HTML-Videoeinbettungs-Element"
short-title: <video>
slug: Web/HTML/Reference/Elements/video
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<video>`**-Element [HTML](/de/docs/Web/HTML) bettet einen Mediaplayer ein, der die Videowiedergabe im Dokument unterstützt. Sie können `<video>` auch für Audioinhalte verwenden, aber das {{HTMLElement("audio")}}-Element bietet möglicherweise eine besser geeignete Benutzererfahrung.

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

Das obige Beispiel zeigt, wie man das `<video>`-Element verwendet. Ähnlich wie beim {{htmlelement("img")}}-Element geben wir einen Pfad zu dem Medium an, das wir in dem Attribut `src` anzeigen möchten; wir können andere Attribute hinzufügen, um Informationen wie Videobreite und -höhe anzugeben, ob wir möchten, dass es automatisch abgespielt und wiederholt wird, oder um die Standard-Videosteuerung des Browsers anzuzeigen, usw.

Der Inhalt zwischen den öffnenden und schließenden `<video></video>`-Tags wird als Fallback in Browsern angezeigt, die das Element nicht unterstützen.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `autoplay`
  - : Ein Boolean-Attribut; wenn angegeben, beginnt das Video automatisch mit der Wiedergabe, sobald es geladen werden kann, ohne das Laden der Daten zu unterbrechen.

    > [!NOTE]
    > Moderne Browser blockieren Audio (oder Videos mit einem nicht stummgeschalteten Audiospur) von der automatischen Wiedergabe, da Webseiten, die automatisch Audio abspielen, eine unangenehme Erfahrung für Benutzer sein können. Sehen Sie sich unseren [Autoplay-Leitfaden](/de/docs/Web/Media/Guides/Autoplay) für zusätzliche Informationen zur korrekten Verwendung von Autoplay an.

    Um die automatische Wiedergabe von Videos zu deaktivieren, funktioniert `autoplay="false"` nicht; das Video wird automatisch abgespielt, wenn das Attribut im `<video>`-Tag vorhanden ist. Um die automatische Wiedergabe zu entfernen, muss das Attribut komplett entfernt werden.

    > [!NOTE]
    > Videos mit dem Attribut [`loading="lazy"`](#loading) beginnen nicht mit dem Herunterladen und Abspielen, bis das Element in der Nähe oder innerhalb des Ansichtsfensters liegt.

- `controls`
  - : Wenn dieses Attribut vorhanden ist, bietet der Browser Steuerelemente an, die es dem Benutzer ermöglichen, die Videowiedergabe zu steuern, einschließlich Lautstärke, Suchlauf und Wiedergabestopp/-fortsetzung.
- `controlslist`
  - : Das [`controlslist`](https://wicg.github.io/controls-list/explainer.html)-Attribut hilft dem Browser bei der Auswahl der anzuzeigenden Steuerelemente für das `video`-Element, wann immer der Browser sein eigenes Set von Steuerelementen zeigt (das heißt, wenn das `controls`-Attribut angegeben ist).

    Die zulässigen Werte sind `nodownload`, `nofullscreen` und `noremoteplayback`.

    Verwenden Sie das [`disablepictureinpicture`](#disablepictureinpicture)-Attribut, wenn Sie den Bild-in-Bild-Modus (und dessen Steuerung) deaktivieren möchten.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Dieses {{Glossary("Enumerated", "enumerierte")}}-Attribut zeigt an, ob CORS verwendet werden soll, um das zugehörige Video abzurufen. [CORS-aktivierte Ressourcen](/de/docs/Web/HTML/How_to/CORS_enabled_image) können im {{HTMLElement("canvas")}}-Element ohne _Verfälschung_ wiederverwendet werden. Die zulässigen Werte sind:
    - `anonymous`
      - : Sendet eine Cross-Origin-Anfrage ohne Berechtigung. Mit anderen Worten, es sendet den `Origin:`-HTTP-Header ohne ein Cookie, X.509-Zertifikat oder HTTP-Basis-Authentifizierung. Wenn der Server der Ursprungsseite keine Berechtigungen erteilt (indem er den `Access-Control-Allow-Origin:`-HTTP-Header nicht setzt), wird die Ressource _verfälscht_, und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Sendet eine Cross-Origin-Anfrage mit Berechtigung. Mit anderen Worten, es sendet den `Origin:`-HTTP-Header mit einem Cookie, einem Zertifikat oder einer HTTP-Basis-Authentifizierung. Wenn der Server der Ursprungsseite keine Berechtigungen erteilt (durch den `Access-Control-Allow-Credentials:`-HTTP-Header), wird die Ressource _verfälscht_ und ihre Nutzung eingeschränkt.

    Wenn nicht vorhanden, wird die Ressource ohne CORS-Anfrage (d.h. ohne Senden des `Origin:`-HTTP-Headers) abgerufen, wodurch ihre unverfälschte Verwendung in {{HTMLElement('canvas')}}-Elementen verhindert wird. Wenn ungültig, wird damit umgegangen, als ob das enumerierte Schlüsselwort `anonymous` verwendet wurde. Siehe [CORS-Einstellungen für Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für weitere Informationen.

- `disablepictureinpicture`
  - : Verhindert, dass der Browser ein Bild-in-Bild-Kontextmenü vorschlägt oder in einigen Fällen automatisch ein Bild-in-Bild anfordert.
- `disableremoteplayback`
  - : Ein Boolean-Attribut, das die Fähigkeit zur Fernwiedergabe auf Geräten, die mit kabelgebundenen (HDMI, DVI usw.) und drahtlosen Technologien (Miracast, Chromecast, DLNA, AirPlay usw.) verbunden sind, deaktiviert.

    In Safari können Sie [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) als Fallback verwenden.

- `height`
  - : Die Höhe der Anzeige des Videos in [CSS-Pixels](https://drafts.csswg.org/css-values/#px) (nur Absolute Werte; [keine Prozentsätze](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).

- `loading` {{experimental_inline}}
  - : Gibt an, wie der Browser das Video (einschließlich eines Vorschaubildes) laden soll:
    - `eager`
      - : Lädt das Video sofort, unabhängig davon, ob sich das Video momentan im sichtbaren Ansichtsfenster befindet oder nicht (dies ist der Standardwert).
    - `lazy`
      - : Verzögert das Laden des Videos, bis es eine berechnete Entfernung vom Ansichtsfenster hat, wie vom Browser definiert.

        Lazy Loading vermeidet das Netzwerk- und Speichernetzwerk-Bandbreite, die erforderlich ist, um das Video zu handhaben, bis es vernünftigerweise sicher ist, dass es benötigt wird. Dies verbessert die Leistung in den meisten typischen Anwendungsfällen.

        Während explizite [`width`](#width)- und [`height`](#height)-Attribute für alle Videos empfohlen werden, um Layoutverschiebungen zu vermeiden, sind sie besonders wichtig für lazy-geladene Videos. Lazy-geladene Videos werden niemals geladen, wenn sie keinen sichtbaren Teil eines Elements überschneiden, selbst wenn ihr Laden dies ändern würde, da ungeladene Videos eine `width` und `height` von `0` haben. Dies erzeugt eine noch störendere Benutzererfahrung, wenn der sichtbare Inhalt im Ansichtsfenster mitten in der Ansicht umfließt.

        Lazy-geladene Videos im visuellen Ansichtsfenster sind möglicherweise noch nicht sichtbar, wenn das [`load`](/de/docs/Web/API/Window/load_event) Ereignis des Fensters ausgelöst wird. Dies geschieht, weil das Ereignis auf der Grundlage von eager-geladenen Videos ausgelöst wird—lazy-geladene Videos werden nicht berücksichtigt, selbst wenn sie sich beim ersten Seitenaufruf im visuellen Ansichtsfenster befinden.

        Das Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Anti-Tracking-Maßnahme, denn wenn ein Benutzeragent Lazy Loading unterstützen würde, wenn Scripting deaktiviert ist, wäre es immer noch möglich, die ungefähre Scrollposition eines Benutzers während einer Sitzung zu verfolgen, indem Videos strategisch im Markup einer Seite platziert werden, so dass ein Server nachverfolgen kann, wie viele Videos angefordert werden und wann.

        > [!NOTE]
        > Das Attribut `loading="lazy"` wirkt sich auch auf die Attribute [`autoplay`](#autoplay), [`poster`](#poster) und [`preload`](#preload) aus, wie in den jeweiligen Abschnitten der Seite beschrieben.

- `loop`
  - : Ein Boolean-Attribut; wenn angegeben, springt der Browser automatisch zum Anfang zurück, wenn das Videoende erreicht ist.

- `muted`
  - : Ein Boolean-Attribut, das die standardmäßige Stummschaltungseinstellung des im Video enthaltenen Audios angibt. Wenn gesetzt, wird das Audio anfangs stummgeschaltet. Sein Standardwert ist `false`, was bedeutet, dass das Audio abgespielt wird, wenn das Video abgespielt wird.

- `playsinline`
  - : Ein Boolean-Attribut, das angibt, dass das Video "inline" abgespielt werden soll, das heißt innerhalb des Wiedergabebereichs des Elements. Beachten Sie, dass das Fehlen dieses Attributs _nicht_ impliziert, dass das Video immer im Vollbildmodus abgespielt wird.

- `poster`
  - : Eine URL für ein Bild, das angezeigt wird, während das Video heruntergeladen wird. Wenn dieses Attribut nicht angegeben ist, wird nichts angezeigt, bis der erste Frame verfügbar ist; dann wird der erste Frame als Posterframe angezeigt.

    > [!NOTE]
    > Videos mit dem Attribut [`loading="lazy"`](#loading) laden die `poster`-Ressource nur herunter, wenn sich das Video in der Nähe oder innerhalb des Ansichtsfensters befindet.

- `preload`
  - : Dieses {{Glossary("enumerated", "enumerierte")}}-Attribut soll dem Browser einen Hinweis geben, was der Autor glaubt, was die beste Benutzererfahrung in Bezug auf den Inhalt, der vor der Videowiedergabe geladen wird, bedeutet. Es kann einen der folgenden Werte haben:
    - `none`: Gibt an, dass das Video nicht vorab geladen werden soll.
    - `metadata`: Gibt an, dass nur Videometadaten (z.B. Länge) abgerufen werden.
    - `auto`: Gibt an, dass die gesamte Videodatei heruntergeladen werden kann, auch wenn nicht erwartet wird, dass der Benutzer sie verwendet.
    - _leere Zeichenkette_: Ein Synonym für den Wert `auto`.

    Der Standardwert ist je nach Browser unterschiedlich. Die Spezifikation rät dazu, ihn auf `metadata` zu setzen.

    > [!NOTE]
    >
    > - Videos mit dem Attribut [`loading="lazy"`](#loading) wenden das `preload`-Verhalten erst an, wenn das Video in der Nähe oder innerhalb des Ansichtsfensters ist.
    > - Das `autoplay`-Attribut hat Vorrang vor `preload`. Wenn `autoplay` angegeben ist, muss der Browser offensichtlich mit dem Herunterladen des Videos zur Wiedergabe beginnen.
    > - Die Spezifikation zwingt den Browser nicht, den Wert dieses Attributs zu beachten; es ist lediglich ein Hinweis.

- `src`
  - : Die URL des einzubettenden Videos. Dies ist optional; Sie können stattdessen das {{HTMLElement("source")}}-Element im Videoblock verwenden, um das einzubettende Video anzugeben.
- `width`
  - : Die Breite der Anzeige des Videos in [CSS-Pixels](https://drafts.csswg.org/css-values/#px) (nur Absolute Werte; [keine Prozentsätze](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).

## Ereignisse

- [`audioprocess`](/de/docs/Web/API/ScriptProcessorNode/audioprocess_event) {{Deprecated_Inline}}
  - : Der Eingabepuffer eines [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) ist bereit zur Verarbeitung.
- [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)
  - : Der Browser kann das Medium abspielen, schätzt jedoch ein, dass nicht genügend Daten geladen sind, um das Medium ohne Unterbrechung bis zum Ende abzuspielen, um den Inhalt weiter zu puffern.
- [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
  - : Der Browser schätzt ein, dass er das Medium ohne Unterbrechung bis zum Ende abspielen kann, um den Inhalt weiter zu puffern.
- [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)
  - : Die Verarbeitung eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) ist beendet.
- [`durationchange`](/de/docs/Web/API/HTMLMediaElement/durationchange_event)
  - : Das `duration`-Attribut wurde aktualisiert.
- [`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)
  - : Das Medium ist leer geworden; beispielsweise wird dieses Ereignis gesendet, wenn das Medium bereits geladen (oder teilweise geladen) ist und die [`load()`](/de/docs/Web/API/HTMLMediaElement/load)-Methode aufgerufen wird, um es erneut zu laden.
- [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)
  - : Die Wiedergabe hat gestoppt, weil das Ende des Mediums erreicht wurde.
- [`error`](/de/docs/Web/API/HTMLMediaElement/error_event)
  - : Ein Fehler trat beim Abrufen der Mediendaten auf oder der Typ der Ressource ist kein unterstütztes Medienformat.
- [`loadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event)
  - : Der erste Frame des Mediums ist geladen.
- [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
  - : Die Metadaten wurden geladen.
- [`loadstart`](/de/docs/Web/API/HTMLMediaElement/loadstart_event)
  - : Wird ausgelöst, wenn der Browser beginnt, die Ressource zu laden.
- [`pause`](/de/docs/Web/API/HTMLMediaElement/pause_event)
  - : Die Wiedergabe wurde pausiert.
- [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)
  - : Die Wiedergabe hat begonnen.
- [`playing`](/de/docs/Web/API/HTMLMediaElement/playing_event)
  - : Die Wiedergabe ist bereit zu starten, nachdem sie pausiert wurde oder wegen Datenmangels verzögert wurde.
- [`progress`](/de/docs/Web/API/HTMLMediaElement/progress_event)
  - : Wird periodisch ausgelöst, während der Browser eine Ressource lädt.
- [`ratechange`](/de/docs/Web/API/HTMLMediaElement/ratechange_event)
  - : Die Wiedergabegeschwindigkeit hat sich geändert.
- [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event)
  - : Eine _Such_-Operation wurde abgeschlossen.
- [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
  - : Eine _Such_-Operation wurde begonnen.
- [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
  - : Der Benutzeragent versucht, Mediendaten zu laden, aber Daten kommen unerwartet nicht weiter.
- [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event)
  - : Das Laden von Mediendaten wurde unterbrochen.
- [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)
  - : Die durch das `currentTime`-Attribut angezeigte Zeit wurde aktualisiert.
- [`volumechange`](/de/docs/Web/API/HTMLMediaElement/volumechange_event)
  - : Die Lautstärke hat sich geändert.
- [`waiting`](/de/docs/Web/API/HTMLMediaElement/waiting_event)
  - : Die Wiedergabe hat gestoppt wegen eines vorübergehenden Mangels an Daten.

## Verwendungshinweise

Browser unterstützen nicht alle das gleiche Videoformat; Sie können mehrere Quellen in geschachtelten {{htmlelement("source")}}-Elementen angeben, und der Browser wird dann die erste davon verwenden, die er versteht.

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

Beim Einsatz von {{htmlelement("source")}}-Elementen versucht der Browser, jede Quelle nacheinander zu laden. Wenn eine Quelle fehlschlägt (zum Beispiel wegen einer ungültigen URL oder eines nicht unterstützten Formats), wird die nächste Quelle versucht und so weiter. Ein `error`-Ereignis tritt auf dem `<video>`-Element auf, nachdem alle Quellen fehlgeschlagen sind; `error`-Ereignisse werden nicht für jedes einzelne `<source>`-Element ausgelöst.

Wir bieten einen substantiellen und gründlichen [Leitfaden zu Medien-Dateitypen](/de/docs/Web/Media/Guides/Formats) und den [Leitfaden zu den unterstützten Codecs für Video](/de/docs/Web/Media/Guides/Formats/Video_codecs). Auch verfügbar ist ein Leitfaden zu [Audio-Codecs, die mit ihnen verwendet werden können](/de/docs/Web/Media/Guides/Formats/Audio_codecs).

Weitere Nutzungshinweise:

- Wenn Sie das `controls`-Attribut nicht angeben, wird das Video nicht die standardmäßigen Steuerungen des Browsers enthalten; Sie können Ihre eigenen benutzerdefinierten Steuerungen mit JavaScript und der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API erstellen. Siehe [Erstellung eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player) für mehr Details.
- Zur präzisen Kontrolle über Ihre Video- (und Audio-) Inhalte feuern `HTMLMediaElement`s viele verschiedene [Ereignisse](/de/docs/Web/API/HTMLMediaElement#events). Neben der Bereitstellung von Kontrollierbarkeit lassen diese Ereignisse Sie den Fortschritt sowohl des Downloads als auch der Wiedergabe der Medien überwachen, sowie den Wiedergabestatus und die Position.
- Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um die Positionierung des Videos innerhalb des Rahmens des Elements anzupassen, und die {{cssxref("object-fit")}}-Eigenschaft, um zu steuern, wie die Größe des Videos angepasst wird, um innerhalb des Rahmens zu passen.
- Um Untertitel zusammen mit Ihrem Video anzuzeigen, können Sie etwas JavaScript zusammen mit dem {{htmlelement("track")}}-Element und dem [WebVTT](/de/docs/Web/API/WebVTT_API) Format verwenden. Siehe [Hinzufügen von Untertiteln und Untertiteln zu HTML-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) für weitere Informationen.
- Sie können Audiodateien mit einem `<video>`-Element abspielen. Dies kann nützlich sein, wenn Sie beispielsweise eine Audioführung mit einem [WebVTT](/de/docs/Web/API/WebVTT_API)-Transkript durchführen müssen, da das {{HTMLElement("audio")}}-Element keine Untertitel mit WebVTT zulässt.
- Um den Fallback-Inhalt auf Browsern zu testen, die das Element unterstützen, können Sie `<video>` durch ein nicht vorhandenes Element wie `<notavideo>` ersetzen.

Eine gute allgemeine Informationsquelle zur Verwendung von HTML-`<video>` ist das [HTML-Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)-Einführungstutorial.

### Styling mit CSS

Das `<video>`-Element ist ein ersetztes Element — sein {{cssxref("display")}}-Wert ist standardmäßig `inline` — aber seine Standardbreite und -höhe im Ansichtsfenster wird durch das eingebettete Video definiert.

Es gibt keine besonderen Überlegungen für das Styling von `<video>`; eine gängige Strategie besteht darin, ihm einen `display`-Wert von `block` zu geben, um es einfacher zu positionieren, zu bemessen usw., und dann je nach Bedarf Styling- und Layoutinformationen bereitzustellen. [Grundlagen des Video-Player-Stylings](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics) bietet einige nützliche Styling-Techniken.

### Hinzufügen von Untertiteln und anderen zeitgesteuerten Textspuren

Zeitgesteuerte Textspuren für Untertitel, geschlossene Untertitel, Kapitelüberschriften usw. können deklarativ durch Einbetten des {{HTMLElement("track")}}-Elements hinzugefügt werden.
Die Spuren sind im [Web Video Text Tracks File Format (WebVTT)](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) (`.vtt`-Dateien) angegeben.

Zum Beispiel enthält der unten stehende HTML-Code die Datei "captions.vtt", die verwendet wird, um geschlossene Untertitel auf dem Video zu überlagern, wenn die Untertitel vom Benutzer aktiviert sind.

```html
<video controls src="video.webm">
  <track default kind="captions" src="captions.vtt" />
</video>
```

Zeitgesteuerte Texttracks können auch programmatisch mit der [WebVTT API](/de/docs/Web/API/WebVTT_API) hinzugefügt werden.

### Erkennung der Hinzufügung und Entfernung von Spuren

Sie können erkennen, wann Tracks zu einem `<video>`-Element hinzugefügt und davon entfernt werden, indem Sie die [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event)-Ereignisse verwenden. Diese Ereignisse werden jedoch nicht direkt an das `<video>`-Element selbst gesendet.
Stattdessen werden sie an das Track-Listen-Objekt innerhalb des `<video>`-Elements gesendet, das den Typ der Track darstellt, der dem Element hinzugefügt wurde:

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die alle Audiospuren des Media-Elements enthält.
    Fügen Sie diesem Objekt einen Listener für `addtrack` hinzu, um benachrichtigt zu werden, wenn neue Audiospuren zum Element hinzugefügt werden.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)
  - : Eine [`VideoTrackList`](/de/docs/Web/API/VideoTrackList), die alle Videospuren des Media-Elements enthält.
    Fügen Sie diesem Objekt einen `addtrack`-Listener hinzu, um benachrichtigt zu werden, wenn Videospuren zum Element hinzugefügt werden.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
  - : Eine [`TextTrackList`](/de/docs/Web/API/TextTrackList), die alle Textspuren des Media-Elements enthält (die für Untertitel, geschlossene Untertitel usw. verwendet werden).
    Fügen Sie diesem Objekt einen `addtrack`-Listener hinzu, um benachrichtigt zu werden, wenn Textspuren zum Element hinzugefügt werden.

Zum Beispiel, um zu erkennen, wann Audiospuren zu oder aus einem `<video>`-Element hinzugefügt oder entfernt werden, können Sie Code wie diesen verwenden:

```js
const elem = document.querySelector("video");

elem.audioTracks.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTracks.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Dieser Code überwacht das Hinzufügen und Entfernen von Audiospuren vom Element und ruft eine hypothetische Funktion in einem Track-Editor auf, um die Spur aus der Liste der verfügbaren Tracks des Editors zu registrieren und zu entfernen.

Sie können auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um auf die [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event)-Ereignisse zu hören.

### Unterstützung des Servers für Videos

Wenn der MIME-Typ für das Video nicht korrekt auf dem Server gesetzt ist, kann das Video möglicherweise nicht angezeigt werden oder ein graues Kästchen mit einem X angezeigt werden (wenn JavaScript aktiviert ist).

Wenn Sie Apache Web Server verwenden, um WebM-Videos bereitzustellen, können Sie dieses Problem beheben, indem Sie die Video-Dateierweiterungen zum MIME-Typ `video/webm` hinzufügen (die häufigste WebM-Dateierweiterung ist `.webm`). Um dies zu tun, bearbeiten Sie die Datei `mime.types` in `/etc/apache` oder verwenden Sie die `AddType`-Konfigurationsdirektive in `httpd.conf`:

```plain
AddType video/webm .webm
```

Ihr Web-Hoster kann eine einfache Schnittstelle zur Konfiguration von MIME-Typ-Änderungen für neue Technologien bereitstellen, bis ein globales Update natürlich erfolgt.

## Barrierefreiheit

Videos sollten sowohl Untertitel als auch Transkripte bereitstellen, die ihren Inhalt genau beschreiben (siehe [Hinzufügen von Untertiteln und Untertiteln zu HTML-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) für weitere Informationen darüber, wie diese implementiert werden). Untertitel ermöglichen es Menschen mit Hörverlust, den Audioinhalt eines Videos zu verstehen, während das Video abgespielt wird, während Transkripte es Menschen ermöglichen, die zusätzliche Zeit benötigen, um den Audioinhalt in einem angenehmen Tempo und Format zu überprüfen.

Es ist wichtig zu beachten, dass obwohl Sie Audios mit Untertiteln versehen können, dies nur möglich ist, wenn Sie Audio in einem `<video>`-Element abspielen, da die Videoregion des Elements verwendet wird, um die Untertitel anzuzeigen. Dies ist eines der speziellen Szenarien, in denen es nützlich ist, Audio in einem Videoelement abzuspielen.

Wenn automatische Untertitelungsdienste verwendet werden, ist es wichtig, den generierten Inhalt zu überprüfen, um sicherzustellen, dass er die Originalquelle korrekt wiedergibt.

Zusätzlich zu gesprochenem Dialog sollten Untertitel und Transkripte auch Musik und Soundeffekte identifizieren, die wichtige Informationen kommunizieren. Dies schließt Emotionen und Ton ein:

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

Untertitel sollten das Hauptmotiv des Videos nicht verdecken. Die Position kann durch die [der `align`-VTT-Anweisung zur Einstellung](/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format#cue_settings) eingestellt werden.

- [Web Video Text Tracks Format (WebVTT)](/de/docs/Web/API/WebVTT_API)
- [WebAIM: Untertitel, Transkripte und Audiobeschreibungen](https://webaim.org/techniques/captions/)
- [MDN Verständnis von WCAG, Richtlinie 1.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [Verständnis des Erfolgskriteriums 1.2.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Verständnis des Erfolgskriteriums 1.2.2 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Beispiele

### Einzelne Quelle

Dieses Beispiel spielt ein Video ab, wenn es aktiviert wird und bietet dem Benutzer die standardmäßigen Videosteuerungen des Browsers zur Steuerung der Wiedergabe.

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

Bis das Video zu spielen beginnt, wird das Bild angezeigt, das im `poster`-Attribut angegeben wurde. Wenn der Browser die Videowiedergabe nicht unterstützt, wird der Fallback-Text angezeigt.

### Mehrere Quellen

Dieses Beispiel baut auf dem letzten auf und bietet drei verschiedene Quellen für das Medium; dies ermöglicht das Ansehen des Videos, unabhängig davon, welche Videocodecs vom Browser unterstützt werden.

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

Einige Mediadateitypen lassen es zu, spezifischere Informationen mit der [`codecs`](/de/docs/Web/Media/Guides/Formats/codecs_parameter)-Parameter als Teil der Dateitypzeichenkette bereitzustellen. Zum Beispiel, `video/webm; codecs="vp8, vorbis"` sagt, dass die Datei ein [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm)-Video ist, das [VP8](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp8) für sein Video und [Vorbis](/de/docs/Web/Media/Guides/Formats/Audio_codecs#vorbis) für Audio verwendet.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließinhalt</a>, anschaulicher Inhalt, eingebetteter Inhalt. Wenn es ein <a href="#controls"><code>controls</code></a>-Attribut hat: interaktiver Inhalt und greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <p>
          Wenn das Element ein <a href="#src"><code>src</code></a>-Attribut hat: null oder mehr {{HTMLElement("track")}}-Elemente, gefolgt von transparentem Inhalt, der keine Medienelemente enthält,– das heißt, kein {{HTMLElement("audio")}} oder <code>&lt;video&gt;</code>.
        </p>
        <p>
          Ansonsten: null oder mehr {{HTMLElement("source")}}-Elemente, gefolgt von null oder mehr {{HTMLElement("track")}}-Elementen, gefolgt von transparentem Inhalt, der keine Medienelemente enthält,– das heißt, kein {{HTMLElement("audio")}} oder <code>&lt;video&gt;</code>.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das startseitige als auch das endseitige Tag sind obligatorisch.</td>
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

- Positionieren und Dimensionieren des Bildes innerhalb seines Rahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
- {{htmlelement("audio")}}
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Manipulieren von Videos mit Canvas](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [Konfigurieren von Servern für Ogg-Medien](/de/docs/Web/Media/Guides/Formats/Configuring_servers_for_Ogg_media)
