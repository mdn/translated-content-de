---
title: Audio- und Video-Bereitstellung
slug: Web/Media/Guides/Audio_and_video_delivery
l10n:
  sourceCommit: 6030ef1aadf967b80e2c79c3d3463cccc8ea0c95
---

Wir können Audio und Video auf verschiedene Weisen im Web bereitstellen, von "statischen" Mediendateien bis hin zu adaptiven Live-Streams. Dieser Artikel ist als Ausgangspunkt gedacht, um die verschiedenen Liefermechanismen webbasierter Medien und die Kompatibilität mit beliebten Browsern zu erkunden.

## HTML-Elemente für Audio und Video

Unabhängig davon, ob wir es mit voraufgezeichneten Audiodateien oder Live-Streams zu tun haben, bleibt der Mechanismus, um sie über die {{ htmlelement("audio") }} und {{ htmlelement("video") }} Elemente des Browsers verfügbar zu machen, weitgehend gleich. Zurzeit müssen wir, um alle Browser zu unterstützen, zwei Formate angeben, obwohl sich dies mit der Übernahme der MP3- und MP4-Formate in Firefox und Opera schnell ändert. Sie können Kompatibilitätsinformationen im [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats) finden.

Um Video und Audio zu liefern, sieht der allgemeine Workflow normalerweise so aus:

1. Überprüfen Sie, welches Format der Browser über eine Feature-Erkennung unterstützt (normalerweise eine Auswahl von zwei, wie oben angegeben).
2. Wenn der Browser keine der bereitgestellten Formate nativ wiedergeben kann, entweder ein Standbild präsentieren oder eine Alternativtechnologie verwenden, um das Video zu präsentieren.
3. Bestimmen Sie, wie Sie das Medium abspielen/verwenden möchten (z. B. ein {{ htmlelement("video") }} Element oder `document.createElement('video')` vielleicht?)
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

Der obige Code wird einen Audioplayer erstellen, der versucht, so viel Audio wie möglich vorzuladen, um eine reibungslose Wiedergabe zu gewährleisten.

> [!NOTE]
> Das `preload` Attribut könnte von einigen mobilen Browsern ignoriert werden.

