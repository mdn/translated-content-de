---
title: "AudioBuffer: Methode copyToChannel()"
short-title: copyToChannel()
slug: Web/API/AudioBuffer/copyToChannel
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

Die Methode `copyToChannel()` des [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)-Interfaces kopiert die Samples aus dem Quellarray in den angegebenen Kanal des `AudioBuffer`.

## Syntax

```js-nolint
copyToChannel(source, channelNumber)
copyToChannel(source, channelNumber, startInChannel)
```

### Parameter

- `source`
  - : Ein {{jsxref("Float32Array")}}, aus dem die Kanaldaten kopiert werden.
- `channelNumber`
  - : Die Kanalnummer des aktuellen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), in die die Kanaldaten kopiert werden sollen. Wenn _channelNumber_ größer oder gleich [`AudioBuffer.numberOfChannels`](/de/docs/Web/API/AudioBuffer/numberOfChannels) ist, wird ein `INDEX_SIZE_ERR` ausgelöst.
- `startInChannel` {{optional_inline}}
  - : Ein optionaler Offset, zu dem die Daten kopiert werden sollen. Wenn _startInChannel_ größer als [`AudioBuffer.length`](/de/docs/Web/API/AudioBuffer/length) ist, wird ein `INDEX_SIZE_ERR` ausgelöst.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);
const anotherArray = new Float32Array();
// Copy channel data from second channel of myArrayBuffer.
myArrayBuffer.copyFromChannel(anotherArray, 1, 0);
// Copy data from anotherArray to first channel of myArrayBuffer. Both channels have the same data now.
myArrayBuffer.copyToChannel(anotherArray, 0, 0);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
