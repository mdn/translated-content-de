---
title: Audio- und Videobereitstellung
slug: Web/Media/Guides/Audio_and_video_delivery
l10n:
  sourceCommit: 226c823808b3ee9f2e48fd019ca92a7b51fc474f
---

Wir können Audio und Video im Web auf verschiedene Weise bereitstellen, von "statischen" Mediendateien bis hin zu adaptiven Live-Streams. Dieser Artikel soll als Ausgangspunkt dienen, um die verschiedenen Bereitstellungsmechanismen von web-basierten Medien und die Kompatibilität mit gängigen Browsern zu erkunden.

## Audio- und Video-HTML-Elemente

Ob wir es mit vorab aufgenommenen Audiodateien oder Live-Streams zu tun haben, der Mechanismus, um sie über die {{ htmlelement("audio")}}- und {{ htmlelement("video")}}-Elemente des Browsers verfügbar zu machen, bleibt ziemlich gleich. Derzeit müssen wir, um alle Browser zu unterstützen, zwei Formate angeben, obwohl sich dies mit der Einführung der MP3- und MP4-Formate in Firefox und Opera schnell ändert. Informationen zur Kompatibilität finden Sie im [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Guides/Formats).

Um Video und Audio bereitzustellen, sieht der allgemeine Ablauf normalerweise so aus:

1. Überprüfen, welches Format der Browser über Feature-Erkennung unterstützt (normalerweise eine Wahl zwischen zwei, wie oben beschrieben).
2. Wenn der Browser die Wiedergabe keines der bereitgestellten Formate nativ unterstützt, entweder ein Standbild präsentieren oder eine Fallback-Technologie verwenden, um das Video darzustellen.
3. Bestimmen, wie Sie die Medien abspielen/initiiieren möchten (z.B. ein {{ htmlelement("video")}}-Element oder möglicherweise `document.createElement('video')`).
4. Die Mediendatei an den Player liefern.

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

Der obige Code wird einen Audio-Player erstellen, der versucht, so viel Audio wie möglich für eine reibungslose Wiedergabe vorzuladen.

> [!NOTE]
> Das `preload`-Attribut kann von einigen mobilen Browsern ignoriert werden.

