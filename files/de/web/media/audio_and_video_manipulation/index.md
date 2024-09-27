---
title: Audio- und Videomanipulation
slug: Web/Media/Audio_and_video_manipulation
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{QuickLinksWithSubPages("/de/docs/Web/Media")}}

Das Schöne am Web ist, dass Sie Technologien kombinieren können, um neue Formen zu schaffen. Da Audio und Video nativ im Browser verfügbar sind, können wir diese Datenströme mit Technologien wie {{htmlelement("canvas")}}, [WebGL](/de/docs/Web/API/WebGL_API) oder [Web Audio API](/de/docs/Web/API/Web_Audio_API) verwenden, um Audio und Video direkt zu modifizieren, beispielsweise indem wir Hall- oder Kompressionseffekte auf Audio anwenden oder Graustufen- oder Sepiafilter auf Video. Dieser Artikel bietet eine Referenz, um zu erklären, was Sie tun müssen.

## Videomanipulation

Die Fähigkeit, die Pixelwerte aus jedem Frame eines Videos zu lesen, kann sehr nützlich sein.

### Video und Canvas

Das {{htmlelement("canvas")}}-Element bietet eine Oberfläche zum Zeichnen von Grafiken auf Webseiten; es ist sehr leistungsfähig und lässt sich eng mit Video koppeln.

Die allgemeine Technik ist:

1. Schreiben Sie einen Frame vom {{htmlelement("video")}}-Element zum {{htmlelement("canvas")}}-Element.
2. Lesen Sie die Daten vom `<canvas>`-Element und manipulieren Sie diese.
3. Schreiben Sie die manipulierten Daten auf Ihr "Anzeige"-`<canvas>` (welches effektiv dasselbe Element sein kann).
4. Pausieren und wiederholen.

Beispielsweise verarbeiten wir ein Video, um es in Graustufen anzuzeigen. In diesem Fall zeigen wir sowohl das Quellvideo als auch die ausgegebenen Graustufen-Frames. Normalerweise, wenn Sie eine Funktion "Video in Graustufen abspielen" implementieren würden, würden Sie wahrscheinlich `display: none` für das `<video>`-Element im Stil hinzufügen, um zu verhindern, dass das Quellvideo auf dem Bildschirm angezeigt wird, während nur das Canvas die veränderten Frames zeigt.

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
    }, 16); // roughly 60 frames per second
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

#### Ergebnis

{{EmbedLiveSample("Video_and_canvas", '100%', 580)}}

Dies ist ein ziemlich einfaches Beispiel, das zeigt, wie man Videoframes mithilfe eines Canvas manipuliert. Für mehr Effizienz sollten Sie in Betracht ziehen, [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) anstelle von `setTimeout()` zu verwenden, wenn es von Browsern unterstützt wird.

Sie können dasselbe Ergebnis erzielen, indem Sie die {{cssxref("filter-function/grayscale", "grayscale()")}}-CSS-Funktion auf das Quell-`<video>`-Element anwenden.

> [!NOTE]
> Aufgrund potenzieller Sicherheitsprobleme, wenn Ihr Video auf einer anderen Domäne als Ihr Code liegt, müssen Sie [CORS (Cross Origin Resource Sharing)](/de/docs/Web/HTTP/CORS) auf Ihrem Videoserver aktivieren.

### Video und WebGL

[WebGL](/de/docs/Web/API/WebGL_API) ist eine leistungsstarke API, die Canvas verwendet, um hardwarebeschleunigte 3D- oder 2D-Szenen zu zeichnen. Sie können WebGL und das {{htmlelement("video")}}-Element kombinieren, um Videotexturen zu erstellen, was bedeutet, dass Sie Video in 3D-Szenen einbetten können.

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample8/index.html', 670, 510) }}

> [!NOTE]
> Den [Quellcode dieses Demos finden Sie auf GitHub](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample8) ([siehe es live](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample8/)).

### Wiedergabegeschwindigkeit

