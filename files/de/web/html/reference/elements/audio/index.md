---
title: "<audio>: Das Einbettungselement für Audio"
slug: Web/HTML/Reference/Elements/audio
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<audio>`** [HTML](/de/docs/Web/HTML) Element wird verwendet, um Toninhalte in Dokumente einzubetten. Es kann eine oder mehrere Audioquellen enthalten, die durch das `src` Attribut oder das {{HTMLElement("source")}} Element repräsentiert werden: Der Browser wird die passendste auswählen. Es kann auch als Ziel für gestreamte Medien dienen, unter Verwendung eines [`MediaStream`](/de/docs/Web/API/MediaStream).

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

Das obige Beispiel zeigt die grundlegende Verwendung des `<audio>` Elements. Ähnlich wie beim {{htmlelement("img")}} Element fügen wir einen Pfad zu dem Medium hinzu, das wir im `src` Attribut einbetten möchten; wir können andere Attribute hinzufügen, um Informationen wie Autostart und Schleifen, das Anzeigen der Standard-Audiosteuerungen des Browsers usw. anzugeben.

Der Inhalt innerhalb der öffnenden und schließenden `<audio></audio>` Tags wird als Fallback in Browsern angezeigt, die das Element nicht unterstützen.

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `autoplay`

  - : Ein logisches Attribut: Wenn angegeben, beginnt das Audio automatisch mit der Wiedergabe, sobald es möglich ist, ohne darauf zu warten, dass die gesamte Audiodatei heruntergeladen wurde.

    > [!NOTE]
    > Seiten, die automatisch Audios (oder Videos mit einem Audiotrack) abspielen, können eine unangenehme Erfahrung für Nutzer sein und sollten möglichst vermieden werden. Wenn Sie dennoch eine Autostart-Funktionalität anbieten müssen, sollten Sie es opt-in gestalten (d. h. der Nutzer muss es bewusst aktivieren). Dies kann jedoch nützlich sein, wenn Sie Medienelemente erstellen, deren Quelle zu einem späteren Zeitpunkt unter Benutzers Steuerung festgelegt wird. Weitere Informationen zur ordnungsgemäßen Verwendung von Autostart finden Sie in unserem [Autoplay Leitfaden](/de/docs/Web/Media/Guides/Autoplay).

- `controls`

  - : Wenn dieses Attribut vorhanden ist, bietet der Browser Steuerungen an, mit denen der Nutzer die Audiowiedergabe steuern kann, einschließlich Lautstärke, Suche und Pause/Wiedergabe.

- `controlslist`

  - : Das [`controlslist`](https://wicg.github.io/controls-list/explainer.html) Attribut, wenn spezifiziert, hilft dem Browser dabei, auszuwählen, welche Steuerungen für das `audio` Element angezeigt werden sollen, wann immer der Browser sein eigenes Set von Steuerungen zeigt (d. h. wenn das `controls` Attribut angegeben ist).

    Die erlaubten Werte sind `nodownload`, `nofullscreen` und `noremoteplayback`.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)

  - : Dieses {{Glossary("Enumerated", "enumerierte")}} Attribut gibt an, ob CORS verwendet werden soll, um die zugehörige Audiodatei abzurufen. [CORS-fähige Ressourcen](/de/docs/Web/HTML/How_to/CORS_enabled_image) können im {{HTMLElement("canvas")}} Element wiederverwendet werden, ohne _verunreinigt_ zu werden. Die erlaubten Werte sind:

    - `anonymous`
      - : Sendet eine Cross-Origin-Anfrage ohne Berechtigungsnachweis. Mit anderen Worten, es sendet den `Origin:` HTTP-Header ohne Cookie, X.509-Zertifikat oder Durchführung der HTTP-Basis-Authentifizierung. Wenn der Server keine Berechtigungsnachweise an die Ursprungsseite gibt (indem er den `Access-Control-Allow-Origin:` HTTP-Header nicht setzt), wird die Ressource _verunreinigt_ und ihre Nutzung eingeschränkt.
    
    - `use-credentials`
      - : Sendet eine Cross-Origin-Anfrage mit Berechtigungsnachweis. Mit anderen Worten, es sendet den `Origin:` HTTP-Header mit einem Cookie, einem Zertifikat oder Durchführung der HTTP-Basis-Authentifizierung. Wenn der Server keine Berechtigungsnachweise an die Ursprungsseite gibt (durch den `Access-Control-Allow-Credentials:` HTTP-Header), wird die Ressource _verunreinigt_ und ihre Nutzung eingeschränkt.

    Wenn nicht vorhanden, wird die Ressource ohne CORS-Anfrage abgerufen (d. h. ohne den `Origin:` HTTP-Header zu senden), was die nicht verunreinigte Verwendung in {{HTMLElement('canvas')}} Elementen verhindert. Wenn ungültig, wird es behandelt, als ob das enumerierte Schlüsselwort **anonymous** verwendet wurde. Weitere Informationen finden Sie unter [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin).

- `disableremoteplayback`

  - : Ein logisches Attribut, das verwendet wird, um die Fähigkeit der Fernwiedergabe in Geräten zu deaktivieren, die mit kabelgebundenen (HDMI, DVI usw.) und drahtlosen Technologien (Miracast, Chromecast, DLNA, AirPlay usw.) verbunden sind. Weitere Informationen finden Sie in dieser [vorgeschlagenen Spezifikation](https://www.w3.org/TR/remote-playback/#the-disableremoteplayback-attribute).

    In Safari können Sie [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) als Fallback verwenden.

- `loop`
  - : Ein logisches Attribut: Wenn angegeben, sucht der Audioplayer automatisch nach dem Ende des Audios zurück zum Anfang.
- `muted`
  - : Ein logisches Attribut, das angibt, ob das Audio anfangs stummgeschaltet ist. Der Standardwert ist `false`.
- `preload`

  - : Dieses {{Glossary("enumerated", "enumerierte")}} Attribut soll dem Browser einen Hinweis darauf geben, was der Autor als beste Benutzererfahrung betrachtet. Es kann einen der folgenden Werte haben:

    - `none`: Gibt an, dass das Audio nicht vorab geladen werden sollte.
    - `metadata`: Gibt an, dass nur die Audiometadaten (z. B. Länge) abgerufen werden.
    - `auto`: Gibt an, dass die gesamte Audiodatei heruntergeladen werden kann, auch wenn der Nutzer voraussichtlich nicht darauf zugreifen wird.
    - _leeres Zeichenfolge_: Ein Synonym für den Wert `auto`.

    Der Standardwert ist für jeden Browser unterschiedlich. Die Spezifikation empfiehlt, ihn auf `metadata` zu setzen.

    > [!NOTE]
    >
    > - Das `autoplay` Attribut hat Vorrang vor `preload`. Wenn `autoplay` angegeben ist, müsste der Browser offensichtlich das Audio für die Wiedergabe herunterladen.
    > - Der Browser ist nicht durch die Spezifikation gezwungen, den Wert dieses Attributs zu befolgen; es ist lediglich ein Hinweis.

- `src`
  - : Die URL des einzubettenden Audios. Dies unterliegt den [HTTP-Zugriffskontrollen](/de/docs/Web/HTTP/Guides/CORS). Dies ist optional; stattdessen können Sie das {{htmlelement("source")}} Element innerhalb des Audio-Blocks verwenden, um das Audios einzubetten.

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
        Der Eingabepuffer eines [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) ist
        bereit zur Verarbeitung.
      </td>
    </tr>
    <tr>
      <td>
        [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)
      </td>
      <td>
        Der Browser kann das Medium abspielen, schätzt jedoch, dass nicht genügend Daten geladen wurden, um das Medium bis zum Ende abzuspielen, ohne weitere Pufferung von Inhalten.
      </td>
    </tr>
    <tr>
      <td>
        [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
      </td>
      <td>
        Der Browser schätzt, dass er das Medium bis zum Ende abspielen kann, ohne die Pufferung von Inhalten zu stoppen.
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
      <td>Das <code>duration</code> Attribut wurde aktualisiert.</td>
    </tr>
    <tr>
      <td>
        [`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)
      </td>
      <td>
        Das Medium ist leer geworden; beispielsweise wird dieses Ereignis gesendet, wenn das Medium bereits geladen (oder teilweise geladen) ist und die
        [`HTMLMediaElement.load`](/de/docs/Web/API/HTMLMediaElement/load) Methode aufgerufen wird, um es neu zu laden.
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
      <td>Der erste Frame des Mediums wurde fertig geladen.</td>
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
        Die Wiedergabe ist bereit zu starten, nachdem sie pausiert oder verzögert war aufgrund mangelnder Daten.
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
        Der Benutzeragent versucht, Mediendaten abzurufen, aber Daten kommen unerwartet nicht.
      </td>
    </tr>
    <tr>
      <td>
        [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event)
      </td>
      <td>Das Laden von Mediadaten wurde unterbrochen.</td>
    </tr>
    <tr>
      <td>
        [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)
      </td>
      <td>
        Die durch das <code>currentTime</code> Attribut angegebene Zeit wurde
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
      <td>Die Wiedergabe hat gestoppt wegen eines temporären Mangels an Daten</td>
    </tr>
  </tbody>
