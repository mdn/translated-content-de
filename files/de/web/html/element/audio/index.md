---
title: "<audio>: Das Embed-Audio-Element"
slug: Web/HTML/Element/audio
l10n:
  sourceCommit: 2279e3961dcd0c70c5217e0db6611e405ecba5fe
---

{{HTMLSidebar}}

Das **`<audio>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um Soundinhalte in Dokumenten einzubetten. Es kann eine oder mehrere Audioquellen enthalten, die durch das `src`-Attribut oder das {{HTMLElement("source")}}-Element repräsentiert werden: Der Browser wählt die am besten geeignete aus. Es kann auch der Zielpunkt für gestreamte Medien sein, indem ein [`MediaStream`](/de/docs/Web/API/MediaStream) verwendet wird.

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

Das obige Beispiel zeigt die grundlegende Verwendung des `<audio>`-Elements. Ähnlich wie beim {{htmlelement("img")}}-Element geben wir einen Pfad zu dem Medium an, das wir im `src`-Attribut einbetten möchten; wir können andere Attribute einfügen, um Informationen anzugeben, wie zum Beispiel, ob es automatisch abgespielt und wiederholt werden soll, ob die Standard-Audiosteuerung des Browsers angezeigt werden soll, usw.

Der Inhalt innerhalb der öffnenden und schließenden `<audio></audio>`-Tags wird als Fallback in Browsern angezeigt, die das Element nicht unterstützen.

## Attribute

Die Attribute dieses Elements schließen die [globalen Attribute](/de/docs/Web/HTML/Global_attributes) ein.

- `autoplay`

  - : Ein Boolesches Attribut: Wenn angegeben, beginnt die Audio-Wiedergabe automatisch, sobald dies möglich ist, ohne darauf zu warten, dass die gesamte Audiodatei heruntergeladen wird.

    > [!NOTE]
    > Websites, die automatisch Audio (oder Videos mit einem Audiotrack) abspielen, können für Benutzer eine unangenehme Erfahrung darstellen und sollten nach Möglichkeit vermieden werden. Wenn Sie die Autoplay-Funktionalität anbieten müssen, sollten Sie diese opt-in gestalten (also erfordern, dass ein Benutzer sie explizit aktiviert). Dies kann jedoch nützlich sein, wenn Medienelemente erstellt werden, deren Quelle unter Benutzerkontrolle zu einem späteren Zeitpunkt festgelegt wird. Siehe unseren [Leitfaden zu Autoplay](/de/docs/Web/Media/Guides/Autoplay) für weitere Informationen zur richtigen Verwendung von Autoplay.

- `controls`

  - : Wenn dieses Attribut vorhanden ist, bietet der Browser Steuerelemente an, mit denen der Benutzer die Audiowiedergabe steuern kann, einschließlich Lautstärke, Suchlauf und Pause/Weiter.

- `controlslist`

  - : Das [`controlslist`](https://wicg.github.io/controls-list/explainer.html)-Attribut hilft, wenn es angegeben ist, dem Browser bei der Auswahl, welche Steuerelemente für das `audio`-Element angezeigt werden sollen, wann immer der Browser seine eigenen Steuerelemente anzeigt (also wenn das `controls`-Attribut angegeben ist).

    Die erlaubten Werte sind `nodownload`, `nofullscreen` und `noremoteplayback`.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Dieses {{Glossary("Enumerated", "enumerierte")}} Attribut gibt an, ob CORS verwendet werden soll, um die zugehörige Audiodatei abzurufen. [CORS-fähige Ressourcen](/de/docs/Web/HTML/CORS_enabled_image) können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne _verunreinigt_ zu sein. Die erlaubten Werte sind:

    - `anonymous`
      - : Sendet eine Cross-Origin-Anfrage ohne Anmeldeinformationen. Mit anderen Worten, es sendet den `Origin:`-HTTP-Header ohne ein Cookie, X.509-Zertifikat oder Durchführung der HTTP-Basisauthentifizierung. Wenn der Server der Ursprungsseite keine Anmeldeinformationen gibt (indem er den `Access-Control-Allow-Origin:`-HTTP-Header nicht setzt), wird die Ressource _verunreinigt_ und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Sendet eine Cross-Origin-Anfrage mit Anmeldeinformationen. Mit anderen Worten, es sendet den `Origin:`-HTTP-Header mit einem Cookie, einem Zertifikat oder Durchführung der HTTP-Basisauthentifizierung. Wenn der Server der Ursprungsseite keine Anmeldeinformationen gibt (durch den `Access-Control-Allow-Credentials:`-HTTP-Header), wird die Ressource _verunreinigt_ und ihre Verwendung eingeschränkt.

    Wenn es nicht vorhanden ist, wird die Ressource ohne eine CORS-Anfrage abgerufen (d.h. ohne den `Origin:`-HTTP-Header zu senden), was ihre unverunreinigte Verwendung in {{HTMLElement('canvas')}}-Elementen verhindert. Wenn es ungültig ist, wird es so gehandhabt, als wäre das enumerierte Schlüsselwort **anonymous** verwendet worden. Siehe [CORS-Einstellungsattribute](/de/docs/Web/HTML/Attributes/crossorigin) für zusätzliche Informationen.

- `disableremoteplayback`

  - : Ein Boolesches Attribut, das verwendet wird, um die Möglichkeit der Fernwiedergabe auf Geräten zu deaktivieren, die mit kabelgebundenen (HDMI, DVI, etc.) und kabellosen Technologien (Miracast, Chromecast, DLNA, AirPlay, etc.) verbunden sind. Siehe [diese vorgeschlagene Spezifikation](https://www.w3.org/TR/remote-playback/#the-disableremoteplayback-attribute) für weitere Informationen.

    In Safari können Sie [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) als Fallback verwenden.

- `loop`
  - : Ein Boolesches Attribut: Wenn angegeben, springt der Audioplayer automatisch an den Anfang zurück, wenn das Ende des Audios erreicht ist.
- `muted`
  - : Ein Boolesches Attribut, das angibt, ob das Audio zu Beginn stummgeschaltet wird. Sein Standardwert ist `false`.
- `preload`

  - : Dieses {{Glossary("enumerated", "enumerierte")}} Attribut soll dem Browser einen Hinweis darauf geben, was der Autor für die beste Benutzererfahrung hält. Es kann einen der folgenden Werte haben:

    - `none`: Gibt an, dass das Audio nicht vorab geladen werden soll.
    - `metadata`: Gibt an, dass nur Audio-Metadaten (z. B. Länge) abgerufen werden.
    - `auto`: Gibt an, dass die gesamte Audiodatei heruntergeladen werden kann, auch wenn der Benutzer voraussichtlich nicht darauf zugreifen wird.
    - _leerer String_: Ein Synonym für den Wert `auto`.

    Der Standardwert ist für jeden Browser unterschiedlich. Die Spezifikation empfiehlt, ihn auf `metadata` zu setzen.

    > [!NOTE]
    >
    > - Das `autoplay`-Attribut hat Vorrang vor `preload`. Wenn `autoplay` angegeben ist, müsste der Browser offensichtlich beginnen, das Audio für die Wiedergabe herunterzuladen.
    > - Der Browser ist durch die Spezifikation nicht gezwungen, den Wert dieses Attributs zu befolgen; es ist lediglich ein Hinweis.

- `src`
  - : Die URL des einzubettenden Audios. Dies unterliegt den [HTTP-Zugriffskontrollen](/de/docs/Web/HTTP/Guides/CORS). Dies ist optional; Sie können stattdessen das {{htmlelement("source")}}-Element innerhalb des Audio-Blocks verwenden, um das einzubettende Audio anzugeben.

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
        bereit zum Verarbeiten.
      </td>
    </tr>
    <tr>
      <td>
        [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)
      </td>
      <td>
        Der Browser kann das Medium abspielen, schätzt jedoch, dass nicht genügend Daten geladen
        wurden, um das Medium bis zum Ende abzuspielen, ohne für weiteres Puffern von Inhalten
        anhalten zu müssen.
      </td>
    </tr>
    <tr>
      <td>
        [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
      </td>
      <td>
        Der Browser schätzt, dass er das Medium bis zum Ende abspielen kann, ohne für das Puffern
        von Inhalten anzuhalten.
      </td>
    </tr>
    <tr>
      <td>[`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)</td>
      <td>
        Das Rendering eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) wird
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
        Das Medium ist leer geworden; dieses Ereignis wird beispielsweise gesendet, wenn das Medium
        bereits geladen (oder teilweise geladen) wurde und die
        [`HTMLMediaElement.load`](/de/docs/Web/API/HTMLMediaElement/load)-Methode aufgerufen
        wird, um es neu zu laden.
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
      <td>Der erste Frame des Mediums ist vollständig geladen.</td>
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
        Die Wiedergabe ist bereit zu starten, nachdem sie pausiert wurde oder aufgrund von
        Datenmangel verzögert war.
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
      <td>Ein <em>Suchvorgang</em> wurde abgeschlossen.</td>
    </tr>
    <tr>
      <td>
        [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
      </td>
      <td>Ein <em>Suchvorgang</em> hat begonnen.</td>
    </tr>
    <tr>
      <td>
        [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
      </td>
      <td>
        Der Benutzeragent versucht Mediendaten abzurufen, aber die Daten kommen unerwartet nicht
        fort.
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
        Die durch das <code>currentTime</code>-Attribut angezeigte Zeit wurde aktualisiert.
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
      <td>Die Wiedergabe wurde gestoppt wegen eines vorübergehenden Datenmangels.</td>
    </tr>
  </tbody>
</table>

## Verwendungshinweise

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

Die Audioquelle kann auf jede gültige [URL](/de/docs/Web/URI) gesetzt werden, einschließlich HTTP(S)-URLs und [Daten-URLs](/de/docs/Web/URI/Reference/Schemes/data). Bei der Verwendung von HTTP(S)-URLs sollten Sie sich bewusst sein, dass das Caching-Verhalten des Browsers beeinflussen wird, wie oft die Datei vom Server angefordert wird. Daten-URLs betten die Audiodaten direkt im HTML ein, was für kleine Audiodateien nützlich sein kann, aber für größere Dateien nicht empfohlen wird, da es die Dateigröße des HTML erhöht.

Bei Verwendung von {{htmlelement("source")}}-Elementen lädt der Browser jede Quelle nacheinander. Wenn eine Quelle fehlschlägt (z. B. aufgrund einer ungültigen URL oder eines nicht unterstützten Formats), wird die nächste Quelle versucht und so weiter. Ein `error`-Ereignis wird auf dem `<audio>`-Element ausgelöst, nachdem alle Quellen fehlgeschlagen sind; `error`-Ereignisse werden nicht auf jedem einzelnen `<source>`-Element ausgelöst.

Sie können auch die [Web Audio API](/de/docs/Web/API/Web_Audio_API) verwenden, um direkt Audiodatenströme aus JavaScript-Code zu erzeugen und zu manipulieren, anstatt vorab existierende Audiodateien zu streamen. Sie können das [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) in JavaScript auf ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt setzen. Dies wird häufig für Live-Audiostreams oder Echtzeit-Audiobearbeitung verwendet.

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

Wir bieten einen ausführlichen und gründlichen [Leitfaden zu Medien-Dateitypen](/de/docs/Web/Media/Guides/Formats) und den [Audiocodecs, die innerhalb dieser verwendet werden können](/de/docs/Web/Media/Guides/Formats/Audio_codecs). Ebenfalls verfügbar ist [ein Leitfaden zu den für Video unterstützten Codecs](/de/docs/Web/Media/Guides/Formats/Video_codecs).

Weitere Anwendungshinweise:

- Wenn Sie das `controls`-Attribut nicht angeben, enthält der Audioplayer nicht die Standardsteuerung des Browsers. Sie können jedoch Ihre eigenen benutzerdefinierten Steuerelemente mit JavaScript und der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API erstellen.
- Um eine präzise Kontrolle über Ihren Audiocontent zu ermöglichen, lösen `HTMLMediaElement`s viele verschiedene [Ereignisse](/de/docs/Web/API/HTMLMediaElement#events) aus. Dies bietet auch eine Möglichkeit, den Abrufprozess des Audios zu überwachen, damit Sie nach Fehlern suchen oder erkennen können, wann genug verfügbar ist, um mit der Wiedergabe zu beginnen oder es zu manipulieren.
- `<audio>`-Elemente können keine Untertitel oder Bildunterschriften zugeordnet bekommen, so wie es bei `<video>`-Elementen möglich ist. Siehe [WebVTT und Audio](https://www.iandevlin.com/blog/2015/12/html5/webvtt-and-audio/) von Ian Devlin für nützliche Informationen und Workarounds.
- Um den Fallback-Inhalt in Browsern zu testen, die das Element unterstützen, können Sie `<audio>` durch ein nicht existentes Element wie `<notanaudio>` ersetzen.

Eine gute allgemeine Informationsquelle zur Verwendung des HTML `<audio>`-Elements ist das [HTML Video- und Audio]-Einsteiger-Tutorial(/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio).

### Styling mit CSS

Das `<audio>`-Element hat keine eigene visuelle Ausgabe, es sei denn, das `controls`-Attribut ist angegeben, in welchem Fall die Standardsteuerung des Browsers angezeigt wird.

Die Standardsteuerung hat standardmäßig einen {{cssxref("display")}}-Wert von `inline`, und es ist oft eine gute Idee, den Wert auf `block` zu setzen, um die Steuerung über Positionierung und Layout zu verbessern, es sei denn, Sie möchten, dass es innerhalb eines Textblocks oder ähnlichem sitzt.

Sie können die Standardsteuerung mit Eigenschaften gestalten, die den Block als Ganzes betreffen, z. B. können Sie ihr eine {{cssxref("border")}} und {{cssxref("border-radius")}}, {{cssxref("padding")}}, {{cssxref("margin")}} usw. geben. Sie können jedoch nicht die einzelnen Komponenten innerhalb des Audioplayers stylen (z. B. die Schaltflächengröße oder Symbole ändern, die Schriftart ändern usw.), und die Steuerelemente sind zwischen den verschiedenen Browsern unterschiedlich.

Um ein konsistentes Aussehen und Gefühl über verschiedene Browser hinweg zu erzielen, müssen Sie benutzerdefinierte Steuerelemente erstellen; diese können auf beliebige Weise gekennzeichnet und gestaltet werden, und dann kann JavaScript zusammen mit der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API verwendet werden, um ihre Funktionalität zu implementieren.

[Videoplayer-Styling-Grundlagen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics) bietet einige nützliche Stylingtechniken - es ist im Kontext von `<video>` geschrieben, aber vieles davon ist ebenso auf `<audio>` anwendbar.

### Erkennung von Hinzufügung und Entfernung von Tracks

Sie können erkennen, wann Tracks zu einem `<audio>`-Element hinzugefügt oder daraus entfernt werden, indem Sie die [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event)-Ereignisse verwenden. Diese Ereignisse werden jedoch nicht direkt an das `<audio>`-Element selbst gesendet. Stattdessen werden sie an das Tracklisten-Objekt innerhalb des `<audio>`-Elements gesendet, das dem Typ des hinzugefügten Tracks zum Element entspricht:

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die alle Audiotracks des Medienelements enthält. Sie können einen `addtrack`-Listener an dieses Objekt anhängen, um benachrichtigt zu werden, wenn neue Audiotracks zum Element hinzugefügt werden.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)
  - : Fügen Sie einen `addtrack`-Listener zu diesem [`VideoTrackList`](/de/docs/Web/API/VideoTrackList)-Objekt hinzu, um informiert zu werden, wenn Videotracks zum Element hinzugefügt werden.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
  - : Fügen Sie ein `addtrack`-Ereignis-Listener zu dieser [`TextTrackList`](/de/docs/Web/API/TextTrackList) hinzu, um benachrichtigt zu werden, wenn neue Texttracks zum Element hinzugefügt werden.

> [!NOTE]
> Auch wenn es ein `<audio>`-Element ist, hat es dennoch Video- und Texttracklisten und kann tatsächlich verwendet werden, um Video zu präsentieren, obwohl die Benutzeroberflächenimplikationen seltsam sein können.

Zum Beispiel, um zu erkennen, wann Audiotracks zu einem `<audio>`-Element hinzugefügt oder davon entfernt werden, können Sie Code wie diesen verwenden:

```js
const elem = document.querySelector("audio");

elem.audioTrackList.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTrackList.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Dieser Code überwacht, wann Audiotracks zum Element hinzugefügt oder davon entfernt werden, und ruft eine hypothetische Funktion in einem Track-Editor auf, um den Track in der Liste der verfügbaren Tracks im Editor zu registrieren und zu entfernen.

Sie können auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um für die [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event) Ereignisse zu lauschen.

## Barrierefreiheit

Audio mit gesprochenem Dialog sollte sowohl Untertitel als auch Transkriptionen bereitstellen, die seinen Inhalt genau beschreiben. Untertitel, die mit [WebVTT](/de/docs/Web/API/WebVTT_API) spezifiziert werden, ermöglichen es Menschen mit Hörbehinderung, den Inhalt einer Audioaufnahme während der Wiedergabe zu verstehen, während Transkriptionen es Menschen ermöglichen, die zusätzliche Zeit benötigen, den Inhalt der Aufnahme in einem Tempo und Format zu überprüfen, das ihnen angenehm ist.

Wenn automatische Untertitelungsdienste verwendet werden, ist es wichtig, den generierten Inhalt zu überprüfen, um sicherzustellen, dass er die Quellaudio genau wiedergibt.

Das `<audio>`-Element unterstützt WebVTT nicht direkt. Sie müssen eine Bibliothek oder ein Framework finden, das die Funktionalität für Sie bietet, oder den Code zum Anzeigen von Untertiteln selbst schreiben. Eine Möglichkeit besteht darin, Ihr Audio mit einem {{HTMLElement("video")}}-Element abzuspielen, das WebVTT unterstützt.

Zusätzlich zu gesprochenem Dialog sollten Untertitel und Transkriptionen auch Musik und Soundeffekte identifizieren, die wichtige Informationen kommunizieren. Dies schließt Emotion und Ton ein. Beispielsweise denken Sie daran, im unten stehenden WebVTT die Verwendung von eckigen Klammern zu verwenden, um dem Betrachter Ton und emotionale Einblicke zu geben; dies kann helfen, die Stimmung zu schaffen, die ansonsten mit Musik, nonverbalen Klängen und wichtigen Soundeffekten bereitgestellt wird und so weiter.

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

Es ist auch eine gute Praxis, für Betrachter, die einen Browser verwenden, in denen das `<audio>`-Element nicht unterstützt wird, einen Inhalt (wie den direkten Download-Link) als Fallback bereitzustellen:

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
- [MDN Verständnis von WCAG, Leitfaden 1.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [Erklärung des Erfolgskriteriums 1.2.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Erklärung des Erfolgskriteriums 1.2.2 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel zeigt die grundlegende Verwendung des `<audio>`-Elements zur Wiedergabe einer OGG-Datei. Es wird automatisch abgespielt aufgrund des `autoplay`-Attributs - wenn die Seite die Erlaubnis dazu hat - und enthält außerdem Fallback-Inhalt.

```html
<!-- Basic audio playback -->
<audio src="AudioTest.ogg" autoplay>
  <a href="AudioTest.ogg" download="AudioTest.ogg">Download OGG audio</a>.
</audio>
```

Für Details darüber, wann Autoplay funktioniert, wie man die Erlaubnis erhält, Autoplay zu verwenden, und wie und wann es angemessen ist, Autoplay zu verwenden, siehe unseren [Autoplay-Leitfaden](/de/docs/Web/Media/Guides/Autoplay).

### `<audio>`-Element mit \<source>-Element

Dieses Beispiel gibt an, welchen Audiotrack durch das `src`-Attribut auf einem verschachtelten `<source>`-Element statt direkt auf dem `<audio>`-Element einzubetten ist. Es ist immer nützlich, den MIME-Typ der Datei im `type`-Attribut einzuschließen, da der Browser sofort feststellen kann, ob er diese Datei abspielen kann, und keine Zeit darauf verschwendet, wenn dies nicht der Fall ist.

```html
<audio controls>
  <source src="foo.wav" type="audio/wav" />
  <a href="foo.wav" download="foo.wav">Download WAV audio</a>.
</audio>
```

### `<audio>` mit mehreren \<source>-Elementen

Dieses Beispiel enthält mehrere `<source>`-Elemente. Der Browser versucht, das erste Source-Element (Opus) zu laden, wenn er es abspielen kann; falls nicht, fällt er auf das zweite (Vorbis) zurück und schließlich auf MP3:

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
        >, Begriffsinhalte, eingebettete Inhalte. Wenn es ein
        <a href="#controls"><code>controls</code></a>-Attribut hat:
        interaktive Inhalte und fühlbare Inhalte.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        Wenn das Element ein <a href="#src"><code>src</code></a>
        Attribut hat: null oder mehr {{HTMLElement("track")}}-Elemente
        gefolgt von transparentem Inhalt, der kein
        <code>&lt;audio&gt;</code> oder {{HTMLElement("video")}}
        Multimedia-Elemente enthält.<br />Andernfalls: null oder mehr
        {{HTMLElement("source")}}-Elemente gefolgt von null oder mehr
        {{HTMLElement("track")}}-Elementen gefolgt von transparentem
        Inhalt, der kein <code>&lt;audio&gt;</code> oder
        {{HTMLElement("video")}} Multimedia-Elemente enthält.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der Endtag sind zwingend erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>Jedes Element, das eingebettete Inhalte akzeptiert.</td>
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

- [Webmedien-Technologien](/de/docs/Web/Media)

  - [Mediencontainerformate (Dateitypen)](/de/docs/Web/Media/Guides/Formats/Containers)
  - [Leitfaden zu Audiocodecs im Web](/de/docs/Web/Media/Guides/Formats/Audio_codecs)

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)
- {{htmlelement("source")}}
- {{htmlelement("video")}}
- [Lernbereich: HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Cross-Browser-Audio-Grundlagen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
