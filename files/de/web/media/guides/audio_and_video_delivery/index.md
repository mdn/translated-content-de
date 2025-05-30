---
title: Audio- und Videobereitstellung
slug: Web/Media/Guides/Audio_and_video_delivery
l10n:
  sourceCommit: 14acf1aa7885157debdf1b6111f4bd10c064ec60
---

Wir können Audio und Video auf verschiedene Arten im Web bereitstellen, von 'statischen' Mediendateien bis hin zu adaptiven Live-Streams. Dieser Artikel soll als Ausgangspunkt dienen, um die verschiedenen Bereitstellungsmechanismen webbasierter Medien und deren Kompatibilität mit beliebten Browsern zu erkunden.

## Audio- und Video-HTML-Elemente

Unabhängig davon, ob es sich um vorab aufgezeichnete Audiodateien oder Live-Streams handelt, bleibt der Mechanismus, über den sie über die HTML-Elemente {{ htmlelement("audio") }} und {{ htmlelement("video") }} im Browser verfügbar gemacht werden, weitgehend derselbe. Um alle Browser zu unterstützen, müssen wir derzeit zwei Formate angeben, obwohl sich dies mit der Einführung der Formate MP3 und MP4 in Firefox und Opera schnell ändert. Kompatibilitätsinformationen finden Sie im [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Guides/Formats).

Um Video- und Audioinhalte bereitzustellen, sieht der allgemeine Workflow normalerweise folgendermaßen aus:

1. Überprüfen Sie, welches Format der Browser über Feature-Erkennung unterstützt (normalerweise die Wahl zwischen zwei, wie oben angegeben).
2. Wenn der Browser die Wiedergabe eines der bereitgestellten Formate nicht nativ unterstützt, präsentieren Sie entweder ein Standbild oder verwenden Sie eine Ersatztechnologie, um das Video darzustellen.
3. Bestimmen Sie, wie Sie das Medium abspielen/instanziieren möchten (z.B. ein {{ htmlelement("video") }}-Element oder `document.createElement('video')`).
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

Der obige Code erstellt einen Videoplayer mit den Abmessungen 640x480 Pixel, der ein Poster-Bild anzeigt, bis das Video abgespielt wird. Wir weisen das Video an, automatisch zu starten, aber standardmäßig stummgeschaltet zu sein.

> [!NOTE]
> Das `autoplay` Attribut kann von einigen mobilen Browsern ignoriert werden. Außerdem kann die Autoplay-Funktion umstritten sein, wenn sie missbraucht wird. Es wird dringend empfohlen, den [Autoplay-Leitfaden für Media- und Web-Audio-APIs](/de/docs/Web/Media/Guides/Autoplay) zu lesen, um zu lernen, wie Sie Autoplay sinnvoll einsetzen können.

Weitere Informationen finden Sie im [`<video>` Element](/de/docs/Web/HTML/Reference/Elements/video) und [Erstellung eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).

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

Wir setzen die Quelle des Audios in Abhängigkeit von der Art der Audiodatei, die der Browser unterstützt, und setzen dann den Abspielkopf 5 Sekunden voraus und versuchen, es abzuspielen.

> [!NOTE]
> Die Wiedergabe wird von den meisten Browsern ignoriert, es sei denn, sie wird durch ein benutzerinitiiertes Ereignis ausgelöst.

Es ist auch möglich, einem {{ htmlelement("audio") }} Element eine base64-codierte WAV-Datei zuzuführen, wodurch es möglich ist, Audio dynamisch zu erzeugen:

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

Wir setzen die Quelle des Videos abhängig von der Art der Videodatei, die der Browser unterstützt, setzen dann die Breite und Höhe des Videos.

## Web Audio API

In diesem Beispiel holen wir eine MP3-Datei mithilfe der [`fetch()`](/de/docs/Web/API/Window/fetch) API, laden sie in eine Quelle und spielen sie ab.

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

