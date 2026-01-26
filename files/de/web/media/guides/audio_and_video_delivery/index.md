---
title: Audio- und Videolieferung
slug: Web/Media/Guides/Audio_and_video_delivery
l10n:
  sourceCommit: 3251a58ecf1ded5df0e1aa5d23c8436247252b52
---

Wir können Audio und Video auf dem Web auf verschiedene Weise bereitstellen, von 'statischen' Mediendateien bis zu adaptiven Live-Streams. Dieser Artikel soll als Ausgangspunkt dienen, um die verschiedenen Liefermechanismen webbasierter Medien und die Kompatibilität mit gängigen Browsern zu erkunden.

## Audio- und Video-HTML-Elemente

Egal, ob wir es mit vorab aufgezeichneten Audiodateien oder Live-Streams zu tun haben, der Mechanismus, um sie über die {{ htmlelement("audio")}}- und {{ htmlelement("video")}}-Elemente des Browsers bereitzustellen, bleibt weitgehend gleich. Derzeit müssen wir, um alle Browser zu unterstützen, zwei Formate angeben, obwohl sich dies mit der Einführung der MP3- und MP4-Formate in Firefox und Opera schnell ändert. Kompatibilitätsinformationen finden Sie im [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Guides/Formats).

Um Video und Audio zu liefern, sieht der allgemeine Workflow normalerweise so aus:

1. Überprüfen Sie, welches Format der Browser über Feature-Erkennung unterstützt (normalerweise eine Auswahl von zwei, wie oben angegeben).
2. Wenn der Browser keines der bereitgestellten Formate nativ abspielen kann, zeigen Sie entweder ein Standbild an oder verwenden Sie eine Ersatztechnologie, um das Video zu präsentieren.
3. Bestimmen Sie, wie Sie das Medium abspielen/initiieren möchten (z.B. ein {{ htmlelement("video") }}-Element oder `document.createElement('video')` vielleicht?).
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

Der obige Code erstellt einen Videoplayer mit den Abmessungen 640x480 Pixeln und zeigt ein Posterbild an, bis das Video abgespielt wird. Wir instruieren das Video, automatisch abzuspielen, jedoch standardmäßig stummgeschaltet zu sein.

> [!NOTE]
> Das `autoplay`-Attribut kann von einigen mobilen Browsern ignoriert werden. Außerdem kann die Autoplay-Funktion umstritten sein, wenn sie missbraucht wird. Es wird dringend empfohlen, den [Autoplay-Leitfaden für Medien und Web Audio-APIs](/de/docs/Web/Media/Guides/Autoplay) zu lesen, um zu lernen, wie man Autoplay sinnvoll nutzt.

Weitere Informationen finden Sie im [`<video>`-Element](/de/docs/Web/HTML/Reference/Elements/video) und [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).

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

Wir setzen die Quelle des Audios abhängig vom unterstützten Audiotyp des Browsers, setzen dann den Wiedergabekopf auf 5 Sekunden und versuchen, es abzuspielen.

> [!NOTE]
> Die Wiedergabe wird von den meisten Browsern ignoriert, es sei denn, sie wird durch ein vom Benutzer initiiertes Ereignis ausgelöst.

Es ist auch möglich, einem {{ htmlelement("audio") }}-Element eine Base64-codierte WAV-Datei zuzuführen, um Audio spontan zu erzeugen:

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

Wir setzen die Quelle des Videos basierend auf dem vom Browser unterstützten Videotyp, dann setzen wir die Breite und Höhe des Videos.

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

