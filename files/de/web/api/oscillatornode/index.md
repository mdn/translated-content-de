---
title: OscillatorNode
slug: Web/API/OscillatorNode
l10n:
  sourceCommit: 4ccd81240a6d531962fab92886631885a90bfa3c
---

{{APIRef("Web Audio API")}}

Die **`OscillatorNode`**-Schnittstelle repräsentiert eine periodische Wellenform, beispielsweise eine Sinuswelle. Sie ist ein Audioverarbeitungsmodul vom Typ [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode), das eine Welle mit einer festgelegten Frequenz erzeugt – also einen konstanten Ton.

{{InheritanceDiagram}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anzahl der Eingänge</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Anzahl der Ausgänge</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalanzahlmodus</th>
      <td><code>max</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalanzahl</th>
      <td><code>2</code> (wird im standardmäßigen Kanalanzahlmodus nicht verwendet)</td>
    </tr>
    <tr>
      <th scope="row">Kanalinterpretation</th>
      <td><code>speakers</code></td>
    </tr>
  </tbody>
</table>

## Konstruktor

- [`OscillatorNode()`](/de/docs/Web/API/OscillatorNode/OscillatorNode)
  - : Erstellt eine neue Instanz eines `OscillatorNode`-Objekts. Optional kann ein Objekt mit Standardwerten für die [Eigenschaften](#instanzeigenschaften) des Knotens übergeben werden. Alternativ können Sie die Factory-Methode [`BaseAudioContext.createOscillator()`](/de/docs/Web/API/BaseAudioContext/createOscillator) verwenden; siehe [Erstellen eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Instanzeigenschaften

_Erbt außerdem Eigenschaften von der übergeordneten Schnittstelle [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)._

- [`OscillatorNode.frequency`](/de/docs/Web/API/OscillatorNode/frequency) {{ReadOnlyInline}}
  - : Ein [a-rate](/de/docs/Web/API/AudioParam#a-rate)-[`AudioParam`](/de/docs/Web/API/AudioParam), der die Schwingungsfrequenz in Hertz angibt (der Wert des `AudioParam` kann geändert werden). Der Standardwert beträgt 440 Hz (der Kammerton A).
- [`OscillatorNode.detune`](/de/docs/Web/API/OscillatorNode/detune) {{ReadOnlyInline}}
  - : Ein [a-rate](/de/docs/Web/API/AudioParam#a-rate)-[`AudioParam`](/de/docs/Web/API/AudioParam), der die Verstimmung der Schwingung in Cent angibt (der Wert des `AudioParam` kann geändert werden). Der Standardwert ist 0.
- [`OscillatorNode.type`](/de/docs/Web/API/OscillatorNode/type)
  - : Eine Zeichenfolge, die die Form der abzuspielenden Wellenform festlegt. Sie kann einen von mehreren Standardwerten annehmen oder `custom`, um mit einer [`PeriodicWave`](/de/docs/Web/API/PeriodicWave) eine benutzerdefinierte Wellenform zu beschreiben. Unterschiedliche Wellenformen erzeugen unterschiedliche Klänge. Die Standardwerte sind `"sine"`, `"square"`, `"sawtooth"`, `"triangle"` und `"custom"`. Der Vorgabewert ist `"sine"`.

## Instanzmethoden

_Erbt außerdem Methoden von der übergeordneten Schnittstelle [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)._

- [`OscillatorNode.setPeriodicWave()`](/de/docs/Web/API/OscillatorNode/setPeriodicWave)
  - : Legt eine [`PeriodicWave`](/de/docs/Web/API/PeriodicWave) fest, die eine periodische Wellenform beschreibt und anstelle einer der Standardwellenformen verwendet wird. Durch den Aufruf wird `type` auf `custom` gesetzt.
- [`AudioScheduledSourceNode.start()`](/de/docs/Web/API/AudioScheduledSourceNode/start)
  - : Legt den genauen Zeitpunkt fest, zu dem die Wiedergabe des Tons beginnt.
- [`AudioScheduledSourceNode.stop()`](/de/docs/Web/API/AudioScheduledSourceNode/stop)
  - : Legt den Zeitpunkt fest, zu dem die Wiedergabe des Tons endet.

## Ereignisse

_Erbt außerdem Ereignisse von der übergeordneten Schnittstelle [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)._

## Beispiele

### Verwendung eines OscillatorNode

Das folgende Beispiel zeigt die grundlegende Verwendung eines [`AudioContext`](/de/docs/Web/API/AudioContext), um einen Oszillatorknoten zu erstellen und mit ihm einen Ton abzuspielen. Ein Anwendungsbeispiel finden Sie in unserer [Violent-Theremin-Demo](https://mdn.github.io/webaudio-examples/violent-theremin/) ([siehe app.js](https://github.com/mdn/webaudio-examples/blob/main/violent-theremin/scripts/app.js) für den relevanten Code).

```js
// create web audio api context
const audioCtx = new AudioContext();

// create Oscillator node
const oscillator = audioCtx.createOscillator();

oscillator.type = "square";
oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // value in hertz
oscillator.connect(audioCtx.destination);
oscillator.start();
```

### Verschiedene Typen von Oszillatorknoten

Die vier integrierten Oszillator-[Typen](/de/docs/Web/API/OscillatorNode/type) sind `sine`, `square`, `triangle` und `sawtooth`. Sie bezeichnen die Form der Wellenform, die ein Oszillator erzeugt. Wissenswert: Sie sind bei den meisten Synthesizern voreingestellt, weil sich diese Wellenformen elektronisch leicht erzeugen lassen. Dieses Beispiel veranschaulicht die Wellenformen der verschiedenen Typen bei unterschiedlichen Frequenzen.

```html
<div class="controls">
  <label for="type-select">
    Oscillator type
    <select id="type-select">
      <option>sine</option>
      <option>square</option>
      <option>triangle</option>
      <option>sawtooth</option>
    </select>
  </label>

  <label for="freq-range">
    Frequency
    <input
      type="range"
      min="100"
      max="800"
      step="10"
      value="250"
      id="freq-range" />
  </label>
  <button data-playing="init" id="play-button">Play</button>
</div>

<canvas id="wave-graph"></canvas>
```

```css hidden
.controls {
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  align-items: center;
}

#wave-graph {
  width: 500px;
  height: 300px;
  border: 4px solid var(--pink);
}
```

Der Code besteht aus zwei Teilen: Im ersten Teil richten wir die Audiofunktionen ein.

```js
const typeSelect = document.getElementById("type-select");
const frequencyControl = document.getElementById("freq-range");
const playButton = document.getElementById("play-button");

const audioCtx = new AudioContext();
const osc = new OscillatorNode(audioCtx, {
  type: typeSelect.value,
  frequency: frequencyControl.valueAsNumber,
});
// Rather than creating a new oscillator for every start and stop
// which you would do in an audio application, we are just going
// to mute/un-mute for demo purposes - this means we need a gain node
const gain = new GainNode(audioCtx);
const analyser = new AnalyserNode(audioCtx, {
  fftSize: 1024,
  smoothingTimeConstant: 0.8,
});
osc.connect(gain).connect(analyser).connect(audioCtx.destination);

typeSelect.addEventListener("change", () => {
  osc.type = typeSelect.value;
});

frequencyControl.addEventListener("input", () => {
  osc.frequency.value = frequencyControl.valueAsNumber;
});

playButton.addEventListener("click", () => {
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }

  if (playButton.dataset.playing === "init") {
    osc.start(audioCtx.currentTime);
    playButton.dataset.playing = "true";
    playButton.innerText = "Pause";
  } else if (playButton.dataset.playing === "false") {
    gain.gain.linearRampToValueAtTime(1, audioCtx.currentTime + 0.2);
    playButton.dataset.playing = "true";
    playButton.innerText = "Pause";
  } else if (playButton.dataset.playing === "true") {
    gain.gain.linearRampToValueAtTime(0.0001, audioCtx.currentTime + 0.2);
    playButton.dataset.playing = "false";
    playButton.innerText = "Play";
  }
});
```

Im zweiten Teil zeichnen wir die Wellenform mithilfe des oben erstellten [`AnalyserNode`](/de/docs/Web/API/AnalyserNode) auf ein Canvas.

```js
const dpr = window.devicePixelRatio;
const w = 500 * dpr;
const h = 300 * dpr;
const canvasEl = document.getElementById("wave-graph");
canvasEl.width = w;
canvasEl.height = h;
const canvasCtx = canvasEl.getContext("2d");

const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
analyser.getByteTimeDomainData(dataArray);

// draw an oscilloscope of the current oscillator
function draw() {
  analyser.getByteTimeDomainData(dataArray);

  canvasCtx.fillStyle = "white";
  canvasCtx.fillRect(0, 0, w, h);

  canvasCtx.lineWidth = 4.0;
  canvasCtx.strokeStyle = "black";
  canvasCtx.beginPath();

  const sliceWidth = (w * 1.0) / bufferLength;
  let x = 0;

  for (let i = 0; i < bufferLength; i++) {
    const v = dataArray[i] / 128.0;
    const y = (v * h) / 2;
    if (i === 0) {
      canvasCtx.moveTo(x, y);
    } else {
      canvasCtx.lineTo(x, y);
    }
    x += sliceWidth;
  }

  canvasCtx.lineTo(w, h / 2);
  canvasCtx.stroke();

  requestAnimationFrame(draw);
}

draw();
```

> [!WARNING]
> Dieses Beispiel erzeugt ein Geräusch!

{{EmbedLiveSample("Different oscillator node types", "", 500)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
