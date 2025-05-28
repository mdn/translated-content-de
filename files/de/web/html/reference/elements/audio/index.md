---
title: "<audio>: Das eingebettete Audio-Element"
slug: Web/HTML/Reference/Elements/audio
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{HTMLSidebar}}

Das **`<audio>`**-[HTML](/de/docs/Web/HTML)-Element wird verwendet, um Klanginhalte in Dokumenten einzubetten. Es kann eine oder mehrere Audioquellen enthalten, die durch das `src`-Attribut oder das {{HTMLElement("source")}}-Element dargestellt werden: der Browser wählt die am besten geeignete Quelle aus. Es kann auch das Ziel für gestreamte Medien sein, indem ein [`MediaStream`](/de/docs/Web/API/MediaStream) verwendet wird.

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

Das obige Beispiel zeigt die grundlegende Verwendung des `<audio>`-Elements. Ähnlich dem {{htmlelement("img")}}-Element fügen wir einen Pfad zu dem Medium ein, das wir einbetten möchten, indem wir das `src`-Attribut verwenden; wir können andere Attribute hinzufügen, um Informationen wie automatisches Abspielen und Schleifen, das Anzeigen der Standard-Audiosteuerelemente des Browsers usw. anzugeben.

Der Inhalt zwischen dem öffnenden und schließenden `<audio></audio>`-Tag wird als Fallback in Browsern angezeigt, die das Element nicht unterstützen.

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `autoplay`

  - : Ein boolesches Attribut: Wenn es angegeben ist, beginnt die Audio-Wiedergabe automatisch, sobald sie dies tun kann, ohne auf das vollständige Herunterladen der gesamten Audiodatei zu warten.

    > [!NOTE]
    > Websites, die automatisch Audio (oder Videos mit einer Audiounterspur) abspielen, können für Benutzer ein unangenehmes Erlebnis sein und sollten daher nach Möglichkeit vermieden werden. Wenn Sie eine Autoplay-Funktionalität anbieten müssen, sollten Sie sie opt-in gestalten (indem der Benutzer spezifisch aktiviert). Dies kann jedoch nützlich sein, wenn Medien-Elemente erstellt werden, deren Quelle zu einem späteren Zeitpunkt unter Benutzerkontrolle festgelegt wird. Siehe unseren [Autoplay-Leitfaden](/de/docs/Web/Media/Guides/Autoplay) für zusätzliche Informationen zur richtigen Verwendung von Autoplay.

- `controls`

  - : Wenn dieses Attribut vorhanden ist, bietet der Browser Steuerelemente an, damit der Benutzer die Audiowiedergabe steuern kann, einschließlich Lautstärke, Suchen und Pausieren/Fortsetzen der Wiedergabe.

