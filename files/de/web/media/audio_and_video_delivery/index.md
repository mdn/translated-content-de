---
title: Audio- und Videowiedergabe
slug: Web/Media/Audio_and_video_delivery
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{QuickLinksWithSubPages("/de/docs/Web/Media")}}

Wir können Audio und Video auf verschiedene Arten im Web bereitstellen, angefangen von 'statischen' Mediendateien bis hin zu adaptiven Live-Streams. Dieser Artikel dient als Ausgangspunkt, um die verschiedenen Bereitstellungsmechanismen von web-basierten Medien und deren Kompatibilität mit beliebten Browsern zu erkunden.

## Die Audio- und Video-Elemente

Egal, ob wir es mit vorab aufgezeichneten Audiodateien oder Live-Streams zu tun haben, bleibt der Mechanismus, um sie über die {{ htmlelement("audio") }}- und {{ htmlelement("video") }}-Elemente des Browsers bereitzustellen, weitgehend derselbe. Derzeit müssen wir zur Unterstützung aller Browser zwei Formate angeben, obwohl sich dies mit der Einführung von MP3- und MP4-Formaten in Firefox und Opera schnell ändert. Sie finden Kompatibilitätsinformationen im [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Formats).

Um Video und Audio bereitzustellen, folgt der allgemeine Arbeitsablauf in der Regel diesem Schema:

1. Überprüfen, welches Format der Browser über Feature-Detection unterstützt (normalerweise eine Auswahl aus zwei, wie oben erwähnt).
2. Wenn der Browser die Wiedergabe eines der bereitgestellten Formate nicht nativ unterstützt, entweder ein Standbild anzeigen oder eine Fallback-Technologie verwenden, um das Video darzustellen.
3. Entscheiden, wie Sie das Medium abspielen/initialisieren möchten (z. B. ein {{ htmlelement("video") }}-Element oder `document.createElement('video')` vielleicht?)
4. Das Mediendatei an den Player übergeben.

### HTML Audio

```html
<audio controls preload="auto">
  <source src="audiofile.mp3" type="audio/mpeg" />

  <!-- Fallback für Browser, die mp3 nicht unterstützen -->
  <source src="audiofile.ogg" type="audio/ogg" />

  <!-- Fallback für Browser, die das Audio-Tag nicht unterstützen -->
  <a href="audiofile.mp3">Audio herunterladen</a>
</audio>
```

Der obige Code erstellt einen Audioplayer, der versucht, so viel Audio wie möglich für eine reibungslose Wiedergabe vorzupuffern.

> [!NOTE]
> Das `preload`-Attribut kann von einigen mobilen Browsern ignoriert werden.

