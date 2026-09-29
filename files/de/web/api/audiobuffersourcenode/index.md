---
title: AudioBufferSourceNode
slug: Web/API/AudioBufferSourceNode
l10n:
  sourceCommit: 4ccd81240a6d531962fab92886631885a90bfa3c
---

{{APIRef("Web Audio API")}}

Die **`AudioBufferSourceNode`**-Schnittstelle ist ein [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode), der eine Audioquelle aus im Arbeitsspeicher vorliegenden Audiodaten repräsentiert. Diese Daten sind in einem [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) gespeichert.

Diese Schnittstelle eignet sich besonders für die Wiedergabe von Audio mit hohen Anforderungen an die zeitliche Genauigkeit, etwa für Klänge, die einem bestimmten Rhythmus folgen müssen und im Arbeitsspeicher gehalten werden können, statt von einem Datenträger oder aus dem Netzwerk abgespielt zu werden. Wenn Klänge eine genaue zeitliche Steuerung erfordern, aber aus dem Netzwerk gestreamt oder von einem Datenträger abgespielt werden müssen, verwenden Sie einen [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode), um die Wiedergabe zu implementieren.

{{InheritanceDiagram}}

Ein `AudioBufferSourceNode` hat keine Eingänge und genau einen Ausgang. Dieser hat dieselbe Anzahl an Kanälen wie der `AudioBuffer`, der durch die Eigenschaft [`buffer`](/de/docs/Web/API/AudioBufferSourceNode/buffer) angegeben wird. Ist kein Buffer festgelegt – das heißt, `buffer` ist `null` –, enthält der Ausgang einen einzelnen Kanal mit Stille (jeder Sample-Wert ist 0).

Ein `AudioBufferSourceNode` kann nur einmal abgespielt werden. Nach jedem Aufruf von [`start()`](/de/docs/Web/API/AudioBufferSourceNode/start) müssen Sie einen neuen Node erstellen, wenn Sie denselben Klang erneut abspielen möchten. Diese Nodes lassen sich jedoch mit sehr geringem Aufwand erstellen, und die eigentlichen `AudioBuffer`s können für die mehrmalige Wiedergabe eines Klangs wiederverwendet werden. Sie können diese Nodes nach dem Prinzip „Starten und vergessen“ verwenden: Erstellen Sie den Node, rufen Sie `start()` auf, um die Wiedergabe zu beginnen, und verzichten Sie sogar darauf, eine Referenz darauf zu behalten. Er wird zu einem geeigneten Zeitpunkt automatisch von der Garbage Collection erfasst, frühestens einige Zeit nachdem die Wiedergabe beendet ist.

Mehrere Aufrufe von [`stop()`](/de/docs/Web/API/AudioScheduledSourceNode/stop) sind zulässig. Der jeweils letzte Aufruf ersetzt den vorherigen, sofern der `AudioBufferSourceNode` das Ende des Buffers noch nicht erreicht hat.

![Der AudioBufferSourceNode übernimmt den Inhalt eines AudioBuffer und m](webaudioaudiobuffersourcenode.png)

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
      <th scope="row">Kanalanzahl</th>
      <td>durch den zugehörigen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) festgelegt</td>
    </tr>
  </tbody>
</table>

## Konstruktor

- [`AudioBufferSourceNode()`](/de/docs/Web/API/AudioBufferSourceNode/AudioBufferSourceNode)
  - : Erstellt ein neues `AudioBufferSourceNode`-Objekt und gibt es zurück. Alternativ können Sie die Factory-Methode [`BaseAudioContext.createBufferSource()`](/de/docs/Web/API/BaseAudioContext/createBufferSource) verwenden. Siehe [Erstellen eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Instanzeigenschaften

_Erbt Eigenschaften von der übergeordneten Schnittstelle [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)._

- [`AudioBufferSourceNode.buffer`](/de/docs/Web/API/AudioBufferSourceNode/buffer)
  - : Ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), der die abzuspielenden Audiodaten festlegt. Ist der Wert auf `null` gesetzt, wird ein einzelner Kanal mit Stille festgelegt (in dem jeder Sample-Wert 0,0 ist).
