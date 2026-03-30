---
title: "<audio>: Das eingebettete Audio-Element"
slug: Web/HTML/Reference/Elements/audio
l10n:
  sourceCommit: 3d7c7d4e151ff1b578bef4eff10c201b761a9d7d
---

Das **`<audio>`**-Element von [HTML](/de/docs/Web/HTML) wird verwendet, um Toninhalte in Dokumenten einzubetten. Es kann eine oder mehrere Audioquellen enthalten, die mit dem `src`-Attribut oder dem {{HTMLElement("source")}}-Element dargestellt werden: der Browser wählt die am besten geeignete aus. Es kann auch das Ziel für gestreamte Medien sein, indem ein [`MediaStream`](/de/docs/Web/API/MediaStream) verwendet wird.

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

Das obige Beispiel zeigt die grundlegende Verwendung des `<audio>`-Elements.
Ähnlich wie beim {{htmlelement("img")}}-Element geben wir einen Pfad zu den Medien an, die wir im `src`-Attribut einbetten möchten; wir können andere Attribute hinzufügen, um Informationen zu spezifizieren, wie zum Beispiel, ob es automatisch abspielen und in Schleife wiedergeben soll, ob wir die standardmäßigen Audiosteuerungen des Browsers anzeigen möchten usw.

Der Inhalt zwischen dem öffnenden und schließenden `<audio></audio>`-Tag wird als Fallback in Browsern angezeigt, die das Element nicht unterstützen.

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `autoplay`
  - : Ein Boolean-Attribut: Wenn angegeben, beginnt die Wiedergabe des Audios automatisch, sobald dies möglich ist, ohne darauf zu warten, dass die gesamte Audiodatei heruntergeladen ist.

    > [!NOTE]
    > Websites, die automatisch Audio (oder Videos mit Audiospur) abspielen, können für Benutzer unangehm sein, daher sollten sie vermieden werden, wann immer dies möglich ist.
    > Wenn Sie dennoch eine Autoplay-Funktionalität anbieten müssen, sollten Sie diese als Opt-in gestalten (erfordert, dass der Benutzer diese speziell aktiviert).
    > Dies kann jedoch nützlich sein, wenn Medienelemente erstellt werden, deren Quelle zu einem späteren Zeitpunkt unter Benutzerkontrolle festgelegt wird.
    > Sehen Sie sich unseren [Autoplay-Leitfaden](/de/docs/Web/Media/Guides/Autoplay) für zusätzliche Informationen zur korrekten Verwendung von Autoplay an.

    > [!NOTE]
    > Audio mit dem Attribut [`loading="lazy"`](#loading) wird erst heruntergeladen und abgespielt, wenn das Element sich in der Nähe des oder innerhalb des Viewports befindet.

- `controls`
  - : Wenn dieses Attribut vorhanden ist, bietet der Browser Steuerelemente, um dem Benutzer die Steuerung der Audiowiedergabe zu ermöglichen, einschließlich Lautstärke, Suchlauf und Pause/Fortsetzen der Wiedergabe.

- `controlslist`
  - : Das [`controlslist`](https://wicg.github.io/controls-list/explainer.html)-Attribut hilft dem Browser bei der Auswahl, welche Steuerelemente angezeigt werden sollen, wenn der Browser seine eigenen Steuerelemente zur Verfügung stellt (also wenn das `controls`-Attribut angegeben ist).

    Die erlaubten Werte sind `nodownload`, `nofullscreen` und `noremoteplayback`.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Dieses {{Glossary("Enumerated", "aufgezählte")}} Attribut zeigt an, ob CORS verwendet werden soll, um die entsprechende Audiodatei abzurufen. [Ressourcen mit CORS-Unterstützung](/de/docs/Web/HTML/How_to/CORS_enabled_image) können im {{HTMLElement("canvas")}}-Element verwendet werden, ohne _verunreinigt_ zu werden. Die erlaubten Werte sind:
    - `anonymous`
      - : Sendet eine Cross-Origin-Anfrage ohne Anmeldedaten. Das bedeutet, es wird der `Origin:`-HTTP-Header ohne Cookie, X.509-Zertifikat oder HTTP-Basis-Authentifizierung gesendet. Wenn der Server keine Anmeldedaten an die Ursprungsseite gibt (indem er den `Access-Control-Allow-Origin:`-HTTP-Header nicht setzt), wird die Ressource _verunreinigt_ und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Sendet eine Cross-Origin-Anfrage mit Anmeldedaten. Das bedeutet, es wird der `Origin:`-HTTP-Header mit einem Cookie, einem Zertifikat oder HTTP-Basis-Authentifizierung gesendet. Wenn der Server keine Anmeldedaten an die Ursprungsseite gibt (durch den `Access-Control-Allow-Credentials:`-HTTP-Header), wird die Ressource _verunreinigt_ und ihre Nutzung eingeschränkt.

    Wenn nicht vorhanden, wird die Ressource ohne CORS-Anfrage abgerufen (d.h. ohne Senden des `Origin:`-HTTP-Headers), wodurch ihre nicht verunreinigte Verwendung in {{HTMLElement('canvas')}}-Elementen verhindert wird. Bei ungültigen Werten wird es so behandelt, als würde das aufgezählte Schlüsselwort **anonymous** verwendet. Weitere Informationen finden Sie in den [CORS-Einstellungen-Attributen](/de/docs/Web/HTML/Reference/Attributes/crossorigin).

- `disableremoteplayback`
  - : Ein Boolean-Attribut, das die Möglichkeit der Fernwiedergabe auf Geräten deaktiviert, die mit kabelgebundener (HDMI, DVI usw.) und drahtloser Technologie (Miracast, Chromecast, DLNA, AirPlay usw.) angeschlossen sind. Weitere Informationen finden Sie in der vorgeschlagenen [Remote Playback API-Spezifikation](https://w3c.github.io/remote-playback/#the-disableremoteplayback-attribute).

    In Safari können Sie [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) als Fallback verwenden.

- `loading` {{experimental_inline}}
  - : Gibt an, wie der Browser das Audio laden soll:
    - `eager`
      - : Lädt das Audio sofort, unabhängig davon, ob sich das Audio derzeit im sichtbaren Ansichtsfenster befindet oder nicht (dies ist der Standardwert).
    - `lazy`
      - : Verschiebt das Laden des Audios, bis es eine berechnete Entfernung vom Ansichtsfenster erreicht, wie vom Browser definiert.

        Lazy Loading vermeidet den Netzwerk- und Speicherbandbreitenverbrauch, der erforderlich ist, um mit dem Audio umzugehen, bis es vernünftigerweise sicher ist, dass es benötigt wird. Dies verbessert die Leistung in den meisten typischen Anwendungsfällen.

    Lazy-geladene Audios, die sich im visuellen Ansichtsfenster befinden, können möglicherweise noch nicht heruntergeladen sein, wenn das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis des Fensters ausgelöst wird. Dies liegt daran, dass das Ereignis basierend auf eifrig geladenem Audio ausgelöst wird – Lazy-geladenes Audio wird nicht berücksichtigt, selbst wenn es sich beim ersten Laden der Seite im visuellen Ansichtsfenster befindet.

    Das Laden wird nur verschoben, wenn JavaScript aktiviert ist. Dies ist eine Anti-Tracking-Maßnahme, da, wenn ein Benutzeragent Lazy Loading unterstützte, auch wenn das Skripten deaktiviert ist, es dennoch möglich wäre, dass eine Website die ungefähre Scroll-Position eines Benutzers während einer Sitzung verfolgt, indem strategisch Audio im Markup einer Seite platziert wird, sodass ein Server verfolgen kann, wie viele Audios angefordert werden und wann.

    > [!NOTE]
    > Das Attribut `loading="lazy"` beeinflusst auch das Attribut [`autoplay`](#autoplay) wie in diesem Abschnitt dieser Seite beschrieben.

- `loop`
  - : Ein Boolean-Attribut: Wenn angegeben, sucht der Audioplayer automatisch zum Anfang zurück, wenn das Ende des Audios erreicht wird.
- `muted`
  - : Ein Boolean-Attribut, das anzeigt, ob das Audio anfänglich stumm geschaltet wird. Sein Standardwert ist `false`.
- `preload`
  - : Dieses {{Glossary("enumerated", "aufgezählte")}} Attribut soll dem Browser einen Hinweis darauf geben, was der Autor denkt, was zu dem besten Benutzererlebnis führen wird. Es kann einen der folgenden Werte haben:
    - `none`: Zeigt an, dass das Audio nicht vorab geladen werden soll.
    - `metadata`: Zeigt an, dass nur Audiodaten (z. B. Länge) abgerufen werden.
    - `auto`: Gibt an, dass die gesamte Audiodatei heruntergeladen werden kann, auch wenn der Benutzer sie wahrscheinlich nicht verwenden wird.
    - _leerer string_: Ein Synonym für den Wert `auto`.

    Der Standardwert ist für jeden Browser unterschiedlich. Die Spezifikation empfiehlt, ihn auf `metadata` zu setzen.

    > [!NOTE]
    >
    > - Das `autoplay`-Attribut hat Vorrang vor `preload`. Wenn `autoplay` angegeben ist, müsste der Browser offensichtlich damit beginnen, das Audio für die Wiedergabe herunterzuladen.
    > - Der Browser ist durch die Spezifikation nicht gezwungen, den Wert dieses Attributs zu befolgen; es ist nur ein Hinweis.

- `src`
  - : Die URL des einzubettenden Audios. Unterliegt den [HTTP-Zugriffskontrollen](/de/docs/Web/HTTP/Guides/CORS). Dies ist optional; Sie können stattdessen das {{htmlelement("source")}}-Element innerhalb des Audio-Blocks verwenden, um das Audio anzugeben, das eingebettet werden soll.

## Ereignisse

- [`audioprocess`](/de/docs/Web/API/ScriptProcessorNode/audioprocess_event) {{Deprecated_Inline}}
  - : Der Eingabepuffer eines [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) ist bereit, verarbeitet zu werden.
- [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)
  - : Der Browser kann das Medium abspielen, schätzt aber, dass nicht genügend Daten geladen wurden, um das Medium bis zu seinem Ende abzuspielen, ohne für weiteres Puffern des Inhalts anhalten zu müssen.
- [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
  - : Der Browser schätzt, dass er das Medium bis zu seinem Ende abspielen kann, ohne für Inhaltsbuffern anhalten zu müssen.
- [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)
  - : Die Verarbeitung eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) ist beendet.
- [`durationchange`](/de/docs/Web/API/HTMLMediaElement/durationchange_event)
  - : Das `duration`-Attribut wurde aktualisiert.
- [`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)
  - : Das Medium ist leer geworden; zum Beispiel wird dieses Ereignis gesendet, wenn das Medium bereits geladen (oder teilweise geladen) ist und die Methode [`HTMLMediaElement.load`](/de/docs/Web/API/HTMLMediaElement/load) aufgerufen wird, um es neu zu laden.
- [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)
  - : Die Wiedergabe wurde gestoppt, weil das Ende des Mediums erreicht wurde.
- [`loadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event)
  - : Der erste Frame des Mediums wurde vollständig geladen.
- [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
  - : Die Metadaten wurden geladen.
- [`loadstart`](/de/docs/Web/API/HTMLMediaElement/loadstart_event)
  - : Wird ausgelöst, wenn der Browser begonnen hat, die Ressource zu laden.
- [`pause`](/de/docs/Web/API/HTMLMediaElement/pause_event)
  - : Die Wiedergabe wurde pausiert.
- [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)
  - : Die Wiedergabe hat begonnen.
- [`playing`](/de/docs/Web/API/HTMLMediaElement/playing_event)
  - : Die Wiedergabe ist bereit zu starten, nachdem sie pausiert wurde oder aufgrund von Datenmangel verzögert war.
- [`ratechange`](/de/docs/Web/API/HTMLMediaElement/ratechange_event)
  - : Die Wiedergabegeschwindigkeit hat sich geändert.
- [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event)
  - : Eine _Such_-Operation ist abgeschlossen.
- [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
  - : Eine _Such_-Operation hat begonnen.
- [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
  - : Der Benutzeragent versucht, Mediendaten abzurufen, aber Daten kommen unerwartet nicht.
- [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event)
  - : Das Laden von Mediendaten wurde ausgesetzt.
- [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)
  - : Die durch das `currentTime`-Attribut angezeigte Zeit wurde aktualisiert.
- [`volumechange`](/de/docs/Web/API/HTMLMediaElement/volumechange_event)
  - : Die Lautstärke hat sich geändert.
- [`waiting`](/de/docs/Web/API/HTMLMediaElement/waiting_event)
  - : Die Wiedergabe wurde gestoppt wegen eines temporären Datenmangels.

## Hinweise zur Verwendung

Browser unterstützen nicht alle die gleichen [Dateitypen](/de/docs/Web/Media/Guides/Formats/Containers) und [Audiocodecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs); Sie können mehrere Quellen innerhalb von verschachtelten {{htmlelement("source")}}-Elementen bereitstellen, und der Browser verwendet dann die erste, die er versteht:

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

Die Audioquelle kann auf jede gültige [URL](/de/docs/Web/URI) gesetzt werden, einschließlich HTTP(S)-URLs und [Daten-URLs](/de/docs/Web/URI/Reference/Schemes/data). Beim Verwenden von HTTP(S)-URLs beachten Sie, dass das Caching-Verhalten des Browsers das Abrufverhalten vom Server beeinflusst. Daten-URLs betten die Audiodaten direkt in das HTML ein, was für kleine Audiodateien nützlich sein kann, jedoch für größere Dateien nicht empfohlen wird, da es die HTML-Dateigröße erhöht.

Beim Verwendung von {{htmlelement("source")}}-Elementen versucht der Browser, jede Quelle der Reihe nach zu laden. Wenn eine Quelle fehlschlägt (z. B. aufgrund einer ungültigen URL oder eines nicht unterstützten Formats), wird die nächste Quelle versucht, und so weiter. Ein `error`-Ereignis wird auf dem `<audio>`-Element ausgelöst, nachdem alle Quellen fehlgeschlagen sind; `error`-Ereignisse werden nicht für jedes einzelne `<source>`-Element ausgelöst.

Sie können auch die [Web Audio API](/de/docs/Web/API/Web_Audio_API) verwenden, um direkt Audioströme aus JavaScript-Code zu generieren und zu manipulieren, anstatt vorgefertigte Audiodateien zu streamen. Sie können das [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) in JavaScript auf ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt setzen. Dies wird häufig für Live-Audio-Streams oder Echtzeit-Audiobearbeitung verwendet.

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

Beachten Sie, dass `MediaStream`-Quellen Einschränkungen haben: Sie sind nicht suchfähig und unterstützen nur eine begrenzte Menge an Codecs.

Wir bieten einen substanziellen und ausführlichen [Leitfaden zu Mediendateitypen](/de/docs/Web/Media/Guides/Formats) und den [Audiocodecs, die darin verwendet werden können](/de/docs/Web/Media/Guides/Formats/Audio_codecs). Auch verfügbar ist ein [Leitfaden zu den unterstützten Codecs für Video](/de/docs/Web/Media/Guides/Formats/Video_codecs).

Weitere Hinweise zur Verwendung:

- Wenn Sie das Attribut `controls` nicht angeben, wird der Audioplayer nicht die standardmäßigen Steuerelemente des Browsers enthalten. Sie können jedoch Ihre eigenen benutzerdefinierten Steuerelemente mit JavaScript und der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API erstellen.
- Um eine präzise Steuerung über Ihre Audioinhalte zu ermöglichen, lösen `HTMLMediaElement`s viele verschiedene [Ereignisse](/de/docs/Web/API/HTMLMediaElement#events) aus. Dies bietet auch eine Möglichkeit, den Abrufprozess des Audios zu überwachen, sodass Sie Fehler sehen oder erkennen können, wann genug verfügbar ist, um das Abspielen zu beginnen oder es zu manipulieren.
- `<audio>`-Elemente können keine Untertitel oder Beschriftungen haben, wie es `<video>`-Elemente können. Siehe [WebVTT und Audio](https://www.iandevlin.com/blog/2015/12/html5/webvtt-and-audio/) von Ian Devlin für nützliche Informationen und Workarounds.
- Um den Fallback-Inhalt in Browsern zu testen, die das Element unterstützen, können Sie `<audio>` durch ein nicht existierendes Element wie `<notanaudio>` ersetzen.

Eine gute allgemeine Informationsquelle zur Verwendung von HTML `<audio>` ist das [HTML-Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) Anfängertutorial.

### Styling mit CSS

Das `<audio>`-Element hat keine eigene visuelle Ausgabe, es sei denn, das Attribut `controls` ist angegeben, in welchem Fall die standardmäßigen Steuerelemente des Browsers angezeigt werden.

Die Standardsteuerungen haben standardmäßig einen {{cssxref("display")}}-Wert von `inline`, und es ist oft eine gute Idee, den Wert auf `block` zu setzen, um die Positionierung und das Layout besser zu kontrollieren, es sei denn, Sie möchten, dass es innerhalb eines Textblocks oder Ähnlichem sitzt.

Sie können die Standardsteuerelemente mit Eigenschaften stylen, die den Block als eine Einheit betreffen. So können Sie ihm beispielsweise eine {{cssxref("border")}} und {{cssxref("border-radius")}}, {{cssxref("padding")}}, {{cssxref("margin")}} usw. geben. Sie können jedoch die einzelnen Komponenten im Audioplayer nicht stylen (z. B. die Größe der Schaltflächen oder Symbole ändern, die Schriftart ändern usw.), und die Steuerelemente unterscheiden sich in den verschiedenen Browsern.

Um ein konsistentes Aussehen und Gefühl über die Browser hinweg zu erzielen, müssen Sie benutzerdefinierte Steuerelemente erstellen; diese können in beliebiger Weise ausgezeichnet und gestaltet werden, und dann kann JavaScript zusammen mit der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API verwendet werden, um deren Funktionalität zu verknüpfen.

[Grundlagen der Videoplayer-Stilierung](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics) bietet einige nützliche Styling-Techniken – es ist im Kontext von `<video>` geschrieben, aber vieles davon ist ebenso auf `<audio>` anwendbar.

### Erkennen des Hinzufügens und Entfernens von Spuren

Sie können erkennen, wann Spuren zum `<audio>`-Element hinzugefügt und entfernt werden, indem Sie die Ereignisse [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event) verwenden. Diese Ereignisse werden jedoch nicht direkt an das `<audio>`-Element selbst gesendet. Stattdessen werden sie an das Tracklisten-Objekt innerhalb des `<audio>`-Elements gesendet, das dem Typ der Spur entspricht, die dem Element hinzugefügt wurde:

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die alle Audiospuren des Medienelements enthält. Sie können einen `addtrack`-Listener zu diesem Objekt hinzufügen, um benachrichtigt zu werden, wenn neue Audiospuren zum Element hinzugefügt werden.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)
  - : Fügen Sie einen `addtrack`-Listener zu diesem [`VideoTrackList`](/de/docs/Web/API/VideoTrackList)-Objekt hinzu, um Informationen zu erhalten, wenn Videospuren zum Element hinzugefügt werden.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
  - : Fügen Sie einen `addtrack`-Ereignis-Listener zu dieser [`TextTrackList`](/de/docs/Web/API/TextTrackList) hinzu, um benachrichtigt zu werden, wenn neue Textspuren zum Element hinzugefügt werden.

> [!NOTE]
> Auch wenn es sich um ein `<audio>`-Element handelt, verfügt es dennoch über Video- und Text-Track-Listen und kann in der Tat zum Anzeigen von Video verwendet werden, obwohl die Benutzeroberflächenimplikationen merkwürdig sein können.

Um beispielsweise zu erkennen, wann Audiospuren zum `<audio>`-Element hinzugefügt oder davon entfernt werden, können Sie Code wie diesen verwenden:

```js
const elem = document.querySelector("audio");

elem.audioTrackList.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTrackList.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Dieser Code überwacht das Hinzufügen und Entfernen von Audiospuren am Element und ruft eine hypothetische Funktion auf einem Track-Editor auf, um die Spur auf der Liste der verfügbaren Tracks zu registrieren und zu entfernen.

Sie können auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um die Ereignisse [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event) zu überwachen.

## Barrierefreiheit

Audio mit gesprochenem Dialog sollte sowohl Untertitel als auch Transkripte bereitstellen, die seinen Inhalt genau beschreiben. Untertitel, die mit [WebVTT](/de/docs/Web/API/WebVTT_API) angegeben werden, ermöglichen es Menschen mit Hörbehinderung, den Inhalt einer Audioaufnahme zu verstehen, während die Aufnahme abgespielt wird, während Transkripte es Menschen ermöglichen, die zusätzliche Zeit benötigen, den Inhalt der Aufnahme in einem für sie angenehmen Tempo und Format zu überprüfen.

Wenn automatische Untertitelungsdienste verwendet werden, ist es wichtig, den generierten Inhalt zu überprüfen, um sicherzustellen, dass er die ursprünglichen Audioinhalte korrekt widerspiegelt.

Das `<audio>`-Element unterstützt WebVTT nicht direkt. Sie müssen eine Bibliothek oder ein Framework finden, das die Möglichkeit bietet, oder den Code selbst schreiben, um Untertitel anzuzeigen. Eine Möglichkeit ist, Ihr Audio mit einem {{HTMLElement("video")}}-Element abzuspielen, das WebVTT unterstützt.

Neben gesprochenem Dialog sollten Untertitel und Transkripte auch Musik und Soundeffekte identifizieren, die wichtige Informationen vermitteln. Dazu gehört auch die Emotion und der Ton. Beispielsweise ist in dem untenstehenden WebVTT zu beachten, wie eckige Klammern verwendet werden, um dem Betrachter Ton und emotionale Einsicht zu geben; dies kann helfen, die durch Musik, nicht verbale Geräusche und entscheidende Soundeffekte bereitgestellte Stimmung herzustellen.

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

Es ist auch eine gute Praxis, einigen Inhalt (wie den direkten Download-Link) als Fallback für Zuschauer bereitzustellen, die einen Browser verwenden, in dem das `<audio>`-Element nicht unterstützt wird:

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
- [WebAIM: Captions, Transcripts, and Audio Descriptions](https://webaim.org/techniques/captions/)
- [MDN Verständnis von WCAG, Guideline 1.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [Verständnis von Erfolgskriterium 1.2.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Verständnis von Erfolgskriterium 1.2.2 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel zeigt die grundlegende Verwendung des `<audio>`-Elements zur Wiedergabe einer OGG-Datei. Es wird automatisch abgespielt durch das `autoplay`-Attribut - wenn die Seite die Erlaubnis dazu hat - und enthält auch Fallback-Inhalt.

```html
<!-- Basic audio playback -->
<audio src="AudioTest.ogg" autoplay>
  <a href="AudioTest.ogg" download="AudioTest.ogg">Download OGG audio</a>.
</audio>
```

Details darüber, wann Autoplay funktioniert, wie man die Erlaubnis erhält, Autoplay zu verwenden, und wann und wie es angemessen ist, Autoplay zu verwenden, finden Sie in unserem [Autoplay-Leitfaden](/de/docs/Web/Media/Guides/Autoplay).

### `<audio>`-Element mit \<source>-Element

Dieses Beispiel gibt an, welcher Audiotrack eingebettet werden soll, indem das `src`-Attribut auf einem verschachtelten `<source>`-Element anstelle direkt auf dem `<audio>`-Element verwendet wird. Es ist immer nützlich, den MIME-Typ der Datei im `type`-Attribut anzugeben, da der Browser sofort erkennen kann, ob er die Datei abspielen kann und keine Zeit damit verschwendet, wenn nicht.

```html
<audio controls>
  <source src="foo.wav" type="audio/wav" />
  <a href="foo.wav" download="foo.wav">Download WAV audio</a>.
</audio>
```

### `<audio>` mit mehreren \<source>-Elementen

Dieses Beispiel umfasst mehrere `<source>`-Elemente. Der Browser versucht, das erste Quellenelement (Opus) zu laden, wenn er es abspielen kann; wenn nicht, fällt er auf das zweite (Vorbis) zurück und schließlich auf MP3:

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
          >Fließender Inhalt</a
        >, inhaltlicher Inhalt, eingebetteter Inhalt. Wenn es ein
        <a href="#controls"><code>controls</code></a> Attribut hat: interaktiver
        und greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Wenn das Element ein <a href="#src"><code>src</code></a>
        Attribut hat: null oder mehr {{HTMLElement("track")}}-Elemente
        gefolgt von transparentem Inhalt, der keine
        <code>&lt;audio&gt;</code> oder {{HTMLElement("video")}}
        Medienelemente enthält.<br />Andernfalls: null oder mehr {{HTMLElement("source")}}
        Elemente, gefolgt von null oder mehr {{HTMLElement("track")}}
        Elementen, gefolgt von transparentem Inhalt, der keine
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
      <td>Jedes Element, das eingebettete Inhalte akzeptiert.</td>
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
  - [Leitfaden zu den auf dem Web verwendeten Audiocodecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs)

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)
- {{htmlelement("source")}}
- {{htmlelement("video")}}
- [Lernbereich: HTML-Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Grundlagen der Browser-übergreifenden Audio](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