- `controlslist`

  - : Das [`controlslist`](https://wicg.github.io/controls-list/explainer.html)-Attribut hilft dem Browser, auszuwählen, welche Steuerelemente für das `audio`-Element angezeigt werden sollen, wann immer der Browser seine eigenen Steuerelemente anzeigt (d.h. wenn das `controls`-Attribut angegeben ist).

    Die erlaubten Werte sind `nodownload`, `nofullscreen` und `noremoteplayback`.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)

  - : Dieses {{Glossary("Enumerated", "enumerierte")}} Attribut gibt an, ob CORS verwendet werden soll, um die zugehörige Audiodatei zu laden. [CORS-aktivierte Ressourcen](/de/docs/Web/HTML/How_to/CORS_enabled_image) können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne _verfälscht_ zu werden. Die erlaubten Werte sind:

    - `anonymous`
      - : Sendet eine Cross-Origin-Anfrage ohne Anmeldedaten. Mit anderen Worten, es sendet den `Origin:`-HTTP-Header ohne Cookie, X.509-Zertifikat oder HTTP-Basisauthentifizierung. Wenn der Server keine Anmeldeinformationen an die Ursprungsseite gibt (indem er den `Access-Control-Allow-Origin:`-HTTP-Header nicht setzt), wird die Ressource _verfälscht_ und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Sendet eine Cross-Origin-Anfrage mit Anmeldedaten. Mit anderen Worten, es sendet den `Origin:`-HTTP-Header zusammen mit einem Cookie, einem Zertifikat oder einer HTTP-Basisauthentifizierung. Wenn der Server keine Anmeldeinformationen an die Ursprungsseite gibt (durch den `Access-Control-Allow-Credentials:`-HTTP-Header), wird die Ressource _verfälscht_ und ihre Nutzung eingeschränkt.

    Wenn nicht vorhanden, wird die Ressource ohne CORS-Anfrage abgerufen (d.h. ohne Senden des `Origin:`-HTTP-Headers), wodurch ihre unverfälschte Verwendung in {{HTMLElement('canvas')}}-Elementen verhindert wird. Wenn ungültig, wird es so behandelt, als ob das aufgelistete Schlüsselwort **anonymous** verwendet wurde. Siehe [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für zusätzliche Informationen.

- `disableremoteplayback`

  - : Ein boolesches Attribut, das verwendet wird, um die Fähigkeit zur Remote-Wiedergabe in Geräten zu deaktivieren, die über kabelgebundene (HDMI, DVI, etc.) und drahtlose Technologien (Miracast, Chromecast, DLNA, AirPlay, etc.) angeschlossen sind. Siehe die vorgeschlagene [Remote Playback API-Spezifikation](https://w3c.github.io/remote-playback/#the-disableremoteplayback-attribute) für weitere Informationen.

    In Safari können Sie [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) als Fallback verwenden.

- `loop`
  - : Ein boolesches Attribut: Wenn es angegeben ist, wird der Audioplayer automatisch zum Anfang zurücksuchen, sobald das Ende der Audio erreicht ist.
- `muted`
  - : Ein boolesches Attribut, das angibt, ob der Ton initially stumm geschaltet sein wird. Der Standardwert ist `false`.
- `preload`

  - : Dieses {{Glossary("enumerated", "enumerierte")}} Attribut soll dem Browser einen Hinweis geben, was der Autor denkt, dass dies zu einem besten Benutzererlebnis führen wird. Es kann einen der folgenden Werte haben:

    - `none`: Gibt an, dass die Audio nicht vorgeladen werden soll.
    - `metadata`: Gibt an, dass nur Audio-Metadaten (z.B. Länge) abgerufen werden.
    - `auto`: Gibt an, dass die gesamte Audiodatei heruntergeladen werden kann, selbst wenn nicht erwartet wird, dass der Benutzer sie verwendet.
    - _leerer String_: Ein Synonym für den Wert `auto`.

    Der Standardwert ist in jedem Browser unterschiedlich. Die Spezifikation empfiehlt, sie auf `metadata` zu setzen.

    > [!NOTE]
    >
    > - Das `autoplay`-Attribut hat Vorrang vor `preload`. Wenn `autoplay` angegeben ist, muss der Browser offensichtlich mit dem Herunterladen des Audios für die Wiedergabe beginnen.
    > - Der Browser ist nicht gezwungen, den Wert dieses Attributs zu befolgen; es ist nur ein Hinweis.

- `src`
  - : Die URL des einzubettenden Audios. Dies unterliegt den [HTTP-Zugriffssteuerungen](/de/docs/Web/HTTP/Guides/CORS). Dies ist optional; Sie können stattdessen das {{htmlelement("source")}}-Element innerhalb des Audioblocks verwenden, um das Audio zu spezifizieren, das eingebettet werden soll.

## Ereignisse

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Ereignisname</th>
      <th scope="col">Ausgelöst wenn</th>
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
        Der Browser kann das Medium abspielen, schätzt jedoch, dass nicht genügend Daten geladen wurden,
        um das Medium bis zum Ende abzuspielen, ohne zum Nachpuffern anhalten zu müssen.
      </td>
    </tr>
    <tr>
      <td>
        [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
      </td>
      <td>
        Der Browser schätzt, dass er das Medium bis zum Ende abspielen kann, ohne
        zum Puffern von Inhalten anzuhalten.
      </td>
    </tr>
    <tr>
      <td>[`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)</td>
      <td>
        Die Verarbeitung eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) ist
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
        Das Medium ist leer geworden; beispielsweise wird dieses Ereignis gesendet, wenn das Medium
        bereits geladen (oder teilweise geladen) wurde und die
        [`HTMLMediaElement.load`](/de/docs/Web/API/HTMLMediaElement/load)-Methode aufgerufen wird, um
        es neu zu laden.
      </td>
    </tr>
    <tr>
      <td>
        [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)
      </td>
      <td>Die Wiedergabe wurde beendet, weil das Ende des Mediums erreicht wurde.</td>
    </tr>
    <tr>
      <td>
        [`loadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event)
      </td>
      <td>Der erste Frame des Mediums wurde vollständig geladen.</td>
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
        Die Wiedergabe ist bereit zu beginnen, nachdem sie pausiert oder wegen
        Datenmangels verzögert wurde.
      </td>
    </tr>
    <tr>
      <td>
        [`ratechange`](/de/docs/Web/API/HTMLMediaElement/ratechange_event)
      </td>
      <td>Die Wiedergabegeschwindigkeit wurde geändert.</td>
    </tr>
    <tr>
      <td>
        [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event)
      </td>
      <td>Ein <em>Such</em>-Vorgang wurde abgeschlossen.</td>
    </tr>
    <tr>
      <td>
        [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
      </td>
      <td>Ein <em>Such</em>-Vorgang hat begonnen.</td>
    </tr>
    <tr>
      <td>
        [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
      </td>
      <td>
        Der Benutzeragent versucht, Mediendaten abzurufen, aber die Daten kommen
        unerwartet nicht.
      </td>
    </tr>
    <tr>
      <td>
        [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event)
      </td>
      <td>Das Laden von Mediendaten wurde unterbrochen.</td>
    </tr>
    <tr>
      <td>
        [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)
      </td>
      <td>
        Die durch das <code>currentTime</code>-Attribut angezeigte Zeit wurde
        aktualisiert.
      </td>
    </tr>
    <tr>
      <td>
        [`volumechange`](/de/docs/Web/API/HTMLMediaElement/volumechange_event)
      </td>
      <td>Die Lautstärke wurde geändert.</td>
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

Browser unterstützen nicht alle dieselben [Dateitypen](/de/docs/Web/Media/Guides/Formats/Containers) und [Audiocodecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs); Sie können mehrere Quellen innerhalb verschachtelter {{htmlelement("source")}}-Elemente angeben, und der Browser verwendet dann die erste, die er versteht:

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

Die Audioquelle kann auf jede gültige [URL](/de/docs/Web/URI) gesetzt werden, einschließlich HTTP(S)-URLs und [Data-URLs](/de/docs/Web/URI/Reference/Schemes/data). Beim Verwenden von HTTP(S)-URLs sollten Sie beachten, dass das Caching-Verhalten des Browsers beeinflusst, wie oft die Datei vom Server angefordert wird. Data-URLs betten die Audiodaten direkt in das HTML ein, was für kleine Audiodateien nützlich sein kann, aber für größere Dateien nicht empfohlen wird, da dies die HTML-Dateigröße erhöht.

Beim Verwenden von {{htmlelement("source")}}-Elementen versucht der Browser, jede Quelle nacheinander zu laden. Wenn eine Quelle fehlschlägt (z. B. aufgrund einer ungültigen URL oder eines nicht unterstützten Formats), wird die nächste Quelle versucht, und so weiter. Ein `error`-Ereignis wird am `<audio>`-Element ausgelöst, nachdem alle Quellen fehlgeschlagen sind; `error`-Ereignisse werden nicht bei jedem einzelnen `<source>`-Element ausgelöst.

Sie können auch die [Web Audio API](/de/docs/Web/API/Web_Audio_API) verwenden, um direkt Audiostreams von JavaScript-Code zu generieren und zu manipulieren, anstatt vorgefertigte Audiodateien zu streamen. Sie können das [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) in JavaScript auf ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt setzen. Dies wird häufig für Live-Audiostreams oder Echtzeit-Audiobearbeitung verwendet.

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

Wir bieten einen substanziellen und gründlichen [Leitfaden zu den Medientypen](/de/docs/Web/Media/Guides/Formats) und den [Audiocodecs, die darin verwendet werden können](/de/docs/Web/Media/Guides/Formats/Audio_codecs). Auch verfügbar ist [ein Leitfaden zu den für Videos unterstützten Codecs](/de/docs/Web/Media/Guides/Formats/Video_codecs).

Weitere Verwendungshinweise:

- Wenn Sie das `controls`-Attribut nicht angeben, wird der Audioplayer keine Standardsteuerungselemente des Browsers enthalten. Sie können jedoch Ihre eigenen benutzerdefinierten Steuerelemente mit JavaScript und der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API erstellen.
- Um genaue Kontrolle über Ihre Audioinhalte zu ermöglichen, lösen `HTMLMediaElement`s viele verschiedene [Ereignisse](/de/docs/Web/API/HTMLMediaElement#events) aus. Dies bietet auch eine Möglichkeit, den Ladeprozess des Audios zu überwachen, sodass Sie Fehler beobachten oder erkennen können, wann genug verfügbar ist, um zu beginnen, es abzuspielen oder zu manipulieren.
- `<audio>`-Elemente können keine Untertitel oder Bildunterschriften in derselben Weise wie `<video>`-Elemente haben. Siehe [WebVTT and Audio](https://www.iandevlin.com/blog/2015/12/html5/webvtt-and-audio/) von Ian Devlin für einige nützliche Informationen und Workarounds.
- Um die Ausweichinhalte in Browsern zu testen, die das Element unterstützen, können Sie `<audio>` durch ein nicht existierendes Element wie `<notanaudio>` ersetzen.

Eine gute allgemeine Informationsquelle zur Verwendung von HTML-`<audio>` ist das [HTML-Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)-Anfängertutorial.

### Styling mit CSS

Das `<audio>`-Element hat, wenn nicht das `controls`-Attribut angegeben ist, keine eigenen intrinsischen visuellen Ausgaben, es sei denn die Standardsteuerelemente des Browsers werden angezeigt.

Die Standardsteuerelemente haben normalerweise einen {{cssxref("display")}}-Wert von `inline`, und es ist oft eine gute Idee, den Wert auf `block` zu setzen, um die Kontrolle über die Positionierung und das Layout zu verbessern, es sei denn, Sie möchten, dass es innerhalb eines Textblocks oder Ähnlichem sitzen.

Sie können die Standardsteuerelemente mit Eigenschaften stylen, die den Block als eine einzelne Einheit beeinflussen. Sie können ihm zum Beispiel einen {{cssxref("border")}} und {{cssxref("border-radius")}}, {{cssxref("padding")}}, {{cssxref("margin")}} usw. verleihen. Sie können jedoch die einzelnen Komponenten innerhalb des Audioplayers nicht stylen (z. B. die Größe der Schaltflächen oder Symbole ändern, die Schriftart ändern usw.), und die Steuerelemente sind in den verschiedenen Browsern unterschiedlich.

Um einen konsistenten Look across verschiedene Browser zu erreichen, müssen Sie benutzerdefinierte Steuerelemente erstellen; diese können in jeder gewünschten Art und Weise ausgezeichnet und gestylt werden, und dann kann JavaScript zusammen mit der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API verwendet werden, um deren Funktionalität zu verbinden.

[Video-Player-Styling-Grundlagen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics) bieten einige nützliche Stylingtechniken – sie sind im Kontext von `<video>` geschrieben, aber vieles davon ist ebenso auf `<audio>` anwendbar.

### Erkennen der Hinzufügung und Entfernung von Tracks

Sie können erkennen, wann Tracks zu einem `<audio>`-Element hinzugefügt oder daraus entfernt werden, indem Sie die [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event)-Ereignisse verwenden. Diese Ereignisse werden jedoch nicht direkt an das `<audio>`-Element selbst gesendet. Stattdessen werden sie an das Tracklist-Objekt innerhalb des `<audio>`-Elements gesendet, das dem Typ des hinzugefügten Tracks entspricht:

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die alle Audiotracks des Medienelements enthält. Sie können einen Listener für `addtrack` zu diesem Objekt hinzufügen, um benachrichtigt zu werden, wenn neue Audiotracks zum Element hinzugefügt werden.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)
  - : Fügen Sie einen `addtrack`-Listener zu diesem [`VideoTrackList`](/de/docs/Web/API/VideoTrackList)-Objekt hinzu, um informiert zu werden, wenn Videotracks zum Element hinzugefügt werden.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
  - : Fügen Sie einen `addtrack`-Listener für dieses [`TextTrackList`](/de/docs/Web/API/TextTrackList)-Element hinzu, um benachrichtigt zu werden, wenn neue Texttracks zum Element hinzugefügt werden.

> [!NOTE]
> Auch wenn es sich um ein `<audio>`-Element handelt, verfügt es dennoch über Video- und Texttrack-Listen und kann tatsächlich verwendet werden, um Videos darzustellen, obwohl die Benutzeroberflächenimplikationen eigenartig sein können.

Zum Beispiel um zu erkennen, wann Audiotracks zu oder aus einem `<audio>`-Element hinzugefügt oder entfernt werden, können Sie Code wie diesen verwenden:

```js
const elem = document.querySelector("audio");

elem.audioTrackList.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTrackList.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Dieser Code beobachtet, wann Audiotracks zum Element hinzugefügt oder daraus entfernt werden, und ruft eine hypothetische Funktion auf einem Track-Editor auf, um den Track bei der Liste der verfügbaren Tracks im Editor zu registrieren oder zu entfernen.

Sie können auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um auf die [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event)-Ereignisse zu hören.

## Barrierefreiheit

Audio mit gesprochener Dialogspur sollte sowohl Untertitel als auch Transkripte bereitstellen, die dessen Inhalt genau beschreiben. Untertitel, die über [WebVTT](/de/docs/Web/API/WebVTT_API) festgelegt werden, ermöglichen es hörgeschädigten Personen, den Inhalt einer Audioaufnahme zu verstehen, während diese abgespielt wird, während Transkripte Personen, die zusätzliche Zeit benötigen, ermöglichen, den Inhalt der Aufnahme in einem Tempo und Format zu überprüfen, das für sie angenehm ist.

Wenn automatische Untertitelungsdienste verwendet werden, ist es wichtig, die generierten Inhalte zu überprüfen, um sicherzustellen, dass sie den Quell-Audioinhalten genau entsprechen.

Das `<audio>`-Element unterstützt nicht direkt WebVTT. Sie müssen eine Bibliothek oder ein Framework finden, das diese Funktionalität bietet, oder den Code schreiben, um Untertitel selbst anzuzeigen. Eine Option besteht darin, Ihr Audio mit einem {{HTMLElement("video")}}-Element abzuspielen, das WebVTT unterstützt.

Zusätzlich zu gesprochenen Dialogen sollten Untertitel und Transkripte auch Musik und Soundeffekte identifizieren, die wichtige Informationen kommunizieren. Dies schließt Emotion und Ton ein. Zum Beispiel beachten Sie in dem unten stehenden WebVTT die Verwendung von eckigen Klammern, um dem Betrachter Ton und emotionale Einsicht zu geben; dies kann helfen, die Atmosphäre zu etablieren, die sonst durch Musik, nonverbale Geräusche und wesentliche Soundeffekte bereitgestellt wird, und so weiter.

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

Es ist auch eine gute Praxis, einige Inhalte (wie den Direktdownload-Link) als Fallback für Zuschauer bereitzustellen, die einen Browser verwenden, in dem das `<audio>`-Element nicht unterstützt wird:

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
- [WebAIM: Untertitel, Transkripte und Audio-Beschreibungen](https://webaim.org/techniques/captions/)
- [MDN Verständnis der WCAG, Leitlinie 1.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [Verständnis für Erfolgskriterium 1.2.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Verständnis für Erfolgskriterium 1.2.2 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel zeigt die grundlegende Verwendung des `<audio>`-Elements, um eine OGG-Datei abzuspielen. Es wird automatisch abgespielt, sofern die Seite dazu berechtigt ist, und beinhaltet auch Fallback-Inhalt.

```html
<!-- Basic audio playback -->
<audio src="AudioTest.ogg" autoplay>
  <a href="AudioTest.ogg" download="AudioTest.ogg">Download OGG audio</a>.
</audio>
```

Für Details dazu, wann Autoplay funktioniert, wie Sie die Berechtigung für die Verwendung von Autoplay erhalten und wie und wann es angemessen ist, Autoplay zu verwenden, siehe unseren [Autoplay-Leitfaden](/de/docs/Web/Media/Guides/Autoplay).

### `<audio>`-Element mit `<source>`-Element

Dieses Beispiel gibt an, welcher Audiotrack eingebettet werden soll, indem das `src`-Attribut auf einem verschachtelten `<source>`-Element anstelle direkt auf dem `<audio>`-Element verwendet wird. Es ist immer nützlich, den MIME-Typ der Datei im `type`-Attribut anzugeben, da der Browser sofort erkennen kann, ob er diese Datei abspielen kann und keine Zeit verschwendet, wenn nicht.

```html
<audio controls>
  <source src="foo.wav" type="audio/wav" />
  <a href="foo.wav" download="foo.wav">Download WAV audio</a>.
</audio>
```

### `<audio>` mit mehreren `<source>`-Elementen

Dieses Beispiel umfasst mehrere `<source>`-Elemente. Der Browser versucht, das erste Quell-Element (Opus) zu laden, wenn er es abspielen kann; falls nicht, fällt er auf das zweite (Vorbis) und schließlich auf MP3 zurück:

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
          >Fließinhalt</a
        >, Phraseninhalt, eingebetteter Inhalt. Wenn es ein
        <a href="#controls"><code>controls</code></a>-Attribut hat: interaktiver
        Inhalt und greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Wenn das Element ein <a href="#src"><code>src</code></a>-Attribut hat: null oder mehr {{HTMLElement("track")}}-Elemente
        gefolgt von transparentem Inhalt, der kein
        <code>&lt;audio&gt;</code> oder {{HTMLElement("video")}}
        Medien-Element enthält.<br />Andernfalls: null oder mehr {{HTMLElement("source")}}
        Elemente gefolgt von null oder mehr {{HTMLElement("track")}}
        Elementen gefolgt von transparentem Inhalt, der kein
        <code>&lt;audio&gt;</code> oder {{HTMLElement("video")}}
        Medien-Element enthält.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind zwingend.</td>
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
  - [Leitfaden zu den auf dem Web verwendeten Audiocodecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs)

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)
- {{htmlelement("source")}}
- {{htmlelement("video")}}
- [Lernbereich: HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Audio-Grundlagen für Browser](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
