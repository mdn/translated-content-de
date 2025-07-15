---
title: Audio- und Videowiedergabe
slug: Web/Media/Guides/Audio_and_video_delivery
l10n:
  sourceCommit: a318c45b5f0b4b8448d9c6b857206552e0e82980
---

Wir können Audio und Video im Web auf verschiedene Arten bereitstellen, von "statischen" Mediendateien bis hin zu adaptiven Live-Streams. Dieser Artikel soll als Ausgangspunkt dienen, um die verschiedenen Bereitstellungsmechanismen von webbasierten Medien und deren Kompatibilität mit gängigen Browsern zu erkunden.

## Audio- und Video-HTML-Elemente

Ob es sich um voraufgezeichnete Audiodateien oder Livestreams handelt, der Mechanismus, um sie über die {{ htmlelement("audio") }}- und {{ htmlelement("video") }}-Elemente des Browsers verfügbar zu machen, bleibt weitgehend gleich. Derzeit müssen wir zur Unterstützung aller Browser zwei Formate angeben, obwohl sich dies mit der Einführung der Formate MP3 und MP4 in Firefox und Opera schnell ändert. Sie finden Kompatibilitätsinformationen im [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats).

Um Video und Audio bereitzustellen, sieht der allgemeine Arbeitsablauf normalerweise so aus:

1. Überprüfen Sie, welches Format der Browser über Feature-Erkennung unterstützt (normalerweise eine Wahl zwischen zwei, wie oben angegeben).
2. Wenn der Browser die Wiedergabe keines der bereitgestellten Formate nativ unterstützt, zeigen Sie entweder ein Standbild an oder verwenden Sie eine alternative Technologie, um das Video anzuzeigen.
3. Bestimmen Sie, wie Sie das Medium abspielen/instanziieren möchten (z. B. ein {{ htmlelement("video") }}-Element oder vielleicht `document.createElement('video')`).
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

Der obige Code erstellt einen Audioplayer, der versucht, so viel Audio wie möglich für eine reibungslose Wiedergabe vorzuladen.

> [!NOTE]
> Das `preload`-Attribut kann von einigen mobilen Browsern ignoriert werden.

