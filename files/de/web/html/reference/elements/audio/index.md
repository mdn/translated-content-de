---
title: "\\<audio>: Das Einbetten-Audio-Element"
slug: Web/HTML/Reference/Elements/audio
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<audio>`** [HTML](/de/docs/Web/HTML) Element wird verwendet, um Audioinhalte in Dokumente einzubetten. Es kann eine oder mehrere Audioquellen enthalten, die mit dem `src` Attribut oder dem {{HTMLElement("source")}} Element dargestellt werden: Der Browser wählt die am besten geeignete aus. Es kann auch das Ziel für gestreamte Medien sein, indem ein [`MediaStream`](/de/docs/Web/API/MediaStream) verwendet wird.

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

Das obige Beispiel zeigt die Grundnutzung des `<audio>` Elements. Ähnlich wie beim {{htmlelement("img")}} Element geben wir einen Pfad zu dem Medium, das wir einbetten wollen, im `src` Attribut an; wir können andere Attribute einschließen, um Informationen wie Autoplay und Schleifen anzugeben, ob wir die Standard-Audiosteuerungen des Browsers anzeigen möchten, etc.

Der Inhalt innerhalb der öffnenden und schließenden `<audio></audio>` Tags wird als Fallback in Browsern angezeigt, die das Element nicht unterstützen.

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `autoplay`
  - : Ein Boolean-Attribut: Wenn angegeben, beginnt die Audiowiedergabe automatisch, sobald sie dies kann, ohne auf das vollständige Herunterladen der Audiodatei zu warten.

    > [!NOTE]
    > Websites, die automatisch Audio (oder Videos mit einer Tonspur) abspielen, können eine unangenehme Erfahrung für Benutzer sein und sollten nach Möglichkeit vermieden werden. Wenn Sie Autoplay-Funktionalität anbieten müssen, sollten Sie diese als Opt-in gestalten (erfordert, dass ein Benutzer sie speziell aktiviert). Dies kann jedoch nützlich sein, wenn Mediendateien erstellt werden, deren Quelle zu einem späteren Zeitpunkt unter Benutzerkontrolle festgelegt wird. Weitere Informationen zur korrekten Nutzung von Autoplay finden Sie in unserem [Autoplay Leitfaden](/de/docs/Web/Media/Guides/Autoplay).

- `controls`
  - : Wenn dieses Attribut vorhanden ist, bietet der Browser Steuerungen an, um dem Benutzer die Steuerung der Audiowiedergabe zu ermöglichen, einschließlich Lautstärke, Suche und Pause/Fortsetzen der Wiedergabe.

- `controlslist`
  - : Das [`controlslist`](https://wicg.github.io/controls-list/explainer.html) Attribut hilft dem Browser, zu bestimmen, welche Steuerungen für das `audio` Element angezeigt werden sollen, wenn der Browser seine eigenen Steuerungen anzeigt (also, wenn das `controls` Attribut angegeben ist).

    Die zulässigen Werte sind `nodownload`, `nofullscreen` und `noremoteplayback`.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Dieses {{Glossary("Enumerated", "Aufzählungs-")}} Attribut gibt an, ob CORS verwendet werden soll, um die zugehörige Audiodatei abzurufen. [CORS-aktivierte Ressourcen](/de/docs/Web/HTML/How_to/CORS_enabled_image) können im {{HTMLElement("canvas")}} Element ohne _Verfälschung_ wiederverwendet werden. Die zulässigen Werte sind:
    - `anonymous`
      - : Sendet eine Cross-Origin-Anfrage ohne Berechtigung. Das heißt, es sendet den `Origin:` HTTP-Header ohne Cookie, X.509-Zertifikat oder HTTP-Basisauthentifizierung. Wenn der Server keine Berechtigungen an die Ursprungsseite gibt (indem er den `Access-Control-Allow-Origin:` HTTP-Header nicht setzt), wird die Ressource _verfälscht_ sein und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Sendet eine Cross-Origin-Anfrage mit Berechtigung. Das heißt, es sendet den `Origin:` HTTP-Header mit einem Cookie, einem Zertifikat oder führt HTTP-Basisauthentifizierung durch. Wenn der Server keine Berechtigungen an die Ursprungsseite gibt (durch den `Access-Control-Allow-Credentials:` HTTP-Header), wird die Ressource _verfälscht_ und ihre Nutzung eingeschränkt.

    Wenn nicht vorhanden, wird die Ressource ohne CORS-Anfrage abgerufen (d.h. ohne den `Origin:` HTTP-Header zu senden), was ihre unverfälschte Nutzung in {{HTMLElement('canvas')}} Elementen verhindert. Wenn ungültig, wird es so behandelt, als ob das aufgezählte Schlüsselwort **anonymous** verwendet wurde. Weitere Informationen finden Sie unter [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin).

- `disableremoteplayback`
  - : Ein Boolean-Attribut, das die Fähigkeit der Fernwiedergabe auf Geräten deaktiviert, die über verkabelte (HDMI, DVI, etc.) und drahtlose Technologien (Miracast, Chromecast, DLNA, AirPlay, etc.) angeschlossen sind. Weitere Informationen finden Sie in der vorgeschlagenen [Remote Playback API-Spezifikation](https://w3c.github.io/remote-playback/#the-disableremoteplayback-attribute).

    In Safari können Sie [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) als Fallback verwenden.

- `loop`
  - : Ein Boolean-Attribut: Wenn angegeben, sucht der Audioplayer beim Erreichen des Endes des Audios automatisch zum Anfang zurück.
- `muted`
  - : Ein Boolean-Attribut, das angibt, ob das Audio initial stummgeschaltet wird. Sein Standardwert ist `false`.
- `preload`
  - : Dieses {{Glossary("enumerated", "Aufzählungs-")}} Attribut soll dem Browser einen Hinweis geben, was der Autor als beste Benutzererfahrung betrachtet. Es kann einen der folgenden Werte haben:
    - `none`: Zeigt an, dass das Audio nicht vorgeladen werden sollte.
    - `metadata`: Zeigt an, dass nur die Audiometadaten (z.B. Länge) abgerufen werden.
    - `auto`: Zeigt an, dass die gesamte Audiodatei heruntergeladen werden kann, auch wenn nicht erwartet wird, dass der Benutzer sie verwendet.
    - _leerer string_: Ein Synonym für den `auto` Wert.

    Der Standardwert ist für jeden Browser unterschiedlich. Die Spezifikation empfiehlt, ihn auf `metadata` zu setzen.

    > [!NOTE]
    >
    > - Das `autoplay` Attribut hat Vorrang vor `preload`. Wenn `autoplay` angegeben ist, müsste der Browser offensichtlich beginnen, das Audio für die Wiedergabe herunterzuladen.
    > - Der Browser ist durch die Spezifikation nicht gezwungen, dem Wert dieses Attributs zu folgen; es ist lediglich ein Hinweis.

- `src`
  - : Die URL des einzubettenden Audios. Dies unterliegt der [HTTP-Zugriffskontrolle](/de/docs/Web/HTTP/Guides/CORS). Dies ist optional; Sie können stattdessen das {{htmlelement("source")}} Element innerhalb des Audiosblocks verwenden, um das einzubettende Audio anzugeben.

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
        ist bereit zur Verarbeitung.
      </td>
    </tr>
    <tr>
      <td>
        [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)
      </td>
      <td>
        Der Browser kann die Medien abspielen, schätzt jedoch, dass nicht genug
        Daten geladen wurden, um die Medien bis zum Ende abzuspielen, ohne
        anhalten zu müssen, um weitere Inhalte zu puffern.
      </td>
    </tr>
    <tr>
      <td>
        [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
      </td>
      <td>
        Der Browser schätzt, es kann die Medien bis zum Ende abspielen, ohne
        zum Puffern von Inhalten anhalten zu müssen.
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
      <td>Das <code>duration</code> Attribut wurde aktualisiert.</td>
    </tr>
    <tr>
      <td>
        [`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)
      </td>
      <td>
        Die Medien sind leer geworden; z.B. wird dieses Ereignis gesendet, wenn
        die Medien bereits geladen (oder teilweise geladen) wurden und die
        [`HTMLMediaElement.load`](/de/docs/Web/API/HTMLMediaElement/load) Methode aufgerufen
        wird, um sie neu zu laden.
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
      <td>Der erste Frame der Medien wurde fertig geladen.</td>
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
      <td>Ausgelöst, wenn der Browser mit dem Laden der Ressource begonnen hat.</td>
    </tr>
    <tr>
      <td>
        [`pause`](/de/docs/Web/API/HTMLMediaElement/pause_event)
      </td>
      <td>Die Wiedergabe wurde angehalten.</td>
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
        Die Wiedergabe ist bereit zu starten, nachdem sie pausiert oder verzögert
        wurde aufgrund fehlender Daten.
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
      <td>Eine <em>Such-</em>Operation ist abgeschlossen.</td>
    </tr>
    <tr>
      <td>
        [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
      </td>
      <td>Eine <em>Such-</em>Operation hat begonnen.</td>
    </tr>
    <tr>
      <td>
        [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
      </td>
      <td>
        Der Benutzeragent versucht, Mediendaten abzurufen, aber die Daten
        kommen unerwartet nicht.
      </td>
    </tr>
    <tr>
      <td>
        [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event)
      </td>
      <td>Das Laden der Mediendaten wurde ausgesetzt.</td>
    </tr>
    <tr>
      <td>
        [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)
      </td>
      <td>
        Die im <code>currentTime</code> Attribut angegebene Zeit wurde
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
      <td>Die Wiedergabe wurde gestoppt aufgrund eines temporären Datenmangels.</td>
    </tr>
  </tbody>
</table>

## Verwendungshinweise

Browser unterstützen nicht alle [Dateitypen](/de/docs/Web/Media/Guides/Formats/Containers) und [Audiocodecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs); Sie können mehrere Quellen innerhalb verschachtelter {{htmlelement("source")}}-Elemente angeben, und der Browser verwendet dann die erste, die er versteht:

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

Die Audioquelle kann auf jede gültige [URL](/de/docs/Web/URI) gesetzt werden, einschließlich HTTP(S)-URLs und [Daten-URLs](/de/docs/Web/URI/Reference/Schemes/data). Bei Verwendung von HTTP(S)-URLs sollten Sie sich bewusst sein, dass das Caching-Verhalten des Browsers beeinflusst, wie oft die Datei vom Server angefordert wird. Daten-URLs betten die Audiodaten direkt in das HTML ein, was für kleine Audiodateien nützlich sein kann, aber nicht für größere Dateien empfohlen wird, da dies die Dateigröße des HTML erhöht.

Wenn {{htmlelement("source")}}-Elemente verwendet werden, versucht der Browser, jede Quelle nacheinander zu laden. Wenn eine Quelle fehlschlägt (z.B. aufgrund einer ungültigen URL oder eines nicht unterstützten Formats), wird die nächste Quelle versucht, und so weiter. Ein `error`-Ereignis wird auf dem `<audio>`-Element ausgelöst, nachdem alle Quellen fehlgeschlagen sind; `error`-Ereignisse werden nicht bei jedem einzelnen `<source>`-Element ausgelöst.

Sie können auch die [Web-Audio-API](/de/docs/Web/API/Web_Audio_API) verwenden, um direkt Audiodatenströme aus JavaScript-Code zu erzeugen und zu manipulieren, anstatt vorab vorhandene Audiodateien zu streamen. Sie können das [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) in JavaScript auf ein [`MediaStream`](/de/docs/Web/API/MediaStream) Objekt setzen. Dies wird häufig für Live-Audiostreams oder Echtzeit-Audiobearbeitung verwendet.

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

Wir bieten einen umfassenden und gründlichen [Leitfaden zu Medientypen](/de/docs/Web/Media/Guides/Formats) und den [Audiocodecs, die in ihnen verwendet werden können](/de/docs/Web/Media/Guides/Formats/Audio_codecs). Auch verfügbar ist [ein Leitfaden der unterstützten Codecs für Videos](/de/docs/Web/Media/Guides/Formats/Video_codecs).

Weitere Verwendungshinweise:

- Wenn Sie das `controls` Attribut nicht angeben, enthält der Audioplayer nicht die Standardsteuerungen des Browsers. Sie können jedoch Ihre eigenen benutzerdefinierten Steuerungen mit JavaScript und der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API erstellen.
- Um präzise Kontrolle über Ihre Audioinhalte zu ermöglichen, lösen `HTMLMediaElement`s viele verschiedene [Ereignisse](/de/docs/Web/API/HTMLMediaElement#events) aus. Dies bietet auch eine Möglichkeit, den Abrufprozess des Audios zu überwachen, damit Sie nach Fehlern suchen oder erkennen können, wann genug verfügbar ist, um es abzuspielen oder zu manipulieren.
- `<audio>` Elemente können keine Untertitel oder Beschreibungen zugeordnet haben wie `<video>` Elemente. Siehe [WebVTT und Audio](https://www.iandevlin.com/blog/2015/12/html5/webvtt-and-audio/) von Ian Devlin für nützliche Informationen und Workarounds.
- Um den Fallback-Inhalt in Browsern zu testen, die das Element unterstützen, können Sie `<audio>` durch ein nicht existierendes Element wie `<notanaudio>` ersetzen.

Eine gute allgemeine Informationsquelle zur Verwendung von HTML `<audio>` ist das [HTML-Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) Anfänger-Tutorial.

### Gestaltung mit CSS

Das `<audio>` Element hat keine eigene visuelle Ausgabe, es sei denn, das `controls` Attribut ist angegeben, in welchem Fall die Standardsteuerungen des Browsers angezeigt werden.

Die Standardsteuerungen haben standardmäßig einen {{cssxref("display")}} Wert von `inline`, und es ist oft eine gute Idee, den Wert auf `block` zu setzen, um die Kontrolle über Positionierung und Layout zu verbessern, es sei denn, Sie möchten, dass er in einem Textblock oder ähnlichem sitzt.

Sie können die Standardsteuerungen mit Eigenschaften gestalten, die den Block als eine einzige Einheit betreffen, so dass Sie ihm z.B. eine {{cssxref("border")}} und {{cssxref("border-radius")}}, {{cssxref("padding")}}, {{cssxref("margin")}}, etc. geben können. Sie können jedoch nicht die einzelnen Komponenten innerhalb des Audioplayers gestalten (z.B. die Schaltflächengröße oder Symbole ändern, die Schriftart ändern etc.), und die Steuerungen sind auf den verschiedenen Browsern unterschiedlich.

Um ein einheitliches Erscheinungsbild über Browser hinweg zu erreichen, müssen Sie benutzerdefinierte Steuerungen erstellen; diese können in beliebiger Weise markiert und gestaltet werden, und dann kann JavaScript zusammen mit der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API verwendet werden, um ihre Funktionalität zu verbinden.

[Grundlagen der Videoplayer-Gestaltung](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics) bietet einige nützliche Gestaltungstechniken — es ist im Kontext von `<video>` geschrieben, aber vieles davon ist gleichermaßen auf `<audio>` anwendbar.

### Erkennen der Hinzufügung und Entfernung von Spuren

Sie können erkennen, wann Spuren zu einem `<audio>` Element hinzugefügt oder entfernt werden, indem Sie die [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event) Ereignisse verwenden. Diese Ereignisse werden jedoch nicht direkt an das `<audio>` Element selbst gesendet. Stattdessen werden sie an das Objekt der Spurliste innerhalb des `<audio>` Elements gesendet, das dem Spurityp entspricht, der dem Element hinzugefügt wurde:

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die alle Audiospuren des Medienelements enthält. Sie können einen Listener für `addtrack` auf diesem Objekt hinzufügen, um benachrichtigt zu werden, wenn neue Audiospuren zu dem Element hinzugefügt werden.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)
  - : Fügen Sie diesem [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) Objekt einen `addtrack` Listener hinzu, um informiert zu werden, wenn Videospuren zu dem Element hinzugefügt werden.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
  - : Fügen Sie diesem [`TextTrackList`](/de/docs/Web/API/TextTrackList) einen `addtrack` Ereignis-Listener hinzu, um benachrichtigt zu werden, wenn neue Textspuren zu dem Element hinzugefügt werden.

> [!NOTE]
> Selbst wenn es ein `<audio>` Element ist, hat es immer noch Video- und Textspurlisten und kann tatsächlich verwendet werden, um Video darzustellen, obwohl die Benutzeroberflächenimplikationen seltsam sein können.

Um beispielsweise zu erkennen, wann Audiospuren zu oder von einem `<audio>` Element hinzugefügt oder entfernt werden, können Sie Code wie diesen verwenden:

```js
const elem = document.querySelector("audio");

elem.audioTrackList.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTrackList.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Dieser Code überwacht, wann Audiospuren zum Element hinzugefügt oder von ihm entfernt werden, und ruft eine hypothetische Funktion in einem Spureneditor auf, um die Spur in der Liste der verfügbaren Spuren des Editors zu registrieren und zu entfernen.

Sie können auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um die [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event) Ereignisse zu hören.

## Barrierefreiheit

Audio mit gesprochenem Dialog sollte sowohl Untertitel als auch Transkripte bereitstellen, die seinen Inhalt genau beschreiben. Untertitel, die mit [WebVTT](/de/docs/Web/API/WebVTT_API) angegeben werden, ermöglichen es Personen mit Hörbehinderungen, den Inhalt einer Audioaufnahme zu verstehen, während die Aufnahme abgespielt wird, während Transkripte Personen ermöglichen, die zusätzliche Zeit benötigen, um den Inhalt der Aufnahme in einem Tempo und Format zu überprüfen, das ihnen angenehm ist.

Wenn automatische Untertitelungsdienste verwendet werden, ist es wichtig, den generierten Inhalt zu überprüfen, um sicherzustellen, dass er den Quellaudioinhalt genau wiedergibt.

Das `<audio>` Element unterstützt WebVTT nicht direkt. Sie müssen eine Bibliothek oder ein Framework finden, das diese Möglichkeit bietet, oder den Code selbst schreiben, um Untertitel anzuzeigen. Eine Möglichkeit besteht darin, Ihr Audio mit einem {{HTMLElement("video")}} Element abzuspielen, das WebVTT unterstützt.

Neben gesprochenem Dialog sollten Untertitel und Transkripte auch Musik und Soundeffekte identifizieren, die wichtige Informationen kommunizieren. Dazu gehören Emotion und Ton. Zum Beispiel wird im untenstehenden WebVTT die Verwendung von eckigen Klammern hervorgehoben, um dem Betrachter Ton und emotionale Einblicke zu geben; dies kann helfen, die Stimmung zu vermitteln, die ansonsten durch Musik, nicht verbale Geräusche und entscheidende Soundeffekte bereitgestellt wird.

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

Es ist auch eine gute Praxis, etwas Inhalt (wie den direkten Downloadlink) als Fallback für Benutzer anzubieten, die einen Browser verwenden, in dem das `<audio>` Element nicht unterstützt wird:

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
- [MDN Verständnis von WCAG, Richtlinie 1.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [Verstehen des Erfolgs Kriteriums 1.2.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Verstehen des Erfolgs Kriteriums 1.2.2 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel zeigt die grundlegende Nutzung des `<audio>` Elements zum Abspielen einer OGG-Datei. Es wird wegen des `autoplay` Attributs automatisch abgespielt – wenn die Seite die Erlaubnis dazu hat – und enthält auch Fallback-Inhalt.

```html
<!-- Basic audio playback -->
<audio src="AudioTest.ogg" autoplay>
  <a href="AudioTest.ogg" download="AudioTest.ogg">Download OGG audio</a>.
</audio>
```

Für Details darüber, wann Autoplay funktioniert, wie Sie die Erlaubnis zur Verwendung von Autoplay erhalten und wie und wann es angemessen ist, Autoplay zu verwenden, siehe unseren [Autoplay Leitfaden](/de/docs/Web/Media/Guides/Autoplay).

### `<audio>` Element mit \<source> Element

Dieses Beispiel gibt an, welcher Audiotrack mit dem `src` Attribut auf einem verschachtelten `<source>` Element eingebettet werden soll, anstatt direkt auf dem `<audio>` Element. Es ist immer ratsam, den MIME-Typ der Datei im `type` Attribut anzugeben, da der Browser sofort feststellen kann, ob er diese Datei abspielen kann, und keine Zeit damit verschwendet, wenn nicht.

```html
<audio controls>
  <source src="foo.wav" type="audio/wav" />
  <a href="foo.wav" download="foo.wav">Download WAV audio</a>.
</audio>
```

### `<audio>` mit mehreren \<source> Elementen

Dieses Beispiel enthält mehrere `<source>` Elemente. Der Browser versucht, das erste Quell-Element (Opus) zu laden, wenn er in der Lage ist, es abzuspielen; wenn nicht, fällt er auf das zweite (Vorbis) und schließlich auf MP3 zurück:

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
          >Flussinhalt</a
        >, Phraseninhalt, eingebetteter Inhalt. Wenn es ein
        <a href="#controls"><code>controls</code></a> Attribut hat: interaktiver
        Inhalt und fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Wenn das Element ein <a href="#src"><code>src</code></a>
        Attribut hat: null oder mehr {{HTMLElement("track")}} Elemente,
        gefolgt von transparentem Inhalt, der keine
        <code>&lt;audio&gt;</code> oder {{HTMLElement("video")}}
        Medienelemente enthält.<br />Andernfalls: null oder mehr
        {{HTMLElement("source")}} Elemente, gefolgt von null oder mehr
        {{HTMLElement("track")}} Elementen, gefolgt von transparentem
        Inhalt, der keine <code>&lt;audio&gt;</code> oder
        {{HTMLElement("video")}} Medienelemente enthält.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das eröffnende als auch das schließende Tag sind obligatorisch.</td>
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

- [Webmedientechnologien](/de/docs/Web/Media)
  - [Medienschaftsformate (Dateitypen)](/de/docs/Web/Media/Guides/Formats/Containers)
  - [Leitfaden für Audiocodecs im Web](/de/docs/Web/Media/Guides/Formats/Audio_codecs)

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)
- {{htmlelement("source")}}
- {{htmlelement("video")}}
- [Lernbereich: HTML-Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Grundlagen der Cross-Browser-Audio](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
