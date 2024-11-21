---
title: "<audio>: Das Audio einbetten-Element"
slug: Web/HTML/Element/audio
l10n:
  sourceCommit: f10015d1752d5668d8fe0de29f9d9807de475d58
---

{{HTMLSidebar}}

Das **`<audio>`** [HTML](/de/docs/Web/HTML) Element wird verwendet, um Toninhalte in Dokumente einzubetten. Es kann eine oder mehrere Audioquellen enthalten, dargestellt durch das `src` Attribut oder das {{HTMLElement("source")}} Element: der Browser wählt die geeignetste aus. Es kann auch das Ziel für gestreamte Medien sein, indem ein [`MediaStream`](/de/docs/Web/API/MediaStream) verwendet wird.

{{EmbedInteractiveExample("pages/tabbed/audio.html","tabbed-standard")}}

Das obige Beispiel zeigt die grundlegende Verwendung des `<audio>` Elements. In ähnlicher Weise wie beim {{htmlelement("img")}} Element fügen wir im `src` Attribut einen Pfad zu dem Medium ein, das wir einbetten möchten; wir können andere Attribute hinzufügen, um Informationen wie Autoplay und Schleife festzulegen, ob wir die standardmäßigen Audiosteuerungen des Browsers anzeigen möchten, usw.

Der Inhalt innerhalb der öffnenden und schließenden `<audio></audio>` Tags wird als Fallback in Browsern angezeigt, die das Element nicht unterstützen.

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `autoplay`

  - : Ein boolesches Attribut: Wenn angegeben, beginnt die Wiedergabe des Audios automatisch, sobald es möglich ist, ohne darauf zu warten, dass die gesamte Audiodatei heruntergeladen wird.

    > [!NOTE]
    > Websites, die automatisch Audio abspielen (oder Videos mit einem Audiotrack), können für Benutzer unangenehm sein und sollten nach Möglichkeit vermieden werden. Wenn Sie Autoplay-Funktionalität anbieten müssen, sollten Sie dies zur Opt-in machen (erfordern, dass ein Benutzer dies speziell ermöglicht). Dies kann jedoch nützlich sein, wenn Sie Medien-Elemente erstellen, deren Quelle zu einem späteren Zeitpunkt unter Benutzerkontrolle festgelegt wird. Weitere Informationen zur richtigen Verwendung von Autoplay finden Sie in unserem [Autoplay-Leitfaden](/de/docs/Web/Media/Autoplay_guide).

- `controls`

  - : Wenn dieses Attribut vorhanden ist, bietet der Browser Steuerungen an, die es dem Benutzer ermöglichen, die Audiowiedergabe zu steuern, einschließlich Lautstärke, Suchlauf und Wiedergabe/Pause.

