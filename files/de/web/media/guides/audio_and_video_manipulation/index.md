---
title: Audio- und Videomanipulation
slug: Web/Media/Guides/Audio_and_video_manipulation
l10n:
  sourceCommit: 5d1e83fdc0e9c55a742ec13b7a1e7c81bc8720ff
---

Die Schönheit des Webs liegt darin, dass Sie Technologien kombinieren können, um neue Formen zu schaffen. Durch native Audio- und Video-Unterstützung im Browser können wir diese Datenströme mit Technologien wie {{htmlelement("canvas")}}, [WebGL](/de/docs/Web/API/WebGL_API) oder der [Web Audio API](/de/docs/Web/API/Web_Audio_API) nutzen, um Audio und Video direkt zu modifizieren. Beispielsweise können Hall-/Kompressionseffekte zu Audio oder Grau-/Sepia-Filter zu Video hinzugefügt werden. Dieser Artikel bietet eine Referenz zur Erklärung der notwendigen Schritte.

## Videomanipulation

Die Fähigkeit, die Pixelwerte jedes Videobildes auszulesen, kann sehr nützlich sein.

### Video und Canvas

Das {{htmlelement("canvas")}}-Element bietet eine Oberfläche zum Zeichnen von Grafiken auf Webseiten; es ist sehr leistungsfähig und kann eng mit Video gekoppelt werden.

Die allgemeine Technik besteht darin:

1. Ein Bild vom {{htmlelement("video")}}-Element in das {{htmlelement("canvas")}}-Element zu schreiben.
2. Die Daten aus dem `<canvas>`-Element auszulesen und zu bearbeiten.
3. Die bearbeiteten Daten in Ihr "Anzeige"-`<canvas>` zu schreiben (das effektiv dasselbe Element sein kann).
4. Anhalten und wiederholen.

Zum Beispiel, um ein Video in Graustufen anzuzeigen. In diesem Fall zeigen wir sowohl das Quellvideo als auch die ausgegebenen Graustufenbilder. Normalerweise, wenn Sie ein "Video in Graustufen abspielen"-Feature implementieren, würden Sie wahrscheinlich `display: none` für das `<video>`-Element in den Stil integrieren, um das Quellvideo davon abzuhalten, auf dem Bildschirm angezeigt zu werden, während nur die geänderten Bilder im Canvas angezeigt werden.

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

Sobald die Seite geladen ist, können Sie folgende Funktion aufrufen:

```js
processor.doLoad();
```

#### Ergebnis

{{EmbedLiveSample("Video_and_canvas", '100%', 580)}}

Dies ist ein Beispiel, das zeigt, wie man Videobilder mit einem Canvas manipuliert. Aus Effizienzgründen sollten Sie den Einsatz von [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) anstelle von `setTimeout()` in Erwägung ziehen, wenn Sie in Browsern arbeiten, die es unterstützen.

Das gleiche Ergebnis kann durch Anwendung der {{cssxref("filter-function/grayscale", "grayscale()")}} CSS-Funktion auf das Quell-`<video>`-Element erzielt werden.

> [!NOTE]
> Aufgrund potenzieller Sicherheitsprobleme, wenn Ihr Video sich auf einer anderen Domain als Ihr Code befindet, müssen Sie [CORS (Cross Origin Resource Sharing)](/de/docs/Web/HTTP/Guides/CORS) auf Ihrem Videoserver aktivieren.

### Video und WebGL

[WebGL](/de/docs/Web/API/WebGL_API) ist eine leistungsstarke API, die Canvas verwendet, um hardwarebeschleunigte 3D- oder 2D-Szenen zu zeichnen. Sie können WebGL und das {{htmlelement("video")}}-Element kombinieren, um Videotexturen zu erstellen, was bedeutet, dass Sie Video in 3D-Szenen einbetten können.

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample8/index.html', 670, 510) }}

> [!NOTE]
> Den [Quellcode dieses Demos finden Sie auf GitHub](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample8) ([sehen Sie es sich live an](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample8/)).

### Wiedergabegeschwindigkeit

