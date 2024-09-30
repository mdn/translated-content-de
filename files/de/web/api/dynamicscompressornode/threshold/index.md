---
title: "DynamicsCompressorNode: threshold-Eigenschaft"
short-title: threshold
slug: Web/API/DynamicsCompressorNode/threshold
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{ APIRef("Web Audio API") }}

Die `threshold`-Eigenschaft des [`DynamicsCompressorNode`](/de/docs/Web/API/DynamicsCompressorNode)-Interfaces ist ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das den Dezibelwert repräsentiert, ab dem die Kompression wirksam wird.

Der Standardwert der `threshold`-Eigenschaft ist `-24` und kann zwischen `-100` und `0` eingestellt werden.

![Der Threshold-Wert hat keinen Einfluss auf Signale, die niedriger als sein Wert sind, führt jedoch zur Lautstärkereduzierung bei Signalen, die stärker als sein Wert sind.](webaudiothreshold.png)

## Wert

Ein [`AudioParam`](/de/docs/Web/API/AudioParam).

> [!NOTE]
> Obwohl das zurückgegebene [`AudioParam`](/de/docs/Web/API/AudioParam) schreibgeschützt ist, ist der Wert, den es repräsentiert, dies nicht.

## Beispiele

```js
const audioCtx = new AudioContext();
const compressor = audioCtx.createDynamicsCompressor();
compressor.threshold.value = -50;
```

Sehen Sie [`BaseAudioContext.createDynamicsCompressor()`](/de/docs/Web/API/BaseAudioContext/createDynamicsCompressor#examples) für vollständiger Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
