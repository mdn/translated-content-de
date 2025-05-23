---
title: Audio- und Videomanipulation
slug: Web/Media/Guides/Audio_and_video_manipulation
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

Die Schönheit des Webs besteht darin, dass Sie Technologien kombinieren können, um neue Formen zu schaffen. Da Audio und Video nativ im Browser verfügbar sind, können wir diese Datenströme mit Technologien wie {{htmlelement("canvas")}}, [WebGL](/de/docs/Web/API/WebGL_API) oder [Web Audio API](/de/docs/Web/API/Web_Audio_API) direkt modifizieren, z.B. durch Hinzufügen von Hall-/Kompressionseffekten zu Audio oder Grau-/Sepiafiltern zu Videos. Dieser Artikel bietet eine Referenz, um zu erklären, was Sie tun müssen.

## Videomanipulation

Die Fähigkeit, die Pixelwerte jedes Frames eines Videos zu lesen, kann sehr nützlich sein.

### Video und Canvas

Das {{htmlelement("canvas")}}-Element bietet eine Oberfläche zum Zeichnen von Grafiken auf Webseiten; es ist sehr leistungsfähig und lässt sich eng mit Video koppeln.

Die allgemeine Technik ist:

1. Schreiben Sie einen Frame des {{htmlelement("video")}}-Elements auf das {{htmlelement("canvas")}}-Element.
2. Lesen Sie die Daten vom `<canvas>`-Element und manipulieren Sie sie.
3. Schreiben Sie die manipulierten Daten in Ihr "Anzeige"-`<canvas>` (das effektiv dasselbe Element sein kann).
4. Pausieren und wiederholen.

Zum Beispiel lassen Sie uns ein Video verarbeiten, um es in Graustufen anzuzeigen. In diesem Fall zeigen wir sowohl das Quellvideo als auch die resultierenden Graustufen-Frames. Normalerweise würden Sie, wenn Sie eine "Video in Graustufen abspielen"-Funktion implementieren, `display: none` zum Stil für das `<video>`-Element hinzufügen, um das Quellvideo davon abzuhalten, auf dem Bildschirm angezeigt zu werden, während nur das Canvas die veränderten Frames zeigt.

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

Sobald die Seite geladen ist, können Sie aufrufen

```js
processor.doLoad();
```

#### Ergebnis

{{EmbedLiveSample("Video_and_canvas", '100%', 580)}}

Dies ist ein Beispiel, das zeigt, wie man Videoframes mit einem Canvas manipuliert. Zur Effizienzsteigerung sollten Sie in Betracht ziehen, [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) anstelle von `setTimeout()` zu verwenden, wenn Sie in Browsern arbeiten, die dies unterstützen.

Das gleiche Ergebnis können Sie auch erzielen, indem Sie die {{cssxref("filter-function/grayscale", "grayscale()")}}-CSS-Funktion auf das Quell-`<video>`-Element anwenden.

> [!NOTE]
> Aufgrund potenzieller Sicherheitsprobleme, wenn sich Ihr Video auf einer anderen Domain als Ihr Code befindet, müssen Sie [CORS (Cross Origin Resource Sharing)](/de/docs/Web/HTTP/Guides/CORS) auf Ihrem Videoserver aktivieren.

### Video und WebGL

[WebGL](/de/docs/Web/API/WebGL_API) ist eine leistungsstarke API, die Canvas nutzt, um hardwarebeschleunigte 3D- oder 2D-Szenen zu zeichnen. Sie können WebGL mit dem {{htmlelement("video")}}-Element kombinieren, um Videotexturen zu erstellen, was bedeutet, dass Sie Videos in 3D-Szenen einfügen können.

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample8/index.html', 670, 510) }}

> [!NOTE]
> Sie können den [Quellcode dieses Demos auf GitHub finden](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample8) ([siehe es live](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample8/) auch).

### Wiedergabegeschwindigkeit

