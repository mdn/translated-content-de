---
title: "<audio>: Das Audio-Einbettungselement"
slug: Web/HTML/Element/audio
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<audio>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um Klanginhalte in Dokumenten einzubetten. Es kann eine oder mehrere Audioquellen enthalten, die mit dem `src`-Attribut oder dem {{HTMLElement("source")}}-Element dargestellt werden: Der Browser wählt die am besten geeignete aus. Es kann auch das Ziel für gestreamte Medien sein, unter Verwendung eines [`MediaStream`](/de/docs/Web/API/MediaStream).

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

Das obige Beispiel zeigt die grundlegende Nutzung des `<audio>`-Elements. Ähnlich wie beim {{htmlelement("img")}}-Element fügen wir einen Pfad zu den Medien hinzu, die wir im `src`-Attribut einbetten möchten; wir können weitere Attribute einfügen, um Informationen anzugeben, wie z.B. ob wir es automatisch abspielen und wiederholen möchten, ob wir die Standard-Audiosteuerungen des Browsers anzeigen möchten usw.

Der Inhalt innerhalb der öffnenden und schließenden `<audio></audio>`-Tags wird als Fallback in Browsern angezeigt, die das Element nicht unterstützen.

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `autoplay`

  - : Ein Boolesches Attribut: Wenn angegeben, beginnt die Audio-Wiedergabe automatisch, sobald es möglich ist, ohne zu warten, bis die gesamte Audiodatei heruntergeladen ist.

    > [!NOTE]
    > Websites, die automatisch Audio abspielen (oder Videos mit einer Tonspur) können für Benutzer eine unangenehme Erfahrung sein und sollten wenn möglich vermieden werden. Wenn Sie die Autoplay-Funktionalität anbieten müssen, sollten Sie es als Opt-in bereitstellen (erforderlich, dass ein Benutzer es speziell aktiviert). Dies kann jedoch nützlich sein, wenn Medienelemente erstellt werden, deren Quelle zu einem späteren Zeitpunkt unter Benutzerkontrolle festgelegt wird. Weitere Informationen zur korrekten Verwendung von Autoplay finden Sie in unserem [Autoplay-Leitfaden](/de/docs/Web/Media/Guides/Autoplay).

- `controls`

  - : Wenn dieses Attribut vorhanden ist, bietet der Browser Steuerungen an, die es dem Benutzer ermöglichen, die Audiowiedergabe zu steuern, einschließlich Lautstärke, Suchlauf und Pause/Fortsetzen der Wiedergabe.

