---
title: Audio- und Video-Übertragung
slug: Web/Media/Guides/Audio_and_video_delivery
l10n:
  sourceCommit: f4c0e822eb6a1ea438c7342f43a3e4809adbd56a
---

Wir können Audio und Video im Web auf verschiedene Arten bereitstellen, von 'statischen' Mediendateien bis hin zu adaptiven Livestreams. Dieser Artikel soll als Ausgangspunkt dienen, um die verschiedenen Übertragungsmechanismen von webbasiertern Medien und die Kompatibilität mit gängigen Browsern zu erkunden.

## Audio- und Video-HTML-Elemente

Unabhängig davon, ob wir es mit vorab aufgezeichneten Audiodateien oder Livestreams zu tun haben, bleibt der Mechanismus, um sie über die {{ htmlelement("audio")}}- und {{ htmlelement("video")}}-Elemente des Browsers verfügbar zu machen, nahezu gleich. Derzeit müssen wir, um alle Browser zu unterstützen, zwei Formate angeben, obwohl sich dies mit der Akzeptanz der Formate MP3 und MP4 in Firefox und Opera schnell ändert. Kompatibilitätsinformationen finden Sie im [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Guides/Formats).

Um Video und Audio zu übertragen, sieht der allgemeine Workflow normalerweise wie folgt aus:

1. Überprüfen Sie, welches Format der Browser über Feature-Erkennung unterstützt (normalerweise eine Auswahl von zwei, wie oben angegeben).
2. Wenn der Browser keine der bereitgestellten Formate nativ abspielen kann, zeigen Sie entweder ein Standbild an oder verwenden Sie eine Fallback-Technologie, um das Video anzuzeigen.
3. Ermitteln Sie, wie Sie die Medien wiedergeben/instanziieren möchten (z. B. ein {{ htmlelement("video") }}-Element oder `document.createElement('video')` vielleicht?).
4. Liefern Sie die Mediendatei an den Player.

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

Der obige Code erstellt einen Audioplayer, der versucht, so viel Audio wie möglich für eine reibungslose Wiedergabe vorzuladen.

> [!NOTE]
> Das `preload`-Attribut kann von einigen mobilen Browsern ignoriert werden.