Sie können das vollständige Beispiel [live ausführen](https://mdn.github.io/webaudio-examples/decode-audio-data/promise/) oder den [Quellcode einsehen](https://github.com/mdn/webaudio-examples/tree/main/decode-audio-data/promise).

Erfahren Sie mehr über Web Audio API Grundlagen unter [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API).

## getUserMedia / Stream API

Es ist auch möglich, einen Live-Stream von einer Webcam und/oder einem Mikrofon mit `getUserMedia` und der Stream API zu erfassen. Dies ist Teil einer breiteren Technologie, bekannt als WebRTC (Web Real-Time Communications), und ist mit den neuesten Versionen von Chrome, Firefox und Opera kompatibel.

Um den Stream von Ihrer Webcam abzurufen, richten Sie zunächst ein {{ htmlelement("video") }}-Element ein:

```html
<video id="webcam" width="480" height="360"></video>
```

Als Nächstes verbinden Sie, falls unterstützt, die Webcam-Quelle mit dem Videoelement:

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

Um mehr zu erfahren, lesen Sie unsere Seite [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia).

## MediaStream-Aufzeichnung

Neue Standards werden eingeführt, um Ihrem Browser zu ermöglichen, Medien von Ihrem Mikrofon oder Ihrer Kamera mit `getUserMedia` zu erfassen und sie sofort mit der neuen MediaStream-Aufzeichnungs-API aufzuzeichnen. Sie nehmen den Stream, den Sie von `getUserMedia` erhalten, übergeben ihn an ein `MediaRecorder`-Objekt, nehmen die resultierende Ausgabe und leiten sie an Ihre Audio- oder Videoquelle weiter\*.

Der Hauptmechanismus ist unten aufgeführt:

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

Weitere Details finden Sie in der [MediaStream-Aufzeichnungs-API](/de/docs/Web/API/MediaStream_Recording_API).

## Media Source Extensions (MSE)

[Media Source Extensions](https://w3c.github.io/media-source/) sind ein W3C-Arbeitsentwurf, das plant, [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) zu erweitern, um JavaScript die Erzeugung von Medienstreams für die Wiedergabe zu ermöglichen. Die Erzeugung von Streams durch JavaScript erleichtert eine Vielzahl von Anwendungsfällen wie adaptives Streaming und zeitverschobenes Live-Streaming.

### Encrypted Media Extensions (EME)

[Encrypted Media Extensions](https://w3c.github.io/encrypted-media/) ist ein W3C-Vorschlag zur Erweiterung von `HTMLMediaElement`, das APIs bereitstellt, um die Wiedergabe von geschütztem Inhalt zu steuern.

Die API unterstützt Anwendungsfälle, die von der grundlegenden Clear-Key-Entschlüsselung bis hin zu hochwertigem Video reichen (vorausgesetzt, es gibt eine geeignete Implementierung des User Agents). Lizenz-/Schlüsselaustausch wird von der Anwendung gesteuert, was die Entwicklung robuster Wiedergabeanwendungen unterstützt, die eine Reihe von Inhaltsschutztechnologien unterstützen.

Eine der Hauptanwendungen von EME besteht darin, dass Browser DRM ([Digital Rights Management](https://en.wikipedia.org/wiki/Digital_rights_management)) implementieren können, was dazu beiträgt, dass webbasierte Inhalte (insbesondere Video) nicht kopiert werden.

### Adaptives Streaming

Neue Formate und Protokolle werden entwickelt, um adaptives Streaming zu erleichtern. Adaptives Streaming bedeutet, dass die Bandbreite und typischerweise die Qualität des Streams sich in Echtzeit an die verfügbare Bandbreite des Benutzers anpassen können. Adaptives Streaming wird oft in Verbindung mit Live-Streaming eingesetzt, bei dem eine reibungslose Bereitstellung von Audio oder Video von entscheidender Bedeutung ist.

Die Hauptformate, die für adaptives Streaming verwendet werden, sind [HLS](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#hls) und [MPEG-DASH](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#mpeg-dash). MSE wurde mit DASH im Hinterkopf entwickelt. MSE definiert Bytestreams gemäß [ISOBMFF](https://dvcs.w3.org/hg/html-media/raw-file/tip/media-source/isobmff-byte-stream-format.html) und [M2TS](https://en.wikipedia.org/wiki/M2ts) (beide unterstützt in DASH, letztere wird in HLS unterstützt). Im Allgemeinen, wenn Sie an Standards interessiert sind, Flexibilität suchen oder die meisten modernen Browser unterstützen möchten, sind Sie wahrscheinlich besser mit DASH bedient.

> [!NOTE]
> Derzeit unterstützt Safari DASH nicht, obwohl dash.js in neueren Versionen von Safari funktioniert, die für die Veröffentlichung mit OSX Yosemite geplant sind.

DASH bietet auch eine Reihe von Profilen, einschließlich On-Demand-Profile, die keine Vorverarbeitung und Aufteilung von Mediendateien erfordern. Es gibt auch eine Reihe von Cloud-basierten Diensten, die Ihre Medien in sowohl HLS als auch DASH konvertieren.

Für weitere Informationen siehe [Live-Streaming von Web-Audio und -Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video).

## Anpassen Ihres Mediaplayers

Sie können entscheiden, dass Ihr Audio- oder Videoplayer in allen Browsern ein einheitliches Erscheinungsbild haben soll oder möchten ihn einfach an das Design Ihrer Website anpassen. Die allgemeine Technik, dies zu erreichen, besteht darin, das `controls`-Attribut wegzulassen, sodass die Standard-Browsersteuerungen nicht angezeigt werden, benutzerdefinierte Steuerungen mit HTML und CSS zu erstellen und dann JavaScript zu verwenden, um Ihre Steuerungen mit der Audio/Video-API zu verlinken.

Wenn Sie etwas Zusätzliches benötigen, ist es möglich, Funktionen hinzuzufügen, die in den Standard-Playern derzeit nicht vorhanden sind, wie z.B. Wiedergabe-Geschwindigkeit, Qualitätswechsler oder sogar Audio-Spektren. Sie können auch wählen, wie Sie Ihren Player anpassungsfähig machen — zum Beispiel können Sie die Fortschrittsanzeige unter bestimmten Bedingungen entfernen.

Sie können Klick-, Touch- und/oder Tastaturereignisse erkennen, um Aktionen wie Abspielen, Anhalten und Vorspulen auszulösen. Es ist oft wichtig, an die Tastatursteuerungen zu denken, um den Benutzerkomfort und die Barrierefreiheit zu gewährleisten.

Ein schnelles Beispiel — richten Sie zuerst Ihren Audio- und benutzerdefinierte Steuerungen in HTML ein:

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

Sie können [dieses Beispiel hier ausprobieren](https://jsbin.com/jujeladu/2/edit). Weitere Informationen finden Sie unter [Erstellen Ihres eigenen benutzerdefinierten Audioplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics#creating_your_own_custom_audio_player).

## Weitere Tipps für Audio/Video

### Den Download von Medien stoppen

Während das Stoppen der Wiedergabe von Medien so einfach ist wie das Aufrufen der Methode `pause()` des Elements, lädt der Browser das Medium weiterhin herunter, bis das Medienelement durch die Speicherbereinigung entsorgt wird.

Hier ist ein Trick, der den Download sofort stoppt:

```js
const mediaElement = document.querySelector("#myMediaElementID");
mediaElement.removeAttribute("src");
mediaElement.load();
```

Durch das Entfernen des `src`-Attributs des Medienelements und das Aufrufen der `load()`-Methode werden die mit dem Video verbundenen Ressourcen freigesetzt, was den Netzwerkdownload stoppt. Sie müssen `load()` aufrufen, nachdem Sie das Attribut entfernt haben, da das bloße Entfernen des `src`-Attributs den Ladealgorithmus nicht auslöst. Wenn das `<video>`-Element auch `<source>`-Element-Nachkommen hat, sollten diese ebenfalls entfernt werden, bevor `load()` aufgerufen wird.

Beachten Sie, dass das Setzen des `src`-Attributs auf einen leeren String den Browser tatsächlich so behandelt, als ob Sie eine Videodateiquelle auf einen relativen Pfad setzen würden. Dies führt dazu, dass der Browser versucht, einen weiteren Download zu etwas durchzuführen, das wahrscheinlich kein gültiges Video ist.

### Durch Medien suchen

Medienelemente unterstützen das Bewegen der aktuellen Wiedergabeposition zu bestimmten Punkten in den Inhalten des Mediums. Dies geschieht durch Einstellen des Wertes der `currentTime`-Eigenschaft des Elements; siehe [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) für weitere Details zu den Eigenschaften des Elements. Setzen Sie den Wert auf die Zeit in Sekunden, an der Sie die Wiedergabe fortsetzen möchten.

Sie können die `seekable`-Eigenschaft des Elements verwenden, um die Zeitbereiche des Mediums zu bestimmen, die derzeit verfügbar sind, um zu diesen zu suchen. Dies gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Zeitbereiche auflistet, auf die Sie zugreifen können.

```js
const mediaElement = document.querySelector("#mediaElementID");
mediaElement.seekable.start(0); // Returns the starting time (in seconds)
mediaElement.seekable.end(0); // Returns the ending time (in seconds)
mediaElement.currentTime = 122; // Seek to 122 seconds
mediaElement.played.end(0); // Returns the number of seconds the browser has played
```

### Wiedergabebereich festlegen

Wenn Sie die URI von Medien für ein {{ htmlelement("audio") }} oder {{ htmlelement("video") }} Element angeben, können Sie optional zusätzliche Informationen hinzufügen, um den abzuspielenden Teil des Mediums anzugeben. Dazu fügen Sie ein Hash-Zeichen ("#") gefolgt von der Medienfragmentbeschreibung hinzu.

Ein Zeitbereich wird mit folgender Syntax angegeben:

```plain
#t=[starttime][,endtime]
```

Die Zeit kann als Anzahl von Sekunden (als Gleitkommawert) oder als Stunden-/Minuten-/Sekunden-Zeit, die mit Doppelpunkten getrennt ist (z.B. 2:05:01 für 2 Stunden, 5 Minuten und 1 Sekunde), angegeben werden.

Einige Beispiele:

- `http://example.com/video.ogv#t=10,20`
  - : Gibt an, dass das Video den Bereich von 10 Sekunden bis 20 Sekunden abspielen soll.
- `http://example.com/video.ogv#t=,10.5`
  - : Gibt an, dass das Video von Anfang an bis 10,5 Sekunden abgespielt werden soll.
- `http://example.com/video.ogv#t=,02:00:00`
  - : Gibt an, dass das Video von Anfang an bis zwei Stunden abgespielt werden soll.
- `http://example.com/video.ogv#t=60`
  - : Gibt an, dass das Video bei 60 Sekunden beginnen und bis zum Ende des Videos abspielen soll.

## Fehlerbehandlung

Fehler werden an die untergeordneten {{ htmlelement("source") }}-Elemente geliefert, die den Fehler verursachen.

Dies ermöglicht es Ihnen, zu erkennen, welche Quellen nicht geladen werden konnten, was nützlich sein kann. Betrachten Sie dieses HTML:

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

Da Firefox MP4 und 3GP auf einigen Plattformen aufgrund ihrer patentbelasteten Natur nicht unterstützt, empfangen die {{ htmlelement("source") }}-Elemente mit den IDs "mp4_src" und "3gp_src" `error`-Ereignisse, bevor die Ogg-Ressource geladen wird. Die Quellen werden in der Reihenfolge versucht, in der sie erscheinen, und sobald eine erfolgreich geladen wird, werden die restlichen Quellen überhaupt nicht versucht.

### Überprüfen, ob der Browser die bereitgestellten Formate unterstützt

Verwenden Sie die folgenden verifizierten Quellen in Ihren Audio- und Video-Elementen, um die Unterstützung zu überprüfen.

- Audio MP3 (`type="audio/mpeg"`): [http://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3](https://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3) ([MP3 Audio live abspielen](https://jsbin.com/gekatoge/1/edit).)
- Audio MP4 (`type="audio/mp4"`): [http://jPlayer.org/audio/m4a/Miaow-01-Tempered-song.m4a](https://jPlayer.org/audio/m4a/Miaow-01-Tempered-song.m4a) ([MP4 Audio live abspielen](https://jsbin.com/gekatoge/2/edit).)
- Audio Ogg (`type="audio/ogg"`): [http://jPlayer.org/audio/ogg/Miaow-01-Tempered-song.ogg](https://jPlayer.org/audio/ogg/Miaow-01-Tempered-song.ogg) ([OGG Audio live abspielen](https://jsbin.com/gekatoge/4/edit).)
- Video MP4 (`type="video/mp4"`): [http://jPlayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v](https://jPlayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v) ([MP4 Video live abspielen](https://jsbin.com/gekatoge/5/edit).)
- Video WebM (`type="video/webm"`): [http://jPlayer.org/video/webm/Big_Buck_Bunny_Trailer.webm](https://jPlayer.org/video/webm/Big_Buck_Bunny_Trailer.webm) ([WebM Video live abspielen](https://jsbin.com/gekatoge/6/edit).)
- Video Ogg (`type="video/ogg"`): [http://jPlayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv](https://jPlayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv) ([OGG Video live abspielen](https://jsbin.com/gekatoge/7/edit).)

Wenn diese nicht abgespielt werden, unterstützt der Browser, den Sie testen, das gegebene Format nicht. Erwägen Sie, ein anderes Format zu verwenden oder einen Fallback zu verwenden.

Wenn diese funktionieren, die Dateien, die Sie bereitstellen, jedoch nicht, gibt es zwei mögliche Probleme:

#### 1. Der Medienserver stellt die richtigen MIME-Typen nicht mit der Datei bereit

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

Ihre Dateien wurden möglicherweise falsch codiert — versuchen Sie, eine der folgenden bewährten Tools zur Kodierung zu verwenden:

- [Audacity](https://sourceforge.net/projects/audacity/) — Kostenloser Audio-Editor und Rekorder
- [Miro](https://www.getmiro.com/) — Kostenloser, quelloffener Musik- und Videoplayer
- [Handbrake](https://handbrake.fr/) — Open-Source-Video-Transcoder
- [Firefogg](https://www.firefogg.org/) — Video- und Audiokodierung für Firefox
- [FFmpeg2](https://www.ffmpeg.org/) — Umfassender Befehlszeilen-Encoder
- [Vid.ly](https://m.vid.ly/) — Videoplayer, Transkodierung und Bereitstellung
- [Internet Archive](https://archive.org/) — Kostenlose Transkodierung und Speicherung

### Erkennen, wann keine Quellen geladen wurden

Um zu erkennen, dass alle untergeordneten {{ htmlelement("source") }}-Elemente nicht geladen werden konnten, überprüfen Sie den Wert des `networkState`-Attributs des Medienelements. Wenn dies `HTMLMediaElement.NETWORK_NO_SOURCE` ist, wissen Sie, dass alle Quellen nicht geladen werden konnten.

Wenn Sie an diesem Punkt eine weitere Quelle hinzufügen, indem Sie ein neues {{ htmlelement("source") }}-Element als untergeordnetes Element des Medienelements einfügen, versucht Gecko, die angegebene Ressource zu laden.

### Fallback-Inhalte anzeigen, wenn keine Quelle dekodiert werden konnte

Eine andere Möglichkeit, die Fallback-Inhalte eines Videos zu zeigen, wenn keine der Quellen im aktuellen Browser dekodiert werden konnten, besteht darin, einen Fehlerhandler auf dem letzten Quellen-Element hinzuzufügen. Dann können Sie das Video mit seinem Fallback-Inhalt ersetzen:

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

Es gibt eine Reihe von Audio- und Video-JavaScript-Bibliotheken. Die populärsten Bibliotheken ermöglichen es Ihnen, ein konsistentes Player-Design über alle Browser hinweg zu wählen und bieten einen Fallback für Browser, die Audio und Video nicht nativ unterstützen. Fallbacks haben historisch gesehen jetzt veraltete Plugins wie Adobe Flash oder Microsoft Silverlight verwendet, um einen Mediaplayer in Browsern bereitzustellen, die keine Unterstützung bieten, obwohl diese auf modernen Computern nicht mehr unterstützt werden. Andere Funktionalitäten wie das [`<track>`](/de/docs/Web/HTML/Reference/Elements/track) Element für Untertitel können ebenfalls durch Medienbibliotheken bereitgestellt werden.

### Nur Audio

- [SoundManager](https://www.schillmania.com/projects/soundmanager2/)
- [AmplitudeJS](https://521dimensions.com/open-source/amplitudejs)
- [HowlerJS](https://howlerjs.com/)

### Nur Video

- [flowplayer](https://flowplayer.com/): Kostenlos mit Flowplayer-Logo-Wasserzeichen. Open Source (GPL-lizenziert.)
- [JWPlayer](https://jwplayer.com/): Registrierung erforderlich, um herunterzuladen. Open Source Edition (Creative Commons License.)
- [SublimeVideo](https://www.sublimevideo.net/): Registrierung erforderlich. Formularbasierte Einrichtung mit domainspezifischem Link zur CDN-gehosteten Bibliothek.
- [Video.js](https://videojs.com/): Kostenlos und Open Source (Apache 2 Lizenz.)

### Audio und Video

- [jPlayer](https://jPlayer.org/): Kostenlos und Open Source (MIT-lizenziert.)
- [mediaelement.js](https://www.mediaelementjs.com/): Kostenlos und Open Source (MIT-lizenziert.)

### Web Audio API

- [AudioContext monkeypatch](https://github.com/cwilso/AudioContext-MonkeyPatch): Ein Polyfill für ältere Versionen der Web Audio API; Open Source (Apache 2 Lizenz.)

## Leitfäden

- [Erstellung eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player)
  - : Ein Leitfaden zur Erstellung eines grundlegenden plattformübergreifenden Videoplayers mit dem {{ htmlelement("video") }} Element.
- [Videoplayer-Stilgrundlagen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics)
  - : Mit dem im vorherigen Artikel eingerichteten plattformübergreifenden Videoplayer wird in diesem Artikel nun gezeigt, wie man dem Player einige grundlegende, responsive Stile verleiht.
- [Cross-Browser Audio-Grundlagen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
  - : Dieser Artikel bietet einen grundlegenden Leitfaden zur Erstellung eines HTML-Audioplayers, der plattformübergreifend funktioniert, mit allen zugehörigen Attributen, Eigenschaften und Ereignissen erklärt und einem kurzen Leitfaden zu benutzerdefinierten Steuerungen, die mit der Media-API erstellt wurden.
- [Medienpufferung, Suche und Zeitbereiche](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges)
  - : Manchmal ist es nützlich zu wissen, wie viel {{ htmlelement("audio") }} oder {{ htmlelement("video") }} heruntergeladen wurde oder ohne Verzögerung abspielbar ist — ein gutes Beispiel hierfür ist die gepufferte Fortschrittsanzeige eines Audio- oder Videoplayers. Dieser Artikel erläutert, wie man eine Puffer-/Suchleiste mithilfe von [TimeRanges](/de/docs/Web/API/TimeRanges) und anderen Funktionen der Media-API erstellt.
- [HTML playbackRate erklärt](/de/docs/Web/Media/Guides/Audio_and_video_delivery/WebAudio_playbackRate_explained)
  - : Die `playbackRate`-Eigenschaft ermöglicht es uns, die Geschwindigkeit oder Rate zu ändern, mit der ein Stück Web-Audio oder -Video abgespielt wird. Dieser Artikel erklärt es im Detail.
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
  - : Erklärt die Grundlagen der Verwendung der Web Audio API, um eine Audioquelle zu erfassen, zu manipulieren und abzuspielen.

### Streaming-Medien

- [Live-Streaming von Web-Audio und -Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video)
  - : Live-Streaming-Technologie wird häufig verwendet, um Live-Ereignisse wie Sportveranstaltungen, Konzerte und allgemein TV- und Radioprogramme zu übertragen, die live ausgestrahlt werden. Oft nur als Streaming bezeichnet, handelt es sich beim Live-Streaming um den Prozess der Echtzeitübertragung von Medien an Computer und Geräte. Dies ist ein ziemlich komplexes und aufkommendes Thema mit vielen Variablen, daher werden wir in diesem Artikel Sie in das Thema einführen und Ihnen mitteilen, wie Sie beginnen können.
- [Einrichtung von adaptiven Streaming-Medienquellen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources)
  - : Angenommen, Sie möchten eine adaptive Streaming-Medienquelle auf einem Server einrichten, die in einem HTML-Media-Element konsumiert werden soll. Wie würden Sie das tun? Dieser Artikel erklärt, wie das funktioniert, indem er zwei der gängigsten Formate betrachtet: MPEG-DASH und HLS (HTTP Live Streaming).
- [DASH Adaptive Streaming für HTML5-Video](/de/docs/Web/API/Media_Source_Extensions_API/DASH_Adaptive_Streaming)
  - : Erläutert, wie adaptives Streaming mit DASH und WebM eingerichtet wird.

### Fortgeschrittene Themen

- [Hinzufügen von Untertiteln und Untertitel zu HTML-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)
  - : Dieser Artikel erklärt, wie man Untertitel und mehrsprachige Untertitel zu HTML {{ htmlelement("video") }} hinzufügt, indem die [Web_Video_Text_Tracks_Format](/de/docs/Web/API/WebVTT_API) und das {{ htmlelement("track") }} Element verwendet werden.
- [Web Audio API plattformübergreifende Unterstützung](/de/docs/Web/API/Web_Audio_API/Best_practices#cross_browser_legacy_support)
  - : Ein Leitfaden zum Schreiben von plattformübergreifendem Web Audio API Code.
- [Einfache Audioaufnahme mit der MediaRecorder API](https://hacks.mozilla.org/2014/06/easy-audio-capture-with-the-mediarecorder-api/)
  - : Erklärt die Grundlagen der Verwendung der MediaStream Recording API zur direkten Aufnahme eines Medienstroms.

## Referenz

- [Das Video-Element](/de/docs/Web/HTML/Reference/Elements/video)
- [HTMLVideoElement API](/de/docs/Web/API/HTMLVideoElement)
- [MediaSource API](/de/docs/Web/API/MediaSource)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [MediaStream-Aufzeichnungs-API](/de/docs/Web/API/MediaStream_Recording_API)
- [getUserMedia](/de/docs/Web/API/MediaDevices/getUserMedia)
- [Ereignisreferenz: Medien](/de/docs/Web/Events#media)
