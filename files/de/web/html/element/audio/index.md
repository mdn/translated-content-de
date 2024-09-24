---
title: "<audio>: Das Einbetten von Audiodateien"
slug: Web/HTML/Element/audio
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}

Das **`<audio>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um Toninhalte in Dokumente einzubetten. Es kann eine oder mehrere Audioquellen enthalten, die über das `src`-Attribut oder das {{HTMLElement("source")}}-Element dargestellt werden: der Browser wird die am besten geeignete auswählen. Es kann auch das Ziel für gestreamte Medien sein, indem ein {{domxref("MediaStream")}} verwendet wird.

{{EmbedInteractiveExample("pages/tabbed/audio.html","tabbed-standard")}}

Das obige Beispiel zeigt eine einfache Verwendung des `<audio>`-Elements. In ähnlicher Weise wie das {{htmlelement("img")}}-Element geben wir einen Pfad zu dem Medium an, das wir im `src`-Attribut einbetten möchten; wir können weitere Attribute hinzufügen, um Informationen zu spezifizieren, wie z.B. ob es automatisch abgespielt und wiederholt werden soll, ob wir die standardmäßigen Audiosteuerungen des Browsers anzeigen möchten usw.

Der Inhalt innerhalb der öffnenden und schließenden `<audio></audio>`-Tags wird als Fallback in Browsern angezeigt, die das Element nicht unterstützen.

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `autoplay`

  - : Ein Boolean-Attribut: wenn angegeben, beginnt die Audio automatisch mit der Wiedergabe, sobald dies möglich ist, ohne darauf zu warten, dass die gesamte Audiodatei heruntergeladen ist.

    > [!NOTE]
    > Websites, die automatisch Audio abspielen (oder Videos mit einem Audiotrack), können eine unangenehme Erfahrung für Benutzer sein und sollten nach Möglichkeit vermieden werden. Wenn Sie zwingend eine Autoplay-Funktion anbieten müssen, sollten Sie sie opt-in gestalten (indem der Benutzer sie speziell aktivieren muss). Dies kann jedoch nützlich sein, wenn Medienelemente erstellt werden, deren Quelle zu einem späteren Zeitpunkt unter der Kontrolle des Benutzers festgelegt wird. Weitere Informationen zur richtigen Nutzung von Autoplay finden Sie in unserem [Leitfaden für Autoplay](/de/docs/Web/Media/Autoplay_guide).

- `controls`

  - : Wenn dieses Attribut vorhanden ist, bietet der Browser Steuerungen an, mit denen der Benutzer die Audiowiedergabe steuern kann, einschließlich Lautstärke, Suchen und Anhalten/Fortsetzen der Wiedergabe.

- `controlslist`

  - : Das [`controlslist`](https://wicg.github.io/controls-list/explainer.html)-Attribut hilft dem Browser, auszuwählen, welche Steuerungen für das `audio`-Element angezeigt werden sollen, wenn der Browser sein eigenes Set an Steuerungen zeigt (d.h. wenn das `controls`-Attribut angegeben ist).

    Erlaubte Werte sind `nodownload`, `nofullscreen` und `noremoteplayback`.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Dieses [enumerierte](/de/docs/Glossary/Enumerated) Attribut gibt an, ob CORS verwendet werden soll, um die zugehörige Audiodatei abzurufen. [CORS-aktivierte Ressourcen](/de/docs/Web/HTML/CORS_enabled_image) können im {{HTMLElement("canvas")}}-Element verwendet werden, ohne _verfälscht_ zu werden. Erlaubte Werte sind:

    - `anonymous`
      - : Sendet eine cross-origin Anfrage ohne eine Berechtigung. Mit anderen Worten, es sendet den `Origin:` HTTP-Header ohne ein Cookie, X.509-Zertifikat oder Durchführung von HTTP-Basic-Authentifizierung. Wenn der Server keine Berechtigungen an die Ursprungsseite gibt (durch Nichtsetzen des `Access-Control-Allow-Origin:` HTTP-Headers), wird die Ressource _verfälscht_, und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Sendet eine cross-origin Anfrage mit einer Berechtigung. Mit anderen Worten, es sendet den `Origin:` HTTP-Header mit einem Cookie, einem Zertifikat oder Durchführung von HTTP-Basic-Authentifizierung. Wenn der Server keine Berechtigungen an die Ursprungsseite gibt (durch den `Access-Control-Allow-Credentials:` HTTP-Header), wird die Ressource _verfälscht_ und ihre Nutzung eingeschränkt.

    Wenn nicht vorhanden, wird die Ressource ohne eine CORS-Anfrage abgerufen (d.h. ohne den `Origin:` HTTP-Header zu senden), was ihre nicht-verfälschte Nutzung in {{HTMLElement('canvas')}}-Elementen verhindert. Wenn ungültig, wird es behandelt, als ob das enumerierte Schlüsselwort **anonymous** verwendet wurde. Siehe [CORS-Einstellungen-Attribute](/de/docs/Web/HTML/Attributes/crossorigin) für zusätzliche Informationen.

- `disableremoteplayback`

  - : Ein Boolean-Attribut, das verwendet wird, um die Fähigkeit der Fernwiedergabe auf Geräten, die über kabelgebundene (HDMI, DVI, etc.) und kabellose Technologien (Miracast, Chromecast, DLNA, AirPlay, etc.) angeschlossen sind, zu deaktivieren. Siehe [diese vorgeschlagene Spezifikation](https://www.w3.org/TR/remote-playback/#the-disableremoteplayback-attribute) für weitere Informationen.

    In Safari können Sie [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) als Fallback verwenden.

- `loop`
  - : Ein Boolean-Attribut: wenn angegeben, springt der Audioplayer beim Erreichen des Endes der Audio automatisch zurück zum Anfang.
- `muted`
  - : Ein Boolean-Attribut, das angibt, ob die Audio anfänglich stummgeschaltet wird. Sein Standardwert ist `false`.
- `preload`

  - : Dieses {{Glossary("enumerated")}}-Attribut soll dem Browser einen Hinweis geben, was der Autor denkt, was zu der besten Benutzererfahrung führen wird. Es kann einen der folgenden Werte haben:

    - `none`: Gibt an, dass die Audio nicht vorgeladen werden soll.
    - `metadata`: Gibt an, dass nur die Audio-Metadaten (z.B. Länge) abgerufen werden.
    - `auto`: Gibt an, dass die gesamte Audiodatei heruntergeladen werden kann, selbst wenn der Benutzer nicht erwartet wird, sie zu verwenden.
    - _leerer String_: Ein Synonym für den `auto`-Wert.

    Der Standardwert ist für jeden Browser unterschiedlich. Die Spezifikation rät, ihn auf `metadata` zu setzen.

    > [!NOTE]
    >
    > - Das `autoplay`-Attribut hat Vorrang vor `preload`. Wenn `autoplay` angegeben ist, muss der Browser offensichtlich die Audio zum Abspielen herunterladen.
    > - Der Browser ist durch die Spezifikation nicht gezwungen, dem Wert dieses Attributs zu folgen; es ist nur ein Hinweis.

- `src`
  - : Die URL der einzubettenden Audio. Dies unterliegt [HTTP-Zugriffskontrollen](/de/docs/Web/HTTP/CORS). Dies ist optional; Sie können stattdessen das {{htmlelement("source")}}-Element innerhalb des Audio-Blocks verwenden, um die einzubettende Audio anzugeben.

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
      <td>{{domxref("ScriptProcessorNode/audioprocess_event", "audioprocess")}}</td>
      <td>
        Der Eingabepuffer eines {{DOMxRef("ScriptProcessorNode")}} ist bereit
        zur Verarbeitung.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.canplay_event", 'canplay')}}
      </td>
      <td>
        Der Browser kann das Medium abspielen, schätzt aber, dass nicht
        genügend Daten geladen wurden, um das Medium bis zum Ende abzuspielen,
        ohne für weiteres Puffern von Inhalten anhalten zu müssen.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.canplaythrough_event", 'canplaythrough')}}
      </td>
      <td>
        Der Browser schätzt, dass er das Medium bis zu seinem Ende abspielen
        kann, ohne für das Puffern von Inhalten anhalten zu müssen.
      </td>
    </tr>
    <tr>
      <td>{{domxref("OfflineAudioContext/complete_event", "complete")}}</td>
      <td>
        Das Rendering eines {{DOMxRef("OfflineAudioContext")}} ist beendet.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.durationchange_event", 'durationchange')}}
      </td>
      <td>Das <code>duration</code>-Attribut wurde aktualisiert.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.emptied_event", 'emptied')}}
      </td>
      <td>
        Das Medium ist leer geworden; zum Beispiel wird dieses Ereignis gesendet,
        wenn das Medium bereits geladen (oder teilweise geladen) wurde, und die
        {{domxref("HTMLMediaElement.load")}}-Methode aufgerufen wird, um es
        neu zu laden.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.ended_event", 'ended')}}
      </td>
      <td>Die Wiedergabe wurde gestoppt, weil das Ende des Mediums erreicht wurde.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.loadeddata_event", 'loadeddata')}}
      </td>
      <td>Der erste Frame des Mediums wurde fertig geladen.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.loadedmetadata_event", 'loadedmetadata')}}
      </td>
      <td>Die Metadaten wurden geladen.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.loadstart_event", 'loadstart')}}
      </td>
      <td>Ausgelöst, wenn der Browser begonnen hat, die Ressource zu laden.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.pause_event", 'pause')}}
      </td>
      <td>Die Wiedergabe wurde pausiert.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.play_event", 'play')}}
      </td>
      <td>Die Wiedergabe hat begonnen.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.playing_event", 'playing')}}
      </td>
      <td>
        Die Wiedergabe ist bereit zu starten, nachdem sie pausiert oder aufgrund
        von Datenmangel verzögert wurde.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.ratechange_event", 'ratechange')}}
      </td>
      <td>Die Wiedergabegeschwindigkeit hat sich geändert.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.seeked_event", 'seeked')}}
      </td>
      <td>Ein <em>Such</em>-Vorgang wurde abgeschlossen.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.seeking_event", 'seeking')}}
      </td>
      <td>Ein <em>Such</em>-Vorgang begann.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.stalled_event", 'stalled')}}
      </td>
      <td>
        Der Benutzeragent versucht, Mediendaten abzurufen, aber die Daten
        kommen unerwartet nicht.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.suspend_event", 'suspend')}}
      </td>
      <td>Das Laden von Mediendaten wurde ausgesetzt.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.timeupdate_event", 'timeupdate')}}
      </td>
      <td>
        Die durch das <code>currentTime</code>-Attribut angezeigte Zeit wurde
        aktualisiert.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.volumechange_event", 'volumechange')}}
      </td>
      <td>Die Lautstärke hat sich geändert.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.waiting_event", 'waiting')}}
      </td>
      <td>Die Wiedergabe wurde aufgrund eines vorübergehenden Datenmangels gestoppt</td>
    </tr>
  </tbody>
</table>

## Nutzungshinweise

Browser unterstützen nicht alle die gleichen [Dateitypen](/de/docs/Web/Media/Formats/Containers) und [Audio-Codecs](/de/docs/Web/Media/Formats/Audio_codecs); Sie können mehrere Quellen innerhalb verschachtelter {{htmlelement("source")}}-Elemente bereitstellen, und der Browser wird dann die erste verwenden, die er versteht:

```html
<audio controls>
  <source src="myAudio.mp3" type="audio/mpeg" />
  <source src="myAudio.ogg" type="audio/ogg" />
  <p>
    Downloaden Sie <a href="myAudio.mp3" download="myAudio.mp3">MP3</a> oder
    <a href="myAudio.ogg" download="myAudio.ogg">OGG</a> Audio.
  </p>
