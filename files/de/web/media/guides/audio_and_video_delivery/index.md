---
title: Bereitstellung von Audio und Video
slug: Web/Media/Guides/Audio_and_video_delivery
l10n:
  sourceCommit: e976b4bf6b9e0c68b4321904560df47804d8cc48
---

Audio und Video lassen sich im Web auf verschiedene Weise bereitstellen – von „statischen“ Mediendateien bis hin zu adaptiven Live-Streams. Dieser Artikel dient als Ausgangspunkt, um die verschiedenen Verfahren zur Bereitstellung webbasierter Medien und ihre Kompatibilität mit gängigen Browsern kennenzulernen.

## HTML-Elemente für Audio und Video

Ob es sich um aufgezeichnete Audiodateien oder Live-Streams handelt: Das grundlegende Verfahren, um sie über die Browserelemente {{ htmlelement("audio")}} und {{ htmlelement("video")}} verfügbar zu machen, ist weitgehend dasselbe. Um alle Browser zu unterstützen, müssen derzeit in der Regel zwei Formate angegeben werden. Da Firefox und Opera MP3 und MP4 zunehmend unterstützen, ändert sich dies jedoch schnell. Informationen zur Kompatibilität finden Sie im [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats).

Der typische Ablauf zur Bereitstellung von Video und Audio sieht etwa so aus:

1. Ermitteln Sie per Feature-Erkennung, welche Formate der Browser unterstützt. Wie oben erwähnt, stehen dabei meist zwei Formate zur Auswahl.
2. Wenn der Browser keines der bereitgestellten Formate nativ abspielen kann, zeigen Sie entweder ein Standbild an oder verwenden Sie eine alternative Technologie zur Videowiedergabe.
3. Legen Sie fest, wie Sie das Medium wiedergeben oder einbinden möchten – beispielsweise mit einem {{ htmlelement("video") }}-Element oder mit `document.createElement('video')`.
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

Der obige Code erstellt einen Audioplayer, der für eine flüssige Wiedergabe versucht, möglichst viele Audiodaten vorab zu laden.

> [!NOTE]
> Das Attribut `preload` wird von einigen mobilen Browsern möglicherweise ignoriert.

