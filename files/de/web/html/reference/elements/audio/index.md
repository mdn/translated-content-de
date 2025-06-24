---
title: "<audio>: Das Einbettungs-Element für Audio"
slug: Web/HTML/Reference/Elements/audio
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTMLSidebar}}

Das **`<audio>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um Audioinhalte in Dokumente einzubetten. Es kann eine oder mehrere Audioquellen enthalten, die mithilfe des `src`-Attributs oder des {{HTMLElement("source")}}-Elements dargestellt werden: Der Browser wählt die am besten geeignete Quelle aus. Es kann auch als Ziel für gestreamte Medien dienen, indem ein [`MediaStream`](/de/docs/Web/API/MediaStream) verwendet wird.

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

Das obige Beispiel zeigt die grundlegende Verwendung des `<audio>`-Elements. Ähnlich wie beim {{htmlelement("img")}}-Element fügen wir einen Pfad zu dem Medium, das wir einbetten möchten, im `src`-Attribut ein; wir können andere Attribute hinzufügen, um Informationen zu spezifizieren, z. B. ob es automatisch abgespielt und wiederholt werden soll, ob die Standard-Audiosteuerungen des Browsers angezeigt werden sollen, usw.

Der Inhalt innerhalb der öffnenden und schließenden `<audio></audio>`-Tags wird als Fallback in Browsern angezeigt, die das Element nicht unterstützen.

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `autoplay`

  - : Ein Boolesches Attribut: Wenn angegeben, wird das Audio automatisch gestartet, sobald dies möglich ist, ohne darauf zu warten, dass die gesamte Audiodatei heruntergeladen wurde.

    > [!NOTE]
    > Websites, die automatisch Audio abspielen (oder Videos mit einem Audiotrack), können für Benutzer eine unangenehme Erfahrung darstellen und sollten daher nach Möglichkeit vermieden werden. Wenn Sie dennoch Autoplay-Funktionalität bieten müssen, sollten Sie diese als Opt-in-Option gestalten (erforderlich ist, dass der Benutzer sie speziell aktiviert). Dies kann jedoch nützlich sein, wenn Medienelemente erstellt werden, deren Quelle zu einem späteren Zeitpunkt unter Benutzerkontrolle festgelegt wird. Siehe unseren [Autoplay-Leitfaden](/de/docs/Web/Media/Guides/Autoplay) für zusätzliche Informationen zur ordnungsgemäßen Verwendung von Autoplay.

- `controls`

  - : Wenn dieses Attribut vorhanden ist, bietet der Browser Steuerungen an, die es dem Benutzer ermöglichen, die Audiowiedergabe zu steuern, einschließlich Lautstärke, Suche und Pause/Fortsetzen der Wiedergabe.

- `controlslist`

  - : Das [`controlslist`](https://wicg.github.io/controls-list/explainer.html)-Attribut hilft dem Browser, die anzuzeigenden Steuerungen für das `audio`-Element auszuwählen, wann immer der Browser seine eigenen Steuerungen anzeigt (d.h. wenn das `controls`-Attribut angegeben ist).

    Die erlaubten Werte sind `nodownload`, `nofullscreen` und `noremoteplayback`.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)

  - : Dieses {{Glossary("Enumerated", "aufzählbare")}}-Attribut gibt an, ob CORS zum Abrufen der zugehörigen Audiodatei verwendet werden soll. [CORS-fähige Ressourcen](/de/docs/Web/HTML/How_to/CORS_enabled_image) können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne _verunreinigt_ zu werden. Die erlaubten Werte sind:

    - `anonymous`
      - : Sendet eine Cross-Origin-Anforderung ohne Anmeldeinformationen. Es sendet also den HTTP-Header `Origin:` ohne Cookie, X.509-Zertifikat oder Durchführung der HTTP-Basisauthentifizierung. Gibt der Server der Ursprungssite keine Anmeldeinformationen (weil der HTTP-Header `Access-Control-Allow-Origin:` nicht gesetzt ist), wird die Ressource _verunreinigt_ und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Sendet eine Cross-Origin-Anforderung mit Anmeldeinformationen. Es sendet also den HTTP-Header `Origin:` zusammen mit einem Cookie, einem Zertifikat oder der Durchführung der HTTP-Basisauthentifizierung. Gibt der Server der Ursprungssite keine Anmeldeinformationen (durch den HTTP-Header `Access-Control-Allow-Credentials:`), wird die Ressource _verunreinigt_ und ihre Nutzung eingeschränkt.

    Wenn nicht vorhanden, wird die Ressource ohne eine CORS-Anfrage abgerufen (d.h. ohne Senden des `Origin:`-Headers), was ihre unverunreinigte Nutzung in {{HTMLElement('canvas')}}-Elementen verhindert. Ist es ungültig, wird es so behandelt, als ob das aufzählbare Schlüsselwort **anonymous** verwendet wurde. Siehe [CORS-Einstellungsattribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für zusätzliche Informationen.

- `disableremoteplayback`

  - : Ein Boolesches Attribut, das verwendet wird, um die Funktionalität der Fernwiedergabe auf Geräten zu deaktivieren, die über kabelgebundene (HDMI, DVI, usw.) und drahtlose Technologien (Miracast, Chromecast, DLNA, AirPlay, usw.) angeschlossen sind. Weitere Informationen finden Sie in der vorgeschlagenen [Remote Playback API-Spezifikation](https://w3c.github.io/remote-playback/#the-disableremoteplayback-attribute).

    In Safari können Sie [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) als Fallback verwenden.

- `loop`
  - : Ein Boolesches Attribut: Wenn angegeben, springt der Audioplayer automatisch zum Anfang zurück, sobald das Ende des Audios erreicht ist.
- `muted`
  - : Ein Boolesches Attribut, das angibt, ob das Audio initial stummgeschaltet ist. Der Standardwert ist `false`.
- `preload`

  - : Dieses {{Glossary("enumerated", "aufzählbare")}} Attribut soll dem Browser einen Hinweis darauf geben, was der Autor für die beste Benutzererfahrung hält. Es kann einen der folgenden Werte haben:

    - `none`: Gibt an, dass das Audio nicht vorab geladen werden soll.
    - `metadata`: Gibt an, dass nur Audio-Metadaten (z. B. Länge) abgerufen werden.
    - `auto`: Gibt an, dass die ganze Audiodatei heruntergeladen werden kann, auch wenn nicht erwartet wird, dass der Benutzer sie verwendet.
    - _leerer String_: Ein Synonym für den `auto`-Wert.

    Der Standardwert ist je nach Browser unterschiedlich. In der Spezifikation wird empfohlen, `metadata` zu setzen.

    > [!NOTE]
    >
    > - Das `autoplay`-Attribut hat Vorrang vor `preload`. Wenn `autoplay` angegeben ist, müsste der Browser offensichtlich anfangen, das Audio für die Wiedergabe herunterzuladen.
    > - Der Browser ist nicht durch die Spezifikation gezwungen, den Wert dieses Attributs zu befolgen; es ist lediglich ein Hinweis.

- `src`
  - : Die URL des einzubettenden Audios. Dies unterliegt den [HTTP-Zugriffssteuerungen](/de/docs/Web/HTTP/Guides/CORS). Dies ist optional; Sie können stattdessen das {{htmlelement("source")}}-Element innerhalb des Audio-Blocks verwenden, um die einzubettende Audioquelle anzugeben.

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
        Der Eingabepuffer eines [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode)
        ist bereit für die Verarbeitung.
      </td>
    </tr>
    <tr>
      <td>
        [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)
      </td>
      <td>
        Der Browser das Medium abspielen kann, jedoch schätzt, dass nicht genug Daten
        geladen wurden, um das Medium bis zum Ende zu spielen, ohne für
        weiteres Puffern von Inhalten anhalten zu müssen.
      </td>
    </tr>
    <tr>
      <td>
        [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
      </td>
      <td>
        Der Browser schätzt, dass es das Medium bis zum Ende abspielen kann,
        ohne für das Puffern von Inhalten anzuhalten.
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
      <td>Das <code>duration</code>-Attribut aktualisiert wurde.</td>
    </tr>
    <tr>
      <td>
        [`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)
      </td>
      <td>
        Das Medium leer geworden ist; zum Beispiel wird dieses Ereignis gesendet, wenn das Medium
        bereits geladen (oder teilweise geladen) war und die
        [`HTMLMediaElement.load`](/de/docs/Web/API/HTMLMediaElement/load)-Methode aufgerufen wird,
        um es erneut zu laden.
      </td>
    </tr>
    <tr>
      <td>
        [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)
      </td>
      <td>Die Wiedergabe gestoppt wurde, weil das Ende des Mediums erreicht wurde.</td>
    </tr>
    <tr>
      <td>
        [`loadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event)
      </td>
      <td>Das erste Bild des Mediums vollständig geladen wurde.</td>
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
      <td>Ausgelöst, wenn der Browser begonnen hat, die Ressource zu laden.</td>
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
        Die Wiedergabe bereit ist, zu starten, nachdem sie pausiert wurde oder
        aufgrund von Datenmangel verzögert wurde.
      </td>
    </tr>
    <tr>
      <td>
        [`ratechange`](/de/docs/Web/API/HTMLMediaElement/ratechange_event)
      </td>
      <td>Die Abspielrate geändert wurde.</td>
    </tr>
    <tr>
      <td>
        [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event)
      </td>
      <td>Eine <em>Such</em>-Operation abgeschlossen wurde.</td>
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
        Der Benutzeragent versucht, Mediendaten abzurufen, aber die Daten kommen
        unerwartet nicht weiter.
      </td>
    </tr>
    <tr>
      <td>
        [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event)
      </td>
      <td>Das Laden von Mediadaten ausgesetzt wurde.</td>
    </tr>
    <tr>
      <td>
        [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)
      </td>
      <td>
        Die durch das <code>currentTime</code>-Attribut angegebene Zeit
        aktualisiert wurde.
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
      <td>Die Wiedergabe gestoppt wurde, weil ein vorübergehender Datenmangel vorliegt</td>
    </tr>
  </tbody>
</table>

## Verwendungshinweise

Browser unterstützen nicht alle dieselben [Dateitypen](/de/docs/Web/Media/Guides/Formats/Containers) und [Audio-Codecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs); Sie können mehrere Quellen innerhalb verschachtelter {{htmlelement("source")}}-Elemente bereitstellen, und der Browser wird dann die erste verwenden, die er versteht:

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

Die Audioquelle kann auf eine gültige [URL](/de/docs/Web/URI) gesetzt werden, einschließlich HTTP(S)-URLs und [Data-URLs](/de/docs/Web/URI/Reference/Schemes/data). Bei Verwendung von HTTP(S)-URLs beachten Sie, dass das Caching-Verhalten des Browsers beeinflusst, wie oft die Datei vom Server angefordert wird. Data-URLs betten die Audiodaten direkt in das HTML ein, was für kleine Audiodateien nützlich sein kann, jedoch nicht für größere Dateien empfohlen wird, da dies die Dateigröße des HTML erhöht.

Bei Verwendung von {{htmlelement("source")}}-Elementen versucht der Browser, jede Quelle nacheinander zu laden. Wenn eine Quelle fehlschlägt (z. B. aufgrund einer ungültigen URL oder eines nicht unterstützten Formats), wird die nächste Quelle versucht, und so weiter. Ein `error`-Ereignis wird auf dem `<audio>`-Element ausgelöst, nachdem alle Quellen fehlgeschlagen sind; `error`-Ereignisse werden nicht bei jedem einzelnen `<source>`-Element ausgelöst.

Sie können auch die [Web Audio API](/de/docs/Web/API/Web_Audio_API) verwenden, um direkt Audio-Streams aus JavaScript-Code zu generieren und zu manipulieren, anstatt bestehende Audiodateien zu streamen. Sie können das [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) in JavaScript auf ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objet setzen. Dies wird häufig für Live-Audio-Streams oder Echtzeit-Audioverarbeitung verwendet.

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

Beachten Sie, dass `MediaStream`-Quellen Einschränkungen haben: Sie können nicht durchsucht werden und unterstützen nur einen begrenzten Satz von Codecs.

Wir bieten einen substanziellen und gründlichen [Leitfaden zu Media-Dateitypen](/de/docs/Web/Media/Guides/Formats) und den [Audio-Codecs, die in ihnen verwendet werden können](/de/docs/Web/Media/Guides/Formats/Audio_codecs). Ebenfalls verfügbar ist [ein Leitfaden zu den unterstützten Codecs für Video](/de/docs/Web/Media/Guides/Formats/Video_codecs).

Weitere Verwendungshinweise:

- Wenn Sie das `controls`-Attribut nicht angeben, enthält der Audioplayer nicht die Standardsteuerungen des Browsers. Sie können jedoch eigene benutzerdefinierte Steuerungen mit JavaScript und der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API erstellen.
- Um eine präzise Steuerung über Ihre Audioinhalte zu ermöglichen, feuern `HTMLMediaElement`s viele verschiedene [Ereignisse](/de/docs/Web/API/HTMLMediaElement#events) ab. Dies bietet auch eine Möglichkeit, den Abrufprozess des Audios zu überwachen, um Fehler zu erkennen oder festzustellen, wenn genug verfügbar ist, um mit dem Abspielen zu beginnen oder es zu manipulieren.
- `<audio>`-Elemente können keine Untertitel oder Untertitel in derselben Weise wie `<video>`-Elemente haben. Siehe [WebVTT and Audio](https://www.iandevlin.com/blog/2015/12/html5/webvtt-and-audio/) von Ian Devlin für nützliche Informationen und Workarounds.
- Um den Fallback-Inhalt in Browsern zu testen, die das Element unterstützen, können Sie `<audio>` durch ein nicht vorhandenes Element wie `<notanaudio>` ersetzen.

Eine gute allgemeine Informationsquelle zur Verwendung von HTML `<audio>` ist das [HTML-Video- und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)-Einsteiger-Tutorial.

### Styling mit CSS

Das `<audio>`-Element hat keine intrinsische visuelle Ausgabe, außer das `controls`-Attribut ist angegeben, in welchem Fall die Standardsteuerungen des Browsers angezeigt werden.

Die Standardsteuerungen haben standardmäßig einen {{cssxref("display")}}-Wert von `inline`, und es ist oft eine gute Idee, den Wert auf `block` zu setzen, um die Steuerung über die Positionierung und das Layout zu verbessern, es sei denn, Sie möchten, dass es innerhalb eines Textblocks oder ähnlichem sitzt.

Sie können die Standardsteuerungen mit Eigenschaften stylen, die den Block als einzelne Einheit beeinflussen, sodass Sie ihm z. B. einen {{cssxref("border")}} und {{cssxref("border-radius")}}, {{cssxref("padding")}}, {{cssxref("margin")}} usw. geben können. Sie können jedoch nicht die einzelnen Komponenten im Audioplayer stylen (z. B. die Schaltflächengröße oder Symbole ändern, die Schriftart ändern usw.), und die Steuerungen sind in den verschiedenen Browsern unterschiedlich.

Um ein konsistentes Aussehen und Verhalten über Browser hinweg zu erzielen, müssen Sie benutzerdefinierte Steuerungen erstellen; diese können in beliebiger Weise markiert und gestylt werden, und dann kann JavaScript zusammen mit der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API verwendet werden, um ihre Funktionalität zu verdrahten.

[Grundlagen des Videoplayer-Stylings](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics) bietet einige nützliche Styling-Techniken — es ist im Kontext von `<video>` geschrieben, aber vieles davon ist ebenso auf `<audio>` anwendbar.

### Erkennung von Hinzufügung und Entfernung von Tracks

Sie können erkennen, wann Tracks zu einem `<audio>`-Element hinzugefügt oder entfernt werden, indem Sie die [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event)- und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event)-Ereignisse verwenden. Diese Ereignisse werden jedoch nicht direkt an das `<audio>`-Element selbst gesendet. Stattdessen werden sie an das Tracklistenobjekt innerhalb des `<audio>`-Elements gesendet, das dem Typ des Tracks entspricht, der dem Element hinzugefügt wurde:

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die alle Audio-Tracks des Medienelements enthält. Sie können einen Listener für `addtrack` zu diesem Objekt hinzufügen, um benachrichtigt zu werden, wenn neue Audio-Tracks zum Element hinzugefügt werden.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)
  - : Fügt einen `addtrack`-Listener zu diesem [`VideoTrackList`](/de/docs/Web/API/VideoTrackList)-Objekt hinzu, um informiert zu werden, wenn Video-Tracks zum Element hinzugefügt werden.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
  - : Fügt einen `addtrack`-Ereignis-Listener zu diesem [`TextTrackList`](/de/docs/Web/API/TextTrackList) hinzu, um benachrichtigt zu werden, wenn neue Text-Tracks zum Element hinzugefügt werden.

> [!NOTE]
> Obwohl es ein `<audio>`-Element ist, hat es immer noch Video- und Text-Tracklisten und kann tatsächlich verwendet werden, um Video darzustellen, obwohl die Benutzeroberflächenimplikationen seltsam sein können.

Zum Beispiel, um zu erkennen, wann Audio-Tracks zu einem `<audio>`-Element hinzugefügt oder entfernt werden, können Sie Code wie diesen verwenden:

```js
const elem = document.querySelector("audio");

elem.audioTrackList.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTrackList.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Dieser Code überwacht, wann Audio-Tracks hinzugefügt oder entfernt werden, und ruft eine hypothetische Funktion auf einem Track-Editor auf, um den Track in die Liste der verfügbaren Tracks des Editors aufzunehmen und zu entfernen.

Sie können auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um auf die [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event)- und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event)-Ereignisse zu hören.

