---
title: Audio- und Videoübertragung
slug: Web/Media/Audio_and_video_delivery
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{QuickLinksWithSubPages("/de/docs/Web/Media")}}

Wir können Audio und Video auf verschiedene Arten im Web bereitstellen, von 'statischen' Mediendateien bis hin zu adaptiven Live-Streams. Dieser Artikel soll als Ausgangspunkt dienen, um die verschiedenen Übertragungsmechanismen von webbasierter Medien und die Kompatibilität mit beliebten Browsern zu erkunden.

## Die Audio- und Videoelemente

Ob es sich um voraufgezeichnete Audiodateien oder Live-Streams handelt, der Mechanismus, um sie über die {{ htmlelement("audio")}} und {{ htmlelement("video")}} Elemente des Browsers verfügbar zu machen, bleibt weitgehend gleich. Derzeit müssen wir zur Unterstützung aller Browser zwei Formate angeben, obwohl sich dies durch die Annahme der Formate MP3 und MP4 in Firefox und Opera schnell ändert. Kompatibilitätsinformationen finden Sie im [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Formats).

Um Video und Audio zu liefern, sieht der allgemeine Arbeitsablauf gewöhnlich so aus:

1. Überprüfen Sie, welches Format der Browser über Feature-Erkennung unterstützt (in der Regel eine Wahl von zwei, wie oben angegeben).
2. Wenn der Browser keines der bereitgestellten Formate nativ wiedergeben kann, entweder ein Standbild präsentieren oder eine Fallback-Technologie verwenden, um das Video darzustellen.
3. Bestimmen Sie, wie Sie das Medium abspielen/initiieren möchten (z.B. ein {{ htmlelement("video") }} Element, oder `document.createElement('video')` vielleicht?)
4. Übertragen Sie die Mediendatei an den Player.

### HTML Audio

```html
<audio controls preload="auto">
  <source src="audio-file.mp3" type="audio/mpeg" />

  <!-- fallback for browsers that don't support mp3 -->
  <source src="audio-file.ogg" type="audio/ogg" />

  <!-- fallback for browsers that don't support audio tag -->
  <a href="audio-file.mp3">download audio</a>
</audio>
```

Der obige Code erstellt einen Audioplayer, der so viel Audio wie möglich vorladen soll, um eine reibungslose Wiedergabe zu gewährleisten.

> [!NOTE]
> Das `preload` Attribut kann von einigen mobilen Browsern ignoriert werden.

