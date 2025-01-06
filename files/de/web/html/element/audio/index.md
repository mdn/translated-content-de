---
title: "<audio>: Das Einbetten von Audio-Elementen"
slug: Web/HTML/Element/audio
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

Das **`<audio>`**-[HTML](/de/docs/Web/HTML) Element wird verwendet, um Klanginhalte in Dokumenten einzubetten. Es kann eine oder mehrere Audioquellen enthalten, die über das `src`-Attribut oder das {{HTMLElement("source")}}-Element dargestellt werden: Der Browser wählt die geeignetste aus. Es kann auch als Ziel für gestreamte Medien dienen, indem ein [`MediaStream`](/de/docs/Web/API/MediaStream) verwendet wird.

{{EmbedInteractiveExample("pages/tabbed/audio.html","tabbed-standard")}}

Das obige Beispiel zeigt die grundlegende Verwendung des `<audio>`-Elements. Ähnlich wie beim {{htmlelement("img")}}-Element beinhalten wir einen Pfad zur Medienquelle, die wir über das `src`-Attribut einbetten wollen; wir können andere Attribute hinzufügen, um Informationen anzugeben, wie zum Beispiel, ob wir es automatisch abspielen und wiederholen lassen wollen, ob wir die Standard-Audiosteuerungen des Browsers anzeigen wollen, etc.

Der Inhalt zwischen den öffnenden und schließenden `<audio></audio>`-Tags wird als Fallback in Browsern angezeigt, die das Element nicht unterstützen.

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `autoplay`

  - : Ein Boolean-Attribut: Wenn angegeben, beginnt die Wiedergabe der Audiodatei automatisch, sobald dies möglich ist, ohne darauf zu warten, dass die gesamte Audiodatei heruntergeladen ist.

    > [!NOTE]
    > Webseiten, die automatisch Audiodateien (oder Videos mit Audiospuren) abspielen, können für Benutzer eine unangenehme Erfahrung darstellen und sollten nach Möglichkeit vermieden werden. Wenn Sie unbedingt Autoplay-Funktionalität anbieten müssen, sollten Sie es benutzerdefiniert machen (die Benutzer müssen es speziell aktivieren). Dies kann jedoch nützlich sein, wenn Medien-Elemente erstellt werden, deren Quelle zu einem späteren Zeitpunkt unter Benutzerkontrolle festgelegt wird. Siehe unseren [Leitfaden zur Autoplay-Nutzung](/de/docs/Web/Media/Autoplay_guide) für zusätzliche Informationen zur korrekten Verwendung von Autoplay.

- `controls`

  - : Wenn dieses Attribut vorhanden ist, bietet der Browser Steuerungen an, mit denen der Benutzer die Audiowiedergabe steuern kann, einschließlich Lautstärkeregelung, Suchen und Pause/Fortsetzen der Wiedergabe.