Weitere Informationen finden Sie unter [Cross Browser Audio Basics (HTML Audio Im Detail)](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics#html_audio_in_detail)

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

Der obige Code erstellt einen Videoplayer mit den Abmessungen 640x480 Pixel, der ein Posterbild anzeigt, bis das Video abgespielt wird. Wir weisen an, dass das Video automatisch abgespielt wird, jedoch standardmäßig stummgeschaltet ist.

> [!NOTE]
> Das `autoplay`-Attribut kann von einigen mobilen Browsern ignoriert werden. Auch kann die Autoplay-Funktion umstritten sein, wenn sie missbraucht wird. Es wird dringend empfohlen, den [Autoplay-Leitfaden für Medien und Web Audio APIs](/de/docs/Web/Media/Guides/Autoplay) zu lesen, um zu lernen, wie man Autoplay vernünftig verwendet.

Weitere Informationen finden Sie unter [`<video>` Element](/de/docs/Web/HTML/Reference/Elements/video) und [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).

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

Wir setzen die Quelle des Audios basierend auf dem unterstützten Audio-Dateityp im Browser, setzen dann den Abspielkopf 5 Sekunden vor und versuchen, es abzuspielen.

> [!NOTE]
> Abspielen wird von den meisten Browsern ignoriert, es sei denn, es wird durch ein vom Benutzer initiiertes Ereignis ausgelöst.

Es ist auch möglich, einem {{ htmlelement("audio") }}-Element eine base64-codierte WAV-Datei zu übergeben, sodass Audio on-the-fly generiert werden kann:

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

Wir setzen die Quelle des Videos basierend auf dem vom Browser unterstützten Videodateityp, dann setzen wir die Breite und Höhe des Videos.

## Web Audio API

In diesem Beispiel rufen wir eine MP3-Datei mit der [`fetch()`](/de/docs/Web/API/Window/fetch) API ab, laden sie in eine Quelle und spielen sie ab.

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

Sie können [das vollständige Beispiel live ausführen](https://mdn.github.io/webaudio-examples/decode-audio-data/promise/) oder [den Quellcode anzeigen](https://github.com/mdn/webaudio-examples/tree/main/decode-audio-data/promise).

Weitere Informationen zu den Grundlagen der Web Audio API finden Sie unter [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API).

## getUserMedia / Stream-API

Es ist auch möglich, über `getUserMedia` und die Stream-API einen Livestream von einer Webcam und/oder einem Mikrofon zu erhalten. Dies ist Teil einer breiteren Technologie namens WebRTC (Web Real-Time Communications) und ist mit den neuesten Versionen von Chrome, Firefox und Opera kompatibel.

Um den Stream von Ihrer Webcam zu erfassen, richten Sie zuerst ein {{htmlelement("video")}}-Element ein:

```html
<video id="webcam" width="480" height="360"></video>
```

Verknüpfen Sie anschließend, falls unterstützt, die Webcam-Quelle mit dem Videoelement:

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

Weitere Informationen finden Sie auf unserer [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia)-Seite.

## MediaStream-Aufnahme

Neue Standards werden eingeführt, die es Ihrem Browser ermöglichen, Medien von Ihrem Mikrofon oder Ihrer Kamera mit `getUserMedia` zu erfassen und sie sofort mit der neuen MediaStream Recording API aufzuzeichnen. Sie nehmen den Stream, den Sie von `getUserMedia` erhalten, übergeben ihn an ein `MediaRecorder`-Objekt, nehmen die resultierende Ausgabe und leiten sie an Ihre Audio- oder Videoquelle weiter\*.

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

Weitere Informationen finden Sie in der [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API).

## Media Source Extensions (MSE)

[Media Source Extensions](https://w3c.github.io/media-source/) ist ein W3C-Arbeitsentwurf, der plant, [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) zu erweitern, um JavaScript die Erstellung von Medienstreams zur Wiedergabe zu ermöglichen. Durch die Generierung von Streams durch JavaScript werden verschiedene Anwendungsfälle wie adaptives Streaming und Timeshifting von Livestreams ermöglicht.

### Encrypted Media Extensions (EME)

[Encrypted Media Extensions](https://w3c.github.io/encrypted-media/) ist ein W3C-Vorschlag, um `HTMLMediaElement` zu erweitern und APIs bereitzustellen, um die Wiedergabe von geschütztem Inhalt zu steuern.

Die API unterstützt Anwendungsfälle, die von der einfachen Clear-Key-Entschlüsselung bis hin zu hochqualitativem Video (bei einer geeigneten Benutzeragentenimplementierung) reichen. Lizenz-/Schlüsselaustausch wird von der Anwendung kontrolliert, was die Entwicklung robuster Wiedergabeanwendungen unterstützt, die eine Reihe von Technologien zur Entschlüsselung und Schutz von Inhalten unterstützen.

Ein Hauptanwendungsfall von EME ist es, Browsern die Implementierung von DRM ([Digital Rights Management](https://en.wikipedia.org/wiki/Digital_rights_management)) zu ermöglichen, was hilft, das Kopieren von webbasierenden Inhalten (insbesondere Video) zu verhindern.

### Adaptives Streaming

Neue Formate und Protokolle werden eingeführt, um adaptives Streaming zu erleichtern. Adaptive Streaming bedeutet, dass die Bandbreite und typischerweise die Qualität des Streams in Echtzeit als Reaktion auf die verfügbare Bandbreite des Benutzers geändert werden können. Adaptives Streaming wird häufig in Verbindung mit Livestreaming verwendet, bei dem eine reibungslose Übertragung von Audio oder Video von größter Bedeutung ist.

Die Hauptformate für adaptives Streaming sind [HLS](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#hls) und [MPEG-DASH](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#mpeg-dash). MSE wurde mit DASH im Hinterkopf entwickelt. MSE definiert Bytestreams gemäß [ISOBMFF](https://dvcs.w3.org/hg/html-media/raw-file/tip/media-source/isobmff-byte-stream-format.html) und [M2TS](https://en.wikipedia.org/wiki/M2ts) (beide werden in DASH unterstützt, das letztere wird in HLS unterstützt). Allgemein gesagt, wenn Sie an Standards interessiert sind, nach Flexibilität suchen oder die meisten modernen Browser unterstützen möchten, sind Sie wahrscheinlich mit DASH besser dran.

> [!NOTE]
> Derzeit unterstützt Safari DASH nicht, obwohl dash.js auf neueren Versionen von Safari funktionieren soll, die mit OSX Yosemite veröffentlicht werden.

DASH bietet auch eine Reihe von Profilen, darunter On-Demand-Profile, die keine Vorverarbeitung und Aufsplittung der Mediendateien erfordern. Es gibt auch eine Reihe von cloudbasierten Diensten, die Ihre Medien sowohl in HLS als auch in DASH konvertieren.

Für weitere Informationen siehe [Livestreaming von Webaudio und -video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video).

## Anpassung Ihres Media Players

Es kann sein, dass Sie möchten, dass Ihr Audio- oder Videoplayer einheitlich über alle Browser hinweg aussieht oder Sie möchten einfach Anpassungen vornehmen, damit er zum Erscheinungsbild Ihrer Website passt. Die allgemeine Technik dazu besteht darin, das `controls`-Attribut wegzulassen, damit die Standardbrowser-Steuerelemente nicht angezeigt werden, benutzerdefinierte Steuerelemente mit HTML und CSS zu erstellen und dann JavaScript zu verwenden, um Ihre Steuerelemente mit der Audio-/Video-API zu verknüpfen.

Wenn Sie etwas Zusätzliches benötigen, können Sie Funktionen hinzufügen, die derzeit in Standard-Playern nicht vorhanden sind, wie z. B. Wiedergabegeschwindigkeit, Qualitätsstream-Schalter oder sogar Audiospektren. Sie können auch wählen, wie Sie Ihren Player reaktionsfähig gestalten möchten – Zum Beispiel könnten Sie die Fortschrittsanzeige unter bestimmten Bedingungen entfernen.

Sie können Klick-, Touch- und/oder Tastaturereignisse erkennen, um Aktionen wie Abspielen, Pausieren und Scrubbing auszulösen. Es ist oft wichtig, an Tastatursteuerungen für Benutzerfreundlichkeit und Barrierefreiheit zu denken.

Ein schnelles Beispiel — richten Sie zuerst Ihr Audio und Ihre benutzerdefinierten Steuerelemente in HTML ein:

```html
<audio id="my-audio" src="/shared-assets/audio/guitar.mp3"></audio>
<button id="my-control">play</button>
```

Fügen Sie ein wenig JavaScript hinzu, um Ereignisse zu erkennen und das Audio abzuspielen oder zu pausieren:

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

Für mehr Informationen, siehe [Erstellen Sie Ihren eigenen benutzerdefinierten Audioplayer](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics#creating_your_own_custom_audio_player).

## Weitere Tipps für Audio/Video

### Download von Medien stoppen

Während das Stoppen der Wiedergabe von Medien so einfach ist wie das Aufrufen der `pause()`-Methode des Elements, lädt der Browser weiterhin Medien herunter, bis das Medienelement durch Garbage Collection entsorgt wird.

Hier ist ein Trick, der den Download sofort stoppt:

```js
const mediaElement = document.querySelector("#myMediaElementID");
mediaElement.removeAttribute("src");
mediaElement.load();
```

Durch das Entfernen des `src`-Attributs des Medienelements und das Aufrufen der `load()`-Methode geben Sie die mit dem Video verbundenen Ressourcen frei, was den Netzwerkdownload stoppt. Sie müssen `load()` nach dem Entfernen des Attributs aufrufen, da das bloße Entfernen des `src`-Attributs den Ladealgorithmus nicht aufruft. Wenn das `<video>`-Element auch Nachkommenelemente `<source>` hat, sollten diese ebenfalls vor dem Aufruf von `load()` entfernt werden.

Beachten Sie, dass das bloße Setzen des `src`-Attributs auf eine leere Zeichenfolge tatsächlich dazu führt, dass der Browser es so behandelt, als würden Sie eine Videoquelle auf einen relativen Pfad setzen. Dies führt dazu, dass der Browser einen weiteren Download versucht, der wahrscheinlich kein gültiges Video ist.

### Durch Medien navigieren

Medienelemente bieten Unterstützung, um die aktuelle Wiedergabeposition zu bestimmten Punkten im Medieninhalt zu verschieben. Dies geschieht durch Setzen des Wertes der `currentTime`-Eigenschaft am Element; sehen Sie [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) für weitere Details zu den Eigenschaften des Elements. Setzen Sie den Wert auf die Zeit in Sekunden, bei der Sie möchten, dass die Wiedergabe fortgesetzt wird.

Sie können die `seekable`-Eigenschaft des Elements verwenden, um die Bereiche der Medien zu bestimmen, die derzeit zum Navigieren verfügbar sind. Dies gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Bereiche der Zeiten auflistet, zu denen Sie navigieren können.

```js
const mediaElement = document.querySelector("#mediaElementID");
mediaElement.seekable.start(0); // Returns the starting time (in seconds)
mediaElement.seekable.end(0); // Returns the ending time (in seconds)
mediaElement.currentTime = 122; // Seek to 122 seconds
mediaElement.played.end(0); // Returns the number of seconds the browser has played
```

### Wiedergabebereich angeben

Beim Angeben der URI von Medien für ein {{ HTMLElement("audio") }}- oder {{ HTMLElement("video") }}-Element können Sie optional zusätzliche Informationen hinzufügen, um den abzuspielenden Medienbereich anzugeben. Um dies zu tun, fügen Sie ein Nummernzeichen ("#") gefolgt von der Beschreibung des Medienfragments hinzu.

Ein Zeitbereich wird mit der Syntax angegeben:

```plain
#t=[starttime][,endtime]
```

Die Zeit kann als eine Anzahl von Sekunden (als Gleitkommawert) oder als Stunden-/Minuten-/Sekunden-Zeit getrennt durch Doppelpunkte angegeben werden (zum Beispiel 2:05:01 für 2 Stunden, 5 Minuten und 1 Sekunde).

Einige Beispiele:

- `http://example.com/video.ogv#t=10,20`
  - : Gibt an, dass das Video den Bereich von 10 Sekunden bis 20 Sekunden abspielen soll.
- `http://example.com/video.ogv#t=,10.5`
  - : Gibt an, dass das Video von Anfang an bis 10.5 Sekunden abgespielt werden soll.
- `http://example.com/video.ogv#t=,02:00:00`
  - : Gibt an, dass das Video von Anfang an bis zu zwei Stunden abgespielt werden soll.
- `http://example.com/video.ogv#t=60`
  - : Gibt an, dass das Video bei 60 Sekunden beginnen und bis zum Ende des Videos abgespielt werden soll.

## Fehlerbehandlung

Fehler werden an die untergeordneten {{ HTMLElement("source") }}-Elemente geliefert, die zu den Quellen gehören, die den Fehler verursachen.

Dadurch können Sie erkennen, welche Quellen nicht geladen werden konnten, was nützlich sein kann. Betrachten Sie dieses HTML:

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

Da Firefox MP4 und 3GP auf einigen Plattformen wegen ihrer patentbelasteten Natur nicht unterstützt, erhalten die {{ HTMLElement("source") }}-Elemente mit den IDs "mp4_src" und "3gp_src" `error`-Ereignisse, bevor die Ogg-Ressource geladen wird. Die Quellen werden in der Reihenfolge ausprobiert, in der sie erscheinen, und sobald eine erfolgreich geladen wird, werden die verbleibenden Quellen überhaupt nicht ausprobiert.

### Überprüfen, ob der Browser die bereitgestellten Formate unterstützt

Unterstützung für Medienformate ist auf [Can I Use](https://caniuse.com/) verfügbar.

- [Audio MP3 (`type="audio/mpeg"`)](https://caniuse.com/mp3)
- [Audio Ogg (`type="audio/ogg"`)](https://caniuse.com/ogg-vorbis)
- [Video MP4 (`type="video/mp4"`)](https://caniuse.com/mpeg4)
- [Video WebM (`type="video/webm"`)](https://caniuse.com/webm)
- [Video Ogg (`type="video/ogg"`)](https://caniuse.com/ogv)

Sie können auch nach [anderen Medienformaten](/de/docs/Web/Media/Guides/Formats/Containers) suchen.

Wenn ein Medienformat angeblich unterstützt werden sollte, die von Ihnen bereitgestellten Dateien aber nicht abgespielt werden, gibt es zwei mögliche Probleme:

#### 1. Der Medienserver liefert nicht die richtigen MIME-Typen mit der Datei

Obwohl dies normalerweise unterstützt wird, müssen Sie möglicherweise Folgendes zu der `.htaccess`-Datei Ihres Medienservers hinzufügen.

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

Ihre Dateien wurden möglicherweise falsch codiert — versuchen Sie, mit einem der folgenden Tools zu codieren, die sich als ziemlich zuverlässig erwiesen haben:

- [Audacity](https://sourceforge.net/projects/audacity/) — Kostenloser Audio-Editor und Recorder
- [Miro](https://www.getmiro.com/) — Kostenloser, quelloffener Musik- und Videoplayer
- [Handbrake](https://handbrake.fr/) — Open Source Video Transcoder
- [Firefogg](https://www.firefogg.org/) — Video- und Audio-Codierung für Firefox
- [FFmpeg2](https://www.ffmpeg.org/) — Umfassender Kommandozeilen-Encoder
- [Vid.ly](https://m.vid.ly/) — Videoplayer, Transkodierung und Lieferung
- [Internet Archive](https://archive.org/) — Kostenlose Transkodierung und Speicherung

### Erkennung, wenn keine Quellen geladen wurden

Um zu erkennen, dass alle untergeordneten {{ HTMLElement("source") }}-Elemente nicht geladen wurden, prüfen Sie den Wert des `networkState`-Attributs des Medienelements. Wenn dieser Wert `HTMLMediaElement.NETWORK_NO_SOURCE` ist, wissen Sie, dass alle Quellen nicht geladen werden konnten.

Wenn Sie zu diesem Zeitpunkt eine weitere Quelle hinzufügen, indem Sie ein neues {{ HTMLElement("source") }}-Element als untergeordnetes Element des Medienelements einfügen, versucht Gecko, die angegebene Ressource zu laden.

### Fallback-Inhalt anzeigen, wenn keine Quelle dekodiert werden konnte

Eine andere Möglichkeit, den Fallback-Inhalt eines Videos anzuzeigen, wenn keine der Quellen im aktuellen Browser dekodiert werden konnte, besteht darin, einen Fehlerbehandler am letzten Source-Element hinzuzufügen. Dann können Sie das Video durch seinen Fallback-Inhalt ersetzen:

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

Es gibt eine Reihe von Audio- und Video-JavaScript-Bibliotheken. Die beliebtesten Bibliotheken ermöglichen es Ihnen, ein einheitliches Player-Design über alle Browser hinweg zu wählen und bieten ein Fallback für Browser, die Audio und Video nicht nativ unterstützen. Fallbacks haben historisch jetzt veraltete Plugins wie Adobe Flash oder Microsoft Silverlight verwendet, um einen Mediaplayer in Browsern bereitzustellen, die dies nicht unterstützen, obwohl diese auf modernen Computern nicht mehr unterstützt werden. Andere Funktionalitäten wie das [`<track>`](/de/docs/Web/HTML/Reference/Elements/track)-Element für Untertitel können ebenfalls durch Mediaplayer-Bibliotheken bereitgestellt werden.

### Nur Audio

- [SoundManager](https://www.schillmania.com/projects/soundmanager2/)
- [AmplitudeJS](https://521dimensions.com/open-source/amplitudejs)
- [HowlerJS](https://howlerjs.com/)

### Nur Video

- [flowplayer](https://flowplayer.com/): Kostenlos mit Flowplayer-Logo-Wasserzeichen. Open Source (GPL-lizenziert.)
- [JWPlayer](https://jwpconnatix.com/): Registrierung erforderlich, um herunterzuladen. Open Source Edition (Creative Commons Lizenz.)
- [SublimeVideo](https://www.sublimevideo.net/): Registrierung erforderlich. Formularbasierte Einrichtung mit domainspezifischem Link zur CDN-gehosteten Bibliothek.
- [Video.js](https://videojs.com/): Kostenlos und Open Source (Apache 2-lizenziert.)

### Audio und Video

- [jPlayer](https://jPlayer.org/): Kostenlos und Open Source (MIT-lizenziert.)
- [mediaelement.js](https://www.mediaelementjs.com/): Kostenlos und Open Source (MIT-lizenziert.)

### Web Audio API

- [AudioContext monkeypatch](https://github.com/cwilso/AudioContext-MonkeyPatch): Ein Polyfill für ältere Versionen der Web Audio API; Open Source (Apache 2-lizenziert.)

## Leitfäden

- [Einen plattformübergreifenden Videoplayer erstellen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player)
  - : Ein Leitfaden zum Erstellen eines grundlegenden plattformübergreifenden Videoplayers mit dem {{ htmlelement("video") }}-Element.
- [Grundlagen des Videoplayer-Stylings](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics)
  - : Mit dem plattformübergreifenden Videoplayer, der im vorherigen Artikel eingerichtet wurde, befasst sich dieser Artikel nun mit der Bereitstellung eines grundlegenden, responsiven Stylings für den Player.
- [Grundlagen des plattformübergreifenden Audios](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
  - : Dieser Artikel bietet einen grundlegenden Leitfaden zur Erstellung eines plattformübergreifenden HTML-Audioplayers mit allen zugehörigen Attributen, Eigenschaften und Ereignissen und einen kurzen Leitfaden zu benutzerdefinierten Steuerelementen, die mit der Media API erstellt wurden.
- [Media-Buffering, -Seeking und -Zeitbereiche](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges)
  - : Manchmal ist es nützlich zu wissen, wie viel {{ htmlelement("audio") }} oder {{ htmlelement("video") }} heruntergeladen wurde oder ohne Verzögerung abspielbar ist — ein gutes Beispiel dafür ist die gepufferte Fortschrittsanzeige eines Audio- oder Videoplayers. Dieser Artikel erklärt, wie man eine Puffer/Suchleiste mit [TimeRanges](/de/docs/Web/API/TimeRanges) und anderen Funktionen der Media API erstellt.
- [HTML Wiedergabegeschwindigkeit erklärt](/de/docs/Web/Media/Guides/Audio_and_video_delivery/WebAudio_playbackRate_explained)
  - : Die `playbackRate`-Eigenschaft ermöglicht es uns, die Geschwindigkeit oder Rate, mit der ein Stück Webaudio oder Video abspielt, zu ändern. Dieser Artikel erklärt es im Detail.
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
  - : Erklärt die Grundlagen der Verwendung der Web Audio API zum Erfassen, Manipulieren und Abspielen einer Audioquelle.

### Streaming-Medien

- [Livetreaming von Webaudio und -video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video)
  - : Livestreaming-Technologie wird häufig eingesetzt, um Live-Events wie Sport, Konzerte und allgemein TV- und Radiosendungen zu übertragen, die live ausgegeben werden. Oft verkürzt auf einfach Streaming, ist Livestreaming der Prozess, Medien 'live' an Computer und Geräte zu übertragen. Dies ist ein ziemlich komplexes und noch junges Thema mit vielen Variablen, daher werden wir in diesem Artikel eine Einführung in das Thema geben und Ihnen zeigen, wie Sie starten können.
- [Einrichten von adaptiven Streaming-Medienquellen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources)
  - : Angenommen, Sie möchten eine adaptive Streaming-Medienquelle auf einem Server einrichten, die in einem HTML-Medienelement konsumiert werden soll. Wie würden Sie das machen? Dieser Artikel erklärt es anhand zweier der gängigsten Formate: MPEG-DASH und HLS (HTTP Live Streaming).
- [DASH Adaptive Streaming für HTML 5 Video](/de/docs/Web/API/Media_Source_Extensions_API/DASH_Adaptive_Streaming)
  - : Beschreibt, wie adaptives Streaming mit DASH und WebM eingerichtet wird.

### Erweiterte Themen

- [Hinzufügen von Untertiteln und Untertexten zu HTML-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)
  - : Dieser Artikel erklärt, wie Untertitel und Untertexte zu HTML {{ htmlelement("video") }} hinzugefügt werden, unter Verwendung von [Web_Video_Text_Tracks_Format](/de/docs/Web/API/WebVTT_API) und dem {{ htmlelement("track") }}-Element.
- [Web Audio API plattformübergreifende Unterstützung](/de/docs/Web/API/Web_Audio_API/Best_practices#cross_browser_legacy_support)
  - : Ein Leitfaden zum Schreiben von plattformübergreifendem Web Audio API-Code.
- [Einfache Audioaufnahme mit der MediaRecorder API](https://hacks.mozilla.org/2014/06/easy-audio-capture-with-the-mediarecorder-api/)
  - : Erklärt die Grundlagen der Verwendung der MediaStream Recording API zur direkten Aufnahme eines Medienstreams.

## Referenz

- [Das video-Element](/de/docs/Web/HTML/Reference/Elements/video)
- [HTMLVideoElement API](/de/docs/Web/API/HTMLVideoElement)
- [MediaSource API](/de/docs/Web/API/MediaSource)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
- [getUserMedia](/de/docs/Web/API/MediaDevices/getUserMedia)
- [Ereignisindex: Medien](/de/docs/Web/API/Document_Object_Model/Events#media)
