---
title: Bereitstellung von Audio- und Videoinhalten
slug: Web/Media/Guides/Audio_and_video_delivery
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Wir können Audio- und Videoinhalte im Web auf verschiedene Arten bereitstellen, von "statischen" Mediendateien bis hin zu adaptiven Live-Streams. Dieser Artikel dient als Ausgangspunkt, um die verschiedenen Bereitstellungsmechanismen von webbasierten Medien und deren Kompatibilität mit gängigen Browsern zu erkunden.

## Audio- und Video-HTML-Elemente

Egal, ob wir es mit vorab aufgezeichneten Audiodateien oder Live-Streams zu tun haben, der Mechanismus, um sie über die {{ htmlelement("audio") }}- und {{ htmlelement("video") }}-Elemente des Browsers bereitzustellen, bleibt weitgehend gleich. Derzeit müssen wir zwei Formate angeben, um alle Browser zu unterstützen, obwohl sich dies durch die Einführung der MP3- und MP4-Formate in Firefox und Opera schnell ändert. Kompatibilitätsinformationen finden Sie im [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats).

Um Video und Audio bereitzustellen, sieht der allgemeine Workflow normalerweise so aus:

1. Überprüfen Sie, welches Format der Browser über Feature-Erkennung unterstützt (in der Regel eine Wahl zwischen zwei, wie oben angegeben).
2. Wenn der Browser die Wiedergabe eines der bereitgestellten Formate nicht nativ unterstützt, zeigen Sie entweder ein Standbild an oder verwenden Sie eine Fallback-Technologie, um das Video zu präsentieren.
3. Bestimmen Sie, wie Sie die Medien abspielen/instanziieren möchten (z.B. ein {{ htmlelement("video") }}-Element oder `document.createElement('video')` vielleicht?).
4. Liefern Sie die Mediendatei an den Player.

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

Der obige Code erstellt einen Audioplayer, der versucht, so viel Audio wie möglich vorab zu laden, um eine reibungslose Wiedergabe zu gewährleisten.

> [!NOTE]
> Das Attribut `preload` kann von einigen mobilen Browsern ignoriert werden.

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

Der obige Code erstellt einen Videoplayer mit den Abmessungen 640x480 Pixel, der ein Posterbild anzeigt, bis das Video abgespielt wird. Wir weisen das Video an, automatisch zu starten, aber standardmäßig stummgeschaltet zu sein.

> [!NOTE]
> Das Attribut `autoplay` kann von einigen mobilen Browsern ignoriert werden. Außerdem kann das Autoplay-Feature kontrovers sein, wenn es missbräuchlich verwendet wird. Es wird dringend empfohlen, dass Sie den [Autoplay-Leitfaden für Media und Web Audio APIs](/de/docs/Web/Media/Guides/Autoplay) lesen, um zu lernen, wie Sie Autoplay sinnvoll einsetzen.

Weitere Informationen finden Sie unter [`<video>`-Element](/de/docs/Web/HTML/Element/video) und [Erstellung eines Cross-Browser-Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).

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

Wir setzen die Quelle des Audios abhängig vom unterstützten Audiotyp des Browsers, setzen den Abspielpunkt 5 Sekunden ein und versuchen, es abzuspielen.

> [!NOTE]
> Die Wiedergabe wird von den meisten Browsern ignoriert, es sei denn, sie wird durch ein benutzerinitiertes Ereignis ausgelöst.

Es ist auch möglich, einem {{ htmlelement("audio") }} Element eine Base64-codierte WAV-Datei zu übergeben, was es ermöglicht, Audio spontan zu generieren:

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

Wir setzen die Quelle des Videos abhängig von dem vom Browser unterstützten Videotyp, dann setzen wir die Breite und Höhe des Videos.

## Web Audio API

In diesem Beispiel holen wir eine MP3-Datei über die [`fetch()`](/de/docs/Web/API/Window/fetch) API, laden sie in eine Quelle und spielen sie ab.

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

