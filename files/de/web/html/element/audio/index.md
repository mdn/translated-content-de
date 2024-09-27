---
title: "<audio>: Das Embed Audio-Element"
slug: Web/HTML/Element/audio
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}

Das **`<audio>`**-[HTML](/de/docs/Web/HTML)-Element wird verwendet, um Toninhalte in Dokumente einzubetten. Es kann eine oder mehrere Audioquellen enthalten, die durch das Attribut `src` oder das {{HTMLElement("source")}}-Element repräsentiert werden: der Browser wählt die am besten geeignete aus. Es kann auch als Ziel für gestreamte Medien verwendet werden, unter Verwendung eines [`MediaStream`](/de/docs/Web/API/MediaStream).

{{EmbedInteractiveExample("pages/tabbed/audio.html","tabbed-standard")}}

Das obige Beispiel zeigt eine einfache Verwendung des `<audio>`-Elements. Ähnlich wie beim {{htmlelement("img")}}-Element fügen wir einen Pfad zu dem Medium ein, das wir im `src`-Attribut einbetten möchten; wir können andere Attribute hinzufügen, um Informationen wie z.B. anzugeben, ob es automatisch abgespielt und wiederholt werden soll, ob wir die Standard-Audiosteuerungen des Browsers anzeigen möchten usw.

Der Inhalt zwischen dem öffnenden und schließenden `<audio></audio>`-Tag wird als Fallback in Browsern angezeigt, die das Element nicht unterstützen.

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `autoplay`

  - : Ein Boolean-Attribut: Wenn angegeben, beginnt die Wiedergabe des Audios automatisch, sobald es möglich ist, ohne darauf zu warten, dass die gesamte Audiodatei vollständig heruntergeladen ist.

    > [!NOTE]
    > Websites, die automatisch Audio (oder Videos mit einer Tonspur) abspielen, können für Nutzer eine unangenehme Erfahrung sein und sollten nach Möglichkeit vermieden werden. Wenn Sie dennoch Autoplay-Funktionalität anbieten müssen, sollte diese opt-in sein (das Erfordernis, dass ein Nutzer sie speziell aktiviert). Dies kann jedoch nützlich sein, wenn Medienelemente erstellt werden, deren Quelle später unter der Kontrolle des Nutzers festgelegt wird. Siehe unseren [Autoplay-Leitfaden](/de/docs/Web/Media/Autoplay_guide) für zusätzliche Informationen zur korrekten Verwendung von Autoplay.

- `controls`

  - : Wenn dieses Attribut vorhanden ist, bietet der Browser Steuerungen, die dem Nutzer das Steuern der Audiowiedergabe ermöglichen, einschließlich Lautstärke, Suche und Pause/Fortsetzung der Wiedergabe.

