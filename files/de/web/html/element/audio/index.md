---
title: "<audio>: Das Audio-Einbettungs-Element"
slug: Web/HTML/Element/audio
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{HTMLSidebar}}

Das **`<audio>`** [HTML](/de/docs/Web/HTML) Element wird verwendet, um Audio-Inhalte in Dokumente einzubetten. Es kann eine oder mehrere Audioquellen enthalten, die durch das `src` Attribut oder das {{HTMLElement("source")}} Element dargestellt werden: Der Browser wählt die am besten geeignete aus. Es kann auch das Ziel für gestreamte Medien sein, unter Verwendung eines [`MediaStream`](/de/docs/Web/API/MediaStream).

{{EmbedInteractiveExample("pages/tabbed/audio.html","tabbed-standard")}}

Das obige Beispiel zeigt die grundlegende Verwendung des `<audio>` Elements. Ähnlich dem {{htmlelement("img")}} Element fügen wir einen Pfad zur Mediendatei, die wir einbetten möchten, innerhalb des `src` Attributs ein; wir können andere Attribute einfügen, um Informationen anzugeben, wie z.B. ob wir es automatisch abspielen und wiederholen möchten, ob wir die Standard-Audiosteuerungen des Browsers anzeigen möchten, etc.

Der Inhalt innerhalb der öffnenden und schließenden `<audio></audio>` Tags wird als Fallback in Browsern angezeigt, die das Element nicht unterstützen.

## Attribute

Die Attribute dieses Elements beinhalten die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `autoplay`

  - : Ein Boolean-Attribut: Wenn angegeben, wird die Wiedergabe des Audios automatisch beginnen, sobald es möglich ist, ohne darauf zu warten, dass die gesamte Audiodatei heruntergeladen wurde.

    > [!NOTE]
    > Websites, die Audio (oder Videos mit einer Tonspur) automatisch abspielen, können für Benutzer als unangenehm empfunden werden und sollten nach Möglichkeit vermieden werden. Wenn Sie die Funktion zum automatischen Abspielen anbieten müssen, sollten Sie diese als Opt-in-Funktion gestalten (was erfordert, dass ein Benutzer sie speziell aktiviert). Es kann jedoch nützlich sein, Medien-Elemente zu erstellen, deren Quelle zu einem späteren Zeitpunkt unter der Kontrolle des Benutzers festgelegt wird. Siehe unseren [Autoplay-Leitfaden](/de/docs/Web/Media/Guides/Autoplay) für zusätzliche Informationen darüber, wie man Autoplay richtig verwendet.

- `controls`

  - : Wenn dieses Attribut vorhanden ist, bietet der Browser Steuerungen an, mit denen der Benutzer die Audiowiedergabe steuern kann, einschließlich Lautstärke, Suche und Pause/Wiederaufnahme der Wiedergabe.

