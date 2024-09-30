---
title: AudioBufferSourceNode
slug: Web/API/AudioBufferSourceNode
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("Web Audio API")}}

Die **`AudioBufferSourceNode`**-Schnittstelle ist ein [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode), das eine Audioquelle darstellt, die aus Audiodaten im Speicher besteht, welche in einem [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) gespeichert sind.

Diese Schnittstelle ist besonders nützlich für die Wiedergabe von Audio, das besonders strenge Timing-Genauigkeiten erfordert, wie zum Beispiel bei Tönen, die einem bestimmten Rhythmus folgen müssen und im Speicher gehalten werden können, anstatt von der Festplatte oder dem Netzwerk abgespielt zu werden. Für die Wiedergabe von Sounds, die eine genaue Timing-Steuerung erfordern, aber aus dem Netzwerk gestreamt oder von der Festplatte abgespielt werden müssen, verwenden Sie einen [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode), um seine Wiedergabe zu implementieren.

{{InheritanceDiagram}}

Ein `AudioBufferSourceNode` hat keine Eingänge und genau einen Ausgang, der die gleiche Anzahl an Kanälen wie der `AudioBuffer` hat, der durch seine [`buffer`](/de/docs/Web/API/AudioBufferSourceNode/buffer)-Eigenschaft angegeben ist. Wenn kein Buffer gesetzt ist, das heißt, wenn `buffer` `null` ist, enthält der Ausgang einen einzigen Kanal der Stille (jedes Sample ist 0).

Ein `AudioBufferSourceNode` kann nur einmal abgespielt werden; nach jedem Aufruf von [`start()`](/de/docs/Web/API/AudioBufferSourceNode/start) müssen Sie einen neuen Knoten erstellen, wenn Sie denselben Sound erneut abspielen möchten. Glücklicherweise sind diese Knoten sehr kostengünstig in der Erstellung, und die eigentlichen `AudioBuffer` können für mehrere Wiedergaben des Sounds wiederverwendet werden. Tatsächlich können Sie diese Knoten in einer "Fire-and-Forget"-Manier verwenden: Erstellen Sie den Knoten, rufen Sie `start()` auf, um den Sound abzuspielen, und machen Sie sich nicht einmal die Mühe, eine Referenz darauf zu halten. Er wird zu einem geeigneten Zeitpunkt automatisch vom Garbage Collector bereinigt, was erst nach Abschluss der Tonwiedergabe geschieht.

Mehrfache Aufrufe von [`stop()`](/de/docs/Web/API/AudioScheduledSourceNode/stop) sind erlaubt. Der neueste Aufruf ersetzt den vorherigen, falls der `AudioBufferSourceNode` nicht bereits das Ende des Buffers erreicht hat.

![Der AudioBufferSourceNode nimmt den Inhalt eines AudioBuffers und w](webaudioaudiobuffersourcenode.png)

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
      <td>definiert durch den zugeordneten [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)</td>
    </tr>
  </tbody>
</table>

## Konstruktor

- [`AudioBufferSourceNode()`](/de/docs/Web/API/AudioBufferSourceNode/AudioBufferSourceNode)
  - : Erstellt und gibt ein neues `AudioBufferSourceNode`-Objekt zurück. Alternativ können Sie die Factory-Methode [`BaseAudioContext.createBufferSource()`](/de/docs/Web/API/BaseAudioContext/createBufferSource) verwenden; siehe [Erstellen eines AudioNodes](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)_.

- [`AudioBufferSourceNode.buffer`](/de/docs/Web/API/AudioBufferSourceNode/buffer)
  - : Ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), der das abzuspielende Audio-Asset definiert oder bei einem Wert von `null` einen einzigen Kanal der Stille definiert (in dem jedes Sample 0,0 ist).
- [`AudioBufferSourceNode.detune`](/de/docs/Web/API/AudioBufferSourceNode/detune)
  - : Ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das die Verstimmung der Wiedergabe in [Cents](https://de.wikipedia.org/wiki/Cent_(Musik)) darstellt. Dieser Wert wird mit `playbackRate` kombiniert, um die Geschwindigkeit zu bestimmen, mit der der Sound abgespielt wird. Sein Standardwert ist `0` (was keine Verstimmung bedeutet), und der nominelle Bereich ist -∞ bis ∞.
- [`AudioBufferSourceNode.loop`](/de/docs/Web/API/AudioBufferSourceNode/loop)
  - : Ein Boolean-Attribut, das angibt, ob das Audio-Asset erneut abgespielt werden muss, wenn das Ende des [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) erreicht ist. Sein Standardwert ist `false`.
- [`AudioBufferSourceNode.loopStart`](/de/docs/Web/API/AudioBufferSourceNode/loopStart) {{optional_inline}}
  - : Ein Gleitkommawert, der die Zeit in Sekunden angibt, zu der die Wiedergabe des [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) beginnen muss, wenn `loop` `true` ist. Sein Standardwert ist `0` (was bedeutet, dass zu Beginn jeder Schleife die Wiedergabe am Anfang des Audio-Buffers beginnt).
- [`AudioBufferSourceNode.loopEnd`](/de/docs/Web/API/AudioBufferSourceNode/loopEnd) {{optional_inline}}
  - : Eine Gleitkommazahl, die die Zeit in Sekunden angibt, zu der die Wiedergabe des [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) stoppt und an die durch `loopStart` angegebene Zeit zurückkehrt, falls `loop` `true` ist. Der Standardwert ist `0`.
- [`AudioBufferSourceNode.playbackRate`](/de/docs/Web/API/AudioBufferSourceNode/playbackRate)
  - : Ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das den Geschwindigkeitsfaktor definiert, mit dem das Audio-Asset abgespielt wird, wobei ein Wert von 1,0 der natürlichen Samplerate des Sounds entspricht. Da keine Tonhöhenkorrektur auf den Ausgang angewendet wird, kann dies verwendet werden, um die Tonhöhe des Samples zu ändern. Dieser Wert wird mit `detune` kombiniert, um die endgültige Wiedergabegeschwindigkeit zu bestimmen.

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode), und überschreibt die folgende Methode:_.

- [`start()`](/de/docs/Web/API/AudioBufferSourceNode/start)
  - : Plant die Wiedergabe der im Buffer enthaltenen Audiodaten oder beginnt sofort mit der Wiedergabe. Zusätzlich ermöglicht es das Setzen des Startoffsets und der Wiedergabedauer.

## Beispiele

In diesem Beispiel erstellen wir einen Zwei-Sekunden-Buffer, füllen ihn mit weißem Rauschen und spielen ihn dann mit einem `AudioBufferSourceNode` ab. Die Kommentare sollten klar erklären, was geschieht.

> [!NOTE]
> Sie können den [Code auch live ausführen](https://mdn.github.io/webaudio-examples/audio-buffer/) oder den [Quellcode ansehen](https://github.com/mdn/webaudio-examples/blob/main/audio-buffer/index.html).

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
> Für ein Beispiel zu `decodeAudioData()` siehe die Seite [`AudioContext.decodeAudioData()`](/de/docs/Web/API/BaseAudioContext/decodeAudioData).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
