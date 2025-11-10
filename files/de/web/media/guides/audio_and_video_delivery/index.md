---
title: Audio- und Videolieferung
slug: Web/Media/Guides/Audio_and_video_delivery
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

Wir können Audio und Video im Web auf verschiedene Arten bereitstellen, von 'statischen' Mediendateien bis hin zu adaptiven Live-Streams. Dieser Artikel soll als Ausgangspunkt dienen, um die verschiedenen Bereitstellungsmechanismen von web-basierten Medien und die Kompatibilität mit populären Browsern zu erkunden.

## Audio und Video HTML-Elemente

Ob wir mit vorab aufgenommenen Audiodateien oder Live-Streams arbeiten, der Mechanismus, um sie über die {{ htmlelement("audio")}} und {{ htmlelement("video")}} Elemente des Browsers verfügbar zu machen, bleibt weitgehend derselbe. Derzeit müssen wir zur Unterstützung aller Browser zwei Formate angeben, obwohl sich dies mit der Übernahme der MP3- und MP4-Formate in Firefox und Opera schnell ändert. Sie finden Kompatibilitätsinformationen im [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats).

Um Video und Audio bereitzustellen, sieht der allgemeine Workflow in der Regel folgendermaßen aus:

1. Überprüfen, welches Format der Browser über Feature-Erkennung unterstützt (in der Regel eine Auswahl von zwei, wie oben angegeben).
2. Wenn der Browser die Wiedergabe eines der bereitgestellten Formate nicht nativ unterstützt, entweder ein Standbild anzeigen oder eine Fallback-Technologie verwenden, um das Video zu präsentieren.
3. Festlegen, wie Sie das Medium abspielen/instanziieren möchten (z.B. ein {{ htmlelement("video") }}-Element oder `document.createElement('video')` vielleicht?)
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

Der obige Code erstellt einen Audioplayer, der versucht, so viel Audio wie möglich für eine reibungslose Wiedergabe vorzuladen.

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

Der obige Code erstellt einen Videoplayer mit den Abmessungen 640x480 Pixel, der ein Posterbild anzeigt, bis das Video abgespielt wird. Wir weisen das Video an, automatisch wiederzugeben, jedoch standardmäßig stumm geschaltet zu sein.

> [!NOTE]
> Das `autoplay`-Attribut kann von einigen mobilen Browsern ignoriert werden. Auch das Autoplay-Feature kann, wenn es missbraucht wird, umstritten sein. Es wird dringend empfohlen, dass Sie den [Leitfaden zur Autoplay-Nutzung für Medien und Web-Audio-APIs](/de/docs/Web/Media/Guides/Autoplay) lesen, um zu erfahren, wie Sie Autoplay klug einsetzen.

Weitere Informationen finden Sie unter [`<video>` Element](/de/docs/Web/HTML/Reference/Elements/video) und [Erstellung eines browserübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).

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

Wir setzen die Quelle des Audios abhängig von der Art der Audiodatei, die der Browser unterstützt, und setzen den Abspielkopf 5 Sekunden vor und versuchen, es abzuspielen.

> [!NOTE]
> Das Abspielen wird von den meisten Browsern ignoriert, es sei denn, es wurde durch ein benutzerinitiiertes Ereignis ausgelöst.

Es ist auch möglich, einem {{ htmlelement("audio") }}-Element eine Base64-codierte WAV-Datei zuzuführen, wodurch Audio on-the-fly generiert werden kann:

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

Wir legen die Quelle des Videos abhängig von der Art der Videodatei fest, die der Browser unterstützt. Dann setzen wir die Breite und Höhe des Videos.

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

Erfahren Sie mehr über die Grundlagen der Web Audio API in [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API).

## getUserMedia / Stream API

Es ist auch möglich, einen Live-Stream von einer Webcam und/oder einem Mikrofon mithilfe von `getUserMedia` und der Stream API abzurufen. Dies ist Teil einer umfassenderen Technologie, die als WebRTC (Web Real-Time Communications) bekannt ist und mit den neuesten Versionen von Chrome, Firefox und Opera kompatibel ist.

Um den Stream von Ihrer Webcam zu erfassen, richten Sie zunächst ein {{htmlelement("video")}}-Element ein:

```html
<video id="webcam" width="480" height="360"></video>
```

