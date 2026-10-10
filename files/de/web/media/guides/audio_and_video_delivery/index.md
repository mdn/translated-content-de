---
title: Bereitstellung von Audio und Video
slug: Web/Media/Guides/Audio_and_video_delivery
l10n:
  sourceCommit: 47b1321d6cac5c7093583162c4cf73e015cc4905
---

Audio und Video können im Web auf verschiedene Weise bereitgestellt werden – von „statischen“ Mediendateien bis hin zu adaptiven Livestreams. Dieser Artikel dient als Einstieg in die verschiedenen Verfahren zur Bereitstellung webbasierter Medien und deren Kompatibilität mit gängigen Browsern.

## HTML-Elemente für Audio und Video

Ob es sich um vorab aufgezeichnete Audiodateien oder Livestreams handelt: Das Verfahren, mit dem sie über die Browser-Elemente {{ htmlelement("audio")}} und {{ htmlelement("video")}} verfügbar gemacht werden, bleibt weitgehend gleich. Um alle Browser zu unterstützen, müssen derzeit zwei Formate angegeben werden. Durch die Unterstützung der Formate MP3 und MP4 in Firefox und Opera ändert sich dies jedoch rasch. Informationen zur Kompatibilität finden Sie im [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats).

Der allgemeine Ablauf zur Bereitstellung von Video und Audio sieht üblicherweise so aus:

1. Prüfen Sie mittels Feature-Erkennung, welche Formate der Browser unterstützt (wie oben beschrieben, stehen meist zwei zur Auswahl).
2. Wenn der Browser keines der bereitgestellten Formate nativ wiedergeben kann, zeigen Sie entweder ein Standbild an oder verwenden Sie eine alternative Technologie zur Wiedergabe des Videos.
3. Legen Sie fest, wie Sie das Medium wiedergeben beziehungsweise einbinden möchten (etwa mit einem {{ htmlelement("video") }}-Element oder vielleicht mit `document.createElement('video')`).
4. Stellen Sie dem Player die Mediendatei bereit.

### HTML-Audio

```html
<audio controls preload="auto">
  <source src="audio-file.mp3" type="audio/mpeg" />

  <!-- fallback for browsers that don't support mp3 -->
  <source src="audio-file.ogg" type="audio/ogg" />

  <!-- fallback for browsers that don't support audio element -->
  <a href="audio-file.mp3">download audio</a>
</audio>
```

Der obige Code erstellt einen Audioplayer, der versucht, für eine flüssige Wiedergabe möglichst viele Audiodaten vorab zu laden.

> [!NOTE]
> Das Attribut `preload` wird von einigen mobilen Browsern möglicherweise ignoriert.

