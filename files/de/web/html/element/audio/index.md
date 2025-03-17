---
title: "`<audio>`: Das Einbettungs-Element für Audio"
slug: Web/HTML/Element/audio
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTMLSidebar}}

Das **`<audio>`**-Element von [HTML](/de/docs/Web/HTML) wird verwendet, um Soundinhalte in Dokumente einzubetten. Es kann eine oder mehrere Audioquellen enthalten, die mit dem `src`-Attribut oder dem {{HTMLElement("source")}}-Element dargestellt werden: Der Browser wählt die am besten geeignete aus. Es kann auch das Ziel für gestreamte Medien sein, indem ein [`MediaStream`](/de/docs/Web/API/MediaStream) verwendet wird.

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

Das obige Beispiel zeigt die grundlegende Nutzung des `<audio>`-Elements. In ähnlicher Weise wie beim {{htmlelement("img")}}-Element fügen wir einen Pfad zu den Medien ein, die wir im `src`-Attribut einbetten möchten; wir können andere Attribute hinzufügen, um Informationen zu spezifizieren, z. B. ob wir den Autostart wünschen und es wiederholen möchten, ob wir die Standard-Audiosteuerung des Browsers anzeigen lassen möchten usw.

Der Inhalt zwischen den öffnenden und schließenden `<audio></audio>`-Tags wird als Fallback in Browsern angezeigt, die das Element nicht unterstützen.

## Attribute

Zu den Attributen dieses Elements gehören die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `autoplay`

  - : Ein boolesches Attribut: Wenn es angegeben wird, beginnt die Wiedergabe des Audios automatisch, sobald es möglich ist, ohne darauf zu warten, dass die gesamte Audiodatei heruntergeladen wird.

    > [!NOTE]
    > Websites, die automatisch Audio (oder Videos mit einer Tonspur) abspielen, können eine unangenehme Erfahrung für Benutzer sein und sollten, wenn möglich, vermieden werden. Wenn Sie dennoch Autoplay-Funktionalität anbieten müssen, sollten Sie diese als Opt-In-Funktion gestalten (es erfordert, dass der Benutzer sie speziell aktiviert). Dies kann jedoch nützlich sein, wenn Medien-Elemente erstellt werden, deren Quelle zu einem späteren Zeitpunkt unter Benutzersteuerung festgelegt wird. Siehe unseren [Leitfaden zur Autoplay-Funktionalität](/de/docs/Web/Media/Guides/Autoplay) für zusätzliche Informationen zur ordnungsgemäßen Verwendung von Autoplay.

- `controls`

  - : Wenn dieses Attribut vorhanden ist, bietet der Browser Steuerungen an, mit denen der Benutzer die Audiowiedergabe steuern kann, einschließlich Lautstärke, Spulen und Anhalten/Fortsetzen der Wiedergabe.

