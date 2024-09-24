---
title: "AudioBuffer: copyFromChannel()-Methode"
short-title: copyFromChannel()
slug: Web/API/AudioBuffer/copyFromChannel
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

Die **`copyFromChannel()`**-Methode des {{domxref("AudioBuffer")}}-Interfaces kopiert die Audiodaten von dem angegebenen Kanal des `AudioBuffer` in ein spezifiziertes {{jsxref("Float32Array")}}.

## Syntax

```js-nolint
copyFromChannel(destination, channelNumber, startInChannel)
```

### Parameter

- `destination`
  - : Ein {{jsxref("Float32Array")}}, in das die Samples des Kanals kopiert werden.
- `channelNumber`
  - : Die Kanalnummer des aktuellen `AudioBuffer`, von dem die Kanaldaten kopiert werden sollen.
- `startInChannel` {{optional_inline}}
  - : Ein optionaler Offset in den Puffer des Quellkanals, ab dem die Samples kopiert werden. Wenn nicht angegeben, wird standardmäßig ein Wert von 0 (der Beginn des Puffers) angenommen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `indexSizeError`

  - : Einer der Eingabeparameter hat einen Wert, der außerhalb des akzeptierten Bereichs liegt:

    - Der Wert von `channelNumber` gibt eine Kanalnummer an, die nicht existiert (d. h., er ist größer oder gleich dem Wert von {{domxref("AudioBuffer.numberOfChannels", "numberOfChannels")}} auf dem Kanal).
    - Der Wert von `startInChannel` liegt außerhalb des aktuellen Bereichs der Samples, die bereits im Quellpuffer existieren; d. h., er ist größer als die aktuelle {{domxref("AudioBuffer.length", "Länge")}}.

## Beispiele

Dieses Beispiel erstellt einen neuen Audiopuffer und kopiert dann die Samples von einem anderen Kanal hinein.

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
