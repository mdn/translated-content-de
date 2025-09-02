---
title: Audio- und Videoübermittlung
slug: Web/Media/Guides/Audio_and_video_delivery
l10n:
  sourceCommit: daad50a992d56b23573fdd50517c75df176747cf
---

Wir können Audio und Video auf verschiedene Weise im Web bereitstellen, angefangen von 'statischen' Mediendateien bis hin zu adaptiven Live-Streams. Dieser Artikel dient als Ausgangspunkt, um die verschiedenen Übermittlungsmechanismen webbasierter Medien und deren Kompatibilität mit beliebten Browsern zu erkunden.

## Audio- und Video-HTML-Elemente

Ob wir es mit vorab aufgezeichneten Audiodateien oder Live-Streams zu tun haben, der Mechanismus, um sie über die {{ htmlelement("audio")}} und {{ htmlelement("video")}} Elemente des Browsers verfügbar zu machen, bleibt weitgehend gleich. Derzeit müssen wir zur Unterstützung aller Browser zwei Formate angeben. Allerdings ändert sich dies schnell, da die Formate MP3 und MP4 in Firefox und Opera übernommen werden. Kompatibilitätsinformationen finden Sie im [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats).

Um Video und Audio bereitzustellen, sieht der allgemeine Workflow normalerweise so aus:

1. Überprüfen Sie, welches Format der Browser per Feature-Erkennung unterstützt (meistens zwei Auswahlmöglichkeiten, wie oben erwähnt).
2. Wenn der Browser keines der bereitgestellten Formate von Haus aus unterstützt, präsentieren Sie entweder ein Standbild oder verwenden Sie eine Fallback-Technologie, um das Video darzustellen.
3. Entscheiden Sie, wie Sie das Medium abspielen/instanziieren möchten (z.B. ein {{ htmlelement("video") }}-Element oder vielleicht `document.createElement('video')`).
4. Stellen Sie die Mediendatei dem Player zur Verfügung.

### HTML Audio

```html
<audio controls preload="auto">
  <source src="audio-file.mp3" type="audio/mpeg" />

  <!-- fallback for browsers that don't support mp3 -->
  <source src="audio-file.ogg" type="audio/ogg" />

  <!-- fallback for browsers that don't support audio element -->
  <a href="audio-file.mp3">download audio</a>
</audio>
```

Der obige Code erstellt einen Audio-Player, der versucht, so viel Audio wie möglich vorab zu laden, um eine reibungslose Wiedergabe zu gewährleisten.

> [!NOTE]
> Das `preload`-Attribut kann von einigen mobilen Browsern ignoriert werden.