## Barrierefreiheit

Audio mit gesprochener Dialogführung sollte sowohl Untertitel als auch Transkripte bereitstellen, die seinen Inhalt genau beschreiben. Untertitel, die mithilfe von [WebVTT](/de/docs/Web/API/WebVTT_API) angegeben werden, ermöglichen es Menschen mit Hörbeeinträchtigungen, den Inhalt einer Audioaufnahme während der Wiedergabe zu verstehen, während Transkripte denen, die mehr Zeit benötigen, die Möglichkeit bieten, den Inhalt der Aufnahme in einem Tempo und Format zu überprüfen, das ihnen angenehm ist.

Wenn automatische Untertitelungsdienste verwendet werden, ist es wichtig, den erzeugten Inhalt zu überprüfen, um sicherzustellen, dass er die Quell-Audio korrekt wiedergibt.

Das `<audio>`-Element unterstützt WebVTT nicht direkt. Sie müssen eine Bibliothek oder ein Framework verwenden, das diese Funktionalität bietet, oder den Code selbst schreiben, um Untertitel anzuzeigen. Eine Möglichkeit besteht darin, Ihr Audio mit einem {{HTMLElement("video")}}-Element abzuspielen, welches WebVTT unterstützt.

Zusätzlich zu gesprochener Dialogführung sollten Untertitel und Transkripte auch Musik und Soundeffekte identifizieren, die wichtige Informationen übermitteln. Dies umfasst Emotion und Tonfall. Zum Beispiel, im WebVTT unten, beachten Sie die Verwendung von eckigen Klammern, um dem Betrachter Ton und emotionale Einsicht zu geben; dies kann helfen, die Stimmung zu etablieren, die sonst durch Musik, nonverbale Geräusche und wichtige Soundeffekte bereitgestellt wird.

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