</table>

## Nutzungshinweise

Browser unterstützen nicht alle die gleichen [Dateitypen](/de/docs/Web/Media/Guides/Formats/Containers) und [Audio-Codecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs); Sie können mehrere Quellen innerhalb geschachtelter {{htmlelement("source")}}-Elemente angeben, und der Browser verwendet dann die erste, die er versteht:

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

Die Audioquelle kann auf eine beliebige gültige [URL](/de/docs/Web/URI) gesetzt werden, einschließlich HTTP(S)-URLs und [Daten-URLs](/de/docs/Web/URI/Reference/Schemes/data). Bei der Verwendung von HTTP(S)-URLs sollten Sie sich bewusst sein, dass das Caching-Verhalten des Browsers beeinflusst, wie oft die Datei vom Server angefordert wird. Daten-URLs betten die Audiodaten direkt in das HTML ein, was für kleine Audiodateien nützlich sein kann, jedoch nicht für größere Dateien empfohlen wird, da es die HTML-Dateigröße erhöht.

Bei der Verwendung von {{htmlelement("source")}}-Elementen versucht der Browser, jede Quelle nacheinander zu laden. Wenn eine Quelle fehlschlägt (z. B. aufgrund einer ungültigen URL oder eines nicht unterstützten Formats), wird die nächste Quelle versucht und so weiter. Ein `error`-Ereignis wird im `<audio>`-Element ausgelöst, nachdem alle Quellen fehlgeschlagen sind; `error`-Ereignisse werden nicht auf jedem einzelnen `<source>`-Element ausgelöst.