Wir können auch die Geschwindigkeit, mit der Audio und Video abgespielt werden, mit einem Attribut der {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elemente namens [`playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate) anpassen. `playbackRate` ist eine Zahl, die ein Vielfaches darstellt, das auf die Abspielgeschwindigkeit angewendet wird, z.B. steht 0.5 für halbe Geschwindigkeit, während 2 für doppelte Geschwindigkeit steht.

Beachten Sie, dass die `playbackRate`-Eigenschaft sowohl mit `<audio>` als auch `<video>` funktioniert, aber in beiden Fällen die Abspielgeschwindigkeit ändert, jedoch _nicht_ die Tonhöhe. Um die Tonhöhe des Audios zu manipulieren, müssen Sie die Web Audio API verwenden. Siehe die [`AudioBufferSourceNode.playbackRate`](/de/docs/Web/API/AudioBufferSourceNode/playbackRate)-Eigenschaft.

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

Starten Sie das Video, dann passen Sie den Schieberegler an, um die Wiedergaberate der Medien zu ändern:

{{EmbedLiveSample('playback-rate', , 450)}}

## Audiomanipulation

Abgesehen von `playbackRate` verwenden Sie zur Manipulation von Audio typischerweise die [Web Audio API](/de/docs/Web/API/Web_Audio_API).

### Auswahl einer Audioquelle

Die Web Audio API kann Audio aus verschiedenen Quellen erhalten, es dann verarbeiten und an einen [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode) senden, der das Ausgabegerät repräsentiert, an das der Ton nach der Verarbeitung gesendet wird.

| Wenn die Audioquelle ist…                                                                                                                                                                            | Verwenden Sie diesen Web Audio-Knotentyp                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Ein Audio-Track aus einem HTML {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element                                                                                                       | [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode) |
| Ein einfacher, roher Audiodatenpuffer im Speicher                                                                                                                                                    | [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)             |
| Ein Oszillator, der eine Sinuswelle oder eine andere berechnete Wellenform erzeugt                                                                                                                   | [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)                           |
| Ein Audio-Track von [WebRTC](/de/docs/Web/API/WebRTC_API) (wie zum Beispiel das Mikrofoneingangssignal, das Sie mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erhalten können). | [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)   |

### Audiofilter

Die Web Audio API verfügt über zahlreiche verschiedene Filter/Effekte, die auf Audio mit dem [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) angewendet werden können, zum Beispiel.

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
> Wenn Sie nicht [CORS](/de/docs/Web/HTTP/Guides/CORS) aktiviert haben, um Sicherheitsprobleme zu vermeiden, sollte Ihr Video sich auf der gleichen Domain wie Ihr Code befinden.

#### Häufige Audiofilter

Dies sind einige gängige Arten von Audiofilter, die Sie anwenden können:

- Tiefpass: Ermöglicht Frequenzen unterhalb der Grenzfrequenz und schwächt Frequenzen überhalb der Grenze ab.
- Hochpass: Ermöglicht Frequenzen oberhalb der Grenzfrequenz und schwächt Frequenzen unterhalb der Grenze ab.
- Bandpass: Ermöglicht einen Frequenzbereich und schwächt die Frequenzen unterhalb und oberhalb dieses Frequenzbereichs ab.
- Tiefpass-Shelf: Lässt alle Frequenzen durch, fügt aber einen Boost (oder eine Abschwächung) der tieferen Frequenzen hinzu.
- Hochpass-Shelf: Lässt alle Frequenzen durch, fügt aber einen Boost (oder eine Abschwächung) der höheren Frequenzen hinzu.
- Peaking: Lässt alle Frequenzen durch, fügt jedoch einen Boost (oder eine Abschwächung) eines Frequenzbereichs hinzu.
- Notch: Lässt alle Frequenzen durch, außer für einen Satz Frequenzen.
- Allpass: Lässt alle Frequenzen durch, ändert jedoch die Phasenbeziehung zwischen den verschiedenen Frequenzen.

> [!NOTE]
> Siehe [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) für weitere Informationen.

### Faltungen und Impulse

Es ist auch möglich, Impulsantworten auf Audio mit dem [`ConvolverNode`](/de/docs/Web/API/ConvolverNode) anzuwenden. Eine **Impulsantwort** ist der Klang, der nach einem kurzen Schallimpuls (wie einem Händeklatschen) erzeugt wird. Eine Impulsantwort wird die Umgebung anzeigen, in der der Impuls erzeugt wurde (z.B. ein Echo, das durch Händeklatschen in einem Tunnel erzeugt wird).

#### Beispiel

```js
const convolver = context.createConvolver();
convolver.buffer = this.impulseResponseBuffer;
// Connect the graph.
source.connect(convolver);
convolver.connect(context.destination);
```

Sehen Sie sich dieses [CodePen](https://codepen.io/a2sheppy/pen/JjPgVYL) für ein angewandtes (aber sehr, sehr albern; wie, kleine Kinder werden kichern) Beispiel an.

### Räumliches Audio

Wir können Audio auch mit einem **Panner-Knoten** positionieren. Ein Panner-Knoten—[`PannerNode`](/de/docs/Web/API/PannerNode)—ermöglicht es uns, einen Quellkegel sowie Positionierungs- und Richtungselemente zu definieren, alles im 3D-Raum, der mit Hilfe von 3D-kartesischen Koordinaten definiert wird.

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
> Sie können ein [Beispiel in unserem GitHub-Repository finden](https://github.com/mdn/webaudio-examples/tree/main/panner-node) ([sehen Sie es live](https://mdn.github.io/webaudio-examples/panner-node/) auch).

### JavaScript-Codecs

Es ist auch möglich, Audio auf niedriger Ebene mit JavaScript zu manipulieren. Dies kann hilfreich sein, wenn Sie Audio-Codecs erstellen möchten.

Derzeit existieren Bibliotheken für die folgenden Formate:

- AAC: [AAC.js](https://github.com/audiocogs/aac.js)
- ALAC: [alac.js](https://github.com/audiocogs/alac.js)
- FLAC: [flac.js](https://github.com/audiocogs/flac.js)
- MP3: [mp3.js](https://github.com/audiocogs/mp3.js)
- Opus: [Opus.js](https://github.com/audiocogs/opus.js)
- Vorbis: [vorbis.js](https://github.com/audiocogs/vorbis.js)

> [!NOTE]
> Bei Audiocogs können Sie [ein paar Demos ausprobieren](http://audiocogs.org/codecs/); Audiocogs bietet auch ein Framework, [Aurora.js](http://audiocogs.org/codecs/), das dazu gedacht ist, Ihnen zu helfen, Ihre eigenen Codecs in JavaScript zu erstellen.

## Beispiele

- [Verschiedene Web Audio API (und andere) Beispiele](https://github.com/mdn/webaudio-examples)
- [THREE.js Video Cube Beispiel](https://github.com/chrisdavidmills/threejs-video-cube)
- [Faltungen in Echtzeit](https://github.com/cwilso/web-audio-samples/blob/master/samples/audio/convolution-effects.html)

## Siehe auch

### Leitfäden

- [Manipulieren von Videos mit Canvas](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [HTML playbackRate erklärt](/de/docs/Web/Media/Guides/Audio_and_video_delivery/WebAudio_playbackRate_explained)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Grundlagen der Web-Audio-Raumklangverarbeitung](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [Verwendung von Videoframes als WebGL-Textur](/de/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL#using_the_video_frames_as_a_texture) (Sie können auch die [THREE.js](https://threejs.org/) WebGL-Bibliothek (und andere) verwenden, um [diesen Effekt zu erzielen](https://stemkoski.github.io/Three.js/Video.html))
- [Texturanimationen in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL)
- [Entwicklung von Spielaudio mit der Web Audio API (Raumeffekte und Filter) (2012)](https://web.dev/articles/webaudio-games#room_effects_and_filters)

### Referenz

- Die {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elemente
- Die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) API
- Das {{htmlelement("canvas")}}-Element
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [AudioContext](/de/docs/Web/API/AudioContext)
- Weitere Infos zu [räumlichem Audio](/de/docs/Web/API/BaseAudioContext/createPanner)
- [Webmedientechnologien](/de/docs/Web/Media)
