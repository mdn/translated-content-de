---
title: Audio- und Videobereitstellung
slug: Web/Media/Guides/Audio_and_video_delivery
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

Wir können Audio und Video auf dem Web auf verschiedene Arten bereitstellen, von "statischen" Mediendateien bis hin zu adaptiven Live-Streams. Dieser Artikel soll als Ausgangspunkt zur Erkundung der verschiedenen Bereitstellungsmechanismen von webbasierter Medien und der Kompatibilität mit beliebten Browsern dienen.

## Audio- und Video-HTML-Elemente

Ob wir mit voraufgezeichneten Audiodateien oder Live-Streams arbeiten, der Mechanismus, um sie über die {{htmlelement("audio")}} und {{htmlelement("video")}}-Elemente des Browsers verfügbar zu machen, bleibt weitgehend gleich. Derzeit müssen wir, um alle Browser zu unterstützen, zwei Formate angeben, obwohl sich dies mit der Einführung der Formate MP3 und MP4 in Firefox und Opera schnell ändert. Informationen zur Kompatibilität finden Sie im [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats).

Um Video und Audio bereitzustellen, sieht der allgemeine Ablauf in der Regel so aus:

1. Prüfen, welches Format der Browser per Feature-Erkennung unterstützt (normalerweise die oben erwähnten zwei Optionen).
2. Wenn der Browser keines der bereitgestellten Formate nativ abspielen kann, entweder ein Standbild präsentieren oder eine Fallback-Technologie verwenden, um das Video zu präsentieren.
3. Entscheiden, wie Sie das Medium abspielen/instanziieren möchten (z. B. ein {{htmlelement("video")}}-Element oder vielleicht `document.createElement('video')`).
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

Der obige Code erstellt einen Audioplayer, der versucht, so viel Audio wie möglich vorab zu laden, um eine reibungslose Wiedergabe zu gewährleisten.

> [!NOTE]
> Das Attribut `preload` könnte von einigen mobilen Browsern ignoriert werden.

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

Der obige Code erstellt einen Videoplayer mit den Abmessungen 640x480 Pixel, der ein Posterbild anzeigt, bis das Video abgespielt wird. Wir weisen das Video an, automatisch abzuspielen, aber standardmäßig stummgeschaltet zu sein.

> [!NOTE]
> Das `autoplay`-Attribut könnte von einigen mobilen Browsern ignoriert werden. Außerdem kann die Autoplay-Funktion umstritten sein, wenn sie missbraucht wird. Es wird dringend empfohlen, den [Leitfaden zum automatischen Abspielen für Medien und Web-Audio-APIs](/de/docs/Web/Media/Guides/Autoplay) zu lesen, um zu lernen, wie man Autoplay sinnvoll einsetzt.

Weitere Informationen finden Sie im [`<video>`-Element](/de/docs/Web/HTML/Element/video) und [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).

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

Wir setzen die Quelle des Audios abhängig vom unterstützten Audiodateityp des Browsers, dann setzen wir den Wiedergabekopf 5 Sekunden weiter und versuchen, ihn abzuspielen.

> [!NOTE]
> Die Wiedergabe wird von den meisten Browsern ignoriert, es sei denn, sie wird durch ein nutzergesteuertes Ereignis ausgelöst.

Es ist auch möglich, einem {{htmlelement("audio")}}-Element eine Base64-kodierte WAV-Datei zuzuführen und somit Audio in Echtzeit zu generieren:

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

Wir setzen die Quelle des Videos je nach dem unterstützten Videoformat des Browsers und legen dann die Breite und Höhe des Videos fest.

## Web-Audio-API

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

