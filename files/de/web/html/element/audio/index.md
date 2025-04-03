---
title: "<audio>: Das Embed Audio-Element"
slug: Web/HTML/Element/audio
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTMLSidebar}}

Das **`<audio>`** [HTML](/de/docs/Web/HTML) Element wird verwendet, um Toninhalte in Dokumenten einzubetten. Es kann eine oder mehrere Audioquellen enthalten, die mit dem `src` Attribut oder dem {{HTMLElement("source")}} Element dargestellt werden: Der Browser wählt die am besten geeignete Quelle aus. Es kann auch das Ziel für gestreamte Medien sein, indem ein [`MediaStream`](/de/docs/Web/API/MediaStream) verwendet wird.

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

Das obige Beispiel zeigt die grundlegende Verwendung des `<audio>` Elements. In ähnlicher Weise wie das {{htmlelement("img")}} Element enthalten wir einen Pfad zu dem Medium, das wir im `src` Attribut einbetten möchten; wir können andere Attribute hinzufügen, um Informationen anzugeben, wie zum Beispiel, ob wir es automatisch abspielen und wiederholen möchten, ob wir die Standardschaltflächen des Browsers anzeigen möchten, usw.

Der Inhalt innerhalb der öffnenden und schließenden `<audio></audio>` Tags wird als Fallback in Browsern angezeigt, die das Element nicht unterstützen.

## Attribute

Die Attribute dieses Elements beinhalten die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `autoplay`

  - : Ein boolesches Attribut: Wenn angegeben, beginnt das Audio automatisch mit der Wiedergabe, sobald es dazu bereit ist, ohne darauf zu warten, dass die gesamte Audiodatei heruntergeladen wird.

    > [!NOTE]
    > Websites, die automatisch Audio abspielen (oder Videos mit einer Audiospur), können für Nutzer eine unangenehme Erfahrung sein und sollten, wenn möglich, vermieden werden. Wenn Sie die Autoplay-Funktionalität anbieten müssen, sollten Sie diese als Opt-in gestalten (was erfordert, dass der Benutzer sie explizit aktiviert). Dies kann jedoch nützlich sein, wenn Medienelemente erstellt werden, deren Quelle später und unter Benutzerkontrolle festgelegt wird. Weitere Informationen zur ordnungsgemäßen Verwendung von Autoplay finden Sie in unserem [Autoplay-Leitfaden](/de/docs/Web/Media/Guides/Autoplay).

- `controls`

  - : Wenn dieses Attribut vorhanden ist, bietet der Browser Steuerelemente an, mit denen der Benutzer die Audiowiedergabe steuern kann, einschließlich Lautstärke, Suchfunktion und Pause/Fortsetzen der Wiedergabe.