Für weitere Informationen siehe [Cross Browser Audio Basics (HTML Audio im Detail)](/de/docs/Web/Media/Audio_and_video_delivery/Cross-browser_audio_basics#html_audio_in_detail)

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

  <!-- Fallback für Browser, die mp4 nicht unterstützen -->
  <source src="videofile.webm" type="video/webm" />

  <!-- Angabe von Untertiteldateien -->
  <track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English" />
  <track
    src="subtitles_no.vtt"
    kind="subtitles"
    srclang="no"
    label="Norwegian" />

  <!-- Fallback für Browser, die das Video-Tag nicht unterstützen -->
  <a href="videofile.mp4">Video herunterladen</a>
</video>
```

Der obige Code erstellt einen Videoplayer mit den Abmessungen 640x480 Pixel, der ein Posterbild anzeigt, bis das Video abgespielt wird. Wir weisen das Video an, automatisch zu starten, aber von Haus aus stumm geschaltet zu sein.

> [!NOTE]
> Das `autoplay`-Attribut kann von einigen mobilen Browsern ignoriert werden. Außerdem kann die Autoplay-Funktion umstritten sein, wenn sie missbraucht wird. Es wird dringend empfohlen, dass Sie den [Autoplay-Leitfaden für Medien und Web-Audio-APIs](/de/docs/Web/Media/Autoplay_guide) lesen, um zu lernen, wie Sie Autoplay sinnvoll einsetzen.

Für weitere Informationen siehe [\<video\>-Element](/de/docs/Web/HTML/Element/video) und [Einen cross-browser Videoplayer erstellen](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player).

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

Wir setzen die Quelle des Audios in Abhängigkeit von dem Audio-Dateityp, den der Browser unterstützt, dann setzen wir den Wiedergabekopf auf 5 Sekunden und versuchen, es abzuspielen.

> [!NOTE]
> Die Wiedergabe wird von den meisten Browsern ignoriert, es sei denn, sie wird durch ein benutzerinitiiertes Ereignis ausgelöst.

Es ist auch möglich, einem {{ htmlelement("audio") }}-Element eine Base64-kodierte WAV-Datei zuzufügen, die es ermöglicht, Audio zu erzeugen:

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

Wir setzen die Quelle des Videos in Abhängigkeit von dem Videodateityp, den der Browser unterstützt, und legen dann die Breite und Höhe des Videos fest.

## Web Audio API

In diesem Beispiel rufen wir mit der {{domxref("Window/fetch", "fetch()")}}-API eine MP3-Datei ab, laden sie in eine Quelle und spielen sie ab.

```js
let audioCtx;
let buffer;
let source;

async function loadAudio() {
  try {
    // Eine Audiodatei laden
    const response = await fetch("viper.mp3");
    // Dekodieren
    buffer = await audioCtx.decodeAudioData(await response.arrayBuffer());
  } catch (err) {
    console.error(`Das Abrufen der Audiodatei ist fehlgeschlagen. Fehler: ${err.message}`);
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

Weitere Informationen zu den Grundlagen der Web Audio API finden Sie unter [Using the Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API).

## getUserMedia / Stream API

Es ist auch möglich, einen Live-Stream von einer Webcam und/oder einem Mikrofon mit `getUserMedia` und der Stream-API zu empfangen. Dies ist Teil einer breiteren Technologie, die als WebRTC (Web Real-Time Communications) bekannt ist und mit den neuesten Versionen von Chrome, Firefox und Opera kompatibel ist.

Um den Stream von Ihrer Webcam zu erfassen, richten Sie zunächst ein {{htmlelement("video")}}-Element ein:

```html
<video id="webcam" width="480" height="360"></video>
```

Als nächstes, falls unterstützt, verbinden Sie die Webcam-Quelle mit dem Videoelement:

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
        "Es gab ein Problem beim Abrufen der Streams - führen Sie die Anwendung im Dateipfad aus oder haben Sie den Zugriff verweigert?",
      );
    });
} else {
  alert("getUserMedia wird in diesem Browser nicht unterstützt.");
}
```

Weitere Informationen finden Sie auf unserer {{domxref("MediaDevices.getUserMedia")}}-Seite.

## Mediastream-Aufnahme

Neue Standards werden eingeführt, um Ihrem Browser zu ermöglichen, Medien von Mikrofon oder Kamera mit `getUserMedia` zu ergreifen und sie sofort mit der neuen MediaStream Recording API aufzunehmen. Sie nehmen den Stream, den Sie von `getUserMedia` erhalten, übergeben ihn an ein `MediaRecorder`-Objekt und fügen die resultierende Ausgabe an Ihre Audio- oder Videoquelle an.

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
      throw e.error || new Error(e.name); // e.name ist ein FF non-spec
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

Siehe [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) für mehr Details.

## Media Source Extensions (MSE)

[Media Source Extensions](https://w3c.github.io/media-source/) ist ein W3C-Arbeitsentwurf, der plant, {{domxref("HTMLMediaElement")}} zu erweitern, um JavaScript zu ermöglichen, Medienstreams zur Wiedergabe zu generieren. Die Möglichkeit für JavaScript, Streams zu erzeugen, erleichtert eine Vielzahl von Anwendungsfällen wie adaptives Streaming und Timeshift-Live-Streams.

### Verschlüsselte Medienerweiterungen (EME)

[Verschlüsselte Medienerweiterungen](https://w3c.github.io/encrypted-media/) ist ein W3C-Vorschlag zur Erweiterung des `HTMLMediaElement`, der APIs bereitstellt, um die Wiedergabe von geschütztem Inhalt zu steuern.

Die API unterstützt Anwendungsfälle von einfacher Clear-Key-Entschlüsselung bis hin zu hochwertigen Videos (bei entsprechender Benutzeragenten-Implementierung). Der Lizenz-/Schlüsselaustausch wird von der Anwendung gesteuert, was die Entwicklung robuster Wiedergabeanwendungen unterstützt, die eine Reihe von Inhaltsentschlüsselungs- und Schutztechnologien unterstützen.

Einer der Hauptverwendungszwecke von EME ist es, Browsern zu ermöglichen, DRM ([Digital Rights Management](https://en.wikipedia.org/wiki/Digital_rights_management)) zu implementieren, um zu verhindern, dass webbasiertem Inhalt (insbesondere Video) kopiert wird.

### Adaptives Streaming

Neue Formate und Protokolle werden eingeführt, um adaptives Streaming zu ermöglichen. Adaptives Streaming bedeutet, dass die Bandbreite und typischerweise die Qualität des Streams in Echtzeit in Reaktion auf die verfügbare Bandbreite des Nutzers geändert werden kann. Adaptives Streaming wird häufig zusammen mit Live-Streaming verwendet, wo eine reibungslose Bereitstellung von Audio oder Video von entscheidender Bedeutung ist.

Die Hauptformate, die für adaptives Streaming verwendet werden, sind [HLS](/de/docs/Web/Media/Audio_and_video_delivery/Live_streaming_web_audio_and_video#hls) und [MPEG-DASH](/de/docs/Web/Media/Audio_and_video_delivery/Live_streaming_web_audio_and_video#mpeg-dash). MSE wurde mit DASH im Kopf entwickelt. MSE definiert Byte-Streams gemäß [ISOBMFF](https://dvcs.w3.org/hg/html-media/raw-file/tip/media-source/isobmff-byte-stream-format.html) und [M2TS](https://en.wikipedia.org/wiki/M2ts) (beide in DASH unterstützt, letztere unterstützt in HLS). Allgemein gesagt, wenn Sie sich für Standards interessieren, Flexibilität suchen oder die meisten modernen Browser unterstützen möchten, sind Sie wahrscheinlich mit DASH besser dran.

> [!NOTE]
> Aktuell unterstützt Safari DASH nicht, obwohl dash.js in neueren Versionen von Safari funktionieren wird, die mit OSX Yosemite geplant sind.

DASH bietet auch eine Reihe von Profilen, einschließlich einfacher On-Demand-Profile, die keine Vorverarbeitung und Aufteilung von Mediendateien erfordern. Es gibt auch eine Reihe von Cloud-basierten Diensten, die Ihre Medien in HLS und DASH konvertieren können.

Für weitere Informationen siehe [Live streaming web audio and video](/de/docs/Web/Media/Audio_and_video_delivery/Live_streaming_web_audio_and_video).

## Anpassung Ihres Mediaplayers

Vielleicht wollen Sie, dass Ihr Audio- oder Videoplayer in allen Browsern ein einheitliches Aussehen hat oder möchten ihn einfach an das Design Ihrer Seite anpassen. Die allgemeine Technik, dies zu erreichen, besteht darin, das `controls`-Attribut wegzulassen, damit die Standardbrowser-Steuerelemente nicht angezeigt werden, eigene Steuerelemente mit HTML und CSS zu erstellen und dann JavaScript zu verwenden, um Ihre Steuerelemente mit der Audio-/Video-API zu verknüpfen.

Wenn Sie etwas Extras brauchen, ist es möglich, Funktionen hinzuzufügen, die in den Standard-Playern derzeit nicht vorhanden sind, wie Wiedergaberate, Qualitätsstromschalter oder sogar Audiospektren. Sie können auch entscheiden, wie Sie Ihren Player responsiv machen – zum Beispiel könnten Sie die Fortschrittsleiste unter bestimmten Bedingungen entfernen.

Sie können Klick-, Touch- und/oder Tastaturereignisse erkennen, um Aktionen wie Abspielen, Pausieren und Scrubbing auszulösen. Es ist oft wichtig, die Tastatursteuerung aus Gründen des Benutzerkomforts und der Zugänglichkeit zu behalten.

Ein schnelles Beispiel – richten Sie zuerst Ihr Audio und Ihre benutzerdefinierten Steuerelemente in HTML ein:

```html
<audio
  id="my-audio"
  src="http://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3"></audio>
