---
title: Audio- und Videowiedergabe
slug: Web/Media/Guides/Audio_and_video_delivery
l10n:
  sourceCommit: 3cbd2b2b2eb0be9425949c20ca5d398645f7c0e9
---

Wir können Audio und Video im Web auf verschiedene Arten bereitstellen, von 'statischen' Mediendateien bis zu adaptiven Live-Streams. Dieser Artikel soll als Ausgangspunkt für die Erkundung der verschiedenen Bereitstellungsmechanismen webbasierten Medien und die Kompatibilität mit populären Browsern dienen.

## HTML-Elemente für Audio und Video

Egal, ob es sich um voraufgezeichnete Audiodateien oder Live-Streams handelt, der Mechanismus, um sie über die {{ htmlelement("audio")}} und {{ htmlelement("video")}} Elemente des Browsers verfügbar zu machen, bleibt weitgehend gleich. Derzeit müssen wir zur Unterstützung aller Browser zwei Formate angeben, obwohl sich dies mit der Einführung der Formate MP3 und MP4 in Firefox und Opera schnell ändert. Kompatibilitätsinformationen finden Sie im [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats).

Um Video und Audio bereitzustellen, folgt der allgemeine Arbeitsablauf normalerweise diesem Schema:

1. Prüfen, welches Format der Browser über Feature-Erkennung unterstützt (in der Regel die Wahl zwischen zwei, wie oben angegeben).
2. Wenn der Browser keines der bereitgestellten Formate nativ abspielen kann, entweder ein Standbild präsentieren oder eine Fallback-Technologie verwenden, um das Video anzuzeigen.
3. Identifizieren, wie Sie das Medium abspielen/initialisieren möchten (z.B. ein {{ htmlelement("video") }}-Element oder vielleicht `document.createElement('video')`).
4. Die Mediendatei an den Player übergeben.

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
> Das `preload`-Attribut kann von einigen mobilen Browsern ignoriert werden.