</audio>
```

Wir bieten einen umfassenden und ausführlichen [Leitfaden zu Medien-Dateitypen](/de/docs/Web/Media/Formats) und den [Audio-Codecs, die in diesen verwendet werden können](/de/docs/Web/Media/Formats/Audio_codecs). Auch verfügbar ist [ein Leitfaden zu den unterstützten Codecs für Videos](/de/docs/Web/Media/Formats/Video_codecs).

Weitere Nutzungshinweise:

- Wenn Sie das `controls`-Attribut nicht angeben, enthält der Audioplayer nicht die standardmäßigen Steuerungselemente des Browsers. Sie können jedoch Ihre eigenen benutzerdefinierten Steuerungselemente mit JavaScript und der {{domxref("HTMLMediaElement")}}-API erstellen.
- Um eine genaue Kontrolle über Ihre Audiowiedergabe zu haben, senden `HTMLMediaElement`s viele verschiedene [Ereignisse](/de/docs/Web/API/HTMLMediaElement#events). Dies bietet auch eine Möglichkeit, den Abruf der Audio zu überwachen, sodass Sie Fehler erkennen oder feststellen können, wann genug verfügbar ist, um mit der Wiedergabe zu beginnen oder diese zu manipulieren.
- Sie können auch die [Web Audio API](/de/docs/Web/API/Web_Audio_API) verwenden, um Audio-Streams direkt aus JavaScript-Code zu erzeugen und zu manipulieren, anstatt vorab vorhandene Audiodateien zu streamen.
- `<audio>`-Elemente können keine Untertitel oder Bildunterschriften verknüpfen, wie `<video>`-Elemente es können. Siehe [WebVTT und Audio](https://www.iandevlin.com/blog/2015/12/html5/webvtt-and-audio/) von Ian Devlin für einige nützliche Informationen und Workarounds.
- Um den Fallback-Inhalt in Browsern zu testen, die das Element unterstützen, können Sie `<audio>` durch ein nicht vorhandenes Element wie `<notanaudio>` ersetzen.

Eine gute allgemeine Informationsquelle zur Verwendung von HTML `<audio>` ist das [Video- und Audiomaterial](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) Anfänger-Tutorial.

### CSS-Styling

Das `<audio>`-Element hat keine eigene visuelle Ausgabe, es sei denn, das `controls`-Attribut ist angegeben; in diesem Fall werden die standardmäßigen Steuerungselemente des Browsers angezeigt.

Die Standardsteuerungen haben einen {{cssxref("display")}}-Wert von `inline` standardmäßig, und es ist oft eine gute Idee, den Wert auf `block` zu setzen, um die Positionierung und das Layout zu verbessern, es sei denn, Sie möchten, dass es innerhalb eines Textblocks oder Ähnlichem sitzt.

Sie können die Standardsteuerungen mit Eigenschaften gestalten, die den Block als Einheit betreffen, sodass Sie ihm zum Beispiel eine {{cssxref("border")}} und {{cssxref("border-radius")}}, {{cssxref("padding")}}, {{cssxref("margin")}} usw. geben können. Sie können jedoch nicht die einzelnen Komponenten innerhalb des Audioplayers stylen (z.B. die Größe der Schaltflächen oder Symbole ändern, die Schriftart ändern usw.), und die Steuerungen sind zwischen den verschiedenen Browsern unterschiedlich.

Um in allen Browsern ein konsistentes Aussehen und Verhalten zu erhalten, müssen Sie benutzerdefinierte Steuerungselemente erstellen; diese können Sie in beliebiger Weise auszeichnen und gestalten, und dann kann JavaScript zusammen mit der {{domxref("HTMLMediaElement")}}-API verwendet werden, um ihre Funktionalität zu verbinden.

[Grundlagen des Styling von Videoplayern](/de/docs/Web/Media/Audio_and_video_delivery/Video_player_styling_basics) bietet einige nützliche Stylingtechniken — es ist im Kontext von `<video>` geschrieben, aber vieles davon gilt genauso für `<audio>`.

### Erkennung von Hinzufügen und Entfernen von Spuren

Sie können erkennen, wann Spuren zu einem `<audio>`-Element hinzugefügt oder daraus entfernt werden, indem Sie die Ereignisse {{domxref("AudioTrackList/addtrack_event", "addtrack")}} und {{domxref("AudioTrackList/removetrack_event", "removetrack")}} verwenden. Diese Ereignisse werden jedoch nicht direkt an das `<audio>`-Element selbst gesendet. Stattdessen werden sie an das Tracklistenobjekt innerhalb des `<audio>`-Elements gesendet, das dem Typ der Spur entspricht, die dem Element hinzugefügt wurde:

- {{domxref("HTMLMediaElement.audioTracks")}}
  - : Eine {{domxref("AudioTrackList")}}, die alle Audiotracks des Medienelements enthält. Sie können einen Listener für `addtrack` an dieses Objekt hinzufügen, um benachrichtigt zu werden, wenn neue Audiotracks zum Element hinzugefügt werden.
- {{domxref("HTMLMediaElement.videoTracks")}}
  - : Fügen Sie diesem {{domxref("VideoTrackList")}}-Objekt einen `addtrack`-Listener hinzu, um informiert zu werden, wenn Videotracks zum Element hinzugefügt werden.
- {{domxref("HTMLMediaElement.textTracks")}}
  - : Fügen Sie diesem {{domxref("TextTrackList")}}-Objekt einen `addtrack`-Ereignislistener hinzu, um benachrichtigt zu werden, wenn neue Texttracks zum Element hinzugefügt werden.

> [!NOTE]
> Selbst wenn es ein `<audio>`-Element ist, hat es immer noch Video- und Texttracklisten und kann in der Tat verwendet werden, um Video zu präsentieren, obwohl die Benutzeroberfläche möglicherweise seltsam ist.

Zum Beispiel, um zu erkennen, wann Audiotracks zu oder von einem `<audio>`-Element hinzugefügt werden, können Sie Code wie diesen verwenden:

```js
const elem = document.querySelector("audio");

