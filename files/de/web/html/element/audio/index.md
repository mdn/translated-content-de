---
title: "<audio>: Das Embed Audio-Element"
slug: Web/HTML/Element/audio
l10n:
  sourceCommit: 783ffd9c1cf35421242e028a1b8743cf2b1918dd
---

{{HTMLSidebar}}

Das **`<audio>`**-[HTML](/de/docs/Web/HTML)-Element wird verwendet, um Soundinhalte in Dokumenten einzubetten. Es kann eine oder mehrere Audioquellen enthalten, die über das `src`-Attribut oder das {{HTMLElement("source")}}-Element dargestellt werden: Der Browser wählt die am besten geeignete aus. Es kann auch das Ziel für gestreamte Medien sein, unter Verwendung eines [`MediaStream`](/de/docs/Web/API/MediaStream).

{{EmbedInteractiveExample("pages/tabbed/audio.html","tabbed-standard")}}

Das obige Beispiel zeigt die einfache Verwendung des `<audio>`-Elements. Ähnlich wie beim {{htmlelement("img")}}-Element geben wir einen Pfad zu den Medien an, die wir im `src`-Attribut einbetten möchten; wir können andere Attribute hinzufügen, um Informationen anzugeben, wie etwa, ob die Wiedergabe automatisch erfolgen und ob sie wiederholt werden soll, ob wir die Standard-Audio-Steuerelemente des Browsers anzeigen möchten usw.

Der Inhalt zwischen den öffnenden und schließenden `<audio></audio>`-Tags wird als Rückfalloption in Browsern angezeigt, die das Element nicht unterstützen.

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `autoplay`

  - : Ein boolesches Attribut: Wenn angegeben, beginnt die Audiodatei automatisch mit der Wiedergabe, sobald dies möglich ist, ohne darauf warten zu müssen, dass die gesamte Audiodatei heruntergeladen wird.

    > [!NOTE]
    > Websites, die automatisch Audio (oder Videos mit einer Audiospur) abspielen, können für Benutzer eine unangenehme Erfahrung sein und sollten nach Möglichkeit vermieden werden. Falls Sie eine automatische Wiedergabefunktionalität anbieten müssen, sollten Sie diese als Opt-in anbieten (erfordert spezifische Aktivierung durch den Benutzer). Dies kann jedoch nützlich sein, wenn Medienelemente erstellt werden, deren Quelle zu einem späteren Zeitpunkt unter Benutzerkontrolle festgelegt wird. Siehe unser [Autoplay-Leitfaden](/de/docs/Web/Media/Autoplay_guide) für weitere Informationen zur korrekten Verwendung von Autoplay.

- `controls`

  - : Wenn dieses Attribut vorhanden ist, bietet der Browser Steuerelemente an, mit denen der Benutzer die Audiowiedergabe steuern kann, einschließlich Lautstärke, Suche und Wiedergabe/Pause.

