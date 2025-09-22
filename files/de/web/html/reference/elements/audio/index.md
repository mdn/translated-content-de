---
title: "`<audio>`: Das Einbettungs-Element für Audio"
slug: Web/HTML/Reference/Elements/audio
l10n:
  sourceCommit: b0c2ce683687410406fa7ccdef391ff1d41503bb
---

Das **`<audio>`**-[HTML](/de/docs/Web/HTML)-Element wird verwendet, um Sound-Inhalte in Dokumente einzubetten. Es kann eine oder mehrere Audioquellen enthalten, die mit dem `src`-Attribut oder dem {{HTMLElement("source")}}-Element angegeben werden: Der Browser wählt die am besten geeignete aus. Es kann auch das Ziel für gestreamte Medien sein, indem ein [`MediaStream`](/de/docs/Web/API/MediaStream) verwendet wird.

{{InteractiveExample("HTML Demo: &lt;audio&gt;", "tabbed-standard")}}

```html interactive-example
<figure>
  <figcaption>Listen to the T-Rex:</figcaption>
  <audio controls src="/shared-assets/audio/t-rex-roar.mp3"></audio>
  <a href="/shared-assets/audio/t-rex-roar.mp3"> Download audio </a>
</figure>
```

```css interactive-example
figure {
  margin: 0;
}
```

Das obige Beispiel zeigt die grundlegende Nutzung des `<audio>`-Elements. Ähnlich wie das {{htmlelement("img")}}-Element schließen wir einen Pfad zu dem Medium, das wir einbetten möchten, im `src`-Attribut ein; wir können andere Attribute hinzufügen, um Informationen wie automatisches Abspielen und Schleifen, ob wir die Standard-Audiosteuerungen des Browsers anzeigen möchten, usw., anzugeben.

Der Inhalt zwischen den öffnenden und schließenden `<audio></audio>`-Tags wird als Fallback in Browsers angezeigt, die das Element nicht unterstützen.

## Attribute

Die Attribute dieses Elements beinhalten die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `autoplay`
  - : Ein Boolesches Attribut: Wenn angegeben, wird das Audio automatisch abgespielt, sobald es möglich ist, ohne darauf zu warten, dass die gesamte Audiodatei heruntergeladen wurde.

    > [!NOTE]
    > Websites, die automatisch Audio (oder Videos mit einem Audiotrack) abspielen, können eine unangenehme Erfahrung für Benutzer sein und sollten nach Möglichkeit vermieden werden. Wenn Sie die Funktionalität des automatischen Abspielens anbieten müssen, sollten Sie sie optional machen (indem der Benutzer sie explizit aktivieren muss). Dies kann jedoch nützlich sein, wenn Sie Medienelemente erstellen, deren Quelle zu einem späteren Zeitpunkt unter Benutzerkontrolle festgelegt wird. Siehe unseren [Autoplay-Leitfaden](/de/docs/Web/Media/Guides/Autoplay) für zusätzliche Informationen über die ordnungsgemäße Verwendung von Autoplay.

- `controls`
  - : Wenn dieses Attribut vorhanden ist, bietet der Browser Steuerungen, mit denen der Benutzer die Audiowiedergabe steuern kann, einschließlich Lautstärke, Suchlauf und Pause/Fortsetzen der Wiedergabe.