elem.audioTrackList.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTrackList.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Dieser Code beobachtet, wann Audiotracks im Element hinzugefügt oder entfernt werden und ruft eine hypothetische Funktion auf einem Trackeditor auf, um den Track zur Liste der verfügbaren Tracks des Editors hinzuzufügen oder zu entfernen.

Sie können auch {{domxref("EventTarget.addEventListener", "addEventListener()")}} verwenden, um auf die Ereignisse {{domxref("AudioTrackList/addtrack_event", "addtrack")}} und {{domxref("AudioTrackList/removetrack_event", "removetrack")}} zu hören.

## Barrierefreiheit

Audio mit gesprochenen Dialogen sollte sowohl Untertitel als auch Transkripte bereitstellen, die seinen Inhalt genau beschreiben. Untertitel, die mit [WebVTT](/de/docs/Web/API/WebVTT_API) angegeben sind, ermöglichen es Menschen mit Hörbehinderung, den Inhalt einer Audioaufnahme zu verstehen, während die Aufnahme abgespielt wird, während Transkripte Menschen, die mehr Zeit benötigen, ermöglichen, den Inhalt der Aufnahme in einem Tempo und Format zu überprüfen, das ihnen angenehm ist.

Wenn automatisierte Untertitel-Dienste verwendet werden, ist es wichtig, den generierten Inhalt zu überprüfen, um sicherzustellen, dass er die originale Audio korrekt wiedergibt.