Sie können [das vollständige Beispiel live ausführen](https://mdn.github.io/webaudio-examples/decode-audio-data/promise/) oder [den Quellcode anzeigen](https://github.com/mdn/webaudio-examples/tree/main/decode-audio-data/promise).

Finden Sie mehr über die Grundlagen der Web Audio API im [Verwenden der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API).

## getUserMedia / Stream API

Es ist auch möglich, einen Live-Stream von einer Webcam und/oder einem Mikrofon mithilfe von `getUserMedia` und der Stream-API abzurufen. Dies gehört zu einer breiteren Technologie, bekannt als WebRTC (Web Real-Time Communications), und ist kompatibel mit den neuesten Versionen von Chrome, Firefox und Opera.

Um den Stream von Ihrer Webcam zu erfassen, richten Sie zuerst ein {{htmlelement("video")}}-Element ein:

```html
<video id="webcam" width="480" height="360"></video>
```

Als nächstes, falls unterstützt, verbinden Sie die Webcam-Quelle mit dem Video-Element:

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

Weitere Informationen finden Sie auf unserer Seite [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia).

## MediaStream Recording

Neue Standards werden eingeführt, die es Ihrem Browser ermöglichen, Medien von Mikrofon oder Kamera mit `getUserMedia` zu erfassen und sie sofort mit der neuen MediaStream Recording API aufzuzeichnen. Sie nehmen den Stream, den Sie von `getUserMedia` erhalten, übergeben ihn an ein `MediaRecorder`-Objekt, nehmen die resultierende Ausgabe und führen sie zu Ihrer Audio- oder Videoquelle weiter\*.

Der Hauptmechanismus ist unten skizziert:

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

Siehe [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) für weitere Details.

## Media Source Extensions (MSE)

[Media Source Extensions](https://w3c.github.io/media-source/) ist ein W3C-Arbeitsentwurf, der plant, [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) zu erweitern, um JavaScript die Generierung von Medienstreams zur Wiedergabe zu ermöglichen. Die Erlaubnis für JavaScript, Streams zu generieren, erleichtert eine Vielzahl von Anwendungsfällen wie adaptives Streaming und Timeshifting von Live-Streams.

### Encrypted Media Extensions (EME)

[Encrypted Media Extensions](https://w3c.github.io/encrypted-media/) ist ein W3C-Vorschlag zur Erweiterung des `HTMLMediaElement`, der APIs zur Steuerung der Wiedergabe von geschütztem Inhalt bereitstellt.

Die API unterstützt Anwendungsfälle von der grundlegenden Clear-Key-Entschlüsselung bis hin zu hochwertigen Videos (vorausgesetzt, es wird eine geeignete Benutzeragentenimplementierung angenommen). Der Lizenz-/Schlüsselaustausch wird durch die Anwendung gesteuert, was die Entwicklung robuster Wiedergabeanwendungen erleichtert, die eine Reihe von Inhaltsentschlüsselungs- und Schutztechnologien unterstützen.

Einer der Hauptverwendungszwecke von EME besteht darin, es Browsern zu ermöglichen, DRM ([Digital Rights Management](https://en.wikipedia.org/wiki/Digital_rights_management)) zu implementieren, das hilft zu verhindern, dass webbasierte Inhalte (insbesondere Videos) kopiert werden.

### Adaptives Streaming

Neue Formate und Protokolle werden eingeführt, um adaptives Streaming zu erleichtern. Adaptives Streaming-Medien bedeutet, dass die Bandbreite und in der Regel die Qualität des Streams in Echtzeit in Reaktion auf die verfügbare Bandbreite des Benutzers geändert werden können. Adaptives Streaming wird häufig in Verbindung mit Live-Streaming verwendet, bei dem die reibungslose Lieferung von Audio oder Video entscheidend ist.

Die Hauptformate für adaptives Streaming sind [HLS](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#hls) und [MPEG-DASH](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#mpeg-dash). MSE wurde mit DASH im Hinterkopf entwickelt. MSE definiert Byte-Streams gemäß [ISOBMFF](https://dvcs.w3.org/hg/html-media/raw-file/tip/media-source/isobmff-byte-stream-format.html) und [M2TS](https://en.wikipedia.org/wiki/M2ts) (beide unterstützt in DASH, letzteres unterstützt in HLS). Allgemein gesprochen, wenn Sie an Standards interessiert sind, Flexibilität suchen oder die meisten modernen Browser unterstützen möchten, sind Sie wahrscheinlich mit DASH besser bedient.

> [!NOTE]
> Derzeit unterstützt Safari DASH nicht, obwohl dash.js in neueren Versionen von Safari, die mit OS X Yosemite veröffentlicht werden sollen, funktionieren wird.

DASH bietet auch eine Reihe von Profilen, einschließlich On-Demand-Profile, die keine Vorverarbeitung und das Aufteilen von Mediendateien erfordern. Es gibt auch eine Reihe von Cloud-basierten Diensten, die Ihre Medien sowohl in HLS als auch in DASH umwandeln.

Weitere Informationen finden Sie unter [Live Streaming Web Audio und Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video).

## Anpassung Ihres Media Players

Sie könnten entscheiden, dass Sie möchten, dass Ihr Audio- oder Videoplayer in allen Browsern ein konsistentes Aussehen hat, oder Sie möchten ihn einfach anpassen, um zu Ihrer Website zu passen. Die allgemeine Technik, um dies zu erreichen, ist, das `controls`-Attribut wegzulassen, sodass die Standard-Browsersteuerungen nicht angezeigt werden. Erstellen Sie benutzerdefinierte Steuerungen mit HTML und CSS und verwenden Sie JavaScript, um Ihre Steuerungen mit der Audio-/Video-API zu verknüpfen.

Wenn Sie etwas Zusätzliches benötigen, ist es möglich, Funktionen hinzuzufügen, die derzeit in Standard-Playern nicht vorhanden sind, wie z. B. Wiedergabegeschwindigkeit, Qualitätsstromschalter oder sogar Audiospektren. Sie können auch auswählen, wie Sie Ihren Player anpassbar machen möchten – zum Beispiel könnten Sie die Fortschrittsleiste unter bestimmten Bedingungen entfernen.

Sie können Klick-, Touch- und/oder Tastaturereignisse erkennen, um Aktionen wie Abspielen, Pausieren und Scrubbing auszulösen. Es ist oft wichtig, Tastatursteuerung zur Benutzerfreundlichkeit und Barrierefreiheit zu bedenken.

Ein kurzes Beispiel – richten Sie zuerst Ihr Audio und benutzerdefinierte Steuerungen in HTML ein:

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

{{EmbedLiveSample("Anpassung Ihres Mediaplayers", "", 200)}}

Für weitere Informationen siehe [Erstellen Ihres eigenen benutzerdefinierten Audioplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics#creating_your_own_custom_audio_player).

## Weitere Tipps für Audio/Video

### Stoppen des Downloads von Medien

Während das Stoppen der Wiedergabe von Medien so einfach ist wie das Aufrufen der Methode `pause()` des Elements, lädt der Browser weiterhin Medien herunter, bis das Medienelement durch Müllsammlung entsorgt wird.

Hier ist ein Trick, der den Download sofort stoppt:

```js
const mediaElement = document.querySelector("#myMediaElementID");
mediaElement.removeAttribute("src");
mediaElement.load();
```

Indem Sie das `src`-Attribut des Medienelements entfernen und die Methode `load()` aufrufen, geben Sie die mit dem Video verbundenen Ressourcen frei, was den Net Download stoppt. Sie müssen `load()` nach dem Entfernen des Attributes aufrufen, da nur das Entfernen des `src`-Attributes den Ladealgorithmus nicht aufruft. Wenn das `<video>`-Element auch Nachkommen des `<source>`-Elements hat, sollten diese ebenfalls entfernt werden, bevor `load()` aufgerufen wird.

Beachten Sie, dass das einfache Setzen des `src`-Attributes auf einen leeren String den Browser tatsächlich dazu veranlasst, es so zu behandeln, als ob Sie eine Videoquelle relativ festlegen würden. Dies führt dazu, dass der Browser versucht, einen weiteren Download zu etwas durchzuführen, das wahrscheinlich kein gültiges Video ist.

### Durch Medien navigieren

Medienelemente bieten Unterstützung für das Bewegen der aktuellen Wiedergabeposition zu bestimmten Punkten im Medieninhalt. Dies geschieht durch Festlegen des Wertes der `currentTime`-Eigenschaft des Elements; siehe [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) für weitere Details zu den Eigenschaften des Elements. Setzen Sie den Wert auf die Zeit, in Sekunden, zu der Sie möchten, dass die Wiedergabe fortgesetzt wird.

Sie können die `seekable`-Eigenschaft des Elements verwenden, um die Bereiche des Mediums zu bestimmen, die aktuell verfügbar sind, um zu ihnen zu springen. Dies gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Zeitbereiche auflistet, zu denen Sie springen können.

```js
const mediaElement = document.querySelector("#mediaElementID");
mediaElement.seekable.start(0); // Returns the starting time (in seconds)
mediaElement.seekable.end(0); // Returns the ending time (in seconds)
mediaElement.currentTime = 122; // Seek to 122 seconds
mediaElement.played.end(0); // Returns the number of seconds the browser has played
```

### Wiedergabebereich angeben

Wenn Sie die URI des Mediums für ein {{ HTMLElement("audio") }}- oder {{ HTMLElement("video") }}-Element angeben, können Sie optional zusätzliche Informationen hinzufügen, um den abzuspielenden Teil des Mediums anzugeben. Um dies zu tun, fügen Sie ein Rautezeichen ("#") gefolgt von der Medienfragmentbeschreibung hinzu.

Ein Zeitbereich wird mit der folgenden Syntax angegeben:

```plain
#t=[starttime][,endtime]
```

Die Zeit kann als Anzahl von Sekunden (als Gleitkommawert) oder als Stunden-/Minuten-/Sekunden-Zeit mit Doppelpunkten getrennt angegeben werden (z.B. 2:05:01 für 2 Stunden, 5 Minuten und 1 Sekunde).

Einige Beispiele:

- `http://example.com/video.ogv#t=10,20`
  - : Gibt an, dass das Video den Bereich von 10 Sekunden bis 20 Sekunden abspielen soll.
- `http://example.com/video.ogv#t=,10.5`
  - : Gibt an, dass das Video vom Anfang bis zu 10,5 Sekunden abspielen soll.
- `http://example.com/video.ogv#t=,02:00:00`
  - : Gibt an, dass das Video vom Anfang bis zu zwei Stunden abspielen soll.
- `http://example.com/video.ogv#t=60`
  - : Gibt an, dass das Video bei 60 Sekunden starten und bis zum Ende des Videos abspielen soll.

## Fehlerbehandlung

Fehler werden an die untergeordneten {{ HTMLElement("source") }}-Elemente übermittelt, die den fehlerverursachenden Quellen entsprechen.

Dies ermöglicht es Ihnen, zu erkennen, welche Quellen nicht geladen werden konnten, was nützlich sein kann. Betrachten Sie dieses HTML:

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

Da Firefox MP4 und 3GP auf einigen Plattformen aufgrund ihrer patentbelasteten Natur nicht unterstützt, werden die {{ HTMLElement("source") }}-Elemente mit den IDs `src-mp4` und `src-3gp` `error`-Ereignisse erhalten, bevor die Ogg-Ressource geladen wird. Die Quellen werden in der Reihenfolge versucht, in der sie erscheinen, und sobald eine erfolgreich geladen wird, werden die restlichen Quellen überhaupt nicht versucht.

### Überprüfen, ob der Browser die bereitgestellten Formate unterstützt

Unterstützung für Medienformate ist verfügbar auf [Can I Use](https://caniuse.com/).

- [Audio MP3 (`type="audio/mpeg"`)](https://caniuse.com/mp3)
- [Audio Ogg (`type="audio/ogg"`)](https://caniuse.com/ogg-vorbis)
- [Video MP4 (`type="video/mp4"`)](https://caniuse.com/mpeg4)
- [Video WebM (`type="video/webm"`)](https://caniuse.com/webm)
- [Video Ogg (`type="video/ogg"`)](https://caniuse.com/ogv)

Sie können auch nach [anderen Medienformaten](/de/docs/Web/Media/Guides/Formats/Containers) suchen.

Wenn ein Medienformat unterstützt werden soll, die von Ihnen bereitgestellten Dateien jedoch nicht abgespielt werden, gibt es zwei mögliche Probleme:

#### 1. Der Medienserver liefert die richtigen Mime-Typen nicht mit der Datei

Obwohl dies normalerweise unterstützt wird, müssen Sie möglicherweise Folgendes zu Ihrer `.htaccess`-Datei des Medienservers hinzufügen.

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

- [Audacity](https://sourceforge.net/projects/audacity/) — Kostenloser Audio-Editor und Rekorder
- [Miro](https://www.getmiro.com/) — Kostenloser, Open-Source-Musik- und Videoplayer
- [Handbrake](https://handbrake.fr/) — Open Source Video Transcoder
- [Firefogg](https://www.firefogg.org/) — Video- und Audiocodierung für Firefox
- [FFmpeg2](https://www.ffmpeg.org/) — Umfassender Befehlszeilen-Encoder
- [Vid.ly](https://m.vid.ly/) — Videoplayer, Transkodierung und Lieferung
- [Internet Archive](https://archive.org/) — Kostenloses Transcodieren und Speichern

### Erkennen, wenn keine Quellen geladen wurden

Um zu erkennen, dass alle untergeordneten {{ HTMLElement("source") }}-Elemente nicht geladen werden konnten, überprüfen Sie den Wert des `networkState`-Attributs des Medienelements. Wenn dies `HTMLMediaElement.NETWORK_NO_SOURCE` ist, wissen Sie, dass alle Quellen nicht geladen werden konnten.

Wenn Sie zu diesem Zeitpunkt eine weitere Quelle hinzufügen, indem Sie ein neues {{ HTMLElement("source") }}-Element als untergeordnetes Element des Medienelements einfügen, versucht Gecko, die angegebene Ressource zu laden.

### Anzeigen von Ersatzinhalten, wenn keine Quelle dekodiert werden konnte

Eine andere Möglichkeit, die Ersatzinhalte eines Videos anzuzeigen, wenn keine der Quellen im aktuellen Browser dekodiert werden konnte, besteht darin, einen Fehlerhandler auf das letzte Quellenelement zu setzen. Dann können Sie das Video durch seinen Ersatzinhalt ersetzen:

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

Es gibt eine Reihe von Audio- und Video-JavaScript-Bibliotheken. Die beliebtesten Bibliotheken ermöglichen es Ihnen, ein konsistentes Player-Design über alle Browser hinweg zu wählen und bieten eine Alternative für Browser, die Audio und Video nicht nativ unterstützen. Alternativen haben historisch jetzt veraltete Plugins wie Adobe Flash oder Microsoft Silverlight-Plugins verwendet, um in nicht unterstützenden Browsern einen Mediaplayer bereitzustellen, obwohl diese auf modernen Computern nicht mehr unterstützt werden. Andere Funktionen, wie das [`<track>`](/de/docs/Web/HTML/Reference/Elements/track)-Element für Untertitel, können auch über Medienbibliotheken bereitgestellt werden.

### Nur Audio

- [SoundManager](https://www.schillmania.com/projects/soundmanager2/)
- [AmplitudeJS](https://serversideup.net/open-source/amplitudejs/)
- [HowlerJS](https://howlerjs.com/)

### Nur Video

- [flowplayer](https://flowplayer.com/): Gratis mit einem Flowplayer-Logo-Wasserzeichen. Open Source (GPL-lizenziert.)
- [SublimeVideo](https://www.sublimevideo.net/): Erfordert Registrierung. Formbasierte Einrichtung mit domainspezifischem Link zur CDN-gehosteten Bibliothek.
- [Video.js](https://videojs.org/): Kostenlos und Open Source (Apache 2 lizenziert.)

### Audio und Video

- [jPlayer](https://jPlayer.org/): Kostenlos und Open Source (MIT lizenziert.)
- [mediaelement.js](https://www.mediaelementjs.com/): Kostenlos und Open Source (MIT-lizenziert.)

### Web Audio API

- [AudioContext monkeypatch](https://github.com/cwilso/AudioContext-MonkeyPatch): Ein Polyfill für ältere Versionen der Web Audio API; Open Source (Apache 2 lizenziert.)

## Leitfaden

- [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player)
  - : Ein Leitfaden zum Erstellen eines einfachen plattformübergreifenden Videoplayers unter Verwendung des {{ htmlelement("video") }}-Elements.
- [Grundlagen der Videoplayer-Stylingen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics)
  - : Mit dem plattformübergreifenden Videoplayer aus dem vorherigen Artikel in Stelle, wirft dieser Artikel nun einen Blick darauf, einige grundlegende, reaktionsfähige Styles für den Player bereitzustellen.
- [Hinzufügen von Untertiteln zu HTML-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)
  - : Dieser Artikel erklärt, wie man Untertitel zu HTML {{ htmlelement("video") }} hinzufügt, unter Verwendung des [Web_Video_Text_Tracks_Format](/de/docs/Web/API/WebVTT_API) und des {{ htmlelement("track") }}-Elements.
- [Grundlagen plattformübergreifender Audiofunktionen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
  - : Dieser Artikel bietet einen grundlegenden Leitfaden zur Erstellung eines plattformübergreifenden HTML-Audioplayers mit allen zugehörigen Attributen, Eigenschaften und Ereignissen erklärt, und einen schnellen Leitfaden zu benutzerdefinierten Steuerungen erstellt mit der Media API.
- [Medienpufferung, Suche und Zeitbereiche](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges)
  - : Manchmal ist es nützlich zu wissen, wie viel {{ htmlelement("audio") }} oder {{ htmlelement("video") }} heruntergeladen wurde oder ohne Verzögerung abspielbar ist – ein gutes Beispiel dafür ist die gepufferte Fortschrittsleiste eines Audio- oder Videoplayers. Dieser Artikel diskutiert, wie ein Puffer-/Suchbalken unter Verwendung von [TimeRanges](/de/docs/Web/API/TimeRanges) aufgebaut werden kann, und andere Funktionen der Media API.
- [HTML playbackRate erklärt](/de/docs/Web/Media/Guides/Audio_and_video_delivery/WebAudio_playbackRate_explained)
  - : Die `playbackRate`-Eigenschaft ermöglicht uns die Änderung der Geschwindigkeit oder Rate, mit der ein Stück Webaudio oder Video abgespielt wird. Dieser Artikel erklärt es im Detail.
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
  - : Erklärt die Grundlagen der Verwendung der Web Audio API, um eine Audioquelle zu erfassen, zu manipulieren und abzuspielen.

### Streaming von Medien

- [Live Streaming Web Audio und Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video)
  - : Live-Streaming-Technologie wird häufig eingesetzt, um Live-Ereignisse wie Sport, Konzerte und allgemein TV- und Radioprogramme, die live ausgestrahlt werden, zu übertragen. Oft abgekürzt als einfach Streaming, ist Live-Streaming der Prozess der Übertragung von Medien 'live' auf Computer und Geräte. Dies ist ein ziemlich komplexes und neuartiges Thema mit vielen Variablen, sodass wir Ihnen in diesem Artikel einen Überblick über das Thema geben und Ihnen verraten, wie Sie anfangen können.
- [Einrichten adaptiver Streaming-Medienquellen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources)
  - : Nehmen wir an, Sie möchten eine adaptive Streaming-Medienquelle auf einem Server einrichten, um sie innerhalb eines HTML-Medienelements zu verwenden. Wie würden Sie das tun? Dieser Artikel erklärt, wie, indem er auf zwei der häufigsten Formate schaut: MPEG-DASH und HLS (HTTP Live Streaming).
- [DASH Adaptives Streaming für HTML 5 Video](/de/docs/Web/API/Media_Source_Extensions_API/DASH_Adaptive_Streaming)
  - : Details, wie man adaptives Streaming mit DASH und WebM einrichtet.

### Fortgeschrittene Themen

- [Web Audio API plattformübergreifende Unterstützung](/de/docs/Web/API/Web_Audio_API/Best_practices#cross_browser_legacy_support)
  - : Ein Leitfaden zum Schreiben plattformübergreifenden Web Audio API-Codes.
- [Einfache Audioaufnahme mit der MediaRecorder API](https://hacks.mozilla.org/2014/06/easy-audio-capture-with-the-mediarecorder-api/)
  - : Erklärt die Grundlagen der Verwendung der MediaStream Recording API, um direkt einen Medienstream aufzuzeichnen.

## Referenz

- [Das Video-Element](/de/docs/Web/HTML/Reference/Elements/video)
- [HTMLVideoElement API](/de/docs/Web/API/HTMLVideoElement)
- [MediaSource API](/de/docs/Web/API/MediaSource)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
- [getUserMedia](/de/docs/Web/API/MediaDevices/getUserMedia)
- [Ereignisindex: Medien](/de/docs/Web/API/Document_Object_Model/Events#media)
