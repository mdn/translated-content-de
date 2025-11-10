---
title: Audio- und Videomanipulation
slug: Web/Media/Guides/Audio_and_video_manipulation
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

Die Schönheit des Webs liegt darin, dass Sie Technologien kombinieren können, um neue Formen zu erschaffen. Da Audio und Video nativ im Browser vorhanden sind, können wir diese Datenströme mit Technologien wie {{htmlelement("canvas")}}, [WebGL](/de/docs/Web/API/WebGL_API) oder [Web Audio API](/de/docs/Web/API/Web_Audio_API) verwenden, um Audio und Video direkt zu modifizieren. Zum Beispiel, indem wir Nachhall-/Kompressionseffekte zu Audio hinzufügen oder Grau-/Sepia-Filter zu Video. Dieser Artikel bietet eine Referenz, um zu erklären, was Sie tun müssen.

## Videomanipulation

Die Fähigkeit, die Pixelwerte jedes Frames eines Videos zu lesen, kann sehr nützlich sein.

### Video und Canvas

Das {{htmlelement("canvas")}}-Element bietet eine Fläche zum Zeichnen von Grafiken auf Webseiten; es ist sehr leistungsfähig und kann eng mit Video verbunden werden.

Die allgemeine Technik besteht darin:

1. Ein Frame vom {{htmlelement("video")}}-Element in das {{htmlelement("canvas")}}-Element zu schreiben.
2. Die Daten vom `<canvas>`-Element zu lesen und zu manipulieren.
3. Die manipulierten Daten auf Ihr "Anzeigecanvas" zu schreiben (welches effektiv dasselbe Element sein kann).
4. Anhalten und wiederholen.

Zum Beispiel, lassen Sie uns ein Video im Graustufenformat darstellen. In diesem Fall zeigen wir sowohl das Quellvideo als auch die Ausgabe-Graustufenframes. Normalerweise würden Sie, wenn Sie eine "Video in Graustufen abspielen"-Funktion implementieren, wahrscheinlich `display: none` zum Stil des `<video>`-Elements hinzufügen, um zu verhindern, dass das Quellvideo auf dem Bildschirm angezeigt wird, während nur das Canvas die veränderten Frames zeigt.

#### HTML

Wir können unseren Videoplayer und unser `<canvas>`-Element wie folgt einrichten:

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

Sobald die Seite geladen ist, können Sie aufrufen

```js
processor.doLoad();
```

#### Ergebnis

{{EmbedLiveSample("Video_and_canvas", '100%', 580)}}

Dies ist ein Beispiel, das zeigt, wie man Videoframes mit einem Canvas manipuliert. Für mehr Effizienz sollten Sie in Betracht ziehen, [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) anstelle von `setTimeout()` zu verwenden, wenn es von Browsern unterstützt wird.

Das gleiche Ergebnis kann erreicht werden, indem die {{cssxref("filter-function/grayscale", "grayscale()")}} CSS-Funktion auf das Quell-`<video>`-Element angewendet wird.

> [!NOTE]
> Aufgrund potenzieller Sicherheitsprobleme, wenn Ihr Video auf einer anderen Domain als Ihr Code liegt, müssen Sie [CORS (Cross Origin Resource Sharing)](/de/docs/Web/HTTP/Guides/CORS) auf Ihrem Videoserver aktivieren.

### Video und WebGL

[WebGL](/de/docs/Web/API/WebGL_API) ist eine leistungsfähige API, die Canvas verwendet, um hardware-beschleunigte 3D- oder 2D-Szenen zu zeichnen. Sie können WebGL und das {{htmlelement("video")}}-Element kombinieren, um Videotexturen zu erstellen, was bedeutet, dass Sie Video in 3D-Szenen platzieren können.

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample8/index.html', 670, 510)}}

> [!NOTE]
> Den [Quellcode dieses Demos finden Sie auf GitHub](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample8) ([siehe es live](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample8/) auch).

