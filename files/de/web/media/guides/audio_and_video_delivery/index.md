---
title: Audio- und Videobereitstellung
slug: Web/Media/Guides/Audio_and_video_delivery
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

Wir können Audio und Video im Web auf verschiedene Arten bereitstellen, die von "statischen" Mediendateien bis zu adaptiven Live-Streams reichen. Dieser Artikel ist als Ausgangspunkt gedacht, um die verschiedenen Bereitstellungsmechanismen für webbasierte Medien und deren Kompatibilität mit beliebten Browsern zu erkunden.

## Audio- und Video-HTML-Elemente

Ob wir mit vorab aufgezeichneten Audiodateien oder Live-Streams arbeiten, der Mechanismus, um sie über die {{ htmlelement("audio")}}, und {{ htmlelement("video")}}-Elemente des Browsers verfügbar zu machen, bleibt weitgehend gleich. Derzeit müssen wir zur Unterstützung aller Browser zwei Formate angeben, obwohl sich dies mit der Einführung der MP3- und MP4-Formate in Firefox und Opera schnell ändert. Kompatibilitätsinformationen finden Sie im [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats).

Um Video und Audio bereitzustellen, ist der allgemeine Workflow normalerweise folgendermaßen:

1. Überprüfen Sie, welches Format der Browser über Funktionsprüfung unterstützt (in der Regel eine Auswahl aus zwei, wie oben angegeben).
2. Wenn der Browser die Wiedergabe eines der bereitgestellten Formate nicht von Haus aus unterstützt, zeigen Sie entweder ein Standbild an oder verwenden Sie eine Fallback-Technologie, um das Video darzustellen.
3. Bestimmen Sie, wie Sie das Medium abspielen/erstellen möchten (z.B. ein {{ htmlelement("video")}}-Element oder vielleicht `document.createElement('video')`?)
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

Der obige Code wird einen Audioplayer erstellen, der versucht, so viel Audio wie möglich im Voraus zu laden, um eine reibungslose Wiedergabe zu gewährleisten.

> [!NOTE]
> Das `preload`-Attribut kann von einigen mobilen Browsern ignoriert werden.

