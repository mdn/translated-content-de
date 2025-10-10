---
title: Audio- und Videoübertragung
slug: Web/Media/Guides/Audio_and_video_delivery
l10n:
  sourceCommit: 144fc1770b3eaa69bb5be691f505565b6dd9a68e
---

Wir können Audio und Video auf dem Web auf verschiedene Arten bereitstellen, von 'statischen' Mediendateien bis hin zu adaptiven Live-Streams. Dieser Artikel soll als Ausgangspunkt dienen, um die verschiedenen Übertragungsmechanismen von webbasierter Medien und deren Kompatibilität mit populären Browsern zu erkunden.

## Audio- und Video-HTML-Elemente

Ob es sich um vorab aufgezeichnete Audiodateien oder Live-Streams handelt, der Mechanismus, um sie über die {{ htmlelement("audio") }} und {{ htmlelement("video") }} Elemente des Browsers verfügbar zu machen, bleibt nahezu unverändert. Derzeit müssen wir zur Unterstützung aller Browser zwei Formate angeben, obwohl sich dies mit der Einführung von MP3- und MP4-Formaten in Firefox und Opera schnell ändert. Informationen zur Kompatibilität finden Sie im [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats).

Um Videos und Audios zu übertragen, sieht der allgemeine Arbeitsablauf normalerweise folgendermaßen aus:

1. Überprüfen Sie, welches Format der Browser über Funktionsprüfung unterstützt (normalerweise eine Auswahl von zwei, wie oben erwähnt).
2. Wenn der Browser keines der bereitgestellten Formate nativ abspielen kann, zeigen Sie entweder ein Standbild an oder verwenden Sie eine Ersatztechnologie, um das Video zu präsentieren.
3. Entscheiden Sie, wie Sie das Medium abspielen/instanziieren möchten (z.B. ein {{ htmlelement("video") }}-Element oder möglicherweise `document.createElement('video')`).
4. Übermitteln Sie die Mediendatei an den Player.

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

