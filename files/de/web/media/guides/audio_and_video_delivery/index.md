---
title: Audio- und Videowiedergabe
slug: Web/Media/Guides/Audio_and_video_delivery
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

Wir können Audio und Video im Web auf verschiedene Arten bereitstellen, von 'statischen' Mediendateien bis hin zu adaptiven Live-Streams. Dieser Artikel soll ein Einstiegspunkt sein, um die verschiedenen Bereitstellungsmechanismen webbasierter Medien und deren Kompatibilität mit gängigen Browsern zu erkunden.

## Audio- und Video-HTML-Elemente

Ob wir mit voraufgezeichneten Audiodateien oder Live-Streams arbeiten, der Mechanismus, um sie über die {{ htmlelement("audio")}}- und {{ htmlelement("video")}}-Elemente des Browsers verfügbar zu machen, bleibt weitgehend derselbe. Derzeit müssen wir, um alle Browser zu unterstützen, zwei Formate angeben, obwohl sich dies mit der Einführung von MP3- und MP4-Formaten in Firefox und Opera schnell ändert. Sie können Kompatibilitätsinformationen im [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats) finden.

Um Video und Audio bereitzustellen, sieht der allgemeine Arbeitsablauf normalerweise so aus:

1. Prüfen, welches Format der Browser über Feature-Erkennung unterstützt (meistens eine Auswahl aus zwei, wie oben erwähnt).
2. Wenn der Browser die Wiedergabe eines der bereitgestellten Formate nicht nativ unterstützt, entweder ein Standbild präsentieren oder eine Ersatztechnologie verwenden, um das Video darzustellen.
3. Bestimmen, wie Sie das Medium abspielen/instanziieren möchten (z.B. ein {{ htmlelement("video") }}-Element oder vielleicht `document.createElement('video')`?).
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

Der obige Code erstellt einen Audioplayer, der versucht, so viel Audio wie möglich vorzuladen, um eine reibungslose Wiedergabe zu gewährleisten.

> [!NOTE]
> Das `preload`-Attribut kann von einigen mobilen Browsern ignoriert werden.

