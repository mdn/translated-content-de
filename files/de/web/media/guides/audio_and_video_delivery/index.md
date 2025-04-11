---
title: Audio- und Videoübertragung
slug: Web/Media/Guides/Audio_and_video_delivery
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Wir können Audio und Video im Web auf verschiedene Arten übertragen, von 'statischen' Mediendateien bis hin zu adaptiven Live-Streams. Dieser Artikel dient als Einstiegspunkt für die Erkundung der verschiedenen Übertragungsmechanismen webbasierter Medien und ihrer Kompatibilität mit beliebten Browsern.

## Audio- und Video-HTML-Elemente

Unabhängig davon, ob wir es mit voraufgezeichneten Audiodateien oder Live-Streams zu tun haben, bleibt der Mechanismus, sie über die {{ htmlelement("audio")}}- und {{ htmlelement("video")}}-Elemente des Browsers bereitzustellen, weitgehend gleich. Derzeit müssen wir, um alle Browser zu unterstützen, zwei Formate angeben, obwohl sich dies mit der Einführung der MP3- und MP4-Formate in Firefox und Opera schnell ändert. Kompatibilitätsinformationen finden Sie im [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats).

Um Video und Audio zu übertragen, sieht der allgemeine Ablauf normalerweise so aus:

1. Überprüfen Sie, welches Format der Browser über Feature-Erkennung unterstützt (normalerweise eine Auswahl von zwei, wie oben angegeben).
2. Wenn der Browser keines der bereitgestellten Formate nativ wiedergeben kann, zeigen Sie entweder ein Standbild an oder verwenden Sie eine Fallback-Technologie, um das Video zu präsentieren.
3. Bestimmen Sie, wie Sie das Medium abspielen/instanziieren möchten (z. B. ein {{ htmlelement("video")}}-Element, oder vielleicht `document.createElement('video')`).
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
> Das `preload`-Attribut kann von einigen mobilen Browsern ignoriert werden.

