---
title: Audio- und Videobereitstellung
slug: Web/Media/Guides/Audio_and_video_delivery
l10n:
  sourceCommit: 15a768b7d90550b0d90811a52d031674a3b84011
---

Wir können Audio und Video auf der Webplattform auf verschiedene Arten bereitstellen, von 'statischen' Mediendateien bis zu adaptiven Live-Streams. Dieser Artikel dient als Ausgangspunkt für die Erkundung der verschiedenen Bereitstellungsmechanismen von webbasierten Medien und ihrer Kompatibilität mit beliebten Browsern.

## Audio- und Video-HTML-Elemente

Ob es sich um vorab aufgezeichnete Audio-Dateien oder Live-Streams handelt, der Mechanismus, um sie über die {{ htmlelement("audio")}}- und {{ htmlelement("video")}}-Elemente des Browsers verfügbar zu machen, bleibt weitgehend gleich. Derzeit müssen wir zur Unterstützung aller Browser zwei Formate angeben, obwohl sich dies mit der Einführung der MP3- und MP4-Formate in Firefox und Opera schnell ändert. Sie finden Kompatibilitätsinformationen im [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats).

Der allgemeine Ablauf zur Bereitstellung von Video und Audio sieht in der Regel so aus:

1. Prüfen Sie, welches Format der Browser über Feature Detection unterstützt (normalerweise eine Wahl zwischen zwei, wie oben angegeben).
2. Wenn der Browser keines der bereitgestellten Formate nativ wiedergeben kann, stellen Sie entweder ein Standbild bereit oder verwenden Sie eine Fallback-Technologie, um das Video darzustellen.
3. Ermitteln Sie, wie Sie das Medium abspielen/instanziieren möchten (z.B. ein {{ htmlelement("video") }}-Element oder vielleicht `document.createElement('video')`?)
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

Der obige Code wird einen Audioplayer erstellen, der versucht, so viel Audio wie möglich vorzuladen, damit die Wiedergabe reibungslos verläuft.

> [!NOTE]
> Das `preload`-Attribut kann von einigen mobilen Browsern ignoriert werden.