Es ist auch eine gute Praxis, einige Inhalte (wie den direkten Download-Link) als Fallback für Benutzer anzubieten, die einen Browser verwenden, in dem das `<audio>`-Element nicht unterstützt wird:

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
- [MDN Verständnis von WCAG, Richtlinie 1.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [Verständnis von Erfolgskriterium 1.2.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Verständnis von Erfolgskriterium 1.2.2 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel zeigt die grundlegende Verwendung des `<audio>`-Elements, um eine OGG-Datei abzuspielen. Es wird aufgrund des `autoplay`-Attributs automatisch abgespielt—sofern die Seite die Berechtigung dazu hat—und enthält auch Fallback-Inhalte.

```html
<!-- Basic audio playback -->
<audio src="AudioTest.ogg" autoplay>
  <a href="AudioTest.ogg" download="AudioTest.ogg">Download OGG audio</a>.
</audio>
```

Für Details dazu, wann Autoplay funktioniert, wie Sie die Berechtigung zur Verwendung von Autoplay erhalten und wie und wann es angemessen ist, Autoplay zu verwenden, siehe unseren [Autoplay-Leitfaden](/de/docs/Web/Media/Guides/Autoplay).

### `<audio>`-Element mit \<source>-Element

Dieses Beispiel gibt an, welcher Audiotrack mit dem `src`-Attribut auf einem verschachtelten `<source>`-Element eingebettet werden soll, anstatt direkt auf dem `<audio>`-Element. Es ist immer sinnvoll, den MIME-Type der Datei innerhalb des `type`-Attributs anzugeben, da der Browser sofort feststellen kann, ob er diese Datei abspielen kann und keine Zeit damit vergeudet, wenn nicht.

```html
<audio controls>
  <source src="foo.wav" type="audio/wav" />
  <a href="foo.wav" download="foo.wav">Download WAV audio</a>.
</audio>
```

### `<audio>` mit mehreren \<source>-Elementen

Dieses Beispiel enthält mehrere `<source>`-Elemente. Der Browser versucht, das erste Quell-Element (Opus) zu laden, wenn es abgespielt werden kann; falls nicht, wird das zweite (Vorbis) verwendet und schließlich MP3:

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
          >Fließendes Inhalt</a
        >, phrasing content, eingebetteter Inhalt. Wenn es ein
        <a href="#controls"><code>controls</code></a>-Attribut hat: interaktives
        und spürbares Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Wenn das Element ein <a href="#src"><code>src</code></a>
        Attribut hat: null oder mehr {{HTMLElement("track")}}-Elemente
        gefolgt von transparentem Inhalt, der kein
        <code>&lt;audio&gt;</code> oder {{HTMLElement("video")}}
        Medienelemente enthält.<br />Andernfalls: null oder mehr
        {{HTMLElement("source")}}-Elemente gefolgt von null oder mehr
        {{HTMLElement("track")}}-Elementen gefolgt von transparentem Inhalt, der kein
        <code>&lt;audio&gt;</code> oder {{HTMLElement("video")}}
        Medienelemente enthält.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der öffnende als auch der schließende Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebettetes Inhalt akzeptiert.</td>
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
      <th scope="row">Erlaubte ARIA-Rollen</th>
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

- [Web-Medientechnologien](/de/docs/Web/Media)

  - [Mediencontainerformate (Dateitypen)](/de/docs/Web/Media/Guides/Formats/Containers)
  - [Leitfaden zu Audio-Codecs, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats/Audio_codecs)

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)
- {{htmlelement("source")}}
- {{htmlelement("video")}}
- [Lernbereich: HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Grundlagen von plattformübergreifendem Audio](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
