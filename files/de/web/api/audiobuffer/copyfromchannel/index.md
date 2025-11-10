---
title: "AudioBuffer: copyFromChannel() Methode"
short-title: copyFromChannel()
slug: Web/API/AudioBuffer/copyFromChannel
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Web Audio API")}}

Die **`copyFromChannel()`** Methode des [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)-Interfaces kopiert die Audio-Sample-Daten vom angegebenen Kanal des `AudioBuffer` in ein angegebenes {{jsxref("Float32Array")}}.

## Syntax

```js-nolint
copyFromChannel(destination, channelNumber, startInChannel)
```

### Parameter

- `destination`
  - : Ein {{jsxref("Float32Array")}}, in das die Samples des Kanals kopiert werden sollen.
- `channelNumber`
  - : Die Kanalnummer des aktuellen `AudioBuffer`, aus dem die Kanaldaten kopiert werden sollen.
- `startInChannel` {{optional_inline}}
  - : Ein optionaler Offset in den Buffer des Quellkanals, ab dem das Kopieren der Samples beginnen soll. Wird kein Wert angegeben, wird standardmäßig ein Wert von 0 (der Anfang des Buffers) angenommen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `indexSizeError`
  - : Einer der Eingabeparameter hat einen Wert, der außerhalb des akzeptierten Bereichs liegt:
    - Der Wert von `channelNumber` spezifiziert eine Kanalnummer, die nicht existiert (das heißt, sie ist größer oder gleich dem Wert von [`numberOfChannels`](/de/docs/Web/API/AudioBuffer/numberOfChannels) auf dem Kanal).
    - Der Wert von `startInChannel` liegt außerhalb des aktuellen Bereichs der Samples, die bereits im Quellpuffer existieren; das heißt, er ist größer als die aktuelle [`length`](/de/docs/Web/API/AudioBuffer/length).

## Beispiele

Dieses Beispiel erstellt einen neuen Audiopuffer und kopiert dann die Samples von einem anderen Kanal in diesen.

```js
const myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);
const anotherArray = new Float32Array(length);
myArrayBuffer.copyFromChannel(anotherArray, 1, 0);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