- `controlslist`

  - : Das Attribut [`controlslist`](https://wicg.github.io/controls-list/explainer.html) hilft, wenn angegeben, dem Browser bei der Auswahl, welche Steuerungen für das `audio` Element angezeigt werden sollen, wann immer der Browser seine eigenen Steuerungssätze anzeigt (d.h. wenn das `controls` Attribut angegeben ist).

    Die erlaubten Werte sind `nodownload`, `nofullscreen` und `noremoteplayback`.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Dieses {{Glossary("Enumerated", "aufgezählte")}} Attribut gibt an, ob CORS verwendet werden soll, um die zugehörige Audiodatei abzurufen. [CORS-fähige Ressourcen](/de/docs/Web/HTML/CORS_enabled_image) können im {{HTMLElement("canvas")}} Element wiederverwendet werden, ohne _beschädigt_ zu werden. Die erlaubten Werte sind:

    - `anonymous`
      - : Sendet eine CORS-Anfrage ohne Anmeldeinformation. Mit anderen Worten, es sendet den `Origin:` HTTP-Header ohne Cookie, X.509 Zertifikat oder Durchführung der HTTP-Basisauthentifizierung. Wenn der Server keine Anmeldeinformationen an die Ursprungsseite gibt (indem er den `Access-Control-Allow-Origin:` HTTP-Header nicht setzt), wird die Ressource _beschädigt_ und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Sendet eine CORS-Anfrage mit Anmeldeinformation. Mit anderen Worten, es sendet den `Origin:` HTTP-Header mit einem Cookie, einem Zertifikat oder Durchführung der HTTP-Basisauthentifizierung. Wenn der Server keine Anmeldeinformationen an die Ursprungsseite gibt (durch den `Access-Control-Allow-Credentials:` HTTP-Header), wird die Ressource _beschädigt_ und ihre Nutzung eingeschränkt.

    Wenn nicht vorhanden, wird die Ressource ohne CORS-Anfrage abgerufen (d.h. ohne den `Origin:` HTTP-Header zu senden), was eine nicht-beschädigte Nutzung in {{HTMLElement('canvas')}} Elementen verhindert. Falls ungültig, wird sie behandelt, als wäre das aufzählbare Schlüsselwort **anonymous** verwendet worden. Siehe [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Attributes/crossorigin) für zusätzliche Informationen.

- `disableremoteplayback`

  - : Ein boolesches Attribut zur Deaktivierung der Fähigkeit zur Remote-Wiedergabe auf Geräten, die über Kabel (HDMI, DVI, etc.) und drahtlose Technologien (Miracast, Chromecast, DLNA, AirPlay, etc.) verbunden sind. Weitere Informationen finden Sie in [dieser vorgeschlagenen Spezifikation](https://www.w3.org/TR/remote-playback/#the-disableremoteplayback-attribute).

    In Safari können Sie [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) als Fallback verwenden.

- `loop`
  - : Ein boolesches Attribut: Wenn angegeben, wird der Audioplayer beim Erreichen des Endes der Audio automatisch zum Anfang zurückkehren.
- `muted`
  - : Ein boolesches Attribut, das anzeigt, ob das Audio initial stummgeschaltet sein wird. Sein Standardwert ist `false`.
- `preload`

  - : Dieses {{Glossary("enumerated", "aufgezählte")}} Attribut soll einen Hinweis auf den Browser geben, was der Autor für die beste Benutzererfahrung hält. Es kann einen der folgenden Werte haben:

    - `none`: Gibt an, dass das Audio nicht vorgeladen werden soll.
    - `metadata`: Gibt an, dass nur Audio-Metadaten (z. B. Länge) abgerufen werden.
    - `auto`: Gibt an, dass die gesamte Audiodatei heruntergeladen werden kann, auch wenn der Benutzer sie voraussichtlich nicht verwendet.
    - _leerer String_: Ein Synonym für den `auto` Wert.

    Der Standardwert ist für jeden Browser unterschiedlich. Die Spezifikation empfiehlt, ihn auf `metadata` zu setzen.

    > [!NOTE]
    >
    > - Das `autoplay` Attribut hat Vorrang vor `preload`. Wenn `autoplay` angegeben ist, müsste der Browser offensichtlich beginnen, das Audio für die Wiedergabe herunterzuladen.
    > - Der Browser ist durch die Spezifikation nicht gezwungen, den Wert dieses Attributs zu befolgen; es ist ein reiner Hinweis.

- `src`
  - : Die URL des einzubettenden Audios. Dies unterliegt den [HTTP-Zugriffskontrollen](/de/docs/Web/HTTP/CORS). Dies ist optional; Sie können stattdessen das {{htmlelement("source")}} Element innerhalb des Audio-Blocks verwenden, um das einzubettende Audio anzugeben.

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
        Der Browser kann die Medien abspielen, schätzt jedoch, dass nicht genug
        Daten geladen wurden, um die Medien bis zum Ende abzuspielen, ohne für
        weiteres Puffern von Inhalten anhalten zu müssen.
      </td>
    </tr>
    <tr>
      <td>
        [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
      </td>
      <td>
        Der Browser schätzt, dass er die Medien bis zum Ende abspielen kann, ohne
        für das Puffern von Inhalten anhalten zu müssen.
      </td>
    </tr>
    <tr>
      <td>[`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)</td>
      <td>
        Die Wiedergabe eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) ist
        beendet.
      </td>
    </tr>
    <tr>
      <td>
        [`durationchange`](/de/docs/Web/API/HTMLMediaElement/durationchange_event)
      </td>
      <td>Das <code>duration</code> Attribut wurde aktualisiert.</td>
    </tr>
    <tr>
      <td>
        [`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)
      </td>
      <td>
        Die Medien sind leer geworden; dieses Ereignis wird z.B. gesendet, wenn
        die Medien bereits geladen (oder teilweise geladen) sind und die
        [`HTMLMediaElement.load`](/de/docs/Web/API/HTMLMediaElement/load) Methode zum
        Neuladen aufgerufen wird.
      </td>
    </tr>
    <tr>
      <td>
        [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)
      </td>
      <td>Die Wiedergabe wurde gestoppt, weil das Ende der Medien erreicht wurde.</td>
    </tr>
    <tr>
      <td>
        [`loadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event)
      </td>
      <td>Der erste Frame der Medien ist fertig geladen.</td>
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
      <td>Wird ausgelöst, wenn der Browser begonnen hat, die Ressource zu laden.</td>
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
        Die Wiedergabe ist startbereit, nachdem sie pausiert oder aufgrund
        mangelnder Daten verzögert wurde.
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
      <td>Eine <em>Suche</em>-Operation wurde abgeschlossen.</td>
    </tr>
    <tr>
      <td>
        [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
      </td>
      <td>Eine <em>Suche</em>-Operation hat begonnen.</td>
    </tr>
    <tr>
      <td>
        [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
      </td>
      <td>
        Der User-Agent versucht, Mediendaten abzurufen, aber die Daten
        kommen unerwartet nicht.
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
        Die Zeit, die durch das <code>currentTime</code> Attribut angegeben ist,
        wurde aktualisiert.
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
      <td>Die Wiedergabe wurde wegen eines temporären Datenmangels gestoppt.</td>
    </tr>
  </tbody>
</table>

## Nutzungshinweise

Nicht alle Browser unterstützen dieselben [Dateitypen](/de/docs/Web/Media/Formats/Containers) und [Audiocodecs](/de/docs/Web/Media/Formats/Audio_codecs); Sie können mehrere Quellen innerhalb verschachtelter {{htmlelement("source")}} Elemente angeben, und der Browser wird dann die erste verwenden, die er versteht:

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

Die Audioquelle kann auf jede gültige [URL](/de/docs/Web/URI) gesetzt werden, einschließlich HTTP(S) URLs und [Data-URLs](/de/docs/Web/URI/Schemes/data). Beim Verwenden von HTTP(S) URLs sollten Sie beachten, dass das Caching-Verhalten des Browsers beeinflusst, wie oft die Datei vom Server abgerufen wird. Data-URLs betten die Audiodaten direkt im HTML ein, was nützlich für kleine Audiodateien sein kann, aber nicht für größere Dateien empfohlen wird, da es die Größe der HTML-Datei erhöht.

Sie können auch die [Web Audio API](/de/docs/Web/API/Web_Audio_API) verwenden, um Audio-Streams direkt aus JavaScript-Code zu erzeugen und zu manipulieren, anstatt vorbestehende Audiodateien zu streamen. Sie können das [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) in JavaScript auf ein [`MediaStream`](/de/docs/Web/API/MediaStream) Objekt setzen. Dies wird häufig für Live-Audiostreams oder Echtzeit-Audiobearbeitung verwendet.

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

Beachten Sie, dass `MediaStream`-Quellen Einschränkungen haben: Sie sind nicht durchsuchbar und unterstützen nur eine begrenzte Anzahl von Codecs.

Wir bieten einen substanziellen und gründlichen [Leitfaden zu Medientypen](/de/docs/Web/Media/Formats) und den [Audio-Codecs, die darin verwendet werden können](/de/docs/Web/Media/Formats/Audio_codecs). Ebenfalls verfügbar ist [ein Leitfaden zu den für Video unterstützten Codecs](/de/docs/Web/Media/Formats/Video_codecs).

Weitere Nutzungshinweise:

- Wenn Sie das `controls` Attribut nicht angeben, enthält der Audioplayer nicht die standardmäßigen Steuerungen des Browsers. Sie können jedoch Ihre eigenen benutzerdefinierten Steuerungen mit JavaScript und der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API erstellen.
- Um eine präzise Kontrolle über Ihre Audiowiedergabe zu ermöglichen, feuern `HTMLMediaElement`s viele verschiedene [Ereignisse](/de/docs/Web/API/HTMLMediaElement#events). Dies bietet auch eine Möglichkeit, den Abrufprozess des Audios zu überwachen, sodass Sie Fehler erkennen oder feststellen können, wann genug verfügbar ist, um es zu spielen oder zu manipulieren.
- `<audio>` Elemente können keine Untertitel oder Bildunterschriften mit ihnen assoziieren in der gleichen Weise wie `<video>` Elemente. Siehe [WebVTT und Audio](https://www.iandevlin.com/blog/2015/12/html5/webvtt-and-audio/) von Ian Devlin für nützliche Informationen und Workarounds.
- Um den Fallback-Inhalt in Browsern zu testen, die das Element unterstützen, können Sie `<audio>` durch ein nicht existierendes Element wie `<notanaudio>` ersetzen.

Eine gute allgemeine Informationsquelle zur Verwendung des HTML `<audio>` Elements ist das [Video- und Audio-Inhalt](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) Anfänger-Tutorial.

### Styling mit CSS

Das `<audio>` Element hat keine intrinsische visuelle Ausgabe, es sei denn, das `controls` Attribut ist angegeben, in diesem Fall werden die standardmäßigen Steuerungen des Browsers angezeigt.

Die Standardsteuerungen haben einen {{cssxref("display")}} Wert von `inline` standardmäßig, und es ist oft eine gute Idee, den Wert auf `block` zu setzen, um mehr Kontrolle über die Positionierung und das Layout zu haben, es sei denn, Sie möchten es innerhalb eines Textblocks oder ähnlichem platzieren.

Sie können die standardmäßigen Steuerungen mit Eigenschaften, die den Block als eine Einheit beeinflussen, stylen, sodass Sie ihm beispielsweise einen {{cssxref("border")}} und {{cssxref("border-radius")}}, {{cssxref("padding")}}, {{cssxref("margin")}}, usw. geben können. Sie können jedoch nicht die einzelnen Komponenten im Audioplayer stylen (z.B. die Größe der Buttons oder Icons ändern, die Schriftart ändern, etc.), und die Steuerungen sind in den verschiedenen Browsern unterschiedlich.

Um ein konsistentes Aussehen und Gefühl über die Browser hinweg zu erzielen, müssen Sie benutzerdefinierte Steuerungen erstellen; diese können markiert und in beliebiger Weise gestylt werden, und dann kann JavaScript zusammen mit der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API verwendet werden, um ihre Funktionalität zu verbinden.

[Grundlagen zur Videoplayer-Gestaltung](/de/docs/Web/Media/Audio_and_video_delivery/Video_player_styling_basics) bietet einige nützliche Styling-Techniken — es ist im Kontext von `<video>` geschrieben, aber vieles gilt gleichermaßen für `<audio>`.

### Erkennung von Hinzufügen und Entfernen von Spuren

Sie können erkennen, wann Spuren zu einem `<audio>` Element hinzugefügt und entfernt werden, indem Sie die Ereignisse [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event) verwenden. Diese Ereignisse werden jedoch nicht direkt zum `<audio>` Element selbst gesendet. Stattdessen werden sie an das Objekt der Spurenliste innerhalb des `<audio>` Elements gesendet, das dem Typ der hinzugefügten Spur entspricht:

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die alle Audiospuren des Medienelements enthält. Sie können einen Listener für `addtrack` an dieses Objekt anhängen, um benachrichtigt zu werden, wenn neue Audiospuren zum Element hinzugefügt werden.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)
  - : Fügen Sie einen `addtrack` Listener zu diesem [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) Objekt hinzu, um benachrichtigt zu werden, wenn Video-Spuren zum Element hinzugefügt werden.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
  - : Fügen Sie einen `addtrack` Ereignis-Listener zu dieser [`TextTrackList`](/de/docs/Web/API/TextTrackList) hinzu, um benachrichtigt zu werden, wenn neue Textspuren zum Element hinzugefügt werden.

> [!NOTE]
> Auch wenn es sich um ein `<audio>` Element handelt, hat es dennoch Listen für Video- und Textspuren und kann in der Tat verwendet werden, um Videos zu präsentieren, obwohl dies seltsame Benutzeroberflächenimplikationen haben kann.

Zum Beispiel, um zu erkennen, wann Audiospuren zu oder von einem `<audio>` Element hinzugefügt werden, können Sie Code wie diesen verwenden:

```js
const elem = document.querySelector("audio");

elem.audioTrackList.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTrackList.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Dieser Code überwacht das Hinzufügen und Entfernen von Audiospuren zum Element und ruft eine hypothetische Funktion in einem Spur-Editor auf, um die Spur zur Liste der verfügbaren Spuren des Editors hinzuzufügen oder daraus zu entfernen.

Sie können auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um auf die Ereignisse [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event) zu hören.

## Barrierefreiheit

Audio mit gesprochenem Dialog sollte sowohl Bildunterschriften als auch Transkripte enthalten, die seinen Inhalt genau beschreiben. Bildunterschriften, die mit Hilfe von [WebVTT](/de/docs/Web/API/WebVTT_API) angegeben werden, ermöglichen Menschen mit Hörbehinderungen, den Inhalt einer Audioaufnahme zu verstehen, während die Aufnahme abgespielt wird, während Transkripte es Menschen, die mehr Zeit benötigen, ermöglichen, den Inhalt der Aufnahme in einem für sie angenehmen Tempo und Format zu überprüfen.

Wenn automatische Beschriftungsdienste verwendet werden, ist es wichtig, den erzeugten Inhalt zu überprüfen, um sicherzustellen, dass er die Quell-Audio exakt wiedergibt.

Das `<audio>` Element unterstützt WebVTT nicht direkt. Sie müssen eine Bibliothek oder ein Framework finden, das diese Fähigkeit bietet, oder den Code selbst schreiben, um Bildunterschriften anzuzeigen. Eine Möglichkeit besteht darin, Ihr Audio mit einem {{HTMLElement("video")}} Element abzuspielen, das WebVTT unterstützt.

Zusätzlich zu gesprochenem Dialog sollten Untertitel und Transkripte auch Musik und Soundeffekte identifizieren, die wichtige Informationen kommunizieren. Dies umfasst Emotionen und Ton. Zum Beispiel wird im folgenden WebVTT die Verwendung von eckigen Klammern bemerkt, um dem Zuschauer ein Gefühl von Ton und emotionaler Einsicht zu geben; dies kann helfen, die Stimmung zu schaffen, die sonst durch Musik, nonverbale Geräusche und wichtige Soundeffekte vermittelt wird.

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

Es ist auch eine gute Praxis, einigen Inhalt (wie den direkten Download-Link) als Fallback bereitzustellen, für Benutzer, die einen Browser verwenden, bei dem das `<audio>` Element nicht unterstützt wird:

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
- [WebAIM: Beschriftungen, Transkripte und Audiobeschreibungen](https://webaim.org/techniques/captions/)
- [MDN Verständnis von WCAG, Guideline 1.2 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [Verständnis des Erfolgskriteriums 1.2.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Verständnis des Erfolgskriteriums 1.2.2 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Beispiele

### Grundlegende Nutzung

Das folgende Beispiel zeigt die grundlegende Nutzung des `<audio>` Elements, um eine OGG-Datei abzuspielen. Es wird aufgrund des `autoplay` Attributs automatisch abgespielt—wenn die Seite die Berechtigung dazu hat—und enthält auch Fallback-Inhalt.

```html
<!-- Basic audio playback -->
<audio src="AudioTest.ogg" autoplay>
  <a href="AudioTest.ogg" download="AudioTest.ogg">Download OGG audio</a>.
</audio>
```

Details darüber, wann Autoplay funktioniert, wie Sie die Berechtigung zur Verwendung von Autoplay erhalten und wann es angemessen ist, Autoplay zu verwenden, finden Sie in unserem [Autoplay-Leitfaden](/de/docs/Web/Media/Autoplay_guide).

### `<audio>` Element mit \<source> Element

Dieses Beispiel gibt an, welchen Audiotrack eingebettet werden soll, indem das `src` Attribut auf einem verschachtelten `<source>` Element anstelle des direkten `<audio>` Elements verwendet wird. Es ist immer hilfreich, den MIME-Typ der Datei im `type` Attribut anzugeben, da der Browser sofort feststellen kann, ob er die Datei abspielen kann, und keine Zeit damit verschwendet, wenn nicht.

```html
<audio controls>
  <source src="foo.wav" type="audio/wav" />
  <a href="foo.wav" download="foo.wav">Download WAV audio</a>.
</audio>
```

### `<audio>` mit mehreren \<source> Elementen

Dieses Beispiel enthält mehrere `<source>` Elemente. Der Browser versucht, das erste Quellen-Element (Opus) zu laden, wenn er es abspielen kann; falls nicht, wechselt er zum zweiten (Vorbis) und schließlich zu MP3:

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
          >Flow-Inhalt</a
        >, phrasing content, embedded content. Wenn es ein
        <a href="#controls"><code>controls</code></a> Attribut hat: interaktiver
        Inhalt und palpabler Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Wenn das Element ein <a href="#src"><code>src</code></a>
        Attribut hat: null oder mehr {{HTMLElement("track")}} Elemente
        gefolgt von transparentem Inhalt, der keine
        <code>&lt;audio&gt;</code> oder {{HTMLElement("video")}}
        Medienelemente enthält.<br />Andernfalls: null oder mehr {{HTMLElement("source")}}
        Elemente gefolgt von null oder mehr {{HTMLElement("track")}}
        Elementen gefolgt von transparentem Inhalt, der keine
        <code>&lt;audio&gt;</code> oder {{HTMLElement("video")}}
        Medienelemente enthält.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das startende als auch das endende Tag sind zwingend.</td>
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
  - [Leitfaden zu Audio-Codecs im Web](/de/docs/Web/Media/Formats/Audio_codecs)

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)
- {{htmlelement("source")}}
- {{htmlelement("video")}}
- [Lernbereich: Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [Cross-browser Audio Grundlagen](/de/docs/Web/Media/Audio_and_video_delivery/Cross-browser_audio_basics)
