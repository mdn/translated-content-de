---
title: "`<audio>` HTML Einbetten von Audioelementen"
short-title: <audio>
slug: Web/HTML/Reference/Elements/audio
l10n:
  sourceCommit: d1aa0dbd7441564e6ce8f6706c2022a2e1912d8c
---

Das **`<audio>`** [HTML](/de/docs/Web/HTML) Element wird verwendet, um Soundinhalte in Dokumenten einzubetten. Es kann eine oder mehrere Audioquellen enthalten, die mittels des `src` Attributs oder des {{HTMLElement("source")}} Elements dargestellt werden: Der Browser wählt die geeignetste aus.
Es kann auch das Ziel für gestreamte Medien sein, indem ein [`MediaStream`](/de/docs/Web/API/MediaStream) verwendet wird.

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
Ähnlich wie beim {{htmlelement("img")}} Element fügen wir einen Pfad zu dem Medium hinzu, das wir im `src` Attribut einbetten möchten; wir können andere Attribute angeben, um Informationen wie beispielsweise das automatische Abspielen und Schleifeneffekte zu spezifizieren, ob die Standard-Audiosteuerung des Browsers angezeigt werden soll usw.

Der Inhalt innerhalb der öffnenden und schließenden `<audio></audio>` Tags wird als Rückfalllösung in Browsern angezeigt, die das Element nicht unterstützen.

## Attribute

