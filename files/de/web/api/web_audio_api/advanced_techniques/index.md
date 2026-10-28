---
title: "Fortgeschrittene Techniken: Audio erzeugen und zeitlich steuern"
slug: Web/API/Web_Audio_API/Advanced_techniques
l10n:
  sourceCommit: 01501e37cc8a84b9193671f348ff2c7b10f5dffe
---

{{DefaultAPISidebar("Web Audio API")}}

In diesem Tutorial behandeln wir die Erzeugung und Veränderung von Klängen sowie deren zeitliche Steuerung und Planung. Wir stellen das Laden von Samples, Hüllkurven, Filter, Wavetables und Frequenzmodulation vor. Wenn Ihnen diese Begriffe bereits vertraut sind und Sie erfahren möchten, wie Sie sie mit der Web Audio API einsetzen, sind Sie hier richtig.

> [!NOTE]
> Den Quellcode für die folgende Demo finden Sie auf GitHub im Unterverzeichnis [step-sequencer](https://github.com/mdn/webaudio-examples/tree/main/step-sequencer) des MDN-Repositories [webaudio-examples](https://github.com/mdn/webaudio-examples). Sie können sich auch die [Live-Demo](https://mdn.github.io/webaudio-examples/step-sequencer/) ansehen.

## Demo

Wir betrachten einen sehr einfachen Step-Sequencer:

![Eine Sound-Sequencer-Anwendung mit übergeordneten Steuerelementen für Wiedergabe und BPM sowie vier verschiedenen Stimmen mit jeweils eigenen Steuerelementen.](sequencer.png)

In der Praxis lässt sich so etwas leichter mit einer Bibliothek umsetzen – die Web Audio API wurde als Grundlage für weiterführende Werkzeuge entwickelt. Wenn Sie etwas Komplexeres entwickeln möchten, ist [tone.js](https://tonejs.github.io/) ein hervorragender Ausgangspunkt. Hier möchten wir jedoch zu Lernzwecken zeigen, wie eine solche Demo von Grund auf entsteht.

Die Benutzeroberfläche enthält übergeordnete Steuerelemente, mit denen wir den Sequencer starten und stoppen sowie die BPM (Beats per Minute, Schläge pro Minute) anpassen können, um die „Musik“ zu beschleunigen oder zu verlangsamen.

Vier verschiedene Klänge oder Stimmen können abgespielt werden. Jede Stimme hat vier Schaltflächen – eine für jeden Schlag eines Takts. Ist eine Schaltfläche aktiviert, erklingt die entsprechende Note. Während das Instrument spielt, durchläuft es diese Schläge und wiederholt den Takt.

Jede Stimme verfügt außerdem über eigene Steuerelemente. Damit können Sie die Effekte oder Parameter beeinflussen, die zu der jeweiligen Technik gehören, mit der wir die Stimme erzeugen. Wir verwenden folgende Methoden:

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Name der Stimme</th>
      <th scope="col">Technik</th>
      <th scope="col">Zugehöriges Feature der Web Audio API</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>„Sweep“</td>
      <td>Oszillator, periodische Welle</td>
      <td>
        [`OscillatorNode`](/de/docs/Web/API/OscillatorNode),
        [`PeriodicWave`](/de/docs/Web/API/PeriodicWave)
      </td>
    </tr>
    <tr>
      <td>„Pulse“</td>
      <td>Mehrere Oszillatoren</td>
      <td>[`OscillatorNode`](/de/docs/Web/API/OscillatorNode)</td>
    </tr>
    <tr>
      <td>„Noise“</td>
      <td>Puffer mit Zufallsrauschen, Biquad-Filter</td>
      <td>
        [`AudioBuffer`](/de/docs/Web/API/AudioBuffer),
        [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode),
        [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)
      </td>
    </tr>
    <tr>
      <td>„Dial up“</td>
      <td>Laden eines Klang-Samples zur Wiedergabe</td>
      <td>
        [`BaseAudioContext/decodeAudioData`](/de/docs/Web/API/BaseAudioContext/decodeAudioData),
        [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Wir haben dieses Instrument nicht entwickelt, damit es gut klingt, sondern um Beispielcode bereitzustellen. Die Demo zeigt eine _stark_ vereinfachte Version eines solchen Instruments. Die Klänge orientieren sich an einem Einwahlmodem. Falls Sie nicht wissen, wie ein solches Gerät klingt, können Sie es sich [hier anhören](https://soundcloud.com/john-pemberton/modem-dialup).

## Einen Audiokontext erstellen

Wie Sie inzwischen wissen, beginnt jede Anwendung mit der Web Audio API mit einem Audiokontext:

```js
const audioCtx = new AudioContext();
```

## Der „Sweep“ – Oszillatoren, periodische Wellen und Hüllkurven

Für den Klang, den wir „Sweep“ nennen – das erste Geräusch, das Sie bei der Einwahl hören –, erzeugen wir den Ton mit einem Oszillator.

Der [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) unterstützt von Haus aus grundlegende Wellenformen: Sinus, Rechteck, Dreieck und Sägezahn. Statt eine dieser Standardwellenformen zu verwenden, erstellen wir mithilfe der [`PeriodicWave`](/de/docs/Web/API/PeriodicWave)-Schnittstelle und der Werte einer Wavetable eine eigene. Mit dem [`PeriodicWave()`](/de/docs/Web/API/PeriodicWave/PeriodicWave)-Konstruktor können wir diese benutzerdefinierte Welle für einen Oszillator verwenden.

### Die periodische Welle

Zuerst erstellen wir die periodische Welle. Dazu übergeben wir dem [`PeriodicWave()`](/de/docs/Web/API/PeriodicWave/PeriodicWave)-Konstruktor reelle und imaginäre Werte:

```js
const wave = new PeriodicWave(audioCtx, {
  real: wavetable.real,
  imag: wavetable.imag,
});
```

> [!NOTE]
> In unserem Beispiel liegt die Wavetable in einer separaten JavaScript-Datei (`wavetable.js`), weil sie _sehr_ viele Werte enthält. Wir haben sie aus einem [Repository mit Wavetables](https://github.com/GoogleChromeLabs/web-audio-samples/tree/main/src/demos/wavetable-synth/wave-tables) übernommen, das Teil der [Web-Audio-API-Beispiele von Google Chrome Labs](https://github.com/GoogleChromeLabs/web-audio-samples/) ist.

### Der Oszillator

Jetzt können wir einen [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) erstellen und seine Wellenform auf die eben erstellte Welle setzen:

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

Wir übergeben der Funktion hier einen Zeitparameter, den wir später zur zeitlichen Planung des Sweeps verwenden.

### Die Amplitude steuern

Das funktioniert bereits gut. Noch besser wäre es allerdings mit einer Amplitudenhüllkurve. Erstellen wir eine, um die Methoden kennenzulernen, mit denen sich in der Web Audio API eine Hüllkurve erzeugen lässt.

Unsere Hüllkurve soll eine Einschwing- und eine Ausklingphase haben. Über [Bereichseingaben](/de/docs/Web/HTML/Reference/Elements/input/range) in der Benutzeroberfläche können Benutzerinnen und Benutzer beide Phasen steuern:

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

Nun können wir in JavaScript Variablen anlegen, die sich ändern, wenn die Eingabewerte aktualisiert werden:

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

### Die vollständige Funktion playSweep()

Jetzt können wir unsere Funktion `playSweep()` erweitern. Wir fügen einen [`GainNode`](/de/docs/Web/API/GainNode) hinzu und binden ihn in unseren Audiographen ein, um die Amplitude des Klangs zu verändern. Der Gain-Node hat eine Eigenschaft namens `gain` vom Typ [`AudioParam`](/de/docs/Web/API/AudioParam).

Das ist nützlich: Nun können wir die Methoden von `AudioParam` für den Gain-Wert einsetzen. Wir können einen Wert zu einem bestimmten Zeitpunkt setzen oder ihn mit Methoden wie [`AudioParam.linearRampToValueAtTime`](/de/docs/Web/API/AudioParam/linearRampToValueAtTime) _über einen Zeitraum_ verändern.

Wie bereits erwähnt, verwenden wir die Methode `linearRampToValueAtTime` für die Einschwing- und Ausklingphase. Sie erwartet zwei Parameter: den Zielwert für den zu ändernden Parameter – hier den Gain-Wert – und den Zeitpunkt, zu dem dieser Wert erreicht werden soll. In unserem Fall steuern die Eingaben diesen _Zeitpunkt_. Im folgenden Beispiel steigt der Gain-Wert daher während der über die Bereichseingabe festgelegten Einschwingdauer linear auf 1. Entsprechend sinkt er während der eingestellten Ausklingdauer linear auf 0.

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

## Der „Pulse“ – Modulation mit einem niederfrequenten Oszillator

Unser Sweep ist fertig! Sehen wir uns nun den pulsierenden Klang an. Wir können ihn mit einem einfachen Oszillator erzeugen, den ein zweiter Oszillator moduliert.

### Der erste Oszillator

Wir richten unseren ersten [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) ähnlich wie beim Sweep ein. Diesmal verwenden wir allerdings keine Wavetable für eine eigene Wellenform, sondern die Standardwellenform `sine`:

```js
const osc = new OscillatorNode(audioCtx, {
  type: "sine",
  frequency: pulseHz,
});
```

Als Nächstes erstellen wir einen [`GainNode`](/de/docs/Web/API/GainNode), denn dessen `gain`-Wert wird durch unseren zweiten, niederfrequenten Oszillator verändert:

```js
const amp = new GainNode(audioCtx, {
  gain: 1,
});
```

### Den zweiten, niederfrequenten Oszillator erstellen

Nun erstellen wir einen zweiten Oszillator mit der Wellenform `square` (also einer Pulswelle), um die Amplitude unserer ersten Sinuswelle zu verändern:

```js
const lfo = new OscillatorNode(audioCtx, {
  type: "square",
  frequency: 30,
});
```

### Den Graphen verbinden

Entscheidend ist, den Graphen richtig zu verbinden und beide Oszillatoren zu starten:

```js
lfo.connect(amp.gain);
osc.connect(amp).connect(audioCtx.destination);
lfo.start();
osc.start(time);
osc.stop(time + pulseTime);
```

> [!NOTE]
> Wir müssen für keinen der beiden Oszillatoren eine Standardwellenform verwenden. Wie zuvor könnten wir auch eine Wavetable und eine periodische Welle einsetzen. Schon mit wenigen Nodes ergeben sich zahlreiche Möglichkeiten.

### Steuerelemente für den „Pulse“

In der Benutzeroberfläche machen wir die Frequenzen beider Oszillatoren über Bereichseingaben einstellbar. Eine verändert die Tonhöhe, die andere bestimmt, wie der Puls die erste Welle moduliert:

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

Wie zuvor ändern wir die Parameter, wenn Benutzerinnen und Benutzer die Werte der Bereichseingaben anpassen.

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

### Die vollständige Funktion playPulse()

Hier ist die gesamte Funktion `playPulse()`:

```js
const pulseTime = 1;
function playPulse(time) {
  const osc = new OscillatorNode(audioCtx, {
    type: "sine",
    frequency: pulseHz,
  });

  const amp = new GainNode(audioCtx, {
    gain: 1,
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

## Das „Noise“ – Puffer mit Zufallsrauschen und Biquad-Filter

Jetzt brauchen wir Rauschen! Jedes Modem rauscht. Bei Audiodaten besteht Rauschen einfach aus Zufallszahlen und lässt sich daher relativ unkompliziert mit Code erzeugen.

### Einen Audiopuffer erstellen

Wir brauchen allerdings einen leeren Behälter für diese Zahlen, den die Web Audio API versteht. Hier kommen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)-Objekte ins Spiel. Sie können eine Datei abrufen und in einen Puffer dekodieren – dazu kommen wir später im Tutorial – oder einen leeren Puffer erstellen und ihn mit eigenen Daten füllen.

Für unser Rauschen wählen wir die zweite Möglichkeit. Zunächst berechnen wir die benötigte Größe des Puffers. Dafür können wir die Eigenschaft [`BaseAudioContext.sampleRate`](/de/docs/Web/API/BaseAudioContext/sampleRate) verwenden:

```js
const bufferSize = audioCtx.sampleRate * noiseDuration;
// Create an empty buffer
const noiseBuffer = new AudioBuffer({
  length: bufferSize,
  sampleRate: audioCtx.sampleRate,
});
```

Anschließend füllen wir den Puffer mit Zufallszahlen zwischen -1 und 1:

```js
// Fill the buffer with noise
const data = noiseBuffer.getChannelData(0);
for (let i = 0; i < bufferSize; i++) {
  data[i] = Math.random() * 2 - 1;
}
```

> [!NOTE]
> Warum Werte zwischen -1 und 1? Bei der Ausgabe von Klang in eine Datei oder über Lautsprecher benötigen wir eine Zahl, die 0 dB Full Scale repräsentiert – die numerische Grenze eines Festkomma-Mediums oder Digital-Analog-Wandlers (DAC). Bei Gleitkomma-Audio lässt sich 1 für mathematische Operationen auf Signalen gut als „Full Scale“ verwenden. Deshalb geben Oszillatoren, Rauschgeneratoren und andere Klangquellen üblicherweise bipolare Signale im Bereich von -1 bis 1 aus. Ein Browser begrenzt Werte außerhalb dieses Bereichs.

### Eine Pufferquelle erstellen

Wir haben nun einen mit Daten gefüllten Audiopuffer. Als Nächstes benötigen wir einen Node für unseren Graphen, der diesen Puffer als Quelle verwenden kann. Dafür erstellen wir einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) und übergeben ihm die erzeugten Daten:

```js
// Create a buffer source for our created data
const noise = new AudioBufferSourceNode(audioCtx, {
  buffer: noiseBuffer,
});
```

Wenn wir ihn in unseren Audiographen einbinden und abspielen:

```js
noise.connect(audioCtx.destination);
noise.start();
```

Sie werden bemerken, dass der Klang stark zischt oder blechern wirkt. Wir haben weißes Rauschen erzeugt – genau so soll es klingen. Unsere Werte sind über den Bereich von -1 bis 1 verteilt. Dadurch entstehen ausgeprägte Spitzen bei allen Frequenzen, die recht schrill wirken können. Wir _könnten_ die Funktion so ändern, dass sie beispielsweise nur Werte zwischen -0,5 und 0,5 erzeugt. Das würde die Spitzen abmildern und den Klang angenehmer machen. Aber wo bliebe da der Spaß? Leiten wir unser Rauschen stattdessen durch einen Filter.

### Einen Biquad-Filter hinzufügen

Wir möchten einen Klang im Bereich von rosa oder braunem Rauschen. Dazu wollen wir hohe Frequenzen und möglicherweise auch einige tiefe Frequenzen abschwächen. Für diese Aufgabe wählen wir einen Biquad-Bandpassfilter.

> [!NOTE]
> Die Web Audio API bietet zwei Arten von Filter-Nodes: [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) und [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode). Meist reicht ein Biquad-Filter aus. Er unterstützt verschiedene Filtertypen wie Tiefpass, Hochpass und Bandpass. Wenn Sie einen spezielleren Filter benötigen, könnte ein IIR-Filter die richtige Wahl sein. Weitere Informationen finden Sie unter [IIR-Filter verwenden](/de/docs/Web/API/Web_Audio_API/Using_IIR_filters).

Die Einbindung funktioniert wie zuvor: Wir erstellen den [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode), konfigurieren seine gewünschten Eigenschaften und verbinden ihn mit unserem Graphen. Die Eigenschaften haben je nach Biquad-Filtertyp unterschiedliche Auswirkungen: Bei einem Bandpass bestimmt die Frequenzeinstellung beispielsweise die Mittenfrequenz, bei einem Tiefpass dagegen die obere Grenzfrequenz.

```js
// Filter the output
const bandpass = new BiquadFilterNode(audioCtx, {
  type: "bandpass",
  frequency: bandHz,
});

// Connect our graph
noise.connect(bandpass).connect(audioCtx.destination);
```

### Steuerelemente für das Rauschen

In der Benutzeroberfläche machen wir die Dauer des Rauschens und die Mittenfrequenz des Bandpasses einstellbar. Wie in den vorherigen Abschnitten verwenden wir dafür Bereichseingaben und Event-Handler:

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

### Die vollständige Funktion playNoise()

Hier ist die gesamte Funktion `playNoise()`:

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

## „Dial-up“ – ein Klang-Sample laden

Die Wähltöne eines Telefons (DTMF) ließen sich mit den bereits verwendeten Methoden leicht nachbilden, indem wir mehrere Oszillatoren gleichzeitig abspielen. Stattdessen laden wir in diesem Abschnitt eine Sample-Datei, um zu zeigen, was dafür erforderlich ist.

### Das Sample laden

Bevor wir die Datei verwenden, muss sie geladen und in einen Puffer dekodiert sein. Dazu erstellen wir eine [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)-Funktion:

```js
async function getFile(audioContext, filepath) {
  const response = await fetch(filepath);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  return audioBuffer;
}
```

Beim Aufruf dieser Funktion können wir dann den [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)-Operator verwenden. Er stellt sicher, dass nachfolgender Code erst ausgeführt wird, wenn die Funktion abgeschlossen ist.

Erstellen wir eine weitere `async`-Funktion, um das Sample einzurichten. Wir können die beiden asynchronen Funktionen mithilfe von Promises kombinieren und weitere Aktionen ausführen, sobald die Datei geladen und gepuffert ist:

```js
async function setupSample() {
  const filePath = "dtmf.mp3";
  const sample = await getFile(audioCtx, filePath);
  return sample;
}
```

> [!NOTE]
> Sie können die obige Funktion leicht so anpassen, dass sie ein Array von Dateien annimmt und diese in einer Schleife lädt. Damit lassen sich mehrere Samples laden, was für komplexere Instrumente oder Spiele nützlich ist.

Jetzt können wir `setupSample()` folgendermaßen verwenden:

```js
setupSample().then((sample) => {
  // sample is our buffered file
  // …
});
```

Sobald das Sample abgespielt werden kann, richtet das Programm die Benutzeroberfläche ein. Danach ist alles bereit.

### Das Sample abspielen

Erstellen wir eine Funktion `playSample()`, ähnlich wie bei den anderen Klängen. Diesmal erzeugen wir einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode), weisen ihm die abgerufenen und dekodierten Pufferdaten zu und spielen ihn ab:

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
> Wir können `stop()` für einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) aufrufen. Wenn das Sample zu Ende gespielt ist, stoppt er allerdings automatisch.

### Steuerelemente für „Dial-up“

Der [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) besitzt eine Eigenschaft namens [`playbackRate`](/de/docs/Web/API/AudioBufferSourceNode/playbackRate). Machen wir sie über die Benutzeroberfläche zugänglich, damit wir das Sample schneller oder langsamer abspielen können. Dabei gehen wir ähnlich vor wie zuvor:

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

### Die vollständige Funktion playSample()

Nun ergänzen wir unsere Funktion `playSample()` um eine Zeile, die die Eigenschaft `playbackRate` aktualisiert. Die endgültige Version sieht so aus:

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
> Die [Klangdatei stammt von soundbible.com](https://soundbible.com/1573-DTMF-Tones.html).

## Audio im richtigen Takt abspielen

Bei digitalen Audioanwendungen ist es oft schwierig, Klänge exakt zum richtigen Zeitpunkt abzuspielen, damit der Rhythmus gleichmäßig bleibt und nichts aus dem Takt gerät.

Wir könnten die Wiedergabe unserer Stimmen innerhalb einer `for`-Schleife planen. Das größte Problem dabei wären jedoch Änderungen während der Wiedergabe – und genau dafür haben wir bereits Steuerelemente implementiert. Außerdem möchten wir die BPM für das gesamte Instrument einstellen können. Damit unsere Stimmen im Takt erklingen, eignet sich ein Planungssystem am besten: Wir schauen voraus, wann die Noten gespielt werden sollen, und fügen sie einer Warteschlange hinzu. Mithilfe der Eigenschaft `currentTime` können wir sie zu einem präzisen Zeitpunkt starten und dabei Änderungen berücksichtigen.

> [!NOTE]
> Dies ist eine stark vereinfachte Fassung des Verfahrens, das Chris Wilson in seinem Artikel [A Tale Of Two Clocks (2013)](https://web.dev/articles/audio-scheduling) ausführlich beschreibt. Statt alles hier zu wiederholen, empfehlen wir Ihnen, den Artikel zu lesen und diese Methode zu verwenden. Ein großer Teil des folgenden Codes stammt aus seinem [Metronom-Beispiel](https://github.com/cwilso/metronome/blob/main/js/metronome.js), auf das er im Artikel verweist.

Zuerst legen wir den BPM-Standardwert fest. Sie ahnen es bereits: Er lässt sich ebenfalls über eine Bereichseingabe ändern.

```js
let tempo = 60.0;
const bpmControl = document.querySelector("#bpm");

bpmControl.addEventListener("input", (ev) => {
  tempo = parseInt(ev.target.value, 10);
});
```

Dann erstellen wir Variablen, die festlegen, wie weit wir vorausschauen und wie weit im Voraus wir die Wiedergabe planen:

```js
const lookahead = 25.0; // How frequently to call scheduling function (in milliseconds)
const scheduleAheadTime = 0.1; // How far ahead to schedule audio (sec)
```

Erstellen wir eine Funktion, die zur nächsten Note weitergeht und nach der vierten (letzten) Note wieder zur ersten zurückkehrt:

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

Nun brauchen wir eine Warteschlange für die abzuspielenden Noten und eine Funktion, die sie mithilfe unserer zuvor erstellten Funktionen abspielt:

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

Hier prüfen wir die aktuelle Zeit und vergleichen sie mit dem geplanten Zeitpunkt der nächsten Note. Wenn dieser Zeitpunkt erreicht ist, werden die beiden vorherigen Funktionen aufgerufen.

Instanzen des [`AudioContext`](/de/docs/Web/API/AudioContext)-Objekts besitzen die Eigenschaft [`currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime). Sie liefert die Anzahl der Sekunden seit dem Erstellen des Kontexts. Wir verwenden sie für die zeitliche Steuerung unseres Step-Sequencers. Sie ist äußerst präzise und gibt einen Gleitkommawert mit einer Genauigkeit von etwa 15 Dezimalstellen zurück.

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

Außerdem benötigen wir eine Funktion `draw()`, die die Benutzeroberfläche aktualisiert, damit wir den Fortschritt des Takts sehen können.

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

Jetzt müssen wir nur noch sicherstellen, dass das Sample geladen ist, bevor wir das Instrument _abspielen_ können. Wir fügen eine Ladeanzeige hinzu, die verschwindet, sobald die Datei abgerufen und dekodiert wurde. Anschließend kann der Klick auf die Wiedergabeschaltfläche den Scheduler starten.

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

Jetzt haben wir ein Instrument direkt im Browser! Spielen und experimentieren Sie weiter – mit jeder dieser Techniken können Sie noch viel komplexere Anwendungen entwickeln.
