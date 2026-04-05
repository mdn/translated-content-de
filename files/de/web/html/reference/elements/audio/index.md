---
title: "<audio>: Das Einbettungs-Audioelement"
slug: Web/HTML/Reference/Elements/audio
l10n:
  sourceCommit: 743ba8b257cd06449b192818df120e609f6e16d2
---

Das **`<audio>`** [HTML](/de/docs/Web/HTML) Element wird verwendet, um Klanginhalte in Dokumente einzubetten. Es kann eine oder mehrere Audioquellen enthalten, die mithilfe des `src` Attributs oder des {{HTMLElement("source")}} Elements angegeben werden: Der Browser wählt die geeignetste aus. Es kann auch das Ziel für gestreamte Medien sein, indem ein [`MediaStream`](/de/docs/Web/API/MediaStream) verwendet wird.

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

Das obige Beispiel zeigt die grundlegende Verwendung des `<audio>` Elements. Ähnlich wie beim {{htmlelement("img")}} Element geben wir einen Pfad zu den Medien an, die wir im `src` Attribut einbetten möchten; wir können weitere Attribute hinzufügen, um Informationen wie Autoplay und Schleifenwiedergabe anzugeben oder ob wir die Standard-Audiosteuerung des Browsers anzeigen möchten, usw.

Der Inhalt zwischen den öffnenden und schließenden `<audio></audio>` Tags wird als Fallback in Browsern angezeigt, die das Element nicht unterstützen.

## Attribute

Die Attribute dieses Elements schließen die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes) ein.

