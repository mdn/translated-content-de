---
title: Audio- und Videomanipulation
slug: Web/Media/Guides/Audio_and_video_manipulation
l10n:
  sourceCommit: e0ffae60f27e8842a53936038d4b1ddb290591c0
---

Die Schönheit des Webs liegt darin, dass Sie Technologien kombinieren können, um neue Formen zu schaffen. Da Audio und Video im Browser nativ unterstützt werden, können wir diese Datenströme mit Technologien wie {{htmlelement("canvas")}}, [WebGL](/de/docs/Web/API/WebGL_API) oder [Web Audio API](/de/docs/Web/API/Web_Audio_API) nutzen, um Audio und Video direkt zu modifizieren, beispielsweise indem wir Hall-/Kompresser-Effekte zu Audio hinzufügen oder Graustufen-/Sepia-Filter zu Video. Dieser Artikel bietet eine Referenz, um zu erklären, was Sie tun müssen.

## Videomanipulation

Die Fähigkeit, die Pixelwerte jedes Frames eines Videos zu lesen, kann sehr nützlich sein.

### Video und Canvas

Das {{htmlelement("canvas")}}-Element bietet eine Oberfläche zum Zeichnen von Grafiken auf Webseiten; es ist sehr leistungsfähig und kann eng mit Video gekoppelt werden.

Die allgemeine Technik ist:

1. Schreiben Sie ein Frame vom {{htmlelement("video")}}-Element auf das {{htmlelement("canvas")}}-Element.
2. Lesen Sie die Daten vom `<canvas>`-Element und manipulieren Sie sie.
3. Schreiben Sie die manipulierten Daten auf Ihr "Anzeigefenster"-`<canvas>` (was effektiv dasselbe Element sein kann).
4. Anhalten und wiederholen.

Beispielsweise verarbeiten wir ein Video, um es in Graustufen darzustellen. In diesem Fall zeigen wir sowohl das Quellvideo als auch die ausgegebenen Graustufen-Frames. Normalerweise, wenn Sie ein "Video in Graustufen abspielen" -Feature implementieren würden, würden Sie wahrscheinlich `display: none` zum Stil für das `<video>`-Element hinzufügen, um zu verhindern, dass das Quellvideo auf dem Bildschirm gezeichnet wird, während nur das Canvas mit den veränderten Frames angezeigt wird.

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

Dies ist ein Beispiel, das zeigt, wie man Videoframes mithilfe eines Canvas manipuliert. Für mehr Effizienz sollten Sie in Erwägung ziehen, [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) anstelle von `setTimeout()` bei unterstützenden Browsern zu verwenden.

Dasselbe Ergebnis kann erzielt werden, indem die {{cssxref("filter-function/grayscale", "grayscale()")}} CSS-Funktion auf das Quell-`<video>`-Element angewendet wird.

> [!NOTE]
> Aufgrund potenzieller Sicherheitsprobleme, wenn Ihr Video auf einer anderen Domain als Ihr Code liegt, müssen Sie [CORS (Cross Origin Resource Sharing)](/de/docs/Web/HTTP/Guides/CORS) auf Ihrem Videoserver aktivieren.

### Video und WebGL

[WebGL](/de/docs/Web/API/WebGL_API) ist eine leistungsstarke API, die Canvas zum Zeichnen von hardwarebeschleunigten 3D- oder 2D-Szenen verwendet. Sie können WebGL und das {{htmlelement("video")}}-Element kombinieren, um Videotexturen zu erstellen, was bedeutet, dass Sie Video in 3D-Szenen platzieren können.

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample8/index.html', 670, 510) }}

> [!NOTE]
> Sie finden den [Quellcode dieses Demos auf GitHub](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample8) ([live ansehen](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample8/) auch).

### Wiedergaberate

