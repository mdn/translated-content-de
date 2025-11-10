---
title: OscillatorNode
slug: Web/API/OscillatorNode
l10n:
  sourceCommit: 4c30947ed01579ef12a69bf042a889d3577da9ec
---

{{APIRef("Web Audio API")}}

Die **`OscillatorNode`**-Schnittstelle repräsentiert eine periodische Wellenform, wie z. B. eine Sinuswelle. Es handelt sich um ein [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)-Audioprozessmodul, das die Erzeugung einer bestimmten Frequenz einer gegebenen Welle verursacht – im Effekt ein konstanter Ton.

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
      <th scope="row">Kanalzählmodus</th>
      <td><code>max</code></td>
    </tr>
    <tr>
      <th scope="row">Kanäle zählen</th>
      <td><code>2</code> (nicht verwendet im Standardzählmodus)</td>
    </tr>
    <tr>
      <th scope="row">Kanalinterpretation</th>
      <td><code>speakers</code></td>
    </tr>
  </tbody>
</table>

## Konstruktor

- [`OscillatorNode()`](/de/docs/Web/API/OscillatorNode/OscillatorNode)
  - : Erstellt eine neue Instanz eines `OscillatorNode`-Objekts und bietet optional ein Objekt an, das Standardwerte für die [Eigenschaften](#instanz-eigenschaften) des Knotens angibt. Alternativ können Sie die [`BaseAudioContext.createOscillator()`](/de/docs/Web/API/BaseAudioContext/createOscillator)-Fabrikmethode verwenden; siehe [Erstellen eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Elternteil [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)._

- [`OscillatorNode.frequency`](/de/docs/Web/API/OscillatorNode/frequency)
  - : Ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das die Frequenz der Oszillation in Hertz repräsentiert (obwohl das zurückgegebene `AudioParam` schreibgeschützt ist, ist der Wert, den es repräsentiert, nicht). Der Standardwert ist 440 Hz (ein Standard-Mittlerer-A-Ton).
- [`OscillatorNode.detune`](/de/docs/Web/API/OscillatorNode/detune)
  - : Ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das die Verstimmung der Oszillation in Cent repräsentiert (obwohl das zurückgegebene `AudioParam` schreibgeschützt ist, ist der Wert, den es repräsentiert, nicht). Der Standardwert ist 0.
- [`OscillatorNode.type`](/de/docs/Web/API/OscillatorNode/type)
  - : Ein String, der die Form der abzuspielenden Wellenform angibt; dies kann einer von mehreren Standardwerten oder `custom` sein, um eine [`PeriodicWave`](/de/docs/Web/API/PeriodicWave) zu verwenden, um eine benutzerdefinierte Wellenform zu beschreiben. Verschiedene Wellen erzeugen unterschiedliche Töne. Standardwerte sind `"sine"`, `"square"`, `"sawtooth"`, `"triangle"` und `"custom"`. Der Standard ist `"sine"`.

## Instanz-Methoden

_Erbt auch Methoden von seinem Elternteil [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)._

- [`OscillatorNode.setPeriodicWave()`](/de/docs/Web/API/OscillatorNode/setPeriodicWave)
  - : Setzt eine [`PeriodicWave`](/de/docs/Web/API/PeriodicWave), die eine periodische Wellenform beschreibt, die anstelle einer der Standardwellenformen verwendet werden soll; der Aufruf dieser Methode setzt den `type` auf `custom`.
- [`AudioScheduledSourceNode.start()`](/de/docs/Web/API/AudioScheduledSourceNode/start)
  - : Gibt die genaue Zeit an, zu der der Ton abgespielt werden soll.
- [`AudioScheduledSourceNode.stop()`](/de/docs/Web/API/AudioScheduledSourceNode/stop)
  - : Gibt die Zeit an, zu der der Ton gestoppt werden soll.

## Ereignisse

_Erbt auch Ereignisse von seinem Elternteil [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)._

## Beispiele

### Verwendung eines OscillatorNode

Das folgende Beispiel zeigt die grundlegende Verwendung eines [`AudioContext`](/de/docs/Web/API/AudioContext) zur Erstellung eines Oszillatorknotens und zum Starten der Wiedergabe eines Tons darauf. Für ein Praxisbeispiel sehen Sie sich unser [Violent Theremin-Demo](https://mdn.github.io/webaudio-examples/violent-theremin/) ([siehe app.js](https://github.com/mdn/webaudio-examples/blob/main/violent-theremin/scripts/app.js) für relevanten Code) an.

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

### Verschiedene Oszillatorknotentypen

Die vier eingebauten Oszillator-[Typen](/de/docs/Web/API/OscillatorNode/type) sind `sine`, `square`, `triangle` und `sawtooth`. Sie sind die Form der von einem Oszillator erzeugten Wellenform. Interessante Tatsache: Dies sind die Standardwerte für die meisten Synthesizer, weil sie Wellenformen sind, die elektronisch leicht zu erzeugen sind. Dieses Beispiel visualisiert die Wellenformen für die verschiedenen Typen bei unterschiedlichen Frequenzen.

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

Der Code besteht aus zwei Teilen: Im ersten Teil richten wir das Sound-Setup ein.

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

Im zweiten Teil zeichnen wir die Wellenform auf eine Leinwand unter Verwendung des [`AnalyserNode`](/de/docs/Web/API/AnalyserNode), den wir oben erstellt haben.

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