- `controlslist`

  - : Das [`controlslist`](https://wicg.github.io/controls-list/explainer.html) Attribut hilft dem Browser bei der Auswahl, welche Steuerelemente für das `audio` Element angezeigt werden sollen, wann immer der Browser seine eigene Menge von Steuerelementen zeigt (d.h. wenn das `controls` Attribut angegeben ist).

    Die erlaubten Werte sind `nodownload`, `nofullscreen` und `noremoteplayback`.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Dieses {{Glossary("Enumerated", "enumerierte")}} Attribut gibt an, ob CORS verwendet werden soll, um die zugehörige Audiodatei zu holen. [CORS-fähige Ressourcen](/de/docs/Web/HTML/CORS_enabled_image) können im {{HTMLElement("canvas")}} Element ohne Verunreinigung wiederverwendet werden. Die erlaubten Werte sind:

    - `anonymous`
      - : Sendet eine Cross-Origin-Anfrage ohne Anmeldedaten. Mit anderen Worten: Es sendet den `Origin:` HTTP-Header ohne Cookie, ohne X.509-Zertifikat oder ohne Durchführung von HTTP-Basicauthentifizierung. Wenn der Server keine Anmeldedaten an die Ursprungsseite sendet (indem er den HTTP-Header `Access-Control-Allow-Origin:` nicht setzt), wird die Ressource kontaminiert und ihre Verwendung eingeschränkt.
    - `use-credentials`
      - : Sendet eine Cross-Origin-Anfrage mit Anmeldedaten. Mit anderen Worten: Es sendet den `Origin:` HTTP-Header mit einem Cookie, einem Zertifikat oder der Durchführung von HTTP-Basicauthentifizierung. Wenn der Server keine Anmeldedaten an die Ursprungsseite sendet (über `Access-Control-Allow-Credentials:` HTTP-Header), wird die Ressource kontaminiert und ihre Verwendung eingeschränkt.

    Wenn nicht vorhanden, wird die Ressource ohne CORS-Anfrage abgerufen (d.h. ohne Senden des `Origin:` HTTP-Headers), was ihre nicht kontaminierte Verwendung in {{HTMLElement('canvas')}} Elementen verhindert. Wenn ungültig, wird es behandelt, als ob das enumerierte Schlüsselwort **anonymous** verwendet wurde. Weitere Informationen finden Sie unter [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Attributes/crossorigin).

- `disableremoteplayback`

  - : Ein boolesches Attribut, das verwendet wird, um die Fähigkeit zur Fernwiedergabe auf Geräten zu deaktivieren, die über kabelgebundene (HDMI, DVI, usw.) und kabellose Technologien (Miracast, Chromecast, DLNA, AirPlay, usw.) angeschlossen sind. Weitere Informationen finden Sie in [diesem vorgeschlagenen Standard](https://www.w3.org/TR/remote-playback/#the-disableremoteplayback-attribute).

    In Safari können Sie [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) als Fallback verwenden.

- `loop`
  - : Ein boolesches Attribut: Wenn angegeben, wird der Audioplayer automatisch zum Anfang zurückkehren, wenn das Ende des Audios erreicht ist.
- `muted`
  - : Ein boolesches Attribut, das angibt, ob das Audio anfänglich stummgeschaltet wird. Sein Standardwert ist `false`.
- `preload`

  - : Dieses {{Glossary("enumerated", "enumerierte")}} Attribut soll einen Hinweis an den Browser geben, was der Autor für die beste Benutzererfahrung hält. Es kann einen der folgenden Werte haben:

    - `none`: Gibt an, dass das Audio nicht vorab geladen werden soll.
    - `metadata`: Gibt an, dass nur Audiodaten-Metadaten (z.B. Länge) abgerufen werden.
    - `auto`: Gibt an, dass die gesamte Audiodatei heruntergeladen werden kann, auch wenn nicht erwartet wird, dass der Benutzer sie nutzt.
    - _leerzeichen_: Ein Synonym für den Wert `auto`.

    Der Standardwert ist in jedem Browser unterschiedlich. Die Spezifikation rät, es auf `metadata` zu setzen.

    > [!NOTE]
    >
    > - Das `autoplay` Attribut hat Vorrang vor `preload`. Wenn `autoplay` angegeben ist, müsste der Browser offensichtlich beginnen, das Audio für die Wiedergabe herunterzuladen.
    > - Der Browser ist durch die Spezifikation nicht gezwungen, den Wert dieses Attributs zu befolgen; es ist lediglich ein Hinweis.

- `src`
  - : Die URL des einzubettenden Audios. Dies unterliegt [HTTP-Zugriffskontrollen](/de/docs/Web/HTTP/Guides/CORS). Dies ist optional; stattdessen können Sie das {{htmlelement("source")}} Element innerhalb des Audio-Blocks verwenden, um das einzubettende Audio anzugeben.

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
        zur Verarbeitung bereit.
      </td>
    </tr>
    <tr>
      <td>
        [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)
      </td>
      <td>
        Der Browser kann das Medium abspielen, schätzt jedoch, dass nicht genug Daten geladen wurden,
        um das Medium bis zum Ende abzuspielen, ohne für weiteres Zwischenspeichern von Inhalten anhalten zu müssen.
      </td>
    </tr>
    <tr>
      <td>
        [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
      </td>
      <td>
        Der Browser schätzt, dass er das Medium bis zum Ende abspielen kann, ohne
        für Inhaltszwischenspeicherung anhalten zu müssen.
      </td>
    </tr>
    <tr>
      <td>[`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)</td>
      <td>
        Das Rendering eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) ist
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
        Das Medium ist leer geworden; zum Beispiel wird dieses Ereignis gesendet, wenn das Medium
        bereits geladen (oder teilweise geladen) wurde und die Methode
        [`HTMLMediaElement.load`](/de/docs/Web/API/HTMLMediaElement/load) aufgerufen wird, um es
        neu zu laden.
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
      <td>Der erste Rahmen des Mediums wurde geladen.</td>
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
        Die Wiedergabe ist bereit zu starten, nachdem sie pausiert oder aufgrund von
        Datenmangel verzögert wurde.
      </td>
    </tr>
    <tr>
      <td>
        [`ratechange`](/de/docs/Web/API/HTMLMediaElement/ratechange_event)
      </td>
      <td>Die Wiedergaberate hat sich geändert.</td>
    </tr>
    <tr>
      <td>
        [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event)
      </td>
      <td>Eine <em>Seek</em>-Operation wurde abgeschlossen.</td>
    </tr>
    <tr>
      <td>
        [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
      </td>
      <td>Eine <em>Seek</em>-Operation hat begonnen.</td>
    </tr>
    <tr>
      <td>
        [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
      </td>
      <td>
        Der Benutzeragent versucht, Mediendaten abzurufen, aber die Daten kommen unerwartet nicht.
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
        Die Zeit, die durch das <code>currentTime</code> Attribut angezeigt wird, wurde
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
      <td>Die Wiedergabe wurde aufgrund eines vorübergehenden Datenmangels gestoppt.</td>
    </tr>
  </tbody>
</table>

## Verwendungshinweise

Browser unterstützen nicht alle die gleichen [Dateitypen](/de/docs/Web/Media/Guides/Formats/Containers) und [Audio-Codecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs); Sie können mehrere Quellen innerhalb verschachtelter {{htmlelement("source")}} Elemente bereitstellen, und der Browser verwendet dann die erste, die er versteht:

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

Die Audioquelle kann auf jede gültige [URL](/de/docs/Web/URI) gesetzt werden, einschließlich HTTP(S)-URLs und [Daten-URLs](/de/docs/Web/URI/Reference/Schemes/data). Wenn HTTP(S)-URLs verwendet werden, beachten Sie, dass das Caching-Verhalten des Browsers beeinflusst, wie oft die Datei vom Server angefordert wird. Daten-URLs betten die Audiodaten direkt in das HTML ein, was für kleine Audiodateien nützlich sein kann, aber für größere Dateien nicht empfohlen wird, da es die HTML-Dateigröße erhöht.

Wenn Sie {{htmlelement("source")}} Elemente verwenden, versucht der Browser, jede Quelle nacheinander zu laden. Wenn eine Quelle fehlschlägt (z.B. aufgrund einer ungültigen URL oder eines nicht unterstützten Formats), wird die nächste Quelle versucht, und so weiter. Ein `error` Ereignis wird am `<audio>` Element ausgelöst, nachdem alle Quellen fehlgeschlagen sind; `error` Ereignisse werden nicht für jedes einzelne `<source>` Element ausgelöst.

Sie können auch die [Web Audio API](/de/docs/Web/API/Web_Audio_API) verwenden, um direkt Audiosignale aus JavaScript-Code zu erzeugen und zu manipulieren, anstatt vorab erstellte Audio-Dateien zu streamen. Sie können das [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) in JavaScript auf ein [`MediaStream`](/de/docs/Web/API/MediaStream) Objekt setzen. Dies wird häufig für Live-Audio-Streams oder Echtzeit-Audioverarbeitung verwendet.

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

Beachten Sie, dass `MediaStream` Quellen Einschränkungen haben: Sie sind nicht durchsuchbar und unterstützen nur eine begrenzte Anzahl von Codecs.

Wir bieten einen umfassenden und gründlichen [Leitfaden zu Medientypen](/de/docs/Web/Media/Guides/Formats) und den [Audiocodecs, die in ihnen verwendet werden können](/de/docs/Web/Media/Guides/Formats/Audio_codecs). Ebenfalls verfügbar ist [ein Leitfaden zu den unterstützten Codecs für Video](/de/docs/Web/Media/Guides/Formats/Video_codecs).

Weitere Verwendungshinweise:

- Wenn Sie das `controls` Attribut nicht angeben, enthält der Audioplayer nicht die Standard-Steuerelemente des Browsers. Sie können jedoch Ihre eigenen benutzerdefinierten Steuerelemente mit JavaScript und der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API erstellen.
- Um präzise Kontrolle über Ihre Audioinhalte zu ermöglichen, feuern `HTMLMediaElement`s viele verschiedene [Ereignisse](/de/docs/Web/API/HTMLMediaElement#events). Dies bietet auch eine Möglichkeit, den Abrufprozess des Audios zu überwachen, damit Sie nach Fehlern suchen oder feststellen können, wann genug verfügbar ist, um mit der Wiedergabe zu beginnen oder es zu manipulieren.
- `<audio>` Elemente können keine Untertitel oder Untertitel im selben Format wie `<video>` Elemente haben. Siehe [WebVTT und Audio](https://www.iandevlin.com/blog/2015/12/html5/webvtt-and-audio/) von Ian Devlin für einige nützliche Informationen und Problemumgehungen.
- Um den Fallback-Inhalt in Browsern zu testen, die das Element unterstützen, können Sie `<audio>` durch ein nicht existentes Element wie `<notanaudio>` ersetzen.

Eine gute allgemeine Informationsquelle zur Verwendung von HTML `<audio>` ist das [HTML-Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) Einsteiger-Tutorial.

### Styling mit CSS

Das `<audio>` Element hat keine eigene visuelle Ausgabe, es sei denn, das `controls` Attribut ist angegeben, in diesem Fall werden die Standard-Steuerelemente des Browsers angezeigt.

Die Standard-Steuerelemente haben einen {{cssxref("display")}} Wert von `inline` als Standard, und es ist oft eine gute Idee, den Wert auf `block` zu setzen, um die Kontrolle über Positionierung und Layout zu verbessern, es sei denn, Sie möchten, dass es innerhalb eines Textblocks oder ähnlichen platziert wird.

Sie können die Standard-Steuerelemente mit Eigenschaften stylen, die den Block als eine Einheit betreffen, sodass Sie ihm zum Beispiel einen {{cssxref("border")}} und {{cssxref("border-radius")}}, {{cssxref("padding")}}, {{cssxref("margin")}}, usw. geben können. Sie können jedoch nicht die einzelnen Komponenten innerhalb des Audioplayers stylen (z.B. die Größe der Schaltflächen oder Symbole ändern, die Schriftart ändern, usw.), und die Steuerelemente sind in den verschiedenen Browsern unterschiedlich.

Um einen konsistenten Look und Feel in verschiedenen Browsern zu erhalten, müssen Sie benutzerdefinierte Steuerelemente erstellen; diese können so markiert und gestylt werden, wie Sie möchten, und dann kann JavaScript zusammen mit der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API verwendet werden, um ihre Funktionalität zu verbinden.

[Video-Player-Styling-Grundlagen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics) bietet einige nützliche Styling-Techniken — es ist im Kontext von `<video>` geschrieben, aber vieles davon ist auch auf `<audio>` anwendbar.

### Addition und Entfernung von Tracks erkennen

Sie können erkennen, wann Tracks zu oder von einem `<audio>` Element hinzugefügt oder entfernt werden, indem Sie die [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event) Ereignisse nutzen. Diese Ereignisse werden jedoch nicht direkt an das `<audio>` Element selbst geschickt. Stattdessen werden sie an das Track-Listen-Objekt innerhalb des `<audio>` Elements gesendet, das dem Typ von Track entspricht, der dem Element hinzugefügt wurde:

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die alle Audiotracks des Medienelements enthält. Sie können einen Listener für `addtrack` an dieses Objekt hinzufügen, um benachrichtigt zu werden, wenn neue Audiotracks zum Element hinzugefügt werden.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)
  - : Fügen Sie diesem [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) Objekt einen `addtrack` Listener hinzu, um informiert zu werden, wenn Videotracks zum Element hinzugefügt werden.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
  - : Fügen Sie diesem [`TextTrackList`](/de/docs/Web/API/TextTrackList) Objekt einen `addtrack` Event-Listener hinzu, um benachrichtigt zu werden, wenn neue Texttracks zum Element hinzugefügt werden.

> [!NOTE]
> Auch wenn es sich um ein `<audio>` Element handelt, hat es dennoch Video- und Text-Track-Listen und kann tatsächlich verwendet werden, um Video darzustellen, obwohl die Benutzeroberflächenimplikationen merkwürdig sein können.

Um beispielsweise zu erkennen, wann Audiotracks zu oder von einem `<audio>` Element hinzugefügt oder entfernt werden, können Sie Code wie diesen verwenden:

```js
const elem = document.querySelector("audio");

elem.audioTrackList.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTrackList.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Dieser Code überwacht, wann Audiotracks zum oder vom Element hinzugefügt oder entfernt werden, und ruft eine hypothetische Funktion in einem Track-Editor auf, um den Track in die Liste der verfügbaren Tracks des Editors einzutragen oder zu entfernen.

Sie können auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um die [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event) Ereignisse zu überwachen.

## Barrierefreiheit

Audio mit gesprochenem Dialog sollte sowohl Untertitel als auch Transkripte bereitstellen, die seinen Inhalt genau beschreiben. Untertitel, die mit [WebVTT](/de/docs/Web/API/WebVTT_API) angegeben werden, ermöglichen es Menschen mit Hörbeeinträchtigungen, den Inhalt einer Audioaufnahme zu verstehen, während die Aufnahme abgespielt wird, während Transkripte es Menschen ermöglichen, die zusätzliche Zeit benötigen, den Inhalt der Aufnahme in einem für sie angenehmen Tempo und Format überprüfen zu können.

Wenn automatische Untertitelungsdienste verwendet werden, ist es wichtig, den generierten Inhalt zu überprüfen, um sicherzustellen, dass er den Quellaudio-Inhalt genau wiedergibt.

Das `<audio>` Element unterstützt WebVTT nicht direkt. Sie müssen eine Bibliothek oder ein Framework finden, das Ihnen diese Funktionalität bereitstellt, oder den Code selbst schreiben, um die Untertitel anzuzeigen. Eine Option ist, Ihr Audio mit einem {{HTMLElement("video")}} Element abzuspielen, das WebVTT unterstützt.

Neben dem gesprochenen Dialog sollten Untertitel und Transkripte auch Musik und Soundeffekte identifizieren, die wichtige Informationen kommunizieren. Dieser Einschluss umschließt Emotionen und Tonalität. Beispielsweise verwenden die unten stehenden WebVTT-Inhalte eckige Klammern, um dem Zuschauer Ton und emotionale Einsicht zu bieten; dies kann helfen, die Stimmung zu vermitteln, die ansonsten durch Musik, nonverbale Geräusche und kritische Soundeffekte geschaffen wird.

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

Ebenso ist es eine gute Praxis, einige Inhalte (wie den direkten Download-Link) als Fallback für Betrachter bereitzustellen, die einen Browser verwenden, in dem das `<audio>` Element nicht unterstützt wird:

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
- [MDN Verständnis von WCAG, Erklärung der Richtlinie 1.2](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [Erklärung des Erfolgskriteriums 1.2.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Erklärung des Erfolgskriteriums 1.2.2 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel zeigt die Basispraxis der Verwendung des `<audio>` Elements, um eine OGG-Datei abzuspielen. Es wird aufgrund des `autoplay` Attributs automatisch abgespielt—wenn die Seite die Erlaubnis hat—und enthält auch Fallback-Inhalte.

```html
<!-- Basic audio playback -->
<audio src="AudioTest.ogg" autoplay>
  <a href="AudioTest.ogg" download="AudioTest.ogg">Download OGG audio</a>.
</audio>
```

Weitere Informationen darüber, wann Autoplay funktioniert, wie man die Erlaubnis dafür erhält und wie und wann es angemessen ist, Autoplay zu nutzen, finden Sie in unserem [Autoplay-Leitfaden](/de/docs/Web/Media/Guides/Autoplay).

### `<audio>` Element mit \<source> Element

Dieses Beispiel gibt an, welche Audiospur eingebettet werden soll, indem das `src` Attribut auf einem verschachtelten `<source>` Element anstelle direkt auf dem `<audio>` Element verwendet wird. Es ist immer nützlich, den MIME-Typ der Datei im `type` Attribut einzubeziehen, da der Browser sofort erkennen kann, ob er diese Datei abspielen kann, und keine Zeit damit verschwendet, wenn nicht.

```html
<audio controls>
  <source src="foo.wav" type="audio/wav" />
  <a href="foo.wav" download="foo.wav">Download WAV audio</a>.
</audio>
```

### `<audio>` mit mehreren \<source> Elementen

Dieses Beispiel enthält mehrere `<source>` Elemente. Der Browser versucht, das erste Quell-Element zu laden (Opus), wenn er in der Lage ist, es abzuspielen; wenn nicht, fällt er auf die zweite Quelle (Vorbis) und schließlich auf MP3 zurück:

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
          >Flussinhalt</a
        >, Textumbruch-Inhalt, eingebetteter Inhalt. Wenn es ein
        <a href="#controls"><code>controls</code></a> Attribut hat: interaktiver
        Inhalt und fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        Wenn das Element ein <a href="#src"><code>src</code></a>
        Attribut hat: null oder mehr {{HTMLElement("track")}} Elemente,
        gefolgt von durchscheinendem Inhalt, der kein
        <code>&lt;audio&gt;</code> oder {{HTMLElement("video")}}
        Medien-Elemente enthält.<br />Andernfalls: null oder mehr {{HTMLElement("source")}}
        Elemente, gefolgt von null oder mehr {{HTMLElement("track")}}
        Elementen, gefolgt von durchscheinendem Inhalt, der kein
        <code>&lt;audio&gt;</code> oder {{HTMLElement("video")}}
        Medien-Elemente enthält.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das startende als auch das endende Tag sind verpflichtend.</td>
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

- [Webmedientechnologien](/de/docs/Web/Media)

  - [Media-Container-Formate (Dateitypen)](/de/docs/Web/Media/Guides/Formats/Containers)
  - [Leitfaden zu Audiocodecs, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats/Audio_codecs)

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)
- {{htmlelement("source")}}
- {{htmlelement("video")}}
- [Lernbereich: HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Audio Grundlagen über verschiedene Browser hinweg](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