<button id="my-control">spielen</button>
```

fügen Sie ein bisschen JavaScript hinzu, um Ereignisse zu erkennen, um das Audio abzuspielen und zu pausieren:

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
      myControl.textContent = "spielen";
    }
  }

  function checkKey(e) {
    if (e.code === "Space") {
      // Leertaste
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

Sie können [dieses Beispiel hier ausprobieren](https://jsbin.com/jujeladu/2/edit). Für weitere Informationen siehe [Erstellen Ihres eigenen benutzerdefinierten Audioproduktors](/de/docs/Web/Media/Audio_and_video_delivery/Cross-browser_audio_basics#creating_your_own_custom_audio_player).

## Weitere Tipps für Audio/Video

### Stoppen der Medien-Downloads

Während das Stoppen der Wiedergabe von Medien einfach durch Aufrufen der `pause()`-Methode des Elements erfolgt, lädt der Browser die Medien weiter herunter, bis das Medienelement durch die Speicherbereinigung entsorgt wird.

Hier ist ein Trick, der den Download sofort stoppt:

```js
const mediaElement = document.querySelector("#myMediaElementID");
mediaElement.removeAttribute("src");
mediaElement.load();
```

Durch Entfernen des `src`-Attributs des Medienelements und Aufrufen der `load()`-Methode werden die dem Video zugehörigen Ressourcen freigegeben, wodurch der Netzdatenverkehr gestoppt wird. Sie müssen `load()` nach Entfernen des Attributs aufrufen, da nur das Entfernen des `src`-Attributs nicht den Ladealgorithmus auslöst. Wenn das `<video>`-Element auch `<source>`-Elementnachkommer hat, sollten diese ebenfalls entfernt werden, bevor `load()` aufgerufen wird.

Beachten Sie, dass das Setzen des `src`-Attributs auf einen leeren Zeichenfolgenwert tatsächlich dazu führt, dass der Browser es so behandelt, als ob Sie eine Videoquelle auf einen relativen Pfad einstellen. Dies führt dazu, dass der Browser einen weiteren Download versucht, wobei es unwahrscheinlich ist, dass es sich um ein gültiges Video handelt.

### Suchen in Medien

Medienelemente bieten Unterstützung dafür, die aktuelle Wiedergabeposition zu bestimmten Punkten im Inhalt der Medien zu verschieben. Dies geschieht durch Setzen des Wertes der `currentTime`-Eigenschaft des Elements; siehe {{ domxref("HTMLMediaElement") }} für weitere Einzelheiten zu den Eigenschaften des Elements. Setzen Sie den Wert auf die Zeit in Sekunden, zu der Sie mit der Wiedergabe fortfahren möchten.

Sie können die `seekable`-Eigenschaft des Elements verwenden, um die Bereiche der Medien zu bestimmen, die derzeit verfügbar sind, um zu diesen zu navigieren. Dies gibt ein {{ domxref("TimeRanges") }}-Objekt zurück, das die Zeitbereiche auflistet, zu denen Sie springen können.

```js
const mediaElement = document.querySelector("#mediaElementID");
mediaElement.seekable.start(0); // Gibt die Startzeit (in Sekunden) zurück
mediaElement.seekable.end(0); // Gibt die Endzeit (in Sekunden) zurück
mediaElement.currentTime = 122; // Springt zu 122 Sekunden
mediaElement.played.end(0); // Gibt die Anzahl der Sekunden zurück, die der Browser abgespielt hat
```

### Festlegen des Wiedergabebereichs

Wenn Sie die URI von Medien für ein {{ HTMLElement("audio") }}- oder {{ HTMLElement("video") }}-Element angeben, können Sie optional zusätzliche Informationen hinzufügen, um den Teil der Medien anzugeben, der abgespielt werden soll. Fügen Sie dazu ein Rautezeichen ("#") gefolgt von der Medienfragmentbeschreibung hinzu.

Ein Zeitbereich wird mit der Syntax angegeben:

```plain
#t=[starttime][,endtime]
```

Die Zeit kann als Anzahl von Sekunden (als Gleitkommawert) oder als Stunden/Minuten/Sekunden-Zeit mit Doppelpunkten angegeben werden (z. B. 2:05:01 für 2 Stunden, 5 Minuten und 1 Sekunde).

Einige Beispiele:

- `http://example.com/video.ogv#t=10,20`
  - : Gibt an, dass das Video den Bereich 10 Sekunden bis 20 Sekunden abspielen soll.