- `controlslist`
  - : Das [`controlslist`](https://wicg.github.io/controls-list/explainer.html)-Attribut hilft dem Browser zu bestimmen, welche Steuerungen für das `audio`-Element angezeigt werden sollen, wann immer der Browser sein eigenes Steuerungsset angezeigt (d.h. wenn das `controls`-Attribut angegeben ist).

    Die erlaubten Werte sind `nodownload`, `nofullscreen` und `noremoteplayback`.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Dieses {{Glossary("Enumerated", "aufeinander abgestimmte")}} Attribut gibt an, ob CORS verwendet werden soll, um die zugehörige Audiodatei abzurufen. [CORS-fähige Ressourcen](/de/docs/Web/HTML/How_to/CORS_enabled_image) können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne _verunreinigt_ zu werden. Die erlaubten Werte sind:
    - `anonymous`
      - : Sendet eine cross-origin-Anfrage ohne Berechtigung. Mit anderen Worten, es sendet das `Origin:`-HTTP-Header ohne ein Cookie, X.509-Zertifikat oder die Durchführung einer HTTP-Basisauthentifizierung. Wenn der Server keine Berechtigungen an die Ursprungsseite gibt (indem das `Access-Control-Allow-Origin:`-HTTP-Header nicht gesetzt wird), wird die Ressource _verunreinigt_ und ihre Verwendung eingeschränkt.
    - `use-credentials`
      - : Sendet eine cross-origin-Anfrage mit Berechtigung. Mit anderen Worten, es sendet das `Origin:`-HTTP-Header mit einem Cookie, einem Zertifikat oder durch die Durchführung einer HTTP-Basisauthentifizierung. Wenn der Server keine Berechtigungen an die Ursprungsseite gibt (durch das `Access-Control-Allow-Credentials:`-HTTP-Header), wird die Ressource _verunreinigt_ und ihre Nutzung eingeschränkt.

    Wenn nicht vorhanden, wird die Ressource ohne eine CORS-Anfrage abgerufen (d.h. ohne das `Origin:`-HTTP-Header zu senden), was ihre nicht-verunreinigte Verwendung in {{HTMLElement('canvas')}}-Elementen verhindert. Bei Ungültigkeit wird sie so behandelt, als wäre das abgestimmte Schlüsselwort **anonymous** verwendet worden. Siehe [CORS-Einstellungen für Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für weitere Informationen.

- `disableremoteplayback`
  - : Ein Boolesches Attribut, das die Fähigkeit zur Fernwiedergabe auf Geräten deaktiviert, die mit kabelgebundenen (HDMI, DVI, etc.) und kabellosen Technologien (Miracast, Chromecast, DLNA, AirPlay, etc.) angeschlossen sind. Siehe die vorgeschlagene [Remote Playback API-Spezifikation](https://w3c.github.io/remote-playback/#the-disableremoteplayback-attribute) für weitere Informationen.

    In Safari können Sie [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) als Fallback verwenden.

- `loop`
  - : Ein Boolesches Attribut: Wenn angegeben, sucht der Audioplayer automatisch zum Anfang zurück, nachdem das Ende des Audios erreicht wurde.
- `muted`
  - : Ein Boolesches Attribut, das angibt, ob das Audio zunächst stummgeschaltet wird. Sein Standardwert ist `false`.
- `preload`
  - : Dieses {{Glossary("enumerated", "aufeinander abgestimmte")}} Attribut soll dem Browser einen Hinweis geben, was der Autor denkt, dass es zur besten Benutzererfahrung führt. Es kann einen der folgenden Werte haben:
    - `none`: Gibt an, dass das Audio nicht vorgeladen werden soll.
    - `metadata`: Gibt an, dass nur die Audiometadaten (z.B. Länge) abgerufen werden.
    - `auto`: Gibt an, dass die gesamte Audiodatei heruntergeladen werden kann, auch wenn der Benutzer nicht erwartet wird, sie zu verwenden.
    - _leerer String_: Ein Synonym für den `auto`-Wert.

    Der Standardwert ist je nach Browser verschieden. Die Spezifikation empfiehlt, ihn auf `metadata` zu setzen.

    > [!NOTE]
    >
    > - Das `autoplay`-Attribut hat Vorrang vor `preload`. Wenn `autoplay` angegeben ist, müsste der Browser offensichtlich beginnen, das Audio für die Wiedergabe herunterzuladen.
    > - Der Browser ist nicht durch die Spezifikation gezwungen, den Wert dieses Attributs zu befolgen; es ist lediglich ein Hinweis.

- `src`
  - : Die URL des einzubettenden Audios. Dies unterliegt den [HTTP-Zugriffskontrollen](/de/docs/Web/HTTP/Guides/CORS). Dies ist optional; Sie können stattdessen das {{htmlelement("source")}}-Element innerhalb des Audio-Blocks verwenden, um das einzubettende Audio anzugeben.

## Ereignisse

- [`audioprocess`](/de/docs/Web/API/ScriptProcessorNode/audioprocess_event) {{Deprecated_Inline}}
  - : Der Eingabepuffer eines [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) ist bereit zur Verarbeitung.
- [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)
  - : Der Browser kann das Medium abspielen, schätzt aber, dass nicht genug Daten geladen wurden, um das Medium bis zu seinem Ende abzuspielen, ohne für weiteres Laden anzuhalten.
- [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
  - : Der Browser schätzt, dass er das Medium bis zu seinem Ende abspielen kann, ohne für das Puffern des Inhalts anzuhalten.
- [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)
  - : Die Erstellung eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) ist beendet.
- [`durationchange`](/de/docs/Web/API/HTMLMediaElement/durationchange_event)
  - : Das `duration`-Attribut wurde aktualisiert.
- [`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)
  - : Das Medium ist leer geworden; zum Beispiel wird dieses Ereignis gesendet, wenn das Medium bereits geladen (oder teilweise geladen) wurde und die [`HTMLMediaElement.load`](/de/docs/Web/API/HTMLMediaElement/load)-Methode aufgerufen wird, um es neu zu laden.
- [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)
  - : Die Wiedergabe wurde gestoppt, da das Ende des Mediums erreicht wurde.
- [`loadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event)
  - : Der erste Frame des Mediums ist geladen.
- [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
  - : Die Metadaten sind geladen.
- [`loadstart`](/de/docs/Web/API/HTMLMediaElement/loadstart_event)
  - : Ausgelöst, wenn der Browser begonnen hat, die Ressource zu laden.
- [`pause`](/de/docs/Web/API/HTMLMediaElement/pause_event)
  - : Die Wiedergabe wurde pausiert.
- [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)
  - : Die Wiedergabe hat begonnen.
- [`playing`](/de/docs/Web/API/HTMLMediaElement/playing_event)
  - : Die Wiedergabe ist bereit zu beginnen, nachdem sie pausiert oder wegen Datenmangels verzögert wurde.
- [`ratechange`](/de/docs/Web/API/HTMLMediaElement/ratechange_event)
  - : Die Wiedergabegeschwindigkeit hat sich geändert.
- [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event)
  - : Eine _Seek_-Operation wurde abgeschlossen.
- [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
  - : Eine _Seek_-Operation hat begonnen.
- [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
  - : Der Benutzeragent versucht, Mediendaten abzurufen, aber Daten kommen unerwartet nicht.
- [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event)
  - : Das Laden der Mediendaten wurde unterbrochen.
- [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)
  - : Die durch das `currentTime`-Attribut angegebene Zeit wurde aktualisiert.
- [`volumechange`](/de/docs/Web/API/HTMLMediaElement/volumechange_event)
  - : Die Lautstärke hat sich geändert.
- [`waiting`](/de/docs/Web/API/HTMLMediaElement/waiting_event)
  - : Die Wiedergabe wurde aufgrund eines vorübergehenden Mangels an Daten gestoppt.

## Verwendungshinweise

Browser unterstützen nicht alle die gleichen [Dateiformate](/de/docs/Web/Media/Guides/Formats/Containers) und [Audio-Codecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs); Sie können mehrere Quellen innerhalb geschachtelter {{htmlelement("source")}}-Elemente zur Verfügung stellen, und der Browser verwendet dann die erste, die er versteht:

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

Die Audioquelle kann auf jede gültige [URL](/de/docs/Web/URI) gesetzt werden, einschließlich HTTP(S)-URLs und [Data-URLs](/de/docs/Web/URI/Reference/Schemes/data). Seien Sie sich bei der Verwendung von HTTP(S)-URLs bewusst, dass das Caching-Verhalten des Browsers beeinflusst, wie oft die Datei vom Server angefordert wird. Data-URLs binden die Audiodaten direkt in das HTML ein, was für kleine Audiodateien nützlich sein kann, aber für größere Dateien nicht empfohlen wird, da es die Größe der HTML-Datei erhöht.

Beim Verwenden von {{htmlelement("source")}}-Elementen versucht der Browser, jede Quelle nacheinander zu laden. Wenn eine Quelle fehlschlägt (z.B. aufgrund einer ungültigen URL oder eines nicht unterstützten Formats), wird die nächste Quelle versucht, und so weiter. Ein `error`-Ereignis wird auf dem `<audio>`-Element ausgelöst, nachdem alle Quellen fehlgeschlagen sind; `error`-Ereignisse werden nicht für jedes individuelle `<source>`-Element ausgelöst.

Sie können auch die [Web Audio API](/de/docs/Web/API/Web_Audio_API) verwenden, um Audiosignale direkt aus JavaScript-Code zu generieren und zu manipulieren, anstatt bereits vorhandene Audiodateien zu streamen. Sie können das [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) in JavaScript auf ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt setzen. Dies wird häufig für Live-Audio-Streams oder Echtzeit-Audiobearbeitung verwendet.

```js
const audioElement = document.querySelector("audio");
navigator.mediaDevices
  .getUserMedia({ audio: true })
  .then((stream) => {
    audioElement.srcObject = stream;
  })
  .catch((error) => {
    console.error("Error accessing the microphone", error);
  });
```

Beachten Sie, dass `MediaStream`-Quellen Einschränkungen haben: sie sind nicht durchsuchbar und unterstützen nur einen begrenzten Satz von Codecs.

Wir bieten einen substanziellen und gründlichen [Leitfaden zu Medientypen](/de/docs/Web/Media/Guides/Formats) und den [Audio-Codecs, die in ihnen verwendet werden können](/de/docs/Web/Media/Guides/Formats/Audio_codecs). Ebenfalls verfügbar ist ein [Leitfaden zu den Codecs, die für Video unterstützt werden](/de/docs/Web/Media/Guides/Formats/Video_codecs).

Weitere Verwendungshinweise:

- Wenn Sie das `controls`-Attribut nicht angeben, enthält der Audioplayer nicht die Standardsteuerungen des Browsers. Sie können jedoch Ihre eigenen benutzerdefinierten Steuerungen mit JavaScript und der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API erstellen.
- Um präzise Kontrolle über Ihre Audioinhalte zu ermöglichen, lösen `HTMLMediaElement`s viele verschiedene [Ereignisse](/de/docs/Web/API/HTMLMediaElement#events) aus. Dies bietet auch eine Möglichkeit, den Abrufprozess des Audios zu überwachen, damit Sie nach Fehlern suchen oder erkennen können, wann genügend verfügbar ist, um mit der Wiedergabe zu beginnen oder sie zu manipulieren.
- `<audio>`-Elemente können nicht auf die gleiche Weise wie `<video>`-Elemente Untertitel oder Bildunterschriften enthalten. Siehe [WebVTT and Audio](https://www.iandevlin.com/blog/2015/12/html5/webvtt-and-audio/) von Ian Devlin für nützliche Informationen und Workarounds.
- Um die Fallback-Inhalte in Browsern zu testen, die das Element unterstützen, können Sie `<audio>` durch ein nicht existierendes Element wie `<notanaudio>` ersetzen.

Eine gute allgemeine Informationsquelle zu HTML `<audio>` ist das [HTML video and audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) Anfänger-Tutorial.

### Styling mit CSS

Das `<audio>`-Element hat keinen eigenen visuellen Output, es sei denn, das `controls`-Attribut wird angegeben, in diesem Fall werden die Standardsteuerungen des Browsers angezeigt.

Die Standardsteuerungen haben einen {{cssxref("display")}}-Wert von `inline` standardmäßig, und es ist oft eine gute Idee, den Wert auf `block` zu setzen, um die Kontrolle über Positionierung und Layout zu verbessern, es sei denn, Sie möchten, dass es innerhalb eines Textblocks oder Ähnlichem sitzt.

Sie können die Standardsteuerungen mit Eigenschaften stylen, die den Block als Ganzes betreffen, sodass Sie beispielsweise eine {{cssxref("border")}} und {{cssxref("border-radius")}}, {{cssxref("padding")}}, {{cssxref("margin")}}, usw. geben können. Sie können jedoch nicht die einzelnen Komponenten innerhalb des Audio-Players stylen (z.B. die Größe der Knöpfe oder Symbole ändern, die Schriftart ändern, etc.), und die Steuerungen sind in den verschiedenen Browsern unterschiedlich.

Um einen konsistenten Look-and-Feel über Browser hinweg zu erhalten, müssen Sie benutzerdefinierte Steuerungen erstellen; diese können in beliebiger Weise markiert und gestaltet werden, und dann kann JavaScript zusammen mit der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API verwendet werden, um ihre Funktionalität zu verknüpfen.

[Video player styling basics](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics) bietet einige nützliche Styling-Techniken — es ist im Kontext von `<video>` geschrieben, aber vieles davon ist gleichermassen auf `<audio>` anwendbar.

### Erkennung von Hinzufügung und Entfernung von Tracks

Sie können erkennen, wann Tracks zu einem `<audio>`-Element hinzugefügt oder daraus entfernt werden, indem Sie die [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event)-Ereignisse verwenden. Diese Ereignisse werden jedoch nicht direkt an das `<audio>`-Element selbst gesendet. Stattdessen werden sie an das Track-Listen-Objekt innerhalb des `<audio>`-Elements [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) gesendet, das dem Typ des hinzugefügten Tracks entspricht:

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die alle Audiotracks des Medienelements enthält. Sie können einen Listener für `addtrack` an dieses Objekt hinzufügen, um alarmiert zu werden, wenn neue Audiotracks zu dem Element hinzugefügt werden.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)
  - : Fügen Sie einen `addtrack`-Listener zu diesem [`VideoTrackList`](/de/docs/Web/API/VideoTrackList)-Objekt hinzu, um informiert zu werden, wenn Videotracks zu dem Element hinzugefügt werden.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
  - : Fügen Sie einen `addtrack`-Ereignis-Listener zu diesem [`TextTrackList`](/de/docs/Web/API/TextTrackList) hinzu, um benachrichtigt zu werden, wenn neue Texttracks zu dem Element hinzugefügt werden.

> [!NOTE]
> Auch wenn es sich um ein `<audio>`-Element handelt, hat es weiterhin Video- und Texttrack-Listen und kann tatsächlich verwendet werden, um Videos zu präsentieren, obwohl die Auswirkungen auf die Benutzeroberfläche seltsam sein können.

Um beispielsweise zu erkennen, wann Audiotracks zu einem `<audio>`-Element hinzugefügt oder daraus entfernt werden, können Sie den folgenden Code verwenden:

```js
const elem = document.querySelector("audio");

elem.audioTrackList.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTrackList.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Dieser Code überwacht, wann Audiospuren zum Element hinzugefügt oder daraus entfernt werden, und ruft eine hypothetische Funktion in einem Track-Editor auf, um den Track in der Liste der verfügbaren Tracks des Editors zu registrieren und zu entfernen.

Sie können auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um die [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event)-Ereignisse abzuhören.

## Barrierefreiheit

Audio mit gesprochenem Dialog sollte sowohl Untertitel als auch Transkripte enthalten, die den Inhalt genau beschreiben. Untertitel, die mit [WebVTT](/de/docs/Web/API/WebVTT_API) angegeben werden, ermöglichen es Menschen mit Hörbehinderungen, den Inhalt einer Audioaufnahme zu verstehen, während die Aufzeichnung abgespielt wird. Transkripte ermöglichen es Menschen, die zusätzliche Zeit benötigen, den Inhalt der Aufzeichnung in einem Tempo und Format zu überprüfen, das für sie angenehm ist.

Wenn automatische Untertitelungsdienste verwendet werden, ist es wichtig, die generierten Inhalte zu überprüfen, um sicherzustellen, dass sie das Originalaudio genau wiedergeben.

Das `<audio>`-Element unterstützt WebVTT nicht direkt. Sie müssen eine Bibliothek oder ein Framework finden, das die Fähigkeit für Sie bereitstellt, oder den Code selbst schreiben, um Untertitel anzuzeigen. Eine Möglichkeit besteht darin, Ihr Audio mithilfe eines {{HTMLElement("video")}}-Elements abzuspielen, das WebVTT unterstützt.

Zusätzlich zum gesprochenen Dialog sollten in den Untertiteln und Transkripten auch Musik und Soundeffekte identifiziert werden, die wichtige Informationen übermitteln. Dazu gehören Emotionen und Ton. Beispielsweise wird im folgenden WebVTT die Verwendung von eckigen Klammern zur Darstellung von Ton und emotionalen Einsichten für den Zuschauer beachtet; dies kann helfen, die Stimmung zu vermitteln, die normalerweise durch Musik, nonverbale Geräusche und wesentliche Soundeffekte vermittelt wird.

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

Es ist auch eine gute Praxis, einigen Inhalt (wie den direkten Download-Link) als Fallback für Betrachter bereitzustellen, die einen Browser verwenden, in dem das `<audio>`-Element nicht unterstützt wird:

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
- [WebAIM: Captioning, Transcripts, and Audio Descriptions](https://webaim.org/techniques/captions/)
- [MDN Understanding WCAG, Leitfaden 1.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [Understanding Success Criterion 1.2.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Understanding Success Criterion 1.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Beispiele

### Grundlegende Nutzung

Das folgende Beispiel zeigt die grundlegende Verwendung des `<audio>`-Elements, um eine OGG-Datei abzuspielen. Es wird aufgrund des `autoplay`-Attributs automatisch abgespielt—wenn die Seite die Berechtigung dazu hat—und enthält auch Fallback-Inhalte.

```html
<!-- Basic audio playback -->
<audio src="AudioTest.ogg" autoplay>
  <a href="AudioTest.ogg" download="AudioTest.ogg">Download OGG audio</a>.
</audio>
```

Weitere Informationen darüber, wann Autoplay funktioniert, wie Sie die Berechtigung zur Nutzung von Autoplay erhalten und wann und wie es angebracht ist, Autoplay zu verwenden, finden Sie in unserem [Autoplay-Leitfaden](/de/docs/Web/Media/Guides/Autoplay).

### `<audio>`-Element mit `<source>`-Element

In diesem Beispiel wird angegeben, welcher Audiotrack über das `src`-Attribut auf einem verschachtelten `<source>`-Element eingebettet werden soll, anstatt direkt auf dem `<audio>`-Element. Es ist immer nützlich, den MIME-Typ der Datei im `type`-Attribut anzugeben, da der Browser sofort feststellen kann, ob er die Datei abspielen kann, und keine Zeit damit vergeudet, wenn nicht.

```html
<audio controls>
  <source src="foo.wav" type="audio/wav" />
  <a href="foo.wav" download="foo.wav">Download WAV audio</a>.
</audio>
```

### `<audio>` mit mehreren `<source>`-Elementen

Dieses Beispiel enthält mehrere `<source>`-Elemente. Der Browser versucht, das erste Quellen-Element (Opus) zu laden, wenn er es abspielen kann; wenn nicht, fällt er auf das zweite (Vorbis) und schließlich auf MP3 zurück:

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow-Inhalt</a
        >, Phrasing-Inhalt, eingebetteter Inhalt. Wenn es ein
        <a href="#controls"><code>controls</code></a>-Attribut hat: interaktiver
        und greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        Wenn das Element ein <a href="#src"><code>src</code></a>-Attribut hat:
        null oder mehr {{HTMLElement("track")}}-Elemente gefolgt von transparentem Inhalt, der kein
        <code>&lt;audio&gt;</code> oder {{HTMLElement("video")}}
        Medienelemente enthält.<br />Andernfalls: null oder mehr {{HTMLElement("source")}}
        Elemente gefolgt von null oder mehr {{HTMLElement("track")}}
        Elementen gefolgt von transparentem Inhalt, der kein
        <code>&lt;audio&gt;</code> oder {{HTMLElement("video")}}
        Medienelemente enthält.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>Jedes Element, das eingebetteten Inhalt akzeptiert.</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
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
      <td>[`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Webmedientechnologien](/de/docs/Web/Media)
  - [Containerformate für Medien (Dateitypen)](/de/docs/Web/Media/Guides/Formats/Containers)
  - [Leitfaden zu Audiocodecs, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats/Audio_codecs)

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)
- {{htmlelement("source")}}
- {{htmlelement("video")}}
- [Lernbereich: HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Grundlagen der geräteübergreifenden Audiowiedergabe](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