- `controlslist`

  - : Das [`controlslist`](https://wicg.github.io/controls-list/explainer.html)-Attribut, wenn es angegeben wird, hilft dem Browser, auszuwählen, welche Steuerungen für das `audio`-Element angezeigt werden sollen, wann immer der Browser seine eigene Steuerelemente-Sammlung anzeigt (d.h. wenn das `controls`-Attribut angegeben ist).

    Die erlaubten Werte sind `nodownload`, `nofullscreen` und `noremoteplayback`.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Dieses {{Glossary("Enumerated", "aufgezählte")}} Attribut gibt an, ob CORS verwendet werden soll, um die zugehörige Audiodatei abzurufen. [CORS-fähige Ressourcen](/de/docs/Web/HTML/CORS_enabled_image) können im {{HTMLElement("canvas")}}-Element ohne Kontaminierung wiederverwendet werden. Die erlaubten Werte sind:

    - `anonymous`
      - : Sendet eine Cross-Origin-Anfrage ohne Berechtigungsnachweis. Das bedeutet, es wird der `Origin:`-HTTP-Header ohne Cookie, X.509-Zertifikat oder Durchführung der HTTP-Basisauthentifizierung gesendet. Wenn der Server der Ursprungsseite keine Berechtigungsnachweise gibt (indem er nicht den `Access-Control-Allow-Origin:`-HTTP-Header setzt), wird die Ressource _kontaminiert_, und ihre Verwendung ist eingeschränkt.
    - `use-credentials`
      - : Sendet eine Cross-Origin-Anfrage mit einem Berechtigungsnachweis. Das bedeutet, es wird der `Origin:`-HTTP-Header mit einem Cookie, einem Zertifikat oder Durchführung der HTTP-Basisauthentifizierung gesendet. Wenn der Server der Ursprungsseite keine Berechtigungsnachweise gibt (durch den `Access-Control-Allow-Credentials:`-HTTP-Header), wird die Ressource _kontaminiert_ und ihre Verwendung eingeschränkt.

    Wenn nicht vorhanden, wird die Ressource ohne eine CORS-Anfrage abgerufen (d.h. ohne den `Origin:`-HTTP-Header zu senden), was ihre nicht kontaminierte Verwendung in {{HTMLElement('canvas')}}-Elementen verhindert. Wenn ungültig, wird es behandelt, als ob das aufgezählte Schlüsselwort **anonymous** verwendet wurde. Siehe [CORS-Attribut zur Einstellung](/de/docs/Web/HTML/Attributes/crossorigin) für zusätzliche Informationen.

- `disableremoteplayback`

  - : Ein boolesches Attribut, das die Fähigkeit zum Remote-Playback auf Geräten deaktiviert, die über kabelgebundene (HDMI, DVI usw.) und drahtlose Technologien (Miracast, Chromecast, DLNA, AirPlay usw.) verbunden sind. Siehe diese [vorgeschlagene Spezifikation](https://www.w3.org/TR/remote-playback/#the-disableremoteplayback-attribute) für weitere Informationen.

    In Safari können Sie [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) als Fallback verwenden.

- `loop`
  - : Ein boolesches Attribut: Wenn es angegeben wird, springt der Audioplayer automatisch zurück zum Anfang, sobald das Ende des Audios erreicht ist.
- `muted`
  - : Ein boolesches Attribut, das angibt, ob das Audio anfänglich stummgeschaltet wird. Sein Standardwert ist `false`.
- `preload`

  - : Dieses {{Glossary("enumerated", "aufgezählte")}} Attribut soll dem Browser einen Hinweis geben, was der Autor für die beste Benutzererfahrung hält. Es kann einen der folgenden Werte haben:

    - `none`: Gibt an, dass das Audio nicht vorab geladen werden soll.
    - `metadata`: Gibt an, dass nur Audio-Metadaten (z.B. Länge) abgerufen werden.
    - `auto`: Gibt an, dass die gesamte Audiodatei heruntergeladen werden kann, auch wenn der Benutzer sie wahrscheinlich nicht verwendet.
    - _leerer String_: Ein Synonym für den Wert `auto`.

    Der Standardwert ist für jeden Browser unterschiedlich. Die Spezifikation empfiehlt, ihn auf `metadata` zu setzen.

    > [!NOTE]
    >
    > - Das `autoplay`-Attribut hat Vorrang vor `preload`. Wenn `autoplay` angegeben ist, müsste der Browser offensichtlich beginnen, das Audio für die Wiedergabe herunterzuladen.
    > - Der Browser ist durch die Spezifikation nicht gezwungen, den Wert dieses Attributs zu befolgen; es ist lediglich ein Hinweis.

- `src`
  - : Die URL des einzubettenden Audios. Dies unterliegt [HTTP-Zugriffskontrollen](/de/docs/Web/HTTP/Guides/CORS). Es ist optional; Sie können stattdessen das {{htmlelement("source")}}-Element innerhalb des Audio-Blocks verwenden, um das einzubettende Audio zu spezifizieren.

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
        Der Browser kann das Medium abspielen, schätzt jedoch, dass nicht genügend Daten geladen
        wurden, um das Medium bis zum Ende abzuspielen, ohne für weiteres Puffern anhalten zu
        müssen.
      </td>
    </tr>
    <tr>
      <td>
        [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
      </td>
      <td>
        Der Browser schätzt, dass er das Medium bis zum Ende abspielen kann, ohne für
        Inhalts-Puffern anzuhalten.
      </td>
    </tr>
    <tr>
      <td>[`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)</td>
      <td>
        Die Wiedergabe eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext)
        ist beendet.
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
        Das Medium wurde geleert; zum Beispiel wird dieses Ereignis gesendet, wenn das Medium
        bereits geladen (oder teilweise geladen) wurde und die
        [`HTMLMediaElement.load`](/de/docs/Web/API/HTMLMediaElement/load)-Methode aufgerufen wird, um es
        neu zu laden.
      </td>
    </tr>
    <tr>
      <td>
        [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)
      </td>
      <td>Die Wiedergabe wurde beendet, da das Ende des Mediums erreicht wurde.</td>
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
        Die Wiedergabe ist bereit, nach einer Pause oder Verzögerung aufgrund von
        Datenmangel zu starten.
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
      <td>Ein <em>Seek</em>-Vorgang hat begonnen.</td>
    </tr>
    <tr>
      <td>
        [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
      </td>
      <td>
        Der Benutzeragent versucht, Mediendaten abzurufen, aber Daten kommen
        unerwartet nicht.
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
      <td>Die Wiedergabe wurde wegen eines temporären Datenmangels angehalten.</td>
    </tr>
  </tbody>
</table>

## Nutzungshinweise

Browser unterstützen nicht alle die gleichen [Dateitypen](/de/docs/Web/Media/Guides/Formats/Containers) und [Audiocodecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs); Sie können mehrere Quellen innerhalb verschachtelter {{htmlelement("source")}}-Elemente angeben, und der Browser wird dann die erste verwenden, die er versteht:

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

Die Audioquelle kann auf jede gültige [URL](/de/docs/Web/URI) gesetzt werden, einschließlich HTTP(S)-URLs und [Data-URLs](/de/docs/Web/URI/Reference/Schemes/data). Bei der Verwendung von HTTP(S)-URLs sollten Sie beachten, dass das Caching-Verhalten des Browsers beeinflusst, wie oft die Datei vom Server angefordert wird. Data-URLs betten die Audiodaten direkt in das HTML ein, was für kleine Audiodateien nützlich sein kann, aber nicht für größere Dateien empfohlen wird, da es die Dateigröße des HTML erhöht.

Sie können auch die [Web Audio API](/de/docs/Web/API/Web_Audio_API) verwenden, um direkt Audiostreams aus JavaScript-Code zu erzeugen und zu manipulieren, anstatt vorhandene Audiodateien zu streamen. Sie können das [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) in JavaScript auf ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt setzen. Dies wird häufig für Live-Audiostreams oder Echtzeit-Audiobearbeitung verwendet.

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

Wir bieten einen fundierten und umfassenden [Leitfaden zu Medien-Dateitypen](/de/docs/Web/Media/Guides/Formats) und den [Audiocodecs, die in ihnen verwendet werden können](/de/docs/Web/Media/Guides/Formats/Audio_codecs). Auch verfügbar ist [ein Leitfaden zu den unterstützten Codecs für Video](/de/docs/Web/Media/Guides/Formats/Video_codecs).

Weitere Nutzungshinweise:

- Wenn Sie das Attribut `controls` nicht angeben, wird der Audioplayer nicht die Standard-Steuerungen des Browsers enthalten. Sie können jedoch Ihre eigenen benutzerdefinierten Steuerungen mit JavaScript und der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API erstellen.
- Um die präzise Kontrolle über Ihre Audiowiedergabe zu ermöglichen, generieren `HTMLMediaElement`s viele verschiedene [Ereignisse](/de/docs/Web/API/HTMLMediaElement#events). Dies bietet auch eine Möglichkeit, den Abrufprozess des Audios zu überwachen, damit Sie nach Fehlern suchen oder erkennen können, wann genug vorhanden ist, um mit der Wiedergabe zu beginnen oder es zu manipulieren.
- `<audio>`-Elemente können keine Untertitel oder Beschriftungen haben, die ihnen in der gleichen Weise zugeordnet sind, wie es bei `<video>`-Elementen der Fall ist. Siehe [WebVTT und Audio](https://www.iandevlin.com/blog/2015/12/html5/webvtt-and-audio/) von Ian Devlin für nützliche Informationen und Problemumgehungen.
- Um den Fallback-Inhalt in Browsern zu testen, die das Element unterstützen, können Sie `<audio>` durch ein nicht existierendes Element wie `<notanaudio>` ersetzen.

Eine gute allgemeine Informationsquelle zur Verwendung von HTML-`<audio>` ist das [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) Anfänger-Tutorial.

### Styling mit CSS

Das `<audio>`-Element hat keine eigenen visuellen Ausgaben, es sei denn, das `controls`-Attribut ist angegeben, in diesem Fall werden die Standard-Steuerungen des Browsers angezeigt.

Die Standard-Steuerungen haben standardmäßig einen {{cssxref("display")}}-Wert von `inline`, und es ist oft eine gute Idee, den Wert auf `block` zu setzen, um die Positionierung und das Layout besser zu kontrollieren, es sei denn, Sie möchten, dass es innerhalb eines Textblocks oder ähnlich sitzt.

Sie können die Standard-Steuerungen mit Eigenschaften gestalten, die den Block als einzelnes Ganzes betreffen, so können Sie ihm beispielsweise einen {{cssxref("border")}} und {{cssxref("border-radius")}}, {{cssxref("padding")}}, {{cssxref("margin")}} usw. geben. Sie können jedoch nicht die einzelnen Komponenten innerhalb des Audioplayers gestalten (z.B. die Größe der Schaltflächen ändern oder die Symbole, die Schriftart usw. ändern), und die Steuerungen sind in den verschiedenen Browsern unterschiedlich.

Um ein konsistentes Aussehen über Browser hinweg zu erzielen, müssen Sie benutzerdefinierte Steuerungen erstellen; diese können auf beliebige Weise ausgezeichnet und gestaltet werden, und dann kann JavaScript zusammen mit der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API verwendet werden, um ihre Funktionalität zu verknüpfen.

[Grundlagen der Videoplayer-Gestaltung](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics) bietet einige nützliche Gestaltungstechniken — es ist im Kontext von `<video>` geschrieben, aber vieles davon ist ebenso anwendbar auf `<audio>`.

### Erkennung von Hinzufügen und Entfernen von Spuren

Sie können erkennen, wenn Spuren zu einem `<audio>`-Element hinzugefügt oder entfernt werden, indem Sie die [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event) Ereignisse verwenden. Diese Ereignisse werden jedoch nicht direkt an das `<audio>`-Element selbst gesendet. Stattdessen werden sie an das Track-Listenobjekt innerhalb des `<audio>`-Elements gesendet, das zum Typ der hinzugefügten Spur im [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) gehört:

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die alle Audiospuren des Medienelements enthält. Sie können einen Listener für `addtrack` zu diesem Objekt hinzufügen, um benachrichtigt zu werden, wenn neue Audiospuren zum Element hinzugefügt werden.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)
  - : Fügen Sie einen `addtrack` Listener zu diesem [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) Objekt hinzu, um informiert zu werden, wenn Videospuren zum Element hinzugefügt werden.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
  - : Fügen Sie einen `addtrack`-Ereignislistener zu dieser [`TextTrackList`](/de/docs/Web/API/TextTrackList) hinzu, um benachrichtigt zu werden, wenn neue Textspuren zum Element hinzugefügt werden.

> [!NOTE]
> Obwohl es sich um ein `<audio>`-Element handelt, hat es trotzdem Video- und Textspurlisten und kann in der Tat verwendet werden, um Video darzustellen, obwohl die Benutzeroberfläche in der Regel ungewohnt ist.

Beispielsweise können Sie, um zu erkennen, wann Audiospuren zu oder von einem `<audio>`-Element hinzugefügt oder entfernt werden, Code wie diesen verwenden:

```js
const elem = document.querySelector("audio");

elem.audioTrackList.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTrackList.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Dieser Code überwacht, wann Audiospuren zum oder vom Element hinzugefügt oder entfernt werden, und ruft eine hypothetische Funktion in einem Spur-Editor auf, um die Spur zur Liste der verfügbaren Spuren des Editors hinzuzufügen oder daraus zu entfernen.

Sie können auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um auf die [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event) Ereignisse zu hören.

## Barrierefreiheit

Audio mit gesprochenem Dialog sollte sowohl Untertitel als auch Transkripte enthalten, die seinen Inhalt genau beschreiben. Untertitel, die mit [WebVTT](/de/docs/Web/API/WebVTT_API) spezifiziert werden, ermöglichen es Menschen mit Hörbehinderung, den Inhalt einer Audioaufnahme zu verstehen, während diese wiedergegeben wird. Transkripte hingegen ermöglichen Menschen, die zusätzliche Zeit benötigen, den Inhalt der Aufnahme in einem für sie angenehmen Tempo und Format zu überprüfen.

Wenn automatische Untertitulierung verwendet wird, ist es wichtig, den generierten Inhalt zu überprüfen, um sicherzustellen, dass er die Ausgangsaudioquelle genau wiedergibt.

Das `<audio>`-Element unterstützt nicht direkt WebVTT. Sie müssen eine Bibliothek oder ein Framework finden, das Ihnen diese Möglichkeit bietet, oder selbst den Code schreiben, um Untertitel anzuzeigen. Eine Möglichkeit besteht darin, Ihr Audio mit einem {{HTMLElement("video")}}-Element abzuspielen, das WebVTT unterstützt.

Zusätzlich zu gesprochenem Dialog sollten Untertitel und Transkripte auch Musik und Soundeffekte identifizieren, die wichtige Informationen liefern. Dazu gehören Emotion und Ton. Zum Beispiel, im unten stehenden WebVTT wird die Verwendung von eckigen Klammern genutzt, um dem Betrachter den Ton und die emotionale Einsicht zu geben; dies kann helfen, die Stimmung zu etablieren, die sonst mit Musik, nonverbalen Geräuschen und wichtigen Soundeffekten vermittelt wird, usw.

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

Es ist auch eine gute Praxis, etwas Inhalt (wie einen direkten Download-Link) als Fallback bereitzustellen, für Zuschauer, die einen Browser verwenden, in dem das `<audio>`-Element nicht unterstützt wird:

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
- [WebAIM: Untertitel, Transkripte und Audio Descriptions](https://webaim.org/techniques/captions/)
- [MDN Verständnis von WCAG, Richtlinien 1.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [Verständnis des Erfolgskriteriums 1.2.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Verständnis des Erfolgskriteriums 1.2.2 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Beispiele

### Grundlegende Nutzung

Das folgende Beispiel zeigt die grundlegende Verwendung des `<audio>`-Elements zur Wiedergabe einer OGG-Datei. Es wird automatisch abgespielt dank des `autoplay`-Attributs—falls der Seite die Erlaubnis dazu erteilt wurde—und enthält auch Fallback-Inhalte.

```html
<!-- Basic audio playback -->
<audio src="AudioTest.ogg" autoplay>
  <a href="AudioTest.ogg" download="AudioTest.ogg">Download OGG audio</a>.
</audio>
```

Für Details, wann Autoplay funktioniert, wie Sie die Erlaubnis zur Nutzung von Autoplay erhalten und wie und wann es angemessen ist, Autoplay zu verwenden, siehe unseren [Leitfaden zur Autoplay-Funktionalität](/de/docs/Web/Media/Guides/Autoplay).

### `<audio>`-Element mit `<source>`-Element

Dieses Beispiel gibt die einzubettende Audiodatei über das `src`-Attribut eines verschachtelten `<source>`-Elements anstatt direkt im `<audio>`-Element an. Es ist immer nützlich, den MIME-Typ der Datei im `type`-Attribut anzugeben, da der Browser sofort feststellen kann, ob er die Datei abspielen kann, und nicht unnötig Zeit damit verschwendet, wenn nicht.

```html
<audio controls>
  <source src="foo.wav" type="audio/wav" />
  <a href="foo.wav" download="foo.wav">Download WAV audio</a>.
</audio>
```

### `<audio>` mit mehreren `<source>`-Elementen

Dieses Beispiel enthält mehrere `<source>`-Elemente. Der Browser versucht, das erste Source-Element (Opus) zu laden, wenn er es abspielen kann; falls nicht, fällt er auf das zweite (Vorbis) und schließlich auf MP3 zurück:

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
          >Fließ-Inhalt</a
        >, Phrasen-Inhalt, eingebetteter Inhalt. Wenn es ein
        <a href="#controls"><code>controls</code></a>-Attribut hat: interaktiver
        Inhalt und fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        Wenn das Element ein <a href="#src"><code>src</code></a>
        -Attribut hat: null oder mehr {{HTMLElement("track")}}-Elemente,
        gefolgt von transparentem Inhalt, der keine
        <code>&lt;audio&gt;</code> oder {{HTMLElement("video")}}
        -Mediaelemente enthält.<br />Sonst: null oder mehr {{HTMLElement("source")}}
        -Elemente, gefolgt von null oder mehr {{HTMLElement("track")}}
        -Elementen, gefolgt von transparentem Inhalt, der keine
        <code>&lt;audio&gt;</code> oder {{HTMLElement("video")}}
        -Mediaelemente enthält.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der öffnende als auch der schließende Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
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

- [Web-Medien-Technologien](/de/docs/Web/Media)

  - [Media-Container-Formate (Dateitypen)](/de/docs/Web/Media/Guides/Formats/Containers)
  - [Leitfaden zu Audiocodecs im Web](/de/docs/Web/Media/Guides/Formats/Audio_codecs)

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)
- {{htmlelement("source")}}
- {{htmlelement("video")}}
- [Lernbereich: HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Grundlagen der browserübergreifenden Audiowiedergabe](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
