---
title: "AudioBuffer: Methode copyFromChannel()"
short-title: copyFromChannel()
slug: Web/API/AudioBuffer/copyFromChannel
l10n:
  sourceCommit: 884f798ff9f9880bb79c1cac18ce7adc736a1bf5
---

{{APIRef("Web Audio API")}}

Die Methode **`copyFromChannel()`** der Schnittstelle [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) kopiert die Audiosample-Daten aus dem angegebenen Kanal des `AudioBuffer` in ein angegebenes {{jsxref("Float32Array")}}.

## Syntax

```js-nolint
copyFromChannel(destination, channelNumber, startInChannel)
```

### Parameter

- `destination`
  - : Ein {{jsxref("Float32Array")}}, in das die Samples des Kanals kopiert werden.
- `channelNumber`
  - : Die Kanalnummer des aktuellen `AudioBuffer`, aus dem die Kanaldaten kopiert werden.
- `startInChannel` {{optional_inline}}
  - : Ein optionaler Versatz im Puffer des Quellkanals, ab dem Samples kopiert werden. Wenn kein Wert angegeben wird, gilt standardmäßig 0 (der Anfang des Puffers).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der Wert von `channelNumber` gibt eine Kanalnummer an, die nicht existiert (das heißt, er ist größer oder gleich dem Wert von [`numberOfChannels`](/de/docs/Web/API/AudioBuffer/numberOfChannels) des Puffers).

## Beispiele

Dieses Beispiel erstellt einen neuen Audiopuffer und kopiert anschließend die Samples aus einem anderen Kanal hinein.

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
