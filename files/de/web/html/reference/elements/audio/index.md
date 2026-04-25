---
title: "`<audio>` HTML Audio-Element einbetten"
short-title: <audio>
slug: Web/HTML/Reference/Elements/audio
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<audio>`** [HTML](/de/docs/Web/HTML) Element wird verwendet, um Soundinhalte in Dokumenten einzubetten. Es kann eine oder mehrere Audioquellen enthalten, die über das `src` Attribut oder das {{HTMLElement("source")}} Element repräsentiert werden: Der Browser wählt die geeignetste aus. Es kann auch das Ziel für gestreamte Medien sein, unter Verwendung eines [`MediaStream`](/de/docs/Web/API/MediaStream).

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

Das obige Beispiel zeigt die grundlegende Verwendung des `<audio>` Elements.
Ähnlich wie beim {{htmlelement("img")}} Element geben wir einen Pfad zu den Medien an, die wir im `src` Attribut einbetten möchten; wir können auch andere Attribute einfügen, um Informationen wie zum Beispiel anzugeben, ob es automatisch abgespielt und wiederholt werden soll, ob wir die Standard-Audiosteuerungen des Browsers anzeigen möchten usw.

Der Inhalt zwischen den öffnenden und schließenden `<audio></audio>` Tags wird als Fallback in Browsern angezeigt, die das Element nicht unterstützen.

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `autoplay`
  - : Ein Boolean-Attribut: Wenn angegeben, beginnt das Audio automatisch mit der Wiedergabe, sobald es möglich ist, ohne darauf zu warten, dass die gesamte Audiodatei heruntergeladen ist.

    > [!NOTE]
    > Websites, die automatisch Audio (oder Videos mit einem Audiotrack) abspielen, können für Benutzer eine unangenehme Erfahrung sein und sollten nach Möglichkeit vermieden werden.
    > Wenn Sie die Autoplay-Funktionalität anbieten müssen, sollten Sie es opt-in machen (indem der Benutzer es spezifisch aktivieren muss).
    > Dies kann jedoch nützlich sein, wenn Medienelemente erstellt werden, deren Quelle später, unter Benutzereingabe, festgelegt wird.
    > Siehe unseren [Autoplay-Leitfaden](/de/docs/Web/Media/Guides/Autoplay) für weitere Informationen zur korrekten Verwendung von Autoplay.

    > [!NOTE]
    > Audio mit dem [`loading="lazy"`](#loading) Attribut wird nicht heruntergeladen und automatisch abgespielt, bis die Steuerungen der Medien in der Nähe oder innerhalb des Viewports sind. Lazy-geladenes Audio ohne das `controls` Attribut wird nicht automatisch abgespielt.

- `controls`
  - : Wenn dieses Attribut vorhanden ist, bietet der Browser Steuerungen an, um dem Benutzer die Steuerung der Audiowiedergabe zu ermöglichen, einschließlich Lautstärke, Suchlauf und Pause/Fortsetzen der Wiedergabe.

- `controlslist`
  - : Das [`controlslist`](https://wicg.github.io/controls-list/explainer.html) Attribut hilft dem Browser, auszuwählen, welche Steuerungen für das `audio` Element angezeigt werden sollen, wann immer der Browser sein eigenes Set von Steuerungen zeigt (d.h. wenn das `controls` Attribut angegeben wird).

    Die erlaubten Werte sind `nodownload`, `nofullscreen` und `noremoteplayback`.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Dieses {{Glossary("Enumerated", "enumerierte")}} Attribut gibt an, ob CORS verwendet wird, um die zugehörige Audiodatei abzurufen. [CORS-aktivierte Ressourcen](/de/docs/Web/HTML/How_to/CORS_enabled_image) können im {{HTMLElement("canvas")}} Element wiederverwendet werden, ohne _verunreinigt_ zu sein. Die erlaubten Werte sind:
    - `anonymous`
      - : Sendet eine Cross-Origin-Anfrage ohne eine Berechtigung. Mit anderen Worten, es sendet den `Origin:` HTTP-Header ohne ein Cookie, X.509-Zertifikat oder Durchführung einer HTTP-Basisauthentifizierung. Wenn der Server der Ursprungsseite keine Berechtigungen erteilt (indem er den `Access-Control-Allow-Origin:` HTTP-Header nicht festlegt), wird die Ressource _verunreinigt_ und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Sendet eine Cross-Origin-Anfrage mit einer Berechtigung. Mit anderen Worten, es sendet den `Origin:` HTTP-Header zusammen mit einem Cookie, einem Zertifikat oder Durchführung einer HTTP-Basisauthentifizierung. Wenn der Server der Ursprungsseite keine Berechtigungen erteilt (durch `Access-Control-Allow-Credentials:` HTTP-Header), wird die Ressource _verunreinigt_ und ihre Nutzung eingeschränkt.

    Wenn es nicht vorhanden ist, wird die Ressource ohne eine CORS-Anfrage abgerufen (d.h. ohne den `Origin:` HTTP-Header zu senden), was die nicht-verunreinigte Nutzung in {{HTMLElement('canvas')}} Elementen verhindert. Wenn es ungültig ist, wird es behandelt, als wäre das enumerierte Schlüsselwort **anonymous** verwendet worden. Siehe [CORS-Einstellungen-Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für zusätzliche Informationen.

- `disableremoteplayback`
  - : Ein Boolean-Attribut, das verwendet wird, um die Fähigkeit der Fernwiedergabe in Geräten zu deaktivieren, die mit kabelgebundenen (HDMI, DVI usw.) und drahtlosen Technologien (Miracast, Chromecast, DLNA, AirPlay usw.) verbunden sind. Siehe die vorgeschlagene [Remote Playback API-Spezifikation](https://w3c.github.io/remote-playback/#the-disableremoteplayback-attribute) für weitere Informationen.

    In Safari können Sie [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) als Fallback verwenden.

- `loading` {{experimental_inline}}
  - : Gibt an, wie der Browser das Audio laden soll:
    - `eager`
      - : Lädt das Audio sofort, unabhängig davon, ob das Audio sich derzeit innerhalb des sichtbaren Viewports befindet oder nicht (dies ist der Standardwert).
    - `lazy`
      - : Verzögert das Laden des Audios, bis die Steuerungen eine berechnete Entfernung vom Viewport erreichen, wie es der Browser definiert.

        > [!NOTE]
        > Damit Audio-Elemente sichtbar mit dem Viewport interagieren, müssen sie sichtbar sein. Browser verwenden das `controls` Attribut, um Audio-Elemente sichtbar zu machen, daher wird es für lazy loading benötigt. Lazy-geladenes Audio ohne das `controls` Attribut wird nicht geladen.

        Lazy loading vermeidet das Netzwerk- und Speicher-Bandbreitenbedarfs, das erforderlich ist, um das Audio zu verarbeiten, bis es mit begründeter Sicherheit benötigt wird. Dies verbessert die Leistung in den meisten typischen Anwendungsfällen.

        Lazy-geladenes Audio, das sich im sichtbaren Viewport befindet, ist möglicherweise noch nicht heruntergeladen, wenn das [`load`](/de/docs/Web/API/Window/load_event) Ereignis im Fenster ausgelöst wird. Dies liegt daran, dass das Ereignis basierend auf eager-geladenem Audio ausgelöst wird — lazy-geladenes Audio wird nicht betrachtet, selbst wenn es sich beim ersten Laden der Seite im sichtbaren Viewport befindet.

        Das Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Maßnahme gegen Tracking, denn wenn ein Benutzeragent Lazy Loading unterstützt, wenn Skripting deaktiviert ist, wäre es dennoch möglich, die ungefähre Scrollposition eines Benutzers während einer Sitzung zu verfolgen, indem strategisch Audio in der Markup einer Seite platziert wird, sodass ein Server nachverfolgen kann, wie viele Audioanforderungen gestellt werden und wann.

        > [!NOTE]
        > Das `loading="lazy"` Attribut wirkt sich auch auf das [`autoplay`](#autoplay) Attribut aus, wie in diesem Abschnitt auf dieser Seite beschrieben.

- `loop`
  - : Ein Boolean-Attribut: Wenn angegeben, sucht der Audio-Player automatisch zu Beginn zurück, wenn das Ende des Audios erreicht ist.
- `muted`
  - : Ein Boolean-Attribut, das angibt, ob das Audio anfänglich stummgeschaltet wird. Der Standardwert ist `false`.
- `preload`
  - : Dieses {{Glossary("enumerated", "enumerierte")}} Attribut soll dem Browser einen Hinweis darauf geben, was der Autor für die beste Benutzererfahrung hält. Es kann einen der folgenden Werte haben:
    - `none`: Gibt an, dass das Audio nicht vorgeladen werden soll.
    - `metadata`: Gibt an, dass nur Audiodaten (z. B. Länge) abgerufen werden.
    - `auto`: Gibt an, dass die gesamte Audiodatei heruntergeladen werden kann, auch wenn der Benutzer voraussichtlich nicht verwendet wird.
    - _leerer String_: Ein Synonym zum `auto` Wert.

    Der Standardwert ist in jedem Browser unterschiedlich. Die Spezifikation rät, ihn auf `metadata` zu setzen.

    > [!NOTE]
    >
    > - Audio mit dem [`loading="lazy"`](#loading) Attribut wird das `preload` Verhalten erst anwenden, wenn die Audio-Steuerungen nahe oder innerhalb des Viewports sind.
    > - Das `autoplay` Attribut hat Vorrang vor `preload`. Wenn `autoplay` angegeben ist, müsste der Browser offensichtlich beginnen, das Audio für die Wiedergabe herunterzuladen.
    > - Der Browser ist nicht gezwungen, die Wertangabe dieses Attributs zu befolgen; es ist lediglich ein Hinweis.

- `src`
  - : Die URL des einzubettenden Audios. Dies unterliegt den [HTTP-Zugangskontrollen](/de/docs/Web/HTTP/Guides/CORS). Dies ist optional; stattdessen können Sie das {{htmlelement("source")}} Element innerhalb des Audioblocks verwenden, um das einzubettende Audio anzugeben.

## Ereignisse

- [`audioprocess`](/de/docs/Web/API/ScriptProcessorNode/audioprocess_event) {{Deprecated_Inline}}
  - : Der Eingabepuffer eines [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) ist bereit für die Verarbeitung.
- [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)
  - : Der Browser kann die Medien abspielen, schätzt jedoch, dass nicht genügend Daten geladen wurden, um die Medien bis zu ihrem Ende abzuspielen, ohne für weiteres Puffern der Inhalte anzuhalten.
- [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
  - : Der Browser schätzt, dass er die Medien bis zu ihrem Ende abspielen kann, ohne für das Puffern von Inhalten anzuhalten.
- [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)
  - : Die Verarbeitung eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) ist abgeschlossen.
- [`durationchange`](/de/docs/Web/API/HTMLMediaElement/durationchange_event)
  - : Das `duration` Attribut wurde aktualisiert.
- [`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)
  - : Die Medien sind leer geworden; zum Beispiel wird dieses Ereignis gesendet, wenn die Medien bereits geladen (oder teilweise geladen) sind und die Methode [`HTMLMediaElement.load`](/de/docs/Web/API/HTMLMediaElement/load) aufgerufen wird, um sie erneut zu laden.