Weitere Informationen finden Sie unter [Grundlagen von plattformübergreifendem Audio (HTML Audio im Detail)](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics#html_audio_in_detail)

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

Der obige Code erstellt einen Videoplayer mit den Abmessungen 640x480 Pixel, der ein Posterbild anzeigt, bis das Video abgespielt wird. Wir weisen das Video an, automatisch zu starten, aber standardmäßig stummgeschaltet zu sein.

> [!NOTE]
> Das `autoplay`-Attribut kann von einigen mobilen Browsern ignoriert werden. Außerdem kann die Autoplay-Funktion umstritten sein, wenn sie missbraucht wird. Es wird dringend empfohlen, dass Sie den [Leitfaden zur Autoplay-Nutzung für Medien und Web Audio APIs](/de/docs/Web/Media/Guides/Autoplay) lesen, um zu lernen, wie Sie Autoplay klug einsetzen.

Weitere Informationen finden Sie beim [\<video> Element](/de/docs/Web/HTML/Reference/Elements/video) und beim [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).

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

Wir setzen die Quelle des Audios abhängig von der Art der Audiodatei, die der Browser unterstützt, dann setzen wir den Abspielkopf 5 Sekunden vor und versuchen, sie abzuspielen.

> [!NOTE]
> Die Wiedergabe wird von den meisten Browsern ignoriert, es sei denn, sie wird durch ein benutzerinitiiertes Ereignis ausgelöst.

Es ist auch möglich, einem {{ htmlelement("audio")}}-Element eine in Base64 codierte WAV-Datei zu übergeben, was es Ihnen ermöglicht, Audio spontan zu erzeugen:

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

Wir setzen die Quelle des Videos abhängig von der Art der Videodatei, die der Browser unterstützt, und setzen dann die Breite und Höhe des Videos.

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

Sie können das [vollständige Beispiel live ausführen](https://mdn.github.io/webaudio-examples/decode-audio-data/promise/), oder [den Code ansehen](https://github.com/mdn/webaudio-examples/tree/main/decode-audio-data/promise).

Erfahren Sie mehr über die Grundlagen der Web Audio API unter [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API).

## getUserMedia / Stream API

Es ist auch möglich, einen Live-Stream von einer Webcam und/oder einem Mikrofon mit `getUserMedia` und der Stream API abzurufen. Dies ist Teil einer breiteren Technologie, die als WebRTC (Web Real-Time Communications) bekannt ist und mit den neuesten Versionen von Chrome, Firefox und Opera kompatibel ist.

Um den Stream von Ihrer Webcam zu erfassen, richten Sie zuerst ein {{htmlelement("video")}}-Element ein:

```html
<video id="webcam" width="480" height="360"></video>
```

Als Nächstes, wenn unterstützt, verbinden Sie die Webcam-Quelle mit dem Videoelement:

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

Um mehr zu erfahren, lesen Sie unsere [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia)-Seite.

## MediaStream-Aufnahme

Neue Standards werden eingeführt, um Ihrem Browser zu erlauben, Medien von Ihrem Mikrofon oder Ihrer Kamera über `getUserMedia` zu erfassen und sie sofort mit der neuen MediaStream-Aufnahme-API aufzuzeichnen. Sie nehmen den Stream, den Sie von `getUserMedia` erhalten, übergeben ihn an ein `MediaRecorder`-Objekt, nehmen das resultierende Ausgangsmaterial und speisen es in Ihre Audio- oder Videoquelle ein\*.

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

Details finden Sie in der [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API).

## Media Source Extensions (MSE)

[Media Source Extensions](https://w3c.github.io/media-source/) ist ein W3C-Arbeitsentwurf, der plant, die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) zu erweitern, um JavaScript die Erzeugung von Medienstreams für die Wiedergabe zu ermöglichen. JavaScript die Erzeugung von Streams zu ermöglichen, erleichtert eine Vielzahl von Anwendungsfällen wie adaptivem Streaming und zeitversetztem Live-Streaming.

### Encrypted Media Extensions (EME)

[Encrypted Media Extensions](https://w3c.github.io/encrypted-media/) ist ein W3C-Vorschlag zur Erweiterung von `HTMLMediaElement`, das APIs bereitstellt, um die Wiedergabe von geschützten Inhalten zu steuern.

Die API unterstützt Anwendungsfälle von einfacher Klartext-Schlüsselentschlüsselung bis hin zu hochwertigen Videos (unter einer entsprechenden Benutzeragenten-Implementierung). Der Lizenz-/Schlüsselaustausch wird von der Anwendung gesteuert, was die Entwicklung robuster Wiedergabeanwendungen unterstützt, die eine Reihe von Content-Entschlüsselungs- und Schutztechnologien unterstützen.

Eine der Hauptanwendungen von EME besteht darin, Browsern die Implementierung von DRM ([Digital Rights Management](https://en.wikipedia.org/wiki/Digital_rights_management)) zu ermöglichen, das dazu beiträgt, das Kopieren von webbasierten Inhalten (insbesondere Videos) zu verhindern.

### Adaptives Streaming

Neue Formate und Protokolle werden eingeführt, um adaptives Streaming zu erleichtern. Adaptives Streaming bedeutet, dass die Bandbreite und typischerweise die Qualität des Streams in Echtzeit in Reaktion auf die verfügbare Bandbreite des Benutzers geändert werden können. Adaptives Streaming wird häufig in Verbindung mit Live-Streaming verwendet, bei dem eine reibungslose Bereitstellung von Audio oder Video von entscheidender Bedeutung ist.

Die Hauptformate, die für adaptives Streaming verwendet werden, sind [HLS](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#hls) und [MPEG-DASH](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#mpeg-dash). MSE wurde mit DASH im Sinn entwickelt. MSE definiert Byte-Streams entsprechend [ISOBMFF](https://dvcs.w3.org/hg/html-media/raw-file/tip/media-source/isobmff-byte-stream-format.html) und [M2TS](https://en.wikipedia.org/wiki/M2ts) (beides wird in DASH unterstützt, letzteres in HLS). Allgemein gesprochen, wenn Sie an Standards interessiert sind, Flexibilität suchen oder die meisten modernen Browser unterstützen möchten, sind Sie mit DASH wahrscheinlich besser bedient.

> [!NOTE]
> Derzeit unterstützt Safari DASH nicht, obwohl dash.js auf neueren Versionen von Safari funktioniert, die mit OS X Yosemite veröffentlicht werden sollen.

DASH bietet auch eine Reihe von Profilen, einschließlich On-Demand-Profile, die keine Vorverarbeitung und Aufteilung von Mediendateien erfordern. Es gibt auch eine Reihe von Cloud-basierten Diensten, die Ihre Medien in HLS und DASH konvertieren.

Weitere Informationen finden Sie unter [Live-Streaming von Web-Audio und -Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video).

## Anpassen Ihres Medienplayers

Sie könnten beschließen, dass Ihr Audio- oder Videoplayer ein einheitliches Erscheinungsbild über alle Browser hinweg haben soll, oder ihn einfach anpassen möchten, damit er zu Ihrer Seite passt. Die allgemeine Technik, dies zu erreichen, besteht darin, das `controls`-Attribut wegzulassen, damit die Standard-Browsersteuerungen nicht angezeigt werden, benutzerdefinierte Steuerelemente mit HTML und CSS zu erstellen und dann mit JavaScript Ihre Steuerelemente an die Audio-/Video-API zu koppeln.

Wenn Sie etwas Zusätzliches benötigen, ist es möglich, Funktionen hinzuzufügen, die in Standardplayern derzeit nicht vorhanden sind, zum Beispiel die Wiedergabegeschwindigkeit, Qualitäts-Wechsel oder sogar Audio-Spektren. Sie können auch entscheiden, wie Sie Ihren Player responsiv machen — zum Beispiel könnten Sie die Fortschrittsleiste unter bestimmten Bedingungen entfernen.

Es ist oft wichtig, Mausklick-, Touch- und/oder Tastaturereignisse zu erkennen, um Aktionen wie Abspielen, Pausieren und Scrubbing auszulösen. Es ist oft wichtig, die Tastatursteuerung für Benutzerfreundlichkeit und Barrierefreiheit zu berücksichtigen.

Ein kurzes Beispiel — richten Sie zuerst Ihr Audio und die benutzerdefinierten Steuerelemente in HTML ein:

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

myControl.addEventListener("click", () => {
  switchState();
});

window.addEventListener("keypress", checkKey);
```

{{EmbedLiveSample("Anpassen Ihres Medienplayers", "", 200)}}

Weitere Informationen finden Sie unter [Erstellen eines eigenen benutzerdefinierten Audioplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics#creating_your_own_custom_audio_player).

## Weitere Tipps zu Audio/Video

### Den Download von Medien stoppen

Während das Stoppen der Wiedergabe von Medien so einfach ist wie das Aufrufen der `pause()`-Methode des Elements, lädt der Browser die Medien weiter herunter, bis das Medienelement durch Garbage Collection entsorgt wird.

Hier ist ein Trick, um den Download sofort zu stoppen:

```js
const mediaElement = document.querySelector("#myMediaElementID");
mediaElement.removeAttribute("src");
mediaElement.load();
```

Durch das Entfernen des `src`-Attributs des Medienelements und das Aufrufen der `load()`-Methode geben Sie die mit dem Video verbundenen Ressourcen frei, was den Netzwerk-Download stoppt. Sie müssen `load()` nach dem Entfernen des Attributs aufrufen, da nur das Entfernen des `src`-Attributs den Ladealgorithmus nicht auslöst. Wenn das `<video>`-Element auch `<source>`-Element-Nachfahren hat, sollten diese ebenfalls vor dem Aufruf von `load()` entfernt werden.

Beachten Sie, dass das Setzen des `src`-Attributs auf einen leeren String tatsächlich dazu führt, dass der Browser es behandelt, als hätten Sie eine relative Videoquelle gesetzt. Dies führt dazu, dass der Browser einen weiteren Download zu etwas versucht, das wahrscheinlich kein gültiges Video ist.

### Durch Medien suchen

Medienelemente bieten Unterstützung, um die aktuelle Wiedergabeposition zu bestimmten Punkten im Inhalt der Medien zu verschieben. Dies geschieht, indem der Wert der `currentTime`-Eigenschaft des Elements festgelegt wird; siehe [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) für weitere Details zu den Eigenschaften des Elements. Setzen Sie den Wert auf die Zeit, in Sekunden, an der die Wiedergabe fortgesetzt werden soll.

Sie können die `seekable`-Eigenschaft des Elements verwenden, um die Bereiche der Medien zu bestimmen, die derzeit für ein Suchen verfügbar sind. Dies gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Zeitbereiche auflistet, zu denen Sie springen können.

```js
const mediaElement = document.querySelector("#mediaElementID");
mediaElement.seekable.start(0); // Returns the starting time (in seconds)
mediaElement.seekable.end(0); // Returns the ending time (in seconds)
mediaElement.currentTime = 122; // Seek to 122 seconds
mediaElement.played.end(0); // Returns the number of seconds the browser has played
```

### Wiedergabebereich spezifizieren

Wenn Sie die URI der Medien für ein {{ HTMLElement("audio") }} oder {{ HTMLElement("video") }}-Element angeben, können Sie optional zusätzliche Informationen einschließen, um den Abschnitt der Medien zu spezifizieren, der abgespielt werden soll. Dazu fügen Sie ein Doppelkreuz ("#") gefolgt von der Medienfragmentbeschreibung hinzu.

Ein Zeitbereich wird mit der Syntax spezifiziert:

```plain
#t=[starttime][,endtime]
```

Die Zeit kann als Anzahl von Sekunden (als Fließkommazahl) oder als Stunden/Minuten/Sekunden-Zeit angegeben werden, getrennt durch Doppelpunkte (wie 2:05:01 für 2 Stunden, 5 Minuten und 1 Sekunde).

Einige Beispiele:

- `http://example.com/video.ogv#t=10,20`
  - : Gibt an, dass das Video den Bereich von 10 Sekunden bis 20 Sekunden abspielen soll.
- `http://example.com/video.ogv#t=,10.5`
  - : Gibt an, dass das Video von Anfang an bis zu 10,5 Sekunden abgespielt werden soll.
- `http://example.com/video.ogv#t=,02:00:00`
  - : Gibt an, dass das Video von Anfang an bis zu zwei Stunden abgespielt werden soll.
- `http://example.com/video.ogv#t=60`
  - : Gibt an, dass das Video bei 60 Sekunden beginnen soll und bis zum Ende weiterspielen soll.

## Fehlerbehandlung

Fehler werden an die untergeordneten {{ HTMLElement("source") }}-Elemente geliefert, die den fehlerverursachenden Quellen entsprechen.

Dies ermöglicht es Ihnen, zu erkennen, welche Quellen nicht geladen wurden, was möglicherweise nützlich sein kann. Betrachten Sie dieses HTML:

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

Da Firefox MP4 und 3GP auf einigen Plattformen aufgrund ihrer patentbehafteten Natur nicht unterstützt, erhalten die {{ HTMLElement("source") }}-Elemente mit den IDs `src-mp4` und `src-3gp` `error`-Ereignisse, bevor die Ogg-Ressource geladen wird. Die Quellen werden in der Reihenfolge versucht, in der sie erscheinen, und sobald eine erfolgreich geladen ist, werden die verbleibenden Quellen überhaupt nicht versucht.

### Überprüfen, ob der Browser die bereitgestellten Formate unterstützt

Unterstützung für Medienformate finden Sie auf [Can I Use](https://caniuse.com/).

- [Audio MP3 (`type="audio/mpeg"`)](https://caniuse.com/mp3)
- [Audio Ogg (`type="audio/ogg"`)](https://caniuse.com/ogg-vorbis)
- [Video MP4 (`type="video/mp4"`)](https://caniuse.com/mpeg4)
- [Video WebM (`type="video/webm"`)](https://caniuse.com/webm)
- [Video Ogg (`type="video/ogg"`)](https://caniuse.com/ogv)

Sie können auch nach [anderen Medienformaten](/de/docs/Web/Media/Guides/Formats/Containers) suchen.

Wenn ein Medienformat angeblich unterstützt wird, aber die von Ihnen gelieferten Dateien nicht abspielen, gibt es zwei mögliche Probleme:

#### 1. Der Medienserver liefert nicht die korrekten MIME-Typen mit der Datei

Obwohl dies normalerweise unterstützt wird, müssen Sie möglicherweise das folgende zu der `.htaccess`-Datei Ihres Medienservers hinzufügen.

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

#### 2. Ihre Dateien wurden nicht korrekt kodiert

Ihre Dateien wurden möglicherweise nicht korrekt kodiert — versuchen Sie, mit einem der folgenden Tools zu kodieren, die sich als ziemlich zuverlässig erwiesen haben:

- [Audacity](https://sourceforge.net/projects/audacity/) — Kostenloser Audio-Editor und -Rekorder
- [Miro](https://www.getmiro.com/) — Kostenloser, quelloffener Musik- und Videoplayer
- [Handbrake](https://handbrake.fr/) — Open Source Video Transcoder
- [Firefogg](https://www.firefogg.org/) — Video- und Audiokodierung für Firefox
- [FFmpeg2](https://www.ffmpeg.org/) — Umfassende Befehlszeilen-Codierungslösung
- [Vid.ly](https://m.vid.ly/) — Videoplayer, Transkodierung und Bereitstellung
- [Internet Archive](https://archive.org/) — Kostenlose Transkodierung und Speicherung

### Erkennen, wenn keine Quellen geladen wurden

Um zu erkennen, dass alle untergeordneten {{ HTMLElement("source") }}-Elemente nicht geladen wurden, überprüfen Sie den Wert des `networkState`-Attributes des Medienelements. Wenn dies `HTMLMediaElement.NETWORK_NO_SOURCE` ist, wissen Sie, dass alle Quellen nicht geladen wurden.

Wenn Sie an diesem Punkt eine weitere Quelle hinzufügen, indem Sie ein neues {{ HTMLElement("source") }}-Element als untergeordnetes Element des Medienelements einfügen, versucht Gecko, die angegebene Ressource zu laden.

### Anzeigen von Fallback-Inhalten, wenn keine Quelle dekodiert werden konnte

Eine andere Möglichkeit, den Fallback-Inhalt eines Videos anzuzeigen, wenn keine der Quellen im aktuellen Browser dekodiert werden konnte, besteht darin, einen Fehler-Handler auf das letzte Source-Element zu setzen. Dann können Sie das Video mit seinem Fallback-Inhalt ersetzen:

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

Es gibt eine Reihe von Audio- und Video-JavaScript-Bibliotheken. Die beliebtesten Bibliotheken ermöglichen es Ihnen, ein konsistentes Player-Design über alle Browser hinweg zu wählen und bieten eine Fallback-Option für Browser, die Audio und Video nicht nativ unterstützen. Fallbacks haben historisch gesehen jetzt veraltete Plugins wie Adobe Flash oder Microsoft Silverlight verwendet, um einen Medienplayer in nicht unterstützenden Browsern bereitzustellen, obwohl diese auf modernen Computern nicht mehr unterstützt werden. Andere Funktionen wie das [`<track>`](/de/docs/Web/HTML/Reference/Elements/track)-Element für Untertitel können ebenfalls durch Medienbibliotheken bereitgestellt werden.

### Nur Audio

- [SoundManager](https://www.schillmania.com/projects/soundmanager2/)
- [AmplitudeJS](https://serversideup.net/open-source/amplitudejs/)
- [HowlerJS](https://howlerjs.com/)

### Nur Video

- [flowplayer](https://flowplayer.com/): Kostenlos mit einem Flowplayer-Logo-Wasserzeichen. Open Source (GPL-lizenziert.)
- [SublimeVideo](https://www.sublimevideo.net/): Erfordert Registrierung. Formularbasierte Einrichtung mit domänenspezifischem Link zur CDN-gehosteten Bibliothek.
- [Video.js](https://videojs.org/): Kostenlos und Open Source (Apache 2 lizenziert.)

### Audio und Video

- [jPlayer](https://jPlayer.org/): Kostenlos und Open Source (MIT lizenziert.)
- [mediaelement.js](https://www.mediaelementjs.com/): Kostenlos und Open Source (MIT lizenziert.)

### Web Audio API

- [AudioContext monkeypatch](https://github.com/cwilso/AudioContext-MonkeyPatch): Ein Polyfill für ältere Versionen der Web Audio API; Open Source (Apache 2 lizenziert.)

## Leitfäden

- [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player)
  - : Ein Leitfaden zum Erstellen eines grundlegenden plattformübergreifenden Videoplayers mithilfe des {{ htmlelement("video") }}-Elements.
- [Grundlagen der Videoplayer-Stilgestaltung](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics)
  - : Mit dem im vorherigen Artikel erstellten plattformübergreifenden Videoplayer wird in diesem Artikel nun grundlegendes, responsives Styling für den Player bereitgestellt.
- [Hinzufügen von Untertiteln zu HTML-Videos](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)
  - : Dieser Artikel erklärt, wie man Untertitel zu HTML-{{ htmlelement("video")}} hinzufügt, unter Verwendung des [Web_Video_Text_Tracks_Format](/de/docs/Web/API/WebVTT_API) und des {{ htmlelement("track") }}-Elements.
- [Plattformübergreifende Audio-Grundlagen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
  - : Dieser Artikel bietet einen grundlegenden Leitfaden zum Erstellen eines HTML-Audioplayers, der plattformübergreifend funktioniert, mit Erklärungen zu allen zugehörigen Attributen, Eigenschaften und Ereignissen und einer kurzen Anleitung zu benutzerdefinierten Steuerelementen, die mit der Media-API erstellt wurden.
- [Medienpufferung, -suchen und Zeitbereiche](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges)
  - : Manchmal ist es nützlich zu wissen, wie viel {{ htmlelement("audio") }} oder {{ htmlelement("video") }} heruntergeladen wurde oder ohne Verzögerung abspielbar ist — ein gutes Beispiel hierfür ist die gepufferte Fortschrittsleiste eines Audio- oder Videoplayers. Dieser Artikel diskutiert, wie man eine Puffer-/Suchleiste mit [TimeRanges](/de/docs/Web/API/TimeRanges) und anderen Merkmalen der Media-API erstellt.
- [HTML playbackRate erklärt](/de/docs/Web/Media/Guides/Audio_and_video_delivery/WebAudio_playbackRate_explained)
  - : Die `playbackRate`-Eigenschaft ermöglicht es uns, die Geschwindigkeit oder Rate zu ändern, mit der ein Stück Webaudio oder Video abgespielt wird. Dieser Artikel erklärt es im Detail.
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
  - : Erklärt die Grundlagen der Verwendung der Web Audio API, um eine Audioquelle zu erfassen, zu manipulieren und abzuspielen.

### Streaming-Medien

- [Live-Streaming von Web-Audio und -Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video)
  - : Live-Streaming-Technologie wird häufig verwendet, um Live-Ereignisse wie Sportveranstaltungen, Konzerte und allgemein TV- und Radioprogramme, die live ausgestrahlt werden, zu übertragen. Oft zu "Streaming" abgekürzt, ist das Live-Streaming der Prozess, Medien "live" an Computer und Geräte zu übertragen. Dies ist ein recht komplexes und junges Thema mit vielen Variablen, daher werden wir Ihnen in diesem Artikel das Thema vorstellen und Ihnen zeigen, wie Sie loslegen können.
- [Einrichten von adaptiven Streaming-Medienquellen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources)
  - : Angenommen, Sie möchten eine adaptive Streaming-Medienquelle auf einem Server einrichten, die innerhalb eines HTML-Medienelements konsumiert werden kann. Wie würde man das tun? Dieser Artikel erklärt wie, und betrachtet dabei zwei der häufigsten Formate: MPEG-DASH und HLS (HTTP Live Streaming).
- [DASH Adaptives Streaming für HTML5-Video](/de/docs/Web/API/Media_Source_Extensions_API/DASH_Adaptive_Streaming)
  - : Erläutert, wie man adaptives Streaming unter Verwendung von DASH und WebM einrichtet.

### Fortgeschrittene Themen

- [Web Audio API plattformübergreifender Support](/de/docs/Web/API/Web_Audio_API/Best_practices#cross_browser_legacy_support)
  - : Ein Leitfaden zum Schreiben plattformübergreifenden Web Audio API-Codes.
- [Einfache Audioaufnahme mit der MediaRecorder-API](https://hacks.mozilla.org/2014/06/easy-audio-capture-with-the-mediarecorder-api/)
  - : Erklärt die Grundlagen der Verwendung der MediaStream Recording API, um direkt einen Medienstream aufzunehmen.

## Referenz

- [Das Video-Element](/de/docs/Web/HTML/Reference/Elements/video)
- [HTMLVideoElement API](/de/docs/Web/API/HTMLVideoElement)
- [MediaSource API](/de/docs/Web/API/MediaSource)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
- [getUserMedia](/de/docs/Web/API/MediaDevices/getUserMedia)
- [Ereignisindex: Medien](/de/docs/Web/API/Document_Object_Model/Events#media)