Weitere Informationen finden Sie unter [Cross-Browser Audio Basics (HTML Audio im Detail)](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics#html_audio_in_detail).

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

Der obige Code erstellt einen Videoplayer mit Abmessungen von 640x480 Pixeln, der ein Posterbild anzeigt, bis das Video abgespielt wird. Wir weisen das Video an, automatisch abzuspielen, jedoch standardmäßig stummgeschaltet zu sein.

> [!NOTE]
> Das `autoplay`-Attribut kann von einigen mobilen Browsern ignoriert werden. Außerdem kann die Autoplay-Funktion kontrovers sein, wenn sie missbraucht wird. Es wird dringend empfohlen, den [Autoplay-Leitfaden für Medien und Web Audio APIs](/de/docs/Web/Media/Guides/Autoplay) zu lesen, um zu erfahren, wie Sie Autoplay sinnvoll einsetzen.

Weitere Informationen finden Sie im [`<video>` Element](/de/docs/Web/HTML/Reference/Elements/video) und [Erstellen eines Cross-Browser Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).

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

Wir setzen die Quelle des Audios abhängig vom unterstützten Audiodateityp des Browsers und setzen dann den Abspielkopf 5 Sekunden weiter und versuchen, es abzuspielen.

> [!NOTE]
> Die Wiedergabe wird von den meisten Browsern ignoriert, es sei denn, sie wird durch ein benutzerinitiiertes Ereignis ausgelöst.

Es ist auch möglich, einem {{ htmlelement("audio") }}-Element eine base64-kodierte WAV-Datei zu übergeben, was es ermöglicht, Audio in Echtzeit zu generieren:

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

Wir setzen die Quelle des Videos abhängig vom unterstützten Videodateityp des Browsers und legen dann die Breite und Höhe des Videos fest.

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

Sie können [das vollständige Beispiel live ausführen](https://mdn.github.io/webaudio-examples/decode-audio-data/promise/), oder den [Quellcode anzeigen](https://github.com/mdn/webaudio-examples/tree/main/decode-audio-data/promise).

Erfahren Sie mehr über die Grundlagen der Web Audio API unter [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API).

## getUserMedia / Stream API

Es ist auch möglich, einen Live-Stream von einer Webcam und/oder einem Mikrofon mit `getUserMedia` und der Stream API abzurufen. Dies ist Teil einer breiteren Technologie, bekannt als WebRTC (Web Real-Time Communications) und ist mit den neuesten Versionen von Chrome, Firefox und Opera kompatibel.

Um den Stream von Ihrer Webcam zu erfassen, richten Sie zuerst ein {{ htmlelement("video") }}-Element ein:

```html
<video id="webcam" width="480" height="360"></video>
```

Verbinden Sie anschließend, falls unterstützt, die Webcam-Quelle mit dem Videoelement:

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

## MediaStream-Aufzeichnung

Neue Standards werden eingeführt, die es Ihrem Browser ermöglichen, Medien von Ihrem Mikrofon oder Ihrer Kamera mit `getUserMedia` zu erfassen und sie sofort mit der neuen MediaStream Recording API aufzuzeichnen. Sie nehmen den Stream, den Sie von `getUserMedia` erhalten, geben ihn an ein `MediaRecorder`-Objekt weiter, nehmen die resultierende Ausgabe und speisen sie in Ihre Audio- oder Videoquelle ein\*.

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

[Media Source Extensions](https://w3c.github.io/media-source/) ist ein W3C-Arbeitsentwurf, der plant, [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) zu erweitern, um JavaScript die Generierung von Medienstreams für die Wiedergabe zu ermöglichen. Die Erlaubnis für JavaScript, Streams zu generieren, erleichtert eine Vielzahl von Anwendungsfällen wie adaptives Streaming und Zeitschiebung von Livestreams.

### Encrypted Media Extensions (EME)

[Encrypted Media Extensions](https://w3c.github.io/encrypted-media/) ist ein W3C-Vorschlag zur Erweiterung von `HTMLMediaElement`, der APIs zur Steuerung der Wiedergabe von geschütztem Inhalt bereitstellt.

Die API unterstützt Anwendungsfälle, die vom einfachen Clear-Key-Verschlüsselung bis hin zu hochwertigen Videos reichen (vorausgesetzt eine angemessene Benutzeragenten-Implementierung). Der Austausch von Lizenzen/Schlüsseln wird von der Anwendung gesteuert, was die Entwicklung robuster Wiedergabeanwendungen unterstützt, die eine Vielzahl von Inhaltsentschlüsselungs- und -schutztechnologien unterstützen.

Einer der Hauptverwendungszwecke von EME ist es, Browsern zu erlauben, DRM ([Digital Rights Management](https://en.wikipedia.org/wiki/Digital_rights_management)) zu implementieren, um zu verhindern, dass webbasierte Inhalte (insbesondere Videos) kopiert werden.

### Adaptives Streaming

Neue Formate und Protokolle werden eingeführt, um adaptives Streaming zu erleichtern. Adaptives Streaming von Medien bedeutet, dass die Bandbreite und typischerweise die Qualität des Streams in Echtzeit reagieren kann auf die verfügbare Bandbreite des Benutzers. Adaptives Streaming wird häufig in Verbindung mit Live-Streaming verwendet, wo die gleichmäßige Übertragung von Audio oder Video von größter Bedeutung ist.

Die Hauptformate, die für adaptives Streaming verwendet werden, sind [HLS](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#hls) und [MPEG-DASH](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#mpeg-dash). MSE wurde mit DASH im Hinterkopf entwickelt. MSE definiert Byte-Streams gemäß [ISOBMFF](https://dvcs.w3.org/hg/html-media/raw-file/tip/media-source/isobmff-byte-stream-format.html) und [M2TS](https://en.wikipedia.org/wiki/M2ts) (beide in DASH unterstützt, letzteres in HLS). Im Allgemeinen, wenn Sie an Standards interessiert sind, nach Flexibilität suchen oder die meisten modernen Browser unterstützen möchten, sind Sie wahrscheinlich besser mit DASH bedient.

> [!NOTE]
> Derzeit unterstützt Safari DASH nicht, obwohl dash.js in neueren Versionen von Safari funktionieren wird, die mit OSX Yosemite veröffentlicht werden sollen.

DASH bietet auch eine Reihe von Profilen, einschließlich On-Demand-Profile, die keine Vorverarbeitung und Aufteilung von Mediendateien erfordern. Es gibt auch eine Reihe von Cloud-basierten Diensten, die Ihre Medien sowohl in HLS als auch DASH umwandeln werden.

Weitere Informationen finden Sie unter [Live-Streaming-Web-Audio und -Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video).

## Anpassung Ihres Mediaplayers

Sie können entscheiden, dass Ihr Audio- oder Videoplayer ein einheitliches Erscheinungsbild über alle Browser hinweg haben soll oder Sie möchten ihn nur anpassen, um zu Ihrer Website zu passen. Die allgemeine Technik, dies zu erreichen, besteht darin, das `controls`-Attribut zu weglassen, sodass die Standardbrowsersteuerungen nicht angezeigt werden, benutzerdefinierte Kontrollen mit HTML und CSS zu erstellen und dann JavaScript zu verwenden, um Ihre Steuerelemente mit der Audio-/Video-API zu verknüpfen.

Wenn Sie etwas Zusätzliches benötigen, ist es möglich, Funktionen hinzuzufügen, die in den Standardplayern derzeit nicht vorhanden sind, wie Abspielgeschwindigkeit, Qualitätsstream-Schalter oder sogar Audio-Spektren. Sie können auch wählen, wie Sie Ihren Player responsiv gestalten möchten — zum Beispiel können Sie die Fortschrittsleiste unter bestimmten Bedingungen entfernen.

Sie können Klick-, Berührungs- und/oder Tastatureingaben erkennen, um Aktionen wie Wiedergabe, Pause und Scrubbing auszulösen. Es ist oft wichtig, an Tastatureingaben für Benutzerfreundlichkeit und Barrierefreiheit zu denken.

Ein kurzes Beispiel — richten Sie zunächst Ihre Audio- und benutzerdefinierten Steuerelemente in HTML ein:

```html
<audio id="my-audio" src="/shared-assets/audio/guitar.mp3"></audio>
<button id="my-control">play</button>
```

fügen Sie ein wenig JavaScript hinzu, um Ereignisse zum Abspielen und Anhalten des Audios zu erkennen:

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

myControl.addEventListener("click", () => {
  switchState();
});

window.addEventListener("keypress", checkKey);
```

{{EmbedLiveSample("Anpassung Ihres Mediaplayers", "", 200)}}

Weitere Informationen finden Sie unter [Erstellen Sie Ihren eigenen benutzerdefinierten Audioplayer](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics#creating_your_own_custom_audio_player).

## Weitere Tipps für Audio/Video

### Stoppen des Medien-Downloads

Während das Stoppen der Wiedergabe von Medien so einfach ist wie das Aufrufen der `pause()`-Methode des Elements, lädt der Browser weiterhin die Medien herunter, bis das Medienelement durch die Speicherbereinigung entfernt wird.

Hier ist ein Trick, der den Download sofort stoppt:

```js
const mediaElement = document.querySelector("#myMediaElementID");
mediaElement.removeAttribute("src");
mediaElement.load();
```

Durch das Entfernen des `src`-Attributs des Medienelements und das Aufrufen der `load()`-Methode geben Sie die mit dem Video verbundenen Ressourcen frei, was den Netzwerkaustausch stoppt. Sie müssen `load()` nach dem Entfernen des Attributs aufrufen, da nur das Entfernen des `src`-Attributs nicht den Ladealgorithmus aufruft. Wenn das `<video>`-Element auch `<source>`-Element-Abkömmlinge hat, sollten diese auch entfernt werden, bevor `load()` aufgerufen wird.

Beachten Sie, dass allein das Setzen des `src`-Attributs auf einen leeren String tatsächlich dazu führt, dass der Browser es so behandelt, als würden Sie die Quelle eines Videos auf einen relativen Pfad setzen. Dies veranlasst den Browser zum Versuch eines weiteren Downloads von etwas, das wahrscheinlich kein gültiges Video ist.

### Durch Medien navigieren

Medienelemente bieten Unterstützung für das Bewegen der aktuellen Wiedergabeposition zu bestimmten Punkten im Inhalt der Medien. Dies geschieht durch Setzen des Wertes der `currentTime`-Eigenschaft des Elements; siehe [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) für weitere Details zu den Eigenschaften des Elements. Setzen Sie den Wert auf die Zeit in Sekunden, an der Sie die Wiedergabe fortsetzen möchten.

Sie können die `seekable`-Eigenschaft des Elements verwenden, um die Bereiche der Medien zu bestimmen, die derzeit zum Suchen verfügbar sind. Dies gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Zeitbereiche auflistet, zu denen Sie suchen können.

```js
const mediaElement = document.querySelector("#mediaElementID");
mediaElement.seekable.start(0); // Returns the starting time (in seconds)
mediaElement.seekable.end(0); // Returns the ending time (in seconds)
mediaElement.currentTime = 122; // Seek to 122 seconds
mediaElement.played.end(0); // Returns the number of seconds the browser has played
```

### Angabe des Wiedergabebereichs

Wenn Sie die URI von Medien für ein {{ HTMLElement("audio") }} oder {{ HTMLElement("video") }}-Element angeben, können Sie optional zusätzliche Informationen einschließen, um den abzuspielenden Medienteil anzugeben. Hierzu hängen Sie ein Rautezeichen ("#") gefolgt von der Beschreibung des Medienfragments an.

Ein Zeitbereich wird unter Verwendung der folgenden Syntax angegeben:

```plain
#t=[starttime][,endtime]
```

Die Zeit kann als Anzahl von Sekunden (als Zahl mit Gleitkommazahlen) oder als Stunden/Minuten/Sekunden-Zeit getrennt mit Doppelpunkten angegeben werden (z.B. 2:05:01 für 2 Stunden, 5 Minuten und 1 Sekunde).

Einige Beispiele:

- `http://example.com/video.ogv#t=10,20`
  - : Gibt an, dass das Video den Bereich von 10 Sekunden bis 20 Sekunden abspielen soll.
- `http://example.com/video.ogv#t=,10.5`
  - : Gibt an, dass das Video von Anfang an bis zu 10,5 Sekunden abgespielt werden soll.
- `http://example.com/video.ogv#t=,02:00:00`
  - : Gibt an, dass das Video von Anfang an bis zu zwei Stunden abgespielt werden soll.
- `http://example.com/video.ogv#t=60`
  - : Gibt an, dass das Video bei 60 Sekunden starten und bis zum Ende des Videos abspielen soll.

## Fehlerbehandlung

Fehler werden an die untergeordneten {{ HTMLElement("source") }}-Elemente geliefert, die den Fehler hervorgerufen haben.

Dies ermöglicht es Ihnen zu erkennen, welche Quellen nicht geladen wurden, was nützlich sein kann. Betrachten Sie dieses HTML:

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

Da Firefox MP4 und 3GP auf einigen Plattformen aufgrund ihrer patentgeschützten Natur nicht unterstützt, erhalten die {{ HTMLElement("source") }}-Elemente mit den IDs "mp4_src" und "3gp_src" `error`-Ereignisse, bevor die Ogg-Ressource geladen wird. Die Quellen werden in der Reihenfolge ausprobiert, in der sie erscheinen, und sobald eine erfolgreich geladen wurde, werden die verbleibenden Quellen überhaupt nicht mehr ausprobiert.

### Überprüfung, ob der Browser die bereitgestellten Formate unterstützt

Unterstützung für Medienformate ist verfügbar auf [Can I Use](https://caniuse.com/).

- [Audio MP3 (`type="audio/mpeg"`)](https://caniuse.com/mp3)
- [Audio Ogg (`type="audio/ogg"`)](https://caniuse.com/ogg-vorbis)
- [Video MP4 (`type="video/mp4"`)](https://caniuse.com/mpeg4)
- [Video WebM (`type="video/webm"`)](https://caniuse.com/webm)
- [Video Ogg (`type="video/ogg"`)](https://caniuse.com/ogv)

Sie können auch nach [anderen Medienformaten](/de/docs/Web/Media/Guides/Formats/Containers) suchen.

Wenn ein Medienformat unterstützt werden soll, die von Ihnen bereitgestellten Dateien jedoch nicht abgespielt werden, gibt es zwei mögliche Probleme:

#### 1. Der Medienserver liefert nicht die richtigen MIME-Typen mit der Datei

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

Ihre Dateien könnten falsch codiert worden sein — versuchen Sie, eine der folgenden bewährten Tools zu verwenden:

- [Audacity](https://sourceforge.net/projects/audacity/) — Kostenloser Audio-Editor und -Rekorder
- [Miro](https://www.getmiro.com/) — Kostenloser, quelloffener Musik- und Videoplayer
- [Handbrake](https://handbrake.fr/) — Open Source Video Transcoder
- [Firefogg](https://www.firefogg.org/) — Video- und Audiocodierung für Firefox
- [FFmpeg2](https://www.ffmpeg.org/) — Umfassender Befehlszeilen-Encoder
- [Vid.ly](https://m.vid.ly/) — Videoplayer, Transkodierung und Bereitstellung
- [Internet Archive](https://archive.org/) — Kostenlose Transkodierung und Speicherung

### Erkennen, wenn keine Quellen geladen wurden

Um zu erkennen, dass alle untergeordneten {{ HTMLElement("source") }}-Elemente nicht geladen werden konnten, überprüfen Sie den Wert des `networkState`-Attributs des Medienelements. Wenn dieser Wert `HTMLMediaElement.NETWORK_NO_SOURCE` ist, wissen Sie, dass alle Quellen nicht geladen werden konnten.

Falls Sie zu diesem Zeitpunkt eine weitere Quelle hinzufügen, indem Sie ein neues {{ HTMLElement("source") }}-Element als Kind des Medienelements einfügen, versucht Gecko, die angegebene Ressource zu laden.

### Anzeigen von Ersatzinhalt, wenn keine Quelle decodiert werden konnte

Eine andere Möglichkeit, den Ersatzinhalt eines Videos anzuzeigen, wenn keine der Quellen im aktuellen Browser decodiert werden konnte, besteht darin, einen Fehlerbehandler für das letzte Quellenelement hinzuzufügen. Dann können Sie das Video durch seinen Ersatzinhalt ersetzen:

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
lastSource.addEventListener("error", (ev) => {
  const d = document.createElement("div");
  d.innerHTML = v.innerHTML;
  v.parentNode.replaceChild(d, v);
});
```

## Audio/Video JavaScript-Bibliotheken

Eine Anzahl von Audio- und Video-JavaScript-Bibliotheken existiert. Die beliebtesten Bibliotheken ermöglichen Ihnen, ein einheitliches Player-Design über alle Browser hinweg zu wählen und bieten eine Lösung für Browser, die Audio und Video nicht nativ unterstützen. Fallbacks haben historisch gesehen jetzt veraltete Plugins wie Adobe Flash oder Microsoft Silverlight-Plugins verwendet, um in nicht unterstützenden Browsern einen Mediaplayer bereitzustellen, obwohl diese auf modernen Computern nicht mehr unterstützt werden. Andere Funktionalitäten, wie das `<track>`-Element für Untertitel, können ebenfalls durch Mediatheken bereitgestellt werden.

### Nur Audio

- [SoundManager](https://www.schillmania.com/projects/soundmanager2/)
- [AmplitudeJS](https://serversideup.net/open-source/amplitudejs/)
- [HowlerJS](https://howlerjs.com/)

### Nur Video

- [flowplayer](https://flowplayer.com/): Gratis mit einem Flowplayer-Logo-Wasserzeichen. Open Source (GPL-lizenziert.)
- [JWPlayer](https://jwpconnatix.com/): Registrierung zum Herunterladen erforderlich. Open Source Edition (Creative Commons Lizenz.)
- [SublimeVideo](https://www.sublimevideo.net/): Registrierung erforderlich. Formularbasierte Einrichtung mit domänenspezifischem Link zur CDN-gehosteten Bibliothek.
- [Video.js](https://videojs.org/): Gratis und Open Source (Apache 2 lizenziert.)

### Audio und Video

- [jPlayer](https://jPlayer.org/): Gratis und Open Source (MIT-lizenziert.)
- [mediaelement.js](https://www.mediaelementjs.com/): Gratis und Open Source (MIT-lizenziert.)

### Web Audio API

- [AudioContext Monkeypatch](https://github.com/cwilso/AudioContext-MonkeyPatch): Eine Polyfill für ältere Versionen der Web Audio API; Open Source (Apache 2 lizenziert.)

## Leitfaden

- [Erstellen eines Cross-Browser Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player)
  - : Ein Leitfaden zur Erstellung eines grundlegenden Cross-Browser-Videoplayers mit dem {{ htmlelement("video") }}-Element.
- [Grundlagen der Videoplayer-Styling](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics)
  - : Mit dem Cross-Browser-Videoplayer, der im vorherigen Artikel eingerichtet wurde, befasst sich dieser Artikel nun mit der Bereitstellung einiger grundlegender, responsiver Stile für den Player.
- [Hinzufügen von Untertiteln zu HTML-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)
  - : Dieser Artikel erklärt, wie man Untertitel zu HTML-{{ htmlelement("video") }} hinzufügt, mit [Web Video Text Tracks Format](/de/docs/Web/API/WebVTT_API) und dem {{ htmlelement("track") }}-Element.
- [Cross-Browser Audio Basics](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
  - : Dieser Artikel bietet einen grundlegenden Leitfaden zur Erstellung eines HTML-Audioplayers, der browserübergreifend funktioniert, mit allen zugehörigen Attributen, Eigenschaften und Ereignissen erklärt, und einem kurzen Leitfaden zu benutzerdefinierten Steuerelementen, die mit der Media API erstellt wurden.
- [Medienpufferung, Suche und Zeitbereiche](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges)
  - : Manchmal ist es nützlich zu wissen, wie viel {{ htmlelement("audio") }} oder {{ htmlelement("video") }} heruntergeladen oder ohne Verzögerung abspielbar ist — ein gutes Beispiel dafür ist die gepufferte Fortschrittsleiste eines Audio- oder Videoplayers. Dieser Artikel diskutiert, wie man eine Puffer-/Suchleiste mit [TimeRanges](/de/docs/Web/API/TimeRanges) erstellt und andere Funktionen der Media API.
- [HTML playbackRate erklärt](/de/docs/Web/Media/Guides/Audio_and_video_delivery/WebAudio_playbackRate_explained)
  - : Die `playbackRate`-Eigenschaft ermöglicht es uns, die Geschwindigkeit oder Rate zu ändern, mit der ein Web-Audio- oder Video gespielt wird. Dieser Artikel erklärt dies im Detail.
- [Die Web Audio API verwenden](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
  - : Erklärt die Grundlagen der Verwendung der Web Audio API zum Erfassen, Manipulieren und Abspielen einer Audioquelle.

### Streaming-Medien

- [Live-Streaming-Web-Audio und Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video)
  - : Live-Streaming-Technologie wird oft genutzt, um Live-Events wie Sport, Konzerte und im Allgemeinen TV- und Radiosendungen, die live ausgestrahlt werden, zu übertragen. Oft auf einfach nur Streaming verkürzt, ist Live-Streaming der Prozess der Übertragung von Medien 'live' an Computer und Geräte. Dies ist ein ziemlich komplexes und neu entstehendes Thema mit vielen Variablen. In diesem Artikel führen wir Sie in das Thema ein und zeigen, wie Sie anfangen können.
- [Einrichten von adaptiven Streaming-Medienquellen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources)
  - : Angenommen, Sie möchten auf einem Server eine adaptive Streaming-Medienquelle einrichten, die innerhalb eines HTML-Medienelements konsumiert werden kann. Wie würden Sie das tun? Dieser Artikel erklärt das, und beschäftigt sich mit zwei der gängigsten Formate: MPEG-DASH und HLS (HTTP Live Streaming).
- [DASH Adaptive Streaming für HTML 5 Video](/de/docs/Web/API/Media_Source_Extensions_API/DASH_Adaptive_Streaming)
  - : Beschreibt, wie adaptives Streaming mit DASH und WebM eingerichtet wird.

### Fortgeschrittene Themen

- [Web Audio API Cross Browser Support](/de/docs/Web/API/Web_Audio_API/Best_practices#cross_browser_legacy_support)
  - : Ein Leitfaden zum Schreiben von Cross-Browser-Web-Audio-API-Code.
- [Einfache Audioaufnahme mit der MediaRecorder API](https://hacks.mozilla.org/2014/06/easy-audio-capture-with-the-mediarecorder-api/)
  - : Erklärt die Grundlagen der Verwendung der MediaStream Recording API, um einen Medienstream direkt aufzunehmen.

## Referenz

- [Das Video-Element](/de/docs/Web/HTML/Reference/Elements/video)
- [HTMLVideoElement API](/de/docs/Web/API/HTMLVideoElement)
- [MediaSource API](/de/docs/Web/API/MediaSource)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
- [getUserMedia](/de/docs/Web/API/MediaDevices/getUserMedia)
- [Ereignisindex: Medien](/de/docs/Web/API/Document_Object_Model/Events#media)
