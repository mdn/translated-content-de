---
title: Audio- und Videobereitstellung
slug: Web/Media/Guides/Audio_and_video_delivery
l10n:
  sourceCommit: dc9d517589ac7b74bc205f49492b0450dfdb78de
---

Wir können Audio und Video im Web auf verschiedene Arten bereitstellen, von 'statischen' Mediendateien bis hin zu adaptiven Live-Streams. Dieser Artikel soll als Ausgangspunkt dienen, um die verschiedenen Bereitstellungsmechanismen von webbasierten Medien und die Kompatibilität mit gängigen Browsern zu erkunden.

## HTML-Audio- und Videoelemente

Ob wir es mit vorab aufgezeichneten Audiodateien oder Live-Streams zu tun haben, der Mechanismus, um sie über die {{ htmlelement("audio")}} und {{ htmlelement("video")}} Elemente des Browsers verfügbar zu machen, bleibt weitgehend derselbe. Derzeit müssen wir, um alle Browser zu unterstützen, zwei Formate angeben, obwohl sich dies mit der Einführung der MP3- und MP4-Formate in Firefox und Opera schnell ändert. Sie finden Informationen zur Kompatibilität im [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Guides/Formats).

Um Video und Audio bereitzustellen, ist der allgemeine Arbeitsablauf in der Regel folgendermaßen:

1. Überprüfen Sie, welches Format der Browser über Feature Detection unterstützt (in der Regel eine Wahl von zwei, wie oben beschrieben).
2. Wenn der Browser keines der bereitgestellten Formate nativ abspielen kann, zeigen Sie entweder ein Standbild an oder verwenden Sie eine Fallback-Technologie, um das Video darzustellen.
3. Bestimmen Sie, wie Sie das Medium abspielen/instanziieren möchten (z.B. ein {{ htmlelement("video") }} Element oder `document.createElement('video')` vielleicht?)
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

Der obige Code erstellt einen Audio-Player, der versucht, so viel Audio wie möglich im Voraus zu laden, um eine reibungslose Wiedergabe zu gewährleisten.

> [!NOTE]
> Das `preload`-Attribut kann von einigen mobilen Browsern ignoriert werden.

