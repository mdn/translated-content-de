---
title: "<audio>: Das Einbetten eines Audio-Elements"
slug: Web/HTML/Reference/Elements/audio
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{HTMLSidebar}}

Das **`<audio>`** [HTML](/de/docs/Web/HTML) Element wird verwendet, um Toninhalte in Dokumente einzubetten. Es kann eine oder mehrere Audioquellen enthalten, die mit dem `src`-Attribut oder dem {{HTMLElement("source")}}-Element dargestellt werden: Der Browser wählt die am besten geeignete aus. Es kann auch das Ziel für gestreamte Medien sein, indem es einen [`MediaStream`](/de/docs/Web/API/MediaStream) verwendet.

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

Das obige Beispiel zeigt die grundlegende Verwendung des `<audio>`-Elements. Ähnlich wie beim {{htmlelement("img")}}-Element fügen wir einen Pfad zu den Medien ein, die wir im `src`-Attribut einbetten möchten; wir können andere Attribute hinzufügen, um Informationen wie beispielsweise das automatische Abspielen oder Wiederholen anzugeben oder ob wir die Standard-Audiosteuerungen des Browsers anzeigen möchten.

Der Inhalt zwischen den öffnenden und schließenden `<audio></audio>`-Tags wird als Fallback in Browsern angezeigt, die das Element nicht unterstützen.

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `autoplay`

  - : Ein Boolean-Attribut: Wenn angegeben, beginnt das Audio automatisch mit der Wiedergabe, sobald es dazu in der Lage ist, ohne darauf zu warten, dass die gesamte Audiodatei heruntergeladen wurde.

    > [!NOTE]
    > Seiten, die automatisch Audio (oder Videos mit einer Tonspur) abspielen, können eine unangenehme Erfahrung für Benutzer sein und sollten vermieden werden, wenn möglich. Wenn Sie dennoch eine Autoplay-Funktion anbieten müssen, sollten Sie diese als Opt-in gestalten (erfordert, dass ein Benutzer sie ausdrücklich aktiviert). Dies kann jedoch nützlich sein, wenn mediale Quellen erstellt werden, deren Quelle später unter Benutzerkontrolle festgelegt wird. Unseren [Autoplay-Leitfaden](/de/docs/Web/Media/Guides/Autoplay) finden Sie hier für zusätzliche Informationen dazu, wie Sie Autoplay ordnungsgemäß verwenden.

- `controls`

  - : Wenn dieses Attribut vorhanden ist, bietet der Browser Steuerungen an, die dem Benutzer die Steuerung der Audiowiedergabe, einschließlich Lautstärke, Suchlauf und Wiedergabe/Pause, ermöglichen.