- `http://example.com/video.ogv#t=,10.5`
  - : Gibt an, dass das Video vom Anfang bis einschließlich 10,5 Sekunden abspielen soll.
- `http://example.com/video.ogv#t=,02:00:00`
  - : Gibt an, dass das Video vom Anfang bis einschließlich zwei Stunden abspielen soll.
- `http://example.com/video.ogv#t=60`
  - : Gibt an, dass das Video bei 60 Sekunden beginnen und bis zum Ende des Videos abspielen soll.

## Fehlerbehandlung

Fehler werden an die untergeordneten {{ HTMLElement("source") }}-Elemente geliefert, die den Fehler verursacht haben.

Dies lässt Sie erkennen, welche Quellen nicht geladen wurden, was nützlich sein kann. Betrachten Sie dieses HTML:

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

Da Firefox MP4 und 3GP auf einigen Plattformen aufgrund ihrer patentbehafteten Natur nicht unterstützt, erhalten die {{ HTMLElement("source") }}-Elemente mit den IDs "mp4_src" und "3gp_src" `error`-Ereignisse, bevor die Ogg-Ressource geladen wird. Die Quellen werden in der Reihenfolge ausprobiert, in der sie erscheinen, und sobald eine erfolgreich geladen wird, werden die verbleibenden Quellen überhaupt nicht mehr versucht.