Anschließend, falls unterstützt, verbinden Sie die Webcam-Quelle mit dem Videoelement:

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

## MediaStream-Aufnahme

Neue Standards werden eingeführt, um Ihrem Browser das Erfassen von Medien über Ihr Mikrofon oder Ihre Kamera mit `getUserMedia` zu ermöglichen und es sofort mit der neuen MediaStream Recording API aufzuzeichnen. Sie nehmen den Stream, den Sie von `getUserMedia` erhalten, übergeben ihn an ein `MediaRecorder`-Objekt und leiten die resultierende Ausgabe an Ihre Audio- oder Videoquelle weiter.

Der Hauptmechanismus wird unten aufgeführt:

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

Siehe [MediaStream-Aufzeichnungs-API](/de/docs/Web/API/MediaStream_Recording_API) für weitere Einzelheiten.

## Media Source Extensions (MSE)

[Media Source Extensions](https://w3c.github.io/media-source/) ist ein Arbeitsentwurf des W3C, der plant, [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) zu erweitern, um JavaScript zu ermöglichen, Medienstreams zur Wiedergabe zu generieren. Die Erlaubnis für JavaScript, Streams zu generieren, ermöglicht eine Vielzahl von Anwendungsfällen wie adaptives Streaming und zeitverschobene Live-Streams.

### Encrypted Media Extensions (EME)

[Encrypted Media Extensions](https://w3c.github.io/encrypted-media/) ist ein Vorschlag des W3C zur Erweiterung von `HTMLMediaElement`, der APIs bereitstellt, um die Wiedergabe von geschützten Inhalten zu steuern.

Die API unterstützt Anwendungsfälle von einfacher Klartextschlüssel-Entschlüsselung bis hin zu hochwertigem Video (vorausgesetzt, es gibt eine entsprechende Implementierung des Benutzeragenten). Der Austausch von Lizenzen/Schlüsseln wird von der Anwendung gesteuert, was die Entwicklung robuster Wiedergabeanwendungen ermöglicht, die eine Reihe von Inhaltsentschlüsselungs- und Schutztechnologien unterstützen.

Eine der Hauptverwendungen von EME besteht darin, Browsern die Umsetzung von DRM ([Digital Rights Management](https://en.wikipedia.org/wiki/Digital_rights_management)) zu ermöglichen, was hilft, das Kopieren web-basierter Inhalte (insbesondere von Videos) zu verhindern.

### Adaptives Streaming

Neue Formate und Protokolle werden eingeführt, um adaptives Streaming zu erleichtern. Adaptives Streaming bedeutet, dass die Bandbreite und üblicherweise die Qualität des Streams sich in Echtzeit entsprechend der verfügbaren Bandbreite des Benutzers ändern können. Adaptives Streaming wird oft in Verbindung mit Live-Streaming verwendet, bei dem eine reibungslose Bereitstellung von Audio oder Video von größter Bedeutung ist.

Die Hauptformate für das adaptive Streaming sind [HLS](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#hls) und [MPEG-DASH](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#mpeg-dash). MSE wurde mit DASH im Sinn entwickelt. MSE definiert Bytestreams gemäß [ISOBMFF](https://dvcs.w3.org/hg/html-media/raw-file/tip/media-source/isobmff-byte-stream-format.html) und [M2TS](https://en.wikipedia.org/wiki/M2ts) (beide unterstützt in DASH, letzteres unterstützt in HLS). Allgemein gesprochen, wenn Sie sich für Standards interessieren, Flexibilität suchen oder die meisten modernen Browser unterstützen möchten, sind Sie wahrscheinlich besser mit DASH aufgehoben.

> [!NOTE]
> Derzeit unterstützt Safari DASH nicht, obwohl dash.js in neueren Versionen von Safari funktioniert, die mit OS X Yosemite veröffentlicht werden sollen.

DASH bietet auch eine Reihe von Profilen, einschließlich der OnDemand-Profile, die keine Vorverarbeitung und Aufspaltung von Mediendateien erfordern. Es gibt auch eine Reihe von Cloud-basierten Diensten, die Ihre Medien sowohl in HLS als auch in DASH konvertieren.

Weitere Informationen finden Sie unter [Live-Streaming-Web-Audio und -Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video).

## Anpassen Ihres Mediaplayers

Möglicherweise möchten Sie, dass Ihr Audio- oder Videoplayer über alle Browser hinweg einheitlich aussieht, oder ihn einfach an das Erscheinungsbild Ihrer Website anpassen. Die allgemeine Technik, dies zu erreichen, besteht darin, das `controls`-Attribut wegzulassen, damit die Standard-Browser-Steuerelemente nicht angezeigt werden, benutzerdefinierte Steuerelemente mit HTML und CSS zu erstellen und dann JavaScript zu verwenden, um Ihre Steuerelemente mit der Audio/Video-API zu verknüpfen.

Falls Sie zusätzliche Funktionen benötigen, ist es möglich, Features hinzuzufügen, die in Standardplayern derzeit nicht vorhanden sind, wie z.B. die Wiedergabegeschwindigkeit, Qualitätsstream-Schalter oder sogar Audiospektren. Sie können auch entscheiden, wie Ihr Player responsiv gestaltet werden soll – beispielsweise könnten Sie unter bestimmten Bedingungen die Fortschrittsleiste entfernen.

Sie können Klick-, Touch- und/oder Tastaturereignisse erkennen, um Aktionen wie Abspielen, Pause und Navigieren auszulösen. Es ist oft wichtig, sich an Tastatursteuerungen zur Benutzerfreundlichkeit und Barrierefreiheit zu erinnern.

Ein schnelles Beispiel – richten Sie zunächst Ihr Audio und die benutzerdefinierten Steuerelemente in HTML ein:

```html
<audio id="my-audio" src="/shared-assets/audio/guitar.mp3"></audio>
<button id="my-control">play</button>
```

Fügen Sie ein bisschen JavaScript hinzu, um Ereignisse zu erkennen, um das Audio abzuspielen und zu pausieren:

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

Weitere Informationen finden Sie unter [Erstellen eines eigenen benutzerdefinierten Audioplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics#creating_your_own_custom_audio_player).

## Weitere Tipps für Audio/Video

### Stoppen des Media-Downloads

Während das Stoppen der Wiedergabe von Medien so einfach ist wie das Aufrufen der `pause()`-Methode des Elements, lädt der Browser die Medien weiter herunter, bis das Medienelement über die Müllabfuhr entfernt wird.

Hier ist ein Trick, um den Download sofort zu stoppen:

```js
const mediaElement = document.querySelector("#myMediaElementID");
mediaElement.removeAttribute("src");
mediaElement.load();
```

Indem Sie das `src`-Attribut des Medienelements entfernen und die `load()`-Methode aufrufen, geben Sie die mit dem Video verbundenen Ressourcen frei, was den Netzwerkdownload stoppt. Sie müssen `load()` aufrufen, nachdem Sie das Attribut entfernt haben, da das bloße Entfernen des `src`-Attributs den Ladealgorithmus nicht auslöst. Wenn das `<video>`-Element auch `<source>`-Element-Nachkommen hat, sollten diese ebenfalls entfernt werden, bevor `load()` aufgerufen wird.

Beachten Sie, dass das bloße Setzen des `src`-Attributs auf einen leeren String den Browser tatsächlich dazu veranlasst, es so zu behandeln, als würde eine Videoquelle zu einem relativen Pfad eingestellt. Dies führt dazu, dass der Browser versucht, einen weiteren Download durchzuführen, was wahrscheinlich kein gültiges Video ist.

### Durch Medien navigieren

Medienelemente bieten Unterstützung dafür, die aktuelle Wiedergabeposition zu bestimmten Punkten im Inhalt der Medien zu bewegen. Dies geschieht durch das Setzen des Wertes der `currentTime`-Eigenschaft des Elements; siehe [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) für weitere Details zu den Eigenschaften des Elements. Setzen Sie den Wert auf die Zeit in Sekunden, bei der die Wiedergabe fortgesetzt werden soll.

Sie können die `seekable`-Eigenschaft des Elements verwenden, um die Bereiche des Mediums zu bestimmen, die derzeit zum Navigieren zur Verfügung stehen. Dies gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Zeitbereiche auflistet, zu denen Sie navigieren können.

```js
const mediaElement = document.querySelector("#mediaElementID");
mediaElement.seekable.start(0); // Returns the starting time (in seconds)
mediaElement.seekable.end(0); // Returns the ending time (in seconds)
mediaElement.currentTime = 122; // Seek to 122 seconds
mediaElement.played.end(0); // Returns the number of seconds the browser has played
```

### Wiedergabebereich angeben

Beim Angeben der URI von Medien für ein {{ HTMLElement("audio") }}- oder {{ HTMLElement("video") }}-Element können Sie optional zusätzliche Informationen hinzufügen, um den abzuspielenden Teil des Mediums anzugeben. Dazu fügen Sie ein Rautezeichen ("#") gefolgt von der Beschreibung des Medienfragments an.

Ein Zeitbereich wird mit der Syntax angegeben:

```plain
#t=[starttime][,endtime]
```

Die Zeit kann als Anzahl von Sekunden (als Fließkommawert) oder als Stunden/Minuten/Sekunden-Zeit mit Doppelpunkten getrennt (z.B. 2:05:01 für 2 Stunden, 5 Minuten und 1 Sekunde) angegeben werden.

Einige Beispiele:

- `http://example.com/video.ogv#t=10,20`
  - : Gibt an, dass das Video den Bereich von 10 bis 20 Sekunden abspielen soll.
- `http://example.com/video.ogv#t=,10.5`
  - : Gibt an, dass das Video von Beginn bis 10,5 Sekunden abspielen soll.
- `http://example.com/video.ogv#t=,02:00:00`
  - : Gibt an, dass das Video von Beginn bis zwei Stunden abspielen soll.
- `http://example.com/video.ogv#t=60`
  - : Gibt an, dass das Video bei 60 Sekunden beginnen und bis zum Ende des Videos abspielen soll.

## Fehlerbehandlung

Fehler werden an die untergeordneten {{ HTMLElement("source") }}-Elemente übermittelt, die den Fehler verursachenden Quellen entsprechen.

Dies ermöglicht Ihnen die Erkennung, welche Quellen nicht geladen wurden, was nützlich sein kann. Betrachten Sie dieses HTML:

```html
<video>
  <source
    id="src-mp4"
    src="video.mp4"
    type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
  <source
    id="src-3gp"
    src="video.3gp"
    type='video/3gpp; codecs="mp4v.20.8, samr"' />
  <source
    id="src-ogg"
    src="video.ogv"
    type='video/ogv; codecs="theora, vorbis"' />
</video>
```

Da Firefox auf einigen Plattformen MP4 und 3GP aufgrund ihrer patentrechtlich belasteten Natur nicht unterstützt, erhalten die {{ HTMLElement("source") }}-Elemente mit den IDs `src-mp4` und `src-3gp` `error`-Ereignisse, bevor die Ogg-Ressource geladen wird. Die Quellen werden in der Reihenfolge versucht, in der sie erscheinen, und sobald eine erfolgreich lädt, werden die verbleibenden Quellen überhaupt nicht mehr versucht.

### Überprüfen, ob der Browser die bereitgestellten Formate unterstützt

Unterstützung für Medienformate ist auf [Can I Use](https://caniuse.com/) verfügbar.

- [Audio MP3 (`type="audio/mpeg"`)](https://caniuse.com/mp3)
- [Audio Ogg (`type="audio/ogg"`)](https://caniuse.com/ogg-vorbis)
- [Video MP4 (`type="video/mp4"`)](https://caniuse.com/mpeg4)
- [Video WebM (`type="video/webm"`)](https://caniuse.com/webm)
- [Video Ogg (`type="video/ogg"`)](https://caniuse.com/ogv)

Sie können auch nach [anderen Medienformaten](/de/docs/Web/Media/Guides/Formats/Containers) suchen.

Wenn ein Medienformat angeblich unterstützt wird, die von Ihnen bereitgestellten Dateien aber nicht abgespielt werden, gibt es zwei mögliche Probleme:

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

Ihre Dateien könnten falsch codiert worden sein — versuchen Sie, mit einem der folgenden Tools zu codieren, die sich als ziemlich zuverlässig erwiesen haben:

- [Audacity](https://sourceforge.net/projects/audacity/) — Kostenloser Audio-Editor und Rekorder
- [Miro](https://www.getmiro.com/) — Kostenloser, Open-Source-Musik- und Videoplayer
- [Handbrake](https://handbrake.fr/) — Open Source Video-Transcoder
- [Firefogg](https://www.firefogg.org/) — Video- und Audio-Codierung für Firefox
- [FFmpeg2](https://www.ffmpeg.org/) — Umfassender Kommandozeilen-Codierer
- [Vid.ly](https://m.vid.ly/) — Videoplayer, Transcodierung und Bereitstellung
- [Internet Archive](https://archive.org/) — Kostenlose Transcodierung und Speicherung

### Erkennen, wenn keine Quellen geladen wurden

Um zu erkennen, dass alle untergeordneten {{ HTMLElement("source") }}-Elemente nicht geladen werden konnten, überprüfen Sie den Wert des `networkState`-Attributs des Medienelements. Wenn dies `HTMLMediaElement.NETWORK_NO_SOURCE` ist, wissen Sie, dass alle Quellen fehlgeschlagen sind.

Sollten Sie zu diesem Zeitpunkt eine weitere Quelle hinzufügen, indem Sie ein neues {{ HTMLElement("source") }}-Element als Kind des Medienelements einfügen, unternimmt Gecko den Versuch, die angegebene Ressource zu laden.

### Zeigen des Fallback-Inhalts, wenn keine Quelle dekodiert werden konnte

Eine andere Möglichkeit, den Fallback-Inhalt eines Videos anzuzeigen, wenn keine der Quellen im aktuellen Browser dekodiert werden konnte, besteht darin, einen Fehlerhandler auf das letzte Quellenelement zu setzen. Dann können Sie das Video mit seinem Fallback-Inhalt ersetzen:

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

## Audio-/Video-JavaScript-Bibliotheken

Es gibt eine Reihe von Audio- und Video-JavaScript-Bibliotheken. Die beliebtesten Bibliotheken ermöglichen es Ihnen, ein einheitliches Player-Design über alle Browser zu wählen und bieten ein Fallback für Browser, die Audio und Video nicht nativ unterstützen. Fallbacks haben historisch now-obsolete Plugins wie Adobe Flash oder Microsoft Silverlight verwendet, um einen Mediaplayer in nicht unterstützenden Browsern bereitzustellen, obwohl diese auf modernen Computern nicht mehr unterstützt werden. Andere Funktionalitäten wie das [`<track>`](/de/docs/Web/HTML/Reference/Elements/track)-Element für Untertitel können ebenfalls durch Mediatheken bereitgestellt werden.

### Nur Audio

- [SoundManager](https://www.schillmania.com/projects/soundmanager2/)
- [AmplitudeJS](https://serversideup.net/open-source/amplitudejs/)
- [HowlerJS](https://howlerjs.com/)

### Nur Video

- [flowplayer](https://flowplayer.com/): Kostenlos mit Flowplayer-Logo-Wasserzeichen. Open Source (GPL-lizenziert).
- [JWPlayer](https://jwpconnatix.com/): Registrierung erforderlich zum Herunterladen. Open Source Edition (Creative Commons License).
- [SublimeVideo](https://www.sublimevideo.net/): Registrierung erforderlich. Formbasierte Einrichtung mit domainspezifischem Link zur CDN-gehosteten Bibliothek.
- [Video.js](https://videojs.org/): Kostenlos und Open Source (Apache 2-lizenziert).

### Audio und Video

- [jPlayer](https://jPlayer.org/): Kostenlos und Open Source (MIT-lizenziert).
- [mediaelement.js](https://www.mediaelementjs.com/): Kostenlos und Open Source (MIT-lizenziert).

### Web Audio API

- [AudioContext monkeypatch](https://github.com/cwilso/AudioContext-MonkeyPatch): Ein Polyfill für ältere Versionen der Web Audio API; Open Source (Apache 2-lizenziert).

## Leitfäden

- [Erstellung eines browserübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player)
  - : Ein Leitfaden zur Erstellung eines grundlegenden browserübergreifenden Videoplayers mit dem {{ htmlelement("video") }}-Element.
- [Grundlagen der Videoplayer-Gestaltung](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics)
  - : Mit dem im vorherigen Artikel eingerichteten browserübergreifenden Videoplayer befasst sich dieser Artikel nun mit der Bereitstellung grundlegender, responsiver Gestaltung für den Player.
- [Untertitel zu HTML-Video hinzufügen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)
  - : Dieser Artikel erklärt, wie man Untertitel zu HTML-{{ htmlelement("video") }} hinzufügt, Verwenden des [Web_Video_Text_Tracks_Format](/de/docs/Web/API/WebVTT_API) und des {{ htmlelement("track") }}-Elements.
- [Grundlagen der browserübergreifenden Audioerstellung](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
  - : Dieser Artikel bietet einen grundlegenden Leitfaden zur Erstellung eines HTML-Audioplayers, der mit allen Browsern funktioniert, mit allen zugehörigen Attributen, Eigenschaften und Ereignissen erklärt und einem kurzen Leitfaden zu benutzerdefinierten Steuerelementen, die mit der Media API erstellt wurden.
- [Medienbuffering, Suchvorgänge und Zeitbereiche](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges)
  - : Manchmal ist es nützlich zu wissen, wie viel {{ htmlelement("audio") }} oder {{ htmlelement("video") }} heruntergeladen oder abspielbar ist, ohne eine Verzögerung — ein gutes Beispiel dafür ist die gepufferte Fortschrittsleiste eines Audio- oder Videoplayers. Dieser Artikel erörtert, wie man eine Buffer/Seek-Leiste mit [TimeRanges](/de/docs/Web/API/TimeRanges) und anderen Funktionen der Media API erstellt.
- [HTML playbackRate ausführlich erklärt](/de/docs/Web/Media/Guides/Audio_and_video_delivery/WebAudio_playbackRate_explained)
  - : Die `playbackRate`-Eigenschaft ermöglicht es uns, die Geschwindigkeit oder Rate zu ändern, mit der ein Stück Web-Audio oder Video abgespielt wird. Dieser Artikel erklärt es im Detail.
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
  - : Diese erklärt die Grundlagen der Verwendung der Web Audio API, um eine Audiodatei zu erfassen, zu manipulieren und abzuspielen.

### Streaming-Medien

- [Live-Streaming von Web-Audio und -Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video)
  - : Live-Streaming-Technologie wird oft verwendet, um Live-Ereignisse wie Sportveranstaltungen, Konzerte und allgemein TV- und Radioprogramme zu übertragen, die live ausgestrahlt werden. Oft auf das einfache Streaming verkürzt, ist Live-Streaming der Prozess der Übertragung von Medien 'live' an Computer und Geräte. Dies ist ein ziemlich komplexes und noch junges Thema mit vielen Variablen, daher werden wir Sie in diesem Artikel in das Thema einführen und Ihnen zeigen, wie Sie beginnen können.
- [Einrichtung adaptiver Streaming-Medienquellen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources)
  - : Nehmen wir an, Sie möchten eine adaptive Streaming-Medienquelle auf einem Server einrichten, die in einem HTML-Medienelement verwendet werden kann. Wie würden Sie das tun? Dieser Artikel erklärt es und behandelt zwei der häufigsten Formate: MPEG-DASH und HLS (HTTP Live Streaming).
- [DASH Adaptive Streaming für HTML 5 Video](/de/docs/Web/API/Media_Source_Extensions_API/DASH_Adaptive_Streaming)
  - : Details zur Einrichtung von adaptivem Streaming mit DASH und WebM.

### Erweitert Themen

- [Cross-browser-Unterstützung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Best_practices#cross_browser_legacy_support)
  - : Ein Leitfaden zum Schreiben von browserübergreifendem Web Audio API-Code.
- [Einfache Audiocapture mit der MediaRecorder API](https://hacks.mozilla.org/2014/06/easy-audio-capture-with-the-mediarecorder-api/)
  - : Erklärt die Grundlagen der Verwendung der MediaStream-Aufzeichnungs-API zur direkten Aufnahme eines Medienstreams.

## Referenz

- [Das Video-Element](/de/docs/Web/HTML/Reference/Elements/video)
- [HTMLVideoElement API](/de/docs/Web/API/HTMLVideoElement)
- [MediaSource API](/de/docs/Web/API/MediaSource)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
- [getUserMedia](/de/docs/Web/API/MediaDevices/getUserMedia)
- [Ereignisindex: Medien](/de/docs/Web/API/Document_Object_Model/Events#media)
