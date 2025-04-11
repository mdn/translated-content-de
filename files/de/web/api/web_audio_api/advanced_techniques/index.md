---
title: "Fortgeschrittene Techniken: Erstellen und Sequenzieren von Audio"
slug: Web/API/Web_Audio_API/Advanced_techniques
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{DefaultAPISidebar("Web Audio API")}}

In diesem Tutorial werden wir die Klangerschaffung und -modifikation sowie Timing und Planung behandeln. Wir werden das Laden von Samples, Hüllkurven, Filter, Wavetables und Frequenzmodulation einführen. Wenn Ihnen diese Begriffe vertraut sind und Sie nach einer Einführung in deren Anwendung mit der Web Audio API suchen, sind Sie hier genau richtig.

> [!NOTE]
> Den Quellcode für das untenstehende Demo finden Sie auf GitHub im [step-sequencer](https://github.com/mdn/webaudio-examples/tree/main/step-sequencer) Unterverzeichnis des MDN [webaudio-examples](https://github.com/mdn/webaudio-examples) Repos. Sie können auch das [Live-Demo](https://mdn.github.io/webaudio-examples/step-sequencer/) ansehen.

## Demo

Wir werden uns einen sehr einfachen Step-Sequenzer ansehen:

![Eine Sound-Sequenzer-Anwendung mit Mastersteuerungen für Wiedergabe und BPM sowie 4 verschiedene Stimmen mit individuellen Steuerungen.](sequencer.png)

In der Praxis ist dies mit einer Bibliothek einfacher zu machen – die Web Audio API wurde entwickelt, um darauf aufgebaut zu werden. Wenn Sie daran denken, etwas Komplexeres zu entwickeln, wäre [tone.js](https://tonejs.github.io/) ein ausgezeichneter Einstieg. Wir wollen jedoch zeigen, wie man ein solches Demo von Grund auf als Lerneinheit erstellt.

Die Schnittstelle besteht aus Mastersteuerungen, die es uns ermöglichen, den Sequenzer abzuspielen/anzuhalten und die "Musik" zu beschleunigen oder zu verlangsamen, indem das BPM (Beats pro Minute) angepasst wird.

Vier verschiedene Sounds oder Stimmen können abgespielt werden. Jede Stimme hat vier Knöpfe, einen für jeden Schlag in einem Takt der Musik. Wenn sie aktiviert sind, wird der Ton abgespielt. Wenn das Instrument spielt, wird es sich durch diesen Satz von Beats bewegen und den Takt wiederholen.

Jede Stimme hat auch lokale Steuerungen, die es Ihnen ermöglichen, die Effekte oder Parameter zu manipulieren, die jeweils für die von uns verwendeten Techniken zur Erstellung dieser Stimmen spezifisch sind. Die von uns verwendeten Methoden sind:

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Name der Stimme</th>
      <th scope="col">Technik</th>
      <th scope="col">Zugehöriges Web Audio API Feature</th>
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
      <td>Zufallsrauschpuffer, Biquadfilter</td>
      <td>
        [`AudioBuffer`](/de/docs/Web/API/AudioBuffer),
        [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode),
        [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)
      </td>
    </tr>
    <tr>
      <td>"Dial up"</td>
      <td>Laden eines Sound-Samples zum Abspielen</td>
      <td>
        [`BaseAudioContext/decodeAudioData`](/de/docs/Web/API/BaseAudioContext/decodeAudioData),
        [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Wir haben dieses Instrument nicht erstellt, um gut zu klingen, sondern um Demonstrationscode bereitzustellen. Diese Demonstration repräsentiert eine _sehr_ vereinfachte Version eines solchen Instruments. Die Sounds basieren auf einem Modem mit Einwählverbindung. Wenn Sie nicht wissen, wie ein solches Gerät klingt, können Sie [hier eines anhören](https://soundcloud.com/john-pemberton/modem-dialup).

## Erstellen eines Audiokontexts

Wie Sie es bereits gewohnt sein sollten, beginnt jede Web Audio API-Anwendung mit einem Audiokontext:

```js
const audioCtx = new AudioContext();
```

## Der "Sweep" — Oszillatoren, periodische Wellen und Hüllkurven

Für das, was wir den "Sweep"-Sound nennen werden, das erste Geräusch, das Sie hören, wenn Sie sich einwählen, werden wir einen Oszillator erstellen, um den Sound zu erzeugen.

Der [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) kommt mit grundlegenden Wellenformen wie Sinus, Rechteck, Dreieck oder Sägezahn. Statt jedoch die Standardwellen zu nutzen, die standardmäßig verfügbar sind, werden wir unsere eigenen mit der [`PeriodicWave`](/de/docs/Web/API/PeriodicWave) Schnittstelle und den in einem Wavetable eingestellten Werten erstellen. Wir können den [`PeriodicWave()`](/de/docs/Web/API/PeriodicWave/PeriodicWave) Konstruktor verwenden, um diese benutzerdefinierte Welle mit einem Oszillator zu verwenden.

### Die periodische Welle

Zunächst erstellen wir unsere periodische Welle. Dazu müssen wir reale und imaginäre Werte an den [`PeriodicWave()`](/de/docs/Web/API/PeriodicWave/PeriodicWave) Konstruktor übergeben:

```js
const wave = new PeriodicWave(audioCtx, {
  real: wavetable.real,
  imag: wavetable.imag,
});
```

> [!NOTE]
> In unserem Beispiel wird das Wavetable in einer separaten JavaScript-Datei (`wavetable.js`) gehalten, da es _so_ viele Werte gibt. Wir haben es aus einem [Repository von Wavetables](https://github.com/GoogleChromeLabs/web-audio-samples/tree/main/src/demos/wavetable-synth/wave-tables) entnommen, das sich in den [Web Audio API-Beispielen von Google Chrome Labs](https://github.com/GoogleChromeLabs/web-audio-samples/) befindet.

### Der Oszillator

Jetzt können wir einen [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) erstellen und seine Welle auf diejenige setzen, die wir erstellt haben:

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

Wir übergeben hier einen Zeitparameter an die Funktion, den wir später verwenden werden, um den Sweep zu planen.

### Amplitudensteuerung

Das ist großartig, aber wäre es nicht schön, wenn wir eine Amplitudenhüllkurve dazu hätten? Lassen Sie uns eine erstellen, damit wir die Methoden kennenlernen, die wir benötigen, um mit der Web Audio API eine Hüllkurve zu erstellen.

Nehmen wir an, unsere Hüllkurve hat Attack und Release. Wir können dem Benutzer erlauben, diese mit [Range Inputs](/de/docs/Web/HTML/Reference/Elements/input/range) auf der Schnittstelle zu steuern:

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

Jetzt können wir einige Variablen in JavaScript erstellen und diese anpassen, wenn sich die Eingabewerte ändern:

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

### Die endgültige playSweep() Funktion

Jetzt können wir unsere `playSweep()` Funktion erweitern. Wir müssen einen [`GainNode`](/de/docs/Web/API/GainNode) hinzufügen und diesen durch unser Audiograph anschließen, um Amplitudenschwankungen auf unseren Klang anzuwenden. Der Gain-Knoten hat eine Eigenschaft: `gain`, die vom Typ [`AudioParam`](/de/docs/Web/API/AudioParam) ist.

Dies ist nützlich — jetzt können wir beginnen, die Kraft der Audioparametermethoden auf den Gain-Wert zu nutzen. Wir können einen Wert zu einem bestimmten Zeitpunkt festlegen, oder wir können ihn _über_ Zeit ändern mit Methoden wie [`AudioParam.linearRampToValueAtTime`](/de/docs/Web/API/AudioParam/linearRampToValueAtTime).

Wie oben erwähnt, werden wir die `linearRampToValueAtTime`-Methode für unser Attack und Release verwenden. Sie benötigt zwei Parameter — den Wert, den Sie dem zu ändernden Parameter (in diesem Fall dem Gain) geben möchten, und wann Sie dies tun möchten. In unserem Fall wird _wann_ durch unsere Eingaben gesteuert. Im unten stehenden Beispiel erhöht sich der Gain linear auf 1 innerhalb der vom Attack-Range-Input definierten Zeit. Genauso wird der Gain für unser Release auf 0 linear gesetzt, über die vom Release-Input festgelegte Zeit hinweg.

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

## Der "Pulse" — Niederfrequenz-Oszillatormodulation

Großartig, jetzt haben wir unseren Sweep! Lassen Sie uns weitermachen und uns diesen schönen Pulse-Sound ansehen. Dies können wir mit einem einfachen Oszillator erreichen, modifiziert mit einem zweiten Oszillator.

### Erster Oszillator

Wir werden unseren ersten [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) genauso wie unseren Sweep-Sound einrichten, allerdings ohne einen Wavetable zu verwenden, um eine spezialisierte Welle zu setzen — wir verwenden einfach die Standard-`sinus`-Welle:

```js
const osc = new OscillatorNode(audioCtx, {
  type: "sine",
  frequency: pulseHz,
});
```

Jetzt erstellen wir einen [`GainNode`](/de/docs/Web/API/GainNode), da es der `gain`-Wert ist, den wir mit unserem zweiten, niederfrequenten Oszillator oszillieren werden:

```js
const amp = new GainNode(audioCtx, {
  value: 1,
});
```

### Zweiten, niederfrequenten Oszillator erstellen

Nun erstellen wir einen zweiten — `square` — Wave (oder Pulse) Oszillator, um die Verstärkung unserer ersten Sinuswelle zu ändern:

```js
const lfo = new OscillatorNode(audioCtx, {
  type: "square",
  frequency: 30,
});
```

### Den Graphen verbinden

Der Schlüssel liegt hier im korrekten Verbinden des Graphen und dem Starten beider Oszillatoren:

```js
lfo.connect(amp.gain);
osc.connect(amp).connect(audioCtx.destination);
lfo.start();
osc.start(time);
osc.stop(time + pulseTime);
```

> [!NOTE]
> Wir müssen auch nicht die Standardwelltypen für einen der beiden Oszillatoren, die wir erstellen, verwenden — wir könnten ein Wavetable und die periodische Wellenmethode verwenden, wie wir es vorher getan haben. Es gibt eine Vielzahl von Möglichkeiten mit nur einem Minimum an Knoten.

### Pulse-Benutzersteuerungen

Für die UI-Steuerungen lassen Sie uns beide Frequenzen unserer Oszillatoren aussetzen, sodass sie über Range Inputs gesteuert werden können. Eine wird den Ton ändern, die andere wird ändern, wie der Pulse die erste Welle moduliert:

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

Wie zuvor werden wir die Parameter variieren, wenn der Benutzer die Bereichswerte ändert.

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

### Die endgültige playPulse() Funktion

Hier ist die gesamte `playPulse()` Funktion:

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

## Der "Noise" — Zufallsrauschpuffer mit einem Biquadfilter

Jetzt müssen wir etwas Rauschen machen! Alle Modems haben Rauschen. Rauschen sind einfach zufällige Zahlen, wenn es um Audiodaten geht, daher ist es relativ einfach, es mit Code zu erstellen.

### Einen Audiopuffer erstellen

Wir müssen einen leeren Behälter erstellen, um diese Zahlen hineinzulegen, einen, den die Web Audio API versteht. Hier kommen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)-Objekte ins Spiel. Sie können eine Datei abrufen und sie in einen Puffer dekodieren (darauf kommen wir später im Tutorial zu sprechen), oder Sie können einen leeren Puffer erstellen und mit den Daten füllen.

Für Rauschen lassen Sie uns Letzteres tun. Zuerst müssen wir die Größe unseres Puffers berechnen, um ihn zu erstellen. Wir können dafür die [`BaseAudioContext.sampleRate`](/de/docs/Web/API/BaseAudioContext/sampleRate)-Eigenschaft verwenden:

```js
const bufferSize = audioCtx.sampleRate * noiseDuration;
// Create an empty buffer
const noiseBuffer = new AudioBuffer({
  length: bufferSize,
  sampleRate: audioCtx.sampleRate,
});
```

Jetzt können wir ihn mit Zufallszahlen zwischen -1 und 1 füllen:

```js
// Fill the buffer with noise
const data = noiseBuffer.getChannelData(0);
for (let i = 0; i < bufferSize; i++) {
  data[i] = Math.random() * 2 - 1;
}
```

> [!NOTE]
> Warum -1 bis 1? Beim Ausgeben von Sound in eine Datei oder Lautsprecher benötigen wir eine Zahl, die 0 dB Vollmaßstab repräsentiert — die numerische Grenze der festen Punktmedien oder des DAC. Bei der Verarbeitung von Audio in Fließkommazahlen ist 1 eine praktische Zahl, um auf den "Vollmaßstab" für mathematische Operationen an Signalen abgebildet zu werden, daher geben Oszillatoren, Rauschgeneratoren und andere Schallquellen typischerweise bipolare Signale im Bereich von -1 bis 1 aus. Ein Browser wird Werte außerhalb dieses Bereichs abschneiden.

### Einen Pufferquelle erstellen

Jetzt haben wir den Audiopuffer und haben ihn mit Daten gefüllt; wir benötigen einen Knoten, den wir unserem Graphen hinzufügen können und der den Puffer als Quelle verwenden kann. Wir erstellen hierfür einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) und übergeben die von uns erstellten Daten:

```js
// Create a buffer source for our created data
const noise = new AudioBufferSourceNode(audioCtx, {
  buffer: noiseBuffer,
});
```

Wenn wir dies durch unser Audiograph verbinden und es abspielen:

```js
noise.connect(audioCtx.destination);
noise.start();
```

werden Sie feststellen, dass es ziemlich zischend oder blechern klingt. Wir haben weißes Rauschen erzeugt; so sollte es sein. Unsere Werte sind von -1 bis 1 verteilt, was bedeutet, dass wir Spitzen von allen Frequenzen haben, die tatsächlich ziemlich dramatisch und durchdringend sind. Wir _könnten_ die Funktion modifizieren, indem wir nur Werte von 0,5 bis -0,5 oder ähnlich verteilen, um die Spitzen zu reduzieren und den Unbehagen zu mindern; aber wo wäre da der Spaß? Lassen Sie uns das von uns erzeugte Rauschen durch einen Filter leiten.

### Einen Biquadfilter hinzufügen

Wir möchten etwas im Bereich von rosa oder braunem Rauschen. Wir möchten diese hohen Frequenzen abschneiden und möglicherweise einige niedrigere. Lassen Sie uns einen Bandpass-Biquadfilter für den Job auswählen.

> [!NOTE]
> Die Web Audio API kommt mit zwei Arten von Filterknoten: [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) und [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode). Meistens wird ein Biquadfilter ausreichen — er kommt mit verschiedenen Typen wie Tiefpass, Hochpass und Bandpass. Wenn Sie etwas komplexeres einrichten möchten, könnte der IIR-Filter eine gute Option sein — siehe [Verwendung von IIR-Filtern](/de/docs/Web/API/Web_Audio_API/Using_IIR_filters) für weitere Informationen.

Dies zu verkabeln ist das gleiche, wie wir es zuvor gesehen haben. Wir erstellen den [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode), konfigurieren die gewünschten Eigenschaften und verbinden ihn mit unserem Graphen. Verschiedene Arten von Biquadfiltern haben unterschiedliche Eigenschaften — zum Beispiel würde das Setzen der Frequenz bei einem Bandpass-Typ die mittlere Frequenz ändern. Bei einem Tiefpass setzt dies jedoch die obere Frequenz.

```js
// Filter the output
const bandpass = new BiquadFilterNode(audioCtx, {
  type: "bandpass",
  frequency: bandHz,
});

// Connect our graph
noise.connect(bandpass).connect(audioCtx.destination);
```

### Geräuschbenutzersteuerungen

Auf der Benutzerschnittstelle geben wir die Rauschdauer und die Frequenz, die wir passieren möchten, frei, indem wir dem Benutzer erlauben, sie über Range Inputs und Event-Handler anzupassen, genau wie in den vorherigen Abschnitten:

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

### Die endgültige playNoise() Funktion

Hier ist die gesamte `playNoise()` Funktion:

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

## "Dial-up" — Laden eines Sound-Samples

Es ist einfach genug, Telefonwähltöne (DTMF) zu emulieren, indem man ein paar Oszillatoren zusammen abspielt, indem man die bereits verwendeten Methoden einsetzt. Stattdessen werden wir in diesem Abschnitt eine Beispieldatei laden, um zu sehen, was dafür erforderlich ist.

### Das Sample laden

Wir möchten sicherstellen, dass unsere Datei geladen und in einen Puffer dekodiert wurde, bevor wir sie verwenden, daher erstellen wir eine [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) Funktion, um uns dies zu erlauben:

```js
async function getFile(audioContext, filepath) {
  const response = await fetch(filepath);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  return audioBuffer;
}
```

Wir können dann den [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) Operator verwenden, wenn wir diese Funktion aufrufen, was sicherstellt, dass wir nachfolgenden Code nur ausführen können, wenn die Funktion die Ausführung abgeschlossen hat.

Lassen Sie uns eine weitere `async` Funktion erstellen, um das Sample einzurichten — wir können die beiden async Funktionen in einem schönen Promise-Muster kombinieren, um weitere Aktionen auszuführen, wenn diese Datei geladen und gepuffert wurde:

```js
async function setupSample() {
  const filePath = "dtmf.mp3";
  const sample = await getFile(audioCtx, filePath);
  return sample;
}
```

> [!NOTE]
> Sie können die obige Funktion leicht modifizieren, um ein Array von Dateien zu nehmen und diese zu durchlaufen, um mehr als ein Sample zu laden. Diese Technik wäre praktisch für komplexere Instrumente oder Gaming.

Wir können jetzt `setupSample()` wie folgt verwenden:

```js
setupSample().then((sample) => {
  // sample is our buffered file
  // …
});
```

Wenn das Sample bereit zum Abspielen ist, wird das Programm die UI einrichten, sodass sie einsatzbereit ist.

### Das Sample abspielen

Lassen Sie uns eine `playSample()` Funktion erstellen ähnlich wie bei den anderen Sounds. Diesmal erstellen wir einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode), legen die abgeholten und dekodierten Pufferdaten hinein und spielen sie ab:

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
> Wir können `stop()` an einem [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) aufrufen, jedoch wird dies automatisch passieren, wenn das Sample fertig abgespielt wurde.

### Dial-up-Benutzersteuerungen

Der [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) kommt mit einer [`playbackRate`](/de/docs/Web/API/AudioBufferSourceNode/playbackRate)-Eigenschaft. Lassen Sie uns diese auf unserer Benutzersteuerung freigeben, damit wir unser Sample beschleunigen und verlangsamen können. Wir machen das auf dieselbe Weise wie zuvor:

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

### Die endgültige playSample() Funktion

Wir fügen dann unserer `playSample()` Funktion eine Zeile hinzu, um die `playbackRate`-Eigenschaft zu aktualisieren. Die endgültige Version sieht so aus:

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
> Die Sounddatei wurde von [soundbible.com](https://soundbible.com/1573-DTMF-Tones.html) bezogen.

## Audio in der Zeit abspielen

Ein häufiges Problem bei digitalen Audioanwendungen besteht darin, die Sounds rechtzeitig abzuspielen, sodass der Beat konsistent bleibt und nichts aus der Zeit gerät.

Wir könnten unsere Stimmen in einer `for`-Schleife abspielen lassen; jedoch ist das größte Problem dabei, während des Abspielens Aktualisierungen vorzunehmen, und wir haben bereits Benutzersteuerungen dafür implementiert. Außerdem wäre es wirklich schön, eine instrumentweite BPM-Steuerung in Betracht zu ziehen. Der beste Weg, unsere Stimmen auf dem Beat abzuspielen, ist, ein Planungsystem zu erstellen, bei dem wir vorausschauen, wann die Noten abgespielt werden, und sie in eine Warteschlange stellen. Wir können sie zu einem präzisen Zeitpunkt mit der `currentTime`-Eigenschaft starten und auch eventuelle Änderungen berücksichtigen.

> [!NOTE]
> Dies ist eine stark verkleinerte Version von [Chris Wilson's A Tale Of Two Clocks (2013)](https://web.dev/articles/audio-scheduling) Artikel, der diese Methode viel detaillierter behandelt. Es lohnt sich nicht, alles hier zu wiederholen, aber wir empfehlen dringend, diesen Artikel zu lesen und diese Methode zu verwenden. Ein Großteil des Codes hier stammt aus seinem [Metronombeispiel](https://github.com/cwilso/metronome/blob/main/js/metronome.js), das er im Artikel erwähnt.

Lassen Sie uns damit beginnen, unser Standard-BPM (Beats pro Minute) festzulegen, das auch benutzersteuerbar über — Sie ahnen es — ein weiteres Range Input sein wird.

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

Dann erstellen wir Variablen, um festzulegen, wie weit voraus wir schauen möchten und wie weit im Voraus wir planen möchten:

```js
const lookahead = 25.0; // How frequently to call scheduling function (in milliseconds)
const scheduleAheadTime = 0.1; // How far ahead to schedule audio (sec)
```

Lassen Sie uns eine Funktion erstellen, die die Note um einen Beat nach vorne bewegt und wieder zur ersten zurückkehrt, wenn sie die 4. (letzte) erreicht hat:

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

Wir möchten eine Referenzwarteschlange für die abzuspielenden Noten erstellen und die Funktionalität zu verwenden, um sie mit den von uns zuvor erstellten Funktionen abzuspielen:

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

Hier schauen wir auf die aktuelle Zeit und vergleichen diese mit der Zeit für die folgende Note; wenn die beiden übereinstimmen, ruft sie die beiden vorherigen Funktionen auf.

[`AudioContext`](/de/docs/Web/API/AudioContext)-Objektinstanzen haben eine [`currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime)-Eigenschaft, die es ermöglicht, die Anzahl der Sekunden nach Erstellung des Kontexts zu ermitteln. Wir werden sie für das Timing in unserem Step-Sequenzer verwenden. Sie ist extrem genau und gibt einen Float-Wert zurück, der auf etwa 15 Dezimalstellen genau ist.

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

Wir benötigen auch eine `draw()` Funktion, um die UI zu aktualisieren, damit wir sehen können, wann der Beat voranschreitet.

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

Jetzt müssen wir nur noch sicherstellen, dass wir das Sample geladen haben, bevor wir das Instrument _abspielen_ können. Wir werden einen Ladebildschirm hinzufügen, der verschwindet, wenn die Datei abgerufen und dekodiert wurde. Dann können wir dem Scheduler erlauben, über das Klicken auf den Wiedergabeknopf zu starten.

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

Wir haben nun ein Instrument in unserem Browser! Spielen und experimentieren Sie weiter — Sie können all diese Techniken erweitern, um etwas viel Ausgefeilteres zu erstellen.