Weitere Informationen finden Sie unter [Grundlagen des plattformübergreifenden Audios (HTML Audio im Detail)](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics#html_audio_in_detail).

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

Der obige Code erstellt einen Videoplayer mit den Abmessungen 640x480 Pixel und zeigt ein Posterbild, bis das Video abgespielt wird. Wir weisen das Video an, automatisch zu starten, jedoch standardmäßig stummgeschaltet zu sein.

> [!NOTE]
> Das Attribut `autoplay` könnte von einigen mobilen Browsern ignoriert werden. Außerdem kann die Autoplay-Funktion umstritten sein, wenn sie missbraucht wird. Es wird dringend empfohlen, den [Leitfaden für Autoplay für Media- und Web-Audio-APIs](/de/docs/Web/Media/Guides/Autoplay) zu lesen, um zu lernen, wie man Autoplay sinnvoll einsetzt.

Weitere Informationen finden Sie unter [\<video> Element](/de/docs/Web/HTML/Reference/Elements/video) und [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).

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

Wir setzen die Quelle des Audios abhängig vom Typ der Audiodatei, die der Browser unterstützt, und setzen dann den Abspielkopf 5 Sekunden vor und versuchen, es abzuspielen.

> [!NOTE]
> Die Wiedergabe wird von den meisten Browsern ignoriert, es sei denn, sie wird durch ein benutzerinitiiertes Ereignis ausgelöst.

Es ist auch möglich, ein {{ htmlelement("audio") }} Element mit einer base64-verschlüsselten WAV-Datei zu füttern, was es Ihnen ermöglicht, Audio im Handumdrehen zu generieren:

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

Wir setzen die Quelle des Videos abhängig vom Typ der Videodatei, die der Browser unterstützt, und setzen dann die Breite und Höhe des Videos.

## Web Audio API

In diesem Beispiel laden wir eine MP3-Datei mit der [`fetch()`](/de/docs/Web/API/Window/fetch) API herunter, laden sie in eine Quelle und spielen sie ab.

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

Erfahren Sie mehr über die Grundlagen der Web Audio API in [Verwenden der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API).

## getUserMedia / Stream API

Es ist auch möglich, einen Live-Stream von einer Webcam und/oder einem Mikrofon mit `getUserMedia` und der Stream API zu erhalten. Dies ist Teil einer umfassenderen Technologie namens WebRTC (Web Real-Time Communications) und ist mit den neuesten Versionen von Chrome, Firefox und Opera kompatibel.

Um den Stream von Ihrer Webcam zu erfassen, richten Sie zunächst ein {{htmlelement("video")}} Element ein:

```html
<video id="webcam" width="480" height="360"></video>
```

Wenn unterstützt, verbinden Sie als nächsten Schritt die Webcam-Quelle mit dem Videoelement:

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

Neue Standards werden eingeführt, um Ihrem Browser zu ermöglichen, Medien von Ihrem Mikrofon oder Ihrer Kamera über `getUserMedia` zu erfassen und diese sofort mit der neuen MediaStream Recording API aufzunehmen. Sie nehmen den Stream, den Sie von `getUserMedia` erhalten, übergeben ihn an ein `MediaRecorder` Objekt, nehmen die resultierende Ausgabe und füttern sie an Ihre Audio- oder Videoquelle\*.

Der Hauptmechanismus ist unten umrissen:

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

[Media Source Extensions](https://w3c.github.io/media-source/) ist ein W3C Arbeitsentwurf, der plant, [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) zu erweitern, um JavaScript das Generieren von Medienstreams zur Wiedergabe zu ermöglichen. Durch das Generieren von Streams mit JavaScript werden vielfältige Anwendungsfälle wie adaptives Streaming und zeitversetztes Live-Streaming ermöglicht.

### Encrypted Media Extensions (EME)

[Encrypted Media Extensions](https://w3c.github.io/encrypted-media/) ist ein W3C-Vorschlag zur Erweiterung von `HTMLMediaElement`, der APIs zum Steuern der Wiedergabe von geschütztem Inhalt bereitstellt.

Die API unterstützt Anwendungsfälle, die von einfacher Clear Key Entschlüsselung bis hin zu hochauflösenden Videos reichen (vorausgesetzt, eine entsprechende Benutzeragenten-Implementierung ist vorhanden). Der Lizenz-/Schlüsselaustausch wird von der Anwendung kontrolliert, was die Entwicklung robuster Wiedergabeanwendungen unterstützt, die eine Vielzahl von Technologien zur Inhaltsentschlüsselung und Schutz nutzen können.

Eine der Hauptanwendungen von EME ist die Implementierung von DRM ([Digital Rights Management](https://en.wikipedia.org/wiki/Digital_rights_management)) in Browsern, um zu verhindern, dass webbasierte Inhalte (insbesondere Videos) kopiert werden.

### Adaptives Streaming

Neue Formate und Protokolle werden eingeführt, um adaptives Streaming zu ermöglichen. Adaptives Streaming von Medien bedeutet, dass die Bandbreite und typischerweise die Qualität des Streams sich in Echtzeit in Reaktion auf die verfügbare Bandbreite des Benutzers ändern können. Adaptives Streaming wird häufig in Verbindung mit Live-Streaming verwendet, bei dem eine reibungslose Übertragung von Audio oder Video vorrangig ist.

Die Hauptformate für adaptives Streaming sind [HLS](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#hls) und [MPEG-DASH](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#mpeg-dash). MSE wurde mit DASH im Sinn entworfen. MSE definiert Bytestreams gemäß [ISOBMFF](https://dvcs.w3.org/hg/html-media/raw-file/tip/media-source/isobmff-byte-stream-format.html) und [M2TS](https://en.wikipedia.org/wiki/M2ts) (beide werden in DASH unterstützt, letzteres wird in HLS unterstützt). Im Allgemeinen, wenn Sie an Standards interessiert sind, Flexibilität suchen oder die meisten modernen Browser unterstützen möchten, sind Sie wahrscheinlich besser mit DASH beraten.

> [!NOTE]
> Derzeit unterstützt Safari DASH nicht, obwohl dash.js in neueren Versionen von Safari funktioniert, die für die Freigabe mit OS X Yosemite geplant sind.

DASH bietet auch eine Reihe von Profilen, darunter On-Demand-Profile, die keine Vorverarbeitung und keine Aufteilung von Mediendateien erfordern. Es gibt auch eine Reihe von Cloud-basierten Diensten, die Ihre Medien sowohl in HLS als auch in DASH konvertieren werden.

Weitere Informationen finden Sie unter [Live Streaming von Webaudio und -video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video).

## Ihren Medienplayer anpassen

Sie können entscheiden, dass Ihr Audio- oder Videoplayer ein einheitliches Erscheinungsbild über alle Browser hinweg haben soll, oder ihn einfach an das Design Ihrer Website anpassen möchten. Die allgemeine Technik dafür besteht darin, das `controls` Attribut wegzulassen, damit die Standard-Browser-Steuerungen nicht angezeigt werden, benutzerdefinierte Steuerungen mithilfe von HTML und CSS zu erstellen und dann JavaScript zu verwenden, um Ihre Steuerungen mit der Audio-/Video-API zu verknüpfen.

Wenn Sie etwas Zusätzliches benötigen, ist es möglich, Funktionen hinzuzufügen, die in den Standard-Playern derzeit nicht vorhanden sind, wie Wiedergabegeschwindigkeit, Qualitätswechselschalter oder sogar Audiospektren. Sie können auch wählen, wie Sie Ihren Player reaktionsfähig gestalten möchten — zum Beispiel könnten Sie die Fortschrittsanzeige unter bestimmten Bedingungen entfernen.

Sie können Klick-, Touch- und/oder Tastaturereignisse erkennen, um Aktionen wie Wiedergabe, Pause und Scrubbing auszulösen. Es ist oft wichtig, sich an die Tastatursteuerung für Benutzerfreundlichkeit und Barrierefreiheit zu erinnern.

Ein schnelles Beispiel — richten Sie zuerst Ihr Audio und Ihre benutzerdefinierten Steuerungen in HTML ein:

```html
<audio id="my-audio" src="/shared-assets/audio/guitar.mp3"></audio>
<button id="my-control">play</button>
```

Fügen Sie ein wenig JavaScript hinzu, um Ereignisse zu erkennen, die das Audio abspielen und pausieren:

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

Weitere Informationen finden Sie unter [Erstellen Ihres eigenen benutzerdefinierten Audioplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics#creating_your_own_custom_audio_player).

## Weitere Tipps für Audio/Video

### Stoppen des Downloads von Medien

Während das Stoppen der Wiedergabe von Medien so einfach ist wie das Aufrufen der `pause()` Methode des Elements, fährt der Browser fort, die Medien herunterzuladen, bis das Medienelement durch die Speicherbereinigung entfernt wird.

Hier ist ein Trick, der den Download sofort stoppt:

```js
const mediaElement = document.querySelector("#myMediaElementID");
mediaElement.removeAttribute("src");
mediaElement.load();
```

Indem Sie das `src` Attribut des Medienelements entfernen und die `load()` Methode aufrufen, setzen Sie die mit dem Video verbundenen Ressourcen frei, was den Netzwerk-Download stoppt. Sie müssen `load()` nach der Entfernung des Attributs aufrufen, da allein das Entfernen des `src` Attributs nicht den Ladealgorithmus aufruft. Wenn das `<video>` Element auch `<source>` Elementnachkommen hat, sollten diese auch entfernt werden, bevor `load()` aufgerufen wird.

Beachten Sie, dass das bloße Setzen des `src` Attributs auf eine leere Zeichenfolge tatsächlich dazu führen wird, dass der Browser es behandelt, als würden Sie eine Videodateiquelle auf einen relativen Pfad setzen. Dies führt dazu, dass der Browser versucht, einen weiteren Download von etwas zu starten, das wahrscheinlich kein gültiges Video ist.

### Suchen in Medien

Medienelemente bieten Unterstützung für das Bewegen der aktuellen Wiedergabeposition zu bestimmten Punkten im Medieninhalt. Dies wird durch Einstellen des Wertes der `currentTime` Eigenschaft des Elements erreicht; siehe [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) für weitere Details zu den Eigenschaften des Elements. Stellen Sie den Wert auf die Zeit (in Sekunden) ein, an dem die Wiedergabe fortgesetzt werden soll.

Sie können die `seekable` Eigenschaft des Elements verwenden, um die Bereiche des Mediums zu bestimmen, die derzeit für das Suchen zur Verfügung stehen. Dies gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges) Objekt zurück, das die Zeitbereiche auflistet, zu denen Sie suchen können.

```js
const mediaElement = document.querySelector("#mediaElementID");
mediaElement.seekable.start(0); // Returns the starting time (in seconds)
mediaElement.seekable.end(0); // Returns the ending time (in seconds)
mediaElement.currentTime = 122; // Seek to 122 seconds
mediaElement.played.end(0); // Returns the number of seconds the browser has played
```

### Abspielbereich spezifizieren

Beim Angeben der URI von Medien für ein {{ HTMLElement("audio") }} oder {{ HTMLElement("video") }} Element können Sie optional zusätzliche Informationen hinzufügen, um den abzuspielenden Teil des Mediums anzugeben. Um dies zu tun, fügen Sie ein Doppelkreuz ("#") gefolgt von der Medien-Fragmentbeschreibung hinzu.

Ein Zeitbereich wird mit folgender Syntax angegeben:

```plain
#t=[starttime][,endtime]
```

Die Zeit kann entweder als Anzahl von Sekunden (als Fließkommazahl) oder als Stunden/Minuten/Sekunden-Zeit mit Doppelpunkten getrennt (wie 2:05:01 für 2 Stunden, 5 Minuten und 1 Sekunde) angegeben werden.

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

Fehler werden an die untergeordneten {{ HTMLElement("source") }} Elemente geliefert, die zu den Quellen gehören, die zu dem Fehler führen.

Das ermöglicht es Ihnen festzustellen, welche Quellen nicht geladen werden konnten, was nützlich sein kann. Betrachten Sie folgendes HTML:

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

Da Firefox MP4 und 3GP auf einigen Plattformen aufgrund ihrer patentbelasteten Natur nicht unterstützt, werden die {{ HTMLElement("source") }} Elemente mit den IDs `src-mp4` und `src-3gp` `error` Ereignisse empfangen, bevor die Ogg-Ressource geladen wird. Die Quellen werden in der Reihenfolge versucht, in der sie erscheinen, und sobald eine erfolgreich geladen wird, werden die verbleibenden Quellen überhaupt nicht versucht.

### Überprüfung, ob der Browser die bereitgestellten Formate unterstützt

Unterstützung für Medienformate finden Sie auf [Can I Use](https://caniuse.com/).

- [Audio MP3 (`type="audio/mpeg"`)](https://caniuse.com/mp3)
- [Audio Ogg (`type="audio/ogg"`)](https://caniuse.com/ogg-vorbis)
- [Video MP4 (`type="video/mp4"`)](https://caniuse.com/mpeg4)
- [Video WebM (`type="video/webm"`)](https://caniuse.com/webm)
- [Video Ogg (`type="video/ogg"`)](https://caniuse.com/ogv)

Sie können auch nach [anderen Medienformaten](/de/docs/Web/Media/Guides/Formats/Containers) suchen.

Wenn ein Medienformat unterstützt werden soll, aber die von Ihnen bereitgestellten Dateien nicht abgespielt werden, gibt es zwei mögliche Probleme:

#### 1. Der Medienserver liefert nicht die korrekten MIME-Typen mit der Datei

Obwohl dies in der Regel unterstützt wird, müssen Sie möglicherweise folgendes in die `.htaccess` Datei Ihres Medienservers einfügen.

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

Ihre Dateien könnten falsch codiert worden sein — versuchen Sie, sie mit einem der folgenden Tools zu codieren, die als ziemlich zuverlässig gelten:

- [Audacity](https://sourceforge.net/projects/audacity/) — Kostenloser Audio-Editor und -Recorder
- [Miro](https://www.getmiro.com/) — Kostenloser, quelloffener Musik- und Videoplayer
- [Handbrake](https://handbrake.fr/) — Open-Source-Videotranscoder
- [Firefogg](https://www.firefogg.org/) — Video- und Audio-Codierung für Firefox
- [FFmpeg2](https://www.ffmpeg.org/) — Umfassender Kommandozeilen-Encoder
- [Vid.ly](https://m.vid.ly/) — Videoplayer, Transcodierung und Bereitstellung
- [Internet Archive](https://archive.org/) — Kostenloses Transcodieren und Speichern

### Erkennen wenn keine Quellen geladen wurden

Um zu erkennen, dass alle untergeordneten {{ HTMLElement("source") }} Elemente nicht geladen werden konnten, überprüfen Sie den Wert des `networkState` Attributs des Medienelements. Wenn dies `HTMLMediaElement.NETWORK_NO_SOURCE` ist, wissen Sie, dass alle Quellen nicht geladen werden konnten.

Wenn Sie an diesem Punkt eine weitere Quelle hinzufügen, indem Sie ein neues {{ HTMLElement("source") }} Element als Kind des Medienelements einfügen, versucht Gecko die angegebene Ressource zu laden.

### Anzeigen von Fallback-Inhalten, wenn keine Quelle dekodiert werden konnte

Eine andere Möglichkeit, die Fallback-Inhalte eines Videos anzuzeigen, wenn keine der Quellen im aktuellen Browser dekodiert werden konnte, besteht darin, einen Fehlerhandler am letzten Source-Element hinzuzufügen. Dann können Sie das Video durch seinen Fallback-Inhalt ersetzen:

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

## JavaScript-Bibliotheken für Audio/Video

Es gibt eine Reihe von JavaScript-Bibliotheken für Audio und Video. Die beliebtesten Bibliotheken ermöglichen es Ihnen, ein einheitliches Playerdesign über alle Browser zu wählen und bieten einen Fallback für Browser, die Audio und Video nicht nativ unterstützen. Historisch gesehen verwendeten Fallbacks veraltete Plugins wie Adobe Flash oder Microsoft Silverlight, um einen Mediaplayer in nicht unterstützenden Browsern bereitzustellen, obwohl diese auf modernen Computern nicht mehr unterstützt werden. Weitere Funktionen wie das [`<track>`](/de/docs/Web/HTML/Reference/Elements/track) Element für Untertitel können auch durch Medienbibliotheken bereitgestellt werden.

### Nur Audio

- [SoundManager](https://www.schillmania.com/projects/soundmanager2/)
- [AmplitudeJS](https://serversideup.net/open-source/amplitudejs/)
- [HowlerJS](https://howlerjs.com/)

### Nur Video

- [flowplayer](https://flowplayer.com/): Kostenlos mit Flowplayer-Logo-Wasserzeichen. Open Source (GPL-lizenziert.)
- [SublimeVideo](https://www.sublimevideo.net/): Registrierung erforderlich. Formularbasierte Einrichtung mit Domainspezifischem Link zur CDN-gehosteten Bibliothek.
- [Video.js](https://videojs.org/): Kostenlos und Open Source (Apache 2 lizenziert.)

### Audio und Video

- [jPlayer](https://jPlayer.org/): Kostenlos und Open Source (MIT-lizenziert.)
- [mediaelement.js](https://www.mediaelementjs.com/): Kostenlos und Open Source (MIT-lizenziert.)

### Web Audio API

- [AudioContext monkeypatch](https://github.com/cwilso/AudioContext-MonkeyPatch): Ein Polyfill für ältere Versionen der Web Audio API; Open Source (Apache 2 lizenziert.)

## Leitfäden

- [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player)
  - : Ein Leitfaden zur Erstellung eines grundlegenden plattformübergreifenden Videoplayers mit dem {{ htmlelement("video") }} Element.
- [Grundlagen der Videoplayer-Styling](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics)
  - : Mit dem im vorherigen Artikel erstellten plattformübergreifenden Videoplayer, befasst sich dieser Artikel nun mit der Bereitstellung eines grundlegenden, responsiven Stylings für den Player.
- [Hinzufügen von Untertiteln zu HTML-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)
  - : Dieser Artikel erklärt, wie man Untertitel zu HTML {{ htmlelement("video") }} hinzufügt, mit [Web_Video_Text_Tracks_Format](/de/docs/Web_API/WebVTT_API) und dem {{ htmlelement("track") }} Element.
- [Grundlagen des plattformübergreifenden Audios](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
  - : Dieser Artikel bietet einen grundlegenden Leitfaden zur Erstellung eines plattformübergreifenden HTML-Audioplayers, mit allen zugehörigen Attributen, Eigenschaften und Ereignissen erklärt, und einem kurzen Leitfaden zu benutzerdefinierten Steuerungen, die mit der Media API erstellt wurden.
- [Pufferung, Suchen und Zeitbereiche bei Medien](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges)
  - : Manchmal ist es nützlich zu wissen, wie viel {{ htmlelement("audio") }} oder {{ htmlelement("video") }} heruntergeladen oder ohne Verzögerung abspielbar ist — ein gutes Beispiel hierfür ist die gepufferte Fortschrittsanzeige eines Audio- oder Videoplayers. Dieser Artikel erläutert, wie man eine Puffer-/Suchleiste mit [TimeRanges](/de/docs/Web/API/TimeRanges) und anderen Funktionen der Medien-API erstellt.
- [HTML Wiedergabegeschwindigkeit erklärt](/de/docs/Web/Media/Guides/Audio_and_video_delivery/WebAudio_playbackRate_explained)
  - : Die `playbackRate` Eigenschaft erlaubt es uns, die Geschwindigkeit oder Rate zu ändern, mit der ein Web-Audio oder -Video abgespielt wird. Dieser Artikel erklärt dies im Detail.
- [Verwenden der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
  - : Erklärt die Grundlagen der Verwendung der Web Audio API zum Erfassen, Manipulieren und Abspielen einer Audioquelle.

### Streaming-Medien

- [Live-Streaming von Web-Audio und -Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video)
  - : Live-Streaming-Technologie wird oft verwendet, um Live-Events wie Sport, Konzerte und allgemein TV- und Radioprogramme, die live ausgestrahlt werden, zu übertragen. Oft nur als Streaming bezeichnet, ist Live-Streaming der Prozess der Übertragung von Medien 'live' an Computer und Geräte. Dies ist ein ziemlich komplexes und noch junges Thema mit vielen Variablen, daher werden wir Sie in diesem Artikel in das Thema einführen und Ihnen zeigen, wie Sie anfangen können.
- [Einrichten von adaptiven Streaming-Medienquellen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources)
  - : Angenommen, Sie möchten eine adaptive Streaming-Medienquelle auf einem Server einrichten, die in einem HTML-Medienelement konsumiert wird. Wie würden Sie das tun? Dieser Artikel erklärt wie, und betrachtet zwei der häufigsten Formate: MPEG-DASH und HLS (HTTP Live Streaming).
- [DASH Adaptive Streaming für HTML 5 Video](/de/docs/Web_API/Media_Source_Extensions_API/DASH_Adaptive_Streaming)
  - : Details zur Einrichtung von adaptivem Streaming mit DASH und WebM.

### Fortgeschrittene Themen

- [Cross-Browser-Unterstützung für die Web Audio API](/de/docs/Web_API/Web_Audio_API/Best_practices#cross_browser_legacy_support)
  - : Ein Leitfaden zum Schreiben von Web Audio API Code für verschiedene Browser.
- [Einfache Audioaufnahme mit der MediaRecorder API](https://hacks.mozilla.org/2014/06/easy-audio-capture-with-the-mediarecorder-api/)
  - : Erklärt die Grundlagen der Verwendung der MediaStream Recording API zur direkten Aufnahme eines Medienstreams.

## Referenz

- [Das Video-Element](/de/docs/Web/HTML/Reference/Elements/video)
- [API der HTMLVideoElement](/de/docs/Web/API/HTMLVideoElement)
- [MediaSource API](/de/docs/Web/API/MediaSource)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
- [getUserMedia](/de/docs/Web/API/MediaDevices/getUserMedia)
- [Ereignisindex: Medien](/de/docs/Web/API/Document_Object_Model/Events#media)
