---
title: "AudioBufferSourceNode: Detune-Eigenschaft"
short-title: Detune
slug: Web/API/AudioBufferSourceNode/detune
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("Web Audio API")}}

Die **`detune`**-Eigenschaft des
{{domxref("AudioBufferSourceNode")}}-Interfaces ist ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) {{domxref("AudioParam")}},
das die Verstimmung der Oszillation in [Cents](https://en.wikipedia.org/wiki/Cent_%28music%29) darstellt.

Zum Beispiel stimmen die Werte +100 und -100 die Quelle um einen Halbton aufwärts oder abwärts,
während +1200 und -1200 sie um eine Oktave aufwärts oder abwärts stimmen.

## Wert

Ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) {{domxref("AudioParam")}},
dessen Wert die Verstimmung der Oszillation in [Cents](https://en.wikipedia.org/wiki/Cent_%28music%29) angibt.

> [!NOTE]
> Obwohl das zurückgegebene `AudioParam` schreibgeschützt ist,
> ist der von ihm dargestellte Wert dies nicht.

## Beispiele

```js
const audioCtx = new AudioContext();

const channelCount = 2;
const frameCount = audioCtx.sampleRate * 2.0; // 2 Sekunden

const myArrayBuffer = audioCtx.createBuffer(
  channelCount,
  frameCount,
  audioCtx.sampleRate,
);

for (let channel = 0; channel < channelCount; channel++) {
  const nowBuffering = myArrayBuffer.getChannelData(channel);
  for (let i = 0; i < frameCount; i++) {
    nowBuffering[i] = Math.random() * 2 - 1;
  }
}

const source = audioCtx.createBufferSource();
source.buffer = myArrayBuffer;
source.connect(audioCtx.destination);
source.detune.value = 100; // Wert in Cents
source.start();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