- `controlslist`

  - : Das [`controlslist`](https://wicg.github.io/controls-list/explainer.html)-Attribut hilft, wenn angegeben, dem Browser bei der Auswahl, welche Steuerelemente für das `audio`-Element angezeigt werden sollen, wann immer der Browser seine eigenen Steuerelemente anzeigt (d.h. wenn das `controls`-Attribut angegeben ist).

    Die erlaubten Werte sind `nodownload`, `nofullscreen` und `noremoteplayback`.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Dieses {{Glossary("Enumerated", "aufzählbare")}} Attribut gibt an, ob CORS verwendet werden soll, um die zugehörige Audiodatei abzurufen. [CORS-aktivierte Ressourcen](/de/docs/Web/HTML/CORS_enabled_image) können im {{HTMLElement("canvas")}}-Element ohne Verfälschung wiederverwendet werden. Die erlaubten Werte sind:

    - `anonymous`
      - : Sendet eine Cross-Origin-Anforderung ohne Anmeldedaten. Anders ausgedrückt, es sendet den HTTP-Header `Origin:` ohne Cookie, X.509-Zertifikat oder Durchführung einer HTTP-Basisauthentifizierung. Wenn der Server der Ursprungs-Website keine Anmeldedaten gibt (indem er den HTTP-Header `Access-Control-Allow-Origin:` nicht festsetzt), wird die Ressource _verfälscht_ und deren Nutzung eingeschränkt.
    - `use-credentials`
      - : Sendet eine Cross-Origin-Anforderung mit Anmeldedaten. Anders ausgedrückt, es sendet den HTTP-Header `Origin:` mit einem Cookie, einem Zertifikat oder Durchführung einer HTTP-Basisauthentifizierung. Wenn der Server dem Ursprungsort keine Anmeldedaten gibt (über den HTTP-Header `Access-Control-Allow-Credentials:`), wird die Ressource _verfälscht_ und deren Nutzung eingeschränkt.

    Wenn nicht vorhanden, wird die Ressource ohne CORS-Anforderung abgerufen (d.h. ohne den HTTP-Header `Origin:` zu senden), was deren nicht-verfälschte Nutzung in {{HTMLElement('canvas')}}-Elementen verhindert. Bei einem ungültigen Wert wird er so behandelt, als ob das aufgezählte Schlüsselwort **anonymous** verwendet wurde. Siehe [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Attributes/crossorigin) für zusätzliche Informationen.

- `disableremoteplayback`

  - : Ein Boolesches Attribut, das die Fähigkeit zur Fernwiedergabe auf Geräten deaktiviert, die über kabelgebundene (HDMI, DVI, usw.) und kabellose Technologien (Miracast, Chromecast, DLNA, AirPlay, usw.) angeschlossen sind. Weitere Informationen finden Sie in [diesem vorgeschlagenen Spezifikationsentwurf](https://www.w3.org/TR/remote-playback/#the-disableremoteplayback-attribute).

    In Safari können Sie als Fallback [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) verwenden.

- `loop`
  - : Ein Boolesches Attribut: Wenn angegeben, sucht der Audioplayer beim Erreichen des Endes der Audiodatei automatisch zurück zum Anfang.
- `muted`
  - : Ein Boolesches Attribut, das angibt, ob das Audio anfangs stumm geschaltet ist. Der Standardwert ist `false`.
- `preload`

  - : Dieses {{Glossary("enumerated", "aufzählbare")}} Attribut soll dem Browser einen Hinweis geben, was der Autor für die beste Benutzererfahrung hält. Es kann einen der folgenden Werte haben:

    - `none`: Gibt an, dass das Audio nicht vorab geladen werden sollte.
    - `metadata`: Gibt an, dass nur Audio-Metadaten (z.B. Länge) abgerufen werden.
    - `auto`: Gibt an, dass die gesamte Audiodatei heruntergeladen werden kann, selbst wenn der Benutzer nicht erwartet wird, sie zu verwenden.
    - _leerer String_: Ein Synonym für den Wert `auto`.

    Der Standardwert ist je nach Browser unterschiedlich. Die Spezifikation empfiehlt, ihn auf `metadata` zu setzen.

    > [!NOTE]
    >
    > - Das `autoplay`-Attribut hat Vorrang vor `preload`. Wenn `autoplay` angegeben ist, muss der Browser offensichtlich das Audio zur Wiedergabe herunterladen.
    > - Der Browser ist durch die Spezifikation nicht gezwungen, den Wert dieses Attributs zu befolgen; es ist lediglich ein Hinweis.

- `src`
  - : Die URL des zu einbindenden Audios. Dies unterliegt [HTTP-Zugriffskontrollen](/de/docs/Web/HTTP/CORS). Dies ist optional; Sie können stattdessen das {{htmlelement("source")}}-Element innerhalb des Audio-Blocks verwenden, um das einzubettende Audio anzugeben.

## Events

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Ereignisname</th>
      <th scope="col">Wird ausgelöst, wenn</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[`audioprocess`](/de/docs/Web/API/ScriptProcessorNode/audioprocess_event)</td>
      <td>
        Der Eingabepuffer eines [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) ist bereit zur Verarbeitung.
      </td>
    </tr>
    <tr>
      <td>
        [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)
      </td>
      <td>
        Der Browser kann das Medium abspielen, schätzt jedoch, dass nicht genug Daten geladen wurden, um das Medium bis zum Ende abzuspielen, ohne für zusätzliche Pufferung unterbrechen zu müssen.
      </td>
    </tr>
    <tr>
      <td>
        [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
      </td>
      <td>
        Der Browser schätzt, dass es das Medium bis zum Ende abspielen kann, ohne für die Inhalts-Pufferung anzuhalten.
      </td>
    </tr>
    <tr>
      <td>[`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)</td>
      <td>
        Das Rendering eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) ist beendet.
      </td>
    </tr>
    <tr>
      <td>
        [`durationchange`](/de/docs/Web/API/HTMLMediaElement/durationchange_event)
      </td>
      <td>Das Attribut <code>duration</code> wurde aktualisiert.</td>
    </tr>
    <tr>
      <td>
        [`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)
      </td>
      <td>
        Das Medium ist leer geworden; zum Beispiel wird dieses Ereignis gesendet, wenn das Medium bereits geladen (oder teilweise geladen) ist und die Methode [`HTMLMediaElement.load`](/de/docs/Web/API/HTMLMediaElement/load) aufgerufen wird, um es erneut zu laden.
      </td>
    </tr>
    <tr>
      <td>
        [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)
      </td>
      <td>Die Wiedergabe wurde gestoppt, da das Ende des Mediums erreicht wurde.</td>
    </tr>
    <tr>
      <td>
        [`loadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event)
      </td>
      <td>Das erste Bild des Mediums wurde vollständig geladen.</td>
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
        Die Wiedergabe ist bereit zu starten, nachdem sie pausiert oder verzögert wurde, aufgrund fehlender Daten.
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
      <td>Eine <em>Such</em>-Operation wurde abgeschlossen.</td>
    </tr>
    <tr>
      <td>
        [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
      </td>
      <td>Eine <em>Such</em>-Operation begann.</td>
    </tr>
    <tr>
      <td>
        [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
      </td>
      <td>
        Der Benutzeragent versucht, Mediendaten abzurufen, aber Daten kommen unerwartet nicht herein.
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
      <td>Die Wiedergabe wurde aufgrund eines vorübergehenden Datenmangels gestoppt</td>
    </tr>
  </tbody>
</table>

## Verwendungshinweise

Browser unterstützen nicht alle die gleichen [Dateitypen](/de/docs/Web/Media/Formats/Containers) und [Audiocodecs](/de/docs/Web/Media/Formats/Audio_codecs); Sie können mehrere Quellen innerhalb verschachtelter {{htmlelement("source")}}-Elemente anbieten, und der Browser verwendet dann die erste, die er versteht:

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

Wir bieten einen substanziellen und gründlichen [Leitfaden zu Medientypen](/de/docs/Web/Media/Formats) und den [Audiocodecs, die darin verwendet werden können](/de/docs/Web/Media/Formats/Audio_codecs). Ebenfalls verfügbar ist [ein Leitfaden zu den für Video unterstützten Codecs](/de/docs/Web/Media/Formats/Video_codecs).

Weitere Verwendungshinweise:

- Wenn Sie das `controls`-Attribut nicht angeben, enthält der Audioplayer nicht die Standardsteuerelemente des Browsers. Sie können jedoch Ihre eigenen benutzerdefinierten Steuerelemente mit JavaScript und der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API erstellen.
- Um eine präzise Steuerung über Ihre Audioinhalte zu ermöglichen, lösen `HTMLMediaElement`s viele verschiedene [Ereignisse](/de/docs/Web/API/HTMLMediaElement#events) aus. Dies bietet auch eine Möglichkeit, den Abrufvorgang des Audios zu überwachen, sodass Sie nach Fehlern suchen oder feststellen können, wann genug verfügbar ist, um es abzuspielen oder zu manipulieren.
- Sie können auch die [Web Audio API](/de/docs/Web/API/Web_Audio_API) verwenden, um Audiostreams direkt aus JavaScript-Code zu erzeugen und zu bearbeiten, anstatt vorab existierende Audiodateien zu streamen.
- `<audio>`-Elemente können keine Untertitel oder Bildunterschriften auf die gleiche Weise wie `<video>`-Elemente haben. Siehe [WebVTT and Audio](https://www.iandevlin.com/blog/2015/12/html5/webvtt-and-audio/) von Ian Devlin für nützliche Informationen und Lösungen.
- Um den Rückfallinhalt in Browsern zu testen, die das Element unterstützen, können Sie `<audio>` durch ein nicht existierendes Element wie `<notanaudio>` ersetzen.

Eine gute allgemeine Informationsquelle zur Verwendung von HTML-`<audio>` ist das [Video-und-Audio-Inhalts]-Anfängertutorial (/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content).

### Styling mit CSS

Das `<audio>`-Element hat keinen eigenen visuellen Ausgang, es sei denn, das `controls`-Attribut ist angegeben, in diesem Fall werden die Standardsteuerelemente des Browsers angezeigt.

Die Standardsteuerelemente haben in der Regel einen {{cssxref("display")}}-Wert von `inline`, und es ist oft eine gute Idee, den Wert auf `block` zu setzen, um die Kontrolle über Positionierung und Layout zu verbessern, es sei denn, Sie möchten, dass es innerhalb eines Textblocks oder ähnlichem sitzt.

Sie können die Standardsteuerelemente mit Eigenschaften stylen, die den Block als eine Einheit betreffen, so können Sie ihm beispielsweise eine {{cssxref("border")}} und {{cssxref("border-radius")}}, {{cssxref("padding")}}, {{cssxref("margin")}} geben, usw. Sie können jedoch nicht die einzelnen Komponenten im Audioplayer (z.B. die Größe der Schaltflächen oder Symbole ändern, die Schriftart ändern usw.) stylen, und die Steuerelemente unterscheiden sich je nach Browser.

Um ein konsistentes Aussehen und Gefühl über verschiedene Browser hinweg zu erreichen, müssen Sie benutzerdefinierte Steuerelemente erstellen; diese können in beliebiger Weise markiert und gestylt werden und dann mit JavaScript zusammen mit der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API verkabelt werden.

[Grundlagen der Videoplayer-Styling](/de/docs/Web/Media/Audio_and_video_delivery/Video_player_styling_basics) bieten einige nützliche Styling-Techniken — es ist im Kontext von `<video>` geschrieben, aber vieles davon ist gleichermaßen auf `<audio>` anwendbar.

### Erkennung des Hinzufügens und Entfernens von Spuren

Sie können erkennen, wann Spuren zu einem `<audio>`-Element hinzugefügt oder von ihm entfernt werden, indem Sie die [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event)- und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event)-Ereignisse verwenden. Diese Ereignisse werden jedoch nicht direkt an das `<audio>`-Element selbst gesendet. Stattdessen werden sie an das Tracklist-Objekt innerhalb des `<audio>`-Elements gesendet, das dem Typ der hinzugefügten Spur entspricht:

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die alle Audiospuren des Medienelements enthält. Sie können einen Listener für `addtrack` zu diesem Objekt hinzufügen, um benachrichtigt zu werden, wenn neue Audiospuren zum Element hinzugefügt werden.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)
  - : Fügen Sie einen `addtrack`-Listener zu diesem [`VideoTrackList`](/de/docs/Web/API/VideoTrackList)-Objekt hinzu, um informiert zu werden, wenn Videospuren zum Element hinzugefügt werden.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
  - : Fügen Sie einen `addtrack`-Ereignislistener zu dieser [`TextTrackList`](/de/docs/Web/API/TextTrackList) hinzu, um benachrichtigt zu werden, wenn neue Textspuren zum Element hinzugefügt werden.

> [!NOTE]
> Auch wenn es sich um ein `<audio>`-Element handelt, verfügt es dennoch über Video- und Text-Tracklisten und kann tatsächlich verwendet werden, um Video zu präsentieren, obwohl die Benutzeroberflächenimplikationen seltsam sein können.

Zum Beispiel um zu erkennen, wann Audiospuren zu einem `<audio>`-Element hinzugefügt oder davon entfernt werden, können Sie Code wie diesen verwenden:

```js
const elem = document.querySelector("audio");

elem.audioTrackList.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTrackList.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Dieser Code überwacht, wann Audiospuren zum Element hinzugefügt oder davon entfernt werden und ruft eine hypothetische Funktion auf einem Track-Editor auf, um die Spur zur Liste der verfügbaren Spuren des Editors hinzuzufügen oder daraus zu entfernen.

Sie können auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um auf die [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event)- und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event)-Ereignisse zu hören.

## Barrierefreiheit

Bei Audio mit gesprochener Dialogführung sollten sowohl Untertitel als auch Transkripte bereitgestellt werden, die den Inhalt genau beschreiben. Untertitel, die mit [WebVTT](/de/docs/Web/API/WebVTT_API) angegeben werden, ermöglichen Menschen mit Hörbehinderungen, den Inhalt einer Audioaufnahme zu verstehen, während sie abgespielt wird, während Transkripte Menschen, die mehr Zeit benötigen, ermöglichen, den Inhalt der Aufnahme in einem für sie angenehmen Tempo und Format zu überprüfen.

Wenn automatische Untertiteldienste verwendet werden, ist es wichtig, den generierten Inhalt zu überprüfen, um sicherzustellen, dass er den Quellton genau repräsentiert.

Das `<audio>`-Element unterstützt nicht direkt WebVTT. Sie müssen eine Bibliothek oder ein Framework finden, das diese Fähigkeit für Sie bietet, oder den Code selbst schreiben, um Untertitel anzuzeigen. Eine Option ist, Ihr Audio mit einem {{HTMLElement("video")}}-Element abzuspielen, das WebVTT unterstützt.

Neben gesprochener Dialogführung sollten Untertitel und Transkripte auch Musik und Soundeffekte identifizieren, die wichtige Informationen übermitteln. Dies umfasst Emotionen und Ton. Beispielsweise zeigt der WebVTT unten die Verwendung von eckigen Klammern, um dem Zuschauer Ton- und emotionale Einsicht zu geben; dies kann dazu beitragen, die Stimmung herzustellen, die ansonsten mit Musik, nonverbalen Klängen und entscheidenden Soundeffekten erzeugt wird, und so weiter.

<!-- cSpell:ignore switchwatch Swisswatch -->

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

Es ist auch eine gute Praxis, einige Inhalte (wie den direkten Download-Link) als Rückfalloption für Betrachter bereitzustellen, die einen Browser verwenden, in dem das `<audio>`-Element nicht unterstützt wird:

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
- [WebAIM: Captions, Transcripts, and Audio Descriptions](https://webaim.org/techniques/captions/)
- [MDN Verständnis von WCAG, Erläuterungen zur Richtlinie 1.2](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [Verständnis des Erfolgskriteriums 1.2.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Verständnis des Erfolgskriteriums 1.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel zeigt die einfache Verwendung des `<audio>`-Elements zur Wiedergabe einer OGG-Datei. Es wird automatisch abgespielt aufgrund des `autoplay`-Attributs—wenn die Seite die Erlaubnis dafür hat—und enthält auch Rückfallinhalte.

```html
<!-- Simple audio playback -->
<audio src="AudioTest.ogg" autoplay>
  <a href="AudioTest.ogg" download="AudioTest.ogg">Download OGG audio</a>.
</audio>
```

Für Details, wann Autoplay funktioniert, wie man die Erlaubnis für die Verwendung von Autoplay erhält und wie und wann es angemessen ist, Autoplay zu verwenden, siehe unser [Autoplay-Leitfaden](/de/docs/Web/Media/Autoplay_guide).

### \<audio>-Element mit \<source>-Element

Dieses Beispiel gibt an, welche Audiospur eingebettet werden soll, indem das `src`-Attribut in einem verschachtelten `<source>`-Element anstelle direkt im `<audio>`-Element verwendet wird. Es ist immer nützlich, den MIME-Typ der Datei im `type`-Attribut anzugeben, da der Browser sofort erkennen kann, ob er diese Datei abspielen kann, und keine Zeit damit verschwenden muss, wenn nicht.

```html
<audio controls>
  <source src="foo.wav" type="audio/wav" />
  <a href="foo.wav" download="foo.wav">Download WAV audio</a>.
</audio>
```

### \<audio> mit mehreren \<source>-Elementen

Dieses Beispiel enthält mehrere `<source>`-Elemente. Der Browser versucht, das erste Quell-Element (Opus) zu laden, wenn er in der Lage ist, es abzuspielen; wenn nicht, fällt er auf das zweite (Vorbis) und schließlich auf MP3 zurück:

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
          >Fließende Inhalte</a
        >, phrasenartige Inhalte, eingebettete Inhalte. Wenn es ein
        <a href="#controls"><code>controls</code></a>-Attribut hat: interaktive
        Inhalte und palpable Inhalte.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Wenn das Element ein <a href="#src"><code>src</code></a>-Attribut hat: null oder mehr {{HTMLElement("track")}}-Elemente gefolgt von transparenten Inhalten, die keine
        <code>&lt;audio&gt;</code> oder {{HTMLElement("video")}}
        Medienelemente enthalten.<br />Sonst: null oder mehr {{HTMLElement("source")}}-Elemente gefolgt von null oder mehr {{HTMLElement("track")}}-Elementen gefolgt von transparenten Inhalten, die keine
        <code>&lt;audio&gt;</code> oder {{HTMLElement("video")}}
        Medienelemente enthalten.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Weglassung</th>
      <td>Keine, sowohl das startende als auch das endende Tag sind obligatorisch.</td>
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
  - [Leitfaden zu auf dem Web verwendeten Audiocodecs](/de/docs/Web/Media/Formats/Audio_codecs)

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)
- {{htmlelement("source")}}
- {{htmlelement("video")}}
- [Lernbereich: Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [Grundlagen der Cross-Browser-Audio](/de/docs/Web/Media/Audio_and_video_delivery/Cross-browser_audio_basics)