Wir können auch die Geschwindigkeit ändern, mit der Audio und Video abgespielt werden, indem wir ein Attribut des {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elements namens [`playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate) verwenden. `playbackRate` ist eine Zahl, die ein Vielfaches darstellt, das für die Abspielgeschwindigkeit angewendet wird, beispielsweise repräsentiert 0.5 die halbe Geschwindigkeit, während 2 die doppelte Geschwindigkeit darstellt.

Beachten Sie, dass die `playbackRate`-Eigenschaft mit sowohl `<audio>` als auch `<video>` funktioniert, jedoch in beiden Fällen die Abspielgeschwindigkeit, aber _nicht_ die Tonhöhe ändert. Um die Tonhöhe des Audios zu manipulieren, müssen Sie die Web Audio API verwenden. Siehe die [`AudioBufferSourceNode.playbackRate`](/de/docs/Web/API/AudioBufferSourceNode/playbackRate)-Eigenschaft.

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

#### Bearbeitbares Beispiel

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
> Probieren Sie das [playbackRate Beispiel](https://jsbin.com/qomuvefu/2/edit) live aus.

## Audiomanipulation

Abgesehen von `playbackRate` werden Sie zur Manipulation von Audio typischerweise die [Web Audio API](/de/docs/Web/API/Web_Audio_API) verwenden.

### Auswahl einer Audioquelle

Die Web Audio API kann Audio von einer Vielzahl von Quellen empfangen, es dann verarbeiten und zurück an einen [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode) senden, der das Ausgabegerät darstellt, an das der Sound nach der Verarbeitung gesendet wird.

| Wenn die Audioquelle ... ist                                                                                                                                                          | Verwenden Sie diesen Web Audio-Knotentyp                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Ein Audiotrack von einem HTML-{{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element                                                                                         | [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode) |
| Ein einfacher, roher Audiodatenpuffer im Speicher                                                                                                                                     | [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)             |
| Ein Oszillator, der eine Sinuswelle oder eine andere berechnete Wellenform erzeugt                                                                                                    | [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)                           |
| Ein Audiotrack von [WebRTC](/de/docs/Web/API/WebRTC_API) (wie das Mikrofoneingangssignal, das Sie mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erhalten können. | [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)   |

### Audiofilter

Die Web Audio API hat viele verschiedene Filter und Effekte, die auf Audio angewendet werden können, z.B. mithilfe des [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode).

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

// Configure filter
filter.type = "lowshelf";
filter.frequency.value = 1000;
filter.gain.value = 25;
```

#### Bearbeitbares Beispiel

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
> Wenn Sie nicht [CORS](/de/docs/Web/HTTP/CORS) aktiviert haben, sollte Ihr Video zur Vermeidung von Sicherheitsproblemen auf derselben Domäne wie Ihr Code liegen.

#### Häufige Audiofilter

Dies sind einige gängige Typen von Audiofiltern, die Sie anwenden können:

- Low Pass: Lässt Frequenzen unterhalb der Schnittfrequenz passieren und dämpft Frequenzen oberhalb der Schnittfrequenz.
- High Pass: Lässt Frequenzen oberhalb der Schnittfrequenz passieren und dämpft Frequenzen unterhalb der Schnittfrequenz.
- Band Pass: Lässt einen Bereich von Frequenzen passieren und dämpft die Frequenzen unterhalb und oberhalb dieses Frequenzbereichs.
- Low Shelf: Lässt alle Frequenzen passieren, fügt jedoch einen Boost (oder eine Dämpfung) zu den niedrigeren Frequenzen hinzu.
- High Shelf: Lässt alle Frequenzen passieren, fügt jedoch einen Boost (oder eine Dämpfung) zu den höheren Frequenzen hinzu.
- Peaking: Lässt alle Frequenzen passieren, fügt jedoch einen Boost (oder eine Dämpfung) zu einem Frequenzbereich hinzu.
- Notch: Lässt alle Frequenzen passieren, mit Ausnahme eines Satzes von Frequenzen.
- All Pass: Lässt alle Frequenzen passieren, ändert jedoch die Phasenbeziehung zwischen den verschiedenen Frequenzen.

> [!NOTE]
> Siehe [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) für weitere Informationen.

### Faltungen und Impulse

Es ist auch möglich, Impulsantworten auf Audio mithilfe des [`ConvolverNode`](/de/docs/Web/API/ConvolverNode) anzuwenden. Eine **Impulsantwort** ist der Klang, der nach einem kurzen Impuls von Sound entsteht (wie ein Händeklatschen). Eine Impulsantwort wird die Umgebung kennzeichnen, in der der Impuls erzeugt wurde (zum Beispiel ein Echo, das durch Klatschen in einem Tunnel erzeugt wird).

#### Beispiel

```js
const convolver = context.createConvolver();
convolver.buffer = this.impulseResponseBuffer;
// Connect the graph.
source.connect(convolver);
convolver.connect(context.destination);
```

Sehen Sie sich diesen [Codepen](https://codepen.io/a2sheppy/pen/JjPgVYL) für ein angewandtes (aber sehr, sehr albernes; wirklich, kleine Kinder werden kichern) Beispiel an.

### Räumliches Audio

Wir können Audio auch mit einem **Pannenknoten** positionieren. Ein Pannenknoten—[`PannerNode`](/de/docs/Web/API/PannerNode)—ermöglicht uns die Definition eines Quellkegels sowie von Positions- und Richtungselementen, alles in einem 3D-Raum, der mithilfe von 3D-kartesischen Koordinaten definiert ist.

#### Beispiel

```js
const panner = context.createPanner();
panner.coneOuterGain = 0.2;
panner.coneOuterAngle = 120;
panner.coneInnerAngle = 0;

panner.connect(context.destination);
source.connect(panner);
source.start(0);

// Position the listener at the origin.
context.listener.setPosition(0, 0, 0);
```

> [!NOTE]
> Ein [Beispiel finden Sie in unserem GitHub-Repository](https://github.com/mdn/webaudio-examples/tree/main/panner-node) ([siehe es live](https://mdn.github.io/webaudio-examples/panner-node/)).

### JavaScript-Codecs

Es ist auch möglich, Audio auf einer niedrigen Ebene mit JavaScript zu manipulieren. Dies kann nützlich sein, wenn Sie Audiocodecs erstellen möchten.

Derzeit existieren Bibliotheken für die folgenden Formate:

- AAC: [AAC.js](https://github.com/audiocogs/aac.js)
- ALAC: [alac.js](https://github.com/audiocogs/alac.js)
- FLAC: [flac.js](https://github.com/audiocogs/flac.js)
- MP3: [mp3.js](https://github.com/audiocogs/mp3.js)
- Opus: [Opus.js](https://github.com/audiocogs/opus.js)
- Vorbis: [vorbis.js](https://github.com/audiocogs/vorbis.js)

> [!NOTE]
> Bei Audiocogs können Sie [Einige Demos ausprobieren](http://audiocogs.org/codecs/); Audiocogs bietet auch ein Framework, [Aurora.js](http://audiocogs.org/codecs/), das Ihnen helfen soll, Ihre eigenen Codecs in JavaScript zu erstellen.

## Beispiele

- [Verschiedene Web Audio API (und andere) Beispiele](https://github.com/mdn/webaudio-examples)
- [THREE.js VideoCube-Beispiel](https://github.com/chrisdavidmills/threejs-video-cube)
- [Faltungseffekte in Echtzeit](https://github.com/cwilso/web-audio-samples/blob/master/samples/audio/convolution-effects.html)

## Siehe auch

### Tutorials

- [Manipulieren von Video mithilfe von Canvas](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [HTML `playbackRate` erklärt](/de/docs/Web/Media/Audio_and_video_delivery/WebAudio_playbackRate_explained)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Grundlagen der räumlichen Audiowiedergabe](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [Verwendung von Video-Frames als WebGL-Textur](/de/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL#using_the_video_frames_as_a_texture) (Sie können auch die [THREE.js](https://threejs.org/) WebGL-Bibliothek (und andere) verwenden, um [diesen Effekt zu erzielen](https://stemkoski.github.io/Three.js/Video.html))
- [Texturen in WebGL animieren](/de/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL)
- [Entwicklung von Spiel-Audio mit der Web Audio API (Raumeffekte und Filter) (2012)](https://web.dev/articles/webaudio-games#room_effects_and_filters)

### Referenz

- Die {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elemente
- Die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API
- Das {{htmlelement("canvas")}}-Element
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [AudioContext](/de/docs/Web/API/AudioContext)
- Weitere Informationen zu [Räumlichem Audio](/de/docs/Web/API/BaseAudioContext/createPanner)
- [Web-Medientechnologien](/de/docs/Web/Media)
