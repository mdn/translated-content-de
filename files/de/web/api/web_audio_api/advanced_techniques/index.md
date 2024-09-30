---
title: "Erweiterte Techniken: Erstellen und Sequenzieren von Audio"
slug: Web/API/Web_Audio_API/Advanced_techniques
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{DefaultAPISidebar("Web Audio API")}}

In diesem Tutorial werden wir uns mit der Erstellung und Modifikation von Sound sowie mit Timing und Planung befassen. Wir führen das Laden von Samples, Hüllkurven, Filter, Wavetables und Frequenzmodulation ein. Wenn Sie mit diesen Begriffen vertraut sind und eine Einführung in ihre Anwendung mit der Web Audio API suchen, sind Sie hier genau richtig.

> [!NOTE]
> Den Quellcode für das unten stehende Demo finden Sie auf GitHub im [step-sequencer](https://github.com/mdn/webaudio-examples/tree/main/step-sequencer)-Unterverzeichnis des MDN-Repositorys [webaudio-examples](https://github.com/mdn/webaudio-examples). Sie können sich auch das [Live-Demo](https://mdn.github.io/webaudio-examples/step-sequencer/) ansehen.

## Demo

Wir betrachten einen sehr einfachen Step-Sequencer:

![Eine Sound-Sequenzer-Anwendung mit Wiedergabe- und BPM-Mastersteuerungen sowie 4 verschiedenen Stimmen mit Steuerungen für jede.](sequencer.png)

Praktisch ist dies einfacher mit einer Bibliothek zu erreichen — die Web Audio API wurde so konzipiert, dass man darauf aufbauen kann. Wenn Sie dabei sind, etwas Komplexeres zu entwickeln, wäre [tone.js](https://tonejs.github.io/) ein ausgezeichneter Ausgangspunkt. Wir möchten jedoch demonstrieren, wie man ein solches Demo aus grundlegenden Prinzipien erstellt, als eine Lernübung.

Die Benutzeroberfläche besteht aus Master-Steuerungen, mit denen wir den Sequenzer abspielen/anhalten und die BPM (Schläge pro Minute) anpassen können, um die "Musik" zu beschleunigen oder zu verlangsamen.

Es können vier verschiedene Sounds oder Stimmen abgespielt werden. Jede Stimme verfügt über vier Tasten, eine für jeden Schlag in einem Musik-Takt. Wenn sie aktiviert sind, wird der Ton erklingen. Wenn das Instrument spielt, wird es sich über diesen Satz von Schlägen bewegen und den Takt wiederholen.

Jede Stimme hat auch lokale Steuerungen, mit denen Sie die Effekte oder Parameter manipulieren können, die für die jeweilige Technik gelten, die wir zur Erstellung dieser Stimmen verwenden. Die von uns verwendeten Methoden sind:

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Name der Stimme</th>
      <th scope="col">Technik</th>
      <th scope="col">Zugehörige Web Audio API Funktion</th>
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
      <td>"Dial-up"</td>
      <td>Laden eines Sound-Samples zum Abspielen</td>
      <td>
        [`BaseAudioContext/decodeAudioData`](/de/docs/Web/API/BaseAudioContext/decodeAudioData),
        [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Wir haben dieses Instrument nicht erstellt, um gut zu klingen, sondern um Demonstrationscode bereitzustellen. Diese Demonstration stellt eine _sehr_ vereinfachte Version eines solchen Instruments dar. Die Sounds basieren auf einem Modem mit Einwahlverbindung. Wenn Sie nicht wissen, wie ein solches Gerät klingt, können Sie sich [hier eines anhören](https://soundcloud.com/john-pemberton/modem-dialup).

## Erstellen eines Audiokontexts

Wie Sie es inzwischen gewohnt sein sollten, beginnt jede Web Audio API-Anwendung mit einem Audiokontext:

```js
const audioCtx = new AudioContext();
```

## Der "Sweep" — Oszillatoren, periodische Wellen und Hüllkurven

Für das, was wir den "Sweep"-Sound nennen werden, das erste Geräusch, das Sie hören, wenn Sie einwählen, werden wir einen Oszillator erstellen, um den Sound zu erzeugen.

Der [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) bietet von Haus aus grundlegende Wellenformen — Sinus, Rechteck, Dreieck oder Sägezahn. Anstatt die standardmäßig verfügbaren Wellenformen zu verwenden, erstellen wir unsere eigene mit der [`PeriodicWave`](/de/docs/Web/API/PeriodicWave)-Schnittstelle und Werten, die in einer Wavetable gesetzt sind. Wir können den [`PeriodicWave()`](/de/docs/Web/API/PeriodicWave/PeriodicWave)-Konstruktor verwenden, um diese benutzerdefinierte Welle mit einem Oszillator zu verwenden.

### Die periodische Welle

Zunächst erstellen wir unsere periodische Welle. Dafür müssen wir reale und imaginäre Werte in den [`PeriodicWave()`](/de/docs/Web/API/PeriodicWave/PeriodicWave)-Konstruktor einfügen:

```js
const wave = new PeriodicWave(audioCtx, {
  real: wavetable.real,
  imag: wavetable.imag,
});
```

> [!NOTE]
> In unserem Beispiel wird die Wavetable in einer separaten JavaScript-Datei (`wavetable.js`) gehalten, da es _so_ viele Werte gibt. Wir haben sie aus einem [Repository von Wavetables](https://github.com/GoogleChromeLabs/web-audio-samples/tree/main/src/demos/wavetable-synth/wave-tables) genommen, das in den [Web Audio API-Beispielen von Google Chrome Labs](https://github.com/GoogleChromeLabs/web-audio-samples/) zu finden ist.

### Der Oszillator

Jetzt können wir einen [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) erstellen und seine Welle auf das von uns erstellte setzen:

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

### Amplitude steuern

Das ist großartig, aber wäre es nicht schön, wenn wir eine Amplitudenhüllkurve dazu hätten? Lassen Sie uns eine einfache erstellen, damit wir mit den Methoden vertraut werden, die wir benötigen, um eine Hüllkurve mit der Web Audio API zu erstellen.

Angenommen, unsere Hüllkurve hat Attack und Release. Wir können dem Benutzer ermöglichen, diese über [Range-Inputs](/de/docs/Web/HTML/Element/input/range) auf der Benutzeroberfläche zu steuern:

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

Jetzt können wir einige Variablen in JavaScript erstellen und sie ändern lassen, wenn die Input-Werte aktualisiert werden:

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

Nun können wir unsere `playSweep()`-Funktion erweitern. Wir müssen einen [`GainNode`](/de/docs/Web/API/GainNode) hinzufügen und diesen durch unser Audiografen verbinden, um Amplitudenschwankungen auf unseren Sound anzuwenden. Der Gain-Knoten hat eine Eigenschaft: `gain`, die von Typ [`AudioParam`](/de/docs/Web/API/AudioParam) ist.

Dies ist nützlich — jetzt können wir anfangen, die Methoden der Audioparameter auf den Gain-Wert anzuwenden. Wir können einen Wert zu einem bestimmten Zeitpunkt setzen oder ihn _über_ die Zeit ändern mit Methoden wie [`AudioParam.linearRampToValueAtTime`](/de/docs/Web/API/AudioParam/linearRampToValueAtTime).

Wie oben erwähnt, verwenden wir die Methode `linearRampToValueAtTime` für unseren Attack und Release. Sie nimmt zwei Parameter — den Wert, auf den Sie den Parameter setzen möchten, den Sie ändern (in diesem Fall den Gain), und wann Sie dies tun möchten. In unserem Fall wird _wann_ durch unsere Inputs gesteuert. Im unten stehenden Beispiel steigt der Gain linear über die Zeit, die der Attack-Range-Input definiert, auf 1. Ähnlich wird für unseren Release der Gain linear auf 0 gesetzt, über die Zeit, die der Release-Input definiert hat.

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

## Der "Pulse" — Modulation durch niederfrequente Oszillatoren

Großartig, jetzt haben wir unseren Sweep! Lassen Sie uns weitermachen und einen Blick auf diesen schönen Puls-Sound werfen. Dies können wir mit einem einfachen Oszillator erreichen, der mit einem zweiten Oszillator moduliert wird.

### Erster Oszillator

Wir richten unseren ersten [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) genau wie unseren Sweep-Sound ein, jedoch ohne eine Wavetable zu verwenden, um eine maßgeschneiderte Welle zu setzen — wir verwenden einfach die Standard-`sine`-Welle:

```js
const osc = new OscillatorNode(audioCtx, {
  type: "sine",
  frequency: pulseHz,
});
```

Jetzt erstellen wir einen [`GainNode`](/de/docs/Web/API/GainNode), da wir den `gain`-Wert mit unserem zweiten, niederfrequenten Oszillator oszillieren werden:

```js
const amp = new GainNode(audioCtx, {
  value: 1,
});
```

### Der zweite, niederfrequente Oszillator

Jetzt erstellen wir einen zweiten Oszillator mit `square`-Welle (oder Puls), um die Verstärkung unserer ersten Sinuswelle zu ändern:

```js
const lfo = new OscillatorNode(audioCtx, {
  type: "square",
  frequency: 30,
});
```

### Den Graphen verbinden

Der Schlüssel ist hier, den Graphen korrekt zu verbinden und auch beide Oszillatoren zu starten:

```js
lfo.connect(amp.gain);
osc.connect(amp).connect(audioCtx.destination);
lfo.start();
osc.start(time);
osc.stop(time + pulseTime);
```

> [!NOTE]
> Wir müssen auch nicht die Standardwellentypen für einen dieser Oszillatoren verwenden, die wir erstellen — wir könnten eine Wavetable und die periodische Wellenmethode wie zuvor nutzen. Es gibt eine Vielzahl von Möglichkeiten mit nur einem Minimum an Knoten.

### Pulse-Benutzersteuerungen

Für die UI-Steuerungen lassen Sie uns beide Frequenzen unserer Oszillatoren freigeben, sodass sie mit Range-Inputs gesteuert werden können. Eine wird den Ton ändern, und die andere wird ändern, wie der Puls die erste Welle moduliert:

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

Wie zuvor variieren wir die Parameter, wenn der Benutzer die Werte der Range-Inputs ändert.

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

### Die vollständige playPulse()-Funktion

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

Jetzt müssen wir etwas Lärm machen! Alle Modems haben Lärm. Lärm sind nur Zufallszahlen, wenn es um Audiodaten geht, also ist es relativ einfach, so etwas mit Code zu erstellen.

### Erstellen eines Audiopuffers

Wir müssen einen leeren Behälter erstellen, um diese Zahlen reinzupacken, einen, den die Web Audio API versteht. Hier kommen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)-Objekte ins Spiel. Sie können eine Datei abrufen und sie in einen Puffer dekodieren (darauf kommen wir später im Tutorial), oder Sie können einen leeren Puffer erstellen und ihn mit Ihren Daten füllen.

Für Lärm machen wir Letzteres. Zuerst müssen wir die Größe unseres Puffers berechnen, um ihn zu erstellen. Wir können dafür die Eigenschaft [`BaseAudioContext.sampleRate`](/de/docs/Web/API/BaseAudioContext/sampleRate) verwenden:

```js
const bufferSize = audioCtx.sampleRate * noiseDuration;
// Create an empty buffer
const noiseBuffer = new AudioBuffer({
  length: bufferSize,
  sampleRate: audioCtx.sampleRate,
});
```

Jetzt können wir es mit Zufallszahlen zwischen -1 und 1 füllen:

```js
// Fill the buffer with noise
const data = noiseBuffer.getChannelData(0);
for (let i = 0; i < bufferSize; i++) {
  data[i] = Math.random() * 2 - 1;
}
```

> [!NOTE]
> Warum -1 bis 1? Wenn man Sound in eine Datei oder Lautsprecher ausgibt, benötigen wir eine Zahl, die "0 dB Full Scale" repräsentiert — die nummerische Grenze der festen Punktmedien oder des DAC. In Gleitkomma-Audio ist 1 eine bequeme Zahl, um sie auf "Full Scale" für mathematische Operationen an Signalen zu mappen, daher generieren Oszillatoren, Rauschgeneratoren und andere Klangquellen typischerweise bipolare Signale im Bereich von -1 bis 1. Ein Browser wird Werte außerhalb dieses Bereiches zwängen.

### Einen Puffer als Quelle erstellen

Nachdem wir den Audiopuffer erstellt und mit Daten gefüllt haben, benötigen wir einen Knoten, um ihn in unseren Graph einzubringen, der den Puffer als Quelle nutzen kann. Wir erstellen dafür einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) und geben die von uns erstellten Daten ein:

```js
// Create a buffer source for our created data
const noise = new AudioBufferSourceNode(audioCtx, {
  buffer: noiseBuffer,
});
```

Wenn wir dies durch unseren Audiographen verbinden und abspielen:

```js
noise.connect(audioCtx.destination);
noise.start();
```

Werden Sie bemerken, dass es ziemlich zischend oder dünn klingt. Wir haben weißes Rauschen erzeugt; so soll es sein. Unsere Werte sind von -1 bis 1 verteilt, was bedeutet, dass wir Spitzen aller Frequenzen haben, die tatsächlich ziemlich dramatisch und schneidend sind. Wir _könnten_ die Funktion nur Werte von 0,5 bis -0,5 oder ähnlichem verteilen lassen, um die Spitzen abzuschneiden und den Unbehagen zu reduzieren; jedoch, wo bleibt da der Spaß? Lassen wir das Rauschen, das wir erzeugt haben, durch einen Filter leiten.

### Hinzufügen eines Biquad-Filters

Wir möchten etwas im Bereich von rosa oder braunem Lärm. Wir möchten die hohen Frequenzen abschneiden und möglicherweise einige niedrigere Frequenzen. Wählen wir einen Bandpass-Biquad-Filter für diesen Job.

> [!NOTE]
> Die Web Audio API kommt mit zwei Arten von Filtern: [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) und [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode). Meistens reicht ein Biquad-Filter aus — er kommt mit verschiedenen Typen wie Tiefpass, Hochpass und Bandpass. Wenn Sie jedoch etwas maßgeschneiderteres machen möchten, könnte der IIR-Filter eine gute Option sein — siehe [Verwendung von IIR-Filtern](/de/docs/Web/API/Web_Audio_API/Using_IIR_filters) für weitere Informationen.

Das Verkabeln funktioniert wie zuvor gesehen. Wir erstellen den [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode), konfigurieren die gewünschten Eigenschaften und schließen ihn an unseren Graphen an. Verschiedene Arten von Biquad-Filtern haben verschiedene Eigenschaften — zum Beispiel das Einstellen der Frequenz bei einem Bandpass-Typ ändert die mittlere Frequenz. Bei einem Tiefpass würde es jedoch die obere Frequenz setzen.

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

Auf der Benutzeroberfläche geben wir die Rauschdauer und die Frequenz frei, die wir bandpäsig haben wollen, und ermöglichen dem Nutzer, diese über Range-Inputs und Eventhandler wie in den vorherigen Abschnitten einzustellen:

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

### Die vollständige playNoise()-Funktion

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

## "Dial-up" — Laden eines Sound-Samples

Es ist einfach genug, Telefongeräusche (DTMF) zu emulieren, indem man ein paar Oszillatoren mit den bereits verwendeten Methoden zusammen spielt. Stattdessen werden wir in diesem Abschnitt ein Sample-Datei laden, um zu sehen, was erforderlich ist.

### Das Sample laden

Wir möchten sicherstellen, dass unsere Datei geladen und in einen Puffer dekodiert wurde, bevor wir sie verwenden. Erstellen wir also eine [`async`](/de/docs/Web/JavaScripts/Reference/Statements/async_function)-Funktion, um uns dies zu ermöglichen:

```js
async function getFile(audioContext, filepath) {
  const response = await fetch(filepath);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  return audioBuffer;
}
```

Wir können dann den [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)-Operator verwenden, wenn wir diese Funktion aufrufen, was sicherstellt, dass wir nur nachfolgende Codeausführen können, wenn sie fertig ist.

Erstellen wir eine weitere `async` Funktion, um das Sample einzurichten — wir können die beiden Async-Funktionen in einem schönen Promise-Muster kombinieren, um weitere Aktionen durchzuführen, wenn diese Datei geladen und gebuffert wurde:

```js
async function setupSample() {
  const filePath = "dtmf.mp3";
  const sample = await getFile(audioCtx, filePath);
  return sample;
}
```

> [!NOTE]
> Sie können die obige Funktion leicht ändern, um ein Array von Dateien zu übernehmen und über sie zu schleifen, um mehr als ein Sample zu laden. Diese Technik wäre für komplexere Instrumente oder Spiele nützlich.

Wir können `setupSample()` jetzt wie folgt verwenden:

```js
setupSample().then((sample) => {
  // sample is our buffered file
  // …
});
```

Wenn das Sample abspielbereit ist, richtet das Programm die Benutzeroberfläche so ein, dass es bereit ist.

### Das Sample abspielen

Erstellen wir eine `playSample()` Funktion ähnlich wie bei den anderen Sounds. Diesmal erstellen wir einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode), geben die geladenen und dekodierten Pufferdaten ein und spielen es ab:

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
> Wir können `stop()` auf einem [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) aufrufen, dies geschieht jedoch automatisch, wenn das Sample abgespielt wurde.

### Dial-up-Benutzersteuerungen

Der [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) verfügt über eine [`playbackRate`](/de/docs/Web/API/AudioBufferSourceNode/playbackRate)-Eigenschaft. Lassen Sie uns diese auf unserer Benutzeroberfläche freigeben, damit wir unser Sample beschleunigen und verlangsamen können. Wir machen das wie zuvor in der gleichen Art und Weise:

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

Dann fügen wir unserer `playSample()` Funktion eine Zeile hinzu, um die `playbackRate`-Eigenschaft zu aktualisieren. Die endgültige Version sieht so aus:

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
> Die Sounddatei wurde [von soundbible.com bezogen](https://soundbible.com/1573-DTMF-Tones.html).

## Das Audio im Takt abspielen

Ein häufiges Problem bei digitalen Audioanwendungen ist das Abspielen der Sounds im Takt, damit der Beat konsistent bleibt und nichts aus der Zeit gerät.

Wir könnten unsere Stimmen innerhalb eines `for`-Schleife planen; jedoch ist das größte Problem bei dieser Methode das Aktualisieren während der Wiedergabe, und wir haben bereits Benutzeroberflächensteuerungen implementiert, die dies ermöglichen. Es wäre wirklich schön, eine BPM-Steuerung für das ganze Instrument in Erwägung zu ziehen. Der beste Weg, unsere Stimmen im Takt zu spielen, besteht darin, ein Planungssystem zu erstellen, bei dem wir vorausblicken, wann die Noten gespielt werden und sie in eine Warteschlange schieben. Wir können sie zu einer präzisen Zeit mit der `currentTime`-Eigenschaft starten und dabei auch Änderungen berücksichtigen.

> [!NOTE]
> Dies ist eine sehr abgespeckte Version von [Chris Wilsons Artikel A Tale Of Two Clocks (2013)](https://web.dev/articles/audio-scheduling), der tiefer in diese Methode einsteigt. Es lohnt sich, diesen Artikel zu lesen und diese Methode zu verwenden. Ein Großteil des Codes hier stammt aus seinem [Metronom-Beispiel](https://github.com/cwilso/metronome/blob/main/js/metronome.js), das er im Artikel referenziert.

Beginnen wir mit der Einrichtung unserer Standard-BPM (Beats per Minute), die auch vom Benutzer steuerbar über — wie Sie sich sicherlich denken können — einen weiteren Range-Input sein wird.

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

Dann erstellen wir Variablen, um zu definieren, wie weit wir vorausblicken und wie weit wir planen wollen:

```js
const lookahead = 25.0; // How frequently to call scheduling function (in milliseconds)
const scheduleAheadTime = 0.1; // How far ahead to schedule audio (sec)
```

Erstellen wir eine Funktion, um die Note um einen Schlag voranzubringen und zurück zur ersten, wenn sie die 4. (letzte) erreicht:

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

Wir möchten eine Referenzwarteschlange für die abspielenden Noten erstellen und die Funktionalität, um sie mit den zuvor erstellten Funktionen abzuspielen:

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

Hier betrachten wir die aktuelle Zeit und vergleichen sie mit der Zeit der nächsten Note; wenn die beiden übereinstimmen, wird es die vorherigen beiden Funktionen aufrufen.

Instanzen von [`AudioContext`](/de/docs/Web/API/AudioContext)-Objekten haben eine [`currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime)-Eigenschaft, die es uns ermöglicht, die Anzahl der Sekunden nach dem ersten Erstellen des Kontexts abzurufen. Wir werden es zum Timing innerhalb unseres Step-Sequenzers verwenden. Es ist extrem präzise und gibt einen Float-Wert mit einer Genauigkeit von etwa 15 Dezimalstellen zurück.

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

Wir benötigen auch eine `draw()`-Funktion, um die Benutzeroberfläche zu aktualisieren, damit wir sehen können, wann der Beat fortschreitet.

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

## Alles zusammenführen

Jetzt bleibt nur noch, sicherzustellen, dass wir das Sample geladen haben, bevor wir das Instrument _spielen_ können. Wir fügen einen Ladebildschirm hinzu, der verschwindet, wenn die Datei abgerufen und dekodiert wurde. Dann können wir dem Scheduler erlauben, mit dem Klickereignis der Wiedergabeschaltfläche zu starten.

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