Weitere Informationen finden Sie unter [Browserübergreifende Audiogrundlagen (HTML-Audio im Detail)](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics#html_audio_in_detail).

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

Der obige Code erstellt einen Videoplayer mit einer Größe von 640 × 480 Pixeln. Bis zur Wiedergabe des Videos zeigt er ein Posterbild an. Das Video soll automatisch starten, ist aber standardmäßig stummgeschaltet.

> [!NOTE]
> Das Attribut `autoplay` wird von einigen mobilen Browsern möglicherweise ignoriert. Außerdem kann die automatische Wiedergabe bei unsachgemäßer Verwendung umstritten sein. Lesen Sie nachdrücklich empfohlen den [Leitfaden zur automatischen Wiedergabe für Medien und Web-Audio-APIs](/de/docs/Web/Media/Guides/Autoplay), um zu erfahren, wie Sie Autoplay sinnvoll einsetzen.

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

Wir legen die Audioquelle entsprechend dem vom Browser unterstützten Audiodateityp fest, setzen die Wiedergabeposition auf fünf Sekunden und versuchen, die Datei abzuspielen.

> [!NOTE]
> Die Wiedergabe wird von den meisten Browsern ignoriert, sofern sie nicht durch ein vom Benutzer ausgelöstes Ereignis gestartet wird.

Sie können einem {{ htmlelement("audio") }}-Element auch eine Base64-codierte WAV-Datei zuweisen und so Audio zur Laufzeit erzeugen:

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

Wir legen die Videoquelle entsprechend dem vom Browser unterstützten Videodateityp fest und setzen anschließend die Breite und Höhe des Videos.

## Web Audio API

In diesem Beispiel rufen wir über die [`fetch()`](/de/docs/Web/API/Window/fetch)-API eine MP3-Datei ab, laden sie in eine Quelle und spielen sie ab.

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

Grundlegende Informationen zur Web Audio API finden Sie unter [Die Web Audio API verwenden](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API).

## getUserMedia / Stream API

Mit `getUserMedia` und der Stream API können Sie auch einen Live-Stream von einer Webcam und/oder einem Mikrofon abrufen. Dies ist Teil der umfassenderen Technologie WebRTC (Web Real-Time Communications) und mit aktuellen Versionen von Chrome, Firefox und Opera kompatibel.

Um den Stream Ihrer Webcam abzurufen, richten Sie zunächst ein {{htmlelement("video")}}-Element ein:

```html
<video id="webcam" width="480" height="360"></video>
```

Verbinden Sie anschließend, sofern unterstützt, die Webcam-Quelle mit dem Videoelement:

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

Neue Standards werden eingeführt, mit denen Ihr Browser Medien über `getUserMedia` von Ihrem Mikrofon oder Ihrer Kamera erfassen und mithilfe der neuen MediaStream Recording API unmittelbar aufzeichnen kann. Dazu übergeben Sie den von `getUserMedia` empfangenen Stream an ein `MediaRecorder`-Objekt und verwenden die daraus resultierende Ausgabe als Audio- oder Videoquelle\*.

Das grundlegende Verfahren ist nachfolgend dargestellt:

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

[Media Source Extensions](https://w3c.github.io/media-source/) ist ein Arbeitsentwurf des W3C, der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) erweitern soll, damit JavaScript Medienstreams zur Wiedergabe erzeugen kann. Dadurch werden verschiedene Anwendungsfälle möglich, etwa adaptives Streaming und die zeitversetzte Wiedergabe von Live-Streams.

### Encrypted Media Extensions (EME)

[Encrypted Media Extensions](https://w3c.github.io/encrypted-media/) ist ein Vorschlag des W3C zur Erweiterung von `HTMLMediaElement` um APIs zur Steuerung der Wiedergabe geschützter Inhalte.

Die API unterstützt Anwendungsfälle von der einfachen Entschlüsselung mit ungeschützten Schlüsseln bis hin zu hochwertigen Videoinhalten, sofern der User Agent entsprechend implementiert ist. Der Austausch von Lizenzen und Schlüsseln wird von der Anwendung gesteuert. Dadurch lassen sich robuste Wiedergabeanwendungen entwickeln, die verschiedene Technologien zur Entschlüsselung und zum Schutz von Inhalten unterstützen.

Ein wichtiger Einsatzbereich von EME ist die Implementierung von DRM ([Digital Rights Management](https://en.wikipedia.org/wiki/Digital_rights_management)) in Browsern. DRM soll verhindern, dass webbasierte Inhalte – insbesondere Videos – kopiert werden.

### Adaptives Streaming

Neue Formate und Protokolle werden eingeführt, um adaptives Streaming zu ermöglichen. Bei adaptiv gestreamten Medien können sich die Bandbreite und üblicherweise auch die Qualität des Streams in Echtzeit an die verfügbare Bandbreite des Benutzers anpassen. Adaptives Streaming wird häufig mit Live-Streaming kombiniert, bei dem eine reibungslose Audio- oder Videoübertragung besonders wichtig ist.

Die wichtigsten Formate für adaptives Streaming sind [HLS](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#hls) und [MPEG-DASH](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#mpeg-dash). MSE wurde mit Blick auf DASH entwickelt. MSE definiert Byte-Streams gemäß [ISOBMFF](https://dvcs.w3.org/hg/html-media/raw-file/tip/media-source/isobmff-byte-stream-format.html) und [M2TS](https://en.wikipedia.org/wiki/M2ts). Beide werden von DASH unterstützt, M2TS außerdem von HLS. Wenn Ihnen Standards und Flexibilität wichtig sind oder Sie die meisten modernen Browser unterstützen möchten, ist DASH im Allgemeinen wahrscheinlich die bessere Wahl.

> [!NOTE]
> Safari unterstützt DASH derzeit nicht. dash.js wird jedoch mit neueren Safari-Versionen funktionieren, deren Veröffentlichung zusammen mit OS X Yosemite geplant ist.

DASH bietet außerdem verschiedene Profile, darunter onDemand-Profile, bei denen Mediendateien nicht vorverarbeitet und aufgeteilt werden müssen. Darüber hinaus gibt es mehrere cloudbasierte Dienste, die Ihre Medien sowohl in HLS als auch in DASH konvertieren.

Weitere Informationen finden Sie unter [Live-Streaming von Audio und Video im Web](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video).

## Ihren Mediaplayer anpassen

Vielleicht möchten Sie, dass Ihr Audio- oder Videoplayer in allen Browsern einheitlich aussieht, oder Sie möchten ihn an Ihre Website anpassen. Üblicherweise lassen Sie dazu das Attribut `controls` weg, sodass die standardmäßigen Browser-Steuerelemente nicht angezeigt werden. Anschließend erstellen Sie eigene Steuerelemente mit HTML und CSS und verbinden diese per JavaScript mit der Audio-/Video-API.

Bei Bedarf können Sie auch Funktionen ergänzen, die Standardplayer derzeit nicht bieten, etwa eine einstellbare Wiedergabegeschwindigkeit, den Wechsel zwischen Streams unterschiedlicher Qualität oder eine Anzeige des Audiospektrums. Sie können außerdem festlegen, wie sich Ihr Player an verschiedene Bildschirmgrößen anpasst – beispielsweise indem Sie die Fortschrittsanzeige unter bestimmten Bedingungen ausblenden.

Sie können Klick-, Touch- und/oder Tastaturereignisse erfassen, um Aktionen wie Wiedergabe, Pause und das Ändern der Wiedergabeposition auszulösen. Denken Sie für eine komfortable und barrierefreie Bedienung auch an die Tastatursteuerung.

Ein kurzes Beispiel: Richten Sie zunächst Audio und eigene Steuerelemente in HTML ein:

```html
<audio id="my-audio" src="/shared-assets/audio/guitar.mp3"></audio>
<button id="my-control">play</button>
```

Fügen Sie anschließend etwas JavaScript hinzu, um Ereignisse für Wiedergabe und Pause zu erkennen:

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

### Das Herunterladen von Medien stoppen

Die Wiedergabe eines Mediums lässt sich einfach durch Aufrufen der Methode `pause()` des Elements anhalten. Der Browser lädt das Medium jedoch weiter herunter, bis das Medienelement durch die Garbage Collection entfernt wird.

Mit folgendem Verfahren stoppen Sie den Download sofort:

```js
const mediaElement = document.querySelector("#myMediaElementID");
mediaElement.removeAttribute("src");
mediaElement.load();
```

Wenn Sie das Attribut `src` des Medienelements entfernen und die Methode `load()` aufrufen, werden die mit dem Video verbundenen Ressourcen freigegeben und der Netzwerkdownload gestoppt. Sie müssen `load()` nach dem Entfernen des Attributs aufrufen, da das bloße Entfernen von `src` den Ladealgorithmus nicht auslöst. Falls das `<video>`-Element auch untergeordnete `<source>`-Elemente enthält, sollten Sie diese ebenfalls entfernen, bevor Sie `load()` aufrufen.

Beachten Sie, dass der Browser einen leeren String als Wert für `src` so behandelt, als hätten Sie einen relativen Pfad als Videoquelle angegeben. Dadurch versucht er, eine weitere Ressource herunterzuladen, bei der es sich wahrscheinlich nicht um ein gültiges Video handelt.

### In Medien springen

Medienelemente unterstützen das Verschieben der aktuellen Wiedergabeposition an bestimmte Stellen im Inhalt. Dazu setzen Sie die Eigenschaft `currentTime` des Elements. Weitere Informationen zu den Eigenschaften des Elements finden Sie unter [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement). Geben Sie als Wert den Zeitpunkt in Sekunden an, an dem die Wiedergabe fortgesetzt werden soll.

Mit der Eigenschaft `seekable` des Elements können Sie ermitteln, zu welchen Zeitbereichen des Mediums derzeit gesprungen werden kann. Sie gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das diese Zeitbereiche auflistet.

```js
const mediaElement = document.querySelector("#mediaElementID");
mediaElement.seekable.start(0); // Returns the starting time (in seconds)
mediaElement.seekable.end(0); // Returns the ending time (in seconds)
mediaElement.currentTime = 122; // Seek to 122 seconds
mediaElement.played.end(0); // Returns the number of seconds the browser has played
```

### Wiedergabebereich festlegen

Wenn Sie den URI eines Mediums für ein {{ HTMLElement("audio") }}- oder {{ HTMLElement("video") }}-Element angeben, können Sie optional festlegen, welcher Ausschnitt des Mediums abgespielt werden soll. Hängen Sie dazu ein Doppelkreuz („#“) und die Beschreibung des Medienfragments an.

Ein Zeitbereich wird mit folgender Syntax angegeben:

```plain
#t=[starttime][,endtime]
```

Die Zeit kann als Anzahl von Sekunden (als Fließkommazahl) oder als durch Doppelpunkte getrennte Angabe von Stunden, Minuten und Sekunden angegeben werden, beispielsweise 2:05:01 für 2 Stunden, 5 Minuten und 1 Sekunde.

Einige Beispiele:

- `http://example.com/video.ogv#t=10,20`
  - : Gibt an, dass das Video von Sekunde 10 bis Sekunde 20 abgespielt werden soll.
- `http://example.com/video.ogv#t=,10.5`
  - : Gibt an, dass das Video vom Anfang bis Sekunde 10,5 abgespielt werden soll.
- `http://example.com/video.ogv#t=,02:00:00`
  - : Gibt an, dass das Video vom Anfang bis zur Zwei-Stunden-Marke abgespielt werden soll.
- `http://example.com/video.ogv#t=60`
  - : Gibt an, dass die Wiedergabe bei Sekunde 60 beginnen und bis zum Ende des Videos fortgesetzt werden soll.

## Fehlerbehandlung

Fehler werden an die untergeordneten {{ HTMLElement("source") }}-Elemente gemeldet, deren Quellen den jeweiligen Fehler verursacht haben.

So können Sie erkennen, welche Quellen nicht geladen werden konnten. Betrachten Sie folgendes HTML:

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

Da Firefox aufgrund von Patentbeschränkungen auf manchen Plattformen MP4 und 3GP nicht unterstützt, empfangen die {{ HTMLElement("source") }}-Elemente mit den IDs `src-mp4` und `src-3gp` jeweils ein `error`-Ereignis, bevor die Ogg-Ressource geladen wird. Die Quellen werden in der Reihenfolge ausprobiert, in der sie aufgeführt sind. Sobald eine Quelle erfolgreich geladen wurde, werden die übrigen nicht mehr ausprobiert.

### Prüfen, ob der Browser die angegebenen Formate unterstützt

Informationen zur Unterstützung von Medienformaten finden Sie auf [Can I Use](https://caniuse.com/).

- [Audio MP3 (`type="audio/mpeg"`)](https://caniuse.com/mp3)
- [Audio Ogg (`type="audio/ogg"`)](https://caniuse.com/ogg-vorbis)
- [Video MP4 (`type="video/mp4"`)](https://caniuse.com/mpeg4)
- [Video WebM (`type="video/webm"`)](https://caniuse.com/webm)
- [Video Ogg (`type="video/ogg"`)](https://caniuse.com/ogv)

Sie können auch nach [weiteren Medienformaten](/de/docs/Web/Media/Guides/Formats/Containers) suchen.

Wenn ein Medienformat eigentlich unterstützt werden sollte, Ihre Dateien aber nicht abgespielt werden, kommen zwei Ursachen infrage:

#### 1. Der Medienserver liefert die Dateien nicht mit den richtigen MIME-Typen aus

Obwohl dies normalerweise bereits unterstützt wird, müssen Sie Ihrer `.htaccess`-Datei auf dem Medienserver möglicherweise Folgendes hinzufügen:

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

#### 2. Ihre Dateien wurden falsch codiert

Möglicherweise wurden Ihre Dateien falsch codiert. Versuchen Sie, sie mit einem der folgenden Tools zu codieren, die sich als recht zuverlässig erwiesen haben:

- [Audacity](https://sourceforge.net/projects/audacity/) — kostenloser Audioeditor und -recorder
- [Handbrake](https://handbrake.fr/) — Open-Source-Tool zur Videotranskodierung
- [Firefogg](https://www.firefogg.org/) — Video- und Audiocodierung für Firefox
- [FFmpeg2](https://www.ffmpeg.org/) — umfangreicher Encoder für die Kommandozeile
- [Vid.ly](https://m.vid.ly/) — Videoplayer, Transkodierung und Bereitstellung
- [Internet Archive](https://archive.org/) — kostenlose Transkodierung und Speicherung

### Erkennen, wenn keine Quelle geladen wurde

Um festzustellen, ob alle untergeordneten {{ HTMLElement("source") }}-Elemente nicht geladen werden konnten, prüfen Sie den Wert des Attributs `networkState` des Medienelements. Ist dieser `HTMLMediaElement.NETWORK_NO_SOURCE`, konnten keine der Quellen geladen werden.

Wenn Sie zu diesem Zeitpunkt ein weiteres {{ HTMLElement("source") }}-Element als untergeordnetes Element des Medienelements hinzufügen, versucht Gecko, die angegebene Ressource zu laden.

### Ersatzinhalt anzeigen, wenn keine Quelle decodiert werden konnte

Eine weitere Möglichkeit, den Ersatzinhalt eines Videos anzuzeigen, wenn der aktuelle Browser keine der Quellen decodieren kann, besteht darin, dem letzten Quellelement einen Fehler-Handler hinzuzufügen. Anschließend können Sie das Video durch seinen Ersatzinhalt ersetzen:

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

Es gibt zahlreiche JavaScript-Bibliotheken für Audio und Video. Die beliebtesten ermöglichen ein browserübergreifend einheitliches Player-Design und bieten eine Ausweichlösung für Browser, die Audio und Video nicht nativ unterstützen. Früher kamen dafür inzwischen veraltete Plugins wie Adobe Flash oder Microsoft Silverlight zum Einsatz; diese werden auf modernen Computern jedoch nicht mehr unterstützt. Medienbibliotheken können auch weitere Funktionen bereitstellen, etwa Untertitel mithilfe des Elements [`<track>`](/de/docs/Web/HTML/Reference/Elements/track).

### Nur Audio

- [SoundManager](https://www.schillmania.com/projects/soundmanager2/)
- [AmplitudeJS](https://serversideup.net/open-source/amplitudejs/)
- [HowlerJS](https://howlerjs.com/)

### Nur Video

- [flowplayer](https://flowplayer.com/): Kostenlos, mit einem Wasserzeichen des flowplayer-Logos. Open Source (GPL-Lizenz).
- [SublimeVideo](https://www.sublimevideo.net/): Erfordert eine Registrierung. Formularbasierte Einrichtung mit einem domainspezifischen Link zur über ein CDN bereitgestellten Bibliothek.
- [Video.js](https://videojs.org/): Kostenlos und Open Source (Apache-2-Lizenz).

### Audio und Video

- [jPlayer](https://jPlayer.org/): Kostenlos und Open Source (MIT-Lizenz).
- [mediaelement.js](https://www.mediaelementjs.com/): Kostenlos und Open Source (MIT-Lizenz).

## Leitfäden

- [Einen browserübergreifenden Videoplayer erstellen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player)
  - : Ein Leitfaden zum Erstellen eines einfachen browserübergreifenden Videoplayers mit dem {{ htmlelement("video") }}-Element.
- [Grundlagen zur Gestaltung von Videoplayern](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics)
  - : Nachdem im vorherigen Artikel ein browserübergreifender Videoplayer eingerichtet wurde, behandelt dieser Artikel dessen grundlegende, responsive Gestaltung.
- [Bildunterschriften und Untertitel zu HTML-Videos hinzufügen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)
  - : Dieser Artikel erklärt, wie Sie HTML {{ htmlelement("video") }} mithilfe von [Web_Video_Text_Tracks_Format](/de/docs/Web/API/WebVTT_API) und dem {{ htmlelement("track") }}-Element Bildunterschriften und Untertitel hinzufügen.
- [Browserübergreifende Audiogrundlagen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
  - : Ein grundlegender Leitfaden zum Erstellen eines browserübergreifend funktionierenden HTML-Audioplayers. Er erläutert die zugehörigen Attribute, Eigenschaften und Ereignisse sowie kurz die Erstellung eigener Steuerelemente mit der Media API.
- [Medienpufferung, Positionswechsel und Zeitbereiche](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges)
  - : Manchmal ist es hilfreich zu wissen, wie viel von {{ htmlelement("audio") }} oder {{ htmlelement("video") }} bereits heruntergeladen wurde oder ohne Verzögerung abgespielt werden kann – etwa für die Anzeige des Pufferfortschritts eines Audio- oder Videoplayers. Dieser Artikel beschreibt, wie Sie mit [TimeRanges](/de/docs/Web/API/TimeRanges) und weiteren Funktionen der Media API eine Leiste für Pufferfortschritt und Positionswechsel erstellen.
- [HTML playbackRate erklärt](/de/docs/Web/Media/Guides/Audio_and_video_delivery/WebAudio_playbackRate_explained)
  - : Mit der Eigenschaft `playbackRate` können Sie die Wiedergabegeschwindigkeit von Web-Audio oder -Video ändern. Dieser Artikel erklärt die Eigenschaft im Detail.
- [Die Web Audio API verwenden](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
  - : Erläutert die Grundlagen der Web Audio API zum Abrufen, Bearbeiten und Wiedergeben einer Audioquelle.

### Streaming-Medien

- [Live-Streaming von Audio und Video im Web](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video)
  - : Live-Streaming wird häufig eingesetzt, um Ereignisse wie Sportveranstaltungen und Konzerte sowie Fernseh- und Radiosendungen live zu übertragen. Dabei werden Medien in Echtzeit an Computer und andere Geräte übertragen. Das Thema ist noch relativ neu und aufgrund vieler Einflussfaktoren recht komplex. Dieser Artikel führt Sie in das Thema ein und zeigt Ihnen, wie Sie beginnen können.
- [Adaptive Streaming-Medienquellen einrichten](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources)
  - : Angenommen, Sie möchten auf einem Server eine adaptive Streaming-Medienquelle einrichten, die in einem HTML-Medienelement verwendet werden soll. Wie gehen Sie dabei vor? Dieser Artikel erklärt es anhand zweier verbreiteter Formate: MPEG-DASH und HLS (HTTP Live Streaming).
- [Adaptives DASH-Streaming für HTML-5-Videos](/de/docs/Web/API/Media_Source_Extensions_API/DASH_Adaptive_Streaming)
  - : Erläutert im Detail, wie Sie adaptives Streaming mit DASH und WebM einrichten.

### Fortgeschrittene Themen

- [Browserübergreifende Unterstützung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Best_practices#cross_browser_legacy_support)
  - : Ein Leitfaden zum Schreiben von browserübergreifendem Code für die Web Audio API.
- [Einfache Audioaufnahme mit der MediaRecorder API](https://hacks.mozilla.org/2014/06/easy-audio-capture-with-the-mediarecorder-api/)
  - : Erläutert die Grundlagen der MediaStream Recording API, mit der Sie einen Medienstream direkt aufzeichnen können.

## Referenz

- [Das video-Element](/de/docs/Web/HTML/Reference/Elements/video)
- [HTMLVideoElement API](/de/docs/Web/API/HTMLVideoElement)
- [MediaSource API](/de/docs/Web/API/MediaSource)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
- [getUserMedia](/de/docs/Web/API/MediaDevices/getUserMedia)
- [Ereignisindex: Medien](/de/docs/Web/API/Document_Object_Model/Events#media)
