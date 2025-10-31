---
title: AudioBufferSourceNode
slug: Web/API/AudioBufferSourceNode
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Web Audio API")}}

Das **`AudioBufferSourceNode`** Interface ist ein [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode), das eine Audioquelle darstellt, die aus In-Memory-Audiodaten besteht, die in einem [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) gespeichert sind.

Dieses Interface ist besonders nützlich für die Wiedergabe von Audio, das besonders strenge Timing-Genauigkeitsanforderungen hat, z. B. für Klänge, die mit einem bestimmten Rhythmus übereinstimmen müssen und im Speicher gehalten werden können, anstatt von der Festplatte oder dem Netzwerk abgespielt zu werden. Um Klänge abzuspielen, die präzises Timing erfordern, aber aus dem Netzwerk gestreamt oder von der Festplatte abgespielt werden müssen, verwenden Sie ein [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) zur Implementierung der Wiedergabe.

{{InheritanceDiagram}}

Ein `AudioBufferSourceNode` hat keine Eingänge und genau einen Ausgang, der dieselbe Anzahl von Kanälen hat wie das `AudioBuffer`, das durch die [`buffer`](/de/docs/Web/API/AudioBufferSourceNode/buffer) Eigenschaft angegeben wird. Wenn kein Puffer gesetzt ist – das heißt, wenn `buffer` `null` ist – enthält der Ausgang einen einzelnen Kanal der Stille (jedes Sample ist 0).

Ein `AudioBufferSourceNode` kann nur einmal abgespielt werden; nach jedem Aufruf von [`start()`](/de/docs/Web/API/AudioBufferSourceNode/start) müssen Sie einen neuen Knoten erstellen, wenn Sie denselben Klang erneut abspielen möchten. Glücklicherweise sind diese Knoten sehr kostengünstig zu erstellen, und die tatsächlichen `AudioBuffer` können für mehrere Abspiele des Klangs wiederverwendet werden. Tatsächlich können Sie diese Knoten in einer "fire and forget"-Weise verwenden: Erstellen Sie den Knoten, rufen Sie `start()` auf, um die Wiedergabe des Klangs zu starten, und kümmern Sie sich nicht einmal darum, eine Referenz darauf zu behalten. Er wird automatisch zu einem geeigneten Zeitpunkt vom Garbage Collector gesammelt, was erst nach dem Abspielen des Klangs der Fall sein wird.

Mehrere Aufrufe von [`stop()`](/de/docs/Web/API/AudioScheduledSourceNode/stop) sind erlaubt. Der letzte Aufruf ersetzt den vorherigen, wenn der `AudioBufferSourceNode` noch nicht das Ende des Puffers erreicht hat.

![Das AudioBufferSourceNode nimmt den Inhalt eines AudioBuffer und m](webaudioaudiobuffersourcenode.png)

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
      <td>definiert durch das zugeordnete [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)</td>
    </tr>
  </tbody>
</table>

## Konstruktor

- [`AudioBufferSourceNode()`](/de/docs/Web/API/AudioBufferSourceNode/AudioBufferSourceNode)
  - : Erstellt und gibt ein neues `AudioBufferSourceNode` Objekt zurück. Alternativ können Sie die [`BaseAudioContext.createBufferSource()`](/de/docs/Web/API/BaseAudioContext/createBufferSource) Fabrikmethode verwenden; siehe [Erstellen eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)_.

- [`AudioBufferSourceNode.buffer`](/de/docs/Web/API/AudioBufferSourceNode/buffer)
  - : Ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), das das abzuspielende Audio-Asset definiert, oder wenn auf den Wert `null` gesetzt, einen einzelnen Kanal der Stille definiert (bei dem jedes Sample 0.0 ist).
- [`AudioBufferSourceNode.detune`](/de/docs/Web/API/AudioBufferSourceNode/detune)
  - : Ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das die Verstimmung der Wiedergabe in [Cents](https://en.wikipedia.org/wiki/Cent_%28music%29) darstellt. Dieser Wert wird mit `playbackRate` kombiniert, um die Geschwindigkeit zu bestimmen, mit der der Klang abgespielt wird. Sein Standardwert ist `0` (was keine Verstimmung bedeutet), und sein Nennbereich ist -∞ bis ∞.
- [`AudioBufferSourceNode.loop`](/de/docs/Web/API/AudioBufferSourceNode/loop)
  - : Ein Boolean-Attribut, das anzeigt, ob das Audio-Asset wiedergegeben werden muss, wenn das Ende des [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) erreicht ist. Sein Standardwert ist `false`.
- [`AudioBufferSourceNode.loopStart`](/de/docs/Web/API/AudioBufferSourceNode/loopStart) {{optional_inline}}
  - : Ein Gleitkommawert, der die Zeit in Sekunden angibt, zu der die Wiedergabe des [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) beginnen muss, wenn `loop` `true` ist. Sein Standardwert ist `0` (was bedeutet, dass zu Beginn jeder Schleife die Wiedergabe am Anfang des Audiopuffers beginnt).
- [`AudioBufferSourceNode.loopEnd`](/de/docs/Web/API/AudioBufferSourceNode/loopEnd) {{optional_inline}}
  - : Eine Gleitkommazahl, die die Zeit in Sekunden angibt, zu der die Wiedergabe des [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) stoppt und zur durch `loopStart` angegebenen Zeit zurückkehrt, wenn `loop` `true` ist. Der Standardwert ist `0`.
- [`AudioBufferSourceNode.playbackRate`](/de/docs/Web/API/AudioBufferSourceNode/playbackRate)
  - : Ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), der den Geschwindigkeitsfaktor definiert, mit dem das Audio-Asset abgespielt wird, wobei ein Wert von 1.0 der natürlichen Abtastrate des Klangs entspricht. Da keine Tonhöhenkorrektur auf den Ausgang angewendet wird, kann dies verwendet werden, um die Tonhöhe des Samples zu ändern. Dieser Wert wird mit `detune` kombiniert, um die endgültige Wiedergaberate zu bestimmen.

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode), und überschreibt die folgende Methode:_.

- [`start()`](/de/docs/Web/API/AudioBufferSourceNode/start)
  - : Plant die Wiedergabe der im Puffer enthaltenen Audiodaten oder beginnt die Wiedergabe sofort. Zusätzlich können der Startversatz und die Spieldauer eingestellt werden.

## Beispiele

In diesem Beispiel erstellen wir einen zwei Sekunden langen Puffer, füllen ihn mit weißem Rauschen und spielen ihn dann mit einem `AudioBufferSourceNode` ab. Die Kommentare sollten klar erklären, was vor sich geht.

> [!NOTE]
> Sie können den [Code auch live ausführen](https://mdn.github.io/webaudio-examples/audio-buffer/), oder [den Quellcode ansehen](https://github.com/mdn/webaudio-examples/blob/main/audio-buffer/index.html).

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
> Für ein `decodeAudioData()` Beispiel siehe die [`AudioContext.decodeAudioData()`](/de/docs/Web/API/BaseAudioContext/decodeAudioData) Seite.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