- [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)
  - : Die Wiedergabe wurde gestoppt, weil das Ende der Medien erreicht wurde.
- [`loadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event)
  - : Der erste Frame der Medien wurde fertig geladen.
- [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
  - : Die Metadaten wurden geladen.
- [`loadstart`](/de/docs/Web/API/HTMLMediaElement/loadstart_event)
  - : Wird ausgelöst, wenn der Browser begonnen hat, die Ressource zu laden.
- [`pause`](/de/docs/Web/API/HTMLMediaElement/pause_event)
  - : Die Wiedergabe wurde pausiert.
- [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)
  - : Die Wiedergabe hat begonnen.
- [`playing`](/de/docs/Web/API/HTMLMediaElement/playing_event)
  - : Die Wiedergabe ist bereit, nach einer Pause oder Verzögerung aufgrund fehlender Daten zu starten.
- [`ratechange`](/de/docs/Web/API/HTMLMediaElement/ratechange_event)
  - : Die Wiedergabegeschwindigkeit wurde geändert.
- [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event)
  - : Eine _Such_-Operation wurde abgeschlossen.
- [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
  - : Eine _Such_-Operation begann.
- [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
  - : Der Benutzeragent versucht, Mediendaten zu holen, aber Daten sind unerwartet nicht verfügbar.
- [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event)
  - : Das Laden von Mediendaten wurde ausgesetzt.
- [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)
  - : Die durch das `currentTime` Attribut angezeigte Zeit wurde aktualisiert.
- [`volumechange`](/de/docs/Web/API/HTMLMediaElement/volumechange_event)
  - : Die Lautstärke wurde geändert.
- [`waiting`](/de/docs/Web/API/HTMLMediaElement/waiting_event)
  - : Die Wiedergabe wurde abgebrochen, weil vorübergehend keine Daten verfügbar sind.

## Nutzungshinweise

Browser unterstützen nicht alle die gleichen [Dateitypen](/de/docs/Web/Media/Guides/Formats/Containers) und [Audiocodecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs); Sie können mehrere Quellen innerhalb verschachtelter {{htmlelement("source")}} Elemente bereitstellen, und der Browser verwendet dann die erste, die er versteht:

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

Die Audioquelle kann auf jede gültige [URL](/de/docs/Web/URI) gesetzt werden, einschließlich HTTP(S)-URLs und [Data-URLs](/de/docs/Web/URI/Reference/Schemes/data). Bei der Verwendung von HTTP(S)-URLs beachten Sie bitte, dass das Caching-Verhalten des Browsers beeinflusst, wie oft die Datei vom Server angefordert wird. Data-URLs betten die Audiodaten direkt im HTML ein, was für kleine Audiodateien nützlich sein kann, jedoch nicht für größere Dateien empfohlen wird, da es die HTML-Dateigröße erhöht.

Wenn Sie {{htmlelement("source")}} Elemente verwenden, versucht der Browser, jede Quelle nacheinander zu laden. Wenn eine Quelle fehlschlägt (z. B. aufgrund einer ungültigen URL oder eines nicht unterstützten Formats), wird die nächste Quelle versucht usw. Ein `error`-Ereignis wird ausgelöst, wenn alle Quellen fehlgeschlagen sind; `error`-Ereignisse werden nicht für jedes einzelne `<source>` Element ausgelöst.

Sie können auch die [Web Audio API](/de/docs/Web/API/Web_Audio_API) verwenden, um direkt Audio-Streams aus JavaScript-Code zu erzeugen und zu manipulieren, anstatt vorgefertigte Audiodateien zu streamen. Sie können das [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) in JavaScript auf ein [`MediaStream`](/de/docs/Web/API/MediaStream) Objekt setzen. Dies wird häufig für Live-Audio-Streams oder Echtzeit-Audiobearbeitung verwendet.

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

Beachten Sie, dass `MediaStream` Quellen Einschränkungen haben: Sie können nicht durchsucht werden und unterstützen nur einen begrenzten Satz von Codecs.

Wir bieten einen umfassenden [Leitfaden zu Mediendateitypen](/de/docs/Web/Media/Guides/Formats) und den [Audiocodecs, die in ihnen verwendet werden können](/de/docs/Web/Media/Guides/Formats/Audio_codecs). Ebenfalls verfügbar ist [ein Leitfaden zu den für Video unterstützten Codecs](/de/docs/Web/Media/Guides/Formats/Video_codecs).

Andere Nutzungshinweise:

- Wenn Sie das `controls` Attribut nicht angeben, wird der Audio-Player nicht die Standard-Steuerungen des Browsers enthalten. Sie können jedoch Ihre eigenen benutzerdefinierten Steuerungen mit JavaScript und der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API erstellen.
- Um eine präzise Kontrolle über Ihre Audioinhalte zu ermöglichen, lösen `HTMLMediaElement`s viele verschiedene [Ereignisse](/de/docs/Web/API/HTMLMediaElement#events) aus. Dadurch erhalten Sie auch eine Möglichkeit, den Abrufprozess des Audios zu überwachen, sodass Sie Fehler oder feststellen können, wann genug zum Abspielen oder Manipulieren zur Verfügung steht.
- `<audio>` Elemente können keine Untertitel oder Beschriftungen zugeordnet werden, wie es `<video>` Elemente können. Siehe [WebVTT und Audio](https://www.iandevlin.com/blog/2015/12/html5/webvtt-and-audio/) von Ian Devlin für einige nützliche Informationen und Workarounds.
- Um den Fallback-Inhalt in Browsern zu testen, die das Element unterstützen, können Sie `<audio>` durch ein nicht existierendes Element wie `<notanaudio>` ersetzen.

Eine gute allgemeine Informationsquelle zur Verwendung von HTML `<audio>` ist das [HTML Video- und Audio-Anfängertutorial](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio).

### Styling mit CSS

Das `<audio>` Element hat keine eigene visuelle Ausgabe, es sei denn, das `controls` Attribut ist angegeben, in welchem Fall die Standard-Steuerungen des Browsers angezeigt werden.

Die Standard-Steuerungen haben standardmäßig einen {{cssxref("display")}} Wert von `inline`, es ist oft eine gute Idee, den Wert auf `block` zu setzen, um eine bessere Kontrolle über die Positionierung und das Layout zu erhalten, es sei denn, Sie möchten, dass es in einem Textblock oder Ähnlichem sitzt.

Sie können die Standard-Steuerungen mit Eigenschaften stylen, die den Block als eine einzelne Einheit betreffen, sodass Sie ihm beispielsweise eine {{cssxref("border")}} und {{cssxref("border-radius")}}, {{cssxref("padding")}}, {{cssxref("margin")}} usw. geben können. Sie können jedoch nicht die einzelnen Komponenten im Audio-Player stylen (z. B. die Schaltflächengröße oder Symbole ändern, die Schriftart ändern usw.), und die Steuerungen sind je nach Browser unterschiedlich.

Um ein konsistentes Erscheinungsbild über die Browser hinweg zu erhalten, müssen Sie benutzerdefinierte Steuerungen erstellen; diese können nach Belieben markiert und gestylt werden, und dann kann JavaScript zusammen mit der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API verwendet werden, um ihre Funktionalität zu verbinden.

[Video-Player-Styling-Grundlagen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics) bietet einige nützliche Styling-Techniken — es ist im Kontext von `<video>` geschrieben, aber vieles davon gilt gleichermaßen für `<audio>`.

### Hinzufügen und Entfernen von Tracks erkennen

Sie können erkennen, wann Tracks zu einem `<audio>` Element hinzugefügt und entfernt werden, indem Sie die [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event) Ereignisse verwenden. Diese Ereignisse werden jedoch nicht direkt an das `<audio>` Element selbst gesendet. Stattdessen werden sie an das Track-Listenobjekt innerhalb des `<audio>` Elements gesendet, das dem hinzugefügten Tracketyp entspricht:

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die alle Audio-Tracks des Medienelements enthält. Sie können einen Listener für `addtrack` an dieses Objekt hinzufügen, um benachrichtigt zu werden, wenn neue Audio-Tracks zum Element hinzugefügt werden.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)
  - : Fügen Sie diesem [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) Objekt einen `addtrack` Listener hinzu, um informiert zu werden, wann Video-Tracks zum Element hinzugefügt werden.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
  - : Fügen Sie diesem [`TextTrackList`](/de/docs/Web/API/TextTrackList) einen `addtrack` Listener hinzu, um benachrichtigt zu werden, wenn neue Text-Tracks zum Element hinzugefügt werden.

> [!NOTE]
> Auch wenn es ein `<audio>` Element ist, hat es dennoch Video- und Text-Track-Listen und kann in der Tat verwendet werden, um Video zu präsentieren, obwohl die Benutzung etwas seltsam sein kann.

Zum Beispiel, um zu erkennen, wann Audio-Tracks zu oder entfernt werden, können Sie Code wie diesen verwenden:

```js
const elem = document.querySelector("audio");

elem.audioTrackList.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTrackList.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Dieser Code überwacht, wann Audio-Tracks zum Element hinzugefügt oder entfernt werden und ruft eine hypothetische Funktion auf einem Track-Editor auf, um den Track zur verfügbaren Track-Liste des Editors hinzuzufügen oder zu entfernen.

Sie können auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um auf die [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event) Ereignisse zu hören.

## Barrierefreiheit

Audio mit gesprochenem Dialog sollte sowohl Untertitel als auch Transkriptionen enthalten, die seinen Inhalt genau beschreiben. Untertitel, die mit [WebVTT](/de/docs/Web/API/WebVTT_API) angegeben werden, ermöglichen es Menschen mit Hörbehinderung, den Inhalt einer Audioaufnahme bei der Wiedergabe zu verstehen, während Transkriptionen Menschen, die mehr Zeit benötigen, die Möglichkeit geben, den Inhalt in einem für sie komfortablen Tempo und Format zu überprüfen.

Wenn automatische Untertitelungsdienste verwendet werden, ist es wichtig, den generierten Inhalt zu überprüfen, um sicherzustellen, dass er genau den Quellton repräsentiert.

Das `<audio>` Element unterstützt WebVTT nicht direkt. Sie müssen eine Bibliothek oder ein Framework finden, das diese Fähigkeit bietet, oder den Code selbst schreiben, um Untertitel anzuzeigen. Eine Möglichkeit ist, Ihr Audio über ein {{HTMLElement("video")}} Element abzuspielen, das WebVTT unterstützt.

Zusätzlich zu gesprochenem Dialog sollten Untertitel und Transkriptionen auch Musik und Soundeffekte identifizieren, die wichtige Informationen kommunizieren. Dazu gehören Emotionen und Ton. Zum Beispiel, im untenstehenden WebVTT, beachten Sie die Verwendung von eckigen Klammern, um den Ton und das emotionale Verständnis des Zuschauers zu unterstützen; dies kann helfen, die Stimmung darzustellen, die normalerweise durch Musik, nonverbale Geräusche und entscheidende Soundeffekte vermittelt wird.

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

Es ist auch eine gute Praxis, etwas Inhalt (wie den direkten Download-Link) als Fallback für Zuschauer bereitzustellen, die einen Browser verwenden, in dem das `<audio>` Element nicht unterstützt wird:

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
- [WebAIM: Untertitel, Transkriptionen und Audiodiskriptionen](https://webaim.org/techniques/captions/)
- [MDN Verständnis der WCAG, Leitfaden 1.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [Verstehen des Erfolgs-Kriteriums 1.2.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Verstehen des Erfolgs-Kriteriums 1.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel zeigt die grundlegende Verwendung des `<audio>` Elements zur Wiedergabe einer OGG-Datei. Es wird aufgrund des `autoplay` Attributs automatisch abgespielt—wenn die Seite die Berechtigung dazu hat—und enthält auch Fallback-Inhalt.

```html
<!-- Basic audio playback -->
<audio src="AudioTest.ogg" autoplay>
  <a href="AudioTest.ogg" download="AudioTest.ogg">Download OGG audio</a>.
</audio>
```

Für Details, wann Autoplay funktioniert, wie man die Erlaubnis für die Nutzung von Autoplay erhält und wie und wann es angemessen ist, Autoplay zu nutzen, siehe unseren [Autoplay-Leitfaden](/de/docs/Web/Media/Guides/Autoplay).

### `<audio>` Element mit `<source>` Element

Dieses Beispiel gibt an, welcher Audiotrack mit dem `src` Attribut auf einem verschachtelten `<source>` Element und nicht direkt auf dem `<audio>` Element eingebettet werden soll. Es ist immer nützlich, den MIME-Typ der Datei innerhalb des `type` Attributs anzugeben, da der Browser sofort erkennen kann, ob er diese Datei abspielen kann, und keine Zeit damit verschwenden muss, wenn nicht.

```html
<audio controls>
  <source src="foo.wav" type="audio/wav" />
  <a href="foo.wav" download="foo.wav">Download WAV audio</a>.
</audio>
```

### `<audio>` mit mehreren `<source>` Elementen

Dieses Beispiel enthält mehrere `<source>` Elemente. Der Browser versucht, das erste Quellen-Element (Opus) zu laden, wenn er es abspielen kann; wenn nicht, fällt er auf das zweite (Vorbis) und schließlich auf MP3 zurück:

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
        Inhalt und greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Wenn das Element ein <a href="#src"><code>src</code></a>
        Attribut hat: null oder mehr {{HTMLElement("track")}} Elemente
        gefolgt von durchscheinendem Inhalt, der kein
        <code>&lt;audio&gt;</code> oder {{HTMLElement("video")}}
        Medienelemente enthält.<br />Andernfalls: null oder mehr {{HTMLElement("source")}}
        Elemente gefolgt von null oder mehr {{HTMLElement("track")}}
        Elementen gefolgt von durchscheinendem Inhalt, der kein
        <code>&lt;audio&gt;</code> oder {{HTMLElement("video")}}
        Medienelemente enthält.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
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

- [Web-Medien-Technologien](/de/docs/Web/Media)
  - [Medien-Container-Formate (Dateitypen)](/de/docs/Web/Media/Guides/Formats/Containers)
  - [Leitfaden zu Audiocodecs, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats/Audio_codecs)

- [Web-Audio-API](/de/docs/Web/API/Web_Audio_API)
- [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)
- {{htmlelement("source")}}
- {{htmlelement("video")}}
- [Lernbereich: HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Grundlagen der plattformübergreifenden Audio-Arbeit](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