- `controlslist`

  - : Das [`controlslist`](https://wicg.github.io/controls-list/explainer.html) Attribut hilft dem Browser, auszuwählen, welche Steuerungen für das `audio`-Element angezeigt werden sollen, wann immer der Browser sein eigenes Set von Steuerungen anzeigt (also, wenn das `controls`-Attribut angegeben wird).

    Die erlaubten Werte sind `nodownload`, `nofullscreen` und `noremoteplayback`.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Dieses {{Glossary("Enumerated", "enumerierte")}} Attribut zeigt an, ob CORS verwendet werden soll, um die zugehörige Audiodatei abzurufen. [CORS-fähige Ressourcen](/de/docs/Web/HTML/CORS_enabled_image) können im {{HTMLElement("canvas")}}-Element ohne _Verunreinigung_ wiederverwendet werden. Die erlaubten Werte sind:

    - `anonymous`
      - : Sendet eine Cross-Origin-Anfrage ohne Berechtigung. Mit anderen Worten, es sendet den `Origin:` HTTP-Header ohne Cookie, X.509-Zertifikat oder Durchführung von HTTP-Basis-Authentifizierung. Wenn der Server keine Berechtigungen für die Ursprungsseite gibt (indem er den `Access-Control-Allow-Origin:` HTTP-Header nicht setzt), wird die Ressource _verunreinigt_, und ihre Nutzung wird eingeschränkt.
    - `use-credentials`
      - : Sendet eine Cross-Origin-Anfrage mit Berechtigung. Mit anderen Worten, es sendet den `Origin:` HTTP-Header mit einem Cookie, einem Zertifikat oder Durchführung von HTTP-Basis-Authentifizierung. Wenn der Server keine Berechtigungen für die Ursprungsseite gibt (durch den `Access-Control-Allow-Credentials:` HTTP-Header), wird die Ressource _verunreinigt_ und ihre Nutzung wird eingeschränkt.

    Wenn nicht vorhanden, wird die Ressource ohne CORS-Anfrage abgerufen (d.h. ohne Senden des `Origin:` HTTP-Headers), was ihre nicht verunreinigte Verwendung in {{HTMLElement('canvas')}}-Elementen verhindert. Wenn ungültig, wird es behandelt, als ob das enumerierte Schlüsselwort **anonymous** verwendet wurde. Siehe [CORS-Einstellungsattribute](/de/docs/Web/HTML/Attributes/crossorigin) für weitere Informationen.

- `disableremoteplayback`

  - : Ein Boolean-Attribut, das verwendet wird, um die Fähigkeit der Fernwiedergabe auf Geräten zu deaktivieren, die über kabelgebundene (HDMI, DVI usw.) und drahtlose Technologien (Miracast, Chromecast, DLNA, AirPlay usw.) angeschlossen sind. Siehe [diese vorgeschlagene Spezifikation](https://www.w3.org/TR/remote-playback/#the-disableremoteplayback-attribute) für weitere Informationen.

    In Safari können Sie [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) als Fallback verwenden.

- `loop`
  - : Ein Boolean-Attribut: Wenn angegeben, springt der Audioplayer nach Erreichen des Endes der Audio-Datei automatisch zum Anfang zurück.
- `muted`
  - : Ein Boolean-Attribut, das angibt, ob die Audio-Datei anfänglich stummgeschaltet wird. Der Standardwert ist `false`.
- `preload`

  - : Dieses {{Glossary("enumerated", "enumerierte")}} Attribut soll dem Browser einen Hinweis geben, was der Autor für die beste Benutzererfahrung hält. Es kann einen der folgenden Werte haben:

    - `none`: Gibt an, dass die Audioaufnahme nicht vorgeladen werden soll.
    - `metadata`: Gibt an, dass nur Audio-Metadaten (z.B. Länge) abgerufen werden.
    - `auto`: Gibt an, dass die gesamte Audiodatei heruntergeladen werden kann, auch wenn nicht erwartet wird, dass der Benutzer sie nutzt.
    - _leerer String_: Ein Synonym für den Wert `auto`.

    Der Standardwert ist in jedem Browser unterschiedlich. Die Spezifikation empfiehlt, ihn auf `metadata` zu setzen.

    > [!NOTE]
    >
    > - Das `autoplay`-Attribut hat Vorrang vor `preload`. Wenn `autoplay` angegeben ist, müsste der Browser offensichtlich beginnen, das Audio für die Wiedergabe herunterzuladen.
    > - Der Browser ist durch die Spezifikation nicht gezwungen, den Wert dieses Attributs zu befolgen; es ist ein bloßer Hinweis.

- `src`
  - : Die URL der einzubettenden Audio-Datei. Dies unterliegt den [HTTP-Zugriffskontrollen](/de/docs/Web/HTTP/CORS). Dies ist optional; Sie können stattdessen das {{htmlelement("source")}}-Element innerhalb des Audio-Blocks verwenden, um das einzubettende Audio anzugeben.

## Ereignisse

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Ereignisname</th>
      <th scope="col">Auslöser</th>
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
        Der Browser kann das Medium wiedergeben, schätzt jedoch ein, dass nicht
        genügend Daten geladen wurden, um das Medium bis zum Ende abzuspielen,
        ohne für weiteres Puffern anzuhalten.
      </td>
    </tr>
    <tr>
      <td>
        [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
      </td>
      <td>
        Der Browser schätzt, dass er das Medium bis zum Ende abspielen kann,
        ohne für das Puffern von Inhalten anzuhalten.
      </td>
    </tr>
    <tr>
      <td>[`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)</td>
      <td>
        Das Rendering eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) ist
        abgeschlossen.
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
        Das Medium ist leer geworden; dieses Ereignis wird z.B. gesendet, wenn
        das Medium bereits geladen (oder teilweise geladen) wurde, und die
        [`HTMLMediaElement.load`](/de/docs/Web/API/HTMLMediaElement/load)-Methode
        aufgerufen wird, um es neu zu laden.
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
      <td>Der erste Frame des Mediums ist geladen.</td>
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
        Die Wiedergabe ist bereit, nach einer Pause oder Verzögerung aufgrund
        mangelnder Daten zu beginnen.
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
      <td>Ein <em>Seek</em>-Vorgang wurde abgeschlossen.</td>
    </tr>
    <tr>
      <td>
        [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
      </td>
      <td>Ein <em>Seek</em>-Vorgang wurde gestartet.</td>
    </tr>
    <tr>
      <td>
        [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
      </td>
      <td>
        Die Benutzerumgebung versucht, Mediendaten abzurufen, aber Daten kommen
        unerwartet nicht.
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
        Die Zeit, die durch das <code>currentTime</code>-Attribut angezeigt
        wird, wurde aktualisiert.
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
      <td>Die Wiedergabe wurde gestoppt, weil vorübergehend keine Daten vorhanden sind.</td>
    </tr>
  </tbody>
</table>

## Nutzungshinweise

Browser unterstützen nicht alle dieselben [Dateitypen](/de/docs/Web/Media/Formats/Containers) und [Audio-Codecs](/de/docs/Web/Media/Formats/Audio_codecs); Sie können mehrere Quellen innerhalb geschachtelter {{htmlelement("source")}}-Elemente bereitstellen, und der Browser verwendet dann die erste, die er versteht:

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

Die Audioquelle kann auf jede gültige [URL](/de/docs/Web/URI) gesetzt werden, einschließlich HTTP(S)-URLs und [Daten-URLs](/de/docs/Web/URI/Schemes/data). Bei der Verwendung von HTTP(S)-URLs beachten Sie bitte, dass das Caching-Verhalten des Browsers beeinflusst, wie oft die Datei vom Server angefordert wird. Daten-URLs betten die Audiodaten direkt in das HTML ein, was bei kleinen Audiodateien nützlich sein kann, bei größeren Dateien jedoch nicht zu empfehlen ist, da es die Größe der HTML-Datei erhöht.

Sie können auch die [Web Audio API](/de/docs/Web/API/Web_Audio_API) verwenden, um Audio-Streams direkt aus JavaScript-Code zu generieren und zu bearbeiten, anstatt vorab vorhandene Audiodateien zu streamen. Sie können das [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) in JavaScript auf ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt setzen. Dies wird häufig für Live-Audio-Streams oder Echtzeit-Audioverarbeitung verwendet.

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

Beachten Sie, dass `MediaStream`-Quellen Einschränkungen haben: Sie sind nicht durchsuchbar und unterstützen nur einen begrenzten Satz von Codecs.

Wir bieten einen umfassenden und gründlichen [Leitfaden zu Medientypen](/de/docs/Web/Media/Formats) und den [Audio-Codecs, die darin verwendet werden können](/de/docs/Web/Media/Formats/Audio_codecs). Außerdem gibt es [einen Leitfaden zu den unterstützten Codecs für Video](/de/docs/Web/Media/Formats/Video_codecs).

Weitere Nutzungshinweise:

- Wenn Sie das `controls`-Attribut nicht angeben, enthält der Audioplayer nicht die Standardsteuerungen des Browsers. Sie können jedoch Ihre eigenen benutzerdefinierten Steuerungen mithilfe von JavaScript und der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API erstellen.
- Um genaue Kontrolle über Ihre Audioinhalte zu ermöglichen, feuern `HTMLMediaElement`s viele verschiedene [Ereignisse](/de/docs/Web/API/HTMLMediaElement#events) ab. Dies bietet auch eine Möglichkeit, den Abrufprozess der Audiodateien zu überwachen, damit Sie Fehler erkennen oder feststellen können, wann genug Daten zur Wiedergabe oder Bearbeitung zur Verfügung stehen.
- `<audio>`-Elemente können keine Untertitel oder Beschriftungen haben, wie es bei `<video>`-Elementen möglich ist. Siehe [WebVTT und Audio](https://www.iandevlin.com/blog/2015/12/html5/webvtt-and-audio/) von Ian Devlin für einige nützliche Informationen und Workarounds.
- Um den Fallback-Content in Browsern zu testen, die das Element unterstützen, können Sie `<audio>` durch ein nicht existierendes Element wie `<notanaudio>` ersetzen.

Eine gute allgemeine Informationsquelle zur Verwendung von HTML `<audio>` ist der [HTML-Video- und Audio-Anfängerkurs](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio).

### Styling mit CSS

Das `<audio>`-Element hat keine eigenen visuellen Ausgabe, es sei denn, das `controls`-Attribut ist angegeben; in diesem Fall werden die Standardsteuerungen des Browsers angezeigt.

Die Standardsteuerungen haben einen {{cssxref("display")}}-Wert von `inline` als Standard, und es ist oft eine gute Idee, den Wert auf `block` zu setzen, um die Kontrolle über Positionierung und Layout zu verbessern, es sei denn, Sie möchten, dass es in einem Textblock oder Ähnlichem platziert wird.

Sie können die Standardsteuerungen mit Eigenschaften stylen, die den Block als eine Einheit beeinflussen, sodass Sie ihm beispielsweise einen {{cssxref("border")}} und {{cssxref("border-radius")}}, {{cssxref("padding")}}, {{cssxref("margin")}} usw. geben können. Sie können jedoch nicht die einzelnen Komponenten innerhalb des Audioplayers stylen (z.B. die Größe der Schaltflächen oder Symbole ändern, die Schriftart ändern usw.), und die Steuerungen unterscheiden sich zwischen den verschiedenen Browsern.

Um ein konsistentes Aussehen und Verhalten über Browser hinweg zu erhalten, müssen Sie benutzerdefinierte Steuerungen erstellen; diese können auf beliebige Weise markiert und gestylt werden, und dann kann JavaScript zusammen mit der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API verwendet werden, um ihre Funktionalität zu verknüpfen.

[Grundlagen der Videoplayerstilierung](/de/docs/Web/Media/Audio_and_video_delivery/Video_player_styling_basics) bietet einige nützliche Stiltechniken — es ist im Kontext von `<video>` geschrieben, aber vieles davon ist genauso anwendbar auf `<audio>`.

### Erkennen von Hinzufügen und Entfernen von Tracks

Sie können erkennen, wann Tracks zu einem `<audio>`-Element hinzugefügt oder daraus entfernt werden, indem Sie die Ereignisse [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event) verwenden. Diese Ereignisse werden jedoch nicht direkt an das `<audio>`-Element selbst gesendet. Stattdessen werden sie an das Track-Listen-Objekt innerhalb des `<audio>`-Elements [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) gesendet, das dem Track-Typ entspricht, der dem Element hinzugefügt wurde:

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die alle Audiospuren des Medienelements enthält. Sie können einen `addtrack`-Listener zu diesem Objekt hinzufügen, um benachrichtigt zu werden, wenn neue Audiospuren zum Element hinzugefügt werden.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)
  - : Fügen Sie diesem [`VideoTrackList`](/de/docs/Web/API/VideoTrackList)-Objekt einen `addtrack`-Listener hinzu, um informiert zu werden, wenn Videospuren zum Element hinzugefügt werden.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
  - : Fügen Sie dieser [`TextTrackList`](/de/docs/Web/API/TextTrackList) einen `addtrack` -Ereignis-Listener hinzu, um benachrichtigt zu werden, wenn neue Textspuren zum Element hinzugefügt werden.

> [!NOTE]
> Auch wenn es ein `<audio>`-Element ist, hat es dennoch Video- und Text-Track-Listen und kann tatsächlich verwendet werden, um Video zu präsentieren, obwohl die Benutzeroberflächenimplikationen seltsam sein können.

Um zu erkennen, wann Audiospuren zu einem `<audio>`-Element hinzugefügt oder daraus entfernt werden, können Sie zum Beispiel folgenden Code verwenden:

```js
const elem = document.querySelector("audio");

elem.audioTrackList.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTrackList.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Dieser Code beobachtet, wann Audiospuren zum oder vom Element hinzugefügt oder entfernt werden, und ruft eine hypothetische Funktion auf einem Spur-Editor auf, um die Spur von der Liste der verfügbaren Spuren des Editors zu registrieren oder zu entfernen.

Sie können auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um für die [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event) Ereignisse zu hören.

## Barrierefreiheit

Audio mit gesprochenen Dialogen sollte sowohl Untertitel als auch Transkripte bieten, die den Inhalt genau beschreiben. Mit ([WebVTT](/de/docs/Web/API/WebVTT_API)) spezifizierte Untertitel ermöglichen es hörgeschädigten Personen, den Inhalt einer Audioaufnahme zu verstehen, während sie abgespielt wird, während Transkripte es Personen ermöglichen, die mehr Zeit benötigen, den Inhalt der Aufnahme in einem für sie komfortablen Tempo und Format zu überprüfen.

Wenn automatische Untertitelungsdienste verwendet werden, ist es wichtig, den generierten Inhalt zu prüfen, um sicherzustellen, dass er das Quell-Audio genau wiedergibt.

Das `<audio>`-Element unterstützt WebVTT nicht direkt. Sie müssen eine Bibliothek oder ein Framework finden, das diese Funktionalität bereitstellt, oder den Code dazu selbst schreiben. Eine Option besteht darin, Ihr Audio mit einem {{HTMLElement("video")}}-Element abzuspielen, das WebVTT unterstützt.

Neben gesprochenen Dialogen sollten auch Untertitel und Transkripte Musik- und Soundeffekte identifizieren, die wichtige Informationen vermitteln. Dazu gehören Emotionen und der Ton. Zum Beispiel wird im folgenden WebVTT die Verwendung von eckigen Klammern bemerkt, um dem Betrachter tonale und emotionale Einsicht zu geben; dies kann helfen, die Stimmung zu erzeugen, die ansonsten durch Musik, nonverbale Geräusche und entscheidende Soundeffekte bereitgestellt wird.

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

Außerdem ist es gute Praxis, einige Inhalte (wie den direkten Download-Link) als Fallback für Benutzer bereitzustellen, die einen Browser verwenden, in dem das `<audio>`-Element nicht unterstützt wird:

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
- [MDN Understanding WCAG, Guideline 1.2 explanations](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [Understanding Success Criterion 1.2.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Understanding Success Criterion 1.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Beispiele

### Grundlegende Nutzung

Das folgende Beispiel zeigt die grundlegende Verwendung des `<audio>`-Elements, um eine OGG-Datei abzuspielen. Es wird aufgrund des `autoplay`-Attributs automatisch abgespielt — sofern die Seite die Berechtigung dazu hat — und enthält auch Fallback-Inhalt.

```html
<!-- Basic audio playback -->
<audio src="AudioTest.ogg" autoplay>
  <a href="AudioTest.ogg" download="AudioTest.ogg">Download OGG audio</a>.
</audio>
```

Für Details dazu, wann Autoplay funktioniert, wie man die Erlaubnis dafür erhält und wie und wann Autoplay angemessen verwendet wird, siehe unseren [Leitfaden zur Autoplay-Nutzung](/de/docs/Web/Media/Autoplay_guide).

### `<audio>`-Element mit \<source>-Element

Dieses Beispiel gibt an, welcher Audiotrack eingebettet werden soll, indem das `src`-Attribut auf einem geschachtelten `<source>`-Element verwendet wird, anstatt direkt auf dem `<audio>`-Element. Es ist immer nützlich, den MIME-Typ der Datei im `type`-Attribut anzugeben, da der Browser sofort erkennen kann, ob er die Datei abspielen kann, und falls nicht, keine Zeit damit verschwendet.

```html
<audio controls>
  <source src="foo.wav" type="audio/wav" />
  <a href="foo.wav" download="foo.wav">Download WAV audio</a>.
</audio>
```

### `<audio>` mit mehreren \<source>-Elementen

Dieses Beispiel umfasst mehrere `<source>`-Elemente. Der Browser versucht, das erste Quell-Element (Opus) zu laden, wenn er es abspielen kann; wenn nicht, wechselt er zum zweiten (Vorbis) und schließlich zurück zu MP3:

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
        >, Phrasierungsinhalt, eingebetteter Inhalt. Wenn es ein
        <a href="#controls"><code>controls</code></a>-Attribut hat: interaktiver
        Inhalt und fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Wenn das Element ein <a href="#src"><code>src</code></a>
        Attribut hat: null oder mehr {{HTMLElement("track")}}-Elemente
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
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Elternelemente</th>
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
      <th scope="row">Zulässige ARIA-Rollen</th>
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

- [Webmedientechnologien](/de/docs/Web/Media)

  - [Medien-Containerformate (Dateitypen)](/de/docs/Web/Media/Formats/Containers)
  - [Leitfaden zu Audio-Codecs, die im Web verwendet werden](/de/docs/Web/Media/Formats/Audio_codecs)

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)
- {{htmlelement("source")}}
- {{htmlelement("video")}}
- [Lernbereich: HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Grundlagen der plattformübergreifenden Audiowiedergabe](/de/docs/Web/Media/Audio_and_video_delivery/Cross-browser_audio_basics)
