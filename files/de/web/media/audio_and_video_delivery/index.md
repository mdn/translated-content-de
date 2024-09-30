---
title: Audio und Video Bereitstellung
slug: Web/Media/Audio_and_video_delivery
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{QuickLinksWithSubPages("/de/docs/Web/Media")}}

Wir können Audio und Video auf verschiedene Weise im Web bereitstellen, von 'statischen' Mediendateien bis hin zu adaptiven Live-Streams. Dieser Artikel soll als Ausgangspunkt dienen, um die verschiedenen Bereitstellungsmechanismen von webbasierter Medien zu erkunden und deren Kompatibilität mit gängigen Browsern zu überprüfen.

## Die Audio- und Video-Elemente

Ob wir es mit vorab aufgenommenen Audiodateien oder Live-Streams zu tun haben, die Mechanismen, um sie über die {{ htmlelement("audio") }}- und {{ htmlelement("video") }}-Elemente des Browsers verfügbar zu machen, bleiben weitgehend gleich. Derzeit müssen zwei Formate angegeben werden, um alle Browser zu unterstützen, obwohl sich dies mit der Unterstützung der MP3- und MP4-Formate in Firefox und Opera schnell ändert. Kompatibilitätsinformationen finden Sie im [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Formats).

Der allgemeine Arbeitsablauf zur Bereitstellung von Video und Audio sieht im Allgemeinen folgendermaßen aus:

1. Überprüfen Sie, welches Format der Browser über Feature-Erkennung unterstützt (meistens eine Wahl zwischen zwei, wie oben angegeben).
2. Wenn der Browser die Wiedergabe eines der bereitgestellten Formate nicht nativ unterstützt, zeigen Sie entweder ein Standbild an oder verwenden Sie eine Ersatztechnologie, um das Video zu präsentieren.
3. Bestimmen Sie, wie Sie die Medien abspielen/initialisieren möchten (z. B. ein {{ htmlelement("video") }}-Element oder möglicherweise `document.createElement('video')`).
4. Liefern Sie die Mediendatei an den Player.

### HTML Audio

```html
<audio controls preload="auto">
  <source src="audiofile.mp3" type="audio/mpeg" />

  <!-- fallback for browsers that don't support mp3 -->
  <source src="audiofile.ogg" type="audio/ogg" />

  <!-- fallback for browsers that don't support audio tag -->
  <a href="audiofile.mp3">download audio</a>
</audio>
```

Der obige Code erstellt einen Audioplayer, der versucht, so viel Audio wie möglich vorzuladen, um eine reibungslose Wiedergabe zu gewährleisten.

> [!NOTE]
> Das Attribut `preload` kann von einigen mobilen Browsern ignoriert werden.