- `controlslist`

  - : Das [`controlslist`](https://wicg.github.io/controls-list/explainer.html) Attribut hilft, wenn angegeben, dem Browser, auszuwählen, welche Steuerungen für das `audio` Element angezeigt werden sollen, wann immer der Browser sein eigenes Set von Steuerungen anzeigt (d.h. wenn das `controls` Attribut angegeben ist).

    Die zulässigen Werte sind `nodownload`, `nofullscreen` und `noremoteplayback`.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Dieses {{Glossary("Enumerated", "aufzählbare")}} Attribut gibt an, ob CORS verwendet werden soll, um die zugehörige Audiodatei abzurufen. [CORS-fähige Ressourcen](/de/docs/Web/HTML/CORS_enabled_image) können im {{HTMLElement("canvas")}} Element wiederverwendet werden, ohne dass sie _verfälscht_ werden. Die zulässigen Werte sind:

    - `anonymous`
      - : Sendet eine Cross-Origin-Anfrage ohne Berechtigungsnachweis. Mit anderen Worten, es wird der `Origin:` HTTP-Header gesendet, aber ohne Cookie, X.509-Zertifikat oder Durchführung einer HTTP-Basis-Authentifizierung. Wenn der Server dem Ursprungssite keine Anmeldeinformationen gibt (indem er den `Access-Control-Allow-Origin:` HTTP-Header nicht setzt), wird die Ressource _verfälscht_ und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Sendet eine Cross-Origin-Anfrage mit Berechtigungsnachweis. Mit anderen Worten, es wird der `Origin:` HTTP-Header zusammen mit einem Cookie, einem Zertifikat oder Durchführung einer HTTP-Basis-Authentifizierung gesendet. Wenn der Server der Ursprungssite keine Anmeldeinformationen gibt (über den `Access-Control-Allow-Credentials:` HTTP-Header), wird die Ressource _verfälscht_ und ihre Nutzung eingeschränkt.

    Wenn nicht vorhanden, wird die Ressource ohne eine CORS-Anfrage abgerufen (d.h. ohne Senden des `Origin:` HTTP-Headers), wodurch ihre unverfälschte Verwendung in {{HTMLElement('canvas')}} Elementen verhindert wird. Falls ungültig, wird es so behandelt, als ob das aufgezählte Schlüsselwort **anonymous** verwendet worden wäre. Siehe [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Attributes/crossorigin) für weitere Informationen.

- `disableremoteplayback`

  - : Ein Boolean-Attribut, das verwendet wird, um die Fähigkeit zur Fernwiedergabe in Geräten zu deaktivieren, die mit Kabeltechnologien (HDMI, DVI, etc.) und drahtlosen Technologien (Miracast, Chromecast, DLNA, AirPlay, etc.) verbunden sind. Siehe [diese vorgeschlagene Spezifikation](https://www.w3.org/TR/remote-playback/#the-disableremoteplayback-attribute) für weitere Informationen.

    In Safari können Sie [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) als Fallback verwenden.

- `loop`
  - : Ein Boolean-Attribut: Wenn angegeben, wird der Audioplayer beim Erreichen des Endes des Audios automatisch zum Anfang zurückkehren.
- `muted`
  - : Ein Boolean-Attribut, das angibt, ob das Audio anfangs stummgeschaltet wird. Sein Standardwert ist `false`.
- `preload`

  - : Dieses {{Glossary("enumerated", "aufzählbare")}} Attribut soll dem Browser einen Hinweis darauf geben, was der Autor für die beste Benutzererfahrung hält. Es kann einen der folgenden Werte haben:

    - `none`: Zeigt an, dass das Audio nicht vorgeladen werden sollte.
    - `metadata`: Zeigt an, dass nur Audio-Metadaten (z.B. Länge) abgerufen werden.
    - `auto`: Zeigt an, dass die gesamte Audiodatei heruntergeladen werden kann, auch wenn der Benutzer sie möglicherweise nicht verwendet.
    - _leer Zeichenkette_: Ein Synonym für den Wert `auto`.

    Der Standardwert ist für jeden Browser unterschiedlich. Die Spezifikation rät, ihn auf `metadata` zu setzen.

    > [!NOTE]
    >
    > - Das `autoplay` Attribut hat Vorrang vor `preload`. Falls `autoplay` angegeben ist, müsste der Browser offensichtlich anfangen, das Audio für die Wiedergabe herunterzuladen.
    > - Der Browser ist durch die Spezifikation nicht gezwungen, den Wert dieses Attributs zu befolgen; es ist lediglich ein Hinweis.

- `src`
  - : Die URL der einzubettenden Audiodatei. Dies unterliegt den [HTTP-Zugriffskontrollen](/de/docs/Web/HTTP/CORS). Dieses Attribut ist optional; Sie können stattdessen das {{htmlelement("source")}} Element innerhalb des Audioblocks verwenden, um das einzubettende Audio anzugeben.

## Ereignisse

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
        Der Browser das Medium abspielen kann, aber schätzt, dass nicht genügend Daten geladen wurden, um das Medium bis zum Ende abzuspielen, ohne für weiteres Puffern des Inhalts anhalten zu müssen.
      </td>
    </tr>
    <tr>
      <td>
        [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
      </td>
      <td>
        Der Browser schätzt, dass er das Medium bis zum Ende abspielen kann, ohne für das Puffern von Inhalten anhalten zu müssen.
      </td>
    </tr>
    <tr>
      <td>[`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)</td>
      <td>
        Das Rendern eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) ist beendet.
      </td>
    </tr>
    <tr>
      <td>
        [`durationchange`](/de/docs/Web/API/HTMLMediaElement/durationchange_event)
      </td>
      <td>Das <code>duration</code> Attribut aktualisiert wurde.</td>
    </tr>
    <tr>
      <td>
        [`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)
      </td>
      <td>
        Das Medium leer geworden ist; zum Beispiel wird dieses Ereignis gesendet, wenn das Medium bereits geladen (oder teilweise geladen) wurde und die [`HTMLMediaElement.load`](/de/docs/Web/API/HTMLMediaElement/load) Methode aufgerufen wird, um es neu zu laden.
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
      <td>Der erste Frame des Mediums das Laden abgeschlossen hat.</td>
    </tr>
    <tr>
      <td>
        [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
      </td>
      <td>Die Metadaten geladen wurden.</td>
    </tr>
    <tr>
      <td>
        [`loadstart`](/de/docs/Web/API/HTMLMediaElement/loadstart_event)
      </td>
      <td>Ausgelöst wird, wenn der Browser begonnen hat, die Ressource zu laden.</td>
    </tr>
    <tr>
      <td>
        [`pause`](/de/docs/Web/API/HTMLMediaElement/pause_event)
      </td>
      <td>Die Wiedergabe pausiert wurde.</td>
    </tr>
    <tr>
      <td>
        [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)
      </td>
      <td>Die Wiedergabe begonnen hat.</td>
    </tr>
    <tr>
      <td>
        [`playing`](/de/docs/Web/API/HTMLMediaElement/playing_event)
      </td>
      <td>
        Die Wiedergabe bereit ist zu starten, nachdem sie pausiert wurde oder aufgrund von Datenmangel verzögert wurde.
      </td>
    </tr>
    <tr>
      <td>
        [`ratechange`](/de/docs/Web/API/HTMLMediaElement/ratechange_event)
      </td>
      <td>Die Wiedergabegeschwindigkeit geändert wurde.</td>
    </tr>
    <tr>
      <td>
        [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event)
      </td>
      <td>Eine <em>Such</em>-Operation abgeschlossen ist.</td>
    </tr>
    <tr>
      <td>
        [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
      </td>
      <td>Eine <em>Such</em>-Operation gestartet wurde.</td>
    </tr>
    <tr>
      <td>
        [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
      </td>
      <td>
        Der User-Agent versucht, Mediendaten abzurufen, aber die Daten unerwartet nicht eintreffen.
      </td>
    </tr>
    <tr>
      <td>
        [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event)
      </td>
      <td>Das Laden mediisicher Daten ausgesetzt wurde.</td>
    </tr>
    <tr>
      <td>
        [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)
      </td>
      <td>
        Die im <code>currentTime</code> Attribut angegebene Zeit aktualisiert wurde.
      </td>
    </tr>
    <tr>
      <td>
        [`volumechange`](/de/docs/Web/API/HTMLMediaElement/volumechange_event)
      </td>
      <td>Die Lautstärke geändert wurde.</td>
    </tr>
    <tr>
      <td>
        [`waiting`](/de/docs/Web/API/HTMLMediaElement/waiting_event)
      </td>
      <td>Die Wiedergabe gestoppt wurde, weil vorübergehend keine Daten verfügbar sind.</td>
    </tr>
  </tbody>
</table>

## Verwendungshinweise

Browser unterstützen nicht alle die gleichen [Dateiformate](/de/docs/Web/Media/Guides/Formats/Containers) und [Audio-Codecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs); Sie können mehrere Quellen innerhalb geschachtelter {{htmlelement("source")}} Elemente bereitstellen, und der Browser verwendet dann das erste, das er versteht:

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

Die Audioquelle kann auf jede gültige [URL](/de/docs/Web/URI) gesetzt werden, einschließlich HTTP(S) URLs und [Data URLs](/de/docs/Web/URI/Schemes/data). Beim Verwenden von HTTP(S) URLs ist zu beachten, dass das Caching-Verhalten des Browsers beeinflusst, wie oft die Datei vom Server abgerufen wird. Data URLs betten die Audiodaten direkt in das HTML ein, was für kleine Audiodateien nützlich sein kann, aber nicht für größere Dateien empfohlen wird, da es die Größe der HTML-Datei erhöht.

Sie können auch die [Web Audio API](/de/docs/Web/API/Web_Audio_API) verwenden, um Audio-Streams direkt zu erzeugen und zu manipulieren, anstatt vorab vorhandene Audiodateien zu streamen. Sie können das [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) in JavaScript auf ein [`MediaStream`](/de/docs/Web/API/MediaStream) Objekt setzen. Dies wird häufig für Live-Audio-Streams oder Echtzeit-Audiobearbeitung verwendet.

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

Beachten Sie, dass `MediaStream`-Quellen Einschränkungen haben: Sie sind nicht ansteuerbar und unterstützen nur einen begrenzten Satz von Codecs.

Wir bieten einen umfassenden und gründlichen [Leitfaden zu Mediendateitypen](/de/docs/Web/Media/Guides/Formats) und den [Audio-Codecs, die innerhalb dieser verwendet werden können](/de/docs/Web/Media/Guides/Formats/Audio_codecs). Außerdem steht [ein Leitfaden zu den unterstützten Codecs für Video](/de/docs/Web/Media/Guides/Formats/Video_codecs) zur Verfügung.

Weitere Verwendungshinweise:

- Wenn Sie das `controls` Attribut nicht angeben, enthält der Audioplayer nicht die Standardsteuerungen des Browsers. Sie können jedoch Ihre eigenen benutzerdefinierten Steuerungen mit JavaScript und der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API erstellen.
- Um eine präzise Steuerung über Ihre Audioinhalte zu ermöglichen, feuern `HTMLMediaElement` viele unterschiedliche [Ereignisse](/de/docs/Web/API/HTMLMediaElement#events). Dies bietet auch eine Möglichkeit, den Abrufprozess des Audios zu überwachen, sodass Sie auf Fehler achten oder erkennen können, wann genug vorhanden ist, um mit dem Abspielen zu beginnen oder es zu manipulieren.
- `<audio>` Elemente können keine Untertitel oder Bildunterschriften auf die gleiche Weise wie `<video>` Elemente haben. Siehe [WebVTT und Audio](https://www.iandevlin.com/blog/2015/12/html5/webvtt-and-audio/) von Ian Devlin für einige nützliche Informationen und Workarounds.
- Um den Fallback-Inhalt auf Browsern zu testen, die das Element unterstützen, können Sie `<audio>` durch ein nicht vorhandenes Element wie `<notanaudio>` ersetzen.

Eine gute allgemeine Informationsquelle zur Verwendung von HTML `<audio>` ist das [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) Einsteigertutorial.

### Styling mit CSS

Das `<audio>` Element hat keine eigenen intrinsischen visuellen Ausgaben, es sei denn, das `controls` Attribut ist angegeben, in welchem Fall die Standardsteuerungen des Browsers angezeigt werden.

Die Standardsteuerungen haben einen {{cssxref("display")}} Wert von `inline` standardmäßig, und es ist oft eine gute Idee, den Wert auf `block` zu setzen, um die Kontrolle über Positionierung und Layout zu verbessern, es sei denn, Sie möchten, dass es innerhalb eines Textblocks sitzt oder ähnlich.

Sie können die Standardsteuerungen mit Eigenschaften stylen, die den Block als eine Einheit betreffen, sodass Sie ihm zum Beispiel {{cssxref("border")}} und {{cssxref("border-radius")}}, {{cssxref("padding")}}, {{cssxref("margin")}} usw. geben können. Sie können jedoch nicht die einzelnen Komponenten im Audioplayer stylen (z.B. die Schaltflächengröße oder Symbole ändern, die Schriftart wechseln, etc.), und die Steuerungen unterscheiden sich in den verschiedenen Browsern.

Um ein konsistentes Erscheinungsbild zwischen Browsern zu erzielen, müssen Sie benutzerdefinierte Steuerungen erstellen; diese können in beliebiger Weise markiert und gestylt werden, die Sie möchten, und dann kann JavaScript zusammen mit der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API verwendet werden, um ihre Funktionalität zu verdrahten.

[Grundlagen der Videoplayer-Stylisierung](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics) bietet einige nützliche Stylisierungstechniken — es ist im Kontext von `<video>` geschrieben, aber vieles davon ist genauso anwendbar auf `<audio>`.

### Erkennung von Hinzufügung und Entfernung von Spuren

Sie können erkennen, wann Spuren zu einem `<audio>` Element hinzugefügt oder entfernt werden, indem Sie die [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event) Ereignisse verwenden. Diese Ereignisse werden jedoch nicht direkt an das `<audio>` Element gesendet. Stattdessen werden sie an das Track-Listen-Objekt im `<audio>` Element gesendet, das dem Spurentyp entspricht, der zum Element hinzugefügt wurde:

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die alle Audiotracks des Medienelements enthält. Sie können einen Listener für `addtrack` zu diesem Objekt hinzufügen, um benachrichtigt zu werden, wenn neue Audiotracks dem Element hinzugefügt werden.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)
  - : Fügen Sie diesem [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) Objekt einen `addtrack` Listener hinzu, um über das Hinzufügen von Videospuren zum Element informiert zu werden.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
  - : Fügen Sie diesem [`TextTrackList`](/de/docs/Web/API/TextTrackList) einen `addtrack` Ereignis-Listener hinzu, um benachrichtigt zu werden, wenn neue Textspuren zu dem Element hinzugefügt werden.

> [!NOTE]
> Auch wenn es sich um ein `<audio>` Element handelt, hat es dennoch Video- und Textspurlisten und kann tatsächlich verwendet werden, um Video anzuzeigen, obwohl die Benutzeroberflächenimplikationen seltsam sein können.

Zum Beispiel können Sie den folgenden Code verwenden, um zu erkennen, wann Audiotracks zu oder von einem `<audio>` Element hinzugefügt oder entfernt werden:

```js
const elem = document.querySelector("audio");

elem.audioTrackList.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTrackList.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Dieser Code überwacht, wann Audiotracks dem Element hinzugefügt oder entfernt werden, und ruft eine hypothetische Funktion auf einem Spur-Editor auf, um die Spur in die Liste der verfügbaren Tracks des Editors einzutragen oder daraus zu entfernen.

Sie können auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um die [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event) Ereignisse zu überwachen.

## Barrierefreiheit

Audio mit gesprochenem Dialog sollte sowohl Bildunterschriften als auch Transkriptionen bereitstellen, die den Inhalt genau beschreiben. Bildunterschriften, die mittels [WebVTT](/de/docs/Web/API/WebVTT_API) spezifiziert werden, ermöglichen es Menschen mit Hörbehinderungen, den Inhalt einer Audioaufnahme zu verstehen, während die Aufnahme abgespielt wird, während Transkriptionen es Menschen ermöglichen, die mehr Zeit benötigen, den Inhalt der Aufnahme in einem Tempo und Format zu überprüfen, das für sie angenehm ist.

Wenn automatische Untertitelungsdienste verwendet werden, ist es wichtig, den erzeugten Inhalt zu überprüfen, um sicherzustellen, dass er die Ausgangsaudio genau darstellt.

Das `<audio>` Element unterstützt WebVTT nicht direkt. Sie müssen eine Bibliothek oder ein Framework finden, das diese Funktion bietet, oder selbst den Code zum Anzeigen von Bildunterschriften schreiben. Eine Möglichkeit ist, Ihr Audio mit einem {{HTMLElement("video")}} Element abzuspielen, das WebVTT unterstützt.

Neben gesprochenem Dialog sollten auch Untertitel und Transkriptionen Musik und Soundeffekte identifizieren, die wichtige Informationen kommunizieren. Dies umfasst Emotionen und Ton. Beispielsweise wird im nachstehenden WebVTT die Verwendung von eckigen Klammern verwendet, um dem Zuschauer Ton und emotionale Einsicht zu geben; dies kann helfen, die Stimmung zu vermitteln, die ansonsten durch Musik, nonverbale Geräusche und entscheidende Soundeffekte bereitgestellt wird, usw.

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

Es ist auch eine gute Praxis, einige Inhalte (z. B. den direkten Download-Link) als Fallback für Benutzer bereitzustellen, die einen Browser verwenden, in dem das `<audio>` Element nicht unterstützt wird:

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
- [WebAIM: Untertitel, Transkripte und Audiobeschreibungen](https://webaim.org/techniques/captions/)
- [MDN Verständnis WCAG, Erläuterungen zu Richtlinie 1.2](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [Erklärung zum Erfolgskriterium 1.2.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Erklärung zum Erfolgskriterium 1.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel zeigt die grundlegende Verwendung des `<audio>` Elements zum Abspielen einer OGG-Datei. Es wird aufgrund des `autoplay` Attributs automatisch abgespielt — wenn die Seite die Erlaubnis dazu hat — und enthält auch Fallback-Inhalt.

```html
<!-- Basic audio playback -->
<audio src="AudioTest.ogg" autoplay>
  <a href="AudioTest.ogg" download="AudioTest.ogg">Download OGG audio</a>.
</audio>
```

Einzelheiten darüber, wann Autoplay funktioniert, wie Sie die Erlaubnis zur Verwendung von Autoplay erhalten und wie und wann es angemessen ist, Autoplay zu verwenden, finden Sie in unserem [Autoplay-Leitfaden](/de/docs/Web/Media/Guides/Autoplay).

### `<audio>` Element mit \<source> Element

In diesem Beispiel wird angegeben, welche Audiospur über das `src` Attribut auf einem geschachtelten `<source>` Element eingebettet werden soll, anstatt direkt auf dem `<audio>` Element. Es ist immer nützlich, den MIME-Typ der Datei im `type` Attribut anzugeben, da der Browser sofort feststellen kann, ob er diese Datei abspielen kann und keine Zeit darauf verschwendet, wenn nicht.

```html
<audio controls>
  <source src="foo.wav" type="audio/wav" />
  <a href="foo.wav" download="foo.wav">Download WAV audio</a>.
</audio>
```

### `<audio>` mit mehreren \<source> Elementen

Dieses Beispiel enthält mehrere `<source>` Elemente. Der Browser versucht, das erste Quellenelement (Opus) zu laden, wenn er es abspielen kann; falls nicht, fällt er auf das zweite (Vorbis) und schließlich auf MP3 zurück:

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
          >Fließinhalt</a
        >, Textinhalt, eingebetteter Inhalt. Wenn es ein
        <a href="#controls"><code>controls</code></a> Attribut hat: interaktiver
        Inhalt und greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Wenn das Element ein <a href="#src"><code>src</code></a>
        Attribut hat: null oder mehr {{HTMLElement("track")}} Elemente gefolgt von transparentem Inhalt, der keine
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
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebetteten Inhalt akzeptiert.</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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

  - [Mediencontainerformate (Dateitypen)](/de/docs/Web/Media/Guides/Formats/Containers)
  - [Leitfaden zu den auf dem Web verwendeten Audio-Codecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs)

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)
- {{htmlelement("source")}}
- {{htmlelement("video")}}
- [Lernbereich: HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Grundlagen der plattformübergreifenden Audiopflege](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