Sie können das [vollständige Beispiel live ausführen](https://mdn.github.io/webaudio-examples/decode-audio-data/promise/) oder [den Quellcode anzeigen](https://github.com/mdn/webaudio-examples/tree/main/decode-audio-data/promise).

Erfahren Sie mehr über die Grundlagen der Web-Audio-API in [Verwendung der Web-Audio-API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API).

## getUserMedia / Stream-API

Es ist auch möglich, einen Live-Stream von einer Webcam und/oder einem Mikrofon mithilfe von `getUserMedia` und der Stream-API abzurufen. Dies ist Teil einer breiteren Technologie, die als WebRTC (Web Real-Time Communications) bekannt ist und mit den neuesten Versionen von Chrome, Firefox und Opera kompatibel ist.

Um den Stream von Ihrer Webcam zu erhalten, richten Sie zuerst ein {{htmlelement("video")}}-Element ein:

```html
<video id="webcam" width="480" height="360"></video>
```

Wenn unterstützt, verbinden Sie die Webcam-Quelle mit dem Videoelement:

```js
if (navigator.mediaDevices) {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then(function onSuccess(stream) {
      const video = document.getElementById("webcam");
      video.autoplay = true;
      video.srcObject = stream;
    })
    .catch(function onError() {
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

Neue Standards werden eingeführt, die es Ihrem Browser ermöglichen, Medien von Ihrem Mikrofon oder Ihrer Kamera mit `getUserMedia` zu erfassen und sie sofort mithilfe der neuen MediaStream-Aufzeichnungs-API aufzuzeichnen. Sie nehmen den Stream, den Sie von `getUserMedia` erhalten, übergeben ihn an ein `MediaRecorder`-Objekt, nehmen die resultierenden Daten und füttern sie an Ihre Audio- oder Videoquelle\*.

Der Hauptmechanismus wird wie folgt beschrieben:

```js
navigator.mediaDevices
  .getUserMedia({ audio: true })
  .then(function onSuccess(stream) {
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
  .catch(function onError(error) {
    console.log(error.message);
  });
```

Weitere Einzelheiten finden Sie in der [MediaStream-Aufzeichnungs-API](/de/docs/Web/API/MediaStream_Recording_API).

## Media Source Extensions (MSE)

[Media Source Extensions](https://w3c.github.io/media-source/) ist ein Arbeitsentwurf des W3C, der plant, [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) zu erweitern, um JavaScript zu ermöglichen, Medienstreams für die Wiedergabe zu generieren. Die Erlaubnis, dass JavaScript Streams generiert, ermöglicht eine Vielzahl von Anwendungsfällen wie adaptives Streaming und Zeitverschiebung von Live-Streams.

### Verschlüsselte Medienerweiterungen (EME)

[Verschlüsselte Medienerweiterungen](https://w3c.github.io/encrypted-media/) ist ein W3C-Vorschlag zur Erweiterung von `HTMLMediaElement`, der APIs für die Steuerung der Wiedergabe geschützter Inhalte bereitstellt.

Die API unterstützt Anwendungsfälle, die von einfacher Klartextschlüsselentschlüsselung bis hin zu hochauflösendem Video reichen (vorausgesetzt, eine geeignete Benutzeragentenimplementierung ist vorhanden). Der Lizenz-/Schlüsselaustausch wird von der Anwendung gesteuert, was die Entwicklung robuster Wiedergabeanwendungen erleichtert, die eine Vielzahl von Inhalten zur Entschlüsselung und Schutztechnologien unterstützen.

Einer der Hauptanwendungszwecke von EME besteht darin, es Browsern zu ermöglichen, DRM ([Digital Rights Management](https://en.wikipedia.org/wiki/Digital_rights_management)) zu implementieren, was dazu beiträgt, das Kopieren von webbasierten Inhalten (insbesondere Videos) zu verhindern.

### Adaptives Streaming

Neue Formate und Protokolle werden eingeführt, um adaptives Streaming zu erleichtern. Adaptives Streaming- Medien bedeuten, dass die Bandbreite und typischerweise die Qualität des Streams in Echtzeit als Reaktion auf die verfügbare Bandbreite des Benutzers geändert werden können. Adaptives Streaming wird häufig in Verbindung mit Live-Streaming verwendet, bei dem eine reibungslose Bereitstellung von Audio oder Video entscheidend ist.

Die Hauptformate, die für adaptives Streaming verwendet werden, sind [HLS](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#hls) und [MPEG-DASH](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#mpeg-dash). MSE wurde mit Blick auf DASH entworfen. MSE definiert Byte-Streams gemäß [ISOBMFF](https://dvcs.w3.org/hg/html-media/raw-file/tip/media-source/isobmff-byte-stream-format.html) und [M2TS](https://en.wikipedia.org/wiki/M2ts) (beide werden in DASH unterstützt, letzterer wird in HLS unterstützt). Allgemein gesagt, wenn Sie an Standards interessiert sind, Flexibilität suchen oder die meisten modernen Browser unterstützen wollen, sind Sie wahrscheinlich mit DASH besser beraten.

> [!NOTE]
> Derzeit unterstützt Safari nicht DASH, obwohl dash.js in neueren Versionen von Safari funktioniert, die mit OSX Yosemite veröffentlicht werden sollen.

DASH bietet auch eine Reihe von Profilen, einschließlich einfacher On-Demand-Profile, die keine Vorprozessierung und Aufteilung der Mediendateien erfordern. Es gibt auch eine Reihe von Cloud-basierten Diensten, die Ihre Medien in beide HLS und DASH umwandeln.

Weitere Informationen finden Sie unter [Web-Audio- und Live-Video-Streaming](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video).

## Anpassung Ihres Mediaplayers

Sie können entscheiden, dass Ihr Audio- oder Videoplayer in allen Browsern ein konsistentes Erscheinungsbild haben soll, oder möchten ihn einfach an Ihr Website-Design anpassen. Die allgemeine Technik, dies zu erreichen, besteht darin, das `controls`-Attribut wegzulassen, damit die Standardbrowsersteuerungen nicht angezeigt werden. Erstellen Sie benutzerdefinierte Steuerungen mit HTML und CSS und verwenden Sie dann JavaScript, um Ihre Steuerungen mit der Audio-/Video-API zu verknüpfen.

Wenn Sie etwas Zusätzliches benötigen, ist es möglich, Funktionen hinzuzufügen, die derzeit in den Standardplayern nicht vorhanden sind, wie z. B. Abspielgeschwindigkeit, Qualitätsstream-Umschaltfunktionen oder sogar Audiospektren. Sie können auch wählen, wie Sie Ihren Player responsiv gestalten möchten – zum Beispiel könnten Sie die Fortschrittsleiste unter bestimmten Bedingungen entfernen.

Sie können Klick-, Berührungs- und/oder Tastaturereignisse erkennen, um Aktionen wie Abspielen, Anhalten und Scrubbing auszulösen. Es ist oft wichtig, an Tastatursteuerungen für Benutzerfreundlichkeit und Barrierefreiheit zu denken.

Ein schnelles Beispiel – richten Sie zuerst Ihr Audio und benutzerdefinierte Steuerungen in HTML ein:

```html
<audio
  id="my-audio"
  src="http://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3"></audio>
<button id="my-control">play</button>
```

Fügen Sie ein wenig JavaScript hinzu, um Ereignisse zur Wiedergabe und Pause des Audios zu erkennen:

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

### Stoppen des Herunterladens von Medien

Während das Stoppen der Wiedergabe von Medien so einfach ist wie das Aufrufen der `pause()`-Methode des Elements, lädt der Browser die Medien weiter herunter, bis das Medienelement durch die Speicherbereinigung entfernt wird.

Hier ist ein Trick, der das Herunterladen sofort stoppt:

```js
const mediaElement = document.querySelector("#myMediaElementID");
mediaElement.removeAttribute("src");
mediaElement.load();
```

Wenn Sie das `src`-Attribut des Medienelements entfernen und die `load()`-Methode aufrufen, geben Sie die mit dem Video verbundenen Ressourcen frei, was den Netzwerkdownload stoppt. Sie müssen `load()` nach dem Entfernen des Attributs aufrufen, da das bloße Entfernen des `src`-Attributs den Ladealgorithmus nicht aufruft. Wenn das `<video>`-Element auch `<source>`-Elementnachkommen hat, sollten diese auch entfernt werden, bevor `load()` aufgerufen wird.

Beachten Sie, dass das einfache Setzen des `src`-Attributs auf einen leeren String den Browser tatsächlich dazu veranlasst, es so zu behandeln, als ob Sie eine Videodateiquelle auf einen relativen Pfad setzen. Dadurch versucht der Browser, einen weiteren Download aufzurufen, der wahrscheinlich kein gültiges Video ist.

### Durch Medien suchend

Medien-Elemente bieten Unterstützung zum Bewegen der aktuellen Wiedergabeposition an bestimmte Punkte im Medieninhalt. Dies erfolgt durch Setzen des Wertes der `currentTime`-Eigenschaft des Elements; siehe [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) für weitere Details zu den Eigenschaften des Elements. Setzen Sie den Wert auf die Zeit in Sekunden, an der die Wiedergabe fortgesetzt werden soll.

Sie können die `seekable`-Eigenschaft des Elements verwenden, um die Bereiche der Medien zu bestimmen, die derzeit zum Suchen verfügbar sind. Dies gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Zeitbereiche auflistet, zu denen Sie suchen können.

```js
const mediaElement = document.querySelector("#mediaElementID");
mediaElement.seekable.start(0); // Returns the starting time (in seconds)
mediaElement.seekable.end(0); // Returns the ending time (in seconds)
mediaElement.currentTime = 122; // Seek to 122 seconds
mediaElement.played.end(0); // Returns the number of seconds the browser has played
```

### Festlegen eines Wiedergabebereichs

Beim Angeben der URI von Medien für ein {{HTMLElement("audio")}} oder {{HTMLElement("video")}}-Element können Sie optional zusätzliche Informationen hinzufügen, um den abzuspielenden Abschnitt des Mediums festzulegen. Dazu fügen Sie ein Rautezeichen ("#") gefolgt von der Mediendfragmentbeschreibung an.

Ein Zeitbereich wird mit der folgenden Syntax angegeben:

```plain
#t=[starttime][,endtime]
```

Die Zeit kann als Anzahl von Sekunden (als Gleitkommawert) oder als Stunden/Minuten/Sekunden-Zeitpunkt, getrennt durch Doppelpunkte (wie 2:05:01 für 2 Stunden, 5 Minuten und 1 Sekunde), angegeben werden.

Einige Beispiele:

- `http://example.com/video.ogv#t=10,20`
  - : Gibt an, dass das Video den Bereich von 10 Sekunden bis 20 Sekunden abspielen soll.
- `http://example.com/video.ogv#t=,10.5`
  - : Gibt an, dass das Video von Anfang an bis zu 10.5 Sekunden abspielen soll.
- `http://example.com/video.ogv#t=,02:00:00`
  - : Gibt an, dass das Video von Anfang an bis zu zwei Stunden abspielen soll.
- `http://example.com/video.ogv#t=60`
  - : Gibt an, dass das Video bei 60 Sekunden beginnen und bis zum Ende des Videos abspielen soll.

## Fehlerbehandlung

Fehler werden an die Kind-{{HTMLElement("source")}}-Elemente geliefert, die den Fehler verursachen.

Dies ermöglicht es, zu erkennen, welche Quellen nicht geladen werden konnten, was nützlich sein kann. Betrachten Sie dieses HTML:

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

Da Firefox MP4 und 3GP auf einigen Plattformen aufgrund ihrer patentbelasteten Natur nicht unterstützt, erhalten die {{HTMLElement("source")}}-Elemente mit den IDs "mp4_src" und "3gp_src" `error`-Ereignisse, bevor die Ogg-Ressource geladen wird. Die Quellen werden in der Reihenfolge ausprobiert, in der sie erscheinen, und sobald eine erfolgreich geladen wird, werden die verbleibenden Quellen überhaupt nicht mehr ausprobiert.

### Überprüfen, ob der Browser die bereitgestellten Formate unterstützt

Verwenden Sie die folgenden überprüften Quellen innerhalb Ihrer Audio- und Videoklammern, um die Unterstützung zu überprüfen.

- Audio MP3 (`type="audio/mpeg"`): [http://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3](https://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3) ([MP3-Audio live abspielen](https://jsbin.com/gekatoge/1/edit)).
- Audio MP4 (`type="audio/mp4"`): [http://jPlayer.org/audio/m4a/Miaow-01-Tempered-song.m4a](https://jPlayer.org/audio/m4a/Miaow-01-Tempered-song.m4a) ([MP4-Audio live abspielen](https://jsbin.com/gekatoge/2/edit)).
- Audio Ogg (`type="audio/ogg"`): [http://jPlayer.org/audio/ogg/Miaow-01-Tempered-song.ogg](https://jPlayer.org/audio/ogg/Miaow-01-Tempered-song.ogg) ([OGG-Audio live abspielen](https://jsbin.com/gekatoge/4/edit)).
- Video MP4 (`type="video/mp4"`): [http://jPlayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v](https://jPlayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v) ([MP4-Video live abspielen](https://jsbin.com/gekatoge/5/edit)).
- Video WebM (`type="video/webm"`): [http://jPlayer.org/video/webm/Big_Buck_Bunny_Trailer.webm](https://jPlayer.org/video/webm/Big_Buck_Bunny_Trailer.webm) ([WebM-Video live abspielen](https://jsbin.com/gekatoge/6/edit)).
- Video Ogg (`type="video/ogg"`): [http://jPlayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv](https://jPlayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv) ([OGG-Video live abspielen](https://jsbin.com/gekatoge/7/edit)).

Wenn diese nicht abgespielt werden, unterstützt der von Ihnen getestete Browser das angegebene Format nicht. Ziehen Sie in Betracht, ein anderes Format zu verwenden oder einen Fallback zu nutzen.

Funktionieren diese aber die von Ihnen bereitgestellten Dateien nicht, gibt es zwei mögliche Probleme:

#### 1. Der Medienserver liefert nicht die korrekten MIME-Typen mit der Datei

Obwohl dies normalerweise unterstützt wird, müssen Sie möglicherweise das folgende in die `.htaccess`-Datei Ihres Medienservers hinzufügen.

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

Ihre Dateien könnten falsch kodiert worden sein — versuchen Sie, sie mit einem der folgenden bewährten Tools zu kodieren:

- [Audacity](https://sourceforge.net/projects/audacity/) — Kostenloser Audio-Editor und Rekorder
- [Miro](https://www.getmiro.com/) — Kostenloser, quelloffener Musik- und Videoplayer
- [Handbrake](https://handbrake.fr/) — Open Source Video-Transcoder
- [Firefogg](http://www.firefogg.org/) — Video- und Audiokodierung für Firefox
- [FFmpeg2](https://www.ffmpeg.org/) — Umfassender Kommandozeilen-Encoder
- [Vid.ly](https://m.vid.ly/) — Video-Player, Transcoding und Bereitstellung
- [Internet Archive](https://archive.org/) — Kostenloses Transcoding und Speicher

### Erkennen, wenn keine Quellen geladen wurden

Um zu erkennen, dass alle untergeordneten {{HTMLElement("source")}}-Elemente nicht geladen wurden, prüfen Sie den Wert des `networkState`-Attributs des Medienelements. Wenn dies `HTMLMediaElement.NETWORK_NO_SOURCE` ist, wissen Sie, dass alle Quellen nicht geladen wurden.

Wenn Sie zu diesem Zeitpunkt eine weitere Quelle hinzufügen, indem Sie ein neues {{HTMLElement("source")}}-Element als Kind des Medienelements einfügen, versucht Gecko, die angegebene Ressource zu laden.

### Anzeigen von Fallback-Inhalten, wenn keine Quelle decodiert werden konnte

Eine andere Methode, um die Fallback-Inhalte eines Videos anzuzeigen, wenn keine der Quellen im aktuellen Browser decodiert werden konnte, besteht darin, einen Fehlerbehandler für das letzte `source`-Element hinzuzufügen. Dann können Sie das Video durch seinen Fallback-Inhalt ersetzen:

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

## Audio-/Video-JavaScript-Bibliotheken

Es existieren eine Reihe von Audio- und Video-JavaScript-Bibliotheken. Die beliebtesten Bibliotheken ermöglichen Ihnen die Wahl eines einheitlichen Player-Designs über alle Browser hinweg und bieten einen Fallback für Browser, die Audio und Video nicht nativ unterstützen. Fallbacks haben historisch veraltete Plugins wie Adobe Flash oder Microsoft Silverlight verwendet, um in nicht unterstützenden Browsern einen Mediaplayer bereitzustellen, obwohl diese auf modernen Computern nicht mehr unterstützt werden. Andere Funktionalitäten wie das [`<track>`](/de/docs/Web/HTML/Element/track)-Element für Untertitel können auch über Medialibrarys bereitgestellt werden.

### Nur Audio

- [SoundManager](https://www.schillmania.com/projects/soundmanager2/)
- [AmplitudeJS](https://521dimensions.com/open-source/amplitudejs)
- [HowlerJS](https://howlerjs.com/)

### Nur Video

- [flowplayer](https://flowplayer.com/): Kostenlos mit einem Flowplayer-Logo-Wasserzeichen. Open Source (GPL-lizenziert.)
- [JWPlayer](https://jwplayer.com/): Erfordert Registrierung zum Herunterladen. Open Source Edition (Creative Commons License.)
- [SublimeVideo](https://www.sublimevideo.net/): Erfordert Registrierung. Formularbasierte Einrichtung mit domänenspezifischem Link zur CDN-gehosteten Bibliothek.
- [Video.js](https://videojs.com/): Kostenlos und Open Source (Apache 2 Licensed.)

### Audio und Video

- [jPlayer](https://jPlayer.org/): Kostenlos und Open Source (MIT-lizenziert.)
- [mediaelement.js](https://www.mediaelementjs.com/): Kostenlos und Open Source (MIT-lizenziert.)

### Web-Audio-API

- [AudioContext monkeypatch](https://github.com/cwilso/AudioContext-MonkeyPatch): Ein Polyfill für ältere Versionen der Web-Audio-API; Open Source (Apache 2 Licensed.)

## Leitfäden

- [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player)
  - : Ein Leitfaden zur Erstellung eines grundlegenden plattformübergreifenden Videoplayers mithilfe des {{htmlelement("video")}}-Elements.
- [Grundlagen der Videoplayer-Stilgestaltung](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics)
  - : Mit dem im vorherigen Artikel eingerichteten plattformübergreifenden Videoplayer, befasst sich dieser Artikel nun mit der Bereitstellung von grundlegenden, responsiven Stilen für den Player.
- [Cross-Browser Audio-Grundlagen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
  - : Dieser Artikel bietet einen grundlegenden Leitfaden zur Erstellung eines HTML-Audioplayers, der plattformübergreifend funktioniert, mit all den erläuterten zugehörigen Attributen, Eigenschaften und Ereignissen sowie einem schnellen Leitfaden für benutzerdefinierte Steuerungen, die mit der Media-API erstellt wurden.
- [Medienpufferung, Suchen und Zeitbereiche](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges)
  - : Manchmal ist es nützlich zu wissen, wie viel {{htmlelement("audio")}} oder {{htmlelement("video")}} heruntergeladen wurde oder ohne Verzögerung abspielbar ist — ein gutes Beispiel dafür ist die gepufferte Fortschrittsleiste eines Audio- oder Videoplayers. Dieser Artikel diskutiert, wie man eine Puffer-/Suchleiste mit [TimeRanges](/de/docs/Web/API/TimeRanges) und anderen Funktionen der Media-API erstellt.
- [HTML `playbackRate` erklärt](/de/docs/Web/Media/Guides/Audio_and_video_delivery/WebAudio_playbackRate_explained)
  - : Die `playbackRate`-Eigenschaft erlaubt es uns, die Geschwindigkeit oder Rate zu ändern, mit der ein Stück Webaudio oder Video abgespielt wird. Dieser Artikel erklärt es im Detail.
- [Verwendung der Web-Audio-API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
  - : Erklärt die Grundlagen der Verwendung der Web-Audio-API, um eine Audioquelle zu erfassen, zu manipulieren und abzuspielen.

### Streaming-Media

- [Web-Audio- und Live-Video-Streaming](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video)
  - : Live-Streaming-Technologie wird oft eingesetzt, um Live-Veranstaltungen wie Sport, Konzerte und allgemein Fernseh- und Radioprogramme auszustrahlen, die live übertragen werden. Oft einfach als Streaming abgekürzt, ist Live-Streaming der Prozess der Übertragung von Medien "live" auf Computer und Geräte. Dies ist ein ziemlich komplexes und noch junges Thema mit vielen Variablen, daher werden wir in diesem Artikel das Thema einführen und Ihnen sagen, wie Sie anfangen können.
- [Einrichten adaptiver Streaming-Medienquellen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources)
  - : Angenommen, Sie möchten eine adaptive Streaming-Medienquelle auf einem Server einrichten, die in einem HTML-Medienelement konsumiert werden soll. Wie würden Sie das tun? Dieser Artikel erklärt, wie es geht, und betrachtet zwei der häufigsten Formate: MPEG-DASH und HLS (HTTP Live Streaming).
- [DASH-Adaptives Streaming für HTML 5 Video](/de/docs/Web/Media/Guides/DASH_Adaptive_Streaming_for_HTML_5_Video)
  - : Details, wie man adaptives Streaming mit DASH und WebM einrichtet.

### Fortgeschrittene Themen

- [Hinzufügen von Untertiteln und Beschriftungen zu HTML-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)
  - : Dieser Artikel erklärt, wie man Untertitel und Beschriftungen zu HTML {{htmlelement("video")}} hinzufügt, indem [Web_Video_Text_Tracks_Format](/de/docs/Web/API/WebVTT_API) und das {{htmlelement("track")}}-Element verwendet werden.
- [Web-Audio-API plattformübergreifender Support](/de/docs/Web/API/Web_Audio_API/Best_practices#cross_browser_legacy_support)
  - : Ein Leitfaden zum Schreiben von plattformübergreifendem Web-Audio-API-Code.
- [Einfache Audioerfassung mit der MediaRecorder-API](https://hacks.mozilla.org/2014/06/easy-audio-capture-with-the-mediarecorder-api/)
  - : Erklärt die Grundlagen der Verwendung der MediaStream-Aufzeichnungs-API, um direkt einen Medienstream aufzuzeichnen.

## Referenz

- [Das Video-Element](/de/docs/Web/HTML/Element/video)
- [HTMLVideoElement API](/de/docs/Web/API/HTMLVideoElement)
- [MediaSource API](/de/docs/Web/API/MediaSource)
- [Web-Audio-API](/de/docs/Web/API/Web_Audio_API)
- [MediaStream-Aufzeichnungs-API](/de/docs/Web/API/MediaStream_Recording_API)
- [getUserMedia](/de/docs/Web/API/MediaDevices/getUserMedia)
- [Ereignisreferenz: Medien](/de/docs/Web/Events#media)
