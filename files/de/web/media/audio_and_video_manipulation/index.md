---
title: Audio- und Videomanipulation
slug: Web/Media/Audio_and_video_manipulation
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{QuickLinksWithSubPages("/de/docs/Web/Media")}}

Der Reiz des Webs liegt darin, dass Sie Technologien kombinieren können, um neue Formen zu schaffen. Da Audio und Video im Browser nativ verfügbar sind, können wir diese Datenströme mit Technologien wie {{htmlelement("canvas")}}, [WebGL](/de/docs/Web/API/WebGL_API) oder [Web Audio API](/de/docs/Web/API/Web_Audio_API) direkt bearbeiten, zum Beispiel um Nachhall-/Kompressionseffekte zu Audio oder Graustufen-/Sepiafilter zu Video hinzuzufügen. Dieser Artikel bietet eine Referenz, die erklärt, was Sie dazu tun müssen.

## Videomanipulation

Die Fähigkeit, die Pixelwerte von jedem Frame eines Videos zu lesen, kann sehr nützlich sein.

### Video und Canvas

Das {{htmlelement("canvas")}}-Element bietet eine Fläche zum Zeichnen von Grafiken auf Webseiten; es ist sehr leistungsstark und kann eng mit Video gekoppelt werden.

Die allgemeine Technik besteht darin:

1. Ein Frame vom {{htmlelement("video")}}-Element zum {{htmlelement("canvas")}}-Element zu schreiben.
2. Die Daten vom `<canvas>`-Element zu lesen und zu bearbeiten.
3. Die bearbeiteten Daten auf Ihr "Anzeige"-`<canvas>` zu schreiben (das effektiv dasselbe Element sein kann).
4. Anhalten und Wiederholen.

Zum Beispiel wollen wir ein Video verarbeiten, um es in Graustufen darzustellen. In diesem Fall zeigen wir sowohl das Quellvideo als auch die ausgegebenen Graustufen-Frames. Normalerweise, wenn Sie eine "Video in Graustufen abspielen"-Funktion implementieren würden, würden Sie wahrscheinlich `display: none` zum Stil des `<video>`-Elements hinzufügen, um das Quellvideo davon abzuhalten, auf dem Bildschirm gezeichnet zu werden, während nur das Canvas mit den veränderten Bildern angezeigt wird.

#### HTML

Wir können unseren Videoplayer und das `<canvas>`-Element folgendermaßen einrichten:

```html
<video id="my-video" controls width="480" height="270" crossorigin="anonymous">
  <source
    src="https://jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm"
    type="video/webm" />
  <source
    src="https://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v"
    type="video/mp4" />
</video>

<canvas id="my-canvas" width="480" height="270"></canvas>
```

#### JavaScript

Dieser Code bearbeitet die Frames.

```js
const processor = {
  timerCallback() {
    if (this.video.paused || this.video.ended) {
      return;
    }
    this.computeFrame();
    setTimeout(() => {
      this.timerCallback();
    }, 16); // ungefähr 60 Bilder pro Sekunde
  },

  doLoad() {
    this.video = document.getElementById("my-video");
    this.c1 = document.getElementById("my-canvas");
    this.ctx1 = this.c1.getContext("2d");

    this.video.addEventListener(
      "play",
      () => {
        this.width = this.video.width;
        this.height = this.video.height;
        this.timerCallback();
      },
      false,
    );
  },

  computeFrame() {
    this.ctx1.drawImage(this.video, 0, 0, this.width, this.height);
    const frame = this.ctx1.getImageData(0, 0, this.width, this.height);
    const l = frame.data.length / 4;

    for (let i = 0; i < l; i++) {
      const grey =
        (frame.data[i * 4 + 0] +
          frame.data[i * 4 + 1] +
          frame.data[i * 4 + 2]) /
        3;

      frame.data[i * 4 + 0] = grey;
      frame.data[i * 4 + 1] = grey;
      frame.data[i * 4 + 2] = grey;
    }
    this.ctx1.putImageData(frame, 0, 0);

    return;
  },
};
```

Sobald die Seite geladen ist, können Sie

```js
processor.doLoad();
```

aufrufen.

#### Ergebnis

{{EmbedLiveSample("Video_and_canvas", '100%', 580)}}