Für weitere Informationen siehe [Cross-Browser Audio Grundlagen (HTML Audio im Detail)](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics#html_audio_in_detail)

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

Der obige Code erstellt einen Videoplayer mit den Abmessungen 640x480 Pixel, der ein Posterbild anzeigt, bis das Video abgespielt wird. Wir weisen das Video an, automatisch abzuspielen, aber standardmäßig stumm zu sein.

> [!NOTE]
> Das `autoplay`-Attribut kann von einigen mobilen Browsern ignoriert werden. Außerdem kann die Autoplay-Funktion umstritten sein, wenn sie missbraucht wird. Es wird dringend empfohlen, den [Autoplay-Leitfaden für Medien und Web-Audio-APIs](/de/docs/Web/Media/Guides/Autoplay) zu lesen, um zu lernen, wie Sie Autoplay weise verwenden.

Für weitere Informationen siehe [`<video>`-Element](/de/docs/Web/HTML/Reference/Elements/video) und [Erstellung eines cross-browserfähigen Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).

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

Wir legen die Quelle des Audios in Abhängigkeit vom vom Browser unterstützten Dateityp fest, setzen dann den Wiedergabekopf auf 5 Sekunden und versuchen, sie abzuspielen.

> [!NOTE]
> Die Wiedergabe wird von den meisten Browsern ignoriert, es sei denn, sie wird durch ein benutzerinitiiertes Ereignis ausgelöst.

Es ist auch möglich, einem {{ htmlelement("audio") }}-Element eine Base64-kodierte WAV-Datei zuzuführen, um Audio direkt zu erzeugen:

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

Wir stellen die Videodateiquelle abhängig vom unterstützten Videoformat des Browsers bereit und setzen dann die Breite und Höhe des Videos fest.

## Web Audio API

In diesem Beispiel rufen wir eine MP3-Datei mithilfe der [`fetch()`](/de/docs/Web/API/Window/fetch)-API ab, laden sie in eine Quelle und spielen sie ab.

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

Erfahren Sie mehr über die Grundlagen der Web Audio API in [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API).

## getUserMedia / Stream API

Es ist auch möglich, einen Livestream von einer Webcam und/oder einem Mikrofon mit `getUserMedia` und der Stream API abzurufen. Dies ist Teil einer umfassenderen Technologie, die als WebRTC (Web Real-Time Communications) bekannt ist und mit den neuesten Versionen von Chrome, Firefox und Opera kompatibel ist.

Um den Stream von Ihrer Webcam zu erfassen, richten Sie zunächst ein {{htmlelement("video")}}-Element ein:

```html
<video id="webcam" width="480" height="360"></video>
```

Verbinden Sie als Nächstes, falls unterstützt, die Webcam-Quelle mit dem Videoelement:

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

Um mehr zu erfahren, lesen Sie unsere Seite zu [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia).

## MediaStream Recording

Neue Standards werden eingeführt, die es Ihrem Browser ermöglichen, Medien von Ihrem Mikrofon oder Ihrer Kamera mithilfe von `getUserMedia` sofort mit der neuen MediaStream Recording API aufzunehmen. Sie nehmen den Stream, den Sie von `getUserMedia` erhalten, übergeben ihn an ein `MediaRecorder`-Objekt, nehmen die resultierende Ausgabe und führen sie Ihrem Audio- oder Videoquelle\* zu.

Der Hauptmechanismus wird unten beschrieben:

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

Weitere Einzelheiten finden Sie in der [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API).

## Media Source Extensions (MSE)

[Media Source Extensions](https://w3c.github.io/media-source/) ist ein W3C-Arbeitsentwurf, der plant, [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) zu erweitern, um JavaScript die Erzeugung von Medienstreams zur Wiedergabe zu ermöglichen. Dies erleichtert JavaScript-gestützte Streams, die eine Vielzahl von Anwendungsfällen wie adaptives Streaming und Time-Shifting von Livestreams umfassen.

### Verschlüsselte Medienerweiterungen (EME)

[Verschlüsselte Medienerweiterungen](https://w3c.github.io/encrypted-media/) ist ein W3C-Vorschlag zur Erweiterung von `HTMLMediaElement`, der APIs bereitstellt, mit denen die Wiedergabe geschützter Inhalte gesteuert werden kann.

Die API unterstützt Anwendungsfälle, die von der grundlegenden Clear-Key-Entschlüsselung bis hin zur Wiedergabe von hochwertigem Video (unter Berücksichtigung einer entsprechenden Benutzeragentenimplementierung) reichen. Der Lizenz-/Schlüsselaustausch wird von der Anwendung gesteuert und ermöglicht die Entwicklung robuster Wiedergabeanwendungen, die eine Reihe von Entschlüsselungs- und Schutztechnologien für Inhalte unterstützen.

Einer der Hauptanwendungsfälle von EME ist es, Browsern die Implementierung von DRM ([Digital Rights Management](https://en.wikipedia.org/wiki/Digital_rights_management)) zu ermöglichen, was dazu beiträgt, webbasierte Inhalte (insbesondere Videos) vor dem Kopieren zu schützen.

### Adaptives Streaming

Neue Formate und Protokolle werden eingeführt, um adaptives Streaming zu erleichtern. Adaptives Streaming bedeutet, dass die Bandbreite und normalerweise auch die Qualität des Streams in Echtzeit in Reaktion auf die verfügbare Bandbreite des Benutzers geändert werden kann. Adaptives Streaming wird häufig in Verbindung mit Live-Streaming verwendet, bei dem die reibungslose Übertragung von Audio oder Video von größter Bedeutung ist.

Die Hauptformate für adaptives Streaming sind [HLS](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#hls) und [MPEG-DASH](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#mpeg-dash). MSE wurde mit DASH im Hinterkopf entwickelt. MSE definiert Bytestreams gemäß [ISOBMFF](https://dvcs.w3.org/hg/html-media/raw-file/tip/media-source/isobmff-byte-stream-format.html) und [M2TS](https://en.wikipedia.org/wiki/M2ts) (beide unterstützt in DASH, das letztere wird in HLS unterstützt). Allgemein gesprochen, wenn Sie an Standards interessiert sind, Flexibilität suchen oder die meisten modernen Browser unterstützen möchten, sind Sie mit DASH wahrscheinlich besser beraten.

> [!NOTE]
> Derzeit unterstützt Safari kein DASH, obwohl dash.js auf neueren Versionen von Safari funktioniert, die mit OSX Yosemite veröffentlicht werden sollen.

DASH bietet auch eine Reihe von Profilen, einschließlich onDemand-Profile, die keine Vorverarbeitung und Aufteilung von Mediendateien erfordern. Es gibt auch eine Reihe von Cloud-basierten Diensten, die Ihre Medien sowohl in HLS als auch in DASH konvertieren können.

Für weitere Informationen siehe [Live-Streaming von Web-Audio und -Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video).

## Anpassen Ihres Mediaplayers

Sie können feststellen, dass Sie möchten, dass Ihr Audio- oder Videoplayer über alle Browser hinweg ein einheitliches Aussehen hat oder Sie ihn einfach anpassen möchten, um zu Ihrer Website zu passen. Die allgemeine Technik hierfür besteht darin, das `controls`-Attribut wegzulassen, sodass die Standardbrowser-Steuerelemente nicht angezeigt werden, benutzerdefinierte Steuerelemente mit HTML und CSS zu erstellen und dann JavaScript zu verwenden, um Ihre Steuerelemente mit der Audio-/Video-API zu verknüpfen.

Wenn Sie etwas Extra benötigen, ist es möglich, Funktionen hinzuzufügen, die derzeit in Standardplayern nicht vorhanden sind, wie z. B. Wiedergaberate, Qualitätswechselströme oder sogar Audiospektren. Sie können auch entscheiden, wie Sie Ihren Player reaktionsfähig gestalten – zum Beispiel könnten Sie unter bestimmten Bedingungen die Fortschrittsleiste entfernen.

Sie können Klick-, Touch- und/oder Tastaturereignisse erkennen, um Aktionen wie Wiedergabe, Pause und Scrubbing auszulösen. Es ist oft wichtig, Tastatursteuerungen für den Benutzerkomfort und die Zugänglichkeit beizubehalten.

Ein schnelles Beispiel – richten Sie zuerst Ihr Audio und benutzerdefinierte Steuerelemente in HTML ein:

```html
<audio id="my-audio" src="/shared-assets/audio/guitar.mp3"></audio>
<button id="my-control">play</button>
```

Fügen Sie etwas JavaScript hinzu, um Ereignisse zu erkennen, um das Audio abzuspielen und anzuhalten:

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

Für weitere Informationen siehe [Erstellen Ihres eigenen benutzerdefinierten Audioplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics#creating_your_own_custom_audio_player).

## Weitere Tipps für Audio/Video

### Stoppen des Downloads von Medien

Während das Stoppen der Wiedergabe von Medien so einfach wie das Aufrufen der Methode `pause()` des Elements ist, lädt der Browser weiterhin die Medien herunter, bis das Medienelement über die Speicherbereinigung entfernt wird.

Hier ist ein Trick, der den Download sofort stoppt:

```js
const mediaElement = document.querySelector("#myMediaElementID");
mediaElement.removeAttribute("src");
mediaElement.load();
```

Indem Sie das `src`-Attribut des Medienelements entfernen und die `load()`-Methode aufrufen, lösen Sie die mit dem Video verbundenen Ressourcen, was den Netzwerkdownload stoppt. Sie müssen `load()` aufrufen, nachdem Sie das Attribut entfernt haben, da das bloße Entfernen des `src`-Attributs nicht den Ladealgorithmus aufruft. Wenn das `<video>`-Element auch `<source>`-Element-Nachkommen hat, sollten diese ebenfalls entfernt werden, bevor `load()` aufgerufen wird.

Beachten Sie, dass das Setzen des `src`-Attributs auf einen leeren String tatsächlich dazu führt, dass der Browser es so behandelt, als hätten Sie eine Videoquelle auf einen relativen Pfad gesetzt. Dies führt dazu, dass der Browser versucht, etwas herunterzuladen, das vermutlich kein gültiges Video ist.

### Durchsuchen von Medien

Medienelemente unterstützen das Verschieben der aktuellen Wiedergabeposition zu bestimmten Punkten im Inhalt des Mediums. Dies geschieht durch Setzen des Wertes der Eigenschaft `currentTime` des Elements; siehe [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) für weitere Details zu den Eigenschaften des Elements. Setzen Sie den Wert auf die Zeit in Sekunden, an der die Wiedergabe fortgesetzt werden soll.

Sie können die `seekable`-Eigenschaft des Elements verwenden, um die Bereiche im Medium zu bestimmen, die derzeit durchsuchbar sind. Dies gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Zeitbereiche auflistet, zu denen Sie navigieren können.

```js
const mediaElement = document.querySelector("#mediaElementID");
mediaElement.seekable.start(0); // Returns the starting time (in seconds)
mediaElement.seekable.end(0); // Returns the ending time (in seconds)
mediaElement.currentTime = 122; // Seek to 122 seconds
mediaElement.played.end(0); // Returns the number of seconds the browser has played
```

### Spezifizieren eines Wiedergabebereichs

Beim Angeben der URI von Medien für ein {{ htmlelement("audio") }}- oder {{ htmlelement("video") }}-Element können Sie optional zusätzliche Informationen hinzufügen, um den abzuspielenden Abschnitt des Mediums anzugeben. Hierzu fügen Sie ein Nummernzeichen (#) gefolgt von der Medienfragmentbeschreibung hinzu.

Ein Zeitbereich wird mit der folgenden Syntax angegeben:

```plain
#t=[starttime][,endtime]
```

Die Zeit kann als Anzahl von Sekunden (als Gleitkommazahl) oder als Stunden/Minuten/Sekunden-Zeit mit Doppelpunkten getrennt (wie 2:05:01 für 2 Stunden, 5 Minuten und 1 Sekunde) angegeben werden.

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

Fehler werden an die untergeordneten {{ htmlelement("source") }}-Elemente übermittelt, die zu den fehlerhaften Quellen gehören.

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

Da Firefox MP4 und 3GP auf einigen Plattformen aufgrund ihrer patentbeladenen Natur nicht unterstützt, werden die {{ htmlelement("source") }}-Elemente mit den IDs "mp4_src" und "3gp_src" `error`-Ereignisse erhalten, bevor die Ogg-Ressource geladen wird. Die Quellen werden in der Reihenfolge, in der sie erscheinen, geprüft, und sobald eine erfolgreich geladen wird, werden die restlichen Quellen überhaupt nicht geprüft.

### Überprüfen, ob der Browser die bereitgestellten Formate unterstützt

Die Unterstützung für Medienformate ist verfügbar auf [Can I Use](https://caniuse.com/).

- [Audio MP3 (`type="audio/mpeg"`)](https://caniuse.com/mp3)
- [Audio Ogg (`type="audio/ogg"`)](https://caniuse.com/ogg-vorbis)
- [Video MP4 (`type="video/mp4"`)](https://caniuse.com/mpeg4)
- [Video WebM (`type="video/webm"`)](https://caniuse.com/webm)
- [Video Ogg (`type="video/ogg"`)](https://caniuse.com/ogv)

Sie können auch nach [anderen Medienformaten](/de/docs/Web/Media/Guides/Formats/Containers) suchen.

Wenn ein Medienformat angeblich unterstützt wird, die von Ihnen bereitgestellten Dateien jedoch nicht abgespielt werden, gibt es zwei mögliche Probleme:

#### 1. Der Medienserver liefert die Dateien nicht mit den richtigen MIME-Typen

Obwohl dies normalerweise unterstützt wird, müssen Sie möglicherweise Folgendes zur `.htaccess`-Datei Ihres Medienservers hinzufügen.

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

Ihre Dateien wurden möglicherweise falsch codiert — versuchen Sie, sie mit einem der folgenden Tools zu codieren, die sich als recht zuverlässig erwiesen haben:

- [Audacity](https://sourceforge.net/projects/audacity/) — Kostenloser Audio-Editor und -Rekorder
- [Miro](https://www.getmiro.com/) — Kostenloser, Open-Source Musik- und Videoplayer
- [Handbrake](https://handbrake.fr/) — Open Source Video-Transcoder
- [Firefogg](https://www.firefogg.org/) — Video- und Audiokodierung für Firefox
- [FFmpeg2](https://www.ffmpeg.org/) — Umfassender Kommandozeilen-Encoder
- [Vid.ly](https://m.vid.ly/) — Video-Player, Transcodierung und Lieferung
- [Internet Archive](https://archive.org/) — Kostenlose Transcodierung und Speicherung

### Erkennen, wenn keine Quellen geladen wurden

Um zu erkennen, dass alle untergeordneten {{ htmlelement("source") }}-Elemente nicht geladen werden konnten, überprüfen Sie den Wert des `networkState`-Attributs des Medienelements. Wenn dies `HTMLMediaElement.NETWORK_NO_SOURCE` ist, wissen Sie, dass alle Quellen nicht geladen werden konnten.

Wenn Sie an diesem Punkt eine weitere Quelle hinzufügen, indem Sie ein neues {{ htmlelement("source") }}-Element als untergeordnetes Element des Medienelements einfügen, versucht Gecko, die angegebene Ressource zu laden.

### Fallback-Inhalte anzeigen, wenn keine Quelle dekodiert werden konnte

Eine weitere Möglichkeit, den Fallback-Inhalt eines Videos anzuzeigen, wenn keine der Quellen im aktuellen Browser dekodiert werden konnte, besteht darin, einen Fehler-Handler am letzten Source-Element hinzuzufügen. Dann können Sie das Video durch seinen Fallback-Inhalt ersetzen:

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

## Audio/Video-JavaScript-Bibliotheken

Es gibt eine Reihe von Audio- und Video-JavaScript-Bibliotheken. Die beliebtesten Bibliotheken ermöglichen es, ein einheitliches Player-Design über alle Browser hinweg zu wählen und bieten eine Alternative für Browser, die keine native Unterstützung für Audio und Video haben. Alternativen nutzten historisch gesehen jetzt veraltete Plugins wie Adobe Flash oder Microsoft Silverlight, um in nicht unterstützenden Browsern einen Mediaplayer bereitzustellen, obwohl diese auf modernen Computern nicht mehr unterstützt werden. Andere Funktionen wie das [`<track>`](/de/docs/Web/HTML/Reference/Elements/track)-Element für Untertitel können ebenfalls durch Medienbibliotheken bereitgestellt werden.

### Nur Audio

- [SoundManager](https://www.schillmania.com/projects/soundmanager2/)
- [AmplitudeJS](https://521dimensions.com/open-source/amplitudejs)
- [HowlerJS](https://howlerjs.com/)

### Nur Video

- [flowplayer](https://flowplayer.com/): Gratis mit einem Flowplayer-Logo-Wasserzeichen. Open Source (GPL-lizenziert.)
- [JWPlayer](https://jwpconnatix.com/): Registrierungsanforderung zum Herunterladen. Open Source Edition (Creative Commons-Lizenz.)
- [SublimeVideo](https://www.sublimevideo.net/): Registrierungsanforderung. Formularbasierte Einrichtung mit domainspezifischem Link zur CDN-gehosteten Bibliothek.
- [Video.js](https://videojs.com/): Gratis und Open Source (Apache 2 Lizenz.)

### Audio und Video

- [jPlayer](https://jPlayer.org/): Gratis und Open Source (MIT-Lizenz.)
- [mediaelement.js](https://www.mediaelementjs.com/): Gratis und Open Source (MIT-Lizenz.)

### Web Audio API

- [AudioContext monkeypatch](https://github.com/cwilso/AudioContext-MonkeyPatch): Ein Polyfill für ältere Versionen der Web Audio API; Open Source (Apache 2 Lizenz.)

## Leitfäden

- [Erstellung eines Cross-Browser-Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player)
  - : Ein Leitfaden zur Erstellung eines grundlegenden Cross-Browser-Videoplayers unter Verwendung des {{ htmlelement("video") }}-Elements.
- [Grundlagen zur Videoplayer-Stilisierung](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics)
  - : Mit dem Cross-Browser-Videoplayer, der im vorherigen Artikel eingeführt wurde, wird in diesem Artikel beschrieben, wie man eine grundlegende, responsive Stilisierung für den Player bereitstellt.
- [Cross-Browser-Audio-Grundlagen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
  - : Dieser Artikel bietet einen grundlegenden Leitfaden zum Erstellen eines HTML-Audioplayers, der browserübergreifend funktioniert, mit allen zugehörigen Attributen, Eigenschaften und Ereignissen erklärt und einem kurzen Leitfaden zu benutzerdefinierten Steuerelementen, die mit der Media-API erstellt wurden.
- [Medienpufferspeicherung, -suche und -zeitbereiche](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges)
  - : Manchmal ist es nützlich zu wissen, wie viel {{ htmlelement("audio") }} oder {{ htmlelement("video") }} heruntergeladen oder ohne Verzögerung abspielbar ist – ein gutes Beispiel hierfür ist die gepufferte Fortschrittsleiste eines Audio- oder Videoplayers. Dieser Artikel diskutiert, wie man eine Puffer-/Suchleiste unter Verwendung von [TimeRanges](/de/docs/Web/API/TimeRanges) und anderen Funktionen der Media-API erstellt.
- [HTML-Wiedergabegeschwindigkeit erklärt](/de/docs/Web/Media/Guides/Audio_and_video_delivery/WebAudio_playbackRate_explained)
  - : Die `playbackRate`-Eigenschaft ermöglicht es uns, die Geschwindigkeit oder Rate zu ändern, mit der ein Stück Web-Audio oder Video abgespielt wird. Dieser Artikel erklärt dies im Detail.
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
  - : Erklärt die Grundlagen der Nutzung der Web Audio API, um eine Audioquelle zu erfassen, zu manipulieren und wiederzugeben.

### Streaming Media

- [Livestreaming von Web-Audio und -Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video)
  - : Livestreaming-Technologie wird oft verwendet, um Live-Ereignisse wie Sport, Konzerte und allgemein TV- und Radioprogramme, die live ausgestrahlt werden, zu übermitteln. Oft einfach als Streaming abgekürzt, ist Livestreaming der Prozess der Übertragung von Medien "live" auf Computer und Geräte. Dies ist ein ziemlich komplexes und neues Thema mit vielen Variablen, also werden wir in diesem Artikel in das Thema einführen und Ihnen zeigen, wie Sie beginnen können.
- [Einrichten adaptiver Streamingmedienquellen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources)
  - : Angenommen, Sie möchten eine adaptive Streaming-Medienquelle auf einem Server einrichten, die innerhalb eines HTML-Medienelements konsumiert werden soll. Wie würden Sie das machen? Dieser Artikel erklärt, wie es geht, indem er sich mit zwei der häufigsten Formate befasst: MPEG-DASH und HLS (HTTP Live Streaming).
- [DASH-Adaptive-Streaming für HTML5-Video](/de/docs/Web/API/Media_Source_Extensions_API/DASH_Adaptive_Streaming)
  - : Erläutert, wie man adaptives Streaming mit DASH und WebM einrichtet.

### Fortgeschrittene Themen

- [Hinzufügen von Untertiteln und Überschriften zu HTML-Videos](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)
  - : Dieser Artikel erklärt, wie Sie einem HTML-{{ htmlelement("video") }}-Element Untertitel und Überschriften hinzufügen können, indem Sie das [Web_Video_Text_Tracks_Format](/de/docs/Web/API/WebVTT_API) und das {{ htmlelement("track") }}-Element verwenden.
- [Web Audio API-Browserunterstützung](/de/docs/Web/API/Web_Audio_API/Best_practices#cross_browser_legacy_support)
  - : Ein Leitfaden zum Schreiben von browserübergreifendem Web-Audio-API-Code.
- [Einfache Audioaufnahme mit der MediaRecorder API](https://hacks.mozilla.org/2014/06/easy-audio-capture-with-the-mediarecorder-api/)
  - : Erklärt die Grundlagen der Nutzung der MediaStream Recording API, um direkt einen Media-Stream aufzunehmen.

## Referenz

- [Das Videoelement](/de/docs/Web/HTML/Reference/Elements/video)
- [HTMLVideoElement API](/de/docs/Web/API/HTMLVideoElement)
- [MediaSource API](/de/docs/Web/API/MediaSource)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
- [getUserMedia](/de/docs/Web/API/MediaDevices/getUserMedia)
- [Ereignisreferenz: Medien](/de/docs/Web/Events#media)
