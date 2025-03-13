---
title: Audio- und Videoübertragung
slug: Web/Media/Guides/Audio_and_video_delivery
l10n:
  sourceCommit: 26e46f8c13ebea65dc65a6e99e51e8fa4d5d619d
---

Wir können Audio und Video im Web auf verschiedene Arten übertragen, von "statischen" Mediendateien bis hin zu adaptiven Live-Streams. Dieser Artikel soll als Einstiegspunkt in die verschiedenen Übertragungsmechanismen webbasierter Medien und deren Kompatibilität mit gängigen Browsern dienen.

## Audio- und Video-HTML-Elemente

Ob wir es mit vorab aufgenommenen Audiodateien oder Live-Streams zu tun haben, der Mechanismus, um sie über die {{ htmlelement("audio") }} und {{ htmlelement("video") }} Elemente des Browsers verfügbar zu machen, bleibt weitgehend gleich. Derzeit müssen wir, um alle Browser zu unterstützen, zwei Formate angeben. Mit der Unterstützung der Formate MP3 und MP4 in Firefox und Opera ändert sich dies jedoch schnell. Sie finden Kompatibilitätsinformationen im [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats).

Um Video und Audio zu liefern, sieht der allgemeine Workflow normalerweise so aus:

1. Prüfen Sie, welches Format der Browser über Feature-Detection unterstützt (normalerweise eine von zwei Optionen, wie oben erwähnt).
2. Wenn der Browser die Wiedergabe keiner der bereitgestellten Formate nativ unterstützt, präsentieren Sie entweder ein Standbild oder verwenden Sie eine Fallback-Technologie, um das Video zu zeigen.
3. Bestimmen Sie, wie Sie die Medien abspielen oder instanziieren möchten (z.B. ein {{ htmlelement("video") }} Element oder `document.createElement('video')` vielleicht?)
4. Übertragen Sie die Mediendatei an den Player.

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

Der obige Code erstellt einen Audioplayer, der versucht, so viel Audio wie möglich für eine reibungslose Wiedergabe vorzuladen.

> [!NOTE]
> Das `preload` Attribut kann von einigen mobilen Browsern ignoriert werden.