Die Attribute dieses Elements beinhalten die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `autoplay`
  - : Ein Boolean-Attribut: Wenn angegeben, beginnt das Audio automatisch mit der Wiedergabe, sobald es möglich ist, ohne darauf zu warten, dass die gesamte Audiodatei heruntergeladen ist.

    > [!NOTE]
    > Seiten, die automatisch Audio (oder Videos mit einem Audiotrack) abspielen, können eine unangenehme Erfahrung für Benutzer darstellen und sollten nach Möglichkeit vermieden werden.
    > Wenn Sie Autoplay-Funktionen anbieten müssen, sollten Sie es opt-in machen (erfordern, dass der Benutzer es speziell aktiviert).
    > Dies kann jedoch nützlich sein, wenn Medienelemente erstellt werden, deren Quelle zu einem späteren Zeitpunkt unter Benutzerkontrolle festgelegt wird.
    > Siehe unseren [Autoplay-Leitfaden](/de/docs/Web/Media/Guides/Autoplay) für zusätzliche Informationen zur korrekten Verwendung von Autoplay.

    > [!NOTE]
    > Audio mit dem Attribut [`loading="lazy"`](#loading) beginnt erst dann mit dem Herunterladen und Abspielen, wenn die Steuerungen des Mediums in der Nähe oder innerhalb des Viewports sind. Lazy-Loaded Audios ohne das `controls` Attribut werden nicht automatisch abgespielt.

- `controls`
  - : Wenn dieses Attribut vorhanden ist, bietet der Browser Steuerelemente an, um dem Benutzer die Audiowiedergabe zu steuern, einschließlich Lautstärke, Suche und Pause/Weiter.

- `controlslist`
  - : Das [`controlslist`](https://wicg.github.io/controls-list/explainer.html) Attribut hilft, wenn angegeben, dem Browser bei der Auswahl, welche Steuerelemente für das `audio` Element gezeigt werden sollen, wann immer der Browser sein eigenes Set von Steuerelementen anzeigt (d.h. wenn das `controls` Attribut angegeben ist).

    Die erlaubten Werte sind `nodownload`, `nofullscreen` und `noremoteplayback`.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Dieses {{Glossary("Enumerated", "aufgezählte")}} Attribut gibt an, ob CORS zum Abrufen der zugehörigen Audiodatei verwendet werden soll. [CORS-aktivierte Ressourcen](/de/docs/Web/HTML/How_to/CORS_enabled_image) können im {{HTMLElement("canvas")}} Element verwendet werden, ohne _verunreinigt_ zu sein. Die erlaubten Werte sind:
    - `anonymous`
      - : Sendet eine Cross-Origin-Anfrage ohne eine Berechtigung. Mit anderen Worten, es sendet den `Origin:` HTTP-Header ohne Cookie, X.509-Zertifikat oder durchführende HTTP-Basisauthentifizierung. Wenn der Server den Ursprungsort der Site keine Berechtigungen erteilt (indem er den `Access-Control-Allow-Origin:` HTTP-Header nicht gesetzt hat), wird die Ressource _verunreinigt_ und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Sendet eine Cross-Origin-Anfrage mit Berechtigung. Mit anderen Worten, es sendet den `Origin:` HTTP-Header mit einem Cookie, einem Zertifikat oder führt eine HTTP-Basisauthentifizierung durch. Wenn der Server den Ursprungsort der Seite keine Berechtigungen erteilt (durch `Access-Control-Allow-Credentials:` HTTP-Header), wird die Ressource _verunreinigt_ und ihre Nutzung eingeschränkt.

    Wenn nicht vorhanden, wird die Ressource ohne eine CORS-Anfrage (d.h. ohne den `Origin:` HTTP-Header zu senden) abgerufen, was ihre nicht verunreinigte Verwendung in {{HTMLElement('canvas')}} Elementen verhindert. Wenn es ungültig ist, wird es behandelt, als ob das aufgezählte Schlüsselwort **anonymous** verwendet wurde. Siehe [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für zusätzliche Informationen.

- `disableremoteplayback`
  - : Ein Boolean-Attribut, das die Möglichkeit der Fernwiedergabe in Geräten deaktiviert, die mithilfe verkabelter (HDMI, DVI usw.) und drahtloser Technologien (Miracast, Chromecast, DLNA, AirPlay usw.) verbunden sind. Siehe die vorgeschlagene [Remote Playback API-Spezifikation](https://w3c.github.io/remote-playback/#the-disableremoteplayback-attribute) für mehr Informationen.

    In Safari können Sie [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) als Rückfallvariante verwenden.

- `loading` {{experimental_inline}}
  - : Gibt an, wie der Browser das Audio laden soll:
    - `eager`
      - : Lädt das Audio sofort, unabhängig davon, ob das Audio aktuell innerhalb des sichtbaren Viewports ist (dies ist der Standardwert).
    - `lazy`
      - : Verzögert das Laden des Audios, bis sich die Steuerelemente in einer berechneten Entfernung zum Viewport befinden, wie vom Browser definiert.

        > [!NOTE]
        > Damit sich Audioelemente sichtbar mit dem Viewport überschneiden, müssen sie sichtbar sein. Browser verwenden das Attribut `controls`, um Audioelemente sichtbar zu machen, daher ist es für Lazy Loading erforderlich. Lazy-Loaded Audio ohne das `controls` Attribut wird nicht geladen.

        Lazy Loading vermeidet den Netzwerk- und Speicherbandbreitenbedarf, um das Audio zu verarbeiten, bis es vernünftigerweise wahrscheinlich ist, dass es benötigt wird. Dies verbessert die Leistung in den meisten typischen Anwendungsfällen.

        Lazy-Loaded Audio, das sich innerhalb des visuellen Viewports befindet, ist möglicherweise noch nicht heruntergeladen, wenn das [`load`](/de/docs/Web/API/Window/load_event) Ereignis des Fensters ausgelöst wird. Dies liegt daran, dass das Ereignis basierend auf bereitgeladenen Audiodaten nur ausgelöst wird – lazy-geladenes Audio wird nicht berücksichtigt, auch wenn es sich bei der ersten Seitenladung innerhalb des visuellen Viewports befindet.

        Das Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Anti-Tracking-Maßnahme, weil wenn ein Benutzeragent Lazy Loading unterstützt, wenn das Scripting deaktiviert ist, wäre es immer noch möglich für eine Website, die ungefähre Scrollposition eines Benutzers während einer Sitzung zu verfolgen, indem strategisch Audio in das Markup einer Seite platziert wird, sodass ein Server nachverfolgen kann, wie viele Audioanfragen gemacht werden und wann.

        > [!NOTE]
        > Das Attribut `loading="lazy"` beeinflusst auch das `autoplay` Attribut, wie in diesem Abschnitt der Seite beschrieben.

- `loop`
  - : Ein Boolean-Attribut: Wenn angegeben, sucht der Audioplayer automatisch zurück zum Anfang, wenn das Ende der Audiodatei erreicht ist.

- `muted`
  - : Ein Boolean-Attribut, das die Standard-Audio-Stummschaltungseinstellungen der enthaltenen Audio angibt. Wenn gesetzt, wird das Audio initial stummgeschaltet. Sein Standardwert ist `false`, was bedeutet, das Audio wird hörbar sein, wenn es abgespielt wird.

    > [!NOTE]
    > Um die Stummschaltung aufzuheben, funktioniert `muted="false"` nicht; das Audio wird stumm geschaltet, wenn das Attribut überhaupt vorhanden ist. Um die Stummschaltung aufzuheben, muss das Attribut vollständig entfernt werden.

- `preload`
  - : Dieses {{Glossary("enumerated", "aufgezählte")}} Attribut ist als Hinweis für den Browser gedacht, was der Autor als beste Benutzererfahrung empfindet. Es kann einen der folgenden Werte haben:
    - `none`: Gibt an, dass das Audio nicht vorgeladen werden soll.
    - `metadata`: Gibt an, dass nur Audio-Metadaten (z.B. Länge) abgerufen werden.
    - `auto`: Gibt an, dass die gesamte Audiodatei heruntergeladen werden kann, auch wenn der Benutzer sie wahrscheinlich nicht verwenden wird.
    - _leerer String_: Ein Synonym für den `auto` Wert.

    Der Standardwert ist für jeden Browser unterschiedlich. Die Spezifikation rät dazu, es auf `metadata` zu setzen.

    > [!NOTE]
    >
    > - Audio mit dem Attribut [`loading="lazy"`](#loading) nimmt erst das `preload` Verhalten an, wenn die Audiosteuerungen in der Nähe oder innerhalb des Viewports sind.
    > - Das Attribut `autoplay` hat Vorrang vor `preload`. Wenn `autoplay` angegeben wird, müsste der Browser natürlich sofort mit dem Herunterladen des Audios zur Wiedergabe beginnen.
    > - Der Browser ist nicht durch die Spezifikation gezwungen, den Wert dieses Attributs zu befolgen; es ist nur ein Hinweis.

- `src`
  - : Die URL des einzubettenden Audios. Dies unterliegt den [HTTP-Zugriffskontrollen](/de/docs/Web/HTTP/Guides/CORS). Dies ist optional; Sie können stattdessen das {{htmlelement("source")}} Element innerhalb des Audio-Blocks verwenden, um das einzubettende Audio anzugeben.

## Ereignisse

- [`audioprocess`](/de/docs/Web/API/ScriptProcessorNode/audioprocess_event) {{Deprecated_Inline}}
  - : Der Eingabepuffer eines [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) ist bereit zur Verarbeitung.
- [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)
  - : Der Browser kann die Medien abspielen, schätzt jedoch, dass nicht genügend Daten geladen wurden, um die Medien bis zu ihrem Ende abzuspielen, ohne für weiteres Puffern anhalten zu müssen.
- [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
  - : Der Browser schätzt, dass es die Medien bis zum Ende abspielen kann, ohne für das Inhaltspuffern anhalten zu müssen.
- [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)
  - : Das Rendern eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) ist beendet.
- [`durationchange`](/de/docs/Web/API/HTMLMediaElement/durationchange_event)
  - : Das `duration` Attribut wurde aktualisiert.
- [`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)
  - : Die Medien sind leer geworden; zum Beispiel wird dieses Ereignis gesendet, wenn die Medien bereits geladen sind (oder teilweise geladen) und die [`HTMLMediaElement.load`](/de/docs/Web/API/HTMLMediaElement/load) Methode aufgerufen wird, um sie neu zu laden.
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
  - : Die Wiedergabe ist bereit zu starten, nachdem sie pausiert wurde oder aus Mangel an Daten verzögert war.
- [`ratechange`](/de/docs/Web/API/HTMLMediaElement/ratechange_event)
  - : Die Wiedergabegeschwindigkeit wurde geändert.
- [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event)
  - : Eine _suchen_ Operation wurde abgeschlossen.
- [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
  - : Eine _suchen_ Operation hat begonnen.
- [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
  - : Der Benutzeragent versucht, Mediendaten abzurufen, aber die Daten kommen unerwartet nicht.
- [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event)
  - : Das Laden von Mediendaten wurde ausgesetzt.
- [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)
  - : Die durch das `currentTime` Attribut angezeigte Zeit wurde aktualisiert.
- [`volumechange`](/de/docs/Web/API/HTMLMediaElement/volumechange_event)
  - : Die Lautstärke hat sich geändert.
- [`waiting`](/de/docs/Web/API/HTMLMediaElement/waiting_event)
  - : Die Wiedergabe wurde gestoppt wegen eines temporären Mangels an Daten.

## Nutzungshinweise

Browser unterstützen nicht alle die gleichen [Dateitypen](/de/docs/Web/Media/Guides/Formats/Containers) und [Audio-Codecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs); Sie können mehrere Quellen innerhalb verschachtelter {{htmlelement("source")}} Elemente angeben, und der Browser verwendet dann die erste, die er versteht:

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

Die Audioquelle kann auf jede gültige [URL](/de/docs/Web/URI) gesetzt werden, einschließlich HTTP(S)-URLs und [Data-URLs](/de/docs/Web/URI/Reference/Schemes/data). Wenn HTTP(S)-URLs verwendet werden, beachten Sie bitte, dass das Caching-Verhalten des Browsers beeinflussen wird, wie oft die Datei vom Server angefordert wird. Data-URLs betten die Audiodaten direkt im HTML ein, was für kleine Audiodateien nützlich sein kann, aber für größere Dateien nicht empfohlen wird, da es die Größe der HTML-Datei erhöht.

Wenn {{htmlelement("source")}} Elemente verwendet werden, versucht der Browser, jede Quelle nacheinander zu laden. Wenn eine Quelle fehlschlägt (z.B. aufgrund einer ungültigen URL oder eines nicht unterstützten Formats), wird die nächste Quelle versucht, und so weiter. Ein `error` Ereignis wird auf dem `<audio>` Element ausgelöst, nachdem alle Quellen fehlgeschlagen sind; `error` Ereignisse werden nicht auf jedem einzelnen `<source>` Element ausgelöst.

Sie können auch die [Web Audio API](/de/docs/Web/API/Web_Audio_API) verwenden, um direkt Audio-Streams zu erzeugen und zu manipulieren, anstelle von bereits bestehenden Audiodateien zu streamen. Sie können das [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) in JavaScript auf ein [`MediaStream`](/de/docs/Web/API/MediaStream) Objekt setzen. Dies wird oft für Live-Audio-Streams oder Echtzeit-Audiobearbeitung verwendet.

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

Beachten Sie, dass `MediaStream` Quellen Einschränkungen haben: Sie sind nicht suchbar und unterstützen nur eine begrenzte Anzahl von Codecs.

Wir bieten einen substanziellen und umfassenden [Leitfaden zu Mediendateitypen](/de/docs/Web/Media/Guides/Formats) und den [Audio-Codecs, die darin verwendet werden können](/de/docs/Web/Media/Guides/Formats/Audio_codecs). Ebenfalls verfügbar ist [ein Leitfaden zu den für Video unterstützten Codecs](/de/docs/Web/Media/Guides/Formats/Video_codecs).

Weitere Nutzungshinweise:

- Wenn Sie das `controls` Attribut nicht angeben, enthält der Audioplayer nicht die Standardsteuerungen des Browsers. Sie können jedoch Ihre eigenen benutzerdefinierten Steuerelemente mithilfe von JavaScript und der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API erstellen.
- Um präzise Kontrolle über Ihre Audioinhalte zu ermöglichen, lösen `HTMLMediaElement`s viele verschiedene [Ereignisse](/de/docs/Web/API/HTMLMediaElement#events) aus. Dies bietet auch eine Möglichkeit, den Löschvorgang des Audios zu überwachen, sodass Sie Fehler überwachen oder erkennen können, wann genügend verfügbar ist, um es abzuspielen oder zu manipulieren.
- `<audio>` Elemente können keine Untertitel oder Bildunterschriften auf die gleiche Weise haben, wie dies bei `<video>` Elementen möglich ist. Siehe [WebVTT und Audio](https://www.iandevlin.com/blog/2015/12/html5/webvtt-and-audio/) von Ian Devlin für einige nützliche Informationen und Alternativen.
- Um den Fallback-Inhalt in Browsern zu testen, die das Element unterstützen, können Sie `<audio>` durch ein nicht existentes Element wie `<notanaudio>` ersetzen.

Eine gute allgemeine Quelle für Informationen zur Verwendung von HTML `<audio>` ist das [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) Anfänger-Tutorial.

### Styling mit CSS

Das `<audio>` Element hat keine eigene visuelle Ausgabe, es sei denn, das `controls` Attribut ist angegeben, woraufhin die Standardsteuerungen des Browsers angezeigt werden.

Die Standardsteuerungen haben einen {{cssxref("display")}} Wert von `inline` als Standardwert, und es ist oft eine gute Idee, den Wert auf `block` zu setzen, um die Kontrolle über die Positionierung und das Layout zu verbessern, es sei denn, Sie möchten es in einem Textblock oder ähnlichem platzieren.

Sie können die Standardsteuerungen mit Eigenschaften stylen, die den Block als eine Einheit betreffen, sodass Sie beispielsweise einen {{cssxref("border")}} und {{cssxref("border-radius")}}, {{cssxref("padding")}}, {{cssxref("margin")}} hinzufügen können. Sie können jedoch nicht die einzelnen Komponenten im Audioplayer (z.B. Schaltflächengröße oder -symbole ändern, die Schriftart ändern usw.) stylen, und die Steuerungen sind in den verschiedenen Browsern unterschiedlich.

Um in allen Browsern ein konsistentes Erscheinungsbild zu erzielen, müssen Sie eigene benutzerdefinierte Steuerungen erstellen; diese können in beliebiger Weise markiert und gestylt werden, und dann kann JavaScript zusammen mit der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API verwendet werden, um deren Funktionalität zu verbinden.

[Video-Player-Styling-Grundlagen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics) bietet einige nützliche Styling-Techniken - es ist im Kontext von `<video>` geschrieben, aber vieles davon ist gleichermaßen auf `<audio>` anwendbar.

### Hinzufügen und Entfernen von Tracks erkennen

Sie können erkennen, wann Tracks zu einem `<audio>` Element hinzugefügt und daraus entfernt werden, indem Sie die [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event) Ereignisse verwenden. Diese Ereignisse werden jedoch nicht direkt an das `<audio>` Element selbst gesendet. Stattdessen werden sie an das Track-Listenobjekt innerhalb des `<audio>` Elements gesendet, das dem Typ des hinzugefügten Tracks entspricht:

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die alle Audiospuren des Medienelements enthält. Sie können einen `addtrack` Listener zu diesem Objekt hinzufügen, um benachrichtigt zu werden, wenn neue Audiospuren zum Element hinzugefügt werden.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)
  - : Fügen Sie diesem [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) Objekt einen `addtrack` Listener hinzu, um informiert zu werden, wenn Video-Tracks zum Element hinzugefügt werden.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
  - : Fügen Sie diesem [`TextTrackList`](/de/docs/Web/API/TextTrackList) einen `addtrack` Event-Listener hinzu, um benachrichtigt zu werden, wenn neue Text-Tracks zum Element hinzugefügt werden.

> [!NOTE]
> Auch wenn es sich um ein `<audio>` Element handelt, hat es trotzdem Video- und Text-Track-Listen und kann tatsächlich verwendet werden, um Video anzuzeigen, obwohl die Benutzeroberflächenimplikationen seltsam sein können.

Um beispielsweise zu erkennen, wann Audiospuren zu einem `<audio>` Element hinzugefügt oder daraus entfernt werden, können Sie Code wie diesen verwenden:

```js
const elem = document.querySelector("audio");

elem.audioTrackList.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTrackList.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Dieser Code überwacht, wann Audiospuren zum Element hinzugefügt oder daraus entfernt werden und ruft eine hypothetische Funktion auf einem Track-Editor auf, um den Track in der Liste der verfügbaren Tracks des Editors zu registrieren und zu entfernen.

Sie können auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um auf die [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event) Ereignisse zu hören.

## Barrierefreiheit

Audio mit gesprochendem Dialog sollte sowohl Untertitel als auch Transkripte enthalten, die den Inhalt genau beschreiben. Untertitel, die mit [WebVTT](/de/docs/Web/API/WebVTT_API) spezifiziert werden, ermöglichen es hörgeschädigten Menschen, den Inhalt einer Audioaufnahme zu verstehen, während die Aufnahme abgespielt wird, während Transkripte Personen, die zusätzliche Zeit benötigen, ermöglichen, den Inhalt der Aufnahme in einem für sie bequemen Tempo und Format zu überprüfen.

Wenn automatische Untertitelungsdienste verwendet werden, ist es wichtig, den generierten Inhalt zu überprüfen, um sicherzustellen, dass er die Quell-Audioinhalte genau wiedergibt.

Das `<audio>` Element unterstützt WebVTT nicht direkt. Sie müssen eine Bibliothek oder ein Framework finden, das diese Möglichkeit bietet, oder den Code selbst schreiben, um Untertitel anzuzeigen. Eine Option ist die Nutzung eines {{HTMLElement("video")}} Elements, das die Wiedergabe von Untertiteln unterstützt, für Ihre Audios.

Zusätzlich zu gesprochenem Dialog sollten Untertitel und Transkripte auch Musik und Soundeffekte identifizieren, die wichtige Informationen übermitteln. Dazu gehören Emotionen und Ton. Zum Beispiel verwenden die WebVTT-Beispiele im Folgenden eckige Klammern, um dem Betrachter Ton und Emotionen zu vermitteln; dies kann dazu beitragen, die Stimmung zu etablieren, die ansonsten durch Musik, nonverbale Geräusche und wichtige Soundeffekte bereitgestellt wird und so weiter.

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

Es ist auch eine gute Praxis, etwas Inhalt (wie den direkten Downloadlink) als Fallback anzubieten für Betrachter, die einen Browser verwenden, in dem das `<audio>` Element nicht unterstützt wird:

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
- [MDN Verständnis WCAG, Richtlinie 1.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [Understanding Success Criterion 1.2.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Understanding Success Criterion 1.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Beispiele

### Grundlegende Nutzung

Das folgende Beispiel zeigt eine grundlegende Verwendung des `<audio>` Elements zur Wiedergabe einer OGG-Datei. Es wird aufgrund des `autoplay` Attributs automatisch abgespielt - wenn die Seite die Erlaubnis hat, dies zu tun - und enthält auch einen Fallback-Inhalt.

```html
<!-- Basic audio playback -->
<audio src="AudioTest.ogg" autoplay>
  <a href="AudioTest.ogg" download="AudioTest.ogg">Download OGG audio</a>.
</audio>
```

Für Details, wann Autoplay funktioniert, wie Sie die Erlaubnis zur Nutzung des Autoplays erhalten und wie und wann es angemessen ist, Autoplay zu verwenden, sehen Sie sich unseren [Autoplay-Leitfaden](/de/docs/Web/Media/Guides/Autoplay) an.

### \<audio> Element mit \<source> Element

Dieses Beispiel gibt die einzubettende Audio-Spur mit dem `src` Attribut auf einem verschachtelten `<source>` Element an, anstatt es direkt auf dem `<audio>` Element zu platzieren. Es ist immer nützlich, den MIME-Typ der Datei im `type` Attribut anzugeben, da der Browser sofort feststellen kann, ob er diese Datei abspielen kann und keine Zeit darauf verschwendet, wenn nicht.

```html
<audio controls>
  <source src="foo.wav" type="audio/wav" />
  <a href="foo.wav" download="foo.wav">Download WAV audio</a>.
</audio>
```

### \<audio> mit mehreren \<source> Elementen

Dieses Beispiel enthält mehrere `<source>` Elemente. Der Browser versucht, das erste Quellenelement (Opus) zu laden, wenn er es abspielen kann; falls nicht, fällt er auf das zweite (Vorbis) und schließlich auf MP3 zurück:

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
          >Flow-Inhalt</a
        >, Phrasierungsinhalt, eingebetteter Inhalt. Wenn es ein
        <a href="#controls"><code>controls</code></a> Attribut hat: interaktiver
        Inhalt und greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Wenn das Element ein <a href="#src"><code>src</code></a>
        Attribut hat: null oder mehr {{HTMLElement("track")}} Elemente
        gefolgt von transparentem Inhalt, der keine
        <code>&lt;audio&gt;</code> oder {{HTMLElement("video")}}
        Medienelemente enthält.<br />Sonst: null oder mehr {{HTMLElement("source")}}
        Elemente gefolgt von null oder mehr {{HTMLElement("track")}}
        Elemente gefolgt von transparentem Inhalt, der keine
        <code>&lt;audio&gt;</code> oder {{HTMLElement("video")}}
        Medienelemente enthält.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag Auslassung</th>
      <td>Keine, sowohl die öffnende als auch die schließende Tag sind verpflichtend.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, welches eingebetteten Inhalt akzeptiert.</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA Rollen</th>
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

- [Webmediotechnologien](/de/docs/Web/Media)
  - [Mediencontainerformate (Dateitypen)](/de/docs/Web/Media/Guides/Formats/Containers)
  - [Leitfaden zu auf dem Web verwendeten Audiocodecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs)

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)
- {{htmlelement("source")}}
- {{htmlelement("video")}}
- [Lernbereich: HTML Videos und Audios](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Grundlagen des plattformübergreifenden Audios](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