### Überprüfen, ob der Browser die bereitgestellten Formate unterstützt

Verwenden Sie die folgenden verifizierten Quellen innerhalb Ihrer Audio- und Videoelemente, um die Unterstützung zu prüfen.

- Audio MP3 (`type="audio/mpeg"`): [http://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3](https://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3) ([MP3-Audio live abspielen](https://jsbin.com/gekatoge/1/edit).)
- Audio MP4 (`type="audio/mp4"`): [http://jPlayer.org/audio/m4a/Miaow-01-Tempered-song.m4a](https://jPlayer.org/audio/m4a/Miaow-01-Tempered-song.m4a) ([MP4-Audio live abspielen](https://jsbin.com/gekatoge/2/edit).)
- Audio Ogg (`type="audio/ogg"`): [http://jPlayer.org/audio/ogg/Miaow-01-Tempered-song.ogg](https://jPlayer.org/audio/ogg/Miaow-01-Tempered-song.ogg) ([OGG-Audio live abspielen](https://jsbin.com/gekatoge/4/edit).)
- Video MP4 (`type="video/mp4"`): [http://jPlayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v](https://jPlayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v) ([MP4-Video live abspielen](https://jsbin.com/gekatoge/5/edit).)
- Video WebM (`type="video/webm"`): [http://jPlayer.org/video/webm/Big_Buck_Bunny_Trailer.webm](https://jPlayer.org/video/webm/Big_Buck_Bunny_Trailer.webm) ([WebM-Video live abspielen](https://jsbin.com/gekatoge/6/edit).)
- Video Ogg (`type="video/ogg"`): [http://jPlayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv](https://jPlayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv) ([OGG-Video live abspielen](https://jsbin.com/gekatoge/7/edit).)

Falls diese nicht abgespielt werden können, unterstützt der Browser, den Sie testen, das angegebene Format nicht. Erwägen Sie, ein anderes Format zu verwenden oder ein Fallback zu implementieren.

Wenn diese funktionieren, aber die von Ihnen bereitgestellten Dateien nicht, gibt es zwei mögliche Probleme:

#### 1. Der Medienserver liefert die falschen Mimetypen mit der Datei

Auch wenn dies normalerweise unterstützt wird, müssen Sie möglicherweise die folgenden Einträge in die `.htaccess`-Datei Ihres Medienservers hinzufügen.

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

Ihre Dateien wurden möglicherweise falsch kodiert — versuchen Sie, eine der folgenden bewährten Tools zum Encodieren zu verwenden:

- [Audacity](https://sourceforge.net/projects/audacity/) — Kostenloser Audio-Editor und -Rekorder
- [Miro](https://www.getmiro.com/) — Kostenloser, quelloffener Musik- und Video-Player
- [Handbrake](https://handbrake.fr/) — Open-Source Video-Transcoder
- [Firefogg](http://www.firefogg.org/) — Video- und Audio-Encoding für Firefox
- [FFmpeg2](https://www.ffmpeg.org/) — Umfangreicher Kommandozeilen-Encoder
- [Vid.ly](https://m.vid.ly/) — Video-Player, Transcodierung und Lieferung
- [Internet Archive](https://archive.org/) — Kostenlose Transcodierung und Speicherung

### Erkennen, wenn keine Quellen geladen wurden

Um zu erkennen, dass alle untergeordneten {{ HTMLElement("source") }}-Elemente nicht geladen wurden, überprüfen Sie den Wert des `networkState`-Attributs des Medienelements. Wenn dieser `HTMLMediaElement.NETWORK_NO_SOURCE` ist, wissen Sie, dass alle Quellen nicht geladen werden konnten.

Falls Sie zu diesem Zeitpunkt eine weitere Quelle hinzufügen, indem Sie ein neues {{ HTMLElement("source") }}-Element als Kind des Medienelements einfügen, versucht Gecko, die angegebene Ressource zu laden.

### Anzeigen von Fallback-Inhalten, wenn keine Quelle dekodiert werden konnte

Eine andere Möglichkeit, die Fallback-Inhalte eines Videos anzuzeigen, wenn keine der Quellen im aktuellen Browser dekodiert werden konnte, besteht darin, einen Fehler-Handler für das letzte Source-Element hinzuzufügen. Dann können Sie das Video durch den Fallback-Inhalt ersetzen:

```html
<video controls>
  <source src="dynamicsearch.mp4" type="video/mp4"></source>
  <a href="dynamicsearch.mp4">
    <img src="dynamicsearch.jpg" alt="Dynamic app search in Firefox OS">
  </a>
  <p>Klicken Sie auf das Bild, um ein Videodemo der dynamischen App-Suche abzuspielen</p>
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

## Audio-/Video-JavaScript-Bibliotheken

Es existieren eine Reihe von JavaScript-Bibliotheken für Audio und Video. Die beliebtesten Bibliotheken ermöglichen es, ein einheitliches Player-Design über alle Browser hinweg zu wählen und bieten eine Fallback-Lösung für Browser, die Audio und Video nicht nativ unterstützen. Fallbacks nutzten historisch gesehen veraltete Plug-ins wie Adobe Flash oder Microsoft Silverlight, um in nicht unterstützten Browsern einen Mediaplayer bereitzustellen, obwohl diese auf modernen Computern nicht mehr unterstützt werden. Andere Funktionen wie das [`<track>`](/de/docs/Web/HTML/Element/track)-Element für Untertitel können ebenfalls durch Mediatheken bereitgestellt werden.

### Nur Audio

- [SoundManager](https://www.schillmania.com/projects/soundmanager2/)
- [AmplitudeJS](https://521dimensions.com/open-source/amplitudejs)
- [HowlerJS](https://howlerjs.com/)

### Nur Video

- [flowplayer](https://flowplayer.com/): Kostenlos mit einem Flowplayer-Logo-Wasserzeichen. Open Source (GPL-lizenziert.)
- [JWPlayer](https://jwplayer.com/): Registrierung erforderlich zum Herunterladen. Open Source Edition (Creative Commons License.)
- [SublimeVideo](https://www.sublimevideo.net/): Registrierung erforderlich. Formularbasierte Einrichtung mit domainspezifischem Link zur CDN-gehosteten Bibliothek.
- [Video.js](https://videojs.com/): Kostenlos und Open Source (Apache 2 Licensed.)

### Audio und Video

- [jPlayer](https://jPlayer.org/): Kostenlos und Open Source (MIT Licensed.)
- [mediaelement.js](https://www.mediaelementjs.com/): Kostenlos und Open Source (MIT Licensed.)

### Web Audio API

- [AudioContext monkeypatch](https://github.com/cwilso/AudioContext-MonkeyPatch): Ein Polyfill für ältere Versionen der Web Audio API; Open Source (Apache 2 Licensed.)

## Grundlegende Tutorials

- [Einen cross-browser Videoplayer erstellen](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player)
  - : Ein Leitfaden zur Erstellung eines grundlegenden cross-browser Videoplayers mit dem {{ htmlelement("video") }}-Element.
- [Videoplayer-Styling-Grundlagen](/de/docs/Web/Media/Audio_and_video_delivery/Video_player_styling_basics)
  - : Mit dem im vorherigen Artikel eingeführten cross-browser Videoplayer wirft dieser Artikel nun einen Blick darauf, wie einige grundlegende, responsive Stile für den Player bereitgestellt werden können.
- [Cross-browser Audio-Basics](/de/docs/Web/Media/Audio_and_video_delivery/Cross-browser_audio_basics)
  - : Dieser Artikel bietet einen grundlegenden Leitfaden zur Erstellung eines HTML-AudioPlayers, der browserübergreifend funktioniert, mit allen zugehörigen Attributen, Eigenschaften und Ereignissen erklärt und einem kurzen Leitfaden zu benutzerdefinierten Steuerungen, die mit der Media-API erstellt werden.
- [Media-Buffering, -Seeking und -Zeiträume](/de/docs/Web/Media/Audio_and_video_delivery/buffering_seeking_time_ranges)
  - : Manchmal ist es nützlich zu wissen, wie viel {{ htmlelement("audio") }} oder {{ htmlelement("video") }} heruntergeladen oder ohne Verzögerung abspielbar ist — ein gutes Beispiel dafür ist die gepufferte Fortschrittsleiste eines Audio- oder Videoplayers. Dieser Artikel behandelt, wie man eine Buffer-/Seek-Leiste mit [TimeRanges](/de/docs/Web/API/TimeRanges) erstellt, und andere Funktionen der Media-API.
- [HTML playbackRate erklärt](/de/docs/Web/Media/Audio_and_video_delivery/WebAudio_playbackRate_explained)
  - : Die `playbackRate`-Eigenschaft ermöglicht es uns, die Geschwindigkeit oder Rate zu ändern, mit der ein Stück Web-Audio oder -Video abgespielt wird. Dieser Artikel erklärt es im Detail.
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
  - : Erläutert die Grundlagen der Verwendung der Web Audio API, um eine Audioquelle zu erfassen, zu manipulieren und abzuspielen.

## Streaming-Media-Tutorials

- [Live Streaming von Web-Audio und -Video](/de/docs/Web/Media/Audio_and_video_delivery/Live_streaming_web_audio_and_video)
  - : Live-Streaming-Technologie wird oft eingesetzt, um Live-Ereignisse wie Sport, Konzerte und allgemein TV- und Radioprogramme, die live ausgestrahlt werden, zu übertragen. Oft auf einfaches Streaming verkürzt, ist Live-Streaming der Prozess der Übertragung von Medien 'live' auf Computer und Geräte. Dies ist ein ziemlich komplexes und neu aufkommendes Thema mit vielen Variablen, daher werden wir Ihnen in diesem Artikel das Thema näher bringen und Ihnen zeigen, wie Sie loslegen können.
- [Einrichten von adaptiven Streaming-Medienquellen](/de/docs/Web/Media/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources)
  - : Angenommen, Sie möchten eine adaptive Streaming-Medienquelle auf einem Server einrichten, um in einem HTML-Media-Element konsumiert zu werden. Wie würden Sie das tun? Dieser Artikel erklärt, wie, indem er auf zwei der bekanntesten Formate eingeht: MPEG-DASH und HLS (HTTP Live Streaming.)
- [DASH-Adaptives Streaming für HTML 5 Video](/de/docs/Web/Media/DASH_Adaptive_Streaming_for_HTML_5_Video)
  - : Beschreibt, wie adaptives Streaming mit DASH und WebM eingerichtet werden kann.

## Fortgeschrittene Tutorials

- [Hinzufügen von Untertiteln zu HTML-Video](/de/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)
  - : Dieser Artikel erklärt, wie Sie Untertitel und Untertitel zu HTML {{ htmlelement("video") }} hinzufügen, unter Verwendung von [Web_Video_Text_Tracks_Format](/de/docs/Web/API/WebVTT_API) und dem {{ htmlelement("track") }}-Element.
- [Web Audio API Cross-Browser-Unterstützung](/de/docs/Web/API/Web_Audio_API/Best_practices#cross_browser_legacy_support)
  - : Ein Leitfaden zum Schreiben von Cross-Browser-Web-Audio-API-Code.
- [Einfache Audioaufnahme mit der MediaRecorder-API](https://hacks.mozilla.org/2014/06/easy-audio-capture-with-the-mediarecorder-api/)
  - : Erklärt die Grundlagen der Verwendung der MediaStream Recording API zur direkten Aufnahme eines Medienstroms.

> [!NOTE]
> Die Firefox OS-Versionen 1.3 und höher unterstützen das [RTSP](https://en.wikipedia.org/wiki/Real_Time_Streaming_Protocol)-Protokoll für das Streaming von Videowiedergabe. Eine Fallback-Lösung für ältere Versionen wäre die Verwendung von `<video>` zusammen mit einem geeigneten Gecko-Format (wie WebM), um Fallback-Inhalte zu servieren. Weitere Informationen werden in naher Zukunft veröffentlicht.

## Referenzen

- [Das Videotag](/de/docs/Web/HTML/Element/video)
- [HTMLVideoElement API](/de/docs/Web/API/HTMLVideoElement)
- [MediaSource API](/de/docs/Web/API/MediaSource)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [MediaStream Aufnahme API](/de/docs/Web/API/MediaStream_Recording_API)
- [getUserMedia](/de/docs/Web/API/MediaDevices/getUserMedia)
- [Ereignisreferenz > Medien](/de/docs/Web/Events#media)