Weitere Informationen finden Sie unter [Cross Browser Audio Basics (HTML Audio im Detail)](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics#html_audio_in_detail)

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

Der obige Code erstellt einen Video-Player mit den Abmessungen 640x480 Pixel, der ein Poster-Bild anzeigt, bis das Video abgespielt wird. Wir weisen das Video an, automatisch zu starten, aber standardmäßig stummgeschaltet zu sein.

> [!NOTE]
> Das `autoplay`-Attribut kann von einigen mobilen Browsern ignoriert werden. Außerdem kann die Autoplay-Funktion, wenn sie missbraucht wird, umstritten sein. Es wird dringend empfohlen, den [Autoplay-Leitfaden für Media- und Web-Audio-APIs](/de/docs/Web/Media/Guides/Autoplay) zu lesen, um zu lernen, wie man Autoplay sinnvoll einsetzt.

Weitere Informationen finden Sie unter [`<video>` element](/de/docs/Web/HTML/Element/video) und [Erstellen eines plattformübergreifenden Video-Players](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).

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

Wir setzen die Quelle des Audios entsprechend dem Typ der Audiodatei, die der Browser unterstützt, dann setzen wir den Abspielpunkt auf 5 Sekunden und versuchen, es abzuspielen.

> [!NOTE]
> Play wird von den meisten Browsern ignoriert, es sei denn, es wird durch ein vom Benutzer initiiertes Ereignis ausgelöst.

Es ist auch möglich, einem {{ htmlelement("audio")}}-Element eine Base64-kodierte WAV-Datei bereitzustellen, sodass Audio on-the-fly generiert werden kann:

```html
<audio id="player" src="data:audio/x-wav;base64,UklGRvC…"></audio>
```

[Speak.js](https://github.com/kripken/speak.js/) nutzt diese Technik.

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

Wir setzen die Quelle des Videos entsprechend dem Typ der Videodatei, die der Browser unterstützt, dann setzen wir die Breite und Höhe des Videos.

## Web Audio API

In diesem Beispiel rufen wir eine MP3-Datei mithilfe der [`fetch()`](/de/docs/Web/API/Window/fetch) API ab, laden sie in eine Quelle und spielen sie ab.

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

Sie können das vollständige Beispiel [live ausführen](https://mdn.github.io/webaudio-examples/decode-audio-data/promise/), oder [den Quellcode anzeigen](https://github.com/mdn/webaudio-examples/tree/main/decode-audio-data/promise).

Erfahren Sie mehr über die Grundlagen der Web-Audio-API in [Using the Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API).

## getUserMedia / Stream API

Es ist auch möglich, einen Live-Stream von einer Webcam und/oder einem Mikrofon mithilfe von `getUserMedia` und der Stream API abzurufen. Dies ist Teil einer breiteren Technologie, die als WebRTC (Web Real-Time Communications) bekannt ist und mit den neuesten Versionen von Chrome, Firefox und Opera kompatibel ist.

Um den Stream von Ihrer Webcam abzurufen, richten Sie zuerst ein {{htmlelement("video")}}-Element ein:

```html
<video id="webcam" width="480" height="360"></video>
```

Anschließend, wenn unterstützt, verbinden Sie die Webcam-Quelle mit dem Videoelement:

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

Um mehr zu erfahren, lesen Sie unsere Seite [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia).

## MediaStream Aufnahme

Neue Standards werden eingeführt, um Ihrem Browser zu ermöglichen, Medien von Ihrem Mikrofon oder Ihrer Kamera mit `getUserMedia` abzurufen und sie sofort mit der neuen MediaStream Recording API aufzuzeichnen. Sie nehmen den Stream, den Sie von `getUserMedia` erhalten, reichen ihn an ein `MediaRecorder`-Objekt weiter, nehmen die resultierende Ausgabe und speisen sie in Ihre Audio- oder Videoquelle\* ein.

Der Hauptmechanismus wird im Folgenden skizziert:

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

[Media Source Extensions](https://w3c.github.io/media-source/) ist ein W3C Arbeitsentwurf, der plant, [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) zu erweitern, um JavaScript zu ermöglichen, Medienstreams zur Wiedergabe zu erzeugen. Das Erzeugen von Streams durch JavaScript erleichtert eine Vielzahl von Anwendungsfällen wie adaptives Streaming und Time-Shifting von Live-Streams.

### Encrypted Media Extensions (EME)

[Encrypted Media Extensions](https://w3c.github.io/encrypted-media/) ist ein W3C-Vorschlag zur Erweiterung von `HTMLMediaElement`, der APIs bereitstellt, um die Wiedergabe von geschütztem Inhalt zu steuern.

Die API unterstützt Anwendungsfälle, die von einfacher Clear-Key-Entschlüsselung bis hin zu hochwertigen Videos reichen (vorausgesetzt, eine entsprechende Benutzeragenten-Implementierung ist vorhanden). Der Lizenz-/Schlüsselaustausch wird von der Anwendung gesteuert, was die Entwicklung robuster Wiedergabeanwendungen erleichtert, die eine Reihe von Entschlüsselungs- und Schutztechnologien unterstützen.

Eine der Hauptanwendungen von EME ist es, Browsern zu ermöglichen, DRM ([Digital Rights Management](https://en.wikipedia.org/wiki/Digital_rights_management)) zu implementieren, was dazu beiträgt, dass webbasierte Inhalte (insbesondere Videos) nicht kopiert werden.

### Adaptives Streaming

Neue Formate und Protokolle werden eingeführt, um adaptives Streaming zu erleichtern. Adaptives Streaming-Media bedeutet, dass die Bandbreite und in der Regel die Qualität eines Streams in Echtzeit in Reaktion auf die verfügbare Bandbreite des Benutzers geändert werden können. Adaptives Streaming wird häufig in Verbindung mit Live-Streaming verwendet, wo eine reibungslose Bereitstellung von Audio oder Video entscheidend ist.

Die wichtigsten Formate, die für adaptives Streaming verwendet werden, sind [HLS](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#hls) und [MPEG-DASH](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#mpeg-dash). MSE wurde mit DASH im Sinn gestaltet. MSE definiert Bytestreams gemäß [ISOBMFF](https://dvcs.w3.org/hg/html-media/raw-file/tip/media-source/isobmff-byte-stream-format.html) und [M2TS](https://en.wikipedia.org/wiki/M2ts) (beide unterstützt in DASH, letzteres unterstützt in HLS). Im Allgemeinen, wenn Sie an Standards interessiert sind, nach Flexibilität suchen oder die meisten modernen Browser unterstützen möchten, sind Sie wahrscheinlich mit DASH besser bedient.

> [!NOTE]
> Derzeit unterstützt Safari DASH nicht, obwohl dash.js in neueren Versionen von Safari funktionieren wird, die mit OSX Yosemite veröffentlicht werden sollen.

DASH bietet auch eine Reihe von Profilen, einschließlich einfacher On-Demand-Profile, die keine Vorverarbeitung und Aufteilung von Mediendateien erfordern. Es gibt auch eine Reihe von Cloud-basierten Diensten, die Ihre Medien sowohl in HLS als auch in DASH konvertieren.

Weitere Informationen finden Sie unter [Live-Streaming von Web-Audio und -Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video).

## Anpassen Ihres Media Players

Sie können entscheiden, dass Ihr Audio- oder Videoplayer ein einheitliches Erscheinungsbild über alle Browser hinweg haben soll oder möchten ihn einfach an das Design Ihrer Website anpassen. Die allgemeine Technik, um dies zu erreichen, besteht darin, auf das `controls`-Attribut zu verzichten, damit die Standardsteuerungen des Browsers nicht angezeigt werden, benutzerdefinierte Steuerungen mit HTML und CSS zu erstellen und dann die Steuerungen mit JavaScript mit der Audio-/Video-API zu verknüpfen.

Wenn Sie etwas hinzufügen möchten, das in den Standard-Playern derzeit nicht vorhanden ist, wie z.B. Wiedergabegeschwindigkeit, Qualitätsstromwechsel oder sogar Audiospektren, ist dies möglich. Sie können auch wählen, wie Sie Ihren Player responsive gestalten — zum Beispiel können Sie die Fortschrittsleiste unter bestimmten Bedingungen entfernen.

Sie können Klick-, Berührungs- und/oder Tastaturereignisse erkennen, um Aktionen wie Play, Pause und Scrubbing auszulösen. Es ist oft wichtig, sich an Tastatursteuerungen zu erinnern, um die Benutzerfreundlichkeit und Zugänglichkeit zu verbessern.

Ein schnelles Beispiel — richten Sie zuerst Ihre Audio- und benutzerdefinierten Steuerelemente in HTML ein:

```html
<audio
  id="my-audio"
  src="http://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3"></audio>
<button id="my-control">play</button>
```

Fügen Sie ein wenig JavaScript hinzu, um Ereignisse zu erkennen, um das Audio abzuspielen und zu pausieren:

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

Sie können [dieses Beispiel hier ausprobieren](https://jsbin.com/jujeladu/2/edit). Weitere Informationen finden Sie unter [Erstellung eines eigenen benutzerdefinierten Audioplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics#creating_your_own_custom_audio_player).

## Weitere Tipps für Audio/Video

### Den Download von Medien stoppen

Während das Stoppen der Wiedergabe von Medien so einfach wie das Aufrufen der `pause()`-Methode des Elements ist, lädt der Browser weiterhin die Medien herunter, bis das Medienelement durch die Speicherbereinigung entsorgt wird.

Hier ist ein Trick, der den Download sofort stoppt:

```js
const mediaElement = document.querySelector("#myMediaElementID");
mediaElement.removeAttribute("src");
mediaElement.load();
```

Durch Entfernen des `src`-Attributs des Medienelements und Aufrufen der `load()`-Methode geben Sie die mit dem Video verbundenen Ressourcen frei, was den Netzwerkdownload stoppt. Sie müssen `load()` nach dem Entfernen des Attributs aufrufen, da nur das Entfernen des `src`-Attributs den Ladevorgang nicht auslöst. Wenn das `<video>`-Element auch `<source>`-Element-Nachfahren enthält, sollten diese ebenfalls vor dem Aufrufen von `load()` entfernt werden.

Bitte beachten Sie, dass das Setzen des `src`-Attributs auf einen leeren String den Browser dazu bringt, es so zu behandeln, als würden Sie eine Videoquelle auf einen relativen Pfad setzen. Dies führt dazu, dass der Browser versucht, einen weiteren Download durchzuführen, zu etwas, das wahrscheinlich keine gültige Videodatei ist.

### Durch Medien navigieren

Medienelemente bieten Unterstützung dafür, die aktuelle Wiedergabeposition zu bestimmten Punkten im Inhalt der Medien zu verschieben. Dies wird erreicht, indem der Wert der `currentTime`-Eigenschaft des Elements gesetzt wird; siehe [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) für weitere Informationen zu den Eigenschaften des Elements. Setzen Sie den Wert auf die Zeit in Sekunden, zu der die Wiedergabe fortgesetzt werden soll.

Sie können die `seekable`-Eigenschaft des Elements verwenden, um die Bereiche der Medien zu bestimmen, die derzeit zum Navigieren verfügbar sind. Diese gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Zeitbereiche auflistet, zu denen Sie navigieren können.

```js
const mediaElement = document.querySelector("#mediaElementID");
mediaElement.seekable.start(0); // Returns the starting time (in seconds)
mediaElement.seekable.end(0); // Returns the ending time (in seconds)
mediaElement.currentTime = 122; // Seek to 122 seconds
mediaElement.played.end(0); // Returns the number of seconds the browser has played
```

### Wiedergabebereich angeben

Wenn Sie die URI von Medien für ein {{ HTMLElement("audio") }} oder {{ HTMLElement("video") }}-Element angeben, können Sie optional zusätzliche Informationen hinzufügen, um den abzuspielenden Teil der Medien anzugeben. Um dies zu tun, fügen Sie ein Rautezeichen ("#") gefolgt von der Medienfragmentbeschreibung hinzu.

Ein Zeitbereich wird mit der Syntax angegeben:

```plain
#t=[starttime][,endtime]
```

Die Zeit kann als eine Anzahl von Sekunden (als Gleitkommazahl) oder als Stunden/Minuten/Sekunden-Zeit mit Doppelpunkten getrennt (wie z.B. 2:05:01 für 2 Stunden, 5 Minuten und 1 Sekunde) angegeben werden.

Einige Beispiele:

- `http://example.com/video.ogv#t=10,20`
  - : Gibt an, dass das Video den Bereich von 10 Sekunden bis 20 Sekunden abspielen soll.
- `http://example.com/video.ogv#t=,10.5`
  - : Gibt an, dass das Video vom Anfang bis 10,5 Sekunden abspielen soll.
- `http://example.com/video.ogv#t=,02:00:00`
  - : Gibt an, dass das Video vom Anfang bis zwei Stunden abspielen soll.
- `http://example.com/video.ogv#t=60`
  - : Gibt an, dass das Video bei 60 Sekunden beginnen und bis zum Ende des Videos abspielen soll.

## Fehlerbehandlung

Fehler werden an die {{ HTMLElement("source") }}-Elemente übergeben, die den fehlerhaften Quellen entsprechen.

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

Da Firefox MP4 und 3GP auf einigen Plattformen aufgrund ihrer patentrechtlich belasteten Natur nicht unterstützt, werden die {{ HTMLElement("source") }}-Elemente mit den IDs "mp4_src" und "3gp_src" `error`-Ereignisse erhalten, bevor die Ogg-Ressource geladen wird. Die Quellen werden in der Reihenfolge versucht, in der sie erscheinen, und sobald eine erfolgreich geladen wird, werden die verbleibenden Quellen überhaupt nicht versucht.

### Überprüfen, ob der Browser die bereitgestellten Formate unterstützt

Verwenden Sie die folgenden verifizierten Quellen in Ihren Audio- und Videoelementen, um die Unterstützung zu überprüfen.

- Audio MP3 (`type="audio/mpeg"`): [http://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3](https://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3) ([play the MP3 audio live](https://jsbin.com/gekatoge/1/edit).)
- Audio MP4 (`type="audio/mp4"`): [http://jPlayer.org/audio/m4a/Miaow-01-Tempered-song.m4a](https://jPlayer.org/audio/m4a/Miaow-01-Tempered-song.m4a) ([play the MP4 audio live](https://jsbin.com/gekatoge/2/edit).)
- Audio Ogg (`type="audio/ogg"`): [http://jPlayer.org/audio/ogg/Miaow-01-Tempered-song.ogg](https://jPlayer.org/audio/ogg/Miaow-01-Tempered-song.ogg) ([play the OGG audio live](https://jsbin.com/gekatoge/4/edit).)
- Video MP4 (`type="video/mp4"`): [http://jPlayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v](https://jPlayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v) ([play the MP4 video live](https://jsbin.com/gekatoge/5/edit).)
- Video WebM (`type="video/webm"`): [http://jPlayer.org/video/webm/Big_Buck_Bunny_Trailer.webm](https://jPlayer.org/video/webm/Big_Buck_Bunny_Trailer.webm) ([play the WebM video live](https://jsbin.com/gekatoge/6/edit).)
- Video Ogg (`type="video/ogg"`): [http://jPlayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv](https://jPlayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv) ([play the OGG video live](https://jsbin.com/gekatoge/7/edit).)

Wenn diese nicht abgespielt werden, unterstützt der von Ihnen getestete Browser das angegebene Format nicht. Erwägen Sie die Verwendung eines anderen Formats oder einer Fallback-Option.

Wenn diese funktionieren, aber die von Ihnen bereitgestellten Dateien nicht, gibt es zwei mögliche Probleme:

#### 1. Der Medienserver liefert nicht die richtigen MIME-Typen mit der Datei

Obwohl dies normalerweise unterstützt wird, müssen Sie möglicherweise Folgendes in die `.htaccess`-Datei Ihres Medienservers einfügen.

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

Ihre Dateien wurden möglicherweise falsch kodiert - versuchen Sie, die Kodierung mit einem der folgenden Tools durchzuführen, die sich als ziemlich zuverlässig erwiesen haben:

- [Audacity](https://sourceforge.net/projects/audacity/) — Kostenloser Audio-Editor und Recorder
- [Miro](https://www.getmiro.com/) — Kostenloser, Open-Source Musik- und Videoplayer
- [Handbrake](https://handbrake.fr/) — Open Source Video-Transcoder
- [Firefogg](http://www.firefogg.org/) — Video- und Audio-Codierung für Firefox
- [FFmpeg2](https://www.ffmpeg.org/) — Umfassender Befehlszeilen-Coder
- [Vid.ly](https://m.vid.ly/) — Video-Player, Transcodierung und Bereitstellung
- [Internet Archive](https://archive.org/) — Kostenloses Transcodieren und Speichern

### Erkennen, wann keine Quellen geladen wurden

Um zu erkennen, dass alle {{ HTMLElement("source") }}-Elemente fehlgeschlagen sind, überprüfen Sie den Wert des `networkState`-Attributs des Medienelements. Wenn dies `HTMLMediaElement.NETWORK_NO_SOURCE` ist, wissen Sie, dass alle Quellen nicht geladen werden konnten.

Wenn Sie zu diesem Zeitpunkt eine weitere Quelle hinzufügen, indem Sie ein neues {{ HTMLElement("source") }}-Element als Kind des Medienelements einfügen, versucht Gecko, die angegebene Ressource zu laden.

### Fallback-Inhalte anzeigen, wenn keine Quelle dekodiert werden konnte

Eine andere Möglichkeit, den Fallback-Inhalt eines Videos zu zeigen, wenn keine der Quellen im aktuellen Browser dekodiert werden konnte, besteht darin, einen Fehler-Handler für das letzte Quellenelement hinzuzufügen. Dann können Sie das Video durch seinen Fallback-Inhalt ersetzen:

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

Es gibt eine Vielzahl von Audio- und Video-JavaScript-Bibliotheken. Die beliebtesten Bibliotheken ermöglichen Ihnen, ein einheitliches Player-Design über alle Browser hinweg zu wählen und bieten einen Fallback für Browser, die Audio und Video nicht nativ unterstützen. Fallbacks wurden historisch durch inzwischen veraltete Plugins wie Adobe Flash oder Microsoft Silverlight-Plugins bereitgestellt, um einen Media Player in nicht unterstützenden Browsern zu bieten, obwohl diese auf modernen Computern nicht mehr unterstützt werden. Weitere Funktionen wie das [`<track>`](/de/docs/Web/HTML/Element/track)-Element für Untertitel können ebenfalls durch Medienbibliotheken bereitgestellt werden.

### Nur Audio

- [SoundManager](https://www.schillmania.com/projects/soundmanager2/)
- [AmplitudeJS](https://521dimensions.com/open-source/amplitudejs)
- [HowlerJS](https://howlerjs.com/)

### Nur Video

- [flowplayer](https://flowplayer.com/): Kostenlos mit einem Flowplayer-Logo-Wasserzeichen. Open Source (GPL-lizenziert.)
- [JWPlayer](https://jwplayer.com/): Registrierung erforderlich zum Herunterladen. Open Source Edition (Creative Commons License.)
- [SublimeVideo](https://www.sublimevideo.net/): Registrierung erforderlich. Formularbasierte Einrichtung mit domainspezifischem Link zur CDN-gehosteten Bibliothek.
- [Video.js](https://videojs.com/): Kostenlos und Open Source (Apache 2-lizenziert.)

### Audio und Video

- [jPlayer](https://jPlayer.org/): Kostenlos und Open Source (MIT-lizenziert.)
- [mediaelement.js](https://www.mediaelementjs.com/): Kostenlos und Open Source (MIT-lizenziert.)

### Web Audio API

- [AudioContext monkeypatch](https://github.com/cwilso/AudioContext-MonkeyPatch): Ein Polyfill für ältere Versionen der Web Audio API; Open Source (Apache 2-lizenziert.)

## Leitfäden

- [Erstellen eines plattformübergreifenden Video-Players](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player)
  - : Ein Leitfaden zur Erstellung eines grundlegenden plattformübergreifenden Videospielers mit dem {{ htmlelement("video") }}-Element.
- [Grundlagen der Video-Player-Styling](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics)
  - : Mit dem plattformübergreifenden Videoplayer, der im vorherigen Artikel erstellt wurde, wird in diesem Artikel nun vermittelt, wie man dem Player ein grundlegendes, ansprechendes Styling verleiht.
- [Grundlagen von Cross-Browser-Audio](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
  - : Dieser Artikel bietet einen grundlegenden Leitfaden zur Erstellung eines plattformübergreifenden HTML-Audioplayers, mit allen zugehörigen Attributen, Eigenschaften und Ereignissen erklärt, sowie einen schnellen Leitfaden zu benutzerdefinierten Steuerelementen, die mit der Media API erstellt wurden.
- [Medienpufferung, Suchen und Zeitbereiche](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges)
  - : Manchmal ist es nützlich zu wissen, wie viel {{ htmlelement("audio") }} oder {{ htmlelement("video") }} heruntergeladen oder ohne Verzögerung abspielbar ist — ein gutes Beispiel dafür ist die gepufferte Fortschrittsleiste eines Audio- oder Videoplayers. Dieser Artikel erklärt, wie man eine Puffer/Suchleiste mit [TimeRanges](/de/docs/Web/API/TimeRanges) und anderen Funktionen der Media API erstellt.
- [HTML playbackRate erklärt](/de/docs/Web/Media/Guides/Audio_and_video_delivery/WebAudio_playbackRate_explained)
  - : Die `playbackRate`-Eigenschaft ermöglicht es uns, die Geschwindigkeit oder Rate zu ändern, mit der ein Web-Audio oder Video abgespielt wird. Dieser Artikel erklärt es im Detail.
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
  - : Erklärt die Grundlagen der Verwendung der Web Audio API, um eine Audioquelle zu erfassen, zu manipulieren und wiederzugeben.

### Streaming Media

- [Live-Streaming von Web-Audio und -Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video)
  - : Live-Streaming-Technologie wird oft eingesetzt, um Live-Ereignisse wie Sport, Konzerte und allgemein TV- und Radioprogramme, die live übertragen werden, weiterzuleiten. Oft einfach zu “Streaming” verkürzt, ist Live-Streaming der Prozess der Übertragung von Medien 'live' an Computer und Geräte. Dies ist ein ziemlich komplexes und neu entstehendes Thema mit vielen Variablen. In diesem Artikel werden wir Ihnen das Thema näherbringen und zeigen, wie Sie loslegen können.
- [Einrichten von adaptiven Streaming-Media-Quellen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources)
  - : Angenommen, Sie möchten eine adaptive Streaming-Media-Quelle auf einem Server einrichten, die in einem HTML-Medienelement konsumiert werden soll. Wie würden Sie das tun? Dieser Artikel erklärt es, wobei auf zwei der häufigsten Formate eingegangen wird: MPEG-DASH und HLS (HTTP Live Streaming).
- [DASH Adaptive Streaming für HTML 5 Video](/de/docs/Web/API/Media_Source_Extensions_API/DASH_Adaptive_Streaming)
  - : Detailliert, wie man adaptives Streaming mit DASH und WebM einrichtet.

### Fortgeschrittene Themen

- [Hinzufügen von Untertiteln und Untertiteln zu HTML-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)
  - : Dieser Artikel erklärt, wie man Untertitel und Übersetzungen zu HTML-{{ htmlelement("video") }} mit dem [Web_Video_Text_Tracks_Format](/de/docs/Web/API/WebVTT_API) und dem {{ htmlelement("track") }}-Element hinzufügt.
- [Web Audio API plattformübergreifende Unterstützung](/de/docs/Web/API/Web_Audio_API/Best_practices#cross_browser_legacy_support)
  - : Ein Leitfaden zur plattformübergreifenden Web Audio API Programmierung.
- [Einfache Audioerfassung mit der MediaRecorder API](https://hacks.mozilla.org/2014/06/easy-audio-capture-with-the-mediarecorder-api/)
  - : Erklärt die Grundlagen der Nutzung der MediaStream Recording API zur direkten Aufnahme eines Medienstroms.

## Referenz

- [Das Video-Element](/de/docs/Web/HTML/Element/video)
- [HTMLVideoElement API](/de/docs/Web/API/HTMLVideoElement)
- [MediaSource API](/de/docs/Web/API/MediaSource)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
- [getUserMedia](/de/docs/Web/API/MediaDevices/getUserMedia)
- [Ereignisreferenz: Medien](/de/docs/Web/Events#media)
