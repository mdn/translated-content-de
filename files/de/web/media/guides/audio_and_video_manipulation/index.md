---
title: Audio- und Videomanipulation
slug: Web/Media/Guides/Audio_and_video_manipulation
l10n:
  sourceCommit: 90e5b796c5741c209aaa674e9ff86d4d7c8e0427
---

Die Schönheit des Webs liegt darin, dass Sie Technologien kombinieren können, um neue Formen zu schaffen. Mit nativem Audio und Video im Browser können wir diese Datenströme mit Technologien wie {{htmlelement("canvas")}}, [WebGL](/de/docs/Web/API/WebGL_API) oder [Web Audio API](/de/docs/Web/API/Web_Audio_API) verwenden, um Audio und Video direkt zu modifizieren, zum Beispiel durch Hinzufügen von Reverb-/Kompressionseffekten zu Audio oder Graustufen-/Sepiafiltern zu Video. Dieser Artikel bietet eine Referenz, um zu erklären, was Sie tun müssen.

## Videomanipulation

Die Möglichkeit, die Pixelwerte von jedem Frame eines Videos zu lesen, kann sehr nützlich sein.

### Video und Canvas

Das {{htmlelement("canvas")}}-Element bietet eine Oberfläche zum Zeichnen von Grafiken auf Webseiten; es ist sehr leistungsfähig und kann eng mit Video gekoppelt werden.

Die allgemeine Technik besteht darin:

1. Ein Frame aus dem {{htmlelement("video")}}-Element in das {{htmlelement("canvas")}}-Element zu schreiben.
2. Die Daten aus dem `<canvas>`-Element zu lesen und zu manipulieren.
3. Die manipulierten Daten auf Ihr "Anzeige"-`<canvas>` zu schreiben (was effektiv dasselbe Element sein kann).
4. Pause und wiederholen.

Zum Beispiel, lassen Sie uns ein Video verarbeiten, um es in Graustufen anzuzeigen. In diesem Fall zeigen wir sowohl das Quellvideo als auch die ausgegebenen Graustufen-Frames. Normalerweise, wenn Sie eine "Video in Graustufen abspielen"-Funktion implementieren würden, würden Sie wahrscheinlich `display: none` zum Stil für das `<video>`-Element hinzufügen, um das Quellvideo davon abzuhalten, auf dem Bildschirm gezeichnet zu werden, während nur das Canvas die geänderten Frames zeigt.

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

Dieser Code bearbeitet die Änderung der Frames.

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

Sobald die Seite geladen ist, können Sie aufrufen:

```js
processor.doLoad();
```

#### Ergebnis

{{EmbedLiveSample("Video_and_canvas", '100%', 580)}}

Dies ist ein Beispiel, das zeigt, wie man Videoframes mit einem Canvas manipuliert. Für mehr Effizienz sollten Sie in Betracht ziehen, [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) anstelle von `setTimeout()` zu verwenden, wenn Sie auf Browsern arbeiten, die es unterstützen.

Sie können dasselbe Ergebnis erzielen, indem Sie die {{cssxref("filter-function/grayscale", "grayscale()")}} CSS-Funktion auf das Quell-`<video>`-Element anwenden.

> [!NOTE]
> Aufgrund potenzieller Sicherheitsprobleme, wenn Ihr Video auf einer anderen Domain als Ihr Code liegt, müssen Sie [CORS (Cross Origin Resource Sharing)](/de/docs/Web/HTTP/Guides/CORS) auf Ihrem Videoserver aktivieren.

### Video und WebGL

[WebGL](/de/docs/Web/API/WebGL_API) ist eine leistungsstarke API, die Canvas verwendet, um hardwarebeschleunigte 3D- oder 2D-Szenen zu zeichnen. Sie können WebGL und das {{htmlelement("video")}}-Element kombinieren, um Videotexturen zu erstellen, was bedeutet, dass Sie Video in 3D-Szenen einfügen können.

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample8/index.html', 670, 510) }}

> [!NOTE]
> Sie finden den [Quellcode dieses Demos auf GitHub](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample8) ([sehen Sie es live](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample8/) auch).

### Wiedergabegeschwindigkeit