- `controlslist`

  - : Das [`controlslist`](https://wicg.github.io/controls-list/explainer.html)-Attribut, wenn angegeben, hilft dem Browser auszuwählen, welche Steuerungen für das `audio`-Element angezeigt werden sollen, wann immer der Browser sein eigenes Set von Steuerungen zeigt (das heißt, wenn das `controls`-Attribut spezifiziert ist).

    Die erlaubten Werte sind `nodownload`, `nofullscreen` und `noremoteplayback`.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Dieses {{Glossary("Enumerated", "enumerierte")}} Attribut gibt an, ob CORS verwendet werden soll, um die zugehörige Audiodatei abzurufen. [CORS-fähige Ressourcen](/de/docs/Web/HTML/CORS_enabled_image) können im {{HTMLElement("canvas")}}-Element ohne Verfälschung wiederverwendet werden. Die erlaubten Werte sind:

    - `anonymous`
      - : Sendet eine Cross-Origin-Anfrage ohne Anmeldedaten. Mit anderen Worten, es sendet den `Origin:` HTTP-Header ohne ein Cookie, X.509-Zertifikat oder die Durchführung einer HTTP-Basisauthentifizierung. Wenn der Server der Ursprungsseite keine Anmeldeinformationen gibt (indem er den `Access-Control-Allow-Origin:` HTTP-Header nicht setzt), wird die Ressource _verfälscht_ und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Sendet eine Cross-Origin-Anfrage mit Anmeldedaten. Mit anderen Worten, es sendet den `Origin:` HTTP-Header mit einem Cookie, einem Zertifikat oder führt die HTTP-Basisauthentifizierung durch. Wenn der Server der Ursprungsseite keine Anmeldeinformationen gibt (durch den `Access-Control-Allow-Credentials:` HTTP-Header), wird die Ressource _verfälscht_ und ihre Nutzung eingeschränkt.

    Wenn nicht vorhanden, wird die Ressource ohne eine CORS-Anfrage abgerufen (d.h. ohne den `Origin:` HTTP-Header zu senden), was ihre unverfälschte Verwendung in {{HTMLElement('canvas')}}-Elementen verhindert. Wenn ungültig, wird es so behandelt, als wäre das enumerierte Schlüsselwort **anonymous** verwendet worden. Weitere Informationen finden Sie unter [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Attributes/crossorigin).

- `disableremoteplayback`

  - : Ein Boolesches Attribut, das die Fähigkeit zur Fernwiedergabe auf Geräten deaktiviert, die mit kabelgebundenen (HDMI, DVI, etc.) und drahtlosen Technologien (Miracast, Chromecast, DLNA, AirPlay, etc.) angeschlossen sind. Weitere Informationen finden Sie in [diesem vorgeschlagenen Standard](https://www.w3.org/TR/remote-playback/#the-disableremoteplayback-attribute).

    In Safari können Sie [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) als Fallback verwenden.

- `loop`
  - : Ein Boolesches Attribut: Wenn angegeben, springt der Audioplayer automatisch zu Beginn zurück, wenn das Ende des Audios erreicht ist.
- `muted`
  - : Ein Boolesches Attribut, das angibt, ob das Audio zunächst stummgeschaltet wird. Sein Standardwert ist `false`.
- `preload`

  - : Dieses {{Glossary("enumerated", "enumerierte")}} Attribut soll einen Hinweis an den Browser geben, was der Autor für die beste Benutzererfahrung hält. Es kann einen der folgenden Werte haben:

    - `none`: Gibt an, dass das Audio nicht vorab geladen werden sollte.
    - `metadata`: Gibt an, dass nur Audio-Metadaten (z.B. Länge) abgerufen werden.
    - `auto`: Gibt an, dass die gesamte Audiodatei heruntergeladen werden kann, auch wenn nicht erwartet wird, dass der Benutzer sie verwendet.
    - _leerer String_: Ein Synonym für den `auto`-Wert.

    Der Standardwert ist für jeden Browser unterschiedlich. Die Spezifikation empfiehlt, ihn auf `metadata` zu setzen.

    > [!NOTE]
    >
    > - Das `autoplay`-Attribut hat Vorrang vor `preload`. Wenn `autoplay` angegeben ist, muss der Browser offensichtlich beginnen, das Audio für die Wiedergabe herunterzuladen.
    > - Der Browser ist durch die Spezifikation nicht gezwungen, den Wert dieses Attributs zu befolgen; es ist lediglich ein Hinweis.

- `src`
  - : Die URL des einzubettenden Audios. Dies unterliegt [HTTP-Zugriffskontrollen](/de/docs/Web/HTTP/CORS). Dies ist optional; Sie können stattdessen das {{htmlelement("source")}}-Element innerhalb des Audioblocks verwenden, um das einzubettende Audio zu spezifizieren.

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
        Der Browser kann das Medium abspielen, schätzt jedoch, dass nicht genug
        Daten geladen wurden, um das Medium bis zu seinem Ende abzuspielen, ohne
        für weiteres Puffern anhalten zu müssen.
      </td>
    </tr>
    <tr>
      <td>
        [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
      </td>
      <td>
        Der Browser schätzt, dass er das Medium bis zu seinem Ende abspielen
        kann, ohne für Inhaltsbuffern stoppen zu müssen.
      </td>
    </tr>
    <tr>
      <td>[`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)</td>
      <td>
        Die Verarbeitung eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) ist
        beendet.
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
        Das Medium ist leer geworden; dieses Ereignis wird zum Beispiel gesendet,
        wenn das Medium bereits geladen (oder teilweise geladen) wurde und die
        [`HTMLMediaElement.load`](/de/docs/Web/API/HTMLMediaElement/load)-Methode aufgerufen wird,
        um es neu zu laden.
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
        Die Wiedergabe ist bereit, nach einer Pause oder Verzögerung aufgrund
        von Datenmangel zu starten.
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
        Der Benutzer-Agent versucht, Mediendaten abzurufen, aber die Daten
        kommen unerwartet nicht.
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
        Die durch das <code>currentTime</code>-Attribut angegebene Zeit wurde
        aktualisiert.
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
      <td>Die Wiedergabe hat aufgrund eines vorübergehenden Datenmangels gestoppt</td>
    </tr>
  </tbody>
</table>

## Nutzungshinweise

Nicht alle Browser unterstützen die gleichen [Dateitypen](/de/docs/Web/Media/Guides/Formats/Containers) und [Audio-Codecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs); Sie können mehrere Quellen innerhalb verschachtelter {{htmlelement("source")}}-Elemente anbieten, und der Browser verwendet dann die erste, die er versteht:

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

Die Audioquelle kann auf eine beliebige gültige [URL](/de/docs/Web/URI) gesetzt werden, einschließlich HTTP(S)-URLs und [Daten-URLs](/de/docs/Web/URI/Reference/Schemes/data). Bei der Verwendung von HTTP(S)-URLs sollten Sie beachten, dass das Caching-Verhalten des Browsers beeinflusst, wie oft die Datei vom Server angefordert wird. Daten-URLs betten die Audiodaten direkt in das HTML ein, was für kleine Audiodateien nützlich sein kann, aber für größere Dateien nicht empfohlen wird, da die Größe der HTML-Datei erhöht wird.

Sie können auch die [Web Audio API](/de/docs/Web/API/Web_Audio_API) verwenden, um Audio-Streams direkt aus JavaScript zu generieren und zu manipulieren, anstatt vorgefertigte Audiodateien zu streamen. Sie können das [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) in JavaScript auf ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt setzen. Dies wird häufig für Live-Audio-Streams oder Echtzeit-Audiobearbeitung verwendet.

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

Beachten Sie, dass `MediaStream`-Quellen Einschränkungen haben: Sie sind nicht suchbar und unterstützen nur einen begrenzten Satz von Codecs.

Wir bieten einen ausführlichen und detaillierten [Leitfaden zu Medientypen](/de/docs/Web/Media/Guides/Formats) und den [Audio-Codecs, die in ihnen verwendet werden können](/de/docs/Web/Media/Guides/Formats/Audio_codecs). Ebenfalls verfügbar ist [ein Leitfaden zu den unterstützten Codecs für Video](/de/docs/Web/Media/Guides/Formats/Video_codecs).

Weitere Nutzungshinweise:

- Wenn Sie das `controls`-Attribut nicht angeben, enthält der Audioplayer nicht die Standardsteuerungen des Browsers. Sie können jedoch Ihre eigenen benutzerdefinierten Steuerungen mit JavaScript und der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API erstellen.
- Um eine genaue Kontrolle über Ihre Audioinhalte zu ermöglichen, lösen `HTMLMediaElement`s viele verschiedene [Ereignisse](/de/docs/Web/API/HTMLMediaElement#events) aus. Dies bietet auch eine Möglichkeit, den Abrufprozess des Audios zu überwachen, damit Sie nach Fehlern suchen oder erkennen können, wann genügend vorhanden ist, um es abzuspielen oder zu manipulieren.
- `<audio>`-Elemente können keine Untertitel oder Bildunterschriften in derselben Weise wie `<video>`-Elemente zugeordnet werden. Siehe [WebVTT und Audio](https://www.iandevlin.com/blog/2015/12/html5/webvtt-and-audio/) von Ian Devlin für einige nützliche Informationen und Workarounds.
- Um den Fallback-Inhalt in Browsern zu testen, die das Element unterstützen, können Sie `<audio>` durch ein nicht vorhandenes Element wie `<notanaudio>` ersetzen.

Eine gute allgemeine Informationsquelle zur Verwendung von HTML `<audio>` ist das [HTML-Video- und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)-Anfänger-Tutorial.

### Styling mit CSS

Das `<audio>`-Element hat keine eigene visuelle Ausgabe, es sei denn, das `controls`-Attribut ist angegeben, in diesem Fall werden die Standardsteuerungen des Browsers angezeigt.

Die Standardsteuerungen haben einen {{cssxref("display")}}-Wert von `inline` und es ist oft eine gute Idee, den Wert auf `block` zu setzen, um die Kontrolle über die Positionierung und das Layout zu verbessern, es sei denn, Sie möchten, dass es in einem Textblock oder ähnlichem sitzt.

Sie können die Standardsteuerungen mit Eigenschaften stylen, die den Block als Ganzes betreffen, sodass Sie ihm beispielsweise einen {{cssxref("border")}} und {{cssxref("border-radius")}}, {{cssxref("padding")}}, {{cssxref("margin")}} usw. geben können. Sie können jedoch nicht die einzelnen Komponenten im Audioplayer stylen (z.B. die Schaltflächengröße oder Symbole ändern, die Schriftart ändern usw.), und die Steuerelemente unterscheiden sich je nach Browser.

Um ein einheitliches Aussehen und Verhalten in verschiedenen Browsern zu gewährleisten, müssen Sie benutzerdefinierte Steuerungen erstellen; diese können in beliebiger Weise markiert und gestylt werden, und dann kann JavaScript zusammen mit der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API verwendet werden, um ihre Funktionalität zu verdrahten.

[Grundlagen der Videoplayer-Stilgestaltung](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics) bietet einige nützliche Stiltechniken — es ist im Kontext von `<video>` geschrieben, aber vieles davon ist gleichermaßen für `<audio>` anwendbar.

### Erkennung des Hinzufügens und Entfernens von Spuren

Sie können erkennen, wann Spuren zu einem `<audio>`-Element hinzugefügt oder daraus entfernt werden, indem Sie die [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event)-Ereignisse verwenden. Diese Ereignisse werden jedoch nicht direkt an das `<audio>`-Element selbst gesendet. Stattdessen werden sie an das Spurlistenobjekt innerhalb des `<audio>`-Elements gesendet, das zum Typ der Spur gehört, die dem Element hinzugefügt wurde:

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Ein [`AudioTrackList`](/de/docs/Web/API/AudioTrackList)-Objekt, das alle Audio-Tracks des Medienelements enthält. Sie können diesem Objekt einen `addtrack`-Listener hinzufügen, um benachrichtigt zu werden, wenn neue Audiotracks zum Element hinzugefügt werden.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)
  - : Fügen Sie diesem [`VideoTrackList`](/de/docs/Web/API/VideoTrackList)-Objekt einen `addtrack`-Listener hinzu, um informiert zu werden, wenn Videotracks zum Element hinzugefügt werden.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
  - : Fügen Sie diesem [`TextTrackList`](/de/docs/Web/API/TextTrackList) einen `addtrack`-Ereignis-Listener hinzu, um informiert zu werden, wenn neue Textspuren zum Element hinzugefügt werden.

> [!NOTE]
> Obwohl es ein `<audio>`-Element ist, hat es dennoch Video- und Textspurlisten und kann tatsächlich zur Präsentation von Videos verwendet werden, obwohl die Benutzeroberflächenimplikationen seltsam sein können.

Um beispielsweise zu erkennen, wann Audiotracks zu einem `<audio>`-Element hinzugefügt oder daraus entfernt werden, können Sie folgenden Code verwenden:

```js
const elem = document.querySelector("audio");

elem.audioTrackList.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTrackList.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Dieser Code überwacht das Hinzufügen und Entfernen von Audiotracks zum/vom Element und ruft eine hypothetische Funktion eines Spur-Editors auf, um die Spur in der Liste der verfügbaren Spuren des Editors zu registrieren oder zu entfernen.

Sie können auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um auf die [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event)-Ereignisse zu hören.

## Barrierefreiheit

Audio mit gesprochenem Dialog sollte sowohl Untertitel als auch Transkriptionen bereitstellen, die den Inhalt genau beschreiben. Untertitel, die unter Verwendung von [WebVTT](/de/docs/Web/API/WebVTT_API) spezifiziert werden, ermöglichen es Menschen mit Hörbehinderung, den Inhalt einer Audioaufnahme zu verstehen, während die Aufnahme abgespielt wird, während Transkriptionen es Menschen ermöglichen, die mehr Zeit benötigen, den Inhalt der Aufnahme in einem Tempo und Format zu überprüfen, das für sie komfortabel ist.

Wenn automatische Untertiteledienste verwendet werden, ist es wichtig, den generierten Inhalt zu überprüfen, um sicherzustellen, dass er das Originalaudio genau wiedergibt.

Das `<audio>`-Element unterstützt WebVTT nicht direkt. Sie müssen eine Bibliothek oder ein Framework finden, das diese Fähigkeit für Sie bereitstellt, oder den Code selbst schreiben, um die Untertitel anzuzeigen. Eine Option ist, Ihr Audio mit einem {{HTMLElement("video")}}-Element abzuspielen, das WebVTT unterstützt.

Zusätzlich zum gesprochenen Dialog sollten Untertitel und Transkriptionen auch Musik und Soundeffekte identifizieren, die wichtige Informationen übermitteln. Dazu gehören Emotion und Ton. Zum Beispiel, beachten Sie im untenstehenden WebVTT die Verwendung von eckigen Klammern, um dem Betrachter Ton und emotionale Einsicht zu vermitteln; dies kann helfen, die Stimmung zu etablieren, die ansonsten durch Musik, nonverbale Geräusche und entscheidende Soundeffekte bereitgestellt wird, und so weiter.

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

Es ist auch eine gute Praxis, etwas Inhalt (wie z.B. den direkten Download-Link) als Fallback für Benutzer bereitzustellen, die einen Browser verwenden, in dem das `<audio>`-Element nicht unterstützt wird:

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
- [MDN Verständnis von WCAG, Richtlinie 1.2 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [Verständnis des Erfolgskriteriums 1.2.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Verständnis des Erfolgskriteriums 1.2.2 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Beispiele

### Grundlegende Nutzung

Das folgende Beispiel zeigt die grundlegende Verwendung des `<audio>`-Elements, um eine OGG-Datei abzuspielen. Es wird aufgrund des `autoplay`-Attributs automatisch abgespielt—wenn die Seite die Erlaubnis dazu hat—und enthält auch Fallback-Inhalte.

```html
<!-- Basic audio playback -->
<audio src="AudioTest.ogg" autoplay>
  <a href="AudioTest.ogg" download="AudioTest.ogg">Download OGG audio</a>.
</audio>
```

Für Details dazu, wann Autoplay funktioniert, wie man die Erlaubnis zur Verwendung von Autoplay erhält und wann es angemessen ist, Autoplay zu verwenden, siehe unseren [Autoplay-Leitfaden](/de/docs/Web/Media/Guides/Autoplay).

### `<audio>`-Element mit \<source>-Element

Dieses Beispiel gibt an, welche Tonspur mithilfe des `src`-Attributs in einem verschachtelten `<source>`-Element eingebettet werden soll, anstatt direkt im `<audio>`-Element. Es ist immer nützlich, den MIME-Typ der Datei im `type`-Attribut anzugeben, da der Browser sofort feststellen kann, ob er die Datei abspielen kann und sonst keine Zeit darauf verschwendet.

```html
<audio controls>
  <source src="foo.wav" type="audio/wav" />
  <a href="foo.wav" download="foo.wav">Download WAV audio</a>.
</audio>
```

### `<audio>` mit mehreren \<source>-Elementen

Dieses Beispiel enthält mehrere `<source>`-Elemente. Der Browser versucht, das erste Quell-Element (Opus) zu laden, wenn er es abspielen kann; wenn nicht, greift er auf das zweite (Vorbis) zurück und schließlich auf MP3:

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
        >, Phrasierte Inhalte, Eingebettete Inhalte. Wenn es ein
        <a href="#controls"><code>controls</code></a> Attribut hat: Interaktive
        Inhalte und greifbare Inhalte.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        Wenn das Element ein <a href="#src"><code>src</code></a>
        Attribut hat: Null oder mehr {{HTMLElement("track")}} Elemente,
        gefolgt von transparenten Inhalten, die keine
        <code>&lt;audio&gt;</code> oder {{HTMLElement("video")}}
        Medienelemente enthalten.<br />Andernfalls: Null oder mehr {{HTMLElement("source")}}
        Elemente gefolgt von null oder mehr {{HTMLElement("track")}}
        Elementen, gefolgt von transparenten Inhalten, die keine
        <code>&lt;audio&gt;</code> oder {{HTMLElement("video")}}
        Medienelemente enthalten.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind zwingend notwendig.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>Jedes Element, das eingebettete Inhalte akzeptiert.</td>
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

  - [Mediencontainerformate (Dateitypen)](/de/docs/Web/Media/Guides/Formats/Containers)
  - [Leitfaden zu Audiocodecs, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats/Audio_codecs)

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)
- {{htmlelement("source")}}
- {{htmlelement("video")}}
- [Lernbereich: HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Grundlagen der plattformübergreifenden Audioarbeit](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
