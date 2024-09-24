---
title: AudioBufferSourceNode
slug: Web/API/AudioBufferSourceNode
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("Web Audio API")}}

Die **`AudioBufferSourceNode`** Schnittstelle ist ein {{domxref("AudioScheduledSourceNode")}}, das eine Audioquelle darstellt, die aus im Speicher befindlichen Audiodaten besteht, die in einem {{domxref("AudioBuffer")}} gespeichert sind.

Diese Schnittstelle ist besonders nützlich für die Wiedergabe von Audio, das besonders strenge Anforderungen an die Timing-Genauigkeit stellt, zum Beispiel für Klänge, die einem bestimmten Rhythmus folgen müssen und im Speicher gehalten werden können, anstatt von der Festplatte oder dem Netzwerk abgespielt zu werden. Um Klänge abzuspielen, die genaues Timing erfordern, aber vom Netzwerk gestreamt oder von der Festplatte abgespielt werden müssen, verwenden Sie einen {{domxref("AudioWorkletNode")}}, um dessen Wiedergabe zu implementieren.

{{InheritanceDiagram}}

Ein `AudioBufferSourceNode` hat keine Eingänge und genau einen Ausgang, der die gleiche Anzahl von Kanälen hat wie der `AudioBuffer`, der durch seine {{domxref("AudioBufferSourceNode.buffer", "buffer")}} Eigenschaft angegeben ist. Wenn kein Puffer festgelegt ist – das heißt, wenn `buffer` `null` ist – enthält der Ausgang einen einzigen Kanal der Stille (jede Probe ist 0).

Ein `AudioBufferSourceNode` kann nur einmal abgespielt werden; nach jedem Aufruf von {{domxref("AudioBufferSourceNode.start", "start()")}} müssen Sie einen neuen Knoten erstellen, wenn Sie denselben Klang erneut abspielen möchten. Glücklicherweise sind diese Knoten sehr kostengünstig zu erstellen, und die eigentlichen `AudioBuffer`s können für mehrere Wiedergaben des Klangs wiederverwendet werden. Tatsächlich können Sie diese Knoten in einer „Feuern und Vergessen“-Manier verwenden: Erstellen Sie den Knoten, rufen Sie `start()` auf, um das Abspielen des Klangs zu beginnen, und kümmern Sie sich nicht darum, eine Referenz darauf zu halten. Er wird automatisch zu einem geeigneten Zeitpunkt garbage-collected, was nicht vor einem bestimmten Zeitpunkt nach dem Ende der Klangwiedergabe sein wird.

Mehrere Aufrufe von {{domxref("AudioScheduledSourceNode/stop", "stop()")}} sind erlaubt. Der jüngste Aufruf ersetzt den vorherigen, wenn der `AudioBufferSourceNode` nicht bereits das Ende des Puffers erreicht hat.

![Der AudioBufferSourceNode nimmt den Inhalt eines AudioBuffers un](webaudioaudiobuffersourcenode.png)

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
      <td>definiert durch den zugehörigen {{domxref("AudioBuffer")}}</td>
    </tr>
  </tbody>
</table>

## Konstruktor

- {{domxref("AudioBufferSourceNode.AudioBufferSourceNode", "AudioBufferSourceNode()")}}
  - : Erstellt und gibt ein neues `AudioBufferSourceNode` Objekt zurück. Alternativ können Sie die {{domxref("BaseAudioContext.createBufferSource()")}} Fabrikmethode verwenden; siehe [Erstellen eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("AudioScheduledSourceNode")}}_.

- {{domxref("AudioBufferSourceNode.buffer")}}
  - : Ein {{domxref("AudioBuffer")}}, der das abzuspielende Audioelement definiert, oder bei Einstellung auf den Wert `null` einen einzelnen Stillekanal definiert (bei dem jede Probe 0.0 ist).
- {{domxref("AudioBufferSourceNode.detune")}}
  - : Ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) {{domxref("AudioParam")}}, das die Verstimmung der Wiedergabe in [Cents](https://en.wikipedia.org/wiki/Cent_%28music%29) darstellt. Dieser Wert wird mit `playbackRate` kombiniert, um die Geschwindigkeit zu bestimmen, mit der der Klang abgespielt wird. Sein Standardwert ist `0` (was keine Verstimmung bedeutet) und sein nomineller Bereich ist -∞ bis ∞.
- {{domxref("AudioBufferSourceNode.loop")}}
  - : Ein boolesches Attribut, das angibt, ob das Audioelement bei Erreichen des Endes des {{domxref("AudioBuffer")}} wiederholt werden muss. Sein Standardwert ist `false`.
- {{domxref("AudioBufferSourceNode.loopStart")}} {{optional_inline}}
  - : Ein Gleitkommawert, der die Zeit in Sekunden angibt, bei der die Wiedergabe des {{domxref("AudioBuffer")}} beginnt, wenn `loop` `true` ist. Sein Standardwert ist `0` (was bedeutet, dass am Anfang jeder Schleife die Wiedergabe am Anfang des Audiobuffers beginnt).
- {{domxref("AudioBufferSourceNode.loopEnd")}} {{optional_inline}}
  - : Eine Gleitkommazahl, die die Zeit in Sekunden angibt, bei der die Wiedergabe des {{domxref("AudioBuffer")}} stoppt und zur Zeit angegeben durch `loopStart` zurückschaltet, wenn `loop` `true` ist. Der Standardwert ist `0`.
- {{domxref("AudioBufferSourceNode.playbackRate")}}
  - : Ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) {{domxref("AudioParam")}}, das den Geschwindigkeitsfaktor definiert, mit dem das Audioelement abgespielt wird, wobei ein Wert von 1.0 die natürliche Abtastrate des Sounds ist. Da keine Tonhöhenkorrektur auf die Ausgabe angewendet wird, kann dies verwendet werden, um die Tonhöhe des Samples zu ändern. Dieser Wert wird mit `detune` kombiniert, um die endgültige Wiedergabegeschwindigkeit zu bestimmen.

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, {{domxref("AudioScheduledSourceNode")}}, und überschreibt die folgende Methode:_.

- {{domxref("AudioBufferSourceNode.start", "start()")}}
  - : Geplante Wiedergabe der im Puffer enthaltenen Audiodaten, oder beginnt die Wiedergabe sofort. Ermöglicht auch das Einstellen des Startoffsets und der Spieldauer.

## Beispiele

In diesem Beispiel erstellen wir einen zwei Sekunden langen Puffer, füllen ihn mit weißem Rauschen und spielen ihn dann mit einem `AudioBufferSourceNode`. Die Kommentare sollten klar erklären, was vor sich geht.

> [!NOTE]
> Sie können den [Code live ausführen](https://mdn.github.io/webaudio-examples/audio-buffer/) oder [den Quellcode ansehen](https://github.com/mdn/webaudio-examples/blob/main/audio-buffer/index.html).

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
> Für ein Beispiel zu `decodeAudioData()`, siehe die Seite {{domxref("BaseAudioContext/decodeAudioData", "AudioContext.decodeAudioData()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