Wir können auch die Geschwindigkeit, mit der Audio und Video wiedergegeben werden, mit einem Attribut des {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elements namens [`playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate) anpassen. `playbackRate` ist eine Zahl, die einen Multiplikator darstellt, der auf die Abspielgeschwindigkeit angewendet wird, zum Beispiel repräsentiert 0.5 halbe Geschwindigkeit, während 2 doppelte Geschwindigkeit bedeutet.

Beachten Sie, dass die `playbackRate`-Eigenschaft sowohl mit `<audio>` als auch `<video>` funktioniert, aber in beiden Fällen die Abspielgeschwindigkeit und _nicht_ die Tonhöhe ändert. Um die Tonhöhe des Audios zu manipulieren, müssen Sie die Web Audio API verwenden. Siehe die [`AudioBufferSourceNode.playbackRate`](/de/docs/Web/API/AudioBufferSourceNode/playbackRate)-Eigenschaft.

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

Starten Sie das Video und passen Sie den Schieberegler an, um die Wiedergabegeschwindigkeit der Medien zu ändern:

{{EmbedLiveSample('playback-rate', , 450)}}

## Audiomanipulation

Abgesehen von `playbackRate` verwenden Sie typischerweise die [Web Audio API](/de/docs/Web/API/Web_Audio_API), um Audio zu manipulieren.

### Auswahl einer Audioquelle

Die Web Audio API kann Audio aus einer Vielzahl von Quellen empfangen, es dann verarbeiten und an einen [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode) senden, der das Ausgabegerät repräsentiert, an welches der Ton nach der Verarbeitung gesendet wird.

| Wenn die Audioquelle ist…                                                                                                                                                               | Verwenden Sie diesen Web Audio-Knotentyp                                      |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Ein Audiotrack aus einem HTML-{{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element                                                                                           | [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode) |
| Ein einfacher Roh-Audiodatenpuffer im Speicher                                                                                                                                          | [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)             |
| Ein Oszillator, der eine Sinuswelle oder eine andere berechnete Wellenform erzeugt                                                                                                      | [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)                           |
| Ein Audiotrack aus [WebRTC](/de/docs/Web/API/WebRTC_API) (wie das Mikrofoneingangssignal, das Sie über [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erhalten können). | [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)   |

### Audiofilter

Die Web Audio API verfügt über eine Vielzahl von Filtern/Effekten, die auf Audio angewendet werden können, beispielsweise mithilfe des [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode).

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
> Sofern Sie nicht [CORS](/de/docs/Web/HTTP/Guides/CORS) aktiviert haben, sollte Ihr Video zur Vermeidung von Sicherheitsproblemen in derselben Domain wie Ihr Code liegen.

#### Häufige Audiofilter

Dies sind einige gängige Arten von Audiofiltern, die Sie anwenden können:

- Tiefpass: Lässt Frequenzen unterhalb der Grenzfrequenz durch und dämpft Frequenzen über der Grenzfrequenz.
- Hochpass: Lässt Frequenzen oberhalb der Grenzfrequenz durch und dämpft Frequenzen unterhalb der Grenzfrequenz.
- Bandpass: Lässt einen Frequenzbereich passieren und dämpft die Frequenzen unterhalb und oberhalb dieses Bereichs.
- Tiefenbetonung: Lässt alle Frequenzen durch, fügt aber den niedrigeren Frequenzen einen Boost (oder eine Dämpfung) hinzu.
- Höhenbetonung: Lässt alle Frequenzen durch, fügt aber den höheren Frequenzen einen Boost (oder eine Dämpfung) hinzu.
- Peaking: Lässt alle Frequenzen durch, fügt jedoch einem Bereich von Frequenzen einen Boost (oder eine Dämpfung) hinzu.
- Kerbe: Lässt alle Frequenzen durch, außer einem Satz von Frequenzen.
- Allpass: Lässt alle Frequenzen durch, ändert jedoch die Phasenbeziehung zwischen den verschiedenen Frequenzen.

> [!NOTE]
> Siehe [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) für weitere Informationen.

### Faltungen und Impulse

Es ist auch möglich, Impulsantworten auf Audio mit dem [`ConvolverNode`](/de/docs/Web/API/ConvolverNode) anzuwenden. Eine **Impulsantwort** ist der Klang, der nach einem kurzen Impuls (wie einem Händeklatschen) entsteht. Eine Impulsantwort signalisiert die Umgebung, in welcher der Impuls erzeugt wurde (zum Beispiel, ein Echo, das durch Händeklatschen in einem Tunnel erzeugt wird).

#### Beispiel

```js
const convolver = context.createConvolver();
convolver.buffer = this.impulseResponseBuffer;
// Connect the graph.
source.connect(convolver);
convolver.connect(context.destination);
```

Sehen Sie sich dieses [CodePen](https://codepen.io/a2sheppy/pen/JjPgVYL) für ein angewandtes (aber sehr, sehr albernes; wie, kleine Kinder werden kichern) Beispiel an.

### Räumlicher Klang

Wir können Audio auch mit einem **Panner-Knoten** positionieren. Ein Panner-Knoten—[`PannerNode`](/de/docs/Web/API/PannerNode)—ermöglicht es uns, einen Quellkegel sowie Positions- und Richtungselemente zu definieren, alles im 3D-Raum, der mithilfe kartesischer 3D-Koordinaten definiert ist.

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
> Sie können ein [Beispiel in unserem GitHub-Repository finden](https://github.com/mdn/webaudio-examples/tree/main/panner-node) ([sehen Sie es live](https://mdn.github.io/webaudio-examples/panner-node/)).

### JavaScript-Codecs

Es ist auch möglich, Audio auf niedriger Ebene mit JavaScript zu manipulieren. Dies kann nützlich sein, wenn Sie eigene Audiocodecs erstellen möchten.

Aktuell existieren Bibliotheken für folgende Formate:

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
- [THREE.js Video-Würfel-Beispiel](https://github.com/chrisdavidmills/threejs-video-cube)
- [Faltungseffekte in Echtzeit](https://github.com/cwilso/web-audio-samples/blob/master/samples/audio/convolution-effects.html)

## Siehe auch

### Leitfäden

- [Manipulation von Video mit Canvas](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [HTML playbackRate erklärt](/de/docs/Web/Media/Guides/Audio_and_video_delivery/WebAudio_playbackRate_explained)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Grundlagen der räumlichen Audiopositionierung mit Web Audio](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [Verwendung von Videobildern als WebGL Textur](/de/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL#using_the_video_frames_as_a_texture) (Sie können auch die [THREE.js](https://threejs.org/) WebGL-Bibliothek (und andere) verwenden, um [diesen Effekt zu erreichen](https://stemkoski.github.io/Three.js/Video.html))
- [Animation von Texturen in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL)
- [Entwicklung von Spielesound mit der Web Audio API (Raumeffekte und Filter) (2012)](https://web.dev/articles/webaudio-games#room_effects_and_filters)

### Referenz

- Die {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elemente
- Die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API
- Das {{htmlelement("canvas")}}-Element
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [AudioContext](/de/docs/Web/API/AudioContext)
- Mehr Informationen über [Räumliches Audio](/de/docs/Web/API/BaseAudioContext/createPanner)
- [Web Medientechnologien](/de/docs/Web/Media)