Weitere Informationen finden Sie unter [Browserübergreifende Audio-Grundlagen (HTML-Audio im Detail)](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics#html_audio_in_detail).

### HTML-Video

```html
<video
  controls
  width="640"
  height="480"
  poster="initial-image.png"
  autoplay
  muted>
  <source src="video-file.mp4" type="video/mp4" />

  <!-- fallback for browsers that don't support mp4 -->
  <source src="video-file.webm" type="video/webm" />

  <!-- specifying subtitle files -->
  <track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English" />
  <track
    src="subtitles_no.vtt"
    kind="subtitles"
    srclang="no"
    label="Norwegian" />

  <!-- fallback for browsers that don't support video element -->
  <a href="video-file.mp4">download video</a>
</video>
```

Der obige Code erstellt einen Videoplayer mit den Abmessungen 640 × 480 Pixel. Bis zur Wiedergabe des Videos zeigt er ein Vorschaubild an. Das Video soll automatisch starten, ist aber standardmäßig stummgeschaltet.

> [!NOTE]
> Das Attribut `autoplay` wird von einigen mobilen Browsern möglicherweise ignoriert. Außerdem kann die automatische Wiedergabe bei missbräuchlicher Verwendung problematisch sein. Wir empfehlen Ihnen dringend, den [Leitfaden zur automatischen Wiedergabe für Medien und Web-Audio-APIs](/de/docs/Web/Media/Guides/Autoplay) zu lesen, um zu erfahren, wie Sie die automatische Wiedergabe sinnvoll einsetzen.

Weitere Informationen finden Sie unter [\<video>-Element](/de/docs/Web/HTML/Reference/Elements/video) und [Einen browserübergreifenden Videoplayer erstellen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).

### JavaScript-Audio

```js
const myAudio = document.createElement("audio");

if (myAudio.canPlayType("audio/mpeg")) {
  myAudio.setAttribute("src", "audio-file.mp3");
} else if (myAudio.canPlayType("audio/ogg")) {
  myAudio.setAttribute("src", "audio-file.ogg");
}

myAudio.currentTime = 5;
myAudio.play();
```

Wir legen die Audioquelle abhängig davon fest, welchen Audiodateityp der Browser unterstützt. Anschließend setzen wir die Wiedergabeposition auf fünf Sekunden und versuchen, die Audiodatei abzuspielen.

> [!NOTE]
> Die Wiedergabe wird von den meisten Browsern ignoriert, sofern sie nicht durch ein vom Benutzer ausgelöstes Ereignis angestoßen wird.

Sie können einem {{ htmlelement("audio") }}-Element auch eine Base64-kodierte WAV-Datei übergeben und so Audio dynamisch erzeugen:

```html
<audio id="player" src="data:audio/x-wav;base64,UklGRvC…"></audio>
```

[Speak.js](https://github.com/kripken/speak.js/) verwendet diese Technik.

### JavaScript-Video

```js
const myVideo = document.createElement("video");

if (myVideo.canPlayType("video/mp4")) {
  myVideo.setAttribute("src", "video-file.mp4");
} else if (myVideo.canPlayType("video/webm")) {
  myVideo.setAttribute("src", "video-file.webm");
}

myVideo.width = 480;
myVideo.height = 320;
```

Wir legen die Videoquelle abhängig davon fest, welchen Videodateityp der Browser unterstützt. Anschließend legen wir die Breite und Höhe des Videos fest.

## Web Audio API

In diesem Beispiel rufen wir eine MP3-Datei mit der [`fetch()`](/de/docs/Web/API/Window/fetch)-API ab, laden sie in eine Quelle und spielen sie ab.

```js
let audioCtx;
let buffer;
let source;

async function loadAudio() {
  try {
    // Load an audio file
    const response = await fetch("viper.mp3");
    // Decode it
    buffer = await audioCtx.decodeAudioData(await response.arrayBuffer());
  } catch (err) {
    console.error(`Unable to fetch the audio file. Error: ${err.message}`);
  }
}

const play = document.getElementById("play");
play.addEventListener("click", async () => {
  if (!audioCtx) {
    audioCtx = new AudioContext();
    await loadAudio();
  }
  source = audioCtx.createBufferSource();
  source.buffer = buffer;
  source.connect(audioCtx.destination);
  source.start();
  play.disabled = true;
});
```

Sie können [das vollständige Beispiel direkt ausführen](https://mdn.github.io/webaudio-examples/decode-audio-data/promise/) oder [den Quellcode ansehen](https://github.com/mdn/webaudio-examples/tree/main/decode-audio-data/promise).

Mehr über die Grundlagen der Web Audio API erfahren Sie unter [Die Web Audio API verwenden](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API).

## getUserMedia / Stream API

Mit `getUserMedia` und der Stream API können Sie auch einen Livestream von einer Webcam und/oder einem Mikrofon abrufen. Dies ist Teil einer umfassenderen Technologie namens WebRTC (Web Real-Time Communications) und mit den aktuellen Versionen von Chrome, Firefox und Opera kompatibel.

Um den Stream Ihrer Webcam abzurufen, richten Sie zunächst ein {{htmlelement("video")}}-Element ein:

```html
<video id="webcam" width="480" height="360"></video>
```

Verbinden Sie anschließend, sofern dies unterstützt wird, die Webcam-Quelle mit dem Videoelement:

```js
if (navigator.mediaDevices) {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((stream) => {
      const video = document.getElementById("webcam");
      video.autoplay = true;
      video.srcObject = stream;
    })
    .catch(() => {
      alert(
        "There has been a problem retrieving the streams - are you running on file:/// or did you disallow access?",
      );
    });
} else {
  alert("getUserMedia is not supported in this browser.");
}
```

Weitere Informationen finden Sie auf unserer Seite zu [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia).

## MediaStream Recording

Neue Standards ermöglichen es Browsern, Medien mit `getUserMedia` von Mikrofon oder Kamera abzurufen und sie unmittelbar mit der neuen MediaStream Recording API aufzuzeichnen. Dazu übergeben Sie den von `getUserMedia` empfangenen Stream an ein `MediaRecorder`-Objekt und verwenden die resultierende Ausgabe als Audio- oder Videoquelle\*.

Das grundlegende Verfahren sieht so aus:

```js
navigator.mediaDevices
  .getUserMedia({ audio: true })
  .then((stream) => {
    const recorder = new MediaRecorder(stream);

    const data = [];
    recorder.ondataavailable = (e) => {
      data.push(e.data);
    };
    recorder.start();
    recorder.onerror = (e) => {
      throw e.error || new Error(e.name); // e.name is FF non-spec
    };
    recorder.onstop = (e) => {
      const audio = document.createElement("audio");
      audio.src = window.URL.createObjectURL(new Blob(data));
    };
    setTimeout(() => {
      rec.stop();
    }, 5000);
  })
  .catch((error) => {
    console.log(error.message);
  });
```

Weitere Einzelheiten finden Sie unter [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API).

## Media Source Extensions (MSE)

[Media Source Extensions](https://w3c.github.io/media-source/) ist ein Arbeitsentwurf des W3C, der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) erweitern soll, damit JavaScript Medienstreams für die Wiedergabe erzeugen kann. Dadurch werden verschiedene Anwendungsfälle möglich, etwa adaptives Streaming und die zeitversetzte Wiedergabe von Livestreams.

### Encrypted Media Extensions (EME)

[Encrypted Media Extensions](https://w3c.github.io/encrypted-media/) ist ein Vorschlag des W3C zur Erweiterung von `HTMLMediaElement` um APIs zur Steuerung der Wiedergabe geschützter Inhalte.

Die API unterstützt Anwendungsfälle von der einfachen Entschlüsselung mit Clear Key bis hin zu hochwertigen Videoinhalten, sofern der User Agent entsprechend implementiert ist. Der Austausch von Lizenzen und Schlüsseln wird von der Anwendung gesteuert. Das erleichtert die Entwicklung zuverlässiger Wiedergabeanwendungen, die verschiedene Technologien zur Entschlüsselung und zum Schutz von Inhalten unterstützen.

Einer der Hauptzwecke von EME ist es, Browsern die Implementierung von DRM ([Digital Rights Management](https://en.wikipedia.org/wiki/Digital_rights_management)) zu ermöglichen. DRM soll verhindern, dass webbasierte Inhalte – insbesondere Videos – kopiert werden.

### Adaptives Streaming

Neue Formate und Protokolle sollen adaptives Streaming ermöglichen. Bei adaptiv gestreamten Medien können sich die Bandbreite und in der Regel auch die Qualität des Streams in Echtzeit an die verfügbare Bandbreite des Benutzers anpassen. Adaptives Streaming wird häufig zusammen mit Livestreaming eingesetzt, wenn eine unterbrechungsfreie Bereitstellung von Audio oder Video besonders wichtig ist.

Die wichtigsten Formate für adaptives Streaming sind [HLS](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#hls) und [MPEG-DASH](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#mpeg-dash). MSE wurde mit Blick auf DASH entwickelt. MSE definiert Byte-Streams gemäß [ISOBMFF](https://dvcs.w3.org/hg/html-media/raw-file/tip/media-source/isobmff-byte-stream-format.html) und [M2TS](https://en.wikipedia.org/wiki/M2ts). Beide werden von DASH unterstützt, M2TS auch von HLS. Wenn Ihnen Standards und Flexibilität wichtig sind oder Sie die meisten modernen Browser unterstützen möchten, ist DASH im Allgemeinen wahrscheinlich die bessere Wahl.

> [!NOTE]
> Safari unterstützt DASH derzeit nicht. dash.js funktioniert jedoch mit neueren Safari-Versionen, deren Veröffentlichung zusammen mit OS X Yosemite geplant ist.

DASH bietet außerdem mehrere Profile, darunter onDemand-Profile, die weder eine Vorverarbeitung noch eine Aufteilung der Mediendateien erfordern. Daneben gibt es verschiedene Cloud-Dienste, die Ihre Medien sowohl in HLS als auch in DASH konvertieren.

Weitere Informationen finden Sie unter [Livestreaming von Audio und Video im Web](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video).

## Ihren Mediaplayer anpassen

Vielleicht möchten Sie, dass Ihr Audio- oder Videoplayer in allen Browsern einheitlich aussieht, oder Sie möchten ihn an Ihre Website anpassen. Dazu lassen Sie im Allgemeinen das Attribut `controls` weg, damit die Standardsteuerelemente des Browsers nicht angezeigt werden. Anschließend erstellen Sie eigene Steuerelemente mit HTML und CSS und verknüpfen sie per JavaScript mit der Audio-/Video-API.

Bei Bedarf können Sie Funktionen ergänzen, die Standardplayer derzeit nicht bieten, etwa eine einstellbare Wiedergabegeschwindigkeit, einen Wechsel zwischen Streams unterschiedlicher Qualität oder eine Anzeige des Audiospektrums. Sie können auch festlegen, wie sich Ihr Player an unterschiedliche Bildschirmgrößen anpasst – beispielsweise indem Sie den Fortschrittsbalken unter bestimmten Bedingungen ausblenden.

Sie können Klick-, Touch- und/oder Tastaturereignisse erkennen, um Aktionen wie Wiedergabe, Pause und das Verschieben der Wiedergabeposition auszulösen. Denken Sie dabei auch an die Tastatursteuerung: Sie verbessert die Bedienbarkeit und die Barrierefreiheit.

Ein kurzes Beispiel: Richten Sie zunächst das Audioelement und Ihre eigenen Steuerelemente in HTML ein:

```html
<audio id="my-audio" src="/shared-assets/audio/guitar.mp3"></audio>
<button id="my-control">play</button>
```

Ergänzen Sie etwas JavaScript, um Ereignisse für die Wiedergabe und das Pausieren des Audios zu erkennen:

```js
const myAudio = document.getElementById("my-audio");
const myControl = document.getElementById("my-control");

function switchState() {
  if (myAudio.paused) {
    myAudio.play();
    myControl.textContent = "pause";
  } else {
    myAudio.pause();
    myControl.textContent = "play";
  }
}

function checkKey(e) {
  if (e.code === "Space") {
    // space bar
    switchState();
  }
}

myControl.addEventListener("click", () => {
  switchState();
});

window.addEventListener("keypress", checkKey);
```

{{EmbedLiveSample("customizing your media player", "", 200)}}

Weitere Informationen finden Sie unter [Einen eigenen Audioplayer erstellen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics#creating_your_own_custom_audio_player).

## Weitere Tipps zu Audio und Video

### Den Download von Medien stoppen

Die Wiedergabe lässt sich einfach durch Aufrufen der Methode `pause()` des Elements anhalten. Der Browser lädt das Medium jedoch weiter herunter, bis das Medienelement durch die Garbage Collection entfernt wird.

Mit folgendem Verfahren stoppen Sie den Download sofort:

```js
const mediaElement = document.querySelector("#myMediaElementID");
mediaElement.removeAttribute("src");
mediaElement.load();
```

Indem Sie das Attribut `src` des Medienelements entfernen und die Methode `load()` aufrufen, geben Sie die mit dem Video verbundenen Ressourcen frei und stoppen den Download über das Netzwerk. Sie müssen `load()` nach dem Entfernen des Attributs aufrufen, da das bloße Entfernen von `src` den Ladealgorithmus nicht auslöst. Wenn das `<video>`-Element außerdem untergeordnete `<source>`-Elemente enthält, müssen Sie diese ebenfalls vor dem Aufruf von `load()` entfernen.

Beachten Sie, dass der Browser einen leeren String als Wert von `src` wie einen relativen Pfad zu einer Videoquelle behandelt. Dadurch versucht er, eine weitere Datei herunterzuladen, bei der es sich höchstwahrscheinlich nicht um ein gültiges Video handelt.

### In Medien springen

Medienelemente ermöglichen es, die aktuelle Wiedergabeposition an eine bestimmte Stelle des Medieninhalts zu verschieben. Dazu setzen Sie die Eigenschaft `currentTime` des Elements. Weitere Informationen zu den Eigenschaften des Elements finden Sie unter [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement). Setzen Sie den Wert auf die Zeit in Sekunden, ab der die Wiedergabe fortgesetzt werden soll.

Mit der Eigenschaft `seekable` des Elements können Sie ermitteln, welche Bereiche des Mediums derzeit angesprungen werden können. Sie gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das diese Zeitbereiche auflistet.

```js
const mediaElement = document.querySelector("#mediaElementID");
mediaElement.seekable.start(0); // Returns the starting time (in seconds)
mediaElement.seekable.end(0); // Returns the ending time (in seconds)
mediaElement.currentTime = 122; // Seek to 122 seconds
mediaElement.played.end(0); // Returns the number of seconds the browser has played
```

### Einen Wiedergabebereich festlegen

Wenn Sie die URI eines Mediums für ein {{ HTMLElement("audio") }}- oder {{ HTMLElement("video") }}-Element angeben, können Sie optional festlegen, welcher Abschnitt des Mediums wiedergegeben werden soll. Hängen Sie dazu ein Rautezeichen („#“) und die Beschreibung des Medienfragments an.

Ein Zeitbereich wird mit folgender Syntax angegeben:

```plain
#t=[starttime][,endtime]
```

Die Zeit kann als Anzahl von Sekunden (als Fließkommazahl) oder als durch Doppelpunkte getrennte Stunden-, Minuten- und Sekundenangabe angegeben werden, beispielsweise 2:05:01 für 2 Stunden, 5 Minuten und 1 Sekunde.

Einige Beispiele:

- `http://example.com/video.ogv#t=10,20`
  - : Legt fest, dass das Video im Bereich von 10 bis 20 Sekunden abgespielt werden soll.
- `http://example.com/video.ogv#t=,10.5`
  - : Legt fest, dass das Video vom Anfang bis zur Marke von 10,5 Sekunden abgespielt werden soll.
- `http://example.com/video.ogv#t=,02:00:00`
  - : Legt fest, dass das Video vom Anfang bis zur Marke von zwei Stunden abgespielt werden soll.
- `http://example.com/video.ogv#t=60`
  - : Legt fest, dass die Wiedergabe des Videos bei 60 Sekunden beginnen und bis zum Ende fortgesetzt werden soll.

## Fehlerbehandlung

Fehler werden an die untergeordneten {{ HTMLElement("source") }}-Elemente gemeldet, deren Quellen den jeweiligen Fehler verursachen.

So können Sie erkennen, welche Quellen nicht geladen werden konnten. Betrachten Sie den folgenden HTML-Code:

```html
<video>
  <source
    id="src-mp4"
    src="video.mp4"
    type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
  <source
    id="src-3gp"
    src="video.3gp"
    type='video/3gpp; codecs="mp4v.20.8, samr"' />
  <source
    id="src-ogg"
    src="video.ogv"
    type='video/ogv; codecs="theora, vorbis"' />
</video>
```

Da Firefox auf einigen Plattformen MP4 und 3GP wegen der damit verbundenen Patentbeschränkungen nicht unterstützt, empfangen die {{ HTMLElement("source") }}-Elemente mit den IDs `src-mp4` und `src-3gp` jeweils ein `error`-Ereignis, bevor die Ogg-Ressource geladen wird. Die Quellen werden in der Reihenfolge ausprobiert, in der sie aufgeführt sind. Sobald eine Quelle erfolgreich geladen wurde, werden die übrigen nicht mehr ausprobiert.

### Prüfen, ob der Browser die bereitgestellten Formate unterstützt

Informationen zur Unterstützung von Medienformaten finden Sie auf [Can I Use](https://caniuse.com/).

- [Audio MP3 (`type="audio/mpeg"`)](https://caniuse.com/mp3)
- [Audio Ogg (`type="audio/ogg"`)](https://caniuse.com/ogg-vorbis)
- [Video MP4 (`type="video/mp4"`)](https://caniuse.com/mpeg4)
- [Video WebM (`type="video/webm"`)](https://caniuse.com/webm)
- [Video Ogg (`type="video/ogg"`)](https://caniuse.com/ogv)

Sie können auch nach [anderen Medienformaten](/de/docs/Web/Media/Guides/Formats/Containers) suchen.

Wenn ein Medienformat unterstützt werden sollte, sich Ihre Dateien aber nicht abspielen lassen, kommen zwei Ursachen infrage:

#### 1. Der Medienserver liefert für die Datei nicht die richtigen MIME-Typen

Normalerweise ist dies bereits konfiguriert. Gegebenenfalls müssen Sie jedoch Folgendes zur `.htaccess`-Datei Ihres Medienservers hinzufügen:

```plain
# AddType TYPE/SUBTYPE EXTENSION

AddType audio/mpeg mp3
AddType audio/mp4 m4a
AddType audio/ogg ogg
AddType audio/ogg oga

AddType video/mp4 mp4
AddType video/mp4 m4v
AddType video/ogg ogv
AddType video/webm webm
AddType video/webm webmv
```

#### 2. Ihre Dateien wurden falsch kodiert

Möglicherweise wurden Ihre Dateien falsch kodiert. Versuchen Sie, sie mit einem der folgenden Tools erneut zu kodieren, die sich als recht zuverlässig erwiesen haben:

- [Audacity](https://sourceforge.net/projects/audacity/) — Kostenloser Audioeditor und Audiorekorder
- [Miro](https://www.getmiro.com/) — Kostenloser Open-Source-Player für Musik und Video
- [Handbrake](https://handbrake.fr/) — Open-Source-Tool zur Videotranskodierung
- [Firefogg](https://www.firefogg.org/) — Video- und Audiokodierung für Firefox
- [FFmpeg2](https://www.ffmpeg.org/) — Umfassendes Kommandozeilenprogramm zur Kodierung
- [Vid.ly](https://m.vid.ly/) — Videoplayer, Transkodierung und Bereitstellung
- [Internet Archive](https://archive.org/) — Kostenlose Transkodierung und Speicherung

### Erkennen, wenn keine Quelle geladen wurde

Um zu erkennen, dass keines der untergeordneten {{ HTMLElement("source") }}-Elemente geladen werden konnte, prüfen Sie den Wert des Attributs `networkState` des Medienelements. Lautet er `HTMLMediaElement.NETWORK_NO_SOURCE`, konnten alle Quellen nicht geladen werden.

Wenn Sie dann eine weitere Quelle hinzufügen, indem Sie ein neues {{ HTMLElement("source") }}-Element als Kindelement des Medienelements einfügen, versucht Gecko, die angegebene Ressource zu laden.

### Ersatzinhalt anzeigen, wenn keine Quelle dekodiert werden konnte

Eine weitere Möglichkeit, Ersatzinhalt für ein Video anzuzeigen, wenn der aktuelle Browser keine der Quellen dekodieren kann, ist ein Fehlerhandler am letzten Quellenelement. Damit können Sie das Video durch seinen Ersatzinhalt ersetzen:

```html
<video controls>
  <source src="dynamicsearch.mp4" type="video/mp4" />
  <a href="dynamicsearch.mp4">
    <img src="dynamicsearch.jpg" alt="Dynamic app search in Firefox OS" />
  </a>
  <p>Click image to play a video demo of dynamic app search</p>
</video>
```

```js
const v = document.querySelector("video");
const sources = v.querySelectorAll("source");
const lastSource = sources[sources.length - 1];
lastSource.addEventListener("error", (ev) => {
  const d = document.createElement("div");
  d.innerHTML = v.innerHTML;
  v.parentNode.replaceChild(d, v);
});
```

## JavaScript-Bibliotheken für Audio und Video

Es gibt zahlreiche JavaScript-Bibliotheken für Audio und Video. Mit den beliebtesten Bibliotheken können Sie ein einheitliches Player-Design für alle Browser verwenden und eine Alternative für Browser bereitstellen, die Audio und Video nicht nativ unterstützen. Früher wurden dafür inzwischen veraltete Plugins wie Adobe Flash oder Microsoft Silverlight eingesetzt, um in nicht unterstützenden Browsern einen Mediaplayer bereitzustellen. Diese Plugins werden auf modernen Computern nicht mehr unterstützt. Medienbibliotheken können außerdem weitere Funktionen bereitstellen, beispielsweise das Element [`<track>`](/de/docs/Web/HTML/Reference/Elements/track) für Untertitel.

### Nur Audio

- [SoundManager](https://www.schillmania.com/projects/soundmanager2/)
- [AmplitudeJS](https://serversideup.net/open-source/amplitudejs/)
- [HowlerJS](https://howlerjs.com/)

### Nur Video

- [flowplayer](https://flowplayer.com/): Kostenlos, mit einem Wasserzeichen des flowplayer-Logos. Open Source (GPL-lizenziert).
- [SublimeVideo](https://www.sublimevideo.net/): Erfordert eine Registrierung. Formularbasierte Einrichtung mit einem domainspezifischen Link zur auf einem CDN gehosteten Bibliothek.
- [Video.js](https://videojs.org/): Kostenlos und Open Source (Apache-2.0-Lizenz).

### Audio und Video

- [jPlayer](https://jPlayer.org/): Kostenlos und Open Source (MIT-Lizenz).
- [mediaelement.js](https://www.mediaelementjs.com/): Kostenlos und Open Source (MIT-Lizenz).

## Leitfäden

- [Einen browserübergreifenden Videoplayer erstellen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player)
  - : Ein Leitfaden zum Erstellen eines einfachen browserübergreifenden Videoplayers mit dem {{ htmlelement("video") }}-Element.
- [Grundlagen zur Gestaltung eines Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics)
  - : Aufbauend auf dem browserübergreifenden Videoplayer aus dem vorherigen Artikel zeigt dieser Artikel, wie Sie den Player grundlegend und responsiv gestalten.
- [Bildunterschriften und Untertitel zu HTML-Videos hinzufügen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)
  - : Dieser Artikel erklärt, wie Sie mit [Web_Video_Text_Tracks_Format](/de/docs/Web/API/WebVTT_API) und dem {{ htmlelement("track") }}-Element Bildunterschriften und Untertitel zu HTML {{ htmlelement("video") }} hinzufügen.
- [Grundlagen für browserübergreifendes Audio](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
  - : Dieser Artikel bietet einen grundlegenden Leitfaden zur Erstellung eines browserübergreifend funktionierenden HTML-Audioplayers. Er erklärt die zugehörigen Attribute, Eigenschaften und Ereignisse und gibt eine kurze Anleitung für eigene Steuerelemente mithilfe der Media API.
- [Medienpufferung, Springen und Zeitbereiche](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges)
  - : Manchmal ist es hilfreich zu wissen, wie viel von {{ htmlelement("audio") }} oder {{ htmlelement("video") }} bereits heruntergeladen wurde oder ohne Verzögerung abgespielt werden kann. Ein gutes Beispiel ist der Pufferfortschrittsbalken eines Audio- oder Videoplayers. Dieser Artikel beschreibt, wie Sie mit [TimeRanges](/de/docs/Web/API/TimeRanges) und weiteren Funktionen der Media API eine Leiste für den Pufferfortschritt und das Springen im Medium erstellen.
- [HTML playbackRate erklärt](/de/docs/Web/Media/Guides/Audio_and_video_delivery/WebAudio_playbackRate_explained)
  - : Mit der Eigenschaft `playbackRate` können Sie die Wiedergabegeschwindigkeit von Web-Audio oder -Video ändern. Dieser Artikel erklärt die Eigenschaft im Detail.
- [Die Web Audio API verwenden](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
  - : Erklärt die Grundlagen der Web Audio API zum Abrufen, Bearbeiten und Wiedergeben einer Audioquelle.

### Streaming-Medien

- [Livestreaming von Audio und Video im Web](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video)
  - : Livestreaming wird häufig eingesetzt, um Ereignisse wie Sportveranstaltungen und Konzerte sowie Fernseh- und Radioprogramme live zu übertragen. Beim Livestreaming, oft kurz „Streaming“ genannt, werden Medien live an Computer und andere Geräte übertragen. Das Thema ist noch relativ neu und aufgrund vieler Einflussfaktoren recht komplex. Dieser Artikel führt Sie in das Thema ein und zeigt Ihnen, wie Sie beginnen können.
- [Adaptive Streaming-Medienquellen einrichten](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources)
  - : Angenommen, Sie möchten auf einem Server eine adaptive Streaming-Medienquelle einrichten, die in einem HTML-Medienelement genutzt werden soll. Wie gehen Sie vor? Dieser Artikel erklärt das anhand von zwei der gängigsten Formate: MPEG-DASH und HLS (HTTP Live Streaming).
- [Adaptives DASH-Streaming für HTML5-Video](/de/docs/Web/API/Media_Source_Extensions_API/DASH_Adaptive_Streaming)
  - : Beschreibt im Detail, wie Sie adaptives Streaming mit DASH und WebM einrichten.

### Fortgeschrittene Themen

- [Browserübergreifende Unterstützung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Best_practices#cross_browser_legacy_support)
  - : Ein Leitfaden zum Schreiben von browserübergreifend funktionierendem Code für die Web Audio API.
- [Einfache Audioaufnahme mit der MediaRecorder API](https://hacks.mozilla.org/2014/06/easy-audio-capture-with-the-mediarecorder-api/)
  - : Erklärt die Grundlagen der MediaStream Recording API, mit der Sie einen Medienstream direkt aufzeichnen können.

## Referenz

- [Das video-Element](/de/docs/Web/HTML/Reference/Elements/video)
- [HTMLVideoElement API](/de/docs/Web/API/HTMLVideoElement)
- [MediaSource API](/de/docs/Web/API/MediaSource)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
- [getUserMedia](/de/docs/Web/API/MediaDevices/getUserMedia)
- [Ereignisindex: Medien](/de/docs/Web/API/Document_Object_Model/Events#media)
