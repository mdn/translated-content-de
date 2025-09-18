---
title: Audio- und Videobearbeitung
slug: Web/Media/Guides/Audio_and_video_manipulation
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

Die Schönheit des Webs besteht darin, dass Sie Technologien kombinieren können, um neue Formen zu schaffen. Die native Unterstützung von Audio und Video im Browser bedeutet, dass wir diese Datenströme mit Technologien wie {{htmlelement("canvas")}}, [WebGL](/de/docs/Web/API/WebGL_API) oder [Web Audio API](/de/docs/Web/API/Web_Audio_API) direkt bearbeiten können, z.B. durch Hinzufügen von Hall-/Kompressionseffekten zu Audio oder Graustufen-/Sepiafiltern zu Video. Dieser Artikel bietet eine Referenz, um zu erklären, was Sie tun müssen.

## Videobearbeitung

Die Möglichkeit, die Pixelwerte jedes Frames eines Videos zu lesen, kann sehr nützlich sein.

### Video und Canvas

Das {{htmlelement("canvas")}}-Element bietet eine Oberfläche zum Zeichnen von Grafiken auf Webseiten; es ist sehr leistungsfähig und kann eng mit Video gekoppelt werden.

Die allgemeine Technik ist:

1. Schreiben Sie einen Frame aus dem {{htmlelement("video")}}-Element in das {{htmlelement("canvas")}}-Element.
2. Lesen Sie die Daten aus dem `<canvas>`-Element und manipulieren Sie sie.
3. Schreiben Sie die manipulierten Daten in Ihr "Display"-`<canvas>` (das effektiv dasselbe Element sein kann).
4. Anhalten und wiederholen.

Zum Beispiel verarbeiten wir ein Video, um es in Graustufen anzuzeigen. In diesem Fall zeigen wir sowohl das Quellvideo als auch die ausgegebenen Graustufen-Frames. Normalerweise würden Sie, wenn Sie ein "Video in Graustufen abspielen"-Feature implementieren, wahrscheinlich `display: none` zum Stil für das `<video>`-Element hinzufügen, um zu verhindern, dass das Quellvideo auf dem Bildschirm angezeigt wird, während nur das Canvas die veränderten Frames zeigt.

#### HTML

Wir können unseren Videoplayer und das `<canvas>`-Element so einrichten:

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

    this.video.addEventListener("play", () => {
      this.width = this.video.width;
      this.height = this.video.height;
      this.timerCallback();
    });
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
  },
};
```

Sobald die Seite geladen ist, können Sie

```js
processor.doLoad();
```

#### Ergebnis

{{EmbedLiveSample("Video_and_canvas", '100%', 580)}}

Dies ist ein Beispiel, das zeigt, wie man Videoframes mit einem Canvas manipuliert. Für Effizienz sollten Sie in Betracht ziehen, [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) anstelle von `setTimeout()` zu verwenden, wenn Sie in Browsern arbeiten, die es unterstützen.

Das gleiche Ergebnis kann erreicht werden, indem die {{cssxref("filter-function/grayscale", "grayscale()")}} CSS-Funktion auf das Quell-`<video>`-Element angewendet wird.

> [!NOTE]
> Aufgrund potenzieller Sicherheitsprobleme, wenn Ihr Video auf einem anderen Domain als Ihr Code liegt, müssen Sie [CORS (Cross Origin Resource Sharing)](/de/docs/Web/HTTP/Guides/CORS) auf Ihrem Videoserver aktivieren.

### Video und WebGL

[WebGL](/de/docs/Web/API/WebGL_API) ist ein leistungsstarkes API, das Canvas verwendet, um hardwarebeschleunigte 3D- oder 2D-Szenen zu zeichnen. Sie können WebGL und das {{htmlelement("video")}}-Element kombinieren, um Videotexturen zu erstellen, was bedeutet, dass Sie Video innerhalb von 3D-Szenen platzieren können.

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample8/index.html', 670, 510) }}

> [!NOTE]
> Sie finden den [Quellcode dieses Demos auf GitHub](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample8) ([siehe es live](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample8/) auch).

### Wiedergaberate

Wir können auch die Rate, mit der Audio und Video wiedergegeben werden, mit einem Attribut des {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elements namens [`playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate) anpassen. `playbackRate` ist eine Zahl, die ein Vielfaches darstellt, das auf die Wiedergabegeschwindigkeit angewendet werden soll, beispielsweise repräsentiert 0,5 halbe Geschwindigkeit, während 2 doppelte Geschwindigkeit darstellt.