- [`AudioBufferSourceNode.detune`](/de/docs/Web/API/AudioBufferSourceNode/detune) {{ReadOnlyInline}}
  - : Ein [k-rate](/de/docs/Web/API/AudioParam#k-rate)-[`AudioParam`](/de/docs/Web/API/AudioParam), der die Verstimmung der Wiedergabe in [Cent](https://en.wikipedia.org/wiki/Cent_%28music%29) angibt. Dieser Wert wird mit `playbackRate` kombiniert, um die Wiedergabegeschwindigkeit zu bestimmen. Der Standardwert ist `0` (keine Verstimmung); der nominelle Wertebereich reicht von −∞ bis ∞.
- [`AudioBufferSourceNode.loop`](/de/docs/Web/API/AudioBufferSourceNode/loop)
  - : Ein boolesches Attribut, das angibt, ob die Audiodaten nach Erreichen des Endes des [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) erneut abgespielt werden sollen. Der Standardwert ist `false`.
- [`AudioBufferSourceNode.loopStart`](/de/docs/Web/API/AudioBufferSourceNode/loopStart) {{optional_inline}}
  - : Ein Gleitkommawert, der den Zeitpunkt in Sekunden angibt, an dem die Wiedergabe des [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) beginnen soll, wenn `loop` den Wert `true` hat. Der Standardwert ist `0` (die Wiedergabe beginnt bei jeder Wiederholung am Anfang des Audio-Buffers).
- [`AudioBufferSourceNode.loopEnd`](/de/docs/Web/API/AudioBufferSourceNode/loopEnd) {{optional_inline}}
  - : Ein Gleitkommawert, der den Zeitpunkt in Sekunden angibt, an dem die Wiedergabe des [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) endet und zu dem durch `loopStart` angegebenen Zeitpunkt zurückspringt, wenn `loop` den Wert `true` hat. Der Standardwert ist `0`.
- [`AudioBufferSourceNode.playbackRate`](/de/docs/Web/API/AudioBufferSourceNode/playbackRate) {{ReadOnlyInline}}
  - : Ein [k-rate](/de/docs/Web/API/AudioParam#k-rate)-[`AudioParam`](/de/docs/Web/API/AudioParam), der den Geschwindigkeitsfaktor für die Wiedergabe der Audiodaten festlegt. Ein Wert von 1,0 entspricht der ursprünglichen Abtastrate des Klangs. Da am Ausgang keine Tonhöhenkorrektur vorgenommen wird, lässt sich damit die Tonhöhe des Samples ändern. Dieser Wert wird mit `detune` kombiniert, um die endgültige Wiedergabegeschwindigkeit zu bestimmen.

## Instanzmethoden

_Erbt Methoden von der übergeordneten Schnittstelle [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) und überschreibt die folgende Methode:_

- [`start()`](/de/docs/Web/API/AudioBufferSourceNode/start)
  - : Plant die Wiedergabe der im Buffer enthaltenen Audiodaten oder beginnt sofort mit der Wiedergabe. Ermöglicht außerdem, den Startversatz und die Wiedergabedauer festzulegen.

## Beispiele

In diesem Beispiel erstellen wir einen zwei Sekunden langen Buffer, füllen ihn mit weißem Rauschen und spielen ihn anschließend mit einem `AudioBufferSourceNode` ab. Die Kommentare sollten deutlich erklären, was dabei geschieht.

> [!NOTE]
> Sie können den [Code auch direkt ausführen](https://mdn.github.io/webaudio-examples/audio-buffer/) oder sich den [Quellcode ansehen](https://github.com/mdn/webaudio-examples/blob/main/audio-buffer/index.html).

```js
const audioCtx = new AudioContext();

// Create an empty three-second stereo buffer at the sample rate of the AudioContext
const myArrayBuffer = audioCtx.createBuffer(
  2,
  audioCtx.sampleRate * 3,
  audioCtx.sampleRate,
);

// Fill the buffer with white noise;
// just random values between -1.0 and 1.0
for (let channel = 0; channel < myArrayBuffer.numberOfChannels; channel++) {
  // This gives us the actual ArrayBuffer that contains the data
  const nowBuffering = myArrayBuffer.getChannelData(channel);
  for (let i = 0; i < myArrayBuffer.length; i++) {
    // Math.random() is in [0; 1.0]
    // audio needs to be in [-1.0; 1.0]
    nowBuffering[i] = Math.random() * 2 - 1;
  }
}

// Get an AudioBufferSourceNode.
// This is the AudioNode to use when we want to play an AudioBuffer
const source = audioCtx.createBufferSource();
// set the buffer in the AudioBufferSourceNode
source.buffer = myArrayBuffer;
// connect the AudioBufferSourceNode to the
// destination so we can hear the sound
source.connect(audioCtx.destination);
// start the source playing
source.start();
```

> [!NOTE]
> Ein Beispiel für `decodeAudioData()` finden Sie auf der Seite zu [`AudioContext.decodeAudioData()`](/de/docs/Web/API/BaseAudioContext/decodeAudioData).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
