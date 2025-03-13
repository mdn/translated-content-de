---
title: Audio- und Videomanipulation
slug: Web/Media/Guides/Audio_and_video_manipulation
l10n:
  sourceCommit: 26e46f8c13ebea65dc65a6e99e51e8fa4d5d619d
---

Die Schönheit des Webs liegt darin, dass Sie Technologien kombinieren können, um neue Formen zu schaffen. Da Audio und Video nativ im Browser verfügbar sind, können wir diese Datenströme mit Technologien wie {{htmlelement("canvas")}}, [WebGL](/de/docs/Web/API/WebGL_API) oder der [Web Audio API](/de/docs/Web/API/Web_Audio_API) verwenden, um Audio und Video direkt zu modifizieren, zum Beispiel um Hall-/Kompressionseffekte zu Audio oder Graustufen-/Sepiatöne zu Video hinzuzufügen. Dieser Artikel bietet eine Referenz, um zu erklären, was dafür notwendig ist.

## Videomanipulation

Die Fähigkeit, die Pixelwerte jedes Videoframes zu lesen, kann sehr nützlich sein.

### Video und Canvas

Das {{htmlelement("canvas")}}-Element bietet eine Fläche, um Grafiken auf Webseiten zu zeichnen; es ist sehr leistungsfähig und kann eng mit Video gekoppelt werden.

Die allgemeine Technik besteht darin:

1. Ein Frame vom {{htmlelement("video")}}-Element zum {{htmlelement("canvas")}}-Element zu schreiben.
2. Die Daten aus dem `<canvas>`-Element zu lesen und zu manipulieren.
3. Die manipulierten Daten zu Ihrem "Display"-`<canvas>` zu schreiben (was effektiv dasselbe Element sein kann).
4. Anhalten und Wiederholen.

Zum Beispiel, lassen Sie uns ein Video verarbeiten, um es in Graustufen anzuzeigen. In diesem Fall zeigen wir sowohl das Quellvideo als auch die ausgegebenen Graustufenframes. Normalerweise würden Sie bei einer Implementierung einer "Video in Graustufen abspielen"-Funktion wahrscheinlich `display: none` zum Stil des `<video>`-Elements hinzufügen, um das Quellvideo daran zu hindern, auf dem Bildschirm angezeigt zu werden, während nur das Canvas mit den veränderten Frames angezeigt wird.

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

Dieser Code kümmert sich um die Änderung der Frames.

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

Sobald die Seite geladen ist, können Sie aufrufen

```js
processor.doLoad();
```

#### Ergebnis

{{EmbedLiveSample("Video_and_canvas", '100%', 580)}}

Dies ist ein Beispiel, wie man Videoframes mit einem Canvas manipuliert. Für bessere Effizienz sollten Sie in Erwägung ziehen, [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) anstelle von `setTimeout()` zu verwenden, wenn es von den Browsern unterstützt wird.

Das gleiche Ergebnis erzielen Sie, indem Sie die {{cssxref("filter-function/grayscale", "grayscale()")}} CSS-Funktion auf das Quell-`<video>`-Element anwenden.

> [!NOTE]
> Aufgrund potenzieller Sicherheitsprobleme, falls sich Ihr Video auf einer anderen Domain als Ihr Code befindet, müssen Sie [CORS (Cross Origin Resource Sharing)](/de/docs/Web/HTTP/Guides/CORS) auf Ihrem Videoserver aktivieren.

### Video und WebGL

[WebGL](/de/docs/Web/API/WebGL_API) ist eine leistungsstarke API, die Canvas verwendet, um hardwarebeschleunigte 3D- oder 2D-Szenen zu zeichnen. Sie können WebGL und das {{htmlelement("video")}}-Element kombinieren, um Videotexturen zu erzeugen, was bedeutet, dass Sie Video in 3D-Szenen integrieren können.

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample8/index.html', 670, 510) }}

> [!NOTE]
> Den [Quellcode dieses Demos auf GitHub](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample8) finden Sie ([live ansehen](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample8/)).

### Wiedergabegeschwindigkeit