Weitere Infos finden Sie unter [Cross Browser Audio Basics (HTML Audio im Detail)](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics#html_audio_in_detail).

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

Der obige Code erstellt einen Videoplayer mit den Abmessungen 640x480 Pixel, der ein Posterbild anzeigt, bis das Video abgespielt wird. Wir weisen das Video an, automatisch zu starten, jedoch standardmäßig stummgeschaltet zu sein.

> [!NOTE]
> Das `autoplay`-Attribut kann von einigen mobilen Browsern ignoriert werden. Die automatische Wiedergabe kann auch umstritten sein, wenn sie missbraucht wird. Es wird dringend empfohlen, dass Sie den [Leitfaden zur automatischen Wiedergabe für Medien und Web Audio APIs](/de/docs/Web/Media/Guides/Autoplay) lesen, um zu erfahren, wie Sie die automatische Wiedergabe sinnvoll nutzen.

Weitere Infos finden Sie unter [`<video>` Element](/de/docs/Web/HTML/Reference/Elements/video) und [Einen plattformübergreifenden Videoplayer erstellen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).

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

Wir legen die Quelle des Audios abhängig von der Art der Audiodatei fest, die der Browser unterstützt, setzen den Wiedergabekopf auf 5 Sekunden vor und versuchen, es abzuspielen.

> [!NOTE]
> Die Wiedergabe wird von den meisten Browsern ignoriert, es sei denn, sie erfolgt im Rahmen eines vom Benutzer initiierten Ereignisses.

Es ist auch möglich, einem {{ htmlelement("audio") }}-Element eine Base64-codierte WAV-Datei zu übergeben, sodass Audio sofort erstellt werden kann:

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

Wir legen die Quelle des Videos abhängig von der Art der Videodatei fest, die der Browser unterstützt, und setzen dann die Breite und Höhe des Videos fest.

## Web Audio API

In diesem Beispiel rufen wir eine MP3-Datei über die [`fetch()`](/de/docs/Web/API/Window/fetch)-API ab, laden sie in eine Quelle und spielen sie ab.

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

Sie können das [vollständige Beispiel live ausführen](https://mdn.github.io/webaudio-examples/decode-audio-data/promise/), oder [den Quellcode anzeigen](https://github.com/mdn/webaudio-examples/tree/main/decode-audio-data/promise).

Erfahren Sie mehr über die Grundlagen der Web Audio API in [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API).

## getUserMedia / Stream API

Es ist auch möglich, einen Live-Stream von einer Webcam und/oder einem Mikrofon unter Verwendung von `getUserMedia` und der Stream-API zu beziehen. Dies ist Teil einer umfassenderen Technologie, bekannt als WebRTC (Web Real-Time Communications), und ist mit den neuesten Versionen von Chrome, Firefox und Opera kompatibel.

Um den Stream von Ihrer Webcam zu erfassen, richten Sie zunächst ein {{htmlelement("video")}}-Element ein:

```html
<video id="webcam" width="480" height="360"></video>
```

Als nächstes verbinden Sie, wenn unterstützt, die Webcam-Quelle mit dem Videoelement:

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

Neue Standards werden eingeführt, die es Ihrem Browser ermöglichen, Medien von Ihrem Mikrofon oder Ihrer Kamera mithilfe von `getUserMedia` sofort aufzunehmen und mit der neuen MediaStream Recording API aufzuzeichnen. Sie nehmen den Stream, den Sie von `getUserMedia` erhalten, übergeben ihn einem `MediaRecorder`-Objekt, nehmen die resultierende Ausgabe und übergeben sie an Ihre Audio- oder Videoquelle\*.

Der Hauptmechanismus ist unten beschrieben:

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

[Media Source Extensions](https://w3c.github.io/media-source/) sind ein Arbeitsentwurf des W3C, der plant, [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) zu erweitern, um JavaScript die Generierung von Medienstreams zur Wiedergabe zu ermöglichen. Die Möglichkeit für JavaScript, Streams zu erstellen, erleichtert eine Vielzahl von Anwendungsfällen wie adaptives Streaming und Timeshifting von Live-Streams.

### Encrypted Media Extensions (EME)

[Encrypted Media Extensions](https://w3c.github.io/encrypted-media/) ist ein Vorschlag des W3C, um `HTMLMediaElement` zu erweitern, indem APIs bereitgestellt werden, um die Wiedergabe von geschütztem Inhalt zu steuern.

Die API unterstützt Anwendungsfälle, die von der grundlegenden "Clear Key"-Entschlüsselung bis hin zu hochgradigem Videomaterial reichen (vorausgesetzt, es gibt eine geeignete Implementierung des Benutzeragenten). Der Lizenz-/Schlüsselaustausch wird durch die Anwendung gesteuert, was die Entwicklung robuster Wiedergabeanwendungen ermöglicht, die eine Reihe von Technologien zur Entschlüsselung und Schutz von Inhalten unterstützen.

Einer der Hauptverwendungszwecke von EME besteht darin, Browsern die Implementierung von DRM ([Digital Rights Management](https://en.wikipedia.org/wiki/Digital_rights_management)) zu ermöglichen, das dazu beiträgt, das Kopieren webbasierten Inhalts (insbesondere Video) zu verhindern.

### Adaptives Streaming

Neue Formate und Protokolle werden eingeführt, um adaptives Streaming zu erleichtern. Adaptives Streaming bedeutet, dass die Bandbreite und in der Regel die Qualität des Streams in Echtzeit als Reaktion auf die verfügbare Bandbreite des Benutzers geändert werden können. Adaptives Streaming wird häufig in Verbindung mit Livestreaming eingesetzt, bei dem eine reibungslose Bereitstellung von Audio oder Video entscheidend ist.

Die Hauptformate für adaptives Streaming sind [HLS](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#hls) und [MPEG-DASH](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#mpeg-dash). MSE wurde mit Blick auf DASH entwickelt. MSE definiert Bytestreams gemäß [ISOBMFF](https://dvcs.w3.org/hg/html-media/raw-file/tip/media-source/isobmff-byte-stream-format.html) und [M2TS](https://en.wikipedia.org/wiki/M2ts) (beide in DASH unterstützt, letzteres in HLS unterstützt). Wenn Sie im Allgemeinen an Standards interessiert sind, Flexibilität wünschen oder die meisten modernen Browser unterstützen möchten, ist DASH wahrscheinlich die bessere Wahl.

> [!NOTE]
> Derzeit unterstützt Safari DASH nicht, obwohl dash.js in neueren Versionen von Safari funktionieren wird, die mit OSX Yosemite veröffentlicht werden sollen.

DASH bietet auch eine Reihe von Profilen, darunter On-Demand-Profile, die keine Vorverarbeitung und Aufteilung von Mediendateien erfordern. Es gibt auch eine Reihe von Cloud-basierten Diensten, die Ihre Medien sowohl in HLS als auch in DASH konvertieren.

Weitere Informationen finden Sie unter [Live-Streaming von Web-Audio und -Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video).

## Anpassung Ihres Mediaplayers

Möglicherweise möchten Sie, dass Ihr Audio- oder Videoplayer ein einheitliches Erscheinungsbild über alle Browser hinweg hat, oder Sie möchten ihn einfach so anpassen, dass er zu Ihrer Site passt. Die allgemeine Technik, um dies zu erreichen, besteht darin, das `controls`-Attribut wegzulassen, sodass die Standard-Browser-Steuerelemente nicht angezeigt werden. Erstellen Sie dann benutzerdefinierte Steuerelemente mit HTML und CSS und verwenden Sie JavaScript, um Ihre Steuerelemente mit der Audio-/Video-API zu verknüpfen.

Wenn Sie etwas Zusätzliches benötigen, ist es möglich, Funktionen hinzuzufügen, die in Standardplayern derzeit nicht vorhanden sind, wie z.B. Wiedergabegeschwindigkeit, Qualitätswechsel oder sogar Audiospektren. Sie können auch auswählen, wie Sie Ihren Player reaktionsfähig machen — zum Beispiel könnten Sie die Fortschrittsleiste unter bestimmten Bedingungen entfernen.

Sie können Klick-, Berührungs- und/oder Tastaturereignisse erkennen, um Aktionen wie Abspielen, Pausieren und Navigieren auszulösen. Es ist oft wichtig, Tastatursteuerungen für Benutzerfreundlichkeit und Barrierefreiheit zu berücksichtigen.

Ein kurzes Beispiel — richten Sie zunächst Ihr Audio und Ihre benutzerdefinierten Steuerelemente in HTML ein:

```html
<audio id="my-audio" src="/shared-assets/audio/guitar.mp3"></audio>
<button id="my-control">play</button>
```

Fügen Sie ein wenig JavaScript hinzu, um Ereignisse zu erkennen, um das Audio abzuspielen und zu pausieren:

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

{{EmbedLiveSample("anpassen Ihres Mediaplayers", "", 200)}}

Weitere Informationen finden Sie unter [Erstellung eines eigenen benutzerdefinierten Audioplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics#creating_your_own_custom_audio_player).

## Weitere Tipps für Audio/Video

### Herunterladen von Medien stoppen

Das Anhalten der Wiedergabe von Medien ist so einfach, wie die `pause()`-Methode des Elements aufzurufen, aber der Browser lädt weiter Medien herunter, bis das Medienelement durch die Garbage Collection entfernt wird.

Hier ist ein Trick, der das Herunterladen sofort stoppt:

```js
const mediaElement = document.querySelector("#myMediaElementID");
mediaElement.removeAttribute("src");
mediaElement.load();
```

Indem Sie das `src`-Attribut des Medienelements entfernen und die `load()`-Methode aufrufen, geben Sie die mit dem Video verbundenen Ressourcen frei, was den Netzwerkdownload stoppt. Sie müssen `load()` nach dem Entfernen des Attributs aufrufen, da das bloße Entfernen des `src`-Attributs den Ladealgorithmus nicht auslöst. Wenn das `<video>`-Element auch `<source>`-Element-Nachkommen hat, sollten diese ebenfalls entfernt werden, bevor Sie `load()` aufrufen.

Beachten Sie, dass das bloße Setzen des `src`-Attributs auf eine leere Zeichenkette den Browser tatsächlich dazu veranlasst, es so zu behandeln, als ob Sie eine Videodatei relativ zum Pfad einstellen. Dies führt dazu, dass der Browser versucht, einen weiteren Download von etwas zu starten, das vermutlich kein gültiges Video ist.

### Durch Medien navigieren

Medienelemente bieten Unterstützung für das Bewegen der aktuellen Wiedergabeposition zu bestimmten Punkten im Inhalt der Medien. Dies geschieht, indem der Wert der `currentTime`-Eigenschaft des Elements festgelegt wird; siehe [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) für weitere Details zu den Eigenschaften des Elements. Setzen Sie den Wert auf die Zeit, in Sekunden, zu der Sie die Wiedergabe fortsetzen möchten.

Sie können die `seekable`-Eigenschaft des Elements verwenden, um die Bereiche der Medien zu bestimmen, die derzeit für das Navigieren zur Verfügung stehen. Dies gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Zeiträume auflistet, zu denen Sie navigieren können.

```js
const mediaElement = document.querySelector("#mediaElementID");
mediaElement.seekable.start(0); // Returns the starting time (in seconds)
mediaElement.seekable.end(0); // Returns the ending time (in seconds)
mediaElement.currentTime = 122; // Seek to 122 seconds
mediaElement.played.end(0); // Returns the number of seconds the browser has played
```

### Wiedergabebereich angeben

Beim Angeben der URI von Medien für ein {{ HTMLElement("audio") }}- oder {{ HTMLElement("video") }}-Element können Sie optional zusätzliche Informationen hinzufügen, um den Teil des Mediums anzugeben, der wiedergegeben werden soll. Um dies zu tun, fügen Sie ein Hash-Zeichen ("#") gefolgt von der Medienfragmentbeschreibung an.

Ein Zeitbereich wird mit der folgenden Syntax spezifiziert:

```plain
#t=[starttime][,endtime]
```

Die Zeit kann als Anzahl von Sekunden (als Gleitkommawert) oder als Zeit im Stunden-/Minuten-/Sekunden-Format mit Doppelpunkten getrennt angegeben werden (z.B. 2:05:01 für 2 Stunden, 5 Minuten und 1 Sekunde).

Einige Beispiele:

- `http://example.com/video.ogv#t=10,20`
  - : Gibt an, dass das Video den Bereich von 10 Sekunden bis 20 Sekunden abspielen soll.
- `http://example.com/video.ogv#t=,10.5`
  - : Gibt an, dass das Video vom Anfang bis 10,5 Sekunden abspielen soll.
- `http://example.com/video.ogv#t=,02:00:00`
  - : Gibt an, dass das Video vom Anfang bis zu zwei Stunden abspielen soll.
- `http://example.com/video.ogv#t=60`
  - : Gibt an, dass das Video bei 60 Sekunden beginnen und bis zum Ende des Videos abspielen soll.

## Fehlerbehandlung

Fehler werden an die untergeordneten {{ HTMLElement("source") }}-Elemente übermittelt, die den Quellen entsprechen, die den Fehler verursachten.

Dies ermöglicht es Ihnen zu erkennen, welche Quellen nicht geladen werden konnten, was nützlich sein kann. Betrachten Sie dieses HTML:

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

Da Firefox aus patentrechtlichen Gründen MP4 und 3GP auf einigen Plattformen nicht unterstützt, erhalten die {{ HTMLElement("source") }}-Elemente mit den IDs "mp4_src" und "3gp_src" `error`-Ereignisse, bevor die Ogg-Ressource geladen wird. Die Quellen werden in der Reihenfolge versucht, in der sie erscheinen, und sobald eine erfolgreich geladen wird, werden die verbleibenden Quellen überhaupt nicht mehr versucht.

### Prüfen, ob der Browser die bereitgestellten Formate unterstützt

Unterstützung für Medienformate finden Sie auf [Can I Use](https://caniuse.com/).

- [Audio MP3 (`type="audio/mpeg"`)](https://caniuse.com/mp3)
- [Audio Ogg (`type="audio/ogg"`)](https://caniuse.com/ogg-vorbis)
- [Video MP4 (`type="video/mp4"`)](https://caniuse.com/mpeg4)
- [Video WebM (`type="video/webm"`)](https://caniuse.com/webm)
- [Video Ogg (`type="video/ogg"`)](https://caniuse.com/ogv)

Sie können auch nach [anderen Medienformaten](/de/docs/Web/Media/Guides/Formats/Containers) suchen.

Wenn ein Medienformat unterstützt werden soll, die von Ihnen bereitgestellten Dateien jedoch nicht abgespielt werden, gibt es zwei mögliche Probleme:

#### 1. Der Medienserver liefert nicht die richtigen MIME-Typen mit der Datei

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

Ihre Dateien wurden möglicherweise falsch codiert — versuchen Sie, sie mit einem der folgenden Tools zu codieren, die sich als ziemlich zuverlässig erwiesen haben:

- [Audacity](https://sourceforge.net/projects/audacity/) — Kostenloser Audio-Editor und -Rekorder
- [Miro](https://www.getmiro.com/) — Kostenloser, Open-Source Musik- und Videoplayer
- [Handbrake](https://handbrake.fr/) — Open-Source-Video-Transcoder
- [Firefogg](https://www.firefogg.org/) — Video- und Audiocodierung für Firefox
- [FFmpeg2](https://www.ffmpeg.org/) — Umfassender Befehlszeilen-Encoder
- [Vid.ly](https://m.vid.ly/) — Videoplayer, Transcodierung und Bereitstellung
- [Internet Archive](https://archive.org/) — Kostenlose Transcodierung und Speicherung

### Erkennen, wenn keine Quellen geladen wurden

Um zu erkennen, dass alle untergeordneten {{ HTMLElement("source") }}-Elemente nicht geladen werden konnten, überprüfen Sie den Wert des `networkState`-Attributs des Medienelements. Wenn dies `HTMLMediaElement.NETWORK_NO_SOURCE` ist, wissen Sie, dass alle Quellen nicht geladen werden konnten.

Wenn Sie an diesem Punkt eine weitere Quelle hinzufügen, indem Sie ein neues {{ HTMLElement("source") }}-Element als Kind des Medienelements einfügen, versucht Gecko, die angegebene Ressource zu laden.

### Anzeigen von Fallback-Inhalten, wenn keine Quelle dekodiert werden konnte

Eine weitere Möglichkeit, die Fallback-Inhalte eines Videos anzuzeigen, wenn keine der Quellen im aktuellen Browser dekodiert werden konnte, besteht darin, einen Fehlerhandler für das letzte Quellenelement hinzuzufügen. Dann können Sie das Video durch den Fallback-Inhalt ersetzen:

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

Eine Reihe von Audio- und Video-JavaScript-Bibliotheken existiert. Die beliebtesten Bibliotheken ermöglichen es Ihnen, ein konsistentes Player-Design über alle Browser hinweg zu wählen und ein Fallback für Browser bereitzustellen, die Audio und Video nicht nativ unterstützen. Fallbacks haben historisch veraltete Plugins wie Adobe Flash oder Microsoft Silverlight verwendet, um einem Player in Browsern ohne Unterstützung eine Medienwiedergabe zu ermöglichen, obwohl diese auf modernen Computern nicht mehr unterstützt werden. Andere Funktionen wie das [`<track>`](/de/docs/Web/HTML/Reference/Elements/track)-Element für Untertitel können auch durch Medienbibliotheken bereitgestellt werden.

### Nur Audio

- [SoundManager](https://www.schillmania.com/projects/soundmanager2/)
- [AmplitudeJS](https://521dimensions.com/open-source/amplitudejs)
- [HowlerJS](https://howlerjs.com/)

### Nur Video

- [flowplayer](https://flowplayer.com/): Gratis mit Flowplayer-Logo-Wasserzeichen. Open Source (GPL-lizenziert.)
- [JWPlayer](https://jwpconnatix.com/): Registrierung erforderlich zum Download. Open-Source-Edition (Creative Commons-Lizenz.)
- [SublimeVideo](https://www.sublimevideo.net/): Registrierung erforderlich. Formularbasierte Einrichtung mit domänenspezifischem Link zur CDN-gehosteten Bibliothek.
- [Video.js](https://videojs.org/): Gratis und Open Source (Apache 2-lizenziert.)

### Audio und Video

- [jPlayer](https://jPlayer.org/): Gratis und Open Source (MIT-lizenziert.)
- [mediaelement.js](https://www.mediaelementjs.com/): Gratis und Open Source (MIT-lizenziert.)

### Web Audio API

- [AudioContext monkeypatch](https://github.com/cwilso/AudioContext-MonkeyPatch): Ein Polyfill für ältere Versionen der Web Audio API; Open Source (Apache 2-lizenziert.)

## Leitfäden

- [Einen plattformübergreifenden Videoplayer erstellen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player)
  - : Ein Leitfaden zur Erstellung eines einfachen plattformübergreifenden Videoplayers mit dem {{ htmlelement("video") }}-Element.
- [Videoplayer-Styling-Grundlagen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics)
  - : Nachdem der plattformübergreifende Videoplayer im vorherigen Artikel eingerichtet wurde, wird in diesem Artikel nun erläutert, wie man dem Player einige grundlegende, responsive Stile verleiht.
- [Hinzufügen von Untertiteln und Beschriftungen zu HTML-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)
  - : Dieser Artikel erklärt, wie Sie HTML-{{ htmlelement("video") }} mit [Web_Video_Text_Tracks_Format](/de/docs/Web/API/WebVTT_API) und dem {{ htmlelement("track") }}-Element Untertitel hinzufügen.
- [Cross-Browser Audio Grundlagen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
  - : Dieser Artikel bietet eine grundlegende Anleitung zur Erstellung eines plattformübergreifenden HTML-Audioplayers, bei dem alle zugehörigen Attribute, Eigenschaften und Ereignisse erläutert werden, sowie eine Kurzreferenz zu benutzerdefinierten Steuerelementen, die mit der Medien-API erstellt wurden.
- [Medienpufferung, Seek und Zeitbereiche](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges)
  - : Manchmal ist es nützlich zu wissen, wie viel {{ htmlelement("audio") }} oder {{ htmlelement("video") }} heruntergeladen oder ohne Verzögerung abgespielt werden kann — ein gutes Beispiel dafür ist die Fortschrittsleiste eines Audio- oder Videoplayers. Dieser Artikel erläutert, wie man eine Puffer-/Suchleiste mit [TimeRanges](/de/docs/Web/API/TimeRanges) und anderen Funktionen der Medien-API erstellt.
- [HTML playbackRate erklärt](/de/docs/Web/Media/Guides/Audio_and_video_delivery/WebAudio_playbackRate_explained)
  - : Die `playbackRate`-Eigenschaft ermöglicht es uns, die Geschwindigkeit oder Rate zu ändern, mit der ein Web-Audio- oder Video abgespielt wird. Dieser Artikel erklärt sie im Detail.
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
  - : Erklärt die Grundlagen der Verwendung der Web Audio API, um eine Audioquelle zu erfassen, zu manipulieren und abzuspielen.

### Streaming-Medien

- [Live-Streaming von Web-Audio und -Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video)
  - : Live-Streaming-Technologie wird häufig verwendet, um Live-Ereignisse wie Sport, Konzerte und allgemein Fernsehsendungen und Radioprogramme, die live ausgegeben werden, zu übertragen. Oft einfach als Streaming bezeichnet, ist Live-Streaming der Prozess der Übertragung von Medien 'live' auf Computer und Geräte. Dies ist ein ziemlich komplexes und neues Thema mit vielen Variablen, daher werden wir Sie in diesem Artikel in das Thema einführen und Ihnen zeigen, wie Sie anfangen können.
- [Einrichtung adaptiver Streaming-Medienquellen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources)
  - : Angenommen, Sie möchten eine adaptive Streaming-Medienquelle auf einem Server einrichten, um sie innerhalb eines HTML-Medienelements zu nutzen. Wie würden Sie das tun? Dieser Artikel erklärt, wie, indem er zwei der gängigsten Formate betrachtet: MPEG-DASH und HLS (HTTP Live Streaming).
- [DASH Adaptive Streaming für HTML 5 Video](/de/docs/Web/API/Media_Source_Extensions_API/DASH_Adaptive_Streaming)
  - : Details zur Einrichtung von adaptivem Streaming mit DASH und WebM.

### Fortgeschrittene Themen

- [Web Audio API plattformübergreifende Unterstützung](/de/docs/Web/API/Web_Audio_API/Best_practices#cross_browser_legacy_support)
  - : Ein Leitfaden zum Schreiben plattformübergreifender Web Audio API-Code.
- [Einfache Audiowiedergabe mit der MediaRecorder API](https://hacks.mozilla.org/2014/06/easy-audio-capture-with-the-mediarecorder-api/)
  - : Erklärt die Grundlagen der Verwendung der MediaStream Recording API, um direkt einen Medienstream aufzuzeichnen.

## Referenz

- [Das Video-Element](/de/docs/Web/HTML/Reference/Elements/video)
- [HTMLVideoElement API](/de/docs/Web/API/HTMLVideoElement)
- [MediaSource API](/de/docs/Web/API/MediaSource)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
- [getUserMedia](/de/docs/Web/API/MediaDevices/getUserMedia)
- [Ereignisindex: Medien](/de/docs/Web/API/Document_Object_Model/Events#media)