Sie können das [vollständige Beispiel live ausführen](https://mdn.github.io/webaudio-examples/decode-audio-data/promise/) oder [den Quellcode ansehen](https://github.com/mdn/webaudio-examples/tree/main/decode-audio-data/promise).

Erfahren Sie mehr über die Grundlagen der Web Audio API unter [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API).

## getUserMedia / Stream API

Es ist auch möglich, einen Live-Stream von einer Webcam und/oder einem Mikrofon mit `getUserMedia` und der Stream-API abzurufen. Dies ist Teil einer größeren Technologie, die als WebRTC (Web Real-Time Communications) bekannt ist und mit den neuesten Versionen von Chrome, Firefox und Opera kompatibel ist.

Um den Stream von Ihrer Webcam zu erfassen, richten Sie zuerst ein {{htmlelement("video")}}-Element ein:

```html
<video id="webcam" width="480" height="360"></video>
```

Verbinden Sie dann, falls unterstützt, die Webcam-Quelle mit dem Videoelement:

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

Neue Standards werden eingeführt, die es Ihrem Browser ermöglichen, Medien von Ihrem Mikrofon oder Ihrer Kamera mit `getUserMedia` aufzunehmen und sie sofort mit der neuen MediaStream Recording API aufzuzeichnen. Sie nehmen den Stream, den Sie von `getUserMedia` erhalten, übergeben ihn an ein `MediaRecorder`-Objekt, nehmen die resultierende Ausgabe und führen sie Ihrer Audio- oder Videoquelle zu.

Der Hauptmechanismus ist unten skizziert:

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

Weitere Details finden Sie in der [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API).

## Media Source Extensions (MSE)

[Media Source Extensions](https://w3c.github.io/media-source/) ist ein W3C-Arbeitsentwurf, der plant, [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) zu erweitern, um JavaScript die Erzeugung von Mediastreams zur Wiedergabe zu ermöglichen. JavaScript die Generierung von Streams zu ermöglichen, erleichtert eine Vielzahl von Anwendungsfällen wie adaptives Streaming und Timeshifting von Live-Streams.

### Encrypted Media Extensions (EME)

[Encrypted Media Extensions](https://w3c.github.io/encrypted-media/) ist ein W3C-Vorschlag, `HTMLMediaElement` zu erweitern und APIs bereitzustellen, um die Wiedergabe von geschütztem Inhalt zu steuern.

Die API unterstützt Anwendungsfälle, die von der einfachen Clear-Key-Entschlüsselung bis hin zu hochqualitativem Video reichen (vorausgesetzt, eine geeignete Benutzeragentenimplementierung ist vorhanden). Lizenz-/Schlüsselaustausch wird durch die Anwendung gesteuert, was die Entwicklung robuster Wiedergabeanwendungen unterstützt, die eine Vielzahl von Entschlüsselungs- und Schutztechnologien für Inhalte unterstützen.

Einer der Hauptverwendungszwecke von EME besteht darin, Browsern zu ermöglichen, DRM ([Digital Rights Management](https://en.wikipedia.org/wiki/Digital_rights_management)) zu implementieren, welches dazu beiträgt, dass webbasiertel Inhalte (insbesondere Video) nicht kopiert werden.

### Adaptives Streaming

Neue Formate und Protokolle werden eingeführt, um adaptives Streaming zu erleichtern. Adaptives Streaming bedeutet, dass die Bandbreite und typischerweise die Qualität des Streams in Echtzeit an die verfügbare Bandbreite des Benutzers angepasst werden kann. Adaptives Streaming wird oft in Verbindung mit Live-Streaming verwendet, wo eine reibungslose Bereitstellung von Audio oder Video von entscheidender Bedeutung ist.

Die Hauptformate für adaptives Streaming sind [HLS](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#hls) und [MPEG-DASH](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#mpeg-dash). MSE wurde mit DASH im Hinterkopf entwickelt. MSE definiert Byte-Streams entsprechend [ISOBMFF](https://dvcs.w3.org/hg/html-media/raw-file/tip/media-source/isobmff-byte-stream-format.html) und [M2TS](https://en.wikipedia.org/wiki/M2ts) (beide unterstützt in DASH, letzterer unterstützt in HLS). Im Allgemeinen, wenn Sie an Standards interessiert sind, Flexibilität suchen oder die meisten modernen Browser unterstützen möchten, sind Sie mit DASH wahrscheinlich besser bedient.

> [!NOTE]
> Derzeit unterstützt Safari DASH nicht, obwohl dash.js in neueren Versionen von Safari funktionieren wird, die mit OSX Yosemite veröffentlicht werden.

DASH bietet auch eine Reihe von Profilen, einschließlich On-Demand-Profilen, die keine Vorverarbeitung und Aufteilung von Mediendateien erfordern. Es gibt auch eine Reihe von Cloud-basierten Diensten, die Ihre Medien in sowohl HLS als auch DASH umwandeln.

Weitere Informationen finden Sie unter [Live-Streaming von Web-Audio und -Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video).

## Anpassen Ihres Media Players

Vielleicht möchten Sie, dass Ihr Audio- oder Videoplayer ein konsistentes Design über alle Browser hinweg hat oder ihn einfach an das Erscheinungsbild Ihrer Seite anpassen. Die allgemeine Technik, dies zu erreichen, besteht darin, das `controls`-Attribut wegzulassen, sodass die Standard-Browser-Steuerelemente nicht angezeigt werden, benutzerdefinierte Steuerelemente mit HTML und CSS zu erstellen und dann JavaScript zu verwenden, um Ihre Steuerelemente mit der Audio-/Video-API zu verknüpfen.

Wenn Sie etwas Zusätzliches benötigen, ist es möglich, Funktionen hinzuzufügen, die in Standard-Playern derzeit nicht vorhanden sind, wie z.B. Wiedergabegeschwindigkeit, Qualitätsstromumschaltung oder sogar Audiospektren. Sie können auch wählen, wie Ihr Player anpassungsfähig gemacht werden soll — Sie könnten beispielsweise die Fortschrittsleiste unter bestimmten Bedingungen entfernen.

Sie können Klick-, Touch- und/oder Tastatureingaben erkennen, um Aktionen wie Abspielen, Pausieren und Scrubbing auszulösen. Es ist oft wichtig, Tastenkombinationen aus Gründen der Benutzerfreundlichkeit und Zugänglichkeit beizubehalten.

Ein schnelles Beispiel — zuerst richten Sie Ihr Audio und benutzerdefinierte Steuerelemente in HTML ein:

```html
<audio
  id="my-audio"
  src="http://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3"></audio>
<button id="my-control">play</button>
```

Fügen Sie dann ein wenig JavaScript hinzu, um Ereignisse zu erkennen und das Audio abspielen und pausieren zu lassen:

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

Sie können [dieses Beispiel hier ausprobieren](https://jsbin.com/jujeladu/2/edit). Weitere Informationen finden Sie unter [Erstellung Ihres eigenen benutzerdefinierten Audioplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics#creating_your_own_custom_audio_player).

## Weitere Tipps für Audio/Video

### Anhalten des Downloads von Medien

Während das Stoppen der Wiedergabe von Medien so einfach ist wie das Aufrufen der `pause()`-Methode des Elements, lädt der Browser weiterhin Medien herunter, bis das Medienelement durch die Speicherbereinigung entsorgt wird.

Hier ist ein Trick, der den Download sofort stoppt:

```js
const mediaElement = document.querySelector("#myMediaElementID");
mediaElement.removeAttribute("src");
mediaElement.load();
```

Durch das Entfernen des `src`-Attributs des Medienelements und das Aufrufen der load() Methode, geben Sie die mit dem Video verbundenen Ressourcen frei, wodurch der Netzwerk-Download gestoppt wird. Sie müssen `load()` nach dem Entfernen des Attributs aufrufen, da nur das Entfernen des `src`-Attributs nicht den Ladealgorithmus auslöst. Wenn das `<video>`-Element auch `<source>`-Element-Nachfolger hat, sollten diese ebenfalls entfernt werden, bevor `load()` aufgerufen wird.

Beachten Sie, dass das Setzen des `src`-Attributs auf einen leeren String den Browser tatsächlich dazu veranlassen wird, es so zu behandeln, als ob Sie eine Videoquelle auf einen relativen Pfad setzen. Dies führt dazu, dass der Browser versucht, einen weiteren Download zu etwas auszuführen, das wahrscheinlich kein gültiges Video ist.

### Durch Medien suchen

Medienelemente bieten Unterstützung für das Verschieben der aktuellen Wiedergabeposition zu bestimmten Punkten im Inhalt der Medien. Dies geschieht, indem der Wert der `currentTime`-Eigenschaft des Elements festgelegt wird; siehe [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) für weitere Details zu den Eigenschaften des Elements. Setzen Sie den Wert auf die Zeit, in der die Wiedergabe fortgesetzt werden soll, in Sekunden.

Sie können die `seekable`-Eigenschaft des Elements verwenden, um die Bereiche der Medien zu bestimmen, die derzeit für das Suchen verfügbar sind. Dies gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Zeiten auflistet, zu denen Sie suchen können.

```js
const mediaElement = document.querySelector("#mediaElementID");
mediaElement.seekable.start(0); // Returns the starting time (in seconds)
mediaElement.seekable.end(0); // Returns the ending time (in seconds)
mediaElement.currentTime = 122; // Seek to 122 seconds
mediaElement.played.end(0); // Returns the number of seconds the browser has played
```

### Festlegen des Wiedergabebereichs

Beim Festlegen der URI von Medien für ein {{ HTMLElement("audio") }} oder {{ HTMLElement("video") }}-Element können Sie optional zusätzliche Informationen hinzufügen, um den Abschnitt des Mediums anzugeben, der abgespielt werden soll. Um dies zu tun, fügen Sie eine Raute ("#") gefolgt von der Medienfragmentbeschreibung hinzu.

Ein Zeitbereich wird mit folgender Syntax angegeben:

```plain
#t=[starttime][,endtime]
```

Die Zeit kann als Anzahl von Sekunden (als Gleitkommawert) oder als Stunden/Minuten/Sekunden-Zeit angegeben werden, die mit Doppelpunkten getrennt ist (zum Beispiel 2:05:01 für 2 Stunden, 5 Minuten und 1 Sekunde).

Einige Beispiele:

- `http://example.com/video.ogv#t=10,20`
  - : Gibt an, dass das Video den Bereich von 10 Sekunden bis 20 Sekunden abspielen soll.
- `http://example.com/video.ogv#t=,10.5`
  - : Gibt an, dass das Video von Anfang bis 10,5 Sekunden abgespielt werden soll.
- `http://example.com/video.ogv#t=,02:00:00`
  - : Gibt an, dass das Video von Anfang bis zwei Stunden abgespielt werden soll.
- `http://example.com/video.ogv#t=60`
  - : Gibt an, dass das Video ab 60 Sekunden gestartet und bis zum Ende des Videos abgespielt werden soll.

## Fehlerbehandlung

Fehler werden an die untergeordneten {{ HTMLElement("source") }}-Elemente geliefert, die den Fehler hervorrufen.

Dies ermöglicht es Ihnen, zu erkennen, welche Quellen nicht geladen werden konnten, was nützlich sein könnte. Betrachten Sie dieses HTML:

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

Da Firefox MP4 und 3GP auf einigen Plattformen aufgrund ihres patentbehafteten Charakters nicht unterstützt, erhalten die {{ HTMLElement("source") }}-Elemente mit den IDs "mp4_src" und "3gp_src" `error`-Ereignisse, bevor die Ogg-Ressource geladen wird. Die Quellen werden in der Reihenfolge ausprobiert, in der sie erscheinen, und sobald eine erfolgreich geladen wird, werden die verbleibenden Quellen überhaupt nicht ausprobiert.

### Überprüfen, ob der Browser die bereitgestellten Formate unterstützt

Verwenden Sie die folgenden verifizierten Quellen innerhalb Ihrer Audio- und Videoelemente, um die Unterstützung zu überprüfen.

- Audio MP3 (`type="audio/mpeg"`): [http://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3](https://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3) ([MP3-Audio live abspielen](https://jsbin.com/gekatoge/1/edit).)
- Audio MP4 (`type="audio/mp4"`): [http://jPlayer.org/audio/m4a/Miaow-01-Tempered-song.m4a](https://jPlayer.org/audio/m4a/Miaow-01-Tempered-song.m4a) ([MP4-Audio live abspielen](https://jsbin.com/gekatoge/2/edit).)
- Audio Ogg (`type="audio/ogg"`): [http://jPlayer.org/audio/ogg/Miaow-01-Tempered-song.ogg](https://jPlayer.org/audio/ogg/Miaow-01-Tempered-song.ogg) ([OGG-Audio live abspielen](https://jsbin.com/gekatoge/4/edit).)
- Video MP4 (`type="video/mp4"`): [http://jPlayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v](https://jPlayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v) ([MP4-Video live abspielen](https://jsbin.com/gekatoge/5/edit).)
- Video WebM (`type="video/webm"`): [http://jPlayer.org/video/webm/Big_Buck_Bunny_Trailer.webm](https://jPlayer.org/video/webm/Big_Buck_Bunny_Trailer.webm) ([WebM-Video live abspielen](https://jsbin.com/gekatoge/6/edit).)
- Video Ogg (`type="video/ogg"`): [http://jPlayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv](https://jPlayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv) ([OGG-Video live abspielen](https://jsbin.com/gekatoge/7/edit).)

Wenn diese nicht abgespielt werden, unterstützt der von Ihnen getestete Browser das gegebene Format nicht. Erwägen Sie die Verwendung eines anderen Formats oder eines Fallbacks.

Wenn diese funktionieren, aber die von Ihnen bereitgestellten Dateien nicht, gibt es zwei mögliche Probleme:

#### 1. Der Medienserver liefert nicht die korrekten MIME-Typen mit der Datei

Obwohl dies normalerweise unterstützt wird, müssen Sie möglicherweise das Folgende zur `.htaccess`-Datei Ihres Medienservers hinzufügen.

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

- [Audacity](https://sourceforge.net/projects/audacity/) — Kostenloser Audio-Editor und Recorder
- [Miro](https://www.getmiro.com/) — Kostenloser, Open-Source-Musik- und Videoplayer
- [Handbrake](https://handbrake.fr/) — Open Source Video-Transcoder
- [Firefogg](http://www.firefogg.org/) — Video- und Audio-Codierung für Firefox
- [FFmpeg2](https://www.ffmpeg.org/) — Umfassender Befehlszeilen-Encoder
- [Vid.ly](https://m.vid.ly/) — Videoplayer, Transkodierung und Bereitstellung
- [Internet Archive](https://archive.org/) — Kostenlose Transkodierung und Speicherung

### Erkennen, wenn keine Quellen geladen wurden

Um zu erkennen, dass alle untergeordneten {{ HTMLElement("source") }}-Elemente nicht geladen werden konnten, überprüfen Sie den Wert des `networkState`-Attributs des Medienelements. Wenn dies `HTMLMediaElement.NETWORK_NO_SOURCE` ist, wissen Sie, dass alle Quellen nicht geladen werden konnten.

Wenn Sie zu diesem Zeitpunkt eine weitere Quelle hinzufügen, indem Sie ein neues {{ HTMLElement("source") }}-Element als Kind des Medienelements einfügen, versucht Gecko, die angegebene Ressource zu laden.

### Anzeigen von Fallback-Inhalten, wenn keine Quelle dekodiert werden konnte

Eine andere Möglichkeit, den Fallback-Inhalt eines Videos anzuzeigen, wenn keine der Quellen im aktuellen Browser dekodiert werden konnte, besteht darin, einen Fehler-Handler auf dem letzten Source-Element hinzuzufügen. Dann können Sie das Video durch seinen Fallback-Inhalt ersetzen:

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

Es gibt eine Reihe von Audio- und Video-JavaScript-Bibliotheken. Die beliebtesten Bibliotheken ermöglichen es Ihnen, ein konsistentes Player-Design in allen Browsern zu wählen und bieten einen Fallback für Browser, die Audio und Video nicht nativ unterstützen. Fallbacks haben historisch gesehen veraltete Plugins verwendet, wie Adobe Flash oder Microsoft Silverlight-Plugins, um einen Mediaplayer in nicht unterstützenden Browsern bereitzustellen, obwohl diese auf modernen Computern nicht mehr unterstützt werden. Andere Funktionen wie das [`<track>`](/de/docs/Web/HTML/Element/track)-Element für Untertitel können auch durch Medienbibliotheken bereitgestellt werden.

### Nur Audio

- [SoundManager](https://www.schillmania.com/projects/soundmanager2/)
- [AmplitudeJS](https://521dimensions.com/open-source/amplitudejs)
- [HowlerJS](https://howlerjs.com/)

### Nur Video

- [flowplayer](https://flowplayer.com/): Gratis mit einem flowplayer-Logo-Wasserzeichen. Open Source (GPL-lizenziert.)
- [JWPlayer](https://jwplayer.com/): Erfordert Registrierung zum Download. Open Source Edition (Creative Commons License.)
- [SublimeVideo](https://www.sublimevideo.net/): Erfordert Registrierung. Formularbasierte Einrichtung mit domainspezifischem Link zur CDN-gehosteten Bibliothek.
- [Video.js](https://videojs.com/): Gratis und Open Source (Apache 2 Lizenziert.)

### Audio und Video

- [jPlayer](https://jPlayer.org/): Gratis und Open Source (MIT Licensed.)
- [mediaelement.js](https://www.mediaelementjs.com/): Gratis und Open Source (MIT Licensed.)

### Web Audio API

- [AudioContext monkeypatch](https://github.com/cwilso/AudioContext-MonkeyPatch): Ein Polyfill für ältere Versionen der Web Audio API; Open Source (Apache 2 Licensed.)

## Leitfäden

- [Erstellung eines Cross-Browser-Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player)
  - : Ein Leitfaden zur Erstellung eines grundlegenden Cross-Browser-Videoplayers mit dem {{ htmlelement("video") }}-Element.
- [Grundlagen der Videoplayer-Styling](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics)
  - : Mit dem im vorherigen Artikel eingerichteten Cross-Browser-Videoplayer befasst sich dieser Artikel nun mit der Bereitstellung einiger grundlegender, responsiver Styling für den Player.
- [Grundlagen der Cross-Browser-Audio](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
  - : Dieser Artikel bietet einen grundlegenden Leitfaden zur Erstellung eines HTML-Audioplayers, der browsereübergreifend funktioniert, mit einer Erklärung aller zugehörigen Attribute, Eigenschaften und Ereignisse sowie einem kurzen Leitfaden zu benutzerdefinierten Steuerelementen, die über die Media-API erstellt wurden.
- [Puffern, Suchen und Zeitbereiche von Medien](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges)
  - : Manchmal ist es nützlich zu wissen, wie viel {{ htmlelement("audio") }} oder {{ htmlelement("video") }} heruntergeladen oder ohne Verzögerung abspielbar ist — ein gutes Beispiel dafür ist die gepufferte Fortschrittsleiste eines Audio- oder Videoplayers. Dieser Artikel erläutert, wie man mit [TimeRanges](/de/docs/Web/API/TimeRanges) eine Puffer/Suchleiste erstellt und andere Funktionen der Media-API nutzt.
- [HTML playbackRate erklärt](/de/docs/Web/Media/Guides/Audio_and_video_delivery/WebAudio_playbackRate_explained)
  - : Die `playbackRate`-Eigenschaft erlaubt es uns, die Geschwindigkeit oder Rate zu ändern, mit der ein Stück Web-Audio oder Video spielt. Dieser Artikel erklärt sie im Detail.
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
  - : Erklärt die Grundlagen der Verwendung der Web Audio API zum Erfassen, Manipulieren und Wiedergeben einer Audioquelle.

### Streaming-Medien

- [Live-Streaming von Web-Audio und -Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video)
  - : Live-Streaming-Technologie wird oft verwendet, um Live-Veranstaltungen wie Sportveranstaltungen, Konzerte und im Allgemeinen TV- und Radioprogramme, die live gesendet werden, zu übertragen. Oft kurz als Streaming bezeichnet, ist Live-Streaming der Prozess der Übertragung von Medien "live" an Computer und Geräte. Dies ist ein ziemlich komplexes und neues Thema mit vielen Variablen, daher werden wir in diesem Artikel das Thema vorstellen und Ihnen zeigen, wie Sie anfangen können.
- [Einrichten adaptiver Streaming-Medienquellen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources)
  - : Angenommen, Sie möchten eine adaptive Streaming-Medienquelle auf einem Server einrichten, die innerhalb eines HTML-Medienelements verwendet werden kann. Wie würden Sie das tun? Dieser Artikel erklärt, wie es geht, indem er sich zwei der häufigsten Formate ansieht: MPEG-DASH und HLS (HTTP Live Streaming.)
- [DASH Adaptive Streaming für HTML 5 Video](/de/docs/Web/API/Media_Source_Extensions_API/DASH_Adaptive_Streaming)
  - : Details, wie man adaptives Streaming mit DASH und WebM einrichtet.

### Erweiterte Themen

- [Hinzufügen von Untertiteln und Bildunterschriften zu HTML-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)
  - : Dieser Artikel erklärt, wie man {{ htmlelement("video") }} HTML-Untertitel und Bildunterschriften hinzufügt, indem man [Web_Video_Text_Tracks_Format](/de/docs/Web/API/WebVTT_API) und das {{ htmlelement("track") }}-Element verwendet.
- [Web Audio API Cross-Browser-Unterstützung](/de/docs/Web/API/Web_Audio_API/Best_practices#cross_browser_legacy_support)
  - : Ein Leitfaden zum Schreiben von Cross-Browser-Web-Audio-API-Code.
- [Einfache Audioerfassung mit der MediaRecorder-API](https://hacks.mozilla.org/2014/06/easy-audio-capture-with-the-mediarecorder-api/)
  - : Erklärt die Grundlagen der Verwendung der MediaStream Recording API, um einen Medienstream direkt aufzuzeichnen.

## Referenz

- [Das Video-Element](/de/docs/Web/HTML/Element/video)
- [HTMLVideoElement API](/de/docs/Web/API/HTMLVideoElement)
- [MediaSource API](/de/docs/Web/API/MediaSource)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
- [getUserMedia](/de/docs/Web/API/MediaDevices/getUserMedia)
- [Ereignisreferenz: Medien](/de/docs/Web/Events#media)