Dies ist ein ziemlich einfaches Beispiel dafür, wie man Videoframes mit Hilfe eines Canvas manipuliert. Aus Effizienzgründen sollten Sie überlegen, {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}} anstelle von `setTimeout()` in Browsern zu verwenden, die es unterstützen.

Sie können dasselbe Ergebnis erzielen, indem Sie die {{cssxref("filter-function/grayscale", "grayscale()")}} CSS-Funktion auf das Quell-`<video>`-Element anwenden.

> [!NOTE]
> Aufgrund möglicher Sicherheitsprobleme, wenn Ihr Video auf einer anderen Domain als Ihr Code liegt, müssen Sie [CORS (Cross Origin Resource Sharing)](/de/docs/Web/HTTP/CORS) auf Ihrem Videoserver aktivieren.

### Video und WebGL

[WebGL](/de/docs/Web/API/WebGL_API) ist eine leistungsstarke API, die Canvas verwendet, um hardwarebeschleunigte 3D- oder 2D-Szenen zu zeichnen. Sie können WebGL und das {{htmlelement("video")}}-Element kombinieren, um Videotexturen zu erstellen, was bedeutet, dass Sie Video in 3D-Szenen einbetten können.

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample8/index.html', 670, 510) }}

> [!NOTE]
> Sie können den [Quellcode dieses Demos auf GitHub](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample8) ([sehen Sie es live](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample8/) auch) finden.

### Wiedergabegeschwindigkeit

