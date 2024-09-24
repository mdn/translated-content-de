---
title: "Erweiterte Techniken: Erstellen und Sequenzieren von Audio"
slug: Web/API/Web_Audio_API/Advanced_techniques
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{DefaultAPISidebar("Web Audio API")}}

In diesem Tutorial werden wir die Erstellung und Modifikation von Klängen sowie das Timing und die Planung abdecken. Wir werden Sample-Loading, Hüllkurven, Filter, Wavetables und Frequenzmodulation einführen. Wenn Sie mit diesen Begriffen vertraut sind und eine Einführung in ihre Anwendung mit der Web Audio API suchen, sind Sie hier genau richtig.

> [!NOTE]
> Sie können den Quellcode für die untenstehende Demo auf GitHub im [step-sequencer](https://github.com/mdn/webaudio-examples/tree/main/step-sequencer)-Unterverzeichnis des MDN [webaudio-examples](https://github.com/mdn/webaudio-examples) Repos finden. Sie können auch die [Live-Demo](https://mdn.github.io/webaudio-examples/step-sequencer/) ansehen.

## Demo

Wir werfen einen Blick auf einen sehr einfachen Step-Sequenzer:

![Eine Sound-Sequenzer-Anwendung mit Play- und BPM-Master-Steuerungen und 4 verschiedenen Stimmen mit individuellen Steuerungen für jede.](sequencer.png)

In der Praxis ist dies mit einer Bibliothek einfacher zu handhaben — die Web Audio API ist darauf ausgelegt, darauf aufzubauen. Wenn Sie daran denken, etwas Komplexeres zu erstellen, wäre [tone.js](https://tonejs.github.io/) ein hervorragender Ausgangspunkt. Wir möchten jedoch demonstrieren, wie man einen solchen Demo von Grund auf erstellt, um daraus zu lernen.

Die Benutzeroberfläche besteht aus Master-Steuerungen, mit denen wir den Sequenzer abspielen/stoppen und das BPM (Beats pro Minute) anpassen können, um die "Musik" zu beschleunigen oder zu verlangsamen.

Vier verschiedene Klänge oder Stimmen können abgespielt werden. Jede Stimme hat vier Tasten, eine für jeden Schlag in einem Takt Musik. Wenn sie aktiviert sind, wird der Ton erklingen. Wenn das Instrument spielt, wird es sich über diesen Satz von Schlägen bewegen und den Takt wiederholen.

Jede Stimme hat auch lokale Steuerungen, mit denen Sie die Effekte oder Parameter manipulieren können, die für jede Technik, die wir zur Erstellung dieser Stimmen verwenden, spezifisch sind. Die Methoden, die wir verwenden, sind:

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
        {{domxref("OscillatorNode")}},
        {{domxref("PeriodicWave")}}
      </td>
    </tr>
    <tr>
      <td>"Pulse"</td>
      <td>Mehrere Oszillatoren</td>
      <td>{{domxref("OscillatorNode")}}</td>
    </tr>
    <tr>
      <td>"Noise"</td>
      <td>Zufälliger Rauschpuffer, Biquad-Filter</td>
      <td>
        {{domxref("AudioBuffer")}},
        {{domxref("AudioBufferSourceNode")}},
        {{domxref("BiquadFilterNode")}}
      </td>
    </tr>
    <tr>
      <td>"Dial up"</td>
      <td>Laden eines Sound-Samples zum Abspielen</td>
      <td>
        {{domxref("BaseAudioContext/decodeAudioData")}},
        {{domxref("AudioBufferSourceNode")}}
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Wir haben dieses Instrument nicht erstellt, um gut zu klingen, sondern um Demonstrationscode bereitzustellen. Diese Demonstration stellt eine _sehr_ vereinfachte Version eines solchen Instruments dar. Die Klänge basieren auf einem Modem für die Einwahlverbindung. Falls Sie nicht wissen, wie ein solches Gerät klingt, können Sie [hier einen anhören](https://soundcloud.com/john-pemberton/modem-dialup).

## Erstellung eines Audio-Kontextes

Wie Sie es mittlerweile gewohnt sein sollten, beginnt jede Web Audio API-Anwendung mit einem Audio-Kontext:

```js
const audioCtx = new AudioContext();
```

## Der "Sweep" — Oszillatoren, periodische Wellen und Hüllkurven

Für das, was wir den "Sweep"-Klang nennen werden, also das erste Geräusch, das Sie hören, wenn Sie eine Verbindung über die Einwahl herstellen, werden wir einen Oszillator erstellen, um den Klang zu erzeugen.

Der {{domxref("OscillatorNode")}} wird mit grundlegenden Wellenformen geliefert — Sinus-, Rechteck-, Dreieck- oder Sägezahnkurve. Anstelle der standardmäßigen Wellen, die standardmäßig geliefert werden, erstellen wir jedoch unsere eigenen mit der {{domxref("PeriodicWave")}}-Schnittstelle und Werten, die in einer Wavetable festgelegt sind. Wir können den {{domxref("PeriodicWave/PeriodicWave", "PeriodicWave()")}}-Konstruktor verwenden, um diese benutzerdefinierte Welle mit einem Oszillator zu verwenden.

### Die periodische Welle

Zuerst erstellen wir unsere periodische Welle. Dazu müssen wir reale und imaginäre Werte in den {{domxref("PeriodicWave/PeriodicWave", "PeriodicWave()")}}-Konstruktor übergeben:

```js
const wave = new PeriodicWave(audioCtx, {
  real: wavetable.real,
  imag: wavetable.imag,
});
```

> [!NOTE]
> In unserem Beispiel wird die Wavetable in einer separaten JavaScript-Datei (`wavetable.js`) gespeichert, da es _so_ viele Werte gibt. Wir haben sie aus einem [Repository von Wavetables](https://github.com/GoogleChromeLabs/web-audio-samples/tree/main/src/demos/wavetable-synth/wave-tables) entnommen, das in den [Web Audio API-Beispielen von Google Chrome Labs](https://github.com/GoogleChromeLabs/web-audio-samples/) zu finden ist.

### Der Oszillator

Jetzt können wir einen {{domxref("OscillatorNode")}} erstellen und seine Welle auf die von uns erstellte setzen:

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

Wir übergeben der Funktion hier einen Zeitparameter, den wir später verwenden werden, um den Sweep zu planen.

### Kontrolle der Amplitude

Das ist großartig, aber wäre es nicht schön, wenn wir eine Amplitudenhüllkurve dazu hätten? Lassen Sie uns eine einfache erstellen, damit wir uns mit den Methoden vertraut machen, die wir zur Erstellung einer Hüllkurve mit der Web Audio API benötigen.

Nehmen wir an, unsere Hüllkurve hat Attack und Release. Wir können dem Benutzer erlauben, diese mithilfe von [Bereichseingaben](/de/docs/Web/HTML/Element/input/range) auf der Schnittstelle zu steuern:

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

Jetzt können wir einige Variablen in JavaScript erstellen und diese ändern, wenn die Eingabewerte aktualisiert werden:

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

Jetzt können wir unsere `playSweep()`-Funktion erweitern. Wir müssen einen {{domxref("GainNode")}} hinzufügen und diesen durch unsere Audiografik verbinden, um Amplitudenschwankungen auf unseren Klang anzuwenden. Der Gain-Knoten hat eine Eigenschaft: `gain`, die vom Typ {{domxref("AudioParam")}} ist.

Dies ist nützlich — jetzt können wir beginnen, die Leistungsfähigkeit der Audio-Paramether-Methoden am Gain-Wert zu nutzen. Wir können einen Wert zu einer bestimmten Zeit setzen oder wir können ihn _über_ die Zeit hinweg mit Methoden wie {{domxref("AudioParam.linearRampToValueAtTime")}} ändern.

Wie bereits erwähnt, verwenden wir die `linearRampToValueAtTime`-Methode für unseren Attack und Release. Sie benötigt zwei Parameter — den Wert, auf den Sie den Parameter, den Sie ändern, setzen möchten (in diesem Fall den Gain) und wann Sie dies tun möchten. In unserem Fall wird _wann_ durch unsere Eingaben gesteuert. Der Gain wird bei einer linearen Rate auf 1 erhöht, über die Zeit, die die Attack-Bereichseingabe definiert. Ähnlich wird für unseren Release der Gain bei einer linearen Rate auf 0 gesetzt, über die Zeit, die die Release-Eingabe festgelegt hat.

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

## Der "Pulse" — Modulation mit niederfrequentem Oszillator

Großartig, jetzt haben wir unseren Sweep! Lassen Sie uns weitermachen und einen Blick auf diesen schönen Puls-Ton werfen. Wir können dies mit einem einfachen Oszillator erreichen, moduliert mit einem zweiten Oszillator.

### Initialer Oszillator

Wir richten unseren ersten {{domxref("OscillatorNode")}} genauso ein wie bei unserem Sweep-Klang, außer dass wir keine Wavetable verwenden, um eine maßgeschneiderte Welle zu setzen — wir verwenden einfach die standardmäßige `Sine`-Welle:

```js
const osc = new OscillatorNode(audioCtx, {
  type: "sine",
  frequency: pulseHz,
});
```

Jetzt erstellen wir einen {{domxref("GainNode")}}, da der `gain`-Wert der ist, den wir mit unserem zweiten, niederfrequenten Oszillator oszillieren werden:

```js
const amp = new GainNode(audioCtx, {
  value: 1,
});
```

### Erstellung des zweiten, niederfrequenten Oszillators

Wir erstellen jetzt einen zweiten — `square` — Wellenoszillator, um die Verstärkung unserer ersten Sinuswelle zu ändern:

```js
const lfo = new OscillatorNode(audioCtx, {
  type: "square",
  frequency: 30,
});
```

### Verbindung des Graphs

Der Schlüssel hier ist die korrekte Verbindung des Graphen und das Starten beider Oszillatoren:

```js
lfo.connect(amp.gain);
osc.connect(amp).connect(audioCtx.destination);
lfo.start();
osc.start(time);
osc.stop(time + pulseTime);
```

> [!NOTE]
> Wir müssen für keinen der beiden Oszillatoren, die wir erstellen, die standardmäßigen Wellentypen verwenden — wir könnten eine Wavetable und die periodische Wellenmethode verwenden, wie wir es zuvor getan haben. Es gibt eine Vielzahl von Möglichkeiten mit nur wenigen Nodes.

### Pulse-Benutzersteuerungen

Für die Benutzeroberflächensteuerungen lassen Sie uns beide Frequenzen unserer Oszillatoren freigeben, sodass sie über Bereichseingaben gesteuert werden können. Eine wird den Ton ändern, die andere, wie der Puls die erste Welle moduliert:

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

Wie zuvor werden wir die Parameter ändern, wenn der Benutzer die Werte der Bereiche ändert.

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

## Der "Noise" — Zufallsrauschpuffer mit einem Biquad-Filter

Jetzt müssen wir ein wenig Rauschen erzeugen! Alle Modems haben Rauschen. Rauschen sind nur zufällige Zahlen, wenn es um Audiodaten geht, deshalb ist es relativ einfach, sie mit Code zu erstellen.

### Erstellung eines Audio-Puffers

Wir müssen einen leeren Container erstellen, um diese Zahlen hinein zu legen, einen, den die Web Audio API versteht. Hier kommen {{domxref("AudioBuffer")}}-Objekte ins Spiel. Sie können eine Datei abrufen und in einen Puffer dekodieren (dazu kommen wir später im Tutorial) oder Sie können einen leeren Puffer erstellen und ihn mit Ihren Daten füllen.

Für Rauschen werden wir Letzteres tun. Wir müssen zuerst die Größe unseres Puffers berechnen, um ihn zu erstellen. Wir können dafür die {{domxref("BaseAudioContext.sampleRate")}}-Eigenschaft verwenden:

```js
const bufferSize = audioCtx.sampleRate * noiseDuration;
// Erstellen eines leeren Puffers
const noiseBuffer = new AudioBuffer({
  length: bufferSize,
  sampleRate: audioCtx.sampleRate,
});
```

Jetzt können wir ihn mit zufälligen Zahlen zwischen -1 und 1 füllen:

```js
// Füllen des Puffers mit Rauschen
const data = noiseBuffer.getChannelData(0);
for (let i = 0; i < bufferSize; i++) {
  data[i] = Math.random() * 2 - 1;
}
```

> [!NOTE]
> Warum von -1 bis 1? Wenn wir Sound auf eine Datei oder Lautsprecher ausgeben, brauchen wir eine Zahl, die 0 dB full scale darstellt — das numerische Limit des fixierten Punkts des Mediums oder DAC. Bei Floating-Point-Audio ist 1 eine bequeme Zahl, um auf "full scale" abzubilden für mathematische Operationen an Signalen, daher geben Oszillatoren, Rauschgeneratoren und andere Klangquellen typischerweise bipolare Signale im Bereich von -1 bis 1 aus. Ein Browser wird Werte außerhalb dieses Bereichs begrenzen.

### Erstellung einer Pufferquelle

Jetzt, da wir den Audio-Puffer haben und ihn mit Daten gefüllt haben, brauchen wir einen Node, den wir zu unserem Graphen hinzufügen können und der den Puffer als Quelle verwenden kann. Wir erstellen dafür einen {{domxref("AudioBufferSourceNode")}} und übergeben die von uns erstellten Daten:

```js
// Erstellen einer Pufferquelle für unsere erstellten Daten
const noise = new AudioBufferSourceNode(audioCtx, {
  buffer: noiseBuffer,
});
```

Wenn wir dies durch unseren Audiographen anschließen und abspielen:

```js
noise.connect(audioCtx.destination);
noise.start();
```

Werden Sie feststellen, dass es ziemlich zischend oder klirrend ist. Wir haben weißes Rauschen erstellt; so soll es sein. Unsere Werte sind von -1 bis 1 verteilt, was bedeutet, dass wir Spitzenwerte aller Frequenzen haben, die eigentlich ziemlich dramatisch und durchdringend sind. Wir _könnten_ die Funktion so ändern, dass nur Werte von 0.5 bis -0.5 oder ähnlich verteilt werden, um die Spitzen abzuschneiden und das Unbehagen zu reduzieren; jedoch, wo bleibt der Spaß dabei? Lassen Sie uns das Rauschen, das wir erstellt haben, durch einen Filter leiten.

### Hinzufügen eines Biquad-Filters in die Mischung

Wir möchten etwas im Bereich von rosa oder braunem Rauschen. Wir möchten diese hohen Frequenzen abschneiden und möglicherweise einige niedrigere auch. Lassen Sie uns einen Bandpass-Biquad-Filter für den Job wählen.

> [!NOTE]
> Die Web Audio API verfügt über zwei Arten von Filter-Nodes: {{domxref("BiquadFilterNode")}} und {{domxref("IIRFilterNode")}}. Meistens ist ein Biquad-Filter ausreichend — er kommt mit verschiedenen Typen wie Lowpass, Highpass und Bandpass. Wenn Sie jedoch nach etwas Speziellerem suchen, könnte der IIR-Filter eine gute Option sein — siehe [Verwendung von IIR-Filtern](/de/docs/Web/API/Web_Audio_API/Using_IIR_filters) für weitere Informationen.

Das Anschließen funktioniert genauso, wie wir es bereits gesehen haben. Wir erstellen den {{domxref("BiquadFilterNode")}}, konfigurieren die gewünschten Eigenschaften und verbinden ihn durch unseren Graphen. Verschiedene Arten von Biquad-Filtern haben unterschiedliche Eigenschaften — zum Beispiel passt das Setzen der Frequenz auf einem Bandpass-Typ die mittlere Frequenz an. Bei einem Lowpass hingegen würde es die oberste Frequenz einstellen.

```js
// Ausgabe filtern
const bandpass = new BiquadFilterNode(audioCtx, {
  type: "bandpass",
  frequency: bandHz,
});

// Unseren Graphen verbinden
noise.connect(bandpass).connect(audioCtx.destination);
```

### Rausch-Benutzersteuerungen

In der Benutzeroberfläche geben wir die Rauschdauer und die Frequenz, die wir bändigen möchten, frei, damit der Benutzer diese über Bereichseingaben und Ereignis-Handler anpassen kann, wie in den vorherigen Abschnitten:

```html
<label for="duration">Dauer</label>
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
  const bufferSize = audioCtx.sampleRate * noiseDuration; // Zeit des Tons festlegen

  // Erstellen eines leeren Puffers
  const noiseBuffer = new AudioBuffer({
    length: bufferSize,
    sampleRate: audioCtx.sampleRate,
  });

  // Puffer mit Rauschen füllen
  const data = noiseBuffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  // Erstellen einer Pufferquelle für unsere erstellten Daten
  const noise = new AudioBufferSourceNode(audioCtx, {
    buffer: noiseBuffer,
  });

  // Filtern der Ausgabe
  const bandpass = new BiquadFilterNode(audioCtx, {
    type: "bandpass",
    frequency: bandHz,
  });

  // Unseren Graphen verbinden
  noise.connect(bandpass).connect(audioCtx.destination);
  noise.start(time);
}
```

## "Dial-up" — Laden eines Sound-Samples

Es ist einfach genug, Telefonwahl (DTMF) Sounds zu emulieren, indem man ein paar Oszillatoren zusammen mit den Methoden abspielt, die wir bereits verwendet haben. Stattdessen laden wir in diesem Abschnitt eine Sample-Datei, um zu sehen, was dazugehört.

### Das Sample laden

Wir wollen sicherstellen, dass unsere Datei geladen und in ein Puffer dekodiert ist, bevor wir sie verwenden, also erstellen wir eine [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)-Funktion, um uns dies zu ermöglichen:

```js
async function getFile(audioContext, filepath) {
  const response = await fetch(filepath);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  return audioBuffer;
}
```

Wir können dann den [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)-Operator beim Aufrufen dieser Funktion verwenden, der sicherstellt, dass wir nur nachfolgende Codezeilen ausführen können, wenn die Ausführung abgeschlossen ist.

Lassen Sie uns eine weitere `async`-Funktion erstellen, um das Sample einzurichten — wir können die beiden async Funktionen in einem schönen Promise-Muster kombinieren, um weitere Aktionen auszuführen, wenn diese Datei geladen und gepuffert ist:

```js
async function setupSample() {
  const filePath = "dtmf.mp3";
  const sample = await getFile(audioCtx, filePath);
  return sample;
}
```

> [!NOTE]
> Sie können die obige Funktion einfach so modifizieren, dass sie ein Array von Dateien nimmt und über sie iteriert, um mehr als ein Sample zu laden. Diese Technik wäre praktisch für komplexere Instrumente oder Spiele.

Wir können nun `setupSample()` wie folgt verwenden:

```js
setupSample().then((sample) => {
  // Sample ist unsere gepufferte Datei
  // …
});
```

Wenn das Sample zum Abspielen bereit ist, wird das Programm die Benutzeroberfläche einrichten, damit sie startbereit ist.

### Das Sample abspielen

Lassen Sie uns eine `playSample()`-Funktion ähnlich wie bei den anderen Sounds erstellen. Diesmal werden wir einen {{domxref("AudioBufferSourceNode")}} erstellen, die gepufferten Daten verwenden, die wir abgerufen und decodiert haben, und sie abspielen:

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
> Wir können `stop()` auf einem {{domxref("AudioBufferSourceNode")}} aufrufen, jedoch geschieht dies automatisch, wenn das Sample fertig abgespielt ist.

### Dial-up-Benutzersteuerungen

Der {{domxref("AudioBufferSourceNode")}} hat eine [`playbackRate`](/de/docs/Web/API/AudioBufferSourceNode/playbackRate)-Eigenschaft. Lassen Sie uns diese auf unserer Benutzeroberfläche freigeben, damit wir unser Sample beschleunigen und verlangsamen können. Wir machen das auf die gleiche Weise wie zuvor:

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

Dann fügen wir eine Zeile hinzu, um die `playbackRate`-Eigenschaft in unsere `playSample()`-Funktion zu aktualisieren. Die endgültige Version sieht so aus:

```js
function playSample(audioContext, audioBuffer, time) {
  const sampleSource = new AudioBufferSourceNode(audioCtx, {
    buffer: audioBuffer,
    playbackRate,
  });
  sampleSource.connect(audioCtx.destination);
  sampleSource.start(time);
  return sampleSource;
}
```

> [!NOTE]
> Die Sound-Datei stammt von [soundbible.com](https://soundbible.com/1573-DTMF-Tones.html).

## Audio in der Zeit abspielen

Ein häufiges Problem bei digitalen Audioanwendungen ist es, die Klänge in der Zeit so abzuspielen, dass der Rhythmus konsistent bleibt und die Dinge nicht aus dem Takt geraten.

Wir könnten unsere Stimmen innerhalb einer `for`-Schleife abspielen lassen; jedoch ist das größte Problem dabei, wie man Updates während des Abspielens behandelt, und wir haben bereits UI-Steuerungen implementiert, um dies zu tun. Außerdem wäre es wirklich schön, eine BPM-Steuerung für das gesamte Instrument zu betrachten. Der beste Weg, unsere Stimmen auf dem Takt abspielen zu lassen, ist ein Planungssystem zu erstellen, bei dem wir vorausblicken, wann die Noten gespielt werden und sie in eine Warteschlange einfügen. Wir können sie zu einer genauen Zeit mit der `currentTime`-Eigenschaft starten und auch Änderungen berücksichtigen.

> [!NOTE]
> Dies ist eine stark vereinfachte Version von [Chris Wilsons A Tale Of Two Clocks (2013)](https://web.dev/articles/audio-scheduling) Artikel, der auf diese Methode mit viel mehr Details eingeht. Es gibt keinen Grund, hier alles zu wiederholen, aber wir empfehlen sehr, diesen Artikel zu lesen und diese Methode zu verwenden. Ein Großteil des hier gezeigten Codes stammt aus seinem [Metronom-Beispiel](https://github.com/cwilso/metronome/blob/main/js/metronome.js), das er im Artikel erwähnt.

Beginnen wir damit, unser Standard-BPM (Schläge pro Minute) festzulegen, das auch über — Sie haben es erraten — eine weitere Bereichseingabe durch den Benutzer gesteuert werden kann.

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

Dann erstellen wir Variablen, um zu definieren, wie weit wir vorausblicken und wie weit wir Audio planen möchten:

```js
const lookahead = 25.0; // Wie häufig die Planungsfunktion aufrufen (in Millisekunden)
const scheduleAheadTime = 0.1; // Wie weit voraus Audio geplant werden soll (Sek.)
```

Lassen Sie uns eine Funktion erstellen, die die Note um einen Schlag nach vorne bewegt und zum ersten zurückkehrt, wenn sie die 4. (letzte) erreicht hat:

```js
let currentNote = 0;
let nextNoteTime = 0.0; // Zeit für die nächste Note.

function nextNote() {
  const secondsPerBeat = 60.0 / tempo;

  nextNoteTime += secondsPerBeat; // Beat-Länge zur letzten Zeit der Note hinzufügen

  // Vorwärtsbewegen der Schlagnummer, bei Erreichen von 4 zurück auf null
  currentNote = (currentNote + 1) % 4;
}
```

Wir möchten eine Referenzwarteschlange für die Noten erstellen, die gespielt werden sollen, und die Funktionalität, um sie mit den Funktionen zu spielen, die wir zuvor erstellt haben:

```js
const notesInQueue = [];

function scheduleNote(beatNumber, time) {
  // Die Note in die Warteschlange stellen, auch wenn wir nicht spielen.
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

Hier betrachten wir die aktuelle Zeit und vergleichen sie mit der Zeit für die folgende Note; wenn die beiden übereinstimmen, wird es die vorherigen beiden Funktionen aufrufen.

{{domxref("AudioContext")}}-Objektinstanzen haben eine [`currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime)-Eigenschaft, mit der wir die Anzahl der Sekunden abrufen können, nachdem wir den Kontext zuerst erstellt haben. Wir verwenden sie für das Timing innerhalb unseres Step-Sequenzers. Es ist extrem präzise und liefert einen Float-Wert, der auf etwa 15 Dezimalstellen genau ist.

```js
let timerID;
function scheduler() {
  // Solange Noten vorhanden sind, die vor dem nächsten Intervall gespielt werden müssen,
  // planen sie und bewegen den Zeiger weiter.
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
    notesInQueue.shift(); // Note aus der Warteschlange entfernen
  }

  // Wir müssen nur zeichnen, wenn die Note sich bewegt hat.
  if (lastNoteDrawn !== drawNote) {
    pads.forEach((pad) => {
      pad.children[lastNoteDrawn * 2].style.borderColor = "var(--black)";
      pad.children[drawNote * 2].style.borderColor = "var(--yellow)";
    });

    lastNoteDrawn = drawNote;
  }
  // Setzen Sie das Zeichnen fort
  requestAnimationFrame(draw);
}
```

## Alles zusammenfügen

Jetzt muss nur noch sichergestellt werden, dass das Sample geladen ist, bevor wir das Instrument _spielen_ können. Wir fügen einen Ladebildschirm hinzu, der verschwindet, wenn die Datei abgerufen und dekodiert wurde. Dann können wir den Scheduler über das Klicken auf die Wiedergabe-Schaltfläche starten.

```js
// Wenn das Sample geladen ist, kann abgespielt werden
const loadingEl = document.querySelector(".loading");
const playButton = document.querySelector("#playBtn");
let isPlaying = false;
setupSample().then((sample) => {
  loadingEl.style.display = "none";

  dtmf = sample; // zur Verwendung in unserer playSample-Funktion

  playButton.addEventListener("click", (ev) => {
    isPlaying = !isPlaying;

    if (isPlaying) {
      // Starten des Abspielens

      // Überprüfen, ob der Kontext im Ruhezustand ist (Autoplay-Richtlinie)
      if (audioCtx.state === "suspended") {
        audioCtx.resume();
      }

      currentNote = 0;
      nextNoteTime = audioCtx.currentTime;
      scheduler(); // Planung starten
      requestAnimationFrame(draw); // Zeichenloop starten.
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
