---
title: Audio- und Videobearbeitung
slug: Web/Media/Guides/Audio_and_video_manipulation
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

Die Schönheit des Webs besteht darin, dass Sie Technologien kombinieren können, um neue Formen zu schaffen. Mit nativen Audio- und Videofunktionen im Browser können wir diese Datenströme mit Technologien wie {{htmlelement("canvas")}}, [WebGL](/de/docs/Web/API/WebGL_API) oder der [Web Audio API](/de/docs/Web/API/Web_Audio_API) verwenden, um Audio und Video direkt zu modifizieren, zum Beispiel Hall-/Kompressions-Effekte zu Audio hinzufügen oder Graustufen-/Sepia-Filter zu Video. Dieser Artikel bietet eine Referenz, um zu erklären, was Sie tun müssen.

## Videobearbeitung

Die Fähigkeit, die Pixelwerte von jedem Videobild zu lesen, kann sehr nützlich sein.

### Video und Canvas

Das {{htmlelement("canvas")}}-Element bietet eine Oberfläche zum Zeichnen von Grafiken auf Webseiten; es ist sehr leistungsfähig und kann eng mit Video gekoppelt werden.

Die allgemeine Technik besteht darin:

1. Schreiben Sie ein Bild vom {{htmlelement("video")}}-Element auf das {{htmlelement("canvas")}}-Element.
2. Lesen Sie die Daten vom `<canvas>`-Element und bearbeiten Sie sie.
3. Schreiben Sie die bearbeiteten Daten auf Ihr "Anzeige"-`<canvas>` (das effektiv dasselbe Element sein kann).
4. Pausieren Sie und wiederholen Sie den Vorgang.

Beispielsweise können wir ein Video verarbeiten, um es in Graustufen anzuzeigen. In diesem Fall zeigen wir sowohl das Quellvideo als auch die ausgegebenen Graustufenbilder an. Normalerweise, wenn Sie eine Funktion „Video in Graustufen abspielen“ implementieren würden, würden Sie wahrscheinlich `display: none` zum Stil des `<video>`-Elements hinzufügen, um zu verhindern, dass das Quellvideo auf dem Bildschirm gezeichnet wird, während nur das Canvas die geänderten Bilder zeigt.

#### HTML

Wir können unseren Videoplayer und das `<canvas>`-Element wie folgt einrichten:

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

Dieser Code bearbeitet die Bilder.

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

Dies ist ein ziemlich einfaches Beispiel, das zeigt, wie man Videobilder mit einem Canvas manipuliert. Für eine effizientere Ausführung sollten Sie in Betracht ziehen, [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) anstelle von `setTimeout()` zu verwenden, wenn Sie in Browsern arbeiten, die dies unterstützen.

Sie können das gleiche Ergebnis erzielen, indem Sie die {{cssxref("filter-function/grayscale", "grayscale()")}} CSS-Funktion auf das Quell `<video>`-Element anwenden.

> [!NOTE]
> Aufgrund möglicher Sicherheitsprobleme, wenn Ihr Video sich auf einer anderen Domain als Ihr Code befindet, müssen Sie [CORS (Cross Origin Resource Sharing)](/de/docs/Web/HTTP/CORS) auf Ihrem Videoserver aktivieren.

### Video und WebGL

[WebGL](/de/docs/Web/API/WebGL_API) ist eine leistungsfähige API, die Canvas verwendet, um hardwarebeschleunigte 3D- oder 2D-Szenen zu zeichnen. Sie können WebGL und das {{htmlelement("video")}}-Element kombinieren, um Videotexturen zu erstellen, was bedeutet, dass Sie Video in 3D-Szenen einfügen können.

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample8/index.html', 670, 510) }}

> [!NOTE]
> Den [Quellcode dieses Demos finden Sie auf GitHub](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample8) ([live ansehen](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample8/) ebenfalls).

### Wiedergabegeschwindigkeit