Wir können auch die Geschwindigkeit, mit der Audio und Video abgespielt werden, anpassen, indem wir ein Attribut des {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elements namens [`playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate) verwenden. `playbackRate` ist eine Zahl, die ein Vielfaches der Wiedergabegeschwindigkeit repräsentiert. Zum Beispiel steht 0,5 für halbe Geschwindigkeit, während 2 für doppelte Geschwindigkeit steht.

Beachten Sie, dass die `playbackRate`-Eigenschaft sowohl mit `<audio>` als auch `<video>` funktioniert, aber in beiden Fällen die Wiedergabegeschwindigkeit, jedoch _nicht_ die Tonhöhe, ändert. Um die Tonhöhe zu manipulieren, müssen Sie die Web Audio API verwenden. Siehe die [`AudioBufferSourceNode.playbackRate`](/de/docs/Web/API/AudioBufferSourceNode/playbackRate)-Eigenschaft.

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
> Versuchen Sie das [playbackRate-Beispiel](https://jsbin.com/qomuvefu/2/edit) live.

## Audiomanipulation

Abgesehen von `playbackRate`, zur Manipulation von Audio werden Sie typischerweise die [Web Audio API](/de/docs/Web/API/Web_Audio_API) verwenden.

### Eine Audioquelle auswählen

Die Web Audio API kann Audio aus verschiedenen Quellen empfangen, es verarbeiten und dann an einen [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode) senden, der das Ausgabegerät repräsentiert, an das der verarbeitete Ton gesendet wird.

| Wenn die Audioquelle ist…                                                                                                                                                               | Verwenden Sie diesen Web Audio Knotentyp                                      |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Eine Audiospur eines HTML-{{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Elements                                                                                              | [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode) |
| Ein einfacher roher Audiodatenpuffer im Speicher                                                                                                                                        | [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)             |
| Ein Oszillator, der eine Sinuswelle oder eine andere berechnete Wellenform erzeugt                                                                                                      | [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)                           |
| Eine Audiospur von [WebRTC](/de/docs/Web/API/WebRTC_API) (z. B. das Mikrofoneingangssignal, das Sie mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erhalten können) | [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)   |

### Audiofilter

Die Web Audio API bietet eine Vielzahl von Filtern/Effekten, die auf Audio angewendet werden können, zum Beispiel mit dem [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode).

#### HTML

```html
<video id="my-video" controls src="my-video.mp4" type="video/mp4"></video>
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
> Wenn Sie [CORS](/de/docs/Web/HTTP/Guides/CORS) nicht aktiviert haben, sollte sich Ihr Video aus Sicherheitsgründen auf derselben Domain wie Ihr Code befinden.

#### Häufige Audiofilter

Dies sind einige gängige Arten von Audiofiltern, die Sie anwenden können:

- Tiefpass: Lässt Frequenzen unterhalb der Grenzfrequenz durch und dämpft Frequenzen oberhalb der Grenzfrequenz.
- Hochpass: Lässt Frequenzen oberhalb der Grenzfrequenz durch und dämpft Frequenzen unterhalb der Grenzfrequenz.
- Bandpass: Lässt einen Frequenzbereich durch und dämpft die Frequenzen unterhalb und oberhalb dieses Frequenzbereichs.
- Tiefenregal: Lässt alle Frequenzen durch, fügt jedoch eine Verstärkung (oder Dämpfung) der niedrigeren Frequenzen hinzu.
- Höhenregal: Lässt alle Frequenzen durch, fügt jedoch eine Verstärkung (oder Dämpfung) der höheren Frequenzen hinzu.
- Peaking: Lässt alle Frequenzen durch, fügt jedoch eine Verstärkung (oder Dämpfung) eines Frequenzbereichs hinzu.
- Notch: Lässt alle Frequenzen durch, außer für einen Satz von Frequenzen.
- All Pass: Lässt alle Frequenzen durch, ändert jedoch die Phasenbeziehung zwischen den verschiedenen Frequenzen.

> [!NOTE]
> Weitere Informationen finden Sie im [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode).

### Faltung und Impulse

Es ist auch möglich, Impulsantworten auf Audio anzuwenden, indem man den [`ConvolverNode`](/de/docs/Web/API/ConvolverNode) verwendet. Eine **Impulsantwort** ist der Klang, der nach einem kurzen Klangimpuls (wie einem Händeklatschen) entsteht. Eine Impulsantwort wird die Umgebung kennzeichnen, in der der Impuls erzeugt wurde (zum Beispiel ein Echo, das durch das Klatschen der Hände in einem Tunnel entsteht).

#### Beispiel

```js
const convolver = context.createConvolver();
convolver.buffer = this.impulseResponseBuffer;
// Connect the graph.
source.connect(convolver);
convolver.connect(context.destination);
```

Sehen Sie sich dieses [CodePen](https://codepen.io/a2sheppy/pen/JjPgVYL) für ein angewandtes (aber sehr, sehr albernes) Beispiel an; wie etwa ein Beispiel, bei dem kleine Kinder lachen.

### Räumliches Audio

Wir können auch Audio mit einem **Panner-Knoten** positionieren. Ein Panner-Knoten—[`PannerNode`](/de/docs/Web/API/PannerNode)—ermöglicht es uns, einen Quellkegel sowie Positions- und Richtungselemente zu definieren, alles im 3D-Raum, der mithilfe von 3D-Koordinaten im kartesischen System definiert wird.

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
> Ein Beispiel befindet sich in unserem [GitHub-Repository](https://github.com/mdn/webaudio-examples/tree/main/panner-node) ([live ansehen](https://mdn.github.io/webaudio-examples/panner-node/)).

### JavaScript-Codecs

Es ist auch möglich, Audio auf niedrigem Niveau mit JavaScript zu manipulieren. Dies kann nützlich sein, wenn Sie Audio-Codecs erstellen möchten.

Bibliotheken existieren derzeit für die folgenden Formate:

- AAC: [AAC.js](https://github.com/audiocogs/aac.js)
- ALAC: [alac.js](https://github.com/audiocogs/alac.js)
- FLAC: [flac.js](https://github.com/audiocogs/flac.js)
- MP3: [mp3.js](https://github.com/audiocogs/mp3.js)
- Opus: [Opus.js](https://github.com/audiocogs/opus.js)
- Vorbis: [vorbis.js](https://github.com/audiocogs/vorbis.js)

> [!NOTE]
> Bei Audiocogs können Sie [einige Demos ausprobieren](http://audiocogs.org/codecs/); Audiocogs bietet auch ein Framework an, [Aurora.js](http://audiocogs.org/codecs/), welches Ihnen helfen soll, Ihre eigenen Codecs in JavaScript zu erstellen.

## Beispiele

- [Verschiedene Web Audio API (und andere) Beispiele](https://github.com/mdn/webaudio-examples)
- [THREE.js Video Cube-Beispiel](https://github.com/chrisdavidmills/threejs-video-cube)
- [Faltungseffekte in Echtzeit](https://github.com/cwilso/web-audio-samples/blob/master/samples/audio/convolution-effects.html)

## Siehe auch

### Leitfäden

- [Manipulation von Videos mit Canvas](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [HTML playbackRate erklärt](/de/docs/Web/Media/Guides/Audio_and_video_delivery/WebAudio_playbackRate_explained)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Grundlagen der Web-Audio-Raumklang](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [Verwendung von Videoframes als WebGL-Textur](/de/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL#using_the_video_frames_as_a_texture) (Sie können auch die [THREE.js](https://threejs.org/) WebGL-Bibliothek (und andere) verwenden, um [diesen Effekt zu erzielen](https://stemkoski.github.io/Three.js/Video.html))
- [Animation von Texturen in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL)
- [Entwicklung von Spielaudio mit der Web Audio API (Raumeffekte und Filter) (2012)](https://web.dev/articles/webaudio-games#room_effects_and_filters)

### Referenz

- Die {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elemente
- Die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API
- Das {{htmlelement("canvas")}}-Element
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [AudioContext](/de/docs/Web/API/AudioContext)
- Weitere Informationen zu [Räumlichem Audio](/de/docs/Web/API/BaseAudioContext/createPanner)
- [Webmedientechnologien](/de/docs/Web/Media)