Für weitere Informationen siehe [Cross Browser Audio Basics (HTML Audio In Detail)](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics#html_audio_in_detail).

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

Der obige Code erstellt einen Videoplayer mit Abmessungen von 640x480 Pixeln und zeigt ein Posterbild an, bis das Video abgespielt wird. Wir weisen das Video an, automatisch abzuspielen, aber standardmäßig stummgeschaltet zu sein.

> [!NOTE]
> Das `autoplay`-Attribut kann von einigen mobilen Browsern ignoriert werden. Auch kann das Autoplay-Feature umstritten sein, wenn es missbräuchlich verwendet wird. Es wird dringend empfohlen, den [Autoplay-Leitfaden für Medien und Web Audio APIs](/de/docs/Web/Media/Guides/Autoplay) zu lesen, um zu lernen, wie man Autoplay weise nutzt.

Für weitere Informationen siehe [`<video>`-Element](/de/docs/Web/HTML/Reference/Elements/video) und [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).

### JavaScript-Audio

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

Wir setzen die Quelle des Audios abhängig von der Art der Audiodatei, die der Browser unterstützt, und setzen dann den Spielkopf auf 5 Sekunden und versuchen, es abzuspielen.

> [!NOTE]
> Das Abspielen wird von den meisten Browsern ignoriert, es sei denn, es erfolgt durch ein benutzergesteuertes Ereignis.

Es ist auch möglich, einem {{ htmlelement("audio") }}-Element eine base64-kodierte WAV-Datei zuzuführen, die es erlaubt, Audio dynamisch zu erzeugen:

```html
<audio id="player" src="data:audio/x-wav;base64,UklGRvC…"></audio>
```

[Speak.js](https://github.com/kripken/speak.js/) verwendet diese Technik.

### JavaScript-Video

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

Wir setzen die Quelle des Videos abhängig von der Art der Videodatei, die der Browser unterstützt, und legen dann die Breite und Höhe des Videos fest.

## Web Audio API

In diesem Beispiel holen wir eine MP3-Datei mit der [`fetch()`](/de/docs/Web/API/Window/fetch)-API, laden sie in eine Quelle und spielen sie ab.

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

Sie können [das komplette Beispiel live ausführen](https://mdn.github.io/webaudio-examples/decode-audio-data/promise/) oder [den Quellcode ansehen](https://github.com/mdn/webaudio-examples/tree/main/decode-audio-data/promise).

Finden Sie mehr über die Grundlagen der Web Audio API in [Nutzung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API).

## getUserMedia / Stream API

Es ist auch möglich, einen Live-Stream von einer Webcam und/oder einem Mikrofon mit `getUserMedia` und der Stream-API abzurufen. Dies ist Teil einer breiteren Technologie, bekannt als WebRTC (Web Real-Time Communications) und ist kompatibel mit den neuesten Versionen von Chrome, Firefox und Opera.

Um den Stream von Ihrer Webcam abzurufen, richten Sie zunächst ein {{htmlelement("video")}}-Element ein:

```html
<video id="webcam" width="480" height="360"></video>
```

Anschließend, wenn unterstützt, verbinden Sie die Webcam-Quelle mit dem Videoelement:

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

Für weitere Informationen, lesen Sie unsere Seite [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia).

## MediaStream-Aufnahme

Neue Standards werden ausgearbeitet, um Ihrem Browser zu erlauben, Medien von Ihrem Mikrofon oder Ihrer Kamera mit `getUserMedia` zu erfassen und sie sofort mit der neuen MediaStream-Aufnahme-API aufzuzeichnen. Sie nehmen den Stream, den Sie von `getUserMedia` erhalten, übergeben ihn einem `MediaRecorder`-Objekt, nehmen die resultierende Ausgabe und führen sie Ihrer Audio- oder Videoquelle zu.

Das Hauptverfahren wird unten beschrieben:

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

[Media Source Extensions](https://w3c.github.io/media-source/) ist ein W3C-Arbeitsentwurf, der plant, [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) zu erweitern, um JavaScript zu ermöglichen, Medienstreams zur Wiedergabe zu erzeugen. JavaScript die Generierung von Streams zu ermöglichen, erleichtert eine Vielzahl von Anwendungsfällen wie adaptives Streaming und zeitversetzte Live-Streams.

### Encrypted Media Extensions (EME)

[Encrypted Media Extensions](https://w3c.github.io/encrypted-media/) ist ein W3C-Vorschlag zur Erweiterung des `HTMLMediaElement`, der APIs zur Steuerung der Wiedergabe von geschütztem Inhalt bereitstellt.

Die API unterstützt Anwendungsfälle vom grundlegenden Clear Key-Entschlüsselung bis hin zu hochwertigem Video (bei entsprechender Implementierung des Benutzeragents). Der Austausch von Lizenzen/Schlüsseln wird durch die Anwendung gesteuert, was die Entwicklung robuster Wiedergabeanwendungen unterstützt, die eine Vielzahl von Inhalt-Entschlüsselungs- und Schutztechnologien unterstützen.

Eine der Hauptverwendungen von EME besteht darin, Browsern zu ermöglichen, DRM ([Digital Rights Management](https://en.wikipedia.org/wiki/Digital_rights_management)) zu implementieren, was hilft, webbasierte Inhalte (insbesondere Video) davor zu bewahren, kopiert zu werden.

### Adaptives Streaming

Neue Formate und Protokolle werden eingeführt, um adaptives Streaming zu ermöglichen. Adaptives Streaming-Medien bedeutet, dass die Bandbreite und in der Regel die Qualität des Streams in Echtzeit in Reaktion auf die verfügbare Bandbreite des Benutzers ändern kann. Adaptives Streaming wird häufig in Verbindung mit Live-Streaming verwendet, wo eine reibungslose Bereitstellung von Audio oder Video von größter Bedeutung ist.

Die Hauptformate, die für adaptives Streaming verwendet werden, sind [HLS](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#hls) und [MPEG-DASH](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#mpeg-dash). MSE wurde mit DASH im Sinn entworfen. MSE definiert Byte-Streams entsprechend [ISOBMFF](https://dvcs.w3.org/hg/html-media/raw-file/tip/media-source/isobmff-byte-stream-format.html) und [M2TS](https://en.wikipedia.org/wiki/M2ts) (beide in DASH unterstützt, letzterer in HLS unterstützt). Im Allgemeinen, wenn Sie an Standards interessiert sind, Flexibilität suchen oder die meisten modernen Browser unterstützen möchten, sind Sie wahrscheinlich mit DASH besser bedient.

> [!NOTE]
> Derzeit unterstützt Safari DASH nicht, obwohl dash.js auf neueren Versionen von Safari funktioniert, die mit OSX Yosemite veröffentlicht werden sollen.

DASH bietet auch eine Reihe von Profilen, einschließlich On-Demand-Profile, die keine Vorverarbeitung und Aufteilung von Mediendateien erfordern. Es gibt auch eine Reihe von Cloud-basierten Diensten, die Ihre Medien sowohl in HLS als auch in DASH konvertieren.

Für weitere Informationen siehe [Live-Streaming von Web-Audio und -Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video).

## Anpassung Ihres Media-Players

Vielleicht entscheiden Sie sich, dass Ihr Audio- oder Videoplayer einen konsistenten Look über alle Browser hinweg haben soll oder einfach wünschen, ihn an die Gestaltung Ihrer Seite anzupassen. Die allgemeine Technik, um dies zu erreichen, besteht darin, das `controls`-Attribut wegzulassen, sodass die Standard-Browser-Steuerelemente nicht angezeigt werden, benutzerdefinierte Steuerelemente mit HTML und CSS zu erstellen und dann mit JavaScript Ihre Steuerelemente mit der Audio/Video-API zu verknüpfen.

Wenn Sie etwas zusätzliches benötigen, ist es möglich, Funktionen hinzuzufügen, die derzeit in Standard-Playern nicht vorhanden sind, wie z.B. Wiedergabegeschwindigkeit, Qualitätsschalter oder sogar Audiospektren. Sie können auch wählen, wie Sie Ihren Player reaktionsfähig machen - zum Beispiel könnten Sie die Fortschrittsanzeige unter bestimmten Bedingungen entfernen.

Sie können Klick-, Berührungs- und/oder Tastaturereignisse erkennen, um Aktionen wie Abspielen, Pausieren und Scrollen auszulösen. Es ist oft wichtig, Tastatursteuerungen zur Benutzerfreundlichkeit und Zugänglichkeit zu merken.

Ein schnelles Beispiel - richten Sie zunächst Ihr Audio und benutzerdefinierte Steuerelemente in HTML ein:

```html
<audio id="my-audio" src="/shared-assets/audio/guitar.mp3"></audio>
<button id="my-control">play</button>
```

Fügen Sie etwas JavaScript hinzu, um Ereignisse zu erkennen, um das Audio abzuspielen und zu pausieren:

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

{{EmbedLiveSample("anpassen Ihres Media-Players", "", 200)}}

Für weitere Informationen, siehe [Einen eigenen benutzerdefinierten Audioplayer erstellen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics#creating_your_own_custom_audio_player).

## Weitere Tipps für Audio/Video

### Stoppen des Downloads von Medien

Während das Stoppen der Wiedergabe von Medien so einfach ist, wie die `pause()`-Methode des Elements aufzurufen, lädt der Browser weiterhin die Medien herunter, bis das Medienelement durch Müllsammlung entsorgt wird.

Hier ist ein Trick, der den Download sofort stoppt:

```js
const mediaElement = document.querySelector("#myMediaElementID");
mediaElement.removeAttribute("src");
mediaElement.load();
```

Durch das Entfernen des `src`-Attributs des Medienelements und das Aufrufen der `load()`-Methode, werden die mit dem Video verbundenen Ressourcen freigegeben, wodurch der Netzwerkdownload gestoppt wird. Sie müssen `load()` nach dem Entfernen des Attributs aufrufen, da das bloße Entfernen des `src`-Attributs den Ladealgorithmus nicht auslöst. Wenn das `<video>`-Element auch `<source>`-Element-Nachkommen hat, sollten diese ebenfalls vor dem Aufrufen von `load()` entfernt werden.

Beachten Sie, dass das bloße Setzen des `src`-Attributs auf eine leere Zeichenkette den Browser tatsächlich dazu veranlasst, es so zu behandeln, als würden Sie eine Videoquelle auf einen relativen Pfad setzen. Dies verursacht, dass der Browser versucht, etwas herunterzuladen, das wahrscheinlich kein gültiges Video ist.

### Durch Medien suchen

Medienelemente bieten Unterstützung für das Verschieben der aktuellen Wiedergabeposition zu bestimmten Punkten im Medieninhalt. Dies geschieht, indem der Wert der `currentTime`-Eigenschaft am Element gesetzt wird; siehe [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) für weitere Details zu den Eigenschaften des Elements. Setzen Sie den Wert auf die Zeit in Sekunden, bei der die Wiedergabe fortgesetzt werden soll.

Sie können die `seekable`-Eigenschaft des Elements verwenden, um die Bereiche des Medieninhalts zu bestimmen, die derzeit für die Suche verfügbar sind. Diese gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Zeitenbereiche auflistet, die durchsucht werden können.

```js
const mediaElement = document.querySelector("#mediaElementID");
mediaElement.seekable.start(0); // Returns the starting time (in seconds)
mediaElement.seekable.end(0); // Returns the ending time (in seconds)
mediaElement.currentTime = 122; // Seek to 122 seconds
mediaElement.played.end(0); // Returns the number of seconds the browser has played
```

### Wiedergabebereich festlegen

Beim Festlegen der URI für Medien in einem {{ HTMLElement("audio") }}- oder {{ HTMLElement("video") }}-Element können Sie optional zusätzliche Informationen einfügen, um den zu spielenden Teil der Medien zu spezifizieren. Dazu fügen Sie eine Raute ("#") gefolgt von der Beschreibung des Medienfragments hinzu.

Ein Zeitbereich wird mittels folgender Syntax angegeben:

```plain
#t=[starttime][,endtime]
```

Die Zeit kann als Anzahl von Sekunden (als Fließkommawert) oder als Stunden/Minuten/Sekunden-Zeit durch Doppelpunkte getrennt (z.B. 2:05:01 für 2 Stunden, 5 Minuten und 1 Sekunde) angegeben werden.

Einige Beispiele:

- `http://example.com/video.ogv#t=10,20`
  - : Gibt an, dass das Video im Bereich von 10 Sekunden bis 20 Sekunden abgespielt werden soll.
- `http://example.com/video.ogv#t=,10.5`
  - : Gibt an, dass das Video von Anfang bis 10,5 Sekunden abgespielt werden soll.
- `http://example.com/video.ogv#t=,02:00:00`
  - : Gibt an, dass das Video von Anfang bis zu zwei Stunden abgespielt werden soll.
- `http://example.com/video.ogv#t=60`
  - : Gibt an, dass das Video ab 60 Sekunden abgespielt werden soll und bis zum Ende des Videos fortgesetzt werden soll.

## Fehlerbehandlung

Fehler werden an die untergeordneten {{ HTMLElement("source") }}-Elemente übermittelt, die den Fehler verursachen.

Dies ermöglicht es Ihnen zu erkennen, welche Quellen nicht geladen werden konnten, was nützlich sein kann. Betrachten Sie diesen HTML-Code:

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

Da Firefox auf einigen Plattformen MP4 und 3GP aufgrund ihrer patentrechtlichen Natur nicht unterstützt, erhalten die {{ HTMLElement("source") }}-Elemente mit den IDs "mp4_src" und "3gp_src" `error`-Ereignisse, bevor die Ogg-Ressource geladen wird. Die Quellen werden in der Reihenfolge, in der sie erscheinen, ausprobiert, und sobald eine erfolgreich geladen wird, werden die verbleibenden Quellen überhaupt nicht ausprobiert.

### Überprüfen, ob der Browser die bereitgestellten Formate unterstützt

Unterstützung für Medienformate finden Sie auf [Can I Use](https://caniuse.com/).

- [Audio MP3 (`type="audio/mpeg"`)](https://caniuse.com/mp3)
- [Audio Ogg (`type="audio/ogg"`)](https://caniuse.com/ogg-vorbis)
- [Video MP4 (`type="video/mp4"`)](https://caniuse.com/mpeg4)
- [Video WebM (`type="video/webm"`)](https://caniuse.com/webm)
- [Video Ogg (`type="video/ogg"`)](https://caniuse.com/ogv)

Sie können auch nach [anderen Medienformaten](/de/docs/Web/Media/Guides/Formats/Containers) suchen.

Wenn ein Medienformat unterstützt werden soll, die von Ihnen bereitgestellten Dateien jedoch nicht abgespielt werden, gibt es zwei mögliche Probleme:

#### 1. Der Mediaserver liefert die Dateien nicht mit den korrekten Mime-Typen

Obwohl dies normalerweise unterstützt wird, müssen Sie möglicherweise das Folgende zur `.htaccess`-Datei Ihres Mediaservers hinzufügen.

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

Es könnte sein, dass Ihre Dateien falsch kodiert wurden — versuchen Sie, diese mit einem der folgenden Tools zu kodieren, die sich als recht zuverlässig erwiesen haben:

- [Audacity](https://sourceforge.net/projects/audacity/) — Kostenloser Audio-Editor und -Rekorder
- [Miro](https://www.getmiro.com/) — Kostenloser, Open-Source-Musik- und Videoplayer
- [Handbrake](https://handbrake.fr/) — Open Source Video-Transcoder
- [Firefogg](https://www.firefogg.org/) — Video- und Audio-Kodierung für Firefox
- [FFmpeg2](https://www.ffmpeg.org/) — Umfassender Befehlszeilen-Encoder
- [Vid.ly](https://m.vid.ly/) — Videoplayer, Transkodierung und Lieferung
- [Internet Archive](https://archive.org/) — Kostenloses Transkodieren und Speichern

### Erkennen, wenn keine Quellen geladen wurden

Um zu erkennen, dass alle untergeordneten {{ HTMLElement("source") }}-Elemente nicht geladen werden konnten, überprüfen Sie den Wert des `networkState`-Attributs des Medienelements. Wenn dieser `HTMLMediaElement.NETWORK_NO_SOURCE` ist, wissen Sie, dass alle Quellen nicht geladen werden konnten.

Falls Sie an diesem Punkt eine weitere Quelle hinzufügen, indem Sie ein neues {{ HTMLElement("source") }}-Element als untergeordnetes Element des Medienelements einfügen, versucht Gecko, die angegebene Ressource zu laden.

### Anzeigen von Ersatzinhalten, wenn keine Quelle dekodiert werden konnte

Eine weitere Möglichkeit, den Ersatzinhalt eines Videos anzuzeigen, wenn keine der Quellen im aktuellen Browser dekodiert werden konnte, besteht darin, einen Fehler-Handler am letzten Quellelement hinzuzufügen. Dann können Sie das Video durch seinen Ersatzinhalt ersetzen:

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

## Audio/Video-JavaScript-Bibliotheken

Es gibt eine Reihe von Audio- und Video-JavaScript-Bibliotheken. Die beliebtesten Bibliotheken ermöglichen Ihnen, ein konsistentes Player-Design über alle Browser hinweg zu wählen und bieten einen Fallback für Browser, die Audio und Video nicht nativ unterstützen. Fallbacks haben in der Vergangenheit inzwischen veraltete Plugins wie Adobe Flash oder Microsoft Silverlight verwendet, um in nicht unterstützten Browsern einen Mediaplayer bereitzustellen, obwohl diese auf modernen Computern nicht mehr unterstützt werden. Weitere Funktionen wie das [`<track>`](/de/docs/Web/HTML/Reference/Elements/track)-Element für Untertitel können ebenfalls durch Medienbibliotheken bereitgestellt werden.

### Nur Audio

- [SoundManager](https://www.schillmania.com/projects/soundmanager2/)
- [AmplitudeJS](https://521dimensions.com/open-source/amplitudejs)
- [HowlerJS](https://howlerjs.com/)

### Nur Video

- [flowplayer](https://flowplayer.com/): Gratis mit einem Flowplayer-Logo-Wasserzeichen. Open Source (GPL-lizenziert.)
- [JWPlayer](https://jwpconnatix.com/): Registrierung erforderlich zum Herunterladen. Open Source Edition (Creative Commons Lizenz.)
- [SublimeVideo](https://www.sublimevideo.net/): Registrierung erforderlich. Formularbasierte Einrichtung mit domainspezifischem Link zu einer CDN-gehosteten Bibliothek.
- [Video.js](https://videojs.com/): Gratis und Open Source (Apache 2 Lizenziert.)

### Audio und Video

- [jPlayer](https://jPlayer.org/): Gratis und Open Source (MIT-Lizenziert.)
- [mediaelement.js](https://www.mediaelementjs.com/): Gratis und Open Source (MIT-Lizenziert.)

### Web Audio API

- [AudioContext monkeypatch](https://github.com/cwilso/AudioContext-MonkeyPatch): Ein Polyfill für ältere Versionen der Web Audio API; Open Source (Apache 2 Lizenziert.)

## Leitfäden

- [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player)
  - : Ein Leitfaden zum Erstellen eines grundlegenden plattformübergreifenden Videoplayers unter Verwendung des {{ htmlelement("video") }}-Elements.
- [Grundlagen zur Videoplayer-Gestaltung](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics)
  - : Mit dem im vorherigen Artikel eingerichteten plattformübergreifenden Videoplayer, befasst sich dieser Artikel nun mit der Bereitstellung einfacher, responsiver Gestaltung für den Player.
- [Hinzufügen von Untertiteln zu HTML-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)
  - : Dieser Artikel erklärt, wie Sie Untertitel zu HTML-{{ htmlelement("video") }} hinzufügen, unter Verwendung von [Web_Video_Text_Tracks_Format](/de/docs/Web/API/WebVTT_API) und dem {{ htmlelement("track") }}-Element.
- [Cross-browser Audio Grundlagen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
  - : Dieser Artikel bietet eine grundlegende Anleitung zum Erstellen eines HTML-Audioplayers, der plattformübergreifend funktioniert, mit einer Erklärung aller zugehörigen Attribute, Eigenschaften und Ereignisse, sowie einem kurzen Leitfaden zu benutzerdefinierten Steuerelementen, die mit der Media API erstellt wurden.
- [Medienpufferung, Suchfunktion und Zeitbereiche](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges)
  - : Manchmal ist es nützlich zu wissen, wie viel {{ htmlelement("audio") }} oder {{ htmlelement("video") }} heruntergeladen oder ohne Verzögerung abspielbar ist - ein gutes Beispiel dafür ist die gepufferte Fortschrittsleiste eines Audio- oder Videoplayers. Dieser Artikel diskutiert, wie man eine Puffer-/Suchleiste mit [TimeRanges](/de/docs/Web/API/TimeRanges) und anderen Funktionen der Media API erstellt.
- [HTML playbackRate erklärt](/de/docs/Web/Media/Guides/Audio_and_video_delivery/WebAudio_playbackRate_explained)
  - : Die `playbackRate`-Eigenschaft ermöglicht es uns, die Geschwindigkeit oder das Tempo zu ändern, mit dem ein Web-Audio oder -Video abgespielt wird. Dieser Artikel erklärt dies im Detail.
- [Nutzung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
  - : Erklärt die Grundlagen der Nutzung der Web Audio API zum Abrufen, Manipulieren und Wiedergeben einer Audioquelle.

### Streaming von Medien

- [Live-Streaming von Web-Audio und -Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video)
  - : Livestreaming-Technologie wird oft eingesetzt, um Live-Ereignisse wie Sport, Konzerte und allgemeiner TV- und Radioprogramme, die live ausgestrahlt werden, zu übertragen. Oft einfach zu Streaming verkürzt, ist Livestreaming der Prozess der Übertragung von Medien 'live' zu Computern und Geräten. Dies ist ein recht komplexes und entstehendes Thema mit vielen Variablen, daher geben wir Ihnen in diesem Artikel eine Einführung in das Thema und zeigen Ihnen, wie Sie beginnen können.
- [Einrichten von adaptiven Streaming-Medienquellen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources)
  - : Angenommen, Sie möchten eine adaptive Streaming-Medienquelle auf einem Server einrichten, um sie innerhalb eines HTML-Medienelements zu nutzen. Wie würden Sie das tun? Dieser Artikel erklärt, wie, wobei er zwei der gebräuchlichsten Formate betrachtet: MPEG-DASH und HLS (HTTP Live Streaming).
- [DASH Adaptive Streaming für HTML-5-Video](/de/docs/Web/API/Media_Source_Extensions_API/DASH_Adaptive_Streaming)
  - : Beschreibt, wie adaptives Streaming unter Verwendung von DASH und WebM eingerichtet wird.

### Fortschrittliche Themen

- [Web Audio API plattformübergreifende Unterstützung](/de/docs/Web/API/Web_Audio_API/Best_practices#cross_browser_legacy_support)
  - : Ein Leitfaden zum Schreiben von plattformübergreifendem Web Audio API-Code.
- [Einfache Audioerfassung mit der MediaRecorder API](https://hacks.mozilla.org/2014/06/easy-audio-capture-with-the-mediarecorder-api/)
  - : Erklärt die Grundlagen der Nutzung der MediaStream-Aufnahme-API, um direkt einen Medienstream aufzuzeichnen.

## Referenz

- [Das video-Element](/de/docs/Web/HTML/Reference/Elements/video)
- [HTMLVideoElement API](/de/docs/Web/API/HTMLVideoElement)
- [MediaSource API](/de/docs/Web/API/MediaSource)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [MediaStream-Aufnahme API](/de/docs/Web/API/MediaStream_Recording_API)
- [getUserMedia](/de/docs/Web/API/MediaDevices/getUserMedia)
- [Ereignisindex: Medien](/de/docs/Web/API/Document_Object_Model/Events#media)
