---
title: Audio und Video Bereitstellung
slug: Web/Media/Audio_and_video_delivery
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{QuickLinksWithSubPages("/de/docs/Web/Media")}}

Wir können Audio und Video auf unterschiedliche Weise im Web bereitstellen, von 'statischen' Mediendateien bis hin zu adaptiven Live-Streams. Dieser Artikel ist als Ausgangspunkt gedacht, um die verschiedenen Mechanismen der Bereitstellung webbasierter Medien und die Kompatibilität mit beliebten Browsern zu erkunden.

## Die Audio- und Videoelemente

Ob wir es mit vorab aufgenommenen Audiodateien oder Live-Streams zu tun haben, der Mechanismus, um diese über die {{ htmlelement("audio") }}- und {{ htmlelement("video") }}-Elemente des Browsers verfügbar zu machen, bleibt im Wesentlichen gleich. Derzeit müssen wir zur Unterstützung aller Browser zwei Formate angeben, obwohl sich das mit der Einführung der Formate MP3 und MP4 in Firefox und Opera schnell ändert. Sie finden Kompatibilitätsinformationen im [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Formats).

Um Video und Audio bereitzustellen, ist der allgemeine Ablauf normalerweise folgender:

1. Prüfen Sie, welches Format der Browser über Feature-Erkennung unterstützt (in der Regel stehen wie oben angegeben zwei zur Auswahl).
2. Wenn der Browser die Wiedergabe eines der bereitgestellten Formate nicht nativ unterstützt, bieten Sie entweder ein Standbild an oder verwenden Sie eine Ausweichtechnologie, um das Video darzustellen.
3. Bestimmen Sie, wie Sie das Medium abspielen/initialisieren möchten (z.B. ein {{ htmlelement("video") }}-Element oder `document.createElement('video')` vielleicht?)
4. Das Medienfile an den Player liefern.

### HTML Audio

```html
<audio controls preload="auto">
  <source src="audiofile.mp3" type="audio/mpeg" />

  <!-- fallback for browsers that don't support mp3 -->
  <source src="audiofile.ogg" type="audio/ogg" />

  <!-- fallback for browsers that don't support audio tag -->
  <a href="audiofile.mp3">download audio</a>
</audio>
```

Der obige Code erstellt einen Audioplayer, der versucht, so viel Audio wie möglich vorzuloeden, um eine reibungslose Wiedergabe zu gewährleisten.

> [!NOTE]
> Das `preload`-Attribut kann von einigen mobilen Browsern ignoriert werden.