Sie können auch die [Web Audio API](/de/docs/Web/API/Web_Audio_API) verwenden, um direkt Audio-Streams aus JavaScript-Code zu erzeugen und zu manipulieren, anstatt vorab existierende Audiodateien zu streamen. Sie können das [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) in JavaScript auf ein [`MediaStream`](/de/docs/Web/API/MediaStream) Objekt setzen. Dies wird häufig für Live-Audio-Streams oder Echtzeit-Audiobearbeitung verwendet.

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

Wir bieten einen umfassenden und gründlichen [Leitfaden zu Medientypen](/de/docs/Web/Media/Guides/Formats) und den [Audiocodecs, die darin verwendet werden können](/de/docs/Web/Media/Guides/Formats/Audio_codecs). Zudem steht ein [Leitfaden zu unterstützten Video-Codecs](/de/docs/Web/Media/Guides/Formats/Video_codecs) zur Verfügung.

Weitere Nutzungshinweise:

- Wenn Sie das `controls` Attribut nicht angeben, wird der Audioplayer die Standardsteuerungen des Browsers nicht einbeziehen. Sie können jedoch Ihre eigenen benutzerdefinierten Steuerungen mit JavaScript und der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API erstellen.
- Um präzise Kontrolle über Ihren Audiocontent zu ermöglichen, lösen `HTMLMediaElement` viele verschiedene [Ereignisse](/de/docs/Web/API/HTMLMediaElement#events) aus. Dies bietet auch eine Möglichkeit, den Abrufprozess des Audios zu überwachen, sodass Sie auf Fehler achten oder erkennen können, wann genug bereit ist, um die Wiedergabe zu beginnen oder zu manipulieren.
- `<audio>`-Elemente können keine Untertitel oder Captions im selben Stil wie `<video>`-Elemente haben. Siehe [WebVTT und Audio](https://www.iandevlin.com/blog/2015/12/html5/webvtt-and-audio/) von Ian Devlin für nützliche Informationen und Workarounds.
- Um den Fallback-Content in Browsern zu testen, die das Element unterstützen, können Sie `<audio>` durch ein nicht existierendes Element wie `<notanaudio>` ersetzen.

Eine gute allgemeine Informationsquelle zur Nutzung von HTML `<audio>` ist das [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) Anfänger-Tutorial.

### Styling mit CSS

Das `<audio>` Element hat keinen eigenen visuellen Output, es sei denn, das `controls` Attribut wird angegeben, in welchem Fall die Standardsteuerungen des Browsers angezeigt werden.

Die Standardsteuerungen haben standardmäßig einen {{cssxref("display")}} Wert von `inline`, und es ist oft eine gute Idee, den Wert auf `block` zu setzen, um die Kontrolle über Positionierung und Layout zu verbessern, es sei denn, Sie möchten, dass es in einem Textblock o.ä. sitzt.

Sie können die Standardsteuerungen mit Eigenschaften stylen, die den Block als eine Einheit betreffen, so dass Sie ihm beispielsweise eine {{cssxref("border")}} und {{cssxref("border-radius")}}, {{cssxref("padding")}}, {{cssxref("margin")}} usw. geben können. Allerdings können Sie die einzelnen Komponenten im Audioplayer nicht stylen (z. B. die Größe der Schaltflächen oder Symbole ändern, die Schriftart ändern etc.), und die Steuerungen sind in den verschiedenen Browsern unterschiedlich.

Um in allen Browsern ein konsistentes Look-and-Feel zu erreichen, müssen Sie benutzerdefinierte Steuerungen erstellen; diese können in beliebiger Weise markiert und gestylt werden, und dann kann JavaScript zusammen mit der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API verwendet werden, um deren Funktionalität zu integrieren.

[Video Player Styling-Grundlagen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics) bietet einige nützliche Styling-Techniken — es ist im Kontext von `<video>` geschrieben, aber vieles davon ist gleichermaßen auf `<audio>` anwendbar.

### Erkennung der Hinzufügung und Entfernung von Tracks

Sie können erkennen, wann Tracks zu einem `<audio>` Element hinzugefügt oder entfernt werden, indem Sie die [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event) Ereignisse verwenden. Diese Ereignisse werden jedoch nicht direkt an das `<audio>` Element gesendet. Stattdessen werden sie an das Tracklist-Objekt innerhalb des `<audio>` Elements gesendet, das dem Typ des hinzugefügten Tracks entspricht:

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die alle Audio-Tracks des Medienelements enthält. Sie können einem `addtrack`-Listener für dieses Objekt hinzufügen, um benachrichtigt zu werden, wenn neue Audio-Tracks zum Element hinzugefügt werden.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)
  - : Fügen Sie einen `addtrack`-Listener zu diesem [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) Objekt hinzu, um informiert zu werden, wenn Videotracks zum Element hinzugefügt werden.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
  - : Fügen Sie einen `addtrack`-Eventlistener zu diesem [`TextTrackList`](/de/docs/Web/API/TextTrackList) hinzu, um benachrichtigt zu werden, wenn neue Text-Tracks zum Element hinzugefügt werden.

> [!NOTE]
> Auch wenn es sich um ein `<audio>`-Element handelt, hat es dennoch Video- und Text-Track-Listen und kann tatsächlich verwendet werden, um Video zu präsentieren, obwohl die Benutzeroberfläche seltsam erscheinen kann.

Beispielsweise, um zu erkennen, wann Audiotracks zu einem `<audio>`-Element hinzugefügt oder entfernt werden, können Sie Code wie diesen verwenden:

```js
const elem = document.querySelector("audio");

elem.audioTrackList.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTrackList.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Dieser Code beobachtet, wann Audiotracks zum Element hinzugefügt oder davon entfernt werden, und ruft eine hypothetische Funktion in einem Track-Editor auf, um den Track zur Liste der verfügbaren Tracks des Editors hinzuzufügen oder davon zu entfernen.

Sie können auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um den [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event) Ereignissen zuzuhören.

## Barrierefreiheit

Audio mit gesprochenem Dialog sollte sowohl Captions als auch Transkriptionen bereitstellen, die den Inhalt genau beschreiben. Captions, die mit [WebVTT](/de/docs/Web/API/WebVTT_API) angegeben werden, ermöglichen es Personen mit Hörbehinderungen, den Inhalt einer Audiowiedergabe während der Wiedergabe zu verstehen, während Transkriptionen es Personen ermöglichen, die zusätzliche Zeit benötigen, um den Inhalt in einem angenehmeren Tempo und Format zu überprüfen.

Wenn automatische Untertitelungsdienste verwendet werden, ist es wichtig, den generierten Inhalt zu überprüfen, um sicherzustellen, dass er die Original-Audioquelle genau wiedergibt.

Das `<audio>`-Element unterstützt WebVTT nicht direkt. Sie müssen eine Bibliothek oder ein Framework finden, das diese Funktionalität bereitstellt, oder den Code selbst schreiben, um Untertitel anzuzeigen. Eine Option ist, Ihr Audio über ein {{HTMLElement("video")}}-Element abzuspielen, das WebVTT unterstützt.

Zusätzlich zum gesprochenen Dialog sollten Untertitel und Transkriptionen auch Musik und Soundeffekte identifizieren, die wichtige Informationen vermitteln. Dazu gehören Emotion und Ton. Zum Beispiel im folgenden WebVTT, beachten Sie die Verwendung von eckigen Klammern, um Ton und emotionale Einsicht dem Betrachter zu geben; dies kann helfen, die Stimmung zu vermitteln, die sonst durch Musik, nonverbale Geräusche und entscheidende Soundeffekte bereitgestellt wird.

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

Es ist auch eine gute Praxis, einige Inhalte (wie den direkten Downloadlink) als Fallback für Zuschauer bereitzustellen, die einen Browser verwenden, in dem das `<audio>` Element nicht unterstützt wird:

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
- [MDN Verständnis von WCAG, Richtlinie 1.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [Verständnis des Erfolgskriteriums 1.2.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Verständnis des Erfolgskriteriums 1.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Beispiele

### Grundlegende Nutzung

Das folgende Beispiel zeigt die grundlegende Verwendung des `<audio>`-Elements, um eine OGG-Datei abzuspielen. Es wird aufgrund des `autoplay` Attributs automatisch abgespielt, falls die Seite die Erlaubnis dazu hat, und enthält auch Fallback-Content.

```html
<!-- Basic audio playback -->
<audio src="AudioTest.ogg" autoplay>
  <a href="AudioTest.ogg" download="AudioTest.ogg">Download OGG audio</a>.
</audio>
```

Weitere Details darüber, wann Autoplay funktioniert, wie Sie die Erlaubnis zur Verwendung von Autoplay erhalten und wie und wann es angebracht ist, Autoplay zu verwenden, finden Sie in unserem [Autoplay Leitfaden](/de/docs/Web/Media/Guides/Autoplay).

### \<audio> Element mit \<source> Element

Dieses Beispiel spezifiziert welche Audiospur eingebettet werden soll, indem das `src` Attribut auf einem geschachtelten `<source>` Element anstelle des `<audio>` Elements direkt verwendet wird. Es ist immer nützlich, den MIME-Typ der Datei im `type` Attribut anzugeben, da der Browser sofort erkennen kann, ob er diese Datei abspielen kann, und keine Zeit auf sie verschwendet, wenn nicht.

```html
<audio controls>
  <source src="foo.wav" type="audio/wav" />
  <a href="foo.wav" download="foo.wav">Download WAV audio</a>.
</audio>
```

### \<audio> mit mehreren \<source> Elementen

Dieses Beispiel schließt mehrere `<source>` Elemente ein. Der Browser versucht zunächst, das erste Source-Element (Opus) zu laden, falls er in der Lage ist es abzuspielen; wenn nicht, greift er auf das zweite (Vorbis) und schließlich auf MP3 zurück:

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
          >Fließinhalte</a
        >, Phrasinhalte, eingebettete Inhalte. Wenn es ein
        <a href="#controls"><code>controls</code></a> Attribut hat: interaktive
        Inhalte und fühlbare Inhalte.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Wenn das Element ein <a href="#src"><code>src</code></a>
        Attribut hat: Null oder mehr {{HTMLElement("track")}} Elemente
        gefolgt von transparentem Inhalt, der keine
        <code>&lt;audio&gt;</code> oder {{HTMLElement("video")}}
        Medienelemente enthält.<br />Andernfalls: Null oder mehr {{HTMLElement("source")}}
        Elemente gefolgt von null oder mehr {{HTMLElement("track")}}
        Elementen gefolgt von transparentem Inhalt, der keine
        <code>&lt;audio&gt;</code> oder {{HTMLElement("video")}}
        Medienelemente enthält.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Weglassung</th>
      <td>Keine, sowohl der Start- als auch der Endtag sind zwingend.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
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

- [Web-Medientechnologien](/de/docs/Web/Media)

  - [Mediencontainerformate (Dateitypen)](/de/docs/Web/Media/Guides/Formats/Containers)
  - [Leitfaden zu Audiocodecs im Web](/de/docs/Web/Media/Guides/Formats/Audio_codecs)

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)
- {{htmlelement("source")}}
- {{htmlelement("video")}}
- [Lernbereich: HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Cross-browser Audio Grundlagen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
