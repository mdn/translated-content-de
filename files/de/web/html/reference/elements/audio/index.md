---
title: "<audio>: Das Einbetten von Audio-Elementen"
slug: Web/HTML/Reference/Elements/audio
l10n:
  sourceCommit: 8db892b3e7ca294621898441e7db2481e0e6d939
---

Das **`<audio>`**-[HTML](/de/docs/Web/HTML)-Element wird verwendet, um Toninhalte in Dokumente einzubetten. Es kann eine oder mehrere Audioquellen enthalten, die entweder durch das `src`-Attribut oder das {{HTMLElement("source")}}-Element dargestellt werden: Der Browser wählt die geeignetste aus. Es kann auch das Ziel für gestreamte Medien sein, indem ein [`MediaStream`](/de/docs/Web/API/MediaStream) verwendet wird.

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

Das obige Beispiel zeigt die grundlegende Verwendung des `<audio>`-Elements. Ähnlich wie beim {{htmlelement("img")}}-Element geben wir einen Pfad zu den einzubettenden Mediendaten im `src`-Attribut an; wir können weitere Attribute hinzufügen, um Informationen festzulegen, beispielsweise ob es automatisch abgespielt und wiederholt werden soll, ob die Standard-Steuerelemente des Browsers angezeigt werden sollen usw.

Der Inhalt innerhalb der öffnenden und schließenden `<audio></audio>`-Tags wird als Fallback in Browsern angezeigt, die das Element nicht unterstützen.

## Attribute

