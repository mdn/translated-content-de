---
title: "AudioBuffer: Methode copyFromChannel()"
short-title: copyFromChannel()
slug: Web/API/AudioBuffer/copyFromChannel
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

Die Methode **`copyFromChannel()`** des [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) Interfaces kopiert die Audio-Sampledaten aus dem angegebenen Kanal des `AudioBuffer` in einen angegebenen {{jsxref("Float32Array")}}.

## Syntax

```js-nolint
copyFromChannel(destination, channelNumber, startInChannel)
```

### Parameter

- `destination`
  - : Ein {{jsxref("Float32Array")}} zum Kopieren der Samples des Kanals.
- `channelNumber`
  - : Die Kanalnummer des aktuellen `AudioBuffer`, aus dem die Kanal-Daten kopiert werden sollen.
- `startInChannel` {{optional_inline}}
  - : Ein optionaler Offset in den Puffer des Quellkanals, von dem aus begonnen werden soll, die Samples zu kopieren. Wenn nicht angegeben, wird standardmäßig ein Wert von 0 (der Anfang des Puffers) angenommen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `indexSizeError`

  - : Einer der Eingabeparameter hat einen Wert, der außerhalb des akzeptierten Bereichs liegt:

    - Der Wert von `channelNumber` gibt eine Kanalnummer an, die nicht existiert (das heißt, er ist größer als oder gleich dem Wert von [`numberOfChannels`](/de/docs/Web/API/AudioBuffer/numberOfChannels) auf dem Kanal).
    - Der Wert von `startInChannel` liegt außerhalb des aktuellen Bereichs der Samples, die bereits im Quellpuffer existieren; das heißt, er ist größer als seine aktuelle [`length`](/de/docs/Web/API/AudioBuffer/length).

## Beispiele

Dieses Beispiel erstellt einen neuen Audio-Puffer und kopiert dann die Samples aus einem anderen Kanal in diesen.

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