### Wiedergabegeschwindigkeit

Wir können auch die Rate, mit der Audio und Video abgespielt werden, einstellen, indem wir ein Attribut des {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elements namens [`playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate) verwenden. `playbackRate` ist eine Zahl, die ein Vielfaches darstellt, das auf die Wiedergabegeschwindigkeit angewendet werden soll, zum Beispiel stellt 0.5 halbe Geschwindigkeit und 2 doppelte Geschwindigkeit dar.

Beachten Sie, dass die `playbackRate`-Eigenschaft sowohl mit `<audio>` als auch `<video>` funktioniert, aber in beiden Fällen die Wiedergabegeschwindigkeit verändert, jedoch _nicht_ die Tonhöhe. Um die Tonhöhe der Audiodatei zu manipulieren, müssen Sie die Web Audio API verwenden. Sehen Sie die [`AudioBufferSourceNode.playbackRate`](/de/docs/Web/API/AudioBufferSourceNode/playbackRate) Eigenschaft.

```html live-sample___playback-rate
<video id="my-video" controls loop>
  <source src="/shared-assets/videos/flower.mp4" type="video/mp4" />
  <source src="/shared-assets/videos/flower.webm" type="video/webm" />
</video>
<label for="rate">Playback rate <span id="rate-value">1.0</span></label>
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

Starten Sie das Video und passen Sie den Schieberegler an, um die Wiedergabegeschwindigkeit des Mediums zu ändern:

{{EmbedLiveSample('playback-rate', , 450)}}

## Audiomanipulation

Abgesehen von `playbackRate` werden Sie zur Manipulation von Audiodateien normalerweise die [Web Audio API](/de/docs/Web/API/Web_Audio_API) verwenden.

### Auswahl einer Audioquelle

Die Web Audio API kann Audio aus verschiedenen Quellen empfangen, dann verarbeiten und zurück an einen [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode) senden, welcher das Ausgabegerät repräsentiert, an das der Ton nach der Verarbeitung gesendet wird.

| Wenn die Audioquelle ist…                                                                                                                                                                       | Verwenden Sie diesen Web-Audio-Node-Typ                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Ein Audiotrack von einem HTML {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Element                                                                                                    | [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode) |
| Ein reiner, roher Audiodaten-Buffer im Speicher                                                                                                                                                 | [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)             |
| Ein Oszillator, der eine Sinuswelle oder eine andere berechnete Wellenform erzeugt                                                                                                              | [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)                           |
| Ein Audiotrack von [WebRTC](/de/docs/Web/API/WebRTC_API) (zum Beispiel das Mikrofoneingangssignal, das Sie mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erhalten können). | [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)   |

### Audiofilter

Die Web Audio API hat viele verschiedene Filter/Effekte, die auf Audio mit dem [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) angewendet werden können, zum Beispiel.

```html live-sample___audio-filter
<video id="my-video" controls loop>
  <source src="/shared-assets/videos/friday.mp4" type="video/mp4" />
</video>
<label for="freq">Filter freq. <span id="freq-value">1.0</span>hz</label>
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
> Sofern Sie nicht [CORS](/de/docs/Web/HTTP/Guides/CORS) aktiviert haben, sollte zu Vermeidung von Sicherheitsproblemen Ihr Video auf derselben Domain wie Ihr Code liegen.

#### Häufige Audiofilter

Dies sind einige gängige Arten von Audiofiltern, die Sie anwenden können:

- Tiefpass: Lässt Frequenzen unterhalb der Grenzfrequenz passieren und dämpft Frequenzen oberhalb der Grenzfrequenz.
- Hochpass: Lässt Frequenzen oberhalb der Grenzfrequenz passieren und dämpft Frequenzen unterhalb der Grenzfrequenz.
- Bandpass: Lässt einen Frequenzbereich durch und dämpft die Frequenzen unterhalb und oberhalb dieses Bereichs.
- Low Shelf: Lässt alle Frequenzen durch, fügt jedoch einen Schub (oder eine Dämpfung) zu den tieferen Frequenzen hinzu.
- High Shelf: Lässt alle Frequenzen durch, fügt jedoch einen Schub (oder eine Dämpfung) zu den höheren Frequenzen hinzu.
- Peaking: Lässt alle Frequenzen durch, fügt jedoch einen Schub (oder eine Dämpfung) zu einem Frequenzbereich hinzu.
- Kerbe: Lässt alle Frequenzen durch, außer für einen Satz von Frequenzen.
- Allpass: Lässt alle Frequenzen durch, verändert jedoch die Phasenbeziehung zwischen den einzelnen Frequenzen.

> [!NOTE]
> Weitere Informationen finden Sie bei [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode).

### Faltungen und Impulse

Es ist auch möglich, Impulsantworten auf Audio anzuwenden, indem der [`ConvolverNode`](/de/docs/Web/API/ConvolverNode) verwendet wird. Eine **Impulsantwort** ist der Ton, der nach einem kurzen Schallimpuls (wie einem Händeklatschen) erzeugt wird. Eine Impulsantwort wird die Umgebung signalisieren, in der der Impuls erzeugt wurde (zum Beispiel ein Echo, das durch Klatschen in einem Tunnel entsteht).

#### Beispiel

```js
const convolver = context.createConvolver();
convolver.buffer = this.impulseResponseBuffer;
// Connect the graph.
source.connect(convolver);
convolver.connect(context.destination);
```

Sehen Sie sich unser [HolySpaceCow](https://mdn.github.io/webaudio-examples/holy-space-cow/)-Beispiel für ein angewandtes (aber sehr, sehr albernes) Beispiel an.

### Räumliches Audio

Wir können Audio auch mit einem **Panner-Node** positionieren. Ein Panner-Node—[`PannerNode`](/de/docs/Web/API/PannerNode)—ermöglicht es uns, eine Quellkegel sowie positionale und richtungsweisende Elemente zu definieren, alles in einem 3D-Raum, der mit 3D-Kartesischen Koordinaten definiert wird.

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
> Ein [Beispiel in unserem GitHub-Repository](https://github.com/mdn/webaudio-examples/tree/main/panner-node) ([sehen Sie es live](https://mdn.github.io/webaudio-examples/panner-node/) auch) finden Sie dort.

## Beispiele

- [Verschiedene Web Audio API (und andere) Beispiele](https://github.com/mdn/webaudio-examples)
- [THREE.js Video Cube Beispiel](https://github.com/chrisdavidmills/threejs-video-cube)
- [Faltungseffekte in Echtzeit](https://github.com/cwilso/web-audio-samples/blob/master/samples/audio/convolution-effects.html)

## Siehe auch

### Leitfäden

- [Manipulieren von Video mit Canvas](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [HTML-Wiedergabegeschwindigkeit (`playbackRate`) erklärt](/de/docs/Web/Media/Guides/Audio_and_video_delivery/WebAudio_playbackRate_explained)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Grundlagen der räumlichen Audiowiedergabe im Web](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [Verwendung von Videoframes als WebGL-Textur](/de/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL#using_the_video_frames_as_a_texture) (Sie können auch die [THREE.js](https://threejs.org/) WebGL-Bibliothek (und andere) verwenden, um [diesen Effekt zu erzielen](https://stemkoski.github.io/Three.js/Video.html))
- [Texturen animieren in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL)
- [Entwicklung von Spielaudio mit der Web Audio API (Raumeffekte und Filter) (2012)](https://web.dev/articles/webaudio-games#room_effects_and_filters)

### Referenz

- Die {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elemente
- Die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API
- Das {{htmlelement("canvas")}}-Element
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [AudioContext](/de/docs/Web/API/AudioContext)
- Mehr Informationen über [Räumliches Audio](/de/docs/Web/API/BaseAudioContext/createPanner)
- [Web-Medientechnologien](/de/docs/Web/Media)