Wir können auch die Geschwindigkeit anpassen, mit der Audio und Video abgespielt werden, indem wir ein Attribut der {{htmlelement("audio")}} und {{htmlelement("video")}}-Elemente namens [`playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate) verwenden. `playbackRate` ist eine Zahl, die ein Vielfaches darstellt, das auf die Wiedergabegeschwindigkeit angewendet wird, zum Beispiel steht 0,5 für die halbe Geschwindigkeit, während 2 für die doppelte Geschwindigkeit steht.

Beachten Sie, dass die `playbackRate`-Eigenschaft sowohl mit `<audio>` als auch mit `<video>` funktioniert, aber in beiden Fällen die Wiedergabegeschwindigkeit ändert, jedoch _nicht_ die Tonhöhe. Um die Tonhöhe des Audios zu manipulieren, müssen Sie die Web Audio API verwenden. Siehe die [`AudioBufferSourceNode.playbackRate`](/de/docs/Web/API/AudioBufferSourceNode/playbackRate)-Eigenschaft.

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

Starten Sie das Video und passen Sie dann den Schieberegler an, um die Wiedergabegeschwindigkeit der Medien zu ändern:

{{EmbedLiveSample('playback-rate', , 450)}}

## Audiomanipulation

Abgesehen von `playbackRate`, wenn Sie Audio manipulieren möchten, verwenden Sie normalerweise die [Web Audio API](/de/docs/Web/API/Web_Audio_API).

### Eine Audioquelle auswählen

Die Web Audio API kann Audio von einer Vielzahl von Quellen empfangen, es dann verarbeiten und an einen [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode) senden, der das Ausgabegerät repräsentiert, an das der Ton nach der Verarbeitung gesendet wird.

| Wenn die Audioquelle ist…                                                                                                                                                       | Verwenden Sie diesen Web Audio-Knotentyp                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Ein Audiotrack von einem HTML {{HTMLElement("audio")}} oder {{HTMLElement("video")}}-Element                                                                                    | [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode) |
| Ein einfacher roher Audiodatenpuffer im Speicher                                                                                                                                | [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)             |
| Ein Oszillator, der eine Sinuswelle oder eine andere berechnete Wellenform erzeugt                                                                                              | [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)                           |
| Ein Audiotrack von [WebRTC](/de/docs/Web/API/WebRTC_API) (wie das Mikrofoneingang, das Sie mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erhalten können). | [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)   |

### Audiofilter

Die Web Audio API hat viele verschiedene Filter/Effekte, die auf Audio angewendet werden können, zum Beispiel mit dem [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode).

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
> Sofern Sie nicht [CORS](/de/docs/Web/HTTP/Guides/CORS) aktiviert haben, sollte Ihr Video aus Sicherheitsgründen auf derselben Domain wie Ihr Code sein.

#### Allgemeine Audiofilter

Dies sind einige gängige Arten von Audiofiltern, die Sie anwenden können:

- Low Pass: Lässt Frequenzen unterhalb der Grenzfrequenz durch und dämpft Frequenzen über der Grenzfrequenz.
- High Pass: Lässt Frequenzen oberhalb der Grenzfrequenz durch und dämpft Frequenzen unter der Grenzfrequenz.
- Band Pass: Lässt einen Bereich von Frequenzen durch und dämpft die Frequenzen unterhalb und oberhalb dieses Frequenzbereichs.
- Low Shelf: Lässt alle Frequenzen durch, aber fügt den unteren Frequenzen eine Verstärkung (oder Dämpfung) hinzu.
- High Shelf: Lässt alle Frequenzen durch, aber fügt den höheren Frequenzen eine Verstärkung (oder Dämpfung) hinzu.
- Peaking: Lässt alle Frequenzen durch, aber fügt einem Bereich von Frequenzen eine Verstärkung (oder Dämpfung) hinzu.
- Notch: Lässt alle Frequenzen durch, außer für einen Satz von Frequenzen.
- All Pass: Lässt alle Frequenzen durch, ändert aber die Phasenbeziehung zwischen den verschiedenen Frequenzen.

> [!NOTE]
> Siehe [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) für weitere Informationen.

### Faltungen und Impulse

Es ist auch möglich, Impulsantworten auf Audio mit dem [`ConvolverNode`](/de/docs/Web/API/ConvolverNode) anzuwenden. Eine **Impulsantwort** ist der Klang, der nach einem kurzen Impuls von Geräusch (wie einem Händeklatschen) erstellt wird. Eine Impulsantwort wird die Umgebung signalisieren, in der der Impuls erzeugt wurde (zum Beispiel ein Echo, das durch Händeklatschen in einem Tunnel erzeugt wird).

#### Beispiel

```js
const convolver = context.createConvolver();
convolver.buffer = this.impulseResponseBuffer;
// Connect the graph.
source.connect(convolver);
convolver.connect(context.destination);
```

Sehen Sie sich unser [HolySpaceCow](https://mdn.github.io/webaudio-examples/holy-space-cow/) Beispiel für ein angewandtes (aber sehr, sehr albernes) Beispiel an.

### Räumliches Audio

Wir können auch Audio mithilfe eines **Panoramaknotens** positionieren. Ein Panoramaknoten—[`PannerNode`](/de/docs/Web/API/PannerNode)—ermöglicht es uns, einen Quellkegel sowie Positions- und Richtungselemente festzulegen, alles in einem 3D-Raum, definiert durch kartesische 3D-Koordinaten.

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
> Sie finden ein [Beispiel in unserem GitHub-Repository](https://github.com/mdn/webaudio-examples/tree/main/panner-node) ([sehen Sie es live](https://mdn.github.io/webaudio-examples/panner-node/) auch).

## Beispiele

- [Verschiedene Web Audio API (und andere) Beispiele](https://github.com/mdn/webaudio-examples)
- [THREE.js Video Cube Beispiel](https://github.com/chrisdavidmills/threejs-video-cube)
- [Faltungseffekte in Echtzeit](https://github.com/cwilso/web-audio-samples/blob/master/samples/audio/convolution-effects.html)

## Siehe auch

### Leitfäden

- [Video mit Canvas manipulieren](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [HTML playbackRate erklärt](/de/docs/Web/Media/Guides/Audio_and_video_delivery/WebAudio_playbackRate_explained)
- [Die Web Audio API verwenden](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Grundlagen der Web-Audioräumlichkeitsbestimmung](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [Video-Frames als WebGL-Textur verwenden](/de/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL#using_the_video_frames_as_a_texture) (Sie können auch die [THREE.js](https://threejs.org/) WebGL-Bibliothek (und andere) verwenden, um [diesen Effekt zu erzielen](https://stemkoski.github.io/Three.js/Video.html))
- [Texturen in WebGL animieren](/de/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL)
- [Spiele-Audio mit der Web Audio API entwickeln (Raumeffekte und Filter) (2012)](https://web.dev/articles/webaudio-games#room_effects_and_filters)

### Referenz

- Die {{htmlelement("audio")}} und {{htmlelement("video")}} Elemente
- Die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API
- Das {{htmlelement("canvas")}} Element
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [AudioContext](/de/docs/Web/API/AudioContext)
- Mehr Informationen über [Räumliches Audio](/de/docs/Web/API/BaseAudioContext/createPanner)
- [Webmedientechnologien](/de/docs/Web/Media)
