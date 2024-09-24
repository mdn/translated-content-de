---
title: "AudioBuffer: Methode copyToChannel()"
short-title: copyToChannel()
slug: Web/API/AudioBuffer/copyToChannel
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

Die `copyToChannel()`-Methode der {{ domxref("AudioBuffer") }}-Schnittstelle kopiert die Samples in den angegebenen Kanal des `AudioBuffer` aus dem Quellarray.

## Syntax

```js-nolint
copyToChannel(source, channelNumber)
copyToChannel(source, channelNumber, startInChannel)
```

### Parameter

- `source`
  - : Ein {{jsxref("Float32Array")}}, aus dem die Kanaldaten kopiert werden.
- `channelNumber`
  - : Die Kanalnummer des aktuellen {{domxref("AudioBuffer")}}, zu dem die Kanaldaten kopiert werden sollen. Wenn _channelNumber_ größer oder gleich der {{domxref("AudioBuffer.numberOfChannels")}} ist, wird ein `INDEX_SIZE_ERR` ausgelöst.
- `startInChannel` {{optional_inline}}
  - : Ein optionaler Versatz, um die Daten zu kopieren. Wenn _startInChannel_ größer als {{domxref("AudioBuffer.length")}} ist, wird ein `INDEX_SIZE_ERR` ausgelöst.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);
const anotherArray = new Float32Array();
// Kopiert Kanaldaten vom zweiten Kanal von myArrayBuffer.
myArrayBuffer.copyFromChannel(anotherArray, 1, 0);
// Kopiert Daten von anotherArray in den ersten Kanal von myArrayBuffer. Beide Kanäle haben jetzt die gleichen Daten.
myArrayBuffer.copyToChannel(anotherArray, 0, 0);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
