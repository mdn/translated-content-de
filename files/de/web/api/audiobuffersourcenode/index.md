---
title: AudioBufferSourceNode
slug: Web/API/AudioBufferSourceNode
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("Web Audio API")}}

Das **`AudioBufferSourceNode`**-Interface ist ein [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode), das eine Audioquelle darstellt, die aus im Speicher befindlichen Audiodaten besteht, die in einem [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) gespeichert sind.

Dieses Interface ist besonders nützlich für die Wiedergabe von Audiodaten, die besonders genaue Timing-Anforderungen haben, wie zum Beispiel für Klänge, die mit einem bestimmten Rhythmus übereinstimmen müssen und im Speicher gehalten werden können, anstatt von der Festplatte oder dem Netzwerk abgespielt zu werden. Um Klänge wiederzugeben, die genaues Timing erfordern, aber aus dem Netzwerk gestreamt oder von der Festplatte abgespielt werden müssen, verwenden Sie ein [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode), um deren Wiedergabe zu implementieren.

{{InheritanceDiagram}}

Ein `AudioBufferSourceNode` hat keine Eingänge und genau einen Ausgang, der dieselbe Anzahl von Kanälen hat wie der `AudioBuffer`, der durch seine [`buffer`](/de/docs/Web/API/AudioBufferSourceNode/buffer)-Eigenschaft angegeben wird. Wenn kein Buffer gesetzt ist – d.h. wenn `buffer` auf `null` steht – enthält der Ausgang einen einzigen Kanal der Stille (jede Probe ist 0).

Ein `AudioBufferSourceNode` kann nur einmal abgespielt werden; nach jedem Aufruf von [`start()`](/de/docs/Web/API/AudioBufferSourceNode/start) müssen Sie einen neuen Knoten erstellen, wenn Sie denselben Klang erneut abspielen möchten. Glücklicherweise sind diese Knoten sehr kostengünstig zu erstellen, und die eigentlichen `AudioBuffer`s können für mehrere Abspielvorgänge des Klangs wiederverwendet werden. Tatsächlich können Sie diese Knoten in einer "fire and forget"-Manier verwenden: Erzeugen Sie den Knoten, rufen Sie `start()` auf, um den Klang zu starten, und brauchen nicht einmal eine Referenz darauf zu halten. Er wird automatisch zu einem geeigneten Zeitpunkt gesammelt, der nicht vor dem Abspielen des Klangs liegt.

Mehrfache Aufrufe von [`stop()`](/de/docs/Web/API/AudioScheduledSourceNode/stop) sind erlaubt. Der neueste Aufruf ersetzt den vorherigen, wenn der `AudioBufferSourceNode` das Ende des Buffers noch nicht erreicht hat.

![Der AudioBufferSourceNode nimmt den Inhalt eines AudioBuffers und m](webaudioaudiobuffersourcenode.png)

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
      <th scope="row">Anzahl der Kanäle</th>
      <td>definiert durch den zugeordneten [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)</td>
    </tr>
  </tbody>
</table>

## Konstruktor

- [`AudioBufferSourceNode()`](/de/docs/Web/API/AudioBufferSourceNode/AudioBufferSourceNode)
  - : Erstellt und gibt ein neues `AudioBufferSourceNode`-Objekt zurück. Alternativ können Sie die [`BaseAudioContext.createBufferSource()`](/de/docs/Web/API/BaseAudioContext/createBufferSource)-Fabrikmethode verwenden; siehe [Erstellen eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)_.

- [`AudioBufferSourceNode.buffer`](/de/docs/Web/API/AudioBufferSourceNode/buffer)
  - : Ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), der das abzuspielende Audioasset definiert, oder wenn auf den Wert `null` gesetzt, eine einzelne Stille-Kanal definiert (in dem jede Probe 0.0 ist).
- [`AudioBufferSourceNode.detune`](/de/docs/Web/API/AudioBufferSourceNode/detune)
  - : Ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das die Abstimmung der Wiedergabe in [Cent](<https://de.wikipedia.org/wiki/Cent_(Musik)>) darstellt. Dieser Wert wird mit `playbackRate` kombiniert, um die Geschwindigkeit zu bestimmen, in der der Klang abgespielt wird. Sein Standardwert ist `0` (was keine Abstimmung bedeutet), und sein nomineller Bereich ist -∞ bis ∞.
- [`AudioBufferSourceNode.loop`](/de/docs/Web/API/AudioBufferSourceNode/loop)
  - : Ein boolesches Attribut, das angibt, ob das Audioasset erneut abgespielt werden muss, wenn das Ende des [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) erreicht ist. Sein Standardwert ist `false`.
- [`AudioBufferSourceNode.loopStart`](/de/docs/Web/API/AudioBufferSourceNode/loopStart) {{optional_inline}}
  - : Ein gleitkommawert, der die Zeit in Sekunden angibt, zu der die Wiedergabe des [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) beginnen muss, wenn `loop` auf `true` gesetzt ist. Sein Standardwert ist `0` (was bedeutet, dass am Anfang jeder Schleife die Wiedergabe am Anfang des Audiobuffers beginnt).
- [`AudioBufferSourceNode.loopEnd`](/de/docs/Web/API/AudioBufferSourceNode/loopEnd) {{optional_inline}}
  - : Eine Fließkommazahl, die die Zeit in Sekunden angibt, zu der die Wiedergabe des [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) stoppt und zu der durch `loopStart` angegebenen Zeit zurückspringt, wenn `loop` auf `true` gesetzt ist. Der Standardwert ist `0`.
- [`AudioBufferSourceNode.playbackRate`](/de/docs/Web/API/AudioBufferSourceNode/playbackRate)
  - : Ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das den Geschwindigkeitsfaktor definiert, mit dem das Audioasset abgespielt wird, wobei ein Wert von 1,0 der natürlichen Abtastrate des Klangs entspricht. Da auf dem Ausgang keine Tonhöhenkorrektur angewendet wird, kann dies verwendet werden, um die Tonhöhe der Probe zu ändern. Dieser Wert wird mit `detune` kombiniert, um die endgültige Wiedergabegeschwindigkeit zu bestimmen.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode), und überschreibt die folgende Methode:_.

- [`start()`](/de/docs/Web/API/AudioBufferSourceNode/start)
  - : Plant die Wiedergabe der im Buffer enthaltenen Audiodaten oder beginnt sofort mit der Wiedergabe. Ermöglicht es außerdem, den Startversatz und die Spieldauer festzulegen.

## Beispiele

In diesem Beispiel erstellen wir einen zwei Sekunden langen Buffer, füllen ihn mit weißem Rauschen und spielen ihn dann mit einem `AudioBufferSourceNode` ab. Die Kommentare sollten klar erläutern, was vor sich geht.

> [!NOTE]
> Sie können den Code auch [live ausführen](https://mdn.github.io/webaudio-examples/audio-buffer/) oder [den Quellcode ansehen](https://github.com/mdn/webaudio-examples/blob/main/audio-buffer/index.html).

```js
const audioCtx = new AudioContext();

// Create an empty three-second stereo buffer at the sample rate of the AudioContext
const myArrayBuffer = audioCtx.createBuffer(
  2,
  audioCtx.sampleRate * 3,
  audioCtx.sampleRate,
);

// Fill the buffer with white noise;
//just random values between -1.0 and 1.0
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
> Ein Beispiel für `decodeAudioData()` finden Sie auf der Seite [`AudioContext.decodeAudioData()`](/de/docs/Web/API/BaseAudioContext/decodeAudioData).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
