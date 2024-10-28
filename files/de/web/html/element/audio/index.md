---
title: "<audio>: Das Audio-Einbettungselement"
slug: Web/HTML/Element/audio
l10n:
  sourceCommit: 8261aa44358058ef63c538a329313a50417581bd
---

{{HTMLSidebar}}

Das **`<audio>`**-Element [HTML](/de/docs/Web/HTML) wird verwendet, um Audioinhalte in Dokumente einzubetten. Es kann eine oder mehrere Audioquellen enthalten, die entweder über das `src`-Attribut oder das {{HTMLElement("source")}}-Element angegeben sind: der Browser wählt die passendste aus. Es kann auch als Ziel für gestreamte Medien dienen, indem ein [`MediaStream`](/de/docs/Web/API/MediaStream) verwendet wird.

{{EmbedInteractiveExample("pages/tabbed/audio.html","tabbed-standard")}}

Das obige Beispiel zeigt eine einfache Nutzung des `<audio>`-Elements. Ähnlich dem {{htmlelement("img")}}-Element geben wir einen Pfad zur einzubettenden Mediendatei im `src`-Attribut an; wir können andere Attribute hinzufügen, um Informationen anzugeben, beispielsweise ob es automatisch wiedergegeben und wiederholt werden soll oder ob die Standard-Audiosteuerungen des Browsers angezeigt werden sollen usw.

Der Inhalt zwischen den öffnenden und schließenden `<audio></audio>`-Tags wird als Fallback in Browsern angezeigt, die das Element nicht unterstützen.

## Attribute

Zu den Attributen dieses Elements gehören die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `autoplay`

  - : Ein Boolean-Attribut: Wenn angegeben, beginnt die Wiedergabe des Audios automatisch, sobald es möglich ist, ohne darauf zu warten, dass die gesamte Audiodatei heruntergeladen wird.

    > [!NOTE]
    > Websites, die automatisch Audio (oder Videos mit einer Tonspur) abspielen, können für Benutzer eine unangenehme Erfahrung sein und sollten nach Möglichkeit vermieden werden. Wenn Sie eine Autoplay-Funktionalität anbieten müssen, sollte diese auf Opt-in-Basis erfolgen (d. h. der Benutzer muss sie speziell aktivieren). Dies kann jedoch nützlich sein, wenn Medienelemente erstellt werden, deren Quelle zu einem späteren Zeitpunkt unter Benutzerkontrolle festgelegt wird. Siehe unser [Autoplay-Leitfaden](/de/docs/Web/Media/Autoplay_guide) für zusätzliche Informationen über die richtige Verwendung von Autoplay.

- `controls`

  - : Wenn dieses Attribut vorhanden ist, bietet der Browser Steuerelemente an, mit denen der Benutzer die Audiowiedergabe steuern kann, einschließlich Lautstärke, Suche und Pause/Fortsetzen der Wiedergabe.