Weitere Informationen finden Sie unter [Cross-Browser-Audio-Grundlagen (HTML-Audio im Detail)](/de/docs/Web/Media/Audio_and_video_delivery/Cross-browser_audio_basics#html_audio_in_detail).

### HTML Video

```html
<video
  controls
  width="640"
  height="480"
  poster="initialimage.png"
  autoplay
  muted>
  <source src="videofile.mp4" type="video/mp4" />

  <!-- fallback for browsers that don't support mp4 -->
  <source src="videofile.webm" type="video/webm" />

  <!-- specifying subtitle files -->
  <track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English" />
  <track
    src="subtitles_no.vtt"
    kind="subtitles"
    srclang="no"
    label="Norwegian" />

  <!-- fallback for browsers that don't support video tag -->
  <a href="videofile.mp4">download video</a>
</video>
```

Der obige Code erstellt einen Videoplayer mit Abmessungen von 640x480 Pixel, der ein Posterbild anzeigt, bis das Video abgespielt wird. Wir weisen das Video an, automatisch abzuspielen, jedoch standardmäßig stummgeschaltet zu sein.

> [!NOTE]
> Das `autoplay`-Attribut kann von einigen mobilen Browsern ignoriert werden. Außerdem kann die Autoplay-Funktion bei Missbrauch umstritten sein. Es wird dringend empfohlen, den [Autoplay-Leitfaden für Medien- und Web-Audio-APIs](/de/docs/Web/Media/Autoplay_guide) zu lesen, um zu lernen, wie Sie Autoplay sinnvoll nutzen.

Weitere Informationen finden Sie unter [\<video> Element](/de/docs/Web/HTML/Element/video) und [Erstellung eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player).

### JavaScript Audio

```js
const myAudio = document.createElement("audio");

if (myAudio.canPlayType("audio/mpeg")) {
  myAudio.setAttribute("src", "audiofile.mp3");
} else if (myAudio.canPlayType("audio/ogg")) {
  myAudio.setAttribute("src", "audiofile.ogg");
}

myAudio.currentTime = 5;
myAudio.play();
```

Wir setzen die Quelle des Audios basierend auf dem Typ der Audiodatei, die der Browser unterstützt, dann setzen wir den Wiedergabekopf 5 Sekunden vor und versuchen, es abzuspielen.

> [!NOTE]
> Die Wiedergabe wird von den meisten Browsern ignoriert, es sei denn, sie wird durch ein benutzerinitiiertes Ereignis ausgelöst.

Es ist auch möglich, einem {{ htmlelement("audio") }}-Element eine base64-kodierte WAV-Datei zu füttern, sodass Audio sofort generiert werden kann:

```html
<audio id="player" src="data:audio/x-wav;base64,UklGRvC…"></audio>
```

[Speak.js](https://github.com/kripken/speak.js/) setzt diese Technik ein.

### JavaScript Video

```js
const myVideo = document.createElement("video");

if (myVideo.canPlayType("video/mp4")) {
  myVideo.setAttribute("src", "videofile.mp4");
} else if (myVideo.canPlayType("video/webm")) {
  myVideo.setAttribute("src", "videofile.webm");
}

myVideo.width = 480;
myVideo.height = 320;
```

Wir setzen die Quelle des Videos basierend auf dem Typ der Videodatei, die der Browser unterstützt. Dann setzen wir die Breite und Höhe des Videos.

## Web Audio API

In diesem Beispiel holen wir eine MP3-Datei mit der [`fetch()`](/de/docs/Web/API/Window/fetch) API, laden sie in eine Quelle und spielen sie ab.

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

Weitere Informationen zu den Grundlagen der Web Audio API finden Sie unter [Using the Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API).

## getUserMedia / Stream API

Es ist auch möglich, einen Live-Stream von einer Webcam und/oder einem Mikrofon mit `getUserMedia` und der Stream API zu beziehen. Dies ist Teil einer umfassenderen Technologie, die als WebRTC (Web Real-Time Communications) bekannt ist und mit den neuesten Versionen von Chrome, Firefox und Opera kompatibel ist.

Um den Stream von Ihrer Webcam zu beziehen, richten Sie zunächst ein {{ htmlelement("video") }}-Element ein:

```html
<video id="webcam" width="480" height="360"></video>
```

Verbinden Sie anschließend, wenn unterstützt, die Webcam-Quelle mit dem Videoelement:

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

Um mehr zu erfahren, lesen Sie unsere Seite zu [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia).

## Mediastream-Aufzeichnung

Neue Standards werden eingeführt, um es Ihrem Browser zu ermöglichen, Medien von Ihrem Mikrofon oder Ihrer Kamera über `getUserMedia` zu beziehen und sie sofort mit der neuen MediaStream Recording API aufzuzeichnen. Sie nehmen den Strom, den Sie von `getUserMedia` erhalten, übergeben ihn an ein `MediaRecorder`-Objekt, nehmen die resultierende Ausgabe und geben sie an Ihre Audio- oder Videoquelle weiter\*.

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

Weitere Informationen finden Sie unter [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API).

## Media Source Extensions (MSE)

[Media Source Extensions](https://w3c.github.io/media-source/) ist ein W3C-Arbeitsentwurf, der plant, das [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) zu erweitern, um es JavaScript zu ermöglichen, Mediastreams für die Wiedergabe zu erzeugen. Die Erzeugung von Streams durch JavaScript erleichtert eine Vielzahl von Anwendungsfällen wie adaptives Streaming und Zeitverschiebung bei Live-Streams.

### Encrypted Media Extensions (EME)

[Encrypted Media Extensions](https://w3c.github.io/encrypted-media/) ist ein W3C-Vorschlag, um `HTMLMediaElement` zu erweitern und APIs bereitzustellen, die die Wiedergabe von geschütztem Inhalt steuern.

Die API unterstützt Anwendungsfälle, die von einfacher Clear-Key-Entschlüsselung bis zu hochwertigem Video reichen (bei entsprechender Implementierung des Benutzeragenten). Der Lizenzen-/Schlüsselaustausch wird von der Anwendung gesteuert, was die Entwicklung robuster Wiedergabeanwendungen unterstützt, die eine Vielzahl von Inhaltentschlüsselungs- und -schutztechnologien unterstützen.

Eine der Hauptanwendungen von EME besteht darin, Browsern zu ermöglichen, DRM ([Digital Rights Management](https://de.wikipedia.org/wiki/Digital_Rights_Management))-Mechanismen zu implementieren, die helfen, zu verhindern, dass webbasierte Inhalte (insbesondere Video) kopiert werden.

### Adaptives Streaming

Neue Formate und Protokolle werden eingeführt, um adaptives Streaming zu erleichtern. Adaptives Streaming bedeutet, dass die Bandbreite und typischerweise die Qualität des Streams in Echtzeit je nach der verfügbaren Bandbreite des Benutzers geändert werden kann. Adaptives Streaming wird oft in Verbindung mit Live-Streaming genutzt, bei dem eine reibungslose Übertragung von Audio oder Video entscheidend ist.

Die Hauptformate, die für adaptives Streaming verwendet werden, sind [HLS](/de/docs/Web/Media/Audio_and_video_delivery/Live_streaming_web_audio_and_video#hls) und [MPEG-DASH](/de/docs/Web/Media/Audio_and_video_delivery/Live_streaming_web_audio_and_video#mpeg-dash). MSE wurde mit DASH im Hinterkopf entworfen. MSE definiert Bytestreams gemäß [ISOBMFF](https://dvcs.w3.org/hg/html-media/raw-file/tip/media-source/isobmff-byte-stream-format.html) und [M2TS](https://de.wikipedia.org/wiki/M2TS) (beide in DASH unterstützt, letzteres in HLS unterstützt). Generell gesprochen, wenn Sie an Standards interessiert sind, Flexibilität suchen oder die meisten modernen Browser unterstützen möchten, sind Sie mit DASH wahrscheinlich besser beraten.

> [!NOTE]
> Derzeit unterstützt Safari DASH nicht, obwohl dash.js in neueren Versionen von Safari, die mit OSX Yosemite veröffentlicht werden sollen, funktionieren wird.

DASH bietet auch eine Reihe von Profilen, darunter einfache On-Demand-Profile, die keine Vorverarbeitung und Aufteilung von Mediendateien erfordern. Es gibt auch eine Reihe von Cloud-basierten Diensten, die Ihre Medien sowohl in HLS als auch in DASH umwandeln können.

Weitere Informationen finden Sie unter [Live-Streaming von Web-Audio und -Video](/de/docs/Web/Media/Audio_and_video_delivery/Live_streaming_web_audio_and_video).

## Anpassen Ihres Mediaplayers

Sie können entscheiden, dass Ihre Audio- oder Video-Player in allen Browsern ein einheitliches Erscheinungsbild haben sollen oder ihn nur anpassen möchten, um zu Ihrer Website zu passen. Die allgemeine Technik hierfür besteht darin, das `controls`-Attribut auszulassen, sodass die Standardbrowsersteuerungen nicht angezeigt werden, eigene Steuerelemente mit HTML und CSS zu erstellen und dann JavaScript zu verwenden, um Ihre Steuerelemente mit der Audio-/Video-API zu verknüpfen.

Wenn Sie etwas zusätzlich benötigen, können Sie Funktionen hinzufügen, die in den Standardplayern derzeit nicht vorhanden sind, wie Wiedergaberate, Qualitätsstreamumschaltungen oder sogar Audio-Spektren. Sie können auch entscheiden, wie Sie Ihren Player reaktionsfähig machen – beispielsweise könnten Sie die Fortschrittsleiste unter bestimmten Bedingungen entfernen.

Sie können Klick-, Touch- und/oder Tastaturereignisse fordern, um Aktionen wie Abspielen, Pausieren und Scrubbing auszulösen. Es ist oft wichtig, an die Tastatursteuerung zur Benutzerfreundlichkeit und Barrierefreiheit zu denken.

Ein schnelles Beispiel – richten Sie zuerst Ihre Audio- und benutzerdefinierten Steuerelemente in HTML ein:

```html
<audio
  id="my-audio"
  src="http://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3"></audio>
<button id="my-control">play</button>
```

Fügen Sie ein wenig JavaScript hinzu, um Ereignisse zum Abspielen und Anhalten des Audios zu erkennen:

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

Sie können [dieses Beispiel hier ausprobieren](https://jsbin.com/jujeladu/2/edit). Weitere Informationen finden Sie unter [Erstellen eines eigenen benutzerdefinierten Audioplayers](/de/docs/Web/Media/Audio_and_video_delivery/Cross-browser_audio_basics#creating_your_own_custom_audio_player).

## Weitere Tipps für Audio/Video

### Herunterladen von Medien stoppen

Obwohl das Anhalten der Wiedergabe von Medien so einfach ist wie das Aufrufen der `pause()`-Methode des Elements, führt der Browser das Herunterladen der Medien weiter, bis das Medienelement über die Speicherbereinigung disponiert wird.

Hier ist ein Trick, der den Download sofort stoppt:

```js
const mediaElement = document.querySelector("#myMediaElementID");
mediaElement.removeAttribute("src");
mediaElement.load();
```

Indem Sie das `src`-Attribut des Medienelements entfernen und die load()-Methode aufrufen, geben Sie die mit dem Video verbundenen Ressourcen frei, was den Netzwerkdownload stoppt. Sie müssen `load()` aufrufen, nachdem Sie das Attribut entfernt haben, da das bloße Entfernen des `src`-Attributs den Ladealgorithmus nicht auslöst. Wenn das `<video>`-Element auch `<source>`-Element-Nachkommen hat, sollten diese ebenfalls entfernt werden, bevor Sie `load()` aufrufen.

Beachten Sie, dass das Einfach-Einstellen des `src`-Attributs auf einen leeren String den Browser tatsächlich dazu veranlasst, dies so zu behandeln, als würden Sie eine Videoquelle zu einem relativen Pfad setzen. Dies führt dazu, dass der Browser einen weiteren Downloadversuch zu etwas unternimmt, das wahrscheinlich kein gültiges Video ist.

### In Medien navigieren

Medienelemente bieten Unterstützung für das Verschieben der aktuellen Abspielposition zu bestimmten Punkten im Medieninhalt. Dies erfolgt durch Setzen des Wertes der `currentTime`-Eigenschaft am Element; siehe [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) für weitere Informationen zu den Eigenschaften des Elements. Setzen Sie den Wert auf die Zeit in Sekunden, ab der die Wiedergabe fortgesetzt werden soll.

Sie können die `seekable`-Eigenschaft des Elements verwenden, um die Bereiche des Mediums zu bestimmen, die derzeit zum Hinspulen zur Verfügung stehen. Dies gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Zeitbereiche auflistet, zu denen Sie navigieren können.

```js
const mediaElement = document.querySelector("#mediaElementID");
mediaElement.seekable.start(0); // Returns the starting time (in seconds)
mediaElement.seekable.end(0); // Returns the ending time (in seconds)
mediaElement.currentTime = 122; // Seek to 122 seconds
mediaElement.played.end(0); // Returns the number of seconds the browser has played
```

### Angabe des Abspielbereichs

Beim Angeben der URI eines Mediums für ein {{ htmlelement("audio") }}- oder {{ htmlelement("video") }}-Element können Sie optional zusätzliche Informationen anfügen, um den abzuspielenden Teil des Mediums anzugeben. Dazu fügen Sie einen Rautezeichen ("#") gefolgt von der Beschreibung des Medienfragments an.

Ein Zeitbereich wird mit der folgenden Syntax angegeben:

```plain
#t=[starttime][,endtime]
```

Die Zeit kann als Anzahl von Sekunden (als Fließkommawert) oder als Stunden/Minuten/Sekunden-Zeit mit Doppelpunkten getrennt angegeben werden (beispielsweise 2:05:01 für 2 Stunden, 5 Minuten und 1 Sekunde).

Einige Beispiele:

- `http://example.com/video.ogv#t=10,20`
  - : Gibt an, dass das Video den Bereich von 10 Sekunden bis 20 Sekunden abspielen soll.
- `http://example.com/video.ogv#t=,10.5`
  - : Gibt an, dass das Video vom Anfang bis zu 10,5 Sekunden abspielen soll.
- `http://example.com/video.ogv#t=,02:00:00`
  - : Gibt an, dass das Video vom Anfang bis zu zwei Stunden abspielen soll.
- `http://example.com/video.ogv#t=60`
  - : Gibt an, dass das Video bei 60 Sekunden beginnen und bis zum Ende des Videos spielen soll.

## Fehlerbehandlung

Fehler werden an die Kindelemente {{ htmlelement("source") }} geliefert, die den Fehler verursachten.

Dies ermöglicht es Ihnen, zu erkennen, welche Quellen nicht geladen werden konnten, was nützlich sein kann. Betrachten Sie dieses HTML:

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

Da Firefox MP4 und 3GP auf einigen Plattformen aufgrund ihrer patentbelasteten Natur nicht unterstützt, empfangen die {{ htmlelement("source") }}-Elemente mit den IDs "mp4_src" und "3gp_src" `error`-Ereignisse, bevor die Ogg-Ressource geladen wird. Die Quellen werden in der Reihenfolge probiert, in der sie erscheinen, und sobald eine erfolgreich geladen wird, werden die übrigen Quellen nicht weiter probiert.

### Überprüfung, ob der Browser die bereitgestellten Formate unterstützt

Verwenden Sie die folgenden verifizierten Quellen in Ihren Audio- und Videoelementen, um die Unterstützung zu prüfen.

- Audio MP3 (`type="audio/mpeg"`): [http://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3](https://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3) ([MP3-Audio live abspielen](https://jsbin.com/gekatoge/1/edit).)
- Audio MP4 (`type="audio/mp4"`): [http://jPlayer.org/audio/m4a/Miaow-01-Tempered-song.m4a](https://jPlayer.org/audio/m4a/Miaow-01-Tempered-song.m4a) ([MP4-Audio live abspielen](https://jsbin.com/gekatoge/2/edit).)
- Audio Ogg (`type="audio/ogg"`): [http://jPlayer.org/audio/ogg/Miaow-01-Tempered-song.ogg](https://jPlayer.org/audio/ogg/Miaow-01-Tempered-song.ogg) ([OGG-Audio live abspielen](https://jsbin.com/gekatoge/4/edit).)
- Video MP4 (`type="video/mp4"`): [http://jPlayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v](https://jPlayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v) ([MP4-Video live abspielen](https://jsbin.com/gekatoge/5/edit).)
- Video WebM (`type="video/webm"`): [http://jPlayer.org/video/webm/Big_Buck_Bunny_Trailer.webm](https://jPlayer.org/video/webm/Big_Buck_Bunny_Trailer.webm) ([WebM-Video live abspielen](https://jsbin.com/gekatoge/6/edit).)
- Video Ogg (`type="video/ogg"`): [http://jPlayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv](https://jPlayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv) ([OGG-Video live abspielen](https://jsbin.com/gekatoge/7/edit).)

Wenn diese nicht abgespielt werden, unterstützt der Browser, den Sie testen, das gegebene Format nicht. Erwägen Sie, ein anderes Format zu verwenden oder einen Fallback zu nutzen.

Wenn diese funktionieren, aber die von Ihnen bereitgestellten Dateien nicht, gibt es zwei mögliche Probleme:

#### 1. Der Medienserver liefert nicht die richtigen MIME-Typen mit der Datei

Obwohl dies normalerweise unterstützt wird, müssen Sie möglicherweise das Folgende zu der `.htaccess`-Datei Ihres Medienservers hinzufügen.

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

Ihre Dateien wurden möglicherweise falsch kodiert — versuchen Sie, sie mit einem der folgenden Tools zu kodieren, die sich als ziemlich zuverlässig erwiesen haben:

- [Audacity](https://sourceforge.net/projects/audacity/) — Freier Audioeditor und Recorder
- [Miro](https://www.getmiro.com/) — Freier, quelloffener Musik- und Videoplayer
- [Handbrake](https://handbrake.fr/) — Quelloffener Video-Transcoder
- [Firefogg](http://www.firefogg.org/) — Video- und Audiokodierung für Firefox
- [FFmpeg2](https://www.ffmpeg.org/) — Umfassender Kommandozeilen-Encoder
- [Vid.ly](https://m.vid.ly/) — Videoplayer, Transkodierung und Auslieferung
- [Internet Archive](https://archive.org/) — Kostenlose Transkodierung und Speicherung

### Erkennung, wenn keine Quellen geladen wurden

Um zu erkennen, dass alle Kindelemente {{ htmlelement("source") }} nicht geladen werden konnten, prüfen Sie den Wert des `networkState`-Attributes des Medienelements. Wenn dies `HTMLMediaElement.NETWORK_NO_SOURCE` ist, wissen Sie, dass alle Quellen nicht geladen werden konnten.

Wenn Sie dann eine andere Quelle hinzufügen, indem Sie ein neues {{ htmlelement("source") }}-Element als Kindelement des Medienelements einfügen, versucht Gecko, die angegebene Ressource zu laden.

### Anzeige von Fallback-Inhalten, wenn keine Quellen dekodiert werden konnten

Eine weitere Möglichkeit, die Fallback-Inhalte eines Videos anzuzeigen, wenn keine der Quellen im aktuellen Browser dekodiert werden konnte, besteht darin, einen Fehlerhandler am letzten Source-Element hinzuzufügen. Auf diese Weise können Sie das Video durch seinen Fallback-Inhalt ersetzen:

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
const lastsource = sources[sources.length - 1];
lastsource.addEventListener(
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

Es gibt eine Reihe von Audio- und Video-JavaScript-Bibliotheken. Die bekanntesten Bibliotheken erlauben Ihnen, ein konsistentes Player-Design über alle Browser hinweg zu wählen und eine Rückfalloption für Browser bereitzustellen, die Audio und Video nicht nativ unterstützen. Rückfalllösungen verwendeten historisch gesehen nun veraltete Plugins wie Adobe Flash oder Microsoft Silverlight, um einen Mediaplayer in nicht unterstützenden Browsern bereitzustellen, obwohl diese auf modernen Computern nicht mehr unterstützt werden. Auch andere Funktionen wie das [`<track>`](/de/docs/Web/HTML/Element/track)-Element für Untertitel können über Mediatheken bereitgestellt werden.

### Nur Audio

- [SoundManager](https://www.schillmania.com/projects/soundmanager2/)
- [AmplitudeJS](https://521dimensions.com/open-source/amplitudejs)
- [HowlerJS](https://howlerjs.com/)

### Nur Video

- [flowplayer](https://flowplayer.com/): Kostenlos mit Wasserzeichen des flowplayer-Logos. Quelloffen (GPL-lizenziert.)
- [JWPlayer](https://jwplayer.com/): Registrierung erforderlich zum Herunterladen. Open Source Edition (Creative Commons License.)
- [SublimeVideo](https://www.sublimevideo.net/): Registrierung erforderlich. Formularbasierte Einrichtung mit domainspezifischem Link zu CDN-gehosteter Bibliothek.
- [Video.js](https://videojs.com/): Kostenlos und Open Source (Apache 2-lizenziert.)

### Audio und Video

- [jPlayer](https://jPlayer.org/): Kostenlos und Open Source (MIT-lizenziert).
- [mediaelement.js](https://www.mediaelementjs.com/): Kostenlos und Open Source (MIT-lizenziert).

### Web Audio API

- [AudioContext monkeypatch](https://github.com/cwilso/AudioContext-MonkeyPatch): Ein Polyfill für ältere Versionen der Web Audio API; Open Source (Apache 2-lizenziert).

## Grundlegende Tutorials

- [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player)
  - : Ein Leitfaden zum Erstellen eines einfachen plattformübergreifenden Videoplayers mit dem {{ htmlelement("video") }}-Element.
- [Grundkenntnisse zur Videoplayer-Styling](/de/docs/Web/Media/Audio_and_video_delivery/Video_player_styling_basics)
  - : Mit dem im vorherigen Artikel erstellten plattformübergreifenden Videoplayer wird in diesem Artikel nun untersucht, wie grundlegendes, responsives Styling für den Player bereitgestellt wird.
- [Cross-Browser Audio Grundlagen](/de/docs/Web/Media/Audio_and_video_delivery/Cross-browser_audio_basics)
  - : Dieser Artikel bietet einen grundlegenden Leitfaden zum Erstellen eines HTML-Audioplayers, der plattformübergreifend funktioniert, mit einer Erklärung aller zugehörigen Attribute, Eigenschaften und Ereignisse sowie einem kurzen Leitfaden zu benutzerdefinierten Steuerelementen, die mit der Media-API erstellt werden.
- [Media-Buffering, -Navigieren und Zeitbereiche](/de/docs/Web/Media/Audio_and_video_delivery/buffering_seeking_time_ranges)
  - : Manchmal ist es nützlich zu wissen, wie viel {{ htmlelement("audio") }} oder {{ htmlelement("video") }} heruntergeladen oder ohne Verzögerung abspielbar ist – ein gutes Beispiel dafür ist die gepufferte Fortschrittsleiste eines Audio- oder Videoplayers. Dieser Artikel behandelt, wie man eine Puffer- bzw. Navigationsleiste mit [TimeRanges](/de/docs/Web/API/TimeRanges) und anderen Funktionen der Medien-API erstellt.
- [HTML `playbackRate` erklärt](/de/docs/Web/Media/Audio_and_video_delivery/WebAudio_playbackRate_explained)
  - : Die `playbackRate`-Eigenschaft erlaubt uns, die Geschwindigkeit oder Rate, mit der ein Stück Web-Audio oder -Video abgespielt wird, zu ändern. Dieser Artikel erklärt sie im Detail.
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
  - : Erklärt die Grundlagen der Verwendung der Web Audio API, um eine Audioquelle zu greifen, zu manipulieren und abzuspielen.

## Streaming-Media-Tutorials

- [Live-Streaming von Web-Audio und -Video](/de/docs/Web/Media/Audio_and_video_delivery/Live_streaming_web_audio_and_video)
  - : Live-Streaming-Technologie wird oft verwendet, um Live-Ereignisse wie Sport, Konzerte und im Allgemeinen TV- und Radio-Programme, die live übertragen werden, zu übermitteln. Oft auf nur Streaming verkürzt, ist das Live-Streaming der Prozess der Übertragung von Medien 'live' zu Computern und Geräten. Dies ist ein ziemlich komplexes und neues Thema mit vielen Variablen, daher werden wir in diesem Artikel eine Einführung in das Thema geben und Ihnen mitteilen, wie Sie anfangen können.
- [Einrichten von adaptiven Streaming-Medienquellen](/de/docs/Web/Media/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources)
  - : Nehmen wir an, Sie möchten eine adaptive Streaming-Medienquelle auf einem Server einrichten, die innerhalb eines HTML-Medienelements konsumiert werden soll. Wie würden Sie das tun? Dieser Artikel erklärt es, indem er zwei der gebräuchlichsten Formate untersucht: MPEG-DASH und HLS (HTTP Live Streaming).
- [DASH Adaptive Streaming für HTML 5 Video](/de/docs/Web/Media/DASH_Adaptive_Streaming_for_HTML_5_Video)
  - : Erläutert, wie adaptives Streaming mit DASH und WebM eingerichtet wird.

## Fortgeschrittene Tutorials

- [Hinzufügen von Untertiteln und Unterleggärten zu HTML-Video](/de/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)
  - : Dieser Artikel erklärt, wie Untertitel und Unterleggärten zu HTML {{ htmlelement("video") }} hinzugefügt werden, unter Verwendung von [Web_Video_Text_Tracks_Format](/de/docs/Web/API/WebVTT_API) und dem {{ htmlelement("track") }}-Element.
- [Web Audio API plattformübergreifende Unterstützung](/de/docs/Web/API/Web_Audio_API/Best_practices#cross_browser_legacy_support)
  - : Ein Leitfaden zum Schreiben von plattformübergreifend kompatiblem Web Audio API Code.
- [Einfache Audioaufnahme mit der MediaRecorder API](https://hacks.mozilla.org/2014/06/easy-audio-capture-with-the-mediarecorder-api/)
  - : Erklärt die Grundlagen der Verwendung der MediaStream Recording API zur direkten Aufzeichnung eines Medienstroms.

> [!NOTE]
> Firefox OS-Versionen 1.3 und höher unterstützen das [RTSP](https://de.wikipedia.org/wiki/Real_Time_Streaming_Protocol)-Protokoll zur Videostream-Übertragung. Eine Rückfalllösung für ältere Versionen besteht darin, `<video>` zusammen mit einem geeigneten Format für Gecko (z.B. WebM) zu verwenden, um Rückfallinhalte bereitzustellen. Weitere Informationen werden zu gegebener Zeit veröffentlicht.

## Referenzen

- [Das Video-Element](/de/docs/Web/HTML/Element/video)
- [HTMLVideoElement API](/de/docs/Web/API/HTMLVideoElement)
- [MediaSource API](/de/docs/Web/API/MediaSource)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
- [getUserMedia](/de/docs/Web/API/MediaDevices/getUserMedia)
- [Ereignisreferenz > Medien](/de/docs/Web/Events#media)