Weitere Informationen finden Sie im [Grundlagen zur plattformübergreifenden Audiowiedergabe (HTML Audio im Detail)](/de/docs/Web/Media/Audio_and_video_delivery/Cross-browser_audio_basics#html_audio_in_detail).

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

  <!-- fallback for browsers that don't support video tag -->
  <a href="video-file.mp4">download video</a>
</video>
```

Der obige Code erstellt einen Videoplayer mit den Abmessungen 640x480 Pixel, der ein Posterbild anzeigt, bis das Video abgespielt wird. Wir instruieren das Video, automatisch zu starten und standardmäßig stummgeschaltet zu sein.

> [!NOTE]
> Das `autoplay` Attribut kann von einigen mobilen Browsern ignoriert werden. Außerdem kann die Autoplay-Funktion missbraucht umstritten sein. Es wird dringend empfohlen, den [Leitfaden zur Autoplay-Funktion für Medien und Web Audio APIs](/de/docs/Web/Media/Autoplay_guide) zu lesen, um zu lernen, wie Sie Autoplay sinnvoll einsetzen.

Weitere Informationen finden Sie im [`<video>` Element](/de/docs/Web/HTML/Element/video) und [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player).

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

Wir setzen die Quelle des Audios basierend auf dem Typ der vom Browser unterstützten Audiodatei, dann setzen wir den Play-Head auf 5 Sekunden und versuchen, es abzuspielen.

> [!NOTE]
> Die Wiedergabe wird von den meisten Browsern ignoriert, wenn sie nicht durch ein nutzerinitiierte Ereignis ausgelöst wird.

Es ist auch möglich, ein {{ htmlelement("audio") }} Element mit einer base64-kodierten WAV-Datei zu versorgen, sodass Audiodaten spontan erzeugt werden können:

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

Wir setzen die Quelle des Videos basierend auf dem Typ der vom Browser unterstützten Videodatei, dann setzen wir die Breite und Höhe des Videos.

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

Sie können das [vollständige Beispiel live ausführen](https://mdn.github.io/webaudio-examples/decode-audio-data/promise/), oder [den Quellcode ansehen](https://github.com/mdn/webaudio-examples/tree/main/decode-audio-data/promise).

Erfahren Sie mehr über die Grundlagen der Web Audio API in [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API).

## getUserMedia / Stream API

Es ist auch möglich, einen Live-Stream von einer Webcam und/oder einem Mikrofon mittels `getUserMedia` und der Stream API zu beziehen. Dies ist Teil einer breiteren Technologie, bekannt als WebRTC (Web Real-Time Communications) und ist kompatibel mit den neuesten Versionen von Chrome, Firefox und Opera.

Um den Stream Ihrer Webcam aufzunehmen, richten Sie zuerst ein {{htmlelement("video")}} Element ein:

```html
<video id="webcam" width="480" height="360"></video>
```

Als nächstes, wenn unterstützt, verbinden Sie die Webcam-Quelle mit dem Videoelement:

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

Für weitere Informationen lesen Sie unsere [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia) Seite.

## MediaStream-Aufnahme

Neue Standards werden eingeführt, die es Ihrem Browser ermöglichen, Medien von Ihrem Mikrofon oder Ihrer Kamera mit `getUserMedia` zu erfassen und sie sofort mit der neuen MediaStream-Aufnahme-API aufzuzeichnen. Sie nehmen den Stream, den Sie von `getUserMedia` erhalten, übergeben ihn an ein `MediaRecorder` Objekt, nehmen die resultierende Ausgabe und speisen sie in Ihre Audio- oder Videoquelle ein.

Der Hauptmechanismus wird unten skizziert:

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

[Media Source Extensions](https://w3c.github.io/media-source/) ist ein Arbeitsentwurf des W3C, der plant, [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) zu erweitern, um JavaScript die Möglichkeit zu geben, Mediastreams zur Wiedergabe zu erzeugen. Die Möglichkeit, JavaScript Streams generieren zu lassen, erleichtert eine Vielzahl von Anwendungsfällen wie adaptives Streaming und Zeitverschiebung bei Live-Streams.

### Encrypted Media Extensions (EME)

[Encrypted Media Extensions](https://w3c.github.io/encrypted-media/) ist ein Vorschlag des W3C, um `HTMLMediaElement` zu erweitern und APIs zur Kontrolle der Wiedergabe von geschütztem Inhalt bereitzustellen.

Die API unterstützt Anwendungsfälle, die von einfacher Klartext-Schlüsselentschlüsselung bis hin zu hochwertigen Videos reichen (vorausgesetzt eine entsprechende Implementierung des Benutzeragenten). Lizenz-/Schlüsselaustausch ist steuerbar durch die Anwendung, was die Entwicklung robuster Wiedergabeanwendungen unterstützt, die eine Vielzahl von Inhaltsentschlüsselungs- und -schutztechnologien unterstützen.

Eine der Hauptanwendungen von EME ist es, Browsern zu ermöglichen, DRM (Digital Rights Management) zu implementieren, was hilft, zu verhindern, dass webbasierte Inhalte (insbesondere Videos) kopiert werden.

### Adaptives Streaming

Neue Formate und Protokolle werden eingeführt, um adaptives Streaming zu erleichtern. Adaptives Streaming bedeutet, dass die Bandbreite und typischerweise die Qualität des Streams sich in Echtzeit an die verfügbare Bandbreite des Benutzers anpassen können. Adaptives Streaming wird oft in Verbindung mit Live-Streaming verwendet, wo eine reibungslose Bereitstellung von Audio oder Video von größter Bedeutung ist.

Die Hauptformate, die für adaptives Streaming verwendet werden, sind [HLS](/de/docs/Web/Media/Audio_and_video_delivery/Live_streaming_web_audio_and_video#hls) und [MPEG-DASH](/de/docs/Web/Media/Audio_and_video_delivery/Live_streaming_web_audio_and_video#mpeg-dash). MSE wurde mit DASH im Kopf entworfen. MSE definiert Bytestreams gemäß [ISOBMFF](https://dvcs.w3.org/hg/html-media/raw-file/tip/media-source/isobmff-byte-stream-format.html) und [M2TS](https://en.wikipedia.org/wiki/M2ts) (beide unterstützt in DASH, letzteres unterstützt in HLS). Allgemein gesprochen, wenn Sie an Standards interessiert sind, Flexibilität suchen oder die meisten modernen Browser unterstützen möchten, sind Sie wahrscheinlich mit DASH besser bedient.

> [!NOTE]
> Derzeit unterstützt Safari DASH nicht, obwohl dash.js auf neueren Versionen von Safari funktioniert, die mit OSX Yosemite veröffentlicht werden sollen.

DASH bietet auch eine Reihe von Profilen, darunter einfache OnDemand-Profile, die keine Vorverarbeitung und Aufteilung von Mediendateien erfordern. Es gibt auch eine Reihe von cloudbasierten Diensten, die Ihre Medien in sowohl HLS als auch DASH konvertieren.

Für weitere Informationen siehe [Live-Streaming von Audio und Video im Web](/de/docs/Web/Media/Audio_and_video_delivery/Live_streaming_web_audio_and_video).

## Anpassung Ihres Medienplayers

Sie können entscheiden, dass Sie möchten, dass Ihr Audio- oder Videoplayer über alle Browser hinweg ein einheitliches Erscheinungsbild hat oder ihn einfach anpassen möchten, damit er zu Ihrer Seite passt. Die allgemeine Technik, um dies zu erreichen, besteht darin, das `controls` Attribut wegzulassen, damit die Standard-Browsersteuerungen nicht angezeigt werden, benutzerdefinierte Steuerungen mit HTML und CSS zu erstellen und dann JavaScript zu verwenden, um Ihre Steuerungen mit der Audio-/Video-API zu verknüpfen.

Wenn Sie etwas zusätzliches benötigen, können Sie Funktionen hinzufügen, die derzeit nicht in den Standardplayern vorhanden sind, wie Wiedergabegeschwindigkeit, Qualitätsänderungen oder sogar Audiospektren. Sie können auch entscheiden, wie Sie Ihren Player reaktionsfähig gestalten — zum Beispiel könnten Sie die Fortschrittsleiste unter bestimmten Bedingungen entfernen.

Sie können auf Klick-, Touch- und/oder Tastaturereignisse reagieren, um Aktionen wie Abspielen, Pause und Scrubben auszulösen. Es ist oft wichtig, an Tastatursteuerungen für Benutzerfreundlichkeit und Barrierefreiheit zu denken.

Ein schnelles Beispiel — richten Sie zunächst Ihr Audio und Ihre benutzerdefinierten Steuerungen in HTML ein:

```html
<audio
  id="my-audio"
  src="http://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3"></audio>
<button id="my-control">play</button>
```

Fügen Sie ein wenig JavaScript hinzu, um Ereignisse zu erkennen, um die Audio abzuspielen und zu pausieren:

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

Sie können [dieses Beispiel hier ausprobieren](https://jsbin.com/jujeladu/2/edit). Für weitere Informationen siehe [Erstellen Ihres eigenen benutzerdefinierten Audioplayers](/de/docs/Web/Media/Audio_and_video_delivery/Cross-browser_audio_basics#creating_your_own_custom_audio_player).

## Weitere Tipps für Audio/Video

### Stoppen des Herunterladens von Medien

Während das Stoppen der Wiedergabe von Medien so einfach ist wie der Aufruf der `pause()` Methode des Elements, lädt der Browser weiter herunter, bis das Medienelement durch die Garbage Collection beseitigt wird.

Hier ist ein Trick, der den Download sofort stoppt:

```js
const mediaElement = document.querySelector("#myMediaElementID");
mediaElement.removeAttribute("src");
mediaElement.load();
```

Wenn Sie das `src` Attribut des Medienelements entfernen und die `load()` Methode aufrufen, werden die mit dem Video verbundenen Ressourcen freigegeben, was den Netzwerkdownload stoppt. Sie müssen `load()` nach Entfernen des Attributs aufrufen, da das Entfernen des `src` Attributs allein den Ladevorgang nicht auslöst. Wenn das `<video>` Element auch `<source>` Elementnachfahren hat, sollten diese ebenfalls entfernt werden, bevor `load()` aufgerufen wird.

Beachten Sie, dass das Einstellen des `src` Attributs auf einen leeren String den Browser tatsächlich dazu veranlasst, es so zu behandeln, als würden Sie eine Videodatei mit relativem Pfad einstellen. Dies führt dazu, dass der Browser versucht, etwas herunterzuladen, das wahrscheinlich kein gültiges Video ist.

### Durchsuchen von Medien

Medienelemente bieten Unterstützung für das Verschieben der aktuellen Wiedergabeposition zu bestimmten Punkten im Medieninhalt. Dies geschieht durch Festlegen des Wertes der `currentTime` Eigenschaft auf dem Element; siehe [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) für weitere Details zu den Eigenschaften des Elements. Setzen Sie den Wert auf die Zeit in Sekunden, an der die Wiedergabe fortgesetzt werden soll.

Sie können die `seekable` Eigenschaft des Elements verwenden, um die Bereiche des Mediums zu bestimmen, die derzeit für das Ansteuern verfügbar sind. Dies gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges) Objekt zurück, das die Zeitbereiche auflistet, zu denen Sie springen können.

```js
const mediaElement = document.querySelector("#mediaElementID");
mediaElement.seekable.start(0); // Returns the starting time (in seconds)
mediaElement.seekable.end(0); // Returns the ending time (in seconds)
mediaElement.currentTime = 122; // Seek to 122 seconds
mediaElement.played.end(0); // Returns the number of seconds the browser has played
```

### Wiedergabebereich angeben

Bei der Angabe der URI von Medien für ein {{ HTMLElement("audio") }} oder {{ HTMLElement("video") }} Element können Sie optional zusätzliche Informationen hinzufügen, um den Teil des Mediums anzugeben, der abgespielt werden soll. Fügen Sie dazu ein Hash-Zeichen („#“) gefolgt von der Medienfragmentbeschreibung an.

Ein Zeitbereich wird mit der folgenden Syntax angegeben:

```plain
#t=[starttime][,endtime]
```

Die Zeit kann als Anzahl von Sekunden (als Fließkommawert) oder als Stunden/Minuten/Sekunden-Zeit mit Doppelpunkten getrennt angegeben werden (z.B. 2:05:01 für 2 Stunden, 5 Minuten und 1 Sekunde).

Einige Beispiele:

- `http://example.com/video.ogv#t=10,20`
  - : Gibt an, dass das Video den Bereich von 10 Sekunden bis 20 Sekunden abspielen soll.
- `http://example.com/video.ogv#t=,10.5`
  - : Gibt an, dass das Video vom Anfang bis zu 10,5 Sekunden abgespielt werden soll.
- `http://example.com/video.ogv#t=,02:00:00`
  - : Gibt an, dass das Video vom Anfang bis zu zwei Stunden abgespielt werden soll.
- `http://example.com/video.ogv#t=60`
  - : Gibt an, dass das Video ab 60 Sekunden bis zum Ende des Videos abgespielt werden soll.

## Fehlerbehandlung

Fehler werden an die untergeordneten {{ HTMLElement("source") }} Elemente gesendet, die den Fehler verursachenden Quellen entsprechen.

Damit können Sie feststellen, welche Quellen nicht geladen werden konnten, was nützlich sein kann. Betrachten Sie dieses HTML:

```html
<video>
<source id="mp4_src"
  src="video.mp4"
  type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
</source>
<source id="3gp_src"
  src="video.3gp"
  type='video/3gpp; codecs="mp4v.20.8, samr"'>
</source>
<source id="ogg_src"
  src="video.ogv"
  type='video/ogv; codecs="theora, vorbis"'>
</source>
</video>
```

Da Firefox auf einigen Plattformen MP4 und 3GP aufgrund ihrer patentbelasteten Natur nicht unterstützt, erhalten die {{ HTMLElement("source") }} Elemente mit den IDs „mp4_src“ und „3gp_src“ `error` Ereignisse, bevor die Ogg-Ressource geladen wird. Die Quellen werden in der Reihenfolge ausprobiert, in der sie erscheinen, und sobald eine erfolgreich geladen wird, werden die verbleibenden Quellen überhaupt nicht ausprobiert.

### Überprüfen, ob der Browser die bereitgestellten Formate unterstützt

Verwenden Sie die folgenden verifizierten Quellen in Ihren Audio- und Videoelementen, um die Unterstützung zu prüfen.

- Audio MP3 (`type="audio/mpeg"`): [http://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3](https://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3) ([höre die MP3-Audio-live an](https://jsbin.com/gekatoge/1/edit).)
- Audio MP4 (`type="audio/mp4"`): [http://jPlayer.org/audio/m4a/Miaow-01-Tempered-song.m4a](https://jPlayer.org/audio/m4a/Miaow-01-Tempered-song.m4a) ([höre die MP4-Audio-live an](https://jsbin.com/gekatoge/2/edit).)
- Audio Ogg (`type="audio/ogg"`): [http://jPlayer.org/audio/ogg/Miaow-01-Tempered-song.ogg](https://jPlayer.org/audio/ogg/Miaow-01-Tempered-song.ogg) ([höre die OGG-Audio-live an](https://jsbin.com/gekatoge/4/edit).)
- Video MP4 (`type="video/mp4"`): [http://jPlayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v](https://jPlayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v) ([spiele das MP4-Video live ab](https://jsbin.com/gekatoge/5/edit).)
- Video WebM (`type="video/webm"`): [http://jPlayer.org/video/webm/Big_Buck_Bunny_Trailer.webm](https://jPlayer.org/video/webm/Big_Buck_Bunny_Trailer.webm) ([spiele das WebM-Video live ab](https://jsbin.com/gekatoge/6/edit).)
- Video Ogg (`type="video/ogg"`): [http://jPlayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv](https://jPlayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv) ([spiele das OGG-Video live ab](https://jsbin.com/gekatoge/7/edit).)

Wenn diese nicht abspielen, dann unterstützt der Browser, den Sie testen, das angegebene Format nicht. Ziehen Sie die Verwendung eines anderen Formats oder die Verwendung eines Fallbacks in Betracht.

Wenn diese funktionieren, aber die von Ihnen bereitgestellten Dateien nicht, gibt es zwei mögliche Probleme:

#### 1. Der Medienserver liefert nicht die richtigen MIME-Typen mit der Datei

Obwohl dies normalerweise unterstützt wird, müssen Sie möglicherweise das Folgende in die `.htaccess` Datei Ihres Medienservers hinzufügen.

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

Ihre Dateien wurden möglicherweise falsch kodiert — versuchen Sie, mit einem der folgenden Tools zu kodieren, die sich als ziemlich zuverlässig erwiesen haben:

- [Audacity](https://sourceforge.net/projects/audacity/) — Kostenloser Audio-Editor und -Recorder
- [Miro](https://www.getmiro.com/) — Kostenloser, Open-Source Musik- und Videoplayer
- [Handbrake](https://handbrake.fr/) — Open Source Video Transcoder
- [Firefogg](http://www.firefogg.org/) — Video- und Audiokodierung für Firefox
- [FFmpeg2](https://www.ffmpeg.org/) — Umfassender Kommandozeilen-Encoder
- [Vid.ly](https://m.vid.ly/) — Videoplayer, Transkodierung und Bereitstellung
- [Internet Archive](https://archive.org/) — Kostenlose Transkodierung und Speicherung

### Erkennen, wenn keine Quellen geladen wurden

Um zu erkennen, dass alle untergeordneten {{ HTMLElement("source") }} Elemente nicht geladen werden konnten, überprüfen Sie den Wert des `networkState` Attributs des Medienelements. Wenn dies `HTMLMediaElement.NETWORK_NO_SOURCE` ist, wissen Sie, dass alle Quellen nicht geladen werden konnten.

Wenn Sie zu diesem Zeitpunkt eine weitere Quelle hinzufügen, indem Sie ein neues {{ HTMLElement("source") }} Element als Kind des Medienelements einfügen, versucht Gecko, die angegebene Ressource zu laden.

### Anzeige von Fallback-Inhalten, wenn keine Quelle dekodiert werden konnte

Eine andere Möglichkeit, den Fallback-Inhalt eines Videos anzuzeigen, wenn keine der Quellen im aktuellen Browser dekodiert werden konnte, besteht darin, einen Fehlerhandler auf dem letzten Quellelement hinzuzufügen. Dann können Sie das Video durch seinen Fallback-Inhalt ersetzen:

```html
<video controls>
  <source src="dynamicsearch.mp4" type="video/mp4"></source>
  <a href="dynamicsearch.mp4">
    <img src="dynamicsearch.jpg" alt="Dynamic app search in Firefox OS">
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

Eine Reihe von Audio- und Video-JavaScript-Bibliotheken existiert. Die beliebtesten Bibliotheken ermöglichen es Ihnen, ein konsistentes Playerdesign über alle Browser hinweg zu wählen und bieten eine Rückfalllösung für Browser, die Audio und Video nicht nativ unterstützen. Rückfälle benutzten historisch nun veraltete Plugins wie Adobe Flash oder Microsoft Silverlight Plugins, um einen Mediaplayer in nicht unterstützenden Browsern bereitzustellen, obwohl diese auf modernen Computern nicht mehr unterstützt werden. Andere Funktionalitäten wie das [`<track>`](/de/docs/Web/HTML/Element/track) Element für Untertitel können ebenfalls durch Medialibraries bereitgestellt werden.

### Nur Audio

- [SoundManager](https://www.schillmania.com/projects/soundmanager2/)
- [AmplitudeJS](https://521dimensions.com/open-source/amplitudejs)
- [HowlerJS](https://howlerjs.com/)

### Nur Video

- [flowplayer](https://flowplayer.com/): Kostenlos mit einem Flowplayer-Logo-Wasserzeichen. Open Source (GPL lizenziert.)
- [JWPlayer](https://jwplayer.com/): Erfordert Registrierung zum Herunterladen. Open Source Edition (Creative Commons Lizenz.)
- [SublimeVideo](https://www.sublimevideo.net/): Erfordert Registrierung. Form-basierte Einrichtung mit domänenspezifischem Link zur CDN gehosteten Bibliothek.
- [Video.js](https://videojs.com/): Kostenlos und Open Source (Apache 2 Lizenziert.)

### Audio und Video

- [jPlayer](https://jPlayer.org/): Kostenlos und Open Source (MIT Lizenz.)
- [mediaelement.js](https://www.mediaelementjs.com/): Kostenlos und Open Source (MIT Lizenz.)

### Web Audio API

- [AudioContext monkeypatch](https://github.com/cwilso/AudioContext-MonkeyPatch): Eine Polyfill für ältere Versionen der Web Audio API; Open Source (Apache 2 Lizenziert.)

## Grundlegende Tutorials

- [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player)
  - : Ein Leitfaden zur Erstellung eines grundlegenden plattformübergreifenden Videoplayers mithilfe des {{ htmlelement("video") }} Elements.
- [Grundlagen der Videoplayer-Stilgestaltung](/de/docs/Web/Media/Audio_and_video_delivery/Video_player_styling_basics)
  - : Mit dem im vorherigen Artikel eingerichteten plattformübergreifenden Videoplayer befasst sich dieser Artikel nun mit der Bereitstellung einiger grundlegender, responsiver Stilgestaltungen für den Player.
- [Grundlagen plattformübergreifender Audio](/de/docs/Web/Media/Audio_and_video_delivery/Cross-browser_audio_basics)
  - : Dieser Artikel bietet eine grundlegende Anleitung zur Erstellung eines HTML-Audioplayers, der plattformübergreifend funktioniert, mit allen zugehörigen Attributen, Eigenschaften und Ereignissen erklärt, sowie einer kurzen Anleitung zu benutzerdefinierten Steuerungen, die mit der Media-API erstellt wurden.
- [Pufferung, Suche und Zeitbereiche von Medien](/de/docs/Web/Media/Audio_and_video_delivery/buffering_seeking_time_ranges)
  - : Manchmal ist es nützlich zu wissen, wie viel {{ htmlelement("audio") }} oder {{ htmlelement("video") }} heruntergeladen oder ohne Verzögerung abspielbar ist — ein gutes Beispiel dafür ist die gepufferte Fortschrittsleiste eines Audio- oder Videoplayers. Dieser Artikel erklärt, wie man eine Puffer-/Suchleiste mithilfe von [TimeRanges](/de/docs/Web/API/TimeRanges) und anderen Funktionen der Medien-API erstellt.
- [HTML playbackRate erklärt](/de/docs/Web/Media/Audio_and_video_delivery/WebAudio_playbackRate_explained)
  - : Die `playbackRate` Eigenschaft erlaubt es uns, die Geschwindigkeit oder Rate zu ändern, mit der ein Stück Web-Audio oder -Video abgespielt wird. Dieser Artikel erklärt es im Detail.
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
  - : Erklärt die Grundlagen der Verwendung der Web Audio API, um eine Audioquelle zu erfassen, zu manipulieren und abzuspielen.

## Tutorials zum Streamen von Medien

- [Live-Streaming von Audio und Video im Web](/de/docs/Web/Media/Audio_and_video_delivery/Live_streaming_web_audio_and_video)
  - : Die Technologie des Live-Streamings wird häufig verwendet, um Live-Ereignisse wie Sport, Konzerte und allgemein TV- und Radioprogramme, die live gesendet werden, zu übertragen. Oft einfach nur Streaming genannt, ist Live-Streaming der Prozess, Medien 'live' an Computer und Geräte zu übertragen. Dies ist ein ziemlich komplexes und neues Thema mit vielen Variablen, daher werden wir Ihnen in diesem Artikel das Thema vorstellen und Ihnen mitteilen, wie Sie loslegen können.
- [Einrichten von Quellen für adaptives Streaming von Medien](/de/docs/Web/Media/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources)
  - : Angenommen, Sie möchten eine Quelle für adaptives Streaming auf einem Server einrichten, die in einem HTML-Medienelement konsumiert werden soll. Wie würden Sie das tun? Dieser Artikel erklärt, wie, und betrachtet zwei der häufigsten Formate: MPEG-DASH und HLS (HTTP Live Streaming).
- [DASH Adaptives Streaming für HTML 5 Video](/de/docs/Web/Media/DASH_Adaptive_Streaming_for_HTML_5_Video)
  - : Details zur Einrichtung von adaptivem Streaming mit DASH und WebM.

## Fortgeschrittene Tutorials

- [Hinzufügen von Untertiteln zu HTML-Video](/de/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)
  - : Dieser Artikel erklärt, wie Sie Untertitel zu HTML {{ htmlelement("video") }} hinzufügen, unter Verwendung von [Web_Video_Text_Tracks_Format](/de/docs/Web/API/WebVTT_API) und dem {{ htmlelement("track") }} Element.
- [Web Audio API plattformübergreifende Unterstützung](/de/docs/Web/API/Web_Audio_API/Best_practices#cross_browser_legacy_support)
  - : Ein Leitfaden zum Schreiben von plattformübergreifendem Web Audio API Code.
- [Einfache Audioaufnahme mit der MediaRecorder API](https://hacks.mozilla.org/2014/06/easy-audio-capture-with-the-mediarecorder-api/)
  - : Erklärt die Grundlagen der Verwendung der MediaStream-Aufnahme-API zur direkten Aufnahme eines Medienstreams.

> [!NOTE]
> Firefox OS Versionen 1.3 und höher unterstützen das [RTSP](https://en.wikipedia.org/wiki/Real_Time_Streaming_Protocol) Protokoll zur Bereitstellung von Videostreams. Eine Fallback-Lösung für ältere Versionen wäre die Verwendung von `<video>` zusammen mit einem geeigneten Format für Gecko (wie WebM), um Fallback-Inhalte bereitzustellen. Weitere Informationen werden zu gegebener Zeit veröffentlicht.

## Referenzen

- [Das Videoelement](/de/docs/Web/HTML/Element/video)
- [HTMLVideoElement API](/de/docs/Web/API/HTMLVideoElement)
- [MediaSource API](/de/docs/Web/API/MediaSource)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [MediaStream Aufnahme API](/de/docs/Web/API/MediaStream_Recording_API)
- [getUserMedia](/de/docs/Web/API/MediaDevices/getUserMedia)
- [Ereignisreferenz > Medien](/de/docs/Web/Events#media)