Zu den Attributen dieses Elements gehören die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `autoplay`
  - : Ein Boolean-Attribut: Wenn angegeben, beginnt das Audio automatisch mit der Wiedergabe, sobald es dazu in der Lage ist, ohne darauf zu warten, dass die gesamte Audiodatei heruntergeladen wurde.

    > [!NOTE]
    > Websites, die Audio (oder Videos mit einer Tonspur) automatisch abspielen, können für Benutzer eine unangenehme Erfahrung darstellen und sollten daher nach Möglichkeit vermieden werden. Wenn Sie die Autoplay-Funktionalität anbieten müssen, sollten Sie sie zum Opt-in machen (der Benutzer muss sie explizit aktivieren). Dennoch kann dies nützlich sein, wenn Media-Elemente erstellt werden, deren Quelle zu einem späteren Zeitpunkt unter Benutzerkontrolle festgelegt wird. Weitere Informationen zur richtigen Verwendung von Autoplay finden Sie in unserem [Autoplay-Leitfaden](/de/docs/Web/Media/Guides/Autoplay).

    > [!NOTE]
    > Audio mit dem Attribut [`loading="lazy"`](#loading) beginnt erst mit dem Herunterladen und der Wiedergabe, wenn das Element sich in der Nähe oder innerhalb des Viewports befindet.

- `controls`
  - : Wenn dieses Attribut vorhanden ist, bietet der Browser Steuerelemente an, mit denen der Benutzer die Audiowiedergabe steuern kann, einschließlich Lautstärke, Suchvorgang und Pause/Fortsetzen der Wiedergabe.

- `controlslist`
  - : Das [`controlslist`](https://wicg.github.io/controls-list/explainer.html)-Attribut hilft dem Browser, auszuwählen, welche Steuerelemente für das `audio`-Element angezeigt werden sollen, wann immer der Browser seine eigenen Steuerelemente anzeigt (das heißt, wenn das `controls`-Attribut angegeben ist).

    Die erlaubten Werte sind `nodownload`, `nofullscreen` und `noremoteplayback`.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Dieses {{Glossary("Enumerated", "enumerierte")}} Attribut gibt an, ob CORS verwendet werden soll, um die zugehörige Audiodatei abzurufen. [CORS-fähige Ressourcen](/de/docs/Web/HTML/How_to/CORS_enabled_image) können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne als _verunreinigt_ zu gelten. Die erlaubten Werte sind:
    - `anonymous`
      - : Sendet eine Cross-Origin-Anfrage ohne Anmeldeinformationen. Mit anderen Worten sendet es den `Origin:` HTTP-Header ohne Cookie, X.509-Zertifikat oder Durchführung einer HTTP-Basisauthentifizierung. Wenn der Server dem Ursprungsort keine Anmeldeinformationen gibt (indem er den HTTP-Header `Access-Control-Allow-Origin:` nicht setzt), wird die Ressource _verunreinigt_ und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Sendet eine Cross-Origin-Anfrage mit Anmeldeinformationen. Mit anderen Worten sendet es den `Origin:` HTTP-Header mit einem Cookie, einem Zertifikat oder der Durchführung einer HTTP-Basisauthentifizierung. Wenn der Server dem Ursprungsort keine Anmeldeinformationen gibt (durch den HTTP-Header `Access-Control-Allow-Credentials:`), wird die Ressource _verunreinigt_ und ihre Nutzung eingeschränkt.

    Wenn nicht vorhanden, wird die Ressource ohne CORS-Anfrage abgerufen (d.h. ohne den `Origin:` HTTP-Header zu senden), was ihre nicht verunreinigte Nutzung in {{HTMLElement('canvas')}}-Elementen verhindert. Wenn ungültig, wird es so behandelt, als ob das enumerierte Schlüsselwort **anonymous** verwendet wurde. Weitere Informationen finden Sie in den [CORS-Einstellungen](/de/docs/Web/HTML/Reference/Attributes/crossorigin).

- `disableremoteplayback`
  - : Ein Boolean-Attribut, das die Möglichkeit der Fernwiedergabe auf Geräten deaktiviert, die per Kabel (HDMI, DVI usw.) und kabellos (Miracast, Chromecast, DLNA, AirPlay usw.) angeschlossen sind. Weitere Informationen finden Sie in der vorgeschlagenen [Remote Playback API-Spezifikation](https://w3c.github.io/remote-playback/#the-disableremoteplayback-attribute).

    In Safari können Sie [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) als Fallback verwenden.

- `loading`
  - : Gibt an, wie der Browser das Audio laden soll:
    - `eager`
      - : Lädt das Audio sofort, unabhängig davon, ob das Audio derzeit innerhalb des sichtbaren Viewports ist oder nicht (dies ist der Standardwert).
    - `lazy`
      - : Verzögert das Laden des Audios, bis es eine berechnete Entfernung vom Viewport erreicht, wie vom Browser definiert.

        Lazy Loading vermeidet den Netzwerk- und Speicherbedarf, der erforderlich ist, um das Audio zu handhaben, bis es mit ziemlicher Sicherheit benötigt wird. Dies verbessert die Leistung in den meisten typischen Anwendungsfällen.

    Lazy-geladene Audiodaten, die sich im visuellen Viewport befinden, sind möglicherweise noch nicht heruntergeladen, wenn das Window[`load`](/de/docs/Web/API/Window/load_event)-Ereignis ausgelöst wird. Dies liegt daran, dass das Ereignis basierend auf eifrig geladenen Audiodaten ausgelöst wird – Lazy-geladene Audiodaten werden nicht berücksichtigt, selbst wenn sie sich beim ersten Laden der Seite im visuellen Viewport befinden.

    Das Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Anti-Tracking-Maßnahme, da es, wenn ein User-Agent Lazy Loading bei deaktiviertem Skripting unterstützt, dennoch möglich wäre, die ungefähre Scroll-Position eines Benutzers über eine Sitzung hinweg zu verfolgen, indem man Audio strategisch im Markup einer Seite platziert, sodass ein Server verfolgen kann, wie viele Audiodaten angefordert werden und wann.

    > [!NOTE]
    > Das `loading="lazy"`-Attribut beeinflusst auch das [`autoplay`](#autoplay)-Attribut, wie in diesem Abschnitt dieser Seite beschrieben.

- `loop`
  - : Ein Boolean-Attribut: Wenn angegeben, springt der Audioplayer automatisch zum Anfang zurück, wenn das Ende des Audios erreicht ist.
- `muted`
  - : Ein Boolean-Attribut, das angibt, ob das Audio anfänglich stummgeschaltet wird. Sein Standardwert ist `false`.
- `preload`
  - : Dieses {{Glossary("enumerated", "enumerierte")}} Attribut soll dem Browser einen Hinweis darauf geben, was der Autor denkt, was zu einem besseren Benutzererlebnis führen wird. Es kann einen der folgenden Werte haben:
    - `none`: Gibt an, dass das Audio nicht vorgeladen werden soll.
    - `metadata`: Gibt an, dass nur die Audio-Metadaten (z.B. Länge) abgerufen werden.
    - `auto`: Gibt an, dass die gesamte Audiodatei heruntergeladen werden kann, auch wenn der Benutzer nicht erwartet wird, sie zu verwenden.
    - _leerer String_: Ein Synonym für den Wert `auto`.

    Der Standardwert ist für jeden Browser unterschiedlich. Die Spezifikation empfiehlt, ihn auf `metadata` zu setzen.

    > [!NOTE]
    >
    > - Das `autoplay`-Attribut hat Vorrang vor `preload`. Wenn `autoplay` angegeben ist, müsste der Browser offensichtlich mit dem Herunterladen des Audios zur Wiedergabe beginnen.
    > - Der Browser ist nicht gezwungen, dem Wert dieses Attributs zu folgen; es ist lediglich ein Hinweis.

- `src`
  - : Die URL des einzubettenden Audios. Dies unterliegt [HTTP-Zugriffskontrollen](/de/docs/Web/HTTP/Guides/CORS). Dies ist optional; Sie können stattdessen das {{htmlelement("source")}}-Element innerhalb des Audio-Blocks verwenden, um das einzubettende Audio anzugeben.

## Ereignisse

- [`audioprocess`](/de/docs/Web/API/ScriptProcessorNode/audioprocess_event) {{Deprecated_Inline}}
  - : Der Eingabepuffer eines [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) ist bereit zur Verarbeitung.
- [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)
  - : Der Browser kann die Medien abspielen, schätzt jedoch, dass nicht genügend Daten geladen wurden, um die Medien bis zum Ende abzuspielen, ohne für weiteres Puffern der Inhalte anzuhalten.
- [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
  - : Der Browser schätzt, dass er die Medien bis zum Ende abspielen kann, ohne für das Puffern von Inhalten anzuhalten.
- [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)
  - : Die Verarbeitung eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) ist beendet.
- [`durationchange`](/de/docs/Web/API/HTMLMediaElement/durationchange_event)
  - : Das `duration`-Attribut wurde aktualisiert.
- [`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)
  - : Die Medien sind leer geworden; dieses Ereignis wird zum Beispiel gesendet, wenn die Medien bereits geladen (oder teilweise geladen) wurden und die Methode [`HTMLMediaElement.load`](/de/docs/Web/API/HTMLMediaElement/load) aufgerufen wird, um sie neu zu laden.
- [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)
  - : Die Wiedergabe wurde beendet, weil das Ende der Medien erreicht wurde.
- [`loadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event)
  - : Der erste Frame der Medien ist fertig geladen.
- [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
  - : Die Metadaten wurden geladen.
- [`loadstart`](/de/docs/Web/API/HTMLMediaElement/loadstart_event)
  - : Wird ausgelöst, wenn der Browser begonnen hat, die Ressource zu laden.
- [`pause`](/de/docs/Web/API/HTMLMediaElement/pause_event)
  - : Die Wiedergabe wurde pausiert.
- [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)
  - : Die Wiedergabe hat begonnen.
- [`playing`](/de/docs/Web/API/HTMLMediaElement/playing_event)
  - : Die Wiedergabe ist bereit zu beginnen, nachdem sie pausiert oder aufgrund von Datenmangel verzögert wurde.
- [`ratechange`](/de/docs/Web/API/HTMLMediaElement/ratechange_event)
  - : Die Wiedergabegeschwindigkeit wurde geändert.
- [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event)
  - : Eine _seek_-Operation wurde abgeschlossen.
- [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
  - : Eine _seek_-Operation begann.
- [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
  - : Der Benutzeragent versucht, Mediendaten zu holen, aber Daten kommen unerwartet nicht weiter.
- [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event)
  - : Das Laden von Mediendaten wurde unterbrochen.
- [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)
  - : Die durch das `currentTime`-Attribut angegebene Zeit wurde aktualisiert.
- [`volumechange`](/de/docs/Web/API/HTMLMediaElement/volumechange_event)
  - : Die Lautstärke wurde geändert.
- [`waiting`](/de/docs/Web/API/HTMLMediaElement/waiting_event)
  - : Die Wiedergabe wurde gestoppt aufgrund eines temporären Datenmangels.

## Nutzungshinweise

Browser unterstützen nicht alle die gleichen [Dateitypen](/de/docs/Web/Media/Guides/Formats/Containers) und [Audio-Codecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs); Sie können mehrere Quellen innerhalb verschachtelter {{htmlelement("source")}}-Elemente angeben, und der Browser verwendet dann die erste, die er versteht:

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

Die Audioquelle kann auf eine beliebige gültige [URL](/de/docs/Web/URI) gesetzt werden, einschließlich HTTP(S)-URLs und [Data-URLs](/de/docs/Web/URI/Reference/Schemes/data). Beachten Sie beim Verwenden von HTTP(S)-URLs, dass das Caching-Verhalten des Browsers beeinflusst, wie oft die Datei vom Server angefordert wird. Data-URLs betten die Audiodaten direkt in das HTML ein, was für kleine Audiodateien nützlich sein kann, aber für größere Dateien nicht empfohlen wird, da es die Größe der HTML-Datei erhöht.

Wenn Sie {{htmlelement("source")}}-Elemente verwenden, versucht der Browser, jede Quelle der Reihe nach zu laden. Wenn eine Quelle fehlschlägt (z.B. aufgrund einer ungültigen URL oder eines nicht unterstützten Formats), wird die nächste Quelle versucht, und so weiter. Ein `error`-Ereignis wird auf dem `<audio>`-Element ausgelöst, nachdem alle Quellen fehlgeschlagen sind; `error`-Ereignisse werden nicht auf jedem einzelnen `<source>`-Element ausgelöst.

Sie können auch die [Web Audio API](/de/docs/Web/API/Web_Audio_API) verwenden, um Audio-Streams direkt aus JavaScript-Code zu generieren und zu manipulieren, anstatt vorab existierende Audiodateien zu streamen. Sie können das [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) in JavaScript auf ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt setzen. Dies wird häufig für Live-Audiostreams oder Echtzeit-Audiobearbeitung verwendet.

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

Wir bieten einen umfassenden und gründlichen [Leitfaden zu Medientypen](/de/docs/Web/Media/Leitfaden/Formats) und den [Audio-Codecs, die innerhalb dieser verwendet werden können](/de/docs/Web/Media/Leitfaden/Formats/Audio_codecs). Auch ein [Leitfaden zu den unterstützten Codecs für Video](/de/docs/Web/Media/Leitfaden/Formats/Video_codecs) steht zur Verfügung.

Weitere Nutzungshinweise:

- Wenn Sie das `controls`-Attribut nicht angeben, enthält der Audioplayer nicht die Standard-Steuerelemente des Browsers. Sie können jedoch Ihre eigenen benutzerdefinierten Steuerelemente mit JavaScript und der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API erstellen.
- Um eine präzise Steuerung über Ihre Audioinhalte zu ermöglichen, lösen `HTMLMediaElement`s viele verschiedene [Ereignisse](/de/docs/Web/API/HTMLMediaElement#events) aus. Dies bietet auch eine Möglichkeit, den Abrufprozess des Audios zu überwachen, damit Sie nach Fehlern suchen oder erkennen können, wann genug verfügbar ist, um mit dem Abspielen zu beginnen oder es zu bearbeiten.
- `<audio>`-Elemente können keine Untertitel oder Bildunterschriften zugeordnet haben wie `<video>`-Elemente. Sehen Sie sich [WebVTT und Audio](https://www.iandevlin.com/blog/2015/12/html5/webvtt-and-audio/) von Ian Devlin an, um nützliche Informationen und Lösungen zu erhalten.
- Um den Fallback-Inhalt in Browsern zu testen, die das Element unterstützen, können Sie `<audio>` durch ein nicht existierendes Element wie `<notanaudio>` ersetzen.

Eine gute allgemeine Informationsquelle zur Verwendung von HTML-`<audio>` ist das [HTML-Video- und Audio]-Einführungstutorial (/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio).

### Styling mit CSS

Das `<audio>`-Element hat keine eigene visuelle Ausgabe, es sei denn, das `controls`-Attribut ist angegeben, in diesem Fall werden die Standard-Steuerelemente des Browsers angezeigt.

Die Standard-Steuerelemente haben standardmäßig einen {{cssxref("display")}}-Wert von `inline`, und es ist oft eine gute Idee, den Wert auf `block` zu setzen, um die Kontrolle über das Positionieren und Layout zu verbessern, es sei denn, Sie möchten es innerhalb eines Textblocks oder ähnlichem platzieren.

Sie können die Standard-Steuerelemente mit Eigenschaften stylen, die den Block als eine Einheit beeinflussen, so zum Beispiel können Sie ihm eine {{cssxref("border")}} und {{cssxref("border-radius")}}, {{cssxref("padding")}}, {{cssxref("margin")}}, usw. geben. Sie können jedoch nicht die einzelnen Komponenten innerhalb des Audioplayer stylen (z.B. die Größe oder Symbole der Schaltflächen ändern, die Schriftart ändern, usw.), und die Steuerelemente unterscheiden sich von Browser zu Browser.

Um einen konsistenten Look und ein konsistentes Gefühl über verschiedene Browser hinweg zu erzielen, müssen Sie benutzerdefinierte Steuerelemente erstellen; diese können in beliebiger Weise markiert und gestylt werden, und dann kann JavaScript zusammen mit der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-API verwendet werden, um ihre Funktionalität zu verbinden.

[Grundlagen des Video-Player-Stylings](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics) bietet einige nützliche Styling-Techniken – es ist im Kontext von `<video>` geschrieben, doch vieles davon ist ebenso anwendbar auf `<audio>`.

### Erkennung der Hinzufügung und Entfernung von Tracks

Sie können erkennen, wann Tracks zu einem `<audio>`-Element hinzugefügt oder entfernt werden, indem Sie die Ereignisse [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event) verwenden. Diese Ereignisse werden jedoch nicht direkt an das `<audio>`-Element selbst gesendet. Stattdessen werden sie an das Tracklisten-Objekt innerhalb des `<audio>`-Elements gesendet, das dem Typ des Tracks entspricht, der dem Element hinzugefügt wurde:

- [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)
  - : Eine [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die alle Audiospuren des Medienelements enthält. Sie können einen Listener für `addtrack` zu diesem Objekt hinzufügen, um benachrichtigt zu werden, wenn neue Audiospuren zu dem Element hinzugefügt werden.
- [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)
  - : Fügen Sie einen `addtrack`-Listener zu diesem [`VideoTrackList`](/de/docs/Web/API/VideoTrackList)-Objekt hinzu, um informiert zu werden, wenn Videospuren zu dem Element hinzugefügt werden.
- [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)
  - : Fügen Sie einen `addtrack`-Ereignislistener zu dieser [`TextTrackList`](/de/docs/Web/API/TextTrackList) hinzu, um benachrichtigt zu werden, wenn neue Textspuren zu dem Element hinzugefügt werden.

> [!NOTE]
> Obwohl es sich um ein `<audio>`-Element handelt, hat es dennoch Video- und Text-Tracklisten und kann tatsächlich zur Anzeige von Videos verwendet werden, obwohl die Benutzeroberfläche seltsam sein kann.

Um beispielsweise zu erkennen, wann Audiospuren zu oder von einem `<audio>`-Element hinzugefügt oder entfernt werden, können Sie Code wie diesen verwenden:

```js
const elem = document.querySelector("audio");

elem.audioTrackList.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTrackList.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Dieser Code überwacht, wann Audiospuren zu dem Element hinzugefügt oder von ihm entfernt werden, und ruft eine hypothetische Funktion in einem Track-Editor auf, um den Track in der Liste der verfügbaren Tracks des Editors zu registrieren und zu entfernen.

Sie können auch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um nach den Ereignissen [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event) zu horchen.

## Barrierefreiheit

Audio mit gesprochenen Dialogen sollte sowohl Bildunterschriften als auch Transkriptionen enthalten, die seinen Inhalt genau beschreiben. Bildunterschriften, die mithilfe von [WebVTT](/de/docs/Web/API/WebVTT_API) spezifiziert werden, ermöglichen es Hörgeschädigten, den Inhalt einer Audioaufnahme zu verstehen, während die Aufnahme abgespielt wird, während Transkriptionen es Personen ermöglichen, die zusätzliche Zeit benötigen, den Inhalt der Aufnahme in einem für sie angenehmen Tempo und Format zu überprüfen.

Wenn automatische Untertitelungsdienste verwendet werden, ist es wichtig, den generierten Inhalt zu überprüfen, um sicherzustellen, dass er die Originalaudio genau darstellt.

Das `<audio>`-Element unterstützt WebVTT nicht direkt. Sie müssen eine Bibliothek oder ein Framework finden, das Ihnen diese Fähigkeit bietet, oder den Code schreiben, um die Untertitel selbst anzuzeigen. Eine Möglichkeit besteht darin, Ihr Audio mit einem {{HTMLElement("video")}}-Element abzuspielen, das WebVTT unterstützt.

Neben gesprochenen Dialogen sollten Untertitel und Transkriptionen auch Musik und Soundeffekte identifizieren, die wichtige Informationen kommunizieren. Dazu gehören Emotionen und Stimmung. Zum Beispiel wird im folgenden WebVTT-Beispiel die Verwendung von eckigen Klammern zur Bereitstellung von Ton und emotionalem Einblick auf den Betrachter vermerkt; dies kann helfen, die Stimmung zu schaffen, die ansonsten durch Musik, nonverbale Geräusche und wichtige Soundeffekte bereitgestellt wird.

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

Es ist auch eine gute Praxis, etwas Inhalt (wie den direkten Download-Link) als Fallback für Betrachter zur Verfügung zu stellen, die einen Browser verwenden, in dem das `<audio>`-Element nicht unterstützt wird:

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
- [MDN Erklärung der WCAG, Richtlinie 1.2](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [Verstehen des Erfolgskriteriums 1.2.1 | W3C Erklärung WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Verstehen des Erfolgskriteriums 1.2.2 | W3C Erklärung WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel zeigt die grundlegende Verwendung des `<audio>`-Elements zur Wiedergabe einer OGG-Datei. Es wird aufgrund des `autoplay`-Attributs automatisch abgespielt – wenn die Seite die Erlaubnis dazu hat – und enthält außerdem Fallback-Inhalt.

```html
<!-- Basic audio playback -->
<audio src="AudioTest.ogg" autoplay>
  <a href="AudioTest.ogg" download="AudioTest.ogg">Download OGG audio</a>.
</audio>
```

Details dazu, wann Autoplay funktioniert, wie man die Erlaubnis erhält, Autoplay zu verwenden, und wie und wann es angemessen ist, Autoplay zu verwenden, finden Sie in unserem [Autoplay-Leitfaden](/de/docs/Web/Media/Guides/Autoplay).

### `<audio>`-Element mit \<source>-Element

Dieses Beispiel gibt an, welcher Audiotrack eingebettet werden soll, indem das `src`-Attribut an einem verschachtelten `<source>`-Element anstelle direkt am `<audio>`-Element verwendet wird. Es ist immer nützlich, den MIME-Typ der Datei im `type`-Attribut einzubeziehen, da der Browser sofort feststellen kann, ob er diese Datei abspielen kann und keine Zeit darauf verschwendet, wenn dies nicht der Fall ist.

```html
<audio controls>
  <source src="foo.wav" type="audio/wav" />
  <a href="foo.wav" download="foo.wav">Download WAV audio</a>.
</audio>
```

### `<audio>` mit mehreren \<source>-Elementen

Dieses Beispiel enthält mehrere `<source>`-Elemente. Der Browser versucht, das erste Quellelement (Opus) zu laden, wenn er es abspielen kann; wenn nicht, fällt er auf das zweite (Vorbis) zurück und schließlich auf MP3:

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
          >Fließinhalt</a
        >, Textinhalt, eingebetteter Inhalt. Wenn es ein
        <a href="#controls"><code>controls</code></a>-Attribut hat: interaktiver
        Inhalt und spürbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Wenn das Element ein <a href="#src"><code>src</code></a>
        -Attribut hat: null oder mehr {{HTMLElement("track")}}-Elemente
        gefolgt von transparentem Inhalt, das kein
        <code>&lt;audio&gt;</code> oder {{HTMLElement("video")}}
        -Medienelemente enthält.<br />Sonst: null oder mehr {{HTMLElement("source")}}
        -Elemente gefolgt von null oder mehr {{HTMLElement("track")}}
        -Elementen gefolgt von transparentem Inhalt, das kein
        <code>&lt;audio&gt;</code> oder {{HTMLElement("video")}}
        -Medienelemente enthält.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Weglassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
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

- [Technologien für Webmedien](/de/docs/Web/Media)
  - [Media-Container-Formate (Dateitypen)](/de/docs/Web/Media/Guides/Formats/Containers)
  - [Leitfaden zu den auf dem Web verwendeten Audio-Codecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs)

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)
- {{htmlelement("source")}}
- {{htmlelement("video")}}
- [Lernbereich: HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Grundlagen der Cross-Browser-Audio](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
