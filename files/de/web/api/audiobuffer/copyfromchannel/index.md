---
title: "AudioBuffer: copyFromChannel()-Methode"
short-title: copyFromChannel()
slug: Web/API/AudioBuffer/copyFromChannel
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

Die **`copyFromChannel()`**-Methode des [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)-Interfaces kopiert die Audiodatenproben vom angegebenen Kanal des `AudioBuffer` in ein angegebenes {{jsxref("Float32Array")}}.

## Syntax

```js-nolint
copyFromChannel(destination, channelNumber, startInChannel)
```

### Parameter

- `destination`
  - : Ein {{jsxref("Float32Array")}}, in das die Proben des Kanals kopiert werden.
- `channelNumber`
  - : Die Kanalnummer des aktuellen `AudioBuffer`, aus dem die Kanaldaten kopiert werden sollen.
- `startInChannel` {{optional_inline}}
  - : Ein optionaler Versatz in den Puffer des Quellkanals, von dem aus mit dem Kopieren der Proben begonnen werden soll. Wenn nicht angegeben, wird standardmäßig ein Wert von 0 (der Beginn des Puffers) angenommen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `indexSizeError`

  - : Einer der Eingabewerte hat einen Wert, der außerhalb des akzeptierten Bereichs liegt:

    - Der Wert von `channelNumber` gibt eine Kanalnummer an, die nicht existiert (d. h. er ist größer oder gleich dem Wert von [`numberOfChannels`](/de/docs/Web/API/AudioBuffer/numberOfChannels) auf dem Kanal).
    - Der Wert von `startInChannel` liegt außerhalb des aktuellen Bereichs der bereits im Quellpuffer vorhandenen Proben; das heißt, er ist größer als dessen aktuelle [`length`](/de/docs/Web/API/AudioBuffer/length).

## Beispiele

Dieses Beispiel erstellt einen neuen Audiopuffer und kopiert die Proben aus einem anderen Kanal hinein.

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