- `autoplay`
  - : Ein boolesches Attribut: Wenn angegeben, beginnt die Audiowiedergabe automatisch, sobald dies möglich ist, ohne darauf zu warten, dass die gesamte Audiodatei heruntergeladen wurde.

    > [!NOTE]
    > Websites, die Audio (oder Videos mit einer Tonspur) automatisch abspielen, können für Benutzer eine unangenehme Erfahrung sein und sollten nach Möglichkeit vermieden werden.
    > Falls Sie Autoplay-Funktionalität anbieten müssen, sollten Sie es als Opt-in gestalten (der Benutzer muss es speziell aktivieren).
    > Dies kann jedoch nützlich sein, wenn Medienobjekte erstellt werden, deren Quelle später durch Benutzersteuerung festgelegt wird.
    > Weitere Informationen zur richtigen Verwendung von Autoplay finden Sie in unserem [Autoplay-Leitfaden](/de/docs/Web/Media/Guides/Autoplay).

    > [!NOTE]
    > Audio mit dem Attribut [`loading="lazy"`](#loading) beginnt erst dann herunterzuladen und automatisch abzuspielen, wenn sich die Steuerungen für die Medien in der Nähe oder innerhalb des Ansichtsfensters befinden. Lazy-loaded Audio ohne das `controls` Attribut wird nicht automatisch abgespielt.

- `controls`
  - : Wenn dieses Attribut vorhanden ist, bietet der Browser Steuerungen an, die es dem Benutzer ermöglichen, die Audiowiedergabe zu steuern, einschließlich Lautstärke, Suche und Wiedergabe/Pause.

- `controlslist`
  - : Das [`controlslist`](https://wicg.github.io/controls-list/explainer.html) Attribut, wenn angegeben, hilft dem Browser dabei, auszuwählen, welche Steuerungen für das `audio` Element angezeigt werden sollen, wann immer der Browser seine eigenen Steuerungen anzeigt (d.h. wenn das `controls` Attribut angegeben ist).

    Die erlaubten Werte sind `nodownload`, `nofullscreen` und `noremoteplayback`.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Dieses {{Glossary("Enumerated", "aufzählbare")}} Attribut zeigt an, ob CORS verwendet wird, um die zugehörige Audiodatei abzurufen. [CORS-fähige Ressourcen](/de/docs/Web/HTML/How_to/CORS_enabled_image) können im {{HTMLElement("canvas")}} Element wiederverwendet werden, ohne _verunreinigt_ zu sein. Die erlaubten Werte sind:
    - `anonymous`
      - : Sendet eine Cross-Origin-Anfrage ohne Berechtigungsnachweis. Das bedeutet, es sendet den `Origin:` HTTP-Header ohne Cookie, X.509-Zertifikat oder HTTP-Basisauthentifizierung. Wenn der Server keine Berechtigungen für die Ursprungsseite bereitstellt (indem er den `Access-Control-Allow-Origin:` HTTP-Header nicht setzt), wird die Ressource _verunreinigt_ und ihre Verwendung eingeschränkt.
    - `use-credentials`
      - : Sendet eine Cross-Origin-Anfrage mit Berechtigungsnachweis. Das bedeutet, es sendet den `Origin:` HTTP-Header mit Cookie, Zertifikat oder führt HTTP-Basisauthentifizierung durch. Wenn der Server keine Berechtigungen für die Ursprungsseite bereitstellt (mittels `Access-Control-Allow-Credentials:` HTTP-Header), wird die Ressource _verunreinigt_ und ihre Verwendung eingeschränkt.

    Wenn nicht vorhanden, wird die Ressource ohne eine CORS-Anfrage abgerufen (d.h. ohne den `Origin:` HTTP-Header zu senden), wodurch ihre unverunreinigte Verwendung in {{HTMLElement('canvas')}} Elementen verhindert wird. Wenn ungültig, wird es so behandelt, als ob das aufgezählte Schlüsselwort **anonymous** verwendet wurde. Weitere Informationen finden Sie bei den [CORS-Einstellungsattributen](/de/docs/Web/HTML/Reference/Attributes/crossorigin).

- `disableremoteplayback`
  - : Ein boolesches Attribut, das die Fähigkeit zur Fernwiedergabe auf Geräten deaktiviert, die über kabelgebundene (HDMI, DVI, etc.) und drahtlose Technologien (Miracast, Chromecast, DLNA, AirPlay, etc.) verbunden sind. Die vorgeschlagene [Remote Playback API Spezifikation](https://w3c.github.io/remote-playback/#the-disableremoteplayback-attribute) bietet weitere Informationen.

    In Safari können Sie [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) als Fallback verwenden.

- `loading` {{experimental_inline}}
  - : Gibt an, wie der Browser das Audio laden soll:
    - `eager`
      - : Lädt das Audio sofort, unabhängig davon, ob sich das Audio derzeit innerhalb des sichtbaren Ansichtsfensters befindet (dies ist der Standardwert).
    - `lazy`
      - : Verschiebt das Laden des Audios, bis die Steuerungen einen berechneten Abstand vom Ansichtsfenster erreichen, wie vom Browser definiert.

        > [!NOTE]
        > Damit Audioelemente sichtbar mit dem Ansichtsfenster überschneiden können, müssen sie sichtbar sein. Browser verwenden das `controls` Attribut, um Audioelemente sichtbar zu machen, daher ist es für Lazy Loading erforderlich. Lazy-loaded Audio ohne das `controls` Attribut lädt nicht.

        Lazy Loading vermeidet das Netzwerk- und Speicherbandbreite erforderliche, um das Audio zu handhaben, bis es wahrscheinlich benötigt wird. Dies verbessert die Leistung in den meisten typischen Anwendungsfällen.

        Lazy-loaded Audio, das sich im visuellen Ansichtsfenster befindet, wird möglicherweise noch nicht heruntergeladen, wenn das Window [`load`](/de/docs/Web/API/Window/load_event) Ereignis ausgelöst wird. Dies liegt daran, dass das Ereignis basierend auf eager-geladenem Audio ausgelöst wird — Lazy-loaded Audio wird nicht berücksichtigt, selbst wenn es sich beim ersten Laden der Seite innerhalb des visuellen Ansichtsfensters befindet.

        Das Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Anti-Tracking-Maßnahme, denn wenn ein Benutzeragent Lazy Loading unterstützen würde, wenn das Skripten deaktiviert ist, wäre es dennoch möglich, dass eine Seite die ungefähre Scrollposition eines Benutzers während einer Sitzung verfolgt, indem Audio strategisch im Markup einer Seite platziert wird, sodass ein Server verfolgen kann, wie viele Audi-Anfragen gestellt werden und wann.

        > [!NOTE]
        > Das `loading="lazy"` Attribut wirkt sich auch auf das [`autoplay`](#autoplay) Attribut aus, wie in diesem Abschnitt dieser Seite beschrieben.

- `loop`
  - : Ein boolesches Attribut: Wenn angegeben, wird der Audio-Player automatisch zum Anfang zurückspringen, sobald das Ende des Audios erreicht ist.
- `muted`
  - : Ein boolesches Attribut, das anzeigt, ob das Audio zunächst stummgeschaltet sein wird. Der Standardwert ist `false`.
- `preload`
  - : Dieses {{Glossary("enumerated", "aufzählbare")}} Attribut soll dem Browser einen Hinweis darauf geben, was der Autor für die beste Benutzererfahrung hält. Es kann einen der folgenden Werte haben:
    - `none`: Gibt an, dass das Audio nicht vorab geladen werden soll.
    - `metadata`: Gibt an, dass nur die Metadaten des Audios (z.B. Länge) abgerufen werden.
    - `auto`: Gibt an, dass die ganze Audiodatei heruntergeladen werden kann, selbst wenn der Benutzer nicht erwartet wird, sie zu verwenden.
    - _leerer String_: ein Synonym für den `auto` Wert.

    Der Standardwert ist bei jedem Browser unterschiedlich. Die Spezifikation empfiehlt, ihn auf `metadata` zu setzen.

    > [!NOTE]
    >
    > - Audio mit dem Attribut [`loading="lazy"`](#loading) wendet das `preload` Verhalten nur an, wenn sich die Audiosteuerungen in der Nähe oder innerhalb des Ansichtsfensters befinden.
    > - Das `autoplay` Attribut hat Vorrang vor `preload`. Wenn `autoplay` angegeben ist, müsste der Browser offensichtlich anfangen, das Audio für die Wiedergabe herunterzuladen.
    > - Der Browser ist durch die Spezifikation nicht verpflichtet, dem Wert dieses Attributs zu folgen; es ist ein bloßer Hinweis.

- `src`
  - : Die URL des einzubettenden Audios. Dies unterliegt den [HTTP-Zugriffskontrollen](/de/docs/Web/HTTP/Guides/CORS). Dieses ist optional; stattdessen können Sie das {{htmlelement("source")}} Element innerhalb des Audioblocks verwenden, um das einzubettende Audio anzugeben.

## Ereignisse

- [`audioprocess`](/de/docs/Web/API/ScriptProcessorNode/audioprocess_event) {{Deprecated_Inline}}
  - : Der Eingabepuffer eines [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) ist bereit, verarbeitet zu werden.
- [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)
  - : Der Browser kann das Medium abspielen, schätzt jedoch, dass nicht genügend Daten geladen wurden, um das Medium bis zum Ende ohne weiteres Puffern von Inhalten abspielen zu können.
- [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
  - : Der Browser schätzt, dass es das Medium bis zum Ende ohne Unterbrechung für das Puffern von Inhalten abspielen kann.
- [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)
  - : Die Verarbeitung eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) ist beendet.
- [`durationchange`](/de/docs/Web/API/HTMLMediaElement/durationchange_event)
  - : Das `duration` Attribut wurde aktualisiert.
- [`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)
  - : Das Medium ist leer geworden; zum Beispiel wird dieses Ereignis ausgelöst, wenn das Medium bereits geladen (oder teilweise geladen) wurde und die [`HTMLMediaElement.load`](/de/docs/Web/API/HTMLMediaElement/load) Methode aufgerufen wird, um es erneut zu laden.
- [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)
  - : Die Wiedergabe wurde gestoppt, weil das Ende des Mediums erreicht wurde.
- [`loadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event)
  - : Der erste Frame des Mediums wurde fertig geladen.
- [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
  - : Die Metadaten wurden geladen.
- [`loadstart`](/de/docs/Web/API/HTMLMediaElement/loadstart_event)
  - : Wird ausgelöst, wenn der Browser beginnt, die Ressource zu laden.
- [`pause`](/de/docs/Web/API/HTMLMediaElement/pause_event)
  - : Die Wiedergabe wurde pausiert.
- [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)
  - : Die Wiedergabe hat begonnen.
- [`playing`](/de/docs/Web/API/HTMLMediaElement/playing_event)
  - : Die Wiedergabe ist bereit, nachdem sie pausiert oder aufgrund mangelnder Daten verzögert wurde.
- [`ratechange`](/de/docs/Web/API/HTMLMediaElement/ratechange_event)
  - : Die Wiedergabegeschwindigkeit wurde geändert.
- [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event)
  - : Eine _Such_-Operation wurde abgeschlossen.
- [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
  - : Eine _Such_-Operation hat begonnen.
- [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
  - : Der Benutzeragent versucht, Mediendaten abzurufen, aber Daten kommen unerwartet nicht.
- [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event)
  - : Das Laden von Mediendaten wurde ausgesetzt.
- [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)
  - : Die durch das `currentTime` Attribut angezeigte Zeit wurde aktualisiert.
- [`volumechange`](/de/docs/Web/API/HTMLMediaElement/volumechange_event)
  - : Die Lautstärke wurde geändert.
- [`waiting`](/de/docs/Web/API/HTMLMediaElement/waiting_event)
  - : Die Wiedergabe wurde aufgrund eines vorübergehenden Mangels an Daten gestoppt.

## Nutzungshinweise

Browser unterstützen nicht alle die gleichen [Dateiformate](/de/docs/Web/Media/Guides/Formats/Containers) und [Audio-Codecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs); Sie können mehrere Quellen innerhalb verschachtelter {{htmlelement("source")}} Elemente angeben, und der Browser wird dann die erste verwenden, die er versteht:

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

Die Audioquelle kann auf jede gültige [URL](/de/docs/Web/URI) gesetzt werden, einschließlich HTTP(S)-URLs und [Data URLs](/de/docs/Web/URI/Reference/Schemes/data). Beachten Sie bei der Verwendung von HTTP(S)-URLs, dass das Caching-Verhalten des Browsers sich darauf auswirkt, wie oft die Datei vom Server angefordert wird. Data-URLs betten die Audiodaten direkt im HTML ein, was für kleine Audiodateien nützlich sein kann, aber nicht für größere Dateien empfohlen wird, da es die HTML-Dateigröße erhöht.

Bei Verwendung von {{htmlelement("source")}} Elementen versucht der Browser, jede Quelle nacheinander zu laden. Wenn eine Quelle fehlschlägt (z.B. aufgrund einer ungültigen URL oder eines nicht unterstützten Formats), wird die nächste Quelle versucht und so weiter. Ein `error` Event wird auf dem `<audio>` Element ausgelöst, nachdem alle Quellen fehlgeschlagen sind; `error` Events werden nicht für jedes einzelne `<source>` Element ausgelöst.

Sie können auch die [Web Audio API](/de/docs/Web/API/Web_Audio_API) verwenden, um Audiosignale direkt aus JavaScript zu generieren und zu bearbeiten, anstatt bestehende Audiodateien zu streamen. Sie können das [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) per JavaScript auf ein [`MediaStream`](/de/docs/Web/API/MediaStream) Objekt setzen. Dies wird häufig für Live-Audiostreams oder Echtzeit-Audiobearbeitung verwendet.

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

Wir bieten einen umfangreichen und umfassenden [Leitfaden zu Mediendateitypen](/de/docs/Web/Media/Guides/Formats) und den [Audio-Codecs, die darin verwendet werden können](/de/docs/Web/Media/Guides/Formats/Audio_codecs). Auch verfügbar ist [ein Leitfaden zu den Codecs, die für Video unterstützt werden](/de/docs/Web/Media/Guides/Formats/Video_codecs).

Andere Nutzungshinweise:

- Wenn Sie das `controls` Attribut nicht angeben, enthält der Audioplayer nicht die Standardsteuerungen des Browsers. Sie können jedoch Ihre eigenen benutzerdefinierten Steuerungen mit JavaScript und der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API erstellen.
- Um präzise Kontrolle über Ihre Audi-Inhalte zu ermöglichen, lösen `HTMLMediaElement`s viele verschiedene [Ereignisse](/de/docs/Web/API/HTMLMediaElement#events) aus. Dies bietet auch eine Möglichkeit, den Abrufprozess des Audios zu überwachen, damit Sie Fehler beobachten oder erkennen können, wann genug verfügbar ist, um mit der Wiedergabe zu beginnen oder es zu manipulieren.
- `<audio>` Elemente können keine Untertitel oder Bildunterschriften zugeordnet bekommen, wie es `<video>` Elemente können. Siehe [WebVTT und Audio](https://www.iandevlin.com/blog/2015/12/html5/webvtt-and-audio/) von Ian Devlin für einige nützliche Informationen und Lösungsansätze.
- Um den Fallback-Inhalt in Browsern zu testen, die das Element unterstützen, können Sie `<audio>` durch ein nicht vorhandenes Element wie `<notanaudio>` ersetzen.

Eine gute allgemeine Quelle für Informationen zur Verwendung von HTML `<audio>` ist das [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) Einsteigertutorial.

### Styling mit CSS

Das `<audio>` Element hat keine eigene visuelle Ausgabe, es sei denn, das `controls` Attribut ist angegeben, in diesem Fall werden die Standardsteuerungen des Browsers angezeigt.

Die Standardsteuerungen haben einen {{cssxref("display")}} Wert von `inline` standardmäßig, und es ist oft eine gute Idee, den Wert zu `block` zu setzen, um die Kontrolle über die Positionierung und das Layout zu verbessern, es sei denn, Sie möchten es in einem Textblock oder Ähnlichem platzieren.

Sie können die Standardsteuerungen mit Eigenschaften stylen, die den Block als eine Einheit betreffen, so können Sie ihm zum Beispiel einen {{cssxref("border")}} und {{cssxref("border-radius")}}, {{cssxref("padding")}}, {{cssxref("margin")}}, etc. geben. Sie können jedoch nicht die einzelnen Komponenten innerhalb des Audioplayers stylen (z.B. die Knopfgröße oder Icons ändern, die Schriftart ändern, etc.), und die Steuerungen sind in den verschiedenen Browsern unterschiedlich.

Um ein konsistentes Erscheinungsbild über verschiedene Browser hinweg zu erzielen, müssen Sie benutzerdefinierte Steuerungen erstellen; diese können Sie in beliebiger Weise markieren und stylen und dann JavaScript verwenden, zusammen mit der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API um deren Funktionalität zu verbinden.

[Video Player Styling Grundlagen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics) bietet einige nützliche Stiltechniken — es wird in Bezug auf `<video>` geschrieben, aber vieles davon ist ebenso auf `<audio>` anwendbar.

### Erkennen von Hinzufügen und Entfernen von Spuren

Sie können erkennen, wann Spuren einem `<audio>` Element hinzugefügt oder davon entfernt werden, indem Sie die [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event) Ereignisse verwenden. Diese Ereignisse werden jedoch nicht direkt an das `<audio>` Element selbst gesendet. Stattdessen werden sie an das Spurlistenobjekt innerhalb des `<audio>` Elements [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) gesendet, das dem Typ der Spur entspricht, die dem Element hinzugefügt wurde:

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList) die alle Audiotracks des Medienelements enthält. Sie können einen Listener für `addtrack` zu diesem Objekt hinzufügen, um benachrichtigt zu werden, wenn neue Audiotracks zum Element hinzugefügt werden.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)
  - : Stellen Sie einen `addtrack` Listener zu diesem [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) Objekt, um informiert zu werden, wenn Videotracks zum Element hinzugefügt werden.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
  - : Fügen Sie einen `addtrack` Event Listener zu dieser [`TextTrackList`](/de/docs/Web/API/TextTrackList) hinzu, um benachrichtigt zu werden, wenn neue Texttracks zum Element hinzugefügt werden.

> [!NOTE]
> Obwohl es ein `<audio>` Element ist, hat es dennoch Video- und Texttracklisten und kann tatsächlich zur Darstellung von Video verwendet werden, obwohl die Benutzeroberflächenimplikationen seltsam sein können.

Zum Beispiel, um zu erkennen, wann Audiotracks hinzugefügt oder entfernt werden bei einem `<audio>` Element, können Sie einen Code wie diesen verwenden:

```js
const elem = document.querySelector("audio");

elem.audioTrackList.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTrackList.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Dieser Code überwacht, wann Audiotracks zum Element hinzugefügt oder davon entfernt werden und ruft eine hypothetische Funktion in einem Track-Editor auf, um den Track in die Liste der verfügbaren Tracks des Editors zu registrieren und zu entfernen.

Sie können auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um den [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event) Ereignissen zu lauschen.

## Barrierefreiheit

Audio mit gesprochenem Dialog sollte sowohl mit Untertiteln als auch mit Transkriptionen versehen sein, die den Inhalt genau beschreiben. Untertitel, die mithilfe von [WebVTT](/de/docs/Web/API/WebVTT_API) angegeben werden, ermöglichen es hörgeschädigten Personen, den Inhalt einer Audiowiedergabe zu verstehen, während sie abgespielt wird, während Transkriptionen es Personen ermöglichen, die zusätzliche Zeit benötigen, den Inhalt der Aufnahme in einem ihnen angenehmen Tempo und Format zu überprüfen.

Wenn automatische Untertiteldienste verwendet werden, ist es wichtig, den generierten Inhalt zu überprüfen, um sicherzustellen, dass er die Quelldaten korrekt wiedergibt.

Das `<audio>` Element unterstützt WebVTT nicht direkt. Sie müssen eine Bibliothek oder ein Framework finden, das Ihnen diese Fähigkeit bietet, oder den Code selbst schreiben, um Untertitel darzustellen. Eine Option besteht darin, Ihr Audio mit einem {{HTMLElement("video")}} Element abzuspielen, das WebVTT unterstützt.

Neben gesprochenem Dialog sollten Untertitel und Transkripte auch Musik und Soundeffekte identifizieren, die wichtige Informationen vermitteln. Dazu gehören Gefühle und Tonalität. Zum Beispiel, im unten stehenden WebVTT, beachten Sie die Verwendung von eckigen Klammern, um dem Betrachter Tonlage und Gefühlsausdrücke zu vermitteln; dies kann helfen, die Stimmung zu transportieren, die sonst durch Musik, nonverbale Geräusche und wichtige Soundeffekte bereitgestellt wird, usw.

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

Es ist auch eine gute Praxis, für diejenigen, die einen Browser verwenden, der das `<audio>` Element nicht unterstützt, einige Inhalte bereitzustellen (wie den direkten Download-Link) als Fallback:

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
- [WebAIM: Untertitel, Transkriptionen und Audio-Beschreibungen](https://webaim.org/techniques/captions/)
- [MDN WCAG verstehen, Leitfaden zu 1.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [Verständnis von Erfolgskriterium 1.2.1 | WCAG-W3C verstehen 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Verständnis von Erfolgskriterium 1.2.2 | WCAG-W3C verstehen 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel zeigt den grundlegenden Einsatz des `<audio>` Elements, um eine OGG-Datei abzuspielen. Sie wird automatisch aufgrund des `autoplay` Attributs abgespielt, wenn die Seite die Erlaubnis dazu hat, und enthält auch Fallback-Inhalte.

```html
<!-- Basic audio playback -->
<audio src="AudioTest.ogg" autoplay>
  <a href="AudioTest.ogg" download="AudioTest.ogg">Download OGG audio</a>.
</audio>
```

Für Details wann Autoplay funktioniert, wie man Erlaubnis für Autoplay erhält und wie und wann es angebracht ist, Autoplay zu verwenden, siehe unseren [Autoplay-Leitfaden](/de/docs/Web/Media/Guides/Autoplay).

### `<audio>` Element mit \<source> Element

Dieses Beispiel gibt an, welcher Audiotrack eingebettet werden soll, indem das `src` Attribut auf einem geschachtelten `<source>` Element anstelle des `<audio>` Elements direkt verwendet wird. Es ist immer nützlich, den MIME-Typ der Datei im `type` Attribut anzugeben, da der Browser sofort erkennen kann, ob er diese Datei abspielen kann, und keine Zeit damit verschwendet.

```html
<audio controls>
  <source src="foo.wav" type="audio/wav" />
  <a href="foo.wav" download="foo.wav">Download WAV audio</a>.
</audio>
```

### `<audio>` mit mehreren \<source> Elementen

Dieses Beispiel enthält mehrere `<source>` Elemente. Der Browser versucht, die erste Quelle (Opus) zu laden, wenn er sie abspielen kann; falls nicht, fällt er auf die zweite (Vorbis) und schließlich auf MP3 zurück:

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
          >Fließende Inhalte</a
        >, Phrasing-Inhalte, eingebettete Inhalte. Wenn es ein
        <a href="#controls"><code>controls</code></a> Attribut hat: interaktive
        Inhalte und greifbare Inhalte.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Wenn das Element ein <a href="#src"><code>src</code></a>
        Attribut hat: null oder mehr {{HTMLElement("track")}} Elemente
        gefolgt von transparentem Inhalt, der keine
        <code>&lt;audio&gt;</code> oder {{HTMLElement("video")}}
        Medienelemente enthält.<br />Andernfalls: null oder mehr {{HTMLElement("source")}}
        Elemente gefolgt von null oder mehr {{HTMLElement("track")}}
        Elementen gefolgt von transparentem Inhalt, der keine
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
      <th scope="row">Implizierte ARIA-Rolle</th>
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
  - [Leitfaden zu Audiocodecs im Web](/de/docs/Web/Media/Guides/Formats/Audio_codecs)

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)
- {{htmlelement("source")}}
- {{htmlelement("video")}}
- [Lernbereich: HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Grundlagen der Cross-Browser-Audio-Wiedergabe](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