Beachten Sie, dass die `playbackRate`-Eigenschaft sowohl mit `<audio>` als auch `<video>` funktioniert, in beiden Fällen jedoch die Wiedergabegeschwindigkeit geändert wird, aber _nicht_ die Tonhöhe. Um die Tonhöhe des Audios zu manipulieren, müssen Sie die Web Audio API verwenden. Siehe die [`AudioBufferSourceNode.playbackRate`](/de/docs/Web/API/AudioBufferSourceNode/playbackRate) Eigenschaft.

```html live-sample___playback-rate
<video id="my-video" controls loop>
  <source src="/shared-assets/videos/flower.mp4" type="video/mp4" />
  <source src="/shared-assets/videos/flower.webm" type="video/webm" />
</video>
<label for="rate">Playback rate <output id="rate-value">1.0</output></label>
<input type="range" id="rate" name="rate" min="0" max="4" value="1" step=".2" />
```

```js live-sample___playback-rate
const rateSlider = document.getElementById("rate");
const rateValue = document.getElementById("rate-value");
const myVideo = document.getElementById("my-video");

rateSlider.addEventListener("input", () => {
  myVideo.playbackRate = rateSlider.value;
  rateValue.textContent = parseFloat(rateSlider.value);
});
```

```css hidden live-sample___playback-rate live-sample___audio-filter
body {
  font-family: sans-serif;
}
video,
label,
input {
  display: block;
  padding: 0.5em;
  width: 80%;
  margin: auto;
}
```

Starten Sie das Video und passen Sie dann den Schieberegler an, um die Wiedergaberate des Mediums zu ändern:

{{EmbedLiveSample('playback-rate', , 450)}}

## Audio-Bearbeitung

Abgesehen von `playbackRate`, um Audio zu manipulieren, werden Sie typischerweise die [Web Audio API](/de/docs/Web/API/Web_Audio_API) verwenden.

### Auswahl einer Audioquelle

Die Web Audio API kann Audio von verschiedenen Quellen empfangen, dann verarbeiten und es zurück an einen [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode) senden, der das Ausgabegerät repräsentiert, an das der Ton nach der Verarbeitung gesendet wird.