Das `<audio>`-Element unterstützt WebVTT nicht direkt. Sie müssen eine Bibliothek oder ein Framework finden, das Ihnen die Fähigkeit bietet, oder selbst den Code schreiben, um Untertitel anzuzeigen. Eine Option besteht darin, Ihre Audio mit einem {{HTMLElement("video")}}-Element abzuspielen, das WebVTT unterstützt.

Zusätzlich zu gesprochenen Dialogen sollten Untertitel und Transkripte auch Musik und Soundeffekte identifizieren, die wichtige Informationen kommunizieren. Dies schließt Emotion und Ton ein. Zum Beispiel wird in dem unten stehenden WebVTT die Verwendung von eckigen Klammern bemerkt, um den Zuschauern tonale und emotionale Einblicke zu geben; dies kann helfen, die Stimmung zu erzeugen, die sonst durch Musik, nonverbale Geräusche und entscheidende Soundeffekte vermittelt wird usw.

```plain
1
00:00:00 --> 00:00:45
[Energetische Techno-Musik]

2
00:00:46 --> 00:00:51
Willkommen beim Podcast des Zeitwächters! In dieser Folge diskutieren wir, welche Schweizer Uhr eine Umschaltuhr ist?

16
00:00:52 --> 00:01:02
[Lachen] Entschuldigung! Ich meine, welche Armbanduhr eine Schweizer Armbanduhr ist?
```