Weitere Informationen finden Sie unter [Cross Browser Audio Basics (HTML Audio im Detail)](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics#html_audio_in_detail).

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

Der obige Code erstellt einen Videoplayer mit einer Größe von 640x480 Pixeln, der ein Posterbild anzeigt, bis das Video abgespielt wird. Wir weisen das Video an, automatisch abzuspielen, aber standardmäßig stummgeschaltet zu sein.

> [!NOTE]
> Das `autoplay` Attribut kann von einigen mobilen Browsern ignoriert werden. Auch kann das automatische Abspielen umstritten sein, wenn es missbraucht wird. Es wird dringend empfohlen, den [Leitfaden für automatisches Abspielen für Medien und Web Audio APIs](/de/docs/Web/Media/Guides/Autoplay) zu lesen, um zu lernen, wie Sie das automatische Abspielen weise nutzen.

Weitere Informationen finden Sie im [`<video>` Element](/de/docs/Web/HTML/Element/video) und [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).

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

Wir setzen die Quelle des Audios abhängig davon, welche Art von Audiodatei der Browser unterstützt, setzen den Play-Head 5 Sekunden vor und versuchen, es abzuspielen.

> [!NOTE]
> Die Wiedergabe wird von den meisten Browsern ignoriert, es sei denn, sie wird durch ein benutzergesteuertes Ereignis ausgelöst.

Es ist auch möglich, einem {{ htmlelement("audio") }} Element eine Base64-kodierte WAV-Datei zu übermitteln, was es ermöglicht, Audio dynamisch zu erzeugen:

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

Wir setzen die Quelle des Videos abhängig davon, welche Art von Videodatei der Browser unterstützt, und setzen dann die Breite und Höhe des Videos.

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

Sie können [das vollständige Beispiel live ausführen](https://mdn.github.io/webaudio-examples/decode-audio-data/promise/) oder [den Quellcode ansehen](https://github.com/mdn/webaudio-examples/tree/main/decode-audio-data/promise).

Weitere Informationen über die Grundlagen der Web Audio API finden Sie unter [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API).

## getUserMedia / Stream API

Es ist auch möglich, einen Live-Stream von einer Webcam und/oder einem Mikrofon mit `getUserMedia` und der Stream API zu beziehen. Dies ist Teil einer breiteren Technologie, bekannt als WebRTC (Web Real-Time Communications), und ist kompatibel mit den neuesten Versionen von Chrome, Firefox und Opera.

Um den Stream von Ihrer Webcam zu erfassen, richten Sie zunächst ein {{ htmlelement("video") }} Element ein:

```html
<video id="webcam" width="480" height="360"></video>
```

Als nächstes, wenn es unterstützt wird, verbinden Sie die Webcam-Quelle mit dem Videoelement:

```js
if (navigator.mediaDevices) {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then(function onSuccess(stream) {
      const video = document.getElementById("webcam");
      video.autoplay = true;
      video.srcObject = stream;
    })
    .catch(function onError() {
      alert(
        "There has been a problem retrieving the streams - are you running on file:/// or did you disallow access?",
      );
    });
} else {
  alert("getUserMedia is not supported in this browser.");
}
```

Weitere Informationen finden Sie auf unserer [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia) Seite.

## MediaStream Recording

Neue Standards werden eingeführt, die es Ihrem Browser ermöglichen, Medien über Ihr Mikrofon oder Ihre Kamera mit `getUserMedia` zu erfassen und sie sofort mit der neuen MediaStream Recording API aufzuzeichnen. Sie nehmen den Stream, den Sie von `getUserMedia` erhalten, übergeben ihn an ein `MediaRecorder` Objekt, nehmen die resultierende Ausgabe und leiten sie an Ihre Audio- oder Videoquelle weiter\*.

Der Hauptmechanismus wird unten dargestellt:

```js
navigator.mediaDevices
  .getUserMedia({ audio: true })
  .then(function onSuccess(stream) {
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
  .catch(function onError(error) {
    console.log(error.message);
  });
```

Siehe [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) für weitere Details.

## Media Source Extensions (MSE)

[Media Source Extensions](https://w3c.github.io/media-source/) ist ein W3C-Arbeitsentwurf, der plant, [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) zu erweitern, um JavaScript die Generierung von Mediastreams für die Wiedergabe zu ermöglichen. Die Möglichkeit für JavaScript, Streams zu generieren, erleichtert eine Vielzahl von Anwendungsfällen wie adaptives Streaming und zeitversetztes Live-Streaming.

### Encrypted Media Extensions (EME)

[Encrypted Media Extensions](https://w3c.github.io/encrypted-media/) ist ein W3C-Vorschlag zur Erweiterung von `HTMLMediaElement`, der APIs bereitstellt, um die Wiedergabe von geschütztem Inhalt zu steuern.

Die API unterstützt Anwendungsfälle, die von der grundlegenden Clear Key Entschlüsselung bis hin zu hochwertigen Videos reichen (vorausgesetzt, eine geeignete Nutzeragentenimplementierung ist vorhanden). Der Lizenz-/Schlüsselaustausch wird von der Anwendung gesteuert, was die Entwicklung robuster Wiedergabeanwendungen unterstützt, die eine Vielzahl von Technologien zur Inhaltsentschlüsselung und -sicherung unterstützen.

Einer der Hauptverwendungszwecke von EME besteht darin, Browsern die Implementierung von DRM ([Digital Rights Management](https://en.wikipedia.org/wiki/Digital_rights_management)) zu ermöglichen, das hilft, webbasierte Inhalte (insbesondere Videos) vor Kopieren zu schützen.

### Adaptives Streaming

Neue Formate und Protokolle werden eingeführt, um adaptives Streaming zu ermöglichen. Adaptives Streaming von Medien bedeutet, dass die Bandbreite und typischerweise die Qualität des Streams in Echtzeit geändert werden können, um auf die verfügbare Bandbreite des Nutzers zu reagieren. Adaptives Streaming wird häufig in Verbindung mit Live-Streaming verwendet, wo eine reibungslose Lieferung von Audio oder Video entscheidend ist.

Die wichtigsten Formate für adaptives Streaming sind [HLS](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#hls) und [MPEG-DASH](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#mpeg-dash). MSE wurde mit DASH im Sinn entwickelt. MSE definiert Byte-Streams gemäß [ISOBMFF](https://dvcs.w3.org/hg/html-media/raw-file/tip/media-source/isobmff-byte-stream-format.html) und [M2TS](https://en.wikipedia.org/wiki/M2ts) (beide in DASH unterstützt, letzteres in HLS unterstützt). Allgemein gesagt, wenn Sie an Standards interessiert sind, Flexibilität suchen oder die meisten modernen Browser unterstützen möchten, ist DASH wahrscheinlich die bessere Wahl.

> [!NOTE]
> Derzeit unterstützt Safari DASH nicht, obwohl dash.js in neueren Versionen von Safari funktionieren wird, die mit OSX Yosemite veröffentlicht werden sollen.

DASH bietet auch eine Reihe von Profilen, einschließlich OnDemand-Profile, die keine Vorverarbeitung und Aufteilung von Mediendateien erfordern. Es gibt auch eine Reihe von Cloud-basierten Diensten, die Ihre Medien in HLS und DASH umwandeln werden.

Weitere Informationen finden Sie unter [Live-Streaming von Web-Audio und -Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video).

## Anpassen Ihres Media Players

Sie können entscheiden, dass Ihr Audio- oder Videoplayer ein einheitliches Erscheinungsbild über alle Browser hinweg haben oder es einfach so anpassen soll, dass es zu Ihrer Website passt. Die allgemeine Technik, dies zu erreichen, besteht darin, das `controls` Attribut wegzulassen, damit die standardmäßigen Browsersteuerungen nicht angezeigt werden, benutzerdefinierte Steuerungen mit HTML und CSS zu erstellen und dann JavaScript zu verwenden, um Ihre Steuerungen mit der Audio-/Video-API zu verknüpfen.

Wenn Sie etwas Extra benötigen, können Sie Funktionen hinzufügen, die in den Standard-Playern derzeit nicht vorhanden sind, z. B. Wiedergabegeschwindigkeit, Qualitätsschalter oder sogar Audiospektren. Sie können auch wählen, wie Sie Ihren Player responsiv gestalten möchten - zum Beispiel könnten Sie die Fortschrittsleiste unter bestimmten Bedingungen entfernen.

Es ist wichtig, Klick-, Berührungs- und/oder Tastaturereignisse zu erkennen, um Aktionen wie Abspielen, Anhalten und Scrubbing auszulösen. Es ist oft wichtig, sich an Tastatursteuerungen für den Benutzerkomfort und die Barrierefreiheit zu erinnern.

Ein schnelles Beispiel: Richten Sie zuerst Ihr Audio und benutzerdefinierte Steuerungen in HTML ein:

```html
<audio
  id="my-audio"
  src="http://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3"></audio>
<button id="my-control">play</button>
```

Fügen Sie etwas JavaScript hinzu, um Ereignisse zu erkennen, um das Audio abzuspielen und anzuhalten:

```js
window.onload = () => {
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
};
```

Sie können [dieses Beispiel hier ausprobieren](https://jsbin.com/jujeladu/2/edit). Weitere Informationen finden Sie unter [Erstellen eines eigenen benutzerdefinierten Audio-Players](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics#creating_your_own_custom_audio_player).

## Weitere Tipps für Audio/Video

### Stoppen des Downloads von Medien

Während das Stoppen der Wiedergabe von Medien so einfach ist, wie die `pause()` Methode des Elements aufzurufen, lädt der Browser die Medien weiter herunter, bis das Medienelement durch die Speicherbereinigung freigegeben wird.

Hier ist ein Trick, der den Download sofort stoppt:

```js
const mediaElement = document.querySelector("#myMediaElementID");
mediaElement.removeAttribute("src");
mediaElement.load();
```

Indem Sie das `src` Attribut des Medienelements entfernen und die load() Methode aufrufen, geben sie die mit dem Video verbundenen Ressourcen frei, was den Netzwerkladen stoppt. Sie müssen `load()` nach dem Entfernen des Attributs aufrufen, da nur das Entfernen des `src` Attributs den Ladealgorithmus nicht aufruft. Wenn das `<video>` Element auch \<source> Element-Nachfahren hat, sollten diese ebenfalls entfernt werden, bevor `load()` aufgerufen wird.

Beachten Sie, dass das bloße Setzen des `src` Attributs auf einen leeren String den Browser tatsächlich so behandelt, als ob Sie eine relativen Pfad für eine Videodatei angeben. Dies veranlasst den Browser, einen weiteren Download zu versuchen zu etwas, das wahrscheinlich kein gültiges Video ist.

### Durch Medien navigieren

Medienelemente bieten Unterstützung für das Bewegen der aktuellen Wiedergabeposition zu bestimmten Punkten im Inhalt der Medien. Dies erfolgt durch das Festlegen des Wertes der `currentTime` Eigenschaft des Elements; siehe [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) für weitere Details zu den Eigenschaften des Elements. Setzen Sie den Wert auf die Zeit in Sekunden, an der Sie die Wiedergabe fortsetzen möchten.

Sie können die `seekable` Eigenschaft des Elements verwenden, um die Bereiche der Medien zu bestimmen, die derzeit zur Navigation zur Verfügung stehen. Dies gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges) Objekt zurück, das die Zeitspannen auflistet, zu denen Sie navigieren können.

```js
const mediaElement = document.querySelector("#mediaElementID");
mediaElement.seekable.start(0); // Returns the starting time (in seconds)
mediaElement.seekable.end(0); // Returns the ending time (in seconds)
mediaElement.currentTime = 122; // Seek to 122 seconds
mediaElement.played.end(0); // Returns the number of seconds the browser has played
```

### Wiedergabebereich spezifizieren

Wenn Sie die URI von Medien für ein {{ htmlelement("audio") }} oder {{ htmlelement("video") }} Element angeben, können Sie optional zusätzliche Informationen hinzufügen, um den abzuspielenden Teil der Medien anzugeben. Um dies zu tun, fügen Sie ein Rautezeichen ("#") gefolgt von der Medienfragmentbeschreibung hinzu.

Ein Zeitbereich wird mit der Syntax angegeben:

```plain
#t=[starttime][,endtime]
```

Die Zeit kann als Anzahl von Sekunden (als Gleitkommawert) oder als Stunden/Minuten/Sekunden-Zeit mit Doppelpunkten getrennt angegeben werden (z.B. 2:05:01 für 2 Stunden, 5 Minuten und 1 Sekunde).

Einige Beispiele:

- `http://example.com/video.ogv#t=10,20`
  - : Gibt an, dass das Video den Bereich von 10 Sekunden bis 20 Sekunden wiedergeben soll.
- `http://example.com/video.ogv#t=,10.5`
  - : Gibt an, dass das Video von Anfang an bis zu 10.5 Sekunden abspielen soll.
- `http://example.com/video.ogv#t=,02:00:00`
  - : Gibt an, dass das Video von Anfang an bis zu zwei Stunden abspielen soll.
- `http://example.com/video.ogv#t=60`
  - : Gibt an, dass das Video bei 60 Sekunden beginnen soll und bis zum Ende des Videos abspielen soll.

## Fehlerbehandlung

Fehler werden an die untergeordneten {{ htmlelement("source") }} Elemente geliefert, die den Quellen entsprechen, bei denen der Fehler auftrat.

Dies ermöglicht es Ihnen, zu erkennen, welche Quellen nicht geladen werden konnten, was nützlich sein kann. Betrachten Sie folgendes HTML:

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

Da Firefox MP4 und 3GP auf einigen Plattformen aufgrund ihrer patentbelasteten Natur nicht unterstützt, erhalten die {{ htmlelement("source") }} Elemente mit den IDs "mp4_src" und "3gp_src" `error` Ereignisse, bevor die Ogg-Ressource geladen wird. Die Quellen werden in der Reihenfolge versucht, in der sie erscheinen; sobald eine erfolgreich geladen wird, werden die restlichen Quellen überhaupt nicht mehr versucht.

### Überprüfen, ob der Browser die bereitgestellten Formate unterstützt

Verwenden Sie die folgenden verifizierten Quellen innerhalb Ihrer Audio- und Videoelemente, um die Unterstützung zu überprüfen.

- Audio MP3 (`type="audio/mpeg"`): [http://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3](https://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3) ([MP3-Audio live abspielen](https://jsbin.com/gekatoge/1/edit).)
- Audio MP4 (`type="audio/mp4"`): [http://jPlayer.org/audio/m4a/Miaow-01-Tempered-song.m4a](https://jPlayer.org/audio/m4a/Miaow-01-Tempered-song.m4a) ([MP4-Audio live abspielen](https://jsbin.com/gekatoge/2/edit).)
- Audio Ogg (`type="audio/ogg"`): [http://jPlayer.org/audio/ogg/Miaow-01-Tempered-song.ogg](https://jPlayer.org/audio/ogg/Miaow-01-Tempered-song.ogg) ([OGG-Audio live abspielen](https://jsbin.com/gekatoge/4/edit).)
- Video MP4 (`type="video/mp4"`): [http://jPlayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v](https://jPlayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v) ([MP4-Video live abspielen](https://jsbin.com/gekatoge/5/edit).)
- Video WebM (`type="video/webm"`): [http://jPlayer.org/video/webm/Big_Buck_Bunny_Trailer.webm](https://jPlayer.org/video/webm/Big_Buck_Bunny_Trailer.webm) ([WebM-Video live abspielen](https://jsbin.com/gekatoge/6/edit).)
- Video Ogg (`type="video/ogg"`): [http://jPlayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv](https://jPlayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv) ([OGG-Video live abspielen](https://jsbin.com/gekatoge/7/edit).)

Wenn diese nicht wiedergegeben werden, unterstützt der von Ihnen getestete Browser das angegebene Format nicht. Erwägen Sie, ein anderes Format zu verwenden oder eine Fallback-Lösung zu benutzen.

Wenn diese funktionieren, aber die von Ihnen bereitgestellten Dateien nicht, gibt es zwei mögliche Ursachen:

#### 1. Der Medienserver liefert die richtigen MIME-Typen nicht mit der Datei

Obwohl dies normalerweise unterstützt wird, müssen Sie möglicherweise Folgendes in die `.htaccess` Datei Ihres Medienservers hinzufügen.

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

Ihre Dateien könnten falsch codiert worden sein — versuchen Sie, sie mit einem der folgenden Tools zu codieren, die sich als ziemlich zuverlässig erwiesen haben:

- [Audacity](https://sourceforge.net/projects/audacity/) — Kostenlose Audio Editor und Aufnahme
- [Miro](https://www.getmiro.com/) — Kostenloser, Open-Source-Musik- und Videoplayer
- [Handbrake](https://handbrake.fr/) — Open Source Video Transcoder
- [Firefogg](http://www.firefogg.org/) — Video- und Audiocodierung für Firefox
- [FFmpeg2](https://www.ffmpeg.org/) — Umfassender Kommandozeilen-Encoder
- [Vid.ly](https://m.vid.ly/) — Videoplayer, Transcodierung und Lieferung
- [Internet Archive](https://archive.org/) — Kostenlose Transcodierung und Speicherung

### Erkennen, wenn keine Quellen geladen wurden

Um zu erkennen, dass alle untergeordneten {{ htmlelement("source") }} Elemente nicht geladen wurden, überprüfen Sie den Wert des `networkState` Attributs des Medienelements. Wenn dies `HTMLMediaElement.NETWORK_NO_SOURCE` ist, wissen Sie, dass alle Quellen nicht geladen wurden.

Wenn Sie an diesem Punkt eine weitere Quelle hinzufügen, indem Sie ein neues {{ htmlelement("source") }} Element als Kind des Medienelements einfügen, versucht Gecko, die angegebene Ressource zu laden.

### Anzeigen von Fallback-Inhalten, wenn keine Quelle dekodiert werden konnte

Eine andere Möglichkeit, die Fallback-Inhalte eines Videos anzuzeigen, wenn keine der Quellen im aktuellen Browser dekodiert werden konnte, besteht darin, einen Fehler-Handler für das letzte Source-Element hinzuzufügen. Dann können Sie das Video mit seinem Fallback-Inhalt ersetzen:

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

## Audio/Video JavaScript-Bibliotheken

Es gibt eine Reihe von Audio- und Video-JavaScript-Bibliotheken. Die beliebtesten Bibliotheken ermöglichen es Ihnen, über alle Browser hinweg ein einheitliches Player-Design zu wählen und ein Fallback für Browser bereitzustellen, die Audio und Video nicht nativ unterstützen. Historisch haben Fallbacks veraltete Plugins wie Adobe Flash oder Microsoft Silverlight zur Verfügung gestellt, um einen Mediaplayer in nicht unterstützenden Browsern bereitzustellen, obwohl diese auf modernen Computern nicht mehr unterstützt werden. Andere Funktionen wie das `<track>` Element für Untertitel können ebenfalls durch Medienbibliotheken bereitgestellt werden.

### Nur Audio

- [SoundManager](https://www.schillmania.com/projects/soundmanager2/)
- [AmplitudeJS](https://521dimensions.com/open-source/amplitudejs)
- [HowlerJS](https://howlerjs.com/)

### Nur Video

- [flowplayer](https://flowplayer.com/): Gratis mit einem flowplayer-Logo-Wasserzeichen. Open Source (GPL lizenziert.)
- [JWPlayer](https://jwplayer.com/): Registrierung erforderlich zum Herunterladen. Open Source Edition (Creative Commons License.)
- [SublimeVideo](https://www.sublimevideo.net/): Registrierung erforderlich. Formularbasiertes Setup mit domänenspezifischem Link zur CDN-gehosteten Bibliothek.
- [Video.js](https://videojs.com/): Gratis und Open Source (Apache 2 lizenziert.)

### Audio und Video

- [jPlayer](https://jPlayer.org/): Gratis und Open Source (MIT lizenziert.)
- [mediaelement.js](https://www.mediaelementjs.com/): Gratis und Open Source (MIT lizenziert.)

### Web Audio API

- [AudioContext monkeypatch](https://github.com/cwilso/AudioContext-MonkeyPatch): Ein Polyfill für ältere Versionen der Web Audio API; Open Source (Apache 2 lizenziert.)

## Leitfäden

- [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player)
  - : Ein Leitfaden zur Erstellung eines grundlegenden plattformübergreifenden Videoplayers mit dem {{ htmlelement("video") }} Element.
- [Grundlagen der Videoplayer-Stilgestaltung](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics)
  - : Nachdem im vorherigen Artikel der plattformübergreifende Videoplayer bereitgestellt wurde, wird in diesem Artikel nun beschrieben, wie Sie dem Player einige grundlegende, responsive Stile hinzufügen.
- [Cross-Browser Audio Basics](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
  - : Dieser Artikel bietet einen grundlegenden Leitfaden zum Erstellen eines HTML-Audioplayers, der plattformübergreifend funktioniert, mit allen zugehörigen Attributen, Eigenschaften und Ereignissen erklärt und einem Schnellleitfaden zu benutzerdefinierten Steuerungen, erstellt mit der Media-API.
- [Media-Buffering, -Navigation und Zeitbereiche](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges)
  - : Manchmal ist es nützlich zu wissen, wie viel {{htmlelement("audio")}} oder {{htmlelement("video")}} heruntergeladen oder ohne Verzögerung abspielbar ist — ein gutes Beispiel hierfür ist die gepufferte Fortschrittsanzeige eines Audio- oder Videoplayers. Dieser Artikel behandelt, wie Sie eine Puffer-/Suchleiste mit [TimeRanges](/de/docs/Web/API/TimeRanges) und anderen Funktionen der Media-API erstellen.
- [HTML Wiedergabegeschwindigkeit erklärt](/de/docs/Web/Media/Guides/Audio_and_video_delivery/WebAudio_playbackRate_explained)
  - : Die `playbackRate` Eigenschaft ermöglicht es uns, die Geschwindigkeit oder Rate zu ändern, mit der ein Stück Web-Audio oder -Video abgespielt wird. Dieser Artikel erklärt es im Detail.
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
  - : Erklärt die Grundlagen der Verwendung der Web Audio API, um eine Audioquelle zu erfassen, zu manipulieren und abzuspielen.

### Streaming Medien

- [Live-Streaming von Web-Audio und -Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video)
  - : Live-Streaming-Technologie wird oft verwendet, um Live-Events wie Sportveranstaltungen, Konzerte und im Allgemeinen Fernseh- und Radioprogramme, die live gesendet werden, zu übertragen. Oft einfach zu Streaming verkürzt, ist Live-Streaming der Prozess der Übertragung von Medien 'live' zu Computern und anderen Geräten. Dies ist ein ziemlich komplexes und aufstrebendes Thema mit vielen Variablen, daher werden wir Sie in diesem Artikel in das Thema einführen und Ihnen sagen, wie Sie starten können.
- [Einrichten adaptiver Streaming-Medienquellen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources)
  - : Angenommen, Sie möchten eine adaptive Streaming-Medienquelle auf einem Server einrichten, die in einem HTML-Medienelement konsumiert werden soll. Wie würden Sie das tun? Dieser Artikel erklärt, wie, und behandelt zwei der gebräuchlichsten Formate: MPEG-DASH und HLS (HTTP Live Streaming).
- [DASH Adaptives Streaming für HTML 5 Video](/de/docs/Web/API/Media_Source_Extensions_API/DASH_Adaptive_Streaming)
  - : Details, wie man adaptives Streaming mit DASH und WebM einrichtet.

### Fortgeschrittene Themen

- [Hinzufügen von Untertiteln und Untertitel zu HTML Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)
  - : Dieser Artikel erklärt, wie man Untertitel und Untertitel zu HTML {{ htmlelement("video") }} hinzufügt, unter Verwendung des [Web_Video_Text_Tracks_Format](/de/docs/Web/API/WebVTT_API) und des {{ htmlelement("track") }} Elements.
- [Unterstützung der Web Audio API über verschiedene Browser hinweg](/de/docs/Web/API/Web_Audio_API/Best_practices#cross_browser_legacy_support)
  - : Ein Leitfaden zum Schreiben von plattformübergreifendem Web Audio API-Code.
- [Einfache Audioaufzeichnung mit der MediaRecorder API](https://hacks.mozilla.org/2014/06/easy-audio-capture-with-the-mediarecorder-api/)
  - : Erklärt die Grundlagen der Verwendung der MediaStream Recording API, um einen Medienstrom direkt aufzuzeichnen.

## Referenz

- [Das Video-Element](/de/docs/Web/HTML/Element/video)
- [HTMLVideoElement API](/de/docs/Web/API/HTMLVideoElement)
- [MediaSource API](/de/docs/Web/API/MediaSource)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
- [getUserMedia](/de/docs/Web/API/MediaDevices/getUserMedia)
- [Ereignisreferenz: Medien](/de/docs/Web/Events#media)