Weitere Informationen finden Sie unter [Cross Browser Audio Grundlagen (HTML Audio im Detail)](/de/docs/Web/Media/Audio_and_video_delivery/Cross-browser_audio_basics#html_audio_in_detail)

### HTML Video

```html
<video
  controls
  width="640"
  height="480"
  poster="initialimage.png"
  autoplay
  muted>
  <source src="videofile.mp4" type="video/mp4" />

  <!-- fallback for browsers that don't support mp4 -->
  <source src="videofile.webm" type="video/webm" />

  <!-- specifying subtitle files -->
  <track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English" />
  <track
    src="subtitles_no.vtt"
    kind="subtitles"
    srclang="no"
    label="Norwegian" />

  <!-- fallback for browsers that don't support video tag -->
  <a href="videofile.mp4">download video</a>
</video>
```

Der obige Code erstellt einen Videoplayer mit den Abmessungen 640x480 Pixel, der ein Posterbild anzeigt, bis das Video abgespielt wird. Wir weisen das Video an, automatisch zu starten, aber standardmäßig stumm geschaltet zu sein.

> [!NOTE]
> Das `autoplay`-Attribut kann von einigen mobilen Browsern ignoriert werden. Außerdem kann das automatische Abspielen bei falscher Verwendung kontrovers sein. Es wird dringend empfohlen, den [Autoplay-Leitfaden für Medien und Web Audio APIs](/de/docs/Web/Media/Autoplay_guide) zu lesen, um zu lernen, wie man Autoplay sinnvoll einsetzt.

Weitere Informationen finden Sie unter [\<video> Element](/de/docs/Web/HTML/Element/video) und [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player).

### JavaScript Audio

```js
const myAudio = document.createElement("audio");

if (myAudio.canPlayType("audio/mpeg")) {
  myAudio.setAttribute("src", "audiofile.mp3");
} else if (myAudio.canPlayType("audio/ogg")) {
  myAudio.setAttribute("src", "audiofile.ogg");
}

myAudio.currentTime = 5;
myAudio.play();
```

Wir setzen die Quelle des Audios basierend auf dem Typ der Audiodatei, die der Browser unterstützt, setzen dann den Wiedergabekopf 5 Sekunden vor und versuchen, ihn abzuspielen.

> [!NOTE]
> Die Wiedergabe wird von den meisten Browsern ignoriert, es sei denn, sie wird durch ein vom Benutzer initiiertes Ereignis ausgelöst.

Es ist auch möglich, ein {{ htmlelement("audio") }}-Element mit einer base64-codierten WAV-Datei zu versorgen, um Audio spontan zu generieren:

```html
<audio id="player" src="data:audio/x-wav;base64,UklGRvC…"></audio>
```

[Speak.js](https://github.com/kripken/speak.js/) nutzt diese Technik.

### JavaScript Video

```js
const myVideo = document.createElement("video");

if (myVideo.canPlayType("video/mp4")) {
  myVideo.setAttribute("src", "videofile.mp4");
} else if (myVideo.canPlayType("video/webm")) {
  myVideo.setAttribute("src", "videofile.webm");
}

myVideo.width = 480;
myVideo.height = 320;
```

Wir setzen die Quelle des Videos in Abhängigkeit vom Typ der Videodatei, die der Browser unterstützt, und legen dann die Breite und Höhe des Videos fest.

## Web Audio API

In diesem Beispiel rufen wir eine MP3-Datei mithilfe der [`fetch()`](/de/docs/Web/API/Window/fetch) API ab, laden sie in eine Quelle und spielen sie ab.

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

Weitere Informationen über die Grundlagen der Web Audio API finden Sie unter [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API).

## getUserMedia / Stream API

Es ist auch möglich, einen Livestream von einer Webcam und/oder einem Mikrofon über `getUserMedia` und die Stream API abzurufen. Dies ist Teil einer weiter gefassten Technologie, bekannt als WebRTC (Web Real-Time Communications), und ist mit den neuesten Versionen von Chrome, Firefox und Opera kompatibel.

Um den Stream von Ihrer Webcam zu erfassen, richten Sie zunächst ein {{ htmlelement("video") }}-Element ein:

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

Mehr dazu finden Sie auf unserer Seite zu [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia).

## Mediastream Aufnahme

Neue Standards werden eingeführt, die es Ihrem Browser ermöglichen, Medien von Ihrem Mikrofon oder Ihrer Kamera zu erfassen und diese sofort über die neue MediaStream Recording API aufzunehmen. Sie nehmen den Stream, den Sie von `getUserMedia` erhalten, übergeben ihn an ein `MediaRecorder`-Objekt, nehmen das resultierende Ergebnis und speisen es in Ihre Audio- oder Videoquelle ein*.

Der Hauptmechanismus wird unten erläutert:

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

Siehe [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) für weitere Details.

## Media Source Extensions (MSE)

[Media Source Extensions](https://w3c.github.io/media-source/) ist ein W3C-Arbeitsentwurf, der plant, [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) zu erweitern, damit JavaScript Mediastreams zur Wiedergabe generieren kann. JavaScript in die Lage zu versetzen, Streams zu generieren, ermöglicht eine Vielzahl von Anwendungsfällen wie adaptives Streaming und Timeshifting von Live-Streams.

### Encrypted Media Extensions (EME)

[Encrypted Media Extensions](https://w3c.github.io/encrypted-media/) ist ein W3C-Vorschlag zur Erweiterung von `HTMLMediaElement`, der APIs bereitstellt, um die Wiedergabe von geschütztem Inhalt zu steuern.

Die API unterstützt Anwendungsfälle, die von einfacher Clear Key-Entschlüsselung bis zu hochwertigem Video reichen (vorausgesetzt, es handelt sich um eine geeignete Benutzeragentenimplementierung). Lizenz-/Schlüsselaustausch wird von der Anwendung gesteuert, was die Entwicklung robuster Wiedergabeanwendungen erleichtert, die eine Reihe von Content-Decryption- und Schutztechnologien unterstützen.

Eine der Hauptanwendungen von EME besteht darin, dass Browser DRM (Digital Rights Management) implementieren können, das hilft, das Kopieren webbasierter Inhalte (insbesondere Video) zu verhindern.

### Adaptives Streaming

Neue Formate und Protokolle werden eingeführt, um adaptives Streaming zu ermöglichen. Adaptives Streaming bedeutet, dass die Bandbreite und typischerweise die Qualität des Streams in Echtzeit als Reaktion auf die verfügbare Bandbreite des Benutzers angepasst werden können. Adaptives Streaming wird oft zusammen mit Live-Streaming verwendet, bei dem eine reibungslose Lieferung von Audio oder Video von größter Bedeutung ist.

Die wichtigsten Formate für adaptives Streaming sind [HLS](/de/docs/Web/Media/Audio_and_video_delivery/Live_streaming_web_audio_and_video#hls) und [MPEG-DASH](/de/docs/Web/Media/Audio_and_video_delivery/Live_streaming_web_audio_and_video#mpeg-dash). MSE wurde speziell mit DASH im Hinterkopf entwickelt. MSE definiert Bytestreams gemäß [ISOBMFF](https://dvcs.w3.org/hg/html-media/raw-file/tip/media-source/isobmff-byte-stream-format.html) und [M2TS](https://en.wikipedia.org/wiki/M2ts) (beide Unterstützungen in DASH, letzteres unterstützt in HLS). Im Allgemeinen, wenn Sie sich für Standards interessieren, nach Flexibilität suchen oder die meisten modernen Browser unterstützen möchten, sind Sie wahrscheinlich besser mit DASH aufgehoben.

> [!NOTE]
> Derzeit unterstützt Safari DASH nicht, obwohl dash.js in neueren Versionen von Safari funktioniert, die mit OSX Yosemite veröffentlicht werden sollen.

DASH bietet auch eine Reihe von Profilen, darunter einfache OnDemand-Profile, die keine Vorverarbeitung und Aufteilung von Mediendateien erfordern. Es gibt auch eine Reihe von Cloud-basierten Diensten, die Ihre Medien sowohl in HLS als auch in DASH umwandeln.

Für weitere Informationen siehe [Live-Streaming von Web-Audio und Video](/de/docs/Web/Media/Audio_and_video_delivery/Live_streaming_web_audio_and_video).

## Anpassen Ihres Mediaplayers

Es kann sein, dass Sie möchten, dass Ihr Audio- oder Videoplayer in allen Browsern ein einheitliches Erscheinungsbild hat oder ihn an Ihr Design anpassen möchten. Die allgemeine Technik, um dies zu erreichen, besteht darin, das `controls`-Attribut wegzulassen, sodass die Standard-Browsersteuerungen nicht angezeigt werden, eigene Steuerungen mit HTML und CSS zu erstellen und dann JavaScript zu verwenden, um Ihre Steuerungen mit der Audio-/Video-API zu verknüpfen.

Wenn Sie etwas Besonderes benötigen, ist es möglich, Funktionen hinzuzufügen, die in den standardmäßigen Spielern derzeit nicht vorhanden sind, wie z.B. die Wiedergabegeschwindigkeit, Qualitätsumschaltungen oder sogar Audiospektren. Sie können auch auswählen, wie Sie Ihren Player reaktionsfähig machen – zum Beispiel könnten Sie unter bestimmten Bedingungen die Fortschrittsanzeige entfernen.

Sie können Klick-, Touch- und/oder Tastaturereignisse erkennen, um Aktionen wie Wiedergabe, Pause und Scrubbing auszulösen. Es ist oft wichtig, die Tastatursteuerung im Auge zu behalten, um den Komfort und die Zugänglichkeit für Benutzer zu gewährleisten.

Ein schnelles Beispiel – richten Sie zunächst Ihre Audio- und benutzerdefinierten Steuerungen in HTML ein:

```html
<audio
  id="my-audio"
  src="http://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3"></audio>
<button id="my-control">play</button>
```

fügen Sie ein wenig JavaScript hinzu, um Ereignisse zu erkennen, um die Audio-Wiedergabe zu starten und zu pausieren:

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

Sie können [dieses Beispiel hier ausprobieren](https://jsbin.com/jujeladu/2/edit). Weitere Informationen finden Sie unter [Erstellen eines eigenen benutzerdefinierten Audioplayer](/de/docs/Web/Media/Audio_and_video_delivery/Cross-browser_audio_basics#creating_your_own_custom_audio_player).

## Weitere Tipps für Audio/Video

### Download von Medien stoppen

Während das Stoppen der Wiedergabe von Medien so einfach ist wie das Aufrufen der `pause()`-Methode des Elements, lädt der Browser die Medien weiterhin herunter, bis das Medienelement durch die Speicherbereinigung entsorgt wird.

Hier ist ein Trick, um den Download sofort zu stoppen:

```js
const mediaElement = document.querySelector("#myMediaElementID");
mediaElement.removeAttribute("src");
mediaElement.load();
```

Durch das Entfernen des `src`-Attributs des Medienelements und das Aufrufen der `load()`-Methode geben Sie die Ressourcen frei, die dem Video zugeordnet sind, wodurch der Netzwerkdownload gestoppt wird. Sie müssen `load()` aufrufen, nachdem Sie das Attribut entfernt haben, da das bloße Entfernen des `src`-Attributs nicht den Ladevorgang auslöst. Wenn das `<video>`-Element auch `<source>`-Element-Nachfahren hat, sollten diese ebenfalls entfernt werden, bevor `load()` aufgerufen wird.

Beachten Sie, dass das Setzen des `src`-Attributs auf einen leeren String tatsächlich dazu führt, dass der Browser behandelt, als hätten Sie eine Videoquelle auf einen relativen Pfad gesetzt. Dies führt dazu, dass der Browser versucht, erneut zu etwas herunterzuladen, das wahrscheinlich kein gültiges Video ist.

### Medien durchsuchen

Medienelemente bieten Unterstützung, um die aktuelle Wiedergabeposition zu bestimmten Punkten im Inhalt der Medien zu verschieben. Dies erfolgt durch Setzen des Wertes der `currentTime` Eigenschaft des Elements; siehe [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) für weitere Informationen zu den Eigenschaften des Elements. Setzen Sie den Wert auf die Zeit, in Sekunden, an der Sie möchten, dass die Wiedergabe fortgesetzt wird.

Sie können die `seekable`-Eigenschaft des Elements verwenden, um die Bereiche der Medien zu bestimmen, die derzeit verfügbar sind, um zu ihnen zu suchen. Dies gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges) Objekt zurück, das die Bereiche der Zeiten auflistet, zu denen Sie wechseln können.

```js
const mediaElement = document.querySelector("#mediaElementID");
mediaElement.seekable.start(0); // Returns the starting time (in seconds)
mediaElement.seekable.end(0); // Returns the ending time (in seconds)
mediaElement.currentTime = 122; // Seek to 122 seconds
mediaElement.played.end(0); // Returns the number of seconds the browser has played
```

### Wiedergabebereich angeben

Beim Angeben der URI von Medien für ein {{ HTMLElement("audio") }} oder {{ HTMLElement("video") }}-Element können Sie optional zusätzliche Informationen hinzufügen, um den Teil der Medien anzugeben, der abgespielt werden soll. Fügen Sie dazu ein Rautenzeichen ("#") gefolgt von der Medienfragmentbeschreibung hinzu.

Ein Zeitbereich wird mit der Syntax angegeben:

```plain
#t=[starttime][,endtime]
```

Die Zeit kann als Anzahl von Sekunden (als Gleitkommawert) oder als Stunden/Minuten/Sekunden-Zeit mit Doppelpunkten getrennt angegeben werden (z.B. 2:05:01 für 2 Stunden, 5 Minuten und 1 Sekunde).

Einige Beispiele:

- `http://example.com/video.ogv#t=10,20`
  - : Gibt an, dass das Video im Bereich von 10 Sekunden bis 20 Sekunden abgespielt werden soll.
- `http://example.com/video.ogv#t=,10.5`
  - : Gibt an, dass das Video vom Anfang bis 10,5 Sekunden abgespielt werden soll.
- `http://example.com/video.ogv#t=,02:00:00`
  - : Gibt an, dass das Video vom Anfang bis zwei Stunden abgespielt werden soll.
- `http://example.com/video.ogv#t=60`
  - : Gibt an, dass das Video bei 60 Sekunden beginnen und bis zum Ende des Videos abgespielt werden soll.

## Fehlerbehandlung

Fehler werden an die Kind-{{ HTMLElement("source") }}-Elemente geliefert, die den Quellen entsprechen, die zu dem Fehler geführt haben.

Dies ermöglicht es Ihnen zu erkennen, welche Quellen nicht geladen werden konnten, was nützlich sein kann. Betrachten Sie dieses HTML:

```html
<video>
<source id="mp4_src"
  src="video.mp4"
  type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
</source>
<source id="3gp_src"
  src="video.3gp"
  type='video/3gpp; codecs="mp4v.20.8, samr"'>
</source>
<source id="ogg_src"
  src="video.ogv"
  type='video/ogv; codecs="theora, vorbis"'>
</source>
</video>
```

Da Firefox aufgrund ihrer patentrechtlich belasteten Natur MP4 und 3GP auf einigen Plattformen nicht unterstützt, werden die {{ HTMLElement("source") }}-Elemente mit den IDs "mp4_src" und "3gp_src" Error-Ereignisse empfangen, bevor die Ogg-Ressource geladen wird. Die Quellen werden in der Reihenfolge ausprobiert, in der sie erscheinen, und sobald eine erfolgreich geladen wird, werden die verbleibenden Quellen überhaupt nicht ausprobiert.

### Überprüfen, ob der Browser die bereitgestellten Formate unterstützt

Verwenden Sie die folgenden verifizierten Quellen innerhalb Ihrer Audio- und Videoelemente, um die Unterstützung zu überprüfen.

- Audio MP3 (`type="audio/mpeg"`): [http://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3](https://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3) ([spiele die MP3-Audio live ab](https://jsbin.com/gekatoge/1/edit).)
- Audio MP4 (`type="audio/mp4"`): [http://jPlayer.org/audio/m4a/Miaow-01-Tempered-song.m4a](https://jPlayer.org/audio/m4a/Miaow-01-Tempered-song.m4a) ([spiele die MP4-Audio live ab](https://jsbin.com/gekatoge/2/edit).)
- Audio Ogg (`type="audio/ogg"`): [http://jPlayer.org/audio/ogg/Miaow-01-Tempered-song.ogg](https://jPlayer.org/audio/ogg/Miaow-01-Tempered-song.ogg) ([spiele die OGG-Audio live ab](https://jsbin.com/gekatoge/4/edit).)
- Video MP4 (`type="video/mp4"`): [http://jPlayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v](https://jPlayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v) ([spiele das MP4-Video live ab](https://jsbin.com/gekatoge/5/edit).)
- Video WebM (`type="video/webm"`): [http://jPlayer.org/video/webm/Big_Buck_Bunny_Trailer.webm](https://jPlayer.org/video/webm/Big_Buck_Bunny_Trailer.webm) ([spiele das WebM-Video live ab](https://jsbin.com/gekatoge/6/edit).)
- Video Ogg (`type="video/ogg"`): [http://jPlayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv](https://jPlayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv) ([spiele das OGG-Video live ab](https://jsbin.com/gekatoge/7/edit).)

Wenn diese nicht abgespielt werden, unterstützt der von Ihnen getestete Browser das angegebene Format nicht. Erwägen Sie die Verwendung eines anderen Formats oder einer Alternative.

Wenn diese funktionieren, aber die von Ihnen bereitgestellten Dateien nicht, gibt es zwei mögliche Probleme:

#### 1. Der Medienserver liefert nicht die richtigen MIME-Typen mit der Datei

Obwohl dies normalerweise unterstützt wird, müssen Sie möglicherweise das Folgende zu Ihrer `.htaccess`-Datei des Medienservers hinzufügen.

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

Ihre Dateien könnten falsch codiert worden sein — versuchen Sie, die Codierung mit einem der folgenden Tools durchzuführen, die als ziemlich zuverlässig gelten:

- [Audacity](https://sourceforge.net/projects/audacity/) — Kostenlose Audio-Editor und Recorder
- [Miro](https://www.getmiro.com/) — Kostenfreier, Open-Source Musik- und Videoplayer
- [Handbrake](https://handbrake.fr/) — Open Source Video-Transcoder
- [Firefogg](http://www.firefogg.org/) — Video- und Audio-Codierung für Firefox
- [FFmpeg2](https://www.ffmpeg.org/) — Umfassender Kommandozeilen-Encoder
- [Vid.ly](https://m.vid.ly/) — Video-Player, Transkodierung und Lieferung
- [Internet Archive](https://archive.org/) — Kostenlose Transkodierung und Speicherung

### Erkennen, wenn keine Quellen geladen wurden

Um zu erkennen, dass alle Kind-{{ HTMLElement("source") }}-Elemente nicht geladen wurden, überprüfen Sie den Wert des `networkState`-Attributs des Medienelements. Wenn dies `HTMLMediaElement.NETWORK_NO_SOURCE` ist, wissen Sie, dass alle Quellen nicht geladen wurden.

Wenn Sie zu diesem Zeitpunkt eine weitere Quelle hinzufügen, indem Sie ein neues {{ HTMLElement("source") }}-Element als Kind des Medienelements einfügen, versucht Gecko, die angegebene Ressource zu laden.

### Anzeige von Fallback-Inhalten, wenn keine Quelle dekodiert werden konnte

Eine andere Möglichkeit, die Fallback-Inhalte eines Videos anzuzeigen, wenn keine der Quellen im aktuellen Browser dekodiert werden konnte, besteht darin, einen Fehlerbehandler für das letzte Quellenelement hinzuzufügen. Dann können Sie das Video mit seinem Fallback-Inhalt ersetzen:

```html
<video controls>
  <source src="dynamicsearch.mp4" type="video/mp4"></source>
  <a href="dynamicsearch.mp4">
    <img src="dynamicsearch.jpg" alt="Dynamic app search in Firefox OS">
  </a>
  <p>Click image to play a video demo of dynamic app search</p>
</video>
```

```js
const v = document.querySelector("video");
const sources = v.querySelectorAll("source");
const lastsource = sources[sources.length - 1];
lastsource.addEventListener(
  "error",
  (ev) => {
    const d = document.createElement("div");
    d.innerHTML = v.innerHTML;
    v.parentNode.replaceChild(d, v);
  },
  false,
);
```

## Audio/Video JavaScript-Bibliotheken

Es gibt eine Reihe von Audio- und Video-JavaScript-Bibliotheken. Die beliebtesten Bibliotheken ermöglichen es Ihnen, ein einheitliches Player-Design über alle Browser hinweg zu wählen und bieten einen Fallback für Browser, die Audio und Video nicht nativ unterstützen. Fallbacks haben historisch veraltete Plugins wie Adobe Flash oder Microsoft Silverlight verwendet, um einen Mediaplayer in nicht unterstützenden Browsern bereitzustellen, obwohl diese auf modernen Computern nicht mehr unterstützt werden. Andere Funktionen wie das [`<track>`](/de/docs/Web/HTML/Element/track) Element für Untertitel können auch durch Medienbibliotheken bereitgestellt werden.

### Nur Audio

- [SoundManager](https://www.schillmania.com/projects/soundmanager2/)
- [AmplitudeJS](https://521dimensions.com/open-source/amplitudejs)
- [HowlerJS](https://howlerjs.com/)

### Nur Video

- [flowplayer](https://flowplayer.com/): Gratis mit einem flowplayer-Logo-Wasserzeichen. Open Source (GPL lizenziert.)
- [JWPlayer](https://jwplayer.com/): Erfordert Registrierung zum Herunterladen. Open Source Edition (Creative Commons Lizenz.)
- [SublimeVideo](https://www.sublimevideo.net/): Erfordert Registrierung. Formularbasierte Einrichtung mit domain-spezifischem Link zu einer CDN-gehosteten Bibliothek.
- [Video.js](https://videojs.com/): Gratis und Open Source (Apache 2 lizenziert.)

### Audio und Video

- [jPlayer](https://jPlayer.org/): Gratis und Open Source (MIT lizenziert.)
- [mediaelement.js](https://www.mediaelementjs.com/): Gratis und Open Source (MIT lizenziert.)

### Web Audio API

- [AudioContext monkeypatch](https://github.com/cwilso/AudioContext-MonkeyPatch): Ein Polyfill für ältere Versionen der Web Audio API; Open Source (Apache 2 lizenziert.)

## Grundlegende Tutorials

- [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player)
  - : Ein Leitfaden zur Erstellung eines einfachen, plattformübergreifenden Videoplayers mit dem {{ htmlelement("video") }}-Element.
- [Grundlagen zur Video-Player-Stil ](/de/docs/Web/Media/Audio_and_video_delivery/Video_player_styling_basics)
  - : Mit dem in dem vorherigen Artikel implementierten plattformübergreifenden Videoplayer, behandelt dieser Artikel nun einige grundlegende, responsive Stile für den Player.
- [Grundlagen zur plattformübergreifenden Audio](/de/docs/Web/Media/Audio_and_video_delivery/Cross-browser_audio_basics)
  - : Dieser Artikel bietet einen grundlegenden Leitfaden zur Erstellung eines HTML-Audioplayers, der plattformübergreifend funktioniert, mit allen zugehörigen Attributen, Eigenschaften und Ereignissen sowie einer kurzen Anleitung zu benutzerdefinierten Steuerungen, die mit der Media-API erstellt werden.
- [Pufferung, Suchen und Zeitbereiche bei Medien](/de/docs/Web/Media/Audio_and_video_delivery/buffering_seeking_time_ranges)
  - : Manchmal ist es nützlich zu wissen, wie viel {{ htmlelement("audio") }} oder {{ htmlelement("video") }} heruntergeladen oder abspielbar ist, ohne Verzögerung — ein gutes Beispiel dafür ist die gepufferte Fortschrittsanzeige eines Audio- oder Videoplayers. Dieser Artikel behandelt, wie man eine Puffer-/Suchleiste mit [TimeRanges](/de/docs/Web/API/TimeRanges) und anderen Funktionen der Media-API erstellt.
- [HTML playbackRate erklärt](/de/docs/Web/Media/Audio_and_video_delivery/WebAudio_playbackRate_explained)
  - : Die `playbackRate`-Eigenschaft ermöglicht es uns, die Geschwindigkeit oder Rate zu ändern, mit der ein Stück Web-Audio oder Video abgespielt wird. Dieser Artikel erklärt es im Detail.
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
  - : Erklärt die Grundlagen der Verwendung der Web Audio API, um eine Audioquelle zu erfassen, zu manipulieren und wiederzugeben.

## Tutorials zu Streaming-Medien

- [Live-Streaming von Web-Audio und Video](/de/docs/Web/Media/Audio_and_video_delivery/Live_streaming_web_audio_and_video)
  - : Live-Streaming-Technologie wird oft verwendet, um Live-Ereignisse wie Sport, Konzerte und allgemein TV- und Radioprogramme zu übertragen, die live gesendet werden. Oft einfach nur Streamen genannt, ist Live-Streaming der Prozess der Übertragung von Medien 'live' an Computer und Geräte. Dies ist ein ziemlich komplexes und aufstrebendes Thema mit vielen Variablen, daher führen wir Sie in diesem Artikel in das Thema ein und erklären, wie Sie anfangen können.
- [Einrichten von adaptiven Streaming-Medienquellen](/de/docs/Web/Media/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources)
  - : Angenommen, Sie möchten eine adaptive Streaming-Medienquelle auf einem Server einrichten, damit sie in einem HTML-Medienelement wiedergegeben werden kann. Wie würde man das machen? Dieser Artikel erklärt, wie und behandelt zwei der gebräuchlichsten Formate: MPEG-DASH und HLS (HTTP Live Streaming).
- [DASH Adaptives Streaming für HTML5 Video](/de/docs/Web/Media/DASH_Adaptive_Streaming_for_HTML_5_Video)
  - : Erklärt, wie adaptives Streaming mit DASH und WebM eingerichtet wird.

## Fortgeschrittene Tutorials

- [Hinzufügen von Untertiteln und Beschriftungen zu HTML-Video](/de/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)
  - : Dieser Artikel erklärt, wie man Untertitel und Beschriftungen zu HTML-{{ htmlelement("video") }} hinzufügt, unter Verwendung des [Web_Video_Text_Tracks_Format](/de/docs/Web/API/WebVTT_API) und des {{ htmlelement("track") }}-Elements.
- [Web Audio API plattformübergreifende Unterstützung](/de/docs/Web/API/Web_Audio_API/Best_practices#cross_browser_legacy_support)
  - : Ein Leitfaden zum Schreiben von plattformübergreifendem Web Audio API-Code.
- [Einfache Audioaufnahme mit der MediaRecorder API](https://hacks.mozilla.org/2014/06/easy-audio-capture-with-the-mediarecorder-api/)
  - : Erklärt die Grundlagen der Verwendung der MediaStream Recording API zur direkten Aufnahme eines Medienstreams.

> [!NOTE]
> Firefox OS Versionen 1.3 und höher unterstützen das [RTSP](https://en.wikipedia.org/wiki/Real_Time_Streaming_Protocol)-Protokoll für die Video-Streaming-Bereitstellung. Eine alternative Lösung für ältere Versionen wäre die Verwendung von `<video>` zusammen mit einem geeigneten Format für Gecko (wie WebM), um Fallback-Inhalte bereitzustellen. Weitere Informationen werden zu gegebener Zeit veröffentlicht.

## Referenzen

- [Das Videoelement](/de/docs/Web/HTML/Element/video)
- [HTMLVideoElement API](/de/docs/Web/API/HTMLVideoElement)
- [MediaSource API](/de/docs/Web/API/MediaSource)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
- [getUserMedia](/de/docs/Web/API/MediaDevices/getUserMedia)
- [Ereignisreferenz > Medien](/de/docs/Web/Events#media)