Es ist auch eine gute Praxis, einigen Inhalt (wie den direkten Download-Link) als Fallback für Betrachter bereitzustellen, die einen Browser verwenden, in dem das `<audio>`-Element nicht unterstützt wird:

```html
<audio controls>
  <source src="myAudio.mp3" type="audio/mpeg" />
  <source src="myAudio.ogg" type="audio/ogg" />
  <p>
    Downloaden Sie <a href="myAudio.mp3">MP3</a> oder
    <a href="myAudio.ogg" download="myAudio.ogg">OGG</a> Audio.
  </p>
</audio>
```

- [Web Video Textspuren-Format (WebVTT)](/de/docs/Web/API/WebVTT_API)
- [WebAIM: Untertitel, Transkripte und Audiobeschreibungen](https://webaim.org/techniques/captions/)
- [MDN Verständnis der WCAG-Richtlinie 1.2-Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.2_—_Providing_text_alternatives_for_time-based_media)
- [Verständnis des Erfolgskriteriums 1.2.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Verständnis des Erfolgskriteriums 1.2.2 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel zeigt eine einfache Verwendung des `<audio>`-Elements, um eine OGG-Datei abzuspielen. Es wird durch das `autoplay`-Attribut automatisch abgespielt — wenn die Seite die Erlaubnis dazu hat — und enthält auch Fallback-Inhalt.

```html
<!-- Einfache Audio-Wiedergabe -->
<audio src="AudioTest.ogg" autoplay>
  <a href="AudioTest.ogg" download="AudioTest.ogg">OGG Audio herunterladen</a>.
</audio>
```

Für Details darüber, wann Autoplay funktioniert, wie man die Erlaubnis für die Nutzung von Autoplay erhält und wann es angemessen ist, Autoplay zu verwenden, siehe unseren [Autoplay-Leitfaden](/de/docs/Web/Media/Autoplay_guide).

### \<audio>-Element mit \<source>-Element

Dieses Beispiel spezifiziert, welcher Audiotrack eingebettet werden soll, indem das `src`-Attribut auf einem verschachtelten `<source>`-Element anstelle direkt auf dem `<audio>`-Element verwendet wird. Es ist immer nützlich, den MIME-Typ der Datei im `type`-Attribut anzugeben, da der Browser sofort feststellen kann, ob er diese Datei abspielen kann, und keine Zeit damit vergeuden muss, wenn nicht.

```html
<audio controls>
  <source src="foo.wav" type="audio/wav" />
  <a href="foo.wav" download="foo.wav">WAV Audio herunterladen</a>.
</audio>
```

### \<audio> mit mehreren \<source>-Elementen

Dieses Beispiel enthält mehrere `<source>`-Elemente. Der Browser versucht, das erste Quell-Element (Opus) zu laden, wenn er es abspielen kann; wenn nicht, fällt er zurück auf das zweite (Vorbis) und schließlich auf MP3:

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
        >, Phrasing-Inhalt, eingebetteter Inhalt. Wenn es ein
        <a href="#controls"><code>controls</code></a>-Attribut hat: interaktiver
        Inhalt und tastbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Wenn das Element ein <a href="#src"><code>src</code></a>-Attribut
        hat: null oder mehr {{HTMLElement("track")}}-Elemente gefolgt von
        transparentem Inhalt, der keine <code>&lt;audio&gt;</code> oder
        {{HTMLElement("video")}}-Medien-Elemente enthält.<br />Sonst: null oder
        mehr {{HTMLElement("source")}}-Elemente gefolgt von null oder mehr
        {{HTMLElement("track")}}-Elementen gefolgt von transparentem
        Inhalt, der keine <code>&lt;audio&gt;</code> oder
        {{HTMLElement("video")}}-Medien-Elemente enthält.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Anfangs- als auch das End-Tag sind obligatorisch.</td>
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
      <td>{{domxref("HTMLAudioElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Webmedien-Technologien](/de/docs/Web/Media)

  - [Medien-Containerformate (Dateitypen)](/de/docs/Web/Media/Formats/Containers)
  - [Leitfaden zu Audiocodecs, die im Web verwendet werden](/de/docs/Web/Media/Formats/Audio_codecs)

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- {{domxref("HTMLAudioElement")}}
- {{htmlelement("source")}}
- {{htmlelement("video")}}
- [Lernbereich: Video- und Audiomaterial](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [Grundlagen der plattformübergreifenden Audiowiedergabe](/de/docs/Web/Media/Audio_and_video_delivery/Cross-browser_audio_basics)