Weitere Informationen finden Sie unter [Cross Browser Audio Basics (HTML Audio Im Detail)](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics#html_audio_in_detail)

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

Der obige Code erstellt einen Video-Player mit den Abmessungen 640x480 Pixel, der ein Posterbild anzeigt, bis das Video abgespielt wird. Wir weisen das Video an, automatisch zu starten, aber standardmäßig stummgeschaltet zu sein.

> [!NOTE]
> Das `autoplay`-Attribut kann von einigen mobilen Browsern ignoriert werden. Auch die Autoplay-Funktion kann umstritten sein, wenn sie missbraucht wird. Es wird dringend empfohlen, dass Sie den [Autoplay-Leitfaden für Medien und Web Audio APIs](/de/docs/Web/Media/Guides/Autoplay) lesen, um zu lernen, wie Sie Autoplay sinnvoll einsetzen.

Weitere Informationen finden Sie unter [`<video>` Element](/de/docs/Web/HTML/Reference/Elements/video) und [Erstellen eines plattformübergreifenden Video-Players](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).

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

Wir setzen die Quelle des Audios abhängig vom Typ der Audiodatei, die der Browser unterstützt, und setzen den Wiedergabekopf 5 Sekunden vor und versuchen, es abzuspielen.

> [!NOTE]
> Die Wiedergabe wird von den meisten Browsern ignoriert, es sei denn, sie wird durch ein benutzerinitiiertes Ereignis ausgelöst.

Es ist auch möglich, einem {{ htmlelement("audio") }} Element eine Base64-kodierte WAV-Datei zu füttern, um damit Audio zu erzeugen:

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

Wir setzen die Quelle des Videos abhängig vom Typ der Videodatei, die der Browser unterstützt, dann setzen wir die Breite und Höhe des Videos.

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

Sie können [das vollständige Beispiel live ausführen](https://mdn.github.io/webaudio-examples/decode-audio-data/promise/), oder [den Quellcode ansehen](https://github.com/mdn/webaudio-examples/tree/main/decode-audio-data/promise).

Finden Sie mehr über die Grundlagen der Web Audio API im [Verwenden der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API).

## getUserMedia / Stream API

Es ist auch möglich, einen Live-Stream von einer Webcam und/oder einem Mikrofon mit `getUserMedia` und der Stream API abzurufen. Dies gehört zu einer breiteren Technologie namens WebRTC (Web Real-Time Communications) und ist mit den neuesten Versionen von Chrome, Firefox und Opera kompatibel.

Um den Stream von Ihrer Webcam zu erfassen, richten Sie zuerst ein {{htmlelement("video")}} Element ein:

```html
<video id="webcam" width="480" height="360"></video>
```

Verbinden Sie anschließend, wenn unterstützt, die Webcam-Quelle mit dem Video-Element:

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

Für weitere Informationen lesen Sie unsere [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia) Seite.

## MediaStream Recording

Neue Standards werden eingeführt, damit Ihr Browser Medien von Ihrem Mikrofon oder Ihrer Kamera mit `getUserMedia` aufzeichnen kann, indem er sie sofort mit der neuen MediaStream Recording API aufzeichnet. Sie nehmen den Stream, den Sie von `getUserMedia` erhalten, geben ihn an ein `MediaRecorder` Objekt weiter, verwenden das resultierende Ergebnis und speisen es in Ihre Audio- oder Videoquelle ein.

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

Weitere Details finden Sie unter [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API).

## Media Source Extensions (MSE)

[Media Source Extensions](https://w3c.github.io/media-source/) ist ein W3C-Arbeitsentwurf, der plant, [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) zu erweitern, um JavaScript die Generierung von Medienstreams zur Wiedergabe zu ermöglichen. Die Möglichkeit, dass JavaScript Streams generiert, erleichtert eine Vielzahl von Anwendungsfällen wie adaptives Streaming und Timeshifting bei Live-Streams.

### Encrypted Media Extensions (EME)

[Encrypted Media Extensions](https://w3c.github.io/encrypted-media/) ist ein Vorschlag der W3C, der `HTMLMediaElement` erweitert, um APIs zur Steuerung der Wiedergabe von geschütztem Inhalt bereitzustellen.

Die API unterstützt Anwendungsfälle von einfacher Schlüsselentschlüsselung bis hin zu hochklassigen Videos (vorausgesetzt, es gibt eine geeignete Benutzeragentenimplementierung). Der Lizenz-/Schlüsselaustausch wird von der Anwendung gesteuert, was die Entwicklung robuster Wiedergabeanwendungen erleichtert, die eine Vielzahl von Technologien zur Inhaltsentschlüsselung und -schutz unterstützen.

Eine der Hauptanwendungen von EME ist es, Browsern zu erlauben, DRM ([Digital Rights Management](https://en.wikipedia.org/wiki/Digital_rights_management)) zu implementieren, das hilft, webbasierte Inhalte (insbesondere Videos) vor dem Kopieren zu schützen.

### Adaptives Streaming

Neue Formate und Protokolle werden eingeführt, um adaptives Streaming zu erleichtern. Adaptives Streaming bedeutet, dass die Bandbreite und in der Regel die Qualität des Streams in Echtzeit in Reaktion auf die verfügbare Bandbreite des Nutzers geändert werden kann. Adaptives Streaming wird häufig in Verbindung mit Live-Streaming verwendet, wo die reibungslose Bereitstellung von Audio oder Video entscheidend ist.

Die Hauptformate für adaptives Streaming sind [HLS](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#hls) und [MPEG-DASH](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#mpeg-dash). MSE wurde mit DASH im Sinn designiert. MSE definiert Bytestreams gemäß [ISOBMFF](https://dvcs.w3.org/hg/html-media/raw-file/tip/media-source/isobmff-byte-stream-format.html) und [M2TS](https://en.wikipedia.org/wiki/M2ts) (beide in DASH unterstützt, letzteres in HLS unterstützt). Im Allgemeinen, wenn Sie an Standards interessiert sind, Flexibilität suchen oder die meisten modernen Browser unterstützen möchten, sind Sie wahrscheinlich mit DASH besser dran.

> [!NOTE]
> Derzeit unterstützt Safari DASH nicht, obwohl dash.js auf neueren Versionen von Safari funktionieren wird, die mit OS X Yosemite veröffentlicht werden sollen.

DASH bietet auch eine Reihe von Profilen, einschließlich onDemand-Profile, die keine Vorverarbeitung und Aufteilung von Mediendateien erfordern. Es gibt auch eine Reihe von Cloud-basierten Diensten, die Ihre Medien sowohl in HLS als auch in DASH konvertieren.

Weitere Informationen finden Sie unter [Live-Streaming von Web-Audio und Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video).

## Anpassung Ihres Media Players

Vielleicht möchten Sie, dass Ihr Audio- oder Videoplayer in allen Browsern ein einheitliches Aussehen hat, oder Sie möchten ihn nur anpassen, damit er zu Ihrer Website passt. Die allgemeine Technik zur Erreichung dieses Ziels ist es, das `controls`-Attribut wegzulassen, sodass die Standard-Browsersteuerungen nicht angezeigt werden, benutzerdefinierte Steuerelemente mit HTML und CSS zu erstellen und dann JavaScript zu verwenden, um Ihre Steuerelemente mit der Audio-/Video-API zu verknüpfen.

Wenn Sie etwas Zusätzliches benötigen, ist es möglich, Funktionen hinzuzufügen, die derzeit in den Standard-Playern nicht vorhanden sind, z.B. Wiedergabegeschwindigkeit, Qualitätsschalter oder sogar Audiospektren. Sie können auch wählen, wie Sie Ihren Player reaktionsfähig machen — z.B. könnten Sie die Fortschrittsleiste unter bestimmten Bedingungen entfernen.

Sie können Klick-, Berührungs- und/oder Tastaturereignisse erkennen, um Aktionen wie Abspielen, Pause und Spulen zu aktivieren. Es ist oft wichtig, sich für die Bequemlichkeit und Zugänglichkeit der Benutzer an Tastatursteuerungen zu erinnern.

Ein schnelles Beispiel — richten Sie zuerst Ihr Audio- und benutzerdefinierte Steuerelemente in HTML ein:

```html
<audio id="my-audio" src="/shared-assets/audio/guitar.mp3"></audio>
<button id="my-control">play</button>
```

Fügen Sie ein wenig JavaScript hinzu, um Ereignisse zu erkennen, um Audio abzuspielen und anzuhalten:

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

{{EmbedLiveSample("customizing your media player", "", 200)}}

Für weitere Informationen siehe [Creating your own custom audio player](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics#creating_your_own_custom_audio_player).

## Weitere Tipps für Audio/Video

### Stoppen des Herunterladens von Medien

Während das Stoppen der Wiedergabe von Medien so einfach ist wie das Aufrufen der `pause()` Methode des Elements, lädt der Browser weiterhin Medien herunter, bis das Medienelement durch Garbage Collection entfernt wird.

Hier ist ein Trick, der den Download sofort stoppt:

```js
const mediaElement = document.querySelector("#myMediaElementID");
mediaElement.removeAttribute("src");
mediaElement.load();
```

Indem Sie das `src`-Attribut des Medienelements entfernen und die `load()` Methode aufrufen, werden die mit dem Video verbundenen Ressourcen freigegeben, was den Netzwerkdownload stoppt. Sie müssen `load()` nach dem Entfernen des Attributs aufrufen, da das bloße Entfernen des `src`-Attributs den Ladealgorithmus nicht aufruft. Wenn das `<video>`-Element auch `<source>`-Element-Nachkommen hat, sollten diese auch vor dem Aufrufen von `load()` entfernt werden.

Beachten Sie, dass das Setzen des `src`-Attributs auf einen leeren String den Browser tatsächlich dazu veranlasst, es so zu behandeln, als ob Sie eine Videoquelle auf einen relativen Pfad setzen. Dies führt dazu, dass der Browser versucht, etwas herunterzuladen, das wahrscheinlich kein gültiges Video ist.

### Durch Medien suchen

Medienelemente bieten Unterstützung dafür, die aktuelle Wiedergabeposition zu bestimmten Punkten im Inhalt des Mediums zu verschieben. Dies wird durch das Setzen des Werts der `currentTime` Eigenschaft des Elements erreicht; siehe [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) für weitere Details zu den Eigenschaften des Elements. Setzen Sie den Wert auf die Zeit in Sekunden, zu der Sie die Wiedergabe fortsetzen möchten.

Sie können die `seekable` Eigenschaft des Elements verwenden, um die Bereiche des Mediums zu bestimmen, die derzeit für das Suchen verfügbar sind. Dies gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges) Objekt zurück, das die Bereiche der Zeiten auflistet, zu denen Sie suchen können.

```js
const mediaElement = document.querySelector("#mediaElementID");
mediaElement.seekable.start(0); // Returns the starting time (in seconds)
mediaElement.seekable.end(0); // Returns the ending time (in seconds)
mediaElement.currentTime = 122; // Seek to 122 seconds
mediaElement.played.end(0); // Returns the number of seconds the browser has played
```

### Wiedergabebereich angeben

Beim Angeben der URI von Medien für ein {{ HTMLElement("audio") }} oder {{ HTMLElement("video") }} Element können Sie optional zusätzliche Informationen hinzufügen, um den Teil des Mediums anzugeben, der abgespielt werden soll. Dazu fügen Sie ein Rautezeichen ("#") gefolgt von der Medienfragmentbeschreibung hinzu.

Ein Zeitbereich wird mit der Syntax angegeben:

```plain
#t=[starttime][,endtime]
```

Die Zeit kann als Anzahl von Sekunden (als Gleitkommawert) oder als Stunden/Minuten/Sekunden-Zeit durch Doppelpunkte getrennt (wie 2:05:01 für 2 Stunden, 5 Minuten und 1 Sekunde) angegeben werden.

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

Fehler werden an die {{ HTMLElement("source") }} Kind-Elemente übermittelt, die den Quellen entsprechen, die den Fehler verursachen.

Dadurch können Sie erkennen, welche Quellen nicht geladen werden konnten, was nützlich sein kann. Betrachten Sie folgendes HTML:

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

Da Firefox MP4 und 3GP auf einigen Plattformen aufgrund ihrer patentrechtlich belasteten Natur nicht unterstützt, erhalten die {{ HTMLElement("source") }} Elemente mit den IDs "mp4_src" und "3gp_src" `error` Ereignisse, bevor die Ogg-Ressource geladen wird. Die Quellen werden in der Reihenfolge ausprobiert, in der sie erscheinen, und sobald eine erfolgreich geladen wird, werden die verbleibenden Quellen überhaupt nicht mehr ausprobiert.

### Ermittlen, ob der Browser die bereitgestellten Formate unterstützt

Die Unterstützung für Medienformate finden Sie auf [Can I Use](https://caniuse.com/).

- [Audio MP3 (`type="audio/mpeg"`)](https://caniuse.com/mp3)
- [Audio Ogg (`type="audio/ogg"`)](https://caniuse.com/ogg-vorbis)
- [Video MP4 (`type="video/mp4"`)](https://caniuse.com/mpeg4)
- [Video WebM (`type="video/webm"`)](https://caniuse.com/webm)
- [Video Ogg (`type="video/ogg"`)](https://caniuse.com/ogv)

Sie können auch nach [anderen Medienformaten](/de/docs/Web/Media/Guides/Formats/Containers) suchen.

Wenn ein Medienformat angeblich unterstützt wird, aber die von Ihnen bereitgestellten Dateien nicht abgespielt werden, gibt es zwei mögliche Probleme:

#### 1. Der Medienserver liefert nicht die korrekten MIME-Typen mit der Datei

Obwohl dies normalerweise unterstützt wird, müssen Sie eventuell folgendes zu Ihrer `.htaccess`-Datei des Medienservers hinzufügen.

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

Ihre Dateien könnten falsch kodiert worden sein — versuchen Sie, eines der folgenden Tools zu verwenden, die sich als ziemlich zuverlässig erwiesen haben:

- [Audacity](https://sourceforge.net/projects/audacity/) — Kostenloser Audio-Editor und Recorder
- [Miro](https://www.getmiro.com/) — Kostenlose, Open-Source Musik- und Video-Player
- [Handbrake](https://handbrake.fr/) — Open Source Video Transcoder
- [Firefogg](https://www.firefogg.org/) — Video- und Audiokodierung für Firefox
- [FFmpeg2](https://www.ffmpeg.org/) — Umfassender Kommandozeilen-Encoder
- [Vid.ly](https://m.vid.ly/) — Video-Player, Transkodierung und Bereitstellung
- [Internet Archive](https://archive.org/) — Kostenlose Transkodierung und Speicherung

### Erkennen, wenn keine Quellen geladen sind

Um zu erkennen, dass alle {{ HTMLElement("source") }} Kind-Elemente nicht geladen werden konnten, überprüfen Sie den Wert des `networkState` Attributs des Medienelements. Wenn dies `HTMLMediaElement.NETWORK_NO_SOURCE` ist, wissen Sie, dass alle Quellen nicht geladen werden konnten.

Wenn Sie zu diesem Zeitpunkt eine weitere Quelle hinzufügen, indem Sie ein neues {{ HTMLElement("source") }} Element als Kind des Medienelements einfügen, versucht Gecko, die angegebene Ressource zu laden.

### Anzeige eines Ersatzinhalts, wenn keine Quelle dekodiert werden konnte

Eine andere Möglichkeit, den Fallback-Inhalt eines Videos anzuzeigen, wenn keine der Quellen im aktuellen Browser dekodiert werden konnte, besteht darin, einen Fehlerhandler auf dem letzten Quellen-Element hinzuzufügen. Dann können Sie das Video mit seinem Fallback-Inhalt ersetzen:

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

Es gibt eine Reihe von Audio- und Video-JavaScript-Bibliotheken. Die beliebtesten Bibliotheken ermöglichen es Ihnen, ein einheitliches Player-Design über alle Browser zu wählen und bieten ein Fallback für Browser, die Audio und Video nicht nativ unterstützen. Fallbacks verwendeten historisch jetzt veraltete Plugins wie Adobe Flash oder Microsoft Silverlight Plugins, um einen Mediaplayer in nicht unterstützenden Browsern bereitzustellen, obwohl diese auf modernen Computern nicht mehr unterstützt werden. Andere Funktionen wie das [`<track>`](/de/docs/Web/HTML/Reference/Elements/track) Element für Untertitel können auch durch Medienbibliotheken bereitgestellt werden.

### Nur Audio

- [SoundManager](https://www.schillmania.com/projects/soundmanager2/)
- [AmplitudeJS](https://serversideup.net/open-source/amplitudejs/)
- [HowlerJS](https://howlerjs.com/)

### Nur Video

- [flowplayer](https://flowplayer.com/): Kostenlos mit einem flowplayer-Logo-Wasserzeichen. Open Source (GPL lizenziert).
- [JWPlayer](https://jwpconnatix.com/): Registrierung erforderlich für den Download. Open Source Edition (Creative Commons License).
- [SublimeVideo](https://www.sublimevideo.net/): Registrierung erforderlich. Formularbasierte Einrichtung mit domainspezifischem Link zu einer CDN-gehosteten Bibliothek.
- [Video.js](https://videojs.org/): Kostenlos und Open Source (Apache 2 lizenziert).

### Audio und Video

- [jPlayer](https://jPlayer.org/): Kostenlos und Open Source (MIT lizenziert).
- [mediaelement.js](https://www.mediaelementjs.com/): Kostenlos und Open Source (MIT lizenziert).

### Web Audio API

- [AudioContext monkeypatch](https://github.com/cwilso/AudioContext-MonkeyPatch): Ein Polyfill für ältere Versionen der Web Audio API; Open Source (Apache 2 lizenziert).

## Leitfäden

- [Erstellen eines plattformübergreifenden Video-Players](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player)
  - : Ein Leitfaden zum Erstellen eines grundlegenden plattformübergreifenden Video-Players mit dem {{ htmlelement("video") }} Element.
- [Grundlagen zur Stilgestaltung von Video-Playern](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics)
  - : Mit dem im vorherigen Artikel eingeführten plattformübergreifenden Video-Player, wirft dieser Artikel einen Blick auf die Bereitstellung einiger grundlegender, reaktionsfähiger Stilgestaltung für den Player.
- [Hinzufügen von Untertiteln zu HTML-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)
  - : Dieser Artikel erklärt, wie man Untertitel zu HTML {{ htmlelement("video") }} hinzufügt, unter Verwendung des [Web_Video_Text_Tracks_Format](/de/docs/Web/API/WebVTT_API) und des {{ htmlelement("track") }} Elements.
- [Grundlagen zu plattformübergreifendem Audio](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
  - : Dieser Artikel bietet einen grundlegenden Leitfaden zum Erstellen eines plattformübergreifenden HTML-Audio-Players, mit allen zugehörigen Attributen, Eigenschaften und Ereignissen erklärt, und einem kurzen Leitfaden zu benutzerdefinierten Steuerelementen, die mit der Media-API erstellt wurden.
- [Medien-Buffering, -Suchen und -Zeiträume](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges)
  - : Manchmal ist es nützlich zu wissen, wie viel {{ htmlelement("audio") }} oder {{ htmlelement("video") }} heruntergeladen wurde oder ohne Verzögerung abspielbar ist. Ein gutes Beispiel dafür ist die gepufferte Fortschrittsleiste eines Audio- oder Video-Players. Dieser Artikel erläutert, wie man eine Buffer/Suchleiste mit [TimeRanges](/de/docs/Web/API/TimeRanges) und anderen Funktionen der Media-API erstellt.
- [Erklärung zur HTML-Wiedergaberate](/de/docs/Web/Media/Guides/Audio_and_video_delivery/WebAudio_playbackRate_explained)
  - : Die `playbackRate` Eigenschaft ermöglicht es uns, die Geschwindigkeit oder das Tempo, in dem ein Stück Web-Audio oder -Video abspielt, zu ändern. Dieser Artikel erklärt es im Detail.
- [Verwenden der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
  - : Erklärt die Grundlagen der Verwendung der Web Audio API, um eine Audioquelle zu erfassen, zu manipulieren und abzuspielen.

### Streaming media

- [Live-Streaming von Web-Audio und Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video)
  - : Die Live-Streaming-Technologie wird oft verwendet, um Live-Events wie Sport, Konzerte und allgemein TV- und Radioprogramme, die live ausgestrahlt werden, zu übertragen. Oftmals einfach als Streaming bezeichnet, ist Live-Streaming der Prozess der Übertragung von Medien „live“ zu Computern und Geräten. Dies ist ein ziemlich komplexes und neues Thema mit vielen Variablen, daher werden wir in diesem Artikel Sie in das Thema einführen und Ihnen sagen, wie Sie beginnen können.
- [Einrichten von adaptiven Streaming-Medienquellen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources)
  - : Angenommen, Sie möchten eine adaptive Streaming-Medienquelle auf einem Server einrichten, die innerhalb eines HTML-Medienelements konsumiert werden soll. Wie würden Sie das machen? Dieser Artikel erklärt, wie das geht, unter Berücksichtigung zweier der häufigsten Formate: MPEG-DASH und HLS (HTTP Live Streaming).
- [DASH Adaptive Streaming für HTML 5 Video](/de/docs/Web/API/Media_Source_Extensions_API/DASH_Adaptive_Streaming)
  - : Beschreibt, wie man adaptives Streaming mit DASH und WebM einrichtet.

### Fortgeschrittene Themen

- [Web Audio API plattformübergreifende Unterstützung](/de/docs/Web/API/Web_Audio_API/Best_practices#cross_browser_legacy_support)
  - : Ein Leitfaden zum Schreiben von plattformübergreifendem Web Audio API-Code.
- [Einfache Audioaufnahme mit der MediaRecorder API](https://hacks.mozilla.org/2014/06/easy-audio-capture-with-the-mediarecorder-api/)
  - : Erklärt die Grundlagen der Verwendung der MediaStream Recording API, um direkt eine Medienstromaufzeichnung zu erstellen.

## Referenzen

- [Das Video-Element](/de/docs/Web/HTML/Reference/Elements/video)
- [HTMLVideoElement API](/de/docs/Web/API/HTMLVideoElement)
- [MediaSource API](/de/docs/Web/API/MediaSource)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
- [getUserMedia](/de/docs/Web/API/MediaDevices/getUserMedia)
- [Ereignisindex: Medien](/de/docs/Web/API/Document_Object_Model/Events#media)