| Wenn die Audioquelle ist…                                                                                                                                                        | Verwenden Sie diesen Web Audio-Knotentyp                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Ein Audiotrack aus einem HTML {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Element                                                                                     | [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode) |
| Ein einfacher Roh-Audiodatenpuffer im Speicher                                                                                                                                   | [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)             |
| Ein Oszillator, der eine Sinuswelle oder eine andere berechnete Wellenform generiert                                                                                             | [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)                           |
| Ein Audiotrack von [WebRTC](/de/docs/Web/API/WebRTC_API) (z.B. das Mikrofoneingang, den Sie mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erhalten können). | [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)   |

### Audiofilter

Die Web Audio API beinhaltet viele verschiedene Filter/Effekte, die auf Audio angewendet werden können, zum Beispiel mit dem [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode).

```html live-sample___audio-filter
<video id="my-video" controls loop>
  <source src="/shared-assets/videos/friday.mp4" type="video/mp4" />
</video>
<label for="freq">Filter freq. <output id="freq-value">1.0</output>hz</label>
<input type="range" id="freq" name="freq" max="20000" value="1000" step="100" />
```

```js live-sample___audio-filter
const freqSlider = document.getElementById("freq");
const freqValue = document.getElementById("freq-value");

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
filter.gain.value = 20;

freqSlider.addEventListener("input", () => {
  filter.frequency.value = freqSlider.value;
  freqValue.textContent = parseFloat(freqSlider.value);
});
```

{{EmbedLiveSample('audio-filter', , 550)}}

> [!NOTE]
> Sofern Sie nicht [CORS](/de/docs/Web/HTTP/Guides/CORS) aktiviert haben, sollte Ihr Video zur Vermeidung von Sicherheitsproblemen auf derselben Domain wie Ihr Code liegen.

#### Häufige Audiofilter

Dies sind einige häufige Arten von Audiofiltern, die Sie anwenden können:

- Low Pass: Lässt Frequenzen unterhalb der Grenzfrequenz durch und dämpft Frequenzen über der Grenze.
- High Pass: Lässt Frequenzen oberhalb der Grenzfrequenz durch und dämpft Frequenzen unterhalb der Grenze.
- Band Pass: Lässt einen Bereich von Frequenzen durch und dämpft die Frequenzen unter- und oberhalb dieses Bereichs.
- Low Shelf: Lässt alle Frequenzen durch, fügt aber eine Verstärkung (oder Dämpfung) zu den unteren Frequenzen hinzu.
- High Shelf: Lässt alle Frequenzen durch, fügt aber eine Verstärkung (oder Dämpfung) zu den höheren Frequenzen hinzu.
- Peaking: Lässt alle Frequenzen durch, fügt aber eine Verstärkung (oder Dämpfung) zu einem Frequenzbereich hinzu.
- Notch: Lässt alle Frequenzen durch, außer einem festgelegten Frequenzsatz.
- All Pass: Lässt alle Frequenzen durch, verändert jedoch die Phasenbeziehung zwischen den verschiedenen Frequenzen.

> [!NOTE]
> Weitere Informationen finden Sie unter [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode).

### Faltungen und Impulse

Es ist auch möglich, Impulsantworten auf Audio mit dem [`ConvolverNode`](/de/docs/Web/API/ConvolverNode) anzuwenden. Eine **Impulsantwort** ist der Klang, der nach einem kurzen Impuls von Klang (wie ein Händeklatschen) entsteht. Eine Impulsantwort wird die Umgebung darstellen, in der der Impuls erzeugt wurde (z.B. ein Echo, das durch Händeklatschen in einem Tunnel entsteht).

#### Beispiel

```js
const convolver = context.createConvolver();
convolver.buffer = this.impulseResponseBuffer;
// Connect the graph.
source.connect(convolver);
convolver.connect(context.destination);
```

Sehen Sie sich unser [HolySpaceCow](https://mdn.github.io/webaudio-examples/holy-space-cow/) Beispiel für ein angewandtes (aber sehr, sehr albernes) Beispiel an.

### Raumklang

Wir können Audio auch mit einem **Panner-Knoten** positionieren. Ein Panner-Knoten—[`PannerNode`](/de/docs/Web/API/PannerNode)—ermöglicht es uns, einen Quellkegel sowie positionale und Richtungselemente zu definieren, alles in einem 3D-Raum, der unter Verwendung von 3D-kartesischen Koordinaten definiert ist.

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
> Sie finden ein [Beispiel in unserem GitHub-Repository](https://github.com/mdn/webaudio-examples/tree/main/panner-node) ([siehe es live](https://mdn.github.io/webaudio-examples/panner-node/)).

## Beispiele

- [Verschiedene Web Audio API (und andere) Beispiele](https://github.com/mdn/webaudio-examples)
- [THREE.js Video Cube Beispiel](https://github.com/chrisdavidmills/threejs-video-cube)
- [Faltungen in Echtzeit](https://github.com/cwilso/web-audio-samples/blob/master/samples/audio/convolution-effects.html)

## Siehe auch

### Leitfäden

- [Manipulation von Video mittels Canvas](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [HTML `playbackRate` erklärt](/de/docs/Web/Media/Guides/Audio_and_video_delivery/WebAudio_playbackRate_explained)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Grundlagen der Web-Audio-Räumlichkeit](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [Verwendung von Videoframes als WebGL-Textur](/de/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL#using_the_video_frames_as_a_texture) (Sie können auch die [THREE.js](https://threejs.org/) WebGL-Bibliothek (und andere) verwenden, um diesen Effekt zu [erreichen](https://stemkoski.github.io/Three.js/Video.html))
- [Animation von Texturen in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL)
- [Entwicklung von Spiele-Audio mit der Web Audio API (Raumeffekte und Filter) (2012)](https://web.dev/articles/webaudio-games#room_effects_and_filters)

### Referenz

- Die {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elemente
- Die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API
- Das {{htmlelement("canvas")}}-Element
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [AudioContext](/de/docs/Web/API/AudioContext)
- Weitere Informationen zu [Spatial Audio](/de/docs/Web/API/BaseAudioContext/createPanner)
- [Webmediotechnologien](/de/docs/Web/Media)