Für weitere Informationen siehe [Cross-Browser Audio Grundlagen (HTML Audio im Detail)](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics#html_audio_in_detail).

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

Der obige Code erstellt einen Videoplayer mit den Abmessungen 640x480 Pixel, der ein Poster-Bild anzeigt, bis das Video abgespielt wird. Wir weisen das Video an, automatisch abzuspielen, aber standardmäßig stummgeschaltet zu sein.

> [!NOTE]
> Das `autoplay`-Attribut kann von einigen mobilen Browsern ignoriert werden. Außerdem kann das automatische Abspielen kontrovers sein, wenn es missbraucht wird. Es wird dringend empfohlen, den [Leitfaden zum automatischen Abspielen für Medien- und Webaudio-APIs](/de/docs/Web/Media/Guides/Autoplay) zu lesen, um zu lernen, wie man Autoplay sinnvoll einsetzt.

Weitere Informationen finden Sie im [`<video>` Element](/de/docs/Web/HTML/Reference/Elements/video) und [Erstellung eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).

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

Wir setzen die Quelle des Audios abhängig von der Art der Audiodatei, die der Browser unterstützt, setzen dann den Abspielkopf auf 5 Sekunden und versuchen, es abzuspielen.

> [!NOTE]
> Die Wiedergabe wird von den meisten Browsern ignoriert, es sei denn, sie erfolgt durch ein benutzerinitiiertes Ereignis.

Es ist auch möglich, einem {{ htmlelement("audio") }}-Element eine base64-codierte WAV-Datei zuzuführen, wodurch Audio spontan generiert werden kann:

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

Wir setzen die Quelle des Videos abhängig von der Art der Videodatei, die der Browser unterstützt, und stellen dann die Breite und Höhe des Videos ein.

## Web Audio API

In diesem Beispiel rufen wir mit der [`fetch()`](/de/docs/Web/API/Window/fetch)-API eine MP3-Datei ab, laden sie in eine Quelle und spielen sie ab.

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

Weitere Informationen zu den Grundlagen der Web Audio API finden Sie unter [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API).

## getUserMedia / Stream API

Es ist auch möglich, einen Live-Stream von einer Webcam und/oder einem Mikrofon mit `getUserMedia` und der Stream API abzurufen. Dies ist Teil einer größeren Technologie, die als WebRTC (Web Real-Time Communications) bekannt ist und mit den neuesten Versionen von Chrome, Firefox und Opera kompatibel ist.

Um den Stream von Ihrer Webcam abzurufen, richten Sie zunächst ein {{ htmlelement("video")}}-Element ein:

```html
<video id="webcam" width="480" height="360"></video>
```

Als nächstes verbinden Sie, falls unterstützt, die Webcam-Quelle mit dem Videoelement:

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

Um mehr zu erfahren, lesen Sie unsere [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia) Seite.

## MediaStream-Aufnahme

Neue Standards werden eingeführt, damit Ihr Browser Medien von Ihrem Mikrofon oder Ihrer Kamera mit `getUserMedia` erfassen und sofort mit der neuen MediaStream Recording API aufzeichnen kann. Nehmen Sie den Stream, den Sie von `getUserMedia` erhalten, geben Sie ihn an ein `MediaRecorder`-Objekt weiter, nehmen Sie die resultierende Ausgabe und leiten Sie sie an Ihre Audio- oder Videoquelle\* weiter.

Der Hauptmechanismus wird unten skizziert:

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

Siehe [MediaStream Aufnahme API](/de/docs/Web/API/MediaStream_Recording_API) für weitere Details.

## Media Source Extensions (MSE)

[Media Source Extensions](https://w3c.github.io/media-source/) ist ein W3C-Arbeitsentwurf, der vorsieht, [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) zu erweitern, um JavaScript die Generierung von Medienstreams zur Wiedergabe zu ermöglichen. Die Möglichkeit für JavaScript, Streams zu erzeugen, eröffnet eine Vielzahl von Anwendungsfällen wie adaptives Streaming und Zeitverschiebung bei Live-Streams.

### Verschlüsselte Medienerweiterungen (EME)

[Verschlüsselte Medienerweiterungen](https://w3c.github.io/encrypted-media/) ist ein W3C-Vorschlag zur Erweiterung von `HTMLMediaElement`, um APIs bereitzustellen, die die Wiedergabe von geschütztem Inhalt steuern.

Die API unterstützt Anwendungsfälle, die von einfacher Clear-Key-Verschlüsselung bis zu hochentwickelten Videos reichen (vorausgesetzt, es gibt eine geeignete Benutzeragentenimplementierung). Lizenz-/Schlüsselaustausch wird durch die Anwendung gesteuert, was die Entwicklung robuster Wiedergabeanwendungen unterstützt, die eine Reihe von Inhaltentschlüsselungs- und Schutztechnologien unterstützen.

Einer der Hauptverwendungen von EME ist es, Browsern zu ermöglichen, DRM ([Digital Rights Management](https://en.wikipedia.org/wiki/Digital_rights_management)) zu implementieren, das hilft, webbasiertes Material (insbesondere Videos) vor dem Kopieren zu schützen.

### Adaptives Streaming

Neue Formate und Protokolle werden eingeführt, um adaptives Streaming zu fördern. Adaptives Streaming von Medien bedeutet, dass die Bandbreite und typischerweise die Qualität des Streams in Echtzeit in Reaktion auf die verfügbare Bandbreite des Benutzers geändert werden können. Adaptives Streaming wird oft in Verbindung mit dem Live-Streaming verwendet, wo eine reibungslose Bereitstellung von Audio oder Video von entscheidender Bedeutung ist.

Die Hauptformate, die für adaptives Streaming verwendet werden, sind [HLS](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#hls) und [MPEG-DASH](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#mpeg-dash). MSE wurde mit DASH im Hinterkopf entworfen. MSE definiert Bytestreams gemäß [ISOBMFF](https://dvcs.w3.org/hg/html-media/raw-file/tip/media-source/isobmff-byte-stream-format.html) und [M2TS](https://en.wikipedia.org/wiki/M2ts) (beides in DASH unterstützt, letzteres in HLS unterstützt). Im Allgemeinen, wenn Sie sich für Standards interessieren, nach Flexibilität suchen oder die meisten modernen Browser unterstützen möchten, sind Sie mit DASH wahrscheinlich besser beraten.

> [!NOTE]
> Derzeit unterstützt Safari DASH nicht, obwohl dash.js auf neueren Versionen von Safari funktioniert, die mit OSX Yosemite veröffentlicht werden sollen.

DASH bietet auch eine Reihe von Profilen, einschließlich OnDemand-Profile, die keine Vorverarbeitung und Aufteilung von Mediendateien erfordern. Es gibt auch eine Anzahl von cloudbasierten Diensten, die Ihr Medium sowohl in HLS als auch in DASH konvertieren.

Weitere Informationen finden Sie unter [Live-Streaming von Web-Audio und Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video).

## Anpassen Ihres Media Players

Sie können entscheiden, dass Ihr Audio- oder Videoplayer eine konsistente Optik über alle Browser hinweg haben soll oder Sie möchten ihn nur so anpassen, dass er zu Ihrer Website passt. Die allgemeine Technik hierfür ist, das `controls`-Attribut wegzulassen, damit die Standardbrowsersteuerungen nicht angezeigt werden, benutzerdefinierte Steuerungen mit HTML und CSS zu erstellen und dann JavaScript zu verwenden, um Ihre Steuerungen mit der Audio-/Video-API zu verknüpfen.

Falls Sie etwas zusätzliches benötigen, ist es möglich, Funktionen hinzuzufügen, die derzeit in Standardplayern nicht vorhanden sind, wie Abspielgeschwindigkeit, Qualitätsstromschalter oder sogar Audiospektren. Sie können auch wählen, wie Sie Ihren Player anpassbar machen möchten — zum Beispiel könnten Sie die Fortschrittsleiste unter bestimmten Bedingungen entfernen.

Sie können Klick-, Tastatur- und/oder Berührungsereignisse erfassen, um Aktionen wie Abspielen, Anhalten und Scrubbing auszulösen. Es ist oft wichtig, Tastatursteuerungen für Benutzerfreundlichkeit und Zugänglichkeit nicht zu vergessen.

Ein schnelles Beispiel — richten Sie zuerst Ihr Audio und benutzerdefinierte Steuerungen in HTML ein:

```html
<audio
  id="my-audio"
  src="http://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3"></audio>
<button id="my-control">play</button>
```

Fügen Sie etwas JavaScript hinzu, um Ereignisse zu erkennen, um das Audio abzuspielen und anzuhalten:

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

Sie können [dieses Beispiel hier ausprobieren](https://jsbin.com/jujeladu/2/edit). Für weitere Informationen siehe [Erstellung eines benutzerdefinierten Audioplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics#creating_your_own_custom_audio_player).

## Weitere Tipps für Audio/Video

### Herunterladen von Medien stoppen

Während das Stoppen der Wiedergabe von Medien so einfach ist, wie die `pause()`-Methode des Elements aufzurufen, lädt der Browser die Medien weiterhin herunter, bis das Medienelement durch den Garbage Collector bereinigt wird.

Hier ist ein Trick, um das Herunterladen sofort zu stoppen:

```js
const mediaElement = document.querySelector("#myMediaElementID");
mediaElement.removeAttribute("src");
mediaElement.load();
```

Indem Sie das `src`-Attribut des Medienelements entfernen und die `load()`-Methode aufrufen, geben Sie die mit dem Video verbundenen Ressourcen frei, was den Netzwerk-Download stoppt. Sie müssen `load()` nach dem Entfernen des Attributs aufrufen, da nur das Entfernen des `src`-Attributs nicht den Ladealgorithmus auslöst. Wenn das `<video>`-Element auch Nachkommen des `<source>`-Elements hat, sollten diese ebenfalls entfernt werden, bevor `load()` aufgerufen wird.

Beachten Sie, dass das Setzen des `src`-Attributs auf eine leere Zeichenkette den Browser tatsächlich dazu veranlasst, es so zu behandeln, als ob Sie eine Videoquelle auf einen relativen Pfad setzen. Dies führt dazu, dass der Browser versucht, einen weiteren Download zu etwas zu machen, das wahrscheinlich kein gültiges Video ist.

### Medien durchsuchen

Medienelemente bieten Unterstützung für das Bewegen der aktuellen Wiedergabeposition zu bestimmten Punkten im Inhalt der Medien. Dies geschieht, indem der Wert der `currentTime`-Eigenschaft des Elements gesetzt wird; siehe [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) für weitere Details zu den Eigenschaften des Elements. Setzen Sie den Wert auf die Zeit in Sekunden, zu der die Wiedergabe fortgesetzt werden soll.

Sie können die `seekable`-Eigenschaft des Elements verwenden, um die Bereiche der Medien zu bestimmen, die derzeit für das Durchsuchen zur Verfügung stehen. Dies gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Bereiche der Zeiten auflistet, zu denen Sie springen können.

```js
const mediaElement = document.querySelector("#mediaElementID");
mediaElement.seekable.start(0); // Returns the starting time (in seconds)
mediaElement.seekable.end(0); // Returns the ending time (in seconds)
mediaElement.currentTime = 122; // Seek to 122 seconds
mediaElement.played.end(0); // Returns the number of seconds the browser has played
```

### Wiedergabebereich angeben

Wenn man die URI für Medien für ein {{ htmlelement("audio") }}- oder {{ htmlelement("video") }}-Element angibt, kann man optional zusätzliche Informationen einfügen, um den Teil der Medien festzulegen, der abgespielt werden soll. Dazu fügt man ein Rautezeichen ("#") gefolgt von der Beschreibung des Medienfragments an.

Ein Zeitbereich wird mit der folgenden Syntax angegeben:

```plain
#t=[starttime][,endtime]
```

Die Zeit kann als Anzahl von Sekunden (als Gleitkommazahl) oder als Stunden-/Minuten-/Sekunden-Zeit angegeben werden, die mit Doppelpunkten getrennt ist (wie z. B. 2:05:01 für 2 Stunden, 5 Minuten und 1 Sekunde).

Einige Beispiele:

- `http://example.com/video.ogv#t=10,20`
  - : Gibt an, dass das Video von 10 Sekunden bis 20 Sekunden abgespielt werden soll.
- `http://example.com/video.ogv#t=,10.5`
  - : Gibt an, dass das Video vom Anfang bis 10,5 Sekunden abgespielt werden soll.
- `http://example.com/video.ogv#t=,02:00:00`
  - : Gibt an, dass das Video vom Anfang bis zwei Stunden abgespielt werden soll.
- `http://example.com/video.ogv#t=60`
  - : Gibt an, dass das Video bei 60 Sekunden beginnen und bis zum Ende des Videos abgespielt werden soll.

## Fehlerbehandlung

Fehler werden an die untergeordneten {{ htmlelement("source") }}-Elemente geliefert, die zu den Fehler verursachenden Quellen gehören.

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

Da Firefox MP4 und 3GP auf einigen Plattformen aufgrund ihrer patentbehafteten Natur nicht unterstützt, werden die {{ htmlelement("source") }}-Elemente mit den IDs "mp4_src" und "3gp_src" `error`-Ereignisse erhalten, bevor die Ogg-Ressource geladen wird. Die Quellen werden in der Reihenfolge abgearbeitet, in der sie erscheinen, und sobald eine erfolgreich geladen wird, werden die übrigen Quellen überhaupt nicht mehr verarbeitet.

### Überprüfen, ob der Browser die bereitgestellten Formate unterstützt

Verwenden Sie die folgenden verifizierten Quellen in Ihren Audio- und Videoelementen, um die Unterstützung zu überprüfen.

- Audio MP3 (`type="audio/mpeg"`): [http://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3](https://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3) ([spiele den MP3-Audio live ab](https://jsbin.com/gekatoge/1/edit).)
- Audio MP4 (`type="audio/mp4"`): [http://jPlayer.org/audio/m4a/Miaow-01-Tempered-song.m4a](https://jPlayer.org/audio/m4a/Miaow-01-Tempered-song.m4a) ([spiele den MP4-Audio live ab](https://jsbin.com/gekatoge/2/edit).)
- Audio Ogg (`type="audio/ogg"`): [http://jPlayer.org/audio/ogg/Miaow-01-Tempered-song.ogg](https://jPlayer.org/audio/ogg/Miaow-01-Tempered-song.ogg) ([spiele den OGG-Audio live ab](https://jsbin.com/gekatoge/4/edit).)
- Video MP4 (`type="video/mp4"`): [http://jPlayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v](https://jPlayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v) ([spiele das MP4-Video live ab](https://jsbin.com/gekatoge/5/edit).)
- Video WebM (`type="video/webm"`): [http://jPlayer.org/video/webm/Big_Buck_Bunny_Trailer.webm](https://jPlayer.org/video/webm/Big_Buck_Bunny_Trailer.webm) ([spiele das WebM-Video live ab](https://jsbin.com/gekatoge/6/edit).)
- Video Ogg (`type="video/ogg"`): [http://jPlayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv](https://jPlayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv) ([spiele das OGG-Video live ab](https://jsbin.com/gekatoge/7/edit).)

Wenn diese nicht abspielbar sind, unterstützt der von Ihnen getestete Browser das angegebene Format nicht. Ziehen Sie in Betracht, ein anderes Format zu verwenden oder ein Fallback zu verwenden.

Wenn diese funktionieren, aber die von Ihnen bereitgestellten Dateien nicht, gibt es zwei mögliche Probleme:

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

Ihre Dateien wurden möglicherweise falsch codiert — versuchen Sie, mit einem der folgenden Tools zu kodieren, die sich als ziemlich zuverlässig erwiesen haben:

- [Audacity](https://sourceforge.net/projects/audacity/) — Kostenloser Audio-Editor und -Rekorder
- [Miro](https://www.getmiro.com/) — Kostenloser, quelloffener Musik- und Videoplayer
- [Handbrake](https://handbrake.fr/) — Open Source Video Transcoder
- [Firefogg](https://www.firefogg.org/) — Video- und Audioencoding für Firefox
- [FFmpeg2](https://www.ffmpeg.org/) — Umfassender Befehlszeilen-Encoder
- [Vid.ly](https://m.vid.ly/) — Video-Player, Transcodierung und Bereitstellung
- [Internet Archive](https://archive.org/) — Kostenloses Transcoding und Speicherung

### Erkennen, wann keine Quellen geladen wurden

Um zu erkennen, dass alle untergeordneten {{ htmlelement("source") }}-Elemente nicht geladen wurden, überprüfen Sie den Wert des `networkState`-Attributs des Medienelements. Wenn dies `HTMLMediaElement.NETWORK_NO_SOURCE` ist, wissen Sie, dass alle Quellen fehlerhaft waren.

Wenn Sie zu diesem Zeitpunkt eine weitere Quelle hinzufügen, indem Sie ein neues {{ htmlelement("source") }}-Element als Kind des Medienelements einfügen, versucht Gecko, die angegebene Ressource zu laden.

### Fallback-Inhalte anzeigen, wenn keine Quelle decodiert werden konnte

Eine andere Möglichkeit, den Fallback-Inhalt eines Videos anzuzeigen, wenn keine der Quellen in dem aktuellen Browser decodiert werden konnte, besteht darin, einen Fehlerbehandler am letzten `<source>`-Element hinzuzufügen. Dann können Sie das Video durch seinen Fallback-Inhalt ersetzen:

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

Es gibt eine Reihe von Audio- und Video-JavaScript-Bibliotheken. Die beliebtesten Bibliotheken ermöglichen es Ihnen, ein einheitliches Player-Design über alle Browser hinweg zu wählen und bieten ein Fallback für Browser, die Audio und Video nicht nativ unterstützen. Fallbacks haben in der Vergangenheit jetzt veraltete Plugins wie Adobe Flash oder Microsoft Silverlight-Plugins verwendet, um einen Mediaplayer in nicht unterstützenden Browsern bereitzustellen, obwohl diese auf modernen Computern nicht mehr unterstützt werden. Andere Funktionen wie das `<track>`-Element für Untertitel können auch über Medienbibliotheken bereitgestellt werden.

### Nur Audio

- [SoundManager](https://www.schillmania.com/projects/soundmanager2/)
- [AmplitudeJS](https://521dimensions.com/open-source/amplitudejs)
- [HowlerJS](https://howlerjs.com/)

### Nur Video

- [flowplayer](https://flowplayer.com/): Kostenlos mit einem Flowplayer-Logo-Wasserzeichen. Open Source (GPL-lizenziert.)
- [JWPlayer](https://jwplayer.com/): Registrierung erforderlich, um herunterzuladen. Open Source Edition (Creative Commons License.)
- [SublimeVideo](https://www.sublimevideo.net/): Registrierung erforderlich. Formularbasierte Einrichtung mit domänenspezifischem Link zur CDN-hosted Bibliothek.
- [Video.js](https://videojs.com/): Kostenlos und Open Source (Apache 2 lizenziert.)

### Audio und Video

- [jPlayer](https://jPlayer.org/): Kostenlos und Open Source (MIT-lizenziert.)
- [mediaelement.js](https://www.mediaelementjs.com/): Kostenlos und Open Source (MIT-lizenziert.)

### Web Audio API

- [AudioContext Monkeypatch](https://github.com/cwilso/AudioContext-MonkeyPatch): Ein Polyfill für ältere Versionen der Web Audio API; Open Source (Apache 2 lizenziert.)

## Leitfäden

- [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player)
  - : Ein Leitfaden zum Erstellen eines grundlegenden plattformübergreifenden Videoplayers mit dem {{ htmlelement("video") }}-Element.
- [Grundlagen zur Videoplayer-Stilgebung](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics)
  - : Mit dem plattformübergreifenden Videoplayer, der im vorherigen Artikel behandelt wurde, wird in diesem Artikel nun grundlegende, reaktionsfähige Stilgebung für den Player bereitgestellt.
- [Grundlagen zu plattformübergreifendem Audio](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
  - : Dieser Artikel bietet einen grundlegenden Leitfaden zum Erstellen eines HTML-Audioplayers, der plattformübergreifend funktioniert, mit allen dazugehörigen Attributen, Eigenschaften und Ereignissen erklärt und einer kurzen Anleitung zu benutzerdefinierten Steuerungen, die mithilfe der Medien-API erstellt wurden.
- [Medien-Pufferung, Seeking und Zeitbereiche](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges)
  - : Manchmal ist es nützlich zu wissen, wie viel {{ htmlelement("audio") }} oder {{ htmlelement("video") }} heruntergeladen wurde oder ohne Verzögerung abspielbar ist — ein gutes Beispiel hierfür ist die gepufferte Fortschrittsleiste eines Audio- oder Videoplayers. Dieser Artikel beschreibt, wie man eine Pufferungs-/Suchleiste mit [TimeRanges](/de/docs/Web/API/TimeRanges) und anderen Funktionen der Medien-API erstellt.
- [HTML playbackRate erklärt](/de/docs/Web/Media/Guides/Audio_and_video_delivery/WebAudio_playbackRate_explained)
  - : Das `playbackRate`-Eigenschaft ermöglicht uns, die Geschwindigkeit oder Rate zu ändern, mit der ein Stück Web-Audio oder Video abgespielt wird. Dieser Artikel erklärt es im Detail.
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
  - : Erklärt die Grundlagen der Verwendung der Web Audio API, um eine Audioquelle zu erfassen, zu manipulieren und wiederzugeben.

### Streaming-Medien

- [Live-Streaming von Web-Audio und -Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video)
  - : Live-Streaming-Technologie wird oft eingesetzt, um Live-Events wie Sportveranstaltungen, Konzerte und allgemein TV- und Radiosendungen, die live übertragen werden, zu streamen. Oft auf einfach "Streaming" verkürzt, ist Live-Streaming der Prozess der Übertragung von Medien "live" auf Computer und Geräte. Dies ist ein ziemlich komplexes und aufkommendes Thema mit vielen Variablen; in diesem Artikel stellen wir Ihnen das Thema vor und erklären, wie Sie beginnen können.
- [Einrichten von adaptiven Streaming-Medienquellen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources)
  - : Angenommen, Sie möchten eine adaptive Streaming-Medienquelle auf einem Server einrichten, die in einem HTML-Medienelement verwendet werden soll. Wie würden Sie das machen? Dieser Artikel erklärt wie, indem er zwei der gebräuchlichsten Formate betrachtet: MPEG-DASH und HLS (HTTP Live Streaming.)
- [DASH Adaptives Streaming für HTML5-Video](/de/docs/Web/API/Media_Source_Extensions_API/DASH_Adaptive_Streaming)
  - : Beschreibt, wie man adaptives Streaming mit DASH und WebM einrichtet.

### Fortgeschrittene Themen

- [Hinzufügen von Untertiteln zu HTML-Videos](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)
  - : Dieser Artikel erklärt, wie man HTML {{ htmlelement("video") }} Untertitel hinzufügt, mit [Web_Video_Text_Tracks_Format](/de/docs/Web/API/WebVTT_API) und dem {{ htmlelement("track") }}-Element.
- [Web Audio API plattformübergreifende Unterstützung](/de/docs/Web/API/Web_Audio_API/Best_practices#cross_browser_legacy_support)
  - : Ein Leitfaden zum Schreiben von plattformübergreifendem Web Audio API Code.
- [Einfache Audioerfassung mit der MediaRecorder API](https://hacks.mozilla.org/2014/06/easy-audio-capture-with-the-mediarecorder-api/)
  - : Erklärt die Grundlagen der Verwendung der MediaStream Recording API, um einen Medienstream direkt aufzuzeichnen.

## Referenz

- [Das Video-Element](/de/docs/Web/HTML/Reference/Elements/video)
- [HTMLVideoElement API](/de/docs/Web/API/HTMLVideoElement)
- [MediaSource API](/de/docs/Web/API/MediaSource)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [MediaStream Aufzeichnungs-API](/de/docs/Web/API/MediaStream_Recording_API)
- [getUserMedia](/de/docs/Web/API/MediaDevices/getUserMedia)
- [Ereignisreferenz: Medien](/de/docs/Web/Events#media)