Wir können auch die Wiedergaberate von Audio und Video mithilfe eines Attributs des {{htmlelement("audio")}}- und des {{htmlelement("video")}}-Elements namens [`playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate) anpassen. `playbackRate` ist eine Zahl, die ein Vielfaches darstellt, das auf die Wiedergabegeschwindigkeit angewendet wird, z.B. bedeutet 0.5 halbe Geschwindigkeit, während 2 doppelte Geschwindigkeit bedeutet.

Beachten Sie, dass die Eigenschaft `playbackRate` sowohl mit `<audio>` als auch `<video>` funktioniert, jedoch in beiden Fällen ändert sie die Wiedergabegeschwindigkeit, aber _nicht_ die Tonhöhe. Um die Tonhöhe von Audio zu manipulieren, müssen Sie die Web Audio API verwenden. Siehe die [`AudioBufferSourceNode.playbackRate`](/de/docs/Web/API/AudioBufferSourceNode/playbackRate)-Eigenschaft.

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

Starten Sie das Video, und passen Sie dann den Regler an, um die Wiedergabegeschwindigkeit der Medien zu ändern:

{{EmbedLiveSample('playback-rate', , 450)}}

## Audiomanipulation

Ungeachtet von `playbackRate`, um Audio zu manipulieren, verwenden Sie typischerweise die [Web Audio API](/de/docs/Web/API/Web_Audio_API).

### Auswahl einer Audioquelle

Die Web Audio API kann Audio aus verschiedenen Quellen empfangen, dann verarbeiten und zurück an einen [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode) senden, der das Ausgabegerät darstellt, an das der Sound nach der Verarbeitung gesendet wird.

| Wenn die Audioquelle ist…                                                                                                                                                       | Verwenden Sie diesen Web-Audio-Knotentyp                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Ein Audiotrack aus einem HTML {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element                                                                                   | [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode) |
| Ein einfacher roher Audiodatenpuffer im Speicher                                                                                                                                | [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)             |
| Ein Oszillator, der eine Sinuswelle oder eine andere berechnete Wellenform erzeugt                                                                                              | [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)                           |
| Ein Audiotrack von [WebRTC](/de/docs/Web/API/WebRTC_API) (wie das Mikrofoneingang, den Sie mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erhalten können). | [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)   |

### Audiofilter

Die Web Audio API bietet viele verschiedene Filter/Effekte, die auf Audio mithilfe des [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) angewendet werden können.

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
> Sofern Sie kein [CORS](/de/docs/Web/HTTP/Guides/CORS) aktiviert haben, um Sicherheitsprobleme zu vermeiden, sollte Ihr Video in derselben Domain wie Ihr Code sein.

#### Gemeinsame Audiofilter

Dies sind einige häufige Arten von Audiofiltern, die Sie anwenden können:

- Tiefpass: Lässt Frequenzen unterhalb der Grenzfrequenz durch und dämpft Frequenzen oberhalb der Grenzfrequenz.
- Hochpass: Lässt Frequenzen oberhalb der Grenzfrequenz durch und dämpft Frequenzen unterhalb der Grenzfrequenz.
- Bandpass: Lässt einen Frequenzbereich durch und dämpft die Frequenzen unterhalb und oberhalb dieses Frequenzbereichs.
- Low Shelf: Lässt alle Frequenzen durch, aber erhöht (oder dämpft) die unteren Frequenzen.
- High Shelf: Lässt alle Frequenzen durch, aber erhöht (oder dämpft) die höheren Frequenzen.
- Peaking: Lässt alle Frequenzen durch, erhöht (oder dämpft) aber einen Bereich von Frequenzen.
- Notch: Lässt alle Frequenzen durch, außer einem Satz von Frequenzen.
- All Pass: Lässt alle Frequenzen durch, verändert jedoch die Phasenbeziehung zwischen den verschiedenen Frequenzen.

> [!NOTE]
> Weitere Informationen finden Sie unter [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode).

### Faltungen und Impulsantworten

Es ist auch möglich, Impulsantworten auf Audio mithilfe des [`ConvolverNode`](/de/docs/Web/API/ConvolverNode) anzuwenden. Eine **Impulsantwort** ist der erzeugte Klang nach einem kurzen Impuls von Klang (wie einem Händeklatschen). Eine Impulsantwort zeigt die Umgebung an, in der der Impuls erzeugt wurde (z. B. ein Echo, das bei Klatschen in einem Tunnel entsteht).

#### Beispiel

```js
const convolver = context.createConvolver();
convolver.buffer = this.impulseResponseBuffer;
// Connect the graph.
source.connect(convolver);
convolver.connect(context.destination);
```

Sehen Sie unser [HolySpaceCow](https://mdn.github.io/webaudio-examples/holy-space-cow) Beispiel für ein angewandtes (aber sehr, sehr albernes) Beispiel.

### Räumliches Audio

Wir können Audio auch mit einem **Panner-Knoten** positionieren. Ein Panner-Knoten—[`PannerNode`](/de/docs/Web/API/PannerNode)—lässt uns ein Quellenkegel sowie positions- und richtungsverhältnisse definieren, alles in 3D-Raum, wie durch 3D-kartesische Koordinaten definiert.

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
> Sie finden ein [Beispiel in unserem GitHub-Repository](https://github.com/mdn/webaudio-examples/tree/main/panner-node) ([live ansehen](https://mdn.github.io/webaudio-examples/panner-node/) auch).

## Beispiele

- [Verschiedene Web Audio API (und andere) Beispiele](https://github.com/mdn/webaudio-examples)
- [THREE.js Video Cube Beispiel](https://github.com/chrisdavidmills/threejs-video-cube)
- [Faltungseffekte in Echtzeit](https://github.com/cwilso/web-audio-samples/blob/master/samples/audio/convolution-effects.html)

## Siehe auch

### Leitfäden

- [Manipulieren von Video mittels Canvas](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [Erläuterung von HTML playbackRate](/de/docs/Web/Media/Guides/Audio_and_video_delivery/WebAudio_playbackRate_explained)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Grundlagen der Web Audio-Räumlichkeit](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [Verwenden von Video-Frames als WebGL-Textur](/de/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL#using_the_video_frames_as_a_texture) (Sie können auch die [THREE.js](https://threejs.org/) WebGL-Bibliothek (und andere) verwenden, um [diesen Effekt zu erzielen](https://stemkoski.github.io/Three.js/Video.html))
- [Texturen in WebGL animieren](/de/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL)
- [Entwicklung von Spielaudio mit der Web Audio API (Raumeffekte und Filter) (2012)](https://web.dev/articles/webaudio-games#room_effects_and_filters)

### Referenz

- Die {{htmlelement("audio")}} und {{htmlelement("video")}} Elemente
- Die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API
- Das {{htmlelement("canvas")}} Element
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [AudioContext](/de/docs/Web/API/AudioContext)
- Mehr Informationen über [räumliches Audio](/de/docs/Web/API/BaseAudioContext/createPanner)
- [Web-Medientechnologien](/de/docs/Web/Media)
