---
title: "Erweiterte Techniken: Erstellen und Sequenzieren von Audio"
slug: Web/API/Web_Audio_API/Advanced_techniques
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{DefaultAPISidebar("Web Audio API")}}

In diesem Tutorial behandeln wir die Erstellung und Modifikation von Klängen sowie Timing und Planung. Wir werden das Laden von Samples, Hüllkurven, Filter, Wavetables und Frequenzmodulation einführen. Wenn Sie mit diesen Begriffen vertraut sind und nach einer Einführung in ihre Anwendung mit der Web Audio API suchen, sind Sie hier genau richtig.

> [!NOTE]
> Den Quellcode für das unten stehende Demo finden Sie auf GitHub im [step-sequencer](https://github.com/mdn/webaudio-examples/tree/main/step-sequencer) Unterverzeichnis des MDN [webaudio-examples](https://github.com/mdn/webaudio-examples) Repos. Sie können sich auch das [Live-Demo](https://mdn.github.io/webaudio-examples/step-sequencer/) ansehen.

## Demo

Wir werden uns einen sehr einfachen Step-Sequenzer ansehen:

![Eine Sound-Sequenzer-Anwendung mit Play- und BPM-Hauptsteuerungen und 4 verschiedenen Stimmen mit jeweils eigenen Steuerungen.](sequencer.png)

In der Praxis ist es einfacher, dies mit einer Bibliothek zu tun — die Web Audio API wurde entwickelt, um darauf aufzubauen. Wenn Sie ein komplexeres Projekt starten wollen, wäre [tone.js](https://tonejs.github.io/) ein hervorragender Ausgangspunkt. Wir möchten jedoch demonstrieren, wie man ein solches Demo von Grund auf als Lernübung erstellt.

Die Schnittstelle besteht aus Hauptsteuerungen, die es uns ermöglichen, den Sequenzer abzuspielen/anzuhalten und den BPM (Beats per Minute) einzustellen, um die "Musik" zu beschleunigen oder zu verlangsamen.

Es können vier verschiedene Klänge oder Stimmen abgespielt werden. Jede Stimme hat vier Tasten, eine für jeden Schlag in einem Musikmaß. Wenn sie aktiviert sind, wird der Ton erklingen. Wenn das Instrument spielt, bewegt es sich über diese Reihe von Schlägen und wiederholt das Maß.

Jede Stimme hat auch lokale Steuerungen, die es Ihnen ermöglichen, die Effekte oder Parameter zu manipulieren, die bei jeder Technik, die wir zur Erstellung dieser Stimmen verwenden, eingesetzt werden. Die von uns verwendeten Methoden sind:

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
      <td>Zufälliges Rauschpuffer, Biquad-Filter</td>
      <td>
        [`AudioBuffer`](/de/docs/Web/API/AudioBuffer),
        [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode),
        [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)
      </td>
    </tr>
    <tr>
      <td>"Dial up"</td>
      <td>Ein Tonbeispiel laden und abspielen</td>
      <td>
        [`BaseAudioContext/decodeAudioData`](/de/docs/Web/API/BaseAudioContext/decodeAudioData),
        [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Wir haben dieses Instrument nicht erstellt, um gut zu klingen, sondern um Demonstrationscode bereitzustellen. Diese Demonstration stellt eine _sehr_ vereinfachte Version eines solchen Instruments dar. Die Klänge basieren auf einem Modem mit Einwählverbindung. Wenn Sie nicht wissen, wie ein solches Gerät klingt, können Sie [hier einen anhören](https://soundcloud.com/john-pemberton/modem-dialup).

## Erstellen eines Audio-Kontextes

Wie Sie inzwischen gewohnt sein sollten, beginnt jede Web Audio API-Anwendung mit einem Audio-Kontext:

```js
const audioCtx = new AudioContext();
```

## Der "Sweep" — Oszillatoren, periodische Wellen und Hüllkurven

Für das, was wir den "Sweep" Klang nennen werden, das erste Geräusch, das Sie hören, wenn Sie sich einwählen, erstellen wir einen Oszillator, um den Ton zu erzeugen.

Der [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) bietet von Haus aus grundlegende Wellenformen — Sinus, Rechteck, Dreieck oder Sägezahn. Statt jedoch die Standardwellen zu verwenden, die standardmäßig bereitgestellt werden, erstellen wir unsere eigene über die [`PeriodicWave`](/de/docs/Web/API/PeriodicWave)-Schnittstelle und Werte, die in einem Wave-Table festgelegt sind. Wir können den [`PeriodicWave()`](/de/docs/Web/API/PeriodicWave/PeriodicWave)-Konstruktor verwenden, um diese benutzerdefinierte Welle mit einem Oszillator zu verwenden.

### Die periodische Welle

Zuerst erstellen wir unsere periodische Welle. Dazu müssen wir reale und imaginäre Werte in den [`PeriodicWave()`](/de/docs/Web/API/PeriodicWave/PeriodicWave)-Konstruktor übergeben:

```js
const wave = new PeriodicWave(audioCtx, {
  real: wavetable.real,
  imag: wavetable.imag,
});
```

> [!NOTE]
> In unserem Beispiel wird das Wave-Table in einer separaten JavaScript-Datei (`wavetable.js`) gehalten, da es _so_ viele Werte gibt. Wir haben es aus einem [Repository von Wavetables](https://github.com/GoogleChromeLabs/web-audio-samples/tree/main/src/demos/wavetable-synth/wave-tables) übernommen, das in den [Web Audio API-Beispielen von Google Chrome Labs](https://github.com/GoogleChromeLabs/web-audio-samples/) zu finden ist.

### Der Oszillator

Jetzt können wir einen [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) erstellen und seine Welle auf die von uns erstellte setzen:

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

### Steuerung der Amplitude

Das ist großartig, aber wäre es nicht schön, wenn wir eine Amplitudenhüllkurve dazu hätten? Lassen Sie uns eine einfache erstellen, damit wir uns an die Methoden gewöhnen, die wir benötigen, um eine Hüllkurve mit der Web Audio API zu erstellen.

Lassen Sie uns sagen, unsere Hüllkurve hat Attack und Release. Wir können dem Benutzer erlauben, diese mit [Range-Inputs](/de/docs/Web/HTML/Element/input/range) auf der Benutzeroberfläche zu steuern:

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

Jetzt können wir einige Variablen in JavaScript erstellen und sie ändern, wenn die Eingabewerte aktualisiert werden:

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

Jetzt können wir unsere `playSweep()`-Funktion erweitern. Wir müssen einen [`GainNode`](/de/docs/Web/API/GainNode) hinzufügen und ihn durch unser Audiografen verbinden, um Amplitudenvariationen auf unseren Klang anzuwenden. Der Gain-Node hat eine Eigenschaft: `gain`, die vom Typ [`AudioParam`](/de/docs/Web/API/AudioParam) ist.

Das ist nützlich — jetzt können wir die Macht der Audioparameter-Methoden auf den Gain-Wert nutzen. Wir können einen Wert zu einem bestimmten Zeitpunkt festlegen, oder wir können ihn _über_ die Zeit mit Methoden wie [`AudioParam.linearRampToValueAtTime`](/de/docs/Web/API/AudioParam/linearRampToValueAtTime) ändern.

Wie oben erwähnt, verwenden wir die `linearRampToValueAtTime`-Methode für unser Attack und Release. Sie nimmt zwei Parameter an — den Wert, den Sie dem Parameter, den Sie ändern, setzen wollen (in diesem Fall das Gain) und wann Sie dies tun möchten. In unserem Fall wird das Wann von unseren Eingaben gesteuert. Also, im Beispiel unten, erhöht sich das Gain zu 1 in linearer Geschwindigkeit über die Zeit, die der Attack-Range-Input definiert. Ebenso wird für unser Release das Gain zu 0 in linearer Geschwindigkeit gesetzt, über die Zeit, die der Release-Input gesetzt wurde.

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

## Der "Pulse" — Modulation mit einem Tieffrequenzoszillator

Großartig, jetzt haben wir unseren Sweep! Lassen Sie uns weitermachen und uns diesen schönen Puls ansehen. Wir können dies mit einem einfachen Oszillator erreichen, der mit einem zweiten Oszillator moduliert wird.

### Erster Oszillator

Wir richten unseren ersten [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) ähnlich wie bei unserem Sweep-Klang ein, außer dass wir kein Wave-Table verwenden, um eine maßgeschneiderte Welle zu setzen — wir verwenden einfach die Standard-`Sinus`-Welle:

```js
const osc = new OscillatorNode(audioCtx, {
  type: "sine",
  frequency: pulseHz,
});
```

Jetzt erstellen wir einen [`GainNode`](/de/docs/Web/API/GainNode), da wir den `gain`-Wert mit unserem zweiten, tieffrequenten Oszillator oszillieren werden:

```js
const amp = new GainNode(audioCtx, {
  value: 1,
});
```

### Zweiter, tieffrequenter Oszillator

Jetzt erstellen wir einen zweiten — `rechteck` (oder Puls) — Oszillator, um die Verstärkung unserer ersten Sinuswelle zu verändern:

```js
const lfo = new OscillatorNode(audioCtx, {
  type: "square",
  frequency: 30,
});
```

### Grafen verbinden

Der Schlüssel liegt hier in der korrekten Verbindung des Grafen und darin, beide Oszillatoren zu starten:

```js
lfo.connect(amp.gain);
osc.connect(amp).connect(audioCtx.destination);
lfo.start();
osc.start(time);
osc.stop(time + pulseTime);
```

> [!NOTE]
> Wir müssen auch nicht die Standardwellentypen für einen dieser Oszillatoren verwenden, die wir erstellen — wir könnten genauso gut ein Wave-Table und die periodische Wellenmethode verwenden, wie wir es vorher getan haben. Es gibt eine Vielzahl von Möglichkeiten mit nur einem Minimum an Nodes.

### Pulse-Benutzersteuerungen

Für die Benutzeroberflächensteuerungen lassen wir beide Frequenzen unserer Oszillatoren zu, damit sie über Range-Inputs gesteuert werden können. Einer wird den Ton ändern und der andere, wie der Puls die erste Welle moduliert:

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

Wie zuvor variieren wir die Parameter, wenn der Benutzer die Range-Werte ändert.

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

## Das "Noise" — Zufälliger Rauschpuffer mit einem Biquad-Filter

Jetzt müssen wir etwas Lärm machen! Alle Modems haben Lärm. Rauschen sind einfach zufällige Zahlen, wenn es um Audiodaten geht, und ist daher eine relativ einfache Sache, die man mit Code erstellen kann.

### Erstellen eines Audio-Puffers

Wir müssen einen leeren Container erstellen, um diese Zahlen hinein zu legen, aber einen, den die Web Audio API versteht. Dies ist der Punkt, an dem [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)-Objekte ins Spiel kommen. Sie können eine Datei abrufen und sie in einen Puffer dekodieren (darauf werden wir später im Tutorial eingehen), oder Sie können einen leeren Puffer erstellen und ihn mit Ihren Daten füllen.

Für Noise tun wir Letzteres. Wir müssen zuerst die Größe unseres Puffers berechnen, um ihn zu erstellen. Wir können die [`BaseAudioContext.sampleRate`](/de/docs/Web/API/BaseAudioContext/sampleRate)-Eigenschaft dafür verwenden:

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
> Warum -1 bis 1? Beim Ausgeben von Sound an eine Datei oder Lautsprecher benötigen wir eine Zahl, die 0 dB Full Scale darstellt — die numerische Grenze des Festpunkt-Medien oder DACs. In Floating-Point-Audio ist 1 eine geeignete Zahl, um zu "full scale" für mathematische Operationen auf Signale zuzuordnen, daher geben Oszillatoren, Rauschgeneratoren und andere Klangquellen typischerweise bipolare Signale im Bereich von -1 bis 1 aus. Ein Browser wird Werte außerhalb dieses Bereichs begrenzen.

### Erstellen einer Puffe-Quelle

Jetzt, da wir den Audio-Puffer haben und ihn mit Daten gefüllt haben, benötigen wir einen Node, den wir zu unserem Graphen hinzufügen können, der den Puffer als Quelle nutzen kann. Wir erstellen dafür einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) und übergeben die von uns erstellten Daten:

```js
// Create a buffer source for our created data
const noise = new AudioBufferSourceNode(audioCtx, {
  buffer: noiseBuffer,
});
```

Wenn wir dies durch unseren Audiografen verbinden und spielen:

```js
noise.connect(audioCtx.destination);
noise.start();
```

Sie werden feststellen, dass es ziemlich zischend oder blechern ist. Wir haben weißes Rauschen erstellt; so sollte es sein. Unsere Werte verteilen sich von -1 bis 1, was bedeutet, dass wir Gipfel aller Frequenzen haben, die tatsächlich ziemlich dramatisch und durchdringend sind. Wir _könnten_ die Funktion modifizieren, um Werte nur von 0,5 bis -0,5 oder ähnlich zu verteilen, um die Gipfel zu entfernen und das Unbehagen zu reduzieren; jedoch, wo bleibt da der Spaß? Lassen Sie uns das Rauschen, das wir erstellt haben, durch einen Filter leiten.

### Hinzufügen eines Biquad-Filters zur Mischung

Wir möchten etwas im Bereich von rosa oder braunem Rauschen. Wir möchten diese hohen Frequenzen abschneiden und vielleicht einige tiefere. Wählen wir einen Bandpass-Biquad-Filter für diese Arbeit aus.

> [!NOTE]
> Die Web Audio API kommt mit zwei Arten von Filternodes: [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) und [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode). Meistens reicht ein Biquad-Filter aus — er bietet verschiedene Typen wie Tiefpass, Hochpass und Bandpass. Wenn Sie jedoch etwas maßgeschneiderteres machen möchten, könnte der IIR-Filter eine gute Option sein — siehe [Verwendung von IIR-Filtern](/de/docs/Web/API/Web_Audio_API/Using_IIR_filters) für weitere Informationen.

Das Verkabeln ist so, wie wir es vorher gesehen haben. Wir erstellen den [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode), konfigurieren die gewünschten Eigenschaften und verbinden ihn durch unseren Graphen. Verschiedene Arten von Biquad-Filtern haben unterschiedliche Eigenschaften — das Einstellen der Frequenz auf einem Bandpass-Typ passt beispielsweise die mittleren Frequenzen an. Allerdings würde es bei einem Tiefpass die obere Frequenz einstellen.

```js
// Filter the output
const bandpass = new BiquadFilterNode(audioCtx, {
  type: "bandpass",
  frequency: bandHz,
});

// Connect our graph
noise.connect(bandpass).connect(audioCtx.destination);
```

### Noise-Benutzersteuerungen

Auf der Benutzeroberfläche werden wir die Noise-Dauer und die Frequenz, die wir bandpassieren möchten, aussetzen, sodass der Benutzer sie über Range-Inputs und Event-Handler wie in den vorherigen Abschnitten anpassen kann:

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

## "Dial-up" — ein Tonsample laden

Es ist einfach genug, Telefonsignale (DTMF) zu emulieren, indem man ein paar Oszillatoren zusammen abspielt, indem man die Methoden verwendet, die wir bereits genutzt haben. Stattdessen werden wir in diesem Abschnitt eine Beispieldatei laden, um zu sehen, was dabei beteiligt ist.

### Laden des Samples

Wir möchten sicherstellen, dass unsere Datei geladen und in einen Puffer dekodiert wurde, bevor wir sie verwenden, also lassen Sie uns eine [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) Funktion erstellen, die uns dies ermöglicht:

```js
async function getFile(audioContext, filepath) {
  const response = await fetch(filepath);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  return audioBuffer;
}
```

Wir können dann den [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)-Operator verwenden, wenn wir diese Funktion aufrufen, um sicherzustellen, dass wir den nachfolgenden Code nur ausführen können, wenn er die Ausführung abgeschlossen hat.

Lassen Sie uns eine weitere `async`-Funktion erstellen, um das Sample einzurichten — wir können die beiden async-Funktionen in einem schönen Promise-Muster kombinieren, um weitere Aktionen auszuführen, wenn diese Datei geladen und gepuffert wurde:

```js
async function setupSample() {
  const filePath = "dtmf.mp3";
  const sample = await getFile(audioCtx, filePath);
  return sample;
}
```

> [!NOTE]
> Sie können die obige Funktion leicht modifizieren, um ein Array von Dateien zu übernehmen und über sie zu iterieren, um mehr als ein Sample zu laden. Diese Technik wäre praktisch für komplexere Instrumente oder Spiele.

Wir können jetzt `setupSample()` wie folgt verwenden:

```js
setupSample().then((sample) => {
  // sample is our buffered file
  // …
});
```

Wenn das Sample bereit ist zum Abspielen, dann richtet das Programm die Benutzeroberfläche ein, damit sie betriebsbereit ist.

### Abspielen des Samples

Lassen Sie uns eine `playSample()`-Funktion ähnlich wie wir es mit den anderen Klängen getan haben, erstellen. Dieser Zeit erstellen wir einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode), platzieren die geladenen und dekodierten Pufferdaten hinein und spielen es ab:

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
> Wir können `stop()` auf einem [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) aufrufen, jedoch wird dies automatisch geschehen, wenn das Sample fertig abgespielt ist.

### Dial-up Benutzersteuerungen

Der [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) kommt mit einer [`playbackRate`](/de/docs/Web/API/AudioBufferSourceNode/playbackRate)-Eigenschaft. Lassen Sie uns diese auf unserer Benutzeroberfläche zugänglich machen, sodass wir das Sample beschleunigen und verlangsamen können. Wir werden das wie zuvor machen:

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

Wir werden dann eine Zeile hinzufügen, um die `playbackRate`-Eigenschaft zu aktualisieren, zu unserer `playSample()`-Funktion. Die finale Version sieht so aus:

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
> Die Tondatei wurde [von soundbible.com bezogen](https://soundbible.com/1573-DTMF-Tones.html).

## Audio rechtzeitig abspielen

Ein häufiges Problem bei digitalen Audioanwendungen ist es, die Klänge rechtzeitig abzuspielen, damit der Takt konsistent bleibt und die Dinge nicht aus dem Takt geraten.

Wir könnten unsere Stimmen planen, innerhalb einer `for`-Schleife zu spielen; das größte Problem hierbei ist jedoch das Aktualisieren während es spielt, und wir haben bereits Benutzeroberflächensteuerungen implementiert, um dies zu tun. Auch wäre es sehr schön, ein instrumentübergreifendes BPM-Steuerung zu berücksichtigen. Der beste Weg, um unsere Stimmen im Takt abzuspielen, besteht darin, ein Planungssystem zu erstellen, bei dem wir im Voraus schauen, wann die Noten spielen werden, und sie in eine Warteschlange einfügen. Wir können sie zu einem genauen Zeitpunkt mit der `currentTime`-Eigenschaft starten und auch etwaige Änderungen berücksichtigen.

> [!NOTE]
> Dies ist eine stark reduzierte Version des Artikels [Chris Wilsons A Tale Of Two Clocks (2013)](https://web.dev/articles/audio-scheduling), der sich mit dieser Methode ausführlicher auseinandersetzt. Es bringt nichts, alles hier zu wiederholen, aber wir empfehlen dringend, diesen Artikel zu lesen und diese Methode zu verwenden. Ein Großteil des Codes hier stammt aus seinem [Metronom-Beispiel](https://github.com/cwilso/metronome/blob/main/js/metronome.js), das er im Artikel erwähnt.

Lassen Sie uns anfangen, indem wir unser Standard-BPM (Schläge pro Minute) festlegen, das auch benutzersteuerbar über — Sie ahnen es schon — einen weiteren Range-Input sein wird.

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

Dann erstellen wir Variablen, um zu definieren, wie weit wir im Voraus schauen und wie weit wir im Voraus planen möchten:

```js
const lookahead = 25.0; // How frequently to call scheduling function (in milliseconds)
const scheduleAheadTime = 0.1; // How far ahead to schedule audio (sec)
```

Lassen Sie uns eine Funktion erstellen, die die Note um einen Takt vorverschiebt und zur ersten zurückkehrt, wenn sie die vierte (letzte) erreicht:

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

Wir möchten eine Referenzwarteschlange für die Noten erstellen, die gespielt werden sollen, und die Funktionalität, um sie mit den Funktionen, die wir zuvor erstellt haben, abzuspielen:

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

Hier schauen wir auf die aktuelle Uhrzeit und vergleichen sie mit der Uhrzeit für die nächste Note; wenn die beiden übereinstimmen, wird es die beiden vorherigen Funktionen aufrufen.

[`AudioContext`](/de/docs/Web/API/AudioContext)-Objektinstanzen haben eine [`currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime)-Eigenschaft, die es uns ermöglicht, die Anzahl der Sekunden nach der ersten Erstellung des Kontexts abzurufen. Wir werden sie für das Timing in unserem Step-Sequenzer verwenden. Es ist extrem genau und gibt einen Gleitkommawert zurück, der auf etwa 15 Dezimalstellen genau ist.

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

Wir benötigen auch eine `draw()`-Funktion, um die Benutzeroberfläche zu aktualisieren, sodass wir sehen können, wenn der Takt fortschreitet.

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

Jetzt bleibt nur noch sicherzustellen, dass wir das Sample geladen haben, bevor wir das Instrument _spielen_ können. Wir fügen einen Ladebildschirm hinzu, der verschwindet, wenn die Datei abgerufen und dekodiert wurde. Dann können wir den Planer starten lassen, wenn das Play-Klickereignis ausgelöst wird.

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

Jetzt haben wir ein Instrument in unserem Browser! Spielen Sie weiterhin und experimentieren Sie — Sie können jede dieser Techniken erweitern, um etwas viel Ausgefeilteres zu schaffen.