Wir können auch die Geschwindigkeit anpassen, mit der Audio und Video wiedergegeben werden, indem wir ein Attribut des {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elements namens {{domxref("HTMLMediaElement.playbackRate", "playbackRate")}} verwenden. `playbackRate` ist eine Zahl, die ein Vielfaches darstellt, das auf die Wiedergabegeschwindigkeit angewendet wird, z.B. steht 0.5 für halbe Geschwindigkeit, während 2 für doppelte Geschwindigkeit steht.

Beachten Sie, dass die `playbackRate`-Eigenschaft sowohl mit `<audio>` als auch `<video>` funktioniert, aber in beiden Fällen ändert sie die Wiedergabegeschwindigkeit, jedoch _nicht_ die Tonhöhe. Um die Tonhöhe des Audios zu manipulieren, müssen Sie die Web Audio API verwenden. Siehe die {{domxref("AudioBufferSourceNode.playbackRate")}}-Eigenschaft.

#### HTML

```html
<video
  id="my-video"
  controls
  src="https://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v"></video>
```

#### JavaScript

```js
const myVideo = document.getElementById("my-video");
myVideo.playbackRate = 2;
```

#### Editierbares Beispiel

```html hidden
<video id="my-video" controls width="480" height="270">
  <source
    src="https://jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm"
    type="video/webm" />
  <source
    src="https://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v"
    type="video/mp4" />
</video>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
const myVideo = document.getElementById('my-video');
myVideo.playbackRate = 2;</textarea
>
```

```js hidden
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const edit = document.getElementById("edit");
const code = textarea.value;

function setPlaybackRate() {
  eval(textarea.value);
}

reset.addEventListener("click", () => {
  textarea.value = code;
  setPlaybackRate();
});

edit.addEventListener("click", () => {
  textarea.focus();
});

textarea.addEventListener("input", setPlaybackRate);
window.addEventListener("load", setPlaybackRate);
```

{{ EmbedLiveSample('Editable_example', 700, 450) }}

> [!NOTE]
> Probieren Sie das [playbackRate-Beispiel](https://jsbin.com/qomuvefu/2/edit) live aus.

## Audiomanipulation

Abgesehen von `playbackRate` verwenden Sie typischerweise die [Web Audio API](/de/docs/Web/API/Web_Audio_API), um Audio zu manipulieren.

### Auswahl einer Audioquelle

Die Web Audio API kann Audio von einer Vielzahl von Quellen empfangen, es dann verarbeiten und es an einen {{domxref("AudioDestinationNode")}} zurücksenden, der das Ausgabegerät darstellt, an das der Ton nach der Verarbeitung gesendet wird.

| Wenn die Audioquelle ist…                                                                                                                                               | Verwenden Sie diesen Web Audio-Knotentyp         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| Ein Audiotrack von einem HTML {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element                                                                            | {{domxref("MediaElementAudioSourceNode")}}      |
| Ein einfacher Roh-Audiodatenpuffer im Speicher                                                                                                                           | {{domxref("AudioBufferSourceNode")}}            |
| Ein Oszillator, der eine Sinuswelle oder eine andere berechnete Wellenform erzeugt                                                                                      | {{domxref("OscillatorNode")}}                   |
| Ein Audiotrack von [WebRTC](/de/docs/Web/API/WebRTC_API) (wie das Mikrofoneingangssignal, das Sie mit {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} erhalten können.) | {{domxref("MediaStreamAudioSourceNode")}}      |

### Audiofilter

Die Web Audio API bietet viele verschiedene Filter/Effekte, die auf Audio angewendet werden können, beispielsweise mit dem {{domxref("BiquadFilterNode")}}.

#### HTML

```html
<video id="my-video" controls src="myvideo.mp4" type="video/mp4"></video>
```

#### JavaScript

```js
const context = new AudioContext();
const audioSource = context.createMediaElementSource(
  document.getElementById("my-video"),
);
const filter = context.createBiquadFilter();
audioSource.connect(filter);
filter.connect(context.destination);

// Konfigurieren des Filters
filter.type = "lowshelf";
filter.frequency.value = 1000;
filter.gain.value = 25;
```

#### Editierbares Beispiel

```html hidden
<video id="my-video" controls width="480" height="270" crossorigin="anonymous">
  <source
    src="https://jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm"
    type="video/webm" />
  <source
    src="https://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v"
    type="video/mp4" />
</video>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
  filter.type = "lowshelf";
  filter.frequency.value = 1000;
  filter.gain.value = 25;
</textarea>
```

```js hidden
const context = new AudioContext();
const audioSource = context.createMediaElementSource(
  document.getElementById("my-video"),
);
const filter = context.createBiquadFilter();
audioSource.connect(filter);
filter.connect(context.destination);

const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const edit = document.getElementById("edit");
const code = textarea.value;

function setFilter() {
  eval(textarea.value);
}

reset.addEventListener("click", () => {
  textarea.value = code;
  setFilter();
});

edit.addEventListener("click", () => {
  textarea.focus();
});

textarea.addEventListener("input", setFilter);
window.addEventListener("load", setFilter);
```

{{ EmbedLiveSample('Editable_example_2', 700, 450) }}

> [!NOTE]
> Sofern Sie nicht [CORS](/de/docs/Web/HTTP/CORS) aktiviert haben, sollte aus Sicherheitsgründen Ihr Video auf derselben Domain wie Ihr Code liegen.

#### Häufige Audiofilter

Dies sind einige gängige Arten von Audiofiltern, die Sie anwenden können:

- Tiefpass: Lässt Frequenzen unterhalb der Grenzfrequenz durch und dämpft Frequenzen oberhalb der Grenzfrequenz.
- Hochpass: Lässt Frequenzen oberhalb der Grenzfrequenz durch und dämpft Frequenzen unterhalb der Grenzfrequenz.
- Bandpass: Lässt einen Frequenzbereich durch und dämpft die Frequenzen unterhalb und oberhalb dieses Frequenzbereichs.
- Tiefenregal: Lässt alle Frequenzen durch, fügt jedoch eine Verstärkung (oder Dämpfung) zu den niedrigeren Frequenzen hinzu.
- Höhenregal: Lässt alle Frequenzen durch, fügt jedoch eine Verstärkung (oder Dämpfung) zu den höheren Frequenzen hinzu.
- Peaking: Lässt alle Frequenzen durch, fügt jedoch eine Verstärkung (oder Dämpfung) zu einem Frequenzbereich hinzu.
- Notch: Lässt alle Frequenzen durch, außer einem Satz von Frequenzen.
- Allpass: Lässt alle Frequenzen durch, verändert jedoch die Phasenbeziehung zwischen den verschiedenen Frequenzen.

> [!NOTE]
> Weitere Informationen finden Sie unter {{domxref("BiquadFilterNode")}}.

### Faltungen und Impulse

Es ist auch möglich, Impulsantworten auf Audio anzuwenden, wobei der {{domxref("ConvolverNode")}} verwendet wird. Eine **Impulsantwort** ist der Klang, der nach einem kurzen Impuls eines Tons (wie einem Händeklatschen) entsteht. Eine Impulsantwort wird die Umgebung kennzeichnen, in der der Impuls entstanden ist (zum Beispiel ein Echo, das durch Klatschen der Hände in einem Tunnel entsteht).

#### Beispiel

```js
const convolver = context.createConvolver();
convolver.buffer = this.impulseResponseBuffer;
// Verbindung herstellen.
source.connect(convolver);
convolver.connect(context.destination);
```

Sehen Sie sich diesen [Codepen](https://codepen.io/a2sheppy/pen/JjPgVYL) für ein angewendetes (aber sehr, sehr albernes; wie, kleine Kinder werden kichern artiges albern) Beispiel an.

### Räumliches Audio

Wir können auch Audio mit einem **Panner-Knoten** positionieren. Ein Panner-Knoten—{{domxref("PannerNode")}}—ermöglicht uns die Definition eines Quellenkegels sowie von Positions- und Richtungselementen, alles in einem 3D-Raum, der mit 3D-kartesischen Koordinaten definiert wird.

#### Beispiel

```js
const panner = context.createPanner();
panner.coneOuterGain = 0.2;
panner.coneOuterAngle = 120;
panner.coneInnerAngle = 0;

panner.connect(context.destination);
source.connect(panner);
source.start(0);

// Positionieren Sie den Zuhörer am Ursprung.
context.listener.setPosition(0, 0, 0);
```

> [!NOTE]
> Sie können ein [Beispiel in unserem GitHub-Repository](https://github.com/mdn/webaudio-examples/tree/main/panner-node) ([sehen Sie es live](https://mdn.github.io/webaudio-examples/panner-node/) auch) finden.

### JavaScript-Codecs

Es ist auch möglich, Audio auf niedriger Ebene mit JavaScript zu manipulieren. Dies kann nützlich sein, wenn Sie eigene Audiocodecs erstellen möchten.

Bibliotheken existieren derzeit für die folgenden Formate:

- AAC: [AAC.js](https://github.com/audiocogs/aac.js)
- ALAC: [alac.js](https://github.com/audiocogs/alac.js)
- FLAC: [flac.js](https://github.com/audiocogs/flac.js)
- MP3: [mp3.js](https://github.com/audiocogs/mp3.js)
- Opus: [Opus.js](https://github.com/audiocogs/opus.js)
- Vorbis: [vorbis.js](https://github.com/audiocogs/vorbis.js)

> [!NOTE]
> Bei Audiocogs können Sie [einige Demos ausprobieren](http://audiocogs.org/codecs/); Audiocogs bietet auch ein Framework, [Aurora.js](http://audiocogs.org/codecs/), das Ihnen helfen soll, Ihre eigenen Codecs in JavaScript zu erstellen.

## Beispiele

- [Verschiedene Web Audio API (und andere) Beispiele](https://github.com/mdn/webaudio-examples)
- [THREE.js Video Cube Beispiel](https://github.com/chrisdavidmills/threejs-video-cube)
- [Faltungseffekte in Echtzeit](https://github.com/cwilso/web-audio-samples/blob/master/samples/audio/convolution-effects.html)

## Siehe auch

### Tutorials

- [Manipulating Video Using Canvas](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [HTML playbackRate erklärt](/de/docs/Web/Media/Audio_and_video_delivery/WebAudio_playbackRate_explained)
- [Die Web Audio API verwenden](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Grundlagen der Web-Audio-Raumklang](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [Videoframes als WebGL-Textur verwenden](/de/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL#using_the_video_frames_as_a_texture) (Sie können auch die [THREE.js](https://threejs.org/) WebGL-Bibliothek (und andere) verwenden, um [diesen Effekt zu erzielen](https://stemkoski.github.io/Three.js/Video.html))
- [Texturen in WebGL animieren](/de/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL)
- [Entwicklung von Spielaudio mit der Web Audio API (Raumeffekte und Filter) (2012)](https://web.dev/articles/webaudio-games#room_effects_and_filters)

### Referenz

- Die {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elemente
- Die {{domxref("HTMLMediaElement")}} API
- Das {{htmlelement("canvas")}}-Element
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [AudioContext](/de/docs/Web/API/AudioContext)
- Weitere Informationen zu [Räumlichem Audio](/de/docs/Web/API/BaseAudioContext/createPanner)
- [Web-Medientechnologien](/de/docs/Web/Media)
