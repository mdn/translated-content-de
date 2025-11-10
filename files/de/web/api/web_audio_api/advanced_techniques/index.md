---
title: "Fortgeschrittene Techniken: Erstellen und Sequenzieren von Audio"
slug: Web/API/Web_Audio_API/Advanced_techniques
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{DefaultAPISidebar("Web Audio API")}}

In diesem Tutorial werden wir die Erstellung und Modifikation von Sound sowie Timing und Planung behandeln. Wir werden Probenladen, Hüllkurven, Filter, Wavetables und Frequenzmodulation einführen. Wenn Sie mit diesen Begriffen vertraut sind und nach einer Einführung in ihre Anwendung mit der Web Audio API suchen, sind Sie hier genau richtig.

> [!NOTE]
> Den Quellcode für das unten stehende Demo finden Sie auf GitHub im [step-sequencer](https://github.com/mdn/webaudio-examples/tree/main/step-sequencer)-Unterverzeichnis des MDN [webaudio-examples](https://github.com/mdn/webaudio-examples) Repository. Sie können auch das [Live-Demo](https://mdn.github.io/webaudio-examples/step-sequencer/) ansehen.

## Demo

Wir werden uns einen sehr einfachen Step-Sequenzer ansehen:

![Eine Sound-Sequenzer-Anwendung mit Wiedergabe- und BPM-Masterkontrollen sowie 4 verschiedenen Stimmen mit individuellen Steuerelementen.](sequencer.png)

In der Praxis ist dies mit einer Bibliothek einfacher zu bewerkstelligen — die Web Audio API wurde darauf ausgelegt, darauf aufzubauen. Wenn Sie etwas Komplexeres entwickeln möchten, wäre [tone.js](https://tonejs.github.io/) ein hervorragender Ausgangspunkt. Wir wollen jedoch demonstrieren, wie man ein solches Demo von Grund auf erstellt, um daraus zu lernen.

Die Oberfläche besteht aus Masterkontrollen, die es uns ermöglichen, den Sequenzer zu starten/stoppen und das BPM (Beats pro Minute) anzupassen, um die „Musik“ zu beschleunigen oder zu verlangsamen.

Vier verschiedene Klänge oder Stimmen können abgespielt werden. Jede Stimme hat vier Schaltflächen, eine für jeden Schlag in einem Takt Musik. Wenn sie aktiviert sind, wird die Note abgespielt. Wenn das Instrument spielt, bewegt es sich über dieses Set von Schlägen und wiederholt den Takt.

Jede Stimme verfügt auch über lokale Steuerungen, die es ermöglichen, die Effekte oder Parameter zu manipulieren, die für jede Technik spezifisch sind, die wir verwenden, um diese Stimmen zu erstellen. Die von uns verwendeten Methoden sind:

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Name der Stimme</th>
      <th scope="col">Technik</th>
      <th scope="col">Zugehörige Web Audio API-Funktion</th>
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
      <td>Zufällyser Rauschpuffer, Biquad-Filter</td>
      <td>
        [`AudioBuffer`](/de/docs/Web/API/AudioBuffer),
        [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode),
        [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)
      </td>
    </tr>
    <tr>
      <td>"Dial up"</td>
      <td>Laden eines Klangbeispiels zum Abspielen</td>
      <td>
        [`BaseAudioContext/decodeAudioData`](/de/docs/Web/API/BaseAudioContext/decodeAudioData),
        [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Wir haben dieses Instrument nicht erstellt, um gut zu klingen, sondern um Demonstrationscode bereitzustellen. Diese Demonstration stellt eine _sehr_ vereinfachte Version eines solchen Instruments dar. Die Klänge basieren auf einem Modem mit Einwahlverbindung. Wenn Sie nicht wissen, wie sich ein solches Gerät anhört, können Sie [hier eines hören](https://soundcloud.com/john-pemberton/modem-dialup).

## Erstellen eines Audio-Kontexts

Wie Sie inzwischen gewohnt sein sollten, beginnt jede Web Audio API-Anwendung mit einem Audio-Kontext:

```js
const audioCtx = new AudioContext();
```

## Der „Sweep“ — Oszillatoren, periodische Wellen und Hüllkurven

Für das, was wir als „Sweep“-Sound bezeichnen werden, jenes erste Geräusch, das Sie hören, wenn Sie sich einwählen, werden wir einen Oszillator erstellen, um den Klang zu erzeugen.

Der [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) verfügt standardmäßig über grundlegende Wellenformen — Sinus, Rechteck, Dreieck oder Sägezahn. Anstatt die standardmäßigen Wellen zu verwenden, die standardmäßig vorhanden sind, werden wir unsere eigene mit der [`PeriodicWave`](/de/docs/Web/API/PeriodicWave)-Schnittstelle und in einer Wavetable festgelegten Werten erstellen. Wir können den [`PeriodicWave()`](/de/docs/Web/API/PeriodicWave/PeriodicWave)-Konstruktor verwenden, um diese benutzerdefinierte Welle mit einem Oszillator zu verwenden.

### Die periodische Welle

Zuerst erstellen wir unsere periodische Welle. Dazu müssen reale und imaginäre Werte in den [`PeriodicWave()`](/de/docs/Web/API/PeriodicWave/PeriodicWave)-Konstruktor übergeben werden:

```js
const wave = new PeriodicWave(audioCtx, {
  real: wavetable.real,
  imag: wavetable.imag,
});
```

> [!NOTE]
> In unserem Beispiel wird die Wavetable in einer separaten JavaScript-Datei (`wavetable.js`) gehalten, da es _so viele_ Werte gibt. Wir haben sie aus einem [Repository von Wavetables](https://github.com/GoogleChromeLabs/web-audio-samples/tree/main/src/demos/wavetable-synth/wave-tables) entnommen, das sich in den [Web Audio API-Beispielen von Google Chrome Labs](https://github.com/GoogleChromeLabs/web-audio-samples/) befindet.

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

Wir übergeben dem hier verwendeten Funktionsparameter eine Zeit, die wir später verwenden werden, um den Sweep zu planen.

### Amplitude steuern

Das ist großartig, aber wäre es nicht schön, wenn wir eine Amplitudenhüllkurve dazu hätten? Lassen Sie uns eine erstellen, damit wir uns mit den Methoden vertraut machen, die wir benötigen, um eine Hüllkurve mit der Web Audio API zu erstellen.

Angenommen, unsere Hüllkurve hat Attack und Release. Wir können dem Benutzer erlauben, diese mithilfe von [Bereichseingaben](/de/docs/Web/HTML/Reference/Elements/input/range) auf der Oberfläche zu steuern:

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

Jetzt können wir einige Variablen in JavaScript erstellen und sie ändern lassen, wenn die Eingabewerte aktualisiert werden:

```js
let attackTime = 0.2;
const attackControl = document.querySelector("#attack");
attackControl.addEventListener("input", (ev) => {
  attackTime = parseInt(ev.target.value, 10);
});

let releaseTime = 0.5;
const releaseControl = document.querySelector("#release");
releaseControl.addEventListener("input", (ev) => {
  releaseTime = parseInt(ev.target.value, 10);
});
```

### Die endgültige playSweep()-Funktion

Jetzt können wir unsere `playSweep()`-Funktion erweitern. Wir müssen einen [`GainNode`](/de/docs/Web/API/GainNode) hinzufügen und diesen durch unser Audiographen verbinden, um Amplitudenvariationen auf unseren Klang anzuwenden. Der Gain-Knoten hat eine Eigenschaft: `gain`, welche vom Typ [`AudioParam`](/de/docs/Web/API/AudioParam) ist.

Das ist nützlich — jetzt können wir beginnen, die Leistung der Audioparameter-Methoden auf den Gain-Wert zu nutzen. Wir können einen Wert zu einem bestimmten Zeitpunkt setzen oder ihn _über_ die Zeit mit Methoden wie [`AudioParam.linearRampToValueAtTime`](/de/docs/Web/API/AudioParam/linearRampToValueAtTime) ändern.

Wie oben erwähnt, verwenden wir die `linearRampToValueAtTime`-Methode für unser Attack und Release. Sie nimmt zwei Parameter an — den Wert, auf den Sie den zu ändernden Parameter setzen möchten (in diesem Fall den Gain-Wert) und den Zeitpunkt, wann Sie dies tun möchten. In unserem Fall wird _wann_ durch unsere Eingaben gesteuert. Im untenstehenden Beispiel steigt der Gain-Wert auf 1 bei einer linearen Rate über die vom Attack-Bereichs-Eingabewert definierte Zeit. Ebenso wird für unser Release der Gain-Wert auf 0 bei einer linearen Rate über die vom Release-Eingabewert eingestellte Zeit gesetzt.

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

## Der „Pulse“ — Modulation mit einem Niederfrequenzoszillator

Großartig, jetzt haben wir unseren Sweep! Lassen Sie uns weitermachen und uns diesen schönen Pulse-Sound ansehen. Dies können wir mit einem einfachen Oszillator erreichen, der mit einem zweiten Oszillator moduliert wird.

### Erster Oszillator

Wir richten unseren ersten [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) auf die gleiche Weise wie unseren Sweep-Klang ein, außer dass wir keine Wavetable verwenden, um eine maßgeschneiderte Welle zu erstellen — wir verwenden einfach die Standard-`sine`-Welle:

```js
const osc = new OscillatorNode(audioCtx, {
  type: "sine",
  frequency: pulseHz,
});
```

Nun erstellen wir einen [`GainNode`](/de/docs/Web/API/GainNode), da es der `gain`-Wert ist, den wir mit unserem zweiten Niederfrequenz-Oszillator oszillieren:

```js
const amp = new GainNode(audioCtx, {
  value: 1,
});
```

### Erstellen des zweiten Niederfrequenzoszillators

Nun erstellen wir einen zweiten — `square` — Wellen- (oder Pulse-) Oszillator, um die Verstärkung unserer ersten Sinuswelle zu ändern:

```js
const lfo = new OscillatorNode(audioCtx, {
  type: "square",
  frequency: 30,
});
```

### Verbinden des Graphen

Der Schlüssel hierbei ist das korrekte Verbinden des Graphen und das Starten beider Oszillatoren:

```js
lfo.connect(amp.gain);
osc.connect(amp).connect(audioCtx.destination);
lfo.start();
osc.start(time);
osc.stop(time + pulseTime);
```

> [!NOTE]
> Wir müssen auch nicht die Standardwellentypen für einen dieser erstellten Oszillatoren verwenden — wir könnten eine Wavetable und die periodische Wellenmethode verwenden, wie wir es zuvor getan haben. Es gibt eine Fülle von Möglichkeiten mit nur einem Minimum an Knoten.

### Benutzerkontrollen für Pulse

Für die UI-Steuerungen belassen wir beide Frequenzen unserer Oszillatoren, sodass sie über Bereichseingaben gesteuert werden können. Eine wird den Ton ändern und die andere, wie der Pulse die erste Welle moduliert:

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

Wie zuvor variieren wir die Parameter, wenn der Benutzer die Bereichswerte ändert.

```js
let pulseHz = 880;
const hzControl = document.querySelector("#hz");
hzControl.addEventListener("input", (ev) => {
  pulseHz = parseInt(ev.target.value, 10);
});

let lfoHz = 30;
const lfoControl = document.querySelector("#lfo");
lfoControl.addEventListener("input", (ev) => {
  lfoHz = parseInt(ev.target.value, 10);
});
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

## Der „Noise“ — zufälliger Rauschpuffer mit einem Biquad-Filter

Jetzt müssen wir etwas Noise erzeugen! Alle Modems haben Noise. Noise sind einfach zufällige Zahlen in Bezug auf Audiodaten und daher relativ einfach mit Code zu erstellen.

### Erstellen eines Audio-Puffer

Wir müssen einen leeren Container erstellen, in den diese Zahlen eingetragen, der jedoch von der Web Audio API verstanden wird. Hier kommen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)-Objekte ins Spiel. Sie können eine Datei abrufen und in einen Puffer dekodieren (darauf kommen wir später im Tutorial), oder Sie können einen leeren Puffer erstellen und mit Ihren Daten befüllen.

Für Noise wollen wir Letzteres tun. Zuerst müssen wir die Größe unseres Puffers berechnen, um ihn zu erstellen. Wir können die [`BaseAudioContext.sampleRate`](/de/docs/Web/API/BaseAudioContext/sampleRate)-Eigenschaft dafür verwenden:

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
> Warum von -1 bis 1? Beim Ausgeben von Sound in eine Datei oder Lautsprecher benötigen wir eine Zahl, die 0 dB vollen Bereich repräsentiert — die nummerische Grenze des festen Medienpunktes oder DAC. In Gleitkomma-Audio ist 1 eine bequeme Zahl, um sie auf „vollen Bereich“ für mathematische Operationen mit Signalen zu mappen, daher geben Oszillatoren, Geräuschgeneratoren und andere Klangquellen typischerweise bipolare Signale im Bereich von -1 bis 1 aus. Ein Browser wird Werte außerhalb dieses Bereichs beschränken.

### Erstellen einer Pufferquelle

Nachdem wir jetzt den Audio-Puffer und Daten hineingefüllt haben, benötigen wir einen Knoten, den wir zu unserem Graphen hinzufügen können und der den Puffer als Quelle verwendet. Wir erstellen dazu einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) und geben die erstellten Daten weiter:

```js
// Create a buffer source for our created data
const noise = new AudioBufferSourceNode(audioCtx, {
  buffer: noiseBuffer,
});
```

Wenn wir dies durch unseren Audio-Graphen verbinden und abspielen:

```js
noise.connect(audioCtx.destination);
noise.start();
```

Werden Sie feststellen, dass es ziemlich zischend oder schrill klingt. Wir haben weißes Rauschen erzeugt, so soll es sein. Unsere Werte sind von -1 bis 1 verteilt, das bedeutet, dass wir Spitzen aller Frequenzen haben, die tatsächlich recht dramatisch und durchdringend sind. Wir _könnten_ die Funktion ändern und die Werte nur von 0,5 bis -0,5 oder ähnlichem verteilen, um die Spitzen zu entfernen und die Unannehmlichkeiten zu reduzieren; aber wo wäre der Spaß dabei? Lassen Sie uns das erzeugte Rauschen durch einen Filter leiten.

### Hinzufügen eines Biquad-Filters zur Mischung

Wir wollen etwas im Bereich von pinkem oder braunem Rauschen. Wir wollen diese hohen Frequenzen ausschalten und möglicherweise einige niedrigere. Lassen Sie uns einen Bandpass-Biquad-Filter für diese Aufgabe wählen.

> [!NOTE]
> Die Web Audio API kommt mit zwei Arten von Filterknoten: [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) und [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode). Meistens ist ein Biquad-Filter ausreichend — er kommt mit verschiedenen Typen wie Tiefpass, Hochpass und Bandpass. Wenn Sie jedoch etwas maßgeschneidertes machen möchten, könnte der IIR-Filter eine gute Option sein — lesen Sie [Verwendung von IIR-Filtern](/de/docs/Web/API/Web_Audio_API/Using_IIR_filters) für weitere Informationen.

Dieses verkabeln erfolgt auf die gleiche Weise, wie wir sie zuvor gesehen haben. Wir erstellen den [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode), konfigurieren die gewünschten Eigenschaften und verbinden ihn durch unseren Graphen. Verschiedene Arten von Biquad-Filtern haben unterschiedliche Eigenschaften — zum Beispiel stellt das Festlegen der Frequenz auf einem Bandpass den mittleren Frequenzbereich ein. Auf einem Tiefpass würde es die höchste Frequenz einstellen.

```js
// Filter the output
const bandpass = new BiquadFilterNode(audioCtx, {
  type: "bandpass",
  frequency: bandHz,
});

// Connect our graph
noise.connect(bandpass).connect(audioCtx.destination);
```

### Benutzerkontrollen für Noise

In der Benutzeroberfläche belassen wir die Geräuschdauer und die Frequenz, die wir abpassen möchten, sodass der Benutzer sie über Bereichseingaben und Event-Handler, wie in den vorherigen Abschnitten, anpassen kann:

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
durControl.addEventListener("input", (ev) => {
  noiseDuration = parseFloat(ev.target.value);
});

let bandHz = 1000;
const bandControl = document.querySelector("#band");
bandControl.addEventListener("input", (ev) => {
  bandHz = parseInt(ev.target.value, 10);
});
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

## „Dial-up“ — Laden eines Klangbeispiels

Es ist relativ einfach, Telefonsignal- (DTMF-)Klänge zu emulieren, indem man ein paar Oszillatoren zusammen mit den Methoden, die wir bereits verwendet haben, abspielt. Stattdessen werden wir in diesem Abschnitt eine Beispieldatei laden, um zu sehen, was dafür erforderlich ist.

### Laden des Beispiels

Wir möchten sicherstellen, dass unsere Datei geladen und in einen Puffer dekodiert wurde, bevor wir sie verwenden. Daher lassen Sie uns eine [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)-Funktion erstellen, um dies zu ermöglichen:

```js
async function getFile(audioContext, filepath) {
  const response = await fetch(filepath);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  return audioBuffer;
}
```

Wir können dann den [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)-Operator beim Aufrufen dieser Funktion verwenden, der sicherstellt, dass wir nur dann nachfolgenden Code ausführen, wenn er fertig ausgeführt wurde.

Lassen Sie uns eine weitere `async`-Funktion erstellen, um das Beispiel einzurichten — wir können die beiden asynchronen Funktionen in einem schönen Promise-Muster kombinieren, um weitere Aktionen durchzuführen, wenn diese Datei geladen und gepuffert ist:

```js
async function setupSample() {
  const filePath = "dtmf.mp3";
  const sample = await getFile(audioCtx, filePath);
  return sample;
}
```

> [!NOTE]
> Sie können die obige Funktion leicht so ändern, dass sie ein Array von Dateien annimmt und diese durchläuft, um mehr als ein Sample zu laden. Diese Technik wäre für komplexere Instrumente oder Spiele praktisch.

Wir können jetzt `setupSample()` verwenden:

```js
setupSample().then((sample) => {
  // sample is our buffered file
  // …
});
```

Wenn das Beispiel bereit zum Abspielen ist, wird das Programm die Benutzeroberfläche so einrichten, dass sie bereit ist.

### Das Beispiel abspielen

Lassen Sie uns eine `playSample()`-Funktion erstellen, ähnlich wie wir es mit den anderen Klängen gemacht haben. Diesmal erstellen wir einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode), legen die von uns abgerufenen und dekodierten Pufferdaten ein und spielen es ab:

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
> Wir können `stop()` auf einem [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) aufrufen, dies geschieht jedoch automatisch, wenn das Sample zu Ende gespielt ist.

### Benutzerkontrollen für Dial-up

Der [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) verfügt über eine [`playbackRate`](/de/docs/Web/API/AudioBufferSourceNode/playbackRate) Eigenschaft. Lassen Sie uns diese in unserer Benutzeroberfläche anzeigen, sodass wir unser Beispiel beschleunigen oder verlangsamen können. Wir tun das auf dieselbe Weise wie zuvor:

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
rateControl.addEventListener("input", (ev) => {
  playbackRate = parseInt(ev.target.value, 10);
});
```

### Die endgültige playSample()-Funktion

Wir fügen dann eine Zeile hinzu, um die `playbackRate`-Eigenschaft in unsere `playSample()`-Funktion zu aktualisieren. Die endgültige Version sieht so aus:

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
> Die Sounddatei stammt [von soundbible.com](https://soundbible.com/1573-DTMF-Tones.html).

## Das Audio im Takt spielen

Ein häufiges Problem bei digitalen Audioanwendungen besteht darin, die Klänge im Takt abzuspielen, damit der Beat konsistent bleibt und die Dinge nicht aus dem Takt geraten.

Wir könnten unsere Stimmen innerhalb einer `for` Schleife zum Spielen einplanen; das größte Problem hierbei ist jedoch das Aktualisieren, während es spielt, und wir haben bereits Benutzeroberfläche-Kontrollen implementiert, um dies zu tun. Außerdem wäre es wirklich schön, einen instrumentenweiten BPM-Kontrollpunkt zu haben. Der beste Weg, unsere Stimmen im Takt zu spielen, besteht darin, ein Planungssystem zu erstellen, in dem wir im Voraus schauen, wann die Noten gespielt werden und sie in eine Warteschlange schieben. Wir können sie zu einem genauen Zeitpunkt mit der `currentTime`-Eigenschaft starten und auch eventuelle Änderungen berücksichtigen.

> [!NOTE]
> Dies ist eine stark reduzierte Version von [Chris Wilson's A Tale Of Two Clocks (2013)](https://web.dev/articles/audio-scheduling) Artikel, der auf diese Methode mit weitaus mehr Details eingeht. Es macht keinen Sinn, alles hier zu wiederholen, aber wir empfehlen dringend, diesen Artikel zu lesen und diese Methode zu verwenden. Ein Großteil des hier verwendeten Codes stammt aus seinem [Metronom-Beispiel](https://github.com/cwilso/metronome/blob/main/js/metronome.js), das er im Artikel erwähnt.

Lassen Sie uns damit beginnen, unser standardmäßiges BPM (Beats pro Minute) festzulegen, das ebenfalls von den Benutzern über — erraten Sie es — eine weitere Bereichseingabe gesteuert werden kann.

```js
let tempo = 60.0;
const bpmControl = document.querySelector("#bpm");

bpmControl.addEventListener("input", (ev) => {
  tempo = parseInt(ev.target.value, 10);
});
```

Dann erstellen wir Variablen, um festzulegen, wie weit im Voraus wir schauen und wie weit im Voraus wir planen möchten:

```js
const lookahead = 25.0; // How frequently to call scheduling function (in milliseconds)
const scheduleAheadTime = 0.1; // How far ahead to schedule audio (sec)
```

Lassen Sie uns eine Funktion erstellen, die die Note um einen Schlag vorwärts bewegt und beim Erreichen der 4. (letzten) wieder zur ersten zurückkehrt:

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

Wir möchten eine Referenz-Warteschlange für die zu spielenden Noten erstellen und die Funktionalität, sie mit den zuvor erstellten Funktionen abzuspielen:

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

Hier schauen wir auf die aktuelle Zeit und vergleichen sie mit der Zeit für die folgende Note; wenn die beiden übereinstimmen, wird es die vorherigen beiden Funktionen aufrufen.

Instanzen von [`AudioContext`](/de/docs/Web/API/AudioContext)-Objekten haben eine [`currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime)-Eigenschaft, die es uns ermöglicht, die Anzahl der Sekunden abzurufen, nachdem wir den Kontext zuerst erstellt haben. Wir werden sie für das Timing innerhalb unseres Step Sequenzer verwenden. Es ist extrem genau und gibt einen Float-Wert zurück, der auf etwa 15 Dezimalstellen exakt ist.

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

Wir benötigen auch eine `draw()`-Funktion, um die Benutzeroberfläche zu aktualisieren, damit wir sehen können, wann der Schlag fortschreitet.

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

Jetzt bleibt uns nur noch sicherzustellen, dass das Beispiel geladen ist, bevor wir das Instrument _spielen_ können. Wir fügen einen Ladebildschirm hinzu, der verschwindet, wenn die Datei abgerufen und dekodiert wird. Dann können wir dem Scheduler erlauben, mit dem Klick-Ereignis des Abspielknopfs zu beginnen.

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

Jetzt haben wir ein Instrument in unserem Browser! Spielen Sie weiter und experimentieren Sie – Sie können jede dieser Techniken erweitern, um etwas viel Ausgefeilteres zu schaffen.