Wir können auch die Geschwindigkeit anpassen, mit der Audio und Video abgespielt werden, indem wir ein Attribut des {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elements namens [`playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate) verwenden. `playbackRate` ist eine Zahl, die ein Vielfaches der Wiedergabegeschwindigkeit darstellt, zum Beispiel repräsentiert 0,5 die halbe Geschwindigkeit, während 2 die doppelte Geschwindigkeit repräsentiert.

Beachten Sie, dass die `playbackRate`-Eigenschaft sowohl mit `<audio>` als auch mit `<video>` funktioniert, in beiden Fällen die Wiedergabegeschwindigkeit ändert, aber _nicht_ die Tonhöhe. Um die Tonhöhe des Audios zu manipulieren, müssen Sie die Web Audio API verwenden. Siehe die [`AudioBufferSourceNode.playbackRate`](/de/docs/Web/API/AudioBufferSourceNode/playbackRate) Eigenschaft.

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
> Versuchen Sie das [playbackRate Beispiel](https://jsbin.com/qomuvefu/2/edit) live.

## Audiobearbeitung

Abgesehen von `playbackRate`, um Audio zu manipulieren, verwenden Sie typischerweise die [Web Audio API](/de/docs/Web/API/Web_Audio_API).

### Eine Audioquelle auswählen

Die Web Audio API kann Audio von verschiedenen Quellen empfangen, dieses dann verarbeiten und an einen [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode) senden, der das Ausgabegerät repräsentiert, an das der Ton nach der Verarbeitung gesendet wird.

| Wenn die Audioquelle ist …                                                                                                                                                     | Verwenden Sie diesen Web Audio Knoten-Typ                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| Eine Audiospur aus einem HTML {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element                                                                                  | [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode) |
| Ein einfacher roher Audiodatenpuffer im Speicher                                                                                                                               | [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)             |
| Ein Oszillator, der eine Sinuswelle oder eine andere berechnete Wellenform erzeugt                                                                                             | [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)                           |
| Eine Audiospur von [WebRTC](/de/docs/Web/API/WebRTC_API) (wie das Mikrofoneingang, das Sie mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erhalten können) | [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)   |

### Audiofilter

Die Web Audio API bietet viele verschiedene Filter/Effekte, die auf Audio angewendet werden können, wie zum Beispiel der [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode).

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
> Sofern Sie nicht [CORS](/de/docs/Web/HTTP/CORS) aktiviert haben, um Sicherheitsprobleme zu vermeiden, sollte Ihr Video auf derselben Domain wie Ihr Code sein.

#### Allgemeine Audiofilter

Dies sind einige häufige Arten von Audiofiltern, die Sie anwenden können:

- Low Pass: Ermöglicht Frequenzen unterhalb der Grenzfrequenz und dämpft Frequenzen oberhalb der Grenzfrequenz.
- High Pass: Ermöglicht Frequenzen oberhalb der Grenzfrequenz und dämpft Frequenzen unterhalb der Grenzfrequenz.
- Band Pass: Ermöglicht einen Frequenzbereich und dämpft die Frequenzen unterhalb und oberhalb dieses Bereichs.
- Low Shelf: Ermöglicht alle Frequenzen, fügt aber einen Schub (oder Dämpfung) zu den niedrigeren Frequenzen hinzu.
- High Shelf: Ermöglicht alle Frequenzen, fügt aber einen Schub (oder Dämpfung) zu den höheren Frequenzen hinzu.
- Peaking: Ermöglicht alle Frequenzen, fügt aber einen Schub (oder Dämpfung) zu einem Frequenzbereich hinzu.
- Notch: Ermöglicht alle Frequenzen, außer für einen Satz von Frequenzen.
- All Pass: Ermöglicht alle Frequenzen, ändert jedoch die Phasenbeziehung zwischen den verschiedenen Frequenzen.

> [!NOTE]
> Siehe [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) für mehr Informationen.

### Faltung und Impulse

Es ist auch möglich, Impulsantworten auf Audio mit dem [`ConvolverNode`](/de/docs/Web/API/ConvolverNode) anzuwenden. Eine **Impulsantwort** ist der Klang, der nach einem kurzen Impuls von Klang (wie einem Handklatschen) erzeugt wird. Eine Impulsantwort wird die Umgebung angeben, in der der Impuls erzeugt wurde (zum Beispiel ein Echo, das durch Klatschen in einem Tunnel entsteht).

#### Beispiel

```js
const convolver = context.createConvolver();
convolver.buffer = this.impulseResponseBuffer;
// Connect the graph.
source.connect(convolver);
convolver.connect(context.destination);
```

Sehen Sie sich dieses [CodePen](https://codepen.io/a2sheppy/pen/JjPgVYL) für ein angewandtes (aber sehr, sehr albernes; wie, kleine Kinder werden giggeln) Beispiel an.

### Räumliches Audio

Wir können Audio auch mithilfe eines **Panner-Knotens** positionieren. Ein Panner-Knoten—[`PannerNode`](/de/docs/Web/API/PannerNode)—erlaubt es uns, einen Quellkegel sowie Positions- und Richtungselemente zu definieren, alles im 3D-Raum, definiert durch 3D-kartesische Koordinaten.

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
> Sie finden ein [Beispiel in unserem GitHub-Repository](https://github.com/mdn/webaudio-examples/tree/main/panner-node) ([live ansehen](https://mdn.github.io/webaudio-examples/panner-node/) ebenfalls).

### JavaScript-Codecs

Es ist auch möglich, Audio auf niedrigem Niveau mit JavaScript zu manipulieren. Dies kann nützlich sein, wenn Sie eigene Audiocodecs erstellen möchten.

Bibliotheken existieren derzeit für die folgenden Formate:

- AAC: [AAC.js](https://github.com/audiocogs/aac.js)
- ALAC: [alac.js](https://github.com/audiocogs/alac.js)
- FLAC: [flac.js](https://github.com/audiocogs/flac.js)
- MP3: [mp3.js](https://github.com/audiocogs/mp3.js)
- Opus: [Opus.js](https://github.com/audiocogs/opus.js)
- Vorbis: [vorbis.js](https://github.com/audiocogs/vorbis.js)

> [!NOTE]
> Bei Audiocogs können Sie [einige Demos ausprobieren](http://audiocogs.org/codecs/); Audiocogs bietet auch ein Framework, [Aurora.js](http://audiocogs.org/codecs/), das Ihnen helfen soll, Ihre eigenen Codecs in JavaScript zu entwickeln.

## Beispiele

- [Verschiedene Web Audio API (und andere) Beispiele](https://github.com/mdn/webaudio-examples)
- [THREE.js Video Cube Beispiel](https://github.com/chrisdavidmills/threejs-video-cube)
- [Faltungseffekte in Echtzeit](https://github.com/cwilso/web-audio-samples/blob/master/samples/audio/convolution-effects.html)

## Siehe auch

### Leitfäden

- [Manipulieren von Video mit Canvas](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [HTML playbackRate erklärt](/de/docs/Web/Media/Guides/Audio_and_video_delivery/WebAudio_playbackRate_explained)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Grundlagen der Web Audio-Räumlichkeit](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [Verwendung von Videobildern als WebGL-Textur](/de/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL#using_the_video_frames_as_a_texture) (Sie können auch die [THREE.js](https://threejs.org/) WebGL-Bibliothek (und andere) verwenden, um [diesen Effekt zu erzielen](https://stemkoski.github.io/Three.js/Video.html))
- [Texturen in WebGL animieren](/de/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL)
- [Entwicklung von Spielaudio mit der Web Audio API (Raumeffekte und Filter) (2012)](https://web.dev/articles/webaudio-games#room_effects_and_filters)

### Referenz

- Die {{htmlelement("audio")}} und {{htmlelement("video")}} Elemente
- Die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API
- Das {{htmlelement("canvas")}}-Element
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [AudioContext](/de/docs/Web/API/AudioContext)
- Weitere Informationen zu [Räumlichem Audio](/de/docs/Web/API/BaseAudioContext/createPanner)
- [Webmedien-Technologien](/de/docs/Web/Media)