- `controlslist`

  - : Das [`controlslist`](https://wicg.github.io/controls-list/explainer.html)-Attribut hilft, wenn angegeben, dem Browser bei der Auswahl, welche Steuerungen für das `audio`-Element angezeigt werden, wann immer der Browser seine eigenen Steuerungssätze anzeigt (das heißt, wenn das `controls`-Attribut angegeben ist).

    Die erlaubten Werte sind `nodownload`, `nofullscreen` und `noremoteplayback`.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)

  - : Dieses {{Glossary("Enumerated", "enumerierte")}}-Attribut gibt an, ob CORS verwendet werden soll, um die zugehörige Audiodatei abzurufen. [CORS-fähige Ressourcen](/de/docs/Web/HTML/How_to/CORS_enabled_image) können im {{HTMLElement("canvas")}}-Element ohne _Verunreinigung_ wiederverwendet werden. Die erlaubten Werte sind:

    - `anonymous`
      - : Sendet eine Cross-Origin-Anfrage ohne Berechtigungsnachweis. Anders ausgedrückt: Es sendet den `Origin:`-HTTP-Header ohne ein Cookie, ein X.509-Zertifikat oder die Durchführung einer HTTP-Basisauthentifizierung. Wenn der Server der Ursprungssite keine Berechtigungen gibt (indem der `Access-Control-Allow-Origin:`-HTTP-Header nicht gesetzt wird), wird die Ressource _verunreinigt_ und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Sendet eine Cross-Origin-Anfrage mit einem Berechtigungsnachweis. Das bedeutet, dass der `Origin:`-HTTP-Header mit einem Cookie, einem Zertifikat oder der Durchführung einer HTTP-Basisauthentifizierung gesendet wird. Wenn der Server der Ursprungssite keine Berechtigungen gibt (durch `Access-Control-Allow-Credentials:`-HTTP-Header), wird die Ressource _verunreinigt_ und ihre Nutzung eingeschränkt.

    Wenn nicht vorhanden, wird die Ressource ohne CORS-Anfrage abgerufen (d.h. ohne Senden des `Origin:`-HTTP-Headers), was die nicht verunreinigte Verwendung in {{HTMLElement('canvas')}}-Elementen verhindert. Bei Ungültigkeit wird es so behandelt, als wäre das enumerierte Schlüsselwort **anonymous** verwendet worden. Siehe [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für zusätzliche Informationen.

- `disableremotoplayback`

  - : Ein Boolean-Attribut, das verwendet wird, um die Fähigkeit zur Fernwiedergabe auf Geräten zu deaktivieren, die mit kabelgebundenen (HDMI, DVI usw.) und drahtlosen Technologien (Miracast, Chromecast, DLNA, AirPlay usw.) verbunden sind. Siehe den vorgeschlagenen [Remote Playback API-Spezifikationen](https://w3c.github.io/remote-playback/#the-disableremoteplayback-attribute) für weitere Informationen.

    In Safari können Sie [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) als Fallback verwenden.

- `loop`
  - : Ein Boolean-Attribut: Wenn angegeben, sucht der Audioplayer automatisch wieder zum Anfang, sobald das Ende des Audios erreicht ist.
- `muted`
  - : Ein Boolean-Attribut, das angibt, ob das Audio initial stummgeschaltet wird. Der Standardwert ist `false`.
- `preload`

  - : Dieses {{Glossary("enumerated", "enumerierte")}} Attribut ist dazu gedacht, dem Browser einen Hinweis darauf zu geben, was der Autor für die beste Benutzererfahrung hält. Es kann einen der folgenden Werte haben:

    - `none`: Gibt an, dass das Audio nicht vorab geladen werden soll.
    - `metadata`: Gibt an, dass nur die Audiometadaten (z. B. Länge) abgerufen werden.
    - `auto`: Gibt an, dass die gesamte Audiodatei heruntergeladen werden kann, auch wenn der Benutzer nicht erwartet wird sie zu verwenden.
    - _leerer String_: Ein Synonym für den Wert `auto`.

    Der Standardwert ist für jeden Browser unterschiedlich. Die Spezifikation empfiehlt, es auf `metadata` zu setzen.

    > [!NOTE]
    >
    > - Das `autoplay`-Attribut hat Vorrang vor `preload`. Wenn `autoplay` angegeben ist, müsste der Browser natürlich damit beginnen, das Audio für die Wiedergabe herunterzuladen.
    > - Der Browser ist durch die Spezifikation nicht gezwungen, den Wert dieses Attributs zu befolgen; es ist nur ein Hinweis.

- `src`
  - : Die URL des einzubettenden Audios. Dies unterliegt [HTTP-Zugriffskontrollen](/de/docs/Web/HTTP/Guides/CORS). Dies ist optional; Sie können stattdessen das {{htmlelement("source")}}-Element innerhalb des Audioblocks verwenden, um das einzubettende Audio anzugeben.

## Events

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
        Der Eingabepuffer eines [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) muss verarbeitet werden.
      </td>
    </tr>
    <tr>
      <td>
        [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)
      </td>
      <td>
        Der Browser kann das Medium abspielen, schätzt aber, dass nicht genügend Daten geladen sind, um das Medium bis zum Ende abzuspielen, ohne anhalten zu müssen, um weiteren Inhalt zu puffern.
      </td>
    </tr>
    <tr>
      <td>
        [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
      </td>
      <td>
        Der Browser schätzt, dass er das Medium bis zum Ende abspielen kann, ohne den Inhalt puffern zu müssen.
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
        Das Medium ist leer geworden; zum Beispiel wird dieses Ereignis gesendet, wenn das Medium bereits geladen (oder teilweise geladen) ist und die [`HTMLMediaElement.load`](/de/docs/Web/API/HTMLMediaElement/load)-Methode aufgerufen wird, um es neu zu laden.
      </td>
    </tr>
    <tr>
      <td>
        [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)
      </td>
      <td>Die Wiedergabe ist gestoppt, weil das Ende des Mediums erreicht wurde.</td>
    </tr>
    <tr>
      <td>
        [`loadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event)
      </td>
      <td>Der erste Frame des Mediums ist fertig geladen.</td>
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
        Die Wiedergabe ist bereit zu starten, nachdem sie pausiert oder wegen Datenmangels verzögert wurde.
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
      <td>Ein <em>suche</em>-Vorgang wurde abgeschlossen.</td>
    </tr>
    <tr>
      <td>
        [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
      </td>
      <td>Ein <em>suche</em>-Vorgang wurde begonnen.</td>
    </tr>
    <tr>
      <td>
        [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
      </td>
      <td>
        Der Benutzeragent versucht, Mediendaten zu laden, aber die Daten sind unerwartet nicht verfügbar.
      </td>
    </tr>
    <tr>
      <td>
        [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event)
      </td>
      <td>Der Ladevorgang der Mediendaten wurde ausgesetzt.</td>
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
      <td>Die Wiedergabe wurde gestoppt, weil es vorübergehend an Daten mangelt.</td>
    </tr>
  </tbody>
</table>

## Nutzungshinweise

Browser unterstützen nicht alle die gleichen [Dateitypen](/de/docs/Web/Media/Guides/Formats/Containers) und [Audiocodecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs); Sie können mehrere Quellen innerhalb verschachtelter {{htmlelement("source")}}-Elemente bereitstellen, und der Browser verwendet dann die erste, die er versteht:

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

Die Audioquelle kann auf jede gültige [URL](/de/docs/Web/URI) gesetzt werden, einschließlich HTTP(S)-URLs und [Data-URLs](/de/docs/Web/URI/Reference/Schemes/data). Wenn HTTP(S)-URLs verwendet werden, beachten Sie, dass das Cache-Verhalten des Browsers beeinflusst, wie oft die Datei vom Server angefordert wird. Data-URLs betten die Audiodaten direkt in das HTML ein, was bei kleinen Audiodateien nützlich sein kann, aber für größere Dateien nicht empfohlen wird, da dies die Größe der HTML-Datei erhöht.

Wenn {{htmlelement("source")}}-Elemente verwendet werden, versucht der Browser, jede Quelle nacheinander zu laden. Wenn eine Quelle fehlschlägt (z. B. wegen einer ungültigen URL oder eines nicht unterstützten Formats), wird die nächste Quelle versucht und so weiter. Ein `error`-Ereignis wird auf dem `<audio>`-Element ausgelöst, nachdem alle Quellen fehlgeschlagen sind; `error`-Ereignisse werden nicht bei jedem einzelnen `<source>`-Element ausgelöst.

Sie können auch die [Web Audio API](/de/docs/Web/API/Web_Audio_API) verwenden, um Audio-Streams direkt zu erzeugen und zu bearbeiten, anstatt vorhandene Audiodateien zu streamen. Sie können die [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) in JavaScript auf ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt setzen. Dies wird häufig für Live-Audio-Streams oder Echtzeit-Audioverarbeitung verwendet.

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

Beachten Sie, dass `MediaStream`-Quellen Einschränkungen haben: Sie sind nicht suchbar und unterstützen nur eine begrenzte Anzahl von Codecs.

Wir bieten einen umfassenden und ausführlichen [Leitfaden zu Medientypen](/de/docs/Web/Media/Guides/Formats) und den [AUDIO-Codecs, die innerhalb dieser verwendet werden können](/de/docs/Web/Media/Guides/Formats/Audio_codecs). Ebenfalls verfügbar ist ein [Leitfaden zu den unterstützten Codecs für Video](/de/docs/Web/Media/Guides/Formats/Video_codecs).

Andere Nutzungshinweise:

- Wenn Sie das `controls`-Attribut nicht angeben, enthält der Audioplayer nicht die Standardsteuerungen des Browsers. Sie können jedoch Ihre eigenen benutzerdefinierten Steuerelemente mit JavaScript und der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API erstellen.
- Um Ihnen eine präzise Kontrolle über Ihren Audioinhalt zu ermöglichen, lösen `HTMLMediaElement`s viele verschiedene [Events](/de/docs/Web/API/HTMLMediaElement#events) aus. Dies bietet auch eine Möglichkeit, den Abrufvorgang des Audios zu überwachen, damit Sie Fehler erkennen oder feststellen können, wann genug verfügbar ist, um mit der Wiedergabe zu beginnen oder es zu manipulieren.
- `<audio>`-Elemente können keine Untertitel oder Bildunterschriften zugeordnet bekommen, wie `<video>`-Elemente es können. Siehe [WebVTT und Audio](https://www.iandevlin.com/blog/2015/12/html5/webvtt-and-audio/) von Ian Devlin für nützliche Informationen und Workarounds.
- Um den Fallback-Inhalt in Browsern zu testen, die das Element unterstützen, können Sie `<audio>` durch ein nicht vorhandenes Element wie `<notanaudio>` ersetzen.

Eine gute allgemeine Informationsquelle zur Verwendung von HTML `<audio>` ist das [HTML-Video- und Audio]-[Einsteiger-Tutorial](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio).

### Styling mit CSS

Das `<audio>`-Element hat keinen eigenen visuellen Output, es sei denn, das `controls`-Attribut ist angegeben, in diesem Fall werden die Standardsteuerungen des Browsers angezeigt.

Die Standardsteuerungen haben standardmäßig einen {{cssxref("display")}}-Wert von `inline`, und es ist oft eine gute Idee, den Wert auf `block` zu setzen, um die Kontrolle über Positionierung und Layout zu verbessern, es sei denn, Sie möchten, dass es innerhalb eines Textblocks oder ähnlichem sitzt.

Sie können die Standardsteuerungen mit Eigenschaften stylen, die den Block als Ganzes betreffen. Beispielsweise können Sie ihm eine {{cssxref("border")}} und {{cssxref("border-radius")}}, {{cssxref("padding")}}, {{cssxref("margin")}} usw. geben. Sie können jedoch nicht die einzelnen Komponenten innerhalb des Audioplayers stylen (z. B. die Größe der Schaltflächen oder Symbole ändern, die Schriftart ändern usw.), und die Steuerungen unterscheiden sich je nach Browser.

Um ein konsistentes Aussehen und Gefühl zwischen den Browsern zu erreichen, müssen Sie benutzerdefinierte Steuerungen erstellen; diese können auf beliebige Weise markiert und gestylt werden, und dann kann JavaScript zusammen mit der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API verwendet werden, um deren Funktionalität zu verknüpfen.

[Grundlagen der Videoplayer-Stilierung](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics) bietet einige nützliche Stiltechniken — sie sind im Kontext von `<video>` geschrieben, aber vieles davon ist auch für `<audio>` anwendbar.

### Erkennung von Hinzufügung und Entfernung von Tracks

Sie können erkennen, wann Tracks zu einem `<audio>`-Element hinzugefügt oder daraus entfernt werden, indem Sie die [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event)- und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event)-Ereignisse verwenden. Diese Ereignisse werden jedoch nicht direkt an das `<audio>`-Element selbst gesendet. Stattdessen werden sie an das Track-Listenobjekt innerhalb des `<audio>`-Elements gesendet, das dem Typ des Tracks entspricht, der dem Element hinzugefügt wurde:

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die alle Audio-Tracks des Medienelements enthält. Sie können einen `addtrack`-Listener zu diesem Objekt hinzufügen, um benachrichtigt zu werden, wenn neue Audio-Tracks zum Element hinzugefügt werden.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)
  - : Fügen Sie diesem [`VideoTrackList`](/de/docs/Web/API/VideoTrackList)-Objekt einen `addtrack`-Listener hinzu, um informiert zu werden, wenn Video-Tracks zum Element hinzugefügt werden.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
  - : Fügen Sie diesem [`TextTrackList`](/de/docs/Web/API/TextTrackList)-Objekt einen `addtrack`-Listener hinzu, um benachrichtigt zu werden, wenn neue Text-Tracks zum Element hinzugefügt werden.

> [!NOTE]
> Auch wenn es sich um ein `<audio>`-Element handelt, hat es dennoch Video- und Texttracklisten und kann tatsächlich verwendet werden, um Video darzustellen, obwohl die Benutzerschnittstellenimplikationen merkwürdig sein können.

Um beispielsweise zu erkennen, wann Audio-Tracks zu einem `<audio>`-Element hinzugefügt oder daraus entfernt werden, können Sie einen Code wie diesen verwenden:

```js
const elem = document.querySelector("audio");

elem.audioTrackList.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTrackList.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Dieser Code beobachtet das Hinzufügen und Entfernen von Audiotracks am Element und ruft eine hypothetische Funktion in einem Track-Editor auf, um den Track in der Liste der verfügbaren Tracks des Editors zu registrieren und zu entfernen.

Sie können auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um die [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event)- und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event)-Ereignisse zu überwachen.

## Barrierefreiheit

Audio mit gesprochenem Dialog sollte sowohl Untertitel als auch Transkripte bereitstellen, die den Inhalt genau beschreiben. Untertitel, die mit [WebVTT](/de/docs/Web/API/WebVTT_API) angegeben werden, ermöglichen es Menschen mit Hörbeeinträchtigungen, den Inhalt einer Audioaufnahme zu verstehen, während die Aufnahme abgespielt wird, während Transkripte es Menschen ermöglichen, die zusätzliche Zeit benötigen, den Inhalt der Aufnahme in einem Tempo und Format zu überprüfen, das ihnen angenehm ist.

Wenn automatische Untertitelungsdienste verwendet werden, ist es wichtig, den generierten Inhalt zu überprüfen, um sicherzustellen, dass er die Quellaudio korrekt darstellt.

Das `<audio>`-Element unterstützt WebVTT nicht direkt. Sie müssen eine Bibliothek oder ein Framework finden, das diese Funktionalität bereitstellt, oder den Code selbst schreiben, um Untertitel anzuzeigen. Eine Option ist, Ihr Audio mit einem {{HTMLElement("video")}}-Element abzuspielen, das WebVTT unterstützt.

Neben gesprochenem Dialog sollten Untertitel und Transkripte auch Musik und Soundeffekte identifizieren, die wichtige Informationen kommunizieren. Dies schließt Emotionen und Tonfall ein. Zum Beispiel wird im WebVTT unten die Verwendung von eckigen Klammern bemerkt, um dem Zuschauer Ton und emotionale Einsichten zu vermitteln; dies kann helfen, die durch Musik, nonverbale Geräusche und entscheidende Soundeffekte vermittelte Stimmung zu etablieren und so weiter.

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

Es ist auch gute Praxis, einen Inhalt (wie den direkten Download-Link) als Fallback für Zuschauer bereitzustellen, die einen Browser verwenden, in dem das `<audio>`-Element nicht unterstützt wird:

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
- [MDN Verständnis für WCAG, Leitlinie 1.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [Verständnis des Erfolgskriteriums 1.2.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Verständnis des Erfolgskriteriums 1.2.2 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel zeigt die grundlegende Verwendung des `<audio>`-Elements zum Abspielen einer OGG-Datei. Es wird dank des `autoplay`-Attributs automatisch abgespielt, wenn die Seite die Erlaubnis dazu hat, und enthält auch Fallback-Inhalte.

```html
<!-- Basic audio playback -->
<audio src="AudioTest.ogg" autoplay>
  <a href="AudioTest.ogg" download="AudioTest.ogg">Download OGG audio</a>.
</audio>
```

Details dazu, wann Autoplay funktioniert, wie man die Erlaubnis zur Verwendung von Autoplay erhält und wie und wann es angemessen ist, Autoplay zu verwenden, finden Sie in unserem [Autoplay-Leitfaden](/de/docs/Web/Media/Guides/Autoplay).

### `<audio>`-Element mit \<source>-Element

In diesem Beispiel wird angegeben, welcher Audiotrack eingebettet werden soll, indem das `src`-Attribut auf einem verschachtelten `<source>`-Element anstelle direkt auf dem `<audio>`-Element verwendet wird. Es ist immer nützlich, den MIME-Typ der Datei im `type`-Attribut zu spezifizieren, da der Browser sofort bestimmen kann, ob er diese Datei abspielen kann, und keine Zeit darauf verschwendet, wenn nicht.

```html
<audio controls>
  <source src="foo.wav" type="audio/wav" />
  <a href="foo.wav" download="foo.wav">Download WAV audio</a>.
</audio>
```

### `<audio>` mit mehreren \<source>-Elementen

Dieses Beispiel enthält mehrere `<source>`-Elemente. Der Browser versucht, das erste Source-Element (Opus) zu laden, wenn er es abspielen kann; wenn nicht, fällt er auf das zweite (Vorbis) zurück und schließlich auf MP3:

```html
<audio controls>
  <source src="foo.opus" type="audio/ogg; codecs=opus" />
  <source src="foo.ogg" type="audio/ogg; codecs=vorbis" />
  <source src="foo.mp3" type="audio/mpeg" />
</audio>
```

## Technische Übersicht

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
        >, Phrasierungs-Inhalt, eingebetteter Inhalt. Wenn es ein
        <a href="#controls"><code>controls</code></a>-Attribut hat: interaktiver
        Inhalt und greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Wenn das Element ein <a href="#src"><code>src</code></a>
        Attribut hat: Null oder mehr {{HTMLElement("track")}}-Elemente
        gefolgt von transparentem Inhalt, der keine
        <code>&lt;audio&gt;</code> oder {{HTMLElement("video")}}
        Medienelemente enthält.<br />Andernfalls: Null oder mehr {{HTMLElement("source")}}
        Elemente gefolgt von null oder mehr {{HTMLElement("track")}}
        Elementen, gefolgt von transparentem Inhalt, der keine
        <code>&lt;audio&gt;</code> oder {{HTMLElement("video")}}
        Medienelemente enthält.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Anfangs- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebetteten Inhalt akzeptiert.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
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
  - [Leitfaden zu Audiocodecs, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats/Audio_codecs)

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)
- {{htmlelement("source")}}
- {{htmlelement("video")}}
- [Lernbereich: HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Grundlagen zu plattformübergreifendem Audio](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