- `controlslist`

  - : Das [`controlslist`](https://wicg.github.io/controls-list/explainer.html) Attribut hilft dem Browser, auszuwählen, welche Steuerelemente für das `audio`-Element angezeigt werden sollen, wann immer der Browser seine eigenen Steuerelemente anzeigt (d. h. wenn das `controls`-Attribut angegeben ist).

    Die erlaubten Werte sind `nodownload`, `nofullscreen` und `noremoteplayback`.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Dieses {{Glossary("Enumerated", "enumerierte")}} Attribut gibt an, ob CORS verwendet werden soll, um die zugehörige Audiodatei abzurufen. [CORS-fähige Ressourcen](/de/docs/Web/HTML/CORS_enabled_image) können im {{HTMLElement("canvas")}}-Element verwendet werden, ohne _verunreinigt_ zu werden. Die zulässigen Werte sind:

    - `anonymous`
      - : Sendet eine cross-origin Anfrage ohne Anmeldeinformationen. Das bedeutet, dass der `Origin:`-HTTP-Header ohne Cookie, X.509-Zertifikat oder HTTP-Basic-Authentifizierung gesendet wird. Wenn der Server keine Anmeldeinformationen an die Ursprungsseite gibt (indem er den `Access-Control-Allow-Origin:`-HTTP-Header nicht festlegt), wird die Ressource _verunreinigt_ und ihre Verwendung eingeschränkt.
    - `use-credentials`
      - : Sendet eine cross-origin Anfrage mit Anmeldeinformationen. Das bedeutet, dass der `Origin:`-HTTP-Header mit einem Cookie, einem Zertifikat oder HTTP-Basic-Authentifizierung gesendet wird. Wenn der Server keine Anmeldeinformationen an die Ursprungsseite gibt (durch `Access-Control-Allow-Credentials:`-HTTP-Header), wird die Ressource _verunreinigt_ und ihre Verwendung eingeschränkt.

    Wenn nicht vorhanden, wird die Ressource ohne eine CORS-Anfrage abgerufen (d. h. ohne den `Origin:`-HTTP-Header zu senden), was ihre nicht verunreinigte Verwendung in {{HTMLElement('canvas')}}-Elementen verhindert. Bei Ungültigkeit wird sie so behandelt, als ob das enumerierte Schlüsselwort **anonymous** verwendet würde. Siehe [CORS-Attribut-Einstellungen](/de/docs/Web/HTML/Attributes/crossorigin) für zusätzliche Informationen.

- `disableremoteplayback`

  - : Ein Boolean-Attribut, das die Fähigkeit zur Fernwiedergabe auf Geräten deaktiviert, die über drahtgebundene (HDMI, DVI usw.) und drahtlose Technologien (Miracast, Chromecast, DLNA, AirPlay usw.) verbunden sind. Siehe [diese vorgeschlagene Spezifikation](https://www.w3.org/TR/remote-playback/#the-disableremoteplayback-attribute) für weitere Informationen.

    In Safari können Sie [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) als Fallback verwenden.

- `loop`
  - : Ein Boolean-Attribut: Wenn angegeben, wird der Audio-Player beim Erreichen des Endes des Audios automatisch zum Anfang zurückspringen.
- `muted`
  - : Ein Boolean-Attribut, das angibt, ob das Audio zunächst stummgeschaltet wird. Sein Standardwert ist `false`.
- `preload`

  - : Dieses {{Glossary("enumerated", "enumerierte")}} Attribut soll dem Browser einen Hinweis darauf geben, was der Autor für die beste Benutzererfahrung hält. Es kann einen der folgenden Werte haben:

    - `none`: Gibt an, dass das Audio nicht vorab geladen werden soll.
    - `metadata`: Gibt an, dass nur Audiodaten-Metadaten (z.B. Länge) abgerufen werden.
    - `auto`: Gibt an, dass die gesamte Audiodatei heruntergeladen werden kann, auch wenn der Benutzer sie nicht voraussichtlich verwenden wird.
    - _leerer String_: Ein Synonym für den Wert `auto`.

    Der Standardwert ist für jeden Browser unterschiedlich. Die Spezifikation empfiehlt, es auf `metadata` zu setzen.

    > [!NOTE]
    >
    > - Das `autoplay`-Attribut hat Vorrang vor `preload`. Wenn `autoplay` angegeben ist, müsste der Browser das Audio für die Wiedergabe herunterladen.
    > - Der Browser ist durch die Spezifikation nicht gezwungen, den Wert dieses Attributs zu befolgen; es ist nur ein Hinweis.

- `src`
  - : Die URL des einzubettenden Audios. Dies unterliegt den [HTTP-Zugriffskontrollen](/de/docs/Web/HTTP/CORS). Dies ist optional; Sie können stattdessen das {{htmlelement("source")}}-Element innerhalb des Audio-Blocks verwenden, um das einzubettende Audio anzugeben.

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
        Der Browser kann das Medium abspielen, schätzt jedoch, dass nicht genügend Daten geladen wurden, um das Medium bis zu seinem Ende abzuspielen, ohne für weiteres Puffern des Inhalts stoppen zu müssen.
      </td>
    </tr>
    <tr>
      <td>
        [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
      </td>
      <td>
        Der Browser schätzt, dass er das Medium bis zu seinem Ende abspielen kann, ohne für das Puffern des Inhalts stoppen zu müssen.
      </td>
    </tr>
    <tr>
      <td>[`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)</td>
      <td>
        Die Wiedergabe eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) ist beendet.
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
        Das Medium ist leer geworden; zum Beispiel wird dieses Ereignis gesendet, wenn das Medium bereits geladen (oder teilweise geladen) wurde, und die [`HTMLMediaElement.load`](/de/docs/Web/API/HTMLMediaElement/load)-Methode aufgerufen wird, um es neu zu laden.
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
      <td>Der erste Frame des Mediums wurde geladen.</td>
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
        Die Wiedergabe ist bereit zu starten, nachdem sie pausiert oder verzögert wurde aufgrund von Datenmangel.
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
      <td>Eine <em>Suchoperation</em> wurde abgeschlossen.</td>
    </tr>
    <tr>
      <td>
        [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
      </td>
      <td>Eine <em>Suchoperation</em> hat begonnen.</td>
    </tr>
    <tr>
      <td>
        [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
      </td>
      <td>
        Der Benutzeragent versucht, Mediadaten abzurufen, aber die Daten kommen unerwartet nicht.
      </td>
    </tr>
    <tr>
      <td>
        [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event)
      </td>
      <td>Laden von Mediadaten wurde ausgesetzt.</td>
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
      <td>Die Wiedergabe wurde wegen eines vorübergehenden Datenmangels gestoppt.</td>
    </tr>
  </tbody>
</table>

## Nutzungshinweise

Browser unterstützen nicht alle die gleichen [Dateitypen](/de/docs/Web/Media/Formats/Containers) und [Audiocodecs](/de/docs/Web/Media/Formats/Audio_codecs); Sie können mehrere Quellen innerhalb geschachtelter {{htmlelement("source")}}-Elemente bereitstellen, und der Browser wird dann die erste verwenden, die er versteht:

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

Die Audioquelle kann auf eine gültige [URL](/de/docs/Web/URI) gesetzt werden, einschließlich HTTP(S)-URLs und [Data-URLs](/de/docs/Web/URI/Schemes/data). Bei der Verwendung von HTTP(S)-URLs sei darauf aufmerksam gemacht, dass das Caching-Verhalten des Browsers beeinflusst, wie oft die Datei vom Server angefordert wird. Data-URLs betten die Audiodaten direkt in das HTML ein, was für kleine Audiodateien nützlich sein kann, aber für größere Dateien nicht empfohlen wird, da es die Dateigröße des HTML erhöht.

Sie können auch die [Web Audio API](/de/docs/Web/API/Web_Audio_API) verwenden, um Audiostreams direkt aus JavaScript-Code zu erzeugen und zu manipulieren, anstatt vorbestehende Audiodateien zu streamen. Sie können das [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) in JavaScript auf ein {{jsxref("MediaStream")}}-Objekt setzen. Dies wird häufig für Live-Audiostreams oder Echtzeit-Audiobearbeitung verwendet.

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

Beachten Sie, dass `MediaStream`-Quellen Einschränkungen haben: Sie sind nicht durchsuchbar und unterstützen nur einen begrenzten Satz an Codecs.

Wir bieten einen substanziellen und gründlichen [Leitfaden zu Mediadateitypen](/de/docs/Web/Media/Formats) und den [Audiocodecs, die innerhalb dieser verwendet werden können](/de/docs/Web/Media/Formats/Audio_codecs). Auch verfügbar ist [ein Leitfaden zu den für Video unterstützten Codecs](/de/docs/Web/Media/Formats/Video_codecs).

Weitere Nutzungshinweise:

- Wenn Sie das `controls`-Attribut nicht angeben, enthält der Audio-Player nicht die Standardsteuerungen des Browsers. Sie können jedoch Ihre eigenen benutzerdefinierten Steuerelemente mit JavaScript und der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API erstellen.
- Um eine genaue Kontrolle über Ihre Audioinhalte zu ermöglichen, feuern `HTMLMediaElement`s viele verschiedene [Ereignisse](/de/docs/Web/API/HTMLMediaElement#events) ab. Dies bietet auch eine Möglichkeit, den Abrufprozess des Audio zu überwachen, damit Sie auf Fehler achten oder erkennen können, wann genügend vorhanden ist, um zu beginnen, es abzuspielen oder es zu manipulieren.
- `<audio>`-Elemente können keine Untertitel oder Beschriftungen zugeordnet haben, so wie es `<video>`-Elemente können. Siehe [WebVTT und Audio](https://www.iandevlin.com/blog/2015/12/html5/webvtt-and-audio/) von Ian Devlin für einige nützliche Informationen und Workarounds.
- Um den Fallback-Inhalt in Browsern zu testen, die das Element unterstützen, können Sie `<audio>` durch ein nicht existierendes Element wie `<notanaudio>` ersetzen.

Eine gute allgemeine Informationsquelle zur Verwendung von HTML `<audio>` ist das [Video- und Audiocontent](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) Anfänger-Tutorial.

### Styling mit CSS

Das `<audio>`-Element hat keine eigene visuelle Ausgabe, es sei denn, das `controls`-Attribut ist angegeben, in diesem Fall werden die Standardsteuerungen des Browsers angezeigt.

Die Standardsteuerungen haben einen {{cssxref("display")}}-Wert von `inline` standardmäßig, und es ist oft eine gute Idee, den Wert auf `block` zu setzen, um die Kontrolle über Positionierung und Layout zu verbessern, es sei denn, Sie möchten, dass es innerhalb eines Textblocks oder ähnliches sitzt.

Sie können die Standardsteuerungen mit Eigenschaften stylen, die den Block als eine Einheit beeinflussen, so dass Sie ihm zum Beispiel {{cssxref("border")}} und {{cssxref("border-radius")}}, {{cssxref("padding")}}, {{cssxref("margin")}} etc. geben können. Sie können jedoch nicht die einzelnen Komponenten innerhalb des Audio-Players stylen (z.B. die Größe der Tasten ändern oder Icons ändern, die Schriftart ändern etc.), und die Steuerungen unterscheiden sich in den verschiedenen Browsern.

Um ein konsistentes Aussehen und Gefühl über Browser hinweg zu erzielen, müssen Sie benutzerdefinierte Steuerelemente erstellen; diese können in beliebiger Weise markiert und gestylt werden, und dann kann JavaScript zusammen mit der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API verwendet werden, um deren Funktionalität zu verbinden.

[Grundlagen des Videoplayer-Stylings](/de/docs/Web/Media/Audio_and_video_delivery/Video_player_styling_basics) bietet einige nützliche Stylingtechniken – er ist im Kontext von `<video>` geschrieben, aber vieles davon ist gleichermaßen auf `<audio>` anwendbar.

### Erkennung von Hinzufügung und Entfernung von Tracks

Sie können erkennen, wann Tracks zu einem `<audio>`-Element hinzugefügt oder daraus entfernt werden, indem Sie auf die [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event)- und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event)-Ereignisse achten. Diese Ereignisse werden jedoch nicht direkt an das `<audio>`-Element selbst gesendet. Stattdessen werden sie an das Tracklist-Objekt innerhalb des `<audio>`-Elements gesendet, das zum Typ des hinzugefügten Tracks im Element gehört:

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die alle Audiotracks des Media-Elements enthält. Sie können einen Listener für `addtrack` zu diesem Objekt hinzufügen, um benachrichtigt zu werden, wenn neue Audio-Tracks zum Element hinzugefügt werden.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)
  - : Fügen Sie einen `addtrack` Listener zu diesem [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) Objekt hinzu, um informiert zu werden, wenn Video-Tracks zum Element hinzugefügt werden.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
  - : Fügen Sie einen `addtrack`-Ereignislistener zu dieser [`TextTrackList`](/de/docs/Web/API/TextTrackList) hinzu, um benachrichtigt zu werden, wenn neue Texttracks zum Element hinzugefügt werden.

> [!NOTE]
> Auch wenn es sich um ein `<audio>`-Element handelt, hat es dennoch Video- und Text-Tracklisten und kann tatsächlich zum Präsentieren von Videos verwendet werden, obwohl die Benutzeroberflächenimplikationen seltsam sein können.

Zum Beispiel können Sie Code wie diesen verwenden, um zu erkennen, wann Audiotracks zu einem `<audio>`-Element hinzugefügt oder daraus entfernt werden:

```js
const elem = document.querySelector("audio");

elem.audioTrackList.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTrackList.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Dieser Code überwacht Audio-Tracks, die zum oder vom Element hinzugefügt oder daraus entfernt werden, und ruft eine hypothetische Funktion in einem Track-Editor auf, um den Track der Liste der verfügbaren Tracks des Editors hinzuzufügen oder daraus zu entfernen.

Sie können auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um auf die [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event)- und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event)-Ereignisse zu hören.

## Barrierefreiheit

Audio mit gesprochener Dialog sollte sowohl Untertitel als auch Transkriptionen bereitstellen, die genau seinen Inhalt beschreiben. Untertitel, die mit [WebVTT](/de/docs/Web/API/WebVTT_API) spezifiziert sind, ermöglichen Menschen mit Hörbeeinträchtigungen, den Inhalt einer Audioaufnahme während der Aufnahme zu verstehen, während Transkriptionen Menschen, die mehr Zeit benötigen, ermöglichen, den Inhalt der Aufnahme in einem für sie angenehmen Tempo und Format zu überprüfen.

Wenn automatische Untertitelungsdienste verwendet werden, ist es wichtig, den generierten Inhalt zu überprüfen, um sicherzustellen, dass er das Originalaudio korrekt wiedergibt.

Das `<audio>`-Element unterstützt WebVTT nicht direkt. Sie müssen eine Bibliothek oder ein Framework finden, das die Funktionalität für Sie bereitstellt, oder den Code zum Anzeigen der Untertitel selbst schreiben. Eine Option ist, Ihre Audio mit einem {{HTMLElement("video")}}-Element abzuspielen, das WebVTT unterstützt.

Zusätzlich zu gesprochenem Dialog sollten Untertitel und Transkriptionen auch Musik und Soundeffekte identifizieren, die wichtige Informationen mitteilen. Dies schließt Emotion und Ton ein. Zum Beispiel wird im folgenden WebVTT die Verwendung von eckigen Klammern zur Bereitstellung von Ton und emotionalem Einblick für den Betrachter bemerkt; dies kann helfen, die Stimmung zu schaffen, die ansonsten durch Musik, nonverbale Geräusche und wichtige Soundeffekte bereitgestellt werden, und so weiter.

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

Es ist auch eine gute Praxis, einigen Inhalt (wie den direkten Downloadlink) als Fallback für Benutzer bereitzustellen, die einen Browser verwenden, in dem das `<audio>`-Element nicht unterstützt wird:

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
- [MDN Verständnis von WCAG, Richtlinie 1.2 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [Verständnis von Erfolgskriterium 1.2.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Verständnis von Erfolgskriterium 1.2.2 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel zeigt eine einfache Verwendung des `<audio>`-Elements, um eine OGG-Datei abzuspielen. Es wird aufgrund des `autoplay`-Attributs automatisch abgespielt – wenn die Seite die Erlaubnis dazu hat – und enthält auch Fallback-Inhalte.

```html
<!-- Simple audio playback -->
<audio src="AudioTest.ogg" autoplay>
  <a href="AudioTest.ogg" download="AudioTest.ogg">Download OGG audio</a>.
</audio>
```

Für Details, wann Autoplay funktioniert, wie man Erlaubnis zur Verwendung von Autoplay erhält und wie und wann es angemessen ist, Autoplay zu verwenden, siehe unseren [Autoplay-Leitfaden](/de/docs/Web/Media/Autoplay_guide).

### `<audio>`-Element mit \<source>-Element

Dieses Beispiel gibt an, welcher Audiotrack eingebettet werden soll, indem das `src`-Attribut auf einem verschachtelten `<source>`-Element anstelle direkt auf dem `<audio>`-Element verwendet wird. Es ist immer nützlich, den MIME-Typ der Datei innerhalb des `type`-Attributs anzugeben, da der Browser sofort erkennen kann, ob er diese Datei abspielen kann oder nicht und keine Zeit darauf verschwendet, wenn nicht.

```html
<audio controls>
  <source src="foo.wav" type="audio/wav" />
  <a href="foo.wav" download="foo.wav">Download WAV audio</a>.
</audio>
```

### `<audio>` mit mehreren \<source>-Elementen

Dieses Beispiel enthält mehrere `<source>`-Elemente. Der Browser versucht, das erste Quell-Element (Opus) zu laden, wenn er es abspielen kann; wenn nicht, fällt er auf das zweite (Vorbis) zurück und schließlich auf MP3:

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
          >Fließender Inhalt</a
        >, phrasierter Inhalt, eingebetteter Inhalt. Wenn das
        <a href="#controls"><code>controls</code></a>-Attribut vorhanden ist: interaktiver Inhalt und greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Wenn das Element ein <a href="#src"><code>src</code></a>-Attribut hat: null oder mehr {{HTMLElement("track")}}-Elemente gefolgt von transparentem Inhalt, der kein <code>&lt;audio&gt;</code> oder {{HTMLElement("video")}}-Medienelemente enthält.<br />Ansonsten: null oder mehr {{HTMLElement("source")}}-Elemente gefolgt von null oder mehr {{HTMLElement("track")}}-Elementen gefolgt von transparentem Inhalt, der kein <code>&lt;audio&gt;</code> oder {{HTMLElement("video")}}-Medienelemente enthält.
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

- [Webmedien-Technologien](/de/docs/Web/Media)

  - [Mediencontainerformate (Dateitypen)](/de/docs/Web/Media/Formats/Containers)
  - [Leitfaden zu Audiocodecs, die im Web verwendet werden](/de/docs/Web/Media/Formats/Audio_codecs)

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)
- {{htmlelement("source")}}
- {{htmlelement("video")}}
- [Lernbereich: Video- und Audiocontent](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [Cross-Browser Audio Grundlagen](/de/docs/Web/Media/Audio_and_video_delivery/Cross-browser_audio_basics)
