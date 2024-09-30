---
title: "<audio>: Das Einbettungs-Audioelement"
slug: Web/HTML/Element/audio
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}

Das **`<audio>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um Toninhalte in Dokumente einzubetten. Es kann eine oder mehrere Audioquellen enthalten, die über das `src`-Attribut oder das {{HTMLElement("source")}}-Element dargestellt werden: Der Browser wählt die am besten geeignete aus. Es kann auch das Ziel für gestreamte Medien sein, unter Verwendung eines [`MediaStream`](/de/docs/Web/API/MediaStream).

{{EmbedInteractiveExample("pages/tabbed/audio.html","tabbed-standard")}}

Das obige Beispiel zeigt die einfache Nutzung des `<audio>`-Elements. In ähnlicher Weise wie beim {{htmlelement("img")}}-Element, geben wir einen Pfad zu dem Medium an, das wir im `src`-Attribut einbetten möchten; wir können weitere Attribute einfügen, um Informationen anzugeben, wie zum Beispiel, ob es automatisch abgespielt und geloopt werden soll, ob die Standard-Audiosteuerung des Browsers angezeigt werden soll usw.

Der Inhalt innerhalb der öffnenden und schließenden `<audio></audio>`-Tags wird als Rückfalllösung in Browsern angezeigt, die das Element nicht unterstützen.

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `autoplay`

  - : Ein Boolean-Attribut: Wenn angegeben, wird das Audio automatisch abgespielt, sobald es möglich ist, ohne darauf zu warten, dass die gesamte Audiodatei heruntergeladen wurde.

    > [!NOTE]
    > Websites, die automatisch Audio abspielen (oder Videos mit einer Tonspur), können für Benutzer eine unangenehme Erfahrung sein und sollten nach Möglichkeit vermieden werden. Wenn Sie unbedingt die Autoplay-Funktionalität anbieten müssen, sollten Sie sie opt-in gestalten (erfordern, dass ein Benutzer sie speziell aktiviert). Dies kann jedoch nützlich sein, wenn Mediendateien erstellt werden, deren Quelle später unter Benutzerspezifikation festgelegt wird. Siehe unseren [Autoplay-Leitfaden](/de/docs/Web/Media/Autoplay_guide) für weitere Informationen zur korrekten Nutzung von Autoplay.

- `controls`

  - : Wenn dieses Attribut vorhanden ist, bietet der Browser Steuerelemente an, um dem Benutzer die Kontrolle über die Audiowiedergabe zu ermöglichen, einschließlich Lautstärke, Suchen und Pause/Fortsetzen der Wiedergabe.

- `controlslist`

  - : Das [`controlslist`](https://wicg.github.io/controls-list/explainer.html)-Attribut, wenn angegeben, hilft dem Browser bei der Auswahl, welche Steuerungen für das `audio`-Element angezeigt werden sollen, wann immer der Browser sein eigenes Set von Steuerungen anzeigt (das heißt, wenn das `controls`-Attribut angegeben ist).

    Die erlaubten Werte sind `nodownload`, `nofullscreen` und `noremoteplayback`.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Dieses [aufzählbare](/de/docs/Glossary/Enumerated) Attribut zeigt an, ob CORS verwendet werden soll, um die zugehörige Audiodatei abzurufen. [CORS-aktivierte Ressourcen](/de/docs/Web/HTML/CORS_enabled_image) können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne _verfälscht_ zu werden. Die erlaubten Werte sind:

    - `anonymous`
      - : Sendet eine Cross-Origin-Anfrage ohne eine Berechtigung. Mit anderen Worten, es sendet den `Origin:` HTTP-Header ohne ein Cookie, X.509-Zertifikat oder HTTP-Basic-Authentifizierung. Wenn der Server keine Berechtigungen an die Ursprungsseite (durch Nichtsetzen des `Access-Control-Allow-Origin:`-HTTP-Headers) gibt, wird die Ressource _verfälscht_ und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Sendet eine Cross-Origin-Anfrage mit einer Berechtigung. Mit anderen Worten, es sendet den `Origin:` HTTP-Header mit einem Cookie, einem Zertifikat oder führt eine HTTP-Basic-Authentifizierung durch. Wenn der Server keine Berechtigungen an die Ursprungsseite gibt (durch `Access-Control-Allow-Credentials:`-HTTP-Header), wird die Ressource _verfälscht_ und ihre Nutzung eingeschränkt.

    Wenn nicht vorhanden, wird die Ressource ohne eine CORS-Anfrage abgerufen (d.h. ohne das Senden des `Origin:`-HTTP-Headers), wodurch ihre unverfälschte Nutzung in {{HTMLElement('canvas')}}-Elementen verhindert wird. Wenn ungültig, wird es behandelt, als ob das aufgezählte Schlüsselwort **anonymous** verwendet wurde. Siehe [CORS-Einstellungsattribute](/de/docs/Web/HTML/Attributes/crossorigin) für zusätzliche Informationen.

- `disableremoteplayback`

  - : Ein Boolean-Attribut, das verwendet wird, um die Fähigkeit zur Fernwiedergabe auf Geräten zu deaktivieren, die mit kabelgebundenen (HDMI, DVI, etc.) und kabellosen Technologien (Miracast, Chromecast, DLNA, AirPlay, etc.) verbunden sind. Weitere Informationen finden Sie in dieser [vorgeschlagenen Spezifikation](https://www.w3.org/TR/remote-playback/#the-disableremoteplayback-attribute).

    In Safari können Sie [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) als Rückfalloption verwenden.

- `loop`
  - : Ein Boolean-Attribut: Wenn angegeben, sucht der Audioplayer automatisch zum Beginn zurück, nachdem das Ende des Audios erreicht wurde.
- `muted`
  - : Ein Boolean-Attribut, das angibt, ob das Audio anfänglich stummgeschaltet wird. Sein Standardwert ist `false`.
- `preload`

  - : Dieses [aufzählbare](/de/docs/Glossary/enumerated) Attribut soll dem Browser einen Hinweis darauf geben, was der Autor für die beste Benutzererfahrung hält. Es kann einen der folgenden Werte haben:

    - `none`: Gibt an, dass das Audio nicht vorgeladen werden soll.
    - `metadata`: Gibt an, dass nur die Audiodaten (z.B. Länge) abgerufen werden.
    - `auto`: Gibt an, dass die gesamte Audiodatei heruntergeladen werden kann, auch wenn der Benutzer sie möglicherweise nicht nutzt.
    - _leerer String_: Ein Synonym für den Wert `auto`.

    Der Standardwert ist für jeden Browser unterschiedlich. Die Spezifikation empfiehlt, es auf `metadata` zu setzen.

    > [!NOTE]
    >
    > - Das `autoplay`-Attribut hat Vorrang vor `preload`. Wenn `autoplay` angegeben ist, müsste der Browser offensichtlich beginnen, das Audio zum Abspielen herunterzuladen.
    > - Der Browser ist durch die Spezifikation nicht gezwungen, dem Wert dieses Attributs zu folgen; es ist nur ein Hinweis.

- `src`
  - : Die URL des einzubettenden Audios. Dies unterliegt den [HTTP-Zugriffskontrollen](/de/docs/Web/HTTP/CORS). Dies ist optional; stattdessen können Sie das {{htmlelement("source")}}-Element innerhalb des Audioblocks verwenden, um das einzubettende Audio anzugeben.

## Ereignisse

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Ereignisname</th>
      <th scope="col">Auslösung, wenn</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[`audioprocess`](/de/docs/Web/API/ScriptProcessorNode/audioprocess_event)</td>
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
        Der Browser kann das Medium abspielen, schätzt jedoch, dass nicht genug Daten geladen wurden, um das Medium bis zum Ende abzuspielen, ohne für weiteres Puffern anhalten zu müssen.
      </td>
    </tr>
    <tr>
      <td>
        [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
      </td>
      <td>
        Der Browser schätzt, dass es das Medium bis zum Ende abspielen kann, ohne für das Puffern von Inhalten anhalten zu müssen.
      </td>
    </tr>
    <tr>
      <td>[`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)</td>
      <td>
        Die Wiedergabe eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) wurde beendet.
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
        Das Medium ist leer geworden; beispielsweise wird dieses Ereignis gesendet, wenn das Medium bereits geladen ist (oder teilweise geladen), und die
        [`HTMLMediaElement.load`](/de/docs/Web/API/HTMLMediaElement/load)-Methode aufgerufen wird, um es neu zu laden.
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
        [`loadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event)
      </td>
      <td>Der erste Frame des Mediums wurde fertig geladen.</td>
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
        Die Wiedergabe ist bereit zu beginnen, nachdem sie pausiert oder aufgrund von Datenmangel verzögert wurde.
      </td>
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
      <td>Eine <em>Such</em>operation wurde abgeschlossen.</td>
    </tr>
    <tr>
      <td>
        [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
      </td>
      <td>Eine <em>Such</em>operation hat begonnen.</td>
    </tr>
    <tr>
      <td>
        [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
      </td>
      <td>
        Der Benutzeragent versucht, Mediendaten abzurufen, aber Daten sind unerwartet nicht verfügbar.
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
        Die durch das <code>currentTime</code>-Attribut angegebene Zeit wurde aktualisiert.
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
      <td>Die Wiedergabe wurde aufgrund eines temporären Datenmangels gestoppt</td>
    </tr>
  </tbody>
</table>

## Anwendungshinweise

Browser unterstützen nicht alle die gleichen [Dateitypen](/de/docs/Web/Media/Formats/Containers) und [Audiocodecs](/de/docs/Web/Media/Formats/Audio_codecs); Sie können mehrere Quellen innerhalb verschachtelter {{htmlelement("source")}}-Elemente bereitstellen, und der Browser verwendet dann das erste, das er versteht:

```html
<audio controls>
  <source src="myAudio.mp3" type="audio/mpeg" />
  <source src="myAudio.ogg" type="audio/ogg" />
  <p>
    Download <a href="myAudio.mp3" download="myAudio.mp3">MP3</a> or
    <a href="myAudio.ogg" download="myAudio.ogg">OGG</a> audio.
  </p>
</audio>
```

Wir bieten einen umfangreichen und gründlichen [Leitfaden zu Mediadateitypen](/de/docs/Web/Media/Formats) und den [Audiocodecs, die in ihnen verwendet werden können](/de/docs/Web/Media/Formats/Audio_codecs). Ebenfalls verfügbar ist [ein Leitfaden zu den unterstützten Codecs für Video](/de/docs/Web/Media/Formats/Video_codecs).

Weitere Anwendungshinweise:

- Wenn Sie das `controls`-Attribut nicht angeben, enthält der Audioplayer nicht die Standardsteuerung des Browsers. Sie können jedoch Ihre eigenen benutzerdefinierten Steuerungen mit JavaScript und der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API erstellen.
- Um präzise Kontrolle über Ihre Audioinhalte zu ermöglichen, lösen `HTMLMediaElement`s viele verschiedene [Ereignisse](/de/docs/Web/API/HTMLMediaElement#events) aus. Dies bietet auch eine Möglichkeit, den Abrufprozess des Audios zu überwachen, sodass Sie auf Fehler achten oder feststellen können, wann genug verfügbar ist, um es abzuspielen oder zu manipulieren.
- Sie können auch die [Web Audio API](/de/docs/Web/API/Web_Audio_API) verwenden, um direkt aus JavaScript generierte und manipulierte Audiostreams zu erzeugen, anstatt bereits vorhandene Audiodateien zu streamen.
- `<audio>`-Elemente können keine Untertitel oder Bildunterschriften haben, die ihnen auf die gleiche Weise wie `<video>`-Elemente zugeordnet sind. Siehe [WebVTT und Audio](https://www.iandevlin.com/blog/2015/12/html5/webvtt-and-audio/) von Ian Devlin für einige nützliche Informationen und Workarounds.
- Um den Rückfallinhalt in Browsern zu testen, die das Element unterstützen, können Sie `<audio>` durch ein nicht existierendes Element wie `<notanaudio>` ersetzen.

Eine gute allgemeine Informationsquelle zur Verwendung von HTML `<audio>` ist das [Video- und Audiocontent](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) Anfänger-Tutorial.

### Styling mit CSS

Das `<audio>`-Element hat keine eigene visuelle Ausgabe, es sei denn, das `controls`-Attribut ist angegeben, in diesem Fall werden die Standardsteuerungen des Browsers angezeigt.

Die Standardsteuerungen haben standardmäßig einen {{cssxref("display")}}-Wert von `inline`, und es ist oft eine gute Idee, den Wert auf `block` zu setzen, um die Kontrolle über Positionierung und Layout zu verbessern, es sei denn, Sie möchten, dass es innerhalb eines Textblocks oder Ähnlichem sitzt.

Sie können die Standardsteuerungen mit Eigenschaften stylen, die den Block als ganzes Element beeinflussen, sodass Sie ihm beispielsweise eine {{cssxref("border")}} und {{cssxref("border-radius")}}, {{cssxref("padding")}}, {{cssxref("margin")}} usw. geben können. Sie können jedoch nicht die einzelnen Komponenten innerhalb des Audioplayers stylen (z.B. die Größe der Schaltflächen oder Symbole ändern, die Schriftart ändern usw.), und die Steuerungen sind in den verschiedenen Browsern unterschiedlich.

Um ein konsistentes Aussehen und Gefühl über die Browser hinweg zu erhalten, müssen Sie benutzerdefinierte Steuerungen erstellen; diese können in beliebiger Weise gekennzeichnet und gestaltet werden, und dann kann JavaScript zusammen mit der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API verwendet werden, um ihre Funktionalität zu verknüpfen.

[Video-Player-Grundlagen stylen](/de/docs/Web/Media/Audio_and_video_delivery/Video_player_styling_basics) bietet einige nützliche Styling-Techniken — es ist im Kontext von `<video>` geschrieben, aber vieles davon ist ebenso auf `<audio>` anwendbar.

### Hinzufügen und Entfernen von Tracks erkennen

Sie können erkennen, wann Tracks zu einem `<audio>`-Element hinzugefügt und entfernt werden, indem Sie die [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event) Ereignisse verwenden. Diese Ereignisse werden jedoch nicht direkt an das `<audio>`-Element selbst gesendet. Stattdessen werden sie an das Tracklistenobjekt innerhalb des [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) des `<audio>`-Elements gesendet, das dem Typ des zum Element hinzugefügten Tracks entspricht:

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die alle Audio-Tracks des Medienelements enthält. Sie können einen `addtrack`-Listener zu diesem Objekt hinzufügen, um benachrichtigt zu werden, wenn neue Audio-Tracks zum Element hinzugefügt werden.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)
  - : Fügen Sie diesem [`VideoTrackList`](/de/docs/Web/API/VideoTrackList)-Objekt einen `addtrack`-Listener hinzu, um informiert zu werden, wenn Video-Tracks zum Element hinzugefügt werden.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
  - : Fügen Sie dieser [`TextTrackList`](/de/docs/Web/API/TextTrackList) einen `addtrack`-Ereignislistener hinzu, um benachrichtigt zu werden, wenn neue Text-Tracks zum Element hinzugefügt werden.

> [!NOTE]
> Auch wenn es ein `<audio>`-Element ist, hat es immer noch Video- und Text-Track-Listen und kann tatsächlich zur Wiedergabe von Videos verwendet werden, obwohl die Benutzeroberflächenimplikationen seltsam sein können.

Um beispielsweise zu erkennen, wann Audiotracks zu einem `<audio>`-Element hinzugefügt oder davon entfernt werden, können Sie folgenden Code verwenden:

```js
const elem = document.querySelector("audio");

elem.audioTrackList.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTrackList.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Dieser Code überwacht, wann Audiotracks zum Element hinzugefügt oder davon entfernt werden, und ruft eine hypothetische Funktion in einem Track-Editor auf, um den Track zur Liste der verfügbaren Tracks des Editors hinzuzufügen oder daraus zu entfernen.

Sie können auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um auf die [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event) Ereignisse zu hören.

## Barrierefreiheit

Audio mit gesprochenem Dialog sollte sowohl Untertitel als auch Transkriptionen bereitstellen, die seinen Inhalt genau beschreiben. Untertitel, die mit [WebVTT](/de/docs/Web/API/WebVTT_API) angegeben werden, ermöglichen es Menschen mit Hörbehinderungen, den Inhalt einer Audiospur zu verstehen, während die Aufnahme abgespielt wird, während Transkriptionen Menschen, die mehr Zeit benötigen, die Möglichkeit bieten, die Inhalte der Aufnahme in einem Tempo und Format zu überprüfen, das ihnen angenehm ist.

Wenn automatische Untertitelungsdienste verwendet werden, ist es wichtig, den generierten Inhalt zu prüfen, um sicherzustellen, dass er den Quellton korrekt wiedergibt.

Das `<audio>`-Element unterstützt WebVTT nicht direkt. Sie müssen eine Bibliothek oder ein Framework finden, das diese Funktionalität bietet, oder selbst den Code schreiben, um Untertitel anzuzeigen. Eine Möglichkeit ist, Ihr Audio mit einem {{HTMLElement("video")}}-Element abzuspielen, das WebVTT unterstützt.

Zusätzlich zum gesprochenen Dialog sollten Untertitel und Transkriptionen auch Musik und Soundeffekte identifizieren, die wichtige Informationen vermitteln. Dies umfasst Emotionen und Ton. Zum Beispiel, im folgenden WebVTT, beachten Sie die Verwendung von eckigen Klammern, um Ton und emotionale Einsicht dem Betrachter zu vermitteln; dies kann helfen, die Stimmung zu etablieren, die sonst durch Musik, nicht-verbale Geräusche und entscheidende Soundeffekte vermittelt wird.

```plain
1
00:00:00 --> 00:00:45
[Energetic techno music]

2
00:00:46 --> 00:00:51
Welcome to the Time Keeper's podcast! In this episode we're discussing which Swisswatch is a wrist switchwatch?

16
00:00:52 --> 00:01:02
[Laughing] Sorry! I mean, which wristwatch is a Swiss wristwatch?
```

Es ist auch eine gute Praxis, zur Unterstützung für Betrachter, die einen Browser verwenden, in dem das `<audio>`-Element nicht unterstützt wird, etwas Inhalt bereitzustellen (wie den Direktdownloadlink) als Rückfalloption:

```html
<audio controls>
  <source src="myAudio.mp3" type="audio/mpeg" />
  <source src="myAudio.ogg" type="audio/ogg" />
  <p>
    Download <a href="myAudio.mp3">MP3</a> or
    <a href="myAudio.ogg" download="myAudio.ogg">OGG</a> audio.
  </p>
</audio>
```

- [Web Video Text Tracks Format (WebVTT)](/de/docs/Web/API/WebVTT_API)
- [WebAIM: Untertitel, Transkriptionen und Audiobeschreibungen](https://webaim.org/techniques/captions/)
- [MDN Verständnis WCAG, Erklärung der Richtlinie 1.2](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [Verständnis des Erfolgskriteriums 1.2.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Verständnis des Erfolgskriteriums 1.2.2 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Beispiele

### Grundlegende Nutzung

Das folgende Beispiel zeigt die einfache Nutzung des `<audio>`-Elements, um eine OGG-Datei abzuspielen. Es wird automatisch abgespielt aufgrund des `autoplay`-Attributs — falls die Seite dazu berechtigt ist — und enthält auch Rückfallinhalte.

```html
<!-- Simple audio playback -->
<audio src="AudioTest.ogg" autoplay>
  <a href="AudioTest.ogg" download="AudioTest.ogg">Download OGG audio</a>.
</audio>
```

Für Details, wann Autoplay funktioniert, wie man die Berechtigung für die Nutzung von Autoplay erhält und wann und wie es angemessen ist, Autoplay zu nutzen, siehe unseren [Autoplay-Leitfaden](/de/docs/Web/Media/Autoplay_guide).

### \<audio>-Element mit \<source>-Element

Dieses Beispiel gibt an, welchen Audiotrack mithilfe des `src`-Attributs auf einem verschachtelten `<source>`-Element eingebettet werden soll, anstatt direkt auf dem `<audio>`-Element. Es ist immer sinnvoll, den MIME-Typ der Datei im `type`-Attribut anzugeben, da der Browser sofort erkennen kann, ob er die Datei abspielen kann, und keine Zeit darauf verschwendet, wenn nicht.

```html
<audio controls>
  <source src="foo.wav" type="audio/wav" />
  <a href="foo.wav" download="foo.wav">Download WAV audio</a>.
</audio>
```

### \<audio> mit mehreren \<source>-Elementen

Dieses Beispiel enthält mehrere `<source>`-Elemente. Der Browser versucht, das erste Quellenelement (Opus) zu laden, wenn er es abspielen kann; wenn nicht, fällt er zurück auf das zweite (Vorbis) und schließlich auf MP3:

```html
<audio controls>
  <source src="foo.opus" type="audio/ogg; codecs=opus" />
  <source src="foo.ogg" type="audio/ogg; codecs=vorbis" />
  <source src="foo.mp3" type="audio/mpeg" />
</audio>
```

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        >, phrasaler Inhalt, eingebetteter Inhalt. Wenn es ein
        <a href="#controls"><code>controls</code></a>-Attribut hat: interaktiver
        Inhalt und spürbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Wenn das Element ein <a href="#src"><code>src</code></a>-Attribut hat: null oder mehr {{HTMLElement("track")}}-Elemente
        gefolgt von transparentem Inhalt, der keine
        <code>&lt;audio&gt;</code> oder {{HTMLElement("video")}}
        Medienelemente enthält.<br />Sonst: null oder mehr {{HTMLElement("source")}}
        Elemente gefolgt von null oder mehr {{HTMLElement("track")}}
        Elementen gefolgt von transparentem Inhalt, der keine
        <code>&lt;audio&gt;</code> oder {{HTMLElement("video")}}
        Medienelemente enthält.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Anfangs- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebetteten Inhalt akzeptiert.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Roles/application_role"><code>application</code></a></td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)

  - [Mediencontainerformate (Dateitypen)](/de/docs/Web/Media/Formats/Containers)
  - [Leitfaden für Audiocodecs im Web](/de/docs/Web/Media/Formats/Audio_codecs)

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)
- {{htmlelement("source")}}
- {{htmlelement("video")}}
- [Lernbereich: Video- und Audiocontent](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [Audio-Grundlagen zur plattformübergreifenden Bereitstellung](/de/docs/Web/Media/Audio_and_video_delivery/Cross-browser_audio_basics)