Weitere Informationen finden Sie unter [Cross-Browser Audio Basics (HTML Audio im Detail)](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics#html_audio_in_detail)

### HTML Video

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

Der obige Code erstellt einen Videoplayer mit den Abmessungen 640x480 Pixel, der ein Posterbild anzeigt, bis das Video abgespielt wird. Wir weisen das Video an, automatisch abzuspielen, jedoch standardmäßig stummgeschaltet zu sein.

> [!NOTE]
> Das `autoplay`-Attribut kann von einigen mobilen Browsern ignoriert werden. Außerdem kann die Autoplay-Funktion umstritten sein, wenn sie missbraucht wird. Es wird dringend empfohlen, dass Sie den [Leitfaden zum automatischen Abspielen für Medien und Web-Audio-APIs](/de/docs/Web/Media/Guides/Autoplay) lesen, um zu lernen, wie Sie Autoplay sinnvoll einsetzen.

Weitere Informationen finden Sie unter [`<video>`-Element](/de/docs/Web/HTML/Reference/Elements/video) und [Erstellen eines plattformübergreifenden Video-Players](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).

### JavaScript Audio

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

Wir setzen die Quelle des Audios entsprechend dem vom Browser unterstützten Audio-Dateityp und setzen dann den Abspielkopf 5 Sekunden ein und versuchen, ihn abzuspielen.

> [!NOTE]
> Die Wiedergabe wird von den meisten Browsern ignoriert, es sei denn, sie wird durch ein vom Benutzer initiiertes Ereignis ausgelöst.

Es ist auch möglich, einem {{ htmlelement("audio") }}-Element eine base64-codierte WAV-Datei zu übergeben, um Audio dynamisch zu generieren:

```html
<audio id="player" src="data:audio/x-wav;base64,UklGRvC…"></audio>
```

[Speak.js](https://github.com/kripken/speak.js/) verwendet diese Technik.

### JavaScript Video

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

Wir setzen die Quelle des Videos entsprechend dem vom Browser unterstützten Video-Dateityp und setzen dann die Breite und Höhe des Videos.

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

Sie können [das vollständige Beispiel live ausführen](https://mdn.github.io/webaudio-examples/decode-audio-data/promise/) oder [den Quelltext anzeigen](https://github.com/mdn/webaudio-examples/tree/main/decode-audio-data/promise).

Erfahren Sie mehr über die Grundlagen der Web Audio API in [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API).

## getUserMedia / Stream-API

Es ist auch möglich, mit `getUserMedia` und der Stream-API einen Live-Stream von einer Webcam und/oder einem Mikrofon zu erhalten. Dies ist Teil einer breiteren Technologie namens WebRTC (Web Real-Time Communications) und ist mit den neuesten Versionen von Chrome, Firefox und Opera kompatibel.

Um den Stream von Ihrer Webcam zu erfassen, richten Sie zunächst ein {{htmlelement("video")}}-Element ein:

```html
<video id="webcam" width="480" height="360"></video>
```

Wenn es unterstützt wird, verbinden Sie die Webcam-Quelle mit dem Video-Element:

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

## MediaStream-Aufzeichnung

Neue Standards werden eingeführt, um Ihrem Browser zu ermöglichen, Medien von Ihrem Mikrofon oder Ihrer Kamera mit `getUserMedia` zu erfassen und sofort mit der neuen MediaStream-Aufzeichnungs-API aufzuzeichnen. Sie erhalten den Stream von `getUserMedia`, übergeben ihn an ein `MediaRecorder`-Objekt, nehmen das resultierende Output und speisen es in Ihre Audio- oder Videoquelle ein\*.

Der Hauptmechanismus wird unten skizziert:

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

Weitere Details finden Sie in der [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API).

## Media Source Extensions (MSE)

[Media Source Extensions](https://w3c.github.io/media-source/) ist ein Entwurf der W3C, der plant, [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) zu erweitern, um es JavaScript zu ermöglichen, Mediastreams zur Wiedergabe zu generieren. JavaScript in die Lage zu versetzen, Streams zu generieren, ermöglicht eine Vielzahl von Anwendungsfällen, wie z.B. adaptives Streaming und Zeitschieben von Live-Streams.

### Verschlüsselte Media Extensions (EME)

[Verschlüsselte Media Extensions](https://w3c.github.io/encrypted-media/) ist ein W3C-Vorschlag zur Erweiterung von `HTMLMediaElement`, um APIs bereitzustellen, die die Wiedergabe von geschütztem Inhalt steuern.

Die API unterstützt Anwendungsfälle, die von der einfachen Clear Key-Dekodierung bis hin zu hochpreisigem Video reichen (vorausgesetzt, eine entsprechende Benutzeragenten-Implementierung ist gegeben). Der Lizenz-/Schlüsselaustausch wird durch die Anwendung gesteuert, was die Entwicklung robuster Wiedergabeanwendungen ermöglicht, die eine Reihe von Technologien zur Inhaltentschlüsselung und Schutz unterstützen.

Eine der Hauptverwendungen von EME besteht darin, Browsern zu ermöglichen, DRM ([Digital Rights Management](https://en.wikipedia.org/wiki/Digital_rights_management)) zu implementieren, was hilft, das Kopieren webbasierter Inhalte (insbesondere Videos) zu verhindern.

### Adaptives Streaming

Neue Formate und Protokolle werden eingeführt, um adaptives Streaming zu ermöglichen. Adaptives Streaming von Medien bedeutet, dass die Bandbreite und in der Regel auch die Qualität des Streams in Echtzeit in Reaktion auf die verfügbare Bandbreite des Benutzers geändert werden kann. Adaptives Streaming wird oft im Zusammenhang mit Live-Streaming verwendet, bei dem die reibungslose Lieferung von Audio oder Video von größter Bedeutung ist.

Die Hauptformate, die für adaptives Streaming verwendet werden, sind [HLS](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#hls) und [MPEG-DASH](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#mpeg-dash). MSE wurde im Hinblick auf DASH entworfen. MSE definiert Byte-Streams nach [ISOBMFF](https://dvcs.w3.org/hg/html-media/raw-file/tip/media-source/isobmff-byte-stream-format.html) und [M2TS](https://en.wikipedia.org/wiki/M2ts) (beide in DASH unterstützt, letztere in HLS unterstützt). Im Allgemeinen sind Sie wahrscheinlich mit DASH besser bedient, wenn Sie an Standards interessiert sind, nach Flexibilität suchen oder die meisten modernen Browser unterstützen möchten.

> [!NOTE]
> Derzeit unterstützt Safari DASH nicht, obwohl dash.js in neueren Versionen von Safari funktionieren wird, die mit OSX Yosemite veröffentlicht werden.

DASH bietet auch eine Reihe von Profilen, einschließlich On-Demand-Profile, die keine Vorverarbeitung und Aufteilung von Mediendateien erfordern. Es gibt auch einige Cloud-basierte Dienste, die Ihre Medien sowohl in HLS als auch in DASH konvertieren.

Weitere Informationen finden Sie unter [Live-Streaming von Web-Audio und -Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video).

## Anpassen Ihres Media Players

Sie möchten möglicherweise, dass Ihr Audio- oder Video-Player in allen Browsern ein konsistentes Erscheinungsbild hat oder ihn einfach an Ihr Website-Design anpassen. Die allgemeine Technik, dies zu erreichen, besteht darin, das `controls`-Attribut wegzulassen, sodass die Standard-Browsersteuerungen nicht angezeigt werden, eigene Steuerungen mit HTML und CSS zu erstellen und dann JavaScript zu verwenden, um Ihre Steuerungen mit der Audio-/Vide-API zu verbinden.

Wenn Sie etwas Zusätzliches benötigen, ist es möglich, Funktionen hinzuzufügen, die derzeit in den Standard-Playern nicht vorhanden sind, wie z.B. Wiedergabegeschwindigkeit, Qualitätsumschaltung des Streams oder sogar Audio-Spektren. Sie können auch wählen, wie Sie Ihren Player responsive gestalten möchten — z.B. könnten Sie die Fortschrittsleiste unter bestimmten Bedingungen entfernen.

Es ist oft wichtig, an die Tastatursteuerung zu denken, um den Benutzerkomfort und die Barrierefreiheit zu gewährleisten. Ein schnelles Beispiel — richten Sie zunächst Ihre Audio- und benutzerdefinierten Steuerungen in HTML ein:

```html
<audio id="my-audio" src="/shared-assets/audio/guitar.mp3"></audio>
<button id="my-control">play</button>
```

Fügen Sie ein wenig JavaScript hinzu, um Ereignisse zum Abspielen und Anhalten des Audios zu erfassen:

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

myControl.addEventListener(
  "click",
  () => {
    switchState();
  },
  false,
);

window.addEventListener("keypress", checkKey, false);
```

{{EmbedLiveSample("customizing your media player", "", 200)}}

Weitere Informationen finden Sie unter [Erstellen Ihres eigenen benutzerdefinierten Audio-Players](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics#creating_your_own_custom_audio_player).

## Weitere Tipps für Audio/Video

### Stopping the download of media

Während das Anhalten der Wiedergabe von Medien so einfach ist wie das Aufrufen der Methode `pause()` des Elements, lädt der Browser die Medien weiterhin herunter, bis das Medien-Element durch Garbage Collection entsorgt wird.

Hier ein Trick, um den Download sofort zu stoppen:

```js
const mediaElement = document.querySelector("#myMediaElementID");
mediaElement.removeAttribute("src");
mediaElement.load();
```

Durch das Entfernen des `src`-Attributs des Medien-Elements und das Aufrufen der `load()`-Methode geben Sie die mit dem Video verbundenen Ressourcen frei, was den Netzwerkdownload stoppt. Sie müssen `load()` nach dem Entfernen des Attributs aufrufen, da das bloße Entfernen des `src`-Attributs den Ladealgorithmus nicht auslöst. Wenn das `<video>`-Element auch `<source>`-Element-Nachkommen enthält, sollten diese auch entfernt werden, bevor Sie `load()` aufrufen.

Beachten Sie, dass das bloße Setzen des `src`-Attributs auf einen leeren String den Browser tatsächlich dazu bringt, es so zu behandeln, als würden Sie eine Videoquelle auf einen relativen Pfad setzen. Dies führt dazu, dass der Browser versucht, erneut etwas herunterzuladen, das wahrscheinlich kein gültiges Video ist.

### Seeking through media

Medienelemente bieten Unterstützung, um die aktuelle Wiedergabeposition zu bestimmten Punkten im Inhalt des Mediums zu verschieben. Dies geschieht durch Setzen des Werts der `currentTime`-Eigenschaft am Element; siehe [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) für weitere Details zu den Eigenschaften des Elements. Setzen Sie den Wert auf die Zeit in Sekunden, an der Sie die Wiedergabe fortsetzen möchten.

Sie können die `seekable`-Eigenschaft des Elements verwenden, um die Bereiche des Mediums zu bestimmen, die derzeit zum Suchen verfügbar sind. Dies gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Zeitbereiche auflistet, zu denen Sie suchen können.

```js
const mediaElement = document.querySelector("#mediaElementID");
mediaElement.seekable.start(0); // Returns the starting time (in seconds)
mediaElement.seekable.end(0); // Returns the ending time (in seconds)
mediaElement.currentTime = 122; // Seek to 122 seconds
mediaElement.played.end(0); // Returns the number of seconds the browser has played
```

### Specifying playback range

When specifying the URI of media for an {{ HTMLElement("audio") }} or {{ HTMLElement("video") }} element, you can optionally include additional information to specify the portion of the media to play. To do this, append a hash mark ("#") followed by the media fragment description.

A time range is specified using the syntax:

```plain
#t=[starttime][,endtime]
```

The time can be specified as a number of seconds (as a floating-point value) or as an hours/minutes/seconds time separated with colons (such as 2:05:01 for 2 hours, 5 minutes, and 1 second).

A few examples:

- `http://example.com/video.ogv#t=10,20`
  - : Spezifiziert, dass das Video den Bereich von 10 Sekunden bis 20 Sekunden abspielen soll.
- `http://example.com/video.ogv#t=,10.5`
  - : Spezifiziert, dass das Video vom Anfang bis zu 10,5 Sekunden abspielen soll.
- `http://example.com/video.ogv#t=,02:00:00`
  - : Spezifiziert, dass das Video vom Anfang bis zu zwei Stunden abspielen soll.
- `http://example.com/video.ogv#t=60`
  - : Spezifiziert, dass das Video bei 60 Sekunden beginnen soll und bis zum Ende des Videos abgespielt werden soll.

## Fehlerbehandlung

Fehler werden an die Kind-{{ HTMLElement("source") }}-Elemente geliefert, die den Fehler verursachenden Quellen entsprechen.

Dies ermöglicht es Ihnen zu erkennen, welche Quellen nicht geladen werden konnten, was nützlich sein kann. Betrachten Sie dieses HTML:

```html
<video>
  <source
    id="mp4_src"
    src="video.mp4"
    type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
  <source
    id="3gp_src"
    src="video.3gp"
    type='video/3gpp; codecs="mp4v.20.8, samr"' />
  <source
    id="ogg_src"
    src="video.ogv"
    type='video/ogv; codecs="theora, vorbis"' />
</video>
```

Da Firefox aufgrund ihrer patentbelasteten Natur auf einigen Plattformen MP4 und 3GP nicht unterstützt, erhalten die {{ HTMLElement("source") }}-Elemente mit den IDs "mp4_src" und "3gp_src" `error`-Ereignisse, bevor die Ogg-Ressource geladen wird. Die Quellen werden in der Reihenfolge versucht, in der sie auftreten, und sobald eine erfolgreich geladen wurde, werden die verbleibenden Quellen überhaupt nicht versucht.

### Überprüfen, ob der Browser die bereitgestellten Formate unterstützt

Unterstützung für Medienformate finden Sie auf [Can I Use](https://caniuse.com/).

- [Audio MP3 (`type="audio/mpeg"`)](https://caniuse.com/mp3)
- [Audio Ogg (`type="audio/ogg"`)](https://caniuse.com/ogg-vorbis)
- [Video MP4 (`type="video/mp4"`)](https://caniuse.com/mpeg4)
- [Video WebM (`type="video/webm"`)](https://caniuse.com/webm)
- [Video Ogg (`type="video/ogg"`)](https://caniuse.com/ogv)

Sie können auch nach [anderen Medienformaten](/de/docs/Web/Media/Guides/Formats/Containers) suchen.

Wenn ein Medienformat unterstützt werden soll, aber die von Ihnen bereitgestellten Dateien nicht abgespielt werden, gibt es zwei mögliche Probleme:

#### 1. Der Medienserver liefert die falschen MIME-Typen mit der Datei

Obwohl dies in der Regel unterstützt wird, müssen Sie möglicherweise Folgendes zu der `.htaccess`-Datei Ihres Medienservers hinzufügen.

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

Ihre Dateien können falsch codiert worden sein — versuchen Sie, mit einem der folgenden Tools zu codieren, die als ziemlich zuverlässig gelten:

- [Audacity](https://sourceforge.net/projects/audacity/) — Kostenloser Audio-Editor und -Rekorder
- [Miro](https://www.getmiro.com/) — Kostenloser, Open-Source-Musik- und Video-Player
- [Handbrake](https://handbrake.fr/) — Open Source Video Transcoder
- [Firefogg](https://www.firefogg.org/) — Video- und Audiocodierung für Firefox
- [FFmpeg2](https://www.ffmpeg.org/) — Umfassender Kommandozeilen-Encoder
- [Vid.ly](https://m.vid.ly/) — Video-Player, Transcodierung und Bereitstellung
- [Internet Archive](https://archive.org/) — Kostenlose Transkodierung und Speicherung

### Erkennen, wenn keine Quellen geladen wurden

Um zu erkennen, dass alle Kind-{{ HTMLElement("source") }}-Elemente nicht geladen wurden, überprüfen Sie den Wert des `networkState`-Attributs des Medienelements. Wenn dies `HTMLMediaElement.NETWORK_NO_SOURCE` ist, wissen Sie, dass alle Quellen nicht geladen wurden.

Wenn Sie an diesem Punkt eine weitere Quelle hinzufügen, indem Sie ein neues {{ HTMLElement("source") }}-Element als Kind des Medienelements einfügen, versucht Gecko, die angegebene Ressource zu laden.

### Fallback-Inhalt anzeigen, wenn keine Quelle dekodiert werden konnte

Eine andere Möglichkeit, den Fallback-Inhalt eines Videos anzuzeigen, wenn keine der Quellen im aktuellen Browser dekodiert werden konnte, besteht darin, einen Fehler-Handler am letzten Source-Element hinzuzufügen. Dann können Sie das Video mit seinem Fallback-Inhalt ersetzen:

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
lastSource.addEventListener(
  "error",
  (ev) => {
    const d = document.createElement("div");
    d.innerHTML = v.innerHTML;
    v.parentNode.replaceChild(d, v);
  },
  false,
);
```

## Audio-/Video-JavaScript-Bibliotheken

Es existieren mehrere Audio- und Video-JavaScript-Bibliotheken. Die beliebtesten Bibliotheken ermöglichen Ihnen, ein einheitliches Player-Design über alle Browser auszuwählen und bieten einen Fallback für Browser, die Audio und Video nicht nativ unterstützen. Fallbacks haben historisch jetzt veraltete Plugins wie Adobe Flash oder Microsoft Silverlight verwendet, um in nicht unterstützenden Browsern einen Medienplayer bereitzustellen, obwohl diese auf modernen Computern nicht mehr unterstützt werden. Andere Funktionen, wie das `<track>`-Element für Untertitel, können auch durch Mediatheken bereitgestellt werden.

### Nur Audio

- [SoundManager](https://www.schillmania.com/projects/soundmanager2/)
- [AmplitudeJS](https://521dimensions.com/open-source/amplitudejs)
- [HowlerJS](https://howlerjs.com/)

### Nur Video

- [flowplayer](https://flowplayer.com/): Gratis mit einem Logo-Wasserzeichen von Flowplayer. Open Source (GPL-lizenziert.)
- [JWPlayer](https://jwpconnatix.com/): Registrierung erforderlich zum Herunterladen. Open Source Edition (Creative Commons License.)
- [SublimeVideo](https://www.sublimevideo.net/): Registrierung erforderlich. Formbasierte Einrichtung mit domainspezifischem Link zur CDN-gehosteten Bibliothek.
- [Video.js](https://videojs.com/): Gratis und Open Source (Apache 2 lizenziert.)

### Audio und Video

- [jPlayer](https://jPlayer.org/): Gratis und Open Source (MIT lizenziert.)
- [mediaelement.js](https://www.mediaelementjs.com/): Gratis und Open Source (MIT lizenziert.)

### Web Audio API

- [AudioContext MonkeyPatch](https://github.com/cwilso/AudioContext-MonkeyPatch): Ein Polyfill für ältere Versionen der Web Audio API; Open Source (Apache 2 lizenziert.)

## Leitfäden

- [Erstellen eines plattformübergreifenden Video-Players](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player)
  - : Ein Leitfaden zur Erstellung eines grundlegenden plattformübergreifenden Video-Players unter Verwendung des {{ htmlelement("video") }}-Elements.
- [Grundlagen des Stylings von Video-Playern](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics)
  - : Mit dem im vorherigen Artikel eingerichteten plattformübergreifenden Video-Player befassen wir uns nun mit ein paar grundlegenden, responsiven Styling-Optionen für den Player.
- [Hinzufügen von Untertiteln und Bildunterschriften zu HTML-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)
  - : Dieser Artikel erklärt, wie man dem HTML-{{ htmlelement("video") }} Bildunterschriften und Untertitel mit [Web_Video_Text_Tracks_Format](/de/docs/Web/API/WebVTT_API) und dem {{ htmlelement("track") }}-Element hinzufügt.
- [Cross-Browser Audio-Basics](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
  - : Dieser Artikel bietet einen grundlegenden Leitfaden zur Erstellung eines HTML-Audio-Players, der plattformübergreifend funktioniert, mit allen zugehörigen Attributen, Eigenschaften und Ereignissen erklärt und einem schnellen Leitfaden zu benutzerdefinierten Steuerungen, die mit der Media-API erstellt wurden.
- [Puffern, Suchen und Zeitbereiche für Medien](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges)
  - : Manchmal ist es hilfreich zu wissen, wie viel {{ htmlelement("audio") }} oder {{ htmlelement("video") }} heruntergeladen oder ohne Verzögerung abspielbar ist — ein gutes Beispiel dafür ist die gepufferte Fortschrittsleiste eines Audio- oder Videoplayers. Dieser Artikel diskutiert, wie man eine Puffer-/Suchleiste mit [TimeRanges](/de/docs/Web/API/TimeRanges) aufbaut und andere Funktionen der Media-API.
- [HTML playbackRate erklärt](/de/docs/Web/Media/Guides/Audio_and_video_delivery/WebAudio_playbackRate_explained)
  - : Die `playbackRate`-Eigenschaft ermöglicht es uns, die Geschwindigkeit oder Rate zu ändern, mit der ein Web-Audio- oder -Video abgespielt wird. Dieser Artikel erklärt dies im Detail.
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
  - : Erklärt die Grundlagen der Verwendung der Web Audio API, um eine Audioquelle zu erfassen, zu manipulieren und wiederzugeben.

### Streaming-Medien

- [Live-Streaming von Web-Audio und -Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video)
  - : Live-Streaming-Technologie wird oft eingesetzt, um Live-Events wie Sport, Konzerte und allgemein TV- und Radioprogramme zu übertragen, die live ausgegeben werden. Oft auf das Streaming verkürzt, ist Live-Streaming der Prozess der Übertragung von Medien 'live' auf Computer und Geräte. Dies ist ein ziemlich komplexes und aufkommendes Thema mit vielen Variablen, deshalb werden wir in diesem Artikel in das Thema einführen und Ihnen zeigen, wie Sie anfangen können.
- [Einrichten adaptiver Streaming-Medienquellen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources)
  - : Nehmen wir an, Sie möchten eine adaptive Streaming-Medienquelle auf einem Server einrichten, die in einem HTML-Medien-Element konsumiert werden soll. Wie würden Sie das machen? Dieser Artikel erklärt es anhand der zwei häufigsten Formate: MPEG-DASH und HLS (HTTP Live Streaming).
- [DASH Adaptive Streaming für HTML 5 Video](/de/docs/Web/API/Media_Source_Extensions_API/DASH_Adaptive_Streaming)
  - : Details zur Einrichtung von adaptivem Streaming mit DASH und WebM.

### Erweiterten Themen

- [Web Audio API plattformübergreifende Unterstützung](/de/docs/Web/API/Web_Audio_API/Best_practices#cross_browser_legacy_support)
  - : Ein Leitfaden zur plattformübergreifenden Entwicklung von Web Audio API-Code.
- [Einfache Audioaufnahme mit der MediaRecorder API](https://hacks.mozilla.org/2014/06/easy-audio-capture-with-the-mediarecorder-api/)
  - : Erklärt die Grundlagen der Verwendung der MediaStream Recording API, um direkt einen Medienstream aufzuzeichnen.

## Referenzen

- [Das Video-Element](/de/docs/Web/HTML/Reference/Elements/video)
- [HTMLVideoElement API](/de/docs/Web/API/HTMLVideoElement)
- [MediaSource API](/de/docs/Web/API/MediaSource)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
- [getUserMedia](/de/docs/Web/API/MediaDevices/getUserMedia)
- [Ereignisindex: Medien](/de/docs/Web/API/Document_Object_Model/Events#media)