Weitere Informationen finden Sie unter [Cross-Browser-Audio-Grundlagen (HTML Audio im Detail)](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics#html_audio_in_detail)

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

Der obige Code erstellt einen Videoplayer mit den Abmessungen 640x480 Pixel, der ein Poster-Bild anzeigt, bis das Video abgespielt wird. Wir weisen das Video an, sich automatisch abzuspielen, jedoch standardmäßig stummgeschaltet zu sein.

> [!NOTE]
> Das `autoplay`-Attribut kann von einigen mobilen Browsern ignoriert werden. Außerdem kann das Autoplay-Feature kontrovers sein, wenn es missbraucht wird. Es wird dringend empfohlen, den [Autoplay-Leitfaden für Medien und Web-Audio-APIs](/de/docs/Web/Media/Guides/Autoplay) zu lesen, um zu lernen, wie man Autoplay sinnvoll nutzt.

Weitere Informationen finden Sie im [`<video>`-Element](/de/docs/Web/HTML/Reference/Elements/video) und [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).

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

Wir setzen die Quelle des Audios abhängig von dem Audiotyp, den der Browser unterstützt, dann setzen wir den Abspielkopf auf 5 Sekunden und versuchen, es abzuspielen.

> [!NOTE]
> Die Wiedergabe wird von den meisten Browsern ignoriert, es sei denn, sie wird durch ein nutzerinitiiertes Ereignis ausgelöst.

Es ist auch möglich, einem {{ htmlelement("audio") }}-Element eine Base64-codierte WAV-Datei zuzuführen, um auf diese Weise Audio dynamisch zu erzeugen:

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

Wir setzen die Quelle des Videos abhängig von dem Videotyp, den der Browser unterstützt, und legen dann die Breite und Höhe des Videos fest.

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

Sie können das [vollständige Beispiel live ausführen](https://mdn.github.io/webaudio-examples/decode-audio-data/promise/) oder den [Quellcode anzeigen](https://github.com/mdn/webaudio-examples/tree/main/decode-audio-data/promise).

Erfahren Sie mehr über die Grundlagen der Web Audio API in [Using the Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API).

## getUserMedia / Stream API

Es ist auch möglich, einen Livestream von einer Webcam und/oder einem Mikrofon mit `getUserMedia` und der Stream-API zu erhalten. Dies ist Teil einer breiteren Technologie namens WebRTC (Web Real-Time Communications) und ist mit den neuesten Versionen von Chrome, Firefox und Opera kompatibel.

Um den Stream von Ihrer Webcam zu erfassen, richten Sie zunächst ein {{htmlelement("video")}}-Element ein:

```html
<video id="webcam" width="480" height="360"></video>
```

Im nächsten Schritt, falls unterstützt, verbinden Sie die Webcamquelle mit dem Videoelement:

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

Weitere Informationen finden Sie auf unserer Seite [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia).

## MediaStream Aufnahme

Neue Standards werden eingeführt, die es Ihrem Browser ermöglichen, Medien von Ihrem Mikrofon oder Ihrer Kamera mit `getUserMedia` zu erfassen und sofort mit der neuen MediaStream Recording API aufzuzeichnen. Sie nehmen den Stream, den Sie von `getUserMedia` erhalten, übergeben ihn an ein `MediaRecorder`-Objekt, nehmen die resultierende Ausgabe und leiten sie an Ihre Audio- oder Videoquelle weiter\*.

Der Hauptmechanismus wird unten umrissen:

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

Weitere Informationen finden Sie in der [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API).

## Media Source Extensions (MSE)

[Media Source Extensions](https://w3c.github.io/media-source/) ist ein W3C-Arbeitsentwurf, der plant, [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) zu erweitern, um JavaScript die Generierung von Medienstreams zur Wiedergabe zu ermöglichen. Die Möglichkeit für JavaScript, Streams zu generieren, erleichtert eine Vielzahl von Anwendungsfällen wie adaptives Streaming und Zeitverschiebung von Live-Streams.

### Verschlüsselte Medienerweiterungen (EME)

[Verschlüsselte Medienerweiterungen](https://w3c.github.io/encrypted-media/) ist ein W3C-Vorschlag, um `HTMLMediaElement` zu erweitern und APIs zum Steuern der Wiedergabe von geschütztem Inhalt bereitzustellen.

Die API unterstützt Anwendungsfälle, die von einfacher Clear-Key-Entschlüsselung bis hin zu hochwertigem Video reichen (mit einer entsprechenden Benutzeragenten-Implementierung). Der Lizenz-/Schlüsselaustausch wird von der Anwendung gesteuert, was die Entwicklung robuster Wiedergabeanwendungen ermöglicht, die eine Reihe von Inhaltsentschlüsselungs- und Schutztechnologien unterstützen.

Eine der Hauptanwendungen von EME besteht darin, Browsern die Implementierung von DRM zu ermöglichen ([Digital Rights Management](https://en.wikipedia.org/wiki/Digital_rights_management)), was hilft, das Kopieren von webbasierten Inhalten (insbesondere Video) zu verhindern.

### Adaptives Streaming

Neue Formate und Protokolle werden eingeführt, um das adaptive Streaming zu erleichtern. Adaptives Streaming bedeutet, dass die Bandbreite und typischerweise die Qualität des Streams in Echtzeit auf die verfügbare Bandbreite des Benutzers reagieren kann. Adaptives Streaming wird oft in Verbindung mit Live-Streaming verwendet, bei dem die reibungslose Übertragung von Audio oder Video entscheidend ist.

Die Hauptformate für adaptives Streaming sind [HLS](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#hls) und [MPEG-DASH](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#mpeg-dash). MSE wurde mit DASH im Hinterkopf entwickelt. MSE definiert Bytestreams gemäß [ISOBMFF](https://dvcs.w3.org/hg/html-media/raw-file/tip/media-source/isobmff-byte-stream-format.html) und [M2TS](https://en.wikipedia.org/wiki/M2ts) (beide werden in DASH unterstützt, letzterer wird in HLS unterstützt). Im Allgemeinen, wenn Sie an Standards interessiert sind, Flexibilität suchen oder die meisten modernen Browser unterstützen möchten, sind Sie wahrscheinlich mit DASH besser beraten.

> [!NOTE]
> Derzeit unterstützt Safari kein DASH, obwohl dash.js in neueren Versionen von Safari, die mit OSX Yosemite veröffentlicht werden sollen, funktionieren wird.

DASH bietet auch eine Reihe von Profilen, einschließlich On-Demand-Profile, die keine Vorverarbeitung und Aufteilung von Mediendateien erfordern. Es gibt auch eine Reihe von Cloud-basierten Diensten, die Ihre Medien sowohl in HLS als auch in DASH konvertieren.

Weitere Informationen finden Sie unter [Live-Streaming von Web-Audio und -Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video).

## Anpassen Ihres Mediaplayers

Es kann sein, dass Sie möchten, dass Ihr Audio- oder Videoplayer ein einheitliches Erscheinungsbild in allen Browsern hat oder ihn einfach so anpassen möchten, dass er zu Ihrer Website passt. Die allgemeine Technik dafür besteht darin, das `controls`-Attribut wegzulassen, sodass die Standardbrowsersteuerungen nicht angezeigt werden, benutzerdefinierte Steuerungen mit HTML und CSS zu erstellen und diese dann mit JavaScript mit der Audio-/Video-API zu verknüpfen.

Wenn Sie zusätzliche Funktionen benötigen, ist es möglich, Funktionen hinzuzufügen, die derzeit in Standard-Playern nicht vorhanden sind, wie z. B. Wiedergaberate, Qualitätswechsel oder sogar Audio-Spektren. Sie können auch bestimmen, wie Sie Ihren Player responsiv machen – zum Beispiel könnten Sie die Fortschrittsleiste unter bestimmten Bedingungen entfernen.

Sie können Klick-, Touch- und/oder Tastaturereignisse erkennen, um Aktionen wie Wiedergabe, Pause und Scrubbing auszulösen. Es ist oft wichtig, Tastatursteuerungen der Benutzerfreundlichkeit und Barrierefreiheit wegen zu berücksichtigen.

Ein kurzes Beispiel – richten Sie zunächst Ihr Audio und benutzerdefinierte Steuerungen in HTML ein:

```html
<audio
  id="my-audio"
  src="http://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3"></audio>
<button id="my-control">play</button>
```

Fügen Sie ein wenig JavaScript hinzu, um Ereignisse zu erkennen, um das Audio abzuspielen und anzuhalten:

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

Sie können [dieses Beispiel hier ausprobieren](https://jsbin.com/jujeladu/2/edit). Weitere Informationen finden Sie unter [Erstellen eines eigenen benutzerdefinierten Audioplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics#creating_your_own_custom_audio_player).

## Weitere Tipps für Audio/Video

### Stoppen des Downloads von Medien

Während das Anhalten der Wiedergabe von Medien so einfach wie das Aufrufen der `pause()`-Methode des Elements ist, lädt der Browser die Medien weiterhin herunter, bis das Medien-Element durch den Müllsammler entfernt wird.

Hier ist ein Trick, der den Download sofort stoppt:

```js
const mediaElement = document.querySelector("#myMediaElementID");
mediaElement.removeAttribute("src");
mediaElement.load();
```

Indem Sie das `src`-Attribut des Medienelements entfernen und die load()-Methode aufrufen, geben Sie die mit dem Video verbundenen Ressourcen frei, was den Netzwerkdownload stoppt. Sie müssen `load()` aufrufen, nachdem Sie das Attribut entfernt haben, da das einfache Entfernen des `src`-Attributs nicht den Ladealgorithmus auslöst. Wenn das `<video>`-Element auch `<source>`-Unterelemente hat, sollten diese ebenfalls entfernt werden, bevor `load()` aufgerufen wird.

Beachten Sie, dass das Setzen des `src`-Attributs auf eine leere Zeichenfolge dazu führt, dass der Browser es so behandelt, als würden Sie eine Videodatei mit einem relativen Pfad festlegen. Dies führt dazu, dass der Browser versucht, einen weiteren Download durchzuführen, der wahrscheinlich kein gültiges Video ist.

### Durch Medien navigieren

Medienelemente unterstützen das Bewegen der aktuellen Wiedergabeposition zu bestimmten Punkten im Inhalt der Medien. Dies geschieht durch Setzen des `currentTime`-Eigenschaftswerts des Elements; siehe [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) für weitere Details zu den Eigenschaften des Elements. Setzen Sie den Wert auf die Zeit in Sekunden, ab der Sie die Wiedergabe fortsetzen möchten.

Sie können die `seekable`-Eigenschaft des Elements verwenden, um die Bereiche der Medien zu bestimmen, die derzeit zum Suchen verfügbar sind. Dies gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Zeitbereiche auflistet, zu denen Sie springen können.

```js
const mediaElement = document.querySelector("#mediaElementID");
mediaElement.seekable.start(0); // Returns the starting time (in seconds)
mediaElement.seekable.end(0); // Returns the ending time (in seconds)
mediaElement.currentTime = 122; // Seek to 122 seconds
mediaElement.played.end(0); // Returns the number of seconds the browser has played
```

### Wiedergabebereich angeben

Beim Angeben der URI von Medien für ein {{ HTMLElement("audio") }}- oder {{ HTMLElement("video") }}-Element können Sie optional zusätzliche Informationen hinzufügen, um den Teil der Medien anzugeben, der abgespielt werden soll. Dazu fügen Sie ein Rautezeichen ("#") gefolgt von der Medienfragmentbeschreibung hinzu.

Ein Zeitbereich wird mit der folgenden Syntax angegeben:

```plain
#t=[starttime][,endtime]
```

Die Zeit kann als Anzahl von Sekunden (als Fließkommawert) oder als Stunden/Minuten/Sekunden-Zeit, getrennt durch Doppelpunkte (z.B. 2:05:01 für 2 Stunden, 5 Minuten und 1 Sekunde), angegeben werden.

Einige Beispiele:

- `http://example.com/video.ogv#t=10,20`
  - : Gibt an, dass das Video den Bereich von 10 Sekunden bis 20 Sekunden abspielen soll.
- `http://example.com/video.ogv#t=,10.5`
  - : Gibt an, dass das Video vom Anfang bis 10.5 Sekunden abgespielt werden soll.
- `http://example.com/video.ogv#t=,02:00:00`
  - : Gibt an, dass das Video vom Anfang bis zwei Stunden abgespielt werden soll.
- `http://example.com/video.ogv#t=60`
  - : Gibt an, dass das Video bei 60 Sekunden beginnen und bis zum Ende des Videos abgespielt werden soll.

## Fehlerbehandlung

Fehler werden an die untergeordneten {{ HTMLElement("source") }}-Elemente geliefert, die den Quellen entsprechen, die den Fehler verursachen.

Auf diese Weise können Sie erkennen, welche Quellen nicht geladen werden konnten, was nützlich sein kann. Betrachten Sie dieses HTML:

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

Da Firefox MP4 und 3GP auf einigen Plattformen aufgrund ihrer patentschutzbehafteten Natur nicht unterstützt, erhalten die {{ HTMLElement("source") }}-Elemente mit den IDs "mp4_src" und "3gp_src" `error`-Ereignisse, bevor die Ogg-Ressource geladen wird. Die Quellen werden in der Reihenfolge versucht, in der sie erscheinen, und sobald eine erfolgreich geladen wird, werden die verbleibenden Quellen überhaupt nicht mehr versucht.

### Überprüfen, ob der Browser die bereitgestellten Formate unterstützt

Verwenden Sie die folgenden verifizierten Quellen innerhalb Ihrer Audio- und Videoelemente, um die Unterstützung zu überprüfen.

- Audio MP3 (`type="audio/mpeg"`): [http://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3](https://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3) ([MP3-Audio live abspielen](https://jsbin.com/gekatoge/1/edit).)
- Audio MP4 (`type="audio/mp4"`): [http://jPlayer.org/audio/m4a/Miaow-01-Tempered-song.m4a](https://jPlayer.org/audio/m4a/Miaow-01-Tempered-song.m4a) ([MP4-Audio live abspielen](https://jsbin.com/gekatoge/2/edit).)
- Audio Ogg (`type="audio/ogg"`): [http://jPlayer.org/audio/ogg/Miaow-01-Tempered-song.ogg](https://jPlayer.org/audio/ogg/Miaow-01-Tempered-song.ogg) ([OGG-Audio live abspielen](https://jsbin.com/gekatoge/4/edit).)
- Video MP4 (`type="video/mp4"`): [http://jPlayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v](https://jPlayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v) ([MP4-Video live abspielen](https://jsbin.com/gekatoge/5/edit).)
- Video WebM (`type="video/webm"`): [http://jPlayer.org/video/webm/Big_Buck_Bunny_Trailer.webm](https://jPlayer.org/video/webm/Big_Buck_Bunny_Trailer.webm) ([WebM-Video live abspielen](https://jsbin.com/gekatoge/6/edit).)
- Video Ogg (`type="video/ogg"`): [http://jPlayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv](https://jPlayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv) ([OGG-Video live abspielen](https://jsbin.com/gekatoge/7/edit).)

Wenn diese nicht abgespielt werden, dann unterstützt der von Ihnen getestete Browser das angegebene Format nicht. Erwägen Sie, ein anderes Format zu verwenden oder einen Fallback zu verwenden.

Wenn diese funktionieren, aber die von Ihnen bereitgestellten Dateien nicht, gibt es zwei mögliche Probleme:

#### 1. Der Medienserver liefert nicht die richtigen MIME-Typen zusammen mit der Datei

Obwohl dies normalerweise unterstützt wird, müssen Sie möglicherweise folgendes zu der `.htaccess`-Datei Ihres Medienservers hinzufügen.

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

#### 2. Ihre Dateien wurden falsch enkodiert

Ihre Dateien könnten falsch enkodiert worden sein — versuchen Sie, mithilfe eines der folgenden Tools, die sich als sehr zuverlässig erwiesen haben, zu enkodieren:

- [Audacity](https://sourceforge.net/projects/audacity/) — Kostenloser Audio-Editor und Recorder
- [Miro](https://www.getmiro.com/) — Kostenloser, Open-Source Musik- und Videoplayer
- [Handbrake](https://handbrake.fr/) — Open-Source Video-Transcoder
- [Firefogg](http://www.firefogg.org/) — Video- und Audio-Enkodierung für Firefox
- [FFmpeg2](https://www.ffmpeg.org/) — Umfassender Kommandozeilen-Encoder
- [Vid.ly](https://m.vid.ly/) — Videoplayer, Transcoding und Lieferung
- [Internet Archive](https://archive.org/) — Kostenloses Transcoding und Speicherplatz

### Erkennen, wenn keine Quellen geladen wurden

Um zu erkennen, dass alle untergeordneten {{ HTMLElement("source") }}-Elemente fehlgeschlagen sind, überprüfen Sie den Wert des `networkState`-Attributes des Medienelements. Wenn dies `HTMLMediaElement.NETWORK_NO_SOURCE` ist, wissen Sie, dass alle Quellen nicht geladen wurden.

Wenn Sie an diesem Punkt eine weitere Quelle hinzufügen, indem Sie ein neues {{ HTMLElement("source") }}-Element als untergeordnetes Element des Medienelements einfügen, versucht Gecko, die angegebene Ressource zu laden.

### Anzeigen von Fallback-Inhalten, wenn keine Quelle decodiert werden konnte

Eine andere Möglichkeit, die Fallback-Inhalte eines Videos anzuzeigen, wenn keine der Quellen im aktuellen Browser decodiert werden konnte, besteht darin, einen Fehlerbehandler für das letzte Source-Element hinzuzufügen. Dann können Sie das Video durch seinen Fallback-Inhalt ersetzen:

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

Es gibt eine Reihe von Audio- und Video-JavaScript-Bibliotheken. Die beliebtesten Bibliotheken ermöglichen es Ihnen, ein konsistentes Player-Design über alle Browser hinweg zu wählen und einen Fallback für Browser zu bieten, die Audio und Video nicht nativ unterstützen. Fallbacks haben historisch veraltete Plugins wie Adobe Flash oder Microsoft Silverlight verwendet, um einen Mediaplayer in nicht unterstützenden Browsern bereitzustellen, obwohl diese auf modernen Computern nicht mehr unterstützt werden. Andere Funktionen wie das [`<track>`](/de/docs/Web/HTML/Reference/Elements/track)-Element für Untertitel können ebenfalls durch Medienbibliotheken bereitgestellt werden.

### Nur Audio

- [SoundManager](https://www.schillmania.com/projects/soundmanager2/)
- [AmplitudeJS](https://521dimensions.com/open-source/amplitudejs)
- [HowlerJS](https://howlerjs.com/)

### Nur Video

- [flowplayer](https://flowplayer.com/): Gratis mit einem Flowplayer-Logo-Wasserzeichen. Open Source (GPL lizenziert.)
- [JWPlayer](https://jwplayer.com/): Erfordert Registrierung zum Download. Open Source Edition (Creative Commons License.)
- [SublimeVideo](https://www.sublimevideo.net/): Erfordert Registrierung. Formularbasierte Einrichtung mit domainspezifischem Link zur CDN-gehosteten Bibliothek.
- [Video.js](https://videojs.com/): Gratis und Open Source (Apache 2 lizenziert.)

### Audio und Video

- [jPlayer](https://jPlayer.org/): Gratis und Open Source (MIT lizenziert.)
- [mediaelement.js](https://www.mediaelementjs.com/): Gratis und Open Source (MIT lizenziert.)

### Web Audio API

- [AudioContext monkeypatch](https://github.com/cwilso/AudioContext-MonkeyPatch): Ein Polyfill für ältere Versionen der Web Audio API; Open Source (Apache 2 lizenziert.)

## Leitfäden

- [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player)
  - : Ein Leitfaden zum Erstellen eines grundlegenden plattformübergreifenden Videoplayers mit dem {{ htmlelement("video") }}-Element.
- [Grundlagen der Video-Player-Stilgestaltung](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics)
  - : Mit dem im vorhergehenden Artikel eingeführten plattformübergreifenden Videoplayer wird in diesem Artikel nun eine grundlegende, responsive Stilgestaltung für den Player bereitgestellt.
- [Grundlagen des plattformübergreifenden Audios](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
  - : Dieser Artikel bietet einen grundlegenden Leitfaden zum Erstellen eines HTML-Audioplayers, der plattformübergreifend funktioniert, mit Erklärungen zu allen zugehörigen Attributen, Eigenschaften und Ereignissen sowie einer kurzen Anleitung zu benutzerdefinierten Steuerelementen, die mithil