- `controlslist`

  - : Das [`controlslist`](https://wicg.github.io/controls-list/explainer.html)-Attribut, wenn angegeben, hilft dem Browser auszuwählen, welche Steuerungen für das `audio`-Element angezeigt werden sollen, wann immer der Browser seine eigenen Steuerungen anzeigt (d.h. wenn das `controls`-Attribut angegeben ist).

    Die erlaubten Werte sind `nodownload`, `nofullscreen` und `noremoteplayback`.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Dieses [aufgezählte](/de/docs/Glossary/Enumerated) Attribut gibt an, ob CORS verwendet werden soll, um die zugehörige Audiodatei abzurufen. [CORS-aktivierte Ressourcen](/de/docs/Web/HTML/CORS_enabled_image) können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne _verunreinigt_ zu werden. Die erlaubten Werte sind:

    - `anonymous`
      - : Sendet eine bereichsübergreifende Anfrage ohne Anmeldeinformationen. Anders gesagt, sendet es den `Origin:` HTTP-Header ohne Cookie, X.509-Zertifikat oder Durchführung der HTTP-Basic-Authentifizierung. Wenn der Server keine Anmeldeinformationen an die Ursprungsseite weitergibt (indem er den `Access-Control-Allow-Origin:` HTTP-Header nicht setzt), wird die Ressource _verunreinigt_ und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Sendet eine bereichsübergreifende Anfrage mit Anmeldeinformationen. Anders gesagt, sendet es den `Origin:` HTTP-Header mit einem Cookie, einem Zertifikat oder führt die HTTP-Basic-Authentifizierung durch. Wenn der Server keine Anmeldeinformationen an die Ursprungsseite weitergibt (durch den `Access-Control-Allow-Credentials:` HTTP-Header), wird die Ressource _verunreinigt_ und ihre Nutzung eingeschränkt.

    Wenn nicht vorhanden, wird die Ressource ohne eine CORS-Anfrage abgerufen (d.h. ohne den `Origin:` HTTP-Header zu senden), was ihre nicht-verunreinigte Nutzung in {{HTMLElement('canvas')}}-Elementen verhindert. Wenn ungültig, wird sie behandelt, als wäre das aufgezählte Schlüsselwort **anonymous** verwendet worden. Siehe [CORS Einstellungen Attribute](/de/docs/Web/HTML/Attributes/crossorigin) für zusätzliche Informationen.

- `disableremoteplayback`

  - : Ein Boolean-Attribut, das die Fähigkeit zur Fernwiedergabe in Geräten deaktiviert, die mit kabelgebundenen (HDMI, DVI, etc.) und drahtlosen Technologien (Miracast, Chromecast, DLNA, AirPlay, etc.) verbunden sind. Siehe [diese vorgeschlagene Spezifikation](https://www.w3.org/TR/remote-playback/#the-disableremoteplayback-attribute) für weitere Informationen.

    In Safari können Sie [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) als Fallback verwenden.

- `loop`
  - : Ein Boolean-Attribut: Wenn angegeben, sucht der Audioplayer automatisch zurück zum Anfang, wenn das Ende des Audios erreicht ist.
- `muted`
  - : Ein Boolean-Attribut, das angibt, ob das Audio anfänglich stummgeschaltet wird. Sein Standardwert ist `false`.
- `preload`

  - : Dieses [aufgezählte](/de/docs/Glossary/enumerated) Attribut soll dem Browser einen Hinweis geben, was der Autor für die beste Benutzererfahrung hält. Es kann einen der folgenden Werte haben:

    - `none`: Gibt an, dass das Audio nicht vorab geladen werden soll.
    - `metadata`: Gibt an, dass nur Audiodaten-Metadaten (z.B. Länge) abgerufen werden.
    - `auto`: Gibt an, dass die gesamte Audiodatei heruntergeladen werden kann, selbst wenn der Benutzer sie wahrscheinlich nicht verwenden wird.
    - _leerer String_: Ein Synonym für den `auto`-Wert.

    Der Standardwert ist in jedem Browser unterschiedlich. Die Spezifikation empfiehlt, ihn auf `metadata` zu setzen.

    > [!NOTE]
    >
    > - Das `autoplay`-Attribut hat Vorrang vor `preload`. Wenn `autoplay` angegeben ist, muss der Browser offensichtlich das Audio für die Wiedergabe herunterladen.
    > - Der Browser ist durch die Spezifikation nicht gezwungen, dem Wert dieses Attributs zu folgen; es ist lediglich ein Hinweis.

- `src`
  - : Die URL des einzubettenden Audios. Dies unterliegt [HTTP-Zugriffskontrollen](/de/docs/Web/HTTP/CORS). Dies ist optional; stattdessen können Sie das {{htmlelement("source")}}-Element innerhalb des Audio-Blocks verwenden, um die einzubettende Audioquelle anzugeben.

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
        Der Eingabepuffer eines [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) ist bereit zur Verarbeitung.
      </td>
    </tr>
    <tr>
      <td>
        [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)
      </td>
      <td>
        Der Browser kann das Medium abspielen, schätzt jedoch, dass nicht genügend Daten geladen wurden, um das Medium bis zu seinem Ende abzuspielen, ohne für zusätzliches Puffern von Inhalten anhalten zu müssen.
      </td>
    </tr>
    <tr>
      <td>
        [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
      </td>
      <td>
        Der Browser schätzt, dass er das Medium bis zu seinem Ende abspielen kann, ohne für das Puffern von Inhalten anhalten zu müssen.
      </td>
    </tr>
    <tr>
      <td>[`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)</td>
      <td>
        Die Wiedergabe eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) ist abgeschlossen.
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
        Das Medium ist leer geworden; zum Beispiel wird dieses Ereignis gesendet, wenn das Medium bereits geladen (oder teilweise geladen) wurde und die [`HTMLMediaElement.load`](/de/docs/Web/API/HTMLMediaElement/load)-Methode aufgerufen wird, um es neu zu laden.
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
        Die Wiedergabe ist bereit zu starten, nachdem sie pausiert oder wegen Datenmangel verzögert wurde.
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
      <td>Eine <em>Such</em>-Operation wurde abgeschlossen.</td>
    </tr>
    <tr>
      <td>
        [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
      </td>
      <td>Eine <em>Such</em>-Operation hat begonnen.</td>
    </tr>
    <tr>
      <td>
        [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
      </td>
      <td>
        Der Benutzeragent versucht Mediendaten abzurufen, aber Daten kommen unerwartet nicht.
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
      <td>Die Lautstärke wurde geändert.</td>
    </tr>
    <tr>
      <td>
        [`waiting`](/de/docs/Web/API/HTMLMediaElement/waiting_event)
      </td>
      <td>Die Wiedergabe wurde wegen eines vorübergehenden Datenmangels gestoppt.</td>
    </tr>
  </tbody>
</table>

## Verwendungshinweise

Browser unterstützen nicht alle die gleichen [Dateitypen](/de/docs/Web/Media/Formats/Containers) und [Audio-Codecs](/de/docs/Web/Media/Formats/Audio_codecs); Sie können mehrere Quellen innerhalb verschachtelter {{htmlelement("source")}}-Elemente bereitstellen, und der Browser wird dann die erste, die er versteht, verwenden:

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

Wir bieten einen umfassenden und gründlichen [Leitfaden zu Medientypen](/de/docs/Web/Media/Formats) und den [Audio-Codecs, die in ihnen verwendet werden können](/de/docs/Web/Media/Formats/Audio_codecs). Zusätzlich, ist auch [ein Leitfaden zu den unterstützten Video-Codecs](/de/docs/Web/Media/Formats/Video_codecs) verfügbar.

Weitere Verwendungshinweise:

- Wenn Sie das `controls`-Attribut nicht angeben, enthält der Audioplayer nicht die Standardsteuerungen des Browsers. Sie können jedoch Ihre eigenen benutzerdefinierten Steuerungen mithilfe von JavaScript und der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API erstellen.
- Um eine präzise Kontrolle über Ihre Audioinhalte zu ermöglichen, feuern `HTMLMediaElement`s viele verschiedene [Ereignisse](/de/docs/Web/API/HTMLMediaElement#events). Dies bietet auch eine Möglichkeit, den Abrufprozess des Audios zu überwachen, sodass Sie Fehler erkennen oder feststellen können, wann genug verfügbar ist, um mit der Wiedergabe zu beginnen oder es zu manipulieren.
- Sie können die [Web Audio API](/de/docs/Web/API/Web_Audio_API) auch verwenden, um direkt Audio-Streams aus JavaScript-Code zu erzeugen und zu manipulieren, anstatt bereits vorhandene Audiodateien zu streamen.
- `<audio>`-Elemente können keine Untertitel oder Beschriftungen auf die gleiche Weise wie `<video>`-Elemente haben. Siehe [WebVTT und Audio](https://www.iandevlin.com/blog/2015/12/html5/webvtt-and-audio/) von Ian Devlin für einige nützliche Informationen und Workarounds.
- Um den Fallback-Inhalt in Browsern zu testen, die das Element unterstützen, können Sie `<audio>` durch ein nicht existierendes Element wie `<notanaudio>` ersetzen.

Eine gute allgemeine Informationsquelle zur Verwendung von HTML `<audio>` ist das Einsteiger-Tutorial [Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content).

### Styling mit CSS

Das `<audio>`-Element selbst hat keine eigene visuelle Ausgabe, es sei denn, das `controls`-Attribut ist angegeben, in welchem Fall die Standardsteuerungen des Browsers angezeigt werden.

Die Standardsteuerungen haben standardmäßig einen {{cssxref("display")}}-Wert von `inline`, und es ist oft eine gute Idee, den Wert auf `block` zu setzen, um die Kontrolle über Positionierung und Layout zu verbessern, es sei denn, Sie möchten, dass es innerhalb eines Textblocks oder Ähnlichem sitzt.

Sie können die Standardsteuerungen mit Eigenschaften stylen, die den gesamten Block als Einheit beeinflussen. Zum Beispiel können Sie ihm einen {{cssxref("border")}} und {{cssxref("border-radius")}}, {{cssxref("padding")}}, {{cssxref("margin")}} usw. geben. Sie können jedoch die einzelnen Komponenten innerhalb des Audioplayers nicht stylen (z. B. die Schaltflächengröße oder Symbole ändern, die Schriftart ändern usw.), und die Steuerungen sind in den verschiedenen Browsern unterschiedlich.

Um ein einheitliches Erscheinungsbild über alle Browser hinweg zu erreichen, müssen Sie benutzerdefinierte Steuerungen erstellen; diese können auf beliebige Weise ausgearbeitet und gestylt werden, und dann kann JavaScript verwendet werden, um zusammen mit der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API deren Funktionalität zu verknüpfen.

[Grundlagen der Videoplayer-Stilgestaltung](/de/docs/Web/Media/Audio_and_video_delivery/Video_player_styling_basics) bietet einige nützliche Stilgestaltungstechniken – es wird im Kontext von `<video>` geschrieben, aber vieles davon ist genauso auf `<audio>` anwendbar.

### Erkennung von Hinzufügung und Entfernung von Spuren

Sie können erkennen, wann Spuren zu einem `<audio>`-Element hinzugefügt und von ihm entfernt werden, indem Sie die Ereignisse [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event) verwenden. Diese Ereignisse werden jedoch nicht direkt an das `<audio>`-Element selbst gesendet. Stattdessen werden sie an das Track-Listen-Objekt innerhalb des [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) des `<audio>`-Elements gesendet, das dem hinzugefügten Spurtyp entspricht:

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die alle Audiospuren des Medienelements enthält. Sie können einen Listener für `addtrack` zu diesem Objekt hinzufügen, um benachrichtigt zu werden, wenn neue Audiospuren zu dem Element hinzugefügt werden.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)
  - : Fügen Sie diesem [`VideoTrackList`](/de/docs/Web/API/VideoTrackList)-Objekt einen `addtrack`-Listener hinzu, um informiert zu werden, wenn Video-Spuren dem Element hinzugefügt werden.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
  - : Fügen Sie dieser [`TextTrackList`](/de/docs/Web/API/TextTrackList) einen `addtrack`-Event-Listener hinzu, um benachrichtigt zu werden, wenn neue Textspuren dem Element hinzugefügt werden.

> [!NOTE]
> Auch wenn es ein `<audio>`-Element ist, hat es dennoch Video- und Text-Track-Listen und kann tatsächlich verwendet werden, um Video zu präsentieren, obwohl die Benutzeroberflächenimplikationen merkwürdig sein können.

Um z.B. zu erkennen, wann Audiospuren zu einem `<audio>`-Element hinzugefügt oder von ihm entfernt werden, können Sie Code wie diesen verwenden:

```js
const elem = document.querySelector("audio");

elem.audioTrackList.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTrackList.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Dieser Code beobachtet, wann Audiospuren zu dem Element hinzugefügt oder von ihm entfernt werden, und ruft eine hypothetische Funktion in einem Track-Editor auf, um den Track in der Liste der verfügbaren Tracks des Editors zu registrieren und zu entfernen.

Sie können auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um auf die Ereignisse [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event) zu hören.

## Barrierefreiheit

Audio mit gesprochenem Dialog sollte sowohl Untertitel als auch Transkripte enthalten, die seinen Inhalt genau beschreiben. Untertitel, die mit [WebVTT](/de/docs/Web/API/WebVTT_API) angegeben werden, ermöglichen es Menschen mit Hörbehinderungen, den Inhalt einer Audioaufnahme zu verstehen, während die Aufnahme abgespielt wird, während Transkripte es Menschen, die mehr Zeit benötigen, ermöglichen, den Inhalt der Aufnahme in einem Tempo und Format zu überprüfen, das für sie angenehm ist.

Wenn automatische Untertitelungsdienste verwendet werden, ist es wichtig, den erzeugten Inhalt zu überprüfen, um sicherzustellen, dass er den Quellaudio genau repräsentiert.

Das `<audio>`-Element unterstützt WebVTT nicht direkt. Sie müssen eine Bibliothek oder ein Framework finden, das diese Funktionalität bietet, oder den Code selbst schreiben, um die Untertitel anzuzeigen. Eine Möglichkeit ist, Ihr Audio in einem {{HTMLElement("video")}}-Element abzuspielen, das WebVTT unterstützt.

Zusätzlich zum gesprochenen Dialog sollten Untertitel und Transkripte auch Musik und Soundeffekte identifizieren, die wichtige Informationen kommunizieren. Dies umfasst Emotionen und Ton. Beispielsweise wird im WebVTT unten die Verwendung von eckigen Klammern zur Bereitstellung von Ton- und Gefühlsinformationen für den Betrachter bemerkt; dies kann helfen, die Stimmung herzustellen, die sonst durch Musik, nonverbale Geräusche und entscheidende Soundeffekte vermittelt würde usw.

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

Es ist auch eine gute Praxis, etwas Inhalt (wie den direkten Download-Link) als Fallback für Betrachter anzubieten, die einen Browser verwenden, in dem das `<audio>`-Element nicht unterstützt wird:

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
- [MDN Understanding WCAG, Richtlinie 1.2 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [Verständnis der Erfolgskriterien 1.2.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Verständnis der Erfolgskriterien 1.2.2 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel zeigt eine einfache Verwendung des `<audio>`-Elements zum Abspielen einer OGG-Datei. Es wird automatisch abgespielt aufgrund des `autoplay`-Attributs - wenn die Seite die Berechtigung dazu hat - und enthält auch Fallback-Inhalt.

```html
<!-- Simple audio playback -->
<audio src="AudioTest.ogg" autoplay>
  <a href="AudioTest.ogg" download="AudioTest.ogg">Download OGG audio</a>.
</audio>
```

Für Details darüber, wann Autoplay funktioniert, wie man die Erlaubnis zur Nutzung von Autoplay erhält und wie und wann es angemessen ist, Autoplay zu verwenden, siehe unseren [Autoplay-Leitfaden](/de/docs/Web/Media/Autoplay_guide).

### \<audio>-Element mit \<source>-Element

Dieses Beispiel gibt an, welche Audiospur eingebettet werden soll, indem das `src`-Attribut auf einem verschachtelten `<source>`-Element und nicht direkt auf dem `<audio>`-Element verwendet wird. Es ist immer sinnvoll, den MIME-Typ der Datei im Attribut `type` anzugeben, da der Browser sofort erkennen kann, ob er die Datei abspielen kann, und keine Zeit damit verschwendet.

```html
<audio controls>
  <source src="foo.wav" type="audio/wav" />
  <a href="foo.wav" download="foo.wav">Download WAV audio</a>.
</audio>
```

### \<audio> mit mehreren \<source>-Elementen

Dieses Beispiel enthält mehrere `<source>`-Elemente. Der Browser versucht, das erste Quellelement (Opus) zu laden, wenn er es abspielen kann; falls nicht, fällt er auf das zweite (Vorbis) zurück und schließlich auf MP3:

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
          >Fließendes Inhalt</a
        >, Phraseninhalt, eingebetteter Inhalt. Wenn es ein
        <a href="#controls"><code>controls</code></a>-Attribut hat: interaktiver
        Inhalt und greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        Wenn das Element ein <a href="#src"><code>src</code></a>-Attribut hat:
        null oder mehr {{HTMLElement("track")}}-Elemente gefolgt von
        transparentem Inhalt, der keine
        <code>&lt;audio&gt;</code> oder {{HTMLElement("video")}}
        Medienelemente enthält.<br />Sonst: null oder mehr {{HTMLElement("source")}}
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

  - [Mediencontainerformate (Dateitypen)](/de/docs/Web/Media/Formats/Containers)
  - [Leitfaden zu Audio-Codecs im Web](/de/docs/Web/Media/Formats/Audio_codecs)

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)
- {{htmlelement("source")}}
- {{htmlelement("video")}}
- [Lernbereich: Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [Grundlagen der plattformübergreifenden Audio-Technik](/de/docs/Web/Media/Audio_and_video_delivery/Cross-browser_audio_basics)
