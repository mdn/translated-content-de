---
title: "Erweiterte Techniken: Erstellen und Sequenzieren von Audio"
slug: Web/API/Web_Audio_API/Advanced_techniques
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{DefaultAPISidebar("Web Audio API")}}

In diesem Tutorial werden wir uns mit der Erstellung und Modifikation von Klängen sowie mit dem Timing und der Planung beschäftigen. Wir werden das Laden von Samples, Hüllkurven, Filter, Wavetables und Frequenzmodulation einführen. Wenn Sie mit diesen Begriffen vertraut sind und nach einer Einführung in deren Anwendung mit der Web Audio API suchen, sind Sie hier genau richtig.

> [!NOTE]
> Den Quellcode für die untenstehende Demo finden Sie auf GitHub im [step-sequencer](https://github.com/mdn/webaudio-examples/tree/main/step-sequencer)-Unterverzeichnis des MDN [webaudio-examples](https://github.com/mdn/webaudio-examples) Repositories. Sie können sich auch die [Live-Demo](https://mdn.github.io/webaudio-examples/step-sequencer/) ansehen.

## Demo

Wir schauen uns einen sehr einfachen Step-Sequenzer an:

![Eine Sound-Sequenzer-Anwendung mit Play- und BPM-Mastersteuerungen und 4 verschiedenen Stimmen mit individuellen Steuerungen.](sequencer.png)

In der Praxis ist dies einfacher mit einer Bibliothek zu realisieren – die Web Audio API wurde entwickelt, um darauf aufzubauen. Wenn Sie sich daran machen, etwas Komplexeres zu bauen, wäre [tone.js](https://tonejs.github.io/) ein ausgezeichneter Ausgangspunkt. Allerdings möchten wir demonstrieren, wie man eine solche Demo von Grund auf erstellt, um daraus zu lernen.

Die Benutzeroberfläche besteht aus Masterkontrollen, die uns erlauben, den Sequenzer zu starten/stoppen und die BPM (Schläge pro Minute) anzupassen, um die "Musik" zu beschleunigen oder zu verlangsamen.

Vier verschiedene Klänge, oder Stimmen, können abgespielt werden. Jede Stimme hat vier Tasten, eine für jeden Schlag in einem Takt der Musik. Wenn sie aktiviert sind, wird die Note hörbar. Beim Abspielen bewegt sich das Instrument über diese Beats und wiederholt den Takt.

Jede Stimme hat auch lokale Steuerungen, die es Ihnen erlauben, die Effekte oder Parameter zu manipulieren, die für jede Technik, die wir zur Erstellung dieser Stimmen verwenden, spezifisch sind. Die Methoden, die wir verwenden, sind:

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Name der Stimme</th>
      <th scope="col">Technik</th>
      <th scope="col">Zugehöriges Web Audio API-Feature</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>"Sweep"</td>
      <td>Oszillator, periodische Welle</td>
      <td>
        [`OscillatorNode`](/de/docs/Web/API/OscillatorNode),
        [`PeriodicWave`](/de/docs/Web/API/PeriodicWave)
      </td>
    </tr>
    <tr>
      <td>"Pulse"</td>
      <td>Mehrere Oszillatoren</td>
      <td>[`OscillatorNode`](/de/docs/Web/API/OscillatorNode)</td>
    </tr>
    <tr>
      <td>"Noise"</td>
      <td>Zufälliger Rauschpuffer, Biquad-Filter</td>
      <td>
        [`AudioBuffer`](/de/docs/Web/API/AudioBuffer),
        [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode),
        [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)
      </td>
    </tr>
    <tr>
      <td>"Dial up"</td>
      <td>Ein Sound-Sample laden, um es abzuspielen</td>
      <td>
        [`BaseAudioContext/decodeAudioData`](/de/docs/Web/API/BaseAudioContext/decodeAudioData),
        [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Wir haben dieses Instrument nicht erstellt, um gut zu klingen, sondern um Demonstrationscode bereitzustellen. Diese Demonstration stellt eine _sehr_ vereinfachte Version eines solchen Instruments dar. Die Klänge basieren auf einem Einwahlmodem. Wenn Sie nicht wissen, wie sich ein solches Gerät anhört, können Sie [hier einen anhören](https://soundcloud.com/john-pemberton/modem-dialup).

## Erstellen eines Audio-Kontexts

Wie Sie inzwischen gewohnt sein sollten, beginnt jede Web Audio API-App mit einem Audio-Kontext:

```js
const audioCtx = new AudioContext();
```

## Der "Sweep" — Oszillatoren, periodische Wellen und Hüllkurven

Für den sogenannten "Sweep"-Sound, jenen ersten Ton, den Sie hören, wenn Sie sich einwählen, werden wir einen Oszillator erstellen, um den Ton zu erzeugen.

Der [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) bietet von Haus aus grundlegende Wellenformen — Sinus, Rechteck, Dreieck oder Sägezahn. Anstatt jedoch die standardmäßigen, voreingestellten zu verwenden, erstellen wir unsere eigene Welle mit der [`PeriodicWave`](/de/docs/Web/API/PeriodicWave)-Schnittstelle und Werten, die in einer Wavetable festgelegt sind. Wir können den [`PeriodicWave()`](/de/docs/Web/API/PeriodicWave/PeriodicWave)-Konstruktor verwenden, um diese benutzerdefinierte Welle mit einem Oszillator zu benutzen.

### Die periodische Welle

Zunächst erstellen wir unsere periodische Welle. Dazu müssen wir reale und imaginäre Werte in den [`PeriodicWave()`](/de/docs/Web/API/PeriodicWave/PeriodicWave)-Konstruktor übergeben:

```js
const wave = new PeriodicWave(audioCtx, {
  real: wavetable.real,
  imag: wavetable.imag,
});
```

> [!NOTE]
> In unserem Beispiel befindet sich die Wavetable in einer separaten JavaScript-Datei (`wavetable.js`), da es _so_ viele Werte gibt. Wir haben sie aus einem [Repository mit Wavetables](https://github.com/GoogleChromeLabs/web-audio-samples/tree/main/src/demos/wavetable-synth/wave-tables) übernommen, das sich in den [Web Audio API-Beispielen von Google Chrome Labs](https://github.com/GoogleChromeLabs/web-audio-samples) befindet.

### Der Oszillator

Nun können wir einen [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) erstellen und dessen Welle auf die von uns erstellte setzen:

```js
function playSweep(time) {
  const osc = new OscillatorNode(audioCtx, {
    frequency: 380,
    type: "custom",
    periodicWave: wave,
  });
  osc.connect(audioCtx.destination);
  osc.start(time);
  osc.stop(time + 1);
}
```

Hier übergeben wir der Funktion einen Zeitparameter, den wir später verwenden, um den Sweep zu planen.

### Amplitudenkontrolle

Das ist großartig, aber wäre es nicht schön, wenn wir eine Amplitudenhüllkurve dazu hätten? Lassen Sie uns eine erstellen, damit wir uns mit den Methoden vertraut machen, die wir benötigen, um mit der Web Audio API eine Hüllkurve zu erstellen.

Nehmen wir an, unsere Hüllkurve hat Attack und Release. Wir können dem Benutzer erlauben, diese mithilfe von [Reglereingaben](/de/docs/Web/HTML/Element/input/range) auf der Benutzeroberfläche zu steuern:

```html
<label for="attack">Attack</label>
<input
  name="attack"
  id="attack"
  type="range"
  min="0"
  max="1"
  value="0.2"
  step="0.1" />

<label for="release">Release</label>
<input
  name="release"
  id="release"
  type="range"
  min="0"
  max="1"
  value="0.5"
  step="0.1" />
```

Nun können wir einige Variablen in JavaScript erstellen und sie ändern lassen, wenn die Eingabewerte aktualisiert werden:

```js
let attackTime = 0.2;
const attackControl = document.querySelector("#attack");
attackControl.addEventListener(
  "input",
  (ev) => {
    attackTime = parseInt(ev.target.value, 10);
  },
  false,
);

let releaseTime = 0.5;
const releaseControl = document.querySelector("#release");
releaseControl.addEventListener(
  "input",
  (ev) => {
    releaseTime = parseInt(ev.target.value, 10);
  },
  false,
);
```

### Die endgültige playSweep()-Funktion

Nun können wir unsere `playSweep()`-Funktion erweitern. Wir müssen einen [`GainNode`](/de/docs/Web/API/GainNode) hinzufügen und diesen über unser Audiograf verbinden, um Amplitudenänderungen auf unseren Sound anzuwenden. Der Gain-Knoten hat eine Eigenschaft: `gain`, die vom Typ [`AudioParam`](/de/docs/Web/API/AudioParam) ist.

Das ist nützlich — nun können wir anfangen, die Leistungsfähigkeit der Audio-Param-Methoden auf den Gain-Wert zu nutzen. Wir können einen Wert zu einer bestimmten Zeit festlegen oder ihn _über_ die Zeit ändern, mit Methoden wie [`AudioParam.linearRampToValueAtTime`](/de/docs/Web/API/AudioParam/linearRampToValueAtTime).

Wie oben erwähnt, verwenden wir die Methode `linearRampToValueAtTime` für unseren Attack und Release. Sie nimmt zwei Parameter — den Wert, auf den Sie den Parameter, den Sie ändern möchten, setzen wollen (in diesem Fall das Gain) und wann Sie dies tun möchten. In unserem Fall wird _wann_ von unseren Eingaben gesteuert. So erhöht sich im folgenden Beispiel das Gain mit einer linearen Geschwindigkeit auf 1 über die Zeit, die die Attack-Range-Eingabe definiert. Ebenso wird für unseren Release das Gain mit einer linearen Geschwindigkeit auf 0 gesetzt, über die Zeit, die die Release-Eingabe eingestellt hat.

```js
const sweepLength = 2;
function playSweep(time) {
  const osc = new OscillatorNode(audioCtx, {
    frequency: 380,
    type: "custom",
    periodicWave: wave,
  });

  const sweepEnv = new GainNode(audioCtx);
  sweepEnv.gain.cancelScheduledValues(time);
  sweepEnv.gain.setValueAtTime(0, time);
  sweepEnv.gain.linearRampToValueAtTime(1, time + attackTime);
  sweepEnv.gain.linearRampToValueAtTime(0, time + sweepLength - releaseTime);

  osc.connect(sweepEnv).connect(audioCtx.destination);
  osc.start(time);
  osc.stop(time + sweepLength);
}
```

## Der "Pulse" — Niederfrequenzoszillatoren-Modulation

Großartig, nun haben wir unseren Sweep! Lassen Sie uns fortfahren und uns diesen schönen Pulse-Sound ansehen. Wir können dies mit einem einfachen Oszillator erreichen, der mit einem zweiten Oszillator moduliert wird.

### Erster Oszillator

Wir richten unseren ersten [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) auf die gleiche Weise wie unseren Sweep-Sound ein, außer dass wir keine Wavetable verwenden, um eine maßgeschneiderte Welle zu setzen — wir verwenden einfach die Standard-`sine`-Welle:

```js
const osc = new OscillatorNode(audioCtx, {
  type: "sine",
  frequency: pulseHz,
});
```

Jetzt erstellen wir einen [`GainNode`](/de/docs/Web/API/GainNode), da es der `gain`-Wert ist, den wir mit unserem zweiten, niederfrequenten Oszillator oszillieren:

```js
const amp = new GainNode(audioCtx, {
  value: 1,
});
```

### Den zweiten, niederfrequenten Oszillator erstellen

Nun erstellen wir einen zweiten — `square` — Wellen(oszillator), um die Verstärkung unserer ersten Sinuswelle zu verändern:

```js
const lfo = new OscillatorNode(audioCtx, {
  type: "square",
  frequency: 30,
});
```

### Den Graphen verbinden

Der Schlüssel hier ist die korrekte Verbindung des Graphen und auch das Starten beider Oszillatoren:

```js
lfo.connect(amp.gain);
osc.connect(amp).connect(audioCtx.destination);
lfo.start();
osc.start(time);
osc.stop(time + pulseTime);
```

> [!NOTE]
> Wir müssen auch nicht die Standard-Wellentypen für einen dieser Oszillatoren verwenden, die wir erstellen — wir könnten eine Wavetable und die periodische Wellenmethode verwenden, wie wir es zuvor getan haben. Es gibt eine Vielzahl von Möglichkeiten mit nur einem Minimum an Knoten.

### Pulse-Benutzersteuerungen

Für die Benutzeroberfläche lassen Sie uns die Frequenzen beider unserer Oszillatoren freigeben, sodass sie über Regler gesteuert werden können. Einer ändert den Ton, und der andere ändert, wie der Pulse die erste Welle moduliert:

```html
<label for="hz">Hz</label>
<input
  name="hz"
  id="hz"
  type="range"
  min="660"
  max="1320"
  value="880"
  step="1" />
<label for="lfo">LFO</label>
<input name="lfo" id="lfo" type="range" min="20" max="40" value="30" step="1" />
```

Wie zuvor variieren wir die Parameter, wenn der Benutzer die Werte der Range ändert.

```js
let pulseHz = 880;
const hzControl = document.querySelector("#hz");
hzControl.addEventListener(
  "input",
  (ev) => {
    pulseHz = parseInt(ev.target.value, 10);
  },
  false,
);

let lfoHz = 30;
const lfoControl = document.querySelector("#lfo");
lfoControl.addEventListener(
  "input",
  (ev) => {
    lfoHz = parseInt(ev.target.value, 10);
  },
  false,
);
```

### Die endgültige playPulse()-Funktion

Hier ist die gesamte `playPulse()`-Funktion:

```js
const pulseTime = 1;
function playPulse(time) {
  const osc = new OscillatorNode(audioCtx, {
    type: "sine",
    frequency: pulseHz,
  });

  const amp = new GainNode(audioCtx, {
    value: 1,
  });

  const lfo = new OscillatorNode(audioCtx, {
    type: "square",
    frequency: lfoHz,
  });

  lfo.connect(amp.gain);
  osc.connect(amp).connect(audioCtx.destination);
  lfo.start();
  osc.start(time);
  osc.stop(time + pulseTime);
}
```

## Das "Noise" — zufälliger Rauschpuffer mit einem Biquad-Filter

Jetzt müssen wir etwas Rauschen erzeugen! Alle Modems haben Rauschen. Rauschen sind einfach zufällige Zahlen, wenn es um Audiodaten geht, daher ist es eine relativ einfache Sache, sie mit Code zu erstellen.

### Einen Audio-Puffer erstellen

Wir müssen einen leeren Container erstellen, um diese Zahlen hineinzulegen, einen, den die Web Audio API versteht. Hier kommen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)-Objekte ins Spiel. Sie können eine Datei abrufen und sie in einen Puffer dekodieren (dazu kommen wir später im Tutorial), oder Sie können einen leeren Puffer erstellen und mit Ihren Daten füllen.

Für Rauschen machen wir Letzteres. Zuerst müssen wir die Größe unseres Puffers berechnen, um ihn zu erstellen. Wir können dafür die Eigenschaft [`BaseAudioContext.sampleRate`](/de/docs/Web/API/BaseAudioContext/sampleRate) verwenden:

```js
const bufferSize = audioCtx.sampleRate * noiseDuration;
// Create an empty buffer
const noiseBuffer = new AudioBuffer({
  length: bufferSize,
  sampleRate: audioCtx.sampleRate,
});
```

Jetzt können wir ihn mit zufälligen Zahlen zwischen -1 und 1 füllen:

```js
// Fill the buffer with noise
const data = noiseBuffer.getChannelData(0);
for (let i = 0; i < bufferSize; i++) {
  data[i] = Math.random() * 2 - 1;
}
```

> [!NOTE]
> Warum -1 bis 1? Beim Ausgeben von Ton auf eine Datei oder Lautsprecher benötigen wir eine Zahl, die 0 dB Full Scale darstellt — die numerische Grenze des Festpunkt-Mediums oder DAC. In der Fließkomma-Audio ist 1 eine praktische Zahl, um auf "Full Scale" für mathematische Operationen an Signalen abzubilden, so dass Oszillatoren, Rauschgeneratoren und andere Tonquellen typischerweise bipolare Signale im Bereich von -1 bis 1 ausgeben. Ein Browser wird Werte außerhalb dieses Bereichs abschneiden.

### Eine Pufferquelle erstellen

Jetzt haben wir den Audio-Puffer und haben ihn mit Daten gefüllt; wir benötigen einen Knoten, den wir zu unserem Graphen hinzufügen können, der den Puffer als Quelle verwenden kann. Wir werden einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) dafür erstellen und die Daten, die wir erstellt haben, übergeben:

```js
// Create a buffer source for our created data
const noise = new AudioBufferSourceNode(audioCtx, {
  buffer: noiseBuffer,
});
```

Wenn wir das durch unseren Audiograf verbinden und abspielen:

```js
noise.connect(audioCtx.destination);
noise.start();
```

Sie werden feststellen, dass es ziemlich zischend oder blechern klingt. Wir haben weißes Rauschen erstellt; so sollte es sein. Unsere Werte sind von -1 bis 1 verteilt, was bedeutet, dass wir Spitzen aller Frequenzen haben, die tatsächlich ziemlich dramatisch und stechend sind. Wir _könnten_ die Funktion verändern, um Werte nur von 0,5 bis -0,5 oder Ähnlichem zu verbreiten, um die Spitzen abzuschwächen und das Unbehagen zu reduzieren; aber wo bleibt der Spaß dabei? Lassen Sie uns das von uns kreierte Rauschen durch einen Filter leiten.

### Einen Biquad-Filter in das Ganze einbauen

Wir wollen etwas im Bereich von pinkem oder braunem Rauschen. Wir möchten diese hohen Frequenzen abschneiden und möglicherweise einige tiefere. Lassen Sie uns einen Bandpass-Biquad-Filter für diesen Job auswählen.

> [!NOTE]
> Die Web Audio API kommt mit zwei Arten von Filtern: [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) und [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode). In den meisten Fällen wird ein Biquad-Filter ausreichen — er bietet verschiedene Typen wie Tiefpass, Hochpass und Bandpass. Wenn Sie jedoch etwas maßgeschneiderteres machen möchten, könnte der IIR-Filter eine gute Option sein — siehe [Verwendung von IIR-Filtern](/de/docs/Web/API/Web_Audio_API/Using_IIR_filters) für weitere Informationen.

Das Anschließen funktioniert genauso wie zuvor gesehen. Wir erstellen den [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode), konfigurieren die gewünschten Eigenschaften und verbinden ihn durch unseren Graphen. Unterschiedliche Typen von Biquad-Filtern haben unterschiedliche Eigenschaften — zum Beispiel setzt das Einstellen der Frequenz auf einen Bandpass-Typ die mittlere Frequenz fest. Bei einem Tiefpass würde es die Oberfrequenz festlegen.

```js
// Filter the output
const bandpass = new BiquadFilterNode(audioCtx, {
  type: "bandpass",
  frequency: bandHz,
});

// Connect our graph
noise.connect(bandpass).connect(audioCtx.destination);
```

### Nutzersteuerungen für Rauschen

Auf der Benutzeroberfläche werden wir die Rauschdauer und die Frequenz, die wir bandpassfiltern möchten, freigeben. Dies ermöglicht es dem Benutzer, sie über Reglersteuerungen und Ereignis-Handler wie in den vorherigen Abschnitten einzustellen:

```html
<label for="duration">Duration</label>
<input
  name="duration"
  id="duration"
  type="range"
  min="0"
  max="2"
  value="1"
  step="0.1" />

<label for="band">Band</label>
<input
  name="band"
  id="band"
  type="range"
  min="400"
  max="1200"
  value="1000"
  step="5" />
```

```js
let noiseDuration = 1;
const durControl = document.querySelector("#duration");
durControl.addEventListener(
  "input",
  (ev) => {
    noiseDuration = parseFloat(ev.target.value);
  },
  false,
);

let bandHz = 1000;
const bandControl = document.querySelector("#band");
bandControl.addEventListener(
  "input",
  (ev) => {
    bandHz = parseInt(ev.target.value, 10);
  },
  false,
);
```

### Die endgültige playNoise()-Funktion

Hier ist die gesamte `playNoise()`-Funktion:

```js
function playNoise(time) {
  const bufferSize = audioCtx.sampleRate * noiseDuration; // set the time of the note

  // Create an empty buffer
  const noiseBuffer = new AudioBuffer({
    length: bufferSize,
    sampleRate: audioCtx.sampleRate,
  });

  // Fill the buffer with noise
  const data = noiseBuffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  // Create a buffer source for our created data
  const noise = new AudioBufferSourceNode(audioCtx, {
    buffer: noiseBuffer,
  });

  // Filter the output
  const bandpass = new BiquadFilterNode(audioCtx, {
    type: "bandpass",
    frequency: bandHz,
  });

  // Connect our graph
  noise.connect(bandpass).connect(audioCtx.destination);
  noise.start(time);
}
```

## "Dial-up" — Ein Sound-Sample laden

Es ist ziemlich einfach, Telefonwähl-(DTMF)-Töne nachzuahmen, indem man ein paar Oszillatoren zusammen mit den Methoden, die wir bereits verwendet haben, spielt. Stattdessen werden wir in diesem Abschnitt eine Beispieldatei laden, um zu sehen, was dabei involviert ist.

### Das Sample laden

Wir möchten sicherstellen, dass unsere Datei geladen und in einen Puffer dekodiert wurde, bevor wir sie verwenden. Dazu erstellen wir eine [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)-Funktion, die uns dies ermöglicht:

```js
async function getFile(audioContext, filepath) {
  const response = await fetch(filepath);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  return audioBuffer;
}
```

Wir können dann den [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)-Operator verwenden, wenn wir diese Funktion aufrufen, was sicherstellt, dass wir nachfolgenden Code nur ausführen können, wenn er fertig ausgeführt wurde.

Lassen Sie uns eine weitere `async`-Funktion erstellen, um das Sample einzurichten — wir können die beiden async-Funktionen in einem schönen Promise-Muster kombinieren, um weitere Aktionen auszuführen, wenn diese Datei geladen und gepuffert wurde:

```js
async function setupSample() {
  const filePath = "dtmf.mp3";
  const sample = await getFile(audioCtx, filePath);
  return sample;
}
```

> [!NOTE]
> Sie können die obige Funktion leicht ändern, um ein Array von Dateien aufzunehmen und über sie zu iterieren, um mehr als ein Sample zu laden. Diese Technik wäre praktisch für komplexere Instrumente oder Spiele.

Wir können nun `setupSample()` wie folgt verwenden:

```js
setupSample().then((sample) => {
  // sample is our buffered file
  // …
});
```

Wenn das Sample abspielbereit ist, richtet das Programm die Benutzeroberfläche so ein, dass alles bereit ist.

### Das Sample abspielen

Lassen Sie uns eine `playSample()`-Funktion auf ähnliche Weise erstellen wie bei den anderen Sounds. Dieses Mal erstellen wir einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode), legen die Pufferdaten, die wir abgerufen und dekodiert haben, hinein und spielen ihn ab:

```js
function playSample(audioContext, audioBuffer, time) {
  const sampleSource = new AudioBufferSourceNode(audioContext, {
    buffer: audioBuffer,
    playbackRate,
  });
  sampleSource.connect(audioContext.destination);
  sampleSource.start(time);
  return sampleSource;
}
```

> [!NOTE]
> Wir können `stop()` auf einem [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) aufrufen, aber dies geschieht automatisch, wenn das Sample fertig abgespielt ist.

### Benutzersteuerungen für Dial-up

Der [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) hat eine Eigenschaft [`playbackRate`](/de/docs/Web/API/AudioBufferSourceNode/playbackRate). Lassen Sie uns diese auf unserer Benutzeroberfläche freigeben, damit wir unser Sample beschleunigen oder verlangsamen können. Wir machen das auf die gleiche Art und Weise wie zuvor:

```html
<label for="rate">Rate</label>
<input
  name="rate"
  id="rate"
  type="range"
  min="0.1"
  max="2"
  value="1"
  step="0.1" />
```

```js
let playbackRate = 1;
const rateControl = document.querySelector("#rate");
rateControl.addEventListener(
  "input",
  (ev) => {
    playbackRate = parseInt(ev.target.value, 10);
  },
  false,
);
```

### Die endgültige playSample()-Funktion

Dann fügen wir unserer `playSample()`-Funktion eine Zeile hinzu, um die `playbackRate`-Eigenschaft zu aktualisieren. Die endgültige Version sieht wie folgt aus:

```js
function playSample(audioContext, audioBuffer, time) {
  const sampleSource = new AudioBufferSourceNode(audioCtx, {
    buffer: audioBuffer,
    playbackRate,
  });
  sampleSource.connect(audioContext.destination);
  sampleSource.start(time);
  return sampleSource;
}
```

> [!NOTE]
> Die Klangdatei wurde [sourced von soundbible.com](https://soundbible.com/1573-DTMF-Tones.html).

## Audio im Takt spielen

Ein häufiges Problem bei digitalen Audioanwendungen ist es, die Klänge im Takt zu halten, sodass der Beat konsistent bleibt und nichts aus dem Takt gerät.

Wir könnten unsere Stimmen in einer `for`-Schleife abspielen lassen; das größte Problem dabei ist jedoch, dass während des Abspielens Aktualisierungen vorgenommen werden und wir bereits UI-Steuerungen implementiert haben, um dies zu tun. Auch wäre es wirklich schön, eine instrumentenweite BPM-Steuerung zu betrachten. Der beste Weg, um unsere Stimmen im Takt spielen zu lassen, ist ein Planungssystem zu erstellen, bei dem wir vorausblicken, wann die Noten gespielt werden und sie in eine Warteschlange schieben. Wir können sie zu einem genauen Zeitpunkt mit der `currentTime`-Eigenschaft starten und auch eventuelle Änderungen berücksichtigen.

> [!NOTE]
> Dies ist eine stark vereinfachte Version von [Chris Wilsons A Tale Of Two Clocks (2013)](https://web.dev/articles/audio-scheduling) Artikel, der diese Methode mit viel mehr Details behandelt. Es macht keinen Sinn, alles hier zu wiederholen, aber wir empfehlen dringend, diesen Artikel zu lesen und diese Methode zu verwenden. Ein Großteil des Codes hier stammt von seinem [Metronom-Beispiel](https://github.com/cwilso/metronome/blob/main/js/metronome.js), auf das er im Artikel Bezug nimmt.

Lassen Sie uns mit der Einrichtung unserer Standard-BPM (Beats pro Minute) beginnen, die ebenfalls nutzergesteuert über — Sie ahnen es schon — ein weiteres Eingabefeld steuerbar sein wird.

```js
let tempo = 60.0;
const bpmControl = document.querySelector("#bpm");

bpmControl.addEventListener(
  "input",
  (ev) => {
    tempo = parseInt(ev.target.value, 10);
  },
  false,
);
```

Dann erstellen wir Variablen, um festzulegen, wie weit wir vorausblicken und wie weit voraus wir planen wollen:

```js
const lookahead = 25.0; // How frequently to call scheduling function (in milliseconds)
const scheduleAheadTime = 0.1; // How far ahead to schedule audio (sec)
```

Lassen Sie uns eine Funktion erstellen, die die Note um einen Schlag nach vorne bewegt und zurück zur ersten, wenn sie die 4. (letzte) erreicht:

```js
let currentNote = 0;
let nextNoteTime = 0.0; // when the next note is due.

function nextNote() {
  const secondsPerBeat = 60.0 / tempo;

  nextNoteTime += secondsPerBeat; // Add beat length to last beat time

  // Advance the beat number, wrap to zero when reaching 4
  currentNote = (currentNote + 1) % 4;
}
```

Wir möchten eine Referenzwarteschlange für die zu spielenden Noten erstellen und die Funktionalität, sie mit den zuvor erstellten Funktionen abzuspielen:

```js
const notesInQueue = [];

function scheduleNote(beatNumber, time) {
  // Push the note on the queue, even if we're not playing.
  notesInQueue.push({ note: beatNumber, time });

  if (pads[0].querySelectorAll("input")[beatNumber].checked) {
    playSweep(time);
  }
  if (pads[1].querySelectorAll("input")[beatNumber].checked) {
    playPulse(time);
  }
  if (pads[2].querySelectorAll("input")[beatNumber].checked) {
    playNoise(time);
  }
  if (pads[3].querySelectorAll("input")[beatNumber].checked) {
    playSample(audioCtx, dtmf, time);
  }
}
```

Hier schauen wir auf die aktuelle Zeit und vergleichen sie mit der Zeit der nächsten Note; wenn die beiden übereinstimmen, wird sie die vorherigen beiden Funktionen aufrufen.

Objekte vom Typ [`AudioContext`](/de/docs/Web/API/AudioContext) verfügen über eine [`currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime)-Eigenschaft, die es uns ermöglicht, die Anzahl der Sekunden seit der Erstellung des Kontextes zu erhalten. Wir werden es für das Timing innerhalb unseres Step-Sequenzers verwenden. Es ist äußerst genau und liefert einen Fließkommawert mit einer Genauigkeit von etwa 15 Dezimalstellen.

```js
let timerID;
function scheduler() {
  // While there are notes that will need to play before the next interval,
  // schedule them and advance the pointer.
  while (nextNoteTime < audioCtx.currentTime + scheduleAheadTime) {
    scheduleNote(currentNote, nextNoteTime);
    nextNote();
  }
  timerID = setTimeout(scheduler, lookahead);
}
```

Wir benötigen auch eine `draw()`-Funktion, um die Benutzeroberfläche zu aktualisieren, sodass wir sehen können, wenn der Takt voranschreitet.

```js
let lastNoteDrawn = 3;
function draw() {
  let drawNote = lastNoteDrawn;
  const currentTime = audioCtx.currentTime;

  while (notesInQueue.length && notesInQueue[0].time < currentTime) {
    drawNote = notesInQueue[0].note;
    notesInQueue.shift(); // Remove note from queue
  }

  // We only need to draw if the note has moved.
  if (lastNoteDrawn !== drawNote) {
    pads.forEach((pad) => {
      pad.children[lastNoteDrawn * 2].style.borderColor = "var(--black)";
      pad.children[drawNote * 2].style.borderColor = "var(--yellow)";
    });

    lastNoteDrawn = drawNote;
  }
  // Set up to draw again
  requestAnimationFrame(draw);
}
```

## Alles zusammenfügen

Jetzt bleibt nur noch sicherzustellen, dass wir das Sample geladen haben, bevor wir das Instrument _spielen_ können. Wir werden einen Ladebildschirm hinzufügen, der verschwindet, wenn die Datei abgerufen und dekodiert wurde. Dann können wir dem Scheduler erlauben, mit dem Klickereignis der Wiedergabetaste zu starten.

```js
// When the sample has loaded, allow play
const loadingEl = document.querySelector(".loading");
const playButton = document.querySelector("#playBtn");
let isPlaying = false;
setupSample().then((sample) => {
  loadingEl.style.display = "none";

  dtmf = sample; // to be used in our playSample function

  playButton.addEventListener("click", (ev) => {
    isPlaying = !isPlaying;

    if (isPlaying) {
      // Start playing

      // Check if context is in suspended state (autoplay policy)
      if (audioCtx.state === "suspended") {
        audioCtx.resume();
      }

      currentNote = 0;
      nextNoteTime = audioCtx.currentTime;
      scheduler(); // kick off scheduling
      requestAnimationFrame(draw); // start the drawing loop.
      ev.target.dataset.playing = "true";
    } else {
      clearTimeout(timerID);
      ev.target.dataset.playing = "false";
    }
  });
});
```

## Zusammenfassung

Wir haben jetzt ein Instrument in unserem Browser! Spielen Sie weiter und experimentieren Sie — Sie können jede dieser Techniken erweitern, um etwas viel Ausgefeilteres zu erstellen.
